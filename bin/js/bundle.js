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
    Constants.stageWidth = 512;
    Constants.stateHeight = 3578;
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
var Constants_1 = require("./Constants");
var Main = /** @class */ (function () {
    function Main() {
        this.shakeCount = 0;
        this.hasPlayShotAni = false;
        Laya.init(Constants_1.default.stageWidth, Constants_1.default.stateHeight, Laya["WebGL"]);
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
        Laya.stage.bgColor = "white";
        var assets = [];
        assets.push({
            url: "bg/background1.png",
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: "res/atlas/sports.atlas",
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
        GameConfig_1.default.startScene && Laya.Scene.open(GameConfig_1.default.startScene);
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
        this.screen1BackGround.startDrag(this.dragRegion, false, 0);
    };
    Main.prototype.onBackgroundStartMove = function () {
        // TODO: 这里同样要做一些能否拖动的判断，onBackgroundMove部分逻辑也适应于此方法
    };
    Main.prototype.onBackgroundMove = function () {
        console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y);
        if (this.screen1BackGround.y <= -800) { // 不给拖动，摇一摇显示射门动画
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
            var y = -this.screen1BackGround.y + 232;
            var x = FootballPath_1.getFootballX(y);
            if (x == 0) {
                this.football.y = y;
            }
            else {
                this.football.pos(x, y);
            }
            // 判断足球是否需要旋转
            if (this.screen1BackGround.y <= -500) {
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

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./Screen1BackGround":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Screen1BackGround = /** @class */ (function (_super) {
    __extends(Screen1BackGround, _super);
    function Screen1BackGround() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Screen1BackGround.prototype.init = function () {
        this.bg = new Laya.Sprite();
        this.bg.loadImage("bg/background1.png");
        this.addChild(this.bg);
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
        this.shotAni = new Laya.Animation();
        this.shotAni.loadAnimation("ani/ShotAni.ani");
        this.addChild(this.shotAni);
        this.shotAni.pos(200, 1600);
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTWFpbi50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBTUEsQ0FBQztJQUxVLG9CQUFVLEdBQUcsR0FBRyxDQUFBO0lBQ2hCLHFCQUFXLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLG1CQUFTLEdBQVEsVUFBVSxDQUFDO0lBQzVCLG9CQUFVLEdBQVEsVUFBVSxDQUFDO0lBRXhDLGdCQUFDO0NBTkQsQUFNQyxJQUFBO2tCQU5vQixTQUFTOzs7OztBQ0E5QjtJQUFzQyw0QkFBVztJQUs3QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQURHLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTs7SUFDZixDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUUvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDO1lBQ3hCLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILDZCQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3hCLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUU5QixDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUUvQixDQUFDO0lBRUQsdUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtJQUNoQyxDQUFDO0lBRUwsZUFBQztBQUFELENBaERBLEFBZ0RDLENBaERxQyxJQUFJLENBQUMsTUFBTSxHQWdEaEQ7Ozs7OztBQzlDRCxzQkFBNkIsQ0FBUztJQUNsQyxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEIsSUFBSSxDQUFDLEVBQUU7UUFDSCxPQUFPLENBQUMsQ0FBQTtLQUNYO1NBQU07UUFDSCxPQUFPLENBQUMsQ0FBQTtLQUNYO0FBQ0wsQ0FBQztBQVBELG9DQU9DO0FBQ0QsSUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztBQUUxQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQWlCZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBa0JkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBbUJmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FB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LCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuICAgIHN0YXRpYyBzdGFnZVdpZHRoID0gNTEyXG4gICAgc3RhdGljIHN0YXRlSGVpZ2h0ID0gMzU3OFxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwibm9ib3JkZXJcIjtcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xuICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290YmFsbCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICAvLyDlrprkuYnotrPnkIPkuLvkvZNcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXG4gIFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0Zvb3RiYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Laz55CD5YGc5q2i5peL6L2sXG4gICAgICovXG4gICAgc3RvcFJvdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHlBbmkuaXNQbGF5aW5nKXtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotrPnkINcYuaXi+i9rFxuICAgICAqL1xuICAgIHBsYXlSb3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJvZHlBbmkuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5QW5pLnBsYXkoMCwgdHJ1ZSlcblxuICAgIH1cblxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gdHJ1ZVxuICAgICAgIFxuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gZmFsc2VcbiAgICB9XG5cbn0iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvb3RiYWxsWCh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHggPSBtYXBbeV1cbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4geFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxufVxuY29uc3QgbWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge307XG5cbm1hcFsyMzJdID0gMzI2XG5tYXBbMjMyXSA9IDMyOVxubWFwWzIzNF0gPSAzMzBcbm1hcFsyMzZdID0gMzMyXG5tYXBbMjM3XSA9IDMzNFxubWFwWzIzN10gPSAzMzdcbm1hcFsyMzldID0gMzM5XG5tYXBbMjM5XSA9IDM0MlxubWFwWzI0MF0gPSAzNDRcbm1hcFsyNDJdID0gMzQ1XG5tYXBbMjQ0XSA9IDM0N1xubWFwWzI0NV0gPSAzNDhcbm1hcFsyNDddID0gMzUwXG5tYXBbMjQ5XSA9IDM1MlxubWFwWzI1MF0gPSAzNTNcbm1hcFsyNTJdID0gMzU1XG5tYXBbMjU0XSA9IDM1N1xubWFwWzI1NV0gPSAzNThcbm1hcFsyNTddID0gMzYwXG5tYXBbMjU4XSA9IDM2MlxubWFwWzI1OF0gPSAzNjVcbm1hcFsyNjBdID0gMzY2XG5tYXBbMjYyXSA9IDM2OFxubWFwWzI2M10gPSAzNzBcbm1hcFsyNjVdID0gMzcxXG5tYXBbMjY3XSA9IDM3M1xubWFwWzI2OF0gPSAzNzVcbm1hcFsyNzBdID0gMzc2XG5tYXBbMjcyXSA9IDM3OFxubWFwWzI3M10gPSAzODBcbm1hcFsyNzVdID0gMzgxXG5tYXBbMjc4XSA9IDM4MVxubWFwWzI4MV0gPSAzODFcbm1hcFsyODNdID0gMzgzXG5tYXBbMjg2XSA9IDM4M1xubWFwWzI4OF0gPSAzODRcbm1hcFsyOTFdID0gMzg0XG5tYXBbMjk0XSA9IDM4NFxubWFwWzI5Nl0gPSAzODZcbm1hcFsyOTldID0gMzg2XG5tYXBbMzAzXSA9IDM4NlxubWFwWzMwNl0gPSAzODZcbm1hcFszMDldID0gMzg2XG5tYXBbMzEyXSA9IDM4NlxubWFwWzMxNl0gPSAzODZcbm1hcFszMTddID0gMzg4XG5tYXBbMzIxXSA9IDM4OFxubWFwWzMyNF0gPSAzODhcbm1hcFszMjddID0gMzg4XG5tYXBbMzMwXSA9IDM4OFxubWFwWzMzNF0gPSAzODhcbm1hcFszMzVdID0gMzg2XG5tYXBbMzM5XSA9IDM4NlxubWFwWzM0Ml0gPSAzODZcbm1hcFszNDVdID0gMzg2XG5tYXBbMzQ4XSA9IDM4NlxubWFwWzM1Ml0gPSAzODRcbm1hcFszNTVdID0gMzg0XG5tYXBbMzU3XSA9IDM4M1xubWFwWzM2MF0gPSAzODNcbm1hcFszNjFdID0gMzgxXG5tYXBbMzYzXSA9IDM4MFxubWFwWzM2NV0gPSAzNzhcbm1hcFszNjZdID0gMzc2XG5tYXBbMzcwXSA9IDM3NVxubWFwWzM3MV0gPSAzNzNcbm1hcFszNzNdID0gMzcxXG5tYXBbMzc2XSA9IDM3MFxubWFwWzM3OF0gPSAzNjhcbm1hcFszNzldID0gMzY2XG5tYXBbMzgxXSA9IDM2NVxubWFwWzM4M10gPSAzNjNcbm1hcFszODZdID0gMzYzXG5tYXBbMzg4XSA9IDM2MlxubWFwWzM4OV0gPSAzNjBcbm1hcFszOTFdID0gMzU4XG5tYXBbMzkzXSA9IDM1N1xubWFwWzM5NF0gPSAzNTVcbm1hcFszOTZdID0gMzUzXG5tYXBbMzk3XSA9IDM1MlxubWFwWzM5OV0gPSAzNTBcbm1hcFs0MDFdID0gMzQ4XG5tYXBbNDA0XSA9IDM0OFxubWFwWzQwNl0gPSAzNDdcbm1hcFs0MDddID0gMzQ1XG5tYXBbNDA5XSA9IDM0NFxubWFwWzQxMV0gPSAzNDJcbm1hcFs0MTJdID0gMzQwXG5tYXBbNDE0XSA9IDMzOVxubWFwWzQxNV0gPSAzMzdcbm1hcFs0MTddID0gMzM1XG5tYXBbNDE5XSA9IDMzNFxubWFwWzQyMF0gPSAzMzJcbm1hcFs0MjJdID0gMzMwXG5tYXBbNDI1XSA9IDMyOVxubWFwWzQyN10gPSAzMjdcbm1hcFs0MjldID0gMzI2XG5tYXBbNDMyXSA9IDMyNlxubWFwWzQzM10gPSAzMjRcbm1hcFs0MzVdID0gMzIyXG5tYXBbNDM3XSA9IDMyMVxubWFwWzQzOF0gPSAzMTlcbm1hcFs0NDBdID0gMzE3XG5tYXBbNDQyXSA9IDMxNlxubWFwWzQ0M10gPSAzMTRcbm1hcFs0NDVdID0gMzEyXG5tYXBbNDQ4XSA9IDMxMlxubWFwWzQ1MF0gPSAzMTFcbm1hcFs0NTFdID0gMzA5XG5tYXBbNDU1XSA9IDMwOFxubWFwWzQ1Nl0gPSAzMDZcbm1hcFs0NThdID0gMzA0XG5tYXBbNDYxXSA9IDMwM1xubWFwWzQ2M10gPSAzMDFcbm1hcFs0NjVdID0gMjk5XG5tYXBbNDY2XSA9IDI5OFxubWFwWzQ2OF0gPSAyOTZcbm1hcFs0NjldID0gMjk0XG5tYXBbNDcxXSA9IDI5M1xubWFwWzQ3NF0gPSAyOTNcbm1hcFs0NzZdID0gMjkxXG5tYXBbNDc4XSA9IDI5MFxubWFwWzQ3OV0gPSAyODhcbm1hcFs0ODFdID0gMjg2XG5tYXBbNDgzXSA9IDI4NVxubWFwWzQ4NF0gPSAyODNcbm1hcFs0ODZdID0gMjgxXG5tYXBbNDg3XSA9IDI4MFxubWFwWzQ5MV0gPSAyODBcbm1hcFs0OTJdID0gMjc4XG5tYXBbNDk0XSA9IDI3NlxubWFwWzQ5Nl0gPSAyNzVcbm1hcFs0OTddID0gMjczXG5tYXBbNDk5XSA9IDI3MlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbNDk5XSA9IDI3MlxubWFwWzUwMl0gPSAyNzJcbm1hcFs1MDRdID0gMjcwXG5tYXBbNTA1XSA9IDI2OFxubWFwWzUwN10gPSAyNjdcbm1hcFs1MDldID0gMjY1XG5tYXBbNTEwXSA9IDI2M1xubWFwWzUxNF0gPSAyNjJcbm1hcFs1MTVdID0gMjYwXG5tYXBbNTE3XSA9IDI1OFxubWFwWzUxOV0gPSAyNTdcbm1hcFs1MjBdID0gMjU1XG5tYXBbNTIyXSA9IDI1NFxubWFwWzUyM10gPSAyNTJcbm1hcFs1MjVdID0gMjUwXG5tYXBbNTI3XSA9IDI0N1xubWFwWzUyOF0gPSAyNDVcbm1hcFs1MzBdID0gMjQ0XG5tYXBbNTMyXSA9IDI0MlxubWFwWzUzM10gPSAyNDBcbm1hcFs1MzNdID0gMjM3XG5tYXBbNTM1XSA9IDIzNlxubWFwWzUzNl0gPSAyMzRcbm1hcFs1MzhdID0gMjMyXG5tYXBbNTQwXSA9IDIzMVxubWFwWzU0MV0gPSAyMjlcbm1hcFs1NDNdID0gMjI2XG5tYXBbNTQ1XSA9IDIyNFxubWFwWzU0Nl0gPSAyMjJcbm1hcFs1NDhdID0gMjIxXG5tYXBbNTUwXSA9IDIxOVxubWFwWzU1MV0gPSAyMThcbm1hcFs1NTNdID0gMjE2XG5tYXBbNTU2XSA9IDIxNlxubWFwWzU1OF0gPSAyMTRcbm1hcFs1NTldID0gMjEzXG5tYXBbNTYxXSA9IDIxMVxubWFwWzU2NF0gPSAyMTFcbm1hcFs1NjZdID0gMjA5XG5tYXBbNTY4XSA9IDIwOFxubWFwWzU3MV0gPSAyMDhcbm1hcFs1NzJdID0gMjA2XG5tYXBbNTc0XSA9IDIwNFxubWFwWzU3Nl0gPSAyMDNcbm1hcFs1NzldID0gMjAzXG5tYXBbNTgxXSA9IDIwMVxubWFwWzU4Ml0gPSAyMDBcbm1hcFs1ODRdID0gMTk4XG5tYXBbNTg2XSA9IDE5NlxubWFwWzU4N10gPSAxOTVcbm1hcFs1OTBdID0gMTk1XG5tYXBbNTkyXSA9IDE5M1xubWFwWzU5NV0gPSAxOTNcbm1hcFs1OTddID0gMTkxXG5tYXBbNjAwXSA9IDE5MVxubWFwWzYwMl0gPSAxOTBcbm1hcFs2MDRdID0gMTg4XG5tYXBbNjA3XSA9IDE4OFxubWFwWzYwOF0gPSAxODZcbm1hcFs2MTBdID0gMTg1XG5tYXBbNjEzXSA9IDE4NVxubWFwWzYxNV0gPSAxODNcbm1hcFs2MTddID0gMTgyXG5tYXBbNjE4XSA9IDE4MFxubWFwWzYyMl0gPSAxNzhcbm1hcFs2MjNdID0gMTc3XG5tYXBbNjI2XSA9IDE3N1xubWFwWzYyOF0gPSAxNzVcbm1hcFs2MzBdID0gMTczXG5tYXBbNjMxXSA9IDE3MlxubWFwWzYzNV0gPSAxNzJcbm1hcFs2MzZdID0gMTcwXG5tYXBbNjM4XSA9IDE2OFxubWFwWzY0MF0gPSAxNjdcbm1hcFs2NDNdID0gMTY3XG5tYXBbNjQ0XSA9IDE2NVxubWFwWzY0OF0gPSAxNjRcbm1hcFs2NTFdID0gMTY0XG5tYXBbNjUzXSA9IDE2MlxubWFwWzY1Nl0gPSAxNjJcbm1hcFs2NThdID0gMTYwXG5tYXBbNjYxXSA9IDE2MFxubWFwWzY2Ml0gPSAxNTlcbm1hcFs2NjZdID0gMTU5XG5tYXBbNjY3XSA9IDE1N1xubWFwWzY3MV0gPSAxNTdcbm1hcFs2NzJdID0gMTU1XG5tYXBbNjc2XSA9IDE1NVxubWFwWzY3OV0gPSAxNTVcbm1hcFs2ODBdID0gMTU0XG5tYXBbNjg0XSA9IDE1NFxubWFwWzY4N10gPSAxNTRcbm1hcFs2OTBdID0gMTU0XG5tYXBbNjk0XSA9IDE1NFxubWFwWzY5N10gPSAxNTRcbm1hcFs3MDBdID0gMTU0XG5tYXBbNzAzXSA9IDE1NFxubWFwWzcwN10gPSAxNTRcbm1hcFs3MTBdID0gMTU0XG5tYXBbNzEzXSA9IDE1NFxubWFwWzcxNl0gPSAxNTRcbm1hcFs3MjBdID0gMTU0XG5tYXBbNzIzXSA9IDE1NFxubWFwWzcyNl0gPSAxNTRcbm1hcFs3MzBdID0gMTU0XG5tYXBbNzMzXSA9IDE1NFxubWFwWzczNl0gPSAxNTVcbm1hcFs3MzldID0gMTU1XG5tYXBbNzQzXSA9IDE1NVxubWFwWzc0Nl0gPSAxNTVcbm1hcFs3NDldID0gMTU1XG5tYXBbNzUxXSA9IDE1N1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFs3NTFdID0gMTU1XG5tYXBbNzU0XSA9IDE1NVxubWFwWzc1Nl0gPSAxNTdcbm1hcFs3NTldID0gMTU3XG5tYXBbNzYxXSA9IDE1OVxubWFwWzc2NF0gPSAxNTlcbm1hcFs3NjVdID0gMTYwXG5tYXBbNzY3XSA9IDE2MlxubWFwWzc3MF0gPSAxNjJcbm1hcFs3NzJdID0gMTY0XG5tYXBbNzc1XSA9IDE2NFxubWFwWzc3N10gPSAxNjVcbm1hcFs3ODBdID0gMTY3XG5tYXBbNzgzXSA9IDE2N1xubWFwWzc4NV0gPSAxNjhcbm1hcFs3ODhdID0gMTY4XG5tYXBbNzkwXSA9IDE3MFxubWFwWzc5M10gPSAxNzBcbm1hcFs3OTVdID0gMTcyXG5tYXBbNzk3XSA9IDE3M1xubWFwWzgwMF0gPSAxNzNcbm1hcFs4MDFdID0gMTc1XG5tYXBbODA1XSA9IDE3NVxubWFwWzgwNl0gPSAxNzdcbm1hcFs4MDhdID0gMTc4XG5tYXBbODExXSA9IDE3OFxubWFwWzgxM10gPSAxODBcbm1hcFs4MTVdID0gMTgyXG5tYXBbODE4XSA9IDE4MlxubWFwWzgxOV0gPSAxODNcbm1hcFs4MjFdID0gMTg1XG5tYXBbODIzXSA9IDE4NlxubWFwWzgyNl0gPSAxODZcbm1hcFs4MjhdID0gMTg4XG5tYXBbODI5XSA9IDE5MFxubWFwWzgzM10gPSAxOTFcbm1hcFs4MzRdID0gMTkzXG5tYXBbODM3XSA9IDE5M1xubWFwWzgzOV0gPSAxOTVcbm1hcFs4NDFdID0gMTk2XG5tYXBbODQyXSA9IDE5OFxubWFwWzg0NF0gPSAyMDBcbm1hcFs4NDZdID0gMjAxXG5tYXBbODQ3XSA9IDIwM1xubWFwWzg0OV0gPSAyMDRcbm1hcFs4NTFdID0gMjA2XG5tYXBbODUyXSA9IDIwOFxubWFwWzg1NF0gPSAyMDlcbm1hcFs4NTddID0gMjExXG5tYXBbODU5XSA9IDIxM1xubWFwWzg2MF0gPSAyMTRcbm1hcFs4NjRdID0gMjE0XG5tYXBbODY1XSA9IDIxNlxubWFwWzg2N10gPSAyMThcbm1hcFs4NjldID0gMjE5XG5tYXBbODcwXSA9IDIyMVxubWFwWzg3Ml0gPSAyMjJcbm1hcFs4NzVdID0gMjIyXG5tYXBbODc3XSA9IDIyNFxubWFwWzg3OF0gPSAyMjZcbm1hcFs4NzhdID0gMjI5XG5tYXBbODgwXSA9IDIzMVxubWFwWzg4Ml0gPSAyMzJcbm1hcFs4ODNdID0gMjM0XG5tYXBbODg1XSA9IDIzNlxubWFwWzg4N10gPSAyMzdcbm1hcFs4ODhdID0gMjM5XG5tYXBbODkwXSA9IDI0MFxubWFwWzg5MV0gPSAyNDJcbm1hcFs4OTNdID0gMjQ0XG5tYXBbODk1XSA9IDI0NVxubWFwWzg5Nl0gPSAyNDdcbm1hcFs4OThdID0gMjQ5XG5tYXBbOTAwXSA9IDI1MFxubWFwWzkwMV0gPSAyNTJcbm1hcFs5MDNdID0gMjU0XG5tYXBbOTA1XSA9IDI1NVxubWFwWzkwOF0gPSAyNTdcbm1hcFs5MDldID0gMjU4XG5tYXBbOTEzXSA9IDI2MFxubWFwWzkxNl0gPSAyNjBcbm1hcFs5MThdID0gMjYyXG5tYXBbOTIxXSA9IDI2MlxubWFwWzkyNF0gPSAyNjJcbm1hcFs5MjddID0gMjYyXG5tYXBbOTMxXSA9IDI2MlxubWFwWzkzMl0gPSAyNjNcbm1hcFs5MzRdID0gMjYyXG5tYXBbOTM3XSA9IDI2MlxubWFwWzk0MV0gPSAyNjJcbm1hcFs5NDRdID0gMjYyXG5tYXBbOTQ3XSA9IDI2MFxubWFwWzk1MF0gPSAyNjBcbm1hcFs5NTRdID0gMjU4XG5tYXBbOTU3XSA9IDI1N1xubWFwWzk2MF0gPSAyNTVcbm1hcFs5NjNdID0gMjU0XG5tYXBbOTY3XSA9IDI1MlxubWFwWzk3MF0gPSAyNTJcbm1hcFs5NzJdID0gMjUwXG5tYXBbOTczXSA9IDI0OVxubWFwWzk3Nl0gPSAyNDlcbm1hcFs5ODBdID0gMjQ5XG5tYXBbOTgxXSA9IDI0N1xubWFwWzk4NV0gPSAyNDdcbm1hcFs5ODZdID0gMjQ1XG5tYXBbOTg4XSA9IDI0NFxubWFwWzk5MV0gPSAyNDRcbm1hcFs5OTNdID0gMjQyXG5tYXBbOTk0XSA9IDI0MFxubWFwWzk5OF0gPSAyNDBcbm1hcFs5OTldID0gMjM5XG5tYXBbMTAwMV0gPSAyMzdcbm1hcFsxMDA0XSA9IDIzNlxubWFwWzEwMDZdID0gMjM0XG5tYXBbMTAwOV0gPSAyMzJcbm1hcFsxMDExXSA9IDIzMVxubWFwWzEwMTJdID0gMjI5XG5tYXBbMTAxNF0gPSAyMjdcbm1hcFsxMDE3XSA9IDIyNlxubWFwWzEwMTldID0gMjI0XG5tYXBbMTAyMV0gPSAyMjJcbm1hcFsxMDI0XSA9IDIyMVxubWFwWzEwMjZdID0gMjE5XG5tYXBbMTAyOV0gPSAyMTlcbm1hcFsxMDMyXSA9IDIyMVxubWFwWzEwMzVdID0gMjIyXG5tYXBbMTAzOV0gPSAyMjJcbm1hcFsxMDQwXSA9IDIyNFxubWFwWzEwNDJdID0gMjI2XG5tYXBbMTA0NV0gPSAyMjZcbm1hcFsxMDQ3XSA9IDIyN1xubWFwWzEwNDhdID0gMjI5XG5tYXBbMTA1Ml0gPSAyMjlcbm1hcFsxMDUzXSA9IDIzMVxubWFwWzEwNTVdID0gMjMyXG5tYXBbMTA1OF0gPSAyMzRcbm1hcFsxMDYwXSA9IDIzNlxubWFwWzEwNjJdID0gMjM3XG5tYXBbMTA2NV0gPSAyMzlcbm1hcFsxMDY2XSA9IDI0MFxubWFwWzEwNjhdID0gMjQyXG5tYXBbMTA3MF0gPSAyNDRcbm1hcFsxMDcxXSA9IDI0NVxubWFwWzEwNzNdID0gMjQ3XG5tYXBbMTA3NV0gPSAyNDlcbm1hcFsxMDc2XSA9IDI1MFxubWFwWzEwNzhdID0gMjUyXG5tYXBbMTA4MF0gPSAyNTRcbm1hcFsxMDgxXSA9IDI1NVxubWFwWzEwODRdID0gMjU1XG5tYXBbMTA4OF0gPSAyNTVcbm1hcFsxMDkxXSA9IDI1NVxubWFwWzEwOTRdID0gMjU1XG5tYXBbMTA5Nl0gPSAyNTdcbm1hcFsxMDk5XSA9IDI1N1xubWFwWzExMDJdID0gMjU3XG5tYXBbMTEwNl0gPSAyNTdcbm1hcFsxMTA5XSA9IDI1OFxubWFwWzExMTJdID0gMjU3XG5tYXBbMTExNl0gPSAyNTdcbm1hcFsxMTE3XSA9IDI1OFxubWFwWzExMjBdID0gMjU4XG5tYXBbMTEyNF0gPSAyNThcbm1hcFsxMTI3XSA9IDI1OFxubWFwWzExMjldID0gMjYwXG5tYXBbMTEzMl0gPSAyNjBcbm1hcFsxMTM1XSA9IDI2MFxubWFwWzExMzddID0gMjYyXG5tYXBbMTE0MF0gPSAyNjJcbm1hcFsxMTQzXSA9IDI2M1xubWFwWzExNDddID0gMjYzXG5tYXBbMTE1MF0gPSAyNjNcbm1hcFsxMTUzXSA9IDI2M1xubWFwWzExNTZdID0gMjYzXG5tYXBbMTE2MF0gPSAyNjVcbm1hcFsxMTYzXSA9IDI2NVxubWFwWzExNjZdID0gMjY1XG5tYXBbMTE2OV0gPSAyNjVcbm1hcFsxMTczXSA9IDI2NVxubWFwWzExNzZdID0gMjY1XG5tYXBbMTE3OF0gPSAyNjdcbm1hcFsxMTgxXSA9IDI2N1xubWFwWzExODRdID0gMjY3XG5tYXBbMTE4N10gPSAyNjdcbm1hcFsxMTkxXSA9IDI2N1xubWFwWzExOTJdID0gMjY4XG5tYXBbMTE5Nl0gPSAyNjhcbm1hcFsxMTk5XSA9IDI2OFxubWFwWzEyMDJdID0gMjY4XG5tYXBbMTIwNF0gPSAyNzBcbm1hcFsxMjA3XSA9IDI3MFxubWFwWzEyMTBdID0gMjcwXG5tYXBbMTIxNF0gPSAyNzBcbm1hcFsxMjE1XSA9IDI3MlxubWFwWzEyMTldID0gMjcyXG5tYXBbMTIyMl0gPSAyNzJcbm1hcFsxMjI1XSA9IDI3MlxubWFwWzEyMjddID0gMjczXG5tYXBbMTIzMF0gPSAyNzNcbm1hcFsxMjMzXSA9IDI3M1xubWFwWzEyMzddID0gMjczXG5tYXBbMTI0MF0gPSAyNzNcbm1hcFsxMjQxXSA9IDI3NVxubWFwWzEyNDVdID0gMjc1XG5tYXBbMTI0OF0gPSAyNzVcbm1hcFsxMjUxXSA9IDI3NVxubWFwWzEyNTVdID0gMjc1XG5tYXBbMTI1OF0gPSAyNzVcbm1hcFsxMjU5XSA9IDI3NlxubWFwWzEyNjNdID0gMjc2XG5tYXBbMTI2Nl0gPSAyNzZcbm1hcFsxMjY5XSA9IDI3NlxubWFwWzEyNzNdID0gMjc2XG5tYXBbMTI3Nl0gPSAyNzZcbm1hcFsxMjc3XSA9IDI3OFxubWFwWzEyODFdID0gMjc4XG5tYXBbMTI4NF0gPSAyNzhcbm1hcFsxMjg3XSA9IDI3OFxubWFwWzEyODldID0gMjgwXG5tYXBbMTI5Ml0gPSAyODBcbm1hcFsxMjk1XSA9IDI4MFxubWFwWzEyOTddID0gMjgxXG5tYXBbMTMwMF0gPSAyODFcbm1hcFsxMzAyXSA9IDI4M1xubWFwWzEzMDVdID0gMjg1XG5tYXBbMTMwOV0gPSAyODZcbm1hcFsxMzEwXSA9IDI4OFxubWFwWzEzMTNdID0gMjg4XG5tYXBbMTMxNV0gPSAyOTBcbm1hcFsxMzE3XSA9IDI5MVxubWFwWzEzMjBdID0gMjkxXG5tYXBbMTMyMl0gPSAyOTNcbm1hcFsxMzIzXSA9IDI5NFxubWFwWzEzMjVdID0gMjk2XG5tYXBbMTMyOF0gPSAyOTZcbm1hcFsxMzMwXSA9IDI5OFxubWFwWzEzMzFdID0gMjk5XG5tYXBbMTMzM10gPSAzMDFcbm1hcFsxMzM2XSA9IDMwM1xubWFwWzEzMzhdID0gMzA0XG5tYXBbMTM0MV0gPSAzMDRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFsxMzQxXSA9IDMwNFxubWFwWzEzNDRdID0gMzA0XG5tYXBbMTM0Nl0gPSAzMDZcbm1hcFsxMzQ5XSA9IDMwNlxubWFwWzEzNTJdID0gMzA2XG5tYXBbMTM1NF0gPSAzMDhcbm1hcFsxMzU3XSA9IDMwOFxubWFwWzEzNjBdID0gMzA4XG5tYXBbMTM2Ml0gPSAzMDlcbm1hcFsxMzY1XSA9IDMwOVxubWFwWzEzNjldID0gMzA5XG5tYXBbMTM3MF0gPSAzMTFcbm1hcFsxMzczXSA9IDMxMVxubWFwWzEzNzddID0gMzExXG5tYXBbMTM3OF0gPSAzMTJcbm1hcFsxMzgyXSA9IDMxMlxubWFwWzEzODVdID0gMzEyXG5tYXBbMTM4N10gPSAzMTRcbm1hcFsxMzkwXSA9IDMxNFxubWFwWzEzOTNdID0gMzE0XG5tYXBbMTM5NV0gPSAzMTZcbm1hcFsxMzk4XSA9IDMxNlxubWFwWzE0MDFdID0gMzE2XG5tYXBbMTQwNV0gPSAzMTZcbm1hcFsxNDA4XSA9IDMxNlxubWFwWzE0MDldID0gMzE3XG5tYXBbMTQxM10gPSAzMTdcbm1hcFsxNDE2XSA9IDMxN1xubWFwWzE0MTldID0gMzE3XG5tYXBbMTQyM10gPSAzMTdcbm1hcFsxNDI0XSA9IDMxOVxubWFwWzE0MjddID0gMzE5XG5tYXBbMTQzMV0gPSAzMTlcbm1hcFsxNDMyXSA9IDMyMVxubWFwWzE0MzZdID0gMzIxXG5tYXBbMTQzOV0gPSAzMjFcbm1hcFsxNDQxXSA9IDMyMlxubWFwWzE0NDRdID0gMzIyXG5tYXBbMTQ0N10gPSAzMjJcbm1hcFsxNDQ5XSA9IDMyNFxubWFwWzE0NTJdID0gMzI0XG5tYXBbMTQ1NV0gPSAzMjRcbm1hcFsxNDU3XSA9IDMyNlxubWFwWzE0NjBdID0gMzI2XG5tYXBbMTQ2M10gPSAzMjZcbm1hcFsxNDY3XSA9IDMyNlxubWFwWzE0NzBdID0gMzI2XG5tYXBbMTQ3M10gPSAzMjZcbm1hcFsxNDc2XSA9IDMyNlxubWFwWzE0ODBdID0gMzI2XG5tYXBbMTQ4M10gPSAzMjZcbm1hcFsxNDg2XSA9IDMyNlxubWFwWzE0OTBdID0gMzI2XG5tYXBbMTQ5M10gPSAzMjZcbm1hcFsxNDk2XSA9IDMyNlxubWFwWzE0OTldID0gMzI2XG5tYXBbMTUwM10gPSAzMjZcbm1hcFsxNTA2XSA9IDMyNlxubWFwWzE1MDhdID0gMzI0XG5tYXBbMTUxMV0gPSAzMjRcbm1hcFsxNTE0XSA9IDMyNFxubWFwWzE1MTddID0gMzI0XG5tYXBbMTUxOV0gPSAzMjJcbm1hcFsxNTIyXSA9IDMyMlxubWFwWzE1MjZdID0gMzIyXG5tYXBbMTUyN10gPSAzMjFcbm1hcFsxNTI3XSA9IDMyMVxubWFwWzE1MzBdID0gMzIxXG5tYXBbMTUzNF0gPSAzMjFcbm1hcFsxNTM3XSA9IDMyMVxubWFwWzE1NDBdID0gMzIxXG5tYXBbMTU0NF0gPSAzMjFcbm1hcFsxNTQ3XSA9IDMyMVxubWFwWzE1NTBdID0gMzIxXG5tYXBbMTU1Ml0gPSAzMTlcbm1hcFsxNTU1XSA9IDMxOVxubWFwWzE1NTddID0gMzE3XG5tYXBbMTU2MF0gPSAzMTdcbm1hcFsxNTYyXSA9IDMxNlxubWFwWzE1NjVdID0gMzE2XG5tYXBbMTU2Nl0gPSAzMTRcbm1hcFsxNTcwXSA9IDMxNFxubWFwWzE1NzNdID0gMzE0XG5tYXBbMTU3NV0gPSAzMTJcbm1hcFsxNTc4XSA9IDMxMlxubWFwWzE1ODFdID0gMzExXG5tYXBbMTU4NF0gPSAzMTFcbm1hcFsxNTg4XSA9IDMwOVxubWFwWzE1OTFdID0gMzA5XG5tYXBbMTU5NF0gPSAzMDlcbm1hcFsxNTk2XSA9IDMwOFxubWFwWzE1OTldID0gMzA4XG5tYXBbMTYwMV0gPSAzMDhcbm1hcFsxNjAxXSA9IDMwOFxubWFwWzE2MDRdID0gMzA4XG5tYXBbMTYwNl0gPSAzMDZcbm1hcFsxNjA5XSA9IDMwNlxubWFwWzE2MTJdID0gMzA0XG5tYXBbMTYxNl0gPSAzMDRcbm1hcFsxNjE3XSA9IDMwM1xubWFwWzE2MjBdID0gMzAzXG5tYXBbMTYyNF0gPSAzMDNcbm1hcFsxNjI3XSA9IDMwM1xubWFwWzE2MjldID0gMzAxXG5tYXBbMTYzMl0gPSAzMDFcbm1hcFsxNjM1XSA9IDMwMVxubWFwWzE2MzddID0gMjk5XG5tYXBbMTY0MF0gPSAyOTlcbm1hcFsxNjQzXSA9IDI5OVxubWFwWzE2NDddID0gMjk5XG5tYXBbMTY1MF0gPSAyOTlcbm1hcFsxNjUyXSA9IDI5OFxubWFwWzE2NTVdID0gMjk4XG5tYXBbMTY1OF0gPSAyOThcbm1hcFsxNjYxXSA9IDI5OFxubWFwWzE2NjVdID0gMjk4XG5tYXBbMTY2Nl0gPSAyOTZcbm1hcFsxNjY5XSA9IDI5NlxubWFwWzE2NzNdID0gMjk2XG5tYXBbMTY3NF0gPSAyOTRcbm1hcFsxNjc2XSA9IDI5NFxubWFwWzE2NzldID0gMjk0XG5tYXBbMTY4M10gPSAyOTRcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODddID0gMjkzXG5tYXBbMTY5MV0gPSAyOTNcbm1hcFsxNjk0XSA9IDI5M1xubWFwWzE2OTddID0gMjkzXG5tYXBbMTcwMV0gPSAyOTNcbm1hcFsxNzA1XSA9IDI5MVxubWFwWzE3MDldID0gMjkxXG5tYXBbMTcxMl0gPSAyOTFcbm1hcFsxNzE1XSA9IDI5MVxubWFwWzE3MTldID0gMjkxXG5tYXBbMTcyMl0gPSAyOTFcbm1hcFsxNzI1XSA9IDI5MVxubWFwWzE3MjhdID0gMjkxXG5tYXBbMTczMl0gPSAyOTFcbm1hcFsxNzM1XSA9IDI5MVxubWFwWzE3MzhdID0gMjkxXG5tYXBbMTc0MV0gPSAyOTFcbm1hcFsxNzQ1XSA9IDI5MVxubWFwWzE3NDZdID0gMjkwXG5tYXBbMTc1MF0gPSAyOTBcbm1hcFsxNzUzXSA9IDI5MFxubWFwWzE3NTZdID0gMjkwXG5tYXBbMTc1OV0gPSAyOTBcbm1hcFsxNzYzXSA9IDI5MFxubWFwWzE3NjZdID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc3M10gPSAyOTBcbm1hcFsxNzc2XSA9IDI5MFxubWFwWzE3NzldID0gMjkwXG5tYXBbMTc4Ml0gPSAyOTBcbm1hcFsxNzg2XSA9IDI5MFxubWFwWzE3ODldID0gMjkwXG5tYXBbMTc5Ml0gPSAyOTBcbm1hcFsxNzk1XSA9IDI5MFxubWFwWzE3OTldID0gMjkwXG5tYXBbMTgwMl0gPSAyOTBcbm1hcFsxODA1XSA9IDI5MFxubWFwWzE4MDldID0gMjkwXG5tYXBbMTgxMl0gPSAyOTBcbm1hcFsxODEzXSA9IDI4OFxubWFwWzE4MTddID0gMjg4XG5tYXBbMTgyMF0gPSAyODhcbm1hcFsxODIzXSA9IDI4OFxubWFwWzE4MjddID0gMjg4XG5tYXBbMTgzMF0gPSAyODhcbm1hcFsxODMzXSA9IDI4OFxubWFwWzE4MzZdID0gMjkwXG5tYXBbMTg0MF0gPSAyOTBcbm1hcFsxODQxXSA9IDI5MFxubWFwWzE4NDVdID0gMjkwXG5tYXBbMTg0OF0gPSAyOTBcbm1hcFsxODUxXSA9IDI5MFxubWFwWzE4NTNdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1OV0gPSAyOTFcbm1hcFsxODYzXSA9IDI5MVxubWFwWzE4NjZdID0gMjkxXG5tYXBbMTg2N10gPSAyOTFcbm1hcFsxODY5XSA9IDI5M1xubWFwWzE4NzJdID0gMjkzXG5tYXBbMTg3Nl0gPSAyOTNcbm1hcFsxODc2XSA9IDI5M1xubWFwWzE4NzddID0gMjkzXG5tYXBbMTg4MF0gPSAyOTNcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTUxMjtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTc2ODtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwibm9ib3JkZXJcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cInZlcnRpY2FsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cImRpYWxvZy9RdWVzdGlvbkRpYWxvZy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgU2NyZWVuMUJhY2tHcm91bmQgZnJvbSBcIi4vU2NyZWVuMUJhY2tHcm91bmRcIjtcclxuaW1wb3J0IEZvb3RiYWxsIGZyb20gXCIuL0Zvb3RiYWxsXCI7XHJcbmltcG9ydCB7IGdldEZvb3RiYWxsWCB9IGZyb20gXCIuL0Zvb3RiYWxsUGF0aFwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRpYWxvZyB9IGZyb20gXCIuL1F1ZXN0aW9uRGlhbG9nXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgZm9vdGJhbGw6IEZvb3RiYWxsXHJcblx0cHJpdmF0ZSBzY3JlZW4xQmFja0dyb3VuZDogU2NyZWVuMUJhY2tHcm91bmRcclxuXHRwcml2YXRlIGRyYWdSZWdpb246IExheWEuUmVjdGFuZ2xlXHJcblxyXG5cdHByaXZhdGUgc2hha2VDb3VudDpudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmkgPSBmYWxzZVxyXG5cclxuXHRwcml2YXRlIGNvbnNvbGU6IExheWEuVGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRMYXlhLmluaXQoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5zdGF0ZUhlaWdodCwgTGF5YVtcIldlYkdMXCJdKTtcclxuXHRcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IENvbnN0YW50cy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBDb25zdGFudHMuc2NyZWVuTW9kZTtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblx0XHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIndoaXRlXCJcclxuXHJcblx0XHRjb25zdCBhc3NldHM6IEFycmF5PGFueT4gPSBbXVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwiYmcvYmFja2dyb3VuZDEucG5nXCIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3Nwb3J0cy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSlcclxuXHJcblx0XHQvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpXHJcblx0XHRMYXlhLmxvYWRlci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uRXJyb3IpXHJcblxyXG5cdFx0Ly8g6ZyA6KaB5pi+56S66LCD6K+V5L+h5oGv5Y+v5Lul5omT5byA6L+Z6YeMXHJcblx0XHR0aGlzLnNob3dDb25zb2xlVGV4dChmYWxzZSk7XHJcblx0XHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcblxyXG5cdG9uQXNzZXRzTG9hZGluZyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pjogXCIgKyBwcm9ncmVzcyk7XHJcblx0XHRcclxuXHRcdC8vIFRPRE86IOaYvuekuui/m+W6puadoVxyXG5cdH1cclxuXHJcblx0b25Bc3NldHNMb2FkZWQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn6LWE5rqQ5Yqg6L295a6M5oiQ44CCJztcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQgPSBuZXcgU2NyZWVuMUJhY2tHcm91bmQoKVxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kKVxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5vbihMYXlhLkV2ZW50LkRSQUdfTU9WRSwgdGhpcywgdGhpcy5vbkJhY2tncm91bmRNb3ZlKVxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5vbihMYXlhLkV2ZW50LkRSQUdfU1RBUlQsIHRoaXMsIHRoaXMub25CYWNrZ3JvdW5kU3RhcnRNb3ZlKVxyXG5cclxuXHRcdHRoaXMuZm9vdGJhbGwgPSBuZXcgRm9vdGJhbGwoKVxyXG5cdFx0dGhpcy5mb290YmFsbC5wb3MoMzI3LCAyMzMpXHQvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5mb290YmFsbClcclxuXHRcdGNvbnNvbGUubG9nKFwib25Bc3NldHNMb2FkZWRcIiwgTGF5YS5zdGFnZS5oZWlnaHQsIExheWEuQnJvd3Nlci5oZWlnaHQsIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQpXHJcblxyXG5cdFx0Ly8g6K6h566X6IOM5pmv5Y+v5ouW5Yqo5Yy65Z+fXHJcblx0XHRjb25zdCBtb2FibGVIZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdHRoaXMuZHJhZ1JlZ2lvbiA9IG5ldyBMYXlhLlJlY3RhbmdsZSgwLCAtbW9hYmxlSGVpZ2h0LCAwLCBtb2FibGVIZWlnaHQpXHJcblxyXG5cdFx0Ly8gTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsIHRoaXMsIHRoaXMub25Nb3VzZU1vdmUpXHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vblN0YXJ0RHJhZylcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXJyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycik7XHJcblx0fVxyXG5cclxuXHRvbk1vdXNlTW92ZSgpOiB2b2lkIHtcclxuXHRcdC8vIOWni+e7iOS/neaMgeS4u+inkuWSjOm8oOagh+S9jee9ruS4gOiHtFxyXG5cdFx0Ly8gdGhpcy5mb290YmFsbC5wb3MoTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbk1vdXNlTW92ZVwiLCBMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHRjb25zb2xlLmxvZyhgbWFwWyR7TGF5YS5zdGFnZS5tb3VzZVl9XSA9ICR7TGF5YS5zdGFnZS5tb3VzZVh9YClcclxuXHRcdHRoaXMuZm9vdGJhbGwucG9zKExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHR9XHJcblxyXG5cdG9uU3RhcnREcmFnKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblN0YXJ0RHJhZ1wiLCBMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0YXJ0RHJhZyh0aGlzLmRyYWdSZWdpb24sIGZhbHNlLCAwKVxyXG5cdH1cclxuXHJcblx0b25CYWNrZ3JvdW5kU3RhcnRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETzog6L+Z6YeM5ZCM5qC36KaB5YGa5LiA5Lqb6IO95ZCm5ouW5Yqo55qE5Yik5pat77yMb25CYWNrZ3JvdW5kTW92ZemDqOWIhumAu+i+keS5n+mAguW6lOS6juatpOaWueazlVxyXG5cdH1cclxuXHJcblx0XHJcblxyXG5cdG9uQmFja2dyb3VuZE1vdmUoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uQmFja2dyb3VuZE1vdmVcIiwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC54LCB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnksIHRoaXMuZm9vdGJhbGwueCwgdGhpcy5mb290YmFsbC55KVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgwMCkge1x0Ly8g5LiN57uZ5ouW5Yqo77yMXGLmkYfkuIDmkYfmmL7npLrlsITpl6jliqjnlLtcclxuXHRcdFx0XHJcblxyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaSkge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4flsITpl6jliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4flsITpl6jliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIFRPRE86IOaYr+WQpuaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cclxuXHRcdFx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHJcblx0XHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlKVxyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdH1cclxuXHRcclxuXHRcdFxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODAwKSB7IC8vIOmakOiXj+i2s+eQg1xyXG5cdFx0XHR0aGlzLmZvb3RiYWxsLmhpZGUoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5mb290YmFsbC5zaG93KClcclxuXHJcblx0XHRcdC8vIOenu+WKqOi2s+eQg+S9jee9rlxyXG5cdFx0XHRjb25zdCB5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMlxyXG5cdFx0XHRjb25zdCB4ID0gZ2V0Rm9vdGJhbGxYKHkpXHJcblx0XHRcdGlmICh4ID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnkgPSB5XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wb3MoeCwgeSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g5Yik5pat6Laz55CD5piv5ZCm6ZyA6KaB5peL6L2sXHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTUwMCkge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwuc3RvcFJvdGF0ZSgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wbGF5Um90YXRlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvmN1cCBhbmlcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3VwXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY3VwXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImN1cFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+5Y+j5ZOo5Yqo55S7XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0b25EZXZpY2VTaGFrZSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hha2VDb3VudCArK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudCArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50ID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG90XCIpXHJcblx0XHRcdC8vIFRPRE86IOi/memHjOmcgOimgeetieWKqOeUu+aSreaUvuWujOaJjeiuvue9rnRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dDb25zb2xlVGV4dCh2aXNpYmxlOiBib29sZWFuKTp2b2lkXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29uc29sZSA9IG5ldyBMYXlhLlRleHQoKTtcclxuXHRcdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnNvbGUpO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUuek9yZGVyID0gMTAwMDFcclxuXHRcdFx0dGhpcy5jb25zb2xlLnkgPSAgMTA7XHJcblx0XHRcdHRoaXMuY29uc29sZS53aWR0aCA9IExheWEuc3RhZ2Uud2lkdGg7XHJcblx0XHRcdHRoaXMuY29uc29sZS5oZWlnaHQgPSAyMDA7XHJcblx0XHRcdHRoaXMuY29uc29sZS5jb2xvciA9IFwiI0ZGRkZGRlwiO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUuZm9udFNpemUgPSAyMDtcclxuXHRcdFx0dGhpcy5jb25zb2xlLmxlYWRpbmcgPSAxMDtcclxuXHRcdFx0dGhpcy5jb25zb2xlLmJnQ29sb3IgPSBcIiMwMDAwMDBcIlxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudmlzaWJsZSA9IHZpc2libGVcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuXG4vKipcbiAqIOWcuuaZrzHog4zmma9cbiAqL1xuXG50eXBlIEFuaU5hbWUgPSBcImN1cFwiIHwgXCJ3aGlzdGxlXCIgfCBcInNob3RcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4xQmFja0dyb3VuZCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIGJnOiBMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGN1cEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBzaG90QW5pOiBMYXlhLkFuaW1hdGlvblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmcgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnLmxvYWRJbWFnZShcImJnL2JhY2tncm91bmQxLnBuZ1wiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcpXG5cbiAgICAgICAgdGhpcy5jdXBBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyBUT0RPOiDosIPmlbTliqjnlLtcbiAgICAgICAgdGhpcy5jdXBBbmkubG9hZEFuaW1hdGlvbihcImFuaS9DdXBBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXBBbmkpXG4gICAgICAgIC8vIFRPRE86IOiwg+aVtOS9jee9rlxuICAgICAgICB0aGlzLmN1cEFuaS5wb3MoNDAwLCAxMDIwKVxuICAgICBcblxuICAgICAgICB0aGlzLndoaXN0bGVBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XaGlzdGxlQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2hpc3RsZUFuaSlcbiAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBvcygxMDAsIDk4MClcbiAgICAgXG5cbiAgICAgICAgdGhpcy5zaG90QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5zaG90QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU2hvdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNob3RBbmkpXG4gICAgICAgIHRoaXMuc2hvdEFuaS5wb3MoMjAwLCAxNjAwKVxuICBcbiAgICB9XG5cbiAgICBzdG9wQW5pKGFuaU5hbWU6IEFuaU5hbWUpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXBBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2hpc3RsZUFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zaG90QW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheUFuaShhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VwQW5pLnBsYXkoMCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2hpc3RsZUFuaS5wbGF5KDAsIGZhbHNlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RBbmkucGxheSgwLCBmYWxzZSlcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pUGxheWluZyhhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS5pc1BsYXlpbmdcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpc3RsZUFuaS5pc1BsYXlpbmdcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdEFuaS5pc1BsYXlpbmdcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRBbmlWaXNpYmxlKGFuaU5hbWU6IEFuaU5hbWUsIHZpc2libGU6IGJvb2xlYW4pIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jdXBBbmkudmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3RBbmkudmlzaWJsZSA9IHZpc2libGVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pVmlzaWJsZShhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS52aXNpYmxlXG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkudmlzaWJsZVxuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaG90QW5pLnZpc2libGVcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn0iXX0=
