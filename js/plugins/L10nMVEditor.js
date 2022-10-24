/*:
 * @plugindesc This plugin helps making language pack for L10nMV plugin.
 * Version : Release 1.4.7
 * Commit hash : cbd1a36f577d658a34f8d302b3ecf328c3b0be5f
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 
 * |                                                                  |
 * |                  ===== L10nMVEditor.js =====                     |
 * |                                                                  |
 * | This plugin helps making new language pack for L10nMV plugin.    |
 * | Created by Creta Park (https://creft.me/cretapark)               |
 * | License : MIT                                                    |
 * | GitHub page : https://github.com/Creta5164/L10nMV.js             |
 * | Recommanded MV version : 1.6.2^                                  |
 * |                                                                  |
 * | Step to exporting language pack template :                       |
 * | 0. Finish your game after completing the inspection of your game |
 * |    (THIS IS IMPORTANT FOR QUALITY OF YOUR GAME)                  |
 * | 1. Enable this plugin into your project. (you've already does!)  |
 * | 2. Start test play.                                              |
 * | 3. Open developer console. (press F12)                           |
 * | 4. In `Console` tab, type `L10nMVEditor.CreateTemplate()`.       |
 * | 5. When it's done, `lang/exported` directory is created in your  |
 * |    project. This is everything of your project's text data.      |
 * | 6. Change `exported` directory to localization target country    |
 * |    code. (ISO 639-1)                                             |
 * |    i.e. : ko, en, jp, ca, ru...                                  |
 * | 7. Open the files in the folder with a text editor and edit the  |
 * |    text according to localize them what do you want.             |
 * | 8. If you want your game allow translate from unofficial,        |
 * |    you leave exported language pack in your public release build |
 * |    for make help them translate easy way your game.              |
 * |                                                                  |
 * | Note. If you need make font atlas (image based font set),        |
 * |       Open developer console as same step 3, and type            |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("iso682-1 code")` |
 * |       Then L10nMVEditor generates all text of language pack.     |
 * |       For example :                                              |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("en")`            |
 * |       -> exports texts to english(en) language pack.             |
 * |                                                                  |
 * |       `L10nMVEditor.CreateAllUsedGlyphFromPack("ja")`            |
 * |       -> exports texts to japanese(ja) language pack.            |
 * |                                                                  |
 * 
 * @param whitelist-plugins
 * @text Whitelisted plugins
 * @type text[]
 * @desc Add plugins name you want to replace plugins parameters.
 */

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(c){var d=0;return function(){return d<c.length?{done:!1,value:c[d++]}:{done:!0}}};$jscomp.arrayIterator=function(c){return{next:$jscomp.arrayIteratorImpl(c)}};$jscomp.makeIterator=function(c){var d="undefined"!=typeof Symbol&&Symbol.iterator&&c[Symbol.iterator];return d?d.call(c):$jscomp.arrayIterator(c)};function L10nMVEditor(){throw Error("This is a static class.");}alert("You activated L10nMVEditor.js plugin in this game.\nIf you testing in your game for production side, must exclude this editor-side plugin later.\n\nPlugin manual are in plugin description.");
L10nMVEditor.VERSION="Release 1.4.7";L10nMVEditor.COMMIT_HASH="cbd1a36f577d658a34f8d302b3ecf328c3b0be5f";L10nMVEditor.DATA_DIR="./data";L10nMVEditor.LANG_DIR="./lang";L10nMVEditor.DEFAULT="/exported";L10nMVEditor.EXPORT_PATH=L10nMVEditor.LANG_DIR+L10nMVEditor.DEFAULT;L10nMVEditor.REG_MAP_FILE=/Map\d{3}\.json/;L10nMVEditor.IsPlayTest=Utils.isOptionValid("test");L10nMVEditor.MapData=null;L10nMVEditor.CommonEventData=null;L10nMVEditor.ExportedObjects=null;L10nMVEditor.IOFile=require("fs");
L10nMVEditor.EventCode={Dialog:401,Choice:102,ChoiceWhen:402,ScrollText:405};L10nMVEditor.CodeEvent={401:"Dialog",102:"Choice",402:"ChoiceWhen",405:"ScrollText"};
L10nMVEditor.CreateTemplate=function(){console.info(" \ud83c\udf10\ud83d\udd27 L10nMVEditor.js\n    Version : "+this.VERSION+"\nCommit hash : "+this.COMMIT_HASH);console.info(" \ud83c\udf10\ud83d\udd27 L10nMVEditor : Starting export project string data...");console.info("                    : This may take a few minutes.");console.info("                    : String json files will be stored into './lang/exported'.");if(L10nMVEditor.IsPlayTest){L10nMVEditor.MapData=[];L10nMVEditor.CommonEventData=
[];try{L10nMVEditor.IOFile.existsSync(L10nMVEditor.LANG_DIR)||L10nMVEditor.IOFile.mkdirSync(L10nMVEditor.LANG_DIR);if(L10nMVEditor.IOFile.existsSync(L10nMVEditor.EXPORT_PATH)){L10nMVEditor.RemoveDirectory(L10nMVEditor.EXPORT_PATH);for(var c=1E4;0<c--;);}L10nMVEditor.IOFile.mkdirSync(L10nMVEditor.EXPORT_PATH);L10nMVEditor.ExportedObjects={};L10nMVEditor.CreateTemplateSystemString(L10nMVEditor.ExportedObjects);L10nMVEditor.CreateTemplateCommonEventsString(L10nMVEditor.ExportedObjects);L10nMVEditor.CreateTemplatePluginParametersString(L10nMVEditor.ExportedObjects);
L10nMVEditor.CreateTemplateMapEventsString(L10nMVEditor.ExportedObjects);L10nMVEditor.CreatePeekerFile();L10nMVEditor.CreateUnofficialTransitionGuideFile()}catch(d){console.error("\u2757 L10nMVEditor : An exception has occured while creating template files.");(console.error||console.log).call(console,d.stack||d);return}console.info(" \ud83c\udf10\ud83d\udd27 L10nMVEditor : Creating template language pack is successfully created.");console.info("                    : String json files will be stored into './lang/exported'.")}else console.error("\u2757 L10nMVEditor : Current session is production mode.")};
L10nMVEditor.RemoveDirectory=function(c){var d=L10nMVEditor.IOFile.readdirSync(c),b;d=$jscomp.makeIterator(d);for(b=d.next();!b.done;b=d.next())b=c+"/"+b.value,L10nMVEditor.IOFile.lstatSync(b).isDirectory()?L10nMVEditor.RemoveDirectory(b):L10nMVEditor.IOFile.unlinkSync(b);for(d=1E4;0<d--;);L10nMVEditor.IOFile.rmdirSync(c)};
L10nMVEditor.CreateTemplateSystemString=function(c){for(var d,b=$jscomp.makeIterator(L10nMVEditor.SystemDataPair),a=b.next();!a.done;a=b.next()){a=a.value;if(!L10nMVEditor.IOFile.existsSync(L10nMVEditor.DATA_DIR+"/"+a.src)){console.warn("\ud83d\uded1 L10nMVEditor : 'data/"+a.src+"' not found.");break}d=L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR+"/"+a.src);if(d=JSON.parse(d))if(d=L10nMVEditor.CopyStringsFromObject(d))c[a.src]=d,d=JSON.stringify(d,null,4),L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.EXPORT_PATH+
"/"+a.src,d),console.info("\u2705 L10nMVEditor : System strings '"+a.src.substring(0,a.src.length-5)+"' successfully exported.")}};
L10nMVEditor.CreateTemplateCommonEventsString=function(c){var d={},b,a=0;if(L10nMVEditor.IOFile.existsSync(L10nMVEditor.DATA_DIR+"/CommonEvents.json")){var e=L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR+"/CommonEvents.json");e=JSON.parse(e);e=$jscomp.makeIterator(e);for(b=e.next();!b.done;b=e.next())(b=b.value)&&b.list&&0!==b.list.length&&(b=L10nMVEditor.ExtractFromEventList(b.list),0!==Object.keys(b).length&&(d[a]=b)),a++;c["CommonEvents.json"]=d;e=JSON.stringify(d,null,4);L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.EXPORT_PATH+
"/CommonEvents.json",e);console.info("\u2705 L10nMVEditor : Common events successfully exported.")}else console.warn("\ud83d\uded1 L10nMVEditor : Common events not found.")};
L10nMVEditor.CreateTemplatePluginParametersString=function(c){var d=PluginManager.parameters("L10nMVEditor");try{var b=JSON.parse(d["whitelist-plugins"])}catch(k){b=null}if(b)if(1===b.length&&""===b[0])console.warn("\ud83d\uded1 L10nMVEditor : Plugins whitelist is empty.");else{d={};for(var a,e,f,g=0;g<$plugins.length;g++)if(a=$plugins[g],a.status&&b.includes(a.name))if(d[a.name]=L10nMVEditor.CopyStringsFromObject(a.parameters),d[a.name])for(var h in d[a.name])d[a.name].hasOwnProperty(h)&&(value=
d[a.name][h],e=value.charAt(0),f=value.charAt(value.length-1),"{"===e&&"}"===f||"["===e&&"]"===f)&&(d[a.name][h]=L10nMVEditor.JsonParseRecursively(value));else delete d[a.name];0===Object.keys(d).length?console.warn("\ud83d\uded1 L10nMVEditor : Plugins are empty data or not contains whitelist."):(c["Plugins.json"]=d,c=JSON.stringify(d,null,4),L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.EXPORT_PATH+"/Plugins.json",c),console.info("\u2705 L10nMVEditor : Plugins successfully exported."))}else console.warn("\ud83d\uded1 L10nMVEditor : Plugins whitelist is empty.")};
L10nMVEditor.CreatePeekerFile=function(){L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.EXPORT_PATH+"/Info.json",JSON.stringify({version:L10nMVEditor.VERSION,hash:L10nMVEditor.COMMIT_HASH}))};
L10nMVEditor.CreateUnofficialTransitionGuideFile=function(){"true"!==PluginManager.parameters("L10nMV")["ignore-decrypt-language-pack"]?console.warn("\ud83d\uded1 L10nMVEditor : Ignored creating Readme.txt because L10nMV parameter 'Ignore decrypt language pack files' is disabled."):L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.LANG_DIR+"/README.txt","Hi, there.\nI'm Creta Park, creator of L10nMV.js.\n\nThis game is using L10nMV.js, it's featuring able text localization and replacing audio and images without modifying game files!\n\nOf course, you can also make your own localized language pack.\nIf not, there was no reason to open this file... right?\n\nYou can read more guide at L10nMV.js's GitHub page : \nhttps://github.com/Creta5164/L10nMV.js")};
L10nMVEditor.JsonParseRecursively=function(c){try{var d=JSON.parse(c)}catch(f){return c}if("object"!==typeof d)return d;var b;for(b in d)if(d.hasOwnProperty(b)){c=d[b];var a=c.charAt(0);var e=c.charAt(c.length-1);if("{"===a&&"}"===e||"["===a&&"]"===e)d[b]=L10nMVEditor.JsonParseRecursively(c)}return d};
L10nMVEditor.CreateTemplateMapEventsString=function(c){var d=L10nMVEditor.IOFile.readdirSync(L10nMVEditor.DATA_DIR).filter(function(l){return L10nMVEditor.REG_MAP_FILE.test(l)}),b,a,e;d=$jscomp.makeIterator(d);for(b=d.next();!b.done;b=d.next()){var f=b.value;var g=L10nMVEditor.IOFile.readFileSync(L10nMVEditor.DATA_DIR+"/"+f);try{if(g=JSON.parse(g),!g.events||0===g.events.length){console.warn("\ud83d\uded1 L10nMVEditor : '"+f+"' hasn't any events.");continue}}catch(l){console.warn("\ud83d\uded1 L10nMVEditor : Failed to load map data : '"+
f+"'");continue}b={};var h=0;g=g.events;g=$jscomp.makeIterator(g);for(a=g.next();!a.done;a=g.next()){var k=a.value;if(k){a={};var m=0;var n=!0;k=$jscomp.makeIterator(k.pages);for(e=k.next();!e.done;e=k.next())e=L10nMVEditor.ExtractFromEventList(e.value.list),0!==e.length&&(a[m]=e,n=!1),m++;n||0===a.length||(b[h]=a)}h++}0===Object.keys(b).length?console.warn("\ud83d\uded1 L10nMVEditor : '"+f+"' hasn't any events."):(c[f]=b,g=JSON.stringify(b,null,4),L10nMVEditor.IOFile.writeFileSync(L10nMVEditor.EXPORT_PATH+
"/"+f,g),console.info("\u2705 L10nMVEditor : '"+f+"' data successfully exported."))}};
L10nMVEditor.CreateAllUsedGlyphFromPack=function(c){var d=L10nMVEditor.LANG_DIR+"/"+c;L10nMVEditor.IOFile.existsSync(d)||console.warn("\ud83d\uded1 L10nMVEditor : '"+c+"' language pack doesn't exist.");var b=L10nMVEditor.IOFile.readdirSync(d),a=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2026";if(L10nMV&&L10nMV.AvailableLanguages){a+=L10nMV.Iso639_1Names[L10nMV.GlobalLanguage];a+=L10nMV.GetOptionText(L10nMV.GlobalLanguage);a+=L10nMV.GetRestartMessage(L10nMV.GlobalLanguage);
var e=$jscomp.makeIterator(L10nMV.AvailableLanguages);for(var f=e.next();!f.done;f=e.next())f=f.value,f!==L10nMV.GlobalLanguage&&(f in L10nMV.Iso639_1Names&&(a+=L10nMV.Iso639_1Names[f]),f in L10nMV.Iso639_1OptionTexts&&(a+=L10nMV.Iso639_1OptionTexts[f]),f in L10nMV.Iso639_1RestartMessages&&(a+=L10nMV.Iso639_1RestartMessages[f]))}b=$jscomp.makeIterator(b);for(e=b.next();!e.done;e=b.next())if(f=e.value,f.endsWith(".json")&&"Info.json"!==f){e=d+"/"+f;try{var g=L10nMVEditor.IOFile.readFileSync(e);g=JSON.parse(g)}catch(h){console.warn("\ud83d\uded1 L10nMVEditor : Failed to open/parse '"+
f+"' file, skipping...");continue}a+=L10nMVEditor.MergeAllStrings(g);console.info("\u2705 L10nMVEditor : Finished to collect '"+f+"' content text.")}L10nMVEditor.IOFile.writeFileSync(d+"/TextCharacters.txt",a);console.info("\u2705 L10nMVEditor : All characters of '"+c+"' is successfully exported in same directory. (TextCharacters.txt)")};
L10nMVEditor.MergeAllStrings=function(c){var d="",b;for(b in c)if(c.hasOwnProperty(b)&&c[b])switch(typeof c[b]){case "object":d+=L10nMVEditor.MergeAllStrings(c[b]);break;default:d+=c[b]}return d};
L10nMVEditor.ExtractFromEventList=function(c){if(!c||!Array.isArray(c)||0===c.length)return null;var d=[],b=0,a;c=$jscomp.makeIterator(c);for(a=c.next();!a.done;a=c.next()){var e=a.value;a=null;switch(e.code){case L10nMVEditor.EventCode.Dialog:case L10nMVEditor.EventCode.Choice:case L10nMVEditor.EventCode.ScrollText:a=e.parameters[0]}a&&(d[b++]=a)}return d};
L10nMVEditor.CopyStringsFromObject=function(c){if(!c)return null;var d=Array.isArray(c);if(d)var b=[];else if("object"===typeof c)b={};else return c;for(var a in c)c.hasOwnProperty(a)&&!L10nMVEditor.IsFilteredKeyword(a)&&L10nMVEditor.IsValidValue(c[a])&&("object"===typeof c[a]?(b[a]=L10nMVEditor.CopyStringsFromObject(c[a]),b[a]?Array.isArray(b[a])&&0===b[a].length?delete b[a]:0===Object.keys(b[a]).length&&delete b[a]:delete b[a]):c[a]&&(b[a]=c[a]));return d&&0===b.length||0===Object.keys(b).length?
null:b};L10nMVEditor.IsFilteredKeyword=function(c){switch(c){default:return!1;case "damage":case "bgm":case "bgs":case "me":case "se":case "characterName":case "animation1Name":case "animation2Name":case "battleBgm":case "defeatMe":case "gameoverMe":case "titleBgm":case "title1Name":case "victoryMe":case "locale":case "sounds":case "switches":case "variables":case "battleback1Name":case "battleback2Name":case "battlerName":case "encryptionKey":return!0}};
L10nMVEditor.IsValidValue=function(c){if(!c)return!1;c=typeof c;return"string"===c||"object"===c};
L10nMVEditor.SystemDataPair=[{name:"$dataActors",src:"Actors.json"},{name:"$dataClasses",src:"Classes.json"},{name:"$dataSkills",src:"Skills.json"},{name:"$dataItems",src:"Items.json"},{name:"$dataWeapons",src:"Weapons.json"},{name:"$dataArmors",src:"Armors.json"},{name:"$dataEnemies",src:"Enemies.json"},{name:"$dataTroops",src:"Troops.json"},{name:"$dataStates",src:"States.json"},{name:"$dataAnimations",src:"Animations.json"},{name:"$dataSystem",src:"System.json"}];