function extractIds(entries){
  var ids = entries.map(function callback(entry, index, array) {
    return entry.link.split("/")[4];
  });
  return ids.join(";")
}

function renderFeed(rssEntries, apiQuestions, container) {
  console.log(rssEntries);
  console.log(apiQuestions);
  for (var i = 0; i < rssEntries.length; i++) {
    var entry = rssEntries[i];
    var apiQuestion = apiQuestions[i];
    var div = document.createElement("div");
    div.className = "soQuestion";
    var html = "<h2><img class='soAvatar' title='" + apiQuestion.owner.display_name + "' src='"+ apiQuestion.owner.profile_image +"'> ";
    html += "<a target='_blank' href='" + entry.link + "'>" + entry.title + "</a></h2>";
    html += "<p>" + entry.content + "</p>";
    html += "<div>";
    if (apiQuestion.is_answered) {
      html += "<span class='soAnswered' title='This question has an accepted answer'>Answers: " + apiQuestion.answer_count + "</span>"
    } else {
      html += "<span class='soStats'>Answers: " + apiQuestion.answer_count + "</span>"
    }
    for (var j = 0; j < entry.categories.length; j++) {
      var category = entry.categories[j];
      html += "<span class='soTag'>" + category + "</span>"
    }
    html += "</div>";
    div.innerHTML = html;
    container.appendChild(div);
  }
  // syntax highlighting
  var codeBlocks = document.getElementsByTagName('pre');
  for (var k = 0; k < codeBlocks.length; k++) {
    codeBlocks[k].className += ' prettyprint';
  }
  PR.prettyPrint();
}

function loadFeed(tags) {
  document.getElementById('soSettings').hidden = true;
  document.getElementById('soFeed').hidden = false;
  google.load("feeds", "1");
  function initialize() {
    var feed = new google.feeds.Feed("https://stackoverflow.com/feeds/tag/" + encodeURIComponent(tags));
    var container = document.getElementById("soFeed");
    container.innerHTML = "Loading...";
    feed.load(function (result) {
      if (!result.error) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "https://api.stackexchange.com/2.2/questions/" + extractIds(result.feed.entries) + "?order=desc&sort=activity&site=stackoverflow", true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          container.innerHTML = "";
          var status = xhr.status;
          if (status === 200) {
            renderFeed(result.feed.entries, xhr.response.items, container)
          } else {
            // todo: error handling
          }
        };
        xhr.send();
      } else {
        // todo: error handling
      }
    });
  }
  google.setOnLoadCallback(initialize);
}