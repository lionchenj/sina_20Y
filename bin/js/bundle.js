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
    Constants.stateHeight = Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height + Constants.background5Height;
    Constants.scaleMode = "noborder";
    Constants.screenMode = "vertical";
    Constants.sound0 = "res/sound/0.mp3";
    Constants.sound1 = "res/sound/1.mp3";
    Constants.sound2 = "res/sound/2.mp3";
    Constants.sound3 = "res/sound/3.mp3";
    Constants.sound4 = "res/sound/4.mp3";
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

},{"./ui/layaMaxUI":12}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("./GameConfig");
var Screen1BackGround_1 = require("./Screen1BackGround");
var Football_1 = require("./Football");
var FootballPath_1 = require("./FootballPath");
var QuestionDialog_1 = require("./QuestionDialog");
var Constants_1 = require("./Constants");
var QuestionData_1 = require("./QuestionData");
var LoadingDialog_1 = require("./LoadingDialog");
var ShakeDialog_1 = require("./ShakeDialog");
var ScrollDialog_1 = require("./ScrollDialog");
var Main = /** @class */ (function () {
    function Main() {
        this.shakeCount = 0;
        this.hasPlayShotAni = false;
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
        console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight);
        // 计算背景可拖动区域
        var moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
        this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight);
        // Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
        this.loadingDialog.updateTip("加载失败: " + err);
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
        // 显示问题
        var needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y);
        if (needShowQuestion) {
            this.screen1BackGround.stopDrag();
            return;
        }
        // TODO: 根据实际情况显示点击提示
        // this.showTipDialog("click_white")
        // this.showTipDialog("click_black")
        // if (this.screen1BackGround.y <= -1100) {	// 不给拖动，摇一摇显示射门动画
        // 	if (this.hasPlayShotAni) {
        // 		this.console.text += '已经显示过射门动画\n';
        // 	} else {
        // 		this.console.text += '没有显示过射门动画\n';
        // 		this.screen1BackGround.stopDrag()
        // 		// 显示过摇一摇提示
        // 		this.showShakeDialog()			
        // 	}
        // }
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
        if (this.screen1BackGround.y <= -2455 && this.screen1BackGround.y >= -2600) {
            if (!this.screen1BackGround.isAniPlaying("win")) {
                this.screen1BackGround.playAni("win");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("win")) {
                this.screen1BackGround.stopAni("win");
            }
        }
        //page2
        if (this.screen1BackGround.y <= -3490 && this.screen1BackGround.y >= -3690) {
            if (!this.screen1BackGround.isAniPlaying("page02Start")) {
                this.screen1BackGround.playAni("page02Start");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("page02Start")) {
                this.screen1BackGround.stopAni("page02Start");
            }
        }
        if (this.screen1BackGround.y <= -3700 && this.screen1BackGround.y >= -3850) {
            if (!this.screen1BackGround.isAniPlaying("dumbbell")) {
                this.screen1BackGround.playAni("dumbbell");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("dumbbell")) {
                this.screen1BackGround.stopAni("dumbbell");
            }
        }
        if (this.screen1BackGround.y <= -4000 && this.screen1BackGround.y >= -4150) {
            if (!this.screen1BackGround.isAniPlaying("equipment")) {
                this.screen1BackGround.playAni("equipment");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("equipment")) {
                this.screen1BackGround.stopAni("equipment");
            }
        }
        if (this.screen1BackGround.y <= -4300 && this.screen1BackGround.y >= -4450) {
            if (!this.screen1BackGround.isAniPlaying("clock")) {
                this.screen1BackGround.playAni("clock");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("clock")) {
                this.screen1BackGround.stopAni("clock");
            }
        }
        if (this.screen1BackGround.y <= -4610 && this.screen1BackGround.y >= -4710) {
            if (!this.screen1BackGround.isAniPlaying("text2004")) {
                this.screen1BackGround.playAni("text2004");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2004")) {
                this.screen1BackGround.stopAni("text2004");
            }
        }
        if (this.screen1BackGround.y <= -4800 && this.screen1BackGround.y >= -4810) {
            if (!this.screen1BackGround.isAniPlaying("electricman")) {
                this.screen1BackGround.playAni("electricman");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("electricman")) {
                this.screen1BackGround.stopAni("electricman");
            }
        }
        if (this.screen1BackGround.y <= -5070 && this.screen1BackGround.y >= -5200) {
            if (!this.screen1BackGround.isAniPlaying("liuxiang")) {
                this.screen1BackGround.playAni("liuxiang");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("liuxiang")) {
                this.screen1BackGround.stopAni("liuxiang");
            }
        }
        //page3
        if (this.screen1BackGround.y <= -6010 && this.screen1BackGround.y >= -6380) {
            if (!this.screen1BackGround.isAniPlaying("computer")) {
                this.screen1BackGround.playAni("computer");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("computer")) {
                this.screen1BackGround.stopAni("computer");
            }
        }
        if (this.screen1BackGround.y <= -6575 && this.screen1BackGround.y >= -6700) {
            if (!this.screen1BackGround.isAniPlaying("medal")) {
                this.screen1BackGround.playAni("medal");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("medal")) {
                this.screen1BackGround.stopAni("medal");
            }
        }
        if (this.screen1BackGround.y <= -6824 && this.screen1BackGround.y >= -7000) {
            if (!this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.playAni("stage");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.stopAni("stage");
            }
        }
        if (this.screen1BackGround.y <= -7426 && this.screen1BackGround.y >= -7600) {
            if (!this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.playAni("text2008");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.stopAni("text2008");
            }
        }
        if (this.screen1BackGround.y <= -7722 && this.screen1BackGround.y >= -8000) {
            if (!this.screen1BackGround.isAniPlaying("crowd")) {
                this.screen1BackGround.playAni("crowd");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("crowd")) {
                this.screen1BackGround.stopAni("crowd");
            }
        }
        //page4
        if (this.screen1BackGround.y <= -8100 && this.screen1BackGround.y >= -8360) {
            if (!this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.playAni("heart");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.stopAni("heart");
            }
        }
        if (this.screen1BackGround.y <= -8360 && this.screen1BackGround.y >= -8500) {
            if (!this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.playAni("text2012");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.stopAni("text2012");
            }
        }
        if (this.screen1BackGround.y <= -8677 && this.screen1BackGround.y >= -8800) {
            if (!this.screen1BackGround.isAniPlaying("waterRight")) {
                this.screen1BackGround.playAni("waterRight");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("waterRight")) {
                this.screen1BackGround.stopAni("waterRight");
            }
        }
        if (this.screen1BackGround.y <= -8685 && this.screen1BackGround.y >= -8800) {
            if (!this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.playAni("board");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.stopAni("board");
            }
        }
        if (this.screen1BackGround.y <= -8930 && this.screen1BackGround.y >= -9100) {
            if (!this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.playAni("wall");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.stopAni("wall");
            }
        }
        if (this.screen1BackGround.y <= -9280 && this.screen1BackGround.y >= -9400) {
            if (!this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.playAni("goggles");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.stopAni("goggles");
            }
        }
        if (this.screen1BackGround.y <= -9657 && this.screen1BackGround.y >= -9800) {
            if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.playAni("waterLeft");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.stopAni("waterLeft");
            }
        }
        if (this.screen1BackGround.y <= -10000 && this.screen1BackGround.y >= -10100) {
            if (!this.screen1BackGround.isAniPlaying("winMan")) {
                this.screen1BackGround.playAni("winMan");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("winMan")) {
                this.screen1BackGround.stopAni("winMan");
            }
        }
        //page5
        if (this.screen1BackGround.y <= -10536 && this.screen1BackGround.y >= -10748) {
            if (!this.screen1BackGround.isAniPlaying("ball")) {
                this.screen1BackGround.playAni("ball");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("ball")) {
                this.screen1BackGround.stopAni("ball");
            }
        }
        if (this.screen1BackGround.y <= -10536 && this.screen1BackGround.y >= -10748) {
            if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
                this.screen1BackGround.playAni("scoreboard");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("scoreboard")) {
                this.screen1BackGround.stopAni("scoreboard");
            }
        }
        if (this.screen1BackGround.y <= -11127 && this.screen1BackGround.y >= -11254) {
            if (!this.screen1BackGround.isAniPlaying("shoes")) {
                this.screen1BackGround.playAni("shoes");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("shoes")) {
                this.screen1BackGround.stopAni("shoes");
            }
        }
        if (this.screen1BackGround.y <= -11411 && this.screen1BackGround.y >= -11560) {
            if (!this.screen1BackGround.isAniPlaying("hat")) {
                this.screen1BackGround.playAni("hat");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("hat")) {
                this.screen1BackGround.stopAni("hat");
            }
        }
        if (this.screen1BackGround.y <= -11868 && this.screen1BackGround.y >= -11969) {
            if (!this.screen1BackGround.isAniPlaying("ballMan")) {
                this.screen1BackGround.playAni("ballMan");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("ballMan")) {
                this.screen1BackGround.stopAni("ballMan");
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
            Laya.SoundManager.playSound(Constants_1.default.sound0);
            // Laya.SoundManager.playSound(Constants.sound1)
            // Laya.SoundManager.playSound(Constants.sound2)
            // Laya.SoundManager.playSound(Constants.sound3)
            // Laya.SoundManager.playSound(Constants.sound4)
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
        // if (length >= 10) {
        if (y) {
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
        questionDialog.popup(true);
        questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index]);
    };
    Main.prototype.showShakeDialog = function () {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        this.shakeDialog = new ShakeDialog_1.default();
        this.shakeDialog.popup();
        // 监听摇一摇
        Laya.Shake.instance.start(5, 500);
        Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake);
        this.console.text += '开始接收设备摇动\n';
    };
    Main.prototype.showTipDialog = function (tipType) {
        UIConfig.closeDialogOnSide = true;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        var scrollDialog = new ScrollDialog_1.default(tipType);
        scrollDialog.popup(true);
    };
    Main.prototype.onMaskLayer = function (item) {
        alert("onMaskLayer:" + item);
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

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./LoadingDialog":5,"./QuestionData":7,"./QuestionDialog":8,"./Screen1BackGround":9,"./ScrollDialog":10,"./ShakeDialog":11}],7:[function(require,module,exports){
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

},{"./ui/layaMaxUI":12}],9:[function(require,module,exports){
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
        this.ShotAni = new Laya.Animation();
        this.ShotAni.loadAnimation("ani/ShotAni.ani");
        this.addChild(this.ShotAni);
        this.ShotAni.pos(200, 1600);
        this.text2002Ani = new Laya.Animation();
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani");
        this.addChild(this.text2002Ani);
        this.text2002Ani.pos(360, 2500);
        this.winAni = new Laya.Animation();
        this.winAni.loadAnimation("ani/winAni.ani");
        this.addChild(this.winAni);
        this.winAni.pos(280, 3000);
        //page2
        this.page02StartAni = new Laya.Animation();
        this.page02StartAni.loadAnimation("ani/page02StartAni.ani");
        this.addChild(this.page02StartAni);
        this.page02StartAni.pos(247, 3802);
        this.dumbbellAni = new Laya.Animation();
        this.dumbbellAni.loadAnimation("ani/dumbbellAni.ani");
        this.addChild(this.dumbbellAni);
        this.dumbbellAni.pos(320, 4132);
        this.equipmentAni = new Laya.Animation();
        this.equipmentAni.loadAnimation("ani/equipmentAni.ani");
        this.addChild(this.equipmentAni);
        this.equipmentAni.pos(355, 4430);
        this.clockAni = new Laya.Animation();
        this.clockAni.loadAnimation("ani/clockAni.ani");
        this.addChild(this.clockAni);
        this.clockAni.pos(152, 4695);
        this.text2004Ani = new Laya.Animation();
        this.text2004Ani.loadAnimation("ani/text2004Ani.ani");
        this.addChild(this.text2004Ani);
        this.text2004Ani.pos(337, 5038);
        this.electricmanAni = new Laya.Animation();
        this.electricmanAni.loadAnimation("ani/electricmanAni.ani");
        this.addChild(this.electricmanAni);
        this.electricmanAni.pos(328, 5262);
        this.liuxiangAni = new Laya.Animation();
        this.liuxiangAni.loadAnimation("ani/liuxiangAni.ani");
        this.addChild(this.liuxiangAni);
        this.liuxiangAni.pos(263, 5700);
        //page3
        this.ComputerAni = new Laya.Animation();
        this.ComputerAni.loadAnimation("ani/ComputerAni.ani");
        this.addChild(this.ComputerAni);
        this.ComputerAni.pos(240, 6545);
        this.MedalAni = new Laya.Animation();
        this.MedalAni.loadAnimation("ani/MedalAni.ani");
        this.addChild(this.MedalAni);
        this.MedalAni.pos(333, 6949);
        this.StageAni = new Laya.Animation();
        this.StageAni.loadAnimation("ani/StageAni.ani");
        this.addChild(this.StageAni);
        this.StageAni.pos(219, 7265);
        this.text2008Ani = new Laya.Animation();
        this.text2008Ani.loadAnimation("ani/text2008Ani.ani");
        this.addChild(this.text2008Ani);
        this.text2008Ani.pos(231, 7736);
        this.CrowdAni = new Laya.Animation();
        this.CrowdAni.loadAnimation("ani/CrowdAni.ani");
        this.addChild(this.CrowdAni);
        this.CrowdAni.pos(270, 8020);
        //page4
        this.HeartAni = new Laya.Animation();
        this.HeartAni.loadAnimation("ani/HeartAni.ani");
        this.addChild(this.HeartAni);
        this.HeartAni.pos(180, 8424);
        this.text2012Ani = new Laya.Animation();
        this.text2012Ani.loadAnimation("ani/text2012Ani.ani");
        this.addChild(this.text2012Ani);
        this.text2012Ani.pos(248, 8797);
        // this.WaterRightAni = new Laya.Animation()
        // this.WaterRightAni.loadAnimation("ani/WaterRightAni.ani")
        // this.addChild(this.WaterRightAni)
        // this.WaterRightAni.pos(370, 9100)
        this.BoardAni = new Laya.Animation();
        this.BoardAni.loadAnimation("ani/BoardAni.ani");
        this.addChild(this.BoardAni);
        this.BoardAni.pos(257, 9062);
        this.WallAni = new Laya.Animation();
        this.WallAni.loadAnimation("ani/WallAni.ani");
        this.addChild(this.WallAni);
        this.WallAni.pos(285, 9310);
        this.GogglesAni = new Laya.Animation();
        this.GogglesAni.loadAnimation("ani/GogglesAni.ani");
        this.addChild(this.GogglesAni);
        this.GogglesAni.pos(355, 9714);
        this.WaterLeftAni = new Laya.Animation();
        this.WaterLeftAni.loadAnimation("ani/WaterLeftAni.ani");
        this.addChild(this.WaterLeftAni);
        this.WaterLeftAni.pos(163, 10097);
        this.WinManAni = new Laya.Animation();
        this.WinManAni.loadAnimation("ani/WinManAni.ani");
        this.addChild(this.WinManAni);
        this.WinManAni.pos(254, 10600);
        //page5
        this.ScoreboardAni = new Laya.Animation();
        this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani");
        this.addChild(this.ScoreboardAni);
        this.ScoreboardAni.pos(257, 11075);
        this.BallAni = new Laya.Animation();
        this.BallAni.loadAnimation("ani/BallAni.ani");
        this.addChild(this.BallAni);
        this.BallAni.pos(127, 11065);
        this.ShoesAni = new Laya.Animation();
        this.ShoesAni.loadAnimation("ani/ShoesAni.ani");
        this.addChild(this.ShoesAni);
        this.ShoesAni.pos(338, 11742);
        this.HatAni = new Laya.Animation();
        this.HatAni.loadAnimation("ani/HatAni.ani");
        this.addChild(this.HatAni);
        this.HatAni.pos(207, 12010);
        this.BallManAni = new Laya.Animation();
        this.BallManAni.loadAnimation("ani/BallManAni.ani");
        this.addChild(this.BallManAni);
        this.BallManAni.pos(265, 12470);
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
                this.BallAni.gotoAndStop(0);
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
            case "computer":
                this.ComputerAni.gotoAndStop(30);
                break;
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
                this.HatAni.gotoAndStop(0);
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
            case "page02Start":
                this.page02StartAni.gotoAndStop(30);
                break;
            case "scoreboard":
                this.ScoreboardAni.gotoAndStop(0);
                break;
            case "shoes":
                this.ShoesAni.gotoAndStop(0);
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
                this.winAni.gotoAndStop(30);
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
            case "computer":
                this.ComputerAni.play(0, false);
                break;
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
            case "page02Start":
                this.page02StartAni.play(0, false);
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
                this.winAni.play(0, false);
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
            case "computer":
                return this.ComputerAni.isPlaying;
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
            case "page02Start":
                return this.page02StartAni.isPlaying;
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
            case "computer":
                this.ComputerAni.visible = visible;
                break;
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
            case "page02Start":
                this.page02StartAni.visible = visible;
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
            case "computer":
                return this.ComputerAni.visible;
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
            case "page02Start":
                return this.page02StartAni.visible;
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

},{"./ui/layaMaxUI":12}],11:[function(require,module,exports){
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

},{"./ui/layaMaxUI":12}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTG9hZGluZ0RpYWxvZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1F1ZXN0aW9uRGF0YS50cyIsInNyYy9RdWVzdGlvbkRpYWxvZy50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyIsInNyYy9TY3JvbGxEaWFsb2cudHMiLCJzcmMvU2hha2VEaWFsb2cudHMiLCJzcmMvdWkvbGF5YU1heFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0lBQUE7SUEyQkEsQ0FBQztJQXpCVSxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUd4QixvQkFBVSxHQUFHLEdBQUcsQ0FBQTtJQUNoQixxQkFBVyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxpQkFB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QUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQWlCZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBa0JkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBbUJmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFH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QUMsQ0FBQztZQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRTtnQkFDN0MsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDNUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDNUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDNUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDNUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRTtnQkFDN0MsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDcEM7WUFDRCxJQUFN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RyxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLFVBQVUsRUFBRSxtQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDaEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsbUJBQVMsQ0FBQyxpQkFBaUIsR0FBRyxtQkFBUyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN4RyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBUyxDQUFDLFVBQVUsRUFBRSxtQkFBUyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDaEUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsbUJBQVMsQ0FBQyxpQkFBaUIsR0FBRyxtQkFBUyxDQUFDLGlCQUFpQixHQUFHLG1CQUFTLENBQUMsaUJBQWlCLEdBQUcsbUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxD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SyxTQUFTO2dCQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDbkMsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEMsS0FBSyxTQUFTO2dCQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDbkMsS0FBSyxPQUFPO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSyxPQUFPO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxPQUFPO2dCQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakMsS0FBSyxVQUFVO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7WUFDcEMsS0FBSyxhQUFhO2dCQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7WUFDdkMsS0FBSyxXQUFXO2dCQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDckMsS0FBSyxTQUFTO2dCQUNWLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENB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U0FBTSxLQUFOLFNBQU0sUUE0Q3RCO0FBQUQsQ0FBQyxFQTVDYSxFQUFFLEdBQUYsVUFBRSxLQUFGLFVBQUUsUUE0Q2YiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RhbnRzIHtcblxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMSA9IFwiYmcvYmFja2dyb3VuZDEucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDIgPSBcImJnL2JhY2tncm91bmQyLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQzID0gXCJiZy9iYWNrZ3JvdW5kMy5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNCA9IFwiYmcvYmFja2dyb3VuZDQucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDUgPSBcImJnL2JhY2tncm91bmQ1LnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQxSGVpZ2h0ID0gMzYwNFxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMkhlaWdodCA9IDI1NjFcbiAgICBzdGF0aWMgYmFja2dyb3VuZDNIZWlnaHQgPSAyMTkwXG4gICAgc3RhdGljIGJhY2tncm91bmQ0SGVpZ2h0ID0gMjU1OVxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNUhlaWdodCA9IDE5MjBcblxuXG4gICAgc3RhdGljIHN0YWdlV2lkdGggPSA1MTJcbiAgICBzdGF0aWMgc3RhdGVIZWlnaHQgPSBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDRIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDVIZWlnaHRcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcIm5vYm9yZGVyXCI7XG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwidmVydGljYWxcIjtcblxuICAgIHN0YXRpYyBzb3VuZDAgPSBcInJlcy9zb3VuZC8wLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMSA9IFwicmVzL3NvdW5kLzEubXAzXCJcbiAgICBzdGF0aWMgc291bmQyID0gXCJyZXMvc291bmQvMi5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDMgPSBcInJlcy9zb3VuZC8zLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kNCA9IFwicmVzL3NvdW5kLzQubXAzXCJcblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb290YmFsbCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICAvLyDlrprkuYnotrPnkIPkuLvkvZNcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXG4gIFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0Zvb3RiYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Laz55CD5YGc5q2i5peL6L2sXG4gICAgICovXG4gICAgc3RvcFJvdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0aGlzLmJvZHlBbmkuaXNQbGF5aW5nKXtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoMClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotrPnkINcYuaXi+i9rFxuICAgICAqL1xuICAgIHBsYXlSb3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmJvZHlBbmkuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5QW5pLnBsYXkoMCwgdHJ1ZSlcblxuICAgIH1cblxuICAgIHNob3coKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gdHJ1ZVxuICAgICAgIFxuICAgIH1cblxuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaS52aXNpYmxlID0gZmFsc2VcbiAgICB9XG5cbn0iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvb3RiYWxsWCh5OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHggPSBtYXBbeV1cbiAgICBpZiAoeCkge1xuICAgICAgICByZXR1cm4geFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgfVxufVxuY29uc3QgbWFwOiB7IFtrZXk6IG51bWJlcl06IG51bWJlciB9ID0ge307XG5cbm1hcFsyMzJdID0gMzI2XG5tYXBbMjMyXSA9IDMyOVxubWFwWzIzNF0gPSAzMzBcbm1hcFsyMzZdID0gMzMyXG5tYXBbMjM3XSA9IDMzNFxubWFwWzIzN10gPSAzMzdcbm1hcFsyMzldID0gMzM5XG5tYXBbMjM5XSA9IDM0MlxubWFwWzI0MF0gPSAzNDRcbm1hcFsyNDJdID0gMzQ1XG5tYXBbMjQ0XSA9IDM0N1xubWFwWzI0NV0gPSAzNDhcbm1hcFsyNDddID0gMzUwXG5tYXBbMjQ5XSA9IDM1MlxubWFwWzI1MF0gPSAzNTNcbm1hcFsyNTJdID0gMzU1XG5tYXBbMjU0XSA9IDM1N1xubWFwWzI1NV0gPSAzNThcbm1hcFsyNTddID0gMzYwXG5tYXBbMjU4XSA9IDM2MlxubWFwWzI1OF0gPSAzNjVcbm1hcFsyNjBdID0gMzY2XG5tYXBbMjYyXSA9IDM2OFxubWFwWzI2M10gPSAzNzBcbm1hcFsyNjVdID0gMzcxXG5tYXBbMjY3XSA9IDM3M1xubWFwWzI2OF0gPSAzNzVcbm1hcFsyNzBdID0gMzc2XG5tYXBbMjcyXSA9IDM3OFxubWFwWzI3M10gPSAzODBcbm1hcFsyNzVdID0gMzgxXG5tYXBbMjc4XSA9IDM4MVxubWFwWzI4MV0gPSAzODFcbm1hcFsyODNdID0gMzgzXG5tYXBbMjg2XSA9IDM4M1xubWFwWzI4OF0gPSAzODRcbm1hcFsyOTFdID0gMzg0XG5tYXBbMjk0XSA9IDM4NFxubWFwWzI5Nl0gPSAzODZcbm1hcFsyOTldID0gMzg2XG5tYXBbMzAzXSA9IDM4NlxubWFwWzMwNl0gPSAzODZcbm1hcFszMDldID0gMzg2XG5tYXBbMzEyXSA9IDM4NlxubWFwWzMxNl0gPSAzODZcbm1hcFszMTddID0gMzg4XG5tYXBbMzIxXSA9IDM4OFxubWFwWzMyNF0gPSAzODhcbm1hcFszMjddID0gMzg4XG5tYXBbMzMwXSA9IDM4OFxubWFwWzMzNF0gPSAzODhcbm1hcFszMzVdID0gMzg2XG5tYXBbMzM5XSA9IDM4NlxubWFwWzM0Ml0gPSAzODZcbm1hcFszNDVdID0gMzg2XG5tYXBbMzQ4XSA9IDM4NlxubWFwWzM1Ml0gPSAzODRcbm1hcFszNTVdID0gMzg0XG5tYXBbMzU3XSA9IDM4M1xubWFwWzM2MF0gPSAzODNcbm1hcFszNjFdID0gMzgxXG5tYXBbMzYzXSA9IDM4MFxubWFwWzM2NV0gPSAzNzhcbm1hcFszNjZdID0gMzc2XG5tYXBbMzcwXSA9IDM3NVxubWFwWzM3MV0gPSAzNzNcbm1hcFszNzNdID0gMzcxXG5tYXBbMzc2XSA9IDM3MFxubWFwWzM3OF0gPSAzNjhcbm1hcFszNzldID0gMzY2XG5tYXBbMzgxXSA9IDM2NVxubWFwWzM4M10gPSAzNjNcbm1hcFszODZdID0gMzYzXG5tYXBbMzg4XSA9IDM2MlxubWFwWzM4OV0gPSAzNjBcbm1hcFszOTFdID0gMzU4XG5tYXBbMzkzXSA9IDM1N1xubWFwWzM5NF0gPSAzNTVcbm1hcFszOTZdID0gMzUzXG5tYXBbMzk3XSA9IDM1MlxubWFwWzM5OV0gPSAzNTBcbm1hcFs0MDFdID0gMzQ4XG5tYXBbNDA0XSA9IDM0OFxubWFwWzQwNl0gPSAzNDdcbm1hcFs0MDddID0gMzQ1XG5tYXBbNDA5XSA9IDM0NFxubWFwWzQxMV0gPSAzNDJcbm1hcFs0MTJdID0gMzQwXG5tYXBbNDE0XSA9IDMzOVxubWFwWzQxNV0gPSAzMzdcbm1hcFs0MTddID0gMzM1XG5tYXBbNDE5XSA9IDMzNFxubWFwWzQyMF0gPSAzMzJcbm1hcFs0MjJdID0gMzMwXG5tYXBbNDI1XSA9IDMyOVxubWFwWzQyN10gPSAzMjdcbm1hcFs0MjldID0gMzI2XG5tYXBbNDMyXSA9IDMyNlxubWFwWzQzM10gPSAzMjRcbm1hcFs0MzVdID0gMzIyXG5tYXBbNDM3XSA9IDMyMVxubWFwWzQzOF0gPSAzMTlcbm1hcFs0NDBdID0gMzE3XG5tYXBbNDQyXSA9IDMxNlxubWFwWzQ0M10gPSAzMTRcbm1hcFs0NDVdID0gMzEyXG5tYXBbNDQ4XSA9IDMxMlxubWFwWzQ1MF0gPSAzMTFcbm1hcFs0NTFdID0gMzA5XG5tYXBbNDU1XSA9IDMwOFxubWFwWzQ1Nl0gPSAzMDZcbm1hcFs0NThdID0gMzA0XG5tYXBbNDYxXSA9IDMwM1xubWFwWzQ2M10gPSAzMDFcbm1hcFs0NjVdID0gMjk5XG5tYXBbNDY2XSA9IDI5OFxubWFwWzQ2OF0gPSAyOTZcbm1hcFs0NjldID0gMjk0XG5tYXBbNDcxXSA9IDI5M1xubWFwWzQ3NF0gPSAyOTNcbm1hcFs0NzZdID0gMjkxXG5tYXBbNDc4XSA9IDI5MFxubWFwWzQ3OV0gPSAyODhcbm1hcFs0ODFdID0gMjg2XG5tYXBbNDgzXSA9IDI4NVxubWFwWzQ4NF0gPSAyODNcbm1hcFs0ODZdID0gMjgxXG5tYXBbNDg3XSA9IDI4MFxubWFwWzQ5MV0gPSAyODBcbm1hcFs0OTJdID0gMjc4XG5tYXBbNDk0XSA9IDI3NlxubWFwWzQ5Nl0gPSAyNzVcbm1hcFs0OTddID0gMjczXG5tYXBbNDk5XSA9IDI3MlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbNDk5XSA9IDI3MlxubWFwWzUwMl0gPSAyNzJcbm1hcFs1MDRdID0gMjcwXG5tYXBbNTA1XSA9IDI2OFxubWFwWzUwN10gPSAyNjdcbm1hcFs1MDldID0gMjY1XG5tYXBbNTEwXSA9IDI2M1xubWFwWzUxNF0gPSAyNjJcbm1hcFs1MTVdID0gMjYwXG5tYXBbNTE3XSA9IDI1OFxubWFwWzUxOV0gPSAyNTdcbm1hcFs1MjBdID0gMjU1XG5tYXBbNTIyXSA9IDI1NFxubWFwWzUyM10gPSAyNTJcbm1hcFs1MjVdID0gMjUwXG5tYXBbNTI3XSA9IDI0N1xubWFwWzUyOF0gPSAyNDVcbm1hcFs1MzBdID0gMjQ0XG5tYXBbNTMyXSA9IDI0MlxubWFwWzUzM10gPSAyNDBcbm1hcFs1MzNdID0gMjM3XG5tYXBbNTM1XSA9IDIzNlxubWFwWzUzNl0gPSAyMzRcbm1hcFs1MzhdID0gMjMyXG5tYXBbNTQwXSA9IDIzMVxubWFwWzU0MV0gPSAyMjlcbm1hcFs1NDNdID0gMjI2XG5tYXBbNTQ1XSA9IDIyNFxubWFwWzU0Nl0gPSAyMjJcbm1hcFs1NDhdID0gMjIxXG5tYXBbNTUwXSA9IDIxOVxubWFwWzU1MV0gPSAyMThcbm1hcFs1NTNdID0gMjE2XG5tYXBbNTU2XSA9IDIxNlxubWFwWzU1OF0gPSAyMTRcbm1hcFs1NTldID0gMjEzXG5tYXBbNTYxXSA9IDIxMVxubWFwWzU2NF0gPSAyMTFcbm1hcFs1NjZdID0gMjA5XG5tYXBbNTY4XSA9IDIwOFxubWFwWzU3MV0gPSAyMDhcbm1hcFs1NzJdID0gMjA2XG5tYXBbNTc0XSA9IDIwNFxubWFwWzU3Nl0gPSAyMDNcbm1hcFs1NzldID0gMjAzXG5tYXBbNTgxXSA9IDIwMVxubWFwWzU4Ml0gPSAyMDBcbm1hcFs1ODRdID0gMTk4XG5tYXBbNTg2XSA9IDE5NlxubWFwWzU4N10gPSAxOTVcbm1hcFs1OTBdID0gMTk1XG5tYXBbNTkyXSA9IDE5M1xubWFwWzU5NV0gPSAxOTNcbm1hcFs1OTddID0gMTkxXG5tYXBbNjAwXSA9IDE5MVxubWFwWzYwMl0gPSAxOTBcbm1hcFs2MDRdID0gMTg4XG5tYXBbNjA3XSA9IDE4OFxubWFwWzYwOF0gPSAxODZcbm1hcFs2MTBdID0gMTg1XG5tYXBbNjEzXSA9IDE4NVxubWFwWzYxNV0gPSAxODNcbm1hcFs2MTddID0gMTgyXG5tYXBbNjE4XSA9IDE4MFxubWFwWzYyMl0gPSAxNzhcbm1hcFs2MjNdID0gMTc3XG5tYXBbNjI2XSA9IDE3N1xubWFwWzYyOF0gPSAxNzVcbm1hcFs2MzBdID0gMTczXG5tYXBbNjMxXSA9IDE3MlxubWFwWzYzNV0gPSAxNzJcbm1hcFs2MzZdID0gMTcwXG5tYXBbNjM4XSA9IDE2OFxubWFwWzY0MF0gPSAxNjdcbm1hcFs2NDNdID0gMTY3XG5tYXBbNjQ0XSA9IDE2NVxubWFwWzY0OF0gPSAxNjRcbm1hcFs2NTFdID0gMTY0XG5tYXBbNjUzXSA9IDE2MlxubWFwWzY1Nl0gPSAxNjJcbm1hcFs2NThdID0gMTYwXG5tYXBbNjYxXSA9IDE2MFxubWFwWzY2Ml0gPSAxNTlcbm1hcFs2NjZdID0gMTU5XG5tYXBbNjY3XSA9IDE1N1xubWFwWzY3MV0gPSAxNTdcbm1hcFs2NzJdID0gMTU1XG5tYXBbNjc2XSA9IDE1NVxubWFwWzY3OV0gPSAxNTVcbm1hcFs2ODBdID0gMTU0XG5tYXBbNjg0XSA9IDE1NFxubWFwWzY4N10gPSAxNTRcbm1hcFs2OTBdID0gMTU0XG5tYXBbNjk0XSA9IDE1NFxubWFwWzY5N10gPSAxNTRcbm1hcFs3MDBdID0gMTU0XG5tYXBbNzAzXSA9IDE1NFxubWFwWzcwN10gPSAxNTRcbm1hcFs3MTBdID0gMTU0XG5tYXBbNzEzXSA9IDE1NFxubWFwWzcxNl0gPSAxNTRcbm1hcFs3MjBdID0gMTU0XG5tYXBbNzIzXSA9IDE1NFxubWFwWzcyNl0gPSAxNTRcbm1hcFs3MzBdID0gMTU0XG5tYXBbNzMzXSA9IDE1NFxubWFwWzczNl0gPSAxNTVcbm1hcFs3MzldID0gMTU1XG5tYXBbNzQzXSA9IDE1NVxubWFwWzc0Nl0gPSAxNTVcbm1hcFs3NDldID0gMTU1XG5tYXBbNzUxXSA9IDE1N1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFs3NTFdID0gMTU1XG5tYXBbNzU0XSA9IDE1NVxubWFwWzc1Nl0gPSAxNTdcbm1hcFs3NTldID0gMTU3XG5tYXBbNzYxXSA9IDE1OVxubWFwWzc2NF0gPSAxNTlcbm1hcFs3NjVdID0gMTYwXG5tYXBbNzY3XSA9IDE2MlxubWFwWzc3MF0gPSAxNjJcbm1hcFs3NzJdID0gMTY0XG5tYXBbNzc1XSA9IDE2NFxubWFwWzc3N10gPSAxNjVcbm1hcFs3ODBdID0gMTY3XG5tYXBbNzgzXSA9IDE2N1xubWFwWzc4NV0gPSAxNjhcbm1hcFs3ODhdID0gMTY4XG5tYXBbNzkwXSA9IDE3MFxubWFwWzc5M10gPSAxNzBcbm1hcFs3OTVdID0gMTcyXG5tYXBbNzk3XSA9IDE3M1xubWFwWzgwMF0gPSAxNzNcbm1hcFs4MDFdID0gMTc1XG5tYXBbODA1XSA9IDE3NVxubWFwWzgwNl0gPSAxNzdcbm1hcFs4MDhdID0gMTc4XG5tYXBbODExXSA9IDE3OFxubWFwWzgxM10gPSAxODBcbm1hcFs4MTVdID0gMTgyXG5tYXBbODE4XSA9IDE4MlxubWFwWzgxOV0gPSAxODNcbm1hcFs4MjFdID0gMTg1XG5tYXBbODIzXSA9IDE4NlxubWFwWzgyNl0gPSAxODZcbm1hcFs4MjhdID0gMTg4XG5tYXBbODI5XSA9IDE5MFxubWFwWzgzM10gPSAxOTFcbm1hcFs4MzRdID0gMTkzXG5tYXBbODM3XSA9IDE5M1xubWFwWzgzOV0gPSAxOTVcbm1hcFs4NDFdID0gMTk2XG5tYXBbODQyXSA9IDE5OFxubWFwWzg0NF0gPSAyMDBcbm1hcFs4NDZdID0gMjAxXG5tYXBbODQ3XSA9IDIwM1xubWFwWzg0OV0gPSAyMDRcbm1hcFs4NTFdID0gMjA2XG5tYXBbODUyXSA9IDIwOFxubWFwWzg1NF0gPSAyMDlcbm1hcFs4NTddID0gMjExXG5tYXBbODU5XSA9IDIxM1xubWFwWzg2MF0gPSAyMTRcbm1hcFs4NjRdID0gMjE0XG5tYXBbODY1XSA9IDIxNlxubWFwWzg2N10gPSAyMThcbm1hcFs4NjldID0gMjE5XG5tYXBbODcwXSA9IDIyMVxubWFwWzg3Ml0gPSAyMjJcbm1hcFs4NzVdID0gMjIyXG5tYXBbODc3XSA9IDIyNFxubWFwWzg3OF0gPSAyMjZcbm1hcFs4NzhdID0gMjI5XG5tYXBbODgwXSA9IDIzMVxubWFwWzg4Ml0gPSAyMzJcbm1hcFs4ODNdID0gMjM0XG5tYXBbODg1XSA9IDIzNlxubWFwWzg4N10gPSAyMzdcbm1hcFs4ODhdID0gMjM5XG5tYXBbODkwXSA9IDI0MFxubWFwWzg5MV0gPSAyNDJcbm1hcFs4OTNdID0gMjQ0XG5tYXBbODk1XSA9IDI0NVxubWFwWzg5Nl0gPSAyNDdcbm1hcFs4OThdID0gMjQ5XG5tYXBbOTAwXSA9IDI1MFxubWFwWzkwMV0gPSAyNTJcbm1hcFs5MDNdID0gMjU0XG5tYXBbOTA1XSA9IDI1NVxubWFwWzkwOF0gPSAyNTdcbm1hcFs5MDldID0gMjU4XG5tYXBbOTEzXSA9IDI2MFxubWFwWzkxNl0gPSAyNjBcbm1hcFs5MThdID0gMjYyXG5tYXBbOTIxXSA9IDI2MlxubWFwWzkyNF0gPSAyNjJcbm1hcFs5MjddID0gMjYyXG5tYXBbOTMxXSA9IDI2MlxubWFwWzkzMl0gPSAyNjNcbm1hcFs5MzRdID0gMjYyXG5tYXBbOTM3XSA9IDI2MlxubWFwWzk0MV0gPSAyNjJcbm1hcFs5NDRdID0gMjYyXG5tYXBbOTQ3XSA9IDI2MFxubWFwWzk1MF0gPSAyNjBcbm1hcFs5NTRdID0gMjU4XG5tYXBbOTU3XSA9IDI1N1xubWFwWzk2MF0gPSAyNTVcbm1hcFs5NjNdID0gMjU0XG5tYXBbOTY3XSA9IDI1MlxubWFwWzk3MF0gPSAyNTJcbm1hcFs5NzJdID0gMjUwXG5tYXBbOTczXSA9IDI0OVxubWFwWzk3Nl0gPSAyNDlcbm1hcFs5ODBdID0gMjQ5XG5tYXBbOTgxXSA9IDI0N1xubWFwWzk4NV0gPSAyNDdcbm1hcFs5ODZdID0gMjQ1XG5tYXBbOTg4XSA9IDI0NFxubWFwWzk5MV0gPSAyNDRcbm1hcFs5OTNdID0gMjQyXG5tYXBbOTk0XSA9IDI0MFxubWFwWzk5OF0gPSAyNDBcbm1hcFs5OTldID0gMjM5XG5tYXBbMTAwMV0gPSAyMzdcbm1hcFsxMDA0XSA9IDIzNlxubWFwWzEwMDZdID0gMjM0XG5tYXBbMTAwOV0gPSAyMzJcbm1hcFsxMDExXSA9IDIzMVxubWFwWzEwMTJdID0gMjI5XG5tYXBbMTAxNF0gPSAyMjdcbm1hcFsxMDE3XSA9IDIyNlxubWFwWzEwMTldID0gMjI0XG5tYXBbMTAyMV0gPSAyMjJcbm1hcFsxMDI0XSA9IDIyMVxubWFwWzEwMjZdID0gMjE5XG5tYXBbMTAyOV0gPSAyMTlcbm1hcFsxMDMyXSA9IDIyMVxubWFwWzEwMzVdID0gMjIyXG5tYXBbMTAzOV0gPSAyMjJcbm1hcFsxMDQwXSA9IDIyNFxubWFwWzEwNDJdID0gMjI2XG5tYXBbMTA0NV0gPSAyMjZcbm1hcFsxMDQ3XSA9IDIyN1xubWFwWzEwNDhdID0gMjI5XG5tYXBbMTA1Ml0gPSAyMjlcbm1hcFsxMDUzXSA9IDIzMVxubWFwWzEwNTVdID0gMjMyXG5tYXBbMTA1OF0gPSAyMzRcbm1hcFsxMDYwXSA9IDIzNlxubWFwWzEwNjJdID0gMjM3XG5tYXBbMTA2NV0gPSAyMzlcbm1hcFsxMDY2XSA9IDI0MFxubWFwWzEwNjhdID0gMjQyXG5tYXBbMTA3MF0gPSAyNDRcbm1hcFsxMDcxXSA9IDI0NVxubWFwWzEwNzNdID0gMjQ3XG5tYXBbMTA3NV0gPSAyNDlcbm1hcFsxMDc2XSA9IDI1MFxubWFwWzEwNzhdID0gMjUyXG5tYXBbMTA4MF0gPSAyNTRcbm1hcFsxMDgxXSA9IDI1NVxubWFwWzEwODRdID0gMjU1XG5tYXBbMTA4OF0gPSAyNTVcbm1hcFsxMDkxXSA9IDI1NVxubWFwWzEwOTRdID0gMjU1XG5tYXBbMTA5Nl0gPSAyNTdcbm1hcFsxMDk5XSA9IDI1N1xubWFwWzExMDJdID0gMjU3XG5tYXBbMTEwNl0gPSAyNTdcbm1hcFsxMTA5XSA9IDI1OFxubWFwWzExMTJdID0gMjU3XG5tYXBbMTExNl0gPSAyNTdcbm1hcFsxMTE3XSA9IDI1OFxubWFwWzExMjBdID0gMjU4XG5tYXBbMTEyNF0gPSAyNThcbm1hcFsxMTI3XSA9IDI1OFxubWFwWzExMjldID0gMjYwXG5tYXBbMTEzMl0gPSAyNjBcbm1hcFsxMTM1XSA9IDI2MFxubWFwWzExMzddID0gMjYyXG5tYXBbMTE0MF0gPSAyNjJcbm1hcFsxMTQzXSA9IDI2M1xubWFwWzExNDddID0gMjYzXG5tYXBbMTE1MF0gPSAyNjNcbm1hcFsxMTUzXSA9IDI2M1xubWFwWzExNTZdID0gMjYzXG5tYXBbMTE2MF0gPSAyNjVcbm1hcFsxMTYzXSA9IDI2NVxubWFwWzExNjZdID0gMjY1XG5tYXBbMTE2OV0gPSAyNjVcbm1hcFsxMTczXSA9IDI2NVxubWFwWzExNzZdID0gMjY1XG5tYXBbMTE3OF0gPSAyNjdcbm1hcFsxMTgxXSA9IDI2N1xubWFwWzExODRdID0gMjY3XG5tYXBbMTE4N10gPSAyNjdcbm1hcFsxMTkxXSA9IDI2N1xubWFwWzExOTJdID0gMjY4XG5tYXBbMTE5Nl0gPSAyNjhcbm1hcFsxMTk5XSA9IDI2OFxubWFwWzEyMDJdID0gMjY4XG5tYXBbMTIwNF0gPSAyNzBcbm1hcFsxMjA3XSA9IDI3MFxubWFwWzEyMTBdID0gMjcwXG5tYXBbMTIxNF0gPSAyNzBcbm1hcFsxMjE1XSA9IDI3MlxubWFwWzEyMTldID0gMjcyXG5tYXBbMTIyMl0gPSAyNzJcbm1hcFsxMjI1XSA9IDI3MlxubWFwWzEyMjddID0gMjczXG5tYXBbMTIzMF0gPSAyNzNcbm1hcFsxMjMzXSA9IDI3M1xubWFwWzEyMzddID0gMjczXG5tYXBbMTI0MF0gPSAyNzNcbm1hcFsxMjQxXSA9IDI3NVxubWFwWzEyNDVdID0gMjc1XG5tYXBbMTI0OF0gPSAyNzVcbm1hcFsxMjUxXSA9IDI3NVxubWFwWzEyNTVdID0gMjc1XG5tYXBbMTI1OF0gPSAyNzVcbm1hcFsxMjU5XSA9IDI3NlxubWFwWzEyNjNdID0gMjc2XG5tYXBbMTI2Nl0gPSAyNzZcbm1hcFsxMjY5XSA9IDI3NlxubWFwWzEyNzNdID0gMjc2XG5tYXBbMTI3Nl0gPSAyNzZcbm1hcFsxMjc3XSA9IDI3OFxubWFwWzEyODFdID0gMjc4XG5tYXBbMTI4NF0gPSAyNzhcbm1hcFsxMjg3XSA9IDI3OFxubWFwWzEyODldID0gMjgwXG5tYXBbMTI5Ml0gPSAyODBcbm1hcFsxMjk1XSA9IDI4MFxubWFwWzEyOTddID0gMjgxXG5tYXBbMTMwMF0gPSAyODFcbm1hcFsxMzAyXSA9IDI4M1xubWFwWzEzMDVdID0gMjg1XG5tYXBbMTMwOV0gPSAyODZcbm1hcFsxMzEwXSA9IDI4OFxubWFwWzEzMTNdID0gMjg4XG5tYXBbMTMxNV0gPSAyOTBcbm1hcFsxMzE3XSA9IDI5MVxubWFwWzEzMjBdID0gMjkxXG5tYXBbMTMyMl0gPSAyOTNcbm1hcFsxMzIzXSA9IDI5NFxubWFwWzEzMjVdID0gMjk2XG5tYXBbMTMyOF0gPSAyOTZcbm1hcFsxMzMwXSA9IDI5OFxubWFwWzEzMzFdID0gMjk5XG5tYXBbMTMzM10gPSAzMDFcbm1hcFsxMzM2XSA9IDMwM1xubWFwWzEzMzhdID0gMzA0XG5tYXBbMTM0MV0gPSAzMDRcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFsxMzQxXSA9IDMwNFxubWFwWzEzNDRdID0gMzA0XG5tYXBbMTM0Nl0gPSAzMDZcbm1hcFsxMzQ5XSA9IDMwNlxubWFwWzEzNTJdID0gMzA2XG5tYXBbMTM1NF0gPSAzMDhcbm1hcFsxMzU3XSA9IDMwOFxubWFwWzEzNjBdID0gMzA4XG5tYXBbMTM2Ml0gPSAzMDlcbm1hcFsxMzY1XSA9IDMwOVxubWFwWzEzNjldID0gMzA5XG5tYXBbMTM3MF0gPSAzMTFcbm1hcFsxMzczXSA9IDMxMVxubWFwWzEzNzddID0gMzExXG5tYXBbMTM3OF0gPSAzMTJcbm1hcFsxMzgyXSA9IDMxMlxubWFwWzEzODVdID0gMzEyXG5tYXBbMTM4N10gPSAzMTRcbm1hcFsxMzkwXSA9IDMxNFxubWFwWzEzOTNdID0gMzE0XG5tYXBbMTM5NV0gPSAzMTZcbm1hcFsxMzk4XSA9IDMxNlxubWFwWzE0MDFdID0gMzE2XG5tYXBbMTQwNV0gPSAzMTZcbm1hcFsxNDA4XSA9IDMxNlxubWFwWzE0MDldID0gMzE3XG5tYXBbMTQxM10gPSAzMTdcbm1hcFsxNDE2XSA9IDMxN1xubWFwWzE0MTldID0gMzE3XG5tYXBbMTQyM10gPSAzMTdcbm1hcFsxNDI0XSA9IDMxOVxubWFwWzE0MjddID0gMzE5XG5tYXBbMTQzMV0gPSAzMTlcbm1hcFsxNDMyXSA9IDMyMVxubWFwWzE0MzZdID0gMzIxXG5tYXBbMTQzOV0gPSAzMjFcbm1hcFsxNDQxXSA9IDMyMlxubWFwWzE0NDRdID0gMzIyXG5tYXBbMTQ0N10gPSAzMjJcbm1hcFsxNDQ5XSA9IDMyNFxubWFwWzE0NTJdID0gMzI0XG5tYXBbMTQ1NV0gPSAzMjRcbm1hcFsxNDU3XSA9IDMyNlxubWFwWzE0NjBdID0gMzI2XG5tYXBbMTQ2M10gPSAzMjZcbm1hcFsxNDY3XSA9IDMyNlxubWFwWzE0NzBdID0gMzI2XG5tYXBbMTQ3M10gPSAzMjZcbm1hcFsxNDc2XSA9IDMyNlxubWFwWzE0ODBdID0gMzI2XG5tYXBbMTQ4M10gPSAzMjZcbm1hcFsxNDg2XSA9IDMyNlxubWFwWzE0OTBdID0gMzI2XG5tYXBbMTQ5M10gPSAzMjZcbm1hcFsxNDk2XSA9IDMyNlxubWFwWzE0OTldID0gMzI2XG5tYXBbMTUwM10gPSAzMjZcbm1hcFsxNTA2XSA9IDMyNlxubWFwWzE1MDhdID0gMzI0XG5tYXBbMTUxMV0gPSAzMjRcbm1hcFsxNTE0XSA9IDMyNFxubWFwWzE1MTddID0gMzI0XG5tYXBbMTUxOV0gPSAzMjJcbm1hcFsxNTIyXSA9IDMyMlxubWFwWzE1MjZdID0gMzIyXG5tYXBbMTUyN10gPSAzMjFcbm1hcFsxNTI3XSA9IDMyMVxubWFwWzE1MzBdID0gMzIxXG5tYXBbMTUzNF0gPSAzMjFcbm1hcFsxNTM3XSA9IDMyMVxubWFwWzE1NDBdID0gMzIxXG5tYXBbMTU0NF0gPSAzMjFcbm1hcFsxNTQ3XSA9IDMyMVxubWFwWzE1NTBdID0gMzIxXG5tYXBbMTU1Ml0gPSAzMTlcbm1hcFsxNTU1XSA9IDMxOVxubWFwWzE1NTddID0gMzE3XG5tYXBbMTU2MF0gPSAzMTdcbm1hcFsxNTYyXSA9IDMxNlxubWFwWzE1NjVdID0gMzE2XG5tYXBbMTU2Nl0gPSAzMTRcbm1hcFsxNTcwXSA9IDMxNFxubWFwWzE1NzNdID0gMzE0XG5tYXBbMTU3NV0gPSAzMTJcbm1hcFsxNTc4XSA9IDMxMlxubWFwWzE1ODFdID0gMzExXG5tYXBbMTU4NF0gPSAzMTFcbm1hcFsxNTg4XSA9IDMwOVxubWFwWzE1OTFdID0gMzA5XG5tYXBbMTU5NF0gPSAzMDlcbm1hcFsxNTk2XSA9IDMwOFxubWFwWzE1OTldID0gMzA4XG5tYXBbMTYwMV0gPSAzMDhcbm1hcFsxNjAxXSA9IDMwOFxubWFwWzE2MDRdID0gMzA4XG5tYXBbMTYwNl0gPSAzMDZcbm1hcFsxNjA5XSA9IDMwNlxubWFwWzE2MTJdID0gMzA0XG5tYXBbMTYxNl0gPSAzMDRcbm1hcFsxNjE3XSA9IDMwM1xubWFwWzE2MjBdID0gMzAzXG5tYXBbMTYyNF0gPSAzMDNcbm1hcFsxNjI3XSA9IDMwM1xubWFwWzE2MjldID0gMzAxXG5tYXBbMTYzMl0gPSAzMDFcbm1hcFsxNjM1XSA9IDMwMVxubWFwWzE2MzddID0gMjk5XG5tYXBbMTY0MF0gPSAyOTlcbm1hcFsxNjQzXSA9IDI5OVxubWFwWzE2NDddID0gMjk5XG5tYXBbMTY1MF0gPSAyOTlcbm1hcFsxNjUyXSA9IDI5OFxubWFwWzE2NTVdID0gMjk4XG5tYXBbMTY1OF0gPSAyOThcbm1hcFsxNjYxXSA9IDI5OFxubWFwWzE2NjVdID0gMjk4XG5tYXBbMTY2Nl0gPSAyOTZcbm1hcFsxNjY5XSA9IDI5NlxubWFwWzE2NzNdID0gMjk2XG5tYXBbMTY3NF0gPSAyOTRcbm1hcFsxNjc2XSA9IDI5NFxubWFwWzE2NzldID0gMjk0XG5tYXBbMTY4M10gPSAyOTRcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODddID0gMjkzXG5tYXBbMTY5MV0gPSAyOTNcbm1hcFsxNjk0XSA9IDI5M1xubWFwWzE2OTddID0gMjkzXG5tYXBbMTcwMV0gPSAyOTNcbm1hcFsxNzA1XSA9IDI5MVxubWFwWzE3MDldID0gMjkxXG5tYXBbMTcxMl0gPSAyOTFcbm1hcFsxNzE1XSA9IDI5MVxubWFwWzE3MTldID0gMjkxXG5tYXBbMTcyMl0gPSAyOTFcbm1hcFsxNzI1XSA9IDI5MVxubWFwWzE3MjhdID0gMjkxXG5tYXBbMTczMl0gPSAyOTFcbm1hcFsxNzM1XSA9IDI5MVxubWFwWzE3MzhdID0gMjkxXG5tYXBbMTc0MV0gPSAyOTFcbm1hcFsxNzQ1XSA9IDI5MVxubWFwWzE3NDZdID0gMjkwXG5tYXBbMTc1MF0gPSAyOTBcbm1hcFsxNzUzXSA9IDI5MFxubWFwWzE3NTZdID0gMjkwXG5tYXBbMTc1OV0gPSAyOTBcbm1hcFsxNzYzXSA9IDI5MFxubWFwWzE3NjZdID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc3M10gPSAyOTBcbm1hcFsxNzc2XSA9IDI5MFxubWFwWzE3NzldID0gMjkwXG5tYXBbMTc4Ml0gPSAyOTBcbm1hcFsxNzg2XSA9IDI5MFxubWFwWzE3ODldID0gMjkwXG5tYXBbMTc5Ml0gPSAyOTBcbm1hcFsxNzk1XSA9IDI5MFxubWFwWzE3OTldID0gMjkwXG5tYXBbMTgwMl0gPSAyOTBcbm1hcFsxODA1XSA9IDI5MFxubWFwWzE4MDldID0gMjkwXG5tYXBbMTgxMl0gPSAyOTBcbm1hcFsxODEzXSA9IDI4OFxubWFwWzE4MTddID0gMjg4XG5tYXBbMTgyMF0gPSAyODhcbm1hcFsxODIzXSA9IDI4OFxubWFwWzE4MjddID0gMjg4XG5tYXBbMTgzMF0gPSAyODhcbm1hcFsxODMzXSA9IDI4OFxubWFwWzE4MzZdID0gMjkwXG5tYXBbMTg0MF0gPSAyOTBcbm1hcFsxODQxXSA9IDI5MFxubWFwWzE4NDVdID0gMjkwXG5tYXBbMTg0OF0gPSAyOTBcbm1hcFsxODUxXSA9IDI5MFxubWFwWzE4NTNdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1OV0gPSAyOTFcbm1hcFsxODYzXSA9IDI5MVxubWFwWzE4NjZdID0gMjkxXG5tYXBbMTg2N10gPSAyOTFcbm1hcFsxODY5XSA9IDI5M1xubWFwWzE4NzJdID0gMjkzXG5tYXBbMTg3Nl0gPSAyOTNcbm1hcFsxODc2XSA9IDI5M1xubWFwWzE4NzddID0gMjkzXG5tYXBbMTg4MF0gPSAyOTNcbiIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xyXG5cclxuLypcclxuKiDmuLjmiI/liJ3lp4vljJbphY3nva47XHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVDb25maWd7XHJcbiAgICBzdGF0aWMgd2lkdGg6bnVtYmVyPTUxMjtcclxuICAgIHN0YXRpYyBoZWlnaHQ6bnVtYmVyPTc2ODtcclxuICAgIHN0YXRpYyBzY2FsZU1vZGU6c3RyaW5nPVwibm9ib3JkZXJcIjtcclxuICAgIHN0YXRpYyBzY3JlZW5Nb2RlOnN0cmluZz1cInZlcnRpY2FsXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25WOnN0cmluZz1cInRvcFwiO1xyXG4gICAgc3RhdGljIGFsaWduSDpzdHJpbmc9XCJjZW50ZXJcIjtcclxuICAgIHN0YXRpYyBzdGFydFNjZW5lOmFueT1cImRpYWxvZy9Mb2FkaW5nRGlhbG9nLnNjZW5lXCI7XHJcbiAgICBzdGF0aWMgc2NlbmVSb290OnN0cmluZz1cIlwiO1xyXG4gICAgc3RhdGljIGRlYnVnOmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgc3RhdDpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHBoeXNpY3NEZWJ1Zzpib29sZWFuPXRydWU7XHJcbiAgICBzdGF0aWMgZXhwb3J0U2NlbmVUb0pzb246Ym9vbGVhbj10cnVlO1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBzdGF0aWMgaW5pdCgpe1xyXG4gICAgICAgIHZhciByZWc6IEZ1bmN0aW9uID0gTGF5YS5DbGFzc1V0aWxzLnJlZ0NsYXNzO1xyXG5cclxuICAgIH1cclxufVxyXG5HYW1lQ29uZmlnLmluaXQoKTsiLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0RpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5Mb2FkaW5nRGlhbG9nVUkge1xuICAgIHByaXZhdGUgcHJvZ3Jlc3MgPSAwXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIChMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IC0gMjAwKS8yKVxuICAgIH1cblxuICAgIG9uT3BlbmVkKCkge1xuICAgICAgICAvLyB0aGlzLmNoYW5nZVByb2dyZXNzVmFsdWUoMClcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3NWYWx1ZShwcm9ncmVzczogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzc1xuICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzc0Jhci52YWx1ZSA9IHByb2dyZXNzXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRpcCh0aXA6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpcExhYmVsLnRleHQgPSB0aXBcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgU2NyZWVuMUJhY2tHcm91bmQgZnJvbSBcIi4vU2NyZWVuMUJhY2tHcm91bmRcIjtcclxuaW1wb3J0IEZvb3RiYWxsIGZyb20gXCIuL0Zvb3RiYWxsXCI7XHJcbmltcG9ydCB7IGdldEZvb3RiYWxsWCB9IGZyb20gXCIuL0Zvb3RiYWxsUGF0aFwiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRpYWxvZyB9IGZyb20gXCIuL1F1ZXN0aW9uRGlhbG9nXCI7XHJcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uRGF0YSwgUXVlc3Rpb25JdGVtLCBRdWVzdGlvblNob3dZIH0gZnJvbSBcIi4vUXVlc3Rpb25EYXRhXCI7XHJcbmltcG9ydCBMb2FkaW5nRGlhbG9nIGZyb20gXCIuL0xvYWRpbmdEaWFsb2dcIjtcclxuaW1wb3J0IFNoYWtlRGlhbG9nIGZyb20gXCIuL1NoYWtlRGlhbG9nXCI7XHJcbmltcG9ydCBTY3JvbGxEaWFsb2csIHsgVGlwVHlwZSB9IGZyb20gXCIuL1Njcm9sbERpYWxvZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGZvb3RiYWxsOiBGb290YmFsbFxyXG5cdHByaXZhdGUgc2NyZWVuMUJhY2tHcm91bmQ6IFNjcmVlbjFCYWNrR3JvdW5kXHJcblx0cHJpdmF0ZSBkcmFnUmVnaW9uOiBMYXlhLlJlY3RhbmdsZVxyXG5cclxuXHRwcml2YXRlIHNoYWtlQ291bnQ6bnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pID0gZmFsc2VcclxuXHRcclxuXHJcblx0cHJpdmF0ZSBjb25zb2xlOiBMYXlhLlRleHQ7XHJcblxyXG5cclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbkluZGV4TGlzdCA9IG5ldyBBcnJheTxudW1iZXI+KClcdC8vIOW3sue7j+aYvuekuueahOmXrumimGluZGV45YiX6KGoXHJcblx0cHJpdmF0ZSBzaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nRGlhbG9nOiBMb2FkaW5nRGlhbG9nXHQvLyDmmL7npLrliqDovb3ov5vluqbmnaFcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nOiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly8gd2FybmluZzog56ys5LiJ5Liq5Y+C5pWw5LiN6KaB5L2/55SoV2ViR0zvvIzlvZPog4zmma/lpKrplb/nmoTml7blgJnlnKhpUGhvbmXkuIrkvJrmnInpnZ7luLjkuKXph43nmoTplK/pvb9cclxuXHRcdExheWEuaW5pdChDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLnN0YXRlSGVpZ2h0LCBMYXlhW1wiXCJdKTtcclxuXHRcclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IENvbnN0YW50cy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBDb25zdGFudHMuc2NyZWVuTW9kZTtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblxyXG5cclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdFVJQ29uZmlnLnBvcHVwQmdDb2xvciA9IFwiIzAwMDAwMFwiXHJcblx0XHRVSUNvbmZpZy5wb3B1cEJnQWxwaGEgPSAwLjhcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcclxuXHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIndoaXRlXCJcclxuXHRcdFxyXG5cdFxyXG5cclxuXHRcdHRoaXMubG9hZFByb2dlc3NBc3NldHMoKVxyXG5cclxuXHRcdC8vIOmcgOimgeaYvuekuuiwg+ivleS/oeaBr+WPr+S7peaJk+W8gOi/memHjFxyXG5cdFx0dGhpcy5zaG93Q29uc29sZVRleHQoZmFsc2UpO1xyXG5cclxuXHRcdFxyXG5cdFxyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG5cclxuXHRsb2FkUHJvZ2Vzc0Fzc2V0cygpOiB2b2lkIHtcclxuXHRcdExheWEubG9hZGVyLmxvYWQoW1wicmVzL2F0bGFzL2NvbXAuYXRsYXNcIl0sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblByb2dyZXNzQXNzZXRzTG9hZGVkKSlcclxuXHR9XHJcblxyXG5cdGxvYWRPdGhlckFzc2V0cygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGFzc2V0czogQXJyYXk8YW55PiA9IFtdXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDUsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3Nwb3J0cy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQzLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8g6aKE5Yqg6L296LWE5rqQXHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKGFzc2V0cywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGVkKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGluZywgbnVsbCwgZmFsc2UpKVxyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuXHJcblx0Ly8g5b+F6ZyA5YWI5Yqg6L296L+b5bqm5p2h6LWE5rqQ5omN6IO95pi+56S66L+b5bqm5p2hXHJcblx0b25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8vIOaYvuekuui/m+W6puadoVxyXG5cdFx0XHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cgPSBuZXcgTG9hZGluZ0RpYWxvZygpXHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cucG9wdXAoKVxyXG5cdFx0dGhpcy5sb2FkT3RoZXJBc3NldHMoKVxyXG5cdH1cclxuXHJcblx0b25Bc3NldHNMb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmOiBcIiArIHByb2dyZXNzKTtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5jaGFuZ2VQcm9ncmVzc1ZhbHVlKHByb2dyZXNzKVxyXG5cdH1cclxuXHJcblx0b25Bc3NldHNMb2FkZWQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cuY2xvc2UoKVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+i1hOa6kOWKoOi9veWujOaIkOOAgic7XHJcblxyXG5cdFx0dGhpcy5zaG93VGlwRGlhbG9nKFwic2Nyb2xsXCIpXHJcblxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZCA9IG5ldyBTY3JlZW4xQmFja0dyb3VuZCgpXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQpXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9uKExheWEuRXZlbnQuRFJBR19NT1ZFLCB0aGlzLCB0aGlzLm9uQmFja2dyb3VuZE1vdmUpXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9uKExheWEuRXZlbnQuRFJBR19TVEFSVCwgdGhpcywgdGhpcy5vbkJhY2tncm91bmRTdGFydE1vdmUpXHJcblxyXG5cdFx0dGhpcy5mb290YmFsbCA9IG5ldyBGb290YmFsbCgpXHJcblx0XHR0aGlzLmZvb3RiYWxsLnBvcygzMjcsIDIzMylcdC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmZvb3RiYWxsKVxyXG5cdFx0Y29uc29sZS5sb2coXCJvbkFzc2V0c0xvYWRlZFwiLCBMYXlhLnN0YWdlLmhlaWdodCwgTGF5YS5Ccm93c2VyLmhlaWdodCwgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodClcclxuXHJcblx0XHQvLyDorqHnrpfog4zmma/lj6/mi5bliqjljLrln59cclxuXHRcdGNvbnN0IG1vYWJsZUhlaWdodCA9IExheWEuc3RhZ2UuaGVpZ2h0IC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodFxyXG5cdFx0dGhpcy5kcmFnUmVnaW9uID0gbmV3IExheWEuUmVjdGFuZ2xlKDAsIC1tb2FibGVIZWlnaHQsIDAsIG1vYWJsZUhlaWdodClcclxuXHJcblx0XHQvLyBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSwgdGhpcywgdGhpcy5vbk1vdXNlTW92ZSlcclxuXHRcdExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uU3RhcnREcmFnKVxyXG5cdH1cclxuXHJcblx0b25FcnJvcihlcnI6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3lpLHotKU6IFwiICsgZXJyKTtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy51cGRhdGVUaXAoXCLliqDovb3lpLHotKU6IFwiICsgZXJyKVxyXG5cdH1cclxuXHJcblx0b25Nb3VzZU1vdmUoKTogdm9pZCB7XHJcblx0XHQvLyDlp4vnu4jkv53mjIHkuLvop5LlkozpvKDmoIfkvY3nva7kuIDoh7RcclxuXHRcdC8vIHRoaXMuZm9vdGJhbGwucG9zKExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib25Nb3VzZU1vdmVcIiwgTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdFx0Y29uc29sZS5sb2coYG1hcFske0xheWEuc3RhZ2UubW91c2VZfV0gPSAke0xheWEuc3RhZ2UubW91c2VYfWApXHJcblx0XHR0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0fVxyXG5cclxuXHRvblN0YXJ0RHJhZygpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib25TdGFydERyYWdcIiwgTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdFx0aWYgKHRoaXMuc2hvd2luZ0RpYWxvZykge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0YXJ0RHJhZyh0aGlzLmRyYWdSZWdpb24sIGZhbHNlLCAwKVxyXG5cdH1cclxuXHJcblx0b25CYWNrZ3JvdW5kU3RhcnRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETzog6L+Z6YeM5ZCM5qC36KaB5YGa5LiA5Lqb6IO95ZCm5ouW5Yqo55qE5Yik5pat77yMb25CYWNrZ3JvdW5kTW92ZemDqOWIhumAu+i+keS5n+mAguW6lOS6juatpOaWueazlVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRvbkJhY2tncm91bmRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbkJhY2tncm91bmRNb3ZlXCIsIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueCwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55LCB0aGlzLmZvb3RiYWxsLngsIHRoaXMuZm9vdGJhbGwueSlcclxuXHJcblx0XHQvLyDmmL7npLrpl67pophcclxuXHRcdGNvbnN0IG5lZWRTaG93UXVlc3Rpb24gPSB0aGlzLnNob3dRdWVzdGlvbkRpYWxvZ0lmTmVlZCh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkpXHJcblx0XHRpZiAobmVlZFNob3dRdWVzdGlvbikge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVE9ETzog5qC55o2u5a6e6ZmF5oOF5Ya15pi+56S654K55Ye75o+Q56S6XHJcblx0XHQvLyB0aGlzLnNob3dUaXBEaWFsb2coXCJjbGlja193aGl0ZVwiKVxyXG5cdFx0Ly8gdGhpcy5zaG93VGlwRGlhbG9nKFwiY2xpY2tfYmxhY2tcIilcclxuXHJcblxyXG5cdFx0Ly8gaWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTEwMCkge1x0Ly8g5LiN57uZ5ouW5Yqo77yMXGLmkYfkuIDmkYfmmL7npLrlsITpl6jliqjnlLtcclxuXHRcdC8vIFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdC8vIFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdC8vIFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdC8vIFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdC8vIFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZygpXHRcdFx0XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH1cclxuXHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODAwKSB7IC8vIOmakOiXj+i2s+eQg1xyXG5cdFx0XHR0aGlzLmZvb3RiYWxsLmhpZGUoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5mb290YmFsbC5zaG93KClcclxuXHJcblx0XHRcdC8vIOenu+WKqOi2s+eQg+S9jee9rlxyXG5cdFx0XHQvLyBjb25zdCB5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMlxyXG5cdFx0XHRsZXQgeTogbnVtYmVyID0gMDtcclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDEwMzIpIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDEwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgODUwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxMzA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDczMCkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTUwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA1ODApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDE4MDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgNDM1KSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA+IDEwMzIpIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB4ID0gZ2V0Rm9vdGJhbGxYKHkpXHJcblx0XHRcdGlmICh4ID09IDApIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnkgPSB5XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wb3MoeCwgeSlcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8g5Yik5pat6Laz55CD5piv5ZCm6ZyA6KaB5peL6L2sXHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU4NSkge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwuc3RvcFJvdGF0ZSgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wbGF5Um90YXRlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvmN1cCBhbmlcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3VwXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY3VwXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImN1cFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+5Y+j5ZOo5Yqo55S7XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0yMTI1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMjMyNSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwMlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDAyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNob3RcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInNob3RcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTI0NTUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0yNjAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2luXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2luXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2UyXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zNDkwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMzY5MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwicGFnZTAyU3RhcnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJwYWdlMDJTdGFydFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJwYWdlMDJTdGFydFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInBhZ2UwMlN0YXJ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTM3MDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0zODUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJkdW1iYmVsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImR1bWJiZWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImR1bWJiZWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZHVtYmJlbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQwMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00MTUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlcXVpcG1lbnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlcXVpcG1lbnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZXF1aXBtZW50XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZXF1aXBtZW50XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQzMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjbG9ja1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImNsb2NrXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY2xvY2tcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDYxMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ3MTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInRleHQyMDA0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwidGV4dDIwMDRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ0ZXh0MjAwNFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC00ODAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDgxMCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZWxlY3RyaWNtYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlbGVjdHJpY21hblwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlbGVjdHJpY21hblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImVsZWN0cmljbWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTUwNzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01MjAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJsaXV4aWFuZ1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImxpdXhpYW5nXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImxpdXhpYW5nXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibGl1eGlhbmdcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQvL3BhZ2UzXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC02MDEwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNjM4MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY29tcHV0ZXJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjb21wdXRlclwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjb21wdXRlclwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImNvbXB1dGVyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTY1NzUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC02NzAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJtZWRhbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIm1lZGFsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIm1lZGFsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibWVkYWxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjgyNCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTcwMDApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic3RhZ2VcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic3RhZ2VcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzdGFnZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC03NDI2ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNzYwMCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDhcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwOFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA4XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC03NzIyICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtODAwMCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3Jvd2RcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjcm93ZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjcm93ZFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImNyb3dkXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2U0XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC04MTAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtODM2MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGVhcnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJoZWFydFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJoZWFydFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImhlYXJ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgzNjAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NTAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAxMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInRleHQyMDEyXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInRleHQyMDEyXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwidGV4dDIwMTJcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODY3NyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg4MDApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhdGVyUmlnaHRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3YXRlclJpZ2h0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhdGVyUmlnaHRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3YXRlclJpZ2h0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTg2ODUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04ODAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJib2FyZFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImJvYXJkXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODkzMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTkxMDApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3YWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3YWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTkyODAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC05NDAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC05NjU3ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtOTgwMCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2F0ZXJMZWZ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2F0ZXJMZWZ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhdGVyTGVmdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcIndhdGVyTGVmdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMDAwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEwMTAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aW5NYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aW5NYW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2luTWFuXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2luTWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2U1XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTA1MzYgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMDc0OCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYmFsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImJhbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYmFsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImJhbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTA1MzYgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMDc0OCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2NvcmVib2FyZFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNjb3JlYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2NvcmVib2FyZFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInNjb3JlYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTExMjcgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTI1NCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvZXNcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG9lc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG9lc1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInNob2VzXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTQxMSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExNTYwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJoYXRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJoYXRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGF0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiaGF0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExODY4ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTE5NjkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxNYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJiYWxsTWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxNYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJiYWxsTWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdH1cclxuXHJcblx0b25EZXZpY2VTaGFrZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nKSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50ICsrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50ICsgXCLmrKFcXG5cIjtcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQgPj0gMykge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKVxyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaSkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNob3RcIilcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0TGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDApXHJcblx0XHRcdC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQxKVxyXG5cdFx0XHQvLyBMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMilcclxuXHRcdFx0Ly8gTGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDMpXHJcblx0XHRcdC8vIExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQ0KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25RdWVzdGlvbkRpYWxvZ0Nsb3NlKGluZGV4OiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblF1ZXN0aW9uRGlhbG9nQ2xvc2VcIiwgdHlwZSwgaW5kZXgpXHJcblx0XHRjb25zdCByaWdodCA9ICh0eXBlID09PSBcInRydWVcIikgLy8gVE9ETzog6K6h5YiGXHJcblx0XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdH1cclxuXHJcblx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pi+56S66Zeu6aKYXHJcblx0cHJpdmF0ZSBzaG93UXVlc3Rpb25EaWFsb2dJZk5lZWQoeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBvZmZzZXQgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0XHJcblx0XHRjb25zdCBoYXNTaG93TGVuZ3RoID0gdGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QubGVuZ3RoXHJcblx0XHQvLyBpZiAobGVuZ3RoID49IDEwKSB7XHJcblx0XHRcdGlmKHkpe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGlmICh5ID4gb2Zmc2V0IC0gUXVlc3Rpb25TaG93WVtoYXNTaG93TGVuZ3RoXSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGNvbnN0IGlzT2RkID0gIShoYXNTaG93TGVuZ3RoICUgMilcclxuXHRcdGlmIChpc09kZCkgeyAvLyDpmo/mnLpcclxuXHRcdFx0Y29uc3QgcmFuZG9tID0gdGhpcy5nZXRSYW5kb21RdWVzdGlvbkluZGV4KClcclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24ocmFuZG9tKVxyXG5cdFx0fSBlbHNlIHtcdC8vIOWPluWJjTXkvY1cclxuXHRcdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKGhhc1Nob3dMZW5ndGggLyAyKVxyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihpbmRleClcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heCA9IFF1ZXN0aW9uRGF0YS5sZW5ndGggLSA1XHJcblx0XHRjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogbWF4KSkgKyA1XHJcblx0XHRpZiAodGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QuaW5kZXhPZihyYW5kb20pID09IC0xKSB7XHJcblx0XHRcdHJldHVybiByYW5kb21cclxuXHRcdH0gZWxzZSB7IC8vIOW3sue7j+aYvuekuui/h+mHjeaWsOiOt+WPllxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSYW5kb21RdWVzdGlvbkluZGV4KClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmIChpbmRleCA+PSBRdWVzdGlvbkRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0dGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QucHVzaChpbmRleClcclxuXHRcdGNvbnN0IHF1ZXN0aW9uRGF0YSA9IFF1ZXN0aW9uRGF0YVtpbmRleF1cclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHRjb25zdCBxdWVzdGlvbkRpYWxvZyA9IG5ldyBRdWVzdGlvbkRpYWxvZyhxdWVzdGlvbkRhdGEpXHJcblx0XHRxdWVzdGlvbkRpYWxvZy5wb3B1cCh0cnVlKVxyXG5cdFx0cXVlc3Rpb25EaWFsb2cuY2xvc2VIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUXVlc3Rpb25EaWFsb2dDbG9zZSwgW2luZGV4XSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZy5wb3B1cCgpXHJcblxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZSlcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSBzaG93VGlwRGlhbG9nKHRpcFR5cGU6IFRpcFR5cGUpOiB2b2lkIHtcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdGNvbnN0IHNjcm9sbERpYWxvZyA9IG5ldyBTY3JvbGxEaWFsb2codGlwVHlwZSlcclxuXHRcclxuXHRcdHNjcm9sbERpYWxvZy5wb3B1cCh0cnVlKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbk1hc2tMYXllcihpdGVtOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGFsZXJ0KFwib25NYXNrTGF5ZXI6XCIgKyBpdGVtKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93Q29uc29sZVRleHQodmlzaWJsZTogYm9vbGVhbik6dm9pZFxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUgPSBuZXcgTGF5YS5UZXh0KCk7XHJcblx0XHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb25zb2xlKTtcclxuXHRcdFx0dGhpcy5jb25zb2xlLnpPcmRlciA9IDEwMDAxXHJcblx0XHRcdHRoaXMuY29uc29sZS55ID0gIDEwO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUuaGVpZ2h0ID0gMjAwO1xyXG5cdFx0XHR0aGlzLmNvbnNvbGUuY29sb3IgPSBcIiNGRkZGRkZcIjtcclxuXHRcdFx0dGhpcy5jb25zb2xlLmZvbnRTaXplID0gMjA7XHJcblx0XHRcdHRoaXMuY29uc29sZS5sZWFkaW5nID0gMTA7XHJcblx0XHRcdHRoaXMuY29uc29sZS5iZ0NvbG9yID0gXCIjMDAwMDAwXCJcclxuXHRcdFx0dGhpcy5jb25zb2xlLnZpc2libGUgPSB2aXNpYmxlXHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFxyXG59XHJcbi8v5r+A5rS75ZCv5Yqo57G7XHJcbm5ldyBNYWluKCk7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgUXVlc3Rpb25JdGVtIHtcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGE6IHN0cmluZyxcbiAgICBiOiBzdHJpbmcsXG4gICAgYzogc3RyaW5nLFxuICAgIGQ6IHN0cmluZyxcbiAgICBhbnN3ZXI6IFwiYVwiIHwgXCJiXCIgfCBcImNcIiB8IFwiZFwiLFxuICAgIGlkOiBudW1iZXIgIC8vIOS7hVxi5L6b5Y+C55yL5pWw5o2u5pe25Y+C6ICD77yM5Luj56CB5Lit5LiN5L2/55SoXG59XG5cbmV4cG9ydCBjb25zdCBRdWVzdGlvblNob3dZID0gW1xuICAgIDEzNjMsXG4gICAgMzQwNyxcbiAgICA0ODU3LFxuICAgIDU2NTgsXG4gICAgNjU5OCxcbiAgICA3ODQ4LFxuICAgIDg3NzAsXG4gICAgOTk2NSxcbiAgICAxMTUyNCxcbiAgICAxMjM2NVxuXVxuZXhwb3J0ICBjb25zdCBRdWVzdGlvbkRhdGE6IEFycmF5PFF1ZXN0aW9uSXRlbT4gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCLlm73otrPov5vkuJbnlYzmna/nmoTkuLvluIXmmK/lk6rkvY0/XCIsXG4gICAgICAgIGE6IFwi6YeM55quXCIsXG4gICAgICAgIGI6IFwi5pyx5bm/5rKqXCIsXG4gICAgICAgIGM6IFwi6auY5rSq5rOiXCIsXG4gICAgICAgIGQ6IFwi57Gz5Y2iXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDblubTliJjnv5TnoLTkuJbnlYznuqrlvZXnmoTmiJDnu6nmmK/lpJrlsJE/XCIsXG4gICAgICAgIGE6IFwiMTLnp5I5MVwiLFxuICAgICAgICBiOiBcIjEy56eSODhcIixcbiAgICAgICAgYzogXCIxMuenkjg3XCIsXG4gICAgICAgIGQ6IFwiMTLnp5I4NlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiLFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA45bm05YyX5Lqs5aWl6L+Q5Lya6LCB54K554eD5LqG5Li754Gr54KsP1wiLFxuICAgICAgICBhOiBcIuiuuOa1t+WzsFwiLFxuICAgICAgICBiOiBcIumCk+S6muiQjVwiLFxuICAgICAgICBjOiBcIuadjuWugVwiLFxuICAgICAgICBkOiBcIueGiuWAqlwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDEy5bm05Lym5pWm5aWl6L+Q5Lya55S35a2QNDAw55Sx5rOz5Yag5Yab5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi6IyD5b635Yev5LyKXCIsXG4gICAgICAgIGI6IFwi6YOd6L+QXCIsXG4gICAgICAgIGM6IFwi5py05rOw5qGTXCIsXG4gICAgICAgIGQ6IFwi5a2Z5p2oXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiA1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMTblubTmlrDmtaozeDPnr67nkIPpu4Tph5HogZTotZvmgLvlhqDlhpvpmJ/mmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLljJflpKfpmJ9cIixcbiAgICAgICAgYjogXCLlsI/pvpnpvpnpmJ9cIixcbiAgICAgICAgYzogXCLpnLjmsJTmiJjpmJ9cIixcbiAgICAgICAgZDogXCLljY7kvqjlpKflrabpmJ9cIixcbiAgICAgICAgYW5zd2VyOiBcImRcIixcbiAgICAgICAgaWQ6IDZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5YyX5Lqs5aWl6L+Q5Lya5Lit5Zu95Luj6KGo5Zui55qE5peX5omL5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5aea5piOXCIsXG4gICAgICAgIGI6IFwi5YiY57+UXCIsXG4gICAgICAgIGM6IFwi546L5Yqx5YukXCIsXG4gICAgICAgIGQ6IFwi5p6X5Li5XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCIsXG4gICAgICAgIGlkOiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkuKrnmbvkuIrmrKflhqDotZvlnLrnmoTkuK3lm73nkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLlrZnnpaVcIixcbiAgICAgICAgYjogXCLokaPmlrnljZNcIixcbiAgICAgICAgYzogXCLmnY7pk4FcIixcbiAgICAgICAgZDogXCLpg5HmmbpcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgdGl0bGU6IFwi6YK15L2z5LiAOeW5tOW+t+WbveeUn+a2r+ato+W8j+avlOi1m+mHjOaAu+WFseaJk+eQg+WkmuWwkeeQg++8n1wiLFxuICAgICAgICBhOiBcIjE4XCIsXG4gICAgICAgIGI6IFwiMTlcIixcbiAgICAgICAgYzogXCIyOVwiLFxuICAgICAgICBkOiBcIjMwXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS4quWcqOasp+a0suiBlOi1m+S4reiOt+W+l+mHkemdtOeahOeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIumDkeaZulwiLFxuICAgICAgICBiOiBcIuadqOaZqFwiLFxuICAgICAgICBjOiBcIuiwouaZllwiLFxuICAgICAgICBkOiBcIuiRo+aWueWNk1wiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5L2N5Zyo55WZ5rSL5pyf6Ze05ouF5Lu755CD6Zif6Zif6ZW/55qE5Lit5Zu957GN55CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi6IyD5b+X5q+FXCIsXG4gICAgICAgIGI6IFwi6YOR5pm6XCIsXG4gICAgICAgIGM6IFwi5a2Z57un5rW3XCIsXG4gICAgICAgIGQ6IFwi5p2O6ZOBXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICB0aXRsZTogXCLlp5rmmI7lk6rkuIDlubTpgIDlvbnvvJ9cIixcbiAgICAgICAgYTogXCIyMDEwXCIsXG4gICAgICAgIGI6IFwiMjAxMVwiLFxuICAgICAgICBjOiBcIjIwMTJcIixcbiAgICAgICAgZDogXCIyMDEzXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICB0aXRsZTogXCIyMDE45bm05Lqa6L+Q5Lya5Lit56+u55CD6aG555uu5Lit5Zu96Zif5pS26I635LqG5Yeg5p6a6YeR54mM77yfXCIsXG4gICAgICAgIGE6IFwiMVwiLFxuICAgICAgICBiOiBcIjJcIixcbiAgICAgICAgYzogXCIzXCIsXG4gICAgICAgIGQ6IFwiNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgdGl0bGU6IFwiQ0JB6IGU6LWb5Y6G5Y+y5LiK56ys5LiA5Liq5b6X5YiG56C05LiH55qE55CD5ZGY77yfXCIsXG4gICAgICAgIGE6IFwi5piT5bu66IGUXCIsXG4gICAgICAgIGI6IFwi5pyx6Iqz6ZuoXCIsXG4gICAgICAgIGM6IFwi5YiY54KcXCIsXG4gICAgICAgIGQ6IFwi546L5rK76YOFXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICB0aXRsZTogXCLlk6rmlK/nkIPpmJ/lnKgwMi0wM+i1m+Wto0NCQeWto+WQjui1m+S4reWIm+mAoOS6hum7kTjlpYfov7nvvJ9cIixcbiAgICAgICAgYTogXCLovr3lroFcIixcbiAgICAgICAgYjogXCLlm5vlt51cIixcbiAgICAgICAgYzogXCLljJfkuqxcIixcbiAgICAgICAgZDogXCLlsbHkuJxcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIHRpdGxlOiBcIuS4reWbvei2s+eQg+mhtue6p+iBlOi1m+eUseeUskHlj5jmm7TkuLrkuK3otoXnmoTmmK/lnKjlk6rkuIDlubTvvJ9cIixcbiAgICAgICAgYTogXCIwMlwiLFxuICAgICAgICBiOiBcIjAzXCIsXG4gICAgICAgIGM6IFwiMDRcIixcbiAgICAgICAgZDogXCIwNVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgIFxuXSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkl0ZW0gfSBmcm9tIFwiLi9RdWVzdGlvbkRhdGFcIjtcblxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25EaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuUXVlc3Rpb25EaWFsb2dVSSB7XG5cbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbkl0ZW1cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb25JdGVtKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uXG5cbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc01vZGFsID0gdHJ1ZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSAgIFxuICAgIFxuICAgIHB1YmxpYyBvbk9wZW5lZCgpIHtcbiAgICAgICAgLy8g5bu25pe25omn6KGM77yM6YG/5YWN5omL5py65LiK5omn6KGM5pe25oql57uE5Lu2dW5kZWZpbmVk55qE6Zeu6aKYXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxMYXRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvblxuICAgICAgICB0aGlzLnF1ZXN0aW9uTGFiZWwudGV4dCA9IHF1ZXN0aW9uLnRpdGxlXG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmFcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLmxhYmVsID0gcXVlc3Rpb24uYlxuICAgICAgICB0aGlzLmFuc3dlckNCdG4ubGFiZWwgPSBxdWVzdGlvbi5jXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmRcblxuICAgICAgICB0aGlzLmFuc3dlckFCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImFcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiYlwiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJjXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckRCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImRcIl0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DbGlja0Fuc3dlclwiLCBhbnN3ZXIpXG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSAodGhpcy5xdWVzdGlvbi5hbnN3ZXIgPT09IGFuc3dlcilcbiAgICAgICAgY29uc3QgcmVzdWx0SW1nID0gcmlnaHQgPyBcInZpZXcvcmlnaHQucG5nXCIgOiBcInZpZXcvd3JvbmcucG5nXCJcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QUltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRBSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImJcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRCSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEJJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiY1wiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdENJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Q0ltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJkXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0REltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRESW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyDnp7vpmaTngrnlh7vkuovku7ZcbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckNCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLm9mZkFsbCgpXG5cbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMub25DbG9zZUxhdGVyLCBbcmlnaHRdLCB0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZUxhdGVyKHJpZ2h0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoYCR7cmlnaHR9YClcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuLyoqXG4gKiDlnLrmma8x6IOM5pmvXG4gKi9cblxudHlwZSBBbmlOYW1lID0gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4xQmFja0dyb3VuZCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIGJnMTogTGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBjdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aGlzdGxlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2hvdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDAyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwOEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDEyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQmFsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJhbGxNYW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCb2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGNsb2NrQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQ29tcHV0ZXJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDcm93ZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEN1cEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGR1bWJiZWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZWxlY3RyaWNtYW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBlcXVpcG1lbnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBGb290YmFsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEdvZ2dsZXNBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBIYXRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBIZWFydEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGxpdXhpYW5nQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgTWVkYWxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBwYWdlMDJTdGFydEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNjb3JlYm9hcmRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBTaG9lc0FuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFN0YWdlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2FsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdhdGVyTGVmdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICAvLyBwcml2YXRlIFdhdGVyUmlnaHRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXaGlzdGxlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgd2luQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2luTWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuXG4gICAgcHJpdmF0ZSBiZzI6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzM6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzQ6IExheWEuU3ByaXRlXG4gICAgcHJpdmF0ZSBiZzU6IExheWEuU3ByaXRlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iZzEgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMS5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQxKVxuICAgICAgICB0aGlzLmJnMS5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnMSlcblxuICAgICAgICB0aGlzLmJnMiA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmcyLnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQpXG4gICAgICAgIHRoaXMuYmcyLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTIgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQyKVxuICAgICAgICB0aGlzLmJnMi5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzIpXG5cbiAgICAgICAgdGhpcy5iZzMgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMy5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0KVxuICAgICAgICB0aGlzLmJnMy5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMylcbiAgICAgICAgdGhpcy5iZzMuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUzKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmczKVxuXG4gICAgICAgIHRoaXMuYmc0ID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzQucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodClcbiAgICAgICAgdGhpcy5iZzQuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNCA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDQpXG4gICAgICAgIHRoaXMuYmc0LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNClcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNClcblxuICAgICAgICB0aGlzLmJnNSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmc1LnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDRIZWlnaHQpXG4gICAgICAgIHRoaXMuYmc1LnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kNUhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTUgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQ1KVxuICAgICAgICB0aGlzLmJnNS5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTUpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzUpXG5cbiAgICAgICAgdGhpcy5jdXBBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyBUT0RPOiDosIPmlbTliqjnlLtcbiAgICAgICAgdGhpcy5jdXBBbmkubG9hZEFuaW1hdGlvbihcImFuaS9DdXBBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jdXBBbmkpXG4gICAgICAgIC8vIFRPRE86IOiwg+aVtOS9jee9rlxuICAgICAgICB0aGlzLmN1cEFuaS5wb3MoNDAwLCAxMDIwKVxuXG5cbiAgICAgICAgdGhpcy53aGlzdGxlQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy53aGlzdGxlQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2hpc3RsZUFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLndoaXN0bGVBbmkpXG4gICAgICAgIHRoaXMud2hpc3RsZUFuaS5wb3MoMTAwLCA5ODApXG5cbiAgICAgICAgdGhpcy5TaG90QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TaG90QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvU2hvdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlNob3RBbmkpXG4gICAgICAgIHRoaXMuU2hvdEFuaS5wb3MoMjAwLCAxNjAwKVxuXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMDJBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAwMkFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5wb3MoMzYwLCAyNTAwKVxuXG4gICAgICAgIHRoaXMud2luQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy53aW5BbmkubG9hZEFuaW1hdGlvbihcImFuaS93aW5BbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy53aW5BbmkpXG4gICAgICAgIHRoaXMud2luQW5pLnBvcygyODAsIDMwMDApXG5cbiAgICAgICAgLy9wYWdlMlxuICAgICAgICB0aGlzLnBhZ2UwMlN0YXJ0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5wYWdlMDJTdGFydEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UwMlN0YXJ0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFnZTAyU3RhcnRBbmkpXG4gICAgICAgIHRoaXMucGFnZTAyU3RhcnRBbmkucG9zKDI0NywgMzgwMilcblxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2R1bWJiZWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZHVtYmJlbGxBbmkpXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkucG9zKDMyMCwgNDEzMilcblxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZXF1aXBtZW50QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZXF1aXBtZW50QW5pKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5wb3MoMzU1LCA0NDMwKVxuXG4gICAgICAgIHRoaXMuY2xvY2tBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmNsb2NrQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvY2xvY2tBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jbG9ja0FuaSlcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5wb3MoMTUyLCA0Njk1KVxuXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMDRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAwNEFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5wb3MoMzM3LCA1MDM4KVxuXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZWxlY3RyaWNtYW5BbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5lbGVjdHJpY21hbkFuaSlcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5wb3MoMzI4LCA1MjYyKVxuXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvbGl1eGlhbmdBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5saXV4aWFuZ0FuaSlcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5wb3MoMjYzLCA1NzAwKVxuXG4gICAgICAgIC8vcGFnZTNcbiAgICAgICAgdGhpcy5Db21wdXRlckFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQ29tcHV0ZXJBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Db21wdXRlckFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkNvbXB1dGVyQW5pKVxuICAgICAgICB0aGlzLkNvbXB1dGVyQW5pLnBvcygyNDAsIDY1NDUpXG5cbiAgICAgICAgdGhpcy5NZWRhbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuTWVkYWxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9NZWRhbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLk1lZGFsQW5pKVxuICAgICAgICB0aGlzLk1lZGFsQW5pLnBvcygzMzMsIDY5NDkpXG5cbiAgICAgICAgdGhpcy5TdGFnZUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TdGFnZUFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlN0YWdlQW5pKVxuICAgICAgICB0aGlzLlN0YWdlQW5pLnBvcygyMTksIDcyNjUpXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwOEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDA4QW5pKVxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pLnBvcygyMzEsIDc3MzYpXG5cbiAgICAgICAgdGhpcy5Dcm93ZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Dcm93ZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkNyb3dkQW5pKVxuICAgICAgICB0aGlzLkNyb3dkQW5pLnBvcygyNzAsIDgwMjApXG5cbiAgICAgICAgLy9wYWdlNFxuICAgICAgICB0aGlzLkhlYXJ0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5IZWFydEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0hlYXJ0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuSGVhcnRBbmkpXG4gICAgICAgIHRoaXMuSGVhcnRBbmkucG9zKDE4MCwgODQyNClcblxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDEyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMTJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkucG9zKDI0OCwgODc5NylcblxuICAgICAgICAvLyB0aGlzLldhdGVyUmlnaHRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICAvLyB0aGlzLldhdGVyUmlnaHRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XYXRlclJpZ2h0QW5pLmFuaVwiKVxuICAgICAgICAvLyB0aGlzLmFkZENoaWxkKHRoaXMuV2F0ZXJSaWdodEFuaSlcbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pLnBvcygzNzAsIDkxMDApXG5cbiAgICAgICAgdGhpcy5Cb2FyZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQm9hcmRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Cb2FyZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJvYXJkQW5pKVxuICAgICAgICB0aGlzLkJvYXJkQW5pLnBvcygyNTcsIDkwNjIpXG5cbiAgICAgICAgdGhpcy5XYWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5XYWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2FsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhbGxBbmkpXG4gICAgICAgIHRoaXMuV2FsbEFuaS5wb3MoMjg1LCA5MzEwKVxuXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0dvZ2dsZXNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Hb2dnbGVzQW5pKVxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucG9zKDM1NSwgOTcxNClcblxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2F0ZXJMZWZ0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2F0ZXJMZWZ0QW5pKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5wb3MoMTYzLCAxMDA5NylcblxuICAgICAgICB0aGlzLldpbk1hbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuV2luTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2luTWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2luTWFuQW5pKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5wb3MoMjU0LCAxMDYwMClcbiAgICAgICAgLy9wYWdlNVxuICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TY29yZWJvYXJkQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2NvcmVib2FyZEFuaSlcbiAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLnBvcygyNTcsIDExMDc1KVxuXG4gICAgICAgIHRoaXMuQmFsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQmFsbEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0JhbGxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5CYWxsQW5pKVxuICAgICAgICB0aGlzLkJhbGxBbmkucG9zKDEyNywgMTEwNjUpXG5cbiAgICAgICAgdGhpcy5TaG9lc0FuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU2hvZXNBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TaG9lc0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlNob2VzQW5pKVxuICAgICAgICB0aGlzLlNob2VzQW5pLnBvcygzMzgsIDExNzQyKVxuXG4gICAgICAgIHRoaXMuSGF0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5IYXRBbmkubG9hZEFuaW1hdGlvbihcImFuaS9IYXRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5IYXRBbmkpXG4gICAgICAgIHRoaXMuSGF0QW5pLnBvcygyMDcsIDEyMDEwKVxuXG4gICAgICAgIHRoaXMuQmFsbE1hbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQmFsbE1hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0JhbGxNYW5BbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5CYWxsTWFuQW5pKVxuICAgICAgICB0aGlzLkJhbGxNYW5BbmkucG9zKDI2NSwgMTI0NzApXG4gICAgfVxuXG4gICAgc3RvcEFuaShhbmlOYW1lOiBBbmlOYW1lKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VwQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvdEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxNYW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wdXRlckFuaS5nb3RvQW5kU3RvcCgzMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNyb3dkQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkdvZ2dsZXNBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkuZ290b0FuZFN0b3AoMzApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5NZWRhbEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGFnZTAyU3RhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UwMlN0YXJ0QW5pLmdvdG9BbmRTdG9wKDMwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG9lc0FuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU3RhZ2VBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5XYXRlclJpZ2h0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLmdvdG9BbmRTdG9wKDMwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS5nb3RvQW5kU3RvcCgzMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheUFuaShhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VwQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvdEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDhcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA4QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxNYW5BbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja0FuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ29tcHV0ZXJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNyb3dkQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuR29nZ2xlc0FuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhhdEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGVhcnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmxpdXhpYW5nQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5NZWRhbEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMDJTdGFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGFnZTAyU3RhcnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlN0YWdlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuV2F0ZXJSaWdodEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pUGxheWluZyhhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDAyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDEyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ3Jvd2RBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWlwbWVudEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFydEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwicGFnZTAyU3RhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlMDJTdGFydEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNjb3JlYm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYWxsQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYXRlckxlZnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2hpc3RsZUFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG90QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Db21wdXRlckFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBhZ2UwMlN0YXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlMDJTdGFydEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG9lc0FuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGFnZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU3RhZ2VBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2FsbEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJ3YXRlclJpZ2h0XCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5XYXRlclJpZ2h0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5NYW5BbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNBbmlWaXNpYmxlKGFuaU5hbWU6IEFuaU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiY3VwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VwQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMDJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwOEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMTJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsTWFuQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Cb2FyZEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNvbXB1dGVyQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5Dcm93ZEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZWN0cmljbWFuQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXF1aXBtZW50QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IYXRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhlYXJ0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIm1lZGFsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuTWVkYWxBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMDJTdGFydFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2UwMlN0YXJ0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNjb3JlYm9hcmRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNob2VzQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TdGFnZUFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYWxsQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2F0ZXJMZWZ0QW5pLnZpc2libGU7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLldhdGVyUmlnaHRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2hpc3RsZUFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndpbkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldpbk1hbkFuaS52aXNpYmxlO1xuXG5cbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuXG5leHBvcnQgdHlwZSBUaXBUeXBlID0gXCJzY3JvbGxcIiB8IFwiY2xpY2tfd2hpdGVcIiB8IFwiY2xpY2tfYmxhY2tcIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLlNjcm9sbERpYWxvZ1VJIHtcbiAgICBwcml2YXRlIHRpcFR5cGU6IFRpcFR5cGVcbiAgICBjb25zdHJ1Y3Rvcih0aXBUeXBlOiBUaXBUeXBlKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy50aXBUeXBlID0gdGlwVHlwZVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25PcGVuZWQoKSB7XG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxMYXRlcigpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMudGlwVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInNjcm9sbFwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRpcEltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50aXBJbWFnZS55ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCBcbiAgICAgICAgICAgICAgICB0aGlzLnRpcEltYWdlLnZpc2libGUgID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNsaWNrX3doaXRlXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMud2hpdGVDbGlja0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUNsaWNrSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZUNsaWNrSW1hZ2UudmlzaWJsZSA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcImNsaWNrX2JsYWNrXCI6IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYmxhY2tDbGlja0ltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrQ2xpY2tJbWFnZS55ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIHRoaXMuYmxhY2tDbGlja0ltYWdlLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMub25DbGljaylcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxufSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYWtlRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLlNoYWtlRGlhbG9nVUkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYXV0b0Rlc3Ryb3lBdENsb3NlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5wb3MoMCwgMClcbiAgICAgIFxuICAgICAgICBcbiAgICB9ICAgIFxuXG5cblxufSIsIi8qKlRoaXMgY2xhc3MgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgTGF5YUFpcklERSwgcGxlYXNlIGRvIG5vdCBtYWtlIGFueSBtb2RpZmljYXRpb25zLiAqL1xuaW1wb3J0IFZpZXc9TGF5YS5WaWV3O1xyXG5pbXBvcnQgRGlhbG9nPUxheWEuRGlhbG9nO1xyXG5pbXBvcnQgU2NlbmU9TGF5YS5TY2VuZTtcbmV4cG9ydCBtb2R1bGUgdWkuZGlhbG9nIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMb2FkaW5nRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHRpcExhYmVsOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGxvYWRpbmdQcm9ncmVzc0JhcjpMYXlhLlByb2dyZXNzQmFyO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL0xvYWRpbmdEaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFF1ZXN0aW9uRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHJlc3VsdEFJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdENJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdEJJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHJlc3VsdERJbWc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHF1ZXN0aW9uTGFiZWw6TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgYW5zd2VyQUJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyQkJ0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyQ0J0bjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgYW5zd2VyREJ0bjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9RdWVzdGlvbkRpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2Nyb2xsRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHRpcEltYWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBibGFja0NsaWNrSW1hZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHdoaXRlQ2xpY2tJbWFnZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TY3JvbGxEaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFNoYWtlRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TaGFrZURpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
