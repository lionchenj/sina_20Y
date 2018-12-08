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
    Constants.background2 = "bg/background2.jpg";
    Constants.background3 = "bg/background3.jpg";
    Constants.background4 = "bg/background4.jpg";
    Constants.background5 = "bg/background5.jpg";
    Constants.background1Height = 3604;
    Constants.background2Height = 2561;
    Constants.background3Height = 2190;
    Constants.background4Height = 2559;
    Constants.background5Height = 1920;
    Constants.stageWidth = 512;
    Constants.stateHeight = Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height + Constants.background5Height;
    Constants.scaleMode = "noborder";
    Constants.screenMode = "vertical";
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
    GameConfig.startScene = "dialog/QuestionDialog.scene";
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
var GameConfig_1 = require("./GameConfig");
var Screen1BackGround_1 = require("./Screen1BackGround");
var Football_1 = require("./Football");
var FootballPath_1 = require("./FootballPath");
var QuestionDialog_1 = require("./QuestionDialog");
var Constants_1 = require("./Constants");
var QuestionData_1 = require("./QuestionData");
var Main = /** @class */ (function () {
    function Main() {
        this.shakeCount = 0;
        this.hasPlayShotAni = true;
        this.hasShowQuestionIndex = 0; // 已经显示到的问题id
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
        Laya.stage.bgColor = "white";
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
            url: "res/atlas/comp.atlas",
            type: Laya.Loader.ATLAS
        });
        // 预加载资源
        Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
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
    Main.prototype.onAssetsLoading = function (progress) {
        console.log("加载进度: " + progress);
        // TODO: 显示进度条
    };
    Main.prototype.onAssetsLoaded = function () {
        this.console.text += '资源加载完成。';
        this.screen1BackGround = new Screen1BackGround_1.default();
        Laya.stage.addChild(this.screen1BackGround);
        this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove);
        this.screen1BackGround.on(Laya.Event.DRAG_START, this, this.onBackgroundStartMove);
        this.football = new Football_1.default();
        this.football.pos(327, 233); // 初始位置
        Laya.stage.addChild(this.football);
        console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight);
        // 计算背景可拖动区域
        var moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
        this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
    };
    Main.prototype.onMouseMove = function () {
        // 始终保持主角和鼠标位置一致
        // this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
        // console.log("onMouseMove", Laya.stage.mouseX, Laya.stage.mouseY)
        console.log("map[" + Laya.stage.mouseY + "] = " + Laya.stage.mouseX);
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
        var needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y);
        if (needShowQuestion) {
            this.screen1BackGround.stopDrag();
            return;
        }
        if (this.screen1BackGround.y <= -1100) { // 不给拖动，摇一摇显示射门动画
            if (this.hasPlayShotAni) {
                this.console.text += '已经显示过射门动画\n';
            }
            else {
                this.console.text += '没有显示过射门动画\n';
                this.screen1BackGround.stopDrag();
                // TODO: 是否显示过摇一摇提示
                // 监听摇一摇
                Laya.Shake.instance.start(5, 500);
                Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake);
                this.console.text += '开始接收设备摇动\n';
            }
        }
        if (this.screen1BackGround.y <= -800) { // 隐藏足球
            this.football.hide();
        }
        else {
            this.football.show();
            // 移动足球位置
            // const y = -this.screen1BackGround.y + 232
            var y = 0;
            if ((-this.screen1BackGround.y + 232) < 1032) {
                y = -this.screen1BackGround.y + 100;
            }
            if ((-this.screen1BackGround.y + 232) < 850) {
                y = -this.screen1BackGround.y + 130;
            }
            if ((-this.screen1BackGround.y + 232) < 730) {
                y = -this.screen1BackGround.y + 150;
            }
            if ((-this.screen1BackGround.y + 232) < 580) {
                y = -this.screen1BackGround.y + 180;
            }
            if ((-this.screen1BackGround.y + 232) < 435) {
                y = -this.screen1BackGround.y + 200;
            }
            if ((-this.screen1BackGround.y + 232) > 1032) {
                y = -this.screen1BackGround.y + 232;
            }
            var x = FootballPath_1.getFootballX(y);
            if (x == 0) {
                this.football.y = y;
            }
            else {
                this.football.pos(x, y);
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
    };
    Main.prototype.onDeviceShake = function () {
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
            // TODO: 这里需要等动画播放完才设置this.hasPlayShotAni = true
            this.hasPlayShotAni = true;
            this.console.text += "播放射门动画";
        }
    };
    Main.prototype.onQuestionDialogClose = function (index, type) {
        console.log("onQuestionDialogClose", type, index);
        var right = (type === "true");
        this.hasShowQuestionIndex = parseInt(index);
        this.showingDialog = false;
    };
    // 判断是否需要显示问题
    Main.prototype.showQuestionDialogIfNeed = function (y) {
        var offset = Laya.Browser.clientHeight;
        var hasShowLength = this.showQuestionIndexList.length;
        if (length >= 10) {
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
        var questionDialog = new QuestionDialog_1.QuestionDialog(questionData);
        questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index]);
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

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./QuestionData":6,"./QuestionDialog":7,"./Screen1BackGround":8}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionShowY = [
    1363,
    3407,
    4857,
    5658,
    6598,
    7848,
    8770,
    9965,
    11524,
    12365
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
];

},{}],7:[function(require,module,exports){
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
        _this.popup(true);
        return _this;
    }
    QuestionDialog.prototype.onOpened = function () {
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

},{"./ui/layaMaxUI":9}],8:[function(require,module,exports){
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
        this.bg2.pos(0, Constants_1.default.background1Height);
        this.bg2.size(Constants_1.default.stageWidth, Constants_1.default.background2Height);
        var texture2 = Laya.loader.getRes(Constants_1.default.background2);
        this.bg2.graphics.drawImage(texture2);
        this.addChild(this.bg2);
        this.bg3 = new Laya.Sprite();
        this.bg3.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height);
        this.bg3.size(Constants_1.default.stageWidth, Constants_1.default.background3Height);
        var texture3 = Laya.loader.getRes(Constants_1.default.background3);
        this.bg3.graphics.drawImage(texture3);
        this.addChild(this.bg3);
        this.bg4 = new Laya.Sprite();
        this.bg4.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height + Constants_1.default.background3Height);
        this.bg4.size(Constants_1.default.stageWidth, Constants_1.default.background4Height);
        var texture4 = Laya.loader.getRes(Constants_1.default.background4);
        this.bg4.graphics.drawImage(texture4);
        this.addChild(this.bg4);
        this.bg5 = new Laya.Sprite();
        this.bg5.pos(0, Constants_1.default.background1Height + Constants_1.default.background2Height + Constants_1.default.background3Height + Constants_1.default.background4Height);
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
        this.text2002Ani = new Laya.Animation();
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani");
        this.addChild(this.text2002Ani);
        this.text2002Ani.pos(200, 2500);
        this.text2004Ani = new Laya.Animation();
        this.text2004Ani.loadAnimation("ani/text2004Ani.ani");
        this.addChild(this.text2004Ani);
        this.text2004Ani.pos(200, 1600);
        this.text2008Ani = new Laya.Animation();
        this.text2008Ani.loadAnimation("ani/text2008Ani.ani");
        this.addChild(this.text2008Ani);
        this.text2008Ani.pos(200, 1600);
        this.text2012Ani = new Laya.Animation();
        this.text2012Ani.loadAnimation("ani/text2012Ani.ani");
        this.addChild(this.text2012Ani);
        this.text2012Ani.pos(200, 1600);
        this.BallAni = new Laya.Animation();
        this.BallAni.loadAnimation("ani/BallAni.ani");
        this.addChild(this.BallAni);
        this.BallAni.pos(200, 1600);
        this.BallManAni = new Laya.Animation();
        this.BallManAni.loadAnimation("ani/BallManAni.ani");
        this.addChild(this.BallManAni);
        this.BallManAni.pos(200, 1600);
        this.BoardAni = new Laya.Animation();
        this.BoardAni.loadAnimation("ani/BoardAni.ani");
        this.addChild(this.BoardAni);
        this.BoardAni.pos(200, 1600);
        this.clockAni = new Laya.Animation();
        this.clockAni.loadAnimation("ani/clockAni.ani");
        this.addChild(this.clockAni);
        this.clockAni.pos(200, 1600);
        this.ComputerAni = new Laya.Animation();
        this.ComputerAni.loadAnimation("ani/ComputerAni.ani");
        this.addChild(this.ComputerAni);
        this.ComputerAni.pos(200, 1600);
        this.CrowdAni = new Laya.Animation();
        this.CrowdAni.loadAnimation("ani/CrowdAni.ani");
        this.addChild(this.CrowdAni);
        this.CrowdAni.pos(200, 1600);
        this.dumbbellAni = new Laya.Animation();
        this.dumbbellAni.loadAnimation("ani/dumbbellAni.ani");
        this.addChild(this.dumbbellAni);
        this.dumbbellAni.pos(400, 1020);
        this.electricmanAni = new Laya.Animation();
        this.electricmanAni.loadAnimation("ani/electricmanAni.ani");
        this.addChild(this.electricmanAni);
        this.electricmanAni.pos(200, 1600);
        this.equipmentAni = new Laya.Animation();
        this.equipmentAni.loadAnimation("ani/equipmentAni.ani");
        this.addChild(this.equipmentAni);
        this.equipmentAni.pos(200, 1600);
        this.FootballAni = new Laya.Animation();
        this.FootballAni.loadAnimation("ani/FootballAni.ani");
        this.addChild(this.FootballAni);
        this.FootballAni.pos(200, 1600);
        this.GogglesAni = new Laya.Animation();
        this.GogglesAni.loadAnimation("ani/GogglesAni.ani");
        this.addChild(this.GogglesAni);
        this.GogglesAni.pos(200, 1600);
        this.HatAni = new Laya.Animation();
        this.HatAni.loadAnimation("ani/HatAni.ani");
        this.addChild(this.HatAni);
        this.HatAni.pos(200, 1600);
        this.HeartAni = new Laya.Animation();
        this.HeartAni.loadAnimation("ani/HeartAni.ani");
        this.addChild(this.HeartAni);
        this.HeartAni.pos(200, 1600);
        this.liuxiangAni = new Laya.Animation();
        this.liuxiangAni.loadAnimation("ani/liuxiangAni.ani");
        this.addChild(this.liuxiangAni);
        this.liuxiangAni.pos(200, 1600);
        this.MedalAni = new Laya.Animation();
        this.MedalAni.loadAnimation("ani/MedalAni.ani");
        this.addChild(this.MedalAni);
        this.MedalAni.pos(200, 1600);
        this.page02StartAni = new Laya.Animation();
        this.page02StartAni.loadAnimation("ani/page02StartAni.ani");
        this.addChild(this.page02StartAni);
        this.page02StartAni.pos(200, 1600);
        this.ScoreboardAni = new Laya.Animation();
        this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani");
        this.addChild(this.ScoreboardAni);
        this.ScoreboardAni.pos(200, 1600);
        this.ShoesAni = new Laya.Animation();
        this.ShoesAni.loadAnimation("ani/ShoesAni.ani");
        this.addChild(this.ShoesAni);
        this.ShoesAni.pos(200, 1600);
        this.ShotAni = new Laya.Animation();
        this.ShotAni.loadAnimation("ani/ShotAni.ani");
        this.addChild(this.ShotAni);
        this.ShotAni.pos(200, 1600);
        this.StageAni = new Laya.Animation();
        this.StageAni.loadAnimation("ani/StageAni.ani");
        this.addChild(this.StageAni);
        this.StageAni.pos(200, 1600);
        this.WallAni = new Laya.Animation();
        this.WallAni.loadAnimation("ani/WallAni.ani");
        this.addChild(this.WallAni);
        this.WallAni.pos(200, 1600);
        this.WaterLeftAni = new Laya.Animation();
        this.WaterLeftAni.loadAnimation("ani/WaterLeftAni.ani");
        this.addChild(this.WaterLeftAni);
        this.WaterLeftAni.pos(200, 1600);
        this.winAni = new Laya.Animation();
        this.winAni.loadAnimation("ani/winAni.ani");
        this.addChild(this.winAni);
        this.winAni.pos(200, 3000);
        this.WinManAni = new Laya.Animation();
        this.WinManAni.loadAnimation("ani/WinManAni.ani");
        this.addChild(this.WinManAni);
        this.WinManAni.pos(200, 1600);
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
                this.shotAni.gotoAndStop(0);
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
                this.shotAni.play(0, false);
                break;
            case "win":
                this.shotAni.play(0, false);
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
                return this.shotAni.isPlaying;
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
                this.shotAni.visible = visible;
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
                return this.shotAni.visible;
        }
    };
    return Screen1BackGround;
}(Laya.Sprite));
exports.default = Screen1BackGround;

},{"./Constants":1}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = Laya.Dialog;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
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
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui = exports.ui || (exports.ui = {}));

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTWFpbi50cyIsInNyYy9RdWVzdGlvbkRhdGEudHMiLCJzcmMvUXVlc3Rpb25EaWFsb2cudHMiLCJzcmMvU2NyZWVuMUJhY2tHcm91bmQudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUFxQkEsQ0FBQztJQW5CVSxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUd4QixvQkFBVSxHQUFHLEdBQUcsQ0FBQTtJQUNoQixxQkFBVyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUE7SUFDakssbUJBQVMsR0FBVyxVQUFVLENBQUM7SUFDL0Isb0JBQVUsR0FBVyxVQUFVLENBQUM7SUFJM0MsZ0JBQUM7Q0FyQkQsQUFxQkMsSUFBQTtrQkFyQm9CLFNBQVM7Ozs7O0FDQTlCO0lBQXNDLDRCQUFXO0lBSzdDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFBOztJQUNmLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRS9CLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUM7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNkJBQVUsR0FBVjtRQUNJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDeEIsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRTlCLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO0lBRS9CLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ2hDLENBQUM7SUFFTCxlQUFDO0FBQUQsQ0FoREEsQUFnREMsQ0FoRHFDLElBQUksQ0FBQyxNQUFNLEdBZ0RoRDs7Ozs7O0FDOUNELHNCQUE2QixDQUFTO0lBQ2xDLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoQixJQUFJLENBQUMsRUFBRTtRQUNILE9BQU8sQ0FBQyxDQUFBO0tBQ1g7U0FBTTtRQUNILE9BQU8sQ0FBQyxDQUFBO0tBQ1g7QUFDTCxDQUFDO0FBUEQsb0NBT0M7QUFDRCxJQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO0FBRTFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBaUJkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFrQmQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFtQmYsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUks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QUFHLENBQUMsQ0FBQyxFQUFFLG1CQUFTLENBQUMsaUJBQWlCLEdBQUcsbUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLG1CQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNoRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxtQkFBUyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsaUJBQWlCLEdBQUcsbUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3hHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLG1CQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNoRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxtQkFB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bmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50cyB7XG5cbiAgICBzdGF0aWMgYmFja2dyb3VuZDEgPSBcImJnL2JhY2tncm91bmQxLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQyID0gXCJiZy9iYWNrZ3JvdW5kMi5qcGdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMyA9IFwiYmcvYmFja2dyb3VuZDMuanBnXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDQgPSBcImJnL2JhY2tncm91bmQ0LmpwZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQ1ID0gXCJiZy9iYWNrZ3JvdW5kNS5qcGdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMUhlaWdodCA9IDM2MDRcbiAgICBzdGF0aWMgYmFja2dyb3VuZDJIZWlnaHQgPSAyNTYxXG4gICAgc3RhdGljIGJhY2tncm91bmQzSGVpZ2h0ID0gMjE5MFxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNEhlaWdodCA9IDI1NTlcbiAgICBzdGF0aWMgYmFja2dyb3VuZDVIZWlnaHQgPSAxOTIwXG5cblxuICAgIHN0YXRpYyBzdGFnZVdpZHRoID0gNTEyXG4gICAgc3RhdGljIHN0YXRlSGVpZ2h0ID0gQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ1SGVpZ2h0XG4gICAgc3RhdGljIHNjYWxlTW9kZTogc3RyaW5nID0gXCJub2JvcmRlclwiO1xuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOiBzdHJpbmcgPSBcInZlcnRpY2FsXCI7XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGJhbGwgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ6Laz55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Gb290YmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi2s+eQg+WBnOatouaXi+i9rFxuICAgICAqL1xuICAgIHN0b3BSb3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5QW5pLmlzUGxheWluZyl7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Laz55CDXGLml4vovaxcbiAgICAgKi9cbiAgICBwbGF5Um90YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ib2R5QW5pLmlzUGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUFuaS5wbGF5KDAsIHRydWUpXG5cbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb290YmFsbFgoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB4ID0gbWFwW3ldXG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHhcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cbn1cbmNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuXG5tYXBbMjMyXSA9IDMyNlxubWFwWzIzMl0gPSAzMjlcbm1hcFsyMzRdID0gMzMwXG5tYXBbMjM2XSA9IDMzMlxubWFwWzIzN10gPSAzMzRcbm1hcFsyMzddID0gMzM3XG5tYXBbMjM5XSA9IDMzOVxubWFwWzIzOV0gPSAzNDJcbm1hcFsyNDBdID0gMzQ0XG5tYXBbMjQyXSA9IDM0NVxubWFwWzI0NF0gPSAzNDdcbm1hcFsyNDVdID0gMzQ4XG5tYXBbMjQ3XSA9IDM1MFxubWFwWzI0OV0gPSAzNTJcbm1hcFsyNTBdID0gMzUzXG5tYXBbMjUyXSA9IDM1NVxubWFwWzI1NF0gPSAzNTdcbm1hcFsyNTVdID0gMzU4XG5tYXBbMjU3XSA9IDM2MFxubWFwWzI1OF0gPSAzNjJcbm1hcFsyNThdID0gMzY1XG5tYXBbMjYwXSA9IDM2NlxubWFwWzI2Ml0gPSAzNjhcbm1hcFsyNjNdID0gMzcwXG5tYXBbMjY1XSA9IDM3MVxubWFwWzI2N10gPSAzNzNcbm1hcFsyNjhdID0gMzc1XG5tYXBbMjcwXSA9IDM3NlxubWFwWzI3Ml0gPSAzNzhcbm1hcFsyNzNdID0gMzgwXG5tYXBbMjc1XSA9IDM4MVxubWFwWzI3OF0gPSAzODFcbm1hcFsyODFdID0gMzgxXG5tYXBbMjgzXSA9IDM4M1xubWFwWzI4Nl0gPSAzODNcbm1hcFsyODhdID0gMzg0XG5tYXBbMjkxXSA9IDM4NFxubWFwWzI5NF0gPSAzODRcbm1hcFsyOTZdID0gMzg2XG5tYXBbMjk5XSA9IDM4NlxubWFwWzMwM10gPSAzODZcbm1hcFszMDZdID0gMzg2XG5tYXBbMzA5XSA9IDM4NlxubWFwWzMxMl0gPSAzODZcbm1hcFszMTZdID0gMzg2XG5tYXBbMzE3XSA9IDM4OFxubWFwWzMyMV0gPSAzODhcbm1hcFszMjRdID0gMzg4XG5tYXBbMzI3XSA9IDM4OFxubWFwWzMzMF0gPSAzODhcbm1hcFszMzRdID0gMzg4XG5tYXBbMzM1XSA9IDM4NlxubWFwWzMzOV0gPSAzODZcbm1hcFszNDJdID0gMzg2XG5tYXBbMzQ1XSA9IDM4NlxubWFwWzM0OF0gPSAzODZcbm1hcFszNTJdID0gMzg0XG5tYXBbMzU1XSA9IDM4NFxubWFwWzM1N10gPSAzODNcbm1hcFszNjBdID0gMzgzXG5tYXBbMzYxXSA9IDM4MVxubWFwWzM2M10gPSAzODBcbm1hcFszNjVdID0gMzc4XG5tYXBbMzY2XSA9IDM3NlxubWFwWzM3MF0gPSAzNzVcbm1hcFszNzFdID0gMzczXG5tYXBbMzczXSA9IDM3MVxubWFwWzM3Nl0gPSAzNzBcbm1hcFszNzhdID0gMzY4XG5tYXBbMzc5XSA9IDM2NlxubWFwWzM4MV0gPSAzNjVcbm1hcFszODNdID0gMzYzXG5tYXBbMzg2XSA9IDM2M1xubWFwWzM4OF0gPSAzNjJcbm1hcFszODldID0gMzYwXG5tYXBbMzkxXSA9IDM1OFxubWFwWzM5M10gPSAzNTdcbm1hcFszOTRdID0gMzU1XG5tYXBbMzk2XSA9IDM1M1xubWFwWzM5N10gPSAzNTJcbm1hcFszOTldID0gMzUwXG5tYXBbNDAxXSA9IDM0OFxubWFwWzQwNF0gPSAzNDhcbm1hcFs0MDZdID0gMzQ3XG5tYXBbNDA3XSA9IDM0NVxubWFwWzQwOV0gPSAzNDRcbm1hcFs0MTFdID0gMzQyXG5tYXBbNDEyXSA9IDM0MFxubWFwWzQxNF0gPSAzMzlcbm1hcFs0MTVdID0gMzM3XG5tYXBbNDE3XSA9IDMzNVxubWFwWzQxOV0gPSAzMzRcbm1hcFs0MjBdID0gMzMyXG5tYXBbNDIyXSA9IDMzMFxubWFwWzQyNV0gPSAzMjlcbm1hcFs0MjddID0gMzI3XG5tYXBbNDI5XSA9IDMyNlxubWFwWzQzMl0gPSAzMjZcbm1hcFs0MzNdID0gMzI0XG5tYXBbNDM1XSA9IDMyMlxubWFwWzQzN10gPSAzMjFcbm1hcFs0MzhdID0gMzE5XG5tYXBbNDQwXSA9IDMxN1xubWFwWzQ0Ml0gPSAzMTZcbm1hcFs0NDNdID0gMzE0XG5tYXBbNDQ1XSA9IDMxMlxubWFwWzQ0OF0gPSAzMTJcbm1hcFs0NTBdID0gMzExXG5tYXBbNDUxXSA9IDMwOVxubWFwWzQ1NV0gPSAzMDhcbm1hcFs0NTZdID0gMzA2XG5tYXBbNDU4XSA9IDMwNFxubWFwWzQ2MV0gPSAzMDNcbm1hcFs0NjNdID0gMzAxXG5tYXBbNDY1XSA9IDI5OVxubWFwWzQ2Nl0gPSAyOThcbm1hcFs0NjhdID0gMjk2XG5tYXBbNDY5XSA9IDI5NFxubWFwWzQ3MV0gPSAyOTNcbm1hcFs0NzRdID0gMjkzXG5tYXBbNDc2XSA9IDI5MVxubWFwWzQ3OF0gPSAyOTBcbm1hcFs0NzldID0gMjg4XG5tYXBbNDgxXSA9IDI4NlxubWFwWzQ4M10gPSAyODVcbm1hcFs0ODRdID0gMjgzXG5tYXBbNDg2XSA9IDI4MVxubWFwWzQ4N10gPSAyODBcbm1hcFs0OTFdID0gMjgwXG5tYXBbNDkyXSA9IDI3OFxubWFwWzQ5NF0gPSAyNzZcbm1hcFs0OTZdID0gMjc1XG5tYXBbNDk3XSA9IDI3M1xubWFwWzQ5OV0gPSAyNzJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzQ5OV0gPSAyNzJcbm1hcFs1MDJdID0gMjcyXG5tYXBbNTA0XSA9IDI3MFxubWFwWzUwNV0gPSAyNjhcbm1hcFs1MDddID0gMjY3XG5tYXBbNTA5XSA9IDI2NVxubWFwWzUxMF0gPSAyNjNcbm1hcFs1MTRdID0gMjYyXG5tYXBbNTE1XSA9IDI2MFxubWFwWzUxN10gPSAyNThcbm1hcFs1MTldID0gMjU3XG5tYXBbNTIwXSA9IDI1NVxubWFwWzUyMl0gPSAyNTRcbm1hcFs1MjNdID0gMjUyXG5tYXBbNTI1XSA9IDI1MFxubWFwWzUyN10gPSAyNDdcbm1hcFs1MjhdID0gMjQ1XG5tYXBbNTMwXSA9IDI0NFxubWFwWzUzMl0gPSAyNDJcbm1hcFs1MzNdID0gMjQwXG5tYXBbNTMzXSA9IDIzN1xubWFwWzUzNV0gPSAyMzZcbm1hcFs1MzZdID0gMjM0XG5tYXBbNTM4XSA9IDIzMlxubWFwWzU0MF0gPSAyMzFcbm1hcFs1NDFdID0gMjI5XG5tYXBbNTQzXSA9IDIyNlxubWFwWzU0NV0gPSAyMjRcbm1hcFs1NDZdID0gMjIyXG5tYXBbNTQ4XSA9IDIyMVxubWFwWzU1MF0gPSAyMTlcbm1hcFs1NTFdID0gMjE4XG5tYXBbNTUzXSA9IDIxNlxubWFwWzU1Nl0gPSAyMTZcbm1hcFs1NThdID0gMjE0XG5tYXBbNTU5XSA9IDIxM1xubWFwWzU2MV0gPSAyMTFcbm1hcFs1NjRdID0gMjExXG5tYXBbNTY2XSA9IDIwOVxubWFwWzU2OF0gPSAyMDhcbm1hcFs1NzFdID0gMjA4XG5tYXBbNTcyXSA9IDIwNlxubWFwWzU3NF0gPSAyMDRcbm1hcFs1NzZdID0gMjAzXG5tYXBbNTc5XSA9IDIwM1xubWFwWzU4MV0gPSAyMDFcbm1hcFs1ODJdID0gMjAwXG5tYXBbNTg0XSA9IDE5OFxubWFwWzU4Nl0gPSAxOTZcbm1hcFs1ODddID0gMTk1XG5tYXBbNTkwXSA9IDE5NVxubWFwWzU5Ml0gPSAxOTNcbm1hcFs1OTVdID0gMTkzXG5tYXBbNTk3XSA9IDE5MVxubWFwWzYwMF0gPSAxOTFcbm1hcFs2MDJdID0gMTkwXG5tYXBbNjA0XSA9IDE4OFxubWFwWzYwN10gPSAxODhcbm1hcFs2MDhdID0gMTg2XG5tYXBbNjEwXSA9IDE4NVxubWFwWzYxM10gPSAxODVcbm1hcFs2MTVdID0gMTgzXG5tYXBbNjE3XSA9IDE4MlxubWFwWzYxOF0gPSAxODBcbm1hcFs2MjJdID0gMTc4XG5tYXBbNjIzXSA9IDE3N1xubWFwWzYyNl0gPSAxNzdcbm1hcFs2MjhdID0gMTc1XG5tYXBbNjMwXSA9IDE3M1xubWFwWzYzMV0gPSAxNzJcbm1hcFs2MzVdID0gMTcyXG5tYXBbNjM2XSA9IDE3MFxubWFwWzYzOF0gPSAxNjhcbm1hcFs2NDBdID0gMTY3XG5tYXBbNjQzXSA9IDE2N1xubWFwWzY0NF0gPSAxNjVcbm1hcFs2NDhdID0gMTY0XG5tYXBbNjUxXSA9IDE2NFxubWFwWzY1M10gPSAxNjJcbm1hcFs2NTZdID0gMTYyXG5tYXBbNjU4XSA9IDE2MFxubWFwWzY2MV0gPSAxNjBcbm1hcFs2NjJdID0gMTU5XG5tYXBbNjY2XSA9IDE1OVxubWFwWzY2N10gPSAxNTdcbm1hcFs2NzFdID0gMTU3XG5tYXBbNjcyXSA9IDE1NVxubWFwWzY3Nl0gPSAxNTVcbm1hcFs2NzldID0gMTU1XG5tYXBbNjgwXSA9IDE1NFxubWFwWzY4NF0gPSAxNTRcbm1hcFs2ODddID0gMTU0XG5tYXBbNjkwXSA9IDE1NFxubWFwWzY5NF0gPSAxNTRcbm1hcFs2OTddID0gMTU0XG5tYXBbNzAwXSA9IDE1NFxubWFwWzcwM10gPSAxNTRcbm1hcFs3MDddID0gMTU0XG5tYXBbNzEwXSA9IDE1NFxubWFwWzcxM10gPSAxNTRcbm1hcFs3MTZdID0gMTU0XG5tYXBbNzIwXSA9IDE1NFxubWFwWzcyM10gPSAxNTRcbm1hcFs3MjZdID0gMTU0XG5tYXBbNzMwXSA9IDE1NFxubWFwWzczM10gPSAxNTRcbm1hcFs3MzZdID0gMTU1XG5tYXBbNzM5XSA9IDE1NVxubWFwWzc0M10gPSAxNTVcbm1hcFs3NDZdID0gMTU1XG5tYXBbNzQ5XSA9IDE1NVxubWFwWzc1MV0gPSAxNTdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbNzUxXSA9IDE1NVxubWFwWzc1NF0gPSAxNTVcbm1hcFs3NTZdID0gMTU3XG5tYXBbNzU5XSA9IDE1N1xubWFwWzc2MV0gPSAxNTlcbm1hcFs3NjRdID0gMTU5XG5tYXBbNzY1XSA9IDE2MFxubWFwWzc2N10gPSAxNjJcbm1hcFs3NzBdID0gMTYyXG5tYXBbNzcyXSA9IDE2NFxubWFwWzc3NV0gPSAxNjRcbm1hcFs3NzddID0gMTY1XG5tYXBbNzgwXSA9IDE2N1xubWFwWzc4M10gPSAxNjdcbm1hcFs3ODVdID0gMTY4XG5tYXBbNzg4XSA9IDE2OFxubWFwWzc5MF0gPSAxNzBcbm1hcFs3OTNdID0gMTcwXG5tYXBbNzk1XSA9IDE3MlxubWFwWzc5N10gPSAxNzNcbm1hcFs4MDBdID0gMTczXG5tYXBbODAxXSA9IDE3NVxubWFwWzgwNV0gPSAxNzVcbm1hcFs4MDZdID0gMTc3XG5tYXBbODA4XSA9IDE3OFxubWFwWzgxMV0gPSAxNzhcbm1hcFs4MTNdID0gMTgwXG5tYXBbODE1XSA9IDE4MlxubWFwWzgxOF0gPSAxODJcbm1hcFs4MTldID0gMTgzXG5tYXBbODIxXSA9IDE4NVxubWFwWzgyM10gPSAxODZcbm1hcFs4MjZdID0gMTg2XG5tYXBbODI4XSA9IDE4OFxubWFwWzgyOV0gPSAxOTBcbm1hcFs4MzNdID0gMTkxXG5tYXBbODM0XSA9IDE5M1xubWFwWzgzN10gPSAxOTNcbm1hcFs4MzldID0gMTk1XG5tYXBbODQxXSA9IDE5NlxubWFwWzg0Ml0gPSAxOThcbm1hcFs4NDRdID0gMjAwXG5tYXBbODQ2XSA9IDIwMVxubWFwWzg0N10gPSAyMDNcbm1hcFs4NDldID0gMjA0XG5tYXBbODUxXSA9IDIwNlxubWFwWzg1Ml0gPSAyMDhcbm1hcFs4NTRdID0gMjA5XG5tYXBbODU3XSA9IDIxMVxubWFwWzg1OV0gPSAyMTNcbm1hcFs4NjBdID0gMjE0XG5tYXBbODY0XSA9IDIxNFxubWFwWzg2NV0gPSAyMTZcbm1hcFs4NjddID0gMjE4XG5tYXBbODY5XSA9IDIxOVxubWFwWzg3MF0gPSAyMjFcbm1hcFs4NzJdID0gMjIyXG5tYXBbODc1XSA9IDIyMlxubWFwWzg3N10gPSAyMjRcbm1hcFs4NzhdID0gMjI2XG5tYXBbODc4XSA9IDIyOVxubWFwWzg4MF0gPSAyMzFcbm1hcFs4ODJdID0gMjMyXG5tYXBbODgzXSA9IDIzNFxubWFwWzg4NV0gPSAyMzZcbm1hcFs4ODddID0gMjM3XG5tYXBbODg4XSA9IDIzOVxubWFwWzg5MF0gPSAyNDBcbm1hcFs4OTFdID0gMjQyXG5tYXBbODkzXSA9IDI0NFxubWFwWzg5NV0gPSAyNDVcbm1hcFs4OTZdID0gMjQ3XG5tYXBbODk4XSA9IDI0OVxubWFwWzkwMF0gPSAyNTBcbm1hcFs5MDFdID0gMjUyXG5tYXBbOTAzXSA9IDI1NFxubWFwWzkwNV0gPSAyNTVcbm1hcFs5MDhdID0gMjU3XG5tYXBbOTA5XSA9IDI1OFxubWFwWzkxM10gPSAyNjBcbm1hcFs5MTZdID0gMjYwXG5tYXBbOTE4XSA9IDI2MlxubWFwWzkyMV0gPSAyNjJcbm1hcFs5MjRdID0gMjYyXG5tYXBbOTI3XSA9IDI2MlxubWFwWzkzMV0gPSAyNjJcbm1hcFs5MzJdID0gMjYzXG5tYXBbOTM0XSA9IDI2MlxubWFwWzkzN10gPSAyNjJcbm1hcFs5NDFdID0gMjYyXG5tYXBbOTQ0XSA9IDI2MlxubWFwWzk0N10gPSAyNjBcbm1hcFs5NTBdID0gMjYwXG5tYXBbOTU0XSA9IDI1OFxubWFwWzk1N10gPSAyNTdcbm1hcFs5NjBdID0gMjU1XG5tYXBbOTYzXSA9IDI1NFxubWFwWzk2N10gPSAyNTJcbm1hcFs5NzBdID0gMjUyXG5tYXBbOTcyXSA9IDI1MFxubWFwWzk3M10gPSAyNDlcbm1hcFs5NzZdID0gMjQ5XG5tYXBbOTgwXSA9IDI0OVxubWFwWzk4MV0gPSAyNDdcbm1hcFs5ODVdID0gMjQ3XG5tYXBbOTg2XSA9IDI0NVxubWFwWzk4OF0gPSAyNDRcbm1hcFs5OTFdID0gMjQ0XG5tYXBbOTkzXSA9IDI0MlxubWFwWzk5NF0gPSAyNDBcbm1hcFs5OThdID0gMjQwXG5tYXBbOTk5XSA9IDIzOVxubWFwWzEwMDFdID0gMjM3XG5tYXBbMTAwNF0gPSAyMzZcbm1hcFsxMDA2XSA9IDIzNFxubWFwWzEwMDldID0gMjMyXG5tYXBbMTAxMV0gPSAyMzFcbm1hcFsxMDEyXSA9IDIyOVxubWFwWzEwMTRdID0gMjI3XG5tYXBbMTAxN10gPSAyMjZcbm1hcFsxMDE5XSA9IDIyNFxubWFwWzEwMjFdID0gMjIyXG5tYXBbMTAyNF0gPSAyMjFcbm1hcFsxMDI2XSA9IDIxOVxubWFwWzEwMjldID0gMjE5XG5tYXBbMTAzMl0gPSAyMjFcbm1hcFsxMDM1XSA9IDIyMlxubWFwWzEwMzldID0gMjIyXG5tYXBbMTA0MF0gPSAyMjRcbm1hcFsxMDQyXSA9IDIyNlxubWFwWzEwNDVdID0gMjI2XG5tYXBbMTA0N10gPSAyMjdcbm1hcFsxMDQ4XSA9IDIyOVxubWFwWzEwNTJdID0gMjI5XG5tYXBbMTA1M10gPSAyMzFcbm1hcFsxMDU1XSA9IDIzMlxubWFwWzEwNThdID0gMjM0XG5tYXBbMTA2MF0gPSAyMzZcbm1hcFsxMDYyXSA9IDIzN1xubWFwWzEwNjVdID0gMjM5XG5tYXBbMTA2Nl0gPSAyNDBcbm1hcFsxMDY4XSA9IDI0MlxubWFwWzEwNzBdID0gMjQ0XG5tYXBbMTA3MV0gPSAyNDVcbm1hcFsxMDczXSA9IDI0N1xubWFwWzEwNzVdID0gMjQ5XG5tYXBbMTA3Nl0gPSAyNTBcbm1hcFsxMDc4XSA9IDI1MlxubWFwWzEwODBdID0gMjU0XG5tYXBbMTA4MV0gPSAyNTVcbm1hcFsxMDg0XSA9IDI1NVxubWFwWzEwODhdID0gMjU1XG5tYXBbMTA5MV0gPSAyNTVcbm1hcFsxMDk0XSA9IDI1NVxubWFwWzEwOTZdID0gMjU3XG5tYXBbMTA5OV0gPSAyNTdcbm1hcFsxMTAyXSA9IDI1N1xubWFwWzExMDZdID0gMjU3XG5tYXBbMTEwOV0gPSAyNThcbm1hcFsxMTEyXSA9IDI1N1xubWFwWzExMTZdID0gMjU3XG5tYXBbMTExN10gPSAyNThcbm1hcFsxMTIwXSA9IDI1OFxubWFwWzExMjRdID0gMjU4XG5tYXBbMTEyN10gPSAyNThcbm1hcFsxMTI5XSA9IDI2MFxubWFwWzExMzJdID0gMjYwXG5tYXBbMTEzNV0gPSAyNjBcbm1hcFsxMTM3XSA9IDI2MlxubWFwWzExNDBdID0gMjYyXG5tYXBbMTE0M10gPSAyNjNcbm1hcFsxMTQ3XSA9IDI2M1xubWFwWzExNTBdID0gMjYzXG5tYXBbMTE1M10gPSAyNjNcbm1hcFsxMTU2XSA9IDI2M1xubWFwWzExNjBdID0gMjY1XG5tYXBbMTE2M10gPSAyNjVcbm1hcFsxMTY2XSA9IDI2NVxubWFwWzExNjldID0gMjY1XG5tYXBbMTE3M10gPSAyNjVcbm1hcFsxMTc2XSA9IDI2NVxubWFwWzExNzhdID0gMjY3XG5tYXBbMTE4MV0gPSAyNjdcbm1hcFsxMTg0XSA9IDI2N1xubWFwWzExODddID0gMjY3XG5tYXBbMTE5MV0gPSAyNjdcbm1hcFsxMTkyXSA9IDI2OFxubWFwWzExOTZdID0gMjY4XG5tYXBbMTE5OV0gPSAyNjhcbm1hcFsxMjAyXSA9IDI2OFxubWFwWzEyMDRdID0gMjcwXG5tYXBbMTIwN10gPSAyNzBcbm1hcFsxMjEwXSA9IDI3MFxubWFwWzEyMTRdID0gMjcwXG5tYXBbMTIxNV0gPSAyNzJcbm1hcFsxMjE5XSA9IDI3MlxubWFwWzEyMjJdID0gMjcyXG5tYXBbMTIyNV0gPSAyNzJcbm1hcFsxMjI3XSA9IDI3M1xubWFwWzEyMzBdID0gMjczXG5tYXBbMTIzM10gPSAyNzNcbm1hcFsxMjM3XSA9IDI3M1xubWFwWzEyNDBdID0gMjczXG5tYXBbMTI0MV0gPSAyNzVcbm1hcFsxMjQ1XSA9IDI3NVxubWFwWzEyNDhdID0gMjc1XG5tYXBbMTI1MV0gPSAyNzVcbm1hcFsxMjU1XSA9IDI3NVxubWFwWzEyNThdID0gMjc1XG5tYXBbMTI1OV0gPSAyNzZcbm1hcFsxMjYzXSA9IDI3NlxubWFwWzEyNjZdID0gMjc2XG5tYXBbMTI2OV0gPSAyNzZcbm1hcFsxMjczXSA9IDI3NlxubWFwWzEyNzZdID0gMjc2XG5tYXBbMTI3N10gPSAyNzhcbm1hcFsxMjgxXSA9IDI3OFxubWFwWzEyODRdID0gMjc4XG5tYXBbMTI4N10gPSAyNzhcbm1hcFsxMjg5XSA9IDI4MFxubWFwWzEyOTJdID0gMjgwXG5tYXBbMTI5NV0gPSAyODBcbm1hcFsxMjk3XSA9IDI4MVxubWFwWzEzMDBdID0gMjgxXG5tYXBbMTMwMl0gPSAyODNcbm1hcFsxMzA1XSA9IDI4NVxubWFwWzEzMDldID0gMjg2XG5tYXBbMTMxMF0gPSAyODhcbm1hcFsxMzEzXSA9IDI4OFxubWFwWzEzMTVdID0gMjkwXG5tYXBbMTMxN10gPSAyOTFcbm1hcFsxMzIwXSA9IDI5MVxubWFwWzEzMjJdID0gMjkzXG5tYXBbMTMyM10gPSAyOTRcbm1hcFsxMzI1XSA9IDI5NlxubWFwWzEzMjhdID0gMjk2XG5tYXBbMTMzMF0gPSAyOThcbm1hcFsxMzMxXSA9IDI5OVxubWFwWzEzMzNdID0gMzAxXG5tYXBbMTMzNl0gPSAzMDNcbm1hcFsxMzM4XSA9IDMwNFxubWFwWzEzNDFdID0gMzA0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbMTM0MV0gPSAzMDRcbm1hcFsxMzQ0XSA9IDMwNFxubWFwWzEzNDZdID0gMzA2XG5tYXBbMTM0OV0gPSAzMDZcbm1hcFsxMzUyXSA9IDMwNlxubWFwWzEzNTRdID0gMzA4XG5tYXBbMTM1N10gPSAzMDhcbm1hcFsxMzYwXSA9IDMwOFxubWFwWzEzNjJdID0gMzA5XG5tYXBbMTM2NV0gPSAzMDlcbm1hcFsxMzY5XSA9IDMwOVxubWFwWzEzNzBdID0gMzExXG5tYXBbMTM3M10gPSAzMTFcbm1hcFsxMzc3XSA9IDMxMVxubWFwWzEzNzhdID0gMzEyXG5tYXBbMTM4Ml0gPSAzMTJcbm1hcFsxMzg1XSA9IDMxMlxubWFwWzEzODddID0gMzE0XG5tYXBbMTM5MF0gPSAzMTRcbm1hcFsxMzkzXSA9IDMxNFxubWFwWzEzOTVdID0gMzE2XG5tYXBbMTM5OF0gPSAzMTZcbm1hcFsxNDAxXSA9IDMxNlxubWFwWzE0MDVdID0gMzE2XG5tYXBbMTQwOF0gPSAzMTZcbm1hcFsxNDA5XSA9IDMxN1xubWFwWzE0MTNdID0gMzE3XG5tYXBbMTQxNl0gPSAzMTdcbm1hcFsxNDE5XSA9IDMxN1xubWFwWzE0MjNdID0gMzE3XG5tYXBbMTQyNF0gPSAzMTlcbm1hcFsxNDI3XSA9IDMxOVxubWFwWzE0MzFdID0gMzE5XG5tYXBbMTQzMl0gPSAzMjFcbm1hcFsxNDM2XSA9IDMyMVxubWFwWzE0MzldID0gMzIxXG5tYXBbMTQ0MV0gPSAzMjJcbm1hcFsxNDQ0XSA9IDMyMlxubWFwWzE0NDddID0gMzIyXG5tYXBbMTQ0OV0gPSAzMjRcbm1hcFsxNDUyXSA9IDMyNFxubWFwWzE0NTVdID0gMzI0XG5tYXBbMTQ1N10gPSAzMjZcbm1hcFsxNDYwXSA9IDMyNlxubWFwWzE0NjNdID0gMzI2XG5tYXBbMTQ2N10gPSAzMjZcbm1hcFsxNDcwXSA9IDMyNlxubWFwWzE0NzNdID0gMzI2XG5tYXBbMTQ3Nl0gPSAzMjZcbm1hcFsxNDgwXSA9IDMyNlxubWFwWzE0ODNdID0gMzI2XG5tYXBbMTQ4Nl0gPSAzMjZcbm1hcFsxNDkwXSA9IDMyNlxubWFwWzE0OTNdID0gMzI2XG5tYXBbMTQ5Nl0gPSAzMjZcbm1hcFsxNDk5XSA9IDMyNlxubWFwWzE1MDNdID0gMzI2XG5tYXBbMTUwNl0gPSAzMjZcbm1hcFsxNTA4XSA9IDMyNFxubWFwWzE1MTFdID0gMzI0XG5tYXBbMTUxNF0gPSAzMjRcbm1hcFsxNTE3XSA9IDMyNFxubWFwWzE1MTldID0gMzIyXG5tYXBbMTUyMl0gPSAzMjJcbm1hcFsxNTI2XSA9IDMyMlxubWFwWzE1MjddID0gMzIxXG5tYXBbMTUyN10gPSAzMjFcbm1hcFsxNTMwXSA9IDMyMVxubWFwWzE1MzRdID0gMzIxXG5tYXBbMTUzN10gPSAzMjFcbm1hcFsxNTQwXSA9IDMyMVxubWFwWzE1NDRdID0gMzIxXG5tYXBbMTU0N10gPSAzMjFcbm1hcFsxNTUwXSA9IDMyMVxubWFwWzE1NTJdID0gMzE5XG5tYXBbMTU1NV0gPSAzMTlcbm1hcFsxNTU3XSA9IDMxN1xubWFwWzE1NjBdID0gMzE3XG5tYXBbMTU2Ml0gPSAzMTZcbm1hcFsxNTY1XSA9IDMxNlxubWFwWzE1NjZdID0gMzE0XG5tYXBbMTU3MF0gPSAzMTRcbm1hcFsxNTczXSA9IDMxNFxubWFwWzE1NzVdID0gMzEyXG5tYXBbMTU3OF0gPSAzMTJcbm1hcFsxNTgxXSA9IDMxMVxubWFwWzE1ODRdID0gMzExXG5tYXBbMTU4OF0gPSAzMDlcbm1hcFsxNTkxXSA9IDMwOVxubWFwWzE1OTRdID0gMzA5XG5tYXBbMTU5Nl0gPSAzMDhcbm1hcFsxNTk5XSA9IDMwOFxubWFwWzE2MDFdID0gMzA4XG5tYXBbMTYwMV0gPSAzMDhcbm1hcFsxNjA0XSA9IDMwOFxubWFwWzE2MDZdID0gMzA2XG5tYXBbMTYwOV0gPSAzMDZcbm1hcFsxNjEyXSA9IDMwNFxubWFwWzE2MTZdID0gMzA0XG5tYXBbMTYxN10gPSAzMDNcbm1hcFsxNjIwXSA9IDMwM1xubWFwWzE2MjRdID0gMzAzXG5tYXBbMTYyN10gPSAzMDNcbm1hcFsxNjI5XSA9IDMwMVxubWFwWzE2MzJdID0gMzAxXG5tYXBbMTYzNV0gPSAzMDFcbm1hcFsxNjM3XSA9IDI5OVxubWFwWzE2NDBdID0gMjk5XG5tYXBbMTY0M10gPSAyOTlcbm1hcFsxNjQ3XSA9IDI5OVxubWFwWzE2NTBdID0gMjk5XG5tYXBbMTY1Ml0gPSAyOThcbm1hcFsxNjU1XSA9IDI5OFxubWFwWzE2NThdID0gMjk4XG5tYXBbMTY2MV0gPSAyOThcbm1hcFsxNjY1XSA9IDI5OFxubWFwWzE2NjZdID0gMjk2XG5tYXBbMTY2OV0gPSAyOTZcbm1hcFsxNjczXSA9IDI5NlxubWFwWzE2NzRdID0gMjk0XG5tYXBbMTY3Nl0gPSAyOTRcbm1hcFsxNjc5XSA9IDI5NFxubWFwWzE2ODNdID0gMjk0XG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg3XSA9IDI5M1xubWFwWzE2OTFdID0gMjkzXG5tYXBbMTY5NF0gPSAyOTNcbm1hcFsxNjk3XSA9IDI5M1xubWFwWzE3MDFdID0gMjkzXG5tYXBbMTcwNV0gPSAyOTFcbm1hcFsxNzA5XSA9IDI5MVxubWFwWzE3MTJdID0gMjkxXG5tYXBbMTcxNV0gPSAyOTFcbm1hcFsxNzE5XSA9IDI5MVxubWFwWzE3MjJdID0gMjkxXG5tYXBbMTcyNV0gPSAyOTFcbm1hcFsxNzI4XSA9IDI5MVxubWFwWzE3MzJdID0gMjkxXG5tYXBbMTczNV0gPSAyOTFcbm1hcFsxNzM4XSA9IDI5MVxubWFwWzE3NDFdID0gMjkxXG5tYXBbMTc0NV0gPSAyOTFcbm1hcFsxNzQ2XSA9IDI5MFxubWFwWzE3NTBdID0gMjkwXG5tYXBbMTc1M10gPSAyOTBcbm1hcFsxNzU2XSA9IDI5MFxubWFwWzE3NTldID0gMjkwXG5tYXBbMTc2M10gPSAyOTBcbm1hcFsxNzY2XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NzNdID0gMjkwXG5tYXBbMTc3Nl0gPSAyOTBcbm1hcFsxNzc5XSA9IDI5MFxubWFwWzE3ODJdID0gMjkwXG5tYXBbMTc4Nl0gPSAyOTBcbm1hcFsxNzg5XSA9IDI5MFxubWFwWzE3OTJdID0gMjkwXG5tYXBbMTc5NV0gPSAyOTBcbm1hcFsxNzk5XSA9IDI5MFxubWFwWzE4MDJdID0gMjkwXG5tYXBbMTgwNV0gPSAyOTBcbm1hcFsxODA5XSA9IDI5MFxubWFwWzE4MTJdID0gMjkwXG5tYXBbMTgxM10gPSAyODhcbm1hcFsxODE3XSA9IDI4OFxubWFwWzE4MjBdID0gMjg4XG5tYXBbMTgyM10gPSAyODhcbm1hcFsxODI3XSA9IDI4OFxubWFwWzE4MzBdID0gMjg4XG5tYXBbMTgzM10gPSAyODhcbm1hcFsxODM2XSA9IDI5MFxubWFwWzE4NDBdID0gMjkwXG5tYXBbMTg0MV0gPSAyOTBcbm1hcFsxODQ1XSA9IDI5MFxubWFwWzE4NDhdID0gMjkwXG5tYXBbMTg1MV0gPSAyOTBcbm1hcFsxODUzXSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTldID0gMjkxXG5tYXBbMTg2M10gPSAyOTFcbm1hcFsxODY2XSA9IDI5MVxubWFwWzE4NjddID0gMjkxXG5tYXBbMTg2OV0gPSAyOTNcbm1hcFsxODcyXSA9IDI5M1xubWFwWzE4NzZdID0gMjkzXG5tYXBbMTg3Nl0gPSAyOTNcbm1hcFsxODc3XSA9IDI5M1xubWFwWzE4ODBdID0gMjkzXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj01MTI7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj03Njg7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cIm5vYm9yZGVyXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJkaWFsb2cvUXVlc3Rpb25EaWFsb2cuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49dHJ1ZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFNjcmVlbjFCYWNrR3JvdW5kIGZyb20gXCIuL1NjcmVlbjFCYWNrR3JvdW5kXCI7XHJcbmltcG9ydCBGb290YmFsbCBmcm9tIFwiLi9Gb290YmFsbFwiO1xyXG5pbXBvcnQgeyBnZXRGb290YmFsbFggfSBmcm9tIFwiLi9Gb290YmFsbFBhdGhcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25EaWFsb2cgfSBmcm9tIFwiLi9RdWVzdGlvbkRpYWxvZ1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRhdGEsIFF1ZXN0aW9uSXRlbSwgUXVlc3Rpb25TaG93WSB9IGZyb20gXCIuL1F1ZXN0aW9uRGF0YVwiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGZvb3RiYWxsOiBGb290YmFsbFxyXG5cdHByaXZhdGUgc2NyZWVuMUJhY2tHcm91bmQ6IFNjcmVlbjFCYWNrR3JvdW5kXHJcblx0cHJpdmF0ZSBkcmFnUmVnaW9uOiBMYXlhLlJlY3RhbmdsZVxyXG5cclxuXHRwcml2YXRlIHNoYWtlQ291bnQ6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pID0gdHJ1ZVxyXG5cclxuXHRwcml2YXRlIGNvbnNvbGU6IExheWEuVGV4dDtcclxuXHJcblx0cHJpdmF0ZSBoYXNTaG93UXVlc3Rpb25JbmRleCA9IDAgLy8g5bey57uP5pi+56S65Yiw55qE6Zeu6aKYaWRcclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbkluZGV4TGlzdCA9IG5ldyBBcnJheTxudW1iZXI+KClcdC8vIOW3sue7j+aYvuekuueahOmXrumimGluZGV45YiX6KGoXHJcblx0cHJpdmF0ZSBzaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvLyB3YXJuaW5nOiDnrKzkuInkuKrlj4LmlbDkuI3opoHkvb/nlKhXZWJHTO+8jOW9k+iDjOaZr+WkqumVv+eahOaXtuWAmeWcqGlQaG9uZeS4iuS8muaciemdnuW4uOS4pemHjeeahOmUr+m9v1xyXG5cdFx0TGF5YS5pbml0KENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuc3RhdGVIZWlnaHQsIExheWFbXCJcIl0pO1xyXG5cdFxyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gQ29uc3RhbnRzLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IENvbnN0YW50cy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHRcclxuXHRcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdFVJQ29uZmlnLnBvcHVwQmdDb2xvciA9IFwiIzAwMDAwMFwiXHJcblx0XHRVSUNvbmZpZy5wb3B1cEJnQWxwaGEgPSAwLjhcclxuXHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIndoaXRlXCJcclxuXHJcblx0XHRjb25zdCBhc3NldHM6IEFycmF5PGFueT4gPSBbXVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQ1LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zcG9ydHMuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvY29tcC5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSlcclxuXHJcblx0XHQvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpXHJcblx0XHRMYXlhLmxvYWRlci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uRXJyb3IpXHJcblxyXG5cdFx0Ly8g6ZyA6KaB5pi+56S66LCD6K+V5L+h5oGv5Y+v5Lul5omT5byA6L+Z6YeMXHJcblx0XHR0aGlzLnNob3dDb25zb2xlVGV4dChmYWxzZSk7XHJcblx0XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcblxyXG5cdG9uQXNzZXRzTG9hZGluZyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pjogXCIgKyBwcm9ncmVzcyk7XHJcblx0XHRcclxuXHRcdC8vIFRPRE86IOaYvuekuui/m+W6puadoVxyXG5cdH1cclxuXHJcblx0b25Bc3NldHNMb2FkZWQoKTogdm9pZCB7XHJcblx0XHRcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfotYTmupDliqDovb3lrozmiJDjgIInO1xyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZCA9IG5ldyBTY3JlZW4xQmFja0dyb3VuZCgpXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQpXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9uKExheWEuRXZlbnQuRFJBR19NT1ZFLCB0aGlzLCB0aGlzLm9uQmFja2dyb3VuZE1vdmUpXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9uKExheWEuRXZlbnQuRFJBR19TVEFSVCwgdGhpcywgdGhpcy5vbkJhY2tncm91bmRTdGFydE1vdmUpXHJcblxyXG5cdFx0dGhpcy5mb290YmFsbCA9IG5ldyBGb290YmFsbCgpXHJcblx0XHR0aGlzLmZvb3RiYWxsLnBvcygzMjcsIDIzMylcdC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmZvb3RiYWxsKVxyXG5cdFx0Y29uc29sZS5sb2coXCJvbkFzc2V0c0xvYWRlZFwiLCBMYXlhLnN0YWdlLmhlaWdodCwgTGF5YS5Ccm93c2VyLmhlaWdodCwgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodClcclxuXHJcblx0XHQvLyDorqHnrpfog4zmma/lj6/mi5bliqjljLrln59cclxuXHRcdGNvbnN0IG1vYWJsZUhlaWdodCA9IExheWEuc3RhZ2UuaGVpZ2h0IC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodFxyXG5cdFx0dGhpcy5kcmFnUmVnaW9uID0gbmV3IExheWEuUmVjdGFuZ2xlKDAsIC1tb2FibGVIZWlnaHQsIDAsIG1vYWJsZUhlaWdodClcclxuXHJcblx0XHQvLyBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSwgdGhpcywgdGhpcy5vbk1vdXNlTW92ZSlcclxuXHRcdExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uU3RhcnREcmFnKVxyXG5cdH1cclxuXHJcblx0b25FcnJvcihlcnI6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3lpLHotKU6IFwiICsgZXJyKTtcclxuXHR9XHJcblxyXG5cdG9uTW91c2VNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8g5aeL57uI5L+d5oyB5Li76KeS5ZKM6byg5qCH5L2N572u5LiA6Ie0XHJcblx0XHQvLyB0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uTW91c2VNb3ZlXCIsIExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHRcdGNvbnNvbGUubG9nKGBtYXBbJHtMYXlhLnN0YWdlLm1vdXNlWX1dID0gJHtMYXlhLnN0YWdlLm1vdXNlWH1gKVxyXG5cdFx0dGhpcy5mb290YmFsbC5wb3MoTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdH1cclxuXHJcblx0b25TdGFydERyYWcoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uU3RhcnREcmFnXCIsIExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHRcdGlmICh0aGlzLnNob3dpbmdEaWFsb2cpIHtcclxuXHRcdFx0cmV0dXJuIFxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdGFydERyYWcodGhpcy5kcmFnUmVnaW9uLCBmYWxzZSwgMClcclxuXHR9XHJcblxyXG5cdG9uQmFja2dyb3VuZFN0YXJ0TW92ZSgpOiB2b2lkIHtcclxuXHRcdC8vIFRPRE86IOi/memHjOWQjOagt+imgeWBmuS4gOS6m+iDveWQpuaLluWKqOeahOWIpOaWre+8jG9uQmFja2dyb3VuZE1vdmXpg6jliIbpgLvovpHkuZ/pgILlupTkuo7mraTmlrnms5VcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHRvbkJhY2tncm91bmRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbkJhY2tncm91bmRNb3ZlXCIsIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueCwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55LCB0aGlzLmZvb3RiYWxsLngsIHRoaXMuZm9vdGJhbGwueSlcclxuXHJcblx0XHRjb25zdCBuZWVkU2hvd1F1ZXN0aW9uID0gdGhpcy5zaG93UXVlc3Rpb25EaWFsb2dJZk5lZWQodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55KVxyXG5cdFx0aWYgKG5lZWRTaG93UXVlc3Rpb24pIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdHJldHVybiBcclxuXHRcdH1cclxuXHRcdFxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMDApIHtcdC8vIOS4jee7meaLluWKqO+8jFxi5pGH5LiA5pGH5pi+56S65bCE6Zeo5Yqo55S7XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyBUT0RPOiDmmK/lkKbmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHJcblx0XHRcdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblxyXG5cdFx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZSlcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHR9XHJcblx0XHJcblx0XHRcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgwMCkgeyAvLyDpmpDol4/otrPnkINcclxuXHRcdFx0dGhpcy5mb290YmFsbC5oaWRlKClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZm9vdGJhbGwuc2hvdygpXHJcblxyXG5cdFx0XHQvLyDnp7vliqjotrPnkIPkvY3nva5cclxuXHRcdFx0Ly8gY29uc3QgeSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzJcclxuXHRcdFx0bGV0IHk6bnVtYmVyID0gMDtcclxuXHRcdFx0aWYoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgMTAzMil7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgODUwKXtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDEzMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZigoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA3MzApe1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDU4MCl7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxODA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgNDM1KXtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZigoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPiAxMDMyKXtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB4ID0gZ2V0Rm9vdGJhbGxYKHkpXHJcblx0XHRcdGlmICh4ID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnkgPSB5XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wb3MoeCwgeSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g5Yik5pat6Laz55CD5piv5ZCm6ZyA6KaB5peL6L2sXHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU4NSkge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwuc3RvcFJvdGF0ZSgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wbGF5Um90YXRlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvmN1cCBhbmlcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3VwXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY3VwXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImN1cFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+5Y+j5ZOo5Yqo55S7XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0b25EZXZpY2VTaGFrZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hha2VDb3VudCArK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudCArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50ID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG90XCIpXHJcblx0XHRcdC8vIFRPRE86IOi/memHjOmcgOimgeetieWKqOeUu+aSreaUvuWujOaJjeiuvue9rnRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvblF1ZXN0aW9uRGlhbG9nQ2xvc2UoaW5kZXg6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uUXVlc3Rpb25EaWFsb2dDbG9zZVwiLCB0eXBlLCBpbmRleClcclxuXHRcdGNvbnN0IHJpZ2h0ID0gKHR5cGUgPT09IFwidHJ1ZVwiKVxyXG5cdFx0dGhpcy5oYXNTaG93UXVlc3Rpb25JbmRleCA9IHBhcnNlSW50KGluZGV4KVxyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHR9XHJcblxyXG5cdC8vIOWIpOaWreaYr+WQpumcgOimgeaYvuekuumXrumimFxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uRGlhbG9nSWZOZWVkKHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgb2Zmc2V0ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCBcclxuXHRcdGNvbnN0IGhhc1Nob3dMZW5ndGggPSB0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5sZW5ndGhcclxuXHRcdGlmIChsZW5ndGggPj0gMTApIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRpZiAoeSA+IG9mZnNldC1RdWVzdGlvblNob3dZW2hhc1Nob3dMZW5ndGhdKXtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRjb25zdCBpc09kZCA9ICEoaGFzU2hvd0xlbmd0aCUyKVxyXG5cdFx0aWYgKGlzT2RkKSB7IC8vIOmaj+aculxyXG5cdFx0XHRjb25zdCByYW5kb20gPSB0aGlzLmdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKVxyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihyYW5kb20pXHJcblx0XHR9IGVsc2Uge1x0Ly8g5Y+W5YmNNeS9jVxyXG5cdFx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoaGFzU2hvd0xlbmd0aC8yKVxyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihpbmRleClcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heCA9IFF1ZXN0aW9uRGF0YS5sZW5ndGggLSA1XHJcblx0XHRjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpKm1heCkpICsgNVxyXG5cdFx0aWYgKHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0LmluZGV4T2YocmFuZG9tKSA9PSAtMSkge1xyXG5cdFx0XHRyZXR1cm4gcmFuZG9tXHJcblx0XHR9IGVsc2UgeyAvLyDlt7Lnu4/mmL7npLrov4fph43mlrDojrflj5ZcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRpZiAoaW5kZXggPj0gUXVlc3Rpb25EYXRhLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm4gXHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHR0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5wdXNoKGluZGV4KVxyXG5cdFx0Y29uc3QgcXVlc3Rpb25EYXRhID0gUXVlc3Rpb25EYXRhW2luZGV4XVxyXG5cdFx0Y29uc3QgcXVlc3Rpb25EaWFsb2cgPSBuZXcgUXVlc3Rpb25EaWFsb2cocXVlc3Rpb25EYXRhKVxyXG5cdFx0cXVlc3Rpb25EaWFsb2cuY2xvc2VIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUXVlc3Rpb25EaWFsb2dDbG9zZSwgW2luZGV4XSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0NvbnNvbGVUZXh0KHZpc2libGU6IGJvb2xlYW4pOnZvaWRcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jb25zb2xlID0gbmV3IExheWEuVGV4dCgpO1xyXG5cdFx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuY29uc29sZSk7XHJcblx0XHRcdHRoaXMuY29uc29sZS56T3JkZXIgPSAxMDAwMVxyXG5cdFx0XHR0aGlzLmNvbnNvbGUueSA9ICAxMDtcclxuXHRcdFx0dGhpcy5jb25zb2xlLndpZHRoID0gTGF5YS5zdGFnZS53aWR0aDtcclxuXHRcdFx0dGhpcy5jb25zb2xlLmhlaWdodCA9IDIwMDtcclxuXHRcdFx0dGhpcy5jb25zb2xlLmNvbG9yID0gXCIjRkZGRkZGXCI7XHJcblx0XHRcdHRoaXMuY29uc29sZS5mb250U2l6ZSA9IDIwO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUubGVhZGluZyA9IDEwO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUuYmdDb2xvciA9IFwiIzAwMDAwMFwiXHJcblx0XHRcdHRoaXMuY29uc29sZS52aXNpYmxlID0gdmlzaWJsZVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uSXRlbSB7XG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBhOiBzdHJpbmcsXG4gICAgYjogc3RyaW5nLFxuICAgIGM6IHN0cmluZyxcbiAgICBkOiBzdHJpbmcsXG4gICAgYW5zd2VyOiBcImFcIiB8IFwiYlwiIHwgXCJjXCIgfCBcImRcIixcbiAgICBpZDogbnVtYmVyICAvLyDku4VcYuS+m+WPgueci+aVsOaNruaXtuWPguiAg++8jOS7o+eggeS4reS4jeS9v+eUqFxufVxuXG5leHBvcnQgY29uc3QgUXVlc3Rpb25TaG93WSA9IFtcbiAgICAxMzYzLFxuICAgIDM0MDcsXG4gICAgNDg1NyxcbiAgICA1NjU4LFxuICAgIDY1OTgsXG4gICAgNzg0OCxcbiAgICA4NzcwLFxuICAgIDk5NjUsXG4gICAgMTE1MjQsXG4gICAgMTIzNjVcbl1cbmV4cG9ydCAgY29uc3QgUXVlc3Rpb25EYXRhOiBBcnJheTxRdWVzdGlvbkl0ZW0+ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5Zu96Laz6L+b5LiW55WM5p2v55qE5Li75biF5piv5ZOq5L2NP1wiLFxuICAgICAgICBhOiBcIumHjOearlwiLFxuICAgICAgICBiOiBcIuacseW5v+ayqlwiLFxuICAgICAgICBjOiBcIumrmOa0quazolwiLFxuICAgICAgICBkOiBcIuexs+WNolwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiLFxuICAgICAgICBpZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA25bm05YiY57+U56C05LiW55WM57qq5b2V55qE5oiQ57up5piv5aSa5bCRP1wiLFxuICAgICAgICBhOiBcIjEy56eSOTFcIixcbiAgICAgICAgYjogXCIxMuenkjg4XCIsXG4gICAgICAgIGM6IFwiMTLnp5I4N1wiLFxuICAgICAgICBkOiBcIjEy56eSODZcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIixcbiAgICAgICAgaWQ6IDJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAwOOW5tOWMl+S6rOWlpei/kOS8muiwgeeCueeHg+S6huS4u+eBq+eCrD9cIixcbiAgICAgICAgYTogXCLorrjmtbfls7BcIixcbiAgICAgICAgYjogXCLpgpPkuprokI1cIixcbiAgICAgICAgYzogXCLmnY7lroFcIixcbiAgICAgICAgZDogXCLnhorlgKpcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIixcbiAgICAgICAgaWQ6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAxMuW5tOS8puaVpuWlpei/kOS8mueUt+WtkDQwMOeUseazs+WGoOWGm+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuiMg+W+t+WHr+S8ilwiLFxuICAgICAgICBiOiBcIumDnei/kFwiLFxuICAgICAgICBjOiBcIuactOazsOahk1wiLFxuICAgICAgICBkOiBcIuWtmeadqFwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiLFxuICAgICAgICBpZDogNVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDE25bm05paw5rWqM3gz56+u55CD6buE6YeR6IGU6LWb5oC75Yag5Yab6Zif5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5YyX5aSn6ZifXCIsXG4gICAgICAgIGI6IFwi5bCP6b6Z6b6Z6ZifXCIsXG4gICAgICAgIGM6IFwi6Zy45rCU5oiY6ZifXCIsXG4gICAgICAgIGQ6IFwi5Y2O5L6o5aSn5a2m6ZifXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiA2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIuWMl+S6rOWlpei/kOS8muS4reWbveS7o+ihqOWboueahOaXl+aJi+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuWnmuaYjlwiLFxuICAgICAgICBiOiBcIuWImOe/lFwiLFxuICAgICAgICBjOiBcIueOi+WKseWLpFwiLFxuICAgICAgICBkOiBcIuael+S4uVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiLFxuICAgICAgICBpZDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5Liq55m75LiK5qyn5Yag6LWb5Zy655qE5Lit5Zu955CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi5a2Z56WlXCIsXG4gICAgICAgIGI6IFwi6JGj5pa55Y2TXCIsXG4gICAgICAgIGM6IFwi5p2O6ZOBXCIsXG4gICAgICAgIGQ6IFwi6YOR5pm6XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIHRpdGxlOiBcIumCteS9s+S4gDnlubTlvrflm73nlJ/mtq/mraPlvI/mr5TotZvph4zmgLvlhbHmiZPnkIPlpJrlsJHnkIPvvJ9cIixcbiAgICAgICAgYTogXCIxOFwiLFxuICAgICAgICBiOiBcIjE5XCIsXG4gICAgICAgIGM6IFwiMjlcIixcbiAgICAgICAgZDogXCIzMFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkuKrlnKjmrKfmtLLogZTotZvkuK3ojrflvpfph5HpnbTnmoTnkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLpg5HmmbpcIixcbiAgICAgICAgYjogXCLmnajmmahcIixcbiAgICAgICAgYzogXCLosKLmmZZcIixcbiAgICAgICAgZDogXCLokaPmlrnljZNcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS9jeWcqOeVmea0i+acn+mXtOaLheS7u+eQg+mYn+mYn+mVv+eahOS4reWbveexjeeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIuiMg+W/l+avhVwiLFxuICAgICAgICBiOiBcIumDkeaZulwiLFxuICAgICAgICBjOiBcIuWtmee7p+a1t1wiLFxuICAgICAgICBkOiBcIuadjumTgVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgdGl0bGU6IFwi5aea5piO5ZOq5LiA5bm06YCA5b2577yfXCIsXG4gICAgICAgIGE6IFwiMjAxMFwiLFxuICAgICAgICBiOiBcIjIwMTFcIixcbiAgICAgICAgYzogXCIyMDEyXCIsXG4gICAgICAgIGQ6IFwiMjAxM1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgdGl0bGU6IFwiMjAxOOW5tOS6mui/kOS8muS4reevrueQg+mhueebruS4reWbvemYn+aUtuiOt+S6huWHoOaemumHkeeJjO+8n1wiLFxuICAgICAgICBhOiBcIjFcIixcbiAgICAgICAgYjogXCIyXCIsXG4gICAgICAgIGM6IFwiM1wiLFxuICAgICAgICBkOiBcIjRcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIHRpdGxlOiBcIkNCQeiBlOi1m+WOhuWPsuS4iuesrOS4gOS4quW+l+WIhuegtOS4h+eahOeQg+WRmO+8n1wiLFxuICAgICAgICBhOiBcIuaYk+W7uuiBlFwiLFxuICAgICAgICBiOiBcIuacseiKs+mbqFwiLFxuICAgICAgICBjOiBcIuWImOeCnFwiLFxuICAgICAgICBkOiBcIueOi+ayu+mDhVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNCxcbiAgICAgICAgdGl0bGU6IFwi5ZOq5pSv55CD6Zif5ZyoMDItMDPotZvlraNDQkHlraPlkI7otZvkuK3liJvpgKDkuobpu5E45aWH6L+577yfXCIsXG4gICAgICAgIGE6IFwi6L695a6BXCIsXG4gICAgICAgIGI6IFwi5Zub5bedXCIsXG4gICAgICAgIGM6IFwi5YyX5LqsXCIsXG4gICAgICAgIGQ6IFwi5bGx5LicXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE1LFxuICAgICAgICB0aXRsZTogXCLkuK3lm73otrPnkIPpobbnuqfogZTotZvnlLHnlLJB5Y+Y5pu05Li65Lit6LaF55qE5piv5Zyo5ZOq5LiA5bm077yfXCIsXG4gICAgICAgIGE6IFwiMDJcIixcbiAgICAgICAgYjogXCIwM1wiLFxuICAgICAgICBjOiBcIjA0XCIsXG4gICAgICAgIGQ6IFwiMDVcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICBcbl0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IHsgUXVlc3Rpb25JdGVtIH0gZnJvbSBcIi4vUXVlc3Rpb25EYXRhXCI7XG5cblxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLlF1ZXN0aW9uRGlhbG9nVUkge1xuXG4gICAgcHJpdmF0ZSBxdWVzdGlvbjogUXVlc3Rpb25JdGVtXG4gICAgXG4gICAgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uSXRlbSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMucXVlc3Rpb24gPSBxdWVzdGlvblxuXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNb2RhbCA9IHRydWVcbiAgICAgICAgdGhpcy5wb3MoMCwgMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9wdXAodHJ1ZSlcbiAgICB9ICAgXG4gICAgXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICBjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25cbiAgICAgICAgdGhpcy5xdWVzdGlvbkxhYmVsLnRleHQgPSBxdWVzdGlvbi50aXRsZVxuICAgICAgICB0aGlzLmFuc3dlckFCdG4ubGFiZWwgPSBxdWVzdGlvbi5hXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmJcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLmxhYmVsID0gcXVlc3Rpb24uY1xuICAgICAgICB0aGlzLmFuc3dlckRCdG4ubGFiZWwgPSBxdWVzdGlvbi5kXG5cbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJhXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImJcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiY1wiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJkXCJdKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGlja0Fuc3dlcihhbnN3ZXI6IHN0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uQ2xpY2tBbnN3ZXJcIiwgYW5zd2VyKVxuXG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gKHRoaXMucXVlc3Rpb24uYW5zd2VyID09PSBhbnN3ZXIpXG4gICAgICAgIGNvbnN0IHJlc3VsdEltZyA9IHJpZ2h0ID8gXCJ2aWV3L3JpZ2h0LnBuZ1wiIDogXCJ2aWV3L3dyb25nLnBuZ1wiXG4gICAgICAgIGlmIChhbnN3ZXIgPT09IFwiYVwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QUltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJiXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QkltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRCSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImNcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRDSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdENJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdERJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0REltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g56e76Zmk54K55Ye75LqL5Lu2XG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5vZmZBbGwoKVxuXG4gICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCB0aGlzLm9uQ2xvc2VMYXRlciwgW3JpZ2h0XSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xvc2VMYXRlcihyaWdodDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmNsb3NlKGAke3JpZ2h0fWApXG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbi8qKlxuICog5Zy65pmvMeiDjOaZr1xuICovXG5cbnR5cGUgQW5pTmFtZSA9IFwiY3VwXCIgfCBcIndoaXN0bGVcIiB8IFwic2hvdFwiIHxcIndpblwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbjFCYWNrR3JvdW5kIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIHByaXZhdGUgYmcxOiBMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGN1cEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBzaG90QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwNEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDA4QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMTJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCYWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQmFsbE1hbkFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJvYXJkQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgY2xvY2tBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDb21wdXRlckFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIENyb3dkQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQ3VwQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZHVtYmJlbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBlbGVjdHJpY21hbkFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGVxdWlwbWVudEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEZvb3RiYWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgR29nZ2xlc0FuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEhhdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEhlYXJ0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgbGl1eGlhbmdBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBNZWRhbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHBhZ2UwMlN0YXJ0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2NvcmVib2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNob2VzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2hvdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFN0YWdlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2FsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdhdGVyTGVmdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdhdGVyUmlnaHRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXaGlzdGxlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgd2luQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2luTWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuXG4gICAgcHJpdmF0ZSBiZzI6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzM6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzQ6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzU6IExheWEuU3ByaXRlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iZzEgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMS5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQxKVxuICAgICAgICB0aGlzLmJnMS5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnMSlcblxuICAgICAgICB0aGlzLmJnMiA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmcyLnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQpXG4gICAgICAgIHRoaXMuYmcyLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTIgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQyKVxuICAgICAgICB0aGlzLmJnMi5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzIpXG5cbiAgICAgICAgdGhpcy5iZzMgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMy5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0KVxuICAgICAgICB0aGlzLmJnMy5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMylcbiAgICAgICAgdGhpcy5iZzMuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUzKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmczKVxuXG4gICAgICAgIHRoaXMuYmc0ID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzQucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodClcbiAgICAgICAgdGhpcy5iZzQuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNCA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDQpXG4gICAgICAgIHRoaXMuYmc0LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNClcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNClcblxuICAgICAgICB0aGlzLmJnNSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmc1LnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDRIZWlnaHQpXG4gICAgICAgIHRoaXMuYmc1LnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kNUhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTUgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQ1KVxuICAgICAgICB0aGlzLmJnNS5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTUpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzUpXG5cbiAgICAgICAgdGhpcy5jdXBBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyBUT0RPOiDosIPmlbTliqjnlLtcbiAgICAgICAgdGhpcy5jdXBBbmkubG9hZEFuaW1hdGlvbihcImFuaS9DdXBBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXBBbmkpXG4gICAgICAgIC8vIFRPRE86IOiwg+aVtOS9jee9rlxuICAgICAgICB0aGlzLmN1cEFuaS5wb3MoNDAwLCAxMDIwKVxuICAgICBcblxuICAgICAgICB0aGlzLndoaXN0bGVBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XaGlzdGxlQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2hpc3RsZUFuaSlcbiAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBvcygxMDAsIDk4MClcbiAgICAgXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDAyQW5pKVxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnBvcygyMDAsIDI1MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDA0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDRBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMDhBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAwOEFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAxMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDEyQW5pKVxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkJhbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9CYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQmFsbEFuaSlcbiAgICAgICAgdGhpcy5CYWxsQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkJhbGxNYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJhbGxNYW5BbmkubG9hZEFuaW1hdGlvbihcImFuaS9CYWxsTWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQmFsbE1hbkFuaSlcbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkJvYXJkQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5Cb2FyZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0JvYXJkQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQm9hcmRBbmkpXG4gICAgICAgIHRoaXMuQm9hcmRBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2xvY2tBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmNsb2NrQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvY2xvY2tBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jbG9ja0FuaSlcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5Db21wdXRlckFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQ29tcHV0ZXJBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Db21wdXRlckFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkNvbXB1dGVyQW5pKVxuICAgICAgICB0aGlzLkNvbXB1dGVyQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkNyb3dkQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5Dcm93ZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0Nyb3dkQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQ3Jvd2RBbmkpXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZHVtYmJlbGxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5kdW1iYmVsbEFuaSlcbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5wb3MoNDAwLCAxMDIwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkubG9hZEFuaW1hdGlvbihcImFuaS9lbGVjdHJpY21hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmVsZWN0cmljbWFuQW5pKVxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZXF1aXBtZW50QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZXF1aXBtZW50QW5pKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5Gb290YmFsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuRm9vdGJhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Gb290YmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkZvb3RiYWxsQW5pKVxuICAgICAgICB0aGlzLkZvb3RiYWxsQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Hb2dnbGVzQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuR29nZ2xlc0FuaSlcbiAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLkhhdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuSGF0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvSGF0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuSGF0QW5pKVxuICAgICAgICB0aGlzLkhhdEFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5IZWFydEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuSGVhcnRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9IZWFydEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkhlYXJ0QW5pKVxuICAgICAgICB0aGlzLkhlYXJ0QW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2xpdXhpYW5nQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubGl1eGlhbmdBbmkpXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuTWVkYWxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLk1lZGFsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvTWVkYWxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5NZWRhbEFuaSlcbiAgICAgICAgdGhpcy5NZWRhbEFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlMDJTdGFydEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMucGFnZTAyU3RhcnRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMDJTdGFydEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhZ2UwMlN0YXJ0QW5pKVxuICAgICAgICB0aGlzLnBhZ2UwMlN0YXJ0QW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TY29yZWJvYXJkQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2NvcmVib2FyZEFuaSlcbiAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLnBvcygyMDAsIDE2MDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLlNob2VzQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TaG9lc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob2VzQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvZXNBbmkpXG4gICAgICAgIHRoaXMuU2hvZXNBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuU2hvdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU2hvdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob3RBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TaG90QW5pKVxuICAgICAgICB0aGlzLlNob3RBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlN0YWdlQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU3RhZ2VBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TdGFnZUFuaSlcbiAgICAgICAgdGhpcy5TdGFnZUFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5XYWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5XYWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2FsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhbGxBbmkpXG4gICAgICAgIHRoaXMuV2FsbEFuaS5wb3MoMjAwLCAxNjAwKVxuICAgICAgICBcbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dhdGVyTGVmdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyTGVmdEFuaSlcbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucG9zKDIwMCwgMTYwMClcbiAgICAgICAgXG4gICAgICAgIHRoaXMud2luQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy53aW5BbmkubG9hZEFuaW1hdGlvbihcImFuaS93aW5BbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy53aW5BbmkpXG4gICAgICAgIHRoaXMud2luQW5pLnBvcygyMDAsIDMwMDApXG4gICAgICAgIFxuICAgICAgICB0aGlzLldpbk1hbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2luTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2luTWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2luTWFuQW5pKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5wb3MoMjAwLCAxNjAwKVxuICAgIH1cblxuICAgIHN0b3BBbmkoYW5pTmFtZTogQW5pTmFtZSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbGF5QW5pKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXBBbmkucGxheSgwLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdEFuaS5wbGF5KDAsIGZhbHNlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdEFuaS5wbGF5KDAsIGZhbHNlKVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNBbmlQbGF5aW5nKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VwQW5pLmlzUGxheWluZ1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGlzdGxlQW5pLmlzUGxheWluZ1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG90QW5pLmlzUGxheWluZ1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2hpc3RsZUFuaS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdEFuaS52aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNBbmlWaXNpYmxlKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VwQW5pLnZpc2libGVcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpc3RsZUFuaS52aXNpYmxlXG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3RBbmkudmlzaWJsZVxuICAgICAgICB9XG4gICAgfVxuXG5cblxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkuZGlhbG9nIHtcclxuICAgIGV4cG9ydCBjbGFzcyBRdWVzdGlvbkRpYWxvZ1VJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyByZXN1bHRBSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRDSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRCSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRESW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBxdWVzdGlvbkxhYmVsOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGFuc3dlckFCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckJCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckNCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckRCdG46TGF5YS5CdXR0b247XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvUXVlc3Rpb25EaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHIiXX0=
