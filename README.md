# Stack Overflow Questions Widget

Provides Stack Overflow questions digest by tags on YouTrack bug tracker dashboard.

![](https://raw.githubusercontent.com/jk1/youtrack-so-widget/master/widget.png)

Requires YouTrack 2017.3 or higher. 

# Development

1. NodeJS and NPM are required
2. Install http-server `npm i http-server -g`
3. Run it in example folder `http-server . --cors -c-1 -p 9033`
4. If you have Hub running over HTTPS, you need to host your widget over HTTPS as well. 
[https://ngrok.com](https://ngrok.com) should help.
5. Open widgets playground (/dashboard/widgets-playground) and enter your devserver address.

# Packaging

1. Just archive all content as ZIP file and it is ready to upload (/widgets)

# License

Widget is licensed under Apache 2.0 license.
