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
    Constants.soundBgm8 = "res/sound/bgm8.mp3";
    Constants.score1 = "view/score_1.jpg";
    Constants.score2 = "view/score_2.jpg";
    Constants.score3 = "view/score_3.jpg";
    Constants.score4 = "view/score_4.jpg";
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
        if (this.loadingProgressBar) {
            this.loadingProgressBar.value = progress;
        }
    };
    LoadingDialog.prototype.updateTip = function (tip) {
        this.tipLabel.text = tip;
    };
    return LoadingDialog;
}(layaMaxUI_1.ui.dialog.LoadingDialogUI));
exports.default = LoadingDialog;

},{"./ui/layaMaxUI":21}],6:[function(require,module,exports){
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
var ScoreResultDialog_1 = require("./ScoreResultDialog");
var Main = /** @class */ (function () {
    function Main() {
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
        this.questionScore = 0;
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
            url: Constants_1.default.soundBgm8,
            type: Laya.Loader.SOUND
        });
        assets.push({
            url: Constants_1.default.score1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.score2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.score3,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.score4,
            type: Laya.Loader.IMAGE
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
        this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants_1.default.soundBgm8, 0);
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
        if (this.screen1BackGround.y <= -1470) { // 不给拖动，摇一摇显示射门动画
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
        if (this.screen1BackGround.y <= -6350) {
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
        if (this.screen1BackGround.y <= -9500) {
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
        if (this.screen1BackGround.y <= -12945) {
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
        if (this.screen1BackGround.y <= -15946) {
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
        if (this.screen1BackGround.y <= -1730 && this.screen1BackGround.y >= -2640) {
            this.screen1BackGround.playAni("win");
        }
        else {
            this.screen1BackGround.stopAni("win");
        }
        if (this.screen1BackGround.y <= -2640 && this.screen1BackGround.y >= -4600) {
            this.page1e2s.show();
            var z = parseInt((-this.screen1BackGround.y - 2640) / 10 + '');
            console.log('z: ' + z);
            this.page1e2s.goPath(z - 0);
        }
        else {
            this.page1e2s.hide();
        }
        //page2
        if (this.screen1BackGround.y <= -4530 && this.screen1BackGround.y >= -5430) {
            this.running.show();
            var z = parseInt((-this.screen1BackGround.y - 4530) / 10 + '');
            console.log('z: ' + z);
            this.running.goPath(z - 0);
        }
        else {
            this.running.goPath(81);
            this.running.hide();
        }
        if (this.screen1BackGround.y <= -4600 && this.screen1BackGround.y >= -5155) {
            this.screen1BackGround.stopAni("page2_start");
        }
        else {
            this.screen1BackGround.stopAni("page2_start1");
        }
        if (this.screen1BackGround.y <= -4522 && this.screen1BackGround.y >= -4671) {
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
        if (this.screen1BackGround.y <= -5190 && this.screen1BackGround.y >= -5348) {
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
        if (this.screen1BackGround.y <= -6410 && this.screen1BackGround.y >= -8100) {
            this.screen1BackGround.stopAni("liuxiang");
        }
        else {
            this.screen1BackGround.stopAni("liuxiang1");
        }
        if (this.screen1BackGround.y <= -6410 && this.screen1BackGround.y >= -8100) {
            this.page2e3s.show();
            var z = parseInt((-this.screen1BackGround.y - 6410) / 10 + '');
            console.log('z: ' + z);
            this.page2e3s.goPath(z - 0);
        }
        else {
            this.page2e3s.hide();
        }
        //page3
        if (this.screen1BackGround.y <= -8200 && this.screen1BackGround.y >= -8950) {
            this.page3run.show();
            var z = parseInt((-this.screen1BackGround.y - 8200) / 10 + '');
            console.log('z: ' + z);
            this.page3run.goPath(z - 0);
        }
        else {
            this.page3run.hide();
        }
        if (this.screen1BackGround.y <= -8100 && this.screen1BackGround.y >= -8470) {
            this.screen1BackGround.stopAni("page3_start");
        }
        else {
            this.screen1BackGround.stopAni("page3_start1");
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
        if (this.screen1BackGround.y <= -8625 && this.screen1BackGround.y >= -8773) {
            if (!this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.playAni("stage");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("stage")) {
                this.screen1BackGround.stopAni("stage");
            }
        }
        if (this.screen1BackGround.y <= -9131 && this.screen1BackGround.y >= -9281) {
            if (!this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.playAni("text2008");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2008")) {
                this.screen1BackGround.stopAni("text2008");
            }
        }
        if (this.screen1BackGround.y <= -9480 && this.screen1BackGround.y >= -11190) {
            this.screen1BackGround.stopAni("crowd");
        }
        else {
            this.screen1BackGround.stopAni("crowd1");
        }
        if (this.screen1BackGround.y <= -9480 && this.screen1BackGround.y >= -11190) {
            this.page3e4s.show();
            var z = parseInt((-this.screen1BackGround.y - 9480) / 10 + '');
            console.log('z: ' + z);
            this.page3e4s.goPath(z - 0);
        }
        else {
            this.page3e4s.hide();
        }
        //page4
        if (this.screen1BackGround.y <= -11189 && this.screen1BackGround.y >= -11670) {
            if (!this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.playAni("heart");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("heart")) {
                this.screen1BackGround.stopAni("heart");
            }
        }
        if (this.screen1BackGround.y <= -11190 && this.screen1BackGround.y >= -13040) {
            this.swimming.show();
            var z = parseInt((-this.screen1BackGround.y - 11190) / 10 + '');
            console.log('z: ' + z);
            this.swimming.goPath(z - 0);
        }
        else {
            this.swimming.hide();
        }
        if (this.screen1BackGround.y <= -11162 && this.screen1BackGround.y >= -11313) {
            if (!this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.playAni("text2012");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2012")) {
                this.screen1BackGround.stopAni("text2012");
            }
        }
        if (this.screen1BackGround.y <= -11376 && this.screen1BackGround.y >= -11519) {
            if (!this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.playAni("board");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("board")) {
                this.screen1BackGround.stopAni("board");
            }
        }
        if (this.screen1BackGround.y <= -11743 && this.screen1BackGround.y >= -11907) {
            if (!this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.playAni("wall");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("wall")) {
                this.screen1BackGround.stopAni("wall");
            }
        }
        if (this.screen1BackGround.y <= -12066 && this.screen1BackGround.y >= -12306) {
            if (!this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.playAni("goggles");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("goggles")) {
                this.screen1BackGround.stopAni("goggles");
            }
        }
        if (this.screen1BackGround.y <= -12405 && this.screen1BackGround.y >= -12558) {
            if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.playAni("waterLeft");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("waterLeft")) {
                this.screen1BackGround.stopAni("waterLeft");
            }
        }
        if (this.screen1BackGround.y <= -13100 && this.screen1BackGround.y >= -14790) {
            this.screen1BackGround.stopAni("winMan");
        }
        else {
            this.screen1BackGround.stopAni("winMan1");
        }
        if (this.screen1BackGround.y <= -13100 && this.screen1BackGround.y >= -14790) {
            this.page4e5s.show();
            var z = parseInt((-this.screen1BackGround.y - 13100) / 10 + '');
            console.log('z: ' + z);
            this.page4e5s.goPath(z - 0);
        }
        else {
            this.page4e5s.hide();
        }
        //page5
        if (this.screen1BackGround.y <= -14930 && this.screen1BackGround.y >= -15530) {
            this.basketball.show();
            var z = parseInt((-this.screen1BackGround.y - 14930) / 10 + '');
            console.log('z: ' + z);
            this.basketball.goPath(z - 0);
        }
        else {
            this.basketball.hide();
        }
        if (this.screen1BackGround.y <= -14790 && this.screen1BackGround.y >= -15315) {
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
            this.page4e5s.hide();
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
        if (this.shakeCount5 >= 1) {
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
        if (right) {
            this.questionScore++;
        }
        this.showingDialog = false;
        if (this.showQuestionIndexList.length >= 10) { // 显示了10条题了
            // Laya.timer.once(1000, this, this.showScoreResultDialg, [this.questionScore])
            this.showScoreResultDialg(this.questionScore);
        }
    };
    Main.prototype.showScoreResultDialg = function (score) {
        this.showingDialog = true;
        UIConfig.closeDialogOnSide = false;
        Laya.Dialog.manager = new Laya.DialogManager(); // 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        var scoreResultDialog = new ScoreResultDialog_1.default(score);
        scoreResultDialog.popup(true, false);
        scoreResultDialog.closeHandler = Laya.Handler.create(this, this.onScoreDialogClose);
    };
    Main.prototype.onScoreDialogClose = function () {
        this.showingDialog = true;
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

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./LoadingDialog":5,"./QuestionData":7,"./QuestionDialog":8,"./ScoreResultDialog":9,"./Screen1BackGround":10,"./ScrollDialog":11,"./ShakeDialog":12,"./basketball":13,"./page1&2":14,"./page2&3":15,"./page3&4":16,"./page3_runman":17,"./page4&5":18,"./running":19,"./swimming":20}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionShowY = [
    1313,
    3307,
    5827,
    6628,
    9120,
    9980,
    12144,
    13178,
    15760,
    16397
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

},{"./ui/layaMaxUI":21}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var layaMaxUI_1 = require("./ui/layaMaxUI");
var Constants_1 = require("./Constants");
var ScoreResultDialog = /** @class */ (function (_super) {
    __extends(ScoreResultDialog, _super);
    function ScoreResultDialog(score) {
        var _this = _super.call(this) || this;
        _this.isClicking = false;
        _this.autoDestroyAtClosed = true;
        _this.isPopupCenter = false;
        _this.pos(0, 0);
        _this.score = score;
        return _this;
    }
    ScoreResultDialog.prototype.onOpened = function () {
        // 延时执行，避免手机上执行时报组件undefined的问题
        Laya.timer.once(200, this, this.onCallLater);
    };
    ScoreResultDialog.prototype.onCallLater = function () {
        if (!this.bgImageView) {
            Laya.timer.once(200, this, this.onCallLater);
            return;
        }
        this.scoreImageView.loadImage("view/num_" + this.score + ".png");
        if (this.score >= 8) {
            this.bgImageView.loadImage(Constants_1.default.score4);
        }
        else if (this.score >= 5) {
            this.bgImageView.loadImage(Constants_1.default.score3);
        }
        else if (this.score >= 2) {
            this.bgImageView.loadImage(Constants_1.default.score2);
        }
        else {
            this.bgImageView.loadImage(Constants_1.default.score1);
        }
        this.scoreImageView.visible = true;
        this.bgImageView.visible = true;
        this.onceMoreButton.on(Laya.Event.CLICK, this, this.onOnceMore);
        this.shareButton.on(Laya.Event.CLICK, this, this.onShare);
        this.on(Laya.Event.MOUSE_DOWN, this, this.onDown);
        this.on(Laya.Event.MOUSE_UP, this, this.onUp);
    };
    ScoreResultDialog.prototype.onOnceMore = function () {
        console.log("ScoreResultDialog", "clicked once more button");
    };
    ScoreResultDialog.prototype.onShare = function () {
        console.log("ScoreResultDialog", "clicked on share");
    };
    ScoreResultDialog.prototype.onDown = function () {
        this.isClicking = true;
        Laya.timer.once(1000, this, this.onLongDownCheck); // 1秒算长按
    };
    ScoreResultDialog.prototype.onUp = function () {
        this.isClicking = false;
    };
    ScoreResultDialog.prototype.onLongDownCheck = function () {
        if (!this.isClicking) { // 不算长按
            return;
        }
        console.log("ScoreResultDialog", "long click");
        var htmlCanvas = this.bgImageView.drawToCanvas(512, 808, 0, 0);
        htmlCanvas.toBase64("image/jpeg", 0.9, this.onBgToBase64);
    };
    ScoreResultDialog.prototype.onBgToBase64 = function (res) {
        console.log("ScoreResultDialog", "onBgToBase64", res);
    };
    return ScoreResultDialog;
}(layaMaxUI_1.ui.dialog.ResultDialogUI));
exports.default = ScoreResultDialog;

},{"./Constants":1,"./ui/layaMaxUI":21}],10:[function(require,module,exports){
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
        this.winAni.pos(260, 3050);
        //page2
        this.page2_start = new Laya.Animation();
        this.page2_start.loadAnimation("ani/page2_start.ani");
        this.addChild(this.page2_start);
        this.page2_start.pos(250, 4880);
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
        this.page3_start = new Laya.Animation();
        this.page3_start.loadAnimation("ani/page3_start.ani");
        this.addChild(this.page3_start);
        this.page3_start.pos(250, 8250);
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
        this.CrowdAni.pos(270, 9985);
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
        // this.ScoreboardAni = new Laya.Animation()
        // this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani")
        // this.addChild(this.ScoreboardAni)
        // this.ScoreboardAni.pos(257, 14961)
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
        this.HatAni.pos(185, 15923);
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
            case "page2_start":
                this.page2_start.gotoAndStop(0);
                break;
            case "page2_start1":
                this.page2_start.gotoAndStop(1);
                break;
            case "page3_start":
                this.page3_start.gotoAndStop(0);
                break;
            case "page3_start1":
                this.page3_start.gotoAndStop(1);
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
            // case "computer":
            //     this.ComputerAni.gotoAndStop(30);
            //     break;
            case "crowd":
                this.CrowdAni.gotoAndStop(0);
                break;
            case "crowd1":
                this.CrowdAni.gotoAndStop(1);
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
                this.liuxiangAni.gotoAndStop(0);
                break;
            case "liuxiang1":
                this.liuxiangAni.gotoAndStop(1);
                break;
            case "medal":
                this.MedalAni.gotoAndStop(10);
                break;
            // case "scoreboard":
            //     this.ScoreboardAni.gotoAndStop(20);
            //     break;
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
                this.WinManAni.gotoAndStop(0);
                break;
            case "winMan1":
                this.WinManAni.gotoAndStop(1);
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
                this.BallAni.play(1, false);
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
                this.CrowdAni.play(1, false);
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
                this.HeartAni.play(1, false);
                break;
            case "liuxiang":
                this.liuxiangAni.play(1, false);
                break;
            case "medal":
                this.MedalAni.play(0, false);
                break;
            // case "scoreboard":
            //     this.ScoreboardAni.play(0, false);
            //     break;
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
            // case "scoreboard":
            //     return this.ScoreboardAni.isPlaying;
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
            // case "scoreboard":
            //     this.ScoreboardAni.visible = visible;
            //     break;
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
            // case "scoreboard":
            //     return this.ScoreboardAni.visible;
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

},{"./Constants":1}],11:[function(require,module,exports){
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

},{"./ui/layaMaxUI":21}],12:[function(require,module,exports){
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

},{"./ui/layaMaxUI":21}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
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
        var ResultDialogUI = /** @class */ (function (_super) {
            __extends(ResultDialogUI, _super);
            function ResultDialogUI() {
                return _super.call(this) || this;
            }
            ResultDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.loadScene("dialog/ResultDialog");
            };
            return ResultDialogUI;
        }(Dialog));
        dialog.ResultDialogUI = ResultDialogUI;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTG9hZGluZ0RpYWxvZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1F1ZXN0aW9uRGF0YS50cyIsInNyYy9RdWVzdGlvbkRpYWxvZy50cyIsInNyYy9TY29yZVJlc3VsdERpYWxvZy50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyIsInNyYy9TY3JvbGxEaWFsb2cudHMiLCJzcmMvU2hha2VEaWFsb2cudHMiLCJzcmMvYmFza2V0YmFsbC50cyIsInNyYy9wYWdlMSYyLnRzIiwic3JjL3BhZ2UyJjMudHMiLCJzcmMvcGFnZTMmNC50cyIsInNyYy9wYWdlM19ydW5tYW4udHMiLCJzcmMvcGFnZTQmNS50cyIsInNyYy9ydW5uaW5nLnRzIiwic3JjL3N3aW1taW5nLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBa0NBLENBQUM7SUFoQ1UscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJC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QUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBaUJkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFrQmQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFtQmYsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FB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V0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLG1CQUFtQjtZQUNuQix3Q0FBd0M7WUFDeEMsYUFBYTtZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLHFCQUFxQjtZQUNyQiwwQ0FBMEM7WUFDMUMsYUFBYTtZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNWLHFCQUFxQjtZQUNyQiwwQ0FBMEM7WUFDMUMsYUFBYTtZQUNiLEtB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ZkEsQUFlQyxDQWZxQyxNQUFNLEdBZTNDO1FBZlksdUJBQWdCLG1CQWU1QixDQUFBO1FBQ0Q7WUFBb0Msa0NBQU07WUFLdEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLHVDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQ0wscUJBQUM7UUFBRCxDQVZBLEFBVUMsQ0FWbUMsTUFBTSxHQVV6QztRQVZZLHFCQUFjLGlCQVUxQixDQUFBO1FBQ0Q7WUFBb0Msa0NBQU07WUFJdEM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLHVDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMxQyxDQUFDO1lBQ0wscUJBQUM7UUFBRCxDQVRBLEFBU0MsQ0FUbUMsTUFBTSxHQVN6QztRQVRZLHFCQUFjLGlCQVMxQixDQUFBO1FBQ0Q7WUFBbUMsaUNBQU07WUFFckM7dUJBQWUsaUJBQU87WUFBQSxDQUFDO1lBQ3ZCLHNDQUFjLEdBQWQ7Z0JBQ0ksaUJBQU0sY0FBYyxXQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0wsb0JBQUM7UUFBRCxDQVBBLEFBT0MsQ0FQa0MsTUFBTSxHQU94QztRQVBZLG9CQUFhLGdCQU96QixDQUFBO0lBQ0wsQ0FBQyxFQXZEZ0IsTUFBTSxHQUFOLFNBQU0sS0FBTixTQUFNLFFBdUR0QjtBQUFELENBQUMsRUF2RGEsRUFBRSxHQUFGLFVBQUUsS0FBRixVQUFFLFFBdURmIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50cyB7XG5cbiAgICBzdGF0aWMgYmFja2dyb3VuZDEgPSBcImJnL2JhY2tncm91bmQxLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQyID0gXCJiZy9iYWNrZ3JvdW5kMi5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMyA9IFwiYmcvYmFja2dyb3VuZDMucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDQgPSBcImJnL2JhY2tncm91bmQ0LnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQ1ID0gXCJiZy9iYWNrZ3JvdW5kNS5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMUhlaWdodCA9IDM2MDRcbiAgICBzdGF0aWMgYmFja2dyb3VuZDJIZWlnaHQgPSAyNTYxXG4gICAgc3RhdGljIGJhY2tncm91bmQzSGVpZ2h0ID0gMjE5MFxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNEhlaWdodCA9IDI1NTlcbiAgICBzdGF0aWMgYmFja2dyb3VuZDVIZWlnaHQgPSAxOTIwXG5cblxuICAgIHN0YXRpYyBzdGFnZVdpZHRoID0gNTEyXG4gICAgc3RhdGljIHN0YXRlSGVpZ2h0ID0gQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ1SGVpZ2h0ICsgMzg4MFxuICAgIHN0YXRpYyBzY2FsZU1vZGU6IHN0cmluZyA9IFwibm9ib3JkZXJcIjtcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTogc3RyaW5nID0gXCJ2ZXJ0aWNhbFwiO1xuXG4gICAgc3RhdGljIHNvdW5kMCA9IFwicmVzL3NvdW5kLzAubXAzXCJcbiAgICBzdGF0aWMgc291bmQxID0gXCJyZXMvc291bmQvMS5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDIgPSBcInJlcy9zb3VuZC8yLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMyA9IFwicmVzL3NvdW5kLzMubXAzXCJcbiAgICBzdGF0aWMgc291bmQ0ID0gXCJyZXMvc291bmQvNC5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZEJnbSA9IFwicmVzL3NvdW5kL2JnbS5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZEJnbTggPSBcInJlcy9zb3VuZC9iZ204Lm1wM1wiXG4gICAgXG4gICAgc3RhdGljIHNjb3JlMSA9IFwidmlldy9zY29yZV8xLmpwZ1wiXG4gICAgc3RhdGljIHNjb3JlMiA9IFwidmlldy9zY29yZV8yLmpwZ1wiXG4gICAgc3RhdGljIHNjb3JlMyA9IFwidmlldy9zY29yZV8zLmpwZ1wiXG4gICAgc3RhdGljIHNjb3JlNCA9IFwidmlldy9zY29yZV80LmpwZ1wiXG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGJhbGwgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ6Laz55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Gb290YmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi2s+eQg+WBnOatouaXi+i9rFxuICAgICAqL1xuICAgIHN0b3BSb3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5QW5pLmlzUGxheWluZyl7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Laz55CDXGLml4vovaxcbiAgICAgKi9cbiAgICBwbGF5Um90YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ib2R5QW5pLmlzUGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUFuaS5wbGF5KDAsIHRydWUpXG5cbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb290YmFsbFgoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB4ID0gbWFwW3ldXG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHhcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cbn1cbmNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuXG5tYXBbMjMyXSA9IDMyNlxubWFwWzIzMl0gPSAzMjlcbm1hcFsyMzRdID0gMzMwXG5tYXBbMjM2XSA9IDMzMlxubWFwWzIzN10gPSAzMzRcbm1hcFsyMzddID0gMzM3XG5tYXBbMjM5XSA9IDMzOVxubWFwWzIzOV0gPSAzNDJcbm1hcFsyNDBdID0gMzQ0XG5tYXBbMjQyXSA9IDM0NVxubWFwWzI0NF0gPSAzNDdcbm1hcFsyNDVdID0gMzQ4XG5tYXBbMjQ3XSA9IDM1MFxubWFwWzI0OV0gPSAzNTJcbm1hcFsyNTBdID0gMzUzXG5tYXBbMjUyXSA9IDM1NVxubWFwWzI1NF0gPSAzNTdcbm1hcFsyNTVdID0gMzU4XG5tYXBbMjU3XSA9IDM2MFxubWFwWzI1OF0gPSAzNjJcbm1hcFsyNThdID0gMzY1XG5tYXBbMjYwXSA9IDM2NlxubWFwWzI2Ml0gPSAzNjhcbm1hcFsyNjNdID0gMzcwXG5tYXBbMjY1XSA9IDM3MVxubWFwWzI2N10gPSAzNzNcbm1hcFsyNjhdID0gMzc1XG5tYXBbMjcwXSA9IDM3NlxubWFwWzI3Ml0gPSAzNzhcbm1hcFsyNzNdID0gMzgwXG5tYXBbMjc1XSA9IDM4MVxubWFwWzI3OF0gPSAzODFcbm1hcFsyODFdID0gMzgxXG5tYXBbMjgzXSA9IDM4M1xubWFwWzI4Nl0gPSAzODNcbm1hcFsyODhdID0gMzg0XG5tYXBbMjkxXSA9IDM4NFxubWFwWzI5NF0gPSAzODRcbm1hcFsyOTZdID0gMzg2XG5tYXBbMjk5XSA9IDM4NlxubWFwWzMwM10gPSAzODZcbm1hcFszMDZdID0gMzg2XG5tYXBbMzA5XSA9IDM4NlxubWFwWzMxMl0gPSAzODZcbm1hcFszMTZdID0gMzg2XG5tYXBbMzE3XSA9IDM4OFxubWFwWzMyMV0gPSAzODhcbm1hcFszMjRdID0gMzg4XG5tYXBbMzI3XSA9IDM4OFxubWFwWzMzMF0gPSAzODhcbm1hcFszMzRdID0gMzg4XG5tYXBbMzM1XSA9IDM4NlxubWFwWzMzOV0gPSAzODZcbm1hcFszNDJdID0gMzg2XG5tYXBbMzQ1XSA9IDM4NlxubWFwWzM0OF0gPSAzODZcbm1hcFszNTJdID0gMzg0XG5tYXBbMzU1XSA9IDM4NFxubWFwWzM1N10gPSAzODNcbm1hcFszNjBdID0gMzgzXG5tYXBbMzYxXSA9IDM4MVxubWFwWzM2M10gPSAzODBcbm1hcFszNjVdID0gMzc4XG5tYXBbMzY2XSA9IDM3NlxubWFwWzM3MF0gPSAzNzVcbm1hcFszNzFdID0gMzczXG5tYXBbMzczXSA9IDM3MVxubWFwWzM3Nl0gPSAzNzBcbm1hcFszNzhdID0gMzY4XG5tYXBbMzc5XSA9IDM2NlxubWFwWzM4MV0gPSAzNjVcbm1hcFszODNdID0gMzYzXG5tYXBbMzg2XSA9IDM2M1xubWFwWzM4OF0gPSAzNjJcbm1hcFszODldID0gMzYwXG5tYXBbMzkxXSA9IDM1OFxubWFwWzM5M10gPSAzNTdcbm1hcFszOTRdID0gMzU1XG5tYXBbMzk2XSA9IDM1M1xubWFwWzM5N10gPSAzNTJcbm1hcFszOTldID0gMzUwXG5tYXBbNDAxXSA9IDM0OFxubWFwWzQwNF0gPSAzNDhcbm1hcFs0MDZdID0gMzQ3XG5tYXBbNDA3XSA9IDM0NVxubWFwWzQwOV0gPSAzNDRcbm1hcFs0MTFdID0gMzQyXG5tYXBbNDEyXSA9IDM0MFxubWFwWzQxNF0gPSAzMzlcbm1hcFs0MTVdID0gMzM3XG5tYXBbNDE3XSA9IDMzNVxubWFwWzQxOV0gPSAzMzRcbm1hcFs0MjBdID0gMzMyXG5tYXBbNDIyXSA9IDMzMFxubWFwWzQyNV0gPSAzMjlcbm1hcFs0MjddID0gMzI3XG5tYXBbNDI5XSA9IDMyNlxubWFwWzQzMl0gPSAzMjZcbm1hcFs0MzNdID0gMzI0XG5tYXBbNDM1XSA9IDMyMlxubWFwWzQzN10gPSAzMjFcbm1hcFs0MzhdID0gMzE5XG5tYXBbNDQwXSA9IDMxN1xubWFwWzQ0Ml0gPSAzMTZcbm1hcFs0NDNdID0gMzE0XG5tYXBbNDQ1XSA9IDMxMlxubWFwWzQ0OF0gPSAzMTJcbm1hcFs0NTBdID0gMzExXG5tYXBbNDUxXSA9IDMwOVxubWFwWzQ1NV0gPSAzMDhcbm1hcFs0NTZdID0gMzA2XG5tYXBbNDU4XSA9IDMwNFxubWFwWzQ2MV0gPSAzMDNcbm1hcFs0NjNdID0gMzAxXG5tYXBbNDY1XSA9IDI5OVxubWFwWzQ2Nl0gPSAyOThcbm1hcFs0NjhdID0gMjk2XG5tYXBbNDY5XSA9IDI5NFxubWFwWzQ3MV0gPSAyOTNcbm1hcFs0NzRdID0gMjkzXG5tYXBbNDc2XSA9IDI5MVxubWFwWzQ3OF0gPSAyOTBcbm1hcFs0NzldID0gMjg4XG5tYXBbNDgxXSA9IDI4NlxubWFwWzQ4M10gPSAyODVcbm1hcFs0ODRdID0gMjgzXG5tYXBbNDg2XSA9IDI4MVxubWFwWzQ4N10gPSAyODBcbm1hcFs0OTFdID0gMjgwXG5tYXBbNDkyXSA9IDI3OFxubWFwWzQ5NF0gPSAyNzZcbm1hcFs0OTZdID0gMjc1XG5tYXBbNDk3XSA9IDI3M1xubWFwWzQ5OV0gPSAyNzJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzQ5OV0gPSAyNzJcbm1hcFs1MDJdID0gMjcyXG5tYXBbNTA0XSA9IDI3MFxubWFwWzUwNV0gPSAyNjhcbm1hcFs1MDddID0gMjY3XG5tYXBbNTA5XSA9IDI2NVxubWFwWzUxMF0gPSAyNjNcbm1hcFs1MTRdID0gMjYyXG5tYXBbNTE1XSA9IDI2MFxubWFwWzUxN10gPSAyNThcbm1hcFs1MTldID0gMjU3XG5tYXBbNTIwXSA9IDI1NVxubWFwWzUyMl0gPSAyNTRcbm1hcFs1MjNdID0gMjUyXG5tYXBbNTI1XSA9IDI1MFxubWFwWzUyN10gPSAyNDdcbm1hcFs1MjhdID0gMjQ1XG5tYXBbNTMwXSA9IDI0NFxubWFwWzUzMl0gPSAyNDJcbm1hcFs1MzNdID0gMjQwXG5tYXBbNTMzXSA9IDIzN1xubWFwWzUzNV0gPSAyMzZcbm1hcFs1MzZdID0gMjM0XG5tYXBbNTM4XSA9IDIzMlxubWFwWzU0MF0gPSAyMzFcbm1hcFs1NDFdID0gMjI5XG5tYXBbNTQzXSA9IDIyNlxubWFwWzU0NV0gPSAyMjRcbm1hcFs1NDZdID0gMjIyXG5tYXBbNTQ4XSA9IDIyMVxubWFwWzU1MF0gPSAyMTlcbm1hcFs1NTFdID0gMjE4XG5tYXBbNTUzXSA9IDIxNlxubWFwWzU1Nl0gPSAyMTZcbm1hcFs1NThdID0gMjE0XG5tYXBbNTU5XSA9IDIxM1xubWFwWzU2MV0gPSAyMTFcbm1hcFs1NjRdID0gMjExXG5tYXBbNTY2XSA9IDIwOVxubWFwWzU2OF0gPSAyMDhcbm1hcFs1NzFdID0gMjA4XG5tYXBbNTcyXSA9IDIwNlxubWFwWzU3NF0gPSAyMDRcbm1hcFs1NzZdID0gMjAzXG5tYXBbNTc5XSA9IDIwM1xubWFwWzU4MV0gPSAyMDFcbm1hcFs1ODJdID0gMjAwXG5tYXBbNTg0XSA9IDE5OFxubWFwWzU4Nl0gPSAxOTZcbm1hcFs1ODddID0gMTk1XG5tYXBbNTkwXSA9IDE5NVxubWFwWzU5Ml0gPSAxOTNcbm1hcFs1OTVdID0gMTkzXG5tYXBbNTk3XSA9IDE5MVxubWFwWzYwMF0gPSAxOTFcbm1hcFs2MDJdID0gMTkwXG5tYXBbNjA0XSA9IDE4OFxubWFwWzYwN10gPSAxODhcbm1hcFs2MDhdID0gMTg2XG5tYXBbNjEwXSA9IDE4NVxubWFwWzYxM10gPSAxODVcbm1hcFs2MTVdID0gMTgzXG5tYXBbNjE3XSA9IDE4MlxubWFwWzYxOF0gPSAxODBcbm1hcFs2MjJdID0gMTc4XG5tYXBbNjIzXSA9IDE3N1xubWFwWzYyNl0gPSAxNzdcbm1hcFs2MjhdID0gMTc1XG5tYXBbNjMwXSA9IDE3M1xubWFwWzYzMV0gPSAxNzJcbm1hcFs2MzVdID0gMTcyXG5tYXBbNjM2XSA9IDE3MFxubWFwWzYzOF0gPSAxNjhcbm1hcFs2NDBdID0gMTY3XG5tYXBbNjQzXSA9IDE2N1xubWFwWzY0NF0gPSAxNjVcbm1hcFs2NDhdID0gMTY0XG5tYXBbNjUxXSA9IDE2NFxubWFwWzY1M10gPSAxNjJcbm1hcFs2NTZdID0gMTYyXG5tYXBbNjU4XSA9IDE2MFxubWFwWzY2MV0gPSAxNjBcbm1hcFs2NjJdID0gMTU5XG5tYXBbNjY2XSA9IDE1OVxubWFwWzY2N10gPSAxNTdcbm1hcFs2NzFdID0gMTU3XG5tYXBbNjcyXSA9IDE1NVxubWFwWzY3Nl0gPSAxNTVcbm1hcFs2NzldID0gMTU1XG5tYXBbNjgwXSA9IDE1NFxubWFwWzY4NF0gPSAxNTRcbm1hcFs2ODddID0gMTU0XG5tYXBbNjkwXSA9IDE1NFxubWFwWzY5NF0gPSAxNTRcbm1hcFs2OTddID0gMTU0XG5tYXBbNzAwXSA9IDE1NFxubWFwWzcwM10gPSAxNTRcbm1hcFs3MDddID0gMTU0XG5tYXBbNzEwXSA9IDE1NFxubWFwWzcxM10gPSAxNTRcbm1hcFs3MTZdID0gMTU0XG5tYXBbNzIwXSA9IDE1NFxubWFwWzcyM10gPSAxNTRcbm1hcFs3MjZdID0gMTU0XG5tYXBbNzMwXSA9IDE1NFxubWFwWzczM10gPSAxNTRcbm1hcFs3MzZdID0gMTU1XG5tYXBbNzM5XSA9IDE1NVxubWFwWzc0M10gPSAxNTVcbm1hcFs3NDZdID0gMTU1XG5tYXBbNzQ5XSA9IDE1NVxubWFwWzc1MV0gPSAxNTdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbNzUxXSA9IDE1NVxubWFwWzc1NF0gPSAxNTVcbm1hcFs3NTZdID0gMTU3XG5tYXBbNzU5XSA9IDE1N1xubWFwWzc2MV0gPSAxNTlcbm1hcFs3NjRdID0gMTU5XG5tYXBbNzY1XSA9IDE2MFxubWFwWzc2N10gPSAxNjJcbm1hcFs3NzBdID0gMTYyXG5tYXBbNzcyXSA9IDE2NFxubWFwWzc3NV0gPSAxNjRcbm1hcFs3NzddID0gMTY1XG5tYXBbNzgwXSA9IDE2N1xubWFwWzc4M10gPSAxNjdcbm1hcFs3ODVdID0gMTY4XG5tYXBbNzg4XSA9IDE2OFxubWFwWzc5MF0gPSAxNzBcbm1hcFs3OTNdID0gMTcwXG5tYXBbNzk1XSA9IDE3MlxubWFwWzc5N10gPSAxNzNcbm1hcFs4MDBdID0gMTczXG5tYXBbODAxXSA9IDE3NVxubWFwWzgwNV0gPSAxNzVcbm1hcFs4MDZdID0gMTc3XG5tYXBbODA4XSA9IDE3OFxubWFwWzgxMV0gPSAxNzhcbm1hcFs4MTNdID0gMTgwXG5tYXBbODE1XSA9IDE4MlxubWFwWzgxOF0gPSAxODJcbm1hcFs4MTldID0gMTgzXG5tYXBbODIxXSA9IDE4NVxubWFwWzgyM10gPSAxODZcbm1hcFs4MjZdID0gMTg2XG5tYXBbODI4XSA9IDE4OFxubWFwWzgyOV0gPSAxOTBcbm1hcFs4MzNdID0gMTkxXG5tYXBbODM0XSA9IDE5M1xubWFwWzgzN10gPSAxOTNcbm1hcFs4MzldID0gMTk1XG5tYXBbODQxXSA9IDE5NlxubWFwWzg0Ml0gPSAxOThcbm1hcFs4NDRdID0gMjAwXG5tYXBbODQ2XSA9IDIwMVxubWFwWzg0N10gPSAyMDNcbm1hcFs4NDldID0gMjA0XG5tYXBbODUxXSA9IDIwNlxubWFwWzg1Ml0gPSAyMDhcbm1hcFs4NTRdID0gMjA5XG5tYXBbODU3XSA9IDIxMVxubWFwWzg1OV0gPSAyMTNcbm1hcFs4NjBdID0gMjE0XG5tYXBbODY0XSA9IDIxNFxubWFwWzg2NV0gPSAyMTZcbm1hcFs4NjddID0gMjE4XG5tYXBbODY5XSA9IDIxOVxubWFwWzg3MF0gPSAyMjFcbm1hcFs4NzJdID0gMjIyXG5tYXBbODc1XSA9IDIyMlxubWFwWzg3N10gPSAyMjRcbm1hcFs4NzhdID0gMjI2XG5tYXBbODc4XSA9IDIyOVxubWFwWzg4MF0gPSAyMzFcbm1hcFs4ODJdID0gMjMyXG5tYXBbODgzXSA9IDIzNFxubWFwWzg4NV0gPSAyMzZcbm1hcFs4ODddID0gMjM3XG5tYXBbODg4XSA9IDIzOVxubWFwWzg5MF0gPSAyNDBcbm1hcFs4OTFdID0gMjQyXG5tYXBbODkzXSA9IDI0NFxubWFwWzg5NV0gPSAyNDVcbm1hcFs4OTZdID0gMjQ3XG5tYXBbODk4XSA9IDI0OVxubWFwWzkwMF0gPSAyNTBcbm1hcFs5MDFdID0gMjUyXG5tYXBbOTAzXSA9IDI1NFxubWFwWzkwNV0gPSAyNTVcbm1hcFs5MDhdID0gMjU3XG5tYXBbOTA5XSA9IDI1OFxubWFwWzkxM10gPSAyNjBcbm1hcFs5MTZdID0gMjYwXG5tYXBbOTE4XSA9IDI2MlxubWFwWzkyMV0gPSAyNjJcbm1hcFs5MjRdID0gMjYyXG5tYXBbOTI3XSA9IDI2MlxubWFwWzkzMV0gPSAyNjJcbm1hcFs5MzJdID0gMjYzXG5tYXBbOTM0XSA9IDI2MlxubWFwWzkzN10gPSAyNjJcbm1hcFs5NDFdID0gMjYyXG5tYXBbOTQ0XSA9IDI2MlxubWFwWzk0N10gPSAyNjBcbm1hcFs5NTBdID0gMjYwXG5tYXBbOTU0XSA9IDI1OFxubWFwWzk1N10gPSAyNTdcbm1hcFs5NjBdID0gMjU1XG5tYXBbOTYzXSA9IDI1NFxubWFwWzk2N10gPSAyNTJcbm1hcFs5NzBdID0gMjUyXG5tYXBbOTcyXSA9IDI1MFxubWFwWzk3M10gPSAyNDlcbm1hcFs5NzZdID0gMjQ5XG5tYXBbOTgwXSA9IDI0OVxubWFwWzk4MV0gPSAyNDdcbm1hcFs5ODVdID0gMjQ3XG5tYXBbOTg2XSA9IDI0NVxubWFwWzk4OF0gPSAyNDRcbm1hcFs5OTFdID0gMjQ0XG5tYXBbOTkzXSA9IDI0MlxubWFwWzk5NF0gPSAyNDBcbm1hcFs5OThdID0gMjQwXG5tYXBbOTk5XSA9IDIzOVxubWFwWzEwMDFdID0gMjM3XG5tYXBbMTAwNF0gPSAyMzZcbm1hcFsxMDA2XSA9IDIzNFxubWFwWzEwMDldID0gMjMyXG5tYXBbMTAxMV0gPSAyMzFcbm1hcFsxMDEyXSA9IDIyOVxubWFwWzEwMTRdID0gMjI3XG5tYXBbMTAxN10gPSAyMjZcbm1hcFsxMDE5XSA9IDIyNFxubWFwWzEwMjFdID0gMjIyXG5tYXBbMTAyNF0gPSAyMjFcbm1hcFsxMDI2XSA9IDIxOVxubWFwWzEwMjldID0gMjE5XG5tYXBbMTAzMl0gPSAyMjFcbm1hcFsxMDM1XSA9IDIyMlxubWFwWzEwMzldID0gMjIyXG5tYXBbMTA0MF0gPSAyMjRcbm1hcFsxMDQyXSA9IDIyNlxubWFwWzEwNDVdID0gMjI2XG5tYXBbMTA0N10gPSAyMjdcbm1hcFsxMDQ4XSA9IDIyOVxubWFwWzEwNTJdID0gMjI5XG5tYXBbMTA1M10gPSAyMzFcbm1hcFsxMDU1XSA9IDIzMlxubWFwWzEwNThdID0gMjM0XG5tYXBbMTA2MF0gPSAyMzZcbm1hcFsxMDYyXSA9IDIzN1xubWFwWzEwNjVdID0gMjM5XG5tYXBbMTA2Nl0gPSAyNDBcbm1hcFsxMDY4XSA9IDI0MlxubWFwWzEwNzBdID0gMjQ0XG5tYXBbMTA3MV0gPSAyNDVcbm1hcFsxMDczXSA9IDI0N1xubWFwWzEwNzVdID0gMjQ5XG5tYXBbMTA3Nl0gPSAyNTBcbm1hcFsxMDc4XSA9IDI1MlxubWFwWzEwODBdID0gMjU0XG5tYXBbMTA4MV0gPSAyNTVcbm1hcFsxMDg0XSA9IDI1NVxubWFwWzEwODhdID0gMjU1XG5tYXBbMTA5MV0gPSAyNTVcbm1hcFsxMDk0XSA9IDI1NVxubWFwWzEwOTZdID0gMjU3XG5tYXBbMTA5OV0gPSAyNTdcbm1hcFsxMTAyXSA9IDI1N1xubWFwWzExMDZdID0gMjU3XG5tYXBbMTEwOV0gPSAyNThcbm1hcFsxMTEyXSA9IDI1N1xubWFwWzExMTZdID0gMjU3XG5tYXBbMTExN10gPSAyNThcbm1hcFsxMTIwXSA9IDI1OFxubWFwWzExMjRdID0gMjU4XG5tYXBbMTEyN10gPSAyNThcbm1hcFsxMTI5XSA9IDI2MFxubWFwWzExMzJdID0gMjYwXG5tYXBbMTEzNV0gPSAyNjBcbm1hcFsxMTM3XSA9IDI2MlxubWFwWzExNDBdID0gMjYyXG5tYXBbMTE0M10gPSAyNjNcbm1hcFsxMTQ3XSA9IDI2M1xubWFwWzExNTBdID0gMjYzXG5tYXBbMTE1M10gPSAyNjNcbm1hcFsxMTU2XSA9IDI2M1xubWFwWzExNjBdID0gMjY1XG5tYXBbMTE2M10gPSAyNjVcbm1hcFsxMTY2XSA9IDI2NVxubWFwWzExNjldID0gMjY1XG5tYXBbMTE3M10gPSAyNjVcbm1hcFsxMTc2XSA9IDI2NVxubWFwWzExNzhdID0gMjY3XG5tYXBbMTE4MV0gPSAyNjdcbm1hcFsxMTg0XSA9IDI2N1xubWFwWzExODddID0gMjY3XG5tYXBbMTE5MV0gPSAyNjdcbm1hcFsxMTkyXSA9IDI2OFxubWFwWzExOTZdID0gMjY4XG5tYXBbMTE5OV0gPSAyNjhcbm1hcFsxMjAyXSA9IDI2OFxubWFwWzEyMDRdID0gMjcwXG5tYXBbMTIwN10gPSAyNzBcbm1hcFsxMjEwXSA9IDI3MFxubWFwWzEyMTRdID0gMjcwXG5tYXBbMTIxNV0gPSAyNzJcbm1hcFsxMjE5XSA9IDI3MlxubWFwWzEyMjJdID0gMjcyXG5tYXBbMTIyNV0gPSAyNzJcbm1hcFsxMjI3XSA9IDI3M1xubWFwWzEyMzBdID0gMjczXG5tYXBbMTIzM10gPSAyNzNcbm1hcFsxMjM3XSA9IDI3M1xubWFwWzEyNDBdID0gMjczXG5tYXBbMTI0MV0gPSAyNzVcbm1hcFsxMjQ1XSA9IDI3NVxubWFwWzEyNDhdID0gMjc1XG5tYXBbMTI1MV0gPSAyNzVcbm1hcFsxMjU1XSA9IDI3NVxubWFwWzEyNThdID0gMjc1XG5tYXBbMTI1OV0gPSAyNzZcbm1hcFsxMjYzXSA9IDI3NlxubWFwWzEyNjZdID0gMjc2XG5tYXBbMTI2OV0gPSAyNzZcbm1hcFsxMjczXSA9IDI3NlxubWFwWzEyNzZdID0gMjc2XG5tYXBbMTI3N10gPSAyNzhcbm1hcFsxMjgxXSA9IDI3OFxubWFwWzEyODRdID0gMjc4XG5tYXBbMTI4N10gPSAyNzhcbm1hcFsxMjg5XSA9IDI4MFxubWFwWzEyOTJdID0gMjgwXG5tYXBbMTI5NV0gPSAyODBcbm1hcFsxMjk3XSA9IDI4MVxubWFwWzEzMDBdID0gMjgxXG5tYXBbMTMwMl0gPSAyODNcbm1hcFsxMzA1XSA9IDI4NVxubWFwWzEzMDldID0gMjg2XG5tYXBbMTMxMF0gPSAyODhcbm1hcFsxMzEzXSA9IDI4OFxubWFwWzEzMTVdID0gMjkwXG5tYXBbMTMxN10gPSAyOTFcbm1hcFsxMzIwXSA9IDI5MVxubWFwWzEzMjJdID0gMjkzXG5tYXBbMTMyM10gPSAyOTRcbm1hcFsxMzI1XSA9IDI5NlxubWFwWzEzMjhdID0gMjk2XG5tYXBbMTMzMF0gPSAyOThcbm1hcFsxMzMxXSA9IDI5OVxubWFwWzEzMzNdID0gMzAxXG5tYXBbMTMzNl0gPSAzMDNcbm1hcFsxMzM4XSA9IDMwNFxubWFwWzEzNDFdID0gMzA0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbMTM0MV0gPSAzMDRcbm1hcFsxMzQ0XSA9IDMwNFxubWFwWzEzNDZdID0gMzA2XG5tYXBbMTM0OV0gPSAzMDZcbm1hcFsxMzUyXSA9IDMwNlxubWFwWzEzNTRdID0gMzA4XG5tYXBbMTM1N10gPSAzMDhcbm1hcFsxMzYwXSA9IDMwOFxubWFwWzEzNjJdID0gMzA5XG5tYXBbMTM2NV0gPSAzMDlcbm1hcFsxMzY5XSA9IDMwOVxubWFwWzEzNzBdID0gMzExXG5tYXBbMTM3M10gPSAzMTFcbm1hcFsxMzc3XSA9IDMxMVxubWFwWzEzNzhdID0gMzEyXG5tYXBbMTM4Ml0gPSAzMTJcbm1hcFsxMzg1XSA9IDMxMlxubWFwWzEzODddID0gMzE0XG5tYXBbMTM5MF0gPSAzMTRcbm1hcFsxMzkzXSA9IDMxNFxubWFwWzEzOTVdID0gMzE2XG5tYXBbMTM5OF0gPSAzMTZcbm1hcFsxNDAxXSA9IDMxNlxubWFwWzE0MDVdID0gMzE2XG5tYXBbMTQwOF0gPSAzMTZcbm1hcFsxNDA5XSA9IDMxN1xubWFwWzE0MTNdID0gMzE3XG5tYXBbMTQxNl0gPSAzMTdcbm1hcFsxNDE5XSA9IDMxN1xubWFwWzE0MjNdID0gMzE3XG5tYXBbMTQyNF0gPSAzMTlcbm1hcFsxNDI3XSA9IDMxOVxubWFwWzE0MzFdID0gMzE5XG5tYXBbMTQzMl0gPSAzMjFcbm1hcFsxNDM2XSA9IDMyMVxubWFwWzE0MzldID0gMzIxXG5tYXBbMTQ0MV0gPSAzMjJcbm1hcFsxNDQ0XSA9IDMyMlxubWFwWzE0NDddID0gMzIyXG5tYXBbMTQ0OV0gPSAzMjRcbm1hcFsxNDUyXSA9IDMyNFxubWFwWzE0NTVdID0gMzI0XG5tYXBbMTQ1N10gPSAzMjZcbm1hcFsxNDYwXSA9IDMyNlxubWFwWzE0NjNdID0gMzI2XG5tYXBbMTQ2N10gPSAzMjZcbm1hcFsxNDcwXSA9IDMyNlxubWFwWzE0NzNdID0gMzI2XG5tYXBbMTQ3Nl0gPSAzMjZcbm1hcFsxNDgwXSA9IDMyNlxubWFwWzE0ODNdID0gMzI2XG5tYXBbMTQ4Nl0gPSAzMjZcbm1hcFsxNDkwXSA9IDMyNlxubWFwWzE0OTNdID0gMzI2XG5tYXBbMTQ5Nl0gPSAzMjZcbm1hcFsxNDk5XSA9IDMyNlxubWFwWzE1MDNdID0gMzI2XG5tYXBbMTUwNl0gPSAzMjZcbm1hcFsxNTA4XSA9IDMyNFxubWFwWzE1MTFdID0gMzI0XG5tYXBbMTUxNF0gPSAzMjRcbm1hcFsxNTE3XSA9IDMyNFxubWFwWzE1MTldID0gMzIyXG5tYXBbMTUyMl0gPSAzMjJcbm1hcFsxNTI2XSA9IDMyMlxubWFwWzE1MjddID0gMzIxXG5tYXBbMTUyN10gPSAzMjFcbm1hcFsxNTMwXSA9IDMyMVxubWFwWzE1MzRdID0gMzIxXG5tYXBbMTUzN10gPSAzMjFcbm1hcFsxNTQwXSA9IDMyMVxubWFwWzE1NDRdID0gMzIxXG5tYXBbMTU0N10gPSAzMjFcbm1hcFsxNTUwXSA9IDMyMVxubWFwWzE1NTJdID0gMzE5XG5tYXBbMTU1NV0gPSAzMTlcbm1hcFsxNTU3XSA9IDMxN1xubWFwWzE1NjBdID0gMzE3XG5tYXBbMTU2Ml0gPSAzMTZcbm1hcFsxNTY1XSA9IDMxNlxubWFwWzE1NjZdID0gMzE0XG5tYXBbMTU3MF0gPSAzMTRcbm1hcFsxNTczXSA9IDMxNFxubWFwWzE1NzVdID0gMzEyXG5tYXBbMTU3OF0gPSAzMTJcbm1hcFsxNTgxXSA9IDMxMVxubWFwWzE1ODRdID0gMzExXG5tYXBbMTU4OF0gPSAzMDlcbm1hcFsxNTkxXSA9IDMwOVxubWFwWzE1OTRdID0gMzA5XG5tYXBbMTU5Nl0gPSAzMDhcbm1hcFsxNTk5XSA9IDMwOFxubWFwWzE2MDFdID0gMzA4XG5tYXBbMTYwMV0gPSAzMDhcbm1hcFsxNjA0XSA9IDMwOFxubWFwWzE2MDZdID0gMzA2XG5tYXBbMTYwOV0gPSAzMDZcbm1hcFsxNjEyXSA9IDMwNFxubWFwWzE2MTZdID0gMzA0XG5tYXBbMTYxN10gPSAzMDNcbm1hcFsxNjIwXSA9IDMwM1xubWFwWzE2MjRdID0gMzAzXG5tYXBbMTYyN10gPSAzMDNcbm1hcFsxNjI5XSA9IDMwMVxubWFwWzE2MzJdID0gMzAxXG5tYXBbMTYzNV0gPSAzMDFcbm1hcFsxNjM3XSA9IDI5OVxubWFwWzE2NDBdID0gMjk5XG5tYXBbMTY0M10gPSAyOTlcbm1hcFsxNjQ3XSA9IDI5OVxubWFwWzE2NTBdID0gMjk5XG5tYXBbMTY1Ml0gPSAyOThcbm1hcFsxNjU1XSA9IDI5OFxubWFwWzE2NThdID0gMjk4XG5tYXBbMTY2MV0gPSAyOThcbm1hcFsxNjY1XSA9IDI5OFxubWFwWzE2NjZdID0gMjk2XG5tYXBbMTY2OV0gPSAyOTZcbm1hcFsxNjczXSA9IDI5NlxubWFwWzE2NzRdID0gMjk0XG5tYXBbMTY3Nl0gPSAyOTRcbm1hcFsxNjc5XSA9IDI5NFxubWFwWzE2ODNdID0gMjk0XG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg3XSA9IDI5M1xubWFwWzE2OTFdID0gMjkzXG5tYXBbMTY5NF0gPSAyOTNcbm1hcFsxNjk3XSA9IDI5M1xubWFwWzE3MDFdID0gMjkzXG5tYXBbMTcwNV0gPSAyOTFcbm1hcFsxNzA5XSA9IDI5MVxubWFwWzE3MTJdID0gMjkxXG5tYXBbMTcxNV0gPSAyOTFcbm1hcFsxNzE5XSA9IDI5MVxubWFwWzE3MjJdID0gMjkxXG5tYXBbMTcyNV0gPSAyOTFcbm1hcFsxNzI4XSA9IDI5MVxubWFwWzE3MzJdID0gMjkxXG5tYXBbMTczNV0gPSAyOTFcbm1hcFsxNzM4XSA9IDI5MVxubWFwWzE3NDFdID0gMjkxXG5tYXBbMTc0NV0gPSAyOTFcbm1hcFsxNzQ2XSA9IDI5MFxubWFwWzE3NTBdID0gMjkwXG5tYXBbMTc1M10gPSAyOTBcbm1hcFsxNzU2XSA9IDI5MFxubWFwWzE3NTldID0gMjkwXG5tYXBbMTc2M10gPSAyOTBcbm1hcFsxNzY2XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NzNdID0gMjkwXG5tYXBbMTc3Nl0gPSAyOTBcbm1hcFsxNzc5XSA9IDI5MFxubWFwWzE3ODJdID0gMjkwXG5tYXBbMTc4Nl0gPSAyOTBcbm1hcFsxNzg5XSA9IDI5MFxubWFwWzE3OTJdID0gMjkwXG5tYXBbMTc5NV0gPSAyOTBcbm1hcFsxNzk5XSA9IDI5MFxubWFwWzE4MDJdID0gMjkwXG5tYXBbMTgwNV0gPSAyOTBcbm1hcFsxODA5XSA9IDI5MFxubWFwWzE4MTJdID0gMjkwXG5tYXBbMTgxM10gPSAyODhcbm1hcFsxODE3XSA9IDI4OFxubWFwWzE4MjBdID0gMjg4XG5tYXBbMTgyM10gPSAyODhcbm1hcFsxODI3XSA9IDI4OFxubWFwWzE4MzBdID0gMjg4XG5tYXBbMTgzM10gPSAyODhcbm1hcFsxODM2XSA9IDI5MFxubWFwWzE4NDBdID0gMjkwXG5tYXBbMTg0MV0gPSAyOTBcbm1hcFsxODQ1XSA9IDI5MFxubWFwWzE4NDhdID0gMjkwXG5tYXBbMTg1MV0gPSAyOTBcbm1hcFsxODUzXSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTldID0gMjkxXG5tYXBbMTg2M10gPSAyOTFcbm1hcFsxODY2XSA9IDI5MVxubWFwWzE4NjddID0gMjkxXG5tYXBbMTg2OV0gPSAyOTNcbm1hcFsxODcyXSA9IDI5M1xubWFwWzE4NzZdID0gMjkzXG5tYXBbMTg3Nl0gPSAyOTNcbm1hcFsxODc3XSA9IDI5M1xubWFwWzE4ODBdID0gMjkzXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj01MTI7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj03Njg7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cIm5vYm9yZGVyXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJkaWFsb2cvTG9hZGluZ0RpYWxvZy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdEaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuTG9hZGluZ0RpYWxvZ1VJIHtcbiAgICBwcml2YXRlIHByb2dyZXNzID0gMFxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAoTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtIDIwMCkvMilcbiAgICB9XG5cbiAgICBvbk9wZW5lZCgpIHtcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VQcm9ncmVzc1ZhbHVlKDApXG4gICAgfVxuXG4gICAgcHVibGljIGNoYW5nZVByb2dyZXNzVmFsdWUocHJvZ3Jlc3M6IG51bWJlcikge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3NcbiAgICAgICAgaWYgKHRoaXMubG9hZGluZ1Byb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdQcm9ncmVzc0Jhci52YWx1ZSA9IHByb2dyZXNzXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRpcCh0aXA6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpcExhYmVsLnRleHQgPSB0aXBcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgU2NyZWVuMUJhY2tHcm91bmQgZnJvbSBcIi4vU2NyZWVuMUJhY2tHcm91bmRcIjtcclxuaW1wb3J0IEZvb3RiYWxsIGZyb20gXCIuL0Zvb3RiYWxsXCI7XHJcbmltcG9ydCBCYXNrZXRiYWxsIGZyb20gXCIuL2Jhc2tldGJhbGxcIjtcclxuaW1wb3J0IHJ1bm5pbmcgZnJvbSBcIi4vcnVubmluZ1wiO1xyXG5pbXBvcnQgc3dpbW1pbmcgZnJvbSBcIi4vc3dpbW1pbmdcIjtcclxuaW1wb3J0IHBhZ2UzcnVuIGZyb20gXCIuL3BhZ2UzX3J1bm1hblwiO1xyXG5pbXBvcnQgcGFnZTFlMnMgZnJvbSBcIi4vcGFnZTEmMlwiO1xyXG5pbXBvcnQgcGFnZTJlM3MgZnJvbSBcIi4vcGFnZTImM1wiO1xyXG5pbXBvcnQgcGFnZTNlNHMgZnJvbSBcIi4vcGFnZTMmNFwiO1xyXG5pbXBvcnQgcGFnZTRlNXMgZnJvbSBcIi4vcGFnZTQmNVwiO1xyXG5pbXBvcnQgeyBnZXRGb290YmFsbFggfSBmcm9tIFwiLi9Gb290YmFsbFBhdGhcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25EaWFsb2cgfSBmcm9tIFwiLi9RdWVzdGlvbkRpYWxvZ1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRhdGEsIFF1ZXN0aW9uSXRlbSwgUXVlc3Rpb25TaG93WSB9IGZyb20gXCIuL1F1ZXN0aW9uRGF0YVwiO1xyXG5pbXBvcnQgTG9hZGluZ0RpYWxvZyBmcm9tIFwiLi9Mb2FkaW5nRGlhbG9nXCI7XHJcbmltcG9ydCBTaGFrZURpYWxvZyBmcm9tIFwiLi9TaGFrZURpYWxvZ1wiO1xyXG5pbXBvcnQgU2Nyb2xsRGlhbG9nLCB7IFRpcFR5cGUgfSBmcm9tIFwiLi9TY3JvbGxEaWFsb2dcIjtcclxuaW1wb3J0IFNjb3JlUmVzdWx0RGlhbG9nIGZyb20gXCIuL1Njb3JlUmVzdWx0RGlhbG9nXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgZm9vdGJhbGw6IEZvb3RiYWxsXHJcblx0cHJpdmF0ZSBiYXNrZXRiYWxsOiBCYXNrZXRiYWxsXHJcblx0cHJpdmF0ZSBydW5uaW5nOiBydW5uaW5nXHJcblx0cHJpdmF0ZSBzd2ltbWluZzogc3dpbW1pbmdcclxuXHRwcml2YXRlIHBhZ2UzcnVuOiBwYWdlM3J1blxyXG5cdHByaXZhdGUgcGFnZTFlMnM6IHBhZ2UxZTJzXHJcblx0cHJpdmF0ZSBwYWdlMmUzczogcGFnZTJlM3NcclxuXHRwcml2YXRlIHBhZ2UzZTRzOiBwYWdlM2U0c1xyXG5cdHByaXZhdGUgcGFnZTRlNXM6IHBhZ2U0ZTVzXHJcblxyXG5cclxuXHRwcml2YXRlIHNjcmVlbjFCYWNrR3JvdW5kOiBTY3JlZW4xQmFja0dyb3VuZFxyXG5cdHByaXZhdGUgZHJhZ1JlZ2lvbjogTGF5YS5SZWN0YW5nbGVcclxuXHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDI6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50MzogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHNoYWtlQ291bnQ0OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaSA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmkyID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaTMgPSBmYWxzZTtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pNCA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmk1ID0gZmFsc2U7XHJcblxyXG5cclxuXHRwcml2YXRlIGNvbnNvbGU6IExheWEuVGV4dDtcclxuXHJcblxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uSW5kZXhMaXN0ID0gbmV3IEFycmF5PG51bWJlcj4oKVx0Ly8g5bey57uP5pi+56S655qE6Zeu6aKYaW5kZXjliJfooahcclxuXHRwcml2YXRlIHNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nRGlhbG9nOiBMb2FkaW5nRGlhbG9nXHQvLyDmmL7npLrliqDovb3ov5vluqbmnaFcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nOiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nMjogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzM6IFNoYWtlRGlhbG9nXHRcdC8vIOaYvuekuuaRh+S4gOaRh+aPkOekulxyXG5cdHByaXZhdGUgc2hha2VEaWFsb2c0OiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nNTogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBiZ21Tb3VuZENoYW5uZWw6IExheWEuU291bmRDaGFubmVsXHJcblxyXG5cdHByaXZhdGUgcXVlc3Rpb25TY29yZTogbnVtYmVyIFx0XHRcdC8vIOWbnuetlOmXrumimOeahOWIhuaVsFxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvLyB3YXJuaW5nOiDnrKzkuInkuKrlj4LmlbDkuI3opoHkvb/nlKhXZWJHTO+8jOW9k+iDjOaZr+WkqumVv+eahOaXtuWAmeWcqGlQaG9uZeS4iuS8muaciemdnuW4uOS4pemHjeeahOmUr+m9v1xyXG5cdFx0TGF5YS5pbml0KENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuc3RhdGVIZWlnaHQsIExheWFbXCJcIl0pO1xyXG5cclxuXHRcdExheWFbXCJQaHlzaWNzXCJdICYmIExheWFbXCJQaHlzaWNzXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YVtcIkRlYnVnUGFuZWxcIl0gJiYgTGF5YVtcIkRlYnVnUGFuZWxcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhLnN0YWdlLnNjYWxlTW9kZSA9IENvbnN0YW50cy5zY2FsZU1vZGU7XHJcblx0XHRMYXlhLnN0YWdlLnNjcmVlbk1vZGUgPSBDb25zdGFudHMuc2NyZWVuTW9kZTtcclxuXHRcdC8v5YW85a655b6u5L+h5LiN5pSv5oyB5Yqg6L29c2NlbmXlkI7nvIDlnLrmma9cclxuXHRcdExheWEuVVJMLmV4cG9ydFNjZW5lVG9Kc29uID0gR2FtZUNvbmZpZy5leHBvcnRTY2VuZVRvSnNvbjtcclxuXHJcblx0XHQvL+aJk+W8gOiwg+ivlemdouadv++8iOmAmui/h0lEReiuvue9ruiwg+ivleaooeW8j++8jOaIluiAhXVybOWcsOWdgOWinuWKoGRlYnVnPXRydWXlj4LmlbDvvIzlnYflj6/miZPlvIDosIPor5XpnaLmnb/vvIlcclxuXHRcdGlmIChHYW1lQ29uZmlnLmRlYnVnIHx8IExheWEuVXRpbHMuZ2V0UXVlcnlTdHJpbmcoXCJkZWJ1Z1wiKSA9PSBcInRydWVcIikgTGF5YS5lbmFibGVEZWJ1Z1BhbmVsKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5waHlzaWNzRGVidWcgJiYgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0pIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdLmVuYWJsZSgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcuc3RhdCkgTGF5YS5TdGF0LnNob3coKTtcclxuXHRcdExheWEuYWxlcnRHbG9iYWxFcnJvciA9IHRydWU7XHJcblxyXG5cdFx0Ly/mv4DmtLvotYTmupDniYjmnKzmjqfliLbvvIx2ZXJzaW9uLmpzb27nlLFJREXlj5HluIPlip/og73oh6rliqjnlJ/miJDvvIzlpoLmnpzmsqHmnInkuZ/kuI3lvbHlk43lkI7nu63mtYHnqItcclxuXHRcdExheWEuUmVzb3VyY2VWZXJzaW9uLmVuYWJsZShcInZlcnNpb24uanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25WZXJzaW9uTG9hZGVkKSwgTGF5YS5SZXNvdXJjZVZlcnNpb24uRklMRU5BTUVfVkVSU0lPTik7XHJcblxyXG5cclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdFVJQ29uZmlnLnBvcHVwQmdDb2xvciA9IFwiIzAwMDAwMFwiXHJcblx0XHRVSUNvbmZpZy5wb3B1cEJnQWxwaGEgPSAwLjhcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHJcblxyXG5cdFx0TGF5YS5zdGFnZS5iZ0NvbG9yID0gXCJ3aGl0ZVwiXHJcblxyXG5cclxuXHJcblx0XHR0aGlzLmxvYWRQcm9nZXNzQXNzZXRzKClcclxuXHJcblx0XHQvLyDpnIDopoHmmL7npLrosIPor5Xkv6Hmga/lj6/ku6XmiZPlvIDov5nph4xcclxuXHRcdHRoaXMuc2hvd0NvbnNvbGVUZXh0KGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLnF1ZXN0aW9uU2NvcmUgPSAwXHJcblxyXG5cdH1cclxuXHJcblx0b25WZXJzaW9uTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/mv4DmtLvlpKflsI/lm77mmKDlsITvvIzliqDovb3lsI/lm77nmoTml7blgJnvvIzlpoLmnpzlj5HnjrDlsI/lm77lnKjlpKflm77lkIjpm4bph4zpnaLvvIzliJnkvJjlhYjliqDovb3lpKflm77lkIjpm4bvvIzogIzkuI3mmK/lsI/lm75cclxuXHRcdExheWEuQXRsYXNJbmZvTWFuYWdlci5lbmFibGUoXCJmaWxlY29uZmlnLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ29uZmlnTG9hZGVkKSk7XHJcblx0fVxyXG5cclxuXHRvbkNvbmZpZ0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5Yqg6L29SURF5oyH5a6a55qE5Zy65pmvXHJcblx0XHQvLyBHYW1lQ29uZmlnLnN0YXJ0U2NlbmUgJiYgTGF5YS5TY2VuZS5vcGVuKEdhbWVDb25maWcuc3RhcnRTY2VuZSk7XHJcblx0fVxyXG5cclxuXHRsb2FkUHJvZ2Vzc0Fzc2V0cygpOiB2b2lkIHtcclxuXHRcdExheWEubG9hZGVyLmxvYWQoW1wicmVzL2F0bGFzL2NvbXAuYXRsYXNcIl0sIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblByb2dyZXNzQXNzZXRzTG9hZGVkKSlcclxuXHR9XHJcblxyXG5cdGxvYWRPdGhlckFzc2V0cygpOiB2b2lkIHtcclxuXHRcdGNvbnN0IGFzc2V0czogQXJyYXk8YW55PiA9IFtdXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDUsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3Nwb3J0cy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQzLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQ0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kQmdtOCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zY29yZTEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc2NvcmUyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNjb3JlMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zY29yZTQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cclxuXHJcblx0XHQvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpXHJcblx0XHRMYXlhLmxvYWRlci5vbihMYXlhLkV2ZW50LkVSUk9SLCB0aGlzLCB0aGlzLm9uRXJyb3IpXHJcblx0fVxyXG5cclxuXHQvLyDlv4XpnIDlhYjliqDovb3ov5vluqbmnaHotYTmupDmiY3og73mmL7npLrov5vluqbmnaFcclxuXHRvblByb2dyZXNzQXNzZXRzTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly8g5pi+56S66L+b5bqm5p2hXHJcblxyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nID0gbmV3IExvYWRpbmdEaWFsb2coKVxyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLnBvcHVwKClcclxuXHRcdHRoaXMubG9hZE90aGVyQXNzZXRzKClcclxuXHR9XHJcblxyXG5cdG9uQXNzZXRzTG9hZGluZyhwcm9ncmVzczogbnVtYmVyKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9vei/m+W6pjogXCIgKyBwcm9ncmVzcyk7XHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cuY2hhbmdlUHJvZ3Jlc3NWYWx1ZShwcm9ncmVzcylcclxuXHR9XHJcblxyXG5cdG9uQXNzZXRzTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLmNsb3NlKClcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfotYTmupDliqDovb3lrozmiJDjgIInO1xyXG5cclxuXHRcdHRoaXMuc2hvd1RpcERpYWxvZyhcInNjcm9sbFwiKVxyXG5cclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQgPSBuZXcgU2NyZWVuMUJhY2tHcm91bmQoKVxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kKVxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5vbihMYXlhLkV2ZW50LkRSQUdfTU9WRSwgdGhpcywgdGhpcy5vbkJhY2tncm91bmRNb3ZlKVxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5vbihMYXlhLkV2ZW50LkRSQUdfU1RBUlQsIHRoaXMsIHRoaXMub25CYWNrZ3JvdW5kU3RhcnRNb3ZlKVxyXG5cclxuXHRcdHRoaXMuZm9vdGJhbGwgPSBuZXcgRm9vdGJhbGwoKVxyXG5cdFx0dGhpcy5mb290YmFsbC5wb3MoMzI3LCAyMzMpXHQvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5mb290YmFsbClcclxuXHRcdHRoaXMuYmFza2V0YmFsbCA9IG5ldyBCYXNrZXRiYWxsKClcclxuXHRcdHRoaXMuYmFza2V0YmFsbC5wb3MoMzAwLCA1MDApXHQvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5iYXNrZXRiYWxsKVxyXG5cdFx0dGhpcy5ydW5uaW5nID0gbmV3IHJ1bm5pbmcoKVxyXG5cdFx0dGhpcy5ydW5uaW5nLnBvcygyNTAsIDIwMClcdC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnJ1bm5pbmcpXHJcblx0XHR0aGlzLnN3aW1taW5nID0gbmV3IHN3aW1taW5nKClcclxuXHRcdHRoaXMuc3dpbW1pbmcucG9zKDI1NiwgNTAwKVx0Ly8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuc3dpbW1pbmcpXHJcblx0XHR0aGlzLnBhZ2UzcnVuID0gbmV3IHBhZ2UzcnVuKClcclxuXHRcdHRoaXMucGFnZTNydW4ucG9zKDMwMCwgODUwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlM3J1bilcclxuXHRcdHRoaXMucGFnZTFlMnMgPSBuZXcgcGFnZTFlMnMoKVxyXG5cdFx0dGhpcy5wYWdlMWUycy5wb3MoMjUwLCA1MDApIC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2UxZTJzKVxyXG5cdFx0dGhpcy5wYWdlMmUzcyA9IG5ldyBwYWdlMmUzcygpXHJcblx0XHR0aGlzLnBhZ2UyZTNzLnBvcygyNTAsIDUwMCkgLy8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTJlM3MpXHJcblx0XHR0aGlzLnBhZ2UzZTRzID0gbmV3IHBhZ2UzZTRzKClcclxuXHRcdHRoaXMucGFnZTNlNHMucG9zKDI3MCwgNzAwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlM2U0cylcclxuXHRcdHRoaXMucGFnZTRlNXMgPSBuZXcgcGFnZTRlNXMoKVxyXG5cdFx0dGhpcy5wYWdlNGU1cy5wb3MoMjUwLCA3MDApIC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2U0ZTVzKVxyXG5cdFx0Y29uc29sZS5sb2coXCJvbkFzc2V0c0xvYWRlZFwiLCBMYXlhLnN0YWdlLmhlaWdodCwgTGF5YS5Ccm93c2VyLmhlaWdodCwgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodClcclxuXHJcblx0XHQvLyDorqHnrpfog4zmma/lj6/mi5bliqjljLrln59cclxuXHRcdGNvbnN0IG1vYWJsZUhlaWdodCA9IExheWEuc3RhZ2UuaGVpZ2h0IC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodFxyXG5cdFx0dGhpcy5kcmFnUmVnaW9uID0gbmV3IExheWEuUmVjdGFuZ2xlKDAsIC1tb2FibGVIZWlnaHQsIDAsIG1vYWJsZUhlaWdodClcclxuXHJcblx0XHQvLyBMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSwgdGhpcywgdGhpcy5vbk1vdXNlTW92ZSlcclxuXHRcdExheWEuc3RhZ2Uub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uU3RhcnREcmFnKVxyXG5cclxuXHRcdC8vIOaSreaUvuiDjOaZr+mfs+S5kFxyXG5cdFx0dGhpcy5iZ21Tb3VuZENoYW5uZWwgPSBMYXlhLlNvdW5kTWFuYWdlci5wbGF5TXVzaWMoQ29uc3RhbnRzLnNvdW5kQmdtOCwgMClcclxuXHR9XHJcblxyXG5cdG9uRXJyb3IoZXJyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycik7XHJcblx0XHR0aGlzLmxvYWRpbmdEaWFsb2cudXBkYXRlVGlwKFwi5Yqg6L295aSx6LSlOiBcIiArIGVycilcclxuXHR9XHJcblxyXG5cdG9uTW91c2VNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8g5aeL57uI5L+d5oyB5Li76KeS5ZKM6byg5qCH5L2N572u5LiA6Ie0XHJcblx0XHQvLyB0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm9uTW91c2VNb3ZlXCIsIExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBtYXBbJHt0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnl9XSA9ICR7TGF5YS5zdGFnZS5tb3VzZVh9YClcclxuXHRcdHRoaXMuZm9vdGJhbGwucG9zKExheWEuc3RhZ2UubW91c2VYLCBMYXlhLnN0YWdlLm1vdXNlWSlcclxuXHR9XHJcblxyXG5cdG9uU3RhcnREcmFnKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblN0YXJ0RHJhZ1wiLCBMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHRpZiAodGhpcy5zaG93aW5nRGlhbG9nKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RhcnREcmFnKHRoaXMuZHJhZ1JlZ2lvbiwgZmFsc2UsIDApXHJcblx0fVxyXG5cclxuXHRvbkJhY2tncm91bmRTdGFydE1vdmUoKTogdm9pZCB7XHJcblx0XHQvLyBUT0RPOiDov5nph4zlkIzmoLfopoHlgZrkuIDkupvog73lkKbmi5bliqjnmoTliKTmlq3vvIxvbkJhY2tncm91bmRNb3Zl6YOo5YiG6YC76L6R5Lmf6YCC5bqU5LqO5q2k5pa55rOVXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdG9uQmFja2dyb3VuZE1vdmUoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uQmFja2dyb3VuZE1vdmVcIiwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC54LCB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnksIHRoaXMuZm9vdGJhbGwueCwgdGhpcy5mb290YmFsbC55KVxyXG5cclxuXHRcdC8vIOaYvuekuumXrumimFxyXG5cdFx0Y29uc3QgbmVlZFNob3dRdWVzdGlvbiA9IHRoaXMuc2hvd1F1ZXN0aW9uRGlhbG9nSWZOZWVkKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSlcclxuXHRcdGlmIChuZWVkU2hvd1F1ZXN0aW9uKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBUT0RPOiDmoLnmja7lrp7pmYXmg4XlhrXmmL7npLrngrnlh7vmj5DnpLpcclxuXHRcdC8vIHRoaXMuc2hvd1RpcERpYWxvZyhcImNsaWNrX3doaXRlXCIpXHJcblx0XHQvLyB0aGlzLnNob3dUaXBEaWFsb2coXCJjbGlja19ibGFja1wiKVxyXG5cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNDcwKSB7IC8vIOS4jee7meaLluWKqO+8jFxi5pGH5LiA5pGH5pi+56S65bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pKSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/h+WwhOmXqOWKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/h+WwhOmXqOWKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2coKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC02MzUwKSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pMikge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4cy5Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+HMuWKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2cyKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtOTUwMCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTMpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HM+WKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzPliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nMygpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTEyOTQ1KSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pNCkge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4c05Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+HNOWKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2c0KClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTU5NDYpIHtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk1KSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/hzXliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4c15Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzUoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODAwKSB7IC8vIOmakOiXj+i2s+eQg1xyXG5cdFx0XHR0aGlzLmZvb3RiYWxsLmhpZGUoKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5mb290YmFsbC5zaG93KClcclxuXHRcdFx0Ly8g56e75Yqo6Laz55CD5L2N572uXHJcblx0XHRcdC8vIGNvbnN0IHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyXHJcblx0XHRcdGxldCB5OiBudW1iZXIgPSAwO1xyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgMTAzMikge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA4NTApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDEzMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgNzMwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxNTA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDU4MCkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTgwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA0MzUpIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpID4gMTAzMikge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IHggPSBnZXRGb290YmFsbFgoeSlcclxuXHRcdFx0aWYgKHggPT0gMCkge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwueSA9IHlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnBvcyh4LCB5KVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOWIpOaWrei2s+eQg+aYr+WQpumcgOimgeaXi+i9rFxyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01ODUpIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnN0b3BSb3RhdGUoKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwucGxheVJvdGF0ZSgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvmN1cCBhbmlcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3VwXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY3VwXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImN1cFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+5Y+j5ZOo5Yqo55S7XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0zMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC00NTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aGlzdGxlXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTIxMjUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0yMzI1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInRleHQyMDAyXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInRleHQyMDAyXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwidGV4dDIwMDJcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG90XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2hvdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG90XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2hvdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTczMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTI2NDApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2luXCIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aW5cIilcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0yNjQwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDYwMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDI2NDApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0dGhpcy5wYWdlMWUycy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdC8vcGFnZTJcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ1MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01NDMwKSB7XHJcblx0XHRcdHRoaXMucnVubmluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA0NTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdHRoaXMucnVubmluZy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuZ29QYXRoKDgxKVxyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDYwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUxNTUpIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwicGFnZTJfc3RhcnRcIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInBhZ2UyX3N0YXJ0MVwiKVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDUyMiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ2NzEpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImR1bWJiZWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZHVtYmJlbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZHVtYmJlbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJkdW1iYmVsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDk1NyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUwMTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImVxdWlwbWVudFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImVxdWlwbWVudFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlcXVpcG1lbnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJlcXVpcG1lbnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNTE5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUzNDgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY2xvY2tcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY2xvY2tcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJjbG9ja1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01NDU0ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNTYwMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwNFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwNFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU3MjUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01ODY2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlbGVjdHJpY21hblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImVsZWN0cmljbWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImVsZWN0cmljbWFuXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZWxlY3RyaWNtYW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjQxMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTgxMDApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibGl1eGlhbmdcIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImxpdXhpYW5nMVwiKVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjQxMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTgxMDApIHtcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA2NDEwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdHRoaXMucGFnZTJlM3MuZ29QYXRoKHogLSAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9wYWdlM1xyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgyMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04OTUwKSB7XHJcblx0XHRcdHRoaXMucGFnZTNydW4uc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gODIwMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmdvUGF0aCh6IC0gMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgxMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NDcwKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInBhZ2UzX3N0YXJ0XCIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJwYWdlM19zdGFydDFcIilcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgzNDggJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NDE1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJtZWRhbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIm1lZGFsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIm1lZGFsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibWVkYWxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODYyNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg3NzMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic3RhZ2VcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic3RhZ2VcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzdGFnZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC05MTMxICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtOTI4MSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDhcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwOFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA4XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLSA5NDgwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTExOTApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY3Jvd2RcIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImNyb3dkMVwiKVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtIDk0ODAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTE5MCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDk0ODApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0dGhpcy5wYWdlM2U0cy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2U0XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTE4OSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExNjcwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJoZWFydFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImhlYXJ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhlYXJ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiaGVhcnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMTkwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTMwNDApIHtcclxuXHRcdFx0dGhpcy5zd2ltbWluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAxMTE5MCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLnN3aW1taW5nLmdvUGF0aCh6IC0gMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTExNjIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTMxMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMTJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAxMlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAxMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDEyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMzc2ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTE1MTkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJib2FyZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTc0MyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExOTA3KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjA2NiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyMzA2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjQwNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyNTU4KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YXRlckxlZnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3YXRlckxlZnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2F0ZXJMZWZ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2F0ZXJMZWZ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTEzMTAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ3OTApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2luTWFuXCIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3aW5NYW4xXCIpXHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMzEwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE0NzkwKSB7XHJcblx0XHRcdHRoaXMucGFnZTRlNXMuc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gMTMxMDApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0dGhpcy5wYWdlNGU1cy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2U0ZTVzLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2U1XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNDkzMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE1NTMwKSB7XHJcblx0XHRcdHRoaXMuYmFza2V0YmFsbC5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAxNDkzMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLmJhc2tldGJhbGwuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYmFza2V0YmFsbC5oaWRlKCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNDc5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE1MzE1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJiYWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYmFsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJiYWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiYmFsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNDQ3MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE0NTYyKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzY29yZWJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2NvcmVib2FyZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzY29yZWJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2NvcmVib2FyZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNTA4MiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE1MTQ5KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG9lc1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNob2VzXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNob2VzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2hvZXNcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1NDE1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTU0OTYpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhhdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImhhdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJoYXRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJoYXRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25EZXZpY2VTaGFrZSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nKSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50KytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudCA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudCA9IDBcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLlgZzmraLmjqXmlLborr7lpIfmkYfliqhcIjtcclxuXHRcdFx0Ly8g5pKt5pS+5bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pKSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2hvdFwiKVxyXG5cclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaSA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQwKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlMigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nMikge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMi5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cyID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50MisrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50MiArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50MiA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDIgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTIpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJsaXV4aWFuZ1wiKVxyXG5cclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaTIgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMSlcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTMoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzMpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzMuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMyA9IG51bGxcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hha2VDb3VudDMrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudDMgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudDMgPj0gMykge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKVxyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQzID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkzKSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY3Jvd2RcIilcclxuXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkzID0gdHJ1ZVxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuaSreaUvuWwhOmXqOWKqOeUu1wiO1xyXG5cclxuXHRcdFx0Ly8gVE9ETzog5pKt5pS+5a6e6ZmF6ZyA6KaB55qE5aOw6Z+z77yM5bm25Zyo5YW25LuW6ZyA6KaB55qE5Zyw5pa56LCD55So5pKt5pS+5aOw6Z+zXHJcblx0XHRcdHRoaXMucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDIpXHJcblx0XHR9XHJcblx0fVxyXG5cdG9uRGV2aWNlU2hha2U0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2c0KSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2c0LmNsb3NlKClcclxuXHRcdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzQgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQ0KytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQ0ICsgXCLmrKFcXG5cIjtcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQ0ID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50NCA9IDBcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLlgZzmraLmjqXmlLborr7lpIfmkYfliqhcIjtcclxuXHRcdFx0Ly8g5pKt5pS+5bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pNCkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIndpbk1hblwiKVxyXG5cdFx0XHR0aGlzLnBhZ2U0ZTVzLmhpZGUoKTtcclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaTQgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMylcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzUpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzUuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nNSA9IG51bGxcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hha2VDb3VudDUrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudDUgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudDUgPj0gMSkge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKVxyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQ1ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk1KSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYmFsbE1hblwiKVxyXG5cclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaTUgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kNClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUXVlc3Rpb25EaWFsb2dDbG9zZShpbmRleDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib25RdWVzdGlvbkRpYWxvZ0Nsb3NlXCIsIHR5cGUsIGluZGV4KVxyXG5cdFx0Y29uc3QgcmlnaHQgPSAodHlwZSA9PT0gXCJ0cnVlXCIpIC8vIFRPRE86IOiuoeWIhlxyXG5cdFx0aWYocmlnaHQpe1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uU2NvcmUrKztcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblxyXG5cdFx0aWYgKHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0Lmxlbmd0aCA+PSAxMCkge1x0Ly8g5pi+56S65LqGMTDmnaHpopjkuoZcclxuXHRcdFx0Ly8gTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMuc2hvd1Njb3JlUmVzdWx0RGlhbGcsIFt0aGlzLnF1ZXN0aW9uU2NvcmVdKVxyXG5cdFx0XHR0aGlzLnNob3dTY29yZVJlc3VsdERpYWxnKHRoaXMucXVlc3Rpb25TY29yZSlcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dTY29yZVJlc3VsdERpYWxnKHNjb3JlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHRjb25zdCBzY29yZVJlc3VsdERpYWxvZyA9IG5ldyBTY29yZVJlc3VsdERpYWxvZyhzY29yZSlcclxuXHRcdHNjb3JlUmVzdWx0RGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0c2NvcmVSZXN1bHREaWFsb2cuY2xvc2VIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uU2NvcmVEaWFsb2dDbG9zZSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25TY29yZURpYWxvZ0Nsb3NlKCkge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdH1cclxuXHJcblx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pi+56S66Zeu6aKYXHJcblx0cHJpdmF0ZSBzaG93UXVlc3Rpb25EaWFsb2dJZk5lZWQoeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBvZmZzZXQgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0XHJcblx0XHRjb25zdCBoYXNTaG93TGVuZ3RoID0gdGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QubGVuZ3RoXHJcblx0XHRpZiAoaGFzU2hvd0xlbmd0aCA+PSAxMCkge1xyXG5cdFx0XHQvLyBpZiAoeSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGlmICh5ID4gb2Zmc2V0IC0gUXVlc3Rpb25TaG93WVtoYXNTaG93TGVuZ3RoXSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGNvbnN0IGlzT2RkID0gIShoYXNTaG93TGVuZ3RoICUgMilcclxuXHRcdGlmIChpc09kZCkgeyAvLyDpmo/mnLpcclxuXHRcdFx0Y29uc3QgcmFuZG9tID0gdGhpcy5nZXRSYW5kb21RdWVzdGlvbkluZGV4KClcclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24ocmFuZG9tKVxyXG5cdFx0fSBlbHNlIHtcdC8vIOWPluWJjTXkvY1cclxuXHRcdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKGhhc1Nob3dMZW5ndGggLyAyKVxyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihpbmRleClcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IG1heCA9IFF1ZXN0aW9uRGF0YS5sZW5ndGggLSA1XHJcblx0XHRjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogbWF4KSkgKyA1XHJcblx0XHRpZiAodGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QuaW5kZXhPZihyYW5kb20pID09IC0xKSB7XHJcblx0XHRcdHJldHVybiByYW5kb21cclxuXHRcdH0gZWxzZSB7IC8vIOW3sue7j+aYvuekuui/h+mHjeaWsOiOt+WPllxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRSYW5kb21RdWVzdGlvbkluZGV4KClcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmIChpbmRleCA+PSBRdWVzdGlvbkRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0dGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QucHVzaChpbmRleClcclxuXHRcdGNvbnN0IHF1ZXN0aW9uRGF0YSA9IFF1ZXN0aW9uRGF0YVtpbmRleF1cclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHRjb25zdCBxdWVzdGlvbkRpYWxvZyA9IG5ldyBRdWVzdGlvbkRpYWxvZyhxdWVzdGlvbkRhdGEpXHJcblx0XHRxdWVzdGlvbkRpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdHF1ZXN0aW9uRGlhbG9nLmNsb3NlSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblF1ZXN0aW9uRGlhbG9nQ2xvc2UsIFtpbmRleF0pXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dTaGFrZURpYWxvZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nID0gbmV3IFNoYWtlRGlhbG9nKClcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlKVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fVxyXG5cdHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nMigpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nMiA9IG5ldyBTaGFrZURpYWxvZygpXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nMi5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2UyKVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fSBwcml2YXRlIHNob3dTaGFrZURpYWxvZzMoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzMgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzMucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlMylcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH0gcHJpdmF0ZSBzaG93U2hha2VEaWFsb2c0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c0ID0gbmV3IFNoYWtlRGlhbG9nKClcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c0LnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZTQpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9IHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nNSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nNSA9IG5ldyBTaGFrZURpYWxvZygpXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nNS5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2U1KVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dUaXBEaWFsb2codGlwVHlwZTogVGlwVHlwZSk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0Y29uc3Qgc2Nyb2xsRGlhbG9nID0gbmV3IFNjcm9sbERpYWxvZyh0aXBUeXBlKVxyXG5cclxuXHRcdHNjcm9sbERpYWxvZy5wb3B1cCh0cnVlKVxyXG5cdFx0c2Nyb2xsRGlhbG9nLmNsb3NlSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblRpcERpYWxvZ0Nsb3NlKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblRpcERpYWxvZ0Nsb3NlKCkge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGxheVNvdW5kKHVybDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmJnbVNvdW5kQ2hhbm5lbC5wYXVzZSgpXHJcblx0XHRMYXlhLlNvdW5kTWFuYWdlci5wbGF5U291bmQodXJsLCAxLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Tb3VuZENvbXBldGUpKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblNvdW5kQ29tcGV0ZSgpIHtcclxuXHRcdHRoaXMuYmdtU291bmRDaGFubmVsLnJlc3VtZSgpXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dDb25zb2xlVGV4dCh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHR0aGlzLmNvbnNvbGUgPSBuZXcgTGF5YS5UZXh0KCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuY29uc29sZSk7XHJcblx0XHR0aGlzLmNvbnNvbGUuek9yZGVyID0gMTAwMDFcclxuXHRcdHRoaXMuY29uc29sZS55ID0gMTA7XHJcblx0XHR0aGlzLmNvbnNvbGUud2lkdGggPSBMYXlhLnN0YWdlLndpZHRoO1xyXG5cdFx0dGhpcy5jb25zb2xlLmhlaWdodCA9IDIwMDtcclxuXHRcdHRoaXMuY29uc29sZS5jb2xvciA9IFwiI0ZGRkZGRlwiO1xyXG5cdFx0dGhpcy5jb25zb2xlLmZvbnRTaXplID0gMjA7XHJcblx0XHR0aGlzLmNvbnNvbGUubGVhZGluZyA9IDEwO1xyXG5cdFx0dGhpcy5jb25zb2xlLmJnQ29sb3IgPSBcIiMwMDAwMDBcIlxyXG5cdFx0dGhpcy5jb25zb2xlLnZpc2libGUgPSB2aXNpYmxlXHJcblxyXG5cdH1cclxuXHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbkl0ZW0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgYTogc3RyaW5nLFxuICAgIGI6IHN0cmluZyxcbiAgICBjOiBzdHJpbmcsXG4gICAgZDogc3RyaW5nLFxuICAgIGFuc3dlcjogXCJhXCIgfCBcImJcIiB8IFwiY1wiIHwgXCJkXCIsXG4gICAgaWQ6IG51bWJlciAgLy8g5LuFXGLkvpvlj4LnnIvmlbDmja7ml7blj4LogIPvvIzku6PnoIHkuK3kuI3kvb/nlKhcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uU2hvd1kgPSBbXG4gICAgMTMxMyxcbiAgICAzMzA3LFxuICAgIDU4MjcsXG4gICAgNjYyOCxcbiAgICA5MTIwLFxuICAgIDk5ODAsXG4gICAgMTIxNDQsXG4gICAgMTMxNzgsXG4gICAgMTU3NjAsXG4gICAgMTYzOTdcbl1cbmV4cG9ydCAgY29uc3QgUXVlc3Rpb25EYXRhOiBBcnJheTxRdWVzdGlvbkl0ZW0+ID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5Zu96Laz6L+b5LiW55WM5p2v55qE5Li75biF5piv5ZOq5L2NP1wiLFxuICAgICAgICBhOiBcIumHjOearlwiLFxuICAgICAgICBiOiBcIuacseW5v+ayqlwiLFxuICAgICAgICBjOiBcIumrmOa0quazolwiLFxuICAgICAgICBkOiBcIuexs+WNolwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiLFxuICAgICAgICBpZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA25bm05YiY57+U56C05LiW55WM57qq5b2V55qE5oiQ57up5piv5aSa5bCRP1wiLFxuICAgICAgICBhOiBcIjEy56eSOTFcIixcbiAgICAgICAgYjogXCIxMuenkjg4XCIsXG4gICAgICAgIGM6IFwiMTLnp5I4N1wiLFxuICAgICAgICBkOiBcIjEy56eSODZcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIixcbiAgICAgICAgaWQ6IDJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAwOOW5tOWMl+S6rOWlpei/kOS8muiwgeeCueeHg+S6huS4u+eBq+eCrD9cIixcbiAgICAgICAgYTogXCLorrjmtbfls7BcIixcbiAgICAgICAgYjogXCLpgpPkuprokI1cIixcbiAgICAgICAgYzogXCLmnY7lroFcIixcbiAgICAgICAgZDogXCLnhorlgKpcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIixcbiAgICAgICAgaWQ6IDNcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAxMuW5tOS8puaVpuWlpei/kOS8mueUt+WtkDQwMOeUseazs+WGoOWGm+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuiMg+W+t+WHr+S8ilwiLFxuICAgICAgICBiOiBcIumDnei/kFwiLFxuICAgICAgICBjOiBcIuactOazsOahk1wiLFxuICAgICAgICBkOiBcIuWtmeadqFwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiLFxuICAgICAgICBpZDogNVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDE25bm05paw5rWqM3gz56+u55CD6buE6YeR6IGU6LWb5oC75Yag5Yab6Zif5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5YyX5aSn6ZifXCIsXG4gICAgICAgIGI6IFwi5bCP6b6Z6b6Z6ZifXCIsXG4gICAgICAgIGM6IFwi6Zy45rCU5oiY6ZifXCIsXG4gICAgICAgIGQ6IFwi5Y2O5L6o5aSn5a2m6ZifXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiA2XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIuWMl+S6rOWlpei/kOS8muS4reWbveS7o+ihqOWboueahOaXl+aJi+aYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIuWnmuaYjlwiLFxuICAgICAgICBiOiBcIuWImOe/lFwiLFxuICAgICAgICBjOiBcIueOi+WKseWLpFwiLFxuICAgICAgICBkOiBcIuael+S4uVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiLFxuICAgICAgICBpZDogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNyxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5Liq55m75LiK5qyn5Yag6LWb5Zy655qE5Lit5Zu955CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi5a2Z56WlXCIsXG4gICAgICAgIGI6IFwi6JGj5pa55Y2TXCIsXG4gICAgICAgIGM6IFwi5p2O6ZOBXCIsXG4gICAgICAgIGQ6IFwi6YOR5pm6XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIHRpdGxlOiBcIumCteS9s+S4gDnlubTlvrflm73nlJ/mtq/mraPlvI/mr5TotZvph4zmgLvlhbHmiZPnkIPlpJrlsJHnkIPvvJ9cIixcbiAgICAgICAgYTogXCIxOFwiLFxuICAgICAgICBiOiBcIjE5XCIsXG4gICAgICAgIGM6IFwiMjlcIixcbiAgICAgICAgZDogXCIzMFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkuKrlnKjmrKfmtLLogZTotZvkuK3ojrflvpfph5HpnbTnmoTnkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLpg5HmmbpcIixcbiAgICAgICAgYjogXCLmnajmmahcIixcbiAgICAgICAgYzogXCLosKLmmZZcIixcbiAgICAgICAgZDogXCLokaPmlrnljZNcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTAsXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS9jeWcqOeVmea0i+acn+mXtOaLheS7u+eQg+mYn+mYn+mVv+eahOS4reWbveexjeeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIuiMg+W/l+avhVwiLFxuICAgICAgICBiOiBcIumDkeaZulwiLFxuICAgICAgICBjOiBcIuWtmee7p+a1t1wiLFxuICAgICAgICBkOiBcIuadjumTgVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgdGl0bGU6IFwi5aea5piO5ZOq5LiA5bm06YCA5b2577yfXCIsXG4gICAgICAgIGE6IFwiMjAxMFwiLFxuICAgICAgICBiOiBcIjIwMTFcIixcbiAgICAgICAgYzogXCIyMDEyXCIsXG4gICAgICAgIGQ6IFwiMjAxM1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMixcbiAgICAgICAgdGl0bGU6IFwiMjAxOOW5tOS6mui/kOS8muS4reevrueQg+mhueebruS4reWbvemYn+aUtuiOt+S6huWHoOaemumHkeeJjO+8n1wiLFxuICAgICAgICBhOiBcIjFcIixcbiAgICAgICAgYjogXCIyXCIsXG4gICAgICAgIGM6IFwiM1wiLFxuICAgICAgICBkOiBcIjRcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTMsXG4gICAgICAgIHRpdGxlOiBcIkNCQeiBlOi1m+WOhuWPsuS4iuesrOS4gOS4quW+l+WIhuegtOS4h+eahOeQg+WRmO+8n1wiLFxuICAgICAgICBhOiBcIuaYk+W7uuiBlFwiLFxuICAgICAgICBiOiBcIuacseiKs+mbqFwiLFxuICAgICAgICBjOiBcIuWImOeCnFwiLFxuICAgICAgICBkOiBcIueOi+ayu+mDhVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNCxcbiAgICAgICAgdGl0bGU6IFwi5ZOq5pSv55CD6Zif5ZyoMDItMDPotZvlraNDQkHlraPlkI7otZvkuK3liJvpgKDkuobpu5E45aWH6L+577yfXCIsXG4gICAgICAgIGE6IFwi6L695a6BXCIsXG4gICAgICAgIGI6IFwi5Zub5bedXCIsXG4gICAgICAgIGM6IFwi5YyX5LqsXCIsXG4gICAgICAgIGQ6IFwi5bGx5LicXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE1LFxuICAgICAgICB0aXRsZTogXCLkuK3lm73otrPnkIPpobbnuqfogZTotZvnlLHnlLJB5Y+Y5pu05Li65Lit6LaF55qE5piv5Zyo5ZOq5LiA5bm077yfXCIsXG4gICAgICAgIGE6IFwiMDJcIixcbiAgICAgICAgYjogXCIwM1wiLFxuICAgICAgICBjOiBcIjA0XCIsXG4gICAgICAgIGQ6IFwiMDVcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTYsXG4gICAgICAgIHRpdGxlOiBcIumZqeS6m+WcqOS4rei2heWIm+mAoOWHr+azveaWr+WKs+a7leelnuivneeahOaYr+S7peS4i+WTquaUr+eQg+mYn++8n1wiLFxuICAgICAgICBhOiBcIui+veWugVwiLFxuICAgICAgICBiOiBcIuWMl+S6rFwiLFxuICAgICAgICBjOiBcIuS4iua1t1wiLFxuICAgICAgICBkOiBcIuW5v+W3nlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNyxcbiAgICAgICAgdGl0bGU6IFwi5oGS5aSn56ys5LiA5qyh6I635b6X5Lqa5Yag6IGU6LWb5Yag5Yab5piv6YKj5LiA5bm077yfXCIsXG4gICAgICAgIGE6IFwiMjAxMuW5tFwiLFxuICAgICAgICBiOiBcIjIwMTPlubRcIixcbiAgICAgICAgYzogXCIyMDE05bm0XCIsXG4gICAgICAgIGQ6IFwiMjAxNeW5tFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxOCxcbiAgICAgICAgdGl0bGU6IFwiMjAwMuW5tOS4lueVjOadr++8jOS4reWbvemYn+mYn+WQjOe7hOWvueaJi+mZpOW3tOilv+OAgeWTpeaWr+i+vum7juWKoOi/mOaciemCo+S4quWbveWutu+8n1wiLFxuICAgICAgICBhOiBcIuW4jOiFilwiLFxuICAgICAgICBiOiBcIuW+t+WbvVwiLFxuICAgICAgICBjOiBcIuaXpeacrFwiLFxuICAgICAgICBkOiBcIuWcn+iAs+WFtlwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxOSxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N5Zu95YaF55CD5ZGY5Zyo5Lqa5Yag5LiK5ryU5aSn5Zub5Zac77yfXCIsXG4gICAgICAgIGE6IFwi5q2m56OKXCIsXG4gICAgICAgIGI6IFwi6YOd5rW35LicXCIsXG4gICAgICAgIGM6IFwi6YOc5p6XXCIsXG4gICAgICAgIGQ6IFwi6YK15L2z5LiAXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIwLFxuICAgICAgICB0aXRsZTogXCIyMDE05bm05p2O5aic56ys5Yeg5qyh6I635b6X5aSn5ruh6LSv5aWz5Y2V5Yag5Yab77yfXCIsXG4gICAgICAgIGE6IFwiMVwiLFxuICAgICAgICBiOiBcIjJcIixcbiAgICAgICAgYzogXCIzXCIsXG4gICAgICAgIGQ6IFwiNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyMSxcbiAgICAgICAgdGl0bGU6IFwi5pys6LWb5a2j5q2m56OK5pyJ5pyb5pap6I636YeR6Z2077yM6YKj5LmI5LiK5LiA5ZCN5aS65b6X5Lit6LaF6YeR6Z2055qE5pys5Zyf55CD5ZGY5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi6YOd5rW35LicXCIsXG4gICAgICAgIGI6IFwi5p2O6YeR5769XCIsXG4gICAgICAgIGM6IFwi5a6/6IyC6Ie7XCIsXG4gICAgICAgIGQ6IFwi6YOc5p6XXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQyLFxuICAgICAgICB0aXRsZTogXCLmm77liJvkuIvkuK3lm73lm7Tmo4vlkI3kurrmiJjljYHkuInov57pnLjnuqrlvZXnmoTmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLpqazmmZPmmKVcIixcbiAgICAgICAgYjogXCLluLjmmIpcIixcbiAgICAgICAgYzogXCLogYLljavlubNcIixcbiAgICAgICAgZDogXCLmn6/mtIFcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjMsXG4gICAgICAgIHRpdGxlOiBcIuS4rei2heacgOW5tOi9u+i/m+eQg+iAhee6quW9leaYr+eUseiwgeS/neaMgeiAhe+8n1wiLFxuICAgICAgICBhOiBcIuatpuejilwiLFxuICAgICAgICBiOiBcIum7hOWNmuaWh1wiLFxuICAgICAgICBjOiBcIuacsei+sOadsFwiLFxuICAgICAgICBkOiBcIumDkeaZulwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNCxcbiAgICAgICAgdGl0bGU6IFwi6Laz5Y2P5p2v5aS65Yag5qyh5pWw5pyA5aSa55qE55CD6Zif5piv77yfXCIsXG4gICAgICAgIGE6IFwi5bm/5bee5oGS5aSnXCIsXG4gICAgICAgIGI6IFwi5YyX5Lqs5Zu95a6JXCIsXG4gICAgICAgIGM6IFwi5bGx5Lic6bKB6IO9XCIsXG4gICAgICAgIGQ6IFwi5LiK5rW355Sz6IqxXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI1LFxuICAgICAgICB0aXRsZTogXCLkuK3lm73lpbPotrPlnKjkuJbnlYzmna/kuIrnmoTmnIDlpb3miJDnu6nvvJ9cIixcbiAgICAgICAgYTogXCLlhqDlhptcIixcbiAgICAgICAgYjogXCLkuprlhptcIixcbiAgICAgICAgYzogXCLlraPlhptcIixcbiAgICAgICAgZDogXCLnrKzlm5vlkI1cIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjYsXG4gICAgICAgIHRpdGxlOiBcIuW5v+W3nuaBkuWkp+WcqOS4rei2heWujOaIkOWHoOi/nuWGoO+8n1wiLFxuICAgICAgICBhOiBcIjbov57lhqBcIixcbiAgICAgICAgYjogXCI36L+e5YagXCIsXG4gICAgICAgIGM6IFwiOOi/nuWGoFwiLFxuICAgICAgICBkOiBcIjnov57lhqBcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjcsXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS9jeeQg+WRmOayoeacieWPguWKoOi/h+S4lueVjOadr+ato+i1m++8n1wiLFxuICAgICAgICBhOiBcIumCteS9s+S4gFwiLFxuICAgICAgICBiOiBcIuWtmee7p+a1t1wiLFxuICAgICAgICBjOiBcIuadjumHkee+vVwiLFxuICAgICAgICBkOiBcIuaxn+a0pVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyOCxcbiAgICAgICAgdGl0bGU6IFwi546H6aKG5bm/5bee5oGS5aSn6I635b6X56ys5LiA5Liq5Lit6LaF5Yag5Yab55qE5Li75pWZ57uD5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5p2O56ug5rSZXCIsXG4gICAgICAgIGI6IFwi6YeM55quXCIsXG4gICAgICAgIGM6IFwi5pav56eR5ouJ6YeMXCIsXG4gICAgICAgIGQ6IFwi5Y2h57qz55Om572XXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI5LFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkvY3nkIPlkZjku47mnaXmsqHmnInliLDkuK3otoXouKLov4fnkIPvvJ9cIixcbiAgICAgICAgYTogXCLlt7Tph4zlpaXmlq9cIixcbiAgICAgICAgYjogXCLlkInmi4nov6ror7pcIixcbiAgICAgICAgYzogXCLkvIrmtoXmlq/loZRcIixcbiAgICAgICAgZDogXCLlvrfnvZflt7RcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzAsXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS9jeeQg+WRmOayoeacieiOt+W+l+i/h+KAnOS6mua0sui2s+eQg+Wwj+WnkOKAneeahOensOWPt++8n1wiLFxuICAgICAgICBhOiBcIuWtmembr1wiLFxuICAgICAgICBiOiBcIueZvea0gVwiLFxuICAgICAgICBjOiBcIumfqeerr1wiLFxuICAgICAgICBkOiBcIumprOaZk+aXrVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzMSxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5Liq55yB5Lu95oiW5Z+O5biC5rKh5pyJ5Lik5pSv5Lit6LaF6Zif5LyN77yfXCIsXG4gICAgICAgIGE6IFwi5bm/5beeXCIsXG4gICAgICAgIGI6IFwi5LiK5rW3XCIsXG4gICAgICAgIGM6IFwi5YyX5LqsXCIsXG4gICAgICAgIGQ6IFwi5rGf6IuPXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMyLFxuICAgICAgICB0aXRsZTogXCIxOTk55bm05L2T5pON5LiW6ZSm6LWb5p2O5bCP6bmP6I635b6X5LqG5ZOq5Liq6aG555uu55qE6YeR54mM77yfXCIsXG4gICAgICAgIGE6IFwi6Ieq55Sx5pONXCIsXG4gICAgICAgIGI6IFwi5Y+M5p2gXCIsXG4gICAgICAgIGM6IFwi6Lez6amsXCIsXG4gICAgICAgIGQ6IFwi5Y2V5p2gXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMzLFxuICAgICAgICB0aXRsZTogXCIyMDAx5bm05ZOq5LiA5aSp6JCo6ams5YWw5aWH5a6j5biD5YyX5Lqs5oiQ5Li6MjAwOOW5tOWlpei/kOS8muS4u+WKnuWfjuW4gu+8n1wiLFxuICAgICAgICBhOiBcIjcuMTFcIixcbiAgICAgICAgYjogXCI3LjEyXCIsXG4gICAgICAgIGM6IFwiNy4xM1wiLFxuICAgICAgICBkOiBcIjcuMTRcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzQsXG4gICAgICAgIHRpdGxlOiBcIjIwMDLlubTnm5DmuZbln47lhqzlpaXkvJrvvIzosIHkuLrkuK3lm73mi7/liLDlhqzlpaXkvJrljoblj7Lpppbph5HvvJ9cIixcbiAgICAgICAgYTogXCLmnajpmLNcIixcbiAgICAgICAgYjogXCLmnajmiaxcIixcbiAgICAgICAgYzogXCLmnajmnaggXCIsXG4gICAgICAgIGQ6IFwi5p2o5rSLXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM1LFxuICAgICAgICB0aXRsZTogXCIyMDAz5bm05Zu95a625L2T6IKy5oC75bGA5q2j5byP5om55YeG5ZOq5Liq6aG555uu5oiQ5Li656ysOTnkuKrmraPlvI/kvZPogrLnq57otZvpobnvvJ9cIixcbiAgICAgICAgYTogXCLnlLXlrZDnq57mioBcIixcbiAgICAgICAgYjogXCLpq5jlsJTlpKtcIixcbiAgICAgICAgYzogXCLpqaznkINcIixcbiAgICAgICAgZDogXCLmu5Hnv5TkvJ5cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzYsXG4gICAgICAgIHRpdGxlOiBcIjIwMDXlubTosIHlpLrlvpfkuobkuK3lm73mlq/or7rlhYvpppbkuKrmjpLlkI3otZvlhqDlhpvvvJ9cIixcbiAgICAgICAgYTogXCLlgoXlrrbkv4pcIixcbiAgICAgICAgYjogXCLkuIHkv4rmmZZcIixcbiAgICAgICAgYzogXCLmooHmlofljZpcIixcbiAgICAgICAgZDogXCLnlLDpuY/po55cIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzcsXG4gICAgICAgIHRpdGxlOiBcIjIwMDblubTpg73ngbXlhqzlpaXkvJrkuK3lm73lk6rkvY3nlLfpgInmiYvojrflvpfkuobph5HniYzvvJ9cIixcbiAgICAgICAgYTogXCLmnY7kvbPlhptcIixcbiAgICAgICAgYjogXCLpn6nmmZPpuY9cIixcbiAgICAgICAgYzogXCLpn6nkvbPoia9cIixcbiAgICAgICAgZDogXCLlronnjonpvplcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzgsXG4gICAgICAgIHRpdGxlOiBcIjIwMDflubTnlLDlvoTkuJbplKbotZvliJjnv5TlhrPotZvlnKjnrKzlh6Dot5HpgZPvvJ9cIixcbiAgICAgICAgYTogXCI2XCIsXG4gICAgICAgIGI6IFwiN1wiLFxuICAgICAgICBjOiBcIjhcIixcbiAgICAgICAgZDogXCI5XCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDM5LFxuICAgICAgICB0aXRsZTogXCIyMDA55bm05ri45rOz5LiW6ZSm6LWb6LCB5aS65b6X5Lit5Zu955S35a2Q5ri45rOz6aaW6YeR77yfXCIsXG4gICAgICAgIGE6IFwi5byg55CzXCIsXG4gICAgICAgIGI6IFwi5a2Z5p2oXCIsXG4gICAgICAgIGM6IFwi5a6B5rO95rabXCIsXG4gICAgICAgIGQ6IFwi5b6Q5ZiJ5L2ZXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQwLFxuICAgICAgICB0aXRsZTogXCIyMDEz5bm06LCB5Yib6YCg5LqG5Y2V5Lq65biG6Ii55LiN6Ze05pat546v55CD6Iiq6KGM5LiW55WM57qq5b2V77yfXCIsXG4gICAgICAgIGE6IFwi5b6Q6I6J5L2zXCIsXG4gICAgICAgIGI6IFwi5q635YmRXCIsXG4gICAgICAgIGM6IFwi6YOt5bedXCIsXG4gICAgICAgIGQ6IFwi6ZmI5L2p5aicXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQxLFxuICAgICAgICB0aXRsZTogXCLlj4LliqDkuI5BbHBoYUdv5Lq65py65aSn5oiY55qE5piv5ZOq5L2N5Lit5Zu95qOL5omL77yfXCIsXG4gICAgICAgIGE6IFwi5p2O5LiW55+zXCIsXG4gICAgICAgIGI6IFwi6IGC5Y2r5bmzXCIsXG4gICAgICAgIGM6IFwi5ZSQ5Y2r5pifXCIsXG4gICAgICAgIGQ6IFwi5p+v5rSBXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQyLFxuICAgICAgICB0aXRsZTogXCIyMDE25bm06LCB5oiQ5Li65LqG6ZuG5YWo5Zu95Yag5Yab44CB5Lqa5rSy5Yag5Yab44CB5LiW6ZSm6LWb5Yag5Yab44CB5aWl6L+Q5Lya5Yag5Yab44CB6IGM5Lia5ouz546L6I2j6KqJ5LqO5LiA6Lqr55qE6YeR5ruh6LSv5b6X5Li777yfXCIsXG4gICAgICAgIGE6IFwi6YK55biC5piOXCIsXG4gICAgICAgIGI6IFwi54aK5pyd5b+gXCIsXG4gICAgICAgIGM6IFwi5byg5bCP5bmzXCIsXG4gICAgICAgIGQ6IFwi5ZCV5paMXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQzLFxuICAgICAgICB0aXRsZTogXCIyMDE35bm06KKr6KqJ5Li64oCcTVZQ5pS25Ymy5py64oCd55qE5piv5ZOq5L2N5aWz5o6S5ZCN5bCG77yfXCIsXG4gICAgICAgIGE6IFwi5pyx5am3XCIsXG4gICAgICAgIGI6IFwi5byg5bi45a6BXCIsXG4gICAgICAgIGM6IFwi6KKB5b+D546lXCIsXG4gICAgICAgIGQ6IFwi5LiB6ZyeXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQ0LFxuICAgICAgICB0aXRsZTogXCIyMDE45bm05Lqa6L+Q5Lya6I635b6X6YeR54mM5pyA5aSa55qE5Lit5Zu96YCJ5omL5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5b6Q5ZiJ5L2ZXCIsXG4gICAgICAgIGI6IFwi5a2Z5p2oXCIsXG4gICAgICAgIGM6IFwi5qiK5oyv5LicXCIsXG4gICAgICAgIGQ6IFwi546L566A5ZiJ56a+XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQ1LFxuICAgICAgICB0aXRsZTogXCIyMDE45bm06IuP54Kz5re755qE55m+57Gz5pyA5L2z5oiY57up5piv5aSa5bCR77yfXCIsXG4gICAgICAgIGE6IFwiOeenkjkxXCIsXG4gICAgICAgIGI6IFwiOeenklwiLFxuICAgICAgICBjOiBcIjnnp5I5OVwiLFxuICAgICAgICBkOiBcIjEw56eSMDNcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH1cbiAgIFxuXSIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkl0ZW0gfSBmcm9tIFwiLi9RdWVzdGlvbkRhdGFcIjtcblxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25EaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuUXVlc3Rpb25EaWFsb2dVSSB7XG5cbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbkl0ZW1cbiAgICBcbiAgICBjb25zdHJ1Y3RvcihxdWVzdGlvbjogUXVlc3Rpb25JdGVtKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uXG5cbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc01vZGFsID0gdHJ1ZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSAgIFxuICAgIFxuICAgIHB1YmxpYyBvbk9wZW5lZCgpIHtcbiAgICAgICAgLy8g5bu25pe25omn6KGM77yM6YG/5YWN5omL5py65LiK5omn6KGM5pe25oql57uE5Lu2dW5kZWZpbmVk55qE6Zeu6aKYXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxMYXRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnF1ZXN0aW9uTGFiZWwpIHtcbiAgICAgICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvblxuICAgICAgICB0aGlzLnF1ZXN0aW9uTGFiZWwudGV4dCA9IHF1ZXN0aW9uLnRpdGxlXG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmFcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLmxhYmVsID0gcXVlc3Rpb24uYlxuICAgICAgICB0aGlzLmFuc3dlckNCdG4ubGFiZWwgPSBxdWVzdGlvbi5jXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5sYWJlbCA9IHF1ZXN0aW9uLmRcblxuICAgICAgICB0aGlzLmFuc3dlckFCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImFcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiYlwiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJDQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJjXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckRCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImRcIl0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrQW5zd2VyKGFuc3dlcjogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25DbGlja0Fuc3dlclwiLCBhbnN3ZXIpXG5cbiAgICAgICAgY29uc3QgcmlnaHQgPSAodGhpcy5xdWVzdGlvbi5hbnN3ZXIgPT09IGFuc3dlcilcbiAgICAgICAgY29uc3QgcmVzdWx0SW1nID0gcmlnaHQgPyBcInZpZXcvcmlnaHQucG5nXCIgOiBcInZpZXcvd3JvbmcucG5nXCJcbiAgICAgICAgaWYgKGFuc3dlciA9PT0gXCJhXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QUltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRBSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImJcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRCSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEJJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiY1wiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdENJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Q0ltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJkXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0REltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRESW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyDnp7vpmaTngrnlh7vkuovku7ZcbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyQkJ0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckNCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLm9mZkFsbCgpXG5cbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMub25DbG9zZUxhdGVyLCBbcmlnaHRdLCB0cnVlKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbG9zZUxhdGVyKHJpZ2h0OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoYCR7cmlnaHR9YClcbiAgICB9XG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCBDb25zdGFudHMgZnJvbSBcIi4vQ29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlUmVzdWx0RGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLlJlc3VsdERpYWxvZ1VJIHtcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXJcbiAgICBwcml2YXRlIGlzQ2xpY2tpbmc6IGJvb2xlYW5cbiAgICBjb25zdHJ1Y3RvcihzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5pc0NsaWNraW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuICAgICAgICB0aGlzLnNjb3JlID0gc2NvcmVcbiAgICB9XG5cbiAgICBwdWJsaWMgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIOW7tuaXtuaJp+ihjO+8jOmBv+WFjeaJi+acuuS4iuaJp+ihjOaXtuaKpee7hOS7tnVuZGVmaW5lZOeahOmXrumimFxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsTGF0ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5iZ0ltYWdlVmlldykge1xuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjb3JlSW1hZ2VWaWV3LmxvYWRJbWFnZShgdmlldy9udW1fJHt0aGlzLnNjb3JlfS5wbmdgKVxuICAgICAgICBpZiAodGhpcy5zY29yZSA+PSA4KSB7XG4gICAgICAgICAgICB0aGlzLmJnSW1hZ2VWaWV3LmxvYWRJbWFnZShDb25zdGFudHMuc2NvcmU0KVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPj0gNSkge1xuICAgICAgICAgICAgdGhpcy5iZ0ltYWdlVmlldy5sb2FkSW1hZ2UoQ29uc3RhbnRzLnNjb3JlMylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYmdJbWFnZVZpZXcubG9hZEltYWdlKENvbnN0YW50cy5zY29yZTIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnSW1hZ2VWaWV3LmxvYWRJbWFnZShDb25zdGFudHMuc2NvcmUxKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcmVJbWFnZVZpZXcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgdGhpcy5iZ0ltYWdlVmlldy52aXNpYmxlID0gdHJ1ZVxuXG4gICAgICAgIHRoaXMub25jZU1vcmVCdXR0b24ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vbk9uY2VNb3JlKVxuICAgICAgICB0aGlzLnNoYXJlQnV0dG9uLm9uKExheWEuRXZlbnQuQ0xJQ0ssIHRoaXMsIHRoaXMub25TaGFyZSlcbiAgICAgICAgdGhpcy5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMub25Eb3duKVxuICAgICAgICB0aGlzLm9uKExheWEuRXZlbnQuTU9VU0VfVVAsIHRoaXMsIHRoaXMub25VcClcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT25jZU1vcmUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NvcmVSZXN1bHREaWFsb2dcIiwgXCJjbGlja2VkIG9uY2UgbW9yZSBidXR0b25cIilcbiAgICB9XG4gICAgcHJpdmF0ZSBvblNoYXJlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjb3JlUmVzdWx0RGlhbG9nXCIsIFwiY2xpY2tlZCBvbiBzaGFyZVwiKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb3duKCkge1xuICAgICAgICB0aGlzLmlzQ2xpY2tpbmcgPSB0cnVlXG4gICAgICAgIExheWEudGltZXIub25jZSgxMDAwLCB0aGlzLCB0aGlzLm9uTG9uZ0Rvd25DaGVjaykgLy8gMeenkueul+mVv+aMiVxuICAgIH1cblxuICAgIHByaXZhdGUgb25VcCgpIHtcbiAgICAgICAgdGhpcy5pc0NsaWNraW5nID0gZmFsc2VcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTG9uZ0Rvd25DaGVjaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2xpY2tpbmcpIHsgLy8g5LiN566X6ZW/5oyJXG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIlNjb3JlUmVzdWx0RGlhbG9nXCIsIFwibG9uZyBjbGlja1wiKVxuXG4gICAgICAgIGNvbnN0IGh0bWxDYW52YXMgPSB0aGlzLmJnSW1hZ2VWaWV3LmRyYXdUb0NhbnZhcyg1MTIsIDgwOCwgMCwgMClcbiAgICAgICAgaHRtbENhbnZhcy50b0Jhc2U2NChcImltYWdlL2pwZWdcIiwwLjksIHRoaXMub25CZ1RvQmFzZTY0KVxuICAgIH1cblxuICAgIHByaXZhdGUgb25CZ1RvQmFzZTY0KHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNjb3JlUmVzdWx0RGlhbG9nXCIsIFwib25CZ1RvQmFzZTY0XCIsIHJlcylcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuLyoqXG4gKiDlnLrmma8x6IOM5pmvXG4gKi9cblxudHlwZSBBbmlOYW1lID0gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4xQmFja0dyb3VuZCBleHRlbmRzIExheWEuU3ByaXRlIHtcbiAgICBwcml2YXRlIGJnMTogTGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBjdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aGlzdGxlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2hvdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDAyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwOEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDEyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgcGFnZTJfc3RhcnQ6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBwYWdlM19zdGFydDogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCYWxsTWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQm9hcmRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBjbG9ja0FuaTogTGF5YS5BbmltYXRpb25cbiAgICAvLyBwcml2YXRlIENvbXB1dGVyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQ3Jvd2RBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBkdW1iYmVsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGVsZWN0cmljbWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZXF1aXBtZW50QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgRm9vdGJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBHb2dnbGVzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGF0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGVhcnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBsaXV4aWFuZ0FuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIE1lZGFsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgU2NvcmVib2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNob2VzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU3RhZ2VBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXYWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2F0ZXJMZWZ0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgV2F0ZXJSaWdodEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXaW5NYW5Bbmk6IExheWEuQW5pbWF0aW9uXG5cbiAgICBwcml2YXRlIGJnMjogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnMzogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNDogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNTogTGF5YS5TcHJpdGVcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJnMSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmcxLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDEpXG4gICAgICAgIHRoaXMuYmcxLmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcxKVxuXG4gICAgICAgIHRoaXMuYmcyID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzIucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIDk3MClcbiAgICAgICAgdGhpcy5iZzIuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlMiA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDIpXG4gICAgICAgIHRoaXMuYmcyLmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlMilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnMilcblxuICAgICAgICB0aGlzLmJnMyA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmczLnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyAxOTQwKVxuICAgICAgICB0aGlzLmJnMy5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMylcbiAgICAgICAgdGhpcy5iZzMuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUzKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmczKVxuXG4gICAgICAgIHRoaXMuYmc0ID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzQucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodCArIDI5MTApXG4gICAgICAgIHRoaXMuYmc0LnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kNEhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTQgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQ0KVxuICAgICAgICB0aGlzLmJnNC5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTQpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzQpXG5cbiAgICAgICAgdGhpcy5iZzUgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnNS5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0ICsgMzg4MClcbiAgICAgICAgdGhpcy5iZzUuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ1SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNSA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDUpXG4gICAgICAgIHRoaXMuYmc1LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNSlcblxuICAgICAgICB0aGlzLmN1cEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIC8vIFRPRE86IOiwg+aVtOWKqOeUu1xuICAgICAgICB0aGlzLmN1cEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0N1cEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmN1cEFuaSlcbiAgICAgICAgLy8gVE9ETzog6LCD5pW05L2N572uXG4gICAgICAgIHRoaXMuY3VwQW5pLnBvcyg0MDAsIDEwMjApXG5cblxuICAgICAgICB0aGlzLndoaXN0bGVBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XaGlzdGxlQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2hpc3RsZUFuaSlcbiAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBvcygxMDAsIDk4MClcblxuICAgICAgICB0aGlzLlNob3RBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlNob3RBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TaG90QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvdEFuaSlcbiAgICAgICAgdGhpcy5TaG90QW5pLnBvcygyMjAsIDE4NTApXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDAyQW5pKVxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnBvcygzNjAsIDI1NTApXG5cbiAgICAgICAgdGhpcy53aW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndpbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3dpbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLndpbkFuaSlcbiAgICAgICAgdGhpcy53aW5BbmkucG9zKDI2MCwgMzA1MClcblxuXG4gICAgICAgIC8vcGFnZTJcbiAgICAgICAgdGhpcy5wYWdlMl9zdGFydCA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMucGFnZTJfc3RhcnQubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMl9zdGFydC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhZ2UyX3N0YXJ0KVxuICAgICAgICB0aGlzLnBhZ2UyX3N0YXJ0LnBvcygyNTAsIDQ4ODApXG5cbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9kdW1iYmVsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmR1bWJiZWxsQW5pKVxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnBvcygzMTAsIDUwOTYpXG5cbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VxdWlwbWVudEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmVxdWlwbWVudEFuaSlcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkucG9zKDM3MCwgNTQwMylcblxuICAgICAgICB0aGlzLmNsb2NrQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2Nsb2NrQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY2xvY2tBbmkpXG4gICAgICAgIHRoaXMuY2xvY2tBbmkucG9zKDE1MiwgNTY5NSlcblxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDA0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDRBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkucG9zKDMzNywgNjA0NClcblxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VsZWN0cmljbWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZWxlY3RyaWNtYW5BbmkpXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkucG9zKDMyOCwgNjI2NSlcblxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2xpdXhpYW5nQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubGl1eGlhbmdBbmkpXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkucG9zKDI2MywgNjc1MClcblxuXG4gICAgICAgIC8vcGFnZTNcbiAgICAgICAgdGhpcy5wYWdlM19zdGFydCA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMucGFnZTNfc3RhcnQubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM19zdGFydC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhZ2UzX3N0YXJ0KVxuICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0LnBvcygyNTAsIDgyNTApXG5cbiAgICAgICAgdGhpcy5NZWRhbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuTWVkYWxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9NZWRhbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLk1lZGFsQW5pKVxuICAgICAgICB0aGlzLk1lZGFsQW5pLnBvcygzMzMsIDg5MDApXG5cbiAgICAgICAgdGhpcy5TdGFnZUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TdGFnZUFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlN0YWdlQW5pKVxuICAgICAgICB0aGlzLlN0YWdlQW5pLnBvcygyMTksIDkyMTEpXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwOEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDA4QW5pKVxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pLnBvcygyMzEsIDk2OTMpXG5cbiAgICAgICAgdGhpcy5Dcm93ZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Dcm93ZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkNyb3dkQW5pKVxuICAgICAgICB0aGlzLkNyb3dkQW5pLnBvcygyNzAsIDk5ODUpXG5cblxuICAgICAgICAvL3BhZ2U0XG4gICAgICAgIHRoaXMuSGVhcnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhlYXJ0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvSGVhcnRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5IZWFydEFuaSlcbiAgICAgICAgdGhpcy5IZWFydEFuaS5wb3MoMTgxLCAxMTMzMSlcblxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDEyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMTJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkucG9zKDI1OSwgMTE3MDUpXG5cbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2F0ZXJSaWdodEFuaS5hbmlcIilcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyUmlnaHRBbmkpXG4gICAgICAgIC8vIHRoaXMuV2F0ZXJSaWdodEFuaS5wb3MoMzcwLCA5MTAwKVxuXG4gICAgICAgIHRoaXMuQm9hcmRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJvYXJkQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Cb2FyZEFuaSlcbiAgICAgICAgdGhpcy5Cb2FyZEFuaS5wb3MoMjU3LCAxMTkyMilcblxuICAgICAgICB0aGlzLldhbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2FsbEFuaSlcbiAgICAgICAgdGhpcy5XYWxsQW5pLnBvcygyNzUsIDEyMTkwKVxuXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0dvZ2dsZXNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Hb2dnbGVzQW5pKVxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucG9zKDM1NSwgMTI2MzQpXG5cbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dhdGVyTGVmdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyTGVmdEFuaSlcbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucG9zKDE2MywgMTMwMDcpXG5cbiAgICAgICAgdGhpcy5XaW5NYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dpbk1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldpbk1hbkFuaSlcbiAgICAgICAgdGhpcy5XaW5NYW5BbmkucG9zKDI1NCwgMTM0ODApXG5cblxuICAgICAgICAvL3BhZ2U1XG4gICAgICAgIC8vIHRoaXMuU2NvcmVib2FyZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIC8vIHRoaXMuU2NvcmVib2FyZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Njb3JlYm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5TY29yZWJvYXJkQW5pKVxuICAgICAgICAvLyB0aGlzLlNjb3JlYm9hcmRBbmkucG9zKDI1NywgMTQ5NjEpXG5cbiAgICAgICAgdGhpcy5CYWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxBbmkpXG4gICAgICAgIHRoaXMuQmFsbEFuaS5wb3MoMTI3LCAxNDk2MSlcblxuICAgICAgICB0aGlzLlNob2VzQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TaG9lc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob2VzQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvZXNBbmkpXG4gICAgICAgIHRoaXMuU2hvZXNBbmkucG9zKDMzOCwgMTU2NDkpXG5cbiAgICAgICAgdGhpcy5IYXRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhhdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0hhdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkhhdEFuaSlcbiAgICAgICAgdGhpcy5IYXRBbmkucG9zKDE4NSwgMTU5MjMpXG5cbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbE1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxNYW5BbmkpXG4gICAgICAgIHRoaXMuQmFsbE1hbkFuaS5wb3MoMjY1LCAxNjQ2NylcbiAgICB9XG5cbiAgICBzdG9wQW5pKGFuaU5hbWU6IEFuaU5hbWUpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMl9zdGFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGFnZTJfc3RhcnQuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMl9zdGFydDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UyX3N0YXJ0LmdvdG9BbmRTdG9wKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwicGFnZTNfc3RhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0LmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwicGFnZTNfc3RhcnQxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlM19zdGFydC5nb3RvQW5kU3RvcCgxKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsTWFuQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuQ29tcHV0ZXJBbmkuZ290b0FuZFN0b3AoMzApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Dcm93ZEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNyb3dkQW5pLmdvdG9BbmRTdG9wKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlbGVjdHJpY21hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXF1aXBtZW50XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkdvZ2dsZXNBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLmdvdG9BbmRTdG9wKDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoZWFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGVhcnRBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmxpdXhpYW5nQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkuZ290b0FuZFN0b3AoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5TY29yZWJvYXJkQW5pLmdvdG9BbmRTdG9wKDIwKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkuZ290b0FuZFN0b3AoMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2FsbEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldoaXN0bGVBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5NYW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLmdvdG9BbmRTdG9wKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXlBbmkoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMTJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwiY29tcHV0ZXJcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkNvbXB1dGVyQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Dcm93ZEFuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkdW1iYmVsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZHVtYmJlbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWxlY3RyaWNtYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGF0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IYXRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhlYXJ0QW5pLnBsYXkoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZWRhbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTWVkYWxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuU2NvcmVib2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlN0YWdlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuV2F0ZXJSaWdodEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLnBsYXkoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pUGxheWluZyhhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDAyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDEyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ3Jvd2RBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWlwbWVudEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFydEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICAvLyBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLlNjb3JlYm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYWxsQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYXRlckxlZnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2hpc3RsZUFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG90QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Db21wdXRlckFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLlNjb3JlYm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob2VzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2hpc3RsZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLndpbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXBBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpc3RsZUFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMDRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAxMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9ja0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNyb3dkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kdW1iYmVsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVpcG1lbnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuR29nZ2xlc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSGVhcnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpdXhpYW5nQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5TY29yZWJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG9lc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2FsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldhdGVyTGVmdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldoaXN0bGVBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkudmlzaWJsZTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcblxuZXhwb3J0IHR5cGUgVGlwVHlwZSA9IFwic2Nyb2xsXCIgfCBcImNsaWNrX3doaXRlXCIgfCBcImNsaWNrX2JsYWNrXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbERpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TY3JvbGxEaWFsb2dVSSB7XG4gICAgcHJpdmF0ZSB0aXBUeXBlOiBUaXBUeXBlXG4gICAgY29uc3RydWN0b3IodGlwVHlwZTogVGlwVHlwZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudGlwVHlwZSA9IHRpcFR5cGVcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsTGF0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnRpcFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzY3JvbGxcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50aXBJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlwSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgdGhpcy50aXBJbWFnZS52aXNpYmxlICA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja193aGl0ZVwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLndoaXRlQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnkgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IFxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja19ibGFja1wiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJsYWNrQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFja0NsaWNrSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrQ2xpY2tJbWFnZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uQ2xpY2spXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZURpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TaGFrZURpYWxvZ1VJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICBcbiAgICAgICAgXG4gICAgfSAgICBcblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRiYWxsIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFza2V0YmFsbC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTFlMnMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMXRvMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTJlM3MgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMnRvM0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTNlNHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM3RvNEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZTNfUnVubWFuIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xyXG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXHJcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXHJcbiAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcclxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM19ydW5tYW4uYW5pXCIpXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotbDliqhcclxuICAgICAqL1xyXG4gICAgZ29QYXRoKHk6bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2U0ZTVzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTR0bzVBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHJ1bm5pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UyUnVuLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6LWw5YqoXG4gICAgICovXG4gICAgZ29QYXRoKHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG5cbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpbW1pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9zd2ltbWluZ0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aS5kaWFsb2cge1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgdGlwTGFiZWw6TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgbG9hZGluZ1Byb2dyZXNzQmFyOkxheWEuUHJvZ3Jlc3NCYXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvTG9hZGluZ0RpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgUXVlc3Rpb25EaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgcmVzdWx0QUltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0Q0ltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0QkltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0REltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcXVlc3Rpb25MYWJlbDpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyBhbnN3ZXJBQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJCQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJDQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJEQnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1F1ZXN0aW9uRGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBSZXN1bHREaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmdJbWFnZVZpZXc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNjb3JlSW1hZ2VWaWV3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBvbmNlTW9yZUJ1dHRvbjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgc2hhcmVCdXR0b246TGF5YS5CdXR0b247XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvUmVzdWx0RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBTY3JvbGxEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgdGlwSW1hZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJsYWNrQ2xpY2tJbWFnZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgd2hpdGVDbGlja0ltYWdlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1Njcm9sbERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2hha2VEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1NoYWtlRGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
