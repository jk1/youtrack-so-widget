# Stack Overflow Questions Widget

Provides Stack Overflow questions digest by tags on YouTrack bug tracker dashboard.
Works in YouTrack 2018.1+, Hub 2018.1+, Upsource 2018.1+. 

![](https://raw.githubusercontent.com/jk1/youtrack-so-widget/master/widget.png) 

# Development

1. NodeJS and NPM are required
2. Install http-server `npm i http-server -g`
3. Run it in the project folder `http-server . --cors -c-1 -p 9033`
4. If you have YouTrack or Hub running over HTTPS, you need to host your widget over HTTPS as well. 
5. Open widgets playground (/dashboard/widgets-playground) and enter your devserver address.

# Distribution

Widget is available in [JetBrains Plugin Repository](https://plugins.jetbrains.com/plugin/10348-stack-overflow-widget)

# License

Widget is licensed under Apache 2.0 license.
