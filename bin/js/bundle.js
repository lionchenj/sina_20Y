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
        // this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants.soundBgm8, 0)
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
        if (this.screen1BackGround.y <= -2640 && this.screen1BackGround.y >= -4600) {
            this.page1e2s.show();
            var z = parseInt((-this.screen1BackGround.y - 2630) / 10 + '');
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
        if (this.screen1BackGround.y <= -9630 && this.screen1BackGround.y >= -11190) {
            this.page3e4s.show();
            var z = parseInt((-this.screen1BackGround.y - 9630) / 10 + '');
            console.log('z: ' + z);
            this.page3e4s.goPath(z - 0);
        }
        else {
            this.page3e4s.hide();
        }
        //page4
        if (this.screen1BackGround.y <= -11190 && this.screen1BackGround.y >= -11670) {
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
        if (this.screen1BackGround.y <= -12960 && this.screen1BackGround.y >= -14790) {
            this.page4e5s.show();
            var z = parseInt((-this.screen1BackGround.y - 12830) / 10 + '');
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
        this.questionScore++;
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
        this.winAni.pos(280, 3050);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTG9hZGluZ0RpYWxvZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1F1ZXN0aW9uRGF0YS50cyIsInNyYy9RdWVzdGlvbkRpYWxvZy50cyIsInNyYy9TY29yZVJlc3VsdERpYWxvZy50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyIsInNyYy9TY3JvbGxEaWFsb2cudHMiLCJzcmMvU2hha2VEaWFsb2cudHMiLCJzcmMvYmFza2V0YmFsbC50cyIsInNyYy9wYWdlMSYyLnRzIiwic3JjL3BhZ2UyJjMudHMiLCJzcmMvcGFnZTMmNC50cyIsInNyYy9wYWdlM19ydW5tYW4udHMiLCJzcmMvcGFnZTQmNS50cyIsInNyYy9ydW5uaW5nLnRzIiwic3JjL3N3aW1taW5nLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBa0NBLENBQUM7SUFoQ1UscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJC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QUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBaUJkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFrQmQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFtQmYsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FB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QUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVBQUUseUJBQXlCO1FBQ2hDLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsTUFBTSxFQUFFLEdBQUc7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLEVBQUU7UUFDTixLQUFLLEVB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QUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLG1CQUFtQjtZQUNuQix3Q0FBd0M7WUFDeEMsYUFBYTtZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdB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O1FBQUQsQ0FWQSxBQVVDLENBVm1DLE1BQU0sR0FVekM7UUFWWSxxQkFBYyxpQkFVMUIsQ0FBQTtRQUNEO1lBQW9DLGtDQUFNO1lBSXRDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2Qix1Q0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDMUMsQ0FBQztZQUNMLHFCQUFDO1FBQUQsQ0FUQSxBQVNDLENBVG1DLE1BQU0sR0FTekM7UUFUWSxxQkFBYyxpQkFTMUIsQ0FBQTtRQUNEO1lBQW1DLGlDQUFNO1lBRXJDO3VCQUFlLGlCQUFPO1lBQUEsQ0FBQztZQUN2QixzQ0FBYyxHQUFkO2dCQUNJLGlCQUFNLGNBQWMsV0FBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekMsQ0FBQztZQUNMLG9CQUFDO1FBQUQsQ0FQQSxBQU9DLENBUGtDLE1BQU0sR0FPeEM7UUFQWSxvQkFBYSxnQkFPekIsQ0FBQTtJQUNMLENBQUMsRUF2RGdCLE1BQU0sR0FBTixTQUFNLEtBQU4sU0FBTSxRQXVEdEI7QUFBRCxDQUFDLEVBdkRhLEVBQUUsR0FBRixVQUFFLEtBQUYsVUFBRSxRQXVEZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuXG4gICAgc3RhdGljIGJhY2tncm91bmQxID0gXCJiZy9iYWNrZ3JvdW5kMS5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMiA9IFwiYmcvYmFja2dyb3VuZDIucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDMgPSBcImJnL2JhY2tncm91bmQzLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQ0ID0gXCJiZy9iYWNrZ3JvdW5kNC5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNSA9IFwiYmcvYmFja2dyb3VuZDUucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDFIZWlnaHQgPSAzNjA0XG4gICAgc3RhdGljIGJhY2tncm91bmQySGVpZ2h0ID0gMjU2MVxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kM0hlaWdodCA9IDIxOTBcbiAgICBzdGF0aWMgYmFja2dyb3VuZDRIZWlnaHQgPSAyNTU5XG4gICAgc3RhdGljIGJhY2tncm91bmQ1SGVpZ2h0ID0gMTkyMFxuXG5cbiAgICBzdGF0aWMgc3RhZ2VXaWR0aCA9IDUxMlxuICAgIHN0YXRpYyBzdGF0ZUhlaWdodCA9IENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kNEhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kNUhlaWdodCArIDM4ODBcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcIm5vYm9yZGVyXCI7XG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwidmVydGljYWxcIjtcblxuICAgIHN0YXRpYyBzb3VuZDAgPSBcInJlcy9zb3VuZC8wLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMSA9IFwicmVzL3NvdW5kLzEubXAzXCJcbiAgICBzdGF0aWMgc291bmQyID0gXCJyZXMvc291bmQvMi5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDMgPSBcInJlcy9zb3VuZC8zLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kNCA9IFwicmVzL3NvdW5kLzQubXAzXCJcbiAgICBzdGF0aWMgc291bmRCZ20gPSBcInJlcy9zb3VuZC9iZ20ubXAzXCJcbiAgICBzdGF0aWMgc291bmRCZ204ID0gXCJyZXMvc291bmQvYmdtOC5tcDNcIlxuICAgIFxuICAgIHN0YXRpYyBzY29yZTEgPSBcInZpZXcvc2NvcmVfMS5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTIgPSBcInZpZXcvc2NvcmVfMi5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTMgPSBcInZpZXcvc2NvcmVfMy5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTQgPSBcInZpZXcvc2NvcmVfNC5qcGdcIlxuXG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RiYWxsIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5iei2s+eQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvRm9vdGJhbGxBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotrPnkIPlgZzmraLml4vovaxcbiAgICAgKi9cbiAgICBzdG9wUm90YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuYm9keUFuaS5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUFuaS5nb3RvQW5kU3RvcCgwKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi2s+eQg1xi5peL6L2sXG4gICAgICovXG4gICAgcGxheVJvdGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYm9keUFuaS5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvZHlBbmkucGxheSgwLCB0cnVlKVxuXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9vdGJhbGxYKHk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgeCA9IG1hcFt5XVxuICAgIGlmICh4KSB7XG4gICAgICAgIHJldHVybiB4XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICB9XG59XG5jb25zdCBtYXA6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcblxubWFwWzIzMl0gPSAzMjZcbm1hcFsyMzJdID0gMzI5XG5tYXBbMjM0XSA9IDMzMFxubWFwWzIzNl0gPSAzMzJcbm1hcFsyMzddID0gMzM0XG5tYXBbMjM3XSA9IDMzN1xubWFwWzIzOV0gPSAzMzlcbm1hcFsyMzldID0gMzQyXG5tYXBbMjQwXSA9IDM0NFxubWFwWzI0Ml0gPSAzNDVcbm1hcFsyNDRdID0gMzQ3XG5tYXBbMjQ1XSA9IDM0OFxubWFwWzI0N10gPSAzNTBcbm1hcFsyNDldID0gMzUyXG5tYXBbMjUwXSA9IDM1M1xubWFwWzI1Ml0gPSAzNTVcbm1hcFsyNTRdID0gMzU3XG5tYXBbMjU1XSA9IDM1OFxubWFwWzI1N10gPSAzNjBcbm1hcFsyNThdID0gMzYyXG5tYXBbMjU4XSA9IDM2NVxubWFwWzI2MF0gPSAzNjZcbm1hcFsyNjJdID0gMzY4XG5tYXBbMjYzXSA9IDM3MFxubWFwWzI2NV0gPSAzNzFcbm1hcFsyNjddID0gMzczXG5tYXBbMjY4XSA9IDM3NVxubWFwWzI3MF0gPSAzNzZcbm1hcFsyNzJdID0gMzc4XG5tYXBbMjczXSA9IDM4MFxubWFwWzI3NV0gPSAzODFcbm1hcFsyNzhdID0gMzgxXG5tYXBbMjgxXSA9IDM4MVxubWFwWzI4M10gPSAzODNcbm1hcFsyODZdID0gMzgzXG5tYXBbMjg4XSA9IDM4NFxubWFwWzI5MV0gPSAzODRcbm1hcFsyOTRdID0gMzg0XG5tYXBbMjk2XSA9IDM4NlxubWFwWzI5OV0gPSAzODZcbm1hcFszMDNdID0gMzg2XG5tYXBbMzA2XSA9IDM4NlxubWFwWzMwOV0gPSAzODZcbm1hcFszMTJdID0gMzg2XG5tYXBbMzE2XSA9IDM4NlxubWFwWzMxN10gPSAzODhcbm1hcFszMjFdID0gMzg4XG5tYXBbMzI0XSA9IDM4OFxubWFwWzMyN10gPSAzODhcbm1hcFszMzBdID0gMzg4XG5tYXBbMzM0XSA9IDM4OFxubWFwWzMzNV0gPSAzODZcbm1hcFszMzldID0gMzg2XG5tYXBbMzQyXSA9IDM4NlxubWFwWzM0NV0gPSAzODZcbm1hcFszNDhdID0gMzg2XG5tYXBbMzUyXSA9IDM4NFxubWFwWzM1NV0gPSAzODRcbm1hcFszNTddID0gMzgzXG5tYXBbMzYwXSA9IDM4M1xubWFwWzM2MV0gPSAzODFcbm1hcFszNjNdID0gMzgwXG5tYXBbMzY1XSA9IDM3OFxubWFwWzM2Nl0gPSAzNzZcbm1hcFszNzBdID0gMzc1XG5tYXBbMzcxXSA9IDM3M1xubWFwWzM3M10gPSAzNzFcbm1hcFszNzZdID0gMzcwXG5tYXBbMzc4XSA9IDM2OFxubWFwWzM3OV0gPSAzNjZcbm1hcFszODFdID0gMzY1XG5tYXBbMzgzXSA9IDM2M1xubWFwWzM4Nl0gPSAzNjNcbm1hcFszODhdID0gMzYyXG5tYXBbMzg5XSA9IDM2MFxubWFwWzM5MV0gPSAzNThcbm1hcFszOTNdID0gMzU3XG5tYXBbMzk0XSA9IDM1NVxubWFwWzM5Nl0gPSAzNTNcbm1hcFszOTddID0gMzUyXG5tYXBbMzk5XSA9IDM1MFxubWFwWzQwMV0gPSAzNDhcbm1hcFs0MDRdID0gMzQ4XG5tYXBbNDA2XSA9IDM0N1xubWFwWzQwN10gPSAzNDVcbm1hcFs0MDldID0gMzQ0XG5tYXBbNDExXSA9IDM0MlxubWFwWzQxMl0gPSAzNDBcbm1hcFs0MTRdID0gMzM5XG5tYXBbNDE1XSA9IDMzN1xubWFwWzQxN10gPSAzMzVcbm1hcFs0MTldID0gMzM0XG5tYXBbNDIwXSA9IDMzMlxubWFwWzQyMl0gPSAzMzBcbm1hcFs0MjVdID0gMzI5XG5tYXBbNDI3XSA9IDMyN1xubWFwWzQyOV0gPSAzMjZcbm1hcFs0MzJdID0gMzI2XG5tYXBbNDMzXSA9IDMyNFxubWFwWzQzNV0gPSAzMjJcbm1hcFs0MzddID0gMzIxXG5tYXBbNDM4XSA9IDMxOVxubWFwWzQ0MF0gPSAzMTdcbm1hcFs0NDJdID0gMzE2XG5tYXBbNDQzXSA9IDMxNFxubWFwWzQ0NV0gPSAzMTJcbm1hcFs0NDhdID0gMzEyXG5tYXBbNDUwXSA9IDMxMVxubWFwWzQ1MV0gPSAzMDlcbm1hcFs0NTVdID0gMzA4XG5tYXBbNDU2XSA9IDMwNlxubWFwWzQ1OF0gPSAzMDRcbm1hcFs0NjFdID0gMzAzXG5tYXBbNDYzXSA9IDMwMVxubWFwWzQ2NV0gPSAyOTlcbm1hcFs0NjZdID0gMjk4XG5tYXBbNDY4XSA9IDI5NlxubWFwWzQ2OV0gPSAyOTRcbm1hcFs0NzFdID0gMjkzXG5tYXBbNDc0XSA9IDI5M1xubWFwWzQ3Nl0gPSAyOTFcbm1hcFs0NzhdID0gMjkwXG5tYXBbNDc5XSA9IDI4OFxubWFwWzQ4MV0gPSAyODZcbm1hcFs0ODNdID0gMjg1XG5tYXBbNDg0XSA9IDI4M1xubWFwWzQ4Nl0gPSAyODFcbm1hcFs0ODddID0gMjgwXG5tYXBbNDkxXSA9IDI4MFxubWFwWzQ5Ml0gPSAyNzhcbm1hcFs0OTRdID0gMjc2XG5tYXBbNDk2XSA9IDI3NVxubWFwWzQ5N10gPSAyNzNcbm1hcFs0OTldID0gMjcyXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbm1hcFs0OTldID0gMjcyXG5tYXBbNTAyXSA9IDI3MlxubWFwWzUwNF0gPSAyNzBcbm1hcFs1MDVdID0gMjY4XG5tYXBbNTA3XSA9IDI2N1xubWFwWzUwOV0gPSAyNjVcbm1hcFs1MTBdID0gMjYzXG5tYXBbNTE0XSA9IDI2MlxubWFwWzUxNV0gPSAyNjBcbm1hcFs1MTddID0gMjU4XG5tYXBbNTE5XSA9IDI1N1xubWFwWzUyMF0gPSAyNTVcbm1hcFs1MjJdID0gMjU0XG5tYXBbNTIzXSA9IDI1MlxubWFwWzUyNV0gPSAyNTBcbm1hcFs1MjddID0gMjQ3XG5tYXBbNTI4XSA9IDI0NVxubWFwWzUzMF0gPSAyNDRcbm1hcFs1MzJdID0gMjQyXG5tYXBbNTMzXSA9IDI0MFxubWFwWzUzM10gPSAyMzdcbm1hcFs1MzVdID0gMjM2XG5tYXBbNTM2XSA9IDIzNFxubWFwWzUzOF0gPSAyMzJcbm1hcFs1NDBdID0gMjMxXG5tYXBbNTQxXSA9IDIyOVxubWFwWzU0M10gPSAyMjZcbm1hcFs1NDVdID0gMjI0XG5tYXBbNTQ2XSA9IDIyMlxubWFwWzU0OF0gPSAyMjFcbm1hcFs1NTBdID0gMjE5XG5tYXBbNTUxXSA9IDIxOFxubWFwWzU1M10gPSAyMTZcbm1hcFs1NTZdID0gMjE2XG5tYXBbNTU4XSA9IDIxNFxubWFwWzU1OV0gPSAyMTNcbm1hcFs1NjFdID0gMjExXG5tYXBbNTY0XSA9IDIxMVxubWFwWzU2Nl0gPSAyMDlcbm1hcFs1NjhdID0gMjA4XG5tYXBbNTcxXSA9IDIwOFxubWFwWzU3Ml0gPSAyMDZcbm1hcFs1NzRdID0gMjA0XG5tYXBbNTc2XSA9IDIwM1xubWFwWzU3OV0gPSAyMDNcbm1hcFs1ODFdID0gMjAxXG5tYXBbNTgyXSA9IDIwMFxubWFwWzU4NF0gPSAxOThcbm1hcFs1ODZdID0gMTk2XG5tYXBbNTg3XSA9IDE5NVxubWFwWzU5MF0gPSAxOTVcbm1hcFs1OTJdID0gMTkzXG5tYXBbNTk1XSA9IDE5M1xubWFwWzU5N10gPSAxOTFcbm1hcFs2MDBdID0gMTkxXG5tYXBbNjAyXSA9IDE5MFxubWFwWzYwNF0gPSAxODhcbm1hcFs2MDddID0gMTg4XG5tYXBbNjA4XSA9IDE4NlxubWFwWzYxMF0gPSAxODVcbm1hcFs2MTNdID0gMTg1XG5tYXBbNjE1XSA9IDE4M1xubWFwWzYxN10gPSAxODJcbm1hcFs2MThdID0gMTgwXG5tYXBbNjIyXSA9IDE3OFxubWFwWzYyM10gPSAxNzdcbm1hcFs2MjZdID0gMTc3XG5tYXBbNjI4XSA9IDE3NVxubWFwWzYzMF0gPSAxNzNcbm1hcFs2MzFdID0gMTcyXG5tYXBbNjM1XSA9IDE3MlxubWFwWzYzNl0gPSAxNzBcbm1hcFs2MzhdID0gMTY4XG5tYXBbNjQwXSA9IDE2N1xubWFwWzY0M10gPSAxNjdcbm1hcFs2NDRdID0gMTY1XG5tYXBbNjQ4XSA9IDE2NFxubWFwWzY1MV0gPSAxNjRcbm1hcFs2NTNdID0gMTYyXG5tYXBbNjU2XSA9IDE2MlxubWFwWzY1OF0gPSAxNjBcbm1hcFs2NjFdID0gMTYwXG5tYXBbNjYyXSA9IDE1OVxubWFwWzY2Nl0gPSAxNTlcbm1hcFs2NjddID0gMTU3XG5tYXBbNjcxXSA9IDE1N1xubWFwWzY3Ml0gPSAxNTVcbm1hcFs2NzZdID0gMTU1XG5tYXBbNjc5XSA9IDE1NVxubWFwWzY4MF0gPSAxNTRcbm1hcFs2ODRdID0gMTU0XG5tYXBbNjg3XSA9IDE1NFxubWFwWzY5MF0gPSAxNTRcbm1hcFs2OTRdID0gMTU0XG5tYXBbNjk3XSA9IDE1NFxubWFwWzcwMF0gPSAxNTRcbm1hcFs3MDNdID0gMTU0XG5tYXBbNzA3XSA9IDE1NFxubWFwWzcxMF0gPSAxNTRcbm1hcFs3MTNdID0gMTU0XG5tYXBbNzE2XSA9IDE1NFxubWFwWzcyMF0gPSAxNTRcbm1hcFs3MjNdID0gMTU0XG5tYXBbNzI2XSA9IDE1NFxubWFwWzczMF0gPSAxNTRcbm1hcFs3MzNdID0gMTU0XG5tYXBbNzM2XSA9IDE1NVxubWFwWzczOV0gPSAxNTVcbm1hcFs3NDNdID0gMTU1XG5tYXBbNzQ2XSA9IDE1NVxubWFwWzc0OV0gPSAxNTVcbm1hcFs3NTFdID0gMTU3XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzc1MV0gPSAxNTVcbm1hcFs3NTRdID0gMTU1XG5tYXBbNzU2XSA9IDE1N1xubWFwWzc1OV0gPSAxNTdcbm1hcFs3NjFdID0gMTU5XG5tYXBbNzY0XSA9IDE1OVxubWFwWzc2NV0gPSAxNjBcbm1hcFs3NjddID0gMTYyXG5tYXBbNzcwXSA9IDE2MlxubWFwWzc3Ml0gPSAxNjRcbm1hcFs3NzVdID0gMTY0XG5tYXBbNzc3XSA9IDE2NVxubWFwWzc4MF0gPSAxNjdcbm1hcFs3ODNdID0gMTY3XG5tYXBbNzg1XSA9IDE2OFxubWFwWzc4OF0gPSAxNjhcbm1hcFs3OTBdID0gMTcwXG5tYXBbNzkzXSA9IDE3MFxubWFwWzc5NV0gPSAxNzJcbm1hcFs3OTddID0gMTczXG5tYXBbODAwXSA9IDE3M1xubWFwWzgwMV0gPSAxNzVcbm1hcFs4MDVdID0gMTc1XG5tYXBbODA2XSA9IDE3N1xubWFwWzgwOF0gPSAxNzhcbm1hcFs4MTFdID0gMTc4XG5tYXBbODEzXSA9IDE4MFxubWFwWzgxNV0gPSAxODJcbm1hcFs4MThdID0gMTgyXG5tYXBbODE5XSA9IDE4M1xubWFwWzgyMV0gPSAxODVcbm1hcFs4MjNdID0gMTg2XG5tYXBbODI2XSA9IDE4NlxubWFwWzgyOF0gPSAxODhcbm1hcFs4MjldID0gMTkwXG5tYXBbODMzXSA9IDE5MVxubWFwWzgzNF0gPSAxOTNcbm1hcFs4MzddID0gMTkzXG5tYXBbODM5XSA9IDE5NVxubWFwWzg0MV0gPSAxOTZcbm1hcFs4NDJdID0gMTk4XG5tYXBbODQ0XSA9IDIwMFxubWFwWzg0Nl0gPSAyMDFcbm1hcFs4NDddID0gMjAzXG5tYXBbODQ5XSA9IDIwNFxubWFwWzg1MV0gPSAyMDZcbm1hcFs4NTJdID0gMjA4XG5tYXBbODU0XSA9IDIwOVxubWFwWzg1N10gPSAyMTFcbm1hcFs4NTldID0gMjEzXG5tYXBbODYwXSA9IDIxNFxubWFwWzg2NF0gPSAyMTRcbm1hcFs4NjVdID0gMjE2XG5tYXBbODY3XSA9IDIxOFxubWFwWzg2OV0gPSAyMTlcbm1hcFs4NzBdID0gMjIxXG5tYXBbODcyXSA9IDIyMlxubWFwWzg3NV0gPSAyMjJcbm1hcFs4NzddID0gMjI0XG5tYXBbODc4XSA9IDIyNlxubWFwWzg3OF0gPSAyMjlcbm1hcFs4ODBdID0gMjMxXG5tYXBbODgyXSA9IDIzMlxubWFwWzg4M10gPSAyMzRcbm1hcFs4ODVdID0gMjM2XG5tYXBbODg3XSA9IDIzN1xubWFwWzg4OF0gPSAyMzlcbm1hcFs4OTBdID0gMjQwXG5tYXBbODkxXSA9IDI0MlxubWFwWzg5M10gPSAyNDRcbm1hcFs4OTVdID0gMjQ1XG5tYXBbODk2XSA9IDI0N1xubWFwWzg5OF0gPSAyNDlcbm1hcFs5MDBdID0gMjUwXG5tYXBbOTAxXSA9IDI1MlxubWFwWzkwM10gPSAyNTRcbm1hcFs5MDVdID0gMjU1XG5tYXBbOTA4XSA9IDI1N1xubWFwWzkwOV0gPSAyNThcbm1hcFs5MTNdID0gMjYwXG5tYXBbOTE2XSA9IDI2MFxubWFwWzkxOF0gPSAyNjJcbm1hcFs5MjFdID0gMjYyXG5tYXBbOTI0XSA9IDI2MlxubWFwWzkyN10gPSAyNjJcbm1hcFs5MzFdID0gMjYyXG5tYXBbOTMyXSA9IDI2M1xubWFwWzkzNF0gPSAyNjJcbm1hcFs5MzddID0gMjYyXG5tYXBbOTQxXSA9IDI2MlxubWFwWzk0NF0gPSAyNjJcbm1hcFs5NDddID0gMjYwXG5tYXBbOTUwXSA9IDI2MFxubWFwWzk1NF0gPSAyNThcbm1hcFs5NTddID0gMjU3XG5tYXBbOTYwXSA9IDI1NVxubWFwWzk2M10gPSAyNTRcbm1hcFs5NjddID0gMjUyXG5tYXBbOTcwXSA9IDI1MlxubWFwWzk3Ml0gPSAyNTBcbm1hcFs5NzNdID0gMjQ5XG5tYXBbOTc2XSA9IDI0OVxubWFwWzk4MF0gPSAyNDlcbm1hcFs5ODFdID0gMjQ3XG5tYXBbOTg1XSA9IDI0N1xubWFwWzk4Nl0gPSAyNDVcbm1hcFs5ODhdID0gMjQ0XG5tYXBbOTkxXSA9IDI0NFxubWFwWzk5M10gPSAyNDJcbm1hcFs5OTRdID0gMjQwXG5tYXBbOTk4XSA9IDI0MFxubWFwWzk5OV0gPSAyMzlcbm1hcFsxMDAxXSA9IDIzN1xubWFwWzEwMDRdID0gMjM2XG5tYXBbMTAwNl0gPSAyMzRcbm1hcFsxMDA5XSA9IDIzMlxubWFwWzEwMTFdID0gMjMxXG5tYXBbMTAxMl0gPSAyMjlcbm1hcFsxMDE0XSA9IDIyN1xubWFwWzEwMTddID0gMjI2XG5tYXBbMTAxOV0gPSAyMjRcbm1hcFsxMDIxXSA9IDIyMlxubWFwWzEwMjRdID0gMjIxXG5tYXBbMTAyNl0gPSAyMTlcbm1hcFsxMDI5XSA9IDIxOVxubWFwWzEwMzJdID0gMjIxXG5tYXBbMTAzNV0gPSAyMjJcbm1hcFsxMDM5XSA9IDIyMlxubWFwWzEwNDBdID0gMjI0XG5tYXBbMTA0Ml0gPSAyMjZcbm1hcFsxMDQ1XSA9IDIyNlxubWFwWzEwNDddID0gMjI3XG5tYXBbMTA0OF0gPSAyMjlcbm1hcFsxMDUyXSA9IDIyOVxubWFwWzEwNTNdID0gMjMxXG5tYXBbMTA1NV0gPSAyMzJcbm1hcFsxMDU4XSA9IDIzNFxubWFwWzEwNjBdID0gMjM2XG5tYXBbMTA2Ml0gPSAyMzdcbm1hcFsxMDY1XSA9IDIzOVxubWFwWzEwNjZdID0gMjQwXG5tYXBbMTA2OF0gPSAyNDJcbm1hcFsxMDcwXSA9IDI0NFxubWFwWzEwNzFdID0gMjQ1XG5tYXBbMTA3M10gPSAyNDdcbm1hcFsxMDc1XSA9IDI0OVxubWFwWzEwNzZdID0gMjUwXG5tYXBbMTA3OF0gPSAyNTJcbm1hcFsxMDgwXSA9IDI1NFxubWFwWzEwODFdID0gMjU1XG5tYXBbMTA4NF0gPSAyNTVcbm1hcFsxMDg4XSA9IDI1NVxubWFwWzEwOTFdID0gMjU1XG5tYXBbMTA5NF0gPSAyNTVcbm1hcFsxMDk2XSA9IDI1N1xubWFwWzEwOTldID0gMjU3XG5tYXBbMTEwMl0gPSAyNTdcbm1hcFsxMTA2XSA9IDI1N1xubWFwWzExMDldID0gMjU4XG5tYXBbMTExMl0gPSAyNTdcbm1hcFsxMTE2XSA9IDI1N1xubWFwWzExMTddID0gMjU4XG5tYXBbMTEyMF0gPSAyNThcbm1hcFsxMTI0XSA9IDI1OFxubWFwWzExMjddID0gMjU4XG5tYXBbMTEyOV0gPSAyNjBcbm1hcFsxMTMyXSA9IDI2MFxubWFwWzExMzVdID0gMjYwXG5tYXBbMTEzN10gPSAyNjJcbm1hcFsxMTQwXSA9IDI2MlxubWFwWzExNDNdID0gMjYzXG5tYXBbMTE0N10gPSAyNjNcbm1hcFsxMTUwXSA9IDI2M1xubWFwWzExNTNdID0gMjYzXG5tYXBbMTE1Nl0gPSAyNjNcbm1hcFsxMTYwXSA9IDI2NVxubWFwWzExNjNdID0gMjY1XG5tYXBbMTE2Nl0gPSAyNjVcbm1hcFsxMTY5XSA9IDI2NVxubWFwWzExNzNdID0gMjY1XG5tYXBbMTE3Nl0gPSAyNjVcbm1hcFsxMTc4XSA9IDI2N1xubWFwWzExODFdID0gMjY3XG5tYXBbMTE4NF0gPSAyNjdcbm1hcFsxMTg3XSA9IDI2N1xubWFwWzExOTFdID0gMjY3XG5tYXBbMTE5Ml0gPSAyNjhcbm1hcFsxMTk2XSA9IDI2OFxubWFwWzExOTldID0gMjY4XG5tYXBbMTIwMl0gPSAyNjhcbm1hcFsxMjA0XSA9IDI3MFxubWFwWzEyMDddID0gMjcwXG5tYXBbMTIxMF0gPSAyNzBcbm1hcFsxMjE0XSA9IDI3MFxubWFwWzEyMTVdID0gMjcyXG5tYXBbMTIxOV0gPSAyNzJcbm1hcFsxMjIyXSA9IDI3MlxubWFwWzEyMjVdID0gMjcyXG5tYXBbMTIyN10gPSAyNzNcbm1hcFsxMjMwXSA9IDI3M1xubWFwWzEyMzNdID0gMjczXG5tYXBbMTIzN10gPSAyNzNcbm1hcFsxMjQwXSA9IDI3M1xubWFwWzEyNDFdID0gMjc1XG5tYXBbMTI0NV0gPSAyNzVcbm1hcFsxMjQ4XSA9IDI3NVxubWFwWzEyNTFdID0gMjc1XG5tYXBbMTI1NV0gPSAyNzVcbm1hcFsxMjU4XSA9IDI3NVxubWFwWzEyNTldID0gMjc2XG5tYXBbMTI2M10gPSAyNzZcbm1hcFsxMjY2XSA9IDI3NlxubWFwWzEyNjldID0gMjc2XG5tYXBbMTI3M10gPSAyNzZcbm1hcFsxMjc2XSA9IDI3NlxubWFwWzEyNzddID0gMjc4XG5tYXBbMTI4MV0gPSAyNzhcbm1hcFsxMjg0XSA9IDI3OFxubWFwWzEyODddID0gMjc4XG5tYXBbMTI4OV0gPSAyODBcbm1hcFsxMjkyXSA9IDI4MFxubWFwWzEyOTVdID0gMjgwXG5tYXBbMTI5N10gPSAyODFcbm1hcFsxMzAwXSA9IDI4MVxubWFwWzEzMDJdID0gMjgzXG5tYXBbMTMwNV0gPSAyODVcbm1hcFsxMzA5XSA9IDI4NlxubWFwWzEzMTBdID0gMjg4XG5tYXBbMTMxM10gPSAyODhcbm1hcFsxMzE1XSA9IDI5MFxubWFwWzEzMTddID0gMjkxXG5tYXBbMTMyMF0gPSAyOTFcbm1hcFsxMzIyXSA9IDI5M1xubWFwWzEzMjNdID0gMjk0XG5tYXBbMTMyNV0gPSAyOTZcbm1hcFsxMzI4XSA9IDI5NlxubWFwWzEzMzBdID0gMjk4XG5tYXBbMTMzMV0gPSAyOTlcbm1hcFsxMzMzXSA9IDMwMVxubWFwWzEzMzZdID0gMzAzXG5tYXBbMTMzOF0gPSAzMDRcbm1hcFsxMzQxXSA9IDMwNFxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzEzNDFdID0gMzA0XG5tYXBbMTM0NF0gPSAzMDRcbm1hcFsxMzQ2XSA9IDMwNlxubWFwWzEzNDldID0gMzA2XG5tYXBbMTM1Ml0gPSAzMDZcbm1hcFsxMzU0XSA9IDMwOFxubWFwWzEzNTddID0gMzA4XG5tYXBbMTM2MF0gPSAzMDhcbm1hcFsxMzYyXSA9IDMwOVxubWFwWzEzNjVdID0gMzA5XG5tYXBbMTM2OV0gPSAzMDlcbm1hcFsxMzcwXSA9IDMxMVxubWFwWzEzNzNdID0gMzExXG5tYXBbMTM3N10gPSAzMTFcbm1hcFsxMzc4XSA9IDMxMlxubWFwWzEzODJdID0gMzEyXG5tYXBbMTM4NV0gPSAzMTJcbm1hcFsxMzg3XSA9IDMxNFxubWFwWzEzOTBdID0gMzE0XG5tYXBbMTM5M10gPSAzMTRcbm1hcFsxMzk1XSA9IDMxNlxubWFwWzEzOThdID0gMzE2XG5tYXBbMTQwMV0gPSAzMTZcbm1hcFsxNDA1XSA9IDMxNlxubWFwWzE0MDhdID0gMzE2XG5tYXBbMTQwOV0gPSAzMTdcbm1hcFsxNDEzXSA9IDMxN1xubWFwWzE0MTZdID0gMzE3XG5tYXBbMTQxOV0gPSAzMTdcbm1hcFsxNDIzXSA9IDMxN1xubWFwWzE0MjRdID0gMzE5XG5tYXBbMTQyN10gPSAzMTlcbm1hcFsxNDMxXSA9IDMxOVxubWFwWzE0MzJdID0gMzIxXG5tYXBbMTQzNl0gPSAzMjFcbm1hcFsxNDM5XSA9IDMyMVxubWFwWzE0NDFdID0gMzIyXG5tYXBbMTQ0NF0gPSAzMjJcbm1hcFsxNDQ3XSA9IDMyMlxubWFwWzE0NDldID0gMzI0XG5tYXBbMTQ1Ml0gPSAzMjRcbm1hcFsxNDU1XSA9IDMyNFxubWFwWzE0NTddID0gMzI2XG5tYXBbMTQ2MF0gPSAzMjZcbm1hcFsxNDYzXSA9IDMyNlxubWFwWzE0NjddID0gMzI2XG5tYXBbMTQ3MF0gPSAzMjZcbm1hcFsxNDczXSA9IDMyNlxubWFwWzE0NzZdID0gMzI2XG5tYXBbMTQ4MF0gPSAzMjZcbm1hcFsxNDgzXSA9IDMyNlxubWFwWzE0ODZdID0gMzI2XG5tYXBbMTQ5MF0gPSAzMjZcbm1hcFsxNDkzXSA9IDMyNlxubWFwWzE0OTZdID0gMzI2XG5tYXBbMTQ5OV0gPSAzMjZcbm1hcFsxNTAzXSA9IDMyNlxubWFwWzE1MDZdID0gMzI2XG5tYXBbMTUwOF0gPSAzMjRcbm1hcFsxNTExXSA9IDMyNFxubWFwWzE1MTRdID0gMzI0XG5tYXBbMTUxN10gPSAzMjRcbm1hcFsxNTE5XSA9IDMyMlxubWFwWzE1MjJdID0gMzIyXG5tYXBbMTUyNl0gPSAzMjJcbm1hcFsxNTI3XSA9IDMyMVxubWFwWzE1MjddID0gMzIxXG5tYXBbMTUzMF0gPSAzMjFcbm1hcFsxNTM0XSA9IDMyMVxubWFwWzE1MzddID0gMzIxXG5tYXBbMTU0MF0gPSAzMjFcbm1hcFsxNTQ0XSA9IDMyMVxubWFwWzE1NDddID0gMzIxXG5tYXBbMTU1MF0gPSAzMjFcbm1hcFsxNTUyXSA9IDMxOVxubWFwWzE1NTVdID0gMzE5XG5tYXBbMTU1N10gPSAzMTdcbm1hcFsxNTYwXSA9IDMxN1xubWFwWzE1NjJdID0gMzE2XG5tYXBbMTU2NV0gPSAzMTZcbm1hcFsxNTY2XSA9IDMxNFxubWFwWzE1NzBdID0gMzE0XG5tYXBbMTU3M10gPSAzMTRcbm1hcFsxNTc1XSA9IDMxMlxubWFwWzE1NzhdID0gMzEyXG5tYXBbMTU4MV0gPSAzMTFcbm1hcFsxNTg0XSA9IDMxMVxubWFwWzE1ODhdID0gMzA5XG5tYXBbMTU5MV0gPSAzMDlcbm1hcFsxNTk0XSA9IDMwOVxubWFwWzE1OTZdID0gMzA4XG5tYXBbMTU5OV0gPSAzMDhcbm1hcFsxNjAxXSA9IDMwOFxubWFwWzE2MDFdID0gMzA4XG5tYXBbMTYwNF0gPSAzMDhcbm1hcFsxNjA2XSA9IDMwNlxubWFwWzE2MDldID0gMzA2XG5tYXBbMTYxMl0gPSAzMDRcbm1hcFsxNjE2XSA9IDMwNFxubWFwWzE2MTddID0gMzAzXG5tYXBbMTYyMF0gPSAzMDNcbm1hcFsxNjI0XSA9IDMwM1xubWFwWzE2MjddID0gMzAzXG5tYXBbMTYyOV0gPSAzMDFcbm1hcFsxNjMyXSA9IDMwMVxubWFwWzE2MzVdID0gMzAxXG5tYXBbMTYzN10gPSAyOTlcbm1hcFsxNjQwXSA9IDI5OVxubWFwWzE2NDNdID0gMjk5XG5tYXBbMTY0N10gPSAyOTlcbm1hcFsxNjUwXSA9IDI5OVxubWFwWzE2NTJdID0gMjk4XG5tYXBbMTY1NV0gPSAyOThcbm1hcFsxNjU4XSA9IDI5OFxubWFwWzE2NjFdID0gMjk4XG5tYXBbMTY2NV0gPSAyOThcbm1hcFsxNjY2XSA9IDI5NlxubWFwWzE2NjldID0gMjk2XG5tYXBbMTY3M10gPSAyOTZcbm1hcFsxNjc0XSA9IDI5NFxubWFwWzE2NzZdID0gMjk0XG5tYXBbMTY3OV0gPSAyOTRcbm1hcFsxNjgzXSA9IDI5NFxubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4N10gPSAyOTNcbm1hcFsxNjkxXSA9IDI5M1xubWFwWzE2OTRdID0gMjkzXG5tYXBbMTY5N10gPSAyOTNcbm1hcFsxNzAxXSA9IDI5M1xubWFwWzE3MDVdID0gMjkxXG5tYXBbMTcwOV0gPSAyOTFcbm1hcFsxNzEyXSA9IDI5MVxubWFwWzE3MTVdID0gMjkxXG5tYXBbMTcxOV0gPSAyOTFcbm1hcFsxNzIyXSA9IDI5MVxubWFwWzE3MjVdID0gMjkxXG5tYXBbMTcyOF0gPSAyOTFcbm1hcFsxNzMyXSA9IDI5MVxubWFwWzE3MzVdID0gMjkxXG5tYXBbMTczOF0gPSAyOTFcbm1hcFsxNzQxXSA9IDI5MVxubWFwWzE3NDVdID0gMjkxXG5tYXBbMTc0Nl0gPSAyOTBcbm1hcFsxNzUwXSA9IDI5MFxubWFwWzE3NTNdID0gMjkwXG5tYXBbMTc1Nl0gPSAyOTBcbm1hcFsxNzU5XSA9IDI5MFxubWFwWzE3NjNdID0gMjkwXG5tYXBbMTc2Nl0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzczXSA9IDI5MFxubWFwWzE3NzZdID0gMjkwXG5tYXBbMTc3OV0gPSAyOTBcbm1hcFsxNzgyXSA9IDI5MFxubWFwWzE3ODZdID0gMjkwXG5tYXBbMTc4OV0gPSAyOTBcbm1hcFsxNzkyXSA9IDI5MFxubWFwWzE3OTVdID0gMjkwXG5tYXBbMTc5OV0gPSAyOTBcbm1hcFsxODAyXSA9IDI5MFxubWFwWzE4MDVdID0gMjkwXG5tYXBbMTgwOV0gPSAyOTBcbm1hcFsxODEyXSA9IDI5MFxubWFwWzE4MTNdID0gMjg4XG5tYXBbMTgxN10gPSAyODhcbm1hcFsxODIwXSA9IDI4OFxubWFwWzE4MjNdID0gMjg4XG5tYXBbMTgyN10gPSAyODhcbm1hcFsxODMwXSA9IDI4OFxubWFwWzE4MzNdID0gMjg4XG5tYXBbMTgzNl0gPSAyOTBcbm1hcFsxODQwXSA9IDI5MFxubWFwWzE4NDFdID0gMjkwXG5tYXBbMTg0NV0gPSAyOTBcbm1hcFsxODQ4XSA9IDI5MFxubWFwWzE4NTFdID0gMjkwXG5tYXBbMTg1M10gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU5XSA9IDI5MVxubWFwWzE4NjNdID0gMjkxXG5tYXBbMTg2Nl0gPSAyOTFcbm1hcFsxODY3XSA9IDI5MVxubWFwWzE4NjldID0gMjkzXG5tYXBbMTg3Ml0gPSAyOTNcbm1hcFsxODc2XSA9IDI5M1xubWFwWzE4NzZdID0gMjkzXG5tYXBbMTg3N10gPSAyOTNcbm1hcFsxODgwXSA9IDI5M1xuIiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXHJcblxyXG4vKlxyXG4qIOa4uOaIj+WIneWni+WMlumFjee9rjtcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbmZpZ3tcclxuICAgIHN0YXRpYyB3aWR0aDpudW1iZXI9NTEyO1xyXG4gICAgc3RhdGljIGhlaWdodDpudW1iZXI9NzY4O1xyXG4gICAgc3RhdGljIHNjYWxlTW9kZTpzdHJpbmc9XCJub2JvcmRlclwiO1xyXG4gICAgc3RhdGljIHNjcmVlbk1vZGU6c3RyaW5nPVwidmVydGljYWxcIjtcclxuICAgIHN0YXRpYyBhbGlnblY6c3RyaW5nPVwidG9wXCI7XHJcbiAgICBzdGF0aWMgYWxpZ25IOnN0cmluZz1cImNlbnRlclwiO1xyXG4gICAgc3RhdGljIHN0YXJ0U2NlbmU6YW55PVwiZGlhbG9nL0xvYWRpbmdEaWFsb2cuc2NlbmVcIjtcclxuICAgIHN0YXRpYyBzY2VuZVJvb3Q6c3RyaW5nPVwiXCI7XHJcbiAgICBzdGF0aWMgZGVidWc6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBzdGF0OmJvb2xlYW49ZmFsc2U7XHJcbiAgICBzdGF0aWMgcGh5c2ljc0RlYnVnOmJvb2xlYW49dHJ1ZTtcclxuICAgIHN0YXRpYyBleHBvcnRTY2VuZVRvSnNvbjpib29sZWFuPXRydWU7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe31cclxuICAgIHN0YXRpYyBpbml0KCl7XHJcbiAgICAgICAgdmFyIHJlZzogRnVuY3Rpb24gPSBMYXlhLkNsYXNzVXRpbHMucmVnQ2xhc3M7XHJcblxyXG4gICAgfVxyXG59XHJcbkdhbWVDb25maWcuaW5pdCgpOyIsImltcG9ydCB7IHVpIH0gZnJvbSBcIi4vdWkvbGF5YU1heFVJXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nRGlhbG9nIGV4dGVuZHMgdWkuZGlhbG9nLkxvYWRpbmdEaWFsb2dVSSB7XG4gICAgcHJpdmF0ZSBwcm9ncmVzcyA9IDBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYXV0b0Rlc3Ryb3lBdENsb3NlZCA9IHRydWVcbiAgICAgICAgdGhpcy5pc1BvcHVwQ2VudGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5wb3MoMCwgKExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLSAyMDApLzIpXG4gICAgfVxuXG4gICAgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3NWYWx1ZSgwKVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VQcm9ncmVzc1ZhbHVlKHByb2dyZXNzOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzXG4gICAgICAgIGlmICh0aGlzLmxvYWRpbmdQcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nUHJvZ3Jlc3NCYXIudmFsdWUgPSBwcm9ncmVzc1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVUaXAodGlwOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXBMYWJlbC50ZXh0ID0gdGlwXG4gICAgfVxufSIsImltcG9ydCBHYW1lQ29uZmlnIGZyb20gXCIuL0dhbWVDb25maWdcIjtcclxuaW1wb3J0IFNjcmVlbjFCYWNrR3JvdW5kIGZyb20gXCIuL1NjcmVlbjFCYWNrR3JvdW5kXCI7XHJcbmltcG9ydCBGb290YmFsbCBmcm9tIFwiLi9Gb290YmFsbFwiO1xyXG5pbXBvcnQgQmFza2V0YmFsbCBmcm9tIFwiLi9iYXNrZXRiYWxsXCI7XHJcbmltcG9ydCBydW5uaW5nIGZyb20gXCIuL3J1bm5pbmdcIjtcclxuaW1wb3J0IHN3aW1taW5nIGZyb20gXCIuL3N3aW1taW5nXCI7XHJcbmltcG9ydCBwYWdlM3J1biBmcm9tIFwiLi9wYWdlM19ydW5tYW5cIjtcclxuaW1wb3J0IHBhZ2UxZTJzIGZyb20gXCIuL3BhZ2UxJjJcIjtcclxuaW1wb3J0IHBhZ2UyZTNzIGZyb20gXCIuL3BhZ2UyJjNcIjtcclxuaW1wb3J0IHBhZ2UzZTRzIGZyb20gXCIuL3BhZ2UzJjRcIjtcclxuaW1wb3J0IHBhZ2U0ZTVzIGZyb20gXCIuL3BhZ2U0JjVcIjtcclxuaW1wb3J0IHsgZ2V0Rm9vdGJhbGxYIH0gZnJvbSBcIi4vRm9vdGJhbGxQYXRoXCI7XHJcbmltcG9ydCB7IFF1ZXN0aW9uRGlhbG9nIH0gZnJvbSBcIi4vUXVlc3Rpb25EaWFsb2dcIjtcclxuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25EYXRhLCBRdWVzdGlvbkl0ZW0sIFF1ZXN0aW9uU2hvd1kgfSBmcm9tIFwiLi9RdWVzdGlvbkRhdGFcIjtcclxuaW1wb3J0IExvYWRpbmdEaWFsb2cgZnJvbSBcIi4vTG9hZGluZ0RpYWxvZ1wiO1xyXG5pbXBvcnQgU2hha2VEaWFsb2cgZnJvbSBcIi4vU2hha2VEaWFsb2dcIjtcclxuaW1wb3J0IFNjcm9sbERpYWxvZywgeyBUaXBUeXBlIH0gZnJvbSBcIi4vU2Nyb2xsRGlhbG9nXCI7XHJcbmltcG9ydCBTY29yZVJlc3VsdERpYWxvZyBmcm9tIFwiLi9TY29yZVJlc3VsdERpYWxvZ1wiO1xyXG5jbGFzcyBNYWluIHtcclxuXHRwcml2YXRlIGZvb3RiYWxsOiBGb290YmFsbFxyXG5cdHByaXZhdGUgYmFza2V0YmFsbDogQmFza2V0YmFsbFxyXG5cdHByaXZhdGUgcnVubmluZzogcnVubmluZ1xyXG5cdHByaXZhdGUgc3dpbW1pbmc6IHN3aW1taW5nXHJcblx0cHJpdmF0ZSBwYWdlM3J1bjogcGFnZTNydW5cclxuXHRwcml2YXRlIHBhZ2UxZTJzOiBwYWdlMWUyc1xyXG5cdHByaXZhdGUgcGFnZTJlM3M6IHBhZ2UyZTNzXHJcblx0cHJpdmF0ZSBwYWdlM2U0czogcGFnZTNlNHNcclxuXHRwcml2YXRlIHBhZ2U0ZTVzOiBwYWdlNGU1c1xyXG5cclxuXHJcblx0cHJpdmF0ZSBzY3JlZW4xQmFja0dyb3VuZDogU2NyZWVuMUJhY2tHcm91bmRcclxuXHRwcml2YXRlIGRyYWdSZWdpb246IExheWEuUmVjdGFuZ2xlXHJcblxyXG5cdHByaXZhdGUgc2hha2VDb3VudDogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHNoYWtlQ291bnQyOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDM6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50NDogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHNoYWtlQ291bnQ1OiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmkgPSBmYWxzZTtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pMiA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmkzID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaTQgPSBmYWxzZTtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pNSA9IGZhbHNlO1xyXG5cclxuXHJcblx0cHJpdmF0ZSBjb25zb2xlOiBMYXlhLlRleHQ7XHJcblxyXG5cclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbkluZGV4TGlzdCA9IG5ldyBBcnJheTxudW1iZXI+KClcdC8vIOW3sue7j+aYvuekuueahOmXrumimGluZGV45YiX6KGoXHJcblx0cHJpdmF0ZSBzaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHJcblxyXG5cdHByaXZhdGUgbG9hZGluZ0RpYWxvZzogTG9hZGluZ0RpYWxvZ1x0Ly8g5pi+56S65Yqg6L296L+b5bqm5p2hXHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzI6IFNoYWtlRGlhbG9nXHRcdC8vIOaYvuekuuaRh+S4gOaRh+aPkOekulxyXG5cdHByaXZhdGUgc2hha2VEaWFsb2czOiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nNDogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzU6IFNoYWtlRGlhbG9nXHRcdC8vIOaYvuekuuaRh+S4gOaRh+aPkOekulxyXG5cdHByaXZhdGUgYmdtU291bmRDaGFubmVsOiBMYXlhLlNvdW5kQ2hhbm5lbFxyXG5cclxuXHRwcml2YXRlIHF1ZXN0aW9uU2NvcmU6IG51bWJlciBcdFx0XHQvLyDlm57nrZTpl67popjnmoTliIbmlbBcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly8gd2FybmluZzog56ys5LiJ5Liq5Y+C5pWw5LiN6KaB5L2/55SoV2ViR0zvvIzlvZPog4zmma/lpKrplb/nmoTml7blgJnlnKhpUGhvbmXkuIrkvJrmnInpnZ7luLjkuKXph43nmoTplK/pvb9cclxuXHRcdExheWEuaW5pdChDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLnN0YXRlSGVpZ2h0LCBMYXlhW1wiXCJdKTtcclxuXHJcblx0XHRMYXlhW1wiUGh5c2ljc1wiXSAmJiBMYXlhW1wiUGh5c2ljc1wiXS5lbmFibGUoKTtcclxuXHRcdExheWFbXCJEZWJ1Z1BhbmVsXCJdICYmIExheWFbXCJEZWJ1Z1BhbmVsXCJdLmVuYWJsZSgpO1xyXG5cdFx0TGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBDb25zdGFudHMuc2NhbGVNb2RlO1xyXG5cdFx0TGF5YS5zdGFnZS5zY3JlZW5Nb2RlID0gQ29uc3RhbnRzLnNjcmVlbk1vZGU7XHJcblx0XHQvL+WFvOWuueW+ruS/oeS4jeaUr+aMgeWKoOi9vXNjZW5l5ZCO57yA5Zy65pmvXHJcblx0XHRMYXlhLlVSTC5leHBvcnRTY2VuZVRvSnNvbiA9IEdhbWVDb25maWcuZXhwb3J0U2NlbmVUb0pzb247XHJcblxyXG5cdFx0Ly/miZPlvIDosIPor5XpnaLmnb/vvIjpgJrov4dJREXorr7nva7osIPor5XmqKHlvI/vvIzmiJbogIV1cmzlnLDlnYDlop7liqBkZWJ1Zz10cnVl5Y+C5pWw77yM5Z2H5Y+v5omT5byA6LCD6K+V6Z2i5p2/77yJXHJcblx0XHRpZiAoR2FtZUNvbmZpZy5kZWJ1ZyB8fCBMYXlhLlV0aWxzLmdldFF1ZXJ5U3RyaW5nKFwiZGVidWdcIikgPT0gXCJ0cnVlXCIpIExheWEuZW5hYmxlRGVidWdQYW5lbCgpO1xyXG5cdFx0aWYgKEdhbWVDb25maWcucGh5c2ljc0RlYnVnICYmIExheWFbXCJQaHlzaWNzRGVidWdEcmF3XCJdKSBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXS5lbmFibGUoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnN0YXQpIExheWEuU3RhdC5zaG93KCk7XHJcblx0XHRMYXlhLmFsZXJ0R2xvYmFsRXJyb3IgPSB0cnVlO1xyXG5cclxuXHRcdC8v5r+A5rS76LWE5rqQ54mI5pys5o6n5Yi277yMdmVyc2lvbi5qc29u55SxSURF5Y+R5biD5Yqf6IO96Ieq5Yqo55Sf5oiQ77yM5aaC5p6c5rKh5pyJ5Lmf5LiN5b2x5ZON5ZCO57ut5rWB56iLXHJcblx0XHRMYXlhLlJlc291cmNlVmVyc2lvbi5lbmFibGUoXCJ2ZXJzaW9uLmpzb25cIiwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVmVyc2lvbkxvYWRlZCksIExheWEuUmVzb3VyY2VWZXJzaW9uLkZJTEVOQU1FX1ZFUlNJT04pO1xyXG5cclxuXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRVSUNvbmZpZy5wb3B1cEJnQ29sb3IgPSBcIiMwMDAwMDBcIlxyXG5cdFx0VUlDb25maWcucG9wdXBCZ0FscGhhID0gMC44XHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblxyXG5cclxuXHRcdExheWEuc3RhZ2UuYmdDb2xvciA9IFwid2hpdGVcIlxyXG5cclxuXHJcblxyXG5cdFx0dGhpcy5sb2FkUHJvZ2Vzc0Fzc2V0cygpXHJcblxyXG5cdFx0Ly8g6ZyA6KaB5pi+56S66LCD6K+V5L+h5oGv5Y+v5Lul5omT5byA6L+Z6YeMXHJcblx0XHR0aGlzLnNob3dDb25zb2xlVGV4dChmYWxzZSk7XHJcblxyXG5cdFx0dGhpcy5xdWVzdGlvblNjb3JlID0gMFxyXG5cclxuXHR9XHJcblxyXG5cdG9uVmVyc2lvbkxvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8v5r+A5rS75aSn5bCP5Zu+5pig5bCE77yM5Yqg6L295bCP5Zu+55qE5pe25YCZ77yM5aaC5p6c5Y+R546w5bCP5Zu+5Zyo5aSn5Zu+5ZCI6ZuG6YeM6Z2i77yM5YiZ5LyY5YWI5Yqg6L295aSn5Zu+5ZCI6ZuG77yM6ICM5LiN5piv5bCP5Zu+XHJcblx0XHRMYXlhLkF0bGFzSW5mb01hbmFnZXIuZW5hYmxlKFwiZmlsZWNvbmZpZy5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNvbmZpZ0xvYWRlZCkpO1xyXG5cdH1cclxuXHJcblx0b25Db25maWdMb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+WKoOi9vUlEReaMh+WumueahOWcuuaZr1xyXG5cdFx0Ly8gR2FtZUNvbmZpZy5zdGFydFNjZW5lICYmIExheWEuU2NlbmUub3BlbihHYW1lQ29uZmlnLnN0YXJ0U2NlbmUpO1xyXG5cdH1cclxuXHJcblx0bG9hZFByb2dlc3NBc3NldHMoKTogdm9pZCB7XHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKFtcInJlcy9hdGxhcy9jb21wLmF0bGFzXCJdLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCkpXHJcblx0fVxyXG5cclxuXHRsb2FkT3RoZXJBc3NldHMoKTogdm9pZCB7XHJcblx0XHRjb25zdCBhc3NldHM6IEFycmF5PGFueT4gPSBbXVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuYmFja2dyb3VuZDMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLmJhY2tncm91bmQ1LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBcInJlcy9hdGxhcy9zcG9ydHMuYXRsYXNcIixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuQVRMQVNcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZEJnbTgsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc2NvcmUxLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNjb3JlMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zY29yZTMsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc2NvcmU0LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblxyXG5cdFx0Ly8g6aKE5Yqg6L296LWE5rqQXHJcblx0XHRMYXlhLmxvYWRlci5sb2FkKGFzc2V0cywgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGVkKSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQXNzZXRzTG9hZGluZywgbnVsbCwgZmFsc2UpKVxyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuXHJcblx0Ly8g5b+F6ZyA5YWI5Yqg6L296L+b5bqm5p2h6LWE5rqQ5omN6IO95pi+56S66L+b5bqm5p2hXHJcblx0b25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8vIOaYvuekuui/m+W6puadoVxyXG5cclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZyA9IG5ldyBMb2FkaW5nRGlhbG9nKClcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5wb3B1cCgpXHJcblx0XHR0aGlzLmxvYWRPdGhlckFzc2V0cygpXHJcblx0fVxyXG5cclxuXHRvbkFzc2V0c0xvYWRpbmcocHJvZ3Jlc3M6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCLliqDovb3ov5vluqY6IFwiICsgcHJvZ3Jlc3MpO1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLmNoYW5nZVByb2dyZXNzVmFsdWUocHJvZ3Jlc3MpXHJcblx0fVxyXG5cclxuXHRvbkFzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5jbG9zZSgpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn6LWE5rqQ5Yqg6L295a6M5oiQ44CCJztcclxuXHJcblx0XHR0aGlzLnNob3dUaXBEaWFsb2coXCJzY3JvbGxcIilcclxuXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kID0gbmV3IFNjcmVlbjFCYWNrR3JvdW5kKClcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5zY3JlZW4xQmFja0dyb3VuZClcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5EUkFHX01PVkUsIHRoaXMsIHRoaXMub25CYWNrZ3JvdW5kTW92ZSlcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5EUkFHX1NUQVJULCB0aGlzLCB0aGlzLm9uQmFja2dyb3VuZFN0YXJ0TW92ZSlcclxuXHJcblx0XHR0aGlzLmZvb3RiYWxsID0gbmV3IEZvb3RiYWxsKClcclxuXHRcdHRoaXMuZm9vdGJhbGwucG9zKDMyNywgMjMzKVx0Ly8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuZm9vdGJhbGwpXHJcblx0XHR0aGlzLmJhc2tldGJhbGwgPSBuZXcgQmFza2V0YmFsbCgpXHJcblx0XHR0aGlzLmJhc2tldGJhbGwucG9zKDMwMCwgNTAwKVx0Ly8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuYmFza2V0YmFsbClcclxuXHRcdHRoaXMucnVubmluZyA9IG5ldyBydW5uaW5nKClcclxuXHRcdHRoaXMucnVubmluZy5wb3MoMjUwLCAyMDApXHQvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5ydW5uaW5nKVxyXG5cdFx0dGhpcy5zd2ltbWluZyA9IG5ldyBzd2ltbWluZygpXHJcblx0XHR0aGlzLnN3aW1taW5nLnBvcygyNTYsIDUwMClcdC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnN3aW1taW5nKVxyXG5cdFx0dGhpcy5wYWdlM3J1biA9IG5ldyBwYWdlM3J1bigpXHJcblx0XHR0aGlzLnBhZ2UzcnVuLnBvcygzMDAsIDg1MCkgLy8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTNydW4pXHJcblx0XHR0aGlzLnBhZ2UxZTJzID0gbmV3IHBhZ2UxZTJzKClcclxuXHRcdHRoaXMucGFnZTFlMnMucG9zKDI1MCwgNTAwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlMWUycylcclxuXHRcdHRoaXMucGFnZTJlM3MgPSBuZXcgcGFnZTJlM3MoKVxyXG5cdFx0dGhpcy5wYWdlMmUzcy5wb3MoMjUwLCA1MDApIC8vIOWIneWni+S9jee9rlxyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2UyZTNzKVxyXG5cdFx0dGhpcy5wYWdlM2U0cyA9IG5ldyBwYWdlM2U0cygpXHJcblx0XHR0aGlzLnBhZ2UzZTRzLnBvcygyNzAsIDcwMCkgLy8g5Yid5aeL5L2N572uXHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTNlNHMpXHJcblx0XHR0aGlzLnBhZ2U0ZTVzID0gbmV3IHBhZ2U0ZTVzKClcclxuXHRcdHRoaXMucGFnZTRlNXMucG9zKDI1MCwgNzAwKSAvLyDliJ3lp4vkvY3nva5cclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlNGU1cylcclxuXHRcdGNvbnNvbGUubG9nKFwib25Bc3NldHNMb2FkZWRcIiwgTGF5YS5zdGFnZS5oZWlnaHQsIExheWEuQnJvd3Nlci5oZWlnaHQsIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQpXHJcblxyXG5cdFx0Ly8g6K6h566X6IOM5pmv5Y+v5ouW5Yqo5Yy65Z+fXHJcblx0XHRjb25zdCBtb2FibGVIZWlnaHQgPSBMYXlhLnN0YWdlLmhlaWdodCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdHRoaXMuZHJhZ1JlZ2lvbiA9IG5ldyBMYXlhLlJlY3RhbmdsZSgwLCAtbW9hYmxlSGVpZ2h0LCAwLCBtb2FibGVIZWlnaHQpXHJcblxyXG5cdFx0Ly8gTGF5YS5zdGFnZS5vbihMYXlhLkV2ZW50Lk1PVVNFX01PVkUsIHRoaXMsIHRoaXMub25Nb3VzZU1vdmUpXHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vblN0YXJ0RHJhZylcclxuXHJcblx0XHQvLyDmkq3mlL7og4zmma/pn7PkuZBcclxuXHRcdC8vIHRoaXMuYmdtU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKENvbnN0YW50cy5zb3VuZEJnbTgsIDApXHJcblx0fVxyXG5cclxuXHRvbkVycm9yKGVycjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veWksei0pTogXCIgKyBlcnIpO1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLnVwZGF0ZVRpcChcIuWKoOi9veWksei0pTogXCIgKyBlcnIpXHJcblx0fVxyXG5cclxuXHRvbk1vdXNlTW92ZSgpOiB2b2lkIHtcclxuXHRcdC8vIOWni+e7iOS/neaMgeS4u+inkuWSjOm8oOagh+S9jee9ruS4gOiHtFxyXG5cdFx0Ly8gdGhpcy5mb290YmFsbC5wb3MoTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbk1vdXNlTW92ZVwiLCBMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0XHQvLyBjb25zb2xlLmxvZyhgbWFwWyR7dGhpcy5zY3JlZW4xQmFja0dyb3VuZC55fV0gPSAke0xheWEuc3RhZ2UubW91c2VYfWApXHJcblx0XHR0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpXHJcblx0fVxyXG5cclxuXHRvblN0YXJ0RHJhZygpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib25TdGFydERyYWdcIiwgTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKVxyXG5cdFx0aWYgKHRoaXMuc2hvd2luZ0RpYWxvZykge1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0YXJ0RHJhZyh0aGlzLmRyYWdSZWdpb24sIGZhbHNlLCAwKVxyXG5cdH1cclxuXHJcblx0b25CYWNrZ3JvdW5kU3RhcnRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8gVE9ETzog6L+Z6YeM5ZCM5qC36KaB5YGa5LiA5Lqb6IO95ZCm5ouW5Yqo55qE5Yik5pat77yMb25CYWNrZ3JvdW5kTW92ZemDqOWIhumAu+i+keS5n+mAguW6lOS6juatpOaWueazlVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHRvbkJhY2tncm91bmRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbkJhY2tncm91bmRNb3ZlXCIsIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueCwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55LCB0aGlzLmZvb3RiYWxsLngsIHRoaXMuZm9vdGJhbGwueSlcclxuXHJcblx0XHQvLyDmmL7npLrpl67pophcclxuXHRcdGNvbnN0IG5lZWRTaG93UXVlc3Rpb24gPSB0aGlzLnNob3dRdWVzdGlvbkRpYWxvZ0lmTmVlZCh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkpXHJcblx0XHRpZiAobmVlZFNob3dRdWVzdGlvbikge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVE9ETzog5qC55o2u5a6e6ZmF5oOF5Ya15pi+56S654K55Ye75o+Q56S6XHJcblx0XHQvLyB0aGlzLnNob3dUaXBEaWFsb2coXCJjbGlja193aGl0ZVwiKVxyXG5cdFx0Ly8gdGhpcy5zaG93VGlwRGlhbG9nKFwiY2xpY2tfYmxhY2tcIilcclxuXHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTMwMCkge1x0Ly8g5LiN57uZ5ouW5Yqo77yMXGLmkYfkuIDmkYfmmL7npLrlsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZygpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTYzMjApIHtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkyKSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/hzLliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4cy5Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzIoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC05NDAwKSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pMykge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4cz5Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+HM+WKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpXHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2czKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTI5MzApIHtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk0KSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/hzTliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4c05Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKClcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzQoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNTgzMCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTUpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HNeWKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzXliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKVxyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nNSgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC04MDApIHsgLy8g6ZqQ6JeP6Laz55CDXHJcblx0XHRcdHRoaXMuZm9vdGJhbGwuaGlkZSgpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmZvb3RiYWxsLnNob3coKVxyXG5cdFx0XHQvLyDnp7vliqjotrPnkIPkvY3nva5cclxuXHRcdFx0Ly8gY29uc3QgeSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzJcclxuXHRcdFx0bGV0IHk6IG51bWJlciA9IDA7XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCAxMDMyKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDg1MCkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTMwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPCA3MzApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDE1MDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIpIDwgNTgwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxODA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyKSA8IDQzNSkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMikgPiAxMDMyKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzI7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgeCA9IGdldEZvb3RiYWxsWCh5KVxyXG5cdFx0XHRpZiAoeCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC55ID0geVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwucG9zKHgsIHkpXHJcblx0XHRcdH1cclxuXHRcdFx0Ly8g5Yik5pat6Laz55CD5piv5ZCm6ZyA6KaB5peL6L2sXHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU4NSkge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwuc3RvcFJvdGF0ZSgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC5wbGF5Um90YXRlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+Y3VwIGFuaVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjdXBcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjdXBcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY3VwXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY3VwXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyDliKTmlq3mmK/lkKbpnIDopoHmkq3mlL7lj6Plk6jliqjnlLtcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2hpc3RsZVwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIndoaXN0bGVcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2hpc3RsZVwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcIndoaXN0bGVcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2hpc3RsZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0yMTI1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMjMyNSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwMlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDAyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTMwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNob3RcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInNob3RcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE3MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0yNjQ1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2luXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2luXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0yNjQwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDYwMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDI2MzApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0dGhpcy5wYWdlMWUycy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdC8vcGFnZTJcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ1MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01NDMwKSB7XHJcblx0XHRcdHRoaXMucnVubmluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA0NTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdHRoaXMucnVubmluZy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuZ29QYXRoKDgxKVxyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDYwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUxNTUpIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwicGFnZTJfc3RhcnRcIilcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInBhZ2UyX3N0YXJ0MVwiKVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDUyMiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ2MjEpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImR1bWJiZWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZHVtYmJlbGxcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZHVtYmJlbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJkdW1iYmVsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDk1NyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUwMTApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImVxdWlwbWVudFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImVxdWlwbWVudFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlcXVpcG1lbnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJlcXVpcG1lbnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNTE5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUyNjgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY2xvY2tcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiY2xvY2tcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJjbG9ja1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01NDU0ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNTYwMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwNFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwNFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU3MjUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01ODY2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlbGVjdHJpY21hblwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImVsZWN0cmljbWFuXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImVsZWN0cmljbWFuXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZWxlY3RyaWNtYW5cIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjMzMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTgxMDApIHtcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA2MzMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdHRoaXMucGFnZTJlM3MuZ29QYXRoKHogLSAwKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5wYWdlMmUzcy5oaWRlKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9wYWdlM1xyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgyMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04OTUwKSB7XHJcblx0XHRcdHRoaXMucGFnZTNydW4uc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gODIwMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmdvUGF0aCh6IC0gMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgxMDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NDcwKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInBhZ2UzX3N0YXJ0XCIpXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJwYWdlM19zdGFydDFcIilcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTgzNDggJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC04NDE1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJtZWRhbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIm1lZGFsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIm1lZGFsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibWVkYWxcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODYyNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg3MjMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic3RhZ2VcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic3RhZ2VcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzdGFnZVwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC05MTMxICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtOTE5MSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDhcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwOFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA4XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLSA5NjMwJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTE5MCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDk2MzApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeilcclxuXHRcdFx0dGhpcy5wYWdlM2U0cy5nb1BhdGgoeiAtIDApXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLmhpZGUoKTtcclxuXHRcdH1cclxuXHJcblx0XHQvL3BhZ2U0XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTE5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExNjcwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJoZWFydFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImhlYXJ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhlYXJ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiaGVhcnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMTkwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTMwNDApIHtcclxuXHRcdFx0dGhpcy5zd2ltbWluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAxMTE5MCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLnN3aW1taW5nLmdvUGF0aCh6IC0gMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTExNjIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTIzMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMTJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAxMlwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAxMlwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDEyXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMzc2ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTE0NDkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYm9hcmRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJib2FyZFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTc0MyAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExODA3KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2FsbFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjA2NiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyMTI2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiZ29nZ2xlc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjQwNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyNTE4KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3YXRlckxlZnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3YXRlckxlZnRcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2F0ZXJMZWZ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2F0ZXJMZWZ0XCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTEyOTYwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ3OTApIHtcclxuXHRcdFx0dGhpcy5wYWdlNGU1cy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAxMjgzMCkgLyAxMCArICcnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3o6ICcgKyB6KVxyXG5cdFx0XHR0aGlzLnBhZ2U0ZTVzLmdvUGF0aCh6IC0gMClcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZTRlNXMuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vcGFnZTVcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0OTMwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTU1MzApIHtcclxuXHRcdFx0dGhpcy5iYXNrZXRiYWxsLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDE0OTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopXHJcblx0XHRcdHRoaXMuYmFza2V0YmFsbC5nb1BhdGgoeiAtIDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5iYXNrZXRiYWxsLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0NzkwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTUzMTUpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJiYWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImJhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJiYWxsXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0NDcwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ1NjIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNjb3JlYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzY29yZWJvYXJkXCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNjb3JlYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzY29yZWJvYXJkXCIpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1MDgyICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTUxNDkpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNob2VzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic2hvZXNcIilcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvZXNcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzaG9lc1wiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTU0MTUgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xNTQ5Nikge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGF0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiaGF0XCIpXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhhdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImhhdFwiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkRldmljZVNoYWtlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZy5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudCArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50ID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG90XCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pID0gdHJ1ZVxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuaSreaUvuWwhOmXqOWKqOeUu1wiO1xyXG5cclxuXHRcdFx0Ly8gVE9ETzog5pKt5pS+5a6e6ZmF6ZyA6KaB55qE5aOw6Z+z77yM5bm25Zyo5YW25LuW6ZyA6KaB55qE5Zyw5pa56LCD55So5pKt5pS+5aOw6Z+zXHJcblx0XHRcdHRoaXMucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDApXHJcblx0XHR9XHJcblx0fVxyXG5cdG9uRGV2aWNlU2hha2UyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cyKSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cyLmNsb3NlKClcclxuXHRcdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzIgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQyKytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQyICsgXCLmrKFcXG5cIjtcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQyID49IDMpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKClcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50MiA9IDBcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLlgZzmraLmjqXmlLborr7lpIfmkYfliqhcIjtcclxuXHRcdFx0Ly8g5pKt5pS+5bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pMikge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImxpdXhpYW5nXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pMiA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQxKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlMygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nMykge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMy5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2czID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50MysrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50MyArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50MyA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDMgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTMpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjcm93ZFwiKVxyXG5cclxuXHRcdFx0dGhpcy5oYXNQbGF5U2hvdEFuaTMgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMilcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzQpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzQuY2xvc2UoKVxyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nNCA9IG51bGxcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hha2VDb3VudDQrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudDQgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudDQgPj0gMykge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKVxyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQ0ID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk0KSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2luTWFuXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pNCA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlNSgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nNSkge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nNS5jbG9zZSgpXHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2c1ID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50NSsrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50NSArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50NSA+PSAzKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpXHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDUgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTUpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJiYWxsTWFuXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pNSA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQ0KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b25RdWVzdGlvbkRpYWxvZ0Nsb3NlKGluZGV4OiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0Y29uc29sZS5sb2coXCJvblF1ZXN0aW9uRGlhbG9nQ2xvc2VcIiwgdHlwZSwgaW5kZXgpXHJcblx0XHRjb25zdCByaWdodCA9ICh0eXBlID09PSBcInRydWVcIikgLy8gVE9ETzog6K6h5YiGXHJcblx0XHR0aGlzLnF1ZXN0aW9uU2NvcmUrK1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHJcblx0XHRpZiAodGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QubGVuZ3RoID49IDEwKSB7XHQvLyDmmL7npLrkuoYxMOadoemimOS6hlxyXG5cdFx0XHQvLyBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgdGhpcy5zaG93U2NvcmVSZXN1bHREaWFsZywgW3RoaXMucXVlc3Rpb25TY29yZV0pXHJcblx0XHRcdHRoaXMuc2hvd1Njb3JlUmVzdWx0RGlhbGcodGhpcy5xdWVzdGlvblNjb3JlKVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1Njb3JlUmVzdWx0RGlhbGcoc2NvcmU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdGNvbnN0IHNjb3JlUmVzdWx0RGlhbG9nID0gbmV3IFNjb3JlUmVzdWx0RGlhbG9nKHNjb3JlKVxyXG5cdFx0c2NvcmVSZXN1bHREaWFsb2cucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHRzY29yZVJlc3VsdERpYWxvZy5jbG9zZUhhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25TY29yZURpYWxvZ0Nsb3NlKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblNjb3JlRGlhbG9nQ2xvc2UoKSB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0fVxyXG5cclxuXHQvLyDliKTmlq3mmK/lkKbpnIDopoHmmL7npLrpl67pophcclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbkRpYWxvZ0lmTmVlZCh5OiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG9mZnNldCA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdGNvbnN0IGhhc1Nob3dMZW5ndGggPSB0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5sZW5ndGhcclxuXHRcdGlmIChoYXNTaG93TGVuZ3RoID49IDEwKSB7XHJcblx0XHRcdC8vIGlmICh5KSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0aWYgKHkgPiBvZmZzZXQgLSBRdWVzdGlvblNob3dZW2hhc1Nob3dMZW5ndGhdKSB7XHJcblx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgaXNPZGQgPSAhKGhhc1Nob3dMZW5ndGggJSAyKVxyXG5cdFx0aWYgKGlzT2RkKSB7IC8vIOmaj+aculxyXG5cdFx0XHRjb25zdCByYW5kb20gPSB0aGlzLmdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKVxyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihyYW5kb20pXHJcblx0XHR9IGVsc2Uge1x0Ly8g5Y+W5YmNNeS9jVxyXG5cdFx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoaGFzU2hvd0xlbmd0aCAvIDIpXHJcblx0XHRcdHRoaXMuc2hvd1F1ZXN0aW9uKGluZGV4KVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgbWF4ID0gUXVlc3Rpb25EYXRhLmxlbmd0aCAtIDVcclxuXHRcdGNvbnN0IHJhbmRvbSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiBtYXgpKSArIDVcclxuXHRcdGlmICh0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5pbmRleE9mKHJhbmRvbSkgPT0gLTEpIHtcclxuXHRcdFx0cmV0dXJuIHJhbmRvbVxyXG5cdFx0fSBlbHNlIHsgLy8g5bey57uP5pi+56S66L+H6YeN5paw6I635Y+WXHJcblx0XHRcdHJldHVybiB0aGlzLmdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93UXVlc3Rpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKGluZGV4ID49IFF1ZXN0aW9uRGF0YS5sZW5ndGgpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHR0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5wdXNoKGluZGV4KVxyXG5cdFx0Y29uc3QgcXVlc3Rpb25EYXRhID0gUXVlc3Rpb25EYXRhW2luZGV4XVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdGNvbnN0IHF1ZXN0aW9uRGlhbG9nID0gbmV3IFF1ZXN0aW9uRGlhbG9nKHF1ZXN0aW9uRGF0YSlcclxuXHRcdHF1ZXN0aW9uRGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0cXVlc3Rpb25EaWFsb2cuY2xvc2VIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUXVlc3Rpb25EaWFsb2dDbG9zZSwgW2luZGV4XSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2UpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9XHJcblx0cHJpdmF0ZSBzaG93U2hha2VEaWFsb2cyKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cyID0gbmV3IFNoYWtlRGlhbG9nKClcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cyLnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZTIpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9IHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nMygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nMyA9IG5ldyBTaGFrZURpYWxvZygpXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nMy5wb3B1cCh0cnVlLCBmYWxzZSlcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2UzKVxyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fSBwcml2YXRlIHNob3dTaGFrZURpYWxvZzQoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzQgPSBuZXcgU2hha2VEaWFsb2coKVxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzQucG9wdXAodHJ1ZSwgZmFsc2UpXHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKVxyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlNClcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH0gcHJpdmF0ZSBzaG93U2hha2VEaWFsb2c1KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c1ID0gbmV3IFNoYWtlRGlhbG9nKClcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c1LnBvcHVwKHRydWUsIGZhbHNlKVxyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMClcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZTUpXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1RpcERpYWxvZyh0aXBUeXBlOiBUaXBUeXBlKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWVcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHRjb25zdCBzY3JvbGxEaWFsb2cgPSBuZXcgU2Nyb2xsRGlhbG9nKHRpcFR5cGUpXHJcblxyXG5cdFx0c2Nyb2xsRGlhbG9nLnBvcHVwKHRydWUpXHJcblx0XHRzY3JvbGxEaWFsb2cuY2xvc2VIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uVGlwRGlhbG9nQ2xvc2UpXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uVGlwRGlhbG9nQ2xvc2UoKSB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwbGF5U291bmQodXJsOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuYmdtU291bmRDaGFubmVsLnBhdXNlKClcclxuXHRcdExheWEuU291bmRNYW5hZ2VyLnBsYXlTb3VuZCh1cmwsIDEsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblNvdW5kQ29tcGV0ZSkpXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uU291bmRDb21wZXRlKCkge1xyXG5cdFx0dGhpcy5iZ21Tb3VuZENoYW5uZWwucmVzdW1lKClcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd0NvbnNvbGVUZXh0KHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdHRoaXMuY29uc29sZSA9IG5ldyBMYXlhLlRleHQoKTtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5jb25zb2xlKTtcclxuXHRcdHRoaXMuY29uc29sZS56T3JkZXIgPSAxMDAwMVxyXG5cdFx0dGhpcy5jb25zb2xlLnkgPSAxMDtcclxuXHRcdHRoaXMuY29uc29sZS53aWR0aCA9IExheWEuc3RhZ2Uud2lkdGg7XHJcblx0XHR0aGlzLmNvbnNvbGUuaGVpZ2h0ID0gMjAwO1xyXG5cdFx0dGhpcy5jb25zb2xlLmNvbG9yID0gXCIjRkZGRkZGXCI7XHJcblx0XHR0aGlzLmNvbnNvbGUuZm9udFNpemUgPSAyMDtcclxuXHRcdHRoaXMuY29uc29sZS5sZWFkaW5nID0gMTA7XHJcblx0XHR0aGlzLmNvbnNvbGUuYmdDb2xvciA9IFwiIzAwMDAwMFwiXHJcblx0XHR0aGlzLmNvbnNvbGUudmlzaWJsZSA9IHZpc2libGVcclxuXHJcblx0fVxyXG5cclxufVxyXG4vL+a/gOa0u+WQr+WKqOexu1xyXG5uZXcgTWFpbigpO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIFF1ZXN0aW9uSXRlbSB7XG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBhOiBzdHJpbmcsXG4gICAgYjogc3RyaW5nLFxuICAgIGM6IHN0cmluZyxcbiAgICBkOiBzdHJpbmcsXG4gICAgYW5zd2VyOiBcImFcIiB8IFwiYlwiIHwgXCJjXCIgfCBcImRcIixcbiAgICBpZDogbnVtYmVyICAvLyDku4VcYuS+m+WPgueci+aVsOaNruaXtuWPguiAg++8jOS7o+eggeS4reS4jeS9v+eUqFxufVxuXG5leHBvcnQgY29uc3QgUXVlc3Rpb25TaG93WSA9IFtcbiAgICAxMzYzLFxuICAgIDM0MDcsXG4gICAgNTgyNyxcbiAgICA2NjI4LFxuICAgIDkxMjAsXG4gICAgOTk4MCxcbiAgICAxMjE0NCxcbiAgICAxMzE3OCxcbiAgICAxNTc2MCxcbiAgICAxNjY5N1xuXVxuZXhwb3J0ICBjb25zdCBRdWVzdGlvbkRhdGE6IEFycmF5PFF1ZXN0aW9uSXRlbT4gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCLlm73otrPov5vkuJbnlYzmna/nmoTkuLvluIXmmK/lk6rkvY0/XCIsXG4gICAgICAgIGE6IFwi6YeM55quXCIsXG4gICAgICAgIGI6IFwi5pyx5bm/5rKqXCIsXG4gICAgICAgIGM6IFwi6auY5rSq5rOiXCIsXG4gICAgICAgIGQ6IFwi57Gz5Y2iXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDblubTliJjnv5TnoLTkuJbnlYznuqrlvZXnmoTmiJDnu6nmmK/lpJrlsJE/XCIsXG4gICAgICAgIGE6IFwiMTLnp5I5MVwiLFxuICAgICAgICBiOiBcIjEy56eSODhcIixcbiAgICAgICAgYzogXCIxMuenkjg3XCIsXG4gICAgICAgIGQ6IFwiMTLnp5I4NlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiLFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA45bm05YyX5Lqs5aWl6L+Q5Lya6LCB54K554eD5LqG5Li754Gr54KsP1wiLFxuICAgICAgICBhOiBcIuiuuOa1t+WzsFwiLFxuICAgICAgICBiOiBcIumCk+S6muiQjVwiLFxuICAgICAgICBjOiBcIuadjuWugVwiLFxuICAgICAgICBkOiBcIueGiuWAqlwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDEy5bm05Lym5pWm5aWl6L+Q5Lya55S35a2QNDAw55Sx5rOz5Yag5Yab5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi6IyD5b635Yev5LyKXCIsXG4gICAgICAgIGI6IFwi6YOd6L+QXCIsXG4gICAgICAgIGM6IFwi5py05rOw5qGTXCIsXG4gICAgICAgIGQ6IFwi5a2Z5p2oXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiA1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMTblubTmlrDmtaozeDPnr67nkIPpu4Tph5HogZTotZvmgLvlhqDlhpvpmJ/mmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLljJflpKfpmJ9cIixcbiAgICAgICAgYjogXCLlsI/pvpnpvpnpmJ9cIixcbiAgICAgICAgYzogXCLpnLjmsJTmiJjpmJ9cIixcbiAgICAgICAgZDogXCLljY7kvqjlpKflrabpmJ9cIixcbiAgICAgICAgYW5zd2VyOiBcImRcIixcbiAgICAgICAgaWQ6IDZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5YyX5Lqs5aWl6L+Q5Lya5Lit5Zu95Luj6KGo5Zui55qE5peX5omL5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5aea5piOXCIsXG4gICAgICAgIGI6IFwi5YiY57+UXCIsXG4gICAgICAgIGM6IFwi546L5Yqx5YukXCIsXG4gICAgICAgIGQ6IFwi5p6X5Li5XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCIsXG4gICAgICAgIGlkOiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkuKrnmbvkuIrmrKflhqDotZvlnLrnmoTkuK3lm73nkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLlrZnnpaVcIixcbiAgICAgICAgYjogXCLokaPmlrnljZNcIixcbiAgICAgICAgYzogXCLmnY7pk4FcIixcbiAgICAgICAgZDogXCLpg5HmmbpcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgdGl0bGU6IFwi6YK15L2z5LiAOeW5tOW+t+WbveeUn+a2r+ato+W8j+avlOi1m+mHjOaAu+WFseaJk+eQg+WkmuWwkeeQg++8n1wiLFxuICAgICAgICBhOiBcIjE4XCIsXG4gICAgICAgIGI6IFwiMTlcIixcbiAgICAgICAgYzogXCIyOVwiLFxuICAgICAgICBkOiBcIjMwXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS4quWcqOasp+a0suiBlOi1m+S4reiOt+W+l+mHkemdtOeahOeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIumDkeaZulwiLFxuICAgICAgICBiOiBcIuadqOaZqFwiLFxuICAgICAgICBjOiBcIuiwouaZllwiLFxuICAgICAgICBkOiBcIuiRo+aWueWNk1wiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5L2N5Zyo55WZ5rSL5pyf6Ze05ouF5Lu755CD6Zif6Zif6ZW/55qE5Lit5Zu957GN55CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi6IyD5b+X5q+FXCIsXG4gICAgICAgIGI6IFwi6YOR5pm6XCIsXG4gICAgICAgIGM6IFwi5a2Z57un5rW3XCIsXG4gICAgICAgIGQ6IFwi5p2O6ZOBXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICB0aXRsZTogXCLlp5rmmI7lk6rkuIDlubTpgIDlvbnvvJ9cIixcbiAgICAgICAgYTogXCIyMDEwXCIsXG4gICAgICAgIGI6IFwiMjAxMVwiLFxuICAgICAgICBjOiBcIjIwMTJcIixcbiAgICAgICAgZDogXCIyMDEzXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICB0aXRsZTogXCIyMDE45bm05Lqa6L+Q5Lya5Lit56+u55CD6aG555uu5Lit5Zu96Zif5pS26I635LqG5Yeg5p6a6YeR54mM77yfXCIsXG4gICAgICAgIGE6IFwiMVwiLFxuICAgICAgICBiOiBcIjJcIixcbiAgICAgICAgYzogXCIzXCIsXG4gICAgICAgIGQ6IFwiNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgdGl0bGU6IFwiQ0JB6IGU6LWb5Y6G5Y+y5LiK56ys5LiA5Liq5b6X5YiG56C05LiH55qE55CD5ZGY77yfXCIsXG4gICAgICAgIGE6IFwi5piT5bu66IGUXCIsXG4gICAgICAgIGI6IFwi5pyx6Iqz6ZuoXCIsXG4gICAgICAgIGM6IFwi5YiY54KcXCIsXG4gICAgICAgIGQ6IFwi546L5rK76YOFXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICB0aXRsZTogXCLlk6rmlK/nkIPpmJ/lnKgwMi0wM+i1m+Wto0NCQeWto+WQjui1m+S4reWIm+mAoOS6hum7kTjlpYfov7nvvJ9cIixcbiAgICAgICAgYTogXCLovr3lroFcIixcbiAgICAgICAgYjogXCLlm5vlt51cIixcbiAgICAgICAgYzogXCLljJfkuqxcIixcbiAgICAgICAgZDogXCLlsbHkuJxcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIHRpdGxlOiBcIuS4reWbvei2s+eQg+mhtue6p+iBlOi1m+eUseeUskHlj5jmm7TkuLrkuK3otoXnmoTmmK/lnKjlk6rkuIDlubTvvJ9cIixcbiAgICAgICAgYTogXCIwMlwiLFxuICAgICAgICBiOiBcIjAzXCIsXG4gICAgICAgIGM6IFwiMDRcIixcbiAgICAgICAgZDogXCIwNVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNixcbiAgICAgICAgdGl0bGU6IFwi6Zmp5Lqb5Zyo5Lit6LaF5Yib6YCg5Yev5rO95pav5Yqz5ruV56We6K+d55qE5piv5Lul5LiL5ZOq5pSv55CD6Zif77yfXCIsXG4gICAgICAgIGE6IFwi6L695a6BXCIsXG4gICAgICAgIGI6IFwi5YyX5LqsXCIsXG4gICAgICAgIGM6IFwi5LiK5rW3XCIsXG4gICAgICAgIGQ6IFwi5bm/5beeXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE3LFxuICAgICAgICB0aXRsZTogXCLmgZLlpKfnrKzkuIDmrKHojrflvpfkuprlhqDogZTotZvlhqDlhpvmmK/pgqPkuIDlubTvvJ9cIixcbiAgICAgICAgYTogXCIyMDEy5bm0XCIsXG4gICAgICAgIGI6IFwiMjAxM+W5tFwiLFxuICAgICAgICBjOiBcIjIwMTTlubRcIixcbiAgICAgICAgZDogXCIyMDE15bm0XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgICB0aXRsZTogXCIyMDAy5bm05LiW55WM5p2v77yM5Lit5Zu96Zif6Zif5ZCM57uE5a+55omL6Zmk5be06KW/44CB5ZOl5pav6L6+6buO5Yqg6L+Y5pyJ6YKj5Liq5Zu95a6277yfXCIsXG4gICAgICAgIGE6IFwi5biM6IWKXCIsXG4gICAgICAgIGI6IFwi5b635Zu9XCIsXG4gICAgICAgIGM6IFwi5pel5pysXCIsXG4gICAgICAgIGQ6IFwi5Zyf6ICz5YW2XCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE5LFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkvY3lm73lhoXnkIPlkZjlnKjkuprlhqDkuIrmvJTlpKflm5vllpzvvJ9cIixcbiAgICAgICAgYTogXCLmrabno4pcIixcbiAgICAgICAgYjogXCLpg53mtbfkuJxcIixcbiAgICAgICAgYzogXCLpg5zmnpdcIixcbiAgICAgICAgZDogXCLpgrXkvbPkuIBcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjAsXG4gICAgICAgIHRpdGxlOiBcIjIwMTTlubTmnY7lqJznrKzlh6DmrKHojrflvpflpKfmu6HotK/lpbPljZXlhqDlhpvvvJ9cIixcbiAgICAgICAgYTogXCIxXCIsXG4gICAgICAgIGI6IFwiMlwiLFxuICAgICAgICBjOiBcIjNcIixcbiAgICAgICAgZDogXCI0XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIxLFxuICAgICAgICB0aXRsZTogXCLmnKzotZvlraPmrabno4rmnInmnJvmlqnojrfph5HpnbTvvIzpgqPkuYjkuIrkuIDlkI3lpLrlvpfkuK3otoXph5HpnbTnmoTmnKzlnJ/nkIPlkZjmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLpg53mtbfkuJxcIixcbiAgICAgICAgYjogXCLmnY7ph5Hnvr1cIixcbiAgICAgICAgYzogXCLlrr/ojILoh7tcIixcbiAgICAgICAgZDogXCLpg5zmnpdcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDIsXG4gICAgICAgIHRpdGxlOiBcIuabvuWIm+S4i+S4reWbveWbtOaji+WQjeS6uuaImOWNgeS4iei/numcuOe6quW9leeahOaYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIumprOaZk+aYpVwiLFxuICAgICAgICBiOiBcIuW4uOaYilwiLFxuICAgICAgICBjOiBcIuiBguWNq+W5s1wiLFxuICAgICAgICBkOiBcIuafr+a0gVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyMyxcbiAgICAgICAgdGl0bGU6IFwi5Lit6LaF5pyA5bm06L276L+b55CD6ICF57qq5b2V5piv55Sx6LCB5L+d5oyB6ICF77yfXCIsXG4gICAgICAgIGE6IFwi5q2m56OKXCIsXG4gICAgICAgIGI6IFwi6buE5Y2a5paHXCIsXG4gICAgICAgIGM6IFwi5pyx6L6w5p2wXCIsXG4gICAgICAgIGQ6IFwi6YOR5pm6XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI0LFxuICAgICAgICB0aXRsZTogXCLotrPljY/mna/lpLrlhqDmrKHmlbDmnIDlpJrnmoTnkIPpmJ/mmK/vvJ9cIixcbiAgICAgICAgYTogXCLlub/lt57mgZLlpKdcIixcbiAgICAgICAgYjogXCLljJfkuqzlm73lrolcIixcbiAgICAgICAgYzogXCLlsbHkuJzpsoHog71cIixcbiAgICAgICAgZDogXCLkuIrmtbfnlLPoirFcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjUsXG4gICAgICAgIHRpdGxlOiBcIuS4reWbveWls+i2s+WcqOS4lueVjOadr+S4iueahOacgOWlveaIkOe7qe+8n1wiLFxuICAgICAgICBhOiBcIuWGoOWGm1wiLFxuICAgICAgICBiOiBcIuS6muWGm1wiLFxuICAgICAgICBjOiBcIuWto+WGm1wiLFxuICAgICAgICBkOiBcIuesrOWbm+WQjVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNixcbiAgICAgICAgdGl0bGU6IFwi5bm/5bee5oGS5aSn5Zyo5Lit6LaF5a6M5oiQ5Yeg6L+e5Yag77yfXCIsXG4gICAgICAgIGE6IFwiNui/nuWGoFwiLFxuICAgICAgICBiOiBcIjfov57lhqBcIixcbiAgICAgICAgYzogXCI46L+e5YagXCIsXG4gICAgICAgIGQ6IFwiOei/nuWGoFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNyxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N55CD5ZGY5rKh5pyJ5Y+C5Yqg6L+H5LiW55WM5p2v5q2j6LWb77yfXCIsXG4gICAgICAgIGE6IFwi6YK15L2z5LiAXCIsXG4gICAgICAgIGI6IFwi5a2Z57un5rW3XCIsXG4gICAgICAgIGM6IFwi5p2O6YeR5769XCIsXG4gICAgICAgIGQ6IFwi5rGf5rSlXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI4LFxuICAgICAgICB0aXRsZTogXCLnjofpooblub/lt57mgZLlpKfojrflvpfnrKzkuIDkuKrkuK3otoXlhqDlhpvnmoTkuLvmlZnnu4PmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLmnY7nq6DmtJlcIixcbiAgICAgICAgYjogXCLph4znmq5cIixcbiAgICAgICAgYzogXCLmlq/np5Hmi4nph4xcIixcbiAgICAgICAgZDogXCLljaHnurPnk6bnvZdcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjksXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS9jeeQg+WRmOS7juadpeayoeacieWIsOS4rei2hei4oui/h+eQg++8n1wiLFxuICAgICAgICBhOiBcIuW3tOmHjOWlpeaWr1wiLFxuICAgICAgICBiOiBcIuWQieaLiei/quivulwiLFxuICAgICAgICBjOiBcIuS8iua2heaWr+WhlFwiLFxuICAgICAgICBkOiBcIuW+t+e9l+W3tFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzMCxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N55CD5ZGY5rKh5pyJ6I635b6X6L+H4oCc5Lqa5rSy6Laz55CD5bCP5aeQ4oCd55qE56ew5Y+377yfXCIsXG4gICAgICAgIGE6IFwi5a2Z6ZuvXCIsXG4gICAgICAgIGI6IFwi55m95rSBXCIsXG4gICAgICAgIGM6IFwi6Z+p56uvXCIsXG4gICAgICAgIGQ6IFwi6ams5pmT5petXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMxLFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkuKrnnIHku73miJbln47luILmsqHmnInkuKTmlK/kuK3otoXpmJ/kvI3vvJ9cIixcbiAgICAgICAgYTogXCLlub/lt55cIixcbiAgICAgICAgYjogXCLkuIrmtbdcIixcbiAgICAgICAgYzogXCLljJfkuqxcIixcbiAgICAgICAgZDogXCLmsZ/oi49cIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzIsXG4gICAgICAgIHRpdGxlOiBcIjE5OTnlubTkvZPmk43kuJbplKbotZvmnY7lsI/puY/ojrflvpfkuoblk6rkuKrpobnnm67nmoTph5HniYzvvJ9cIixcbiAgICAgICAgYTogXCLoh6rnlLHmk41cIixcbiAgICAgICAgYjogXCLlj4zmnaBcIixcbiAgICAgICAgYzogXCLot7PpqaxcIixcbiAgICAgICAgZDogXCLljZXmnaBcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzMsXG4gICAgICAgIHRpdGxlOiBcIjIwMDHlubTlk6rkuIDlpKnokKjpqazlhbDlpYflrqPluIPljJfkuqzmiJDkuLoyMDA45bm05aWl6L+Q5Lya5Li75Yqe5Z+O5biC77yfXCIsXG4gICAgICAgIGE6IFwiNy4xMVwiLFxuICAgICAgICBiOiBcIjcuMTJcIixcbiAgICAgICAgYzogXCI3LjEzXCIsXG4gICAgICAgIGQ6IFwiNy4xNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNCxcbiAgICAgICAgdGl0bGU6IFwiMjAwMuW5tOebkOa5luWfjuWGrOWlpeS8mu+8jOiwgeS4uuS4reWbveaLv+WIsOWGrOWlpeS8muWOhuWPsummlumHke+8n1wiLFxuICAgICAgICBhOiBcIuadqOmYs1wiLFxuICAgICAgICBiOiBcIuadqOaJrFwiLFxuICAgICAgICBjOiBcIuadqOadqCBcIixcbiAgICAgICAgZDogXCLmnajmtItcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzUsXG4gICAgICAgIHRpdGxlOiBcIjIwMDPlubTlm73lrrbkvZPogrLmgLvlsYDmraPlvI/mibnlh4blk6rkuKrpobnnm67miJDkuLrnrKw5OeS4quato+W8j+S9k+iCsuernui1m+mhue+8n1wiLFxuICAgICAgICBhOiBcIueUteWtkOernuaKgFwiLFxuICAgICAgICBiOiBcIumrmOWwlOWkq1wiLFxuICAgICAgICBjOiBcIumprOeQg1wiLFxuICAgICAgICBkOiBcIua7kee/lOS8nlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNixcbiAgICAgICAgdGl0bGU6IFwiMjAwNeW5tOiwgeWkuuW+l+S6huS4reWbveaWr+ivuuWFi+mmluS4quaOkuWQjei1m+WGoOWGm++8n1wiLFxuICAgICAgICBhOiBcIuWCheWutuS/ilwiLFxuICAgICAgICBiOiBcIuS4geS/iuaZllwiLFxuICAgICAgICBjOiBcIuaigeaWh+WNmlwiLFxuICAgICAgICBkOiBcIueUsOm5j+mjnlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNyxcbiAgICAgICAgdGl0bGU6IFwiMjAwNuW5tOmDveeBteWGrOWlpeS8muS4reWbveWTquS9jeeUt+mAieaJi+iOt+W+l+S6humHkeeJjO+8n1wiLFxuICAgICAgICBhOiBcIuadjuS9s+WGm1wiLFxuICAgICAgICBiOiBcIumfqeaZk+m5j1wiLFxuICAgICAgICBjOiBcIumfqeS9s+iJr1wiLFxuICAgICAgICBkOiBcIuWuieeOiem+mVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzOCxcbiAgICAgICAgdGl0bGU6IFwiMjAwN+W5tOeUsOW+hOS4lumUpui1m+WImOe/lOWGs+i1m+WcqOesrOWHoOi3kemBk++8n1wiLFxuICAgICAgICBhOiBcIjZcIixcbiAgICAgICAgYjogXCI3XCIsXG4gICAgICAgIGM6IFwiOFwiLFxuICAgICAgICBkOiBcIjlcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzksXG4gICAgICAgIHRpdGxlOiBcIjIwMDnlubTmuLjms7PkuJbplKbotZvosIHlpLrlvpfkuK3lm73nlLflrZDmuLjms7Ppppbph5HvvJ9cIixcbiAgICAgICAgYTogXCLlvKDnkLNcIixcbiAgICAgICAgYjogXCLlrZnmnahcIixcbiAgICAgICAgYzogXCLlroHms73mtptcIixcbiAgICAgICAgZDogXCLlvpDlmInkvZlcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDAsXG4gICAgICAgIHRpdGxlOiBcIjIwMTPlubTosIHliJvpgKDkuobljZXkurrluIboiLnkuI3pl7Tmlq3njq/nkIPoiKrooYzkuJbnlYznuqrlvZXvvJ9cIixcbiAgICAgICAgYTogXCLlvpDojonkvbNcIixcbiAgICAgICAgYjogXCLmrrfliZFcIixcbiAgICAgICAgYzogXCLpg63lt51cIixcbiAgICAgICAgZDogXCLpmYjkvanlqJxcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDEsXG4gICAgICAgIHRpdGxlOiBcIuWPguWKoOS4jkFscGhhR2/kurrmnLrlpKfmiJjnmoTmmK/lk6rkvY3kuK3lm73mo4vmiYvvvJ9cIixcbiAgICAgICAgYTogXCLmnY7kuJbnn7NcIixcbiAgICAgICAgYjogXCLogYLljavlubNcIixcbiAgICAgICAgYzogXCLllJDljavmmJ9cIixcbiAgICAgICAgZDogXCLmn6/mtIFcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDIsXG4gICAgICAgIHRpdGxlOiBcIjIwMTblubTosIHmiJDkuLrkuobpm4blhajlm73lhqDlhpvjgIHkuprmtLLlhqDlhpvjgIHkuJbplKbotZvlhqDlhpvjgIHlpaXov5DkvJrlhqDlhpvjgIHogYzkuJrmi7PnjovojaPoqonkuo7kuIDouqvnmoTph5Hmu6HotK/lvpfkuLvvvJ9cIixcbiAgICAgICAgYTogXCLpgrnluILmmI5cIixcbiAgICAgICAgYjogXCLnhormnJ3lv6BcIixcbiAgICAgICAgYzogXCLlvKDlsI/lubNcIixcbiAgICAgICAgZDogXCLlkJXmloxcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDMsXG4gICAgICAgIHRpdGxlOiBcIjIwMTflubTooqvoqonkuLrigJxNVlDmlLblibLmnLrigJ3nmoTmmK/lk6rkvY3lpbPmjpLlkI3lsIbvvJ9cIixcbiAgICAgICAgYTogXCLmnLHlqbdcIixcbiAgICAgICAgYjogXCLlvKDluLjlroFcIixcbiAgICAgICAgYzogXCLoooHlv4PnjqVcIixcbiAgICAgICAgZDogXCLkuIHpnJ5cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDQsXG4gICAgICAgIHRpdGxlOiBcIjIwMTjlubTkuprov5DkvJrojrflvpfph5HniYzmnIDlpJrnmoTkuK3lm73pgInmiYvmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLlvpDlmInkvZlcIixcbiAgICAgICAgYjogXCLlrZnmnahcIixcbiAgICAgICAgYzogXCLmqIrmjK/kuJxcIixcbiAgICAgICAgZDogXCLnjovnroDlmInnpr5cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDUsXG4gICAgICAgIHRpdGxlOiBcIjIwMTjlubToi4/ngrPmt7vnmoTnmb7nsbPmnIDkvbPmiJjnu6nmmK/lpJrlsJHvvJ9cIixcbiAgICAgICAgYTogXCI556eSOTFcIixcbiAgICAgICAgYjogXCI556eSXCIsXG4gICAgICAgIGM6IFwiOeenkjk5XCIsXG4gICAgICAgIGQ6IFwiMTDnp5IwM1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfVxuICAgXG5dIiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCB7IFF1ZXN0aW9uSXRlbSB9IGZyb20gXCIuL1F1ZXN0aW9uRGF0YVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkRpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5RdWVzdGlvbkRpYWxvZ1VJIHtcblxuICAgIHByaXZhdGUgcXVlc3Rpb246IFF1ZXN0aW9uSXRlbVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbkl0ZW0pIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb25cblxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzTW9kYWwgPSB0cnVlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9ICAgXG4gICAgXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICAvLyDlu7bml7bmiafooYzvvIzpgb/lhY3miYvmnLrkuIrmiafooYzml7bmiqXnu4Tku7Z1bmRlZmluZWTnmoTpl67pophcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FsbExhdGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25MYWJlbCkge1xuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb25MYWJlbC50ZXh0ID0gcXVlc3Rpb24udGl0bGVcbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLmxhYmVsID0gcXVlc3Rpb24uYVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4ubGFiZWwgPSBxdWVzdGlvbi5iXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5sYWJlbCA9IHF1ZXN0aW9uLmNcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLmxhYmVsID0gcXVlc3Rpb24uZFxuXG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiYVwiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJiXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckNCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImNcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiZFwiXSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNsaWNrQW5zd2VyXCIsIGFuc3dlcilcblxuICAgICAgICBjb25zdCByaWdodCA9ICh0aGlzLnF1ZXN0aW9uLmFuc3dlciA9PT0gYW5zd2VyKVxuICAgICAgICBjb25zdCByZXN1bHRJbWcgPSByaWdodCA/IFwidmlldy9yaWdodC5wbmdcIiA6IFwidmlldy93cm9uZy5wbmdcIlxuICAgICAgICBpZiAoYW5zd2VyID09PSBcImFcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRBSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiYlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEJJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QkltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJjXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Q0ltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRDSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImRcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRESW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdERJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOenu+mZpOeCueWHu+S6i+S7tlxuICAgICAgICB0aGlzLmFuc3dlckFCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckRCdG4ub2ZmQWxsKClcblxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgdGhpcy5vbkNsb3NlTGF0ZXIsIFtyaWdodF0sIHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlTGF0ZXIocmlnaHQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZShgJHtyaWdodH1gKVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tIFwiLi9Db25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVSZXN1bHREaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuUmVzdWx0RGlhbG9nVUkge1xuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlclxuICAgIHByaXZhdGUgaXNDbGlja2luZzogYm9vbGVhblxuICAgIGNvbnN0cnVjdG9yKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmlzQ2xpY2tpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZVxuICAgIH1cblxuICAgIHB1YmxpYyBvbk9wZW5lZCgpIHtcbiAgICAgICAgLy8g5bu25pe25omn6KGM77yM6YG/5YWN5omL5py65LiK5omn6KGM5pe25oql57uE5Lu2dW5kZWZpbmVk55qE6Zeu6aKYXG4gICAgICAgIExheWEudGltZXIub25jZSgyMDAsIHRoaXMsIHRoaXMub25DYWxsTGF0ZXIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxMYXRlcigpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJnSW1hZ2VWaWV3KSB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NvcmVJbWFnZVZpZXcubG9hZEltYWdlKGB2aWV3L251bV8ke3RoaXMuc2NvcmV9LnBuZ2ApXG4gICAgICAgIGlmICh0aGlzLnNjb3JlID49IDgpIHtcbiAgICAgICAgICAgIHRoaXMuYmdJbWFnZVZpZXcubG9hZEltYWdlKENvbnN0YW50cy5zY29yZTQpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zY29yZSA+PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmJnSW1hZ2VWaWV3LmxvYWRJbWFnZShDb25zdGFudHMuc2NvcmUzKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5iZ0ltYWdlVmlldy5sb2FkSW1hZ2UoQ29uc3RhbnRzLnNjb3JlMilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYmdJbWFnZVZpZXcubG9hZEltYWdlKENvbnN0YW50cy5zY29yZTEpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY29yZUltYWdlVmlldy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB0aGlzLmJnSW1hZ2VWaWV3LnZpc2libGUgPSB0cnVlXG5cbiAgICAgICAgdGhpcy5vbmNlTW9yZUJ1dHRvbi5vbihMYXlhLkV2ZW50LkNMSUNLLCB0aGlzLCB0aGlzLm9uT25jZU1vcmUpXG4gICAgICAgIHRoaXMuc2hhcmVCdXR0b24ub24oTGF5YS5FdmVudC5DTElDSywgdGhpcywgdGhpcy5vblNoYXJlKVxuICAgICAgICB0aGlzLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vbkRvd24pXG4gICAgICAgIHRoaXMub24oTGF5YS5FdmVudC5NT1VTRV9VUCwgdGhpcywgdGhpcy5vblVwKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25PbmNlTW9yZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTY29yZVJlc3VsdERpYWxvZ1wiLCBcImNsaWNrZWQgb25jZSBtb3JlIGJ1dHRvblwiKVxuICAgIH1cbiAgICBwcml2YXRlIG9uU2hhcmUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NvcmVSZXN1bHREaWFsb2dcIiwgXCJjbGlja2VkIG9uIHNoYXJlXCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvd24oKSB7XG4gICAgICAgIHRoaXMuaXNDbGlja2luZyA9IHRydWVcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMub25Mb25nRG93bkNoZWNrKSAvLyAx56eS566X6ZW/5oyJXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblVwKCkge1xuICAgICAgICB0aGlzLmlzQ2xpY2tpbmcgPSBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb25nRG93bkNoZWNrKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNDbGlja2luZykgeyAvLyDkuI3nrpfplb/mjIlcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NvcmVSZXN1bHREaWFsb2dcIiwgXCJsb25nIGNsaWNrXCIpXG5cbiAgICAgICAgY29uc3QgaHRtbENhbnZhcyA9IHRoaXMuYmdJbWFnZVZpZXcuZHJhd1RvQ2FudmFzKDUxMiwgODA4LCAwLCAwKVxuICAgICAgICBodG1sQ2FudmFzLnRvQmFzZTY0KFwiaW1hZ2UvanBlZ1wiLDAuOSwgdGhpcy5vbkJnVG9CYXNlNjQpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJnVG9CYXNlNjQocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2NvcmVSZXN1bHREaWFsb2dcIiwgXCJvbkJnVG9CYXNlNjRcIiwgcmVzKVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG4vKipcbiAqIOWcuuaZrzHog4zmma9cbiAqL1xuXG50eXBlIEFuaU5hbWUgPSBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbjFCYWNrR3JvdW5kIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIHByaXZhdGUgYmcxOiBMYXlhLlNwcml0ZTtcbiAgICBwcml2YXRlIGN1cEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBTaG90QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwNEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDA4QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMTJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBwYWdlMl9zdGFydDogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHBhZ2UzX3N0YXJ0OiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQmFsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJhbGxNYW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCb2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGNsb2NrQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgQ29tcHV0ZXJBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDcm93ZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEN1cEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGR1bWJiZWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZWxlY3RyaWNtYW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBlcXVpcG1lbnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBGb290YmFsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEdvZ2dsZXNBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBIYXRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBIZWFydEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGxpdXhpYW5nQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgTWVkYWxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBTY29yZWJvYXJkQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2hvZXNBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBTdGFnZUFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXYXRlckxlZnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgLy8gcHJpdmF0ZSBXYXRlclJpZ2h0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2hpc3RsZUFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHdpbkFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdpbk1hbkFuaTogTGF5YS5BbmltYXRpb25cblxuICAgIHByaXZhdGUgYmcyOiBMYXlhLlNwcml0ZVxuICAgIHByaXZhdGUgYmczOiBMYXlhLlNwcml0ZVxuICAgIHByaXZhdGUgYmc0OiBMYXlhLlNwcml0ZVxuICAgIHByaXZhdGUgYmc1OiBMYXlhLlNwcml0ZVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmcxID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzEuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMSlcbiAgICAgICAgdGhpcy5iZzEuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzEpXG5cbiAgICAgICAgdGhpcy5iZzIgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMi5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgOTcwKVxuICAgICAgICB0aGlzLmJnMi5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUyID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMilcbiAgICAgICAgdGhpcy5iZzIuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUyKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcyKVxuXG4gICAgICAgIHRoaXMuYmczID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzMucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIDE5NDApXG4gICAgICAgIHRoaXMuYmczLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTMgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQzKVxuICAgICAgICB0aGlzLmJnMy5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTMpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzMpXG5cbiAgICAgICAgdGhpcy5iZzQgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnNC5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgMjkxMClcbiAgICAgICAgdGhpcy5iZzQuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNCA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDQpXG4gICAgICAgIHRoaXMuYmc0LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNClcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNClcblxuICAgICAgICB0aGlzLmJnNSA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmc1LnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDRIZWlnaHQgKyAzODgwKVxuICAgICAgICB0aGlzLmJnNS5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDVIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmU1ID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kNSlcbiAgICAgICAgdGhpcy5iZzUuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmU1KVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmc1KVxuXG4gICAgICAgIHRoaXMuY3VwQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgLy8gVE9ETzog6LCD5pW05Yqo55S7XG4gICAgICAgIHRoaXMuY3VwQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQ3VwQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY3VwQW5pKVxuICAgICAgICAvLyBUT0RPOiDosIPmlbTkvY3nva5cbiAgICAgICAgdGhpcy5jdXBBbmkucG9zKDQwMCwgMTAyMClcblxuXG4gICAgICAgIHRoaXMud2hpc3RsZUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMud2hpc3RsZUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1doaXN0bGVBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy53aGlzdGxlQW5pKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkucG9zKDEwMCwgOTgwKVxuXG4gICAgICAgIHRoaXMuU2hvdEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU2hvdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob3RBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TaG90QW5pKVxuICAgICAgICB0aGlzLlNob3RBbmkucG9zKDIyMCwgMTg1MClcblxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDAyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkucG9zKDM2MCwgMjU1MClcblxuICAgICAgICB0aGlzLndpbkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMud2luQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvd2luQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2luQW5pKVxuICAgICAgICB0aGlzLndpbkFuaS5wb3MoMjgwLCAzMDUwKVxuXG5cbiAgICAgICAgLy9wYWdlMlxuICAgICAgICB0aGlzLnBhZ2UyX3N0YXJ0ID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5wYWdlMl9zdGFydC5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UyX3N0YXJ0LmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFnZTJfc3RhcnQpXG4gICAgICAgIHRoaXMucGFnZTJfc3RhcnQucG9zKDI1MCwgNDg4MClcblxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2R1bWJiZWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZHVtYmJlbGxBbmkpXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkucG9zKDMxMCwgNTA5NilcblxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZXF1aXBtZW50QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZXF1aXBtZW50QW5pKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5wb3MoMzcwLCA1NDAzKVxuXG4gICAgICAgIHRoaXMuY2xvY2tBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmNsb2NrQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvY2xvY2tBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5jbG9ja0FuaSlcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5wb3MoMTUyLCA1Njk1KVxuXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvdGV4dDIwMDRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy50ZXh0MjAwNEFuaSlcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5wb3MoMzM3LCA2MDQ0KVxuXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvZWxlY3RyaWNtYW5BbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5lbGVjdHJpY21hbkFuaSlcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5wb3MoMzI4LCA2MjY1KVxuXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvbGl1eGlhbmdBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5saXV4aWFuZ0FuaSlcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5wb3MoMjYzLCA2NzUwKVxuXG5cbiAgICAgICAgLy9wYWdlM1xuICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0ID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5wYWdlM19zdGFydC5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UzX3N0YXJ0LmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFnZTNfc3RhcnQpXG4gICAgICAgIHRoaXMucGFnZTNfc3RhcnQucG9zKDI1MCwgODI1MClcblxuICAgICAgICB0aGlzLk1lZGFsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5NZWRhbEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL01lZGFsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuTWVkYWxBbmkpXG4gICAgICAgIHRoaXMuTWVkYWxBbmkucG9zKDMzMywgODkwMClcblxuICAgICAgICB0aGlzLlN0YWdlQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TdGFnZUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1N0YWdlQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU3RhZ2VBbmkpXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkucG9zKDIxOSwgOTIxMSlcblxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDA4QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDhBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkucG9zKDIzMSwgOTY5MylcblxuICAgICAgICB0aGlzLkNyb3dkQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5Dcm93ZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0Nyb3dkQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuQ3Jvd2RBbmkpXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkucG9zKDI3MCwgMTAwODUpXG5cblxuICAgICAgICAvL3BhZ2U0XG4gICAgICAgIHRoaXMuSGVhcnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhlYXJ0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvSGVhcnRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5IZWFydEFuaSlcbiAgICAgICAgdGhpcy5IZWFydEFuaS5wb3MoMTgxLCAxMTMzMSlcblxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDEyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMTJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkucG9zKDI1OSwgMTE3MDUpXG5cbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2F0ZXJSaWdodEFuaS5hbmlcIilcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyUmlnaHRBbmkpXG4gICAgICAgIC8vIHRoaXMuV2F0ZXJSaWdodEFuaS5wb3MoMzcwLCA5MTAwKVxuXG4gICAgICAgIHRoaXMuQm9hcmRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJvYXJkQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Cb2FyZEFuaSlcbiAgICAgICAgdGhpcy5Cb2FyZEFuaS5wb3MoMjU3LCAxMTkyMilcblxuICAgICAgICB0aGlzLldhbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2FsbEFuaSlcbiAgICAgICAgdGhpcy5XYWxsQW5pLnBvcygyNzUsIDEyMTkwKVxuXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0dvZ2dsZXNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Hb2dnbGVzQW5pKVxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucG9zKDM1NSwgMTI2MzQpXG5cbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dhdGVyTGVmdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyTGVmdEFuaSlcbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucG9zKDE2MywgMTMwMDcpXG5cbiAgICAgICAgdGhpcy5XaW5NYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dpbk1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldpbk1hbkFuaSlcbiAgICAgICAgdGhpcy5XaW5NYW5BbmkucG9zKDI1NCwgMTM0ODApXG5cblxuICAgICAgICAvL3BhZ2U1XG4gICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Njb3JlYm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5TY29yZWJvYXJkQW5pKVxuICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkucG9zKDI1NywgMTQ5NjEpXG5cbiAgICAgICAgdGhpcy5CYWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxBbmkpXG4gICAgICAgIHRoaXMuQmFsbEFuaS5wb3MoMTI3LCAxNDk2MSlcblxuICAgICAgICB0aGlzLlNob2VzQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TaG9lc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob2VzQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvZXNBbmkpXG4gICAgICAgIHRoaXMuU2hvZXNBbmkucG9zKDMzOCwgMTU2NDkpXG5cbiAgICAgICAgdGhpcy5IYXRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhhdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0hhdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkhhdEFuaSlcbiAgICAgICAgdGhpcy5IYXRBbmkucG9zKDE5MCwgMTU4MjMpXG5cbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbE1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxNYW5BbmkpXG4gICAgICAgIHRoaXMuQmFsbE1hbkFuaS5wb3MoMjY1LCAxNjQ2NylcbiAgICB9XG5cbiAgICBzdG9wQW5pKGFuaU5hbWU6IEFuaU5hbWUpOiB2b2lkIHtcbiAgICAgICAgc3dpdGNoIChhbmlOYW1lKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMl9zdGFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGFnZTJfc3RhcnQuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlMl9zdGFydDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UyX3N0YXJ0LmdvdG9BbmRTdG9wKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwicGFnZTNfc3RhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0LmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwicGFnZTNfc3RhcnQxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlM19zdGFydC5nb3RvQW5kU3RvcCgxKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDAyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDEyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsTWFuQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIGNhc2UgXCJjb21wdXRlclwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuQ29tcHV0ZXJBbmkuZ290b0FuZFN0b3AoMzApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Dcm93ZEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkdW1iYmVsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZHVtYmJlbGxBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWxlY3RyaWNtYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJoYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhhdEFuaS5nb3RvQW5kU3RvcCgyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhlYXJ0QW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5nb3RvQW5kU3RvcCgzMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzY29yZWJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZWJvYXJkQW5pLmdvdG9BbmRTdG9wKDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkuZ290b0FuZFN0b3AoMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2FsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2FsbEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldoaXN0bGVBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2luTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5NYW5BbmkuZ290b0FuZFN0b3AoMzApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYXlBbmkoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMTJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwiY29tcHV0ZXJcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkNvbXB1dGVyQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Dcm93ZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkdW1iYmVsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZHVtYmJlbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWxlY3RyaWNtYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGF0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IYXRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhlYXJ0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZWRhbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTWVkYWxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmVib2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlN0YWdlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuV2F0ZXJSaWdodEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLnBsYXkoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pUGxheWluZyhhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDAyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDEyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ3Jvd2RBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWlwbWVudEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFydEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLlNjb3JlYm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYWxsQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYXRlckxlZnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2hpc3RsZUFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG90QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Db21wdXRlckFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNjb3JlYm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob2VzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2hpc3RsZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLndpbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXBBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpc3RsZUFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMDRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAxMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9ja0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNyb3dkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kdW1iYmVsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVpcG1lbnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuR29nZ2xlc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSGVhcnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpdXhpYW5nQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TY29yZWJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG9lc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2FsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldhdGVyTGVmdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldoaXN0bGVBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkudmlzaWJsZTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcblxuZXhwb3J0IHR5cGUgVGlwVHlwZSA9IFwic2Nyb2xsXCIgfCBcImNsaWNrX3doaXRlXCIgfCBcImNsaWNrX2JsYWNrXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbERpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TY3JvbGxEaWFsb2dVSSB7XG4gICAgcHJpdmF0ZSB0aXBUeXBlOiBUaXBUeXBlXG4gICAgY29uc3RydWN0b3IodGlwVHlwZTogVGlwVHlwZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudGlwVHlwZSA9IHRpcFR5cGVcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsTGF0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnRpcFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzY3JvbGxcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50aXBJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlwSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgdGhpcy50aXBJbWFnZS52aXNpYmxlICA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja193aGl0ZVwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLndoaXRlQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnkgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IFxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja19ibGFja1wiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJsYWNrQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFja0NsaWNrSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrQ2xpY2tJbWFnZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uQ2xpY2spXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZURpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TaGFrZURpYWxvZ1VJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICBcbiAgICAgICAgXG4gICAgfSAgICBcblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRiYWxsIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFza2V0YmFsbC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTFlMnMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMXRvMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTJlM3MgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMnRvM0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTNlNHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM3RvNEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZTNfUnVubWFuIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xyXG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXHJcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXHJcbiAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcclxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM19ydW5tYW4uYW5pXCIpXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotbDliqhcclxuICAgICAqL1xyXG4gICAgZ29QYXRoKHk6bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2U0ZTVzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTR0bzVBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHJ1bm5pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UyUnVuLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6LWw5YqoXG4gICAgICovXG4gICAgZ29QYXRoKHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG5cbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpbW1pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9zd2ltbWluZ0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aS5kaWFsb2cge1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgdGlwTGFiZWw6TGF5YS5MYWJlbDtcblx0XHRwdWJsaWMgbG9hZGluZ1Byb2dyZXNzQmFyOkxheWEuUHJvZ3Jlc3NCYXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvTG9hZGluZ0RpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgUXVlc3Rpb25EaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgcmVzdWx0QUltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0Q0ltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0QkltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcmVzdWx0REltZzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcXVlc3Rpb25MYWJlbDpMYXlhLkxhYmVsO1xuXHRcdHB1YmxpYyBhbnN3ZXJBQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJCQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJDQnRuOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBhbnN3ZXJEQnRuOkxheWEuQnV0dG9uO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1F1ZXN0aW9uRGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBSZXN1bHREaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYmdJbWFnZVZpZXc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHNjb3JlSW1hZ2VWaWV3OkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBvbmNlTW9yZUJ1dHRvbjpMYXlhLkJ1dHRvbjtcblx0XHRwdWJsaWMgc2hhcmVCdXR0b246TGF5YS5CdXR0b247XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvUmVzdWx0RGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBTY3JvbGxEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgdGlwSW1hZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIGJsYWNrQ2xpY2tJbWFnZTpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgd2hpdGVDbGlja0ltYWdlOkxheWEuU3ByaXRlO1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1Njcm9sbERpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2hha2VEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgYm94OkxheWEuQm94O1xuICAgICAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpfVxyXG4gICAgICAgIGNyZWF0ZUNoaWxkcmVuKCk6dm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwiZGlhbG9nL1NoYWtlRGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyIl19
