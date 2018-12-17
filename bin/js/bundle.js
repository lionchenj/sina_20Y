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
    Constants.background0 = "bg/background0.png";
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
    Constants.stateHeight = Laya.Browser.clientHeight + Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height + Constants.background5Height + 3880;
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
    Constants.sports0 = "res/atlas/sports.png";
    Constants.sports1 = "res/atlas/sports1.png";
    Constants.sports2 = "res/atlas/sports2.png";
    Constants.view = "res/atlas/view.png";
    Constants.loading = "res/atlas/loading.png";
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
    // private progress = '0'
    function LoadingDialog() {
        var _this = _super.call(this) || this;
        _this.autoDestroyAtClosed = true;
        _this.isPopupCenter = false;
        _this.pos(0, 0);
        return _this;
    }
    LoadingDialog.prototype.onOpened = function () {
        // this.changeProgressValue(0)    
    };
    LoadingDialog.prototype.changeProgressValue = function (nber) {
        if (!this.progress) {
            Laya.timer.once(200, this, this.changeProgressValue);
            return;
        }
        var num = Math.ceil(nber * 100) + "%";
        console.log(num);
        this.progress.text = num;
        if (nber == 1) {
            this.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
        }
    };
    LoadingDialog.prototype.updateTip = function (tip) {
        this.progress.text = tip;
    };
    LoadingDialog.prototype.onClick = function () {
        this.close();
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
        this.firstSt = 0;
        this.firstnum = 0;
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
        this.next = 0;
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
            url: Constants_1.default.loading,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.background0,
            type: Laya.Loader.IMAGE
        });
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
            url: "res/atlas/view.atlas",
            type: Laya.Loader.ATLAS
        });
        assets.push({
            url: "res/atlas/loading.atlas",
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
        assets.push({
            url: Constants_1.default.sports0,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sports1,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.sports2,
            type: Laya.Loader.IMAGE
        });
        assets.push({
            url: Constants_1.default.view,
            type: Laya.Loader.IMAGE
        });
        // 预加载资源
        Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
        Laya.loader.on(Laya.Event.ERROR, this, this.onError);
    };
    // 必需先加载进度条资源才能显示进度条
    Main.prototype.onProgressAssetsLoaded = function () {
        var _this = this;
        // 显示进度条
        this.loadingDialog = new LoadingDialog_1.default();
        this.loadingDialog.popup(true, false);
        setTimeout(function () {
            _this.loadOtherAssets();
        }, 4000);
    };
    Main.prototype.onAssetsLoading = function (progress) {
        console.log("加载进度: " + progress);
        this.loadingDialog.changeProgressValue(progress);
    };
    Main.prototype.onAssetsLoaded = function () {
        this.loadingDialog.close();
        this.console.text += '资源加载完成。';
        // this.showTipDialog("scroll")
        this.screen1BackGround = new Screen1BackGround_1.default();
        Laya.stage.addChild(this.screen1BackGround);
        this.beginListenDrag();
        this.football = new Football_1.default();
        this.football.pos(327, 233);
        Laya.stage.addChild(this.football);
        this.football.hide();
        this.basketball = new basketball_1.default();
        this.basketball.pos(300, 500);
        Laya.stage.addChild(this.basketball);
        this.running = new running_1.default();
        this.running.pos(250, 200);
        Laya.stage.addChild(this.running);
        this.swimming = new swimming_1.default();
        this.swimming.pos(256, 500);
        Laya.stage.addChild(this.swimming);
        this.page3run = new page3_runman_1.default();
        this.page3run.pos(300, 850);
        Laya.stage.addChild(this.page3run);
        this.page1e2s = new page1_2_1.default();
        this.page1e2s.pos(250, 500);
        Laya.stage.addChild(this.page1e2s);
        this.page2e3s = new page2_3_1.default();
        this.page2e3s.pos(250, 500);
        Laya.stage.addChild(this.page2e3s);
        this.page3e4s = new page3_4_1.default();
        this.page3e4s.pos(270, 700);
        Laya.stage.addChild(this.page3e4s);
        this.page4e5s = new page4_5_1.default();
        this.page4e5s.pos(250, 700);
        Laya.stage.addChild(this.page4e5s);
        console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight);
        // 计算背景可拖动区域
        var moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
        this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
        // 播放背景音乐
        this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants_1.default.soundBgm8, 0);
    };
    Main.prototype.onError = function (err) {
        console.log("加载失败: " + err);
        this.loadingDialog.updateTip("加载失败: " + err);
    };
    Main.prototype.onMouseMove = function () {
        var _this = this;
        // 始终保持主角和鼠标位置一致
        // this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY);
        // console.log("onMouseMove", Laya.stage.mouseX, Laya.stage.mouseY);
        // console.log(`map[${this.screen1BackGround.y}] = ${Laya.stage.mouseX}`);
        // this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY);
        console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  y2：", this.screen1BackGround.y, '）');
        if (this.screen1BackGround.y == 0) {
            this.firstnum = this.firstnum + (this.firstSt - Laya.stage.mouseY);
            var z = parseInt(this.firstnum / 10 + '');
            this.screen1BackGround.stopDrag();
            if (z < 0) {
                z = 0;
                this.firstnum = 0;
            }
            this.screen1BackGround.moveAni("first", z - 0);
            if (z > 180) {
                z = 180;
                this.next = z;
                this.firstnum = 1800;
                var si_1 = setInterval(function () {
                    _this.next++;
                    if (_this.next == 205) {
                        clearInterval(si_1);
                        _this.next = 204;
                        _this.screen1BackGround.y = 10;
                        _this.screen1BackGround.moveAni("first", 205);
                        _this.onStartDrag();
                        return;
                    }
                    _this.screen1BackGround.moveAni("first", _this.next);
                }, 250);
                return;
            }
        }
    };
    Main.prototype.onStartDrag = function () {
        this.firstSt = Laya.stage.mouseY;
        console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY);
        if (this.showingDialog) {
            return;
        }
        this.screen1BackGround.startDrag(this.dragRegion, false, 0);
    };
    Main.prototype.onBackgroundMove = function () {
        // console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y)
        // 显示问题
        var needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y);
        if (needShowQuestion) {
            this.screen1BackGround.stopDrag();
            return;
        }
        // TODO: 根据实际情况显示点击提示
        // this.showTipDialog("click_white");
        // this.showTipDialog("click_black")
        if (this.screen1BackGround.y <= -1470 - Laya.Browser.clientHeight - 100) { // 不给拖动，摇一摇显示射门动画
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
        if (this.screen1BackGround.y >= -800 || this.screen1BackGround.y <= 2000) { // 隐藏足球
            this.football.hide();
        }
        else {
            this.football.show();
            // 移动足球位置
            // const y = -this.screen1BackGround.y + 232
            var y = 0;
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) < 1032 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 100 + Laya.Browser.clientHeight + 200;
            }
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) < 850 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 130 + Laya.Browser.clientHeight + 200;
            }
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) < 730 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 150 + Laya.Browser.clientHeight + 200;
            }
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) < 580 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 180 + Laya.Browser.clientHeight + 200;
            }
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) < 435 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 200 + Laya.Browser.clientHeight + 200;
            }
            if ((-this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200) > 1032 + Laya.Browser.clientHeight + 200) {
                y = -this.screen1BackGround.y + 232 + Laya.Browser.clientHeight + 200;
            }
            var x = FootballPath_1.getFootballX(y);
            if (x == 0) {
                this.football.y = y;
            }
            else {
                this.football.pos(x, y);
            }
            // 判断足球是否需要旋转
            if (this.screen1BackGround.y <= -585 - Laya.Browser.clientHeight - 200) {
                this.football.stopRotate();
            }
            else {
                this.football.playRotate();
            }
        }
        // 判断是否需要播放cup ani
        if (this.screen1BackGround.y <= -300 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -450 - Laya.Browser.clientHeight - 300) {
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
        if (this.screen1BackGround.y <= -300 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -450 - Laya.Browser.clientHeight - 300) {
            if (!this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.playAni("whistle");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("whistle")) {
                this.screen1BackGround.stopAni("whistle");
            }
        }
        if (this.screen1BackGround.y <= -2125 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -2325 - Laya.Browser.clientHeight - 300) {
            if (!this.screen1BackGround.isAniPlaying("text2002")) {
                this.screen1BackGround.playAni("text2002");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("text2002")) {
                this.screen1BackGround.stopAni("text2002");
            }
        }
        if (this.screen1BackGround.y <= -300 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -450 - Laya.Browser.clientHeight - 300) {
            if (!this.screen1BackGround.isAniPlaying("shot")) {
                this.screen1BackGround.playAni("shot");
            }
        }
        else {
            if (this.screen1BackGround.isAniPlaying("shot")) {
                this.screen1BackGround.stopAni("shot");
            }
        }
        if (this.screen1BackGround.y <= -1730 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -2640 - Laya.Browser.clientHeight - 300) {
            this.screen1BackGround.playAni("win");
        }
        else {
            this.screen1BackGround.stopAni("win");
        }
        if (this.screen1BackGround.y <= -2640 - Laya.Browser.clientHeight - 300 && this.screen1BackGround.y >= -4600 - Laya.Browser.clientHeight - 300) {
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
        if (this.screen1BackGround.y <= -8110 && this.screen1BackGround.y >= -9060) {
            this.page3run.show();
            var z = parseInt((-this.screen1BackGround.y - 8110) / 10 + '');
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
        if (this.screen1BackGround.y <= -9535 && this.screen1BackGround.y >= -11190) {
            this.screen1BackGround.stopAni("crowd");
        }
        else {
            this.screen1BackGround.stopAni("crowd1");
        }
        if (this.screen1BackGround.y <= -9540 && this.screen1BackGround.y >= -11190) {
            this.page3e4s.show();
            var z = parseInt((-this.screen1BackGround.y - 9540) / 10 + '');
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
        if (this.shakeCount >= 1) {
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
        if (this.shakeCount2 >= 1) {
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
        if (this.shakeCount3 >= 1) {
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
        if (this.shakeCount4 >= 1) {
            Laya.Shake.instance.stop();
            this.shakeCount4 = 0;
            this.console.text += "停止接收设备摇动";
            // 播放射门动画
            if (this.hasPlayShotAni4) {
                return;
            }
            this.screen1BackGround.playAni("winMan");
            this.swimming.hide();
            this.hasPlayShotAni4 = true;
            this.console.text += "播放射门动画";
            // TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
            this.playSound(Constants_1.default.sound3);
        }
    };
    Main.prototype.onDeviceShake5 = function () {
        var _this = this;
        if (this.shakeDialog5) {
            this.shakeDialog5.close();
            this.showingDialog = false;
            this.shakeDialog5 = null;
        }
        this.shakeCount5++;
        if (this.shakeCount5 >= 1) {
            Laya.Shake.instance.stop();
            this.shakeCount5 = 0;
            if (this.hasPlayShotAni5) {
                return;
            }
            this.screen1BackGround.playAni("ballMan");
            this.hasPlayShotAni5 = true;
            this.playSound(Constants_1.default.sound4);
            setTimeout(function () {
                _this.showScoreResultDialg(_this.questionScore);
            }, 3000);
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
            // Laya.timer.once(1000, this, this.showScoreResultDialg, [this.questionScore]);
            // setTimeout(() => {
            // 	this.showScoreResultDialg(this.questionScore);
            // }, 2000);
            // this.showScoreResultDialg(this.questionScore);
        }
    };
    Main.prototype.showScoreResultDialg = function (score) {
        // 不让滚动了
        Laya.stage.height = Laya.Browser.clientHeight;
        Laya.stage.width = Laya.Browser.clientWidth;
        // 合成图片
        var tmp = new Laya.Sprite();
        var bgImageUrl = "";
        if (score >= 8) {
            bgImageUrl = Constants_1.default.score4;
        }
        else if (score >= 5) {
            bgImageUrl = Constants_1.default.score3;
        }
        else if (score >= 2) {
            bgImageUrl = Constants_1.default.score2;
        }
        else {
            bgImageUrl = Constants_1.default.score1;
        }
        var bgImage = Laya.Loader.getRes(bgImageUrl);
        tmp.graphics.drawTexture(bgImage, 0, 0);
        var scoreImage = Laya.loader.getRes("view/num_" + score + ".png");
        tmp.graphics.drawTexture(scoreImage, 400, 325);
        var htmlCanvas = tmp.drawToCanvas(512, 808, 0, 0);
        htmlCanvas.toBase64("image/jpeg", 0.9, this.onResultScoreImageToBase64);
        // this.showingDialog = true
        // UIConfig.closeDialogOnSide = false
        // Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
        // const scoreResultDialog = new ScoreResultDialog(score);
        // scoreResultDialog.popup(true, false);
        // scoreResultDialog.closeHandler = Laya.Handler.create(this, this.onScoreDialogClose)
    };
    Main.prototype.onResultScoreImageToBase64 = function (res) {
        var oneMoreButtonX = 80;
        var oneMoreButtonY = 618;
        var oneMoreButtonWidth = 150;
        var oneMoreButtonHeight = 50;
        var shareButtonX = 290;
        var ratio = Laya.Browser.clientWidth / 512;
        oneMoreButtonX = oneMoreButtonX * ratio;
        oneMoreButtonY = oneMoreButtonY * ratio;
        oneMoreButtonWidth = oneMoreButtonWidth * ratio;
        oneMoreButtonHeight = oneMoreButtonHeight * ratio;
        shareButtonX = shareButtonX * ratio;
        var divElement = Laya.Browser.createElement("div");
        divElement.style.zIndex = 10000000;
        divElement.style.position = "absolute";
        divElement.style.width = Laya.Browser.clientWidth;
        divElement.style.height = Laya.Browser.clientHeight;
        divElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        var innerHTML = "<img style=\"width:" + Laya.Browser.clientWidth + "\" src=\"" + res + "\"/>";
        innerHTML += "<a style=\"position:absolute;left: " + oneMoreButtonX + "px;top:" + oneMoreButtonY + "px;width:" + oneMoreButtonWidth + "px;height:" + oneMoreButtonHeight + "px\" href=\"javascript:location.reload()\"></a>";
        innerHTML += "<a style=\"position:absolute;left: " + shareButtonX + "px;top:" + oneMoreButtonY + "px;width:" + oneMoreButtonWidth + "px;height:" + oneMoreButtonHeight + "px\" href=\"javascript:alert('\u70B9\u51FB\u53F3\u4E0A\u89D2\u6309\u94AE\u53EF\u4EE5\u53D1\u9001\u7ED9\u670B\u53CB\u6216\u5206\u4EAB\u5230\u670B\u53CB\u5708')\"></a>";
        divElement.innerHTML = innerHTML;
        // divElement.innerHTML = `<img src="view/score_1.jpg"></img>`
        Laya.Browser.document.body.appendChild(divElement);
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
    // 开始监听拖动
    Main.prototype.beginListenDrag = function () {
        this.cancelListenClick();
        this.cancelListenLongClick();
        this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove);
    };
    // 开始监听点击
    Main.prototype.beginListenClick = function () {
        this.cancelListenDrag();
        this.cancelListenLongClick();
        this.screen1BackGround.on(Laya.Event.MOUSE_DOWN, this, this.onBackgroundClick);
    };
    // 开始监听长按
    Main.prototype.beginListenLongClick = function () {
        this.cancelListenDrag();
        this.cancelListenClick();
        this.screen1BackGround.on(Laya.Event.MOUSE_DOWN, this, this.onLongClickDown);
        this.screen1BackGround.on(Laya.Event.MOUSE_UP, this, this.onLongClickUp);
    };
    // 点击触发事件
    Main.prototype.onBackgroundClick = function () {
        console.log("Main", "onBackgroundClick");
    };
    // 长按触发事件
    Main.prototype.onBackgroundLongClick = function () {
    };
    Main.prototype.cancelListenDrag = function () {
        this.screen1BackGround.offAll(Laya.Event.DRAG_MOVE);
    };
    Main.prototype.cancelListenClick = function () {
        this.screen1BackGround.offAll(Laya.Event.MOUSE_DOWN);
    };
    Main.prototype.cancelListenLongClick = function () {
        this.screen1BackGround.offAll(Laya.Event.MOUSE_DOWN);
        this.screen1BackGround.offAll(Laya.Event.MOUSE_UP);
        this.isLongClick = false;
    };
    Main.prototype.onLongClickDown = function () {
        this.isLongClick = true;
        Laya.timer.once(1000, this, this.onLongDownCheck); // 1秒算长按
    };
    Main.prototype.onLongClickUp = function () {
        this.isLongClick = false;
    };
    Main.prototype.onLongDownCheck = function () {
        if (!this.isLongClick) { // 不算长按
            return;
        }
        this.onBackgroundLongClick();
    };
    return Main;
}());
//激活启动类
new Main();

},{"./Constants":1,"./Football":2,"./FootballPath":3,"./GameConfig":4,"./LoadingDialog":5,"./QuestionData":7,"./QuestionDialog":8,"./Screen1BackGround":9,"./ScrollDialog":10,"./ShakeDialog":11,"./basketball":12,"./page1&2":13,"./page2&3":14,"./page3&4":15,"./page3_runman":16,"./page4&5":17,"./running":18,"./swimming":19}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionShowY = [
    1313 + Laya.Browser.clientHeight,
    3307 + Laya.Browser.clientHeight,
    5827,
    6628,
    9120,
    9980,
    12144,
    13178,
    15460,
    15900
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
        title: "本赛季武磊夺取中超金靴，上一名夺得中超金靴的本土球员是谁？",
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
        _this.LBCH = Laya.Browser.clientHeight;
        _this.init();
        return _this;
    }
    Screen1BackGround.prototype.init = function () {
        this.bg0 = new Laya.Animation();
        this.bg0.size(Constants_1.default.stageWidth, Laya.Browser.clientHeight);
        var texture0 = this.bg0.loadAnimation("ani/first.ani");
        this.bg0.pos(256, 400);
        // this.bg0.graphics.drawImage(texture0)
        this.addChild(this.bg0);
        this.bg1 = new Laya.Sprite();
        this.bg1.pos(0, Laya.Browser.clientHeight + 200);
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
        this.cupAni.pos(400, 1020 + Laya.Browser.clientHeight + 200);
        this.whistleAni = new Laya.Animation();
        this.whistleAni.loadAnimation("ani/WhistleAni.ani");
        this.addChild(this.whistleAni);
        this.whistleAni.pos(100, 980 + Laya.Browser.clientHeight + 200);
        this.ShotAni = new Laya.Animation();
        this.ShotAni.loadAnimation("ani/ShotAni.ani");
        this.addChild(this.ShotAni);
        this.ShotAni.pos(220, 1850 + Laya.Browser.clientHeight + 200);
        this.text2002Ani = new Laya.Animation();
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani");
        this.addChild(this.text2002Ani);
        this.text2002Ani.pos(360, 2550 + Laya.Browser.clientHeight + 200);
        this.winAni = new Laya.Animation();
        this.winAni.loadAnimation("ani/winAni.ani");
        this.addChild(this.winAni);
        this.winAni.pos(260, 3050 + Laya.Browser.clientHeight + 200);
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
    Screen1BackGround.prototype.moveAni = function (aniName, y) {
        switch (aniName) {
            case "first":
                this.bg0.gotoAndStop(y);
                break;
        }
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
            case "first":
                this.bg0.play(180, false);
                break;
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
        var ResultDialogUI = /** @class */ (function (_super) {
            __extends(ResultDialogUI, _super);
            function ResultDialogUI() {
                return _super.call(this) || this;
            }
            ResultDialogUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ResultDialogUI.uiView);
            };
            ResultDialogUI.uiView = { "type": "Dialog", "props": { "width": 512, "height": 808 }, "compId": 2, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "visible": false, "var": "bgImageView", "texture": "view/score_1.jpg" }, "compId": 3 }, { "type": "Sprite", "props": { "y": 325, "x": 400, "visible": false, "var": "scoreImageView", "texture": "view/num_10.png" }, "compId": 4 }, { "type": "Button", "props": { "y": 618, "x": 80, "width": 150, "var": "onceMoreButton", "height": 50 }, "compId": 5 }, { "type": "Button", "props": { "y": 618, "x": 290, "width": 150, "var": "shareButton", "height": 50 }, "compId": 6 }], "loadList": ["view/score_1.jpg", "view/num_10.png"], "loadList3D": [] };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFX2JldGEuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9Db25zdGFudHMudHMiLCJzcmMvRm9vdGJhbGwudHMiLCJzcmMvRm9vdGJhbGxQYXRoLnRzIiwic3JjL0dhbWVDb25maWcudHMiLCJzcmMvTG9hZGluZ0RpYWxvZy50cyIsInNyYy9NYWluLnRzIiwic3JjL1F1ZXN0aW9uRGF0YS50cyIsInNyYy9RdWVzdGlvbkRpYWxvZy50cyIsInNyYy9TY3JlZW4xQmFja0dyb3VuZC50cyIsInNyYy9TY3JvbGxEaWFsb2cudHMiLCJzcmMvU2hha2VEaWFsb2cudHMiLCJzcmMvYmFza2V0YmFsbC50cyIsInNyYy9wYWdlMSYyLnRzIiwic3JjL3BhZ2UyJjMudHMiLCJzcmMvcGFnZTMmNC50cyIsInNyYy9wYWdlM19ydW5tYW4udHMiLCJzcmMvcGFnZTQmNS50cyIsInNyYy9ydW5uaW5nLnRzIiwic3JjL3N3aW1taW5nLnRzIiwic3JjL3VpL2xheWFNYXhVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQTtJQUFBO0lBd0NBLENBQUM7SUF2Q1UscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMscUJBQVcsR0FBRyxvQkFBb0IsQ0FBQTtJQUNsQyxxQkFBVyxHQUFHLG9CQUFvQixDQUFBO0lBQ2xDLHFCQUFXLEdBQUcsb0JBQW9CLENBQUE7SUFDbEMsMkJBQWlCLEdBQUcsSUFBSSxDQUFBO0lBQ3hCLDJCQUFpQixHQUFHLElBQUksQ0FBQTtJQUN4QiwyQkFBaUIsR0FBRyxJQUFJLENBQUE7SUFDeEIs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Q0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFpQmQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQWtCZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQW1CZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQTtBQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUE7QUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFBO0FBQ2YsR0FBRyxDQUFDLElB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QzlHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRSxHQUFHLEVBQUU7Z0JBQzlHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRSxHQUFHLEVBQUU7Z0JBQzlHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQzthQUNyRTtZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRSxHQUFHLEVBQUU7Z0JBQy9HLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFFLEdBQUcsQ0FB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Q1QsQ0FBQyxFQUFFLE1BQU07UUFDVCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSwwQkFBMEI7UUFDakMsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxpQ0FBaUM7UUFDeEMsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsTUFBTTtRQUNULENBQUMsRUFBRSxNQUFNO1FBQ1QsQ0FBQyxFQUFFLE1BQU07UUFDVCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLElBQUk7UUFDUCxNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxtQ0FBbUM7UUFDMUMsQ0FBQyxFQUFFLE1BQU07UUFDVCxDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxJQUFJO1FBQ1AsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsQ0FBQyxFQUFFLEtBQUs7UUFDUixDQUFDLEVBQUUsS0FBSztRQUNSLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSxzQkFBc0I7UUFDN0IsQ0FBQyxFQUFFLEdBQUc7UUFDTixDQUFDLEVBQUUsR0FBRztRQUNOLENBQUMsRUFBRSxHQUFHO1FBQ04sQ0FBQyxFQUFFLEdBQUc7UUFDTixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsQ0FBQyxFQUFFLElBQUk7UUFDUCxDQUFDLEVBQUUsSUFBSTtRQUNQLENBQUMsRUFBRSxLQUFLO1FBQ1IsQ0FBQyxFQUFFLEtBQUs7UUFDUixNQUFNLEVBQUUsR0FBRztLQUNkO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsRUFBRTtRQUNOLEtBQUssRUFBRSwyQkFBMkI7UUFDbEMsQ0FBQyxFQUFFLEtBQUs7UUFDUixD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akMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLG1CQUFtQjtZQUNuQix3Q0FBd0M7WUFDeEMsYUFBYTtZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssYUFBYTtnQkFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssS0FBSztnQkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssVUFBVTtnQkFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLHFCQUFxQjtZQUNyQiwwQ0FBMEM7WUFDMUMsYUFBYTtZQUNiLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUNWLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssV0FBVztnQkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEMsTUFBTTtZQUNW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QXdEZiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudHMge1xuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMCA9IFwiYmcvYmFja2dyb3VuZDAucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDEgPSBcImJnL2JhY2tncm91bmQxLnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQyID0gXCJiZy9iYWNrZ3JvdW5kMi5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMyA9IFwiYmcvYmFja2dyb3VuZDMucG5nXCJcbiAgICBzdGF0aWMgYmFja2dyb3VuZDQgPSBcImJnL2JhY2tncm91bmQ0LnBuZ1wiXG4gICAgc3RhdGljIGJhY2tncm91bmQ1ID0gXCJiZy9iYWNrZ3JvdW5kNS5wbmdcIlxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kMUhlaWdodCA9IDM2MDRcbiAgICBzdGF0aWMgYmFja2dyb3VuZDJIZWlnaHQgPSAyNTYxXG4gICAgc3RhdGljIGJhY2tncm91bmQzSGVpZ2h0ID0gMjE5MFxuICAgIHN0YXRpYyBiYWNrZ3JvdW5kNEhlaWdodCA9IDI1NTlcbiAgICBzdGF0aWMgYmFja2dyb3VuZDVIZWlnaHQgPSAxOTIwXG5cblxuICAgIHN0YXRpYyBzdGFnZVdpZHRoID0gNTEyXG4gICAgc3RhdGljIHN0YXRlSGVpZ2h0ID0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kNEhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kNUhlaWdodCArIDM4ODBcbiAgICBzdGF0aWMgc2NhbGVNb2RlOiBzdHJpbmcgPSBcIm5vYm9yZGVyXCI7XG4gICAgc3RhdGljIHNjcmVlbk1vZGU6IHN0cmluZyA9IFwidmVydGljYWxcIjtcblxuICAgIHN0YXRpYyBzb3VuZDAgPSBcInJlcy9zb3VuZC8wLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kMSA9IFwicmVzL3NvdW5kLzEubXAzXCJcbiAgICBzdGF0aWMgc291bmQyID0gXCJyZXMvc291bmQvMi5tcDNcIlxuICAgIHN0YXRpYyBzb3VuZDMgPSBcInJlcy9zb3VuZC8zLm1wM1wiXG4gICAgc3RhdGljIHNvdW5kNCA9IFwicmVzL3NvdW5kLzQubXAzXCJcbiAgICBzdGF0aWMgc291bmRCZ20gPSBcInJlcy9zb3VuZC9iZ20ubXAzXCJcbiAgICBzdGF0aWMgc291bmRCZ204ID0gXCJyZXMvc291bmQvYmdtOC5tcDNcIlxuICAgIFxuICAgIHN0YXRpYyBzY29yZTEgPSBcInZpZXcvc2NvcmVfMS5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTIgPSBcInZpZXcvc2NvcmVfMi5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTMgPSBcInZpZXcvc2NvcmVfMy5qcGdcIlxuICAgIHN0YXRpYyBzY29yZTQgPSBcInZpZXcvc2NvcmVfNC5qcGdcIlxuXG4gICAgc3RhdGljIHNwb3J0czAgPSBcInJlcy9hdGxhcy9zcG9ydHMucG5nXCJcbiAgICBzdGF0aWMgc3BvcnRzMSA9IFwicmVzL2F0bGFzL3Nwb3J0czEucG5nXCJcbiAgICBzdGF0aWMgc3BvcnRzMiA9IFwicmVzL2F0bGFzL3Nwb3J0czIucG5nXCJcblxuICAgIHN0YXRpYyB2aWV3ID0gXCJyZXMvYXRsYXMvdmlldy5wbmdcIlxuICAgIFxuICAgIHN0YXRpYyBsb2FkaW5nID0gXCJyZXMvYXRsYXMvbG9hZGluZy5wbmdcIlxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGJhbGwgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ6Laz55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Gb290YmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi2s+eQg+WBnOatouaXi+i9rFxuICAgICAqL1xuICAgIHN0b3BSb3RhdGUoKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5ib2R5QW5pLmlzUGxheWluZyl7XG4gICAgICAgICAgICByZXR1cm4gXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKDApXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6Laz55CDXGLml4vovaxcbiAgICAgKi9cbiAgICBwbGF5Um90YXRlKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ib2R5QW5pLmlzUGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9keUFuaS5wbGF5KDAsIHRydWUpXG5cbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb290YmFsbFgoeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCB4ID0gbWFwW3ldXG4gICAgaWYgKHgpIHtcbiAgICAgICAgcmV0dXJuIHhcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMFxuICAgIH1cbn1cbmNvbnN0IG1hcDogeyBba2V5OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xuXG5tYXBbMjMyXSA9IDMyNlxubWFwWzIzMl0gPSAzMjlcbm1hcFsyMzRdID0gMzMwXG5tYXBbMjM2XSA9IDMzMlxubWFwWzIzN10gPSAzMzRcbm1hcFsyMzddID0gMzM3XG5tYXBbMjM5XSA9IDMzOVxubWFwWzIzOV0gPSAzNDJcbm1hcFsyNDBdID0gMzQ0XG5tYXBbMjQyXSA9IDM0NVxubWFwWzI0NF0gPSAzNDdcbm1hcFsyNDVdID0gMzQ4XG5tYXBbMjQ3XSA9IDM1MFxubWFwWzI0OV0gPSAzNTJcbm1hcFsyNTBdID0gMzUzXG5tYXBbMjUyXSA9IDM1NVxubWFwWzI1NF0gPSAzNTdcbm1hcFsyNTVdID0gMzU4XG5tYXBbMjU3XSA9IDM2MFxubWFwWzI1OF0gPSAzNjJcbm1hcFsyNThdID0gMzY1XG5tYXBbMjYwXSA9IDM2NlxubWFwWzI2Ml0gPSAzNjhcbm1hcFsyNjNdID0gMzcwXG5tYXBbMjY1XSA9IDM3MVxubWFwWzI2N10gPSAzNzNcbm1hcFsyNjhdID0gMzc1XG5tYXBbMjcwXSA9IDM3NlxubWFwWzI3Ml0gPSAzNzhcbm1hcFsyNzNdID0gMzgwXG5tYXBbMjc1XSA9IDM4MVxubWFwWzI3OF0gPSAzODFcbm1hcFsyODFdID0gMzgxXG5tYXBbMjgzXSA9IDM4M1xubWFwWzI4Nl0gPSAzODNcbm1hcFsyODhdID0gMzg0XG5tYXBbMjkxXSA9IDM4NFxubWFwWzI5NF0gPSAzODRcbm1hcFsyOTZdID0gMzg2XG5tYXBbMjk5XSA9IDM4NlxubWFwWzMwM10gPSAzODZcbm1hcFszMDZdID0gMzg2XG5tYXBbMzA5XSA9IDM4NlxubWFwWzMxMl0gPSAzODZcbm1hcFszMTZdID0gMzg2XG5tYXBbMzE3XSA9IDM4OFxubWFwWzMyMV0gPSAzODhcbm1hcFszMjRdID0gMzg4XG5tYXBbMzI3XSA9IDM4OFxubWFwWzMzMF0gPSAzODhcbm1hcFszMzRdID0gMzg4XG5tYXBbMzM1XSA9IDM4NlxubWFwWzMzOV0gPSAzODZcbm1hcFszNDJdID0gMzg2XG5tYXBbMzQ1XSA9IDM4NlxubWFwWzM0OF0gPSAzODZcbm1hcFszNTJdID0gMzg0XG5tYXBbMzU1XSA9IDM4NFxubWFwWzM1N10gPSAzODNcbm1hcFszNjBdID0gMzgzXG5tYXBbMzYxXSA9IDM4MVxubWFwWzM2M10gPSAzODBcbm1hcFszNjVdID0gMzc4XG5tYXBbMzY2XSA9IDM3NlxubWFwWzM3MF0gPSAzNzVcbm1hcFszNzFdID0gMzczXG5tYXBbMzczXSA9IDM3MVxubWFwWzM3Nl0gPSAzNzBcbm1hcFszNzhdID0gMzY4XG5tYXBbMzc5XSA9IDM2NlxubWFwWzM4MV0gPSAzNjVcbm1hcFszODNdID0gMzYzXG5tYXBbMzg2XSA9IDM2M1xubWFwWzM4OF0gPSAzNjJcbm1hcFszODldID0gMzYwXG5tYXBbMzkxXSA9IDM1OFxubWFwWzM5M10gPSAzNTdcbm1hcFszOTRdID0gMzU1XG5tYXBbMzk2XSA9IDM1M1xubWFwWzM5N10gPSAzNTJcbm1hcFszOTldID0gMzUwXG5tYXBbNDAxXSA9IDM0OFxubWFwWzQwNF0gPSAzNDhcbm1hcFs0MDZdID0gMzQ3XG5tYXBbNDA3XSA9IDM0NVxubWFwWzQwOV0gPSAzNDRcbm1hcFs0MTFdID0gMzQyXG5tYXBbNDEyXSA9IDM0MFxubWFwWzQxNF0gPSAzMzlcbm1hcFs0MTVdID0gMzM3XG5tYXBbNDE3XSA9IDMzNVxubWFwWzQxOV0gPSAzMzRcbm1hcFs0MjBdID0gMzMyXG5tYXBbNDIyXSA9IDMzMFxubWFwWzQyNV0gPSAzMjlcbm1hcFs0MjddID0gMzI3XG5tYXBbNDI5XSA9IDMyNlxubWFwWzQzMl0gPSAzMjZcbm1hcFs0MzNdID0gMzI0XG5tYXBbNDM1XSA9IDMyMlxubWFwWzQzN10gPSAzMjFcbm1hcFs0MzhdID0gMzE5XG5tYXBbNDQwXSA9IDMxN1xubWFwWzQ0Ml0gPSAzMTZcbm1hcFs0NDNdID0gMzE0XG5tYXBbNDQ1XSA9IDMxMlxubWFwWzQ0OF0gPSAzMTJcbm1hcFs0NTBdID0gMzExXG5tYXBbNDUxXSA9IDMwOVxubWFwWzQ1NV0gPSAzMDhcbm1hcFs0NTZdID0gMzA2XG5tYXBbNDU4XSA9IDMwNFxubWFwWzQ2MV0gPSAzMDNcbm1hcFs0NjNdID0gMzAxXG5tYXBbNDY1XSA9IDI5OVxubWFwWzQ2Nl0gPSAyOThcbm1hcFs0NjhdID0gMjk2XG5tYXBbNDY5XSA9IDI5NFxubWFwWzQ3MV0gPSAyOTNcbm1hcFs0NzRdID0gMjkzXG5tYXBbNDc2XSA9IDI5MVxubWFwWzQ3OF0gPSAyOTBcbm1hcFs0NzldID0gMjg4XG5tYXBbNDgxXSA9IDI4NlxubWFwWzQ4M10gPSAyODVcbm1hcFs0ODRdID0gMjgzXG5tYXBbNDg2XSA9IDI4MVxubWFwWzQ4N10gPSAyODBcbm1hcFs0OTFdID0gMjgwXG5tYXBbNDkyXSA9IDI3OFxubWFwWzQ5NF0gPSAyNzZcbm1hcFs0OTZdID0gMjc1XG5tYXBbNDk3XSA9IDI3M1xubWFwWzQ5OV0gPSAyNzJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxubWFwWzQ5OV0gPSAyNzJcbm1hcFs1MDJdID0gMjcyXG5tYXBbNTA0XSA9IDI3MFxubWFwWzUwNV0gPSAyNjhcbm1hcFs1MDddID0gMjY3XG5tYXBbNTA5XSA9IDI2NVxubWFwWzUxMF0gPSAyNjNcbm1hcFs1MTRdID0gMjYyXG5tYXBbNTE1XSA9IDI2MFxubWFwWzUxN10gPSAyNThcbm1hcFs1MTldID0gMjU3XG5tYXBbNTIwXSA9IDI1NVxubWFwWzUyMl0gPSAyNTRcbm1hcFs1MjNdID0gMjUyXG5tYXBbNTI1XSA9IDI1MFxubWFwWzUyN10gPSAyNDdcbm1hcFs1MjhdID0gMjQ1XG5tYXBbNTMwXSA9IDI0NFxubWFwWzUzMl0gPSAyNDJcbm1hcFs1MzNdID0gMjQwXG5tYXBbNTMzXSA9IDIzN1xubWFwWzUzNV0gPSAyMzZcbm1hcFs1MzZdID0gMjM0XG5tYXBbNTM4XSA9IDIzMlxubWFwWzU0MF0gPSAyMzFcbm1hcFs1NDFdID0gMjI5XG5tYXBbNTQzXSA9IDIyNlxubWFwWzU0NV0gPSAyMjRcbm1hcFs1NDZdID0gMjIyXG5tYXBbNTQ4XSA9IDIyMVxubWFwWzU1MF0gPSAyMTlcbm1hcFs1NTFdID0gMjE4XG5tYXBbNTUzXSA9IDIxNlxubWFwWzU1Nl0gPSAyMTZcbm1hcFs1NThdID0gMjE0XG5tYXBbNTU5XSA9IDIxM1xubWFwWzU2MV0gPSAyMTFcbm1hcFs1NjRdID0gMjExXG5tYXBbNTY2XSA9IDIwOVxubWFwWzU2OF0gPSAyMDhcbm1hcFs1NzFdID0gMjA4XG5tYXBbNTcyXSA9IDIwNlxubWFwWzU3NF0gPSAyMDRcbm1hcFs1NzZdID0gMjAzXG5tYXBbNTc5XSA9IDIwM1xubWFwWzU4MV0gPSAyMDFcbm1hcFs1ODJdID0gMjAwXG5tYXBbNTg0XSA9IDE5OFxubWFwWzU4Nl0gPSAxOTZcbm1hcFs1ODddID0gMTk1XG5tYXBbNTkwXSA9IDE5NVxubWFwWzU5Ml0gPSAxOTNcbm1hcFs1OTVdID0gMTkzXG5tYXBbNTk3XSA9IDE5MVxubWFwWzYwMF0gPSAxOTFcbm1hcFs2MDJdID0gMTkwXG5tYXBbNjA0XSA9IDE4OFxubWFwWzYwN10gPSAxODhcbm1hcFs2MDhdID0gMTg2XG5tYXBbNjEwXSA9IDE4NVxubWFwWzYxM10gPSAxODVcbm1hcFs2MTVdID0gMTgzXG5tYXBbNjE3XSA9IDE4MlxubWFwWzYxOF0gPSAxODBcbm1hcFs2MjJdID0gMTc4XG5tYXBbNjIzXSA9IDE3N1xubWFwWzYyNl0gPSAxNzdcbm1hcFs2MjhdID0gMTc1XG5tYXBbNjMwXSA9IDE3M1xubWFwWzYzMV0gPSAxNzJcbm1hcFs2MzVdID0gMTcyXG5tYXBbNjM2XSA9IDE3MFxubWFwWzYzOF0gPSAxNjhcbm1hcFs2NDBdID0gMTY3XG5tYXBbNjQzXSA9IDE2N1xubWFwWzY0NF0gPSAxNjVcbm1hcFs2NDhdID0gMTY0XG5tYXBbNjUxXSA9IDE2NFxubWFwWzY1M10gPSAxNjJcbm1hcFs2NTZdID0gMTYyXG5tYXBbNjU4XSA9IDE2MFxubWFwWzY2MV0gPSAxNjBcbm1hcFs2NjJdID0gMTU5XG5tYXBbNjY2XSA9IDE1OVxubWFwWzY2N10gPSAxNTdcbm1hcFs2NzFdID0gMTU3XG5tYXBbNjcyXSA9IDE1NVxubWFwWzY3Nl0gPSAxNTVcbm1hcFs2NzldID0gMTU1XG5tYXBbNjgwXSA9IDE1NFxubWFwWzY4NF0gPSAxNTRcbm1hcFs2ODddID0gMTU0XG5tYXBbNjkwXSA9IDE1NFxubWFwWzY5NF0gPSAxNTRcbm1hcFs2OTddID0gMTU0XG5tYXBbNzAwXSA9IDE1NFxubWFwWzcwM10gPSAxNTRcbm1hcFs3MDddID0gMTU0XG5tYXBbNzEwXSA9IDE1NFxubWFwWzcxM10gPSAxNTRcbm1hcFs3MTZdID0gMTU0XG5tYXBbNzIwXSA9IDE1NFxubWFwWzcyM10gPSAxNTRcbm1hcFs3MjZdID0gMTU0XG5tYXBbNzMwXSA9IDE1NFxubWFwWzczM10gPSAxNTRcbm1hcFs3MzZdID0gMTU1XG5tYXBbNzM5XSA9IDE1NVxubWFwWzc0M10gPSAxNTVcbm1hcFs3NDZdID0gMTU1XG5tYXBbNzQ5XSA9IDE1NVxubWFwWzc1MV0gPSAxNTdcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbNzUxXSA9IDE1NVxubWFwWzc1NF0gPSAxNTVcbm1hcFs3NTZdID0gMTU3XG5tYXBbNzU5XSA9IDE1N1xubWFwWzc2MV0gPSAxNTlcbm1hcFs3NjRdID0gMTU5XG5tYXBbNzY1XSA9IDE2MFxubWFwWzc2N10gPSAxNjJcbm1hcFs3NzBdID0gMTYyXG5tYXBbNzcyXSA9IDE2NFxubWFwWzc3NV0gPSAxNjRcbm1hcFs3NzddID0gMTY1XG5tYXBbNzgwXSA9IDE2N1xubWFwWzc4M10gPSAxNjdcbm1hcFs3ODVdID0gMTY4XG5tYXBbNzg4XSA9IDE2OFxubWFwWzc5MF0gPSAxNzBcbm1hcFs3OTNdID0gMTcwXG5tYXBbNzk1XSA9IDE3MlxubWFwWzc5N10gPSAxNzNcbm1hcFs4MDBdID0gMTczXG5tYXBbODAxXSA9IDE3NVxubWFwWzgwNV0gPSAxNzVcbm1hcFs4MDZdID0gMTc3XG5tYXBbODA4XSA9IDE3OFxubWFwWzgxMV0gPSAxNzhcbm1hcFs4MTNdID0gMTgwXG5tYXBbODE1XSA9IDE4MlxubWFwWzgxOF0gPSAxODJcbm1hcFs4MTldID0gMTgzXG5tYXBbODIxXSA9IDE4NVxubWFwWzgyM10gPSAxODZcbm1hcFs4MjZdID0gMTg2XG5tYXBbODI4XSA9IDE4OFxubWFwWzgyOV0gPSAxOTBcbm1hcFs4MzNdID0gMTkxXG5tYXBbODM0XSA9IDE5M1xubWFwWzgzN10gPSAxOTNcbm1hcFs4MzldID0gMTk1XG5tYXBbODQxXSA9IDE5NlxubWFwWzg0Ml0gPSAxOThcbm1hcFs4NDRdID0gMjAwXG5tYXBbODQ2XSA9IDIwMVxubWFwWzg0N10gPSAyMDNcbm1hcFs4NDldID0gMjA0XG5tYXBbODUxXSA9IDIwNlxubWFwWzg1Ml0gPSAyMDhcbm1hcFs4NTRdID0gMjA5XG5tYXBbODU3XSA9IDIxMVxubWFwWzg1OV0gPSAyMTNcbm1hcFs4NjBdID0gMjE0XG5tYXBbODY0XSA9IDIxNFxubWFwWzg2NV0gPSAyMTZcbm1hcFs4NjddID0gMjE4XG5tYXBbODY5XSA9IDIxOVxubWFwWzg3MF0gPSAyMjFcbm1hcFs4NzJdID0gMjIyXG5tYXBbODc1XSA9IDIyMlxubWFwWzg3N10gPSAyMjRcbm1hcFs4NzhdID0gMjI2XG5tYXBbODc4XSA9IDIyOVxubWFwWzg4MF0gPSAyMzFcbm1hcFs4ODJdID0gMjMyXG5tYXBbODgzXSA9IDIzNFxubWFwWzg4NV0gPSAyMzZcbm1hcFs4ODddID0gMjM3XG5tYXBbODg4XSA9IDIzOVxubWFwWzg5MF0gPSAyNDBcbm1hcFs4OTFdID0gMjQyXG5tYXBbODkzXSA9IDI0NFxubWFwWzg5NV0gPSAyNDVcbm1hcFs4OTZdID0gMjQ3XG5tYXBbODk4XSA9IDI0OVxubWFwWzkwMF0gPSAyNTBcbm1hcFs5MDFdID0gMjUyXG5tYXBbOTAzXSA9IDI1NFxubWFwWzkwNV0gPSAyNTVcbm1hcFs5MDhdID0gMjU3XG5tYXBbOTA5XSA9IDI1OFxubWFwWzkxM10gPSAyNjBcbm1hcFs5MTZdID0gMjYwXG5tYXBbOTE4XSA9IDI2MlxubWFwWzkyMV0gPSAyNjJcbm1hcFs5MjRdID0gMjYyXG5tYXBbOTI3XSA9IDI2MlxubWFwWzkzMV0gPSAyNjJcbm1hcFs5MzJdID0gMjYzXG5tYXBbOTM0XSA9IDI2MlxubWFwWzkzN10gPSAyNjJcbm1hcFs5NDFdID0gMjYyXG5tYXBbOTQ0XSA9IDI2MlxubWFwWzk0N10gPSAyNjBcbm1hcFs5NTBdID0gMjYwXG5tYXBbOTU0XSA9IDI1OFxubWFwWzk1N10gPSAyNTdcbm1hcFs5NjBdID0gMjU1XG5tYXBbOTYzXSA9IDI1NFxubWFwWzk2N10gPSAyNTJcbm1hcFs5NzBdID0gMjUyXG5tYXBbOTcyXSA9IDI1MFxubWFwWzk3M10gPSAyNDlcbm1hcFs5NzZdID0gMjQ5XG5tYXBbOTgwXSA9IDI0OVxubWFwWzk4MV0gPSAyNDdcbm1hcFs5ODVdID0gMjQ3XG5tYXBbOTg2XSA9IDI0NVxubWFwWzk4OF0gPSAyNDRcbm1hcFs5OTFdID0gMjQ0XG5tYXBbOTkzXSA9IDI0MlxubWFwWzk5NF0gPSAyNDBcbm1hcFs5OThdID0gMjQwXG5tYXBbOTk5XSA9IDIzOVxubWFwWzEwMDFdID0gMjM3XG5tYXBbMTAwNF0gPSAyMzZcbm1hcFsxMDA2XSA9IDIzNFxubWFwWzEwMDldID0gMjMyXG5tYXBbMTAxMV0gPSAyMzFcbm1hcFsxMDEyXSA9IDIyOVxubWFwWzEwMTRdID0gMjI3XG5tYXBbMTAxN10gPSAyMjZcbm1hcFsxMDE5XSA9IDIyNFxubWFwWzEwMjFdID0gMjIyXG5tYXBbMTAyNF0gPSAyMjFcbm1hcFsxMDI2XSA9IDIxOVxubWFwWzEwMjldID0gMjE5XG5tYXBbMTAzMl0gPSAyMjFcbm1hcFsxMDM1XSA9IDIyMlxubWFwWzEwMzldID0gMjIyXG5tYXBbMTA0MF0gPSAyMjRcbm1hcFsxMDQyXSA9IDIyNlxubWFwWzEwNDVdID0gMjI2XG5tYXBbMTA0N10gPSAyMjdcbm1hcFsxMDQ4XSA9IDIyOVxubWFwWzEwNTJdID0gMjI5XG5tYXBbMTA1M10gPSAyMzFcbm1hcFsxMDU1XSA9IDIzMlxubWFwWzEwNThdID0gMjM0XG5tYXBbMTA2MF0gPSAyMzZcbm1hcFsxMDYyXSA9IDIzN1xubWFwWzEwNjVdID0gMjM5XG5tYXBbMTA2Nl0gPSAyNDBcbm1hcFsxMDY4XSA9IDI0MlxubWFwWzEwNzBdID0gMjQ0XG5tYXBbMTA3MV0gPSAyNDVcbm1hcFsxMDczXSA9IDI0N1xubWFwWzEwNzVdID0gMjQ5XG5tYXBbMTA3Nl0gPSAyNTBcbm1hcFsxMDc4XSA9IDI1MlxubWFwWzEwODBdID0gMjU0XG5tYXBbMTA4MV0gPSAyNTVcbm1hcFsxMDg0XSA9IDI1NVxubWFwWzEwODhdID0gMjU1XG5tYXBbMTA5MV0gPSAyNTVcbm1hcFsxMDk0XSA9IDI1NVxubWFwWzEwOTZdID0gMjU3XG5tYXBbMTA5OV0gPSAyNTdcbm1hcFsxMTAyXSA9IDI1N1xubWFwWzExMDZdID0gMjU3XG5tYXBbMTEwOV0gPSAyNThcbm1hcFsxMTEyXSA9IDI1N1xubWFwWzExMTZdID0gMjU3XG5tYXBbMTExN10gPSAyNThcbm1hcFsxMTIwXSA9IDI1OFxubWFwWzExMjRdID0gMjU4XG5tYXBbMTEyN10gPSAyNThcbm1hcFsxMTI5XSA9IDI2MFxubWFwWzExMzJdID0gMjYwXG5tYXBbMTEzNV0gPSAyNjBcbm1hcFsxMTM3XSA9IDI2MlxubWFwWzExNDBdID0gMjYyXG5tYXBbMTE0M10gPSAyNjNcbm1hcFsxMTQ3XSA9IDI2M1xubWFwWzExNTBdID0gMjYzXG5tYXBbMTE1M10gPSAyNjNcbm1hcFsxMTU2XSA9IDI2M1xubWFwWzExNjBdID0gMjY1XG5tYXBbMTE2M10gPSAyNjVcbm1hcFsxMTY2XSA9IDI2NVxubWFwWzExNjldID0gMjY1XG5tYXBbMTE3M10gPSAyNjVcbm1hcFsxMTc2XSA9IDI2NVxubWFwWzExNzhdID0gMjY3XG5tYXBbMTE4MV0gPSAyNjdcbm1hcFsxMTg0XSA9IDI2N1xubWFwWzExODddID0gMjY3XG5tYXBbMTE5MV0gPSAyNjdcbm1hcFsxMTkyXSA9IDI2OFxubWFwWzExOTZdID0gMjY4XG5tYXBbMTE5OV0gPSAyNjhcbm1hcFsxMjAyXSA9IDI2OFxubWFwWzEyMDRdID0gMjcwXG5tYXBbMTIwN10gPSAyNzBcbm1hcFsxMjEwXSA9IDI3MFxubWFwWzEyMTRdID0gMjcwXG5tYXBbMTIxNV0gPSAyNzJcbm1hcFsxMjE5XSA9IDI3MlxubWFwWzEyMjJdID0gMjcyXG5tYXBbMTIyNV0gPSAyNzJcbm1hcFsxMjI3XSA9IDI3M1xubWFwWzEyMzBdID0gMjczXG5tYXBbMTIzM10gPSAyNzNcbm1hcFsxMjM3XSA9IDI3M1xubWFwWzEyNDBdID0gMjczXG5tYXBbMTI0MV0gPSAyNzVcbm1hcFsxMjQ1XSA9IDI3NVxubWFwWzEyNDhdID0gMjc1XG5tYXBbMTI1MV0gPSAyNzVcbm1hcFsxMjU1XSA9IDI3NVxubWFwWzEyNThdID0gMjc1XG5tYXBbMTI1OV0gPSAyNzZcbm1hcFsxMjYzXSA9IDI3NlxubWFwWzEyNjZdID0gMjc2XG5tYXBbMTI2OV0gPSAyNzZcbm1hcFsxMjczXSA9IDI3NlxubWFwWzEyNzZdID0gMjc2XG5tYXBbMTI3N10gPSAyNzhcbm1hcFsxMjgxXSA9IDI3OFxubWFwWzEyODRdID0gMjc4XG5tYXBbMTI4N10gPSAyNzhcbm1hcFsxMjg5XSA9IDI4MFxubWFwWzEyOTJdID0gMjgwXG5tYXBbMTI5NV0gPSAyODBcbm1hcFsxMjk3XSA9IDI4MVxubWFwWzEzMDBdID0gMjgxXG5tYXBbMTMwMl0gPSAyODNcbm1hcFsxMzA1XSA9IDI4NVxubWFwWzEzMDldID0gMjg2XG5tYXBbMTMxMF0gPSAyODhcbm1hcFsxMzEzXSA9IDI4OFxubWFwWzEzMTVdID0gMjkwXG5tYXBbMTMxN10gPSAyOTFcbm1hcFsxMzIwXSA9IDI5MVxubWFwWzEzMjJdID0gMjkzXG5tYXBbMTMyM10gPSAyOTRcbm1hcFsxMzI1XSA9IDI5NlxubWFwWzEzMjhdID0gMjk2XG5tYXBbMTMzMF0gPSAyOThcbm1hcFsxMzMxXSA9IDI5OVxubWFwWzEzMzNdID0gMzAxXG5tYXBbMTMzNl0gPSAzMDNcbm1hcFsxMzM4XSA9IDMwNFxubWFwWzEzNDFdID0gMzA0XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5tYXBbMTM0MV0gPSAzMDRcbm1hcFsxMzQ0XSA9IDMwNFxubWFwWzEzNDZdID0gMzA2XG5tYXBbMTM0OV0gPSAzMDZcbm1hcFsxMzUyXSA9IDMwNlxubWFwWzEzNTRdID0gMzA4XG5tYXBbMTM1N10gPSAzMDhcbm1hcFsxMzYwXSA9IDMwOFxubWFwWzEzNjJdID0gMzA5XG5tYXBbMTM2NV0gPSAzMDlcbm1hcFsxMzY5XSA9IDMwOVxubWFwWzEzNzBdID0gMzExXG5tYXBbMTM3M10gPSAzMTFcbm1hcFsxMzc3XSA9IDMxMVxubWFwWzEzNzhdID0gMzEyXG5tYXBbMTM4Ml0gPSAzMTJcbm1hcFsxMzg1XSA9IDMxMlxubWFwWzEzODddID0gMzE0XG5tYXBbMTM5MF0gPSAzMTRcbm1hcFsxMzkzXSA9IDMxNFxubWFwWzEzOTVdID0gMzE2XG5tYXBbMTM5OF0gPSAzMTZcbm1hcFsxNDAxXSA9IDMxNlxubWFwWzE0MDVdID0gMzE2XG5tYXBbMTQwOF0gPSAzMTZcbm1hcFsxNDA5XSA9IDMxN1xubWFwWzE0MTNdID0gMzE3XG5tYXBbMTQxNl0gPSAzMTdcbm1hcFsxNDE5XSA9IDMxN1xubWFwWzE0MjNdID0gMzE3XG5tYXBbMTQyNF0gPSAzMTlcbm1hcFsxNDI3XSA9IDMxOVxubWFwWzE0MzFdID0gMzE5XG5tYXBbMTQzMl0gPSAzMjFcbm1hcFsxNDM2XSA9IDMyMVxubWFwWzE0MzldID0gMzIxXG5tYXBbMTQ0MV0gPSAzMjJcbm1hcFsxNDQ0XSA9IDMyMlxubWFwWzE0NDddID0gMzIyXG5tYXBbMTQ0OV0gPSAzMjRcbm1hcFsxNDUyXSA9IDMyNFxubWFwWzE0NTVdID0gMzI0XG5tYXBbMTQ1N10gPSAzMjZcbm1hcFsxNDYwXSA9IDMyNlxubWFwWzE0NjNdID0gMzI2XG5tYXBbMTQ2N10gPSAzMjZcbm1hcFsxNDcwXSA9IDMyNlxubWFwWzE0NzNdID0gMzI2XG5tYXBbMTQ3Nl0gPSAzMjZcbm1hcFsxNDgwXSA9IDMyNlxubWFwWzE0ODNdID0gMzI2XG5tYXBbMTQ4Nl0gPSAzMjZcbm1hcFsxNDkwXSA9IDMyNlxubWFwWzE0OTNdID0gMzI2XG5tYXBbMTQ5Nl0gPSAzMjZcbm1hcFsxNDk5XSA9IDMyNlxubWFwWzE1MDNdID0gMzI2XG5tYXBbMTUwNl0gPSAzMjZcbm1hcFsxNTA4XSA9IDMyNFxubWFwWzE1MTFdID0gMzI0XG5tYXBbMTUxNF0gPSAzMjRcbm1hcFsxNTE3XSA9IDMyNFxubWFwWzE1MTldID0gMzIyXG5tYXBbMTUyMl0gPSAzMjJcbm1hcFsxNTI2XSA9IDMyMlxubWFwWzE1MjddID0gMzIxXG5tYXBbMTUyN10gPSAzMjFcbm1hcFsxNTMwXSA9IDMyMVxubWFwWzE1MzRdID0gMzIxXG5tYXBbMTUzN10gPSAzMjFcbm1hcFsxNTQwXSA9IDMyMVxubWFwWzE1NDRdID0gMzIxXG5tYXBbMTU0N10gPSAzMjFcbm1hcFsxNTUwXSA9IDMyMVxubWFwWzE1NTJdID0gMzE5XG5tYXBbMTU1NV0gPSAzMTlcbm1hcFsxNTU3XSA9IDMxN1xubWFwWzE1NjBdID0gMzE3XG5tYXBbMTU2Ml0gPSAzMTZcbm1hcFsxNTY1XSA9IDMxNlxubWFwWzE1NjZdID0gMzE0XG5tYXBbMTU3MF0gPSAzMTRcbm1hcFsxNTczXSA9IDMxNFxubWFwWzE1NzVdID0gMzEyXG5tYXBbMTU3OF0gPSAzMTJcbm1hcFsxNTgxXSA9IDMxMVxubWFwWzE1ODRdID0gMzExXG5tYXBbMTU4OF0gPSAzMDlcbm1hcFsxNTkxXSA9IDMwOVxubWFwWzE1OTRdID0gMzA5XG5tYXBbMTU5Nl0gPSAzMDhcbm1hcFsxNTk5XSA9IDMwOFxubWFwWzE2MDFdID0gMzA4XG5tYXBbMTYwMV0gPSAzMDhcbm1hcFsxNjA0XSA9IDMwOFxubWFwWzE2MDZdID0gMzA2XG5tYXBbMTYwOV0gPSAzMDZcbm1hcFsxNjEyXSA9IDMwNFxubWFwWzE2MTZdID0gMzA0XG5tYXBbMTYxN10gPSAzMDNcbm1hcFsxNjIwXSA9IDMwM1xubWFwWzE2MjRdID0gMzAzXG5tYXBbMTYyN10gPSAzMDNcbm1hcFsxNjI5XSA9IDMwMVxubWFwWzE2MzJdID0gMzAxXG5tYXBbMTYzNV0gPSAzMDFcbm1hcFsxNjM3XSA9IDI5OVxubWFwWzE2NDBdID0gMjk5XG5tYXBbMTY0M10gPSAyOTlcbm1hcFsxNjQ3XSA9IDI5OVxubWFwWzE2NTBdID0gMjk5XG5tYXBbMTY1Ml0gPSAyOThcbm1hcFsxNjU1XSA9IDI5OFxubWFwWzE2NThdID0gMjk4XG5tYXBbMTY2MV0gPSAyOThcbm1hcFsxNjY1XSA9IDI5OFxubWFwWzE2NjZdID0gMjk2XG5tYXBbMTY2OV0gPSAyOTZcbm1hcFsxNjczXSA9IDI5NlxubWFwWzE2NzRdID0gMjk0XG5tYXBbMTY3Nl0gPSAyOTRcbm1hcFsxNjc5XSA9IDI5NFxubWFwWzE2ODNdID0gMjk0XG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg0XSA9IDI5M1xubWFwWzE2ODRdID0gMjkzXG5tYXBbMTY4NF0gPSAyOTNcbm1hcFsxNjg3XSA9IDI5M1xubWFwWzE2OTFdID0gMjkzXG5tYXBbMTY5NF0gPSAyOTNcbm1hcFsxNjk3XSA9IDI5M1xubWFwWzE3MDFdID0gMjkzXG5tYXBbMTcwNV0gPSAyOTFcbm1hcFsxNzA5XSA9IDI5MVxubWFwWzE3MTJdID0gMjkxXG5tYXBbMTcxNV0gPSAyOTFcbm1hcFsxNzE5XSA9IDI5MVxubWFwWzE3MjJdID0gMjkxXG5tYXBbMTcyNV0gPSAyOTFcbm1hcFsxNzI4XSA9IDI5MVxubWFwWzE3MzJdID0gMjkxXG5tYXBbMTczNV0gPSAyOTFcbm1hcFsxNzM4XSA9IDI5MVxubWFwWzE3NDFdID0gMjkxXG5tYXBbMTc0NV0gPSAyOTFcbm1hcFsxNzQ2XSA9IDI5MFxubWFwWzE3NTBdID0gMjkwXG5tYXBbMTc1M10gPSAyOTBcbm1hcFsxNzU2XSA9IDI5MFxubWFwWzE3NTldID0gMjkwXG5tYXBbMTc2M10gPSAyOTBcbm1hcFsxNzY2XSA9IDI5MFxubWFwWzE3NjldID0gMjkwXG5tYXBbMTc2OV0gPSAyOTBcbm1hcFsxNzY5XSA9IDI5MFxubWFwWzE3NzNdID0gMjkwXG5tYXBbMTc3Nl0gPSAyOTBcbm1hcFsxNzc5XSA9IDI5MFxubWFwWzE3ODJdID0gMjkwXG5tYXBbMTc4Nl0gPSAyOTBcbm1hcFsxNzg5XSA9IDI5MFxubWFwWzE3OTJdID0gMjkwXG5tYXBbMTc5NV0gPSAyOTBcbm1hcFsxNzk5XSA9IDI5MFxubWFwWzE4MDJdID0gMjkwXG5tYXBbMTgwNV0gPSAyOTBcbm1hcFsxODA5XSA9IDI5MFxubWFwWzE4MTJdID0gMjkwXG5tYXBbMTgxM10gPSAyODhcbm1hcFsxODE3XSA9IDI4OFxubWFwWzE4MjBdID0gMjg4XG5tYXBbMTgyM10gPSAyODhcbm1hcFsxODI3XSA9IDI4OFxubWFwWzE4MzBdID0gMjg4XG5tYXBbMTgzM10gPSAyODhcbm1hcFsxODM2XSA9IDI5MFxubWFwWzE4NDBdID0gMjkwXG5tYXBbMTg0MV0gPSAyOTBcbm1hcFsxODQ1XSA9IDI5MFxubWFwWzE4NDhdID0gMjkwXG5tYXBbMTg1MV0gPSAyOTBcbm1hcFsxODUzXSA9IDI5MVxubWFwWzE4NTZdID0gMjkxXG5tYXBbMTg1Nl0gPSAyOTFcbm1hcFsxODU2XSA9IDI5MVxubWFwWzE4NTldID0gMjkxXG5tYXBbMTg2M10gPSAyOTFcbm1hcFsxODY2XSA9IDI5MVxubWFwWzE4NjddID0gMjkxXG5tYXBbMTg2OV0gPSAyOTNcbm1hcFsxODcyXSA9IDI5M1xubWFwWzE4NzZdID0gMjkzXG5tYXBbMTg3Nl0gPSAyOTNcbm1hcFsxODc3XSA9IDI5M1xubWFwWzE4ODBdID0gMjkzXG4iLCIvKipUaGlzIGNsYXNzIGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IExheWFBaXJJREUsIHBsZWFzZSBkbyBub3QgbWFrZSBhbnkgbW9kaWZpY2F0aW9ucy4gKi9cclxuXHJcbi8qXHJcbiog5ri45oiP5Yid5aeL5YyW6YWN572uO1xyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29uZmlne1xyXG4gICAgc3RhdGljIHdpZHRoOm51bWJlcj01MTI7XHJcbiAgICBzdGF0aWMgaGVpZ2h0Om51bWJlcj03Njg7XHJcbiAgICBzdGF0aWMgc2NhbGVNb2RlOnN0cmluZz1cIm5vYm9yZGVyXCI7XHJcbiAgICBzdGF0aWMgc2NyZWVuTW9kZTpzdHJpbmc9XCJ2ZXJ0aWNhbFwiO1xyXG4gICAgc3RhdGljIGFsaWduVjpzdHJpbmc9XCJ0b3BcIjtcclxuICAgIHN0YXRpYyBhbGlnbkg6c3RyaW5nPVwiY2VudGVyXCI7XHJcbiAgICBzdGF0aWMgc3RhcnRTY2VuZTphbnk9XCJkaWFsb2cvTG9hZGluZ0RpYWxvZy5zY2VuZVwiO1xyXG4gICAgc3RhdGljIHNjZW5lUm9vdDpzdHJpbmc9XCJcIjtcclxuICAgIHN0YXRpYyBkZWJ1Zzpib29sZWFuPWZhbHNlO1xyXG4gICAgc3RhdGljIHN0YXQ6Ym9vbGVhbj1mYWxzZTtcclxuICAgIHN0YXRpYyBwaHlzaWNzRGVidWc6Ym9vbGVhbj10cnVlO1xyXG4gICAgc3RhdGljIGV4cG9ydFNjZW5lVG9Kc29uOmJvb2xlYW49dHJ1ZTtcclxuICAgIGNvbnN0cnVjdG9yKCl7fVxyXG4gICAgc3RhdGljIGluaXQoKXtcclxuICAgICAgICB2YXIgcmVnOiBGdW5jdGlvbiA9IExheWEuQ2xhc3NVdGlscy5yZWdDbGFzcztcclxuXHJcbiAgICB9XHJcbn1cclxuR2FtZUNvbmZpZy5pbml0KCk7IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdEaWFsb2cgZXh0ZW5kcyB1aS5kaWFsb2cuTG9hZGluZ0RpYWxvZ1VJIHtcbiAgICAvLyBwcml2YXRlIHByb2dyZXNzID0gJzAnXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgfVxuXG4gICAgb25PcGVuZWQoKSB7XG4gICAgICAgIC8vIHRoaXMuY2hhbmdlUHJvZ3Jlc3NWYWx1ZSgwKSAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUHJvZ3Jlc3NWYWx1ZShuYmVyOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb2dyZXNzKSB7XG4gICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLmNoYW5nZVByb2dyZXNzVmFsdWUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBudW0gPSBNYXRoLmNlaWwobmJlciAqIDEwMCkgKyBcIiVcIlxuICAgICAgICBjb25zb2xlLmxvZyhudW0pXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudGV4dCA9IG51bTtcbiAgICAgICAgaWYgKG5iZXIgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5vbihMYXlhLkV2ZW50Lk1PVVNFX0RPV04sIHRoaXMsIHRoaXMub25DbGljayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVGlwKHRpcDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MudGV4dCA9IHRpcFxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG59IiwiaW1wb3J0IEdhbWVDb25maWcgZnJvbSBcIi4vR2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQgU2NyZWVuMUJhY2tHcm91bmQgZnJvbSBcIi4vU2NyZWVuMUJhY2tHcm91bmRcIjtcclxuaW1wb3J0IEZvb3RiYWxsIGZyb20gXCIuL0Zvb3RiYWxsXCI7XHJcbmltcG9ydCBCYXNrZXRiYWxsIGZyb20gXCIuL2Jhc2tldGJhbGxcIjtcclxuaW1wb3J0IHJ1bm5pbmcgZnJvbSBcIi4vcnVubmluZ1wiO1xyXG5pbXBvcnQgc3dpbW1pbmcgZnJvbSBcIi4vc3dpbW1pbmdcIjtcclxuaW1wb3J0IHBhZ2UzcnVuIGZyb20gXCIuL3BhZ2UzX3J1bm1hblwiO1xyXG5pbXBvcnQgcGFnZTFlMnMgZnJvbSBcIi4vcGFnZTEmMlwiO1xyXG5pbXBvcnQgcGFnZTJlM3MgZnJvbSBcIi4vcGFnZTImM1wiO1xyXG5pbXBvcnQgcGFnZTNlNHMgZnJvbSBcIi4vcGFnZTMmNFwiO1xyXG5pbXBvcnQgcGFnZTRlNXMgZnJvbSBcIi4vcGFnZTQmNVwiO1xyXG5pbXBvcnQgeyBnZXRGb290YmFsbFggfSBmcm9tIFwiLi9Gb290YmFsbFBhdGhcIjtcclxuaW1wb3J0IHsgUXVlc3Rpb25EaWFsb2cgfSBmcm9tIFwiLi9RdWVzdGlvbkRpYWxvZ1wiO1xyXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBRdWVzdGlvbkRhdGEsIFF1ZXN0aW9uSXRlbSwgUXVlc3Rpb25TaG93WSB9IGZyb20gXCIuL1F1ZXN0aW9uRGF0YVwiO1xyXG5pbXBvcnQgTG9hZGluZ0RpYWxvZyBmcm9tIFwiLi9Mb2FkaW5nRGlhbG9nXCI7XHJcbmltcG9ydCBTaGFrZURpYWxvZyBmcm9tIFwiLi9TaGFrZURpYWxvZ1wiO1xyXG5pbXBvcnQgU2Nyb2xsRGlhbG9nLCB7IFRpcFR5cGUgfSBmcm9tIFwiLi9TY3JvbGxEaWFsb2dcIjtcclxuaW1wb3J0IFNjb3JlUmVzdWx0RGlhbG9nIGZyb20gXCIuL1Njb3JlUmVzdWx0RGlhbG9nXCI7XHJcbmNsYXNzIE1haW4ge1xyXG5cdHByaXZhdGUgZmlyc3RTdDogbnVtYmVyID0gMFxyXG5cdHByaXZhdGUgZmlyc3RudW06IG51bWJlciA9IDBcclxuXHJcblx0cHJpdmF0ZSBmb290YmFsbDogRm9vdGJhbGxcclxuXHRwcml2YXRlIGJhc2tldGJhbGw6IEJhc2tldGJhbGxcclxuXHRwcml2YXRlIHJ1bm5pbmc6IHJ1bm5pbmdcclxuXHRwcml2YXRlIHN3aW1taW5nOiBzd2ltbWluZ1xyXG5cdHByaXZhdGUgcGFnZTNydW46IHBhZ2UzcnVuXHJcblx0cHJpdmF0ZSBwYWdlMWUyczogcGFnZTFlMnNcclxuXHRwcml2YXRlIHBhZ2UyZTNzOiBwYWdlMmUzc1xyXG5cdHByaXZhdGUgcGFnZTNlNHM6IHBhZ2UzZTRzXHJcblx0cHJpdmF0ZSBwYWdlNGU1czogcGFnZTRlNXNcclxuXHJcblxyXG5cdHByaXZhdGUgc2NyZWVuMUJhY2tHcm91bmQ6IFNjcmVlbjFCYWNrR3JvdW5kXHJcblx0cHJpdmF0ZSBkcmFnUmVnaW9uOiBMYXlhLlJlY3RhbmdsZVxyXG5cclxuXHRwcml2YXRlIHNoYWtlQ291bnQ6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50MjogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHNoYWtlQ291bnQzOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgc2hha2VDb3VudDQ6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSBzaGFrZUNvdW50NTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaTIgPSBmYWxzZTtcclxuXHRwcml2YXRlIGhhc1BsYXlTaG90QW5pMyA9IGZhbHNlO1xyXG5cdHByaXZhdGUgaGFzUGxheVNob3RBbmk0ID0gZmFsc2U7XHJcblx0cHJpdmF0ZSBoYXNQbGF5U2hvdEFuaTUgPSBmYWxzZTtcclxuXHJcblxyXG5cdHByaXZhdGUgY29uc29sZTogTGF5YS5UZXh0O1xyXG5cclxuXHJcblx0cHJpdmF0ZSBzaG93UXVlc3Rpb25JbmRleExpc3QgPSBuZXcgQXJyYXk8bnVtYmVyPigpXHQvLyDlt7Lnu4/mmL7npLrnmoTpl67pophpbmRleOWIl+ihqFxyXG5cdHByaXZhdGUgc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0cHJpdmF0ZSBuZXh0ID0gMDtcclxuXHJcblx0cHJpdmF0ZSBsb2FkaW5nRGlhbG9nOiBMb2FkaW5nRGlhbG9nXHQvLyDmmL7npLrliqDovb3ov5vluqbmnaFcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nOiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nMjogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBzaGFrZURpYWxvZzM6IFNoYWtlRGlhbG9nXHRcdC8vIOaYvuekuuaRh+S4gOaRh+aPkOekulxyXG5cdHByaXZhdGUgc2hha2VEaWFsb2c0OiBTaGFrZURpYWxvZ1x0XHQvLyDmmL7npLrmkYfkuIDmkYfmj5DnpLpcclxuXHRwcml2YXRlIHNoYWtlRGlhbG9nNTogU2hha2VEaWFsb2dcdFx0Ly8g5pi+56S65pGH5LiA5pGH5o+Q56S6XHJcblx0cHJpdmF0ZSBiZ21Tb3VuZENoYW5uZWw6IExheWEuU291bmRDaGFubmVsXHJcblxyXG5cdHByaXZhdGUgcXVlc3Rpb25TY29yZTogbnVtYmVyIFx0XHRcdC8vIOWbnuetlOmXrumimOeahOWIhuaVsFxyXG5cdHByaXZhdGUgaXNMb25nQ2xpY2s6IGJvb2xlYW4gXHRcdFx0Ly8g5qOA5rWL5piv5ZCm6ZW/5oyJ55qE5Y+C5pWwXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdC8vIHdhcm5pbmc6IOesrOS4ieS4quWPguaVsOS4jeimgeS9v+eUqFdlYkdM77yM5b2T6IOM5pmv5aSq6ZW/55qE5pe25YCZ5ZyoaVBob25l5LiK5Lya5pyJ6Z2e5bi45Lil6YeN55qE6ZSv6b2/XHJcblx0XHRMYXlhLmluaXQoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5zdGF0ZUhlaWdodCwgTGF5YVtcIlwiXSk7XHJcblxyXG5cdFx0TGF5YVtcIlBoeXNpY3NcIl0gJiYgTGF5YVtcIlBoeXNpY3NcIl0uZW5hYmxlKCk7XHJcblx0XHRMYXlhW1wiRGVidWdQYW5lbFwiXSAmJiBMYXlhW1wiRGVidWdQYW5lbFwiXS5lbmFibGUoKTtcclxuXHRcdExheWEuc3RhZ2Uuc2NhbGVNb2RlID0gQ29uc3RhbnRzLnNjYWxlTW9kZTtcclxuXHRcdExheWEuc3RhZ2Uuc2NyZWVuTW9kZSA9IENvbnN0YW50cy5zY3JlZW5Nb2RlO1xyXG5cdFx0Ly/lhbzlrrnlvq7kv6HkuI3mlK/mjIHliqDovb1zY2VuZeWQjue8gOWcuuaZr1xyXG5cdFx0TGF5YS5VUkwuZXhwb3J0U2NlbmVUb0pzb24gPSBHYW1lQ29uZmlnLmV4cG9ydFNjZW5lVG9Kc29uO1xyXG5cclxuXHRcdC8v5omT5byA6LCD6K+V6Z2i5p2/77yI6YCa6L+HSURF6K6+572u6LCD6K+V5qih5byP77yM5oiW6ICFdXJs5Zyw5Z2A5aKe5YqgZGVidWc9dHJ1ZeWPguaVsO+8jOWdh+WPr+aJk+W8gOiwg+ivlemdouadv++8iVxyXG5cdFx0aWYgKEdhbWVDb25maWcuZGVidWcgfHwgTGF5YS5VdGlscy5nZXRRdWVyeVN0cmluZyhcImRlYnVnXCIpID09IFwidHJ1ZVwiKSBMYXlhLmVuYWJsZURlYnVnUGFuZWwoKTtcclxuXHRcdGlmIChHYW1lQ29uZmlnLnBoeXNpY3NEZWJ1ZyAmJiBMYXlhW1wiUGh5c2ljc0RlYnVnRHJhd1wiXSkgTGF5YVtcIlBoeXNpY3NEZWJ1Z0RyYXdcIl0uZW5hYmxlKCk7XHJcblx0XHRpZiAoR2FtZUNvbmZpZy5zdGF0KSBMYXlhLlN0YXQuc2hvdygpO1xyXG5cdFx0TGF5YS5hbGVydEdsb2JhbEVycm9yID0gdHJ1ZTtcclxuXHJcblx0XHQvL+a/gOa0u+i1hOa6kOeJiOacrOaOp+WItu+8jHZlcnNpb24uanNvbueUsUlEReWPkeW4g+WKn+iDveiHquWKqOeUn+aIkO+8jOWmguaenOayoeacieS5n+S4jeW9seWTjeWQjue7rea1geeoi1xyXG5cdFx0TGF5YS5SZXNvdXJjZVZlcnNpb24uZW5hYmxlKFwidmVyc2lvbi5qc29uXCIsIExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblZlcnNpb25Mb2FkZWQpLCBMYXlhLlJlc291cmNlVmVyc2lvbi5GSUxFTkFNRV9WRVJTSU9OKTtcclxuXHJcblxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0VUlDb25maWcucG9wdXBCZ0NvbG9yID0gXCIjMDAwMDAwXCJcclxuXHRcdFVJQ29uZmlnLnBvcHVwQmdBbHBoYSA9IDAuOFxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cclxuXHJcblx0XHRMYXlhLnN0YWdlLmJnQ29sb3IgPSBcIndoaXRlXCJcclxuXHJcblxyXG5cclxuXHRcdHRoaXMubG9hZFByb2dlc3NBc3NldHMoKVxyXG5cclxuXHRcdC8vIOmcgOimgeaYvuekuuiwg+ivleS/oeaBr+WPr+S7peaJk+W8gOi/memHjFxyXG5cdFx0dGhpcy5zaG93Q29uc29sZVRleHQoZmFsc2UpO1xyXG5cclxuXHRcdHRoaXMucXVlc3Rpb25TY29yZSA9IDBcclxuXHJcblx0fVxyXG5cclxuXHRvblZlcnNpb25Mb2FkZWQoKTogdm9pZCB7XHJcblx0XHQvL+a/gOa0u+Wkp+Wwj+WbvuaYoOWwhO+8jOWKoOi9veWwj+WbvueahOaXtuWAme+8jOWmguaenOWPkeeOsOWwj+WbvuWcqOWkp+WbvuWQiOmbhumHjOmdou+8jOWImeS8mOWFiOWKoOi9veWkp+WbvuWQiOmbhu+8jOiAjOS4jeaYr+Wwj+WbvlxyXG5cdFx0TGF5YS5BdGxhc0luZm9NYW5hZ2VyLmVuYWJsZShcImZpbGVjb25maWcuanNvblwiLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Db25maWdMb2FkZWQpKTtcclxuXHR9XHJcblxyXG5cdG9uQ29uZmlnTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0Ly/liqDovb1JREXmjIflrprnmoTlnLrmma9cclxuXHRcdC8vIEdhbWVDb25maWcuc3RhcnRTY2VuZSAmJiBMYXlhLlNjZW5lLm9wZW4oR2FtZUNvbmZpZy5zdGFydFNjZW5lKTtcclxuXHR9XHJcblxyXG5cdGxvYWRQcm9nZXNzQXNzZXRzKCk6IHZvaWQge1xyXG5cdFx0TGF5YS5sb2FkZXIubG9hZChbXCJyZXMvYXRsYXMvY29tcC5hdGxhc1wiXSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uUHJvZ3Jlc3NBc3NldHNMb2FkZWQpKVxyXG5cdH1cclxuXHJcblx0bG9hZE90aGVyQXNzZXRzKCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgYXNzZXRzOiBBcnJheTxhbnk+ID0gW11cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMubG9hZGluZyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5iYWNrZ3JvdW5kNSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IFwicmVzL2F0bGFzL3Nwb3J0cy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvdmlldy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogXCJyZXMvYXRsYXMvbG9hZGluZy5hdGxhc1wiLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5BVExBU1xyXG5cdFx0fSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcblx0XHR9KTtcclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmQyLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSk7XHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNvdW5kMyxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuU09VTkRcclxuXHRcdH0pO1xyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zb3VuZDQsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLlNPVU5EXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc291bmRCZ204LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5TT1VORFxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNjb3JlMSxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zY29yZTIsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc2NvcmUzLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNjb3JlNCxcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy5zcG9ydHMwLFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblx0XHRhc3NldHMucHVzaCh7XHJcblx0XHRcdHVybDogQ29uc3RhbnRzLnNwb3J0czEsXHJcblx0XHRcdHR5cGU6IExheWEuTG9hZGVyLklNQUdFXHJcblx0XHR9KVxyXG5cclxuXHRcdGFzc2V0cy5wdXNoKHtcclxuXHRcdFx0dXJsOiBDb25zdGFudHMuc3BvcnRzMixcclxuXHRcdFx0dHlwZTogTGF5YS5Mb2FkZXIuSU1BR0VcclxuXHRcdH0pXHJcblxyXG5cdFx0YXNzZXRzLnB1c2goe1xyXG5cdFx0XHR1cmw6IENvbnN0YW50cy52aWV3LFxyXG5cdFx0XHR0eXBlOiBMYXlhLkxvYWRlci5JTUFHRVxyXG5cdFx0fSlcclxuXHJcblx0XHQvLyDpooTliqDovb3otYTmupBcclxuXHRcdExheWEubG9hZGVyLmxvYWQoYXNzZXRzLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkZWQpLCBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25Bc3NldHNMb2FkaW5nLCBudWxsLCBmYWxzZSkpO1xyXG5cdFx0TGF5YS5sb2FkZXIub24oTGF5YS5FdmVudC5FUlJPUiwgdGhpcywgdGhpcy5vbkVycm9yKVxyXG5cdH1cclxuXHJcblx0Ly8g5b+F6ZyA5YWI5Yqg6L296L+b5bqm5p2h6LWE5rqQ5omN6IO95pi+56S66L+b5bqm5p2hXHJcblx0b25Qcm9ncmVzc0Fzc2V0c0xvYWRlZCgpOiB2b2lkIHtcclxuXHRcdC8vIOaYvuekuui/m+W6puadoVxyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nID0gbmV3IExvYWRpbmdEaWFsb2coKTtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5wb3B1cCh0cnVlLCBmYWxzZSk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkT3RoZXJBc3NldHMoKTtcclxuXHRcdH0sIDQwMDApO1xyXG5cdH1cclxuXHJcblx0b25Bc3NldHNMb2FkaW5nKHByb2dyZXNzOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5Yqg6L296L+b5bqmOiBcIiArIHByb2dyZXNzKTtcclxuXHRcdHRoaXMubG9hZGluZ0RpYWxvZy5jaGFuZ2VQcm9ncmVzc1ZhbHVlKHByb2dyZXNzKTtcclxuXHR9XHJcblxyXG5cdG9uQXNzZXRzTG9hZGVkKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLmNsb3NlKCk7XHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn6LWE5rqQ5Yqg6L295a6M5oiQ44CCJztcclxuXHJcblx0XHQvLyB0aGlzLnNob3dUaXBEaWFsb2coXCJzY3JvbGxcIilcclxuXHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kID0gbmV3IFNjcmVlbjFCYWNrR3JvdW5kKCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQpO1xyXG5cdFx0dGhpcy5iZWdpbkxpc3RlbkRyYWcoKTtcclxuXHJcblx0XHR0aGlzLmZvb3RiYWxsID0gbmV3IEZvb3RiYWxsKCk7XHJcblx0XHR0aGlzLmZvb3RiYWxsLnBvcygzMjcsIDIzMyk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuZm9vdGJhbGwpO1xyXG5cdFx0dGhpcy5mb290YmFsbC5oaWRlKCk7XHJcblx0XHR0aGlzLmJhc2tldGJhbGwgPSBuZXcgQmFza2V0YmFsbCgpO1xyXG5cdFx0dGhpcy5iYXNrZXRiYWxsLnBvcygzMDAsIDUwMCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuYmFza2V0YmFsbCk7XHJcblx0XHR0aGlzLnJ1bm5pbmcgPSBuZXcgcnVubmluZygpO1xyXG5cdFx0dGhpcy5ydW5uaW5nLnBvcygyNTAsIDIwMCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucnVubmluZyk7XHJcblx0XHR0aGlzLnN3aW1taW5nID0gbmV3IHN3aW1taW5nKCk7XHJcblx0XHR0aGlzLnN3aW1taW5nLnBvcygyNTYsIDUwMCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMuc3dpbW1pbmcpO1xyXG5cdFx0dGhpcy5wYWdlM3J1biA9IG5ldyBwYWdlM3J1bigpO1xyXG5cdFx0dGhpcy5wYWdlM3J1bi5wb3MoMzAwLCA4NTApO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2UzcnVuKTtcclxuXHRcdHRoaXMucGFnZTFlMnMgPSBuZXcgcGFnZTFlMnMoKTtcclxuXHRcdHRoaXMucGFnZTFlMnMucG9zKDI1MCwgNTAwKTtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlMWUycyk7XHJcblx0XHR0aGlzLnBhZ2UyZTNzID0gbmV3IHBhZ2UyZTNzKCk7XHJcblx0XHR0aGlzLnBhZ2UyZTNzLnBvcygyNTAsIDUwMCk7XHJcblx0XHRMYXlhLnN0YWdlLmFkZENoaWxkKHRoaXMucGFnZTJlM3MpO1xyXG5cdFx0dGhpcy5wYWdlM2U0cyA9IG5ldyBwYWdlM2U0cygpO1xyXG5cdFx0dGhpcy5wYWdlM2U0cy5wb3MoMjcwLCA3MDApO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLnBhZ2UzZTRzKTtcclxuXHRcdHRoaXMucGFnZTRlNXMgPSBuZXcgcGFnZTRlNXMoKTtcclxuXHRcdHRoaXMucGFnZTRlNXMucG9zKDI1MCwgNzAwKTtcclxuXHRcdExheWEuc3RhZ2UuYWRkQ2hpbGQodGhpcy5wYWdlNGU1cyk7XHJcblx0XHRjb25zb2xlLmxvZyhcIm9uQXNzZXRzTG9hZGVkXCIsIExheWEuc3RhZ2UuaGVpZ2h0LCBMYXlhLkJyb3dzZXIuaGVpZ2h0LCBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0KVxyXG5cclxuXHRcdC8vIOiuoeeul+iDjOaZr+WPr+aLluWKqOWMuuWfn1xyXG5cdFx0Y29uc3QgbW9hYmxlSGVpZ2h0ID0gTGF5YS5zdGFnZS5oZWlnaHQgLSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0O1xyXG5cdFx0dGhpcy5kcmFnUmVnaW9uID0gbmV3IExheWEuUmVjdGFuZ2xlKDAsIC1tb2FibGVIZWlnaHQsIDAsIG1vYWJsZUhlaWdodClcclxuXHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfTU9WRSwgdGhpcywgdGhpcy5vbk1vdXNlTW92ZSk7XHJcblx0XHRMYXlhLnN0YWdlLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vblN0YXJ0RHJhZyk7XHJcblx0XHQvLyDmkq3mlL7og4zmma/pn7PkuZBcclxuXHRcdHRoaXMuYmdtU291bmRDaGFubmVsID0gTGF5YS5Tb3VuZE1hbmFnZXIucGxheU11c2ljKENvbnN0YW50cy5zb3VuZEJnbTgsIDApXHJcblx0fVxyXG5cclxuXHRvbkVycm9yKGVycjogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWKoOi9veWksei0pTogXCIgKyBlcnIpO1xyXG5cdFx0dGhpcy5sb2FkaW5nRGlhbG9nLnVwZGF0ZVRpcChcIuWKoOi9veWksei0pTogXCIgKyBlcnIpXHJcblx0fVxyXG5cclxuXHRvbk1vdXNlTW92ZSgpOiB2b2lkIHtcclxuXHRcdC8vIOWni+e7iOS/neaMgeS4u+inkuWSjOm8oOagh+S9jee9ruS4gOiHtFxyXG5cdFx0Ly8gdGhpcy5mb290YmFsbC5wb3MoTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKFwib25Nb3VzZU1vdmVcIiwgTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKGBtYXBbJHt0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnl9XSA9ICR7TGF5YS5zdGFnZS5tb3VzZVh9YCk7XHJcblx0XHQvLyB0aGlzLmZvb3RiYWxsLnBvcyhMYXlhLnN0YWdlLm1vdXNlWCwgTGF5YS5zdGFnZS5tb3VzZVkpO1xyXG5cdFx0Y29uc29sZS5sb2coXCJvbk1vdXNlTW92ZShZ77yaXCIsIExheWEuc3RhZ2UubW91c2VZLCBcIjsgIHky77yaXCIsIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSwgJ++8iScpO1xyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA9PSAwKSB7XHJcblx0XHRcdHRoaXMuZmlyc3RudW0gPSB0aGlzLmZpcnN0bnVtICsgKHRoaXMuZmlyc3RTdCAtIExheWEuc3RhZ2UubW91c2VZKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCh0aGlzLmZpcnN0bnVtIC8gMTAgKyAnJyk7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKTtcclxuXHRcdFx0aWYgKHogPCAwKSB7XHJcblx0XHRcdFx0eiA9IDA7XHJcblx0XHRcdFx0dGhpcy5maXJzdG51bSA9IDA7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5tb3ZlQW5pKFwiZmlyc3RcIiwgeiAtIDApO1xyXG5cdFx0XHRpZiAoeiA+IDE4MCkge1xyXG5cdFx0XHRcdHogPSAxODA7XHJcblx0XHRcdFx0dGhpcy5uZXh0ID0gejtcclxuXHRcdFx0XHR0aGlzLmZpcnN0bnVtID0gMTgwMDtcclxuXHRcdFx0XHRsZXQgc2kgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm5leHQrKztcclxuXHRcdFx0XHRcdGlmICh0aGlzLm5leHQgPT0gMjA1KSB7XHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2kpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5leHQgPSAyMDQ7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA9IDEwO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm1vdmVBbmkoXCJmaXJzdFwiLCAyMDUpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uU3RhcnREcmFnKCk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQubW92ZUFuaShcImZpcnN0XCIsIHRoaXMubmV4dCk7XHJcblx0XHRcdFx0fSwgMjUwKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uU3RhcnREcmFnKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5maXJzdFN0ID0gTGF5YS5zdGFnZS5tb3VzZVlcclxuXHRcdGNvbnNvbGUubG9nKFwib25TdGFydERyYWdcIiwgTGF5YS5zdGFnZS5tb3VzZVgsIExheWEuc3RhZ2UubW91c2VZKTtcclxuXHRcdGlmICh0aGlzLnNob3dpbmdEaWFsb2cpIHtcclxuXHRcdFx0cmV0dXJuXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdGFydERyYWcodGhpcy5kcmFnUmVnaW9uLCBmYWxzZSwgMClcclxuXHR9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRvbkJhY2tncm91bmRNb3ZlKCk6IHZvaWQge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coXCJvbkJhY2tncm91bmRNb3ZlXCIsIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueCwgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55LCB0aGlzLmZvb3RiYWxsLngsIHRoaXMuZm9vdGJhbGwueSlcclxuXHJcblx0XHQvLyDmmL7npLrpl67pophcclxuXHRcdGNvbnN0IG5lZWRTaG93UXVlc3Rpb24gPSB0aGlzLnNob3dRdWVzdGlvbkRpYWxvZ0lmTmVlZCh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkpO1xyXG5cdFx0aWYgKG5lZWRTaG93UXVlc3Rpb24pIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpO1xyXG5cdFx0XHRyZXR1cm5cclxuXHRcdH1cclxuXHJcblx0XHQvLyBUT0RPOiDmoLnmja7lrp7pmYXmg4XlhrXmmL7npLrngrnlh7vmj5DnpLpcclxuXHRcdC8vIHRoaXMuc2hvd1RpcERpYWxvZyhcImNsaWNrX3doaXRlXCIpO1xyXG5cdFx0Ly8gdGhpcy5zaG93VGlwRGlhbG9nKFwiY2xpY2tfYmxhY2tcIilcclxuXHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTQ3MCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTEwMCApIHsgLy8g5LiN57uZ5ouW5Yqo77yMXGLmkYfkuIDmkYfmmL7npLrlsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+H5bCE6Zeo5Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKCk7XHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2coKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjM1MCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTIpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HMuWKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzLliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKTtcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtOTUwMCkge1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTMpIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5bey57uP5pi+56S66L+HM+WKqOeUu1xcbic7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+ayoeacieaYvuekuui/hzPliqjnlLtcXG4nO1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcERyYWcoKTtcclxuXHRcdFx0XHQvLyDmmL7npLrov4fmkYfkuIDmkYfmj5DnpLpcclxuXHRcdFx0XHR0aGlzLnNob3dTaGFrZURpYWxvZzMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTI5NDUpIHtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmk0KSB7XHJcblx0XHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W3sue7j+aYvuekuui/hzTliqjnlLtcXG4nO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICfmsqHmnInmmL7npLrov4c05Yqo55S7XFxuJztcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BEcmFnKCk7XHJcblx0XHRcdFx0Ly8g5pi+56S66L+H5pGH5LiA5pGH5o+Q56S6XHJcblx0XHRcdFx0dGhpcy5zaG93U2hha2VEaWFsb2c0KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1OTQ2KSB7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pNSkge1xyXG5cdFx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflt7Lnu4/mmL7npLrov4c15Yqo55S7XFxuJztcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5rKh5pyJ5pi+56S66L+HNeWKqOeUu1xcbic7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wRHJhZygpO1xyXG5cdFx0XHRcdC8vIOaYvuekuui/h+aRh+S4gOaRh+aPkOekulxyXG5cdFx0XHRcdHRoaXMuc2hvd1NoYWtlRGlhbG9nNSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtODAwIHx8IHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PTIwMDApIHsgLy8g6ZqQ6JeP6Laz55CDXHJcblx0XHRcdHRoaXMuZm9vdGJhbGwuaGlkZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5mb290YmFsbC5zaG93KCk7XHJcblx0XHRcdC8vIOenu+WKqOi2s+eQg+S9jee9rlxyXG5cdFx0XHQvLyBjb25zdCB5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMlxyXG5cdFx0XHRsZXQgeTogbnVtYmVyID0gMDtcclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSA8IDEwMzIgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDEwMCArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApIDwgODUwICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAxMzAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSA8IDczMCArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMCkge1xyXG5cdFx0XHRcdHkgPSAtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMTUwICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMiArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMCkgPCA1ODAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDE4MCArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMzIgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApIDwgNDM1ICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSB7XHJcblx0XHRcdFx0eSA9IC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgKyAyMDAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ICsgMjMyICsgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSA+IDEwMzIgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApIHtcclxuXHRcdFx0XHR5ID0gLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSArIDIzMiArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB4ID0gZ2V0Rm9vdGJhbGxYKHkpO1xyXG5cdFx0XHRpZiAoeCA9PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5mb290YmFsbC55ID0geVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGJhbGwucG9zKHgsIHkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOWIpOaWrei2s+eQg+aYr+WQpumcgOimgeaXi+i9rFxyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01ODUgLSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IC0yMDApIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnN0b3BSb3RhdGUoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmZvb3RiYWxsLnBsYXlSb3RhdGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly8g5Yik5pat5piv5ZCm6ZyA6KaB5pKt5pS+Y3VwIGFuaVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwIC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtMzAwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDUwIC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtMzAwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJjdXBcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJjdXBcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImN1cFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImN1cFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpumcgOimgeaSreaUvuWPo+WTqOWKqOeUu1xyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwIC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtMzAwICAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTMwMCApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndoaXN0bGVcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aGlzdGxlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ3aGlzdGxlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2hpc3RsZVwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMjEyNSAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTMwMCAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0yMzI1IC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtMzAwICkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAwMlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMDJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ0ZXh0MjAwMlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMzAwIC0gTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCAtMzAwICAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTQ1MCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTMwMCApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNob3RcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG90XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzaG90XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2hvdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE3MzAgLSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IC0zMDAgICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMjY0MCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTMwMCApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwid2luXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2luXCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTI2NDAgLSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IC0zMDAgICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDYwMCAtIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgLTMwMCApIHtcclxuXHRcdFx0dGhpcy5wYWdlMWUycy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSAyNjQwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopO1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmdvUGF0aCh6IC0gMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnBhZ2UxZTJzLmhpZGUoKTtcclxuXHRcdH1cclxuXHRcdC8vcGFnZTJcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ1MzAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01NDMwKSB7XHJcblx0XHRcdHRoaXMucnVubmluZy5zaG93KCk7XHJcblx0XHRcdGxldCB6ID0gcGFyc2VJbnQoKC10aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgLSA0NTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopO1xyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucnVubmluZy5nb1BhdGgoODEpO1xyXG5cdFx0XHR0aGlzLnJ1bm5pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNDYwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUxNTUpIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwicGFnZTJfc3RhcnRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJwYWdlMl9zdGFydDFcIik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC00NTIyICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNDY3MSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZHVtYmJlbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJkdW1iYmVsbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZHVtYmJlbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJkdW1iYmVsbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTQ5NTcgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01MDEwKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJlcXVpcG1lbnRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlcXVpcG1lbnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImVxdWlwbWVudFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImVxdWlwbWVudFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNTE5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTUzNDgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiY2xvY2tcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImNsb2NrXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY2xvY2tcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTU0NTQgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC01NjAzKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwNFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInRleHQyMDA0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwNFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC01NzI1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtNTg2Nikge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZWxlY3RyaWNtYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJlbGVjdHJpY21hblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZWxlY3RyaWNtYW5cIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJlbGVjdHJpY21hblwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtNjQxMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTgxMDApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwibGl1eGlhbmdcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJsaXV4aWFuZzFcIik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC02NDEwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtODEwMCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UyZTNzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDY0MTApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeik7XHJcblx0XHRcdHRoaXMucGFnZTJlM3MuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZTJlM3MuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vcGFnZTNcclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC04MTEwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtOTA2MCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UzcnVuLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDgxMTApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeik7XHJcblx0XHRcdHRoaXMucGFnZTNydW4uZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZTNydW4uaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODEwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg0NzApIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwicGFnZTNfc3RhcnRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJwYWdlM19zdGFydDFcIik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC04MzQ4ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtODQxNSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwibWVkYWxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJtZWRhbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwibWVkYWxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJtZWRhbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtODYyNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTg3NzMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwic3RhZ2VcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInN0YWdlXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic3RhZ2VcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTkxMzEgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC05MjgxKSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInRleHQyMDA4XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJ0ZXh0MjAwOFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcInRleHQyMDA4XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0gOTUzNSAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTExMTkwKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImNyb3dkXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiY3Jvd2QxXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtIDk1NDAgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTE5MCkge1xyXG5cdFx0XHR0aGlzLnBhZ2UzZTRzLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDk1NDApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeik7XHJcblx0XHRcdHRoaXMucGFnZTNlNHMuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZTNlNHMuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vcGFnZTRcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTExMTg5ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTE2NzApIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhlYXJ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiaGVhcnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhlYXJ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiaGVhcnRcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMTE5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEzMDQwKSB7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gMTExOTApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeik7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTExNjIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTMxMykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMTJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ0ZXh0MjAxMlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwidGV4dDIwMTJcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ0ZXh0MjAxMlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTEzNzYgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTUxOSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJib2FyZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJib2FyZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTE3NDMgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xMTkwNykge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2FsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIndhbGxcIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhbGxcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJ3YWxsXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMjA2NiAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTEyMzA2KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJnb2dnbGVzXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiZ29nZ2xlc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiZ29nZ2xlc1wiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImdvZ2dsZXNcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTEyNDA1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTI1NTgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcIndhdGVyTGVmdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcIndhdGVyTGVmdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwid2F0ZXJMZWZ0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwid2F0ZXJMZWZ0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMzEwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE0NzkwKSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcIndpbk1hblwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcIndpbk1hbjFcIik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xMzEwMCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE0NzkwKSB7XHJcblx0XHRcdHRoaXMucGFnZTRlNXMuc2hvdygpO1xyXG5cdFx0XHRsZXQgeiA9IHBhcnNlSW50KCgtdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IC0gMTMxMDApIC8gMTAgKyAnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCd6OiAnICsgeik7XHJcblx0XHRcdHRoaXMucGFnZTRlNXMuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMucGFnZTRlNXMuaGlkZSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vcGFnZTVcclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0OTMwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTU1MzApIHtcclxuXHRcdFx0dGhpcy5iYXNrZXRiYWxsLnNob3coKTtcclxuXHRcdFx0bGV0IHogPSBwYXJzZUludCgoLXRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSAtIDE0OTMwKSAvIDEwICsgJycpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnejogJyArIHopO1xyXG5cdFx0XHR0aGlzLmJhc2tldGJhbGwuZ29QYXRoKHogLSAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuYmFza2V0YmFsbC5oaWRlKCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC55IDw9IC0xNDc5MCAmJiB0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPj0gLTE1MzE1KSB7XHJcblx0XHRcdGlmICghdGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJiYWxsXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwiYmFsbFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiYmFsbFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuc3RvcEFuaShcImJhbGxcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE0NDcwICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTQ1NjIpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcInNjb3JlYm9hcmRcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzY29yZWJvYXJkXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5zY3JlZW4xQmFja0dyb3VuZC5pc0FuaVBsYXlpbmcoXCJzY29yZWJvYXJkXCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwic2NvcmVib2FyZFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA8PSAtMTUwODIgJiYgdGhpcy5zY3JlZW4xQmFja0dyb3VuZC55ID49IC0xNTE0OSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvZXNcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJzaG9lc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwic2hvZXNcIikpIHtcclxuXHRcdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnN0b3BBbmkoXCJzaG9lc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnkgPD0gLTE1NDE1ICYmIHRoaXMuc2NyZWVuMUJhY2tHcm91bmQueSA+PSAtMTU0OTYpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLmlzQW5pUGxheWluZyhcImhhdFwiKSkge1xyXG5cdFx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImhhdFwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuc2NyZWVuMUJhY2tHcm91bmQuaXNBbmlQbGF5aW5nKFwiaGF0XCIpKSB7XHJcblx0XHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5zdG9wQW5pKFwiaGF0XCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRvbkRldmljZVNoYWtlKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZy5jbG9zZSgpO1xyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50KytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudCA+PSAxKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpO1xyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaSkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcInNob3RcIilcclxuXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkgPSB0cnVlXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5pKt5pS+5bCE6Zeo5Yqo55S7XCI7XHJcblxyXG5cdFx0XHQvLyBUT0RPOiDmkq3mlL7lrp7pmYXpnIDopoHnmoTlo7Dpn7PvvIzlubblnKjlhbbku5bpnIDopoHnmoTlnLDmlrnosIPnlKjmkq3mlL7lo7Dpn7NcclxuXHRcdFx0dGhpcy5wbGF5U291bmQoQ29uc3RhbnRzLnNvdW5kMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9uRGV2aWNlU2hha2UyKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc2hha2VEaWFsb2cyKSB7XHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cyLmNsb3NlKCk7XHJcblx0XHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblx0XHRcdHRoaXMuc2hha2VEaWFsb2cyID0gbnVsbFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaGFrZUNvdW50MisrXHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuiuvuWkh+aRh+aZg+S6hlwiICsgdGhpcy5zaGFrZUNvdW50MiArIFwi5qyhXFxuXCI7XHJcblx0XHRpZiAodGhpcy5zaGFrZUNvdW50MiA+PSAxKSB7XHJcblx0XHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RvcCgpO1xyXG5cdFx0XHR0aGlzLnNoYWtlQ291bnQyID0gMFxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuWBnOatouaOpeaUtuiuvuWkh+aRh+WKqFwiO1xyXG5cdFx0XHQvLyDmkq3mlL7lsITpl6jliqjnlLtcclxuXHRcdFx0aWYgKHRoaXMuaGFzUGxheVNob3RBbmkyKSB7XHJcblx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5wbGF5QW5pKFwibGl1eGlhbmdcIilcclxuXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmkyID0gdHJ1ZVxyXG5cdFx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSBcIuaSreaUvuWwhOmXqOWKqOeUu1wiO1xyXG5cclxuXHRcdFx0Ly8gVE9ETzog5pKt5pS+5a6e6ZmF6ZyA6KaB55qE5aOw6Z+z77yM5bm25Zyo5YW25LuW6ZyA6KaB55qE5Zyw5pa56LCD55So5pKt5pS+5aOw6Z+zXHJcblx0XHRcdHRoaXMucGxheVNvdW5kKENvbnN0YW50cy5zb3VuZDEpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRvbkRldmljZVNoYWtlMygpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnNoYWtlRGlhbG9nMykge1xyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMy5jbG9zZSgpO1xyXG5cdFx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSBmYWxzZVxyXG5cdFx0XHR0aGlzLnNoYWtlRGlhbG9nMyA9IG51bGxcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hha2VDb3VudDMrK1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLorr7lpIfmkYfmmYPkuoZcIiArIHRoaXMuc2hha2VDb3VudDMgKyBcIuasoVxcblwiO1xyXG5cdFx0aWYgKHRoaXMuc2hha2VDb3VudDMgPj0gMSkge1xyXG5cdFx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0b3AoKTtcclxuXHRcdFx0dGhpcy5zaGFrZUNvdW50MyA9IDBcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLlgZzmraLmjqXmlLborr7lpIfmkYfliqhcIjtcclxuXHRcdFx0Ly8g5pKt5pS+5bCE6Zeo5Yqo55S7XHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pMykge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImNyb3dkXCIpXHJcblxyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pMyA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQyKTtcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzQpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzQuY2xvc2UoKTtcclxuXHRcdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzQgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQ0KytcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi6K6+5aSH5pGH5pmD5LqGXCIgKyB0aGlzLnNoYWtlQ291bnQ0ICsgXCLmrKFcXG5cIjtcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQ0ID49IDEpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKCk7XHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDQgPSAwXHJcblx0XHRcdHRoaXMuY29uc29sZS50ZXh0ICs9IFwi5YGc5q2i5o6l5pS26K6+5aSH5pGH5YqoXCI7XHJcblx0XHRcdC8vIOaSreaUvuWwhOmXqOWKqOeUu1xyXG5cdFx0XHRpZiAodGhpcy5oYXNQbGF5U2hvdEFuaTQpIHtcclxuXHRcdFx0XHRyZXR1cm5cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLnBsYXlBbmkoXCJ3aW5NYW5cIik7XHJcblx0XHRcdHRoaXMuc3dpbW1pbmcuaGlkZSgpO1xyXG5cdFx0XHR0aGlzLmhhc1BsYXlTaG90QW5pNCA9IHRydWVcclxuXHRcdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gXCLmkq3mlL7lsITpl6jliqjnlLtcIjtcclxuXHJcblx0XHRcdC8vIFRPRE86IOaSreaUvuWunumZhemcgOimgeeahOWjsOmfs++8jOW5tuWcqOWFtuS7lumcgOimgeeahOWcsOaWueiwg+eUqOaSreaUvuWjsOmfs1xyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQzKTtcclxuXHRcdH1cclxuXHR9XHJcblx0b25EZXZpY2VTaGFrZTUoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5zaGFrZURpYWxvZzUpIHtcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzUuY2xvc2UoKTtcclxuXHRcdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHRcdFx0dGhpcy5zaGFrZURpYWxvZzUgPSBudWxsXHJcblx0XHR9XHJcblx0XHR0aGlzLnNoYWtlQ291bnQ1KytcclxuXHRcdGlmICh0aGlzLnNoYWtlQ291bnQ1ID49IDEpIHtcclxuXHRcdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdG9wKCk7XHJcblx0XHRcdHRoaXMuc2hha2VDb3VudDUgPSAwXHJcblx0XHRcdGlmICh0aGlzLmhhc1BsYXlTaG90QW5pNSkge1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQucGxheUFuaShcImJhbGxNYW5cIilcclxuXHJcblx0XHRcdHRoaXMuaGFzUGxheVNob3RBbmk1ID0gdHJ1ZVxyXG5cdFx0XHR0aGlzLnBsYXlTb3VuZChDb25zdGFudHMuc291bmQ0KTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaG93U2NvcmVSZXN1bHREaWFsZyh0aGlzLnF1ZXN0aW9uU2NvcmUpO1xyXG5cdFx0XHR9LCAzMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG9uUXVlc3Rpb25EaWFsb2dDbG9zZShpbmRleDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwib25RdWVzdGlvbkRpYWxvZ0Nsb3NlXCIsIHR5cGUsIGluZGV4KTtcclxuXHRcdGNvbnN0IHJpZ2h0ID0gKHR5cGUgPT09IFwidHJ1ZVwiKSAvLyBUT0RPOiDorqHliIZcclxuXHRcdGlmIChyaWdodCkge1xyXG5cdFx0XHR0aGlzLnF1ZXN0aW9uU2NvcmUrKztcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IGZhbHNlXHJcblxyXG5cdFx0aWYgKHRoaXMuc2hvd1F1ZXN0aW9uSW5kZXhMaXN0Lmxlbmd0aCA+PSAxMCkge1x0Ly8g5pi+56S65LqGMTDmnaHpopjkuoZcclxuXHRcdFx0Ly8gTGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMuc2hvd1Njb3JlUmVzdWx0RGlhbGcsIFt0aGlzLnF1ZXN0aW9uU2NvcmVdKTtcclxuXHRcdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdC8vIFx0dGhpcy5zaG93U2NvcmVSZXN1bHREaWFsZyh0aGlzLnF1ZXN0aW9uU2NvcmUpO1xyXG5cdFx0XHQvLyB9LCAyMDAwKTtcclxuXHRcdFx0Ly8gdGhpcy5zaG93U2NvcmVSZXN1bHREaWFsZyh0aGlzLnF1ZXN0aW9uU2NvcmUpO1xyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1Njb3JlUmVzdWx0RGlhbGcoc2NvcmU6IG51bWJlcikge1xyXG5cdFx0Ly8g5LiN6K6p5rua5Yqo5LqGXHJcblx0XHRMYXlhLnN0YWdlLmhlaWdodCA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdExheWEuc3RhZ2Uud2lkdGggPSBMYXlhLkJyb3dzZXIuY2xpZW50V2lkdGhcclxuXHRcdC8vIOWQiOaIkOWbvueJh1xyXG5cdFx0Y29uc3QgdG1wID0gbmV3IExheWEuU3ByaXRlKCk7XHJcblx0XHRsZXQgYmdJbWFnZVVybCA9IFwiXCJcclxuXHRcdGlmIChzY29yZSA+PSA4KSB7XHJcblx0XHRcdGJnSW1hZ2VVcmwgPSBDb25zdGFudHMuc2NvcmU0XHJcblx0XHR9IGVsc2UgaWYgKHNjb3JlID49IDUpIHtcclxuXHRcdFx0YmdJbWFnZVVybCA9IENvbnN0YW50cy5zY29yZTNcclxuXHRcdH0gZWxzZSBpZiAoc2NvcmUgPj0gMikge1xyXG5cdFx0XHRiZ0ltYWdlVXJsID0gQ29uc3RhbnRzLnNjb3JlMlxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YmdJbWFnZVVybCA9IENvbnN0YW50cy5zY29yZTFcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiZ0ltYWdlID0gTGF5YS5Mb2FkZXIuZ2V0UmVzKGJnSW1hZ2VVcmwpO1xyXG5cdFx0dG1wLmdyYXBoaWNzLmRyYXdUZXh0dXJlKGJnSW1hZ2UsIDAsIDApO1xyXG5cdFx0Y29uc3Qgc2NvcmVJbWFnZSA9IExheWEubG9hZGVyLmdldFJlcyhgdmlldy9udW1fJHtzY29yZX0ucG5nYCk7XHJcblx0XHR0bXAuZ3JhcGhpY3MuZHJhd1RleHR1cmUoc2NvcmVJbWFnZSwgNDAwLCAzMjUpXHJcblxyXG5cdFx0Y29uc3QgaHRtbENhbnZhcyA9IHRtcC5kcmF3VG9DYW52YXMoNTEyLCA4MDgsIDAsIDApO1xyXG5cdFx0aHRtbENhbnZhcy50b0Jhc2U2NChcImltYWdlL2pwZWdcIiwgMC45LCB0aGlzLm9uUmVzdWx0U2NvcmVJbWFnZVRvQmFzZTY0KVxyXG5cclxuXHJcblxyXG5cdFx0Ly8gdGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0Ly8gVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0Ly8gTGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdC8vIGNvbnN0IHNjb3JlUmVzdWx0RGlhbG9nID0gbmV3IFNjb3JlUmVzdWx0RGlhbG9nKHNjb3JlKTtcclxuXHRcdC8vIHNjb3JlUmVzdWx0RGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdC8vIHNjb3JlUmVzdWx0RGlhbG9nLmNsb3NlSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblNjb3JlRGlhbG9nQ2xvc2UpXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzdWx0U2NvcmVJbWFnZVRvQmFzZTY0KHJlcykge1xyXG5cdFx0bGV0IG9uZU1vcmVCdXR0b25YID0gODBcclxuXHRcdGxldCBvbmVNb3JlQnV0dG9uWSA9IDYxOFxyXG5cdFx0bGV0IG9uZU1vcmVCdXR0b25XaWR0aCA9IDE1MFxyXG5cdFx0bGV0IG9uZU1vcmVCdXR0b25IZWlnaHQgPSA1MFxyXG5cclxuXHRcdGxldCBzaGFyZUJ1dHRvblggPSAyOTBcclxuXHJcblx0XHRjb25zdCByYXRpbyA9IExheWEuQnJvd3Nlci5jbGllbnRXaWR0aCAvIDUxMlxyXG5cdFx0b25lTW9yZUJ1dHRvblggPSBvbmVNb3JlQnV0dG9uWCAqIHJhdGlvXHJcblx0XHRvbmVNb3JlQnV0dG9uWSA9IG9uZU1vcmVCdXR0b25ZICogcmF0aW9cclxuXHRcdG9uZU1vcmVCdXR0b25XaWR0aCA9IG9uZU1vcmVCdXR0b25XaWR0aCAqIHJhdGlvXHJcblx0XHRvbmVNb3JlQnV0dG9uSGVpZ2h0ID0gb25lTW9yZUJ1dHRvbkhlaWdodCAqIHJhdGlvXHJcblx0XHRzaGFyZUJ1dHRvblggPSBzaGFyZUJ1dHRvblggKiByYXRpb1xyXG5cdFx0Y29uc3QgZGl2RWxlbWVudCA9IExheWEuQnJvd3Nlci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0ZGl2RWxlbWVudC5zdHlsZS56SW5kZXggPSAxMDAwMDAwMFxyXG5cdFx0ZGl2RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIlxyXG5cdFx0ZGl2RWxlbWVudC5zdHlsZS53aWR0aCA9IExheWEuQnJvd3Nlci5jbGllbnRXaWR0aFxyXG5cdFx0ZGl2RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0XHJcblx0XHRkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjgpXCJcclxuXHRcdGxldCBpbm5lckhUTUwgPSBgPGltZyBzdHlsZT1cIndpZHRoOiR7TGF5YS5Ccm93c2VyLmNsaWVudFdpZHRofVwiIHNyYz1cIiR7cmVzfVwiLz5gXHJcblx0XHRpbm5lckhUTUwgKz0gYDxhIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDogJHtvbmVNb3JlQnV0dG9uWH1weDt0b3A6JHtvbmVNb3JlQnV0dG9uWX1weDt3aWR0aDoke29uZU1vcmVCdXR0b25XaWR0aH1weDtoZWlnaHQ6JHtvbmVNb3JlQnV0dG9uSGVpZ2h0fXB4XCIgaHJlZj1cImphdmFzY3JpcHQ6bG9jYXRpb24ucmVsb2FkKClcIj48L2E+YFxyXG5cdFx0aW5uZXJIVE1MICs9IGA8YSBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6ICR7c2hhcmVCdXR0b25YfXB4O3RvcDoke29uZU1vcmVCdXR0b25ZfXB4O3dpZHRoOiR7b25lTW9yZUJ1dHRvbldpZHRofXB4O2hlaWdodDoke29uZU1vcmVCdXR0b25IZWlnaHR9cHhcIiBocmVmPVwiamF2YXNjcmlwdDphbGVydCgn54K55Ye75Y+z5LiK6KeS5oyJ6ZKu5Y+v5Lul5Y+R6YCB57uZ5pyL5Y+L5oiW5YiG5Lqr5Yiw5pyL5Y+L5ZyIJylcIj48L2E+YFxyXG5cdFx0ZGl2RWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcclxuXHRcdC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwidmlldy9zY29yZV8xLmpwZ1wiPjwvaW1nPmBcclxuXHRcdExheWEuQnJvd3Nlci5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdkVsZW1lbnQpXHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblNjb3JlRGlhbG9nQ2xvc2UoKSB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0fVxyXG5cclxuXHQvLyDliKTmlq3mmK/lkKbpnIDopoHmmL7npLrpl67pophcclxuXHRwcml2YXRlIHNob3dRdWVzdGlvbkRpYWxvZ0lmTmVlZCh5OiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG9mZnNldCA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcclxuXHRcdGNvbnN0IGhhc1Nob3dMZW5ndGggPSB0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5sZW5ndGhcclxuXHRcdGlmIChoYXNTaG93TGVuZ3RoID49IDEwKSB7XHJcblx0XHQvLyBpZiAoeSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGlmICh5ID4gb2Zmc2V0IC0gUXVlc3Rpb25TaG93WVtoYXNTaG93TGVuZ3RoXSkge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdH1cclxuXHRcdGNvbnN0IGlzT2RkID0gIShoYXNTaG93TGVuZ3RoICUgMik7XHJcblx0XHRpZiAoaXNPZGQpIHsgLy8g6ZqP5py6XHJcblx0XHRcdGNvbnN0IHJhbmRvbSA9IHRoaXMuZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpO1xyXG5cdFx0XHR0aGlzLnNob3dRdWVzdGlvbihyYW5kb20pO1xyXG5cdFx0fSBlbHNlIHtcdC8vIOWPluWJjTXkvY1cclxuXHRcdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKGhhc1Nob3dMZW5ndGggLyAyKTtcclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24oaW5kZXgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWVcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0UmFuZG9tUXVlc3Rpb25JbmRleCgpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgbWF4ID0gUXVlc3Rpb25EYXRhLmxlbmd0aCAtIDVcclxuXHRcdGNvbnN0IHJhbmRvbSA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiBtYXgpKSArIDVcclxuXHRcdGlmICh0aGlzLnNob3dRdWVzdGlvbkluZGV4TGlzdC5pbmRleE9mKHJhbmRvbSkgPT0gLTEpIHtcclxuXHRcdFx0cmV0dXJuIHJhbmRvbVxyXG5cdFx0fSBlbHNlIHsgLy8g5bey57uP5pi+56S66L+H6YeN5paw6I635Y+WXHJcblx0XHRcdHJldHVybiB0aGlzLmdldFJhbmRvbVF1ZXN0aW9uSW5kZXgoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1F1ZXN0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmIChpbmRleCA+PSBRdWVzdGlvbkRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0dGhpcy5zaG93UXVlc3Rpb25JbmRleExpc3QucHVzaChpbmRleCk7XHJcblx0XHRjb25zdCBxdWVzdGlvbkRhdGEgPSBRdWVzdGlvbkRhdGFbaW5kZXhdXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0Y29uc3QgcXVlc3Rpb25EaWFsb2cgPSBuZXcgUXVlc3Rpb25EaWFsb2cocXVlc3Rpb25EYXRhKTtcclxuXHRcdHF1ZXN0aW9uRGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdHF1ZXN0aW9uRGlhbG9nLmNsb3NlSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblF1ZXN0aW9uRGlhbG9nQ2xvc2UsIFtpbmRleF0pXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHNob3dTaGFrZURpYWxvZygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nID0gbmV3IFNoYWtlRGlhbG9nKCk7XHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nLnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApO1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlKTtcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH1cclxuXHRwcml2YXRlIHNob3dTaGFrZURpYWxvZzIoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzIgPSBuZXcgU2hha2VEaWFsb2coKTtcclxuXHRcdHRoaXMuc2hha2VEaWFsb2cyLnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApO1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlMik7XHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9IHByaXZhdGUgc2hvd1NoYWtlRGlhbG9nMygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2hvd2luZ0RpYWxvZyA9IHRydWVcclxuXHRcdFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gZmFsc2VcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nMyA9IG5ldyBTaGFrZURpYWxvZygpO1xyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzMucG9wdXAodHJ1ZSwgZmFsc2UpO1xyXG5cdFx0Ly8g55uR5ZCs5pGH5LiA5pGHXHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLnN0YXJ0KDUsIDUwMCk7XHJcblx0XHRMYXlhLlNoYWtlLmluc3RhbmNlLm9uKExheWEuRXZlbnQuQ0hBTkdFLCB0aGlzLCB0aGlzLm9uRGV2aWNlU2hha2UzKTtcclxuXHRcdHRoaXMuY29uc29sZS50ZXh0ICs9ICflvIDlp4vmjqXmlLborr7lpIfmkYfliqhcXG4nO1xyXG5cdH0gcHJpdmF0ZSBzaG93U2hha2VEaWFsb2c0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gdHJ1ZVxyXG5cdFx0VUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSBmYWxzZVxyXG5cdFx0TGF5YS5EaWFsb2cubWFuYWdlciA9IG5ldyBMYXlhLkRpYWxvZ01hbmFnZXIoKVx0Ly8g5rOo5oSP77ya6KaB6YeN5paw6K6+572ubWFuYWdlcu+8jFVJQ29uZmlnLmNsb3NlRGlhbG9nT25TaWRlID0gdHJ1ZSDorr7nva7miY3nlJ/mlYhcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c0ID0gbmV3IFNoYWtlRGlhbG9nKCk7XHJcblx0XHR0aGlzLnNoYWtlRGlhbG9nNC5wb3B1cCh0cnVlLCBmYWxzZSk7XHJcblx0XHQvLyDnm5HlkKzmkYfkuIDmkYdcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uuc3RhcnQoNSwgNTAwKTtcclxuXHRcdExheWEuU2hha2UuaW5zdGFuY2Uub24oTGF5YS5FdmVudC5DSEFOR0UsIHRoaXMsIHRoaXMub25EZXZpY2VTaGFrZTQpO1xyXG5cdFx0dGhpcy5jb25zb2xlLnRleHQgKz0gJ+W8gOWni+aOpeaUtuiuvuWkh+aRh+WKqFxcbic7XHJcblx0fSBwcml2YXRlIHNob3dTaGFrZURpYWxvZzUoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IGZhbHNlXHJcblx0XHRMYXlhLkRpYWxvZy5tYW5hZ2VyID0gbmV3IExheWEuRGlhbG9nTWFuYWdlcigpXHQvLyDms6jmhI/vvJropoHph43mlrDorr7nva5tYW5hZ2Vy77yMVUlDb25maWcuY2xvc2VEaWFsb2dPblNpZGUgPSB0cnVlIOiuvue9ruaJjeeUn+aViFxyXG5cdFx0dGhpcy5zaGFrZURpYWxvZzUgPSBuZXcgU2hha2VEaWFsb2coKTtcclxuXHRcdHRoaXMuc2hha2VEaWFsb2c1LnBvcHVwKHRydWUsIGZhbHNlKTtcclxuXHRcdC8vIOebkeWQrOaRh+S4gOaRh1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5zdGFydCg1LCA1MDApO1xyXG5cdFx0TGF5YS5TaGFrZS5pbnN0YW5jZS5vbihMYXlhLkV2ZW50LkNIQU5HRSwgdGhpcywgdGhpcy5vbkRldmljZVNoYWtlNSk7XHJcblx0XHR0aGlzLmNvbnNvbGUudGV4dCArPSAn5byA5aeL5o6l5pS26K6+5aSH5pGH5YqoXFxuJztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2hvd1RpcERpYWxvZyh0aXBUeXBlOiBUaXBUeXBlKTogdm9pZCB7XHJcblx0XHR0aGlzLnNob3dpbmdEaWFsb2cgPSB0cnVlXHJcblx0XHRVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWVcclxuXHRcdExheWEuRGlhbG9nLm1hbmFnZXIgPSBuZXcgTGF5YS5EaWFsb2dNYW5hZ2VyKClcdC8vIOazqOaEj++8muimgemHjeaWsOiuvue9rm1hbmFnZXLvvIxVSUNvbmZpZy5jbG9zZURpYWxvZ09uU2lkZSA9IHRydWUg6K6+572u5omN55Sf5pWIXHJcblx0XHRjb25zdCBzY3JvbGxEaWFsb2cgPSBuZXcgU2Nyb2xsRGlhbG9nKHRpcFR5cGUpXHJcblxyXG5cdFx0c2Nyb2xsRGlhbG9nLnBvcHVwKHRydWUpO1xyXG5cdFx0c2Nyb2xsRGlhbG9nLmNsb3NlSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vblRpcERpYWxvZ0Nsb3NlKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvblRpcERpYWxvZ0Nsb3NlKCkge1xyXG5cdFx0dGhpcy5zaG93aW5nRGlhbG9nID0gZmFsc2VcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGxheVNvdW5kKHVybDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmJnbVNvdW5kQ2hhbm5lbC5wYXVzZSgpO1xyXG5cdFx0TGF5YS5Tb3VuZE1hbmFnZXIucGxheVNvdW5kKHVybCwgMSwgTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uU291bmRDb21wZXRlKSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgb25Tb3VuZENvbXBldGUoKSB7XHJcblx0XHR0aGlzLmJnbVNvdW5kQ2hhbm5lbC5yZXN1bWUoKVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzaG93Q29uc29sZVRleHQodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5jb25zb2xlID0gbmV3IExheWEuVGV4dCgpO1xyXG5cdFx0TGF5YS5zdGFnZS5hZGRDaGlsZCh0aGlzLmNvbnNvbGUpO1xyXG5cdFx0dGhpcy5jb25zb2xlLnpPcmRlciA9IDEwMDAxXHJcblx0XHR0aGlzLmNvbnNvbGUueSA9IDEwO1xyXG5cdFx0dGhpcy5jb25zb2xlLndpZHRoID0gTGF5YS5zdGFnZS53aWR0aDtcclxuXHRcdHRoaXMuY29uc29sZS5oZWlnaHQgPSAyMDA7XHJcblx0XHR0aGlzLmNvbnNvbGUuY29sb3IgPSBcIiNGRkZGRkZcIjtcclxuXHRcdHRoaXMuY29uc29sZS5mb250U2l6ZSA9IDIwO1xyXG5cdFx0dGhpcy5jb25zb2xlLmxlYWRpbmcgPSAxMDtcclxuXHRcdHRoaXMuY29uc29sZS5iZ0NvbG9yID0gXCIjMDAwMDAwXCJcclxuXHRcdHRoaXMuY29uc29sZS52aXNpYmxlID0gdmlzaWJsZVxyXG5cclxuXHR9XHJcblxyXG5cdC8vIOW8gOWni+ebkeWQrOaLluWKqFxyXG5cdHByaXZhdGUgYmVnaW5MaXN0ZW5EcmFnKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jYW5jZWxMaXN0ZW5DbGljaygpO1xyXG5cdFx0dGhpcy5jYW5jZWxMaXN0ZW5Mb25nQ2xpY2soKTtcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5EUkFHX01PVkUsIHRoaXMsIHRoaXMub25CYWNrZ3JvdW5kTW92ZSlcclxuXHR9XHJcblxyXG5cdC8vIOW8gOWni+ebkeWQrOeCueWHu1xyXG5cdHByaXZhdGUgYmVnaW5MaXN0ZW5DbGljaygpOiB2b2lkIHtcclxuXHRcdHRoaXMuY2FuY2VsTGlzdGVuRHJhZygpO1xyXG5cdFx0dGhpcy5jYW5jZWxMaXN0ZW5Mb25nQ2xpY2soKTtcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uQmFja2dyb3VuZENsaWNrKVxyXG5cdH1cclxuXHJcblx0Ly8g5byA5aeLXGLnm5HlkKzplb/mjIlcclxuXHRwcml2YXRlIGJlZ2luTGlzdGVuTG9uZ0NsaWNrKCk6IHZvaWQge1xyXG5cdFx0dGhpcy5jYW5jZWxMaXN0ZW5EcmFnKCk7XHJcblx0XHR0aGlzLmNhbmNlbExpc3RlbkNsaWNrKCk7XHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9uKExheWEuRXZlbnQuTU9VU0VfRE9XTiwgdGhpcywgdGhpcy5vbkxvbmdDbGlja0Rvd24pO1xyXG5cdFx0dGhpcy5zY3JlZW4xQmFja0dyb3VuZC5vbihMYXlhLkV2ZW50Lk1PVVNFX1VQLCB0aGlzLCB0aGlzLm9uTG9uZ0NsaWNrVXApXHJcblx0fVxyXG5cclxuXHJcblx0Ly8g54K55Ye76Kem5Y+R5LqL5Lu2XHJcblx0cHJpdmF0ZSBvbkJhY2tncm91bmRDbGljaygpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiTWFpblwiLCBcIm9uQmFja2dyb3VuZENsaWNrXCIpXHJcblx0fVxyXG5cclxuXHQvLyDplb/mjInop6blj5Hkuovku7ZcclxuXHRwcml2YXRlIG9uQmFja2dyb3VuZExvbmdDbGljaygpOiB2b2lkIHtcclxuXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbmNlbExpc3RlbkRyYWcoKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9mZkFsbChMYXlhLkV2ZW50LkRSQUdfTU9WRSlcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY2FuY2VsTGlzdGVuQ2xpY2soKTogdm9pZCB7XHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9mZkFsbChMYXlhLkV2ZW50Lk1PVVNFX0RPV04pXHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGNhbmNlbExpc3RlbkxvbmdDbGljaygpOiB2b2lkIHtcclxuXHRcdHRoaXMuc2NyZWVuMUJhY2tHcm91bmQub2ZmQWxsKExheWEuRXZlbnQuTU9VU0VfRE9XTik7XHJcblx0XHR0aGlzLnNjcmVlbjFCYWNrR3JvdW5kLm9mZkFsbChMYXlhLkV2ZW50Lk1PVVNFX1VQKTtcclxuXHRcdHRoaXMuaXNMb25nQ2xpY2sgPSBmYWxzZVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvbmdDbGlja0Rvd24oKTogdm9pZCB7XHJcblx0XHR0aGlzLmlzTG9uZ0NsaWNrID0gdHJ1ZVxyXG5cdFx0TGF5YS50aW1lci5vbmNlKDEwMDAsIHRoaXMsIHRoaXMub25Mb25nRG93bkNoZWNrKSAvLyAx56eS566X6ZW/5oyJXHJcblx0fVxyXG5cdHByaXZhdGUgb25Mb25nQ2xpY2tVcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaXNMb25nQ2xpY2sgPSBmYWxzZVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBvbkxvbmdEb3duQ2hlY2soKSB7XHJcblx0XHRpZiAoIXRoaXMuaXNMb25nQ2xpY2spIHsgLy8g5LiN566X6ZW/5oyJXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cdFx0dGhpcy5vbkJhY2tncm91bmRMb25nQ2xpY2soKVxyXG5cdH1cclxuXHJcbn1cclxuLy/mv4DmtLvlkK/liqjnsbtcclxubmV3IE1haW4oKTtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBRdWVzdGlvbkl0ZW0ge1xuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgYTogc3RyaW5nLFxuICAgIGI6IHN0cmluZyxcbiAgICBjOiBzdHJpbmcsXG4gICAgZDogc3RyaW5nLFxuICAgIGFuc3dlcjogXCJhXCIgfCBcImJcIiB8IFwiY1wiIHwgXCJkXCIsXG4gICAgaWQ6IG51bWJlciAgLy8g5LuFXGLkvpvlj4LnnIvmlbDmja7ml7blj4LogIPvvIzku6PnoIHkuK3kuI3kvb/nlKhcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXN0aW9uU2hvd1kgPSBbXG4gICAgMTMxMyArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQsXG4gICAgMzMwNyArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQsXG4gICAgNTgyNyxcbiAgICA2NjI4LFxuICAgIDkxMjAsXG4gICAgOTk4MCxcbiAgICAxMjE0NCxcbiAgICAxMzE3OCxcbiAgICAxNTQ2MCxcbiAgICAxNTkwMFxuXVxuZXhwb3J0ICBjb25zdCBRdWVzdGlvbkRhdGE6IEFycmF5PFF1ZXN0aW9uSXRlbT4gPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCLlm73otrPov5vkuJbnlYzmna/nmoTkuLvluIXmmK/lk6rkvY0/XCIsXG4gICAgICAgIGE6IFwi6YeM55quXCIsXG4gICAgICAgIGI6IFwi5pyx5bm/5rKqXCIsXG4gICAgICAgIGM6IFwi6auY5rSq5rOiXCIsXG4gICAgICAgIGQ6IFwi57Gz5Y2iXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDblubTliJjnv5TnoLTkuJbnlYznuqrlvZXnmoTmiJDnu6nmmK/lpJrlsJE/XCIsXG4gICAgICAgIGE6IFwiMTLnp5I5MVwiLFxuICAgICAgICBiOiBcIjEy56eSODhcIixcbiAgICAgICAgYzogXCIxMuenkjg3XCIsXG4gICAgICAgIGQ6IFwiMTLnp5I4NlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiLFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA45bm05YyX5Lqs5aWl6L+Q5Lya6LCB54K554eD5LqG5Li754Gr54KsP1wiLFxuICAgICAgICBhOiBcIuiuuOa1t+WzsFwiLFxuICAgICAgICBiOiBcIumCk+S6muiQjVwiLFxuICAgICAgICBjOiBcIuadjuWugVwiLFxuICAgICAgICBkOiBcIueGiuWAqlwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDEy5bm05Lym5pWm5aWl6L+Q5Lya55S35a2QNDAw55Sx5rOz5Yag5Yab5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi6IyD5b635Yev5LyKXCIsXG4gICAgICAgIGI6IFwi6YOd6L+QXCIsXG4gICAgICAgIGM6IFwi5py05rOw5qGTXCIsXG4gICAgICAgIGQ6IFwi5a2Z5p2oXCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCIsXG4gICAgICAgIGlkOiA1XG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMTblubTmlrDmtaozeDPnr67nkIPpu4Tph5HogZTotZvmgLvlhqDlhpvpmJ/mmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLljJflpKfpmJ9cIixcbiAgICAgICAgYjogXCLlsI/pvpnpvpnpmJ9cIixcbiAgICAgICAgYzogXCLpnLjmsJTmiJjpmJ9cIixcbiAgICAgICAgZDogXCLljY7kvqjlpKflrabpmJ9cIixcbiAgICAgICAgYW5zd2VyOiBcImRcIixcbiAgICAgICAgaWQ6IDZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwi5YyX5Lqs5aWl6L+Q5Lya5Lit5Zu95Luj6KGo5Zui55qE5peX5omL5piv6LCB77yfXCIsXG4gICAgICAgIGE6IFwi5aea5piOXCIsXG4gICAgICAgIGI6IFwi5YiY57+UXCIsXG4gICAgICAgIGM6IFwi546L5Yqx5YukXCIsXG4gICAgICAgIGQ6IFwi5p6X5Li5XCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCIsXG4gICAgICAgIGlkOiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogXCLnrKzkuIDkuKrnmbvkuIrmrKflhqDotZvlnLrnmoTkuK3lm73nkIPlkZjmmK/vvJpcIixcbiAgICAgICAgYTogXCLlrZnnpaVcIixcbiAgICAgICAgYjogXCLokaPmlrnljZNcIixcbiAgICAgICAgYzogXCLmnY7pk4FcIixcbiAgICAgICAgZDogXCLpg5HmmbpcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgdGl0bGU6IFwi6YK15L2z5LiAOeW5tOW+t+WbveeUn+a2r+ato+W8j+avlOi1m+mHjOaAu+WFseaJk+eQg+WkmuWwkeeQg++8n1wiLFxuICAgICAgICBhOiBcIjE4XCIsXG4gICAgICAgIGI6IFwiMTlcIixcbiAgICAgICAgYzogXCIyOVwiLFxuICAgICAgICBkOiBcIjMwXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIHRpdGxlOiBcIuesrOS4gOS4quWcqOasp+a0suiBlOi1m+S4reiOt+W+l+mHkemdtOeahOeQg+WRmOaYr++8mlwiLFxuICAgICAgICBhOiBcIumDkeaZulwiLFxuICAgICAgICBiOiBcIuadqOaZqFwiLFxuICAgICAgICBjOiBcIuiwouaZllwiLFxuICAgICAgICBkOiBcIuiRo+aWueWNk1wiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgdGl0bGU6IFwi56ys5LiA5L2N5Zyo55WZ5rSL5pyf6Ze05ouF5Lu755CD6Zif6Zif6ZW/55qE5Lit5Zu957GN55CD5ZGY5piv77yaXCIsXG4gICAgICAgIGE6IFwi6IyD5b+X5q+FXCIsXG4gICAgICAgIGI6IFwi6YOR5pm6XCIsXG4gICAgICAgIGM6IFwi5a2Z57un5rW3XCIsXG4gICAgICAgIGQ6IFwi5p2O6ZOBXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDExLFxuICAgICAgICB0aXRsZTogXCLlp5rmmI7lk6rkuIDlubTpgIDlvbnvvJ9cIixcbiAgICAgICAgYTogXCIyMDEwXCIsXG4gICAgICAgIGI6IFwiMjAxMVwiLFxuICAgICAgICBjOiBcIjIwMTJcIixcbiAgICAgICAgZDogXCIyMDEzXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEyLFxuICAgICAgICB0aXRsZTogXCIyMDE45bm05Lqa6L+Q5Lya5Lit56+u55CD6aG555uu5Lit5Zu96Zif5pS26I635LqG5Yeg5p6a6YeR54mM77yfXCIsXG4gICAgICAgIGE6IFwiMVwiLFxuICAgICAgICBiOiBcIjJcIixcbiAgICAgICAgYzogXCIzXCIsXG4gICAgICAgIGQ6IFwiNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiZFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMyxcbiAgICAgICAgdGl0bGU6IFwiQ0JB6IGU6LWb5Y6G5Y+y5LiK56ys5LiA5Liq5b6X5YiG56C05LiH55qE55CD5ZGY77yfXCIsXG4gICAgICAgIGE6IFwi5piT5bu66IGUXCIsXG4gICAgICAgIGI6IFwi5pyx6Iqz6ZuoXCIsXG4gICAgICAgIGM6IFwi5YiY54KcXCIsXG4gICAgICAgIGQ6IFwi546L5rK76YOFXCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE0LFxuICAgICAgICB0aXRsZTogXCLlk6rmlK/nkIPpmJ/lnKgwMi0wM+i1m+Wto0NCQeWto+WQjui1m+S4reWIm+mAoOS6hum7kTjlpYfov7nvvJ9cIixcbiAgICAgICAgYTogXCLovr3lroFcIixcbiAgICAgICAgYjogXCLlm5vlt51cIixcbiAgICAgICAgYzogXCLljJfkuqxcIixcbiAgICAgICAgZDogXCLlsbHkuJxcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTUsXG4gICAgICAgIHRpdGxlOiBcIuS4reWbvei2s+eQg+mhtue6p+iBlOi1m+eUseeUskHlj5jmm7TkuLrkuK3otoXnmoTmmK/lnKjlk6rkuIDlubTvvJ9cIixcbiAgICAgICAgYTogXCIwMlwiLFxuICAgICAgICBiOiBcIjAzXCIsXG4gICAgICAgIGM6IFwiMDRcIixcbiAgICAgICAgZDogXCIwNVwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNixcbiAgICAgICAgdGl0bGU6IFwi6Zmp5Lqb5Zyo5Lit6LaF5Yib6YCg5Yev5rO95pav5Yqz5ruV56We6K+d55qE5piv5Lul5LiL5ZOq5pSv55CD6Zif77yfXCIsXG4gICAgICAgIGE6IFwi6L695a6BXCIsXG4gICAgICAgIGI6IFwi5YyX5LqsXCIsXG4gICAgICAgIGM6IFwi5LiK5rW3XCIsXG4gICAgICAgIGQ6IFwi5bm/5beeXCIsXG4gICAgICAgIGFuc3dlcjogXCJhXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE3LFxuICAgICAgICB0aXRsZTogXCLmgZLlpKfnrKzkuIDmrKHojrflvpfkuprlhqDogZTotZvlhqDlhpvmmK/pgqPkuIDlubTvvJ9cIixcbiAgICAgICAgYTogXCIyMDEy5bm0XCIsXG4gICAgICAgIGI6IFwiMjAxM+W5tFwiLFxuICAgICAgICBjOiBcIjIwMTTlubRcIixcbiAgICAgICAgZDogXCIyMDE15bm0XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE4LFxuICAgICAgICB0aXRsZTogXCIyMDAy5bm05LiW55WM5p2v77yM5Lit5Zu96Zif6Zif5ZCM57uE5a+55omL6Zmk5be06KW/44CB5ZOl5pav6L6+6buO5Yqg6L+Y5pyJ6YKj5Liq5Zu95a6277yfXCIsXG4gICAgICAgIGE6IFwi5biM6IWKXCIsXG4gICAgICAgIGI6IFwi5b635Zu9XCIsXG4gICAgICAgIGM6IFwi5pel5pysXCIsXG4gICAgICAgIGQ6IFwi5Zyf6ICz5YW2XCIsXG4gICAgICAgIGFuc3dlcjogXCJkXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDE5LFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkvY3lm73lhoXnkIPlkZjlnKjkuprlhqDkuIrmvJTlpKflm5vllpzvvJ9cIixcbiAgICAgICAgYTogXCLmrabno4pcIixcbiAgICAgICAgYjogXCLpg53mtbfkuJxcIixcbiAgICAgICAgYzogXCLpg5zmnpdcIixcbiAgICAgICAgZDogXCLpgrXkvbPkuIBcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjAsXG4gICAgICAgIHRpdGxlOiBcIjIwMTTlubTmnY7lqJznrKzlh6DmrKHojrflvpflpKfmu6HotK/lpbPljZXlhqDlhpvvvJ9cIixcbiAgICAgICAgYTogXCIxXCIsXG4gICAgICAgIGI6IFwiMlwiLFxuICAgICAgICBjOiBcIjNcIixcbiAgICAgICAgZDogXCI0XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIxLFxuICAgICAgICB0aXRsZTogXCLmnKzotZvlraPmrabno4rlpLrlj5bkuK3otoXph5HpnbTvvIzkuIrkuIDlkI3lpLrlvpfkuK3otoXph5HpnbTnmoTmnKzlnJ/nkIPlkZjmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLpg53mtbfkuJxcIixcbiAgICAgICAgYjogXCLmnY7ph5Hnvr1cIixcbiAgICAgICAgYzogXCLlrr/ojILoh7tcIixcbiAgICAgICAgZDogXCLpg5zmnpdcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDIsXG4gICAgICAgIHRpdGxlOiBcIuabvuWIm+S4i+S4reWbveWbtOaji+WQjeS6uuaImOWNgeS4iei/numcuOe6quW9leeahOaYr+iwge+8n1wiLFxuICAgICAgICBhOiBcIumprOaZk+aYpVwiLFxuICAgICAgICBiOiBcIuW4uOaYilwiLFxuICAgICAgICBjOiBcIuiBguWNq+W5s1wiLFxuICAgICAgICBkOiBcIuafr+a0gVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyMyxcbiAgICAgICAgdGl0bGU6IFwi5Lit6LaF5pyA5bm06L276L+b55CD6ICF57qq5b2V5piv55Sx6LCB5L+d5oyB6ICF77yfXCIsXG4gICAgICAgIGE6IFwi5q2m56OKXCIsXG4gICAgICAgIGI6IFwi6buE5Y2a5paHXCIsXG4gICAgICAgIGM6IFwi5pyx6L6w5p2wXCIsXG4gICAgICAgIGQ6IFwi6YOR5pm6XCIsXG4gICAgICAgIGFuc3dlcjogXCJiXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI0LFxuICAgICAgICB0aXRsZTogXCLotrPljY/mna/lpLrlhqDmrKHmlbDmnIDlpJrnmoTnkIPpmJ/mmK/vvJ9cIixcbiAgICAgICAgYTogXCLlub/lt57mgZLlpKdcIixcbiAgICAgICAgYjogXCLljJfkuqzlm73lrolcIixcbiAgICAgICAgYzogXCLlsbHkuJzpsoHog71cIixcbiAgICAgICAgZDogXCLkuIrmtbfnlLPoirFcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjUsXG4gICAgICAgIHRpdGxlOiBcIuS4reWbveWls+i2s+WcqOS4lueVjOadr+S4iueahOacgOWlveaIkOe7qe+8n1wiLFxuICAgICAgICBhOiBcIuWGoOWGm1wiLFxuICAgICAgICBiOiBcIuS6muWGm1wiLFxuICAgICAgICBjOiBcIuWto+WGm1wiLFxuICAgICAgICBkOiBcIuesrOWbm+WQjVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNixcbiAgICAgICAgdGl0bGU6IFwi5bm/5bee5oGS5aSn5Zyo5Lit6LaF5a6M5oiQ5Yeg6L+e5Yag77yfXCIsXG4gICAgICAgIGE6IFwiNui/nuWGoFwiLFxuICAgICAgICBiOiBcIjfov57lhqBcIixcbiAgICAgICAgYzogXCI46L+e5YagXCIsXG4gICAgICAgIGQ6IFwiOei/nuWGoFwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyNyxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N55CD5ZGY5rKh5pyJ5Y+C5Yqg6L+H5LiW55WM5p2v5q2j6LWb77yfXCIsXG4gICAgICAgIGE6IFwi6YK15L2z5LiAXCIsXG4gICAgICAgIGI6IFwi5a2Z57un5rW3XCIsXG4gICAgICAgIGM6IFwi5p2O6YeR5769XCIsXG4gICAgICAgIGQ6IFwi5rGf5rSlXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDI4LFxuICAgICAgICB0aXRsZTogXCLnjofpooblub/lt57mgZLlpKfojrflvpfnrKzkuIDkuKrkuK3otoXlhqDlhpvnmoTkuLvmlZnnu4PmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLmnY7nq6DmtJlcIixcbiAgICAgICAgYjogXCLph4znmq5cIixcbiAgICAgICAgYzogXCLmlq/np5Hmi4nph4xcIixcbiAgICAgICAgZDogXCLljaHnurPnk6bnvZdcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMjksXG4gICAgICAgIHRpdGxlOiBcIuS7peS4i+WTquS9jeeQg+WRmOS7juadpeayoeacieWIsOS4rei2hei4oui/h+eQg++8n1wiLFxuICAgICAgICBhOiBcIuW3tOmHjOWlpeaWr1wiLFxuICAgICAgICBiOiBcIuWQieaLiei/quivulwiLFxuICAgICAgICBjOiBcIuS8iua2heaWr+WhlFwiLFxuICAgICAgICBkOiBcIuW+t+e9l+W3tFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzMCxcbiAgICAgICAgdGl0bGU6IFwi5Lul5LiL5ZOq5L2N55CD5ZGY5rKh5pyJ6I635b6X6L+H4oCc5Lqa5rSy6Laz55CD5bCP5aeQ4oCd55qE56ew5Y+377yfXCIsXG4gICAgICAgIGE6IFwi5a2Z6ZuvXCIsXG4gICAgICAgIGI6IFwi55m95rSBXCIsXG4gICAgICAgIGM6IFwi6Z+p56uvXCIsXG4gICAgICAgIGQ6IFwi6ams5pmT5petXCIsXG4gICAgICAgIGFuc3dlcjogXCJjXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMxLFxuICAgICAgICB0aXRsZTogXCLku6XkuIvlk6rkuKrnnIHku73miJbln47luILmsqHmnInkuKTmlK/kuK3otoXpmJ/kvI3vvJ9cIixcbiAgICAgICAgYTogXCLlub/lt55cIixcbiAgICAgICAgYjogXCLkuIrmtbdcIixcbiAgICAgICAgYzogXCLljJfkuqxcIixcbiAgICAgICAgZDogXCLmsZ/oi49cIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzIsXG4gICAgICAgIHRpdGxlOiBcIjE5OTnlubTkvZPmk43kuJbplKbotZvmnY7lsI/puY/ojrflvpfkuoblk6rkuKrpobnnm67nmoTph5HniYzvvJ9cIixcbiAgICAgICAgYTogXCLoh6rnlLHmk41cIixcbiAgICAgICAgYjogXCLlj4zmnaBcIixcbiAgICAgICAgYzogXCLot7PpqaxcIixcbiAgICAgICAgZDogXCLljZXmnaBcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzMsXG4gICAgICAgIHRpdGxlOiBcIjIwMDHlubTlk6rkuIDlpKnokKjpqazlhbDlpYflrqPluIPljJfkuqzmiJDkuLoyMDA45bm05aWl6L+Q5Lya5Li75Yqe5Z+O5biC77yfXCIsXG4gICAgICAgIGE6IFwiNy4xMVwiLFxuICAgICAgICBiOiBcIjcuMTJcIixcbiAgICAgICAgYzogXCI3LjEzXCIsXG4gICAgICAgIGQ6IFwiNy4xNFwiLFxuICAgICAgICBhbnN3ZXI6IFwiY1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNCxcbiAgICAgICAgdGl0bGU6IFwiMjAwMuW5tOebkOa5luWfjuWGrOWlpeS8mu+8jOiwgeS4uuS4reWbveaLv+WIsOWGrOWlpeS8muWOhuWPsummlumHke+8n1wiLFxuICAgICAgICBhOiBcIuadqOmYs1wiLFxuICAgICAgICBiOiBcIuadqOaJrFwiLFxuICAgICAgICBjOiBcIuadqOadqCBcIixcbiAgICAgICAgZDogXCLmnajmtItcIixcbiAgICAgICAgYW5zd2VyOiBcImJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzUsXG4gICAgICAgIHRpdGxlOiBcIjIwMDPlubTlm73lrrbkvZPogrLmgLvlsYDmraPlvI/mibnlh4blk6rkuKrpobnnm67miJDkuLrnrKw5OeS4quato+W8j+S9k+iCsuernui1m+mhue+8n1wiLFxuICAgICAgICBhOiBcIueUteWtkOernuaKgFwiLFxuICAgICAgICBiOiBcIumrmOWwlOWkq1wiLFxuICAgICAgICBjOiBcIumprOeQg1wiLFxuICAgICAgICBkOiBcIua7kee/lOS8nlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNixcbiAgICAgICAgdGl0bGU6IFwiMjAwNeW5tOiwgeWkuuW+l+S6huS4reWbveaWr+ivuuWFi+mmluS4quaOkuWQjei1m+WGoOWGm++8n1wiLFxuICAgICAgICBhOiBcIuWCheWutuS/ilwiLFxuICAgICAgICBiOiBcIuS4geS/iuaZllwiLFxuICAgICAgICBjOiBcIuaigeaWh+WNmlwiLFxuICAgICAgICBkOiBcIueUsOm5j+mjnlwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzNyxcbiAgICAgICAgdGl0bGU6IFwiMjAwNuW5tOmDveeBteWGrOWlpeS8muS4reWbveWTquS9jeeUt+mAieaJi+iOt+W+l+S6humHkeeJjO+8n1wiLFxuICAgICAgICBhOiBcIuadjuS9s+WGm1wiLFxuICAgICAgICBiOiBcIumfqeaZk+m5j1wiLFxuICAgICAgICBjOiBcIumfqeS9s+iJr1wiLFxuICAgICAgICBkOiBcIuWuieeOiem+mVwiLFxuICAgICAgICBhbnN3ZXI6IFwiYlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzOCxcbiAgICAgICAgdGl0bGU6IFwiMjAwN+W5tOeUsOW+hOS4lumUpui1m+WImOe/lOWGs+i1m+WcqOesrOWHoOi3kemBk++8n1wiLFxuICAgICAgICBhOiBcIjZcIixcbiAgICAgICAgYjogXCI3XCIsXG4gICAgICAgIGM6IFwiOFwiLFxuICAgICAgICBkOiBcIjlcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMzksXG4gICAgICAgIHRpdGxlOiBcIjIwMDnlubTmuLjms7PkuJbplKbotZvosIHlpLrlvpfkuK3lm73nlLflrZDmuLjms7Ppppbph5HvvJ9cIixcbiAgICAgICAgYTogXCLlvKDnkLNcIixcbiAgICAgICAgYjogXCLlrZnmnahcIixcbiAgICAgICAgYzogXCLlroHms73mtptcIixcbiAgICAgICAgZDogXCLlvpDlmInkvZlcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDAsXG4gICAgICAgIHRpdGxlOiBcIjIwMTPlubTosIHliJvpgKDkuobljZXkurrluIboiLnkuI3pl7Tmlq3njq/nkIPoiKrooYzkuJbnlYznuqrlvZXvvJ9cIixcbiAgICAgICAgYTogXCLlvpDojonkvbNcIixcbiAgICAgICAgYjogXCLmrrfliZFcIixcbiAgICAgICAgYzogXCLpg63lt51cIixcbiAgICAgICAgZDogXCLpmYjkvanlqJxcIixcbiAgICAgICAgYW5zd2VyOiBcImNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDEsXG4gICAgICAgIHRpdGxlOiBcIuWPguWKoOS4jkFscGhhR2/kurrmnLrlpKfmiJjnmoTmmK/lk6rkvY3kuK3lm73mo4vmiYvvvJ9cIixcbiAgICAgICAgYTogXCLmnY7kuJbnn7NcIixcbiAgICAgICAgYjogXCLogYLljavlubNcIixcbiAgICAgICAgYzogXCLllJDljavmmJ9cIixcbiAgICAgICAgZDogXCLmn6/mtIFcIixcbiAgICAgICAgYW5zd2VyOiBcImRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDIsXG4gICAgICAgIHRpdGxlOiBcIjIwMTblubTosIHmiJDkuLrkuobpm4blhajlm73lhqDlhpvjgIHkuprmtLLlhqDlhpvjgIHkuJbplKbotZvlhqDlhpvjgIHlpaXov5DkvJrlhqDlhpvjgIHogYzkuJrmi7PnjovojaPoqonkuo7kuIDouqvnmoTph5Hmu6HotK/lvpfkuLvvvJ9cIixcbiAgICAgICAgYTogXCLpgrnluILmmI5cIixcbiAgICAgICAgYjogXCLnhormnJ3lv6BcIixcbiAgICAgICAgYzogXCLlvKDlsI/lubNcIixcbiAgICAgICAgZDogXCLlkJXmloxcIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDMsXG4gICAgICAgIHRpdGxlOiBcIjIwMTflubTooqvoqonkuLrigJxNVlDmlLblibLmnLrigJ3nmoTmmK/lk6rkvY3lpbPmjpLlkI3lsIbvvJ9cIixcbiAgICAgICAgYTogXCLmnLHlqbdcIixcbiAgICAgICAgYjogXCLlvKDluLjlroFcIixcbiAgICAgICAgYzogXCLoooHlv4PnjqVcIixcbiAgICAgICAgZDogXCLkuIHpnJ5cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDQsXG4gICAgICAgIHRpdGxlOiBcIjIwMTjlubTkuprov5DkvJrojrflvpfph5HniYzmnIDlpJrnmoTkuK3lm73pgInmiYvmmK/osIHvvJ9cIixcbiAgICAgICAgYTogXCLlvpDlmInkvZlcIixcbiAgICAgICAgYjogXCLlrZnmnahcIixcbiAgICAgICAgYzogXCLmqIrmjK/kuJxcIixcbiAgICAgICAgZDogXCLnjovnroDlmInnpr5cIixcbiAgICAgICAgYW5zd2VyOiBcImFcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNDUsXG4gICAgICAgIHRpdGxlOiBcIjIwMTjlubToi4/ngrPmt7vnmoTnmb7nsbPmnIDkvbPmiJjnu6nmmK/lpJrlsJHvvJ9cIixcbiAgICAgICAgYTogXCI556eSOTFcIixcbiAgICAgICAgYjogXCI556eSXCIsXG4gICAgICAgIGM6IFwiOeenkjk5XCIsXG4gICAgICAgIGQ6IFwiMTDnp5IwM1wiLFxuICAgICAgICBhbnN3ZXI6IFwiYVwiXG4gICAgfVxuICAgXG5dIiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcbmltcG9ydCB7IFF1ZXN0aW9uSXRlbSB9IGZyb20gXCIuL1F1ZXN0aW9uRGF0YVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkRpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5RdWVzdGlvbkRpYWxvZ1VJIHtcblxuICAgIHByaXZhdGUgcXVlc3Rpb246IFF1ZXN0aW9uSXRlbVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKHF1ZXN0aW9uOiBRdWVzdGlvbkl0ZW0pIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb25cblxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzTW9kYWwgPSB0cnVlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9ICAgXG4gICAgXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICAvLyDlu7bml7bmiafooYzvvIzpgb/lhY3miYvmnLrkuIrmiafooYzml7bmiqXnu4Tku7Z1bmRlZmluZWTnmoTpl67pophcbiAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FsbExhdGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMucXVlc3Rpb25MYWJlbCkge1xuICAgICAgICAgICAgTGF5YS50aW1lci5vbmNlKDIwMCwgdGhpcywgdGhpcy5vbkNhbGxMYXRlcilcbiAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9uXG4gICAgICAgIHRoaXMucXVlc3Rpb25MYWJlbC50ZXh0ID0gcXVlc3Rpb24udGl0bGVcbiAgICAgICAgdGhpcy5hbnN3ZXJBQnRuLmxhYmVsID0gcXVlc3Rpb24uYVxuICAgICAgICB0aGlzLmFuc3dlckJCdG4ubGFiZWwgPSBxdWVzdGlvbi5iXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5sYWJlbCA9IHF1ZXN0aW9uLmNcbiAgICAgICAgdGhpcy5hbnN3ZXJEQnRuLmxhYmVsID0gcXVlc3Rpb24uZFxuXG4gICAgICAgIHRoaXMuYW5zd2VyQUJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiYVwiXSlcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLmNsaWNrSGFuZGxlciA9IExheWEuSGFuZGxlci5jcmVhdGUodGhpcywgdGhpcy5vbkNsaWNrQW5zd2VyLCBbXCJiXCJdKVxuICAgICAgICB0aGlzLmFuc3dlckNCdG4uY2xpY2tIYW5kbGVyID0gTGF5YS5IYW5kbGVyLmNyZWF0ZSh0aGlzLCB0aGlzLm9uQ2xpY2tBbnN3ZXIsIFtcImNcIl0pXG4gICAgICAgIHRoaXMuYW5zd2VyREJ0bi5jbGlja0hhbmRsZXIgPSBMYXlhLkhhbmRsZXIuY3JlYXRlKHRoaXMsIHRoaXMub25DbGlja0Fuc3dlciwgW1wiZFwiXSlcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2tBbnN3ZXIoYW5zd2VyOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkNsaWNrQW5zd2VyXCIsIGFuc3dlcilcblxuICAgICAgICBjb25zdCByaWdodCA9ICh0aGlzLnF1ZXN0aW9uLmFuc3dlciA9PT0gYW5zd2VyKVxuICAgICAgICBjb25zdCByZXN1bHRJbWcgPSByaWdodCA/IFwidmlldy9yaWdodC5wbmdcIiA6IFwidmlldy93cm9uZy5wbmdcIlxuICAgICAgICBpZiAoYW5zd2VyID09PSBcImFcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRBSW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdEFJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIGlmIChhbnN3ZXIgPT09IFwiYlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEJJbWcubG9hZEltYWdlKHJlc3VsdEltZylcbiAgICAgICAgICAgIHRoaXMucmVzdWx0QkltZy52aXNpYmxlID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFuc3dlciA9PT0gXCJjXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0Q0ltZy5sb2FkSW1hZ2UocmVzdWx0SW1nKVxuICAgICAgICAgICAgdGhpcy5yZXN1bHRDSW1nLnZpc2libGUgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyID09PSBcImRcIikge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRESW1nLmxvYWRJbWFnZShyZXN1bHRJbWcpXG4gICAgICAgICAgICB0aGlzLnJlc3VsdERJbWcudmlzaWJsZSA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOenu+mZpOeCueWHu+S6i+S7tlxuICAgICAgICB0aGlzLmFuc3dlckFCdG4ub2ZmQWxsKClcbiAgICAgICAgdGhpcy5hbnN3ZXJCQnRuLm9mZkFsbCgpXG4gICAgICAgIHRoaXMuYW5zd2VyQ0J0bi5vZmZBbGwoKVxuICAgICAgICB0aGlzLmFuc3dlckRCdG4ub2ZmQWxsKClcblxuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMTAwMCwgdGhpcywgdGhpcy5vbkNsb3NlTGF0ZXIsIFtyaWdodF0sIHRydWUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlTGF0ZXIocmlnaHQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZShgJHtyaWdodH1gKVxuICAgIH1cbn0iLCJpbXBvcnQgR2FtZUNvbmZpZyBmcm9tIFwiLi9HYW1lQ29uZmlnXCI7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gXCIuL0NvbnN0YW50c1wiO1xuXG4vKipcbiAqIOWcuuaZrzHog4zmma9cbiAqL1xuXG50eXBlIEFuaU5hbWUgPSBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlbjFCYWNrR3JvdW5kIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIHByaXZhdGUgYmcwOiBMYXlhLkFuaW1hdGlvbjtcbiAgICBwcml2YXRlIGJnMTogTGF5YS5TcHJpdGU7XG4gICAgcHJpdmF0ZSBjdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aGlzdGxlQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU2hvdEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDAyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgdGV4dDIwMDRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB0ZXh0MjAwOEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIHRleHQyMDEyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgcGFnZTJfc3RhcnQ6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBwYWdlM19zdGFydDogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIEJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBCYWxsTWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQm9hcmRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBjbG9ja0FuaTogTGF5YS5BbmltYXRpb25cbiAgICAvLyBwcml2YXRlIENvbXB1dGVyQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgQ3Jvd2RBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBDdXBBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBkdW1iYmVsbEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIGVsZWN0cmljbWFuQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgZXF1aXBtZW50QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgRm9vdGJhbGxBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBHb2dnbGVzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGF0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgSGVhcnRBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBsaXV4aWFuZ0FuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIE1lZGFsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgU2NvcmVib2FyZEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFNob2VzQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgU3RhZ2VBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXYWxsQW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIHByaXZhdGUgV2F0ZXJMZWZ0QW5pOiBMYXlhLkFuaW1hdGlvblxuICAgIC8vIHByaXZhdGUgV2F0ZXJSaWdodEFuaTogTGF5YS5BbmltYXRpb25cbiAgICBwcml2YXRlIFdoaXN0bGVBbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSB3aW5Bbmk6IExheWEuQW5pbWF0aW9uXG4gICAgcHJpdmF0ZSBXaW5NYW5Bbmk6IExheWEuQW5pbWF0aW9uXG5cbiAgICBwcml2YXRlIGJnMjogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnMzogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNDogTGF5YS5TcHJpdGVcbiAgICBwcml2YXRlIGJnNTogTGF5YS5TcHJpdGVcblxuXHRwcml2YXRlIExCQ0ggPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5iZzAgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJnMC5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlMCA9IHRoaXMuYmcwLmxvYWRBbmltYXRpb24oXCJhbmkvZmlyc3QuYW5pXCIpXG4gICAgICAgIHRoaXMuYmcwLnBvcygyNTYsIDQwMCkgICAgICAgIFxuICAgICAgICAvLyB0aGlzLmJnMC5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTApXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzApXG5cbiAgICAgICAgdGhpcy5iZzEgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnMS5wb3MoMCwgTGF5YS5Ccm93c2VyLmNsaWVudEhlaWdodCArMjAwKSAgICAgICAgXG4gICAgICAgIHRoaXMuYmcxLnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDEpXG4gICAgICAgIHRoaXMuYmcxLmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmcxKVxuXG4gICAgICAgIHRoaXMuYmcyID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzIucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIDk3MClcbiAgICAgICAgdGhpcy5iZzIuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlMiA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDIpXG4gICAgICAgIHRoaXMuYmcyLmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlMilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnMilcblxuICAgICAgICB0aGlzLmJnMyA9IG5ldyBMYXlhLlNwcml0ZSgpXG4gICAgICAgIHRoaXMuYmczLnBvcygwLCBDb25zdGFudHMuYmFja2dyb3VuZDFIZWlnaHQgKyBDb25zdGFudHMuYmFja2dyb3VuZDJIZWlnaHQgKyAxOTQwKVxuICAgICAgICB0aGlzLmJnMy5zaXplKENvbnN0YW50cy5zdGFnZVdpZHRoLCBDb25zdGFudHMuYmFja2dyb3VuZDNIZWlnaHQpXG4gICAgICAgIGNvbnN0IHRleHR1cmUzID0gTGF5YS5sb2FkZXIuZ2V0UmVzKENvbnN0YW50cy5iYWNrZ3JvdW5kMylcbiAgICAgICAgdGhpcy5iZzMuZ3JhcGhpY3MuZHJhd0ltYWdlKHRleHR1cmUzKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYmczKVxuXG4gICAgICAgIHRoaXMuYmc0ID0gbmV3IExheWEuU3ByaXRlKClcbiAgICAgICAgdGhpcy5iZzQucG9zKDAsIENvbnN0YW50cy5iYWNrZ3JvdW5kMUhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kMkhlaWdodCArIENvbnN0YW50cy5iYWNrZ3JvdW5kM0hlaWdodCArIDI5MTApXG4gICAgICAgIHRoaXMuYmc0LnNpemUoQ29uc3RhbnRzLnN0YWdlV2lkdGgsIENvbnN0YW50cy5iYWNrZ3JvdW5kNEhlaWdodClcbiAgICAgICAgY29uc3QgdGV4dHVyZTQgPSBMYXlhLmxvYWRlci5nZXRSZXMoQ29uc3RhbnRzLmJhY2tncm91bmQ0KVxuICAgICAgICB0aGlzLmJnNC5ncmFwaGljcy5kcmF3SW1hZ2UodGV4dHVyZTQpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5iZzQpXG5cbiAgICAgICAgdGhpcy5iZzUgPSBuZXcgTGF5YS5TcHJpdGUoKVxuICAgICAgICB0aGlzLmJnNS5wb3MoMCwgQ29uc3RhbnRzLmJhY2tncm91bmQxSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQySGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQzSGVpZ2h0ICsgQ29uc3RhbnRzLmJhY2tncm91bmQ0SGVpZ2h0ICsgMzg4MClcbiAgICAgICAgdGhpcy5iZzUuc2l6ZShDb25zdGFudHMuc3RhZ2VXaWR0aCwgQ29uc3RhbnRzLmJhY2tncm91bmQ1SGVpZ2h0KVxuICAgICAgICBjb25zdCB0ZXh0dXJlNSA9IExheWEubG9hZGVyLmdldFJlcyhDb25zdGFudHMuYmFja2dyb3VuZDUpXG4gICAgICAgIHRoaXMuYmc1LmdyYXBoaWNzLmRyYXdJbWFnZSh0ZXh0dXJlNSlcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJnNSlcblxuICAgICAgICB0aGlzLmN1cEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIC8vIFRPRE86IOiwg+aVtOWKqOeUu1xuICAgICAgICB0aGlzLmN1cEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0N1cEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmN1cEFuaSlcbiAgICAgICAgLy8gVE9ETzog6LCD5pW05L2N572uXG4gICAgICAgIHRoaXMuY3VwQW5pLnBvcyg0MDAsIDEwMjAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApXG5cblxuICAgICAgICB0aGlzLndoaXN0bGVBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndoaXN0bGVBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XaGlzdGxlQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMud2hpc3RsZUFuaSlcbiAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBvcygxMDAsIDk4MCArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMClcblxuICAgICAgICB0aGlzLlNob3RBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLlNob3RBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TaG90QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvdEFuaSlcbiAgICAgICAgdGhpcy5TaG90QW5pLnBvcygyMjAsIDE4NTAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwMkFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDJBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDAyQW5pKVxuICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnBvcygzNjAsIDI1NTAgKyBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0ICsyMDApXG5cbiAgICAgICAgdGhpcy53aW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLndpbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3dpbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLndpbkFuaSlcbiAgICAgICAgdGhpcy53aW5BbmkucG9zKDI2MCwgMzA1MCArIExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgKzIwMClcblxuXG4gICAgICAgIC8vcGFnZTJcbiAgICAgICAgdGhpcy5wYWdlMl9zdGFydCA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMucGFnZTJfc3RhcnQubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMl9zdGFydC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhZ2UyX3N0YXJ0KVxuICAgICAgICB0aGlzLnBhZ2UyX3N0YXJ0LnBvcygyNTAsIDQ4ODApXG5cbiAgICAgICAgdGhpcy5kdW1iYmVsbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuZHVtYmJlbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9kdW1iYmVsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmR1bWJiZWxsQW5pKVxuICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnBvcygzMTAsIDUwOTYpXG5cbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VxdWlwbWVudEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmVxdWlwbWVudEFuaSlcbiAgICAgICAgdGhpcy5lcXVpcG1lbnRBbmkucG9zKDM3MCwgNTQwMylcblxuICAgICAgICB0aGlzLmNsb2NrQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5jbG9ja0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2Nsb2NrQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuY2xvY2tBbmkpXG4gICAgICAgIHRoaXMuY2xvY2tBbmkucG9zKDE1MiwgNTY5NSlcblxuICAgICAgICB0aGlzLnRleHQyMDA0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDA0QW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMDRBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMDRBbmkucG9zKDMzNywgNjA0NClcblxuICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2VsZWN0cmljbWFuQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuZWxlY3RyaWNtYW5BbmkpXG4gICAgICAgIHRoaXMuZWxlY3RyaWNtYW5BbmkucG9zKDMyOCwgNjI2NSlcblxuICAgICAgICB0aGlzLmxpdXhpYW5nQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL2xpdXhpYW5nQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubGl1eGlhbmdBbmkpXG4gICAgICAgIHRoaXMubGl1eGlhbmdBbmkucG9zKDI2MywgNjc1MClcblxuXG4gICAgICAgIC8vcGFnZTNcbiAgICAgICAgdGhpcy5wYWdlM19zdGFydCA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMucGFnZTNfc3RhcnQubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM19zdGFydC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhZ2UzX3N0YXJ0KVxuICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0LnBvcygyNTAsIDgyNTApXG5cbiAgICAgICAgdGhpcy5NZWRhbEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuTWVkYWxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9NZWRhbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLk1lZGFsQW5pKVxuICAgICAgICB0aGlzLk1lZGFsQW5pLnBvcygzMzMsIDg5MDApXG5cbiAgICAgICAgdGhpcy5TdGFnZUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuU3RhZ2VBbmkubG9hZEFuaW1hdGlvbihcImFuaS9TdGFnZUFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLlN0YWdlQW5pKVxuICAgICAgICB0aGlzLlN0YWdlQW5pLnBvcygyMTksIDkyMTEpXG5cbiAgICAgICAgdGhpcy50ZXh0MjAwOEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMudGV4dDIwMDhBbmkubG9hZEFuaW1hdGlvbihcImFuaS90ZXh0MjAwOEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnRleHQyMDA4QW5pKVxuICAgICAgICB0aGlzLnRleHQyMDA4QW5pLnBvcygyMzEsIDk2OTMpXG5cbiAgICAgICAgdGhpcy5Dcm93ZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuQ3Jvd2RBbmkubG9hZEFuaW1hdGlvbihcImFuaS9Dcm93ZEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkNyb3dkQW5pKVxuICAgICAgICB0aGlzLkNyb3dkQW5pLnBvcygyNzAsIDk5ODUpXG5cblxuICAgICAgICAvL3BhZ2U0XG4gICAgICAgIHRoaXMuSGVhcnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhlYXJ0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvSGVhcnRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5IZWFydEFuaSlcbiAgICAgICAgdGhpcy5IZWFydEFuaS5wb3MoMTgxLCAxMTMzMSlcblxuICAgICAgICB0aGlzLnRleHQyMDEyQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy50ZXh0MjAxMkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3RleHQyMDEyQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMudGV4dDIwMTJBbmkpXG4gICAgICAgIHRoaXMudGV4dDIwMTJBbmkucG9zKDI1OSwgMTE3MDUpXG5cbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgLy8gdGhpcy5XYXRlclJpZ2h0QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvV2F0ZXJSaWdodEFuaS5hbmlcIilcbiAgICAgICAgLy8gdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyUmlnaHRBbmkpXG4gICAgICAgIC8vIHRoaXMuV2F0ZXJSaWdodEFuaS5wb3MoMzcwLCA5MTAwKVxuXG4gICAgICAgIHRoaXMuQm9hcmRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkJvYXJkQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Cb2FyZEFuaSlcbiAgICAgICAgdGhpcy5Cb2FyZEFuaS5wb3MoMjU3LCAxMTkyMilcblxuICAgICAgICB0aGlzLldhbGxBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhbGxBbmkubG9hZEFuaW1hdGlvbihcImFuaS9XYWxsQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuV2FsbEFuaSlcbiAgICAgICAgdGhpcy5XYWxsQW5pLnBvcygyNzUsIDEyMTkwKVxuXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuR29nZ2xlc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0dvZ2dsZXNBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5Hb2dnbGVzQW5pKVxuICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucG9zKDM1NSwgMTI2MzQpXG5cbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dhdGVyTGVmdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldhdGVyTGVmdEFuaSlcbiAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucG9zKDE2MywgMTMwMDcpXG5cbiAgICAgICAgdGhpcy5XaW5NYW5BbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLldpbk1hbkFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1dpbk1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLldpbk1hbkFuaSlcbiAgICAgICAgdGhpcy5XaW5NYW5BbmkucG9zKDI1NCwgMTM0ODApXG5cblxuICAgICAgICAvL3BhZ2U1XG4gICAgICAgIC8vIHRoaXMuU2NvcmVib2FyZEFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIC8vIHRoaXMuU2NvcmVib2FyZEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Njb3JlYm9hcmRBbmkuYW5pXCIpXG4gICAgICAgIC8vIHRoaXMuYWRkQ2hpbGQodGhpcy5TY29yZWJvYXJkQW5pKVxuICAgICAgICAvLyB0aGlzLlNjb3JlYm9hcmRBbmkucG9zKDI1NywgMTQ5NjEpXG5cbiAgICAgICAgdGhpcy5CYWxsQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxBbmkpXG4gICAgICAgIHRoaXMuQmFsbEFuaS5wb3MoMTI3LCAxNDk2MSlcblxuICAgICAgICB0aGlzLlNob2VzQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5TaG9lc0FuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL1Nob2VzQW5pLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuU2hvZXNBbmkpXG4gICAgICAgIHRoaXMuU2hvZXNBbmkucG9zKDMzOCwgMTU2NDkpXG5cbiAgICAgICAgdGhpcy5IYXRBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLkhhdEFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL0hhdEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkhhdEFuaSlcbiAgICAgICAgdGhpcy5IYXRBbmkucG9zKDE4NSwgMTU5MjMpXG5cbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5CYWxsTWFuQW5pLmxvYWRBbmltYXRpb24oXCJhbmkvQmFsbE1hbkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLkJhbGxNYW5BbmkpXG4gICAgICAgIHRoaXMuQmFsbE1hbkFuaS5wb3MoMjY1LCAxNjQ2NylcbiAgICB9XG4gICAgbW92ZUFuaShhbmlOYW1lOiBBbmlOYW1lLHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJmaXJzdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuYmcwLmdvdG9BbmRTdG9wKHkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BBbmkoYW5pTmFtZTogQW5pTmFtZSk6IHZvaWQge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuY3VwQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvdEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInBhZ2UyX3N0YXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlMl9zdGFydC5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcInBhZ2UyX3N0YXJ0MVwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGFnZTJfc3RhcnQuZ290b0FuZFN0b3AoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlM19zdGFydFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucGFnZTNfc3RhcnQuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlM19zdGFydDFcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UzX3N0YXJ0LmdvdG9BbmRTdG9wKDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDRBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxNYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxNYW5BbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYm9hcmRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJvYXJkQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Db21wdXRlckFuaS5nb3RvQW5kU3RvcCgzMCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3Jvd2RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkNyb3dkQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkMVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkuZ290b0FuZFN0b3AoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLmdvdG9BbmRTdG9wKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuR29nZ2xlc0FuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGF0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IYXRBbmkuZ290b0FuZFN0b3AoMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmcxXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5nb3RvQW5kU3RvcCgxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZWRhbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTWVkYWxBbmkuZ290b0FuZFN0b3AoMTApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLlNjb3JlYm9hcmRBbmkuZ290b0FuZFN0b3AoMjApO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG9lc0FuaS5nb3RvQW5kU3RvcCgyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlN0YWdlQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYWxsQW5pLmdvdG9BbmRTdG9wKDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhdGVyTGVmdEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuV2F0ZXJSaWdodEFuaS5nb3RvQW5kU3RvcCgxMCk7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2hpc3RsZUFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLndpbkFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS5nb3RvQW5kU3RvcCgwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW4xXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5NYW5BbmkuZ290b0FuZFN0b3AoMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheUFuaShhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImZpcnN0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5iZzAucGxheSgxODAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy53aGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob3RBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDA0QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwOEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMTJBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbEFuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsTWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5CYWxsTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Cb2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjbG9ja1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwiY29tcHV0ZXJcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLkNvbXB1dGVyQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Dcm93ZEFuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkdW1iYmVsbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZHVtYmJlbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZWxlY3RyaWNtYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZWN0cmljbWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZXF1aXBtZW50QW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdvZ2dsZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkdvZ2dsZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGF0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IYXRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkhlYXJ0QW5pLnBsYXkoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxpdXhpYW5nXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5saXV4aWFuZ0FuaS5wbGF5KDEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZWRhbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuTWVkYWxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuU2NvcmVib2FyZEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzaG9lc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMuU2hvZXNBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlN0YWdlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLldhbGxBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2F0ZXJMZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYXRlckxlZnRBbmkucGxheSgwLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBjYXNlIFwid2F0ZXJSaWdodFwiOlxuICAgICAgICAgICAgLy8gICAgIHRoaXMuV2F0ZXJSaWdodEFuaS5wbGF5KDAsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XaGlzdGxlQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpblwiOlxuICAgICAgICAgICAgICAgIHRoaXMud2luQW5pLnBsYXkoMSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpbk1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2luTWFuQW5pLnBsYXkoMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzQW5pUGxheWluZyhhbmlOYW1lOiBBbmlOYW1lKSB7XG4gICAgICAgIHN3aXRjaCAoYW5pTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImN1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoaXN0bGVBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDAyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwNFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAxMlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDEyQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJiYWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQmFsbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImJvYXJkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNsb2NrXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvY2tBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImNyb3dkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ3Jvd2RBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImR1bWJiZWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZHVtYmJlbGxBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImVxdWlwbWVudFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVxdWlwbWVudEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiZ29nZ2xlc1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkdvZ2dsZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwiaGVhcnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5IZWFydEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibGl1eGlhbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5saXV4aWFuZ0FuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICAvLyBjYXNlIFwic2NvcmVib2FyZFwiOlxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLlNjb3JlYm9hcmRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInNob2VzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU2hvZXNBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgY2FzZSBcIndhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYWxsQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3YXRlckxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XYXRlckxlZnRBbmkuaXNQbGF5aW5nO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2hpc3RsZUFuaS5pc1BsYXlpbmc7XG4gICAgICAgICAgICBjYXNlIFwid2luXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2luQW5pLmlzUGxheWluZztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkuaXNQbGF5aW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEFuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSwgdmlzaWJsZTogYm9vbGVhbikge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmN1cEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcIndoaXN0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLndoaXN0bGVBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJzaG90XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TaG90QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDAyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0MjAwNEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudGV4dDIwMDhBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRleHQyMDEyQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGxBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQmFsbE1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsb2NrQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5Db21wdXRlckFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuQ3Jvd2RBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmR1bWJiZWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVjdHJpY21hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWlwbWVudEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5Hb2dnbGVzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuSGF0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5IZWFydEFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMubGl1eGlhbmdBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICB0aGlzLk1lZGFsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLlNjb3JlYm9hcmRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLlNob2VzQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5TdGFnZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5XYWxsQW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2F0ZXJMZWZ0QW5pLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICB0aGlzLldhdGVyUmlnaHRBbmkudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuV2hpc3RsZUFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLndpbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLldpbk1hbkFuaS52aXNpYmxlID0gdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FuaVZpc2libGUoYW5pTmFtZTogQW5pTmFtZSkge1xuICAgICAgICBzd2l0Y2ggKGFuaU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjdXBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXBBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aGlzdGxlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hpc3RsZUFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInNob3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG90QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMDJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAwMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInRleHQyMDA0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGV4dDIwMDRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0MjAwOFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHQyMDA4QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwidGV4dDIwMTJcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50ZXh0MjAxMkFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImJhbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5CYWxsQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiYmFsbE1hblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJhbGxNYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJib2FyZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiY2xvY2tcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9ja0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcImNvbXB1dGVyXCI6XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMuQ29tcHV0ZXJBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJjcm93ZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkNyb3dkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwiZHVtYmJlbGxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kdW1iYmVsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImVsZWN0cmljbWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlY3RyaWNtYW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJlcXVpcG1lbnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcXVpcG1lbnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJnb2dnbGVzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuR29nZ2xlc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhhdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLkhhdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcImhlYXJ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuSGVhcnRBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJsaXV4aWFuZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxpdXhpYW5nQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwibWVkYWxcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5NZWRhbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcInNjb3JlYm9hcmRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5TY29yZWJvYXJkQW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwic2hvZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5TaG9lc0FuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcInN0YWdlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuU3RhZ2VBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3YWxsXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuV2FsbEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgY2FzZSBcIndhdGVyTGVmdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldhdGVyTGVmdEFuaS52aXNpYmxlO1xuICAgICAgICAgICAgLy8gY2FzZSBcIndhdGVyUmlnaHRcIjpcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5XYXRlclJpZ2h0QW5pLnZpc2libGU7XG4gICAgICAgICAgICBjYXNlIFwid2hpc3RsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLldoaXN0bGVBbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aW5BbmkudmlzaWJsZTtcbiAgICAgICAgICAgIGNhc2UgXCJ3aW5NYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5XaW5NYW5BbmkudmlzaWJsZTtcblxuXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgdWkgfSBmcm9tIFwiLi91aS9sYXlhTWF4VUlcIjtcblxuZXhwb3J0IHR5cGUgVGlwVHlwZSA9IFwic2Nyb2xsXCIgfCBcImNsaWNrX3doaXRlXCIgfCBcImNsaWNrX2JsYWNrXCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbERpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TY3JvbGxEaWFsb2dVSSB7XG4gICAgcHJpdmF0ZSB0aXBUeXBlOiBUaXBUeXBlXG4gICAgY29uc3RydWN0b3IodGlwVHlwZTogVGlwVHlwZSkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMudGlwVHlwZSA9IHRpcFR5cGVcbiAgICAgICAgdGhpcy5hdXRvRGVzdHJveUF0Q2xvc2VkID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUG9wdXBDZW50ZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLnBvcygwLCAwKVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uT3BlbmVkKCkge1xuICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYWxsTGF0ZXIoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLnRpcFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzY3JvbGxcIjoge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50aXBJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGlwSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHQgXG4gICAgICAgICAgICAgICAgdGhpcy50aXBJbWFnZS52aXNpYmxlICA9IHRydWVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja193aGl0ZVwiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLndoaXRlQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnkgPSBMYXlhLkJyb3dzZXIuY2xpZW50SGVpZ2h0IFxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGVDbGlja0ltYWdlLnZpc2libGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJjbGlja19ibGFja1wiOiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJsYWNrQ2xpY2tJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBMYXlhLnRpbWVyLm9uY2UoMjAwLCB0aGlzLCB0aGlzLm9uQ2FsbExhdGVyKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFja0NsaWNrSW1hZ2UueSA9IExheWEuQnJvd3Nlci5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWNrQ2xpY2tJbWFnZS52aXNpYmxlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub24oTGF5YS5FdmVudC5NT1VTRV9ET1dOLCB0aGlzLCB0aGlzLm9uQ2xpY2spXG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH1cbn0iLCJpbXBvcnQgeyB1aSB9IGZyb20gXCIuL3VpL2xheWFNYXhVSVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFrZURpYWxvZyBleHRlbmRzIHVpLmRpYWxvZy5TaGFrZURpYWxvZ1VJIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmF1dG9EZXN0cm95QXRDbG9zZWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaXNQb3B1cENlbnRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMucG9zKDAsIDApXG4gICAgICBcbiAgICAgICAgXG4gICAgfSAgICBcblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNrZXRiYWxsIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvYmFza2V0YmFsbC5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTFlMnMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMXRvMkFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTJlM3MgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlMnRvM0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGFnZTNlNHMgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM3RvNEFuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZTNfUnVubWFuIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xyXG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXHJcbiAgICBwcml2YXRlIGJvZHlBbmk6IExheWEuQW5pbWF0aW9uXHJcbiAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcclxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9wYWdlM19ydW5tYW4uYW5pXCIpXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotbDliqhcclxuICAgICAqL1xyXG4gICAgZ29QYXRoKHk6bnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHBhZ2U0ZTVzIGV4dGVuZHMgTGF5YS5TcHJpdGUge1xuICAgIC8vIOWumuS5ieeQg+S4u+S9k1xuICAgIHByaXZhdGUgYm9keUFuaTogTGF5YS5BbmltYXRpb25cbiAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ib2R5QW5pID0gbmV3IExheWEuQW5pbWF0aW9uKClcbiAgICAgICAgdGhpcy5ib2R5QW5pLmxvYWRBbmltYXRpb24oXCJhbmkvcGFnZTR0bzVBbmkuYW5pXCIpXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5ib2R5QW5pKVxuICAgICAgICBcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotbDliqhcbiAgICAgKi9cbiAgICBnb1BhdGgoeTpudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLmdvdG9BbmRTdG9wKHkpXG4gICAgfVxuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG4gICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSBmYWxzZVxuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHJ1bm5pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYm9keUFuaSA9IG5ldyBMYXlhLkFuaW1hdGlvbigpXG4gICAgICAgIHRoaXMuYm9keUFuaS5sb2FkQW5pbWF0aW9uKFwiYW5pL3BhZ2UyUnVuLmFuaVwiKVxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuYm9keUFuaSlcbiAgICB9XG4gICAgLyoqXG4gICAgICog6LWw5YqoXG4gICAgICovXG4gICAgZ29QYXRoKHk6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ib2R5QW5pLnZpc2libGUgPSB0cnVlXG5cbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dpbW1pbmcgZXh0ZW5kcyBMYXlhLlNwcml0ZSB7XG4gICAgLy8g5a6a5LmJ55CD5Li75L2TXG4gICAgcHJpdmF0ZSBib2R5QW5pOiBMYXlhLkFuaW1hdGlvblxuICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgfVxuXG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmJvZHlBbmkgPSBuZXcgTGF5YS5BbmltYXRpb24oKVxuICAgICAgICB0aGlzLmJvZHlBbmkubG9hZEFuaW1hdGlvbihcImFuaS9zd2ltbWluZ0FuaS5hbmlcIilcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLmJvZHlBbmkpXG4gICAgICAgIFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1sOWKqFxuICAgICAqL1xuICAgIGdvUGF0aCh5Om51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkuZ290b0FuZFN0b3AoeSlcbiAgICB9XG5cbiAgICBzaG93KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IHRydWVcbiAgICAgICBcbiAgICB9XG5cbiAgICBoaWRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJvZHlBbmkudmlzaWJsZSA9IGZhbHNlXG4gICAgfVxuXG59IiwiLyoqVGhpcyBjbGFzcyBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBMYXlhQWlySURFLCBwbGVhc2UgZG8gbm90IG1ha2UgYW55IG1vZGlmaWNhdGlvbnMuICovXG5pbXBvcnQgVmlldz1MYXlhLlZpZXc7XHJcbmltcG9ydCBEaWFsb2c9TGF5YS5EaWFsb2c7XHJcbmltcG9ydCBTY2VuZT1MYXlhLlNjZW5lO1xuZXhwb3J0IG1vZHVsZSB1aS5kaWFsb2cge1xyXG4gICAgZXhwb3J0IGNsYXNzIExvYWRpbmdEaWFsb2dVSSBleHRlbmRzIERpYWxvZyB7XHJcblx0XHRwdWJsaWMgbG9hZEJ0bjpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgcHJvZ3Jlc3M6TGF5YS5MYWJlbDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9Mb2FkaW5nRGlhbG9nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBRdWVzdGlvbkRpYWxvZ1VJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyByZXN1bHRBSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRDSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRCSW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyByZXN1bHRESW1nOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBxdWVzdGlvbkxhYmVsOkxheWEuTGFiZWw7XG5cdFx0cHVibGljIGFuc3dlckFCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckJCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckNCdG46TGF5YS5CdXR0b247XG5cdFx0cHVibGljIGFuc3dlckRCdG46TGF5YS5CdXR0b247XG4gICAgICAgIGNvbnN0cnVjdG9yKCl7IHN1cGVyKCl9XHJcbiAgICAgICAgY3JlYXRlQ2hpbGRyZW4oKTp2b2lkIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJkaWFsb2cvUXVlc3Rpb25EaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFJlc3VsdERpYWxvZ1VJIGV4dGVuZHMgRGlhbG9nIHtcclxuXHRcdHB1YmxpYyBiZ0ltYWdlVmlldzpMYXlhLlNwcml0ZTtcblx0XHRwdWJsaWMgc2NvcmVJbWFnZVZpZXc6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIG9uY2VNb3JlQnV0dG9uOkxheWEuQnV0dG9uO1xuXHRcdHB1YmxpYyBzaGFyZUJ1dHRvbjpMYXlhLkJ1dHRvbjtcbiAgICAgICAgcHVibGljIHN0YXRpYyAgdWlWaWV3OmFueSA9e1widHlwZVwiOlwiRGlhbG9nXCIsXCJwcm9wc1wiOntcIndpZHRoXCI6NTEyLFwiaGVpZ2h0XCI6ODA4fSxcImNvbXBJZFwiOjIsXCJjaGlsZFwiOlt7XCJ0eXBlXCI6XCJTcHJpdGVcIixcInByb3BzXCI6e1wieVwiOjAsXCJ4XCI6MCxcInZpc2libGVcIjpmYWxzZSxcInZhclwiOlwiYmdJbWFnZVZpZXdcIixcInRleHR1cmVcIjpcInZpZXcvc2NvcmVfMS5qcGdcIn0sXCJjb21wSWRcIjozfSx7XCJ0eXBlXCI6XCJTcHJpdGVcIixcInByb3BzXCI6e1wieVwiOjMyNSxcInhcIjo0MDAsXCJ2aXNpYmxlXCI6ZmFsc2UsXCJ2YXJcIjpcInNjb3JlSW1hZ2VWaWV3XCIsXCJ0ZXh0dXJlXCI6XCJ2aWV3L251bV8xMC5wbmdcIn0sXCJjb21wSWRcIjo0fSx7XCJ0eXBlXCI6XCJCdXR0b25cIixcInByb3BzXCI6e1wieVwiOjYxOCxcInhcIjo4MCxcIndpZHRoXCI6MTUwLFwidmFyXCI6XCJvbmNlTW9yZUJ1dHRvblwiLFwiaGVpZ2h0XCI6NTB9LFwiY29tcElkXCI6NX0se1widHlwZVwiOlwiQnV0dG9uXCIsXCJwcm9wc1wiOntcInlcIjo2MTgsXCJ4XCI6MjkwLFwid2lkdGhcIjoxNTAsXCJ2YXJcIjpcInNoYXJlQnV0dG9uXCIsXCJoZWlnaHRcIjo1MH0sXCJjb21wSWRcIjo2fV0sXCJsb2FkTGlzdFwiOltcInZpZXcvc2NvcmVfMS5qcGdcIixcInZpZXcvbnVtXzEwLnBuZ1wiXSxcImxvYWRMaXN0M0RcIjpbXX07XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVZpZXcoUmVzdWx0RGlhbG9nVUkudWlWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2Nyb2xsRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIHRpcEltYWdlOkxheWEuU3ByaXRlO1xuXHRcdHB1YmxpYyBibGFja0NsaWNrSW1hZ2U6TGF5YS5TcHJpdGU7XG5cdFx0cHVibGljIHdoaXRlQ2xpY2tJbWFnZTpMYXlhLlNwcml0ZTtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TY3JvbGxEaWFsb2dcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFNoYWtlRGlhbG9nVUkgZXh0ZW5kcyBEaWFsb2cge1xyXG5cdFx0cHVibGljIGJveDpMYXlhLkJveDtcbiAgICAgICAgY29uc3RydWN0b3IoKXsgc3VwZXIoKX1cclxuICAgICAgICBjcmVhdGVDaGlsZHJlbigpOnZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVDaGlsZHJlbigpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcImRpYWxvZy9TaGFrZURpYWxvZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cciJdfQ==
