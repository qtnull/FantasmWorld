/*:
 * @plugindesc This plugin provides localization feature to RPG Maker MV.
 * Version : Release 1.4.7
 * Commit hash : cbd1a36f577d658a34f8d302b3ecf328c3b0be5f
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 
 * |                                                                  |
 * |                     ===== L10nMV.js =====                        |
 * |                                                                  |
 * | This plugin provides localization feature to RPG Maker MV.       |
 * | Created by Creta Park (https://creft.me/cretapark)               |
 * | License : MIT                                                    |
 * | GitHub page : https://github.com/Creta5164/L10nMV.js             |
 * | Recommanded MV version : 1.6.2^                                  |
 * |                                                                  |
 * | - Update from old version guide -------------------------------- |
 * | 1. Double-click L10nMV in plugin management menu                 |
 * | 2. Change to other plugin and restore it to L10nMV.              |
 * |    (Doesn't need re-writting plugin parameters!)                 |
 * | 3. Click 'OK' to apply and save your project.                    |
 * | 4. Run your game and check developer console                     |
 * |                                                                  |
 * | - Table of content --------------------------------------------- |
 * |  1. Preparation                                                  |
 * |  2. How to use                                                   |
 * |    2.1. Generate template language pack                          |
 * |    2.2. Replace images, sounds                                   |
 * |    2.3. Apply to extra plugins                                   |
 * |  3. Plugin options                                               |
 * |                                                                  |
 * | 1. Preparation ------------------------------------------------- |
 * | Create 'lang' directory in your MV project.                      |
 * |                                                                  |
 * | 2. How to use  ------------------------------------------------- |
 * | Basically, L10nMV automatically links localized text from lang   |
 * | directory files to game.                                         |
 * | If player uses default-language value then L10nMV uses default   |
 * | resources in your game.                                          |
 * |                                                                  |
 * | If you want to support other languages must add language pack    |
 * | directory in 'lang' directory.                                   |
 * | language pack directory name must be ISO 639-1 code.             |
 * | (i.e. en, ko, ja, es, ru...)                                     |
 * |                                                                  |
 * | It's should be like this :                                       |
 * |                                                                  |
 * | /'Your project directory'                                        |
 * |    /audio                                                        |
 * |    /data                                                         |
 * |    /icon                                                         |
 * |    /img                                                          |
 * |    /js                                                           |
 * | +  /lang                                                         |
 * | +     /en                                                        |
 * | +     /ja                                                        |
 * |    /movies                                                       |
 * |    /save                                                         |
 * |    /Game.rpgproject                                              |
 * |    /index.html                                                   |
 * |                                                                  |
 * | 2.1. Generate template language pack --------------------------- |
 * | Template language pack is that text scripts from your project.   |
 * | You can make that using by L10nMVEditor.js plugin.               |
 * | Just follow instruction of plugin then you can localize every    |
 * | text from your project.                                          |
 * |                                                                  |
 * | 2.2. Replace images, sounds ------------------------------------ |
 * | Replacing image and sound is easy to do.                         |
 * | Create the same folder in the language pack folder as the        |
 * | project's resource folder.                                       |
 * |                                                                  |
 * | For example, if you want to replace bgm, se, and some picture... |
 * |                                                                  |
 * |    /lang                  # English version has dubbed version!  |
 * |       /en                 # Oh, and also dubbed voicelines!      |
 * | +        /audio                                                  |
 * | +           /bgm                                                 |
 * | +              /EndingSong.ogg                                   |
 * | +           /se                                                  |
 * | +              /HeroAttackSound_1.ogg                            |
 * | +              /HeroDefeated_1.ogg                               |
 * | +              /HeroDefeated_2.ogg                               |
 * | +        /img           # I need replace some pictures!          |
 * | +           /pictures                                            |
 * | +              /StandingCG_HeroIdle.png                          |
 * |                                                                  |
 * | If you put a resource with the name of the resource you want to  |
 * | replace into this directory, L10nMV will take over that resource |
 * | in the directory instead of the original resource by state of    |
 * | current language.                                                |
 * |                                                                  |
 * | - When default language and current language is same :           |
 * |   L10nMV will take original resources.                           |
 * |     > img/pictures/myImage.png                                   |
 * |     > audio/me/victory.ogg                                       |
 * |                                                                  |
 * | - But if not same language :                                     |
 * |   (i.e. current language is 'ja', default language is 'en')      |
 * |   L10nMV will find alternative resources.                        |
 * |     > lang/ja/img/pictures/myImage.png                           |
 * |     > lang/ja/audio/me/victory.ogg                               |
 * |                                                                  |
 * | * Note that replacing audio is great for dubbed game scenario.   |
 * |                                                                  |
 * | 2.3. Apply to extra plugins ------------------------------------ |
 * |                                                                  |
 * | [ IMPORTANT ] If you want to use localization plugins feature    |
 * |               you must put this plugin at top of plugin list.    |
 * |                                                                  |
 * | Plugins that you want to localize them should be added to plugin |
 * | whitelist of this plugin's parameters.                           |
 * |                                                                  |
 * | L10nMV take replace values only whitelisted plugin.              |
 * |                                                                  |
 * | 3. Plugin options ---------------------------------------------- |
 * |                                                                  |
 * | Default language                                                 |
 * | > Default language you've written in your project.               |
 * | > Must be use ISO 639-1 code. (i.e. ko, en, ja...)               |
 * |                                                                  |
 * | Global language                                                  |
 * | > This is fallbacks if player uses not supported language.       |
 * | > Must be use ISO 639-1 code. (i.e. ko, en, ja...)               |
 * |                                                                  |
 * | Specified supported language pack list                           |
 * | > * Strongly recommanded for Web, Mobile, UWP environment.       |
 * | > This list is used when limited modding environment.            |
 * | > (Unofficial translation is cannot try on Web and Mobile)       |
 * | > If you hosting your game in limited environment, consider use  |
 * | > this option.                                                   |
 * | > Must be use ISO 639-1 code. (i.e. ko, en, ja...)               |
 * |                                                                  |
 * | Use first setup scene                                            |
 * | > When player start your game first time, L10nMV will show       |
 * | > language setup dialogue.                                       |
 * |                                                                  |
 * | Option available condition                                       |
 * | > This is used like when skipping the title scene and-           |
 * | > displaying the title screen on the map.                        |
 * | > In that case, replace the content inside with...               |
 * | > '$gameMap.mapId() === <Map ID of the title screen>'            |
 * | >                                                                |
 * | > If your map is to act as a title,                              |
 * | > create an empty event with 'Autorun' trigger-                  |
 * | > and fill it with the structure below.                          |
 * | >                                                                |
 * | > +If : Script : L10nMV.RequireRestart                           |
 * | >   +Script : L10nMV.ShowRequiresRestartMessageOnMap();          |
 * | >   +Loop                                                        |
 * | >     +Wait : 1 frame(s)                                         |
 * | >     : End                                                      |
 * | > +Erase Event                                                   |
 * |                                                                  |
 * | Strict mode                                                      |
 * | > Basically, when L10nMV can't find same pair of language pack   |
 * | > file, then L10nMV uses default resources in your project.      |
 * | > If you use strict mode, L10nMV throws error instead using      |
 * | > default resources.                                             |
 * |                                                                  |
 * | Whitelisted plugins                                              |
 * | > L10nMV doesn't apply replacing every plugins parameters.       |
 * | > you must add whitelist plugin's name into here.                |
 * |                                                                  |
 * | Ignore decrypt language pack files                               |
 * | > Basically, RPG MV supports encrypt files in distribution.      |
 * | > this option supports replace files in language pack easily.    |
 * | > but if you want presenting fully official language only-       |
 * | > then turn off this option.                                     |
 * |                                                                  |
 * | 4. Third-party library/sources notice                            |
 * |                                                                  |
 * | deep-merge.js                                                    |
 * | > https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6 |
 * |                                                                  |
 * 
 * @param lang
 * @text Default language
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default ko
 * 
 * @param global-lang
 * @text Global language
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default en
 * 
 * @param specified-languages
 * @text Specified supported language pack list
 * @type text[]
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * 
 * @param use-first-setup
 * @text Use first setup scene
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default false
 * 
 * @param option-available-condition
 * @text Option available condition
 * @type text
 * @desc The conditional expression under which the setting is activated.
 * @default L10nMV.LastScene === Scene_Title
 * 
 * @param strict
 * @text Strict mode
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default false
 * 
 * @param whitelist-plugins
 * @text Whitelisted plugins
 * @type text[]
 * @desc Add plugins name you want to replace plugins parameters.
 * 
 * @param ignore-decrypt-language-pack
 * @text Ignore decrypt language pack files
 * @type boolean
 * @desc Read more information in help page's
 * 3. Plugin options section.
 * @default true
 */

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.makeIterator=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};function L10nMV(){throw Error("This is a static class.");}L10nMV.VERSION="Release 1.4.7";L10nMV.COMMIT_HASH="cbd1a36f577d658a34f8d302b3ecf328c3b0be5f";
"-"===L10nMV.COMMIT_HASH&&alert("L10nMV.js notice :\nYou have using development version of L10nMV.js.\nThis is may unstable, so strongly recommended to use release version of L10nMV.js.");L10nMV.NAME_DATA_COMMON_EVENTS="$dataCommonEvents";L10nMV.NAME_DATA_MAP="$dataMap";L10nMV.LANG_ROOT="./lang/";L10nMV.PEEK_FILE="/Info.json";L10nMV.IsProjectLanguage=!1;L10nMV.RequireRestart=!1;L10nMV.MapStringsLoaded=!1;L10nMV.IgnoreDecryptLanguagePackFiles=!1;L10nMV.UseFirstSetup=!1;L10nMV.NeedSetup=!1;
L10nMV.ProjectLanguage=null;L10nMV.LocalLanguage=null;L10nMV.GlobalLanguage=null;L10nMV.ChangedLanguage=null;L10nMV.AvailableLanguages=null;L10nMV.DatabaseStringsLoadStatus=null;L10nMV.SpecifiedLanguages=null;L10nMV.PluginStrings=null;Utils.isNwjs()?(L10nMV.IOFile=require("fs"),L10nMV.IOPath=require("path"),L10nMV.IORoot=L10nMV.IOPath.dirname(process.mainModule.filename)):(L10nMV.IOFile=null,L10nMV.IOPath=null,L10nMV.IORoot=null);
L10nMV.Initialize=function(a){DataManager.isDatabaseLoaded=L10nMV.isDatabaseLoaded;DataManager.isMapLoaded=L10nMV.isMapLoaded;L10nMV.DatabaseStringsLoadStatus=[];var b=PluginManager.parameters("L10nMV");L10nMV.StrictMode="true"===b.strict;L10nMV.ProjectLanguage=b.lang;L10nMV.GlobalLanguage=b["global-lang"];L10nMV.IgnoreDecryptLanguagePackFiles="true"===b["ignore-decrypt-language-pack"];L10nMV.UseFirstSetup="true"===b["use-first-setup"];try{L10nMV.IsOptionAvailable=eval("(function(){return "+b["option-available-condition"]+
"})")}catch(c){L10nMV.IsOptionAvailable=eval("(function(){return L10nMV.LastScene === Scene_Title})")}try{L10nMV.WhitelistedPlugins=JSON.parse(b["whitelist-plugins"])}catch(c){L10nMV.WhitelistedPlugins=null}try{L10nMV.SpecifiedLanguages=JSON.parse(b["specified-languages"])}catch(c){L10nMV.SpecifiedLanguages=null}if(!(L10nMV.ProjectLanguage in L10nMV.Iso639_1Names))throw Error("Cannot find specific default language code : "+L10nMV.ProjectLanguage);if(!(L10nMV.GlobalLanguage in L10nMV.Iso639_1Names))throw Error("Cannot find specific global(fallback) language code : "+
L10nMV.GlobalLanguage);a||(L10nMV.LoadAvailableLanguagePackList(),ConfigManager.load(),console.info("          \ud83c\udf10 L10nMV.js\n         Version : "+this.VERSION+"\n     Commit hash : "+this.COMMIT_HASH+"\nDefault language : "+L10nMV.GetIsoCodeWithName(this.ProjectLanguage)+"\n   User language : "+L10nMV.GetIsoCodeWithName(this.LocalLanguage)+"\n Global language : "+L10nMV.GetIsoCodeWithName(this.GlobalLanguage)));L10nMV.IsProjectLanguage||L10nMV.CheckPluginFeature()&&L10nMV.InitializePluginLocalization()};
L10nMV.CheckPluginFeature=function(){if(!L10nMV.WhitelistedPlugins||0===L10nMV.WhitelistedPlugins.length)return!1;var a=$plugins[0].description,b=a.indexOf("Commit hash : ");if(-1===b)return console.warn("\u26a0 L10nMV : Plugin localization feature disabled.\n             If you want to use this feature,\n             please set this plugin to be first item in the plugins list\n             and add plugins to whitelist you want to localize them."),!1;a=a.substring(b+14);b=L10nMV.COMMIT_HASH===a;b||
(console.warn("\u26a0 L10nMV : Plugin localization feature disabled.\n             If you want to use this feature,\n             please set this plugin to be first item in the plugins list\n             and add plugins to whitelist you want to localize them."),console.warn("\u26a0 L10nMV : This was occured because version hash is incorrect.\n             So L10nMV disabled plugin feature-\n             because not sure about this plugin is executed at first.\n\n                 Detected hash value : "+
a+"\n                 Plugin hash value   : "+L10nMV.COMMIT_HASH+"\n\n             If you had new L10nMV version, make sure\n             you have tried 'Update guide' in plugin description."));return b};L10nMV.GetIsoCodeWithName=function(a){return a+" ("+L10nMV.Iso639_1Names[a]+")"};L10nMV.DataManager_loadDatabase=DataManager.loadDatabase;
DataManager.loadDatabase=function(){L10nMV.DataManager_loadDatabase.call(this);L10nMV.MapStringsLoaded=L10nMV.IsProjectLanguage;if(!L10nMV.IsProjectLanguage){for(var a=this.isBattleTest()||this.isEventTest()?"Test_":"",b=$jscomp.makeIterator(this._databaseFiles),c=b.next();!c.done;c=b.next())c=c.value,L10nMV.LoadL10nDataFile(c.name,a+c.src);this.isEventTest()&&L10nMV.LoadL10nDataFile("$testEvent",a+"Event.json")}};L10nMV.DataManager_loadMapData=DataManager.loadMapData;
DataManager.loadMapData=function(a){L10nMV.DataManager_loadMapData.call(this,a);L10nMV.MapStringsLoaded=L10nMV.IsProjectLanguage;L10nMV.MapStringsLoaded||0>=a||(a="Map%1.json".format(a.padZero(3)),L10nMV.LoadL10nDataFile("$dataMap",a))};L10nMV.isMapLoaded=function(){DataManager.checkError();return!!$dataMap&&L10nMV.MapStringsLoaded};
L10nMV.isDatabaseLoaded=function(){DataManager.checkError();for(var a=0;a<DataManager._databaseFiles.length;a++)if(!(window[DataManager._databaseFiles[a].name]||DataManager._databaseFiles[a].name in L10nMV.DatabaseStringsLoadStatus))return!1;return!0};
L10nMV.LoadL10nDataFile=function(a,b){var c=setInterval(function(){if(null!==window[a]&&void 0!==window[a]){clearInterval(c);var d=L10nMV.LANG_ROOT+L10nMV.LocalLanguage+"/"+b;if(L10nMV.AssetExists(d)){var e=new XMLHttpRequest;e.open("GET",d);e.overrideMimeType("application/json");e.onload=function(){if(400>e.status)try{var g=JSON.parse(e.responseText);switch(a){default:L10nMV.DatabaseStringsLoadStatus.push(a);L10nMV.FilterStringsFromObject(g);window[a]=merge(window[a],g);break;case L10nMV.NAME_DATA_COMMON_EVENTS:L10nMV.DatabaseStringsLoadStatus.push(a);
L10nMV.MergeCommonEventsData(g);break;case L10nMV.NAME_DATA_MAP:L10nMV.MapStringsLoaded=!0,L10nMV.MergeMapEventsData(g)}DataManager.onLoad(window[a])}catch(f){a===L10nMV.NAME_DATA_MAP?L10nMV.MapStringsLoaded=!0:L10nMV.DatabaseStringsLoadStatus.push(a),L10nMV.ThrowException("Failed to parse data '"+b+"'.")}};e.source=a;e.onerror=L10nMV.LoadFailedL10nDataFile;e.send()}else L10nMV.ThrowException("Language pack file '"+b+"' not exist."),a===L10nMV.NAME_DATA_MAP?L10nMV.MapStringsLoaded=!0:L10nMV.DatabaseStringsLoadStatus.push(a)}})};
L10nMV.LoadFailedL10nDataFile=function(a){a.currentTarget.source===L10nMV.NAME_DATA_MAP?L10nMV.MapStringsLoaded=!0:L10nMV.DatabaseStringsLoadStatus.push(a.currentTarget.source);L10nMV.ThrowException("Failed to load language pack file.")};L10nMV.FilterStringsFromObject=function(a){var b;for(b in a)if(a.hasOwnProperty(b)){var c=typeof a[b];switch(c){default:delete a[b];break;case "object":L10nMV.FilterStringsFromObject(a[b]);case "string":}}};
L10nMV.ThrowException=function(a){if(L10nMV.StrictMode)throw Error("\u26a0 L10nMV : "+a);console.warn("\u26a0 L10nMV : "+a)};
L10nMV.MergeCommonEventsData=function(a){if(a&&0!==a.length){var b=window[L10nMV.NAME_DATA_COMMON_EVENTS],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(c in b){var e=b[c];if((e=e.list)&&0!==e.length)for(var g=0;g<d.length;g++){if(0>=e.length&&g<d.length){L10nMV.ThrowException("Event and strings pair count are not match. (number "+c+")");break}switch(L10nMV.ApplyToEventList(d,e)){default:case L10nMV.ApplyStatus.OK:break;case L10nMV.ApplyStatus.CountNotMatch:L10nMV.ThrowException("Common event's events and strings count not match. (number "+
c+")");break;case L10nMV.ApplyStatus.EventsNotValid:L10nMV.ThrowException("Common event is not valid. (number "+c+")");break;case L10nMV.ApplyStatus.StringsNotValid:L10nMV.ThrowException("Common events strings not valid. (number "+c+")")}}else L10nMV.ThrowException("Event strings exists but target common event is empty. (number "+c+")")}else L10nMV.ThrowException("Event strings exists but target common event is not exist. (number "+c+")")}window[L10nMV.NAME_DATA_COMMON_EVENTS]=b}else L10nMV.ThrowException("Common events string data is empty.")};
L10nMV.MergeMapEventsData=function(a){var b=window[L10nMV.NAME_DATA_MAP],c=b.events;if(c&&0!==c.length){var d,e;for(e in a)if(a.hasOwnProperty(e)){var g=a[e];if(e in c){var f=c[e];if((f=f.pages)&&0!==f.length)for(var h in g){if(g.hasOwnProperty(h))if(h in f){var k=f[h];(d=k.list)&&0!==d.length||L10nMV.ThrowException("Event page strings exists but target event's page is empty. (event number "+e+", page "+h+")");k=g[h];switch(L10nMV.ApplyToEventList(k,d)){default:case L10nMV.ApplyStatus.OK:break;case L10nMV.ApplyStatus.CountNotMatch:L10nMV.ThrowException("Event page events and strings count not match. (event number "+
e+", page "+h+")");break;case L10nMV.ApplyStatus.EventsNotValid:L10nMV.ThrowException("Events not valid. (event number "+e+", page "+h+")");break;case L10nMV.ApplyStatus.StringsNotValid:L10nMV.ThrowException("Strings not valid. (event number "+e+", page "+h+")")}}else L10nMV.ThrowException("Event strings exists but target event's page is not exist. (event number "+e+", page "+h+")")}else L10nMV.ThrowException("Event strings exists but current map event is empty. (event number "+e+")")}else L10nMV.ThrowException("Event strings exists but current map event is not exist. (event number "+
e+")")}window[L10nMV.NAME_DATA_MAP]=b}else L10nMV.ThrowException("Event strings exists but current map events is not exist.")};L10nMV.ApplyStatus={OK:0,StringsNotValid:1,EventsNotValid:2,CountNotMatch:3};
L10nMV.ApplyToEventList=function(a,b){if(!a||!Array.isArray(a)||0===a.length)return L10nMV.ApplyStatus.StringsNotValid;if(!b||!Array.isArray(b)||0===b.length)return L10nMV.ApplyStatus.EventsNotValid;for(var c=0,d,e=-1,g=$jscomp.makeIterator(b),f=g.next();!f.done;f=g.next()){f=f.value;switch(f.code){default:continue;case L10nMV.EventCode.Dialog:case L10nMV.EventCode.ScrollText:f.parameters[0]?f.parameters[0]=a[c]:c--;break;case L10nMV.EventCode.Choice:d=a[c];f.parameters[0]=d.clone();e=0;break;case L10nMV.EventCode.ChoiceWhen:if(-1===
e)continue;e<d.length&&(f.parameters[1]=d[e],e++,e===d.length&&(d=null,e=-1));continue}c++;if(c>a.length)return L10nMV.ApplyStatus.CountNotMatch}return c<a.length?L10nMV.ApplyStatus.CountNotMatch:L10nMV.ApplyStatus.OK};L10nMV.IsStringEvent=function(a){return a.code in L10nMV.CodeEvent};
L10nMV.LoadAvailableLanguagePackList=function(){if(null!==L10nMV.SpecifiedLanguages&&0!==L10nMV.SpecifiedLanguages.length)L10nMV.SpecifiedLanguages.contains(L10nMV.ProjectLanguage)||L10nMV.SpecifiedLanguages.push(L10nMV.ProjectLanguage),L10nMV.SpecifiedLanguages.contains(L10nMV.GlobalLanguage)||L10nMV.SpecifiedLanguages.push(L10nMV.GlobalLanguage),L10nMV.AvailableLanguages=L10nMV.SpecifiedLanguages;else{L10nMV.AvailableLanguages=[L10nMV.ProjectLanguage];for(var a in L10nMV.Iso639_1Names)L10nMV.Iso639_1Names.hasOwnProperty(a)&&
a!==L10nMV.ProjectLanguage&&L10nMV.AssetExists(L10nMV.LANG_ROOT+a+L10nMV.PEEK_FILE)&&L10nMV.AvailableLanguages.push(a)}};L10nMV.GetDeviceLanguage=function(){var a=navigator.language||navigator.userLanguage,b=a.indexOf("-");-1!==b&&(a=a.substring(0,b));return a};L10nMV.ConfigManager_applyData=ConfigManager.applyData;ConfigManager.applyData=function(a){L10nMV.ConfigManager_applyData.call(this,a);L10nMV.ApplyFromConfig(a)};
L10nMV.ApplyFromConfig=function(a){var b=a.L10nMV;b||(L10nMV.UseFirstSetup&&(L10nMV.NeedSetup=!0),b=a.L10nMV=L10nMV.GetCurrentConfigurableData());L10nMV.LocalLanguage=b.LocalLanguage;L10nMV.LocalLanguage in L10nMV.Iso639_1Names||(L10nMV.LocalLanguage=L10nMV.GlobalLanguage);L10nMV.IsProjectLanguage=L10nMV.LocalLanguage===L10nMV.ProjectLanguage};L10nMV.ConfigManager_makeData=ConfigManager.makeData;
ConfigManager.makeData=function(){var a=L10nMV.ConfigManager_makeData.call(this);L10nMV.CreateConfigData(a);return a};L10nMV.CreateConfigData=function(a){a.L10nMV=L10nMV.GetCurrentConfigurableData()};L10nMV.Scene_Title_fadeSpeed=Scene_Title.prototype.fadeSpeed;Scene_Title.prototype.fadeSpeed=function(){return L10nMV.RequireRestart?.01:L10nMV.Scene_Title_fadeSpeed.call(this)};L10nMV.Scene_Title_create=Scene_Title.prototype.create;
Scene_Title.prototype.create=function(){L10nMV.Scene_Title_create.call(this);if(L10nMV.RequireRestart){this._commandWindow=new Window_TitleCommand;this._requireRestartMessage=new Window_Message;this.addWindow(this._requireRestartMessage);this._requireRestartMessage.subWindows().forEach(function(e){this.addWindow(e)},this);var a=L10nMV.GetRestartMessage(L10nMV.ChangedLanguage);if(this._requireRestartMessage.contents.measureTextWidth(a)>this._requireRestartMessage.width){var b=a.length/3*2;b=a.indexOf(" ",
b);-1===b&&(b=a.lastIndexOf(" "),-1===b&&(b=a.length/3*2));var c=a.substring(0,b)+"-";a=a.substring(b+1);$gameMessage.add(c);$gameMessage.add(a)}else $gameMessage.add(a);$gameMessage.setBackground(1);$gameMessage.setPositionType(1);$gameMessage.setChoices(["OK"],0,0);$gameMessage.setChoiceBackground(1);$gameMessage.setChoicePositionType(1);var d=this;$gameMessage.setChoiceCallback(function(){L10nMV.RestartGame(d)})}};
L10nMV.ShowRequiresRestartMessageOnMap=function(){var a=SceneManager._scene;if(a instanceof Scene_Map){var b=L10nMV.GetRestartMessage(L10nMV.ChangedLanguage),c=a._messageWindow;if(c.contents.measureTextWidth(b)>c.width){var d=b.length/3*2;d=b.indexOf(" ",d);-1===d&&(d=b.lastIndexOf(" "),-1===d&&(d=b.length/3*2));c=b.substring(0,d)+"-";b=b.substring(d+1);$gameMessage.add(c);$gameMessage.add(b)}else $gameMessage.add(b);$gameMessage.setBackground(1);$gameMessage.setPositionType(1);$gameMessage.setChoices(["OK"],
0,0);$gameMessage.setChoiceBackground(1);$gameMessage.setChoicePositionType(1);a=SceneManager._scene;$gameMessage.setChoiceCallback(function(){L10nMV.RestartGame(a)})}else L10nMV.ThrowException("L10nMV.ShowRequiresRestartMessageOnMap only works in map.")};L10nMV.RestartGame=function(a){a&&(L10nMV.RequireRestart=!1,a.fadeOutAll(),setTimeout(function(){window.location.reload()},1E3))};L10nMV.Scene_Options_terminate=Scene_Options.prototype.terminate;
Scene_Options.prototype.terminate=function(){L10nMV.Scene_Options_terminate.call(this);L10nMV.LocalLanguage!==L10nMV.ChangedLanguage&&(L10nMV.RequireRestart=!0)};L10nMV.SceneBase_terminate=Scene_Base.prototype.terminate;Scene_Base.prototype.terminate=function(){L10nMV.LastScene=this.constructor;L10nMV.SceneBase_terminate.call(this)};
L10nMV.GetCurrentConfigurableData=function(){var a=L10nMV.ChangedLanguage||L10nMV.GetDeviceLanguage();L10nMV.AvailableLanguages.contains(a)||(a=L10nMV.GlobalLanguage);return{LocalLanguage:a}};L10nMV.Window_Options_makeCommandList=Window_Options.prototype.makeCommandList;Window_Options.prototype.makeCommandList=function(){L10nMV.Window_Options_makeCommandList.call(this);L10nMV.OptionWindow_Create(this)};
L10nMV.OptionWindow_IsEnabled=function(){return"function"!==typeof L10nMV.IsOptionAvailable?L10nMV.LastScene===Scene_Title:L10nMV.IsOptionAvailable()};L10nMV.OptionWindow_Create=function(a){a._L10nMVLang||(a._L10nMVLang=!0,L10nMV.ChangedLanguage=L10nMV.LocalLanguage);a.addCommand(L10nMV.GetOptionText(L10nMV.ChangedLanguage),"L10nMV.LocalLanguage",L10nMV.OptionWindow_IsEnabled())};L10nMV.Window_Options_processOk=Window_Options.prototype.processOk;
Window_Options.prototype.processOk=function(){var a=this.index(),b=this.commandSymbol(a);if(this.isCommandEnabled(a))if(b.startsWith("L10nMV."))switch(b){default:SoundManager.playBuzzer();break;case "L10nMV.LocalLanguage":L10nMV.OptionWindow_CursorRight(this)}else L10nMV.Window_Options_processOk.call(this);else SoundManager.playBuzzer()};
L10nMV.OptionWindow_CursorRight=function(a){if(L10nMV.OptionWindow_IsEnabled()){var b=a.index();L10nMV.ChangeToNextLanguage();a._list[b].name=L10nMV.GetOptionText(L10nMV.ChangedLanguage);a.redrawItem(b)}else SoundManager.playBuzzer()};L10nMV.Window_Options_cursorRight=Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight=function(a){a=this.index();var b=this.commandSymbol(a);if(this.isCommandEnabled(a))if(b.startsWith("L10nMV."))switch(b){default:SoundManager.playBuzzer();break;case "L10nMV.LocalLanguage":L10nMV.OptionWindow_CursorRight(this)}else L10nMV.Window_Options_cursorRight.call(this);else SoundManager.playBuzzer()};
L10nMV.OptionWindow_CursorLeft=function(a){if(L10nMV.OptionWindow_IsEnabled()){var b=a.index();L10nMV.ChangeToPreviousLanguage();a._list[b].name=L10nMV.GetOptionText(L10nMV.ChangedLanguage);a.redrawItem(b)}else SoundManager.playBuzzer()};L10nMV.Window_Options_cursorLeft=Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft=function(a){a=this.index();var b=this.commandSymbol(a);if(this.isCommandEnabled(a))if(b.startsWith("L10nMV."))switch(b){default:SoundManager.playBuzzer();break;case "L10nMV.LocalLanguage":L10nMV.OptionWindow_CursorLeft(this)}else L10nMV.Window_Options_cursorLeft.call(this);else SoundManager.playBuzzer()};L10nMV.Window_Options_statusText=Window_Options.prototype.statusText;
Window_Options.prototype.statusText=function(a){var b=this.commandSymbol(a);if(!b.startsWith("L10nMV."))return L10nMV.Window_Options_statusText.call(this,a);switch(b){default:SoundManager.playBuzzer();break;case "L10nMV.LocalLanguage":return L10nMV.Iso639_1Names[L10nMV.ChangedLanguage]}};L10nMV.ChangeToNextLanguage=function(){var a=L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);a++;a>=L10nMV.AvailableLanguages.length&&(a=0);L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[a]);SoundManager.playCursor()};
L10nMV.ChangeToPreviousLanguage=function(){var a=L10nMV.AvailableLanguages.indexOf(L10nMV.ChangedLanguage);a--;0>a&&(a=L10nMV.AvailableLanguages.length-1);L10nMV.ChangeLanguage(L10nMV.AvailableLanguages[a]);SoundManager.playCursor()};L10nMV.ChangeLanguage=function(a){a in L10nMV.Iso639_1Names||(a=L10nMV.GlobalLanguage);L10nMV.ChangedLanguage=a;L10nMV.IsProjectLanguage=L10nMV.ChangedLanguage===L10nMV.ProjectLanguage};L10nMV.CachedExists={};
L10nMV.AssetExists=function(a){if(a in L10nMV.CachedExists)return L10nMV.CachedExists[a];if(L10nMV.IORoot)return a=L10nMV.IOPath.join(L10nMV.IORoot,a),L10nMV.IOFile.existsSync(a);L10nMV.Peeker=new XMLHttpRequest;L10nMV.Peeker.open("GET",a,!1);L10nMV.Peeker.setRequestHeader("Range","bytes=0-0");try{L10nMV.Peeker.send(),L10nMV.CachedExists[a]=L10nMV.Peeker.readyState===XMLHttpRequest.DONE&&2===Math.floor(L10nMV.Peeker.status/100)}catch(b){return L10nMV.CachedExists[a]=!1}return L10nMV.CachedExists[a]};
L10nMV.GetL10nAssetPath=function(a){var b=a.lastIndexOf("/");return l10nPath=L10nMV.LANG_ROOT+L10nMV.LocalLanguage+"/"+a.substring(0,b+1)+a.substring(b+1)};L10nMV.GetSelectLocalAssetPath=function(a){var b=L10nMV.GetL10nAssetPath(a);return L10nMV.AssetExists(b)?b:a};L10nMV.WebAudio_Load=WebAudio.prototype._load;
WebAudio.prototype._load=function(a){if(WebAudio._context){var b=new XMLHttpRequest;L10nMV.IsProjectLanguage?Decrypter.hasEncryptedAudio&&(a=Decrypter.extToEncryptExt(a)):(a=L10nMV.GetSelectLocalAssetPath(a),!Decrypter.hasEncryptedAudio||L10nMV.IgnoreDecryptLanguagePackFiles&&a.startsWith(L10nMV.LANG_ROOT)||(a=Decrypter.extToEncryptExt(a)));b.open("GET",a);b.responseType="arraybuffer";b.onload=function(){400>b.status&&(b.isEncryptedFile=Decrypter.hasEncryptedAudio&&(!L10nMV.IgnoreDecryptLanguagePackFiles||
!a.startsWith(L10nMV.LANG_ROOT)),this._onXhrLoad(b))}.bind(this);b.onerror=this._loader||function(){this._hasError=!0}.bind(this);b.send()}};
WebAudio.prototype._onXhrLoad=function(a){var b=a.response;a.isEncryptedFile&&(b=Decrypter.decryptArrayBuffer(b));this._readLoopComments(new Uint8Array(b));WebAudio._context.decodeAudioData(b,function(c){this._buffer=c;this._totalTime=c.duration;0<this._loopLength&&0<this._sampleRate?(this._loopStart/=this._sampleRate,this._loopLength/=this._sampleRate):(this._loopStart=0,this._loopLength=this._totalTime);this._onLoad()}.bind(this))};L10nMV.Decrypter_DecryptImg=Decrypter.decryptImg;
Decrypter.decryptImg=function(a,b){a=this.extToEncryptExt(a);L10nMV.IsProjectLanguage||(a=L10nMV.GetSelectLocalAssetPath(a));var c=new XMLHttpRequest;c.open("GET",a);c.responseType="arraybuffer";c.send();c.onload=function(){if(this.status<Decrypter._xhrOk){var d=Decrypter.decryptArrayBuffer(c.response);b._image.src=Decrypter.createBlobUrl(d);b._image.addEventListener("load",b._loadListener=Bitmap.prototype._onLoad.bind(b));b._image.addEventListener("error",b._errorListener=b._loader||Bitmap.prototype._onError.bind(b))}};
c.onerror=function(){b._loader?b._loader():b._onError()}};L10nMV.Bitmap_RequestImage=Bitmap.prototype._requestImage;
Bitmap.prototype._requestImage=function(a){this._image=0!==Bitmap._reuseImages.length?Bitmap._reuseImages.pop():new Image;this._decodeAfterRequest&&!this._loader&&(this._loader=ResourceHandler.createLoader(a,this._requestImage.bind(this,a),this._onError.bind(this)));this._image=new Image;var b=Decrypter.hasEncryptedImages&&(!L10nMV.IgnoreDecryptLanguagePackFiles||!a.startsWith(L10nMV.LANG_ROOT));L10nMV.IsProjectLanguage?b=Decrypter.hasEncryptedImages:a=L10nMV.GetSelectLocalAssetPath(a);this._url=
a;this._loadingState="requesting";!Decrypter.checkImgIgnore(a)&&b?(this._loadingState="decrypting",Decrypter.decryptImg(a,this)):(this._image.src=a,this._image.addEventListener("load",this._loadListener=Bitmap.prototype._onLoad.bind(this)),this._image.addEventListener("error",this._errorListener=this._loader||Bitmap.prototype._onError.bind(this)))};L10nMV.ImageManager_LoadBitmap=ImageManager.loadBitmap;
ImageManager.loadBitmap=function(a,b,c,d){return b?(a=a+encodeURIComponent(b)+".png",L10nMV.IsProjectLanguage||(a=L10nMV.GetSelectLocalAssetPath(a)),c=this.loadNormalBitmap(a,c||0),c.smooth=d,c):this.loadEmptyBitmap()};L10nMV.ImageManager_ReserveNormalBitmap=ImageManager.reserveNormalBitmap;ImageManager.reserveNormalBitmap=function(a,b,c){L10nMV.IsProjectLanguage||(a=L10nMV.GetSelectLocalAssetPath(a));var d=this.loadNormalBitmap(a,b);this._imageCache.reserve(this._generateCacheKey(a,b),d,c);return d};
L10nMV.InitializePluginLocalization=function(){var a,b=new XMLHttpRequest;b.open("GET",L10nMV.LANG_ROOT+L10nMV.LocalLanguage+"/Plugins.json",!1);b.overrideMimeType("application/json");b.onerror=L10nMV.LoadFailedL10nDataFile;try{b.send(),400>b.status?a=JSON.parse(b.responseText):L10nMV.ThrowException("Failed to parse plugins file.")}catch(c){L10nMV.ThrowException("Failed to load plugins data.")}a&&0!==Object.keys(a).length||L10nMV.ThrowException("Plugin data is empty.");L10nMV.PluginStrings=a;$plugins.forEach(function(c){c.status&&
this.setParameters(c.name,c.parameters)},PluginManager)};L10nMV.PluginManager_SetParameters=PluginManager.setParameters;PluginManager.setParameters=function(a,b){if(L10nMV.PluginStrings&&a in L10nMV.PluginStrings){var c=L10nMV.PluginStrings[a],d;for(d in b)b.hasOwnProperty(d)&&d in c&&c[d]&&(b[d]=c[d],"object"===typeof b[d]&&(b[d]=L10nMV.JsonStringifyRecursively(b[d])))}L10nMV.PluginManager_SetParameters.call(this,a,b)};
L10nMV.JsonStringifyRecursively=function(a){if("object"!==typeof a)return JSON.stringify(a);for(var b in a)a.hasOwnProperty(b)&&"object"===typeof a[b]&&(a[b]=L10nMV.JsonStringifyRecursively(a[b]));return JSON.stringify(a)};L10nMV.EventCode={Dialog:401,Choice:102,ChoiceWhen:402,ScrollText:405};L10nMV.CodeEvent={401:"Dialog",102:"Choice",402:"ChoiceWhen",405:"ScrollText"};
L10nMV.Iso639_1Names={ab:"\u0430\u04a7\u0441\u0443\u0430 \u0431\u044b\u0437\u0448\u04d9\u0430, \u0430\u04a7\u0441\u0448\u04d9\u0430",aa:"Afaraf",af:"Afrikaans",ak:"Akan",sq:"Shqip",am:"\u12a0\u121b\u122d\u129b",ar:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",an:"aragon\u00e9s",hy:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576",as:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",av:"\u0430\u0432\u0430\u0440 \u043c\u0430\u0446\u04c0, \u043c\u0430\u0433\u04c0\u0430\u0440\u0443\u043b \u043c\u0430\u0446\u04c0",
ae:"avesta",ay:"aymar aru",az:"az\u0259rbaycan dili",bm:"bamanankan",ba:"\u0431\u0430\u0448\u04a1\u043e\u0440\u0442 \u0442\u0435\u043b\u0435",eu:"euskara, euskera",be:"\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f \u043c\u043e\u0432\u0430",bn:"\u09ac\u09be\u0982\u09b2\u09be",bh:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940",bi:"Bislama",bs:"bosanski jezik",br:"brezhoneg",bg:"\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",my:"\u1017\u1019\u102c\u1005\u102c",
ca:"catal\u00e0, valenci\u00e0",ch:"Chamoru",ce:"\u043d\u043e\u0445\u0447\u0438\u0439\u043d \u043c\u043e\u0442\u0442",ny:"chiChe\u0175a, chinyanja",zh:"\u4e2d\u6587 (Zh\u014dngw\u00e9n), \u6c49\u8bed, \u6f22\u8a9e",cv:"\u0447\u04d1\u0432\u0430\u0448 \u0447\u04d7\u043b\u0445\u0438",kw:"Kernewek",co:"corsu, lingua corsa",cr:"\u14c0\u1426\u1403\u152d\u140d\u140f\u1423",hr:"hrvatski jezik",cs:"\u010de\u0161tina, \u010desk\u00fd jazyk",da:"dansk",dv:"\u078b\u07a8\u0788\u07ac\u0780\u07a8",nl:"Nederlands, Vlaams",
dz:"\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41",en:"English",eo:"Esperanto",et:"eesti, eesti keel",ee:"E\u028begbe",fo:"f\u00f8royskt",fj:"vosa Vakaviti",fi:"suomi, suomen kieli",fr:"fran\u00e7ais, langue fran\u00e7aise",ff:"Fulfulde, Pulaar, Pular",gl:"Galego",ka:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",de:"Deutsch",el:"\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",gn:"Ava\u00f1e'\u1ebd",gu:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",ht:"Krey\u00f2l ayisyen",ha:"(Hausa) \u0647\u064e\u0648\u064f\u0633\u064e",
he:"\u05e2\u05d1\u05e8\u05d9\u05ea",hz:"Otjiherero",hi:"\u0939\u093f\u0928\u094d\u0926\u0940, \u0939\u093f\u0902\u0926\u0940",ho:"Hiri Motu",hu:"magyar",ia:"Interlingua",id:"Bahasa Indonesia",ie:"Interlingue",ga:"Gaeilge",ig:"As\u1ee5s\u1ee5 Igbo",ik:"I\u00f1upiaq, I\u00f1upiatun",io:"Ido",is:"\u00cdslenska",it:"Italiano",iu:"\u1403\u14c4\u1483\u144e\u1450\u1466",ja:"\u65e5\u672c\u8a9e",jv:"\ua9a7\ua9b1\ua997\ua9ae, Basa Jawa",kl:"kalaallisut, kalaallit oqaasii",kn:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",
kr:"Kanuri",ks:"\u0915\u0936\u094d\u092e\u0940\u0930\u0940, \u0643\u0634\u0645\u064a\u0631\u064a\u200e",kk:"\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456",km:"\u1781\u17d2\u1798\u17c2\u179a, \u1781\u17c1\u1798\u179a\u1797\u17b6\u179f\u17b6, \u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",ki:"G\u0129k\u0169y\u0169",rw:"Ikinyarwanda",ky:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430, \u041a\u044b\u0440\u0433\u044b\u0437 \u0442\u0438\u043b\u0438",kv:"\u043a\u043e\u043c\u0438 \u043a\u044b\u0432",
kg:"Kikongo",ko:"\ud55c\uad6d\uc5b4",ku:"Kurd\u00ee, \u06a9\u0648\u0631\u062f\u06cc\u200e",kj:"Kuanyama",la:"latine, lingua latina",lb:"L\u00ebtzebuergesch",lg:"Luganda",li:"Limburgs",ln:"Ling\u00e1la",lo:"\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7",lt:"lietuvi\u0173 kalba",lu:"Kiluba",lv:"latvie\u0161u valoda",gv:"Gaelg, Gailck",mk:"\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438 \u0458\u0430\u0437\u0438\u043a",mg:"fiteny malagasy",ms:"Bahasa Melayu, \u0628\u0647\u0627\u0633 \u0645\u0644\u0627\u064a\u0648\u200e",
ml:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",mt:"Malti",mi:"te reo M\u0101ori",mr:"\u092e\u0930\u093e\u0920\u0940",mh:"Kajin M\u0327aje\u013c",mn:"\u041c\u043e\u043d\u0433\u043e\u043b \u0445\u044d\u043b",na:"Dorerin Naoero",nv:"Din\u00e9 bizaad",nd:"isiNdebele",ne:"\u0928\u0947\u092a\u093e\u0932\u0940",ng:"Owambo",nb:"Norsk Bokm\u00e5l",nn:"Norsk Nynorsk",no:"Norsk",ii:"\ua188\ua320\ua4bf Nuosuhxop",nr:"isiNdebele",oc:"occitan, lenga d'\u00f2c",oj:"\u140a\u14c2\u1511\u14c8\u142f\u14a7\u140e\u14d0",cu:"\u0469\u0437\u044b\u043a\u044a \u0441\u043b\u043e\u0432\u0463\u043d\u044c\u0441\u043a\u044a",
om:"Afaan Oromoo",or:"\u0b13\u0b21\u0b3c\u0b3f\u0b06",os:"\u0438\u0440\u043e\u043d \u00e6\u0432\u0437\u0430\u0433",pa:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40, \u067e\u0646\u062c\u0627\u0628\u06cc\u200e",pi:"\u092a\u093e\u0932\u093f, \u092a\u093e\u0933\u093f",fa:"\u0641\u0627\u0631\u0633\u06cc",pl:"j\u0119zyk polski, polszczyzna",ps:"\u067e\u069a\u062a\u0648",pt:"Portugu\u00eas",qu:"Runa Simi, Kichwa",rm:"Rumantsch Grischun",rn:"Ikirundi",ro:"Rom\u00e2n\u0103",ru:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
sa:"\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d",sc:"sardu",sd:"\u0938\u093f\u0928\u094d\u0927\u0940, \u0633\u0646\u068c\u064a\u060c \u0633\u0646\u062f\u06be\u06cc\u200e",se:"Davvis\u00e1megiella",sm:"gagana fa'a Samoa",sg:"y\u00e2ng\u00e2 t\u00ee s\u00e4ng\u00f6",sr:"\u0441\u0440\u043f\u0441\u043a\u0438 \u0458\u0435\u0437\u0438\u043a",gd:"G\u00e0idhlig",sn:"chiShona",si:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",sk:"Sloven\u010dina, Slovensk\u00fd Jazyk",sl:"Slovenski Jezik, Sloven\u0161\u010dina",
so:"Soomaaliga, af Soomaali",st:"Sesotho",es:"Espa\u00f1ol",su:"Basa Sunda",sw:"Kiswahili",ss:"SiSwati",sv:"Svenska",ta:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",te:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",tg:"\u0442\u043e\u04b7\u0438\u043a\u04e3, to\u00e7ik\u012b, \u062a\u0627\u062c\u06cc\u06a9\u06cc\u200e",th:"\u0e44\u0e17\u0e22",ti:"\u1275\u130d\u122d\u129b",bo:"\u0f56\u0f7c\u0f51\u0f0b\u0f61\u0f72\u0f42",tk:"T\u00fcrkmen, \u0422\u04af\u0440\u043a\u043c\u0435\u043d",tl:"Wikang Tagalog",tn:"Setswana",to:"Faka Tonga",
tr:"T\u00fcrk\u00e7e",ts:"Xitsonga",tt:"\u0442\u0430\u0442\u0430\u0440 \u0442\u0435\u043b\u0435, tatar tele",tw:"Twi",ty:"Reo Tahiti",ug:"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5\u200e, Uyghurche",uk:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",ur:"\u0627\u0631\u062f\u0648",uz:"O\u02bbzbek, \u040e\u0437\u0431\u0435\u043a, \u0623\u06c7\u0632\u0628\u06d0\u0643\u200e",ve:"Tshiven\u1e13a",vi:"Ti\u1ebfng Vi\u1ec7t",vo:"Volap\u00fck",wa:"Walon",cy:"Cymraeg",wo:"Wollof",fy:"Frysk",
xh:"isiXhosa",yi:"\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9",yo:"Yor\u00f9b\u00e1",za:"Sa\u026f cue\u014b\u0185, Saw cuengh",zu:"isiZulu"};L10nMV.GetOptionText=function(a){return a in L10nMV.Iso639_1OptionTexts?L10nMV.Iso639_1OptionTexts[a]:L10nMV.Iso639_1OptionTexts.en};
L10nMV.Iso639_1OptionTexts={af:"Taal",sq:"Gjuh\u00eb",am:"\u124b\u1295\u124b",ar:"\u0644\u063a\u0629",hy:"\u053c\u0565\u0566\u0578\u0582",az:"Dil",eu:"Hizkuntza",be:"\u041c\u043e\u0432\u0430",bn:"\u09ad\u09be\u09b7\u09be",bs:"Jezik",bg:"\u0415\u0437\u0438\u043a",my:"\u1018\u102c\u101e\u102c\u1005\u1000\u102c\u1038",ca:"Idioma",ny:"Language",zh:"\u8bed\u8a00",co:"Lingua",hr:"Jezik",cs:"Jazyk",da:"Sprog",nl:"Taal",en:"Language",eo:"Lingvo",et:"Keel",fi:"Kieli",fr:"Langue",gl:"Idioma",ka:"\u1c94\u10dc\u10d0",
de:"Sprache",el:"\u0393\u03bb\u03ce\u03c3\u03c3\u03b1",gu:"\u0aad\u0abe\u0ab7\u0abe\u0aa8\u0ac0",ht:"Lang",ha:"Harshe",he:"\u05e9\u05e4\u05d4",hi:"\u092d\u093e\u0937\u093e",hu:"Nyelv",id:"Bahasa",ga:"Teanga",ig:"Language",is:"Tungum\u00e1l",it:"Lingua",ja:"\u8a00\u8a9e",jv:"Language",kn:"\u0cad\u0cbe\u0cb7\u0cbe",kk:"\u0422\u0456\u043b",km:"\u1797\u17b6\u179f\u17b6",rw:"Ururimi",ky:"\u0422\u0438\u043b",ko:"\uc5b8\uc5b4",ku:"Ziman",la:"Lingua",lb:"Sprooch",lo:"\u0e9e\u0eb2\u0eaa\u0eb2",lt:"Kalba",
lv:"Valoda",mk:"\u0408\u0430\u0437\u0438\u043a",mg:"Fiteny",ms:"Bahasa",ml:"\u0d2d\u0d3e\u0d37",mt:"Lingwa",mi:"Reo",mr:"\u092d\u093e\u0937\u093e",mn:"\u0425\u044d\u043b",ne:"\u092d\u093e\u0937\u093e",nb:"Spr\u00e5k",no:"Spr\u00e5k",or:"\u0b2d\u0b3e\u0b37\u0b3e",pa:"\u0a2d\u0a3e\u0a38\u0a3c\u0a3e",fa:"\u0632\u0628\u0627\u0646",pl:"J\u0119zyk",ps:"\u0698\u0628\u0647",pt:"Idioma",ro:"Limb\u0103",ru:"\u042f\u0437\u044b\u043a",sd:"\u067b\u0648\u0644\u064a",sm:"Gagana",sr:"\u0408\u0435\u0437\u0438\u043a",
gd:"C\u00e0nain",sn:"Mutauro",si:"\u0db7\u0dcf\u0dc2\u0dcf\u0dc0",sk:"Jazyk",sl:"Jezik",so:"Language",st:"Puo",es:"Idioma",su:"Basa",sw:"Lugha",sv:"Spr\u00e5k",ta:"\u0bae\u0bc6\u0bbe\u0bb4\u0bbf",te:"\u0c2d\u0c3e\u0c37\u0c3e",tg:"\u0417\u0430\u0431\u043e\u043d",th:"\u0e20\u0e32\u0e29\u0e32",tk:"Dil",tl:"Wika",tr:"Dil",tt:"\u0422\u0435\u043b",ug:"\u062a\u0649\u0644",uk:"\u041c\u043e\u0432\u0430",ur:"\u0632\u0628\u0627\u0646",uz:"Til",vi:"Ng\u00f4n ng\u1eef",cy:"Iaith",fy:"Taal",xh:"Language",yi:"\u05e9\u05e4\u05bc\u05e8\u05d0\u05b7\u05da",
yo:"Language",zu:"Ulimi"};L10nMV.GetRestartMessage=function(a){return a in L10nMV.Iso639_1RestartMessages?L10nMV.Iso639_1RestartMessages[a]:L10nMV.Iso639_1RestartMessages.en};
L10nMV.Iso639_1RestartMessages={af:"Die wedstryd sal begin word vir die veranderinge om in werking.",sq:"Loja do t\u00eb riniset p\u00ebr ndryshimet t\u00eb hyjn\u00eb n\u00eb fuqi.",am:"\u1328\u12cb\u1273\u12cd \u12ed\u12cd\u1230\u12f3\u1275 \u12cd\u1324\u1275 \u12c8\u12f0 \u1208\u12cd\u1326\u127d \u121d\u12ad\u1295\u12eb\u1275 \u12f3\u130d\u121d \u12ed\u1206\u1293\u120d.",ar:"\u0633\u064a\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0644\u0639\u0628\u0629 \u0644\u062a\u0635\u0628\u062d \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0633\u0627\u0631\u064a\u0629 \u0627\u0644\u0645\u0641\u0639\u0648\u0644.",
hy:"\u053d\u0561\u0572\u0568 \u056f\u057e\u0565\u0580\u057d\u056f\u057d\u057e\u056b \u0570\u0561\u0574\u0561\u0580 \u0583\u0578\u0583\u0578\u056d\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056b \u0578\u0582\u056a\u056b \u0574\u0565\u057b \u0567 \u0574\u057f\u0576\u0578\u0582\u0574:",az:"Oyun take t\u0259siri d\u0259yi\u015fiklikl\u0259r \u00fc\u00e7\u00fcn yenid\u0259n olacaq.",eu:"Partida izango du eragina aldaketak berrabiarazi egingo da.",be:"\u0413\u0443\u043b\u044c\u043d\u044f \u0431\u0443\u0434\u0437\u0435 \u0430\u0434\u043d\u043e\u045e\u043b\u0435\u043d\u0430\u044f \u0434\u043b\u044f \u0437\u043c\u0435\u043d\u044b \u045e\u0441\u0442\u0443\u043f\u0456\u043b\u0456 \u045e \u0441\u0456\u043b\u0443.",
bn:"\u0996\u09c7\u09b2\u09be \u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0 \u0995\u09b0\u09be\u09b0 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09aa\u09c1\u09a8\u09b0\u09be\u09af\u09bc \u0986\u09b0\u09ae\u09cd\u09ad \u0995\u09b0\u09be \u09b9\u09ac\u09c7 \u09a8\u09be\u0964",bs:"Igra \u0107e biti ponovo pokrenut da bi promjene stupile na snagu.",bg:"\u0418\u0433\u0440\u0430\u0442\u0430 \u0449\u0435 \u0431\u044a\u0434\u0435 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430\u043d \u0437\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0434\u0430 \u0432\u043b\u044f\u0437\u0430\u0442 \u0432 \u0441\u0438\u043b\u0430.",
my:"\u1021\u1006\u102d\u102f\u1015\u102b\u1002\u102d\u1019\u103a\u1038\u101a\u1030\u1021\u1000\u103b\u102d\u102f\u1038\u101e\u1000\u103a\u101b\u1031\u102c\u1000\u103a\u1019\u103e\u102f\u1019\u103e\u1021\u1015\u103c\u1031\u102c\u1004\u103a\u1038\u1021\u101c\u1032\u1010\u103d\u1031\u1019\u103b\u102c\u1038\u1021\u1010\u103d\u1000\u103a\u1015\u103c\u1014\u103a\u101c\u100a\u103a\u1005\u1010\u1004\u103a\u101c\u102d\u1019\u103a\u1037\u1019\u100a\u103a\u104b",ca:"El joc es reiniciar\u00e0 perqu\u00e8 els canvis tinguin efecte.",
ny:"masewera adzakhala restarted kwa kusintha kuti zotsatira kudzachitika.",zh:"\u672c\u573a\u6bd4\u8d5b\u5c06\u91cd\u65b0\u542f\u52a8\uff0c\u4ee5\u4f7f\u66f4\u6539\u751f\u6548\u3002",co:"U ghjocu ser\u00e0 capitaliserez di i cambiamenti di effettu sbarcu.",hr:"Igra \u0107e biti nastavljena za promjene stupile na snagu.",cs:"Hra bude restartov\u00e1n, aby se zm\u011bny projevily.",da:"Spillet vil blive genstartet for at \u00e6ndringerne kan tr\u00e6de i kraft.",nl:"Het spel zal worden opgestart om de wijzigingen te effect.",
en:"The game will be restarted for the changes to take effect.",eo:"La ludo estos rekomencita por la \u015dan\u011doj al preni efikon.",et:"M\u00e4ng taask\u00e4ivitatakse, et muudatused j\u00f5ustuvad.",fi:"Peli k\u00e4ynnistett\u00e4v\u00e4 uudelleen, jotta muutokset tulevat voimaan.",fr:"Le jeu sera red\u00e9marr\u00e9 pour que les modifications \u00e0 l'effet de prendre.",gl:"O xogo reiniciarase para que os cambios te\u00f1en efecto.",ka:"\u10d7\u10d0\u10db\u10d0\u10e8\u10d8 \u10d8\u10e5\u10dc\u10d4\u10d1\u10d0 \u10d2\u10d0\u10d3\u10d0\u10e2\u10d5\u10d8\u10e0\u10d7\u10d5\u10d0 \u10ea\u10d5\u10da\u10d8\u10da\u10d4\u10d1\u10d4\u10d1\u10d8 \u10eb\u10d0\u10da\u10d0\u10e8\u10d8.",
de:"Das Spiel wird f\u00fcr die \u00c4nderungen wirksam neu gestartet werden.",el:"\u03a4\u03bf \u03c0\u03b1\u03b9\u03c7\u03bd\u03af\u03b4\u03b9 \u03b8\u03b1 \u03be\u03b1\u03bd\u03b1\u03c1\u03c7\u03af\u03c3\u03b5\u03b9 \u03c4\u03b9\u03c2 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2 \u03bd\u03b1 \u03c4\u03b5\u03b8\u03bf\u03cd\u03bd \u03c3\u03b5 \u03b9\u03c3\u03c7\u03cd.",gu:"\u0ab0\u0aae\u0aa4 \u0aaa\u0acd\u0ab0\u0aad\u0abe\u0ab5\u0aae\u0abe\u0a82 \u0ab2\u0abe\u0ab5\u0ab5\u0abe \u0aae\u0abe\u0a9f\u0ac7 \u0aab\u0ac7\u0ab0\u0aab\u0abe\u0ab0\u0acb \u0aae\u0abe\u0a9f\u0ac7 \u0aa8\u0ac7 \u0aaa\u0ac1\u0aa8\u0a83\u0aaa\u0acd\u0ab0\u0abe\u0ab0\u0a82\u0aad \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7.",
ht:"Pral jw\u00e8t la dwe rek\u00f2manse pou f\u00e8 chanjman yo yo pran ef\u00e8.",ha:"A game za a restarted ga canje-canje ya dauki sakamako.",he:"\u05d4\u05de\u05e9\u05d7\u05e7 \u05d9\u05d5\u05e4\u05e2\u05dc \u05de\u05d7\u05d3\u05e9 \u05db\u05d3\u05d9 \u05e9\u05d4\u05e9\u05d9\u05e0\u05d5\u05d9\u05d9\u05dd \u05d0\u05e4\u05e7\u05d8 \u05dc\u05e7\u05d7\u05ea.",hi:"\u0916\u0947\u0932 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928\u094b\u0902 \u0915\u094b \u092a\u094d\u0930\u092d\u093e\u0935\u0940 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092a\u0941\u0928: \u092a\u094d\u0930\u093e\u0930\u0902\u092d \u0915\u0930 \u0926\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e\u0964",
hu:"A j\u00e1t\u00e9k \u00fajra kell ind\u00edtani a m\u00f3dos\u00edt\u00e1sok \u00e9rv\u00e9nybe l\u00e9pjenek.",id:"Permainan akan restart untuk perubahan efek take.",ga:"Beidh an cluiche a atos\u00fa chun na hathruithe ar theacht \u00e9ifeacht.",ig:"The egwuregwu ga-restarted maka mgbanwe-mmet\u1ee5ta.",is:"Leikurinn ver\u00f0ur a\u00f0 endurr\u00e6sa til a\u00f0 breytingarnar taki gildi.",it:"Il gioco sar\u00e0 riavviato per le modifiche diventano effettive.",ja:"\u5909\u66f4\u3092\u9069\u7528\u3059\u308b\u305f\u3081\u306b\u3001\u30b2\u30fc\u30e0\u304c\u518d\u958b\u3055\u308c\u307e\u3059\u3002",
jv:"Game bakal diwiwiti kanggo owah-owahan kanggo efek njupuk.",kn:"\u0c86\u0c9f\u0ca6 \u0c95\u0cbe\u0cb0\u0ccd\u0caf\u0c97\u0ca4\u0cb5\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cb5\u0cc6 \u0cac\u0ca6\u0cb2\u0cbe\u0cb5\u0ca3\u0cc6\u0c97\u0cb3\u0cc1 \u0cae\u0cb0\u0cb3\u0cbf \u0c86\u0cb0\u0c82\u0cad\u0c97\u0cc6\u0cc2\u0cb3\u0ccd\u0cb3\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6.",kk:"\u043e\u0439\u044b\u043d \u043a\u04af\u0448\u0456\u043d\u0435 \u04e9\u0437\u0433\u0435\u0440\u0456\u0441\u0442\u0435\u0440 \u04af\u0448\u0456\u043d \u049b\u0430\u0439\u0442\u0430 \u0456\u0441\u043a\u0435 \u0430\u0441\u044b\u0440\u044b\u043b\u0430\u0442\u044b\u043d \u0431\u043e\u043b\u0430\u0434\u044b.",
km:"\u1780\u17b6\u179a\u1794\u17d2\u179a\u1780\u17bd\u178f\u1793\u17c1\u17c7\u1793\u17b9\u1784\u178f\u17d2\u179a\u17bc\u179c\u1794\u17b6\u1793\u1785\u17b6\u1794\u17cb\u1795\u17d2\u178a\u17be\u1798\u17a1\u17be\u1784\u179c\u17b7\u1789\u179f\u1798\u17d2\u179a\u17b6\u1794\u17cb\u1780\u17b6\u179a\u1795\u17d2\u179b\u17b6\u179f\u17cb\u1794\u17d2\u178f\u17bc\u179a\u178a\u17be\u1798\u17d2\u1794\u17b8\u17b1\u17d2\u1799\u1798\u17b6\u1793\u1794\u17d2\u179a\u179f\u17b7\u1791\u17d2\u1792\u17b7\u1799\u1780\u1794\u17b6\u1793\u17d4",
rw:"umukino izaba restarted kuko Amahinduka INGARUKA gufata.",ky:"\u043e\u044e\u043d \u0430\u043b\u044b\u043f \u0442\u0438\u0439\u0438\u0448\u0442\u04af\u04af \u04e9\u0437\u0433\u04e9\u0440\u0442\u04af\u04af\u043b\u04e9\u0440\u0434\u04af \u043a\u0438\u0440\u0433\u0438\u0437\u04af\u04af \u043a\u0435\u0440\u0435\u043a \u0431\u043e\u043b\u043e\u0442.",ko:"\ubcc0\uacbd\uc0ac\ud56d\uc744 \uc801\uc6a9\ud558\uae30 \uc704\ud574 \uac8c\uc784\uc774 \uc7ac\uc2dc\uc791\ub429\ub2c8\ub2e4.",ku:"L\u00eestik d\u00ea ji bo guhertin\u00ean di bandora take ji n\u00fb ve.",
la:"In ludo est restarted et mutationes ad effectum.",lb:"De Match g\u00ebtt fir d'\u00c4nnerungen ze huelen Effekt restarted ginn.",lo:"\u0ec0\u0e81\u0ea1\u0e88\u0eb0\u0ec4\u0e94\u0ec9\u0eae\u0eb1\u0e9a\u0e81\u0eb2\u0e99\u0ec0\u0ea5\u0eb5\u0ec8\u0ea1\u0e95\u0ebb\u0ec9\u0e99\u0ec3\u0eab\u0ea1\u0ec8\u0eaa\u0ecd\u0eb2\u0ea5\u0eb1\u0e9a\u0e81\u0eb2\u0e99\u0e9b\u0ec8\u0ebd\u0e99\u0ec1\u0e9b\u0e87\u0e97\u0eb5\u0ec8\u0e88\u0eb0\u0ea1\u0eb5\u0e9c\u0ebb\u0e99\u0e81\u0eb0\u0e97\u0ebb\u0e9a\u0e97\u0eb5\u0ec8\u0ec0\u0ead\u0ebb\u0eb2\u0ea1\u0eb2.",
lt:"\u017daidimas bus paleista i\u0161 \u012fsigaliot\u0173 pakeitimai.",lv:"Sp\u0113le b\u016bs j\u0101ats\u0101k, lai izmai\u0146as st\u0101tos sp\u0113k\u0101.",mk:"\u0418\u0433\u0440\u0430\u0442\u0430 \u045c\u0435 \u0441\u0435 \u0440\u0435\u0441\u0442\u0430\u0440\u0442\u0438\u0440\u0430 \u0437\u0430 \u0434\u0430 \u0438\u043c\u0430\u0430\u0442 \u043f\u0440\u043e\u043c\u0435\u043d\u0438\u0442\u0435 \u0435\u0444\u0435\u043a\u0442.",mg:"Ny lalao dia ho averina alefa ny fiovana ho nanan-kery.",ms:"permainan akan dimulakan semula untuk perubahan akan berkuat kuasa.",
ml:"\u0d17\u0d46\u0d2f\u0d3f\u0d02 \u0d0e\u0d1f\u0d41\u0d24\u0d4d\u0d24\u0d41 \u0d2a\u0d4d\u0d30\u0d2d\u0d3e\u0d35\u0d02 \u0d2e\u0d3e\u0d31\u0d4d\u0d31\u0d19\u0d4d\u0d19\u0d7e \u0d2a\u0d41\u0d28\u0d30\u0d3e\u0d30\u0d02\u0d2d\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d02 \u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d02.",mt:"Il-log\u0127ba se jer\u0121a 'jinbeda g\u0127all-bidliet g\u0127all jid\u0127lu fis-se\u0127\u0127.",mi:"Ka te k\u0113mu kia t\u012bmata an\u014d hoki te huringa ki te p\u0101nga tango.",mr:"\u0916\u0947\u0933 \u092a\u0930\u093f\u0923\u093e\u092e \u092c\u0926\u0932 \u092a\u0941\u0928\u094d\u0939\u093e \u0938\u0941\u0930\u0942 \u0939\u094b\u0908\u0932.",
mn:"\u0442\u043e\u0433\u043b\u043e\u043e\u043c \u0430\u0432\u0430\u0445 \u043d\u04e9\u043b\u04e9\u04e9 \u04e9\u04e9\u0440\u0447\u043b\u04e9\u043b\u0442 \u043d\u044c \u0434\u0430\u0445\u0438\u043d \u044d\u0445\u043b\u04af\u04af\u043b\u044d\u0445 \u0431\u043e\u043b\u043d\u043e.",ne:"\u0916\u0947\u0932 \u0932\u0947 \u092a\u094d\u0930\u092d\u093e\u0935 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u0932\u093e\u0917\u093f \u092a\u0941\u0928\u0903 \u0938\u0941\u0930\u0941 \u0917\u0930\u093f\u0928\u0947\u091b\u0964",
nb:"Spillet vil bli startet p\u00e5 nytt for at endringene skal tre i kraft.",no:"Spillet vil bli startet p\u00e5 nytt for at endringene skal tre i kraft.",or:"\u0b16\u0b47\u0b33 \u0b2a\u0b4d\u0b30\u0b2d\u0b3e\u0b2c\u0b3f\u0b24 \u0b15\u0b41 \u0b2a\u0b30\u0b3f\u0b2c\u0b30\u0b4d\u0b24\u0b4d\u0b24\u0b28\u0b30 \u0b2a\u0b41\u0b28\u0b30\u0b3e\u0b30\u0b2e\u0b4d\u0b2d \u0b39\u0b47\u0b2c\u0964",pa:"\u0a16\u0a47\u0a21 \u0a28\u0a42\u0a70 \u0a24\u0a2c\u0a26\u0a40\u0a32\u0a40 \u0a28\u0a42\u0a70 \u0a32\u0a3e\u0a17\u0a42 \u0a15\u0a30\u0a28 \u0a32\u0a08 \u0a2e\u0a41\u0a5c \u0a1a\u0a3e\u0a32\u0a42 \u0a39\u0a4b \u0a1c\u0a3e\u0a35\u0a47\u0a17\u0a3e.",
fa:"\u0627\u06cc\u0646 \u0628\u0627\u0632\u06cc \u062e\u0648\u0627\u0647\u062f \u0634\u062f \u0628\u0631\u0627\u06cc \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u0627\u062b\u0631 \u0631\u0627 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u06cc \u0645\u062c\u062f\u062f.",pl:"Gra zostanie wznowiona, aby zmiany efektu podj\u0105\u0107.",ps:"\u062f\u0627 \u0644\u0648\u0628\u0647 \u0628\u0647 \u062f \u062a\u0647 \u064a\u0648\u0633\u0626 \u0627\u063a\u06d0\u0632 \u0628\u062f\u0644\u0648\u0646\u0648\u0646\u0647 \u067e\u064a\u0644 \u0634\u064a.",
pt:"O jogo ser\u00e1 reiniciado para que as altera\u00e7\u00f5es t\u00eam efeito.",ro:"Jocul va fi repornit pentru ca modific\u0103rile s\u0103 aib\u0103 efect.",ru:"\u0418\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0430 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0442\u0443\u043f\u0438\u043b\u0438 \u0432 \u0441\u0438\u043b\u0443.",sd:"\u0634\u06aa\u0627\u0631 \u0627\u062b\u0631 \u0648\u067a\u06bb \u062c\u064a \u062a\u0628\u062f\u064a\u0644\u064a\u0646 \u0644\u0627\u0621 restarted \u06aa\u064a\u0648 \u0648\u064a\u0646\u062f\u0648.",
sm:"a restarted le taaloga mo le suiga i aafiaga ave.",sr:"\u0423\u0442\u0430\u043a\u043c\u0438\u0446\u0430 \u045b\u0435 \u0441\u0435 \u043f\u043e\u043d\u043e\u0432\u043e \u043f\u043e\u043a\u0440\u0435\u043d\u0443\u0442\u0438 \u0437\u0430 \u043f\u0440\u043e\u043c\u0435\u043d\u0435 \u0441\u0442\u0443\u043f\u0435 \u043d\u0430 \u0441\u043d\u0430\u0433\u0443.",gd:"Th\u00e8id an g\u00e8am a th\u00f2iseachadh as \u00f9r airson na h-atharrachaidhean a ghabhail buaidh.",sn:"Game vachapiwa ritangezve kuchinja kutora maturo.",
si:"\u0d9a\u0dca\u0dbb\u0dd3\u0da9\u0dcf\u0dc0 \u0d9c\u0db1\u0dd2\u0dad\u0dca \u0d9a\u0dca\u0dbb\u0dd2\u0dba\u0dcf\u0dad\u0dca\u0db8\u0d9a \u0d9a\u0dd2\u0dbb\u0dd3\u0db8\u0da7 \u0dc0\u0dd9\u0db1\u0dc3\u0dca\u0d9a\u0db8\u0dca \u0dc3\u0db3\u0dc4\u0dcf \u0db1\u0dd0\u0dc0\u0dad \u0d86\u0dbb\u0db8\u0dca\u0db7 \u0d9a\u0dbb\u0db1\u0dd4 \u0d87\u0dad.",sk:"Hra sa re\u0161tartuje, aby sa zmeny prejavili.",sl:"Igra se bo ponovno za spremembe za\u010dele veljati.",so:"Ciyaarta ayaa la bilaabmay doonaa isbedelada in uu saamayn qaadataan.",
st:"papali e tla qadilwe botjha bakeng sa liphetoho ho e le hantle tsa nka.",es:"El juego se reiniciar\u00e1 para que los cambios surtan efecto.",su:"Kaulinan bakal restarted keur parobahan pangaruh nyokot.",sw:"mchezo kuanzishwa upya ili mabadiliko athari kuchukua.",sv:"Spelet kommer att startas f\u00f6r att \u00e4ndringarna ska tr\u00e4da i kraft.",ta:"\u0bb5\u0bbf\u0bb3\u0bc8\u0baf\u0bbe\u0b9f\u0bcd\u0b9f\u0bc1 \u0b9a\u0bc6\u0baf\u0bb2\u0bcd\u0baa\u0b9f\u0ba4\u0bcd\u0ba4\u0bc1\u0bb5\u0b99\u0bcd\u0b95\u0bc1\u0bae\u0bcd \u0bae\u0bbe\u0bb1\u0bcd\u0bb1\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bae\u0bb1\u0bc1\u0ba4\u0bc6\u0bbe\u0b9f\u0b95\u0bcd\u0b95\u0bae\u0bcd \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0baa\u0bcd\u0baa\u0b9f \u0bb5\u0bc7\u0ba3\u0bcd\u0b9f\u0bc1\u0bae\u0bcd.",
te:"\u0c17\u0c47\u0c2e\u0c4d \u0c2a\u0c4d\u0c30\u0c2d\u0c3e\u0c35\u0c3e\u0c28\u0c3f\u0c15\u0c3f \u0c2e\u0c3e\u0c30\u0c4d\u0c2a\u0c41\u0c32\u0c41 \u0c2a\u0c41\u0c28\u0c03\u0c2a\u0c4d\u0c30\u0c3e\u0c30\u0c02\u0c2d\u0c3f\u0c02\u0c1a\u0c3e\u0c30\u0c41 \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f.",tg:"\u0414\u0430\u0440 \u0431\u043e\u0437\u0438\u0438 \u043c\u0435\u0448\u0430\u0432\u0430\u0434, \u0431\u0430\u0440\u043e\u0438 \u0432\u043e\u0440\u0438\u0434 \u043d\u0430\u043c\u0443\u0434\u0430\u043d\u0438 \u0442\u0430\u0493\u0439\u0438\u0440\u043e\u0442 \u0431\u0430 \u0442\u0430\u044a\u0441\u0438\u0440\u0438 \u0431\u0438\u0433\u0438\u0440\u0430\u0434 \u0448\u0443\u0440\u045e\u044a.",
th:"\u0e40\u0e01\u0e21\u0e08\u0e30\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e01\u0e32\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e21\u0e35\u0e1c\u0e25\u0e1a\u0e31\u0e07\u0e04\u0e31\u0e1a\u0e43\u0e0a\u0e49",tk:"O\u00fdun take t\u00e4siri \u00fc\u00fdtge\u015fmeler ga\u00fdtadan i\u015flener.",tl:"Ang laro ay ma-restart para sa mga pagbabago upang magkabisa.",tr:"Oyun almak etkisine de\u011fi\u015fiklikler i\u00e7in yeniden ba\u015flat\u0131lacak.",
tt:"\u0423\u0435\u043d \u0430\u0447\u044b\u043b\u0443 \u0442\u04d9\u044d\u0441\u0438\u0440 \u04af\u0437\u0433\u04d9\u0440\u0435\u0448\u043b\u04d9\u0440 \u04e9\u0447\u0435\u043d \u044f\u043d\u0430\u0434\u044b \u0431\u0443\u043b\u0430\u0447\u0430\u043a.",ug:"\u0626\u0648\u064a\u06c7\u0646 \u0626\u06c6\u062a\u0643\u06c8\u0632\u06c8\u06cb\u06d0\u0644\u0649\u0634 \u0626\u06c8\u0646\u06c8\u0645\u06af\u06d5 \u0626\u06c6\u0632\u06af\u0649\u0631\u0649\u0634 \u0642\u0627\u064a\u062a\u0649\u062f\u0649\u0646 \u0628\u0648\u0644\u0649\u062f\u06c7.",
uk:"\u0413\u0440\u0430 \u0431\u0443\u0434\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u0434\u043b\u044f \u0437\u043c\u0456\u043d\u0438 \u0432\u0441\u0442\u0443\u043f\u0438\u043b\u0438 \u0432 \u0441\u0438\u043b\u0443.",ur:"\u06a9\u06be\u06cc\u0644 \u0644\u06d2 \u0627\u062b\u0631 \u0645\u06cc\u06ba \u062a\u0628\u062f\u06cc\u0644\u06cc \u06a9\u06d2 \u0644\u0626\u06d2 \u062f\u0648\u0628\u0627\u0631\u06c1 \u0634\u0631\u0648\u0639 \u06a9\u06cc\u0627 \u062c\u0627\u0626\u06d2 \u06af\u0627.",
uz:"O'yin take ta'sir o'zgarishlar qayta boshlanadi.",vi:"Tr\u00f2 ch\u01a1i s\u1ebd \u0111\u01b0\u1ee3c kh\u1edfi \u0111\u1ed9ng l\u1ea1i \u0111\u1ec3 thay \u0111\u1ed5i c\u00f3 hi\u1ec7u l\u1ef1c thi h\u00e0nh m\u1ea5t.",cy:"Bydd y g\u00eam yn cael ei ailgychwyn i'r newidiadau ddod i rym.",fy:"De wedstriid wurdt op gong brocht om de feroaringen troch te fieren.",xh:"Lo mdlalo uya iqaliswe ukuze notshintsho isiphumo athathe.",yi:"\u05d3\u05e2\u05e8 \u05e9\u05e4\u05bc\u05d9\u05dc \u05d5\u05d5\u05e2\u05d8 \u05d6\u05d9\u05d9\u05df \u05e8\u05d9\u05e1\u05d8\u05d0\u05b7\u05e8\u05d8\u05d9\u05d3 \u05e4\u05bf\u05d0\u05b7\u05e8 \u05d3\u05d9 \u05e2\u05e0\u05d3\u05e2\u05e8\u05d5\u05e0\u05d2\u05e2\u05df \u05e6\u05d5 \u05e0\u05e2\u05de\u05e2\u05df \u05d5\u05d5\u05d9\u05e8\u05e7\u05d5\u05e0\u05d2.",
yo:"Aw\u1ecdn ere yoo wa ni tun fun aw\u1ecdn ayipada lati Ya aw\u1ecdn ipa.",zu:"Lo mdlalo uzobe kabusha ukuze izinguquko kuyoba nomphumela."};function merge(a,b){for(var c=$jscomp.makeIterator(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,b.hasOwnProperty(d)&&b[d]instanceof Object?Object.assign(b[d],merge(a[d],b[d])):void 0!==b[d]&&null!==b[d]&&(a[d]=b[d]);return a}L10nMV.Initialize();L10nMV.SceneManager_goto=SceneManager["goto"];
SceneManager["goto"]=function(a){a!==Scene_Boot&&L10nMV.NeedSetup?L10nMV.SceneManager_goto.call(this,Scene_LanguageSetup):L10nMV.SceneManager_goto.call(this,a)};function Scene_LanguageSetup(){this.initialize.apply(this,arguments)}Scene_LanguageSetup.prototype=Object.create(Scene_Base.prototype);Scene_LanguageSetup.prototype.constructor=Scene_LanguageSetup;Scene_LanguageSetup.prototype.initialize=function(){Scene_Base.prototype.initialize.call(this);DataManager.setupNewGame();this.createWindowLayer()};
Scene_LanguageSetup.prototype.createWindowLayer=function(){Scene_Base.prototype.createWindowLayer.call(this);this._window=new Window_LanguageSetup;this.addWindow(this._window);this._window.open()};Scene_LanguageSetup.prototype.isReady=function(){return null!==$gameSystem&&Scene_Base.prototype.isReady.call(this)};function Window_LanguageSetup(){this.initialize.apply(this,arguments)}function Window_LanguageSetup(){this.initialize.apply(this,arguments)}Window_LanguageSetup.prototype=Object.create(Window_Command.prototype);
Window_LanguageSetup.prototype.constructor=Window_LanguageSetup;Window_LanguageSetup.prototype.initialize=function(){Window_Command.prototype.initialize.call(this,0,0);this.updatePlacement();this.openness=0;this.refresh();this.updateCursor()};Window_LanguageSetup.prototype.updatePlacement=function(){this.width=Graphics.boxWidth/2;480<this.width&&(this.width=480);this.x=Graphics.boxWidth/2-this.width/2;this.y=Graphics.boxHeight/2-this.height/2};Window_LanguageSetup.prototype.itemHeight=function(){return this.lineHeight()};
Window_LanguageSetup.prototype.maxItems=function(){return 2};Window_LanguageSetup.prototype.callOkHandler=function(){var a=this.currentSymbol();this.isHandled(a)?this.callHandler(a):this.isHandled("ok")?Window_Selectable.prototype.callOkHandler.call(this):this.activate()};
Window_LanguageSetup.prototype.makeCommandList=function(){var a=L10nMV.GetDeviceLanguage();L10nMV.AvailableLanguages.contains(a)||(a=L10nMV.GlobalLanguage);L10nMV.ChangedLanguage=L10nMV.LocalLanguage=a;this.addCommand(L10nMV.GetOptionText(L10nMV.ChangedLanguage),"L10nMV.LocalLanguage",!0);this.addCommand("OK","confirm")};Window_LanguageSetup.prototype.statusWidth=function(){return 120};
Window_LanguageSetup.prototype.drawItem=function(a){if(!(a>=this._list.length)){var b=this.itemRectForText(a),c=this.statusWidth(),d=b.width-c;this.resetTextColor();this.changePaintOpacity(this.isCommandEnabled(a));switch(this.commandSymbol(a)){default:this.drawText("< "+this.commandName(a),b.x,b.y,d,"left");this.drawText(this.statusText(a)+" >",d,b.y,c,"right");break;case "confirm":this.drawText(this.commandName(a),b.x,b.y,b.width,"center")}}};Window_LanguageSetup.prototype.statusText=function(a){switch(this.commandSymbol(a)){case "L10nMV.LocalLanguage":return L10nMV.Iso639_1Names[L10nMV.ChangedLanguage]}return""};
Window_LanguageSetup.prototype.cursorLeft=function(a){a=this.index();switch(this.commandSymbol(a)){case "L10nMV.LocalLanguage":L10nMV.ChangeToPreviousLanguage(),this._list[a].name=L10nMV.GetOptionText(L10nMV.ChangedLanguage),this.redrawItem(a)}};Window_LanguageSetup.prototype.cursorRight=function(a){a=this.index();switch(this.commandSymbol(a)){case "L10nMV.LocalLanguage":L10nMV.ChangeToNextLanguage(),this._list[a].name=L10nMV.GetOptionText(L10nMV.ChangedLanguage),this.redrawItem(a)}};
Window_LanguageSetup.prototype.processOk=function(){var a=this.index();switch(this.commandSymbol(a)){case "L10nMV.LocalLanguage":L10nMV.ChangeToNextLanguage();this._list[a].name=L10nMV.GetOptionText(L10nMV.ChangedLanguage);this.redrawItem(a);break;case "confirm":ConfigManager.save(),SoundManager.playOk(),this.close(),setTimeout(function(){window.location.reload()},2E3)}};