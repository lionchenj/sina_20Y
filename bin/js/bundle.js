var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.background1 = "bg/background1.png";
    Constants.background2 = "bg/background2.png";
    Constants.background3 = "bg/background3.png";
    Constants.background4 = "bg/background4.png";
    Constants.background5 = "bg/background5.png";
    Constants.background1Height = 3604;
    Constants.background2Height = 2561;
    Constants.background3Height = 2190;
    Constants.background4Height = 2559;
    Constants.background5Height = 1920;
    Constants.stageWidth = 512;
    Constants.stateHeight = Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height + Constants.background5Height + 3880;
    Constants.scaleMode = "noborder";
    Constants.screenMode = "vertical";
    Constants.sound0 = "res/sound/0.mp3";
    Constants.sound1 = "res/sound/1.mp3";
    Constants.sound2 = "res/sound/2.mp3";
    Constants.sound3 = "res/sound/3.mp3";
    Constants.sound4 = "res/sound/4.mp3";
    Constants.soundBgm = "res/sound/bgm.mp3";
    return Constants;
}());
exports.default = Constants;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Football.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/FootballAni.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 足球停止旋转
     */
    Football.prototype.stopRotate = function () {
        if (!this.bodyAni.isPlaying) {
            return;
        }
        this.bodyAni.gotoAndStop(0);
    };
    /**
     * 足球旋转
     */
    Football.prototype.playRotate = function () {
        if (this.bodyAni.isPlaying) {
            return;
        }
        this.bodyAni.play(0, true);
    };
    Football.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    Football.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return Football;
}(Laya.Sprite));
exports.default = Football;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFootballX(y) {
    var x = map[y];
    if (x) {
        return x;
    }
    else {
        return 0;
    }
}
exports.getFootballX = getFootballX;
var map = {};
map[232] = 326;
map[232] = 329;
map[234] = 330;
map[236] = 332;
map[237] = 334;
map[237] = 337;
map[239] = 339;
map[239] = 342;
map[240] = 344;
map[242] = 345;
map[244] = 347;
map[245] = 348;
map[247] = 350;
map[249] = 352;
map[250] = 353;
map[252] = 355;
map[254] = 357;
map[255] = 358;
map[257] = 360;
map[258] = 362;
map[258] = 365;
map[260] = 366;
map[262] = 368;
map[263] = 370;
map[265] = 371;
map[267] = 373;
map[268] = 375;
map[270] = 376;
map[272] = 378;
map[273] = 380;
map[275] = 381;
map[278] = 381;
map[281] = 381;
map[283] = 383;
map[286] = 383;
map[288] = 384;
map[291] = 384;
map[294] = 384;
map[296] = 386;
map[299] = 386;
map[303] = 386;
map[306] = 386;
map[309] = 386;
map[312] = 386;
map[316] = 386;
map[317] = 388;
map[321] = 388;
map[324] = 388;
map[327] = 388;
map[330] = 388;
map[334] = 388;
map[335] = 386;
map[339] = 386;
map[342] = 386;
map[345] = 386;
map[348] = 386;
map[352] = 384;
map[355] = 384;
map[357] = 383;
map[360] = 383;
map[361] = 381;
map[363] = 380;
map[365] = 378;
map[366] = 376;
map[370] = 375;
map[371] = 373;
map[373] = 371;
map[376] = 370;
map[378] = 368;
map[379] = 366;
map[381] = 365;
map[383] = 363;
map[386] = 363;
map[388] = 362;
map[389] = 360;
map[391] = 358;
map[393] = 357;
map[394] = 355;
map[396] = 353;
map[397] = 352;
map[399] = 350;
map[401] = 348;
map[404] = 348;
map[406] = 347;
map[407] = 345;
map[409] = 344;
map[411] = 342;
map[412] = 340;
map[414] = 339;
map[415] = 337;
map[417] = 335;
map[419] = 334;
map[420] = 332;
map[422] = 330;
map[425] = 329;
map[427] = 327;
map[429] = 326;
map[432] = 326;
map[433] = 324;
map[435] = 322;
map[437] = 321;
map[438] = 319;
map[440] = 317;
map[442] = 316;
map[443] = 314;
map[445] = 312;
map[448] = 312;
map[450] = 311;
map[451] = 309;
map[455] = 308;
map[456] = 306;
map[458] = 304;
map[461] = 303;
map[463] = 301;
map[465] = 299;
map[466] = 298;
map[468] = 296;
map[469] = 294;
map[471] = 293;
map[474] = 293;
map[476] = 291;
map[478] = 290;
map[479] = 288;
map[481] = 286;
map[483] = 285;
map[484] = 283;
map[486] = 281;
map[487] = 280;
map[491] = 280;
map[492] = 278;
map[494] = 276;
map[496] = 275;
map[497] = 273;
map[499] = 272;
map[499] = 272;
map[502] = 272;
map[504] = 270;
map[505] = 268;
map[507] = 267;
map[509] = 265;
map[510] = 263;
map[514] = 262;
map[515] = 260;
map[517] = 258;
map[519] = 257;
map[520] = 255;
map[522] = 254;
map[523] = 252;
map[525] = 250;
map[527] = 247;
map[528] = 245;
map[530] = 244;
map[532] = 242;
map[533] = 240;
map[533] = 237;
map[535] = 236;
map[536] = 234;
map[538] = 232;
map[540] = 231;
map[541] = 229;
map[543] = 226;
map[545] = 224;
map[546] = 222;
map[548] = 221;
map[550] = 219;
map[551] = 218;
map[553] = 216;
map[556] = 216;
map[558] = 214;
map[559] = 213;
map[561] = 211;
map[564] = 211;
map[566] = 209;
map[568] = 208;
map[571] = 208;
map[572] = 206;
map[574] = 204;
map[576] = 203;
map[579] = 203;
map[581] = 201;
map[582] = 200;
map[584] = 198;
map[586] = 196;
map[587] = 195;
map[590] = 195;
map[592] = 193;
map[595] = 193;
map[597] = 191;
map[600] = 191;
map[602] = 190;
map[604] = 188;
map[607] = 188;
map[608] = 186;
map[610] = 185;
map[613] = 185;
map[615] = 183;
map[617] = 182;
map[618] = 180;
map[622] = 178;
map[623] = 177;
map[626] = 177;
map[628] = 175;
map[630] = 173;
map[631] = 172;
map[635] = 172;
map[636] = 170;
map[638] = 168;
map[640] = 167;
map[643] = 167;
map[644] = 165;
map[648] = 164;
map[651] = 164;
map[653] = 162;
map[656] = 162;
map[658] = 160;
map[661] = 160;
map[662] = 159;
map[666] = 159;
map[667] = 157;
map[671] = 157;
map[672] = 155;
map[676] = 155;
map[679] = 155;
map[680] = 154;
map[684] = 154;
map[687] = 154;
map[690] = 154;
map[694] = 154;
map[697] = 154;
map[700] = 154;
map[703] = 154;
map[707] = 154;
map[710] = 154;
map[713] = 154;
map[716] = 154;
map[720] = 154;
map[723] = 154;
map[726] = 154;
map[730] = 154;
map[733] = 154;
map[736] = 155;
map[739] = 155;
map[743] = 155;
map[746] = 155;
map[749] = 155;
map[751] = 157;
map[751] = 155;
map[754] = 155;
map[756] = 157;
map[759] = 157;
map[761] = 159;
map[764] = 159;
map[765] = 160;
map[767] = 162;
map[770] = 162;
map[772] = 164;
map[775] = 164;
map[777] = 165;
map[780] = 167;
map[783] = 167;
map[785] = 168;
map[788] = 168;
map[790] = 170;
map[793] = 170;
map[795] = 172;
map[797] = 173;
map[800] = 173;
map[801] = 175;
map[805] = 175;
map[806] = 177;
map[808] = 178;
map[811] = 178;
map[813] = 180;
map[815] = 182;
map[818] = 182;
map[819] = 183;
map[821] = 185;
map[823] = 186;
map[826] = 186;
map[828] = 188;
map[829] = 190;
map[833] = 191;
map[834] = 193;
map[837] = 193;
map[839] = 195;
map[841] = 196;
map[842] = 198;
map[844] = 200;
map[846] = 201;
map[847] = 203;
map[849] = 204;
map[851] = 206;
map[852] = 208;
map[854] = 209;
map[857] = 211;
map[859] = 213;
map[860] = 214;
map[864] = 214;
map[865] = 216;
map[867] = 218;
map[869] = 219;
map[870] = 221;
map[872] = 222;
map[875] = 222;
map[877] = 224;
map[878] = 226;
map[878] = 229;
map[880] = 231;
map[882] = 232;
map[883] = 234;
map[885] = 236;
map[887] = 237;
map[888] = 239;
map[890] = 240;
map[891] = 242;
map[893] = 244;
map[895] = 245;
map[896] = 247;
map[898] = 249;
map[900] = 250;
map[901] = 252;
map[903] = 254;
map[905] = 255;
map[908] = 257;
map[909] = 258;
map[913] = 260;
map[916] = 260;
map[918] = 262;
map[921] = 262;
map[924] = 262;
map[927] = 262;
map[931] = 262;
map[932] = 263;
map[934] = 262;
map[937] = 262;
map[941] = 262;
map[944] = 262;
map[947] = 260;
map[950] = 260;
map[954] = 258;
map[957] = 257;
map[960] = 255;
map[963] = 254;
map[967] = 252;
map[970] = 252;
map[972] = 250;
map[973] = 249;
map[976] = 249;
map[980] = 249;
map[981] = 247;
map[985] = 247;
map[986] = 245;
map[988] = 244;
map[991] = 244;
map[993] = 242;
map[994] = 240;
map[998] = 240;
map[999] = 239;
map[1001] = 237;
map[1004] = 236;
map[1006] = 234;
map[1009] = 232;
map[1011] = 231;
map[1012] = 229;
map[1014] = 227;
map[1017] = 226;
map[1019] = 224;
map[1021] = 222;
map[1024] = 221;
map[1026] = 219;
map[1029] = 219;
map[1032] = 221;
map[1035] = 222;
map[1039] = 222;
map[1040] = 224;
map[1042] = 226;
map[1045] = 226;
map[1047] = 227;
map[1048] = 229;
map[1052] = 229;
map[1053] = 231;
map[1055] = 232;
map[1058] = 234;
map[1060] = 236;
map[1062] = 237;
map[1065] = 239;
map[1066] = 240;
map[1068] = 242;
map[1070] = 244;
map[1071] = 245;
map[1073] = 247;
map[1075] = 249;
map[1076] = 250;
map[1078] = 252;
map[1080] = 254;
map[1081] = 255;
map[1084] = 255;
map[1088] = 255;
map[1091] = 255;
map[1094] = 255;
map[1096] = 257;
map[1099] = 257;
map[1102] = 257;
map[1106] = 257;
map[1109] = 258;
map[1112] = 257;
map[1116] = 257;
map[1117] = 258;
map[1120] = 258;
map[1124] = 258;
map[1127] = 258;
map[1129] = 260;
map[1132] = 260;
map[1135] = 260;
map[1137] = 262;
map[1140] = 262;
map[1143] = 263;
map[1147] = 263;
map[1150] = 263;
map[1153] = 263;
map[1156] = 263;
map[1160] = 265;
map[1163] = 265;
map[1166] = 265;
map[1169] = 265;
map[1173] = 265;
map[1176] = 265;
map[1178] = 267;
map[1181] = 267;
map[1184] = 267;
map[1187] = 267;
map[1191] = 267;
map[1192] = 268;
map[1196] = 268;
map[1199] = 268;
map[1202] = 268;
map[1204] = 270;
map[1207] = 270;
map[1210] = 270;
map[1214] = 270;
map[1215] = 272;
map[1219] = 272;
map[1222] = 272;
map[1225] = 272;
map[1227] = 273;
map[1230] = 273;
map[1233] = 273;
map[1237] = 273;
map[1240] = 273;
map[1241] = 275;
map[1245] = 275;
map[1248] = 275;
map[1251] = 275;
map[1255] = 275;
map[1258] = 275;
map[1259] = 276;
map[1263] = 276;
map[1266] = 276;
map[1269] = 276;
map[1273] = 276;
map[1276] = 276;
map[1277] = 278;
map[1281] = 278;
map[1284] = 278;
map[1287] = 278;
map[1289] = 280;
map[1292] = 280;
map[1295] = 280;
map[1297] = 281;
map[1300] = 281;
map[1302] = 283;
map[1305] = 285;
map[1309] = 286;
map[1310] = 288;
map[1313] = 288;
map[1315] = 290;
map[1317] = 291;
map[1320] = 291;
map[1322] = 293;
map[1323] = 294;
map[1325] = 296;
map[1328] = 296;
map[1330] = 298;
map[1331] = 299;
map[1333] = 301;
map[1336] = 303;
map[1338] = 304;
map[1341] = 304;
map[1341] = 304;
map[1344] = 304;
map[1346] = 306;
map[1349] = 306;
map[1352] = 306;
map[1354] = 308;
map[1357] = 308;
map[1360] = 308;
map[1362] = 309;
map[1365] = 309;
map[1369] = 309;
map[1370] = 311;
map[1373] = 311;
map[1377] = 311;
map[1378] = 312;
map[1382] = 312;
map[1385] = 312;
map[1387] = 314;
map[1390] = 314;
map[1393] = 314;
map[1395] = 316;
map[1398] = 316;
map[1401] = 316;
map[1405] = 316;
map[1408] = 316;
map[1409] = 317;
map[1413] = 317;
map[1416] = 317;
map[1419] = 317;
map[1423] = 317;
map[1424] = 319;
map[1427] = 319;
map[1431] = 319;
map[1432] = 321;
map[1436] = 321;
map[1439] = 321;
map[1441] = 322;
map[1444] = 322;
map[1447] = 322;
map[1449] = 324;
map[1452] = 324;
map[1455] = 324;
map[1457] = 326;
map[1460] = 326;
map[1463] = 326;
map[1467] = 326;
map[1470] = 326;
map[1473] = 326;
map[1476] = 326;
map[1480] = 326;
map[1483] = 326;
map[1486] = 326;
map[1490] = 326;
map[1493] = 326;
map[1496] = 326;
map[1499] = 326;
map[1503] = 326;
map[1506] = 326;
map[1508] = 324;
map[1511] = 324;
map[1514] = 324;
map[1517] = 324;
map[1519] = 322;
map[1522] = 322;
map[1526] = 322;
map[1527] = 321;
map[1527] = 321;
map[1530] = 321;
map[1534] = 321;
map[1537] = 321;
map[1540] = 321;
map[1544] = 321;
map[1547] = 321;
map[1550] = 321;
map[1552] = 319;
map[1555] = 319;
map[1557] = 317;
map[1560] = 317;
map[1562] = 316;
map[1565] = 316;
map[1566] = 314;
map[1570] = 314;
map[1573] = 314;
map[1575] = 312;
map[1578] = 312;
map[1581] = 311;
map[1584] = 311;
map[1588] = 309;
map[1591] = 309;
map[1594] = 309;
map[1596] = 308;
map[1599] = 308;
map[1601] = 308;
map[1601] = 308;
map[1604] = 308;
map[1606] = 306;
map[1609] = 306;
map[1612] = 304;
map[1616] = 304;
map[1617] = 303;
map[1620] = 303;
map[1624] = 303;
map[1627] = 303;
map[1629] = 301;
map[1632] = 301;
map[1635] = 301;
map[1637] = 299;
map[1640] = 299;
map[1643] = 299;
map[1647] = 299;
map[1650] = 299;
map[1652] = 298;
map[1655] = 298;
map[1658] = 298;
map[1661] = 298;
map[1665] = 298;
map[1666] = 296;
map[1669] = 296;
map[1673] = 296;
map[1674] = 294;
map[1676] = 294;
map[1679] = 294;
map[1683] = 294;
map[1684] = 293;
map[1684] = 293;
map[1684] = 293;
map[1684] = 293;
map[1687] = 293;
map[1691] = 293;
map[1694] = 293;
map[1697] = 293;
map[1701] = 293;
map[1705] = 291;
map[1709] = 291;
map[1712] = 291;
map[1715] = 291;
map[1719] = 291;
map[1722] = 291;
map[1725] = 291;
map[1728] = 291;
map[1732] = 291;
map[1735] = 291;
map[1738] = 291;
map[1741] = 291;
map[1745] = 291;
map[1746] = 290;
map[1750] = 290;
map[1753] = 290;
map[1756] = 290;
map[1759] = 290;
map[1763] = 290;
map[1766] = 290;
map[1769] = 290;
map[1769] = 290;
map[1769] = 290;
map[1773] = 290;
map[1776] = 290;
map[1779] = 290;
map[1782] = 290;
map[1786] = 290;
map[1789] = 290;
map[1792] = 290;
map[1795] = 290;
map[1799] = 290;
map[1802] = 290;
map[1805] = 290;
map[1809] = 290;
map[1812] = 290;
map[1813] = 288;
map[1817] = 288;
map[1820] = 288;
map[1823] = 288;
map[1827] = 288;
map[1830] = 288;
map[1833] = 288;
map[1836] = 290;
map[1840] = 290;
map[1841] = 290;
map[1845] = 290;
map[1848] = 290;
map[1851] = 290;
map[1853] = 291;
map[1856] = 291;
map[1856] = 291;
map[1856] = 291;
map[1859] = 291;
map[1863] = 291;
map[1866] = 291;
map[1867] = 291;
map[1869] = 293;
map[1872] = 293;
map[1876] = 293;
map[1876] = 293;
map[1877] = 293;
map[1880] = 293;

},{}],4:[function(require,module,exports){
"use strict";
/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
Object.defineProperty(exports, "__esModule", { value: true });
/*
* 游戏初始化配置;
*/
var GameConfig = /** @class */ (function () {
    function GameConfig() {
    }
    GameConfig.init = function () {
        var reg = Laya.ClassUtils.regClass;
    };
    GameConfig.width = 512;
    GameConfig.height = 768;
    GameConfig.scaleMode = "noborder";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "dialog/LoadingDialog.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = true;
    GameConfig.exportSceneToJson = true;
    return GameConfig;
}());
exports.default = GameConfig;
GameConfig.init();

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var LoadingDialog = /** @class */ (function (_super) {
    __extends(LoadingDialog, _super);
    function LoadingDialog() {
        var _this = _super.call(this) || this;
        _this.progress = 0;
        _this.autoDestroyAtClosed = true;
        _this.isPopupCenter = false;
        _this.pos(0, (Laya.Browser.clientHeight - 200) / 2);
        return _this;
    }
    LoadingDialog.prototype.onOpened = function () {
        // this.changeProgressValue(0)
    };
    LoadingDialog.prototype.changeProgressValue = function (progress) {
        this.progress = progress;
        this.loadingProgressBar.value = progress;
    };
    LoadingDialog.prototype.updateTip = function (tip) {
        this.tipLabel.text = tip;
    };
    return LoadingDialog;
}(layaMaxUI_1.ui.dialog.LoadingDialogUI));
exports.default = LoadingDialog;

},{"./ui/layaMaxUI":20}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Screen1BackGround_1 = require("./Screen1BackGround");
var Football_1 = require("./Football");
var basketball_1 = require("./basketball");
var running_1 = require("./running");
var swimming_1 = require("./swimming");
var page3_runman_1 = require("./page3_runman");
var page1_2_1 = require("./page1&2");
var page2_3_1 = require("./page2&3");
var page3_4_1 = require("./page3&4");
var page4_5_1 = require("./page4&5");
var FootballPath_1 = require("./FootballPath");
var QuestionDialog_1 = require("./QuestionDialog");
var Constants_1 = require("./Constants");
var QuestionData_1 = require("./QuestionData");
var LoadingDialog_1 = require("./LoadingDialog");
var ShakeDialog_1 = require("./ShakeDialog");
var ScrollDialog_1 = require("./ScrollDialog");
var Main = /** @class */ (function () {
    function Main() {
        this.y = 0;
        this.shakeCount = 0;
        this.shakeCount2 = 0;
        this.shakeCount3 = 0;
        this.shakeCount4 = 0;
        this.shakeCount5 = 0;
        this.hasPlayShotAni = false;
        this.hasPlayShotAni2 = false;
        this.hasPlayShotAni3 = false;
        this.hasPlayShotAni4 = false;
        this.hasPlayShotAni5 = false;
        this.showQuestionIndexList = new Array(); // 已经显示的问题index列表
        this.showingDialog = false;
        // warning: 第三个参数不要使用WebGL，当背景太长的时候在iPhone上会有非常严重的锯齿
        Laya.init(Constants_1.default.stageWidth, Constants_1.default.stateHeight, Laya[""]);
        Laya["Physics"] && Laya["Physics"].enable();
        Laya["DebugPanel"] && Laya["DebugPanel"].enable();
        Laya.stage.scaleMode = Constants_1.default.scaleMode;
        Laya.stage.screenMode = Constants_1.default.screenMode;
        //兼容微信不支持加载scene后缀场景
        Laya.URL.exportSceneToJson = GameConfig_1.default.exportSceneToJson;
        //打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
        if (GameConfig_1.default.debug || Laya.Utils.getQueryString("debug") == "true")
            Laya.enableDebugPanel();
        if (GameConfig_1.default.physicsDebug && Laya["PhysicsDebugDraw"])
            Laya["PhysicsDebugDraw"].enable();
        if (GameConfig_1.default.stat)
            Laya.Stat.show();
        Laya.alertGlobalError = true;
        //激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
        Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        UIConfig.closeDialogOnSide = false;
        UIConfig.popupBgColor = "#000000";
        UIConfig.popupBgAlpha = 0.8;
        UIConfig.closeDialogOnSide = false;
        Laya.stage.bgColor = "white";
        this.loadProgessAssets();
        // 需要显示调试信息可以打开这里
        this.showConsoleText(false);
    }
    Main.prototype.onVersionLoaded = function () {
        //激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
        Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    };
    Main.prototype.onConfigLoaded = function () {
        //加载IDE指定的场景
        // GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    };
    Main.prototype.loadProgessAssets = function () {
        Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, this.onProgressAssetsLoaded));
    };
    Main.prototype.loadOtherAssets = function () {
        var assets = [];
        assets.push({
            url: Constants_1.default.background1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.background2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.background3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.background4,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.background5,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: "res/atlas/sports.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: Constants_1.default.sound0,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound1,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound2,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound3,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.sound4,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.soundBgm,
            type: Laya.Loader.SOUND
        });
        // 预加载资源
        Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    };
    // 必需先加载进度条资源才能显示进度条
    Main.prototype.onProgressAssetsLoaded = function () {
        // 显示进度条
        this.loadingDialog = new LoadingDialog_1.default();
        this.loadingDialog.popup();
        this.loadOtherAssets();
    };
    Main.prototype.onAssetsLoading = function (progress) {
        console.log("加载进度: " + progress);
        this.loadingDialog.changeProgressValue(progress);
    };
    Main.prototype.onAssetsLoaded = function () {
        this.loadingDialog.close();
        this.console.text += '资源加载完成。';
        this.showTipDialog("scroll");
        this.screen1BackGround = new Screen1BackGround_1.default();
        Laya.stage.addChild(this.screen1BackGround);
        this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove);
        this.screen1BackGround.on(Laya.Event.DRAG_START, this, this.onBackgroundStartMove);
        this.football = new Football_1.default();
        this.football.pos(327, 233); // 初始位置
        Laya.stage.addChild(this.football);
        this.basketball = new basketball_1.default();
        this.basketball.pos(300, 500); // 初始位置
        Laya.stage.addChild(this.basketball);
        this.running = new running_1.default();
        this.running.pos(250, 200); // 初始位置
        Laya.stage.addChild(this.running);
        this.swimming = new swimming_1.default();
        this.swimming.pos(256, 500); // 初始位置
        Laya.stage.addChild(this.swimming);
        this.page3run = new page3_runman_1.default();
        this.page3run.pos(300, 850); // 初始位置
        Laya.stage.addChild(this.page3run);
        this.page1e2s = new page1_2_1.default();
        this.page1e2s.pos(250, 500); // 初始位置
        Laya.stage.addChild(this.page1e2s);
        this.page2e3s = new page2_3_1.default();
        this.page2e3s.pos(250, 500); // 初始位置
        Laya.stage.addChild(this.page2e3s);
        this.page3e4s = new page3_4_1.default();
        this.page3e4s.pos(270, 700); // 初始位置
        Laya.stage.addChild(this.page3e4s);
        this.page4e5s = new page4_5_1.default();
        this.page4e5s.pos(250, 700); // 初始位置
        Laya.stage.addChild(this.page4e5s);
        console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight);
        // 计算背景可拖动区域
        var moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
        this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
        // 播放背景音乐
        // this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants.soundBgm, 0)
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
        this.loadingDialog.updateTip("加载失败: " + err);
    };
    Main.prototype.onMouseMove = function () {
        // 始终保持主角和鼠标位置一致
        // this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
        // console.log("onMouseMove", Laya.stage.mouseX, Laya.stage.mouseY)
        // console.log(`map[${this.screen1BackGround.y}] = ${Laya.stage.mouseX}`)
        this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    Main.prototype.onStartDrag = function () {
        console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY);
        if (this.showingDialog) {
            return;
        }
        this.screen1BackGround.startDrag(this.dragRegion, false, 0);
    };
    Main.prototype.onBackgroundStartMove = function () {
        // TODO: 这里同样要做一些能否拖动的判断，onBackgroundMove部分逻辑也适应于此方法
    };
    Main.prototype.onBackgroundMove = function () {
        console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y);
        // 显示问题
        var needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y);
        if (needShowQuestion) {
            this.screen1BackGround.stopDrag();
            return;
        }
        // TODO: 根据实际情况显示点击提示
        // this.showTipDialog("click_white")
        // this.showTipDialog("click_black")
        if (this.screen1BackGround.y <= -1300) { // 不给拖动，摇一摇显示射门动画
            if (this.hasPlayShotAni) {
                this.console.text += '已经显示过射门动画\n';
            }
            else {
                this.console.text += '没有显示过射门动画\n';
                this.screen1BackGround.stopDrag();
                // 显示过摇一摇提示
                this.showShakeDialog();
            }
        }
        if (this.screen1BackGround.y <= -6320) {
            if (this.hasPlayShotAni2) {
                this.console.text += '已经显示过2动画\n';
            }
            else {
                this.console.text += '没有显示过2动画\n';
                this.screen1BackGround.stopDrag();
                // 显示过摇一摇提示
                this.showShakeDialog2();
            }
        }
        if (this.screen1BackGround.y <= -9400) {
            if (this.hasPlayShotAni3) {
                this.console.text += '已经显示过3动画\n';
            }
            else {
                this.console.text += '没有显示过3动画\n';
                this.screen1BackGround.stopDrag();
                // 显示过摇一摇提示
                this.showShakeDialog3();
            }
        }
        if (this.screen1BackGround.y <= -12930) {
            if (this.hasPlayShotAni4) {
                this.console.text += '已经显示过4动画\n';
            }
            else {
                this.console.text += '没有显示过4动画\n';
                this.screen1BackGround.stopDrag();
                // 显示过摇一摇提示
                this.showShakeDialog4();
            }
        }
        if (this.screen1BackGround.y <= -15830) {
            if (this.hasPlayShotAni5) {
                this.console.text += '已经显示过5动画\n';
            }
            else {
                this.console.text += '没有显示过5动画\n';
                this.screen1BackGround.stopDrag();
                // 显示过摇一摇提示
                this.showShakeDialog5();
            }
        }
        if (this.screen1BackGround.y <= -800) { // 隐藏足球
            this.football.hide();
        }
        else {
            this.football.show();
            // 移动足球位置
            // const y = -this.screen1BackGround.y + 232
            var y_1 = 0;
            if ((-this.screen1BackGround.y + 232) < 1032) {
                y_1 = -this.screen1BackGround.y + 100;
            }
            if ((-this.screen1BackGround.y + 232) < 850) {
                y_1 = -this.screen1BackGround.y + 130;
            }
            if ((-this.screen1BackGround.y + 232) < 730) {
                y_1 = -this.screen1BackGround.y + 150;
            }
            if ((-this.screen1BackGround.y + 232) < 580) {
                y_1 = -this.screen1BackGround.y + 180;
            }
            if ((-this.screen1BackGround.y + 232) < 435) {
                y_1 = -this.screen1BackGround.y + 200;
            }
            if ((-this.screen1BackGround.y + 232) > 1032) {
                y_1 = -this.screen1BackGround.y + 232;
            }
            var x = FootballPath_1.getFootballX(y_1);
            if (x == 0) {
                this.football.y = y_1;
            }
            else {
                this.football.pos(x, y_1);
            }
            // 判断足球是否需要旋转
            if (this.screen1BackGround.y <= -585) {
                this.football.stopRotate();
            }
            else {
                this.football.playRotate();
            }
        }
        // 判断是否需要播放cup ani
        if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
            if (!this.screen1BackGround.isAniPlaying("cup")) {
                this.screen1BackGround.playAni("cup");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("cup")) {
                this.screen1BackGround.stopAni("cup");
            }
        }
        // 判断是否需要播放口哨动画
        if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
            if (!this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.playAni("whistle");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.stopAni("whistle");
            }
        }
        if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
            if (!this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.playAni("whistle");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.stopAni("whistle");
            }
        }
        if (this.screen1BackGround.y <= -2125 && this.screen1BackGround.y >= -2325) {
            if (!this.screen1BackGround.isAniPlaying("text2002")) {
                this.screen1BackGround.playAni("text2002");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2002")) {
                this.screen1BackGround.stopAni("text2002");
            }
        }
        if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
            if (!this.screen1BackGround.isAniPlaying("shot")) {
                this.screen1BackGround.playAni("shot");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("shot")) {
                this.screen1BackGround.stopAni("shot");
            }
        }
        if (this.screen1BackGround.y <= -1730 && this.screen1BackGround.y >= -2645) {
            if (!this.screen1BackGround.isAniPlaying("win")) {
                this.screen1BackGround.playAni("win");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("win")) {
                this.screen1BackGround.stopAni("win");
            }
        }
        var y = -this.screen1BackGround.y + 232;
        if (this.screen1BackGround.y <= -2630 && this.screen1BackGround.y >= -4600) {
            this.page1e2s.show();
            var z = parseInt((-this.screen1BackGround.y - 2630) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.page1e2s.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.page1e2s.goPath(90);
            this.page1e2s.hide();
        }
        //page2
        if (this.screen1BackGround.y <= -4530 && this.screen1BackGround.y >= -5430) {
            this.running.show();
            var z = parseInt((-this.screen1BackGround.y - 4530) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.running.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.running.goPath(81);
            this.running.hide();
        }
        if (this.screen1BackGround.y <= -4522 && this.screen1BackGround.y >= -4621) {
            if (!this.screen1BackGround.isAniPlaying("dumbbell")) {
                this.screen1BackGround.playAni("dumbbell");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("dumbbell")) {
                this.screen1BackGround.stopAni("dumbbell");
            }
        }
        if (this.screen1BackGround.y <= -4957 && this.screen1BackGround.y >= -5010) {
            if (!this.screen1BackGround.isAniPlaying("equipment")) {
                this.screen1BackGround.playAni("equipment");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("equipment")) {
                this.screen1BackGround.stopAni("equipment");
            }
        }
        if (this.screen1BackGround.y <= -5190 && this.screen1BackGround.y >= -5268) {
            if (!this.screen1BackGround.isAniPlaying("clock")) {
                this.screen1BackGround.playAni("clock");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("clock")) {
                this.screen1BackGround.stopAni("clock");
            }
        }
        if (this.screen1BackGround.y <= -5454 && this.screen1BackGround.y >= -5603) {
            if (!this.screen1BackGround.isAniPlaying("text2004")) {
                this.screen1BackGround.playAni("text2004");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2004")) {
                this.screen1BackGround.stopAni("text2004");
            }
        }
        if (this.screen1BackGround.y <= -5725 && this.screen1BackGround.y >= -5866) {
            if (!this.screen1BackGround.isAniPlaying("electricman")) {
                this.screen1BackGround.playAni("electricman");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("electricman")) {
                this.screen1BackGround.stopAni("electricman");
            }
        }
        if (this.screen1BackGround.y <= -6330 && this.screen1BackGround.y >= -8100) {
            this.page2e3s.show();
            var z = parseInt((-this.screen1BackGround.y - 6330) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.page2e3s.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.page2e3s.goPath(90);
            this.page2e3s.hide();
        }
        //page3
        if (this.screen1BackGround.y <= -8200 && this.screen1BackGround.y >= -8950) {
            this.page3run.show();
            var z = parseInt((-this.screen1BackGround.y - 8200) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.page3run.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.page3run.hide();
        }
        if (this.screen1BackGround.y <= -8348 && this.screen1BackGround.y >= -8415) {
            if (!this.screen1BackGround.isAniPlaying("medal")) {
                this.screen1BackGround.playAni("medal");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("medal")) {
                this.screen1BackGround.stopAni("medal");
            }
        }
        if (this.screen1BackGround.y <= -8625 && this.screen1BackGround.y >= -8723) {
            if (!this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.playAni("stage");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.stopAni("stage");
            }
        }
        if (this.screen1BackGround.y <= -9131 && this.screen1BackGround.y >= -9191) {
            if (!this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.playAni("text2008");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.stopAni("text2008");
            }
        }
        if (this.screen1BackGround.y <= -9420 && this.screen1BackGround.y >= -11160) {
            this.page3e4s.show();
            var z = parseInt((-this.screen1BackGround.y - 9420) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.page3e4s.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.page3e4s.goPath(90);
            this.page3e4s.hide();
        }
        //page4
        if (this.screen1BackGround.y <= -11160 && this.screen1BackGround.y >= -11160) {
            if (!this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.playAni("heart");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.stopAni("heart");
            }
        }
        if (this.screen1BackGround.y <= -11030 && this.screen1BackGround.y >= -12880) {
            this.swimming.show();
            var z = parseInt((-this.screen1BackGround.y - 11030) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.swimming.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.swimming.hide();
        }
        if (this.screen1BackGround.y <= -11162 && this.screen1BackGround.y >= -11233) {
            if (!this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.playAni("text2012");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.stopAni("text2012");
            }
        }
        if (this.screen1BackGround.y <= -11376 && this.screen1BackGround.y >= -11449) {
            if (!this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.playAni("board");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.stopAni("board");
            }
        }
        if (this.screen1BackGround.y <= -11743 && this.screen1BackGround.y >= -11807) {
            if (!this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.playAni("wall");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.stopAni("wall");
            }
        }
        if (this.screen1BackGround.y <= -12066 && this.screen1BackGround.y >= -12126) {
            if (!this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.playAni("goggles");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.stopAni("goggles");
            }
        }
        if (this.screen1BackGround.y <= -12405 && this.screen1BackGround.y >= -12518) {
            if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.playAni("waterLeft");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.stopAni("waterLeft");
            }
        }
        if (this.screen1BackGround.y <= -12960 && this.screen1BackGround.y >= -14820) {
            this.page4e5s.show();
            var z = parseInt((-this.screen1BackGround.y - 12830) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.page4e5s.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.page4e5s.goPath(90);
            this.page4e5s.hide();
        }
        //page5
        if (this.screen1BackGround.y <= -14930 && this.screen1BackGround.y >= -15530) {
            this.basketball.show();
            var z = parseInt((-this.screen1BackGround.y - 14930) / 10 + '');
            console.log('z: ' + z);
            if (z % 10 == 0) {
                this.y = z;
            }
            ;
            console.log('y: ' + this.y);
            this.basketball.goPath(z - 0);
        }
        else {
            this.y = 0;
            this.basketball.hide();
        }
        if (this.screen1BackGround.y <= -14470 && this.screen1BackGround.y >= -14562) {
            if (!this.screen1BackGround.isAniPlaying("ball")) {
                this.screen1BackGround.playAni("ball");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("ball")) {
                this.screen1BackGround.stopAni("ball");
            }
        }
        if (this.screen1BackGround.y <= -14470 && this.screen1BackGround.y >= -14562) {
            if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
                this.screen1BackGround.playAni("scoreboard");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("scoreboard")) {
                this.screen1BackGround.stopAni("scoreboard");
            }
        }
        if (this.screen1BackGround.y <= -15082 && this.screen1BackGround.y >= -15149) {
            if (!this.screen1BackGround.isAniPlaying("shoes")) {
                this.screen1BackGround.playAni("shoes");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("shoes")) {
                this.screen1BackGround.stopAni("shoes");
            }
        }
        if (this.screen1BackGround.y <= -15415 && this.screen1BackGround.y >= -15496) {
            if (!this.screen1BackGround.isAniPlaying("hat")) {
                this.screen1BackGround.playAni("hat");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("hat")) {
                this.screen1BackGround.stopAni("hat");
            }
        }
    };
    Main.prototype.onDeviceShake = function () {
        if (this.shakeDialog) {
            this.shakeDialog.close();
            this.showingDialog = false;
            this.shakeDialog = null;
        }
        this.shakeCount++;
        this.console.text += "设备摇晃了" + this.shakeCount + "次\n";
        if (this.shakeCount >= 3) {
            Laya.Shake.instance.stop();
            this.shakeCount = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni) {
                return;
            }
            this.screen1BackGround.playAni("shot");
            this.hasPlayShotAni = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound0);
        }
    };
    Main.prototype.onDeviceShake2 = function () {
        if (this.shakeDialog2) {
            this.shakeDialog2.close();
            this.showingDialog = false;
            this.shakeDialog2 = null;
        }
        this.shakeCount2++;
        this.console.text += "设备摇晃了" + this.shakeCount2 + "次\n";
        if (this.shakeCount2 >= 3) {
            Laya.Shake.instance.stop();
            this.shakeCount2 = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni2) {
                return;
            }
            this.screen1BackGround.playAni("liuxiang");
            this.hasPlayShotAni2 = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound1);
        }
    };
    Main.prototype.onDeviceShake3 = function () {
        if (this.shakeDialog3) {
            this.shakeDialog3.close();
            this.showingDialog = false;
            this.shakeDialog3 = null;
        }
        this.shakeCount3++;
        this.console.text += "设备摇晃了" + this.shakeCount3 + "次\n";
        if (this.shakeCount3 >= 3) {
            Laya.Shake.instance.stop();
            this.shakeCount3 = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni3) {
                return;
            }
            this.screen1BackGround.playAni("crowd");
            this.hasPlayShotAni3 = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound2);
        }
    };
    Main.prototype.onDeviceShake4 = function () {
        if (this.shakeDialog4) {
            this.shakeDialog4.close();
            this.showingDialog = false;
            this.shakeDialog4 = null;
        }
        this.shakeCount4++;
        this.console.text += "设备摇晃了" + this.shakeCount4 + "次\n";
        if (this.shakeCount4 >= 3) {
            Laya.Shake.instance.stop();
            this.shakeCount4 = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni4) {
                return;
            }
            this.screen1BackGround.playAni("winMan");
            this.hasPlayShotAni4 = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound3);
        }
    };
    Main.prototype.onDeviceShake5 = function () {
        if (this.shakeDialog5) {
            this.shakeDialog5.close();
            this.showingDialog = false;
            this.shakeDialog5 = null;
        }
        this.shakeCount5++;
        this.console.text += "设备摇晃了" + this.shakeCount5 + "次\n";
        if (this.shakeCount5 >= 3) {
            Laya.Shake.instance.stop();
            this.shakeCount5 = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni5) {
                return;
            }
            this.screen1BackGround.playAni("ballMan");
            this.hasPlayShotAni5 = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound4);
        }
    };
    Main.prototype.onQuestionDialogClose = function (index, type) {
        console.log("onQuestionDialogClose", type, index);
        var right = (type === "true"); // TODO: 计分
        this.showingDialog = false;
    };
    // 判断是否需要显示问题
    Main.prototype.showQuestionDialogIfNeed = function (y) {
        var offset = Laya.Browser.clientHeight;
        var hasShowLength = this.showQuestionIndexList.length;
        if (hasShowLength >= 10) {
            // if (y) {
            return false;
        }
        if (y > offset - QuestionData_1.QuestionShowY[hasShowLength]) {
            return false;
        }
        var isOdd = !(hasShowLength % 2);
        if (isOdd) { // 随机
            var random = this.getRandomQuestionIndex();
            this.showQuestion(random);
        }
        else { // 取前5位
            var index = Math.floor(hasShowLength / 2);
            this.showQuestion(index);
        }
        return true;
    };
    Main.prototype.getRandomQuestionIndex = function () {
        var max = QuestionData_1.QuestionData.length - 5;
        var random = Math.round((Math.random() * max)) + 5;
        if (this.showQuestionIndexList.indexOf(random) == -1) {
            return random;
        }
        else { // 已经显示过重新获取
            return this.getRandomQuestionIndex();
        }
    };
    Main.prototype.showQuestion = function (index) {
        if (index >= QuestionData_1.QuestionData.length) {
            return;
        }
        this.showingDialog = true;
        this.showQuestionIndexList.push(index);
        var questionData = QuestionData_1.QuestionData[index];
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        var questionDialog = new QuestionDialog_1.QuestionDialog(questionData);
        questionDialog.popup(true, false);
        questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index]);
    };
    Main.prototype.showShakeDialog = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog = new ShakeDialog_1.default();
        this.shakeDialog.popup(true, false);
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showShakeDialog2 = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog2 = new ShakeDialog_1.default();
        this.shakeDialog2.popup(true, false);
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake2);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showShakeDialog3 = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog3 = new ShakeDialog_1.default();
        this.shakeDialog3.popup(true, false);
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake3);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showShakeDialog4 = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog4 = new ShakeDialog_1.default();
        this.shakeDialog4.popup(true, false);
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake4);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showShakeDialog5 = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog5 = new ShakeDialog_1.default();
        this.shakeDialog5.popup(true, false);
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake5);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showTipDialog = function (tipType) {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = true;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        var scrollDialog = new ScrollDialog_1.default(tipType);
        scrollDialog.popup(true);
        scrollDialog.closeHandler = Laya.Handler.create(this, this.onTipDialogClose);
    };
    Main.prototype.onTipDialogClose = function () {
        this.showingDialog = false;
    };
    Main.prototype.playSound = function (url) {
        this.bgmSoundChannel.pause();
        Laya.SoundManager.playSound(url, 1, Laya.Handler.create(this, this.onSoundCompete));
    };
    Main.prototype.onSoundCompete = function () {
        this.bgmSoundChannel.resume();
    };
    Main.prototype.showConsoleText = function (visible) {
        this.console = new Laya.Text();
        Laya.stage.addChild(this.console);
        this.console.zOrder = 10001;
        this.console.y = 10;
        this.console.width = Laya.stage.width;
        this.console.height = 200;
        this.console.color = "#FFFFFF";
        this.console.fontSize = 20;
        this.console.leading = 10;
        this.console.bgColor = "#000000";
        this.console.visible = visible;
    };
    return Main;
}());
//激活启动类
new Main();

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./LoadingDialog":5,"./QuestionData":7,"./QuestionDialog":8,"./Screen1BackGround":9,"./ScrollDialog":10,"./ShakeDialog":11,"./basketball":12,"./page1&2":13,"./page2&3":14,"./page3&4":15,"./page3_runman":16,"./page4&5":17,"./running":18,"./swimming":19}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionShowY = [
    1363,
    3407,
    5827,
    6628,
    9120,
    9980,
    12144,
    13178,
    15760,
    16697
];
exports.QuestionData = [
    {
        title: "国足进世界杯的主帅是哪位?",
        a: "里皮",
        b: "朱广沪",
        c: "高洪波",
        d: "米卢",
        answer: "d",
        id: 1
    },
    {
        title: "2006年刘翔破世界纪录的成绩是多少?",
        a: "12秒91",
        b: "12秒88",
        c: "12秒87",
        d: "12秒86",
        answer: "b",
        id: 2
    },
    {
        title: "2008年北京奥运会谁点燃了主火炬?",
        a: "许海峰",
        b: "邓亚萍",
        c: "李宁",
        d: "熊倪",
        answer: "c",
        id: 3
    },
    {
        title: "2012年伦敦奥运会男子400由泳冠军是谁？",
        a: "范德凯伊",
        b: "郝运",
        c: "朴泰桓",
        d: "孙杨",
        answer: "d",
        id: 5
    },
    {
        title: "2016年新浪3x3篮球黄金联赛总冠军队是谁？",
        a: "北大队",
        b: "小龙龙队",
        c: "霸气战队",
        d: "华侨大学队",
        answer: "d",
        id: 6
    },
    {
        title: "北京奥运会中国代表团的旗手是谁？",
        a: "姚明",
        b: "刘翔",
        c: "王励勤",
        d: "林丹",
        answer: "a",
        id: 4
    },
    {
        id: 7,
        title: "第一个登上欧冠赛场的中国球员是：",
        a: "孙祥",
        b: "董方卓",
        c: "李铁",
        d: "郑智",
        answer: "a"
    },
    {
        id: 8,
        title: "邵佳一9年德国生涯正式比赛里总共打球多少球？",
        a: "18",
        b: "19",
        c: "29",
        d: "30",
        answer: "c"
    },
    {
        id: 9,
        title: "第一个在欧洲联赛中获得金靴的球员是：",
        a: "郑智",
        b: "杨晨",
        c: "谢晖",
        d: "董方卓",
        answer: "d"
    },
    {
        id: 10,
        title: "第一位在留洋期间担任球队队长的中国籍球员是：",
        a: "范志毅",
        b: "郑智",
        c: "孙继海",
        d: "李铁",
        answer: "a"
    },
    {
        id: 11,
        title: "姚明哪一年退役？",
        a: "2010",
        b: "2011",
        c: "2012",
        d: "2013",
        answer: "b"
    },
    {
        id: 12,
        title: "2018年亚运会中篮球项目中国队收获了几枚金牌？",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        answer: "d"
    },
    {
        id: 13,
        title: "CBA联赛历史上第一个得分破万的球员？",
        a: "易建联",
        b: "朱芳雨",
        c: "刘炜",
        d: "王治郅",
        answer: "b"
    },
    {
        id: 14,
        title: "哪支球队在02-03赛季CBA季后赛中创造了黑8奇迹？",
        a: "辽宁",
        b: "四川",
        c: "北京",
        d: "山东",
        answer: "c"
    },
    {
        id: 15,
        title: "中国足球顶级联赛由甲A变更为中超的是在哪一年？",
        a: "02",
        b: "03",
        c: "04",
        d: "05",
        answer: "c"
    },
    {
        id: 16,
        title: "险些在中超创造凯泽斯劳滕神话的是以下哪支球队？",
        a: "辽宁",
        b: "北京",
        c: "上海",
        d: "广州",
        answer: "a"
    },
    {
        id: 17,
        title: "恒大第一次获得亚冠联赛冠军是那一年？",
        a: "2012年",
        b: "2013年",
        c: "2014年",
        d: "2015年",
        answer: "b"
    },
    {
        id: 18,
        title: "2002年世界杯，中国队队同组对手除巴西、哥斯达黎加还有那个国家？",
        a: "希腊",
        b: "德国",
        c: "日本",
        d: "土耳其",
        answer: "d"
    },
    {
        id: 19,
        title: "以下哪位国内球员在亚冠上演大四喜？",
        a: "武磊",
        b: "郝海东",
        c: "郜林",
        d: "邵佳一",
        answer: "b"
    },
    {
        id: 20,
        title: "2014年李娜第几次获得大满贯女单冠军？",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        answer: "b"
    },
    {
        id: 21,
        title: "本赛季武磊有望斩获金靴，那么上一名夺得中超金靴的本土球员是谁？",
        a: "郝海东",
        b: "李金羽",
        c: "宿茂臻",
        d: "郜林",
        answer: "b"
    },
    {
        id: 42,
        title: "曾创下中国围棋名人战十三连霸纪录的是谁？",
        a: "马晓春",
        b: "常昊",
        c: "聂卫平",
        d: "柯洁",
        answer: "a"
    },
    {
        id: 23,
        title: "中超最年轻进球者纪录是由谁保持者？",
        a: "武磊",
        b: "黄博文",
        c: "朱辰杰",
        d: "郑智",
        answer: "b"
    },
    {
        id: 24,
        title: "足协杯夺冠次数最多的球队是？",
        a: "广州恒大",
        b: "北京国安",
        c: "山东鲁能",
        d: "上海申花",
        answer: "c"
    },
    {
        id: 25,
        title: "中国女足在世界杯上的最好成绩？",
        a: "冠军",
        b: "亚军",
        c: "季军",
        d: "第四名",
        answer: "b"
    },
    {
        id: 26,
        title: "广州恒大在中超完成几连冠？",
        a: "6连冠",
        b: "7连冠",
        c: "8连冠",
        d: "9连冠",
        answer: "b"
    },
    {
        id: 27,
        title: "以下哪位球员没有参加过世界杯正赛？",
        a: "邵佳一",
        b: "孙继海",
        c: "李金羽",
        d: "江津",
        answer: "c"
    },
    {
        id: 28,
        title: "率领广州恒大获得第一个中超冠军的主教练是谁？",
        a: "李章洙",
        b: "里皮",
        c: "斯科拉里",
        d: "卡纳瓦罗",
        answer: "a"
    },
    {
        id: 29,
        title: "以下哪位球员从来没有到中超踢过球？",
        a: "巴里奥斯",
        b: "吉拉迪诺",
        c: "伊涅斯塔",
        d: "德罗巴",
        answer: "c"
    },
    {
        id: 30,
        title: "以下哪位球员没有获得过“亚洲足球小姐”的称号？",
        a: "孙雯",
        b: "白洁",
        c: "韩端",
        d: "马晓旭",
        answer: "c"
    },
    {
        id: 31,
        title: "以下哪个省份或城市没有两支中超队伍？",
        a: "广州",
        b: "上海",
        c: "北京",
        d: "江苏",
        answer: "d"
    },
    {
        id: 32,
        title: "1999年体操世锦赛李小鹏获得了哪个项目的金牌？",
        a: "自由操",
        b: "双杠",
        c: "跳马",
        d: "单杠",
        answer: "c"
    },
    {
        id: 33,
        title: "2001年哪一天萨马兰奇宣布北京成为2008年奥运会主办城市？",
        a: "7.11",
        b: "7.12",
        c: "7.13",
        d: "7.14",
        answer: "c"
    },
    {
        id: 34,
        title: "2002年盐湖城冬奥会，谁为中国拿到冬奥会历史首金？",
        a: "杨阳",
        b: "杨扬",
        c: "杨杨 ",
        d: "杨洋",
        answer: "b"
    },
    {
        id: 35,
        title: "2003年国家体育总局正式批准哪个项目成为第99个正式体育竞赛项？",
        a: "电子竞技",
        b: "高尔夫",
        c: "马球",
        d: "滑翔伞",
        answer: "a"
    },
    {
        id: 36,
        title: "2005年谁夺得了中国斯诺克首个排名赛冠军？",
        a: "傅家俊",
        b: "丁俊晖",
        c: "梁文博",
        d: "田鹏飞",
        answer: "b"
    },
    {
        id: 37,
        title: "2006年都灵冬奥会中国哪位男选手获得了金牌？",
        a: "李佳军",
        b: "韩晓鹏",
        c: "韩佳良",
        d: "安玉龙",
        answer: "b"
    },
    {
        id: 38,
        title: "2007年田径世锦赛刘翔决赛在第几跑道？",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        answer: "d"
    },
    {
        id: 39,
        title: "2009年游泳世锦赛谁夺得中国男子游泳首金？",
        a: "张琳",
        b: "孙杨",
        c: "宁泽涛",
        d: "徐嘉余",
        answer: "a"
    },
    {
        id: 40,
        title: "2013年谁创造了单人帆船不间断环球航行世界纪录？",
        a: "徐莉佳",
        b: "殷剑",
        c: "郭川",
        d: "陈佩娜",
        answer: "c"
    },
    {
        id: 41,
        title: "参加与AlphaGo人机大战的是哪位中国棋手？",
        a: "李世石",
        b: "聂卫平",
        c: "唐卫星",
        d: "柯洁",
        answer: "d"
    },
    {
        id: 42,
        title: "2016年谁成为了集全国冠军、亚洲冠军、世锦赛冠军、奥运会冠军、职业拳王荣誉于一身的金满贯得主？",
        a: "邹市明",
        b: "熊朝忠",
        c: "张小平",
        d: "吕斌",
        answer: "a"
    },
    {
        id: 43,
        title: "2017年被誉为“MVP收割机”的是哪位女排名将？",
        a: "朱婷",
        b: "张常宁",
        c: "袁心玥",
        d: "丁霞",
        answer: "a"
    },
    {
        id: 44,
        title: "2018年亚运会获得金牌最多的中国选手是谁？",
        a: "徐嘉余",
        b: "孙杨",
        c: "樊振东",
        d: "王简嘉禾",
        answer: "a"
    },
    {
        id: 45,
        title: "2018年苏炳添的百米最佳战绩是多少？",
        a: "9秒91",
        b: "9秒",
        c: "9秒99",
        d: "10秒03",
        answer: "a"
    }
];

},{}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var QuestionDialog = /** @class */ (function (_super) {
    __extends(QuestionDialog, _super);
    function QuestionDialog(question) {
        var _this = _super.call(this) || this;
        _this.question = question;
        _this.isPopupCenter = false;
        _this.isModal = true;
        _this.pos(0, 0);
        return _this;
    }
    QuestionDialog.prototype.onOpened = function () {
        // 延时执行，避免手机上执行时报组件undefined的问题
        Laya.timer.once(200, this, this.onCallLater);
    };
    QuestionDialog.prototype.onCallLater = function () {
        if (!this.questionLabel) {
            Laya.timer.once(200, this, this.onCallLater);
            return;
        }
        var question = this.question;
        this.questionLabel.text = question.title;
        this.answerABtn.label = question.a;
        this.answerBBtn.label = question.b;
        this.answerCBtn.label = question.c;
        this.answerDBtn.label = question.d;
        this.answerABtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["a"]);
        this.answerBBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["b"]);
        this.answerCBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["c"]);
        this.answerDBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["d"]);
    };
    QuestionDialog.prototype.onClickAnswer = function (answer) {
        console.log("onClickAnswer", answer);
        var right = (this.question.answer === answer);
        var resultImg = right ? "view/right.png" : "view/wrong.png";
        if (answer === "a") {
            this.resultAImg.loadImage(resultImg);
            this.resultAImg.visible = true;
        }
        else if (answer === "b") {
            this.resultBImg.loadImage(resultImg);
            this.resultBImg.visible = true;
        }
        else if (answer === "c") {
            this.resultCImg.loadImage(resultImg);
            this.resultCImg.visible = true;
        }
        else if (answer === "d") {
            this.resultDImg.loadImage(resultImg);
            this.resultDImg.visible = true;
        }
        // 移除点击事件
        this.answerABtn.offAll();
        this.answerBBtn.offAll();
        this.answerCBtn.offAll();
        this.answerDBtn.offAll();
        Laya.timer.once(1000, this, this.onCloseLater, [right], true);
    };
    QuestionDialog.prototype.onCloseLater = function (right) {
        this.close("" + right);
    };
    return QuestionDialog;
}(layaMaxUI_1.ui.dialog.QuestionDialogUI));
exports.QuestionDialog = QuestionDialog;

},{"./ui/layaMaxUI":20}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Constants");
var Screen1BackGround = /** @class */ (function (_super) {
    __extends(Screen1BackGround, _super);
    function Screen1BackGround() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Screen1BackGround.prototype.init = function () {
        this.bg1 = new Laya.Sprite();
        this.bg1.size(Constants_1.default.stageWidth, Constants_1.default.background1Height);
        var texture = Laya.loader.getRes(Constants_1.default.background1);
        this.bg1.graphics.drawImage(texture);
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        this.bg2.pos(0, Constants_1.default.background1Height + 970);
        this.bg2.size(Constants_1.default.stageWidth, Constants_1.default.background2Height);
        var texture2 = Laya.loader.getRes(Constants_1.default.background2);
        this.bg2.graphics.drawImage(texture2);
        this.addChild(this.bg2);
        this.bg3 = new Laya.Sprite();
        this.bg3.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height + 1940);
        this.bg3.size(Constants_1.default.stageWidth, Constants_1.default.background3Height);
        var texture3 = Laya.loader.getRes(Constants_1.default.background3);
        this.bg3.graphics.drawImage(texture3);
        this.addChild(this.bg3);
        this.bg4 = new Laya.Sprite();
        this.bg4.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height + Constants_1.default.background3Height + 2910);
        this.bg4.size(Constants_1.default.stageWidth, Constants_1.default.background4Height);
        var texture4 = Laya.loader.getRes(Constants_1.default.background4);
        this.bg4.graphics.drawImage(texture4);
        this.addChild(this.bg4);
        this.bg5 = new Laya.Sprite();
        this.bg5.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height + Constants_1.default.background3Height + Constants_1.default.background4Height + 3880);
        this.bg5.size(Constants_1.default.stageWidth, Constants_1.default.background5Height);
        var texture5 = Laya.loader.getRes(Constants_1.default.background5);
        this.bg5.graphics.drawImage(texture5);
        this.addChild(this.bg5);
        this.cupAni = new Laya.Animation();
        // TODO: 调整动画
        this.cupAni.loadAnimation("ani/CupAni.ani");
        this.addChild(this.cupAni);
        // TODO: 调整位置
        this.cupAni.pos(400, 1020);
        this.whistleAni = new Laya.Animation();
        this.whistleAni.loadAnimation("ani/WhistleAni.ani");
        this.addChild(this.whistleAni);
        this.whistleAni.pos(100, 980);
        this.ShotAni = new Laya.Animation();
        this.ShotAni.loadAnimation("ani/ShotAni.ani");
        this.addChild(this.ShotAni);
        this.ShotAni.pos(220, 1850);
        this.text2002Ani = new Laya.Animation();
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani");
        this.addChild(this.text2002Ani);
        this.text2002Ani.pos(360, 2550);
        this.winAni = new Laya.Animation();
        this.winAni.loadAnimation("ani/winAni.ani");
        this.addChild(this.winAni);
        this.winAni.pos(280, 3050);
        //page2
        this.dumbbellAni = new Laya.Animation();
        this.dumbbellAni.loadAnimation("ani/dumbbellAni.ani");
        this.addChild(this.dumbbellAni);
        this.dumbbellAni.pos(310, 5096);
        this.equipmentAni = new Laya.Animation();
        this.equipmentAni.loadAnimation("ani/equipmentAni.ani");
        this.addChild(this.equipmentAni);
        this.equipmentAni.pos(370, 5403);
        this.clockAni = new Laya.Animation();
        this.clockAni.loadAnimation("ani/clockAni.ani");
        this.addChild(this.clockAni);
        this.clockAni.pos(152, 5695);
        this.text2004Ani = new Laya.Animation();
        this.text2004Ani.loadAnimation("ani/text2004Ani.ani");
        this.addChild(this.text2004Ani);
        this.text2004Ani.pos(337, 6044);
        this.electricmanAni = new Laya.Animation();
        this.electricmanAni.loadAnimation("ani/electricmanAni.ani");
        this.addChild(this.electricmanAni);
        this.electricmanAni.pos(328, 6265);
        this.liuxiangAni = new Laya.Animation();
        this.liuxiangAni.loadAnimation("ani/liuxiangAni.ani");
        this.addChild(this.liuxiangAni);
        this.liuxiangAni.pos(263, 6750);
        //page3
        // this.ComputerAni = new Laya.Animation()
        // this.ComputerAni.loadAnimation("ani/ComputerAni.ani")
        // this.addChild(this.ComputerAni)
        // this.ComputerAni.pos(240, 6545)
        this.MedalAni = new Laya.Animation();
        this.MedalAni.loadAnimation("ani/MedalAni.ani");
        this.addChild(this.MedalAni);
        this.MedalAni.pos(333, 8900);
        this.StageAni = new Laya.Animation();
        this.StageAni.loadAnimation("ani/StageAni.ani");
        this.addChild(this.StageAni);
        this.StageAni.pos(219, 9211);
        this.text2008Ani = new Laya.Animation();
        this.text2008Ani.loadAnimation("ani/text2008Ani.ani");
        this.addChild(this.text2008Ani);
        this.text2008Ani.pos(231, 9693);
        this.CrowdAni = new Laya.Animation();
        this.CrowdAni.loadAnimation("ani/CrowdAni.ani");
        this.addChild(this.CrowdAni);
        this.CrowdAni.pos(270, 10085);
        //page4
        this.HeartAni = new Laya.Animation();
        this.HeartAni.loadAnimation("ani/HeartAni.ani");
        this.addChild(this.HeartAni);
        this.HeartAni.pos(181, 11331);
        this.text2012Ani = new Laya.Animation();
        this.text2012Ani.loadAnimation("ani/text2012Ani.ani");
        this.addChild(this.text2012Ani);
        this.text2012Ani.pos(259, 11705);
        // this.WaterRightAni = new Laya.Animation()
        // this.WaterRightAni.loadAnimation("ani/WaterRightAni.ani")
        // this.addChild(this.WaterRightAni)
        // this.WaterRightAni.pos(370, 9100)
        this.BoardAni = new Laya.Animation();
        this.BoardAni.loadAnimation("ani/BoardAni.ani");
        this.addChild(this.BoardAni);
        this.BoardAni.pos(257, 11922);
        this.WallAni = new Laya.Animation();
        this.WallAni.loadAnimation("ani/WallAni.ani");
        this.addChild(this.WallAni);
        this.WallAni.pos(275, 12190);
        this.GogglesAni = new Laya.Animation();
        this.GogglesAni.loadAnimation("ani/GogglesAni.ani");
        this.addChild(this.GogglesAni);
        this.GogglesAni.pos(355, 12634);
        this.WaterLeftAni = new Laya.Animation();
        this.WaterLeftAni.loadAnimation("ani/WaterLeftAni.ani");
        this.addChild(this.WaterLeftAni);
        this.WaterLeftAni.pos(163, 13007);
        this.WinManAni = new Laya.Animation();
        this.WinManAni.loadAnimation("ani/WinManAni.ani");
        this.addChild(this.WinManAni);
        this.WinManAni.pos(254, 13480);
        //page5
        this.ScoreboardAni = new Laya.Animation();
        this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani");
        this.addChild(this.ScoreboardAni);
        this.ScoreboardAni.pos(257, 14961);
        this.BallAni = new Laya.Animation();
        this.BallAni.loadAnimation("ani/BallAni.ani");
        this.addChild(this.BallAni);
        this.BallAni.pos(127, 14961);
        this.ShoesAni = new Laya.Animation();
        this.ShoesAni.loadAnimation("ani/ShoesAni.ani");
        this.addChild(this.ShoesAni);
        this.ShoesAni.pos(338, 15649);
        this.HatAni = new Laya.Animation();
        this.HatAni.loadAnimation("ani/HatAni.ani");
        this.addChild(this.HatAni);
        this.HatAni.pos(190, 15823);
        this.BallManAni = new Laya.Animation();
        this.BallManAni.loadAnimation("ani/BallManAni.ani");
        this.addChild(this.BallManAni);
        this.BallManAni.pos(265, 16467);
    };
    Screen1BackGround.prototype.stopAni = function (aniName) {
        switch (aniName) {
            case "cup":
                this.cupAni.gotoAndStop(0);
                break;
            case "whistle":
                this.whistleAni.gotoAndStop(0);
                break;
            case "shot":
                this.ShotAni.gotoAndStop(0);
                break;
            case "text2002":
                this.text2002Ani.gotoAndStop(10);
                break;
            case "text2004":
                this.text2004Ani.gotoAndStop(10);
                break;
            case "text2008":
                this.text2008Ani.gotoAndStop(10);
                break;
            case "text2012":
                this.text2012Ani.gotoAndStop(10);
                break;
            case "ball":
                this.BallAni.gotoAndStop(20);
                break;
            case "ballMan":
                this.BallManAni.gotoAndStop(0);
                break;
            case "board":
                this.BoardAni.gotoAndStop(10);
                break;
            case "clock":
                this.clockAni.gotoAndStop(10);
                break;
            // case "computer":
            //     this.ComputerAni.gotoAndStop(30);
            //     break;
            case "crowd":
                this.CrowdAni.gotoAndStop(0);
                break;
            case "dumbbell":
                this.dumbbellAni.gotoAndStop(0);
                break;
            case "electricman":
                this.electricmanAni.gotoAndStop(0);
                break;
            case "equipment":
                this.equipmentAni.gotoAndStop(10);
                break;
            case "goggles":
                this.GogglesAni.gotoAndStop(10);
                break;
            case "hat":
                this.HatAni.gotoAndStop(20);
                break;
            case "heart":
                this.HeartAni.gotoAndStop(0);
                break;
            case "liuxiang":
                this.liuxiangAni.gotoAndStop(30);
                break;
            case "medal":
                this.MedalAni.gotoAndStop(10);
                break;
            case "scoreboard":
                this.ScoreboardAni.gotoAndStop(20);
                break;
            case "shoes":
                this.ShoesAni.gotoAndStop(20);
                break;
            case "stage":
                this.StageAni.gotoAndStop(10);
                break;
            case "wall":
                this.WallAni.gotoAndStop(10);
                break;
            case "waterLeft":
                this.WaterLeftAni.gotoAndStop(10);
                break;
            // case "waterRight":
            //     this.WaterRightAni.gotoAndStop(10);
            //     break;
            case "whistle":
                this.WhistleAni.gotoAndStop(0);
                break;
            case "win":
                this.winAni.gotoAndStop(0);
                break;
            case "winMan":
                this.WinManAni.gotoAndStop(30);
                break;
        }
    };
    Screen1BackGround.prototype.playAni = function (aniName) {
        switch (aniName) {
            case "cup":
                this.cupAni.play(0, false);
                break;
            case "whistle":
                this.whistleAni.play(0, false);
                break;
            case "shot":
                this.ShotAni.play(0, false);
                break;
            case "text2002":
                this.text2002Ani.play(0, false);
                break;
            case "text2004":
                this.text2004Ani.play(0, false);
                break;
            case "text2008":
                this.text2008Ani.play(0, false);
                break;
            case "text2012":
                this.text2012Ani.play(0, false);
                break;
            case "ball":
                this.BallAni.play(0, false);
                break;
            case "ballMan":
                this.BallManAni.play(0, false);
                break;
            case "board":
                this.BoardAni.play(0, false);
                break;
            case "clock":
                this.clockAni.play(0, false);
                break;
            // case "computer":
            //     this.ComputerAni.play(0, false);
            //     break;
            case "crowd":
                this.CrowdAni.play(0, false);
                break;
            case "dumbbell":
                this.dumbbellAni.play(0, false);
                break;
            case "electricman":
                this.electricmanAni.play(0, false);
                break;
            case "equipment":
                this.equipmentAni.play(0, false);
                break;
            case "goggles":
                this.GogglesAni.play(0, false);
                break;
            case "hat":
                this.HatAni.play(0, false);
                break;
            case "heart":
                this.HeartAni.play(0, false);
                break;
            case "liuxiang":
                this.liuxiangAni.play(0, false);
                break;
            case "medal":
                this.MedalAni.play(0, false);
                break;
            case "scoreboard":
                this.ScoreboardAni.play(0, false);
                break;
            case "shoes":
                this.ShoesAni.play(0, false);
                break;
            case "stage":
                this.StageAni.play(0, false);
                break;
            case "wall":
                this.WallAni.play(0, false);
                break;
            case "waterLeft":
                this.WaterLeftAni.play(0, false);
                break;
            // case "waterRight":
            //     this.WaterRightAni.play(0, false);
            //     break;
            case "whistle":
                this.WhistleAni.play(0, false);
                break;
            case "win":
                this.winAni.play(1, false);
                break;
            case "winMan":
                this.WinManAni.play(0, false);
                break;
        }
    };
    Screen1BackGround.prototype.isAniPlaying = function (aniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.isPlaying;
            case "whistle":
                return this.whistleAni.isPlaying;
            case "shot":
                return this.ShotAni.isPlaying;
            case "text2002":
                return this.text2002Ani.isPlaying;
            case "text2004":
                return this.text2004Ani.isPlaying;
            case "text2008":
                return this.text2008Ani.isPlaying;
            case "text2012":
                return this.text2012Ani.isPlaying;
            case "ball":
                return this.BallAni.isPlaying;
            case "ballMan":
                return this.BallManAni.isPlaying;
            case "board":
                return this.BoardAni.isPlaying;
            case "clock":
                return this.clockAni.isPlaying;
            // case "computer":
            //     return this.ComputerAni.isPlaying;
            case "crowd":
                return this.CrowdAni.isPlaying;
            case "dumbbell":
                return this.dumbbellAni.isPlaying;
            case "electricman":
                return this.electricmanAni.isPlaying;
            case "equipment":
                return this.equipmentAni.isPlaying;
            case "goggles":
                return this.GogglesAni.isPlaying;
            case "hat":
                return this.HatAni.isPlaying;
            case "heart":
                return this.HeartAni.isPlaying;
            case "liuxiang":
                return this.liuxiangAni.isPlaying;
            case "medal":
                return this.MedalAni.isPlaying;
            case "scoreboard":
                return this.ScoreboardAni.isPlaying;
            case "shoes":
                return this.ShoesAni.isPlaying;
            case "stage":
                return this.StageAni.isPlaying;
            case "wall":
                return this.WallAni.isPlaying;
            case "waterLeft":
                return this.WaterLeftAni.isPlaying;
            // case "waterRight":
            //     return this.WaterRightAni.isPlaying;
            case "whistle":
                return this.WhistleAni.isPlaying;
            case "win":
                return this.winAni.isPlaying;
            case "winMan":
                return this.WinManAni.isPlaying;
        }
    };
    Screen1BackGround.prototype.setAniVisible = function (aniName, visible) {
        switch (aniName) {
            case "cup":
                this.cupAni.visible = visible;
                break;
            case "whistle":
                this.whistleAni.visible = visible;
                break;
            case "shot":
                this.ShotAni.visible = visible;
                break;
            case "text2002":
                this.text2002Ani.visible = visible;
                break;
            case "text2004":
                this.text2004Ani.visible = visible;
                break;
            case "text2008":
                this.text2008Ani.visible = visible;
                break;
            case "text2012":
                this.text2012Ani.visible = visible;
                break;
            case "ball":
                this.BallAni.visible = visible;
                break;
            case "ballMan":
                this.BallManAni.visible = visible;
                break;
            case "board":
                this.BoardAni.visible = visible;
                break;
            case "clock":
                this.clockAni.visible = visible;
                break;
            // case "computer":
            //     this.ComputerAni.visible = visible;
            //     break;
            case "crowd":
                this.CrowdAni.visible = visible;
                break;
            case "dumbbell":
                this.dumbbellAni.visible = visible;
                break;
            case "electricman":
                this.electricmanAni.visible = visible;
                break;
            case "equipment":
                this.equipmentAni.visible = visible;
                break;
            case "goggles":
                this.GogglesAni.visible = visible;
                break;
            case "hat":
                this.HatAni.visible = visible;
                break;
            case "heart":
                this.HeartAni.visible = visible;
                break;
            case "liuxiang":
                this.liuxiangAni.visible = visible;
                break;
            case "medal":
                this.MedalAni.visible = visible;
                break;
            case "scoreboard":
                this.ScoreboardAni.visible = visible;
                break;
            case "shoes":
                this.ShoesAni.visible = visible;
                break;
            case "stage":
                this.StageAni.visible = visible;
                break;
            case "wall":
                this.WallAni.visible = visible;
                break;
            case "waterLeft":
                this.WaterLeftAni.visible = visible;
                break;
            // case "waterRight":
            //     this.WaterRightAni.visible = visible;
            //     break;
            case "whistle":
                this.WhistleAni.visible = visible;
                break;
            case "win":
                this.winAni.visible = visible;
                break;
            case "winMan":
                this.WinManAni.visible = visible;
                break;
        }
    };
    Screen1BackGround.prototype.isAniVisible = function (aniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.visible;
            case "whistle":
                return this.whistleAni.visible;
            case "shot":
                return this.ShotAni.visible;
            case "text2002":
                return this.text2002Ani.visible;
            case "text2004":
                return this.text2004Ani.visible;
            case "text2008":
                return this.text2008Ani.visible;
            case "text2012":
                return this.text2012Ani.visible;
            case "ball":
                return this.BallAni.visible;
            case "ballMan":
                return this.BallManAni.visible;
            case "board":
                return this.BoardAni.visible;
            case "clock":
                return this.clockAni.visible;
            // case "computer":
            //     return this.ComputerAni.visible;
            case "crowd":
                return this.CrowdAni.visible;
            case "dumbbell":
                return this.dumbbellAni.visible;
            case "electricman":
                return this.electricmanAni.visible;
            case "equipment":
                return this.equipmentAni.visible;
            case "goggles":
                return this.GogglesAni.visible;
            case "hat":
                return this.HatAni.visible;
            case "heart":
                return this.HeartAni.visible;
            case "liuxiang":
                return this.liuxiangAni.visible;
            case "medal":
                return this.MedalAni.visible;
            case "scoreboard":
                return this.ScoreboardAni.visible;
            case "shoes":
                return this.ShoesAni.visible;
            case "stage":
                return this.StageAni.visible;
            case "wall":
                return this.WallAni.visible;
            case "waterLeft":
                return this.WaterLeftAni.visible;
            // case "waterRight":
            //     return this.WaterRightAni.visible;
            case "whistle":
                return this.WhistleAni.visible;
            case "win":
                return this.winAni.visible;
            case "winMan":
                return this.WinManAni.visible;
        }
    };
    return Screen1BackGround;
}(Laya.Sprite));
exports.default = Screen1BackGround;

},{"./Constants":1}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var ScrollDialog = /** @class */ (function (_super) {
    __extends(ScrollDialog, _super);
    function ScrollDialog(tipType) {
        var _this = _super.call(this) || this;
        _this.tipType = tipType;
        _this.autoDestroyAtClosed = true;
        _this.isPopupCenter = false;
        _this.pos(0, 0);
        return _this;
    }
    ScrollDialog.prototype.onOpened = function () {
        Laya.timer.once(200, this, this.onCallLater);
    };
    ScrollDialog.prototype.onCallLater = function () {
        switch (this.tipType) {
            case "scroll": {
                if (!this.tipImage) {
                    Laya.timer.once(200, this, this.onCallLater);
                    return;
                }
                this.tipImage.y = Laya.Browser.clientHeight;
                this.tipImage.visible = true;
                break;
            }
            case "click_white": {
                if (!this.whiteClickImage) {
                    Laya.timer.once(200, this, this.onCallLater);
                    return;
                }
                this.whiteClickImage.y = Laya.Browser.clientHeight;
                this.whiteClickImage.visible = true;
                break;
            }
            case "click_black": {
                if (!this.blackClickImage) {
                    Laya.timer.once(200, this, this.onCallLater);
                    return;
                }
                this.blackClickImage.y = Laya.Browser.clientHeight;
                this.blackClickImage.visible = true;
            }
        }
        this.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
    };
    ScrollDialog.prototype.onClick = function () {
        this.close();
    };
    return ScrollDialog;
}(layaMaxUI_1.ui.dialog.ScrollDialogUI));
exports.default = ScrollDialog;

},{"./ui/layaMaxUI":20}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var ShakeDialog = /** @class */ (function (_super) {
    __extends(ShakeDialog, _super);
    function ShakeDialog() {
        var _this = _super.call(this) || this;
        _this.autoDestroyAtClosed = true;
        _this.isPopupCenter = false;
        _this.pos(0, 0);
        return _this;
    }
    return ShakeDialog;
}(layaMaxUI_1.ui.dialog.ShakeDialogUI));
exports.default = ShakeDialog;

},{"./ui/layaMaxUI":20}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Basketball = /** @class */ (function (_super) {
    __extends(Basketball, _super);
    function Basketball() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Basketball.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/basketball.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    Basketball.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    Basketball.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    Basketball.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return Basketball;
}(Laya.Sprite));
exports.default = Basketball;

},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page1e2s = /** @class */ (function (_super) {
    __extends(page1e2s, _super);
    function page1e2s() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    page1e2s.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page1to2Ani.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    page1e2s.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    page1e2s.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    page1e2s.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return page1e2s;
}(Laya.Sprite));
exports.default = page1e2s;

},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page2e3s = /** @class */ (function (_super) {
    __extends(page2e3s, _super);
    function page2e3s() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    page2e3s.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page2to3Ani.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    page2e3s.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    page2e3s.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    page2e3s.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return page2e3s;
}(Laya.Sprite));
exports.default = page2e3s;

},{}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page3e4s = /** @class */ (function (_super) {
    __extends(page3e4s, _super);
    function page3e4s() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    page3e4s.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page3to4Ani.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    page3e4s.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    page3e4s.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    page3e4s.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return page3e4s;
}(Laya.Sprite));
exports.default = page3e4s;

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Page3_Runman = /** @class */ (function (_super) {
    __extends(Page3_Runman, _super);
    function Page3_Runman() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Page3_Runman.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page3_runman.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    Page3_Runman.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    Page3_Runman.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    Page3_Runman.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return Page3_Runman;
}(Laya.Sprite));
exports.default = Page3_Runman;

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page4e5s = /** @class */ (function (_super) {
    __extends(page4e5s, _super);
    function page4e5s() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    page4e5s.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page4to5Ani.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    page4e5s.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    page4e5s.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    page4e5s.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return page4e5s;
}(Laya.Sprite));
exports.default = page4e5s;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var running = /** @class */ (function (_super) {
    __extends(running, _super);
    function running() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    running.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/page2Run.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    running.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    running.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    running.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return running;
}(Laya.Sprite));
exports.default = running;

},{}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Swimming = /** @class */ (function (_super) {
    __extends(Swimming, _super);
    function Swimming() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Swimming.prototype.init = function () {
        this.bodyAni = new Laya.Animation();
        this.bodyAni.loadAnimation("ani/swimmingAni.ani");
        this.addChild(this.bodyAni);
    };
    /**
     * 走动
     */
    Swimming.prototype.goPath = function (y) {
        this.bodyAni.gotoAndStop(y);
    };
    Swimming.prototype.show = function () {
        this.bodyAni.visible = true;
    };
    Swimming.prototype.hide = function () {
        this.bodyAni.visible = false;
    };
    return Swimming;
}(Laya.Sprite));
exports.default = Swimming;

},{}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = Laya.Dialog;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
        var LoadingDialogUI = /** @class */ (function (_super) {
            __extends(LoadingDialogUI, _super);
            function LoadingDialogUI() {
                return _super.call(this) || this;
            }
            LoadingDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("dialog/LoadingDialog");
            };
            return LoadingDialogUI;
        }(Dialog));
        dialog.LoadingDialogUI = LoadingDialogUI;
        var QuestionDialogUI = /** @class */ (function (_super) {
            __extends(QuestionDialogUI, _super);
            function QuestionDialogUI() {
                return _super.call(this) || this;
            }
            QuestionDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("dialog/QuestionDialog");
            };
            return QuestionDialogUI;
        }(Dialog));
        dialog.QuestionDialogUI = QuestionDialogUI;
        var ScrollDialogUI = /** @class */ (function (_super) {
            __extends(ScrollDialogUI, _super);
            function ScrollDialogUI() {
                return _super.call(this) || this;
            }
            ScrollDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("dialog/ScrollDialog");
            };
            return ScrollDialogUI;
        }(Dialog));
        dialog.ScrollDialogUI = ScrollDialogUI;
        var ShakeDialogUI = /** @class */ (function (_super) {
            __extends(ShakeDialogUI, _super);
            function ShakeDialogUI() {
                return _super.call(this) || this;
            }
            ShakeDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("dialog/ShakeDialog");
            };
            return ShakeDialogUI;
        }(Dialog));
        dialog.ShakeDialogUI = ShakeDialogUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui = exports.ui || (exports.ui = {}));

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTG9hZGluZ0RpYWxvZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1F1ZXN0aW9uRGF0YS50cyIsInNyYy9RdWVzdGlvbkRpYWxvZy50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyIsInNyYy9TY3JvbGxEaWFsb2cudHMiLCJzcmMvU2hha2VEaWFsb2cudHMiLCJzcmMvYmFza2V0YmFsbC50cyIsInNyYy9wYWdlMSYyLnRzIiwic3JjL3BhZ2UyJjMudHMiLCJzcmMvcGFnZTMmNC50cyIsInNyYy9wYWdlM19ydW5tYW4udHMiLCJzcmMvcGFnZTQmNS50cyIsInNyYy9ydW5uaW5nLnRzIiwic3JjL3N3aW1taW5nLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBNEJBLENBQUM7SUExQlUscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4Qiwy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RyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFpQmQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQWtCZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQW1CZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7Ozs7QUN6dUJmLGdHQUFnRzs7QUFFaEc7O0VBRUU7QUFDRjtJQWFJO0lBQWMs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QUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSwwQkFBMEI7UUFDakMsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxpQ0FBaUM7UUFDeEMsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLE1BQU07UUFDVCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxtQ0FBbUM7UUFDMUMsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxzQkFBc0I7UUFDN0IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSwyQkFBMkI7UUFDbEMsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFB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UCxVQUFRLE9BQWdCO1FBQ3BCLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxLQUFLO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFLO1lBRVQsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxVQUFVO2dCQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixNQUFNO1lBQ1YsbUJB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IiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50cyB7XG5cbiAgICBzdGF0aWMgYmFja2dyb3VuZDEgPSBcImJnL2JhY2tncm91bmQxLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQyID0gXCJiZy9iYWNrZ3JvdW5kMi5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMyA9IFwiYmcvYmFja2dyb3VuZDMucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDQgPSBcImJnL2JhY2tncm91bmQ0LnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQ1ID0gXCJiZy9iYWNrZ3JvdW5kNS5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMUhlaWdodCA9IDM2MDRcbiAgICBzdGF0aWMgYmFja2dyb3VuZDJIZWlnaHQgPSAyNTYxXG4gICAgc3RhdGljIGJhY2tncm91bmQzSGVpZ2h0ID0gMjE5MFxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNEhlaWdodCA9IDI1NTlcbiAgICBzdGF0aWMgYmFja2dyb3VuZDVIZWlnaHQgPSAxOTIwXG5cblxuICAgIHN0YXRpYyBzdGFnZVdpZHRoID0gNTEyXG4gICAgc3RhdGljIHN0YXRlSGVpZ2h0ID0gQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ1SGVpZ2h0ICsgMzg4MFxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwibm9ib3JkZXJcIjtcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTogc3RyaW5nID0gXCJ2ZXJ0aWNhbFwiO1xuXG4gICAgc3RhdGljIHNvdW5kMCA9IFwicmVzL3NvdW5kLzAubXAzXCJcbiAgICBzdGF0aWMgc291bmQxID0gXCJyZXMvc291bmQvMS5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDIgPSBcInJlcy9zb3VuZC8yLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMyA9IFwicmVzL3NvdW5kLzMubXAzXCJcbiAgICBzdGF0aWMgc291bmQ0ID0gXCJyZXMvc291bmQvNC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZEJnbSA9IFwicmVzL3NvdW5kL2JnbS5tcDNcIlxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RiYWxsIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5iei2s+eQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvRm9vdGJhbGxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotrPnkIPlgZzmraLml4vovaxcbiAgICAgKi9cbiAgICBzdG9wUm90YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuYm9keUFuaS5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUFuaS5nb3RvQW5kU3RvcCgwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi2s+eQg1xi5peL6L2sXG4gICAgICovXG4gICAgcGxheVJvdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYm9keUFuaS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlBbmkucGxheSgwLCB0cnVlKVxuXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9vdGJhbGxYKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgeCA9IG1hcFt5XVxuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiB4XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG59XG5jb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcblxubWFwWzIzMl0gPSAzMjZcbm1hcFsyMzJdID0gMzI5XG5tYXBbMjM0XSA9IDMzMFxubWFwWzIzNl0gPSAzMzJcbm1hcFsyMzddID0gMzM0XG5tYXBbMjM3XSA9IDMzN1xubWFwWzIzOV0gPSAzMzlcbm1hcFsyMzldID0gMzQyXG5tYXBbMjQwXSA9IDM0NFxubWFwWzI0Ml0gPSAzNDVcbm1hcFsyNDRdID0gMzQ3XG5tYXBbMjQ1XSA9IDM0OFxubWFwWzI0N10gPSAzNTBcbm1hcFsyNDldID0gMzUyXG5tYXBbMjUwXSA9IDM1M1xubWFwWzI1Ml0gPSAzNTVcbm1hcFsyNTRdID0gMzU3XG5tYXBbMjU1XSA9IDM1OFxubWFwWzI1N10gPSAzNjBcbm1hcFsyNThdID0gMzYyXG5tYXBbMjU4XSA9IDM2NVxubWFwWzI2MF0gPSAzNjZcbm1hcFsyNjJdID0gMzY4XG5tYXBbMjYzXSA9IDM3MFxubWFwWzI2NV0gPSAzNzFcbm1hcFsyNjddID0gMzczXG5tYXBbMjY4XSA9IDM3NVxubWFwWzI3MF0gPSAzNzZcbm1hcFsyNzJdID0gMzc4XG5tYXBbMjczXSA9IDM4MFxubWFwWzI3NV0gPSAzODFcbm1hcFsyNzhdID0gMzgxXG5tYXBbMjgxXSA9IDM4MVxubWFwWzI4M10gPSAzODNcbm1hcFsyODZdID0gMzgzXG5tYXBbMjg4XSA9IDM4NFxubWFwWzI5MV0gPSAzODRcbm1hcFsyOTRdID0gMzg0XG5tYXBbMjk2XSA9IDM4NlxubWFwWzI5OV0gPSAzODZcbm1hcFszMDNdID0gMzg2XG5tYXBbMzA2XSA9IDM4NlxubWFwWzMwOV0gPSAzODZcbm1hcFszMTJdID0gMzg2XG5tYXBbMzE2XSA9IDM4NlxubWFwWzMxN10gPSAzODhcbm1hcFszMjFdID0gMzg4XG5tYXBbMzI0XSA9IDM4OFxubWFwWzMyN10gPSAzODhcbm1hcFszMzBdID0gMzg4XG5tYXBbMzM0XSA9IDM4OFxubWFwWzMzNV0gPSAzODZcbm1hcFszMzldID0gMzg2XG5tYXBbMzQyXSA9IDM4NlxubWFwWzM0NV0gPSAzODZcbm1hcFszNDhdID0gMzg2XG5tYXBbMzUyXSA9IDM4NFxubWFwWzM1NV0gPSAzODRcbm1hcFszNTddID0gMzgzXG5tYXBbMzYwXSA9IDM4M1xubWFwWzM2MV0gPSAzODFcbm1hcFszNjNdID0gMzgwXG5tYXBbMzY1XSA9IDM3OFxubWFwWzM2Nl0gPSAzNzZcbm1hcFszNzBdID0gMzc1XG5tYXBbMzcxXSA9IDM3M1xubWFwWzM3M10gPSAzNzFcbm1hcFszNzZdID0gMzcwXG5tYXBbMzc4XSA9IDM2OFxubWFwWzM3OV0gPSAzNjZcbm1hcFszODFdID0gMzY1XG5tYXBbMzgzXSA9IDM2M1xubWFwWzM4Nl0gPSAzNjNcbm1hcFszODhdID0gMzYyXG5tYXBbMzg5XSA9IDM2MFxubWFwWzM5MV0gPSAzNThcbm1hcFszOTNdID0gMzU3XG5tYXBbMzk0XSA9IDM1NVxubWFwWzM5Nl0gPSAzNTNcbm1hcFszOTddID0gMzUyXG5tYXBbMzk5XSA9IDM1MFxubWFwWzQwMV0gPSAzNDhcbm1hcFs0MDRdID0gMzQ4XG5tYXBbNDA2XSA9IDM0N1xubWFwWzQwN10gPSAzNDVcbm1hcFs0MDldID0gMzQ0XG5tYXBbNDExXSA9IDM0MlxubWFwWzQxMl0gPSAzNDBcbm1hcFs0MTRdID0gMzM5XG5tYXBbNDE1XSA9IDMzN1xubWFwWzQxN10gPSAzMzVcbm1hcFs0MTldID0gMzM0XG5tYXBbNDIwXSA9IDMzMlxubWFwWzQyMl0gPSAzMzBcbm1hcFs0MjVdID0gMzI5XG5tYXBbNDI3XSA9IDMyN1xubWFwWzQyOV0gPSAzMjZcbm1hcFs0MzJdID0gMzI2XG5tYXBbNDMzXSA9IDMyNFxubWFwWzQzNV0gPSAzMjJcbm1hcFs0MzddID0gMzIxXG5tYXBbNDM4XSA9IDMxOVxubWFwWzQ0MF0gPSAzMTdcbm1hcFs0NDJdID0gMzE2XG5tYXBbNDQzXSA9IDMxNFxubWFwWzQ0NV0gPSAzMTJcbm1hcFs0NDhdID0gMzEyXG5tYXBbNDUwXSA9IDMxMVxubWFwWzQ1MV0gPSAzMDlcbm1hcFs0NTVdID0gMzA4XG5tYXBbNDU2XSA9IDMwNlxubWFwWzQ1OF0gPSAzMDRcbm1hcFs0NjFdID0gMzAzXG5tYXBbNDYzXSA9IDMwMVxubWFwWzQ2NV0gPSAyOTlcbm1hcFs0NjZdID0gMjk4XG5tYXBbNDY4XSA9IDI5NlxubWFwWzQ2OV0gPSAyOTRcbm1hcFs0NzFdID0gMjkzXG5tYXBbNDc0XSA9IDI5M1xubWFwWzQ3Nl0gPSAyOTFcbm1hcFs0NzhdID0gMjkwXG5tYXBbNDc5XSA9IDI4OFxubWFwWzQ4MV0gPSAyODZcbm1hcFs0ODNdID0gMjg1XG5tYXBbNDg0XSA9IDI4M1xubWFwWzQ4Nl0gPSAyODFcbm1hcFs0ODddID0gMjgwXG5tYXBbNDkxXSA9IDI4MFxubWFwWzQ5Ml0gPSAyNzhcbm1hcFs0OTRdID0gMjc2XG5tYXBbNDk2XSA9IDI3NVxubWFwWzQ5N10gPSAyNzNcbm1hcFs0OTldID0gMjcyXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFs0OTldID0gMjcyXG5tYXBbNTAyXSA9IDI3MlxubWFwWzUwNF0gPSAyNzBcbm1hcFs1MDVdID0gMjY4XG5tYXBbNTA3XSA9IDI2N1xubWFwWzUwOV0gPSAyNjVcbm1hcFs1MTBdID0gMjYzXG5tYXBbNTE0XSA9IDI2MlxubWFwWzUxNV0gPSAyNjBcbm1hcFs1MTddID0gMjU4XG5tYXBbNTE5XSA9IDI1N1xubWFwWzUyMF0gPSAyNTVcbm1hcFs1MjJdID0gMjU0XG5tYXBbNTIzXSA9IDI1MlxubWFwWzUyNV0gPSAyNTBcbm1hcFs1MjddID0gMjQ3XG5tYXBbNTI4XSA9IDI0NVxubWFwWzUzMF0gPSAyNDRcbm1hcFs1MzJdID0gMjQyXG5tYXBbNTMzXSA9IDI0MFxubWFwWzUzM10gPSAyMzdcbm1hcFs1MzVdID0gMjM2XG5tYXBbNTM2XSA9IDIzNFxubWFwWzUzOF0gPSAyMzJcbm1hcFs1NDBdID0gMjMxXG5tYXBbNTQxXSA9IDIyOVxubWFwWzU0M10gPSAyMjZcbm1hcFs1NDVdID0gMjI0XG5tYXBbNTQ2XSA9IDIyMlxubWFwWzU0OF0gPSAyMjFcbm1hcFs1NTBdID0gMjE5XG5tYXBbNTUxXSA9IDIxOFxubWFwWzU1M10gPSAyMTZcbm1hcFs1NTZdID0gMjE2XG5tYXBbNTU4XSA9IDIxNFxubWFwWzU1OV0gPSAyMTNcbm1hcFs1NjFdID0gMjExXG5tYXBbNTY0XSA9IDIxMVxubWFwWzU2Nl0gPSAyMDlcbm1hcFs1NjhdID0gMjA4XG5tYXBbNTcxXSA9IDIwOFxubWFwWzU3Ml0gPSAyMDZcbm1hcFs1NzRdID0gMjA0XG5tYXBbNTc2XSA9IDIwM1xubWFwWzU3OV0gPSAyMDNcbm1hcFs1ODFdID0gMjAxXG5tYXBbNTgyXSA9IDIwMFxubWFwWzU4NF0gPSAxOThcbm1hcFs1ODZdID0gMTk2XG5tYXBbNTg3XSA9IDE5NVxubWFwWzU5MF0gPSAxOTVcbm1hcFs1OTJdID0gMTkzXG5tYXBbNTk1XSA9IDE5M1xubWFwWzU5N10gPSAxOTFcbm1hcFs2MDBdID0gMTkxXG5tYXBbNjAyXSA9IDE5MFxubWFwWzYwNF0gPSAxODhcbm1hcFs2MDddID0gMTg4XG5tYXBbNjA4XSA9IDE4NlxubWFwWzYxMF0gPSAxODVcbm1hcFs2MTNdID0gMTg1XG5tYXBbNjE1XSA9IDE4M1xubWFwWzYxN10gPSAxODJcbm1hcFs2MThdID0gMTgwXG5tYXBbNjIyXSA9IDE3OFxubWFwWzYyM10gPSAxNzdcbm1hcFs2MjZdID0gMTc3XG5tYXBbNjI4XSA9IDE3NVxubWFwWzYzMF0gPSAxNzNcbm1hcFs2MzFdID0gMTcyXG5tYXBbNjM1XSA9IDE3MlxubWFwWzYzNl0gPSAxNzBcbm1hcFs2MzhdID0gMTY4XG5tYXBbNjQwXSA9IDE2N1xubWFwWzY0M10gPSAxNjdcbm1hcFs2NDRdID0gMTY1XG5tYXBbNjQ4XSA9IDE2NFxubWFwWzY1MV0gPSAxNjRcbm1hcFs2NTNdID0gMTYyXG5tYXBbNjU2XSA9IDE2MlxubWFwWzY1OF0gPSAxNjBcbm1hcFs2NjFdID0gMTYwXG5tYXBbNjYyXSA9IDE1OVxubWFwWzY2Nl0gPSAxNTlcbm1hcFs2NjddID0gMTU3XG5tYXBbNjcxXSA9IDE1N1xubWFwWzY3Ml0gPSAxNTVcbm1hcFs2NzZdID0gMTU1XG5tYXBbNjc5XSA9IDE1NVxubWFwWzY4MF0gPSAxNTRcbm1hcFs2ODRdID0gMTU0XG5tYXBbNjg3XSA9IDE1NFxubWFwWzY5MF0gPSAxNTRcbm1hcFs2OTRdID0gMTU0XG5tYXBbNjk3XSA9IDE1NFxubWFwWzcwMF0gPSAxNTRcbm1hcFs3MDNdID0gMTU0XG5tYXBbNzA3XSA9IDE1NFxubWFwWzcxMF0gPSAxNTRcbm1hcFs3MTNdID0gMTU0XG5tYXBbNzE2XSA9IDE1NFxubWFwWzcyMF0gPSAxNTRcbm1hcFs3MjNdID0gMTU0XG5tYXBbNzI2XSA9IDE1NFxubWFwWzczMF0gPSAxNTRcbm1hcFs3MzNdID0gMTU0XG5tYXBbNzM2XSA9IDE1NVxubWFwWzczOV0gPSAxNTVcbm1hcFs3NDNdID0gMTU1XG5tYXBbNzQ2XSA9IDE1NVxubWFwWzc0OV0gPSAxNTVcbm1hcFs3NTFdID0gMTU3XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzc1MV0gPSAxNTVcbm1hcFs3NTRdID0gMTU1XG5tYXBbNzU2XSA9IDE1N1xubWFwWzc1OV0gPSAxNTdcbm1hcFs3NjFdID0gMTU5XG5tYXBbNzY0XSA9IDE1OVxubWFwWzc2NV0gPSAxNjBcbm1hcFs3NjddID0gMTYyXG5tYXBbNzcwXSA9IDE2MlxubWFwWzc3Ml0gPSAxNjRcbm1hcFs3NzVdID0gMTY0XG5tYXBbNzc3XSA9IDE2NVxubWFwWzc4MF0gPSAxNjdcbm1hcFs3ODNdID0gMTY3XG5tYXBbNzg1XSA9IDE2OFxubWFwWzc4OF0gPSAxNjhcbm1hcFs3OTBdID0gMTcwXG5tYXBbNzkzXSA9IDE3MFxubWFwWzc5NV0gPSAxNzJcbm1hcFs3OTddID0gMTczXG5tYXBbODAwXSA9IDE3M1xubWFwWzgwMV0gPSAxNzVcbm1hcFs4MDVdID0gMTc1XG5tYXBbODA2XSA9IDE3N1xubWFwWzgwOF0gPSAxNzhcbm1hcFs4MTFdID0gMTc4XG5tYXBbODEzXSA9IDE4MFxubWFwWzgxNV0gPSAxODJcbm1hcFs4MThdID0gMTgyXG5tYXBbODE5XSA9IDE4M1xubWFwWzgyMV0gPSAxODVcbm1hcFs4MjNdID0gMTg2XG5tYXBbODI2XSA9IDE4NlxubWFwWzgyOF0gPSAxODhcbm1hcFs4MjldID0gMTkwXG5tYXBbODMzXSA9IDE5MVxubWFwWzgzNF0gPSAxOTNcbm1hcFs4MzddID0gMTkzXG5tYXBbODM5XSA9IDE5NVxubWFwWzg0MV0gPSAxOTZcbm1hcFs4NDJdID0gMTk4XG5tYXBbODQ0XSA9IDIwMFxubWFwWzg0Nl0gPSAyMDFcbm1hcFs4NDddID0gMjAzXG5tYXBbODQ5XSA9IDIwNFxubWFwWzg1MV0gPSAyMDZcbm1hcFs4NTJdID0gMjA4XG5tYXBbODU0XSA9IDIwOVxubWFwWzg1N10gPSAyMTFcbm1hcFs4NTldID0gMjEzXG5tYXBbODYwXSA9IDIxNFxubWFwWzg2NF0gPSAyMTRcbm1hcFs4NjVdID0gMjE2XG5tYXBbODY3XSA9IDIxOFxubWFwWzg2OV0gPSAyMTlcbm1hcFs4NzBdID0gMjIxXG5tYXBbODcyXSA9IDIyMlxubWFwWzg3NV0gPSAyMjJcbm1hcFs4NzddID0gMjI0XG5tYXBbODc4XSA9IDIyNlxubWFwWzg3OF0gPSAyMjlcbm1hcFs4ODBdID0gMjMxXG5tYXBbODgyXSA9IDIzMlxubWFwWzg4M10gPSAyMzRcbm1hcFs4ODVdID0gMjM2XG5tYXBbODg3XSA9IDIzN1xubWFwWzg4OF0gPSAyMzlcbm1hcFs4OTBdID0gMjQwXG5tYXBbODkxXSA9IDI0MlxubWFwWzg5M10gPSAyNDRcbm1hcFs4OTVdID0gMjQ1XG5tYXBbODk2XSA9IDI0N1xubWFwWzg5OF0gPSAyNDlcbm1hcFs5MDBdID0gMjUwXG5tYXBbOTAxXSA9IDI1MlxubWFwWzkwM10gPSAyNTRcbm1hcFs5MDVdID0gMjU1XG5tYXBbOTA4XSA9IDI1N1xubWFwWzkwOV0gPSAyNThcbm1hcFs5MTNdID0gMjYwXG5tYXBbOTE2XSA9IDI2MFxubWFwWzkxOF0gPSAyNjJcbm1hcFs5MjFdID0gMjYyXG5tYXBbOTI0XSA9IDI2MlxubWFwWzkyN10gPSAyNjJcbm1hcFs5MzFdID0gMjYyXG5tYXBbOTMyXSA9IDI2M1xubWFwWzkzNF0gPSAyNjJcbm1hcFs5MzddID0gMjYyXG5tYXBbOTQxXSA9IDI2MlxubWFwWzk0NF0gPSAyNjJcbm1hcFs5NDddID0gMjYwXG5tYXBbOTUwXSA9IDI2MFxubWFwWzk1NF0gPSAyNThcbm1hcFs5NTddID0gMjU3XG5tYXBbOTYwXSA9IDI1NVxubWFwWzk2M10gPSAyNTRcbm1hcFs5NjddID0gMjUyXG5tYXBbOTcwXSA9IDI1MlxubWFwWzk3Ml0gPSAyNTBcbm1hcFs5NzNdID0gMjQ5XG5tYXBbOTc2XSA9IDI0OVxubWFwWzk4MF0gPSAyNDlcbm1hcFs5ODFdID0gMjQ3XG5tYXBbOTg1XSA9IDI0N1xubWFwWzk4Nl0gPSAyNDVcbm1hcFs5ODhdID0gMjQ0XG5tYXBbOTkxXSA9IDI0NFxubWFwWzk5M10gPSAyNDJcbm1hcFs5OTRdID0gMjQwXG5tYXBbOTk4XSA9IDI0MFxubWFwWzk5OV0gPSAyMzlcbm1hcFsxMDAxXSA9IDIzN1xubWFwWzEwMDRdID0gMjM2XG5tYXBbMTAwNl0gPSAyMzRcbm1hcFsxMDA5XSA9IDIzMlxubWFwWzEwMTFdID0gMjMxXG5tYXBbMTAxMl0gPSAyMjlcbm1hcFsxMDE0XSA9IDIyN1xubWFwWzEwMTddID0gMjI2XG5tYXBbMTAxOV0gPSAyMjRcbm1hcFsxMDIxXSA9IDIyMlxubWFwWzEwMjRdID0gMjIxXG5tYXBbMTAyNl0gPSAyMTlcbm1hcFsxMDI5XSA9IDIxOVxubWFwWzEwMzJdID0gMjIxXG5tYXBbMTAzNV0gPSAyMjJcbm1hcFsxMDM5XSA9IDIyMlxubWFwWzEwNDBdID0gMjI0XG5tYXBbMTA0Ml0gPSAyMjZcbm1hcFsxMDQ1XSA9IDIyNlxubWFwWzEwNDddID0gMjI3XG5tYXBbMTA0OF0gPSAyMjlcbm1hcFsxMDUyXSA9IDIyOVxubWFwWzEwNTNdID0gMjMxXG5tYXBbMTA1NV0gPSAyMzJcbm1hcFsxMDU4XSA9IDIzNFxubWFwWzEwNjBdID0gMjM2XG5tYXBbMTA2Ml0gPSAyMzdcbm1hcFsxMDY1XSA9IDIzOVxubWFwWzEwNjZdID0gMjQwXG5tYXBbMTA2OF0gPSAyNDJcbm1hcFsxMDcwXSA9IDI0NFxubWFwWzEwNzFdID0gMjQ1XG5tYXBbMTA3M10gPSAyNDdcbm1hcFsxMDc1XSA9IDI0OVxubWFwWzEwNzZdID0gMjUwXG5tYXBbMTA3OF0gPSAyNTJcbm1hcFsxMDgwXSA9IDI1NFxubWFwWzEwODFdID0gMjU1XG5tYXBbMTA4NF0gPSAyNTVcbm1hcFsxMDg4XSA9IDI1NVxubWFwWzEwOTFdID0gMjU1XG5tYXBbMTA5NF0gPSAyNTVcbm1hcFsxMDk2XSA9IDI1N1xubWFwWzEwOTldID0gMjU3XG5tYXBbMTEwMl0gPSAyNTdcbm1hcFsxMTA2XSA9IDI1N1xubWFwWzExMDldID0gMjU4XG5tYXBbMTExMl0gPSAyNTdcbm1hcFsxMTE2XSA9IDI1N1xubWFwWzExMTddID0gMjU4XG5tYXBbMTEyMF0gPSAyNThcbm1hcFsxMTI0XSA9IDI1OFxubWFwWzExMjddID0gMjU4XG5tYXBbMTEyOV0gPSAyNjBcbm1hcFsxMTMyXSA9IDI2MFxubWFwWzExMzVdID0gMjYwXG5tYXBbMTEzN10gPSAyNjJcbm1hcFsxMTQwXSA9IDI2MlxubWFwWzExNDNdID0gMjYzXG5tYXBbMTE0N10gPSAyNjNcbm1hcFsxMTUwXSA9IDI2M1xubWFwWzExNTNdID0gMjYzXG5tYXBbMTE1Nl0gPSAyNjNcbm1hcFsxMTYwXSA9IDI2NVxubWFwWzExNjNdID0gMjY1XG5tYXBbMTE2Nl0gPSAyNjVcbm1hcFsxMTY5XSA9IDI2NVxubWFwWzExNzNdID0gMjY1XG5tYXBbMTE3Nl0gPSAyNjVcbm1hcFsxMTc4XSA9IDI2N1xubWFwWzExODFdID0gMjY3XG5tYXBbMTE4NF0gPSAyNjdcbm1hcFsxMTg3XSA9IDI2N1xubWFwWzExOTFdID0gMjY3XG5tYXBbMTE5Ml0gPSAyNjhcbm1hcFsxMTk2XSA9IDI2OFxubWFwWzExOTldID0gMjY4XG5tYXBbMTIwMl0gPSAyNjhcbm1hcFsxMjA0XSA9IDI3MFxubWFwWzEyMDddID0gMjcwXG5tYXBbMTIxMF0gPSAyNzBcbm1hcFsxMjE0XSA9IDI3MFxubWFwWzEyMTVdID0gMjcyXG5tYXBbMTIxOV0gPSAyNzJcbm1hcFsxMjIyXSA9IDI3MlxubWFwWzEyMjVdID0gMjcyXG5tYXBbMTIyN10gPSAyNzNcbm1hcFsxMjMwXSA9IDI3M1xubWFwWzEyMzNdID0gMjczXG5tYXBbMTIzN10gPSAyNzNcbm1hcFsxMjQwXSA9IDI3M1xubWFwWzEyNDFdID0gMjc1XG5tYXBbMTI0NV0gPSAyNzVcbm1hcFsxMjQ4XSA9IDI3NVxubWFwWzEyNTFdID0gMjc1XG5tYXBbMTI1NV0gPSAyNzVcbm1hcFsxMjU4XSA9IDI3NVxubWFwWzEyNTldID0gMjc2XG5tYXBbMTI2M10gPSAyNzZcbm1hcFsxMjY2XSA9IDI3NlxubWFwWzEyNjldID0gMjc2XG5tYXBbMTI3M10gPSAyNzZcbm1hcFsxMjc2XSA9IDI3NlxubWFwWzEyNzddID0gMjc4XG5tYXBbMTI4MV0gPSAyNzhcbm1hcFsxMjg0XSA9IDI3OFxubWFwWzEyODddID0gMjc4XG5tYXBbMTI4OV0gPSAyODBcbm1hcFsxMjkyXSA9IDI4MFxubWFwWzEyOTVdID0gMjgwXG5tYXBbMTI5N10gPSAyODFcbm1hcFsxMzAwXSA9IDI4MVxubWFwWzEzMDJdID0gMjgzXG5tYXBbMTMwNV0gPSAyODVcbm1hcFsxMzA5XSA9IDI4NlxubWFwWzEzMTBdID0gMjg4XG5tYXBbMTMxM10gPSAyODhcbm1hcFsxMzE1XSA9IDI5MFxubWFwWzEzMTddID0gMjkxXG5tYXBbMTMyMF0gPSAyOTFcbm1hcFsxMzIyXSA9IDI5M1xubWFwWzEzMjNdID0gMjk0XG5tYXBbMTMyNV0gPSAyOTZcbm1hcFsxMzI4XSA9IDI5NlxubWFwWzEzMzBdID0gMjk4XG5tYXBbMTMzMV0gPSAyOTlcbm1hcFsxMzMzXSA9IDMwMVxubWFwWzEzMzZdID0gMzAzXG5tYXBbMTMzOF0gPSAzMDRcbm1hcFsxMzQxXSA9IDMwNFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzEzNDFdID0gMzA0XG5tYXBbMTM0NF0gPSAzMDRcbm1hcFsxMzQ2XSA9IDMwNlxubWFwWzEzNDldID0gMzA2XG5tYXBbMTM1Ml0gPSAzMDZcbm1hcFsxMzU0XSA9IDMwOFxubWFwWzEzNTddID0gMzA4XG5tYXBbMTM2MF0gPSAzMDhcbm1hcFsxMzYyXSA9IDMwOVxubWFwWzEzNjVdID0gMzA5XG5tYXBbMTM2OV0gPSAzMDlcbm1hcFsxMzcwXSA9IDMxMVxubWFwWzEzNzNdID0gMzExXG5tYXBbMTM3N10gPSAzMTFcbm1hcFsxMzc4XSA9IDMxMlxubWFwWzEzODJdID0gMzEyXG5tYXBbMTM4NV0gPSAzMTJcbm1hcFsxMzg3XSA9IDMxNFxubWFwWzEzOTBdID0gMzE0XG5tYXBbMTM5M10gPSAzMTRcbm1hcFsxMzk1XSA9IDMxNlxubWFwWzEzOThdID0gMzE2XG5tYXBbMTQwMV0gPSAzMTZcbm1hcFsxNDA1XSA9IDMxNlxubWFwWzE0MDhdID0gMzE2XG5tYXBbMTQwOV0gPSAzMTdcbm1hcFsxNDEzXSA9IDMxN1xubWFwWzE0MTZdID0gMzE3XG5tYXBbMTQxOV0gPSAzMTdcbm1hcFsxNDIzXSA9IDMxN1xubWFwWzE0MjRdID0gMzE5XG5tYXBbMTQyN10gPSAzMTlcbm1hcFsxNDMxXSA9IDMxOVxubWFwWzE0MzJdID0gMzIxXG5tYXBbMTQzNl0gPSAzMjFcbm1hcFsxNDM5XSA9IDMyMVxubWFwWzE0NDFdID0gMzIyXG5tYXBbMTQ0NF0gPSAzMjJcbm1hcFsxNDQ3XSA9IDMyMlxubWFwWzE0NDldID0gMzI0XG5tYXBbMTQ1Ml0gPSAzMjRcbm1hcFsxNDU1XSA9IDMyNFxubWFwWzE0NTddID0gMzI2XG5tYXBbMTQ2MF0gPSAzMjZcbm1hcFsxNDYzXSA9IDMyNlxubWFwWzE0NjddID0gMzI2XG5tYXBbMTQ3MF0gPSAzMjZcbm1hcFsxNDczXSA9IDMyNlxubWFwWzE0NzZdID0gMzI2XG5tYXBbMTQ4MF0gPSAzMjZcbm1hcFsxNDgzXSA9IDMyNlxubWFwWzE0ODZdID0gMzI2XG5tYXBbMTQ5MF0gPSAzMjZcbm1hcFsxNDkzXSA9IDMyNlxubWFwWzE0OTZdID0gMzI2XG5tYXBbMTQ5OV0gPSAzMjZcbm1hcFsxNTAzXSA9IDMyNlxubWFwWzE1MDZdID0gMzI2XG5tYXBbMTUwOF0gPSAzMjRcbm1hcFsxNTExXSA9IDMyNFxubWFwWzE1MTRdID0gMzI0XG5tYXBbMTUxN10gPSAzMjRcbm1hcFsxNTE5XSA9IDMyMlxubWFwWzE1MjJdID0gMzIyXG5tYXBbMTUyNl0gPSAzMjJcbm1hcFsxNTI3XSA9IDMyMVxubWFwWzE1MjddID0gMzIxXG5tYXBbMTUzMF0gPSAzMjFcbm1hcFsxNTM0XSA9IDMyMVxubWFwWzE1MzddID0gMzIxXG5tYXBbMTU0MF0gPSAzMjFcbm1hcFsxNTQ0XSA9IDMyMVxubWFwWzE1NDddID0gMzIxXG5tYXBbMTU1MF0gPSAzMjFcbm1hcFsxNTUyXSA9IDMxOVxubWFwWzE1NTVdID0gMzE5XG5tYXBbMTU1N10gPSAzMTdcbm1hcFsxNTYwXSA9IDMxN1xubWFwWzE1NjJdID0gMzE2XG5tYXBbMTU2NV0gPSAzMTZcbm1hcFsxNTY2XSA9IDMxNFxubWFwWzE1NzBdID0gMzE0XG5tYXBbMTU3M10gPSAzMTRcbm1hcFsxNTc1XSA9IDMxMlxubWFwWzE1NzhdID0gMzEyXG5tYXBbMTU4MV0gPSAzMTFcbm1hcFsxNTg0XSA9IDMxMVxubWFwWzE1ODhdID0gMzA5XG5tYXBbMTU5MV0gPSAzMDlcbm1hcFsxNTk0XSA9IDMwOVxubWFwWzE1OTZdID0gMzA4XG5tYXBbMTU5OV0gPSAzMDhcbm1hcFsxNjAxXSA9IDMwOFxubWFwWzE2MDFdID0gMzA4XG5tYXBbMTYwNF0gPSAzMDhcbm1hcFsxNjA2XSA9IDMwNlxubWFwWzE2MDldID0gMzA2XG5tYXBbMTYxMl0gPSAzMDRcbm1hcFsxNjE2XSA9IDMwNFxubWFwWzE2MTddID0gMzAzXG5tYXBbMTYyMF0gPSAzMDNcbm1hcFsxNjI0XSA9IDMwM1xubWFwWzE2MjddID0gMzAzXG5tYXBbMTYyOV0gPSAzMDFcbm1hcFsxNjMyXSA9IDMwMVxubWFwWzE2MzVdID0gMzAxXG5tYXBbMTYzN10gPSAyOTlcbm1hcFsxNjQwXSA9IDI5OVxubWFwWzE2NDNdID0gMjk5XG5tYXBbMTY0N10gPSAyOTlcbm1hcFsxNjUwXSA9IDI5OVxubWFwWzE2NTJdID0gMjk4XG5tYXBbMTY1NV0gPSAyOThcbm1hcFsxNjU4XSA9IDI5OFxubWFwWzE2NjFdID0gMjk4XG5tYXBbMTY2NV0gPSAyOThcbm1hcFsxNjY2XSA9IDI5NlxubWFwWzE2NjldID0gMjk2XG5tYXBbMTY3M10gPSAyOTZcbm1hcFsxNjc0XSA9IDI5NFxubWFwWzE2NzZdID0gMjk0XG5tYXBbMTY3OV0gPSAyOTRcbm1hcFsxNjgzXSA9IDI5NFxubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4N10gPSAyOTNcbm1hcFsxNjkxXSA9IDI5M1xubWFwWzE2OTRdID0gMjkzXG5tYXBbMTY5N10gPSAyOTNcbm1hcFsxNzAxXSA9IDI5M1xubWFwWzE3MDVdID0gMjkxXG5tYXBbMTcwOV0gPSAyOTFcbm1hcFsxNzEyXSA9IDI5MVxubWFwWzE3MTVdID0gMjkxXG5tYXBbMTcxOV0gPSAyOTFcbm1hcFsxNzIyXSA9IDI5MVxubWFwWzE3MjVdID0gMjkxXG5tYXBbMTcyOF0gPSAyOTFcbm1hcFsxNzMyXSA9IDI5MVxubWFwWzE3MzVdID0gMjkxXG5tYXBbMTczOF0gPSAyOTFcbm1hcFsxNzQxXSA9IDI5MVxubWFwWzE3NDVdID0gMjkxXG5tYXBbMTc0Nl0gPSAyOTBcbm1hcFsxNzUwXSA9IDI5MFxubWFwWzE3NTNdID0gMjkwXG5tYXBbMTc1Nl0gPSAyOTBcbm1hcFsxNzU5XSA9IDI5MFxubWFwWzE3NjNdID0gMjkwXG5tYXBbMTc2Nl0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzczXSA9IDI5MFxubWFwWzE3NzZdID0gMjkwXG5tYXBbMTc3OV0gPSAyOTBcbm1hcFsxNzgyXSA9IDI5MFxubWFwWzE3ODZdID0gMjkwXG5tYXBbMTc4OV0gPSAyOTBcbm1hcFsxNzkyXSA9IDI5MFxubWFwWzE3OTVdID0gMjkwXG5tYXBbMTc5OV0gPSAyOTBcbm1hcFsxODAyXSA9IDI5MFxubWFwWzE4MDVdID0gMjkwXG5tYXBbMTgwOV0gPSAyOTBcbm1hcFsxODEyXSA9IDI5MFxubWFwWzE4MTNdID0gMjg4XG5tYXBbMTgxN10gPSAyODhcbm1hcFsxODIwXSA9IDI4OFxubWFwWzE4MjNdID0gMjg4XG5tYXBbMTgyN10gPSAyODhcbm1hcFsxODMwXSA9IDI4OFxubWFwWzE4MzNdID0gMjg4XG5tYXBbMTgzNl0gPSAyOTBcbm1hcFsxODQwXSA9IDI5MFxubWFwWzE4NDFdID0gMjkwXG5tYXBbMTg0NV0gPSAyOTBcbm1hcFsxODQ4XSA9IDI5MFxubWFwWzE4NTFdID0gMjkwXG5tYXBbMTg1M10gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU5XSA9IDI5MVxubWFwWzE4NjNdID0gMjkxXG5tYXBbMTg2Nl0gPSAyOTFcbm1hcFsxODY3XSA9IDI5MVxubWFwWzE4NjldID0gMjkzXG5tYXBbMTg3Ml0gPSAyOTNcbm1hcFsxODc2XSA9IDI5M1xubWFwWzE4NzZdID0gMjkzXG5tYXBbMTg3N10gPSAyOTNcbm1hcFsxODgwXSA9IDI5M1xuIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NTEyO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9NzY4O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJub2JvcmRlclwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwidmVydGljYWxcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiZGlhbG9nL0xvYWRpbmdEaWFsb2cuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49dHJ1ZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLkxvYWRpbmdEaWFsb2dVSSB7XG4gICAgcHJpdmF0ZSBwcm9ncmVzcyA9IDBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYXV0b0Rlc3Ryb3lBdENsb3NlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5wb3MoMCwgKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLSAyMDApLzIpXG4gICAgfVxuXG4gICAgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3NWYWx1ZSgwKVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzc1ZhbHVlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzXG4gICAgICAgIHRoaXMubG9hZGluZ1Byb2dyZXNzQmFyLnZhbHVlID0gcHJvZ3Jlc3NcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGlwKHRpcDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGlwTGFiZWwudGV4dCA9IHRpcFxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XHJcbmltcG9ydCBTY3JlZW4xQmFja0dyb3VuZCBmcm9tIFwiLi9TY3JlZW4xQmFja0dyb3VuZFwiO1xyXG5pbXBvcnQgRm9vdGJhbGwgZnJvbSBcIi4vRm9vdGJhbGxcIjtcclxuaW1wb3J0IEJhc2tldGJhbGwgZnJvbSBcIi4vYmFza2V0YmFsbFwiO1xyXG5pbXBvcnQgcnVubmluZyBmcm9tIFwiLi9ydW5uaW5nXCI7XHJcbmltcG9ydCBzd2ltbWluZyBmcm9tIFwiLi9zd2ltbWluZ1wiO1xyXG5pbXBvcnQgcGFnZTNydW4gZnJvbSBcIi4vcGFnZTNfcnVubWFuXCI7XHJcbmltcG9ydCBwYWdlMWUycyBmcm9tIFwiLi9wYWdlMSYyXCI7XHJcbmltcG9ydCBwYWdlMmUzcyBmcm9tIFwiLi9wYWdlMiYzXCI7XHJcbmltcG9ydCBwYWdlM2U0cyBmcm9tIFwiLi9wYWdlMyY0XCI7XHJcbmltcG9ydCBwYWdlNGU1cyBmcm9tIFwiLi9wYWdlNCY1XCI7XHJcbmltcG9ydCB7IGdldEZvb3RiYWxsWCB9IGZyb20gXCIuL0Zvb3RiYWxsUGF0aFwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRpYWxvZyB9IGZyb20gXCIuL1F1ZXN0aW9uRGlhbG9nXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uRGF0YSwgUXVlc3Rpb25JdGVtLCBRdWVzdGlvblNob3dZIH0gZnJvbSBcIi4vUXVlc3Rpb25EYXRhXCI7XHJcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gXCIuL0xvYWRpbmdEaWFsb2dcIjtcclxuaW1wb3J0IFNoYWtlRGlhbG9nIGZyb20gXCIuL1NoYWtlRGlhbG9nXCI7XHJcbmltcG9ydCBTY3JvbGxEaWFsb2csIHsgVGlwVHlwZSB9IGZyb20gXCIuL1Njcm9sbERpYWxvZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGZvb3RiYWxsOiBGb290YmFsbFxyXG5cdHByaXZhdGUgYmFza2V0YmFsbDogQmFza2V0YmFsbFxyXG5cdHByaXZhdGUgcnVubmluZzogcnVubmluZ1xyXG5cdHByaXZhdGUgc3dpbW1pbmc6IHN3aW1taW5nXHJcblx0cHJpdmF0ZSBwYWdlM3J1bjogcGFnZTNydW5cclxuXHRwcml2YXRlIHBhZ2UxZTJzOiBwYWdlMWUyc1xyXG5cdHByaXZhdGUgcGFnZTJlM3M6IHBhZ2UyZTNzXHJcblx0cHJpdmF0ZSBwYWdlM2U0czogcGFnZTNlNHNcclxuXHRwcml2YXRlIHBhZ2U0ZTVzOiBwYWdlNGU1c1xyXG5cdHByaXZhdGUgeSA9IDA7XHJcblxyXG5cclxuXHRwcml2YXRlIHNjcmVlbjFCYWNrR3JvdW5kOiBTY3JlZW4xQmFja0dyb3VuZFxyXG5cdHByaXZhdGUgZHJhZ1JlZ2lvbjogTGF5YS5SZWN0YW5nbGVcclxuXHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDI6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50MzogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHNoYWtlQ291bnQ0OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaSA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmkyID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaTMgPSBmYWxzZTtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pNCA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmk1ID0gZmFsc2U7XHJcblxyXG5cclxuXHRwcml2YXRlIGNvbnNvbGU6IExheWEuVGV4dDtcclxuXHJcblxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uSW5kZXhMaXN0ID0gbmV3IEFycmF5PG51bWJlcj4oKVx0Ly8g5bey57uP5pi+56S655qE6Zeu6aKYaW5kZXjliJfooahcclxuXHRwcml2YXRlIHNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nRGlhbG9nOiBMb2FkaW5nRGlhbG9nXHQvLyDmmL7npLrliqDovb3ov5vluqbmnaFcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nOiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nMjogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzM6IFNoYWtlRGlhbG9nXHRcdC8vIOaYvuekuuaRh+S4gOaRh+aPkOekulxyXG5cdHByaXZhdGUgc2hha2VEaWFsb2c0OiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nNTogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBiZ21Tb3VuZENoYW5uZWw6IExheWEuU291bmRDaGFubmVsXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8vIHdhcm5pbmc6IOesrOS4ieS4quWPguaVsOS4jeimgeS9v+eUqFdlYkdM77yM5b2T6IOM5pmv5aSq6ZW/55qE5pe25YCZ5ZyoaVBob25l5LiK5Lya5pyJ6Z2e5bi45Lil6YeN55qE6ZSv6b2/XHJcblx0XHRMYXlhLmluaXQoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5zdGF0ZUhlaWdodCwgTGF5YVtcIlwiXSk7XHJcblxyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gQ29uc3RhbnRzLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IENvbnN0YW50cy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHJcblxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0VUlDb25maWcucG9wdXBCZ0NvbG9yID0gXCIjMDAwMDAwXCJcclxuXHRcdFVJQ29uZmlnLnBvcHVwQmdBbHBoYSA9IDAuOFxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cclxuXHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIndoaXRlXCJcclxuXHJcblxyXG5cclxuXHRcdHRoaXMubG9hZFByb2dlc3NBc3NldHMoKVxyXG5cclxuXHRcdC8vIOmcgOimgeaYvuekuuiwg+ivleS/oeaBr+WPr+S7peaJk+W8gOi/memHjFxyXG5cdFx0dGhpcy5zaG93Q29uc29sZVRleHQoZmFsc2UpO1xyXG5cclxuXHJcblxyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG5cclxuXHRsb2FkUHJvZ2Vzc0Fzc2V0cygpOiB2b2lkIHtcclxuXHRcdExheWEubG9hZGVyLmxvYWQoW1wicmVzL2F0bGFzL2NvbXAuYXRsYXNcIl0sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblByb2dyZXNzQXNzZXRzTG9hZGVkKSlcclxuXHR9XHJcblxyXG5cdGxvYWRPdGhlckFzc2V0cygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGFzc2V0czogQXJyYXk8YW55PiA9IFtdXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDUsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3Nwb3J0cy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQzLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kQmdtLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8g6aKE5Yqg6L296LWE5rqQXHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKGFzc2V0cywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGVkKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGluZywgbnVsbCwgZmFsc2UpKVxyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuXHJcblx0Ly8g5b+F6ZyA5YWI5Yqg6L296L+b5bqm5p2h6LWE5rqQ5omN6IO95pi+56S66L+b5bqm5p2hXHJcblx0b25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8vIOaYvuekuui/m+W6puadoVxyXG5cclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZyA9IG5ldyBMb2FkaW5nRGlhbG9nKClcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5wb3B1cCgpXHJcblx0XHR0aGlzLmxvYWRPdGhlckFzc2V0cygpXHJcblx0fVxyXG5cclxuXHRvbkFzc2V0c0xvYWRpbmcocHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY6IFwiICsgcHJvZ3Jlc3MpO1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLmNoYW5nZVByb2dyZXNzVmFsdWUocHJvZ3Jlc3MpXHJcblx0fVxyXG5cclxuXHRvbkFzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5jbG9zZSgpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn6LWE5rqQ5Yqg6L295a6M5oiQ44CCJztcclxuXHJcblx0XHR0aGlzLnNob3dUaXBEaWFsb2coXCJzY3JvbGxcIilcclxuXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kID0gbmV3IFNjcmVlbjFCYWNrR3JvdW5kKClcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zY3JlZW4xQmFja0dyb3VuZClcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5EUkFHX01PVkUsIHRoaXMsIHRoaXMub25CYWNrZ3JvdW5kTW92ZSlcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5EUkFHX1NUQVJULCB0aGlzLCB0aGlzLm9uQmFja2dyb3VuZFN0YXJ0TW92ZSlcclxuXHJcblx0XHR0aGlzLmZvb3RiYWxsID0gbmV3IEZvb3RiYWxsKClcclxuXHRcdHRoaXMuZm9vdGJhbGwucG9zKDMyNywgMjMzKVx0Ly8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuZm9vdGJhbGwpXHJcblx0XHR0aGlzLmJhc2tldGJhbGwgPSBuZXcgQmFza2V0YmFsbCgpXHJcblx0XHR0aGlzLmJhc2tldGJhbGwucG9zKDMwMCwgNTAwKVx0Ly8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuYmFza2V0YmFsbClcclxuXHRcdHRoaXMucnVubmluZyA9IG5ldyBydW5uaW5nKClcclxuXHRcdHRoaXMucnVubmluZy5wb3MoMjUwLCAyMDApXHQvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5ydW5uaW5nKVxyXG5cdFx0dGhpcy5zd2ltbWluZyA9IG5ldyBzd2ltbWluZygpXHJcblx0XHR0aGlzLnN3aW1taW5nLnBvcygyNTYsIDUwMClcdC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnN3aW1taW5nKVxyXG5cdFx0dGhpcy5wYWdlM3J1biA9IG5ldyBwYWdlM3J1bigpXHJcblx0XHR0aGlzLnBhZ2UzcnVuLnBvcygzMDAsIDg1MCkgLy8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTNydW4pXHJcblx0XHR0aGlzLnBhZ2UxZTJzID0gbmV3IHBhZ2UxZTJzKClcclxuXHRcdHRoaXMucGFnZTFlMnMucG9zKDI1MCwgNTAwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlMWUycylcclxuXHRcdHRoaXMucGFnZTJlM3MgPSBuZXcgcGFnZTJlM3MoKVxyXG5cdFx0dGhpcy5wYWdlMmUzcy5wb3MoMjUwLCA1MDApIC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2UyZTNzKVxyXG5cdFx0dGhpcy5wYWdlM2U0cyA9IG5ldyBwYWdlM2U0cygpXHJcblx0XHR0aGlzLnBhZ2UzZTRzLnBvcygyNzAsIDcwMCkgLy8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTNlNHMpXHJcblx0XHR0aGlzLnBhZ2U0ZTVzID0gbmV3IHBhZ2U0ZTVzKClcclxuXHRcdHRoaXMucGFnZTRlNXMucG9zKDI1MCwgNzAwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlNGU1cylcclxuXHRcdGNvbnNvbGUubG9nKFwib25Bc3NldHNMb2FkZWRcIiwgTGF5YS5zdGFnZS5oZWlnaHQsIExheWEuQnJvd3Nlci5oZWlnaHQsIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQpXHJcblxyXG5cdFx0Ly8g6K6h566X6IOM5pmv5Y+v5ouW5Yqo5Yy65Z+fXHJcblx0XHRjb25zdCBtb2FibGVIZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdHRoaXMuZHJhZ1JlZ2lvbiA9IG5ldyBMYXlhLlJlY3RhbmdsZSgwLCAtbW9hYmxlSGVpZ2h0LCAwLCBtb2FibGVIZWlnaHQpXHJcblxyXG5cdFx0Ly8gTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsIHRoaXMsIHRoaXMub25Nb3VzZU1vdmUpXHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vblN0YXJ0RHJhZylcclxuXHJcblx0XHQvLyDmkq3mlL7og4zmma/pn7PkuZBcclxuXHRcdC8vIHRoaXMuYmdtU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKENvbnN0YW50cy5zb3VuZEJnbSwgMClcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXJyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycik7XHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cudXBkYXRlVGlwKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycilcclxuXHR9XHJcblxyXG5cdG9uTW91c2VNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8g5aeL57uI5L+d5oyB5Li76KeS5ZKM6byg5qCH5L2N572u5LiA6Ie0XHJcblx0XHQvLyB0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uTW91c2VNb3ZlXCIsIExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBtYXBbJHt0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnl9XSA9ICR7TGF5YS5zdGFnZS5tb3VzZVh9YClcclxuXHRcdHRoaXMuZm9vdGJhbGwucG9zKExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHR9XHJcblxyXG5cdG9uU3RhcnREcmFnKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblN0YXJ0RHJhZ1wiLCBMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHRpZiAodGhpcy5zaG93aW5nRGlhbG9nKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RhcnREcmFnKHRoaXMuZHJhZ1JlZ2lvbiwgZmFsc2UsIDApXHJcblx0fVxyXG5cclxuXHRvbkJhY2tncm91bmRTdGFydE1vdmUoKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPOiDov5nph4zlkIzmoLfopoHlgZrkuIDkupvog73lkKbmi5bliqjnmoTliKTmlq3vvIxvbkJhY2tncm91bmRNb3Zl6YOo5YiG6YC76L6R5Lmf6YCC5bqU5LqO5q2k5pa55rOVXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdG9uQmFja2dyb3VuZE1vdmUoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uQmFja2dyb3VuZE1vdmVcIiwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC54LCB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnksIHRoaXMuZm9vdGJhbGwueCwgdGhpcy5mb290YmFsbC55KVxyXG5cclxuXHRcdC8vIOaYvuekuumXrumimFxyXG5cdFx0Y29uc3QgbmVlZFNob3dRdWVzdGlvbiA9IHRoaXMuc2hvd1F1ZXN0aW9uRGlhbG9nSWZOZWVkKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSlcclxuXHRcdGlmIChuZWVkU2hvd1F1ZXN0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBUT0RPOiDmoLnmja7lrp7pmYXmg4XlhrXmmL7npLrngrnlh7vmj5DnpLpcclxuXHRcdC8vIHRoaXMuc2hvd1RpcERpYWxvZyhcImNsaWNrX3doaXRlXCIpXHJcblx0XHQvLyB0aGlzLnNob3dUaXBEaWFsb2coXCJjbGlja19ibGFja1wiKVxyXG5cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMzAwKSB7XHQvLyDkuI3nu5nmi5bliqjvvIxcYuaRh+S4gOaRh+aYvuekuuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaSkge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4flsITpl6jliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4flsITpl6jliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjMyMCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTIpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HMuWKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzLliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nMigpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTk0MDApIHtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkzKSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/hzPliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4cz5Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzMoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjkzMCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTQpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HNOWKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzTliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nNCgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1ODMwKSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pNSkge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4c15Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+HNeWKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2c1KClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgwMCkgeyAvLyDpmpDol4/otrPnkINcclxuXHRcdFx0dGhpcy5mb290YmFsbC5oaWRlKClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZm9vdGJhbGwuc2hvdygpXHJcblx0XHRcdC8vIOenu+WKqOi2s+eQg+S9jee9rlxyXG5cdFx0XHQvLyBjb25zdCB5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMlxyXG5cdFx0XHRsZXQgeTogbnVtYmVyID0gMDtcclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDEwMzIpIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDEwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgODUwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxMzA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDczMCkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA1ODApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDE4MDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgNDM1KSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA+IDEwMzIpIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB4ID0gZ2V0Rm9vdGJhbGxYKHkpXHJcblx0XHRcdGlmICh4ID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnkgPSB5XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wb3MoeCwgeSlcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDliKTmlq3otrPnkIPmmK/lkKbpnIDopoHml4vovaxcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNTg1KSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5zdG9wUm90YXRlKClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnBsYXlSb3RhdGUoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQvLyDliKTmlq3mmK/lkKbpnIDopoHmkq3mlL5jdXAgYW5pXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImN1cFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjdXBcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJjdXBcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvuWPo+WTqOWKqOeUu1xyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTIxMjUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0yMzI1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInRleHQyMDAyXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInRleHQyMDAyXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwidGV4dDIwMDJcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG90XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2hvdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG90XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2hvdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTczMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTI2NDUpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndpblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIndpblwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyO1xyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMjYzMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ2MDApIHtcclxuXHRcdFx0dGhpcy5wYWdlMWUycy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAyNjMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdGlmICh6ICUgMTAgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMueSA9IHo7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnNvbGUubG9nKCd5OiAnICsgdGhpcy55KVxyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmdvUGF0aCh6IC0gMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueSA9IDA7XHJcblx0XHRcdHRoaXMucGFnZTFlMnMuZ29QYXRoKDkwKVxyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdC8vcGFnZTJcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ1MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01NDMwKSB7XHJcblx0XHRcdHRoaXMucnVubmluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA0NTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdGlmICh6ICUgMTAgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMueSA9IHo7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnNvbGUubG9nKCd5OiAnICsgdGhpcy55KVxyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuZ29QYXRoKHogLSAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0dGhpcy5ydW5uaW5nLmdvUGF0aCg4MSlcclxuXHRcdFx0dGhpcy5ydW5uaW5nLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ1MjIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NjIxKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJkdW1iYmVsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImR1bWJiZWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImR1bWJiZWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZHVtYmJlbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ5NTcgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01MDEwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlcXVpcG1lbnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlcXVpcG1lbnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZXF1aXBtZW50XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZXF1aXBtZW50XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTUxOTAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01MjY4KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjbG9ja1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImNsb2NrXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY2xvY2tcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNTQ1NCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTU2MDMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInRleHQyMDA0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwidGV4dDIwMDRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ0ZXh0MjAwNFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01NzI1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNTg2Nikge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZWxlY3RyaWNtYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlbGVjdHJpY21hblwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlbGVjdHJpY21hblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImVsZWN0cmljbWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTYzMzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04MTAwKSB7XHJcblx0XHRcdHRoaXMucGFnZTJlM3Muc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gNjMzMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHRpZiAoeiAlIDEwID09IDApIHtcclxuXHRcdFx0XHR0aGlzLnkgPSB6O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zb2xlLmxvZygneTogJyArIHRoaXMueSlcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0XHR0aGlzLnBhZ2UyZTNzLmdvUGF0aCg5MClcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9wYWdlM1xyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODIwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg5NTApIHtcclxuXHRcdFx0dGhpcy5wYWdlM3J1bi5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA4MjAwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdGlmICh6ICUgMTAgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMueSA9IHo7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnNvbGUubG9nKCd5OiAnICsgdGhpcy55KVxyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmdvUGF0aCh6IC0gMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgzNDggJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NDE1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJtZWRhbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIm1lZGFsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIm1lZGFsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibWVkYWxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODYyNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg3MjMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic3RhZ2VcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic3RhZ2VcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzdGFnZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC05MTMxICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtOTE5MSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDhcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwOFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA4XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTk0MjAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTE2MCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDk0MjApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0aWYgKHogJSAxMCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy55ID0gejtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3k6ICcgKyB0aGlzLnkpXHJcblx0XHRcdHRoaXMucGFnZTNlNHMuZ29QYXRoKHogLSAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0dGhpcy5wYWdlM2U0cy5nb1BhdGgoOTApXHJcblx0XHRcdHRoaXMucGFnZTNlNHMuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vcGFnZTRcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMTYwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTExNjApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhlYXJ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiaGVhcnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGVhcnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJoZWFydFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTEwMzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMjg4MCkge1xyXG5cdFx0XHR0aGlzLnN3aW1taW5nLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDExMDMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdGlmICh6ICUgMTAgPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMueSA9IHo7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnNvbGUubG9nKCd5OiAnICsgdGhpcy55KVxyXG5cdFx0XHR0aGlzLnN3aW1taW5nLmdvUGF0aCh6IC0gMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMueSA9IDA7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTExNjIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTIzMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMTJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAxMlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAxMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDEyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMzc2ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTE0NDkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJib2FyZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTc0MyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExODA3KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjA2NiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyMTI2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjQwNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyNTE4KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YXRlckxlZnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3YXRlckxlZnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2F0ZXJMZWZ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2F0ZXJMZWZ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTEyOTYwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ4MjApIHtcclxuXHRcdFx0dGhpcy5wYWdlNGU1cy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAxMjgzMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHRpZiAoeiAlIDEwID09IDApIHtcclxuXHRcdFx0XHR0aGlzLnkgPSB6O1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zb2xlLmxvZygneTogJyArIHRoaXMueSlcclxuXHRcdFx0dGhpcy5wYWdlNGU1cy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnkgPSAwO1xyXG5cdFx0XHR0aGlzLnBhZ2U0ZTVzLmdvUGF0aCg5MClcclxuXHRcdFx0dGhpcy5wYWdlNGU1cy5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9wYWdlNVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTQ5MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xNTUzMCkge1xyXG5cdFx0XHR0aGlzLmJhc2tldGJhbGwuc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gMTQ5MzApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0aWYgKHogJSAxMCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy55ID0gejtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3k6ICcgKyB0aGlzLnkpXHJcblx0XHRcdHRoaXMuYmFza2V0YmFsbC5nb1BhdGgoeiAtIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy55ID0gMDtcclxuXHRcdFx0dGhpcy5iYXNrZXRiYWxsLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0NDcwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ1NjIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJiYWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJiYWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0NDcwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ1NjIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNjb3JlYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzY29yZWJvYXJkXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNjb3JlYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzY29yZWJvYXJkXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1MDgyICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTUxNDkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNob2VzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2hvZXNcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvZXNcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzaG9lc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTU0MTUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xNTQ5Nikge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGF0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiaGF0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhhdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImhhdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkRldmljZVNoYWtlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZy5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudCArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50ID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG90XCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pID0gdHJ1ZVxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuaSreaUvuWwhOmXqOWKqOeUu1wiO1xyXG5cclxuXHRcdFx0Ly8gVE9ETzog5pKt5pS+5a6e6ZmF6ZyA6KaB55qE5aOw6Z+z77yM5bm25Zyo5YW25LuW6ZyA6KaB55qE5Zyw5pa56LCD55So5pKt5pS+5aOw6Z+zXHJcblx0XHRcdHRoaXMucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDApXHJcblx0XHR9XHJcblx0fVxyXG5cdG9uRGV2aWNlU2hha2UyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cyKSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cyLmNsb3NlKClcclxuXHRcdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzIgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQyKytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQyICsgXCLmrKFcXG5cIjtcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQyID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50MiA9IDBcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLlgZzmraLmjqXmlLborr7lpIfmkYfliqhcIjtcclxuXHRcdFx0Ly8g5pKt5pS+5bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pMikge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImxpdXhpYW5nXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pMiA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQxKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlMygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nMykge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMy5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2czID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50MysrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50MyArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50MyA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDMgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTMpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjcm93ZFwiKVxyXG5cclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaTMgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMilcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzQpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzQuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nNCA9IG51bGxcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hha2VDb3VudDQrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudDQgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudDQgPj0gMykge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKVxyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQ0ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk0KSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2luTWFuXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pNCA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlNSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nNSkge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nNS5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2c1ID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50NSsrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50NSArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50NSA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDUgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTUpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJiYWxsTWFuXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pNSA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQ0KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25RdWVzdGlvbkRpYWxvZ0Nsb3NlKGluZGV4OiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblF1ZXN0aW9uRGlhbG9nQ2xvc2VcIiwgdHlwZSwgaW5kZXgpXHJcblx0XHRjb25zdCByaWdodCA9ICh0eXBlID09PSBcInRydWVcIikgLy8gVE9ETzog6K6h5YiGXHJcblxyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHR9XHJcblxyXG5cdC8vIOWIpOaWreaYr+WQpumcgOimgeaYvuekuumXrumimFxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uRGlhbG9nSWZOZWVkKHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodFxyXG5cdFx0Y29uc3QgaGFzU2hvd0xlbmd0aCA9IHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0Lmxlbmd0aFxyXG5cdFx0aWYgKGhhc1Nob3dMZW5ndGggPj0gMTApIHtcclxuXHRcdFx0Ly8gaWYgKHkpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRpZiAoeSA+IG9mZnNldCAtIFF1ZXN0aW9uU2hvd1lbaGFzU2hvd0xlbmd0aF0pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRjb25zdCBpc09kZCA9ICEoaGFzU2hvd0xlbmd0aCAlIDIpXHJcblx0XHRpZiAoaXNPZGQpIHsgLy8g6ZqP5py6XHJcblx0XHRcdGNvbnN0IHJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpXHJcblx0XHRcdHRoaXMuc2hvd1F1ZXN0aW9uKHJhbmRvbSlcclxuXHRcdH0gZWxzZSB7XHQvLyDlj5bliY015L2NXHJcblx0XHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihoYXNTaG93TGVuZ3RoIC8gMilcclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24oaW5kZXgpXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBnZXRSYW5kb21RdWVzdGlvbkluZGV4KCk6IG51bWJlciB7XHJcblx0XHRjb25zdCBtYXggPSBRdWVzdGlvbkRhdGEubGVuZ3RoIC0gNVxyXG5cdFx0Y29uc3QgcmFuZG9tID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIG1heCkpICsgNVxyXG5cdFx0aWYgKHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0LmluZGV4T2YocmFuZG9tKSA9PSAtMSkge1xyXG5cdFx0XHRyZXR1cm4gcmFuZG9tXHJcblx0XHR9IGVsc2UgeyAvLyDlt7Lnu4/mmL7npLrov4fph43mlrDojrflj5ZcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRpZiAoaW5kZXggPj0gUXVlc3Rpb25EYXRhLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0LnB1c2goaW5kZXgpXHJcblx0XHRjb25zdCBxdWVzdGlvbkRhdGEgPSBRdWVzdGlvbkRhdGFbaW5kZXhdXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0Y29uc3QgcXVlc3Rpb25EaWFsb2cgPSBuZXcgUXVlc3Rpb25EaWFsb2cocXVlc3Rpb25EYXRhKVxyXG5cdFx0cXVlc3Rpb25EaWFsb2cucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHRxdWVzdGlvbkRpYWxvZy5jbG9zZUhhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25RdWVzdGlvbkRpYWxvZ0Nsb3NlLCBbaW5kZXhdKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93U2hha2VEaWFsb2coKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZyA9IG5ldyBTaGFrZURpYWxvZygpXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZSlcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH1cclxuXHRwcml2YXRlIHNob3dTaGFrZURpYWxvZzIoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzIgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzIucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlMilcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH0gcHJpdmF0ZSBzaG93U2hha2VEaWFsb2czKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2czID0gbmV3IFNoYWtlRGlhbG9nKClcclxuXHRcdHRoaXMuc2hha2VEaWFsb2czLnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZTMpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9IHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nNCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nNCA9IG5ldyBTaGFrZURpYWxvZygpXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nNC5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2U0KVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fSBwcml2YXRlIHNob3dTaGFrZURpYWxvZzUoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzUgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzUucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlNSlcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93VGlwRGlhbG9nKHRpcFR5cGU6IFRpcFR5cGUpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdGNvbnN0IHNjcm9sbERpYWxvZyA9IG5ldyBTY3JvbGxEaWFsb2codGlwVHlwZSlcclxuXHJcblx0XHRzY3JvbGxEaWFsb2cucG9wdXAodHJ1ZSlcclxuXHRcdHNjcm9sbERpYWxvZy5jbG9zZUhhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25UaXBEaWFsb2dDbG9zZSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25UaXBEaWFsb2dDbG9zZSgpIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBsYXlTb3VuZCh1cmw6IHN0cmluZykge1xyXG5cdFx0dGhpcy5iZ21Tb3VuZENoYW5uZWwucGF1c2UoKVxyXG5cdFx0TGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgMSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uU291bmRDb21wZXRlKSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Tb3VuZENvbXBldGUoKSB7XHJcblx0XHR0aGlzLmJnbVNvdW5kQ2hhbm5lbC5yZXN1bWUoKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93Q29uc29sZVRleHQodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5jb25zb2xlID0gbmV3IExheWEuVGV4dCgpO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnNvbGUpO1xyXG5cdFx0dGhpcy5jb25zb2xlLnpPcmRlciA9IDEwMDAxXHJcblx0XHR0aGlzLmNvbnNvbGUueSA9IDEwO1xyXG5cdFx0dGhpcy5jb25zb2xlLndpZHRoID0gTGF5YS5zdGFnZS53aWR0aDtcclxuXHRcdHRoaXMuY29uc29sZS5oZWlnaHQgPSAyMDA7XHJcblx0XHR0aGlzLmNvbnNvbGUuY29sb3IgPSBcIiNGRkZGRkZcIjtcclxuXHRcdHRoaXMuY29uc29sZS5mb250U2l6ZSA9IDIwO1xyXG5cdFx0dGhpcy5jb25zb2xlLmxlYWRpbmcgPSAxMDtcclxuXHRcdHRoaXMuY29uc29sZS5iZ0NvbG9yID0gXCIjMDAwMDAwXCJcclxuXHRcdHRoaXMuY29uc29sZS52aXNpYmxlID0gdmlzaWJsZVxyXG5cclxuXHR9XHJcblxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgUXVlc3Rpb25JdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGE6IHN0cmluZyxcbiAgICBiOiBzdHJpbmcsXG4gICAgYzogc3RyaW5nLFxuICAgIGQ6IHN0cmluZyxcbiAgICBhbnN3ZXI6IFwiYVwiIHwgXCJiXCIgfCBcImNcIiB8IFwiZFwiLFxuICAgIGlkOiBudW1iZXIgIC8vIOS7hVxi5L6b5Y+C55yL5pWw5o2u5pe25Y+C6ICD77yM5Luj56CB5Lit5LiN5L2/55SoXG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdGlvblNob3dZID0gW1xuICAgIDEzNjMsXG4gICAgMzQwNyxcbiAgICA1ODI3LFxuICAgIDY2MjgsXG4gICAgOTEyMCxcbiAgICA5OTgwLFxuICAgIDEyMTQ0LFxuICAgIDEzMTc4LFxuICAgIDE1NzYwLFxuICAgIDE2Njk3XG5dXG5leHBvcnQgIGNvbnN0IFF1ZXN0aW9uRGF0YTogQXJyYXk8UXVlc3Rpb25JdGVtPiA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIuWbvei2s+i/m+S4lueVjOadr+eahOS4u+W4heaYr+WTquS9jT9cIixcbiAgICAgICAgYTogXCLph4znmq5cIixcbiAgICAgICAgYjogXCLmnLHlub/msqpcIixcbiAgICAgICAgYzogXCLpq5jmtKrms6JcIixcbiAgICAgICAgZDogXCLnsbPljaJcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIixcbiAgICAgICAgaWQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAwNuW5tOWImOe/lOegtOS4lueVjOe6quW9leeahOaIkOe7qeaYr+WkmuWwkT9cIixcbiAgICAgICAgYTogXCIxMuenkjkxXCIsXG4gICAgICAgIGI6IFwiMTLnp5I4OFwiLFxuICAgICAgICBjOiBcIjEy56eSODdcIixcbiAgICAgICAgZDogXCIxMuenkjg2XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCIsXG4gICAgICAgIGlkOiAyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDjlubTljJfkuqzlpaXov5DkvJrosIHngrnnh4PkuobkuLvngavngqw/XCIsXG4gICAgICAgIGE6IFwi6K645rW35bOwXCIsXG4gICAgICAgIGI6IFwi6YKT5Lqa6JCNXCIsXG4gICAgICAgIGM6IFwi5p2O5a6BXCIsXG4gICAgICAgIGQ6IFwi54aK5YCqXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCIsXG4gICAgICAgIGlkOiAzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMTLlubTkvKbmlablpaXov5DkvJrnlLflrZA0MDDnlLHms7PlhqDlhpvmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLojIPlvrflh6/kvIpcIixcbiAgICAgICAgYjogXCLpg53ov5BcIixcbiAgICAgICAgYzogXCLmnLTms7DmoZNcIixcbiAgICAgICAgZDogXCLlrZnmnahcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIixcbiAgICAgICAgaWQ6IDVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAxNuW5tOaWsOa1qjN4M+evrueQg+m7hOmHkeiBlOi1m+aAu+WGoOWGm+mYn+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuWMl+Wkp+mYn1wiLFxuICAgICAgICBiOiBcIuWwj+m+mem+memYn1wiLFxuICAgICAgICBjOiBcIumcuOawlOaImOmYn1wiLFxuICAgICAgICBkOiBcIuWNjuS+qOWkp+WtpumYn1wiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiLFxuICAgICAgICBpZDogNlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCLljJfkuqzlpaXov5DkvJrkuK3lm73ku6Pooajlm6LnmoTml5fmiYvmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLlp5rmmI5cIixcbiAgICAgICAgYjogXCLliJjnv5RcIixcbiAgICAgICAgYzogXCLnjovlirHli6RcIixcbiAgICAgICAgZDogXCLmnpfkuLlcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIixcbiAgICAgICAgaWQ6IDRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS4queZu+S4iuasp+WGoOi1m+WcuueahOS4reWbveeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIuWtmeelpVwiLFxuICAgICAgICBiOiBcIuiRo+aWueWNk1wiLFxuICAgICAgICBjOiBcIuadjumTgVwiLFxuICAgICAgICBkOiBcIumDkeaZulwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICB0aXRsZTogXCLpgrXkvbPkuIA55bm05b635Zu955Sf5rav5q2j5byP5q+U6LWb6YeM5oC75YWx5omT55CD5aSa5bCR55CD77yfXCIsXG4gICAgICAgIGE6IFwiMThcIixcbiAgICAgICAgYjogXCIxOVwiLFxuICAgICAgICBjOiBcIjI5XCIsXG4gICAgICAgIGQ6IFwiMzBcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOSxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5Liq5Zyo5qyn5rSy6IGU6LWb5Lit6I635b6X6YeR6Z2055qE55CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi6YOR5pm6XCIsXG4gICAgICAgIGI6IFwi5p2o5pmoXCIsXG4gICAgICAgIGM6IFwi6LCi5pmWXCIsXG4gICAgICAgIGQ6IFwi6JGj5pa55Y2TXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkvY3lnKjnlZnmtIvmnJ/pl7Tmi4Xku7vnkIPpmJ/pmJ/plb/nmoTkuK3lm73nsY3nkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLojIPlv5fmr4VcIixcbiAgICAgICAgYjogXCLpg5HmmbpcIixcbiAgICAgICAgYzogXCLlrZnnu6fmtbdcIixcbiAgICAgICAgZDogXCLmnY7pk4FcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTEsXG4gICAgICAgIHRpdGxlOiBcIuWnmuaYjuWTquS4gOW5tOmAgOW9ue+8n1wiLFxuICAgICAgICBhOiBcIjIwMTBcIixcbiAgICAgICAgYjogXCIyMDExXCIsXG4gICAgICAgIGM6IFwiMjAxMlwiLFxuICAgICAgICBkOiBcIjIwMTNcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIHRpdGxlOiBcIjIwMTjlubTkuprov5DkvJrkuK3nr67nkIPpobnnm67kuK3lm73pmJ/mlLbojrfkuoblh6Dmnprph5HniYzvvJ9cIixcbiAgICAgICAgYTogXCIxXCIsXG4gICAgICAgIGI6IFwiMlwiLFxuICAgICAgICBjOiBcIjNcIixcbiAgICAgICAgZDogXCI0XCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICB0aXRsZTogXCJDQkHogZTotZvljoblj7LkuIrnrKzkuIDkuKrlvpfliIbnoLTkuIfnmoTnkIPlkZjvvJ9cIixcbiAgICAgICAgYTogXCLmmJPlu7rogZRcIixcbiAgICAgICAgYjogXCLmnLHoirPpm6hcIixcbiAgICAgICAgYzogXCLliJjngpxcIixcbiAgICAgICAgZDogXCLnjovmsrvpg4VcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTQsXG4gICAgICAgIHRpdGxlOiBcIuWTquaUr+eQg+mYn+WcqDAyLTAz6LWb5a2jQ0JB5a2j5ZCO6LWb5Lit5Yib6YCg5LqG6buROOWlh+i/ue+8n1wiLFxuICAgICAgICBhOiBcIui+veWugVwiLFxuICAgICAgICBiOiBcIuWbm+W3nVwiLFxuICAgICAgICBjOiBcIuWMl+S6rFwiLFxuICAgICAgICBkOiBcIuWxseS4nFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNSxcbiAgICAgICAgdGl0bGU6IFwi5Lit5Zu96Laz55CD6aG257qn6IGU6LWb55Sx55SyQeWPmOabtOS4uuS4rei2heeahOaYr+WcqOWTquS4gOW5tO+8n1wiLFxuICAgICAgICBhOiBcIjAyXCIsXG4gICAgICAgIGI6IFwiMDNcIixcbiAgICAgICAgYzogXCIwNFwiLFxuICAgICAgICBkOiBcIjA1XCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE2LFxuICAgICAgICB0aXRsZTogXCLpmankupvlnKjkuK3otoXliJvpgKDlh6/ms73mlq/lirPmu5XnpZ7or53nmoTmmK/ku6XkuIvlk6rmlK/nkIPpmJ/vvJ9cIixcbiAgICAgICAgYTogXCLovr3lroFcIixcbiAgICAgICAgYjogXCLljJfkuqxcIixcbiAgICAgICAgYzogXCLkuIrmtbdcIixcbiAgICAgICAgZDogXCLlub/lt55cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTcsXG4gICAgICAgIHRpdGxlOiBcIuaBkuWkp+esrOS4gOasoeiOt+W+l+S6muWGoOiBlOi1m+WGoOWGm+aYr+mCo+S4gOW5tO+8n1wiLFxuICAgICAgICBhOiBcIjIwMTLlubRcIixcbiAgICAgICAgYjogXCIyMDEz5bm0XCIsXG4gICAgICAgIGM6IFwiMjAxNOW5tFwiLFxuICAgICAgICBkOiBcIjIwMTXlubRcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTgsXG4gICAgICAgIHRpdGxlOiBcIjIwMDLlubTkuJbnlYzmna/vvIzkuK3lm73pmJ/pmJ/lkIznu4Tlr7nmiYvpmaTlt7Topb/jgIHlk6Xmlq/ovr7pu47liqDov5jmnInpgqPkuKrlm73lrrbvvJ9cIixcbiAgICAgICAgYTogXCLluIzohYpcIixcbiAgICAgICAgYjogXCLlvrflm71cIixcbiAgICAgICAgYzogXCLml6XmnKxcIixcbiAgICAgICAgZDogXCLlnJ/ogLPlhbZcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTksXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS9jeWbveWGheeQg+WRmOWcqOS6muWGoOS4iua8lOWkp+Wbm+WWnO+8n1wiLFxuICAgICAgICBhOiBcIuatpuejilwiLFxuICAgICAgICBiOiBcIumDnea1t+S4nFwiLFxuICAgICAgICBjOiBcIumDnOael1wiLFxuICAgICAgICBkOiBcIumCteS9s+S4gFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyMCxcbiAgICAgICAgdGl0bGU6IFwiMjAxNOW5tOadjuWonOesrOWHoOasoeiOt+W+l+Wkp+a7oei0r+Wls+WNleWGoOWGm++8n1wiLFxuICAgICAgICBhOiBcIjFcIixcbiAgICAgICAgYjogXCIyXCIsXG4gICAgICAgIGM6IFwiM1wiLFxuICAgICAgICBkOiBcIjRcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjEsXG4gICAgICAgIHRpdGxlOiBcIuacrOi1m+Wto+atpuejiuacieacm+aWqeiOt+mHkemdtO+8jOmCo+S5iOS4iuS4gOWQjeWkuuW+l+S4rei2hemHkemdtOeahOacrOWcn+eQg+WRmOaYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIumDnea1t+S4nFwiLFxuICAgICAgICBiOiBcIuadjumHkee+vVwiLFxuICAgICAgICBjOiBcIuWuv+iMguiHu1wiLFxuICAgICAgICBkOiBcIumDnOael1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0MixcbiAgICAgICAgdGl0bGU6IFwi5pu+5Yib5LiL5Lit5Zu95Zu05qOL5ZCN5Lq65oiY5Y2B5LiJ6L+e6Zy457qq5b2V55qE5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi6ams5pmT5pilXCIsXG4gICAgICAgIGI6IFwi5bi45piKXCIsXG4gICAgICAgIGM6IFwi6IGC5Y2r5bmzXCIsXG4gICAgICAgIGQ6IFwi5p+v5rSBXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIzLFxuICAgICAgICB0aXRsZTogXCLkuK3otoXmnIDlubTovbvov5vnkIPogIXnuqrlvZXmmK/nlLHosIHkv53mjIHogIXvvJ9cIixcbiAgICAgICAgYTogXCLmrabno4pcIixcbiAgICAgICAgYjogXCLpu4TljZrmlodcIixcbiAgICAgICAgYzogXCLmnLHovrDmnbBcIixcbiAgICAgICAgZDogXCLpg5HmmbpcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjQsXG4gICAgICAgIHRpdGxlOiBcIui2s+WNj+adr+WkuuWGoOasoeaVsOacgOWkmueahOeQg+mYn+aYr++8n1wiLFxuICAgICAgICBhOiBcIuW5v+W3nuaBkuWkp1wiLFxuICAgICAgICBiOiBcIuWMl+S6rOWbveWuiVwiLFxuICAgICAgICBjOiBcIuWxseS4nOmygeiDvVwiLFxuICAgICAgICBkOiBcIuS4iua1t+eUs+iKsVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNSxcbiAgICAgICAgdGl0bGU6IFwi5Lit5Zu95aWz6Laz5Zyo5LiW55WM5p2v5LiK55qE5pyA5aW95oiQ57up77yfXCIsXG4gICAgICAgIGE6IFwi5Yag5YabXCIsXG4gICAgICAgIGI6IFwi5Lqa5YabXCIsXG4gICAgICAgIGM6IFwi5a2j5YabXCIsXG4gICAgICAgIGQ6IFwi56ys5Zub5ZCNXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI2LFxuICAgICAgICB0aXRsZTogXCLlub/lt57mgZLlpKflnKjkuK3otoXlrozmiJDlh6Dov57lhqDvvJ9cIixcbiAgICAgICAgYTogXCI26L+e5YagXCIsXG4gICAgICAgIGI6IFwiN+i/nuWGoFwiLFxuICAgICAgICBjOiBcIjjov57lhqBcIixcbiAgICAgICAgZDogXCI56L+e5YagXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI3LFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkvY3nkIPlkZjmsqHmnInlj4LliqDov4fkuJbnlYzmna/mraPotZvvvJ9cIixcbiAgICAgICAgYTogXCLpgrXkvbPkuIBcIixcbiAgICAgICAgYjogXCLlrZnnu6fmtbdcIixcbiAgICAgICAgYzogXCLmnY7ph5Hnvr1cIixcbiAgICAgICAgZDogXCLmsZ/mtKVcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjgsXG4gICAgICAgIHRpdGxlOiBcIueOh+mihuW5v+W3nuaBkuWkp+iOt+W+l+esrOS4gOS4quS4rei2heWGoOWGm+eahOS4u+aVmee7g+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuadjueroOa0mVwiLFxuICAgICAgICBiOiBcIumHjOearlwiLFxuICAgICAgICBjOiBcIuaWr+enkeaLiemHjFwiLFxuICAgICAgICBkOiBcIuWNoee6s+eTpue9l1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyOSxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N55CD5ZGY5LuO5p2l5rKh5pyJ5Yiw5Lit6LaF6Lii6L+H55CD77yfXCIsXG4gICAgICAgIGE6IFwi5be06YeM5aWl5pavXCIsXG4gICAgICAgIGI6IFwi5ZCJ5ouJ6L+q6K+6XCIsXG4gICAgICAgIGM6IFwi5LyK5raF5pav5aGUXCIsXG4gICAgICAgIGQ6IFwi5b63572X5be0XCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMwLFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkvY3nkIPlkZjmsqHmnInojrflvpfov4figJzkuprmtLLotrPnkIPlsI/lp5DigJ3nmoTnp7Dlj7fvvJ9cIixcbiAgICAgICAgYTogXCLlrZnpm69cIixcbiAgICAgICAgYjogXCLnmb3mtIFcIixcbiAgICAgICAgYzogXCLpn6nnq69cIixcbiAgICAgICAgZDogXCLpqazmmZPml61cIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzEsXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS4quecgeS7veaIluWfjuW4guayoeacieS4pOaUr+S4rei2hemYn+S8je+8n1wiLFxuICAgICAgICBhOiBcIuW5v+W3nlwiLFxuICAgICAgICBiOiBcIuS4iua1t1wiLFxuICAgICAgICBjOiBcIuWMl+S6rFwiLFxuICAgICAgICBkOiBcIuaxn+iLj1wiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzMixcbiAgICAgICAgdGl0bGU6IFwiMTk5OeW5tOS9k+aTjeS4lumUpui1m+adjuWwj+m5j+iOt+W+l+S6huWTquS4qumhueebrueahOmHkeeJjO+8n1wiLFxuICAgICAgICBhOiBcIuiHqueUseaTjVwiLFxuICAgICAgICBiOiBcIuWPjOadoFwiLFxuICAgICAgICBjOiBcIui3s+mprFwiLFxuICAgICAgICBkOiBcIuWNleadoFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzMyxcbiAgICAgICAgdGl0bGU6IFwiMjAwMeW5tOWTquS4gOWkqeiQqOmprOWFsOWlh+Wuo+W4g+WMl+S6rOaIkOS4ujIwMDjlubTlpaXov5DkvJrkuLvlip7ln47luILvvJ9cIixcbiAgICAgICAgYTogXCI3LjExXCIsXG4gICAgICAgIGI6IFwiNy4xMlwiLFxuICAgICAgICBjOiBcIjcuMTNcIixcbiAgICAgICAgZDogXCI3LjE0XCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM0LFxuICAgICAgICB0aXRsZTogXCIyMDAy5bm055uQ5rmW5Z+O5Yas5aWl5Lya77yM6LCB5Li65Lit5Zu95ou/5Yiw5Yas5aWl5Lya5Y6G5Y+y6aaW6YeR77yfXCIsXG4gICAgICAgIGE6IFwi5p2o6ZizXCIsXG4gICAgICAgIGI6IFwi5p2o5omsXCIsXG4gICAgICAgIGM6IFwi5p2o5p2oIFwiLFxuICAgICAgICBkOiBcIuadqOa0i1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNSxcbiAgICAgICAgdGl0bGU6IFwiMjAwM+W5tOWbveWutuS9k+iCsuaAu+WxgOato+W8j+aJueWHhuWTquS4qumhueebruaIkOS4uuesrDk55Liq5q2j5byP5L2T6IKy56ue6LWb6aG577yfXCIsXG4gICAgICAgIGE6IFwi55S15a2Q56ue5oqAXCIsXG4gICAgICAgIGI6IFwi6auY5bCU5aSrXCIsXG4gICAgICAgIGM6IFwi6ams55CDXCIsXG4gICAgICAgIGQ6IFwi5ruR57+U5LyeXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM2LFxuICAgICAgICB0aXRsZTogXCIyMDA15bm06LCB5aS65b6X5LqG5Lit5Zu95pav6K+65YWL6aaW5Liq5o6S5ZCN6LWb5Yag5Yab77yfXCIsXG4gICAgICAgIGE6IFwi5YKF5a625L+KXCIsXG4gICAgICAgIGI6IFwi5LiB5L+K5pmWXCIsXG4gICAgICAgIGM6IFwi5qKB5paH5Y2aXCIsXG4gICAgICAgIGQ6IFwi55Sw6bmP6aOeXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM3LFxuICAgICAgICB0aXRsZTogXCIyMDA25bm06YO954G15Yas5aWl5Lya5Lit5Zu95ZOq5L2N55S36YCJ5omL6I635b6X5LqG6YeR54mM77yfXCIsXG4gICAgICAgIGE6IFwi5p2O5L2z5YabXCIsXG4gICAgICAgIGI6IFwi6Z+p5pmT6bmPXCIsXG4gICAgICAgIGM6IFwi6Z+p5L2z6ImvXCIsXG4gICAgICAgIGQ6IFwi5a6J546J6b6ZXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM4LFxuICAgICAgICB0aXRsZTogXCIyMDA35bm055Sw5b6E5LiW6ZSm6LWb5YiY57+U5Yaz6LWb5Zyo56ys5Yeg6LeR6YGT77yfXCIsXG4gICAgICAgIGE6IFwiNlwiLFxuICAgICAgICBiOiBcIjdcIixcbiAgICAgICAgYzogXCI4XCIsXG4gICAgICAgIGQ6IFwiOVwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzOSxcbiAgICAgICAgdGl0bGU6IFwiMjAwOeW5tOa4uOazs+S4lumUpui1m+iwgeWkuuW+l+S4reWbveeUt+WtkOa4uOazs+mmlumHke+8n1wiLFxuICAgICAgICBhOiBcIuW8oOeQs1wiLFxuICAgICAgICBiOiBcIuWtmeadqFwiLFxuICAgICAgICBjOiBcIuWugeazvea2m1wiLFxuICAgICAgICBkOiBcIuW+kOWYieS9mVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0MCxcbiAgICAgICAgdGl0bGU6IFwiMjAxM+W5tOiwgeWIm+mAoOS6huWNleS6uuW4huiIueS4jemXtOaWreeOr+eQg+iIquihjOS4lueVjOe6quW9le+8n1wiLFxuICAgICAgICBhOiBcIuW+kOiOieS9s1wiLFxuICAgICAgICBiOiBcIuaut+WJkVwiLFxuICAgICAgICBjOiBcIumDreW3nVwiLFxuICAgICAgICBkOiBcIumZiOS9qeWonFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0MSxcbiAgICAgICAgdGl0bGU6IFwi5Y+C5Yqg5LiOQWxwaGFHb+S6uuacuuWkp+aImOeahOaYr+WTquS9jeS4reWbveaji+aJi++8n1wiLFxuICAgICAgICBhOiBcIuadjuS4luefs1wiLFxuICAgICAgICBiOiBcIuiBguWNq+W5s1wiLFxuICAgICAgICBjOiBcIuWUkOWNq+aYn1wiLFxuICAgICAgICBkOiBcIuafr+a0gVwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0MixcbiAgICAgICAgdGl0bGU6IFwiMjAxNuW5tOiwgeaIkOS4uuS6humbhuWFqOWbveWGoOWGm+OAgeS6mua0suWGoOWGm+OAgeS4lumUpui1m+WGoOWGm+OAgeWlpei/kOS8muWGoOWGm+OAgeiBjOS4muaLs+eOi+iNo+iqieS6juS4gOi6q+eahOmHkea7oei0r+W+l+S4u++8n1wiLFxuICAgICAgICBhOiBcIumCueW4guaYjlwiLFxuICAgICAgICBiOiBcIueGiuacneW/oFwiLFxuICAgICAgICBjOiBcIuW8oOWwj+W5s1wiLFxuICAgICAgICBkOiBcIuWQleaWjFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0MyxcbiAgICAgICAgdGl0bGU6IFwiMjAxN+W5tOiiq+iqieS4uuKAnE1WUOaUtuWJsuacuuKAneeahOaYr+WTquS9jeWls+aOkuWQjeWwhu+8n1wiLFxuICAgICAgICBhOiBcIuacseWpt1wiLFxuICAgICAgICBiOiBcIuW8oOW4uOWugVwiLFxuICAgICAgICBjOiBcIuiigeW/g+eOpVwiLFxuICAgICAgICBkOiBcIuS4gemcnlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0NCxcbiAgICAgICAgdGl0bGU6IFwiMjAxOOW5tOS6mui/kOS8muiOt+W+l+mHkeeJjOacgOWkmueahOS4reWbvemAieaJi+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuW+kOWYieS9mVwiLFxuICAgICAgICBiOiBcIuWtmeadqFwiLFxuICAgICAgICBjOiBcIuaoiuaMr+S4nFwiLFxuICAgICAgICBkOiBcIueOi+eugOWYieemvlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0NSxcbiAgICAgICAgdGl0bGU6IFwiMjAxOOW5tOiLj+eCs+a3u+eahOeZvuexs+acgOS9s+aImOe7qeaYr+WkmuWwke+8n1wiLFxuICAgICAgICBhOiBcIjnnp5I5MVwiLFxuICAgICAgICBiOiBcIjnnp5JcIixcbiAgICAgICAgYzogXCI556eSOTlcIixcbiAgICAgICAgZDogXCIxMOenkjAzXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9XG4gICBcbl0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IHsgUXVlc3Rpb25JdGVtIH0gZnJvbSBcIi4vUXVlc3Rpb25EYXRhXCI7XG5cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLlF1ZXN0aW9uRGlhbG9nVUkge1xuXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25JdGVtXG4gICAgXG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uSXRlbSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvblxuXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNb2RhbCA9IHRydWVcbiAgICAgICAgdGhpcy5wb3MoMCwgMClcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0gICBcbiAgICBcbiAgICBwdWJsaWMgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIOW7tuaXtuaJp+ihjO+8jOmBv+WFjeaJi+acuuS4iuaJp+ihjOaXtuaKpee7hOS7tnVuZGVmaW5lZOeahOmXrumimFxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsTGF0ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5xdWVzdGlvbkxhYmVsKSB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25cbiAgICAgICAgdGhpcy5xdWVzdGlvbkxhYmVsLnRleHQgPSBxdWVzdGlvbi50aXRsZVxuICAgICAgICB0aGlzLmFuc3dlckFCdG4ubGFiZWwgPSBxdWVzdGlvbi5hXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmJcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLmxhYmVsID0gcXVlc3Rpb24uY1xuICAgICAgICB0aGlzLmFuc3dlckRCdG4ubGFiZWwgPSBxdWVzdGlvbi5kXG5cbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJhXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImJcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiY1wiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJkXCJdKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0Fuc3dlcihhbnN3ZXI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tBbnN3ZXJcIiwgYW5zd2VyKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gKHRoaXMucXVlc3Rpb24uYW5zd2VyID09PSBhbnN3ZXIpXG4gICAgICAgIGNvbnN0IHJlc3VsdEltZyA9IHJpZ2h0ID8gXCJ2aWV3L3JpZ2h0LnBuZ1wiIDogXCJ2aWV3L3dyb25nLnBuZ1wiXG4gICAgICAgIGlmIChhbnN3ZXIgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QUltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJiXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QkltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRCSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImNcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRDSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdENJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdERJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0REltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g56e76Zmk54K55Ye75LqL5Lu2XG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5vZmZBbGwoKVxuXG4gICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCB0aGlzLm9uQ2xvc2VMYXRlciwgW3JpZ2h0XSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VMYXRlcihyaWdodDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNsb3NlKGAke3JpZ2h0fWApXG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbi8qKlxuICog5Zy65pmvMeiDjOaZr1xuICovXG5cbnR5cGUgQW5pTmFtZSA9IHN0cmluZztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuMUJhY2tHcm91bmQgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgcHJpdmF0ZSBiZzE6IExheWEuU3ByaXRlO1xuICAgIHByaXZhdGUgY3VwQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgd2hpc3RsZUFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNob3RBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwMkFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDA0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDhBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAxMkFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCYWxsTWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQm9hcmRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBjbG9ja0FuaTogTGF5YS5BbmltYXRpb25cbiAgICAvLyBwcml2YXRlIENvbXB1dGVyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQ3Jvd2RBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBkdW1iYmVsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGVsZWN0cmljbWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZXF1aXBtZW50QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgRm9vdGJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBHb2dnbGVzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGF0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGVhcnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBsaXV4aWFuZ0FuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIE1lZGFsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2NvcmVib2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNob2VzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU3RhZ2VBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXYWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2F0ZXJMZWZ0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgV2F0ZXJSaWdodEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXaW5NYW5Bbmk6IExheWEuQW5pbWF0aW9uXG5cbiAgICBwcml2YXRlIGJnMjogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnMzogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNDogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNTogTGF5YS5TcHJpdGVcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJnMSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmcxLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDEpXG4gICAgICAgIHRoaXMuYmcxLmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcxKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5iZzIgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMi5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgOTcwKVxuICAgICAgICB0aGlzLmJnMi5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUyID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMilcbiAgICAgICAgdGhpcy5iZzIuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUyKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcyKVxuXG4gICAgICAgIHRoaXMuYmczID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzMucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIDE5NDApXG4gICAgICAgIHRoaXMuYmczLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTMgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQzKVxuICAgICAgICB0aGlzLmJnMy5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTMpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzMpXG5cbiAgICAgICAgdGhpcy5iZzQgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnNC5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgMjkxMClcbiAgICAgICAgdGhpcy5iZzQuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNCA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDQpXG4gICAgICAgIHRoaXMuYmc0LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNClcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNClcblxuICAgICAgICB0aGlzLmJnNSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmc1LnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDRIZWlnaHQgKyAzODgwKVxuICAgICAgICB0aGlzLmJnNS5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDVIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmU1ID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kNSlcbiAgICAgICAgdGhpcy5iZzUuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmU1KVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmc1KVxuXG4gICAgICAgIHRoaXMuY3VwQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgLy8gVE9ETzog6LCD5pW05Yqo55S7XG4gICAgICAgIHRoaXMuY3VwQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQ3VwQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY3VwQW5pKVxuICAgICAgICAvLyBUT0RPOiDosIPmlbTkvY3nva5cbiAgICAgICAgdGhpcy5jdXBBbmkucG9zKDQwMCwgMTAyMClcblxuXG4gICAgICAgIHRoaXMud2hpc3RsZUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMud2hpc3RsZUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1doaXN0bGVBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy53aGlzdGxlQW5pKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkucG9zKDEwMCwgOTgwKVxuXG4gICAgICAgIHRoaXMuU2hvdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU2hvdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob3RBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TaG90QW5pKVxuICAgICAgICB0aGlzLlNob3RBbmkucG9zKDIyMCwgMTg1MClcblxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDAyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkucG9zKDM2MCwgMjU1MClcblxuICAgICAgICB0aGlzLndpbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMud2luQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvd2luQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2luQW5pKVxuICAgICAgICB0aGlzLndpbkFuaS5wb3MoMjgwLCAzMDUwKVxuXG4gICAgICAgIC8vcGFnZTJcbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9kdW1iYmVsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmR1bWJiZWxsQW5pKVxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnBvcygzMTAsIDUwOTYpXG5cbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VxdWlwbWVudEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmVxdWlwbWVudEFuaSlcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkucG9zKDM3MCwgNTQwMylcblxuICAgICAgICB0aGlzLmNsb2NrQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2Nsb2NrQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY2xvY2tBbmkpXG4gICAgICAgIHRoaXMuY2xvY2tBbmkucG9zKDE1MiwgNTY5NSlcblxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDA0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDRBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkucG9zKDMzNywgNjA0NClcblxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VsZWN0cmljbWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZWxlY3RyaWNtYW5BbmkpXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkucG9zKDMyOCwgNjI2NSlcblxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2xpdXhpYW5nQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubGl1eGlhbmdBbmkpXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkucG9zKDI2MywgNjc1MClcblxuICAgICAgICAvL3BhZ2UzXG4gICAgICAgIC8vIHRoaXMuQ29tcHV0ZXJBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyB0aGlzLkNvbXB1dGVyQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQ29tcHV0ZXJBbmkuYW5pXCIpXG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5Db21wdXRlckFuaSlcbiAgICAgICAgLy8gdGhpcy5Db21wdXRlckFuaS5wb3MoMjQwLCA2NTQ1KVxuXG4gICAgICAgIHRoaXMuTWVkYWxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLk1lZGFsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvTWVkYWxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5NZWRhbEFuaSlcbiAgICAgICAgdGhpcy5NZWRhbEFuaS5wb3MoMzMzLCA4OTAwKVxuXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlN0YWdlQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU3RhZ2VBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TdGFnZUFuaSlcbiAgICAgICAgdGhpcy5TdGFnZUFuaS5wb3MoMjE5LCA5MjExKVxuXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMDhBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAwOEFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5wb3MoMjMxLCA5NjkzKVxuXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkNyb3dkQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQ3Jvd2RBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Dcm93ZEFuaSlcbiAgICAgICAgdGhpcy5Dcm93ZEFuaS5wb3MoMjcwLCAxMDA4NSlcblxuXG4gICAgICAgIC8vcGFnZTRcbiAgICAgICAgdGhpcy5IZWFydEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuSGVhcnRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9IZWFydEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkhlYXJ0QW5pKVxuICAgICAgICB0aGlzLkhlYXJ0QW5pLnBvcygxODEsIDExMzMxKVxuXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMTJBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAxMkFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5wb3MoMjU5LCAxMTcwNSlcblxuICAgICAgICAvLyB0aGlzLldhdGVyUmlnaHRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyB0aGlzLldhdGVyUmlnaHRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XYXRlclJpZ2h0QW5pLmFuaVwiKVxuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMuV2F0ZXJSaWdodEFuaSlcbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pLnBvcygzNzAsIDkxMDApXG5cbiAgICAgICAgdGhpcy5Cb2FyZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQm9hcmRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Cb2FyZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJvYXJkQW5pKVxuICAgICAgICB0aGlzLkJvYXJkQW5pLnBvcygyNTcsIDExOTIyKVxuXG4gICAgICAgIHRoaXMuV2FsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2FsbEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dhbGxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5XYWxsQW5pKVxuICAgICAgICB0aGlzLldhbGxBbmkucG9zKDI3NSwgMTIxOTApXG5cbiAgICAgICAgdGhpcy5Hb2dnbGVzQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvR29nZ2xlc0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkdvZ2dsZXNBbmkpXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaS5wb3MoMzU1LCAxMjYzNClcblxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2F0ZXJMZWZ0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2F0ZXJMZWZ0QW5pKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5wb3MoMTYzLCAxMzAwNylcblxuICAgICAgICB0aGlzLldpbk1hbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2luTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2luTWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2luTWFuQW5pKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5wb3MoMjU0LCAxMzQ4MClcblxuXG4gICAgICAgIC8vcGFnZTVcbiAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU2NvcmVib2FyZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlNjb3JlYm9hcmRBbmkpXG4gICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaS5wb3MoMjU3LCAxNDk2MSlcblxuICAgICAgICB0aGlzLkJhbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9CYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQmFsbEFuaSlcbiAgICAgICAgdGhpcy5CYWxsQW5pLnBvcygxMjcsIDE0OTYxKVxuXG4gICAgICAgIHRoaXMuU2hvZXNBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlNob2VzQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU2hvZXNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TaG9lc0FuaSlcbiAgICAgICAgdGhpcy5TaG9lc0FuaS5wb3MoMzM4LCAxNTY0OSlcblxuICAgICAgICB0aGlzLkhhdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuSGF0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvSGF0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuSGF0QW5pKVxuICAgICAgICB0aGlzLkhhdEFuaS5wb3MoMTkwLCAxNTgyMylcblxuICAgICAgICB0aGlzLkJhbGxNYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJhbGxNYW5BbmkubG9hZEFuaW1hdGlvbihcImFuaS9CYWxsTWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQmFsbE1hbkFuaSlcbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pLnBvcygyNjUsIDE2NDY3KVxuICAgIH1cblxuICAgIHN0b3BBbmkoYW5pTmFtZTogQW5pTmFtZSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5nb3RvQW5kU3RvcCgyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja0FuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwiY29tcHV0ZXJcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkNvbXB1dGVyQW5pLmdvdG9BbmRTdG9wKDMwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuR29nZ2xlc0FuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGF0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IYXRBbmkuZ290b0FuZFN0b3AoMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkuZ290b0FuZFN0b3AoMzApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5NZWRhbEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaS5nb3RvQW5kU3RvcCgyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob2VzQW5pLmdvdG9BbmRTdG9wKDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU3RhZ2VBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5XYXRlclJpZ2h0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLmdvdG9BbmRTdG9wKDMwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QW5pKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXBBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2hpc3RsZUFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG90QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Db21wdXRlckFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob2VzQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYWxsQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2hpc3RsZUFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLndpbkFuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FuaVBsYXlpbmcoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXBBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGlzdGxlQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvdEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwMkFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwNEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwOEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAxMkFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsTWFuQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJvYXJkQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb2NrQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLkNvbXB1dGVyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNyb3dkQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJkdW1iYmVsbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmR1bWJiZWxsQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZWN0cmljbWFuQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVpcG1lbnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Hb2dnbGVzQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IYXRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSGVhcnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGl1eGlhbmdBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWVkYWxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TY29yZWJvYXJkQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNob2VzQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlN0YWdlQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2FsbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2F0ZXJMZWZ0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuV2F0ZXJSaWdodEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldoaXN0bGVBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbkFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2luTWFuQW5pLmlzUGxheWluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRBbmlWaXNpYmxlKGFuaU5hbWU6IEFuaU5hbWUsIHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXBBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvdEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDhcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA4QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxNYW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja0FuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuQ29tcHV0ZXJBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNyb3dkQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuR29nZ2xlc0FuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhhdEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGVhcnRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmxpdXhpYW5nQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5NZWRhbEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG9lc0FuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU3RhZ2VBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2FsbEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5XYXRlclJpZ2h0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5NYW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNBbmlWaXNpYmxlKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VwQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMDJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwOEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMTJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsTWFuQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Cb2FyZEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIC8vIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLkNvbXB1dGVyQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Dcm93ZEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZWN0cmljbWFuQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXF1aXBtZW50QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IYXRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhlYXJ0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWVkYWxBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2NvcmVib2FyZEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvZXNBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlN0YWdlQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2FsbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldhbGxBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYXRlckxlZnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuV2F0ZXJSaWdodEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaGlzdGxlQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2luTWFuQW5pLnZpc2libGU7XG5cblxuICAgICAgICB9XG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5cbmV4cG9ydCB0eXBlIFRpcFR5cGUgPSBcInNjcm9sbFwiIHwgXCJjbGlja193aGl0ZVwiIHwgXCJjbGlja19ibGFja1wiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxEaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuU2Nyb2xsRGlhbG9nVUkge1xuICAgIHByaXZhdGUgdGlwVHlwZTogVGlwVHlwZVxuICAgIGNvbnN0cnVjdG9yKHRpcFR5cGU6IFRpcFR5cGUpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnRpcFR5cGUgPSB0aXBUeXBlXG4gICAgICAgIHRoaXMuYXV0b0Rlc3Ryb3lBdENsb3NlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5wb3MoMCwgMClcblxuICAgIH1cblxuICAgIHB1YmxpYyBvbk9wZW5lZCgpIHtcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FsbExhdGVyKCkge1xuICAgICAgICBzd2l0Y2godGhpcy50aXBUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic2Nyb2xsXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGlwSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRpcEltYWdlLnkgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IFxuICAgICAgICAgICAgICAgIHRoaXMudGlwSW1hZ2UudmlzaWJsZSAgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tfd2hpdGVcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy53aGl0ZUNsaWNrSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlQ2xpY2tJbWFnZS55ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCBcbiAgICAgICAgICAgICAgICB0aGlzLndoaXRlQ2xpY2tJbWFnZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIFwiY2xpY2tfYmxhY2tcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5ibGFja0NsaWNrSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tDbGlja0ltYWdlLnkgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFja0NsaWNrSW1hZ2UudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vbkNsaWNrKVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hha2VEaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuU2hha2VEaWFsb2dVSSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuICAgICAgXG4gICAgICAgIFxuICAgIH0gICAgXG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFza2V0YmFsbCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICAvLyDlrprkuYnnkIPkuLvkvZNcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXG4gIFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2Jhc2tldGJhbGwuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2UxZTJzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTF0bzJBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2UyZTNzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTJ0bzNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2UzZTRzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTN0bzRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UzX1J1bm1hbiBleHRlbmRzIExheWEuU3ByaXRlIHtcclxuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xyXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxyXG4gIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTNfcnVubWFuLmFuaVwiKVxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LWw5YqoXHJcbiAgICAgKi9cclxuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keUFuaS5nb3RvQW5kU3RvcCh5KVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gZmFsc2VcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBwYWdlNGU1cyBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICAvLyDlrprkuYnnkIPkuLvkvZNcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXG4gIFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2U0dG81QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6LWw5YqoXG4gICAgICovXG4gICAgZ29QYXRoKHk6bnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS5nb3RvQW5kU3RvcCh5KVxuICAgIH1cblxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gdHJ1ZVxuICAgICAgIFxuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gZmFsc2VcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBydW5uaW5nIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieS4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMlJ1bi5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gdHJ1ZVxuXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN3aW1taW5nIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvc3dpbW1pbmdBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkuZGlhbG9nIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHRpcExhYmVsOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGxvYWRpbmdQcm9ncmVzc0JhcjpMYXlhLlByb2dyZXNzQmFyO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL0xvYWRpbmdEaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHJlc3VsdEFJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdENJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdEJJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdERJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHF1ZXN0aW9uTGFiZWw6TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgYW5zd2VyQUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyQkJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyQ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyREJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9RdWVzdGlvbkRpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2Nyb2xsRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHRpcEltYWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBibGFja0NsaWNrSW1hZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHdoaXRlQ2xpY2tJbWFnZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TY3JvbGxEaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFNoYWtlRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TaGFrZURpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
