/*
	Localization strings file. To translate, copy the entire "en-US" branch, paste in as new member of the object,
	set its name to be the two-letter language code, and translate each string.
	As shown, strings can include simple HTML.
*/
String.toLocaleString({
	"en-US": {
		"%l_filetitle": "UI Fundamentals",
		"%l_lessontitle": "UI Fundamentals",
		"%l_slidenote_titleslide": "<b>Module time: 1 hour, 15 mins</b><br/>(30 mins teaching, 45 mins lab",
		"%l_agenda1": "Basic Titanium user interface structures",
		"%l_agenda2": "The Titanium View Hierarchy",
		"%l_agenda3": "Layouts and positioning",
		"%l_agenda4": "Event Handling",
		"%l_slidenote_agenda": "View hierarchy = relationship components have to each other as you lay them out<br>Event handling on a component and app level",
		"%l_iOS_components": "iOS User Interface Components",
		"%l_slidenote_iOS_components": "Briefly introduce the key iOS user interface components especially for the Android users in the class",
		"%l_android_components": "Android User Interface Components",
		"%l_slidenote_android_components": "Briefly introduce the key Android user interface components especially for the iOS users in the class",
		"%l_basic_app_structure": "Basic Application Structure",
		"%l_slidenote_basic_app_structure": "Brief: there are two basic ways to structure an app<br>Tab group with multiple windows<br>Single window with individual views or stack of sub-windows<br>Key goal is to make our UI elements self-contained and self-updating to abstract the UI from the app's logic",
		"%l_for_you": "For you web developers ...",
		"%l_window": "A 'window' is analogous to a 'page'",
		"%l_view": "A 'view' is analogous to a 'div'",
		"%l_namespace": "Ti.UI namespace provides many specialized controls (buttons, text field, pickers, scroll views)",
		"%l_ui_objects": "UI objects are composed in JavaScript similarly to DOM fragments",
		"%l_slidenote_for_you": "UI elements composed in constructor style structure, pass parameters and get an object in return",

		"%l_units": "Units",
		"%l_defns": "Definitions:<br/>&nbsp;&nbsp;&nbsp;dip = display-independent pixels == 'points'<br/>&nbsp;&nbsp;&nbsp;System units - on Android = pixels; on iOS = dip",
		"%l_absmeasures": "Absolute measurements: px (pixels), dp/dip, mm, cm, in",
		"%l_relmeasures": "Relative measurements: % = percent of the parent's height or width",
		"%l_unitcode": "\nvar view = Ti.UI.createView({\n  /* You would not normally mix units like this */\n  top: '10mm',\n  left: '5px',\n  width: '30%',\n  height: 50 /* default system units are used here */\n});\n ",
		"%l_slidenote_units": "Can set a default unit in tiapp.xml<br/>See wiki for how-to",

		"%l_coordinates": "Coordinates Grid",
		"%l_coords1": "iPhone (original or Retina) - 320 by 480 point grid",
		"%l_coords2": "iPad (original or Retina) - 1024 by 768 grid",
		"%l_coords3": "Android sizes vary:<br/><ul style='align:left;margin-left:70px;'><li>HVGA = 320 by 480 px</li><li>WVGA800 = 480 by 800 px</li><li>WVGA854 = 480 by 854 px</li></ul>",
		"%l_slidenote_coordinates": "You can use dp/dip units on Android to achieve the same density independent grid as is default on iOS.",

		"%l_positioning": "Positioning",
		"%l_position1": "<code>top</code> and <code>left</code>",
		"%l_position2": "<code>bottom</code> and <code>right</code>",
		"%l_position3": "<code>center</code>",
		"%l_position4": "<code>size</code> provides <em>rendered</em> dimensions",
		"%l_slidenote_positioning": "Coords relative to parent<br/>Typically use top/left, but can use bottom/right instead<br/>center is a dictionary of {x,y} from top/left of parent<br/>size is available after the element has been rendered",

		"%l_view_hierarchy": "Layout Modes",
		"%l_absolute": "Absolute",
		"%l_vertical": "Vertical",
		"%l_horizontal": "Horizontal",
		"%l_slidenote_view_hierarchy": "Absolute &mdash; relative to parent not screen Vertical & horizontal &mdash; apply to parent object &mdash; we'll see examples in upcoming slides",
		"%l_absolute_layout": "Absolute Layout",
		"%l_slidenote_absolute_layout": "We have here a window with a couple UI elements<br>The button is positioned 170 points from the parent's top edge",
		"%l_slidenote_absolute_layout_2": "Absolute, left 30 points from left edge",
		"%l_vertical_layout": "Vertical Layout",
		"%l_slidenote_vertical_layout": "Parent object has the Vertical layout<br>Child object's positions are then in relation to each other within the parent",

		"%l_auto": "'Auto' Behaviors",
		"%l_auto1": "Deprecated - use Ti.UI.SIZE or Ti.UI.FILL instead",
		"%l_auto2": "SIZE: buttons, labels, images, text fields and areas",
		"%l_auto3": "FILL: windows, views, tables, webviews",
		"%l_auto4": "Some are mixed: table rows - FILL for width and SIZE for height",
		"%l_slidenote_auto": "Used to set 'auto' as value for height or width and Ti would 'figure it out'<br/>But that was inconsistent across platforms and view components<br/>You can now be more explicity by specifying FILL (fills parent) or SIZE (sized to fit its contents)",

		"%l_layoutmethods": "Batch Updates",
		"%l_layoutmethod1": "Default: Coordinate/dimension changes are processed serially",
		"%l_layoutmethod2": "Call <code>startLayout()</code> before, <code>finishLayout()</code> after to batch changes",
		"%l_layoutmethod3": "Or call <code>updateLayout(params)</code>",
		"%l_layoutbatch": "view.startLayout();\nview.top = 50;\nview.left = 50;\nview.finishLayout();\n",
		"%l_layoutbatch2": "// this is equivalent\nview.updateLayout({\n  top: 50,\n  left: 50\n});\n",
		"%l_slidenote_layoutmethods": "When moving or resizing objects, changes are processed one at a time<br/>Use these techniques to perform those changes as a single batch -- <em>faster</em>",



		"%l_event_handling": "Event Handling",
		"%l_similar": "Similar To JavaScript in the browser",
		"%l_can_use": "Can use addEventListener on nearly any JS object",
		"%l_can_prog": "Can programmatically fire events on objects as well",
		"%l_demo": "Demo: A simple event handler in the default project",
		"%l_slidenote_event_handling": "Add event listeners to objects at a component, object or app level<br>Programmatically fire events<br>Demo:<br><ol><li>Test app from prev. module or new default app</li><li>Add event listener to the label on win1, change text of label(Note: 'tap' event is the same as 'click')</li><li>Build, click label to see event fired</li></ul>",
		"%l_execution_contexts": "Execution Contexts",
		"%l_app_has": "App has one execution context by default - similar to JS thread in the browser",
		"%l_can_create": "Can create more by:",
		"%l_windows_with": "Windows with URLs",
		"%l_background": "Background Services",
		"%l_each_has": "Each has unique symbol space - variables declared in one context unavailable in another",
		"%l_demo_execution": "Demo: Execution Contexts in the default application",
		"%l_slidenote_execution_contexts": "Execution context is a variable space, processing thread<br>App.js is default context, which you get automatically<br>Can create others, but maybe not desirable<br>Demo:<br><ol><li>In your test app, move win1 code to separate file</li><li>Update app.js to load the windows from those files</li><li>Build &mdash; error &mdash; can't find window object</li><li>Fix with Ti.UI.currentWindow, re-build</li></ul>",
		"%l_more_execution_contexts": "More On Execution Contexts",
		"%l_typically": "Typically, we recommend using only a single context",
		"%l_use_multiples": "Use multiples only when 'clean slate' is desired",
		"%l_if_multiples": "If multiple contexts are in use, it is often necessary to share data across them",
		"%l_for_this": "For this, use application-level events",
		"%l_slidenote_more_execution_contexts": "Kitchen Sink specifically uses separate contexts because it needs / wants those clean slates",
		"%l_application_events": "Application-Level Events",
		"%l_useful": "Useful for sending JSON-serializable data across contexts",
		"%l_publishing": "Useful for publishing and subscribing to application events even in a single context",
		"%l_critical": "Critical API in component oriented applications",
		"%l_demo_cross_context": "Demo: Cross-context messages in the default application",
		"%l_slidenote_application_events": "Using App level events, we can de-couple our UI from our logic<br>UI components can listen for events and update themselves<br>Events can just alert or pass JSON serializable data<br>Demo:<ol><li>Move win 2 to win2.js, using Ti.UI.currentWindow</li><li>Label2, subscribe to app:labelclicked event</li><ul><li>receives data in event object</li><li>update label2 text & color</li></ul><li>In win1.js, click event handler fires app:labelclicked</li><ul><li>pass message text as second arg</li</ul><li>Build &mdash; doesn't work &mdash; window has to have been opened to receive events</li></ul>",

		"%l_composing": "Composing Your App's UI",
		"%l_50_percent": "50% or more of your job is UI component construction",
		"%l_most_of": "Most of the rest is event handling logic",
		"%l_your_app": "Your app will be more maintainable if you break it down into small components",
		"%l_recommendation": "Recommendation: Use app.js to bootstrap your application and create/show/open one single UI component from your app",
		"%l_slidenote_composing": "Self-contained, self-updating components are easiest to maintain<br>Single context is recommended",

		"%l_iterative": "Iterative UI Programming",
		"%l_ui_prog": "UI programming can boil down to pushing pixels",
		"%l_need_to": "Need to have the fastest possible cycles, but also need to test cross-platform from the get-go!",
		"%l_ios_sim": "iOS Simulator is fast for dev, device cycle is slow",
		"%l_android_emu": "Android Emulator is S-L-O-W - keep it running!",
		"%l_android_dev": "Android devices are faster (better for dev)",
		"%l_slidenote_iterative": "Don't wait to test cross-platform, Android and iOS can be very different",
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",


		"%l_lab_goals": "Lab Goals",
		"%l_compose": "Compose a basic two tab application",
		"%l_requirements": "Requirements:",
		"%l_display_list": "Display list of fugitives (dummy data)",
		"%l_drill_down": "Drill down into a detail window",
		"%l_provide_window": "Provide a window to add a fugitive",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/220+UI+Fundamentals'>wiki.appcelerator.org/display/td/220+UI+Fundamentals</a>",
		"%l_slidenote_lab_goals": "Demo finished code: TiBH220<br>Detail window &mdash; buttons don't do anything, show labels with actual data<br>Add window will be empty at this point<br>Hint: try to re-use as much as possible. So, one function to show detail window that accepts a busted boolean to show the details for the at-large and captured fugitives",


		"%l_solution": "Solution Walkthrough",
		"%l_slidenote_solution": "TiBH220 &mdash; Explain these files and changes:<ul><li>ui/BountyTable &mdash; populateTable() and row objects</li><li>ui/common/DetailWindow &mdash; window constructor, labels, and buttons</li><li>ui/common/AddWindow &mdash; window constructor</li><li>ui/handheld/ApplicationWindow &mdash; table instantiation, event listener, menu, and rightNavButton</li></ul>"
	},
	"ja": {
	        "%l_subtitle": "Appcelerator Titaniumによるネイティブアプリ開発",
	        "%l_agenda_title": "アジェンダ",
		"%l_filetitle": "UIの基礎",
		"%l_lessontitle": "UIの基礎",
	        "%l_slidenote_titleslide": "<b>所要時間: 1時間15分</b><br/>(解説 30分、実習 45分)",
		"%l_agenda1": "基本的なTitaniumのユーザインターフェース構造",
		"%l_agenda2": "Titaniumのビュー階層",
		"%l_agenda3": "レイアウトと配置",
		"%l_agenda4": "イベントハンドリング",
		"%l_slidenote_agenda": "ビュー階層 = 配置されたコンポーネント間の関係<br>コンポーネントやアプリケーションレベルでのイベントハンドリング",
		"%l_iOS_components": "iOSのユーザインターフェース<br>コンポーネント",
		"%l_slidenote_iOS_components": "特に、クラスの中のAndroidユーザーに対してiOSのユーザーインターフェースコンポーネントを簡単に紹介する",
		"%l_android_components": "Androidのユーザインターフェース<br>コンポーネント",
		"%l_slidenote_android_components": "特に、クラスの中のiOSユーザーに対してAndroidのユーザーインターフェースコンポーネントを簡単に紹介する",
		"%l_basic_app_structure": "アプリケーションの基本的な構造",
		"%l_slidenote_basic_app_structure": "概要: アプリケーションを構成するには基本的に２つの方法があります<br>複数のウィンドウを持ったTab Group<br>独立したビューやスタックされたサブウィンドウを持つ、単一のウィンドウ<br>キーとなるゴールは、UIの要素を自己完結、自己更新可能とし、アプリケーションのロジックから抽象化することです",
		"%l_for_you": "Web開発者へ...",
		"%l_window": "'window'は'page'に類似しています",
		"%l_view": "'view'は'div'に類似しています",
		"%l_namespace": "Ti.UI名前空間で、たくさんのコントロール(buttons, text field, pickers, scroll views)を提供しています",
		"%l_ui_objects": "UIオブジェクトはDOMと同じようにJavascriptで構成されています",
		"%l_slidenote_for_you": "UIの要素はコンストラクターのスタイル構造体にパラメータを設定し、戻り値としてオブジェクトを取得します",

		"%l_units": "単位",
		"%l_defns": "定義:<br/>&nbsp;&nbsp;&nbsp;dip = display-independent pixels == 'points'<br/>&nbsp;&nbsp;&nbsp;Systemの単位 - Androidではpixels、iOSではdip",
		"%l_absmeasures": "絶対寸法: px (ピクセル), dp/dip, mm, cm, in",
	        "%l_relmeasures": "相対寸法: 親のビューの高さ、幅に対する割合(%)",
		"%l_unitcode": "\nvar view = Ti.UI.createView({\n  /* 通常はこのように単位を混ぜないで下さい */\n  top: '10mm',\n  left: '5px',\n  width: '30%',\n  height: 50 /* システムのデフォルトの単位が使用されます */\n});\n ",
		"%l_slidenote_units": "tiapp.xmlにデフォルトの単位を設定できます<br/>どうやるかはwikiをご参照ください",

		"%l_coordinates": "座標グリッド",
		"%l_coords1": "iPhone (従来もしくはRetina) - 320 x 480 ポイント",
		"%l_coords2": "iPad (従来もしくはRetina) - 1024 x 768 ポイント",
		"%l_coords3": "Androidは様々:<br/><ul style='align:left;margin-left:70px;'><li>HVGA = 320 x 480 px</li><li>WVGA800 = 480 x 800 px</li><li>WVGA854 = 480 x 854 px</li></ul>",
		"%l_slidenote_coordinates": "iOSでのデフォルトと同様に、Androidで密度に依存しないグリッドを得るのにdp/dipの単位が使えます",

		"%l_positioning": "配置",
		"%l_position1": "<code>top</code> と <code>left</code>",
		"%l_position2": "<code>bottom</code> と <code>right</code>",
		"%l_position3": "<code>center</code>",
		"%l_position4": "<code>size</code> は <em>レンダリングされる</em> 寸法を表す",
		"%l_slidenote_positioning": "親のビューとの相対座標<br/>通常はtop/leftを使用しますが、bottom/rightも使えます<br/>centerは親ビューのtop/leftからの{x,y}座標です<br/>sizeの値は要素がレンダリングされた後に有効になります",

		"%l_view_hierarchy": "Layoutモード",
		"%l_absolute": "Absolute",
		"%l_vertical": "Vertical",
		"%l_horizontal": "Horizontal",
		"%l_slidenote_view_hierarchy": "Absolute &mdash; スクリーンの垂直・水平では無く、親ビューからの相対です &mdash; 親オブジェクトに適用されます &mdash; 後ほどのスライドでサンプルを参照します",
		"%l_absolute_layout": "Absolute Layout",
		"%l_slidenote_absolute_layout": "幾つかのUI要素をもつウィンドウがあります<br>ボタンは親ビューの上端から170ポイントの位置に配置されます",
		"%l_slidenote_absolute_layout_2": "左端から30ポイントの位置に配置されます",
		"%l_vertical_layout": "Vertical Layout",
		"%l_slidenote_vertical_layout": "親オブジェクトは垂直レイアウトを持ちます<br>子オブジェクトの位置は親オブジェクト内でそれぞれに関連されます",

		"%l_auto": "'Auto'の振る舞い",
		"%l_auto1": "非推奨 - 替わりにTi.UI.SIZEやTi.UI.FILLを使用ください",
		"%l_auto2": "SIZE: buttons、labels、images、text fieldsやareas",
		"%l_auto3": "FILL: windows、views、tables、webviews",
		"%l_auto4": "幾つかはミックスされる: table rows - 幅に対してはFILL、<br>高さに対してはSIZEが適用される",
		"%l_slidenote_auto": "幅や高さに'auto'を指定すれば、Tiの方で'何とかします'<br/>しかしながら、プラットフォームやビューの種類によって一貫性はありません<br/>FILL (親の大きさに合わせる) や SIZE (コンテンツの大きさに合わせる) を指定することで、より明確にできます",

		"%l_layoutmethods": "Batchアップデート",
		"%l_layoutmethod1": "デフォルト: 座標や寸法の変更処理は逐次実行される",
		"%l_layoutmethod2": "batch変更するには、事前に <code>startLayout()</code> を呼び、 <code>finishLayout()</code> を後で呼びます",
		"%l_layoutmethod3": "もしくは <code>updateLayout(params)</code> を呼んでください",
		"%l_slidenote_layoutmethods": "オブジェクトの動かしたりリサイズする際に、変更は一度にひとつずつ行なわれます<br/>これらを行なう際に、単一のbatchで処理するテクニックを使ってください -- <em>速い</em>",



		"%l_event_handling": "イベントハンドリング",
		"%l_similar": "ブラウザのJavaScriptと同じ",
		"%l_can_use": "ほぼ全てのオブジェクトに対してaddEventListenerが使える",
		"%l_can_prog": "オブジェクトに対してプログラムでイベントを発行することができる",
		"%l_demo": "デモ: デフォルトのプロジェクトでの単純なイベントハンドリング",
		"%l_slidenote_event_handling": "コンポーネント内のオブジェクトやオブジェクトあるいはアプリケーションレベルにイベントリスナーを設定する<br>プログラム上からイベントを発行<br>デモ:<br><ol><li>前講座のテストアプリ、もしくは新しいデフォルトのアプリを使用</li><li>win1上のlabelにイベントリスナーを追加し、labelのテキストを変更 (注: 'tap'イベントは'click'イベントと同じである)</li><li>ビルドして、イベントが発行されるかlabelをクリックしてみる</li></ul>",
		"%l_execution_contexts": "実行コンテキスト",
	        "%l_app_has": "アプリケーションはブラウザでのJSスレッドのように、ひとつの<br>実行コンテキストをデフォルトで持っている",
		"%l_can_create": "以下でもっとたくさん作れる:",
		"%l_windows_with": "WindowsのURLパラメータ指定",
		"%l_background": "Background Services",
		"%l_each_has": "それぞれユニークな変数空間を持つので、一方で宣言された変数は他方のコンテキストでは参照ができない",
		"%l_demo_execution": "デモ: デフォルトのアプリケーションでの実行コンテキスト",
		"%l_slidenote_execution_contexts": "実行コンテキストはスレッドを処理する名前空間です<br>app.jsは自動的に取得されるデフォルトのコンテキストです<br>望ましく無いかも知れませんが、他にも作ることはできます<br>デモ:<br><ol><li>あなたのテストアプリで、win1のコードを違うファイルに移動させてください</li><li>これらのファイルからウィンドウをロードするようapp.jsを編集してください</li><li>ビルド &mdash; エラー &mdash; ウィンドウオブジェクトが見つかりません</li><li>Ti.UI.currentWindowを用いて修正し、再ビルド</li></ul>",
		"%l_more_execution_contexts": "実行コンテキストの補足",
	        "%l_typically": "一般的にはシングルコンテキストのご使用をお薦めします",
	        "%l_use_multiples": "'白紙の状態'が必要な場合のみマルチコンテキストをご使用ください",
		"%l_if_multiples": "マルチコンテキストを使用している場合に、しばしばコンテキスト間でのデータの共有が必要になりますが",
		"%l_for_this": "その場合には、アプリケーションレベルでのイベントをご使用ください",
		"%l_slidenote_more_execution_contexts": "特にKitchen Sinkはこの白紙の状態が必要・ほしいので、別コンテキストを使用してます",
		"%l_application_events": "アプリケーションレベルのイベント",
		"%l_useful": "コンテキスト間でのやりとりには、JSONでシリアライズされたデータを使うのが便利です",
		"%l_publishing": "シングルコンテキスト内でもアプリケーションイベントを使ったpublishやsubscribeは有意義です",
		"%l_critical": "コンポーネント指向のアプリケーションでは重要なAPIです",
		"%l_demo_cross_context": "デモ: デフォルトのアプリケーションでのコンテキスト間のメッセージ送受信",
		"%l_slidenote_application_events": "アプリケーションレベルのイベントを使うことで、UIとロジックの分離ができます<br>UIコンポーネントはイベントを取得することで、自分自身でアップデートできます<br>イベントは単に発行するか、JSONでシリアライズされたデータを渡すこともできます<br>デモ:<ol><li>Ti.UI.currentWindowを用いて、win2をwin2.jsに移動させる</li><li>label2がapp:labelclickedイベントを検出できるようにする</li><ul><li>イベントオブジェクト内のデータを取得する</li><li>label2のテキストと色を変更する</li></ul><li>win1.jsの中でapp:labelclickedイベントを発行する</li><ul><li>２つ目の引数としてメッセージテキストを渡す</li</ul><li>ビルド &mdash; 動かない &mdash; windowはイベントを取得する為にopenされて無ければならない</li></ul>",

		"%l_composing": "アプリケーションのUIを構築する",
		"%l_50_percent": "UIコンポーネントの作成が作業の50%以上を占めます",
		"%l_most_of": "残りのほとんどはイベントハンドリングのロジックです",
		"%l_your_app": "アプリケーションを小さなコンポーネントの集まりに分割すれば、<br>メンテナンス性は向上します",
		"%l_recommendation": "推奨: app.jsではアプリケーションの起動を行ない、ただひとつの<br>UIコンポーネントをcreate/show/openしましょう",
		"%l_slidenote_composing": "自己完結、自己更新可能なコンポーネントがもっともメンテナンスしやすいでしょう<br>シングルコンテキストが推奨されます",

		"%l_iterative": "対話型のUIプログラミング",
		"%l_ui_prog": "UIプログラミングはピクセルとの戦い",
		"%l_need_to": "可能な限り速いサイクルで回した方が良いが、始めからクロスプラットフォームでのテストも行なうべき！",
		"%l_ios_sim": "iOSシミュレーターは開発に使う分には実機よりサイクルが速い",
		"%l_android_emu": "Androidエミュレータは お・そ・い から実行しっぱなしにしておくこと",
		"%l_android_dev": "Androidは実機の方が速くて開発に向いている",
		"%l_slidenote_iterative": "AndroidとiOSでは全く異なったものになるので、クロスプラットフォームでのテストは後回しにしない",
		"%l_qa": "Q&A",
		"%l_slidenote_qa": "",


		"%l_lab_goals": "実習目標",
		"%l_compose": "２つのタブを持った基本的なアプリケーションを作成",
		"%l_requirements": "課題:",
		"%l_display_list": "逃亡者のリストを表示 (デモデータ)",
		"%l_drill_down": "詳細ウィンドウへのドリルダウン",
		"%l_provide_window": "逃亡者を追加するウィンドウを提供",
		"%l_labURL": "<a href='https://wiki.appcelerator.org/display/td/220+UI+Fundamentals'>wiki.appcelerator.org/display/td/220+UI+Fundamentals</a>",
		"%l_slidenote_lab_goals": "デモの完成コード: TiBH220<br>詳細ウィンドウ &mdash; ボタンは何もしません。ラベルの中身を実際のデータで表示します<br>この時点では追加ウィンドウは空っぽです<br>ヒント: 可能な限り再利用してください。 つまり詳細ウインドウのある関数は、逃亡中と逮捕された逃亡者の詳細を表示する為に、逮捕されたかどうかを示すブール値を受け取ります",


		"%l_solution": "ソリューションウォークスルー",
		"%l_slidenote_solution": "TiBH220 &mdash; これらのファイルや変更を解説すること:<ul><li>ui/BountyTable &mdash; populateTable()と行のオブジェクト</li><li>ui/common/DetailWindow &mdash; windowのコンストラクタ、labelやbutton</li><li>ui/common/AddWindow &mdash; windowのコンストラクタ</li><li>ui/handheld/ApplicationWindow &mdash; tableのインスタンス化、イベントリスナー、メニューやrightNavButton</li></ul>"
	}
});
