/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object, 
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "Integrating Web Content",
		"%l_lessontitle": "Integrating Web Content",
		"%l_subtitle": "Building Native Mobile Apps With Appcelerator Titanium",
		"%l_slidenote_titleslide": "<b>Module time: 60 mins</b><br/>(Teaching: 15 mins, lab: 45 mins)",
		"%l_agenda_title": "Agenda",
		
		"%l_agenda1": "Integrating the WebView component",
		"%l_agenda2": "WebView gotchas",
		"%l_agenda3": "Novel uses of the WebView",
		"%l_agenda4": "Lab Exercise",
		"%l_slidenote_agenda": "",

		"%l_integrating_web": "Integrating Web Content",
		"%l_html_embed": "HTML/CSS are embedded in much data on the web",
		"%l_html_often": "HTML/CSS are often the only/best way to accomplish certain tasks:",
		"%l_rendering": "Rendering HTML/CSS (duh)",
		"%l_canvas": "Canvas (animations)",
		"%l_integrating": "Integrating existing web-based tools",
		"%l_walking": "Walking HTML documents",
		"%l_slidenote_integrating_web": "Many business-use cases for using HTML/CSS in your app<br>Might be easiest way to go<br>Canvas for animations<br>Existing libraries (graphing, jquery)<br>DOM manipulations and access",

		"%l_remote_web": "Remote Web Content",
		"%l_uses_might": "Uses might include pulling in blog content from an RSS feed (hint) or re-purposing (semi) static content from an existing site",
		"%l_slidenote_remote_web": "Static / existing web pages<br>Dynamic data from a CMS or web service<br>Embed a web view anywhere in your app (views, windows)",

		"%l_local_web": "Local Web Content",
		"%l_webkit_can": "Webkit can sometimes do something we can't, or we need to re-use existing code (ours or someone else's) - in those cases, we can ship HTML/CSS/JS with our app",
		"%l_slidenote_local_web": "Integrated webkit has lots of power and capabilities<br>Easy way to embed custom UI, pre-existing content, formatted text<br>Point URL to local web content file<br>Loaded relative to Resources directory",

		"%l_local_web_inline": "Local Web Content - Inline",
		"%l_sometimes": "Sometimes HTML markup is the best way to display small chunks of text or links (Android handles both natively)",
		"%l_slidenote_local_web_inline": "Use HTML property for inline content<br>Native Android support for HTML in labels and some other components<br>E.g. linkify() method will turn links and phone numbers into clickable links<br>See the API docs for more information",

		"%l_communicating_wrapper": "Communicating With The Wrapper",
		"%l_remote_web_access": "Remote web content has no access to Titanium APIs",
		"%l_limited": "Limited Titanium API access within local web pages:",
		"%l_logging": "Logging APIs (Ti.API.info and friends)",
		"%l_app_level": "Application Level Events<br> (Ti.App.fireEvent/addEventListener)",
		"%l_native_api": "Native APIs must be accessed indirectly via application level events",
		"%l_slidenote_communicating_wrapper": "Embedded webview is its own execution context<br>Use custom events to communicate with rest of the app<br>For example, geolocation: grab data in native app, fire event passing results to webview<br>Remote content doesn't have access to Ti APIs<br>But you can inject some JS into a remote page to give limited access",

		"%l_webview_gotchas": "WebView Gotchas",
		"%l_among_the": "Among the most expensive components to create",
		"%l_should_not": "Should not be embedded in other scrollable views",
		"%l_common_misuse": "Common misuse - inside TableViewRows (bad performance)",
		"%l_its_possible": "It is possible to implement your whole UI in HTML/CSS, but native UI is what your users expect",
		"%l_cant_download": "Can't download/run unapproved code from a server",
		"%l_slidenote_webview_gotchas": "Scrollable views, table views &mdash; Touch events can get messed up, bad performance",

		"%l_novel_webview": "Novel Uses of the WebView",
		"%l_display_text": "Display text with embedded links (think Twitter client)",
		"%l_display_pdf": "Display PDF documents and more (iOS, see next slide)",
		"%l_retrieve_parse": "Retrieve and parse HTML using the DOM (easier than in native Ti code, where you'd need to do string gymnastics)",
		"%l_longer_forms": "Longer forms on iOS (next/previous buttons, auto resizing)",
		"%l_slidenote_novel_webview": "iOS &mdash; view PDF (built into Safari) on Android, has to be done through 3rd party app<br>Parsing HTML &mdash; use jquery or other libraries to walk the DOM<br>Forms - auto resizing, auto-scrolling, auto 'Next' button on iOS to ease data entry.",

		"%l_embedded_docs": "Embedded Documents on iOS",
		"%l_webview_ios": "WebView on iOS can display embedded:",
		"%l_excel": "Excel",
		"%l_powerpoint": "Excel",
		"%l_keynote": "Keynote",
		"%l_word": "Word",
		"%l_numbers": "Numbers",
		"%l_rtf": "RTF",
		"%l_pages": "Pages",
		"%l_rtf_dir": "RTF Directory",
		"%l_pdf": "PDF",
		"%l_slidenote_embedded_docs": "Source: http://developer.apple.com/library/ios/#qa/qa1630/_index.html",

		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",

		"%l_lab_goals": "Lab Goals",
		"%l_requirement": "Requirements:",
		"%l_pull_in": "Pull in an RSS feed and place the results in a TableView",
		"%l_create_an": "Create an 'about' page using local HTML",
		"%l_demo_wiki": "Demo and Wiki URL",
		"%l_slidenote_lab_goals": "Demo &mdash; Lab285:</b><ol><li>Show scrolling list of news items</li><li>Click one to show web view</li><li>Click About tab to show local HTML data</li></ol><br/>The UI, network, and RSS feed parsing is done already.",

		"%l_lab_exercise": "Lab Exercise",
		"%l_slidenote_lab_exercise": "<b>Code Walk through &mdash; TiBH285</b><br><ul><li>RSSWindow &mdash; table event listener, e.rowData argument, opening modal window, also App-level event listener to load articles once data is retrieved from the network</li><li>ArticleWindow &mdash; 'article' parameter, webview url property</li><li>AboutWindow &mdash; webview url property</li></ul>"
	}
});