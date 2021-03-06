/*!
 * hu addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013.01.17, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
var exporter = function(LanguageIdentifier) {
var ngrams = {
"_a_":38146,
"_sz":17915,
"_az":14292,
"\u00e9s_":13996,
"sze":12590,
"az_":12544,
"ek_":11509,
"en_":10831,
"_\u00e9s":9755,
"_me":9709,
"t\u00e1s":9013,
"gy_":8327,
"an_":7873,
"meg":7821,
"ak_":7519,
"egy":7511,
"s\u00e9g":7504,
"ele":7499,
"_te":7457,
"_el":7419,
"zer":7386,
"_pr":6800,
"zet":6690,
"pro":6517,
"tt_":6485,
"_eg":6437,
"et_":6393,
"_fe":6318,
"_k\u00f6":6220,
"ok_":6199,
"is_":5969,
"_in":5910,
"ere":5855,
"sz\u00e1":5791,
"int":5673,
"szt":5606,
"gra":5568,
"ram":5558,
"t\u00e9s":5512,
"nak":5498,
"rog":5418,
"\u00e1s_":5400,
"ogr":5386,
"_ha":5290,
"ter":5278,
"fel":5226,
"ban":5218,
"eze":5182,
"_be":5135,
"at\u00e1":5040,
"\u00e9se":5033,
"\u00e9ny":4982,
"ben":4981,
"_mi":4955,
"let":4914,
"es_":4903,
"ete":4898,
"_fo":4856,
"_ne":4807,
"ala":4759,
"al_":4746,
"_ta":4741,
"tel":4737,
"\u00e9sz":4715,
"_ho":4684,
"nt_":4649,
"min":4643,
"z\u00e9s":4620,
"_va":4619,
"nek":4548,
"hat":4547,
"el_":4528,
"at_":4502,
"si_":4501,
"am_":4499,
"k\u00f6z":4491,
"vez":4449,
"nye":4419,
"ely":4413,
"ja_":4355,
"ra_":4345,
"ett":4342,
"_ki":4341,
"_le":4323,
"ont":4232,
"tal":4212,
"_al":4195,
"ind":4188,
"s\u00e1g":4187,
"sza":4168,
"ti_":4167,
"ott":4075,
"\u00e1lt":4068,
"ai_":4063,
"\u00e1ll":3878,
"szo":3873,
"\u00edt\u00e1":3848,
"_is":3831,
"het":3819,
"ell":3816,
"gye":3800,
"_ke":3747,
"tat":3696,
"end":3657,
"ogy":3646,
"z\u00e1m":3645,
"agy":3629,
"esz":3604,
"len":3589,
"_k\u00e9":3572,
"os_":3561,
"pon":3533,
"for":3479,
"se_":3459,
"hog":3391,
"\u00e1s\u00e1":3389,
"\u00e9ge":3354,
"ssz":3335,
"_\u00e9r":3331,
"ni_":3321,
"\u00e1ny":3313,
"eke":3310,
"ci\u00f3":3294,
"s\u00edt":3278,
"re_":3265,
"_re":3264,
"nem":3256,
"erv":3250,
"unk":3247,
"sok":3239,
"lis":3225,
"val":3219,
"lat":3212,
"mel":3188,
"ik_":3168,
"ent":3163,
"\u00e9rt":3161,
"em_":3153,
"jel":3131,
"kez":3129,
"kat":3099,
"lta":3091,
"ren":3049,
"t\u00e1r":3049,
"z\u00e1s":3028,
"d\u00edt":3024,
"ato":3016,
"tet":3003,
"\u00e1so":3000,
"r\u00e9s":2988,
"_\u00e1l":2980,
"k\u00e9p":2950,
"tan":2902,
"d\u00e9s":2892,
"_ko":2885,
"_t\u00e1":2874,
"rve":2861,
"_po":2841,
"kor":2813,
"t\u00e9k":2811,
"on_":2799,
"_mu":2757,
"art":2748,
"\u00e1t_":2746,
"ma_":2740,
"lap":2731,
"t\u00f3_":2717,
"at\u00f3":2707,
"mun":2699,
"_cs":2697,
"\u00e1li":2696,
"lla":2688,
"asz":2676,
"et\u00e9":2657,
"_ma":2655,
"st_":2648,
"_r\u00e9":2641,
"\u00e1sa":2625,
"lt_":2597,
"nde":2582,
"lye":2581,
"gya":2571,
"_id":2563,
"nt\u00e9":2538,
"koz":2535,
"\u00f6ss":2534,
"\u00e9t_":2522,
"_je":2517,
"_am":2516,
"bb_":2512,
"et\u0151":2512,
"cso":2500,
"g\u00e1l":2496,
"l\u00e1s":2495,
"v\u00e1l":2479,
"\u00e1ci":2465,
"tar":2453,
"ez\u00e9":2433,
"sa_":2429,
"tek":2418,
"_v\u00e1":2416,
"\u00e9s\u00e9":2416,
"kel":2409,
"\u00edt\u00e9":2404,
"_bi":2399,
"_ez":2394,
"eve":2390,
"alm":2385,
"zat":2382,
"alk":2381,
"er_":2359,
"eg_":2342,
"nd\u00ed":2317,
"ame":2312,
"al\u00e1":2311,
"leg":2304,
"hel":2302,
"\u00e1k_":2302,
"lle":2300,
"nte":2299,
"ket":2293,
"oly":2293,
"_\u00f6s":2280,
"olg":2257,
"rt\u00e9":2245,
"hoz":2242,
"\u00e1g_":2238,
"\u00e1si":2217,
"zak":2211,
"\u00e9si":2183,
"oz\u00e1":2173,
"tja":2171,
"m\u00e9n":2159,
"n\u00e1l":2149,
"biz":2145,
"ny_":2144,
"t\u0151_":2143,
"del":2141,
"ese":2134,
"eti":2129,
"vet":2125,
"\u00f3l_":2122,
"fog":2119,
"l\u00f3_":2119,
"\u00f6ve":2116,
"orm":2103,
"_ka":2102,
"\u00e1n_":2097,
"_gy":2078,
"el\u0151":2072,
"ten":2066,
"\u00e1bb":2065,
"_ve":2064,
"\u00e9g_":2063,
"_eu":2061,
"k\u00fcl":2057,
"ada":2041,
"id\u0151":2031,
"us_":2031,
"_m\u00e1":2023,
"el\u00e9":2001,
"tos":1997,
"men":1995,
"ot_":1974,
"sz\u00ed":1957,
"yek":1953,
"lal":1929,
"l\u00e9s":1929,
"m\u00e1n":1926,
"_he":1922,
"tok":1915,
"lam":1914,
"\u00e1na":1913,
"_ny":1910,
"ez_":1906,
"nev":1892,
"kon":1884,
"ysz":1883,
"_es":1882,
"_to":1874,
"oz\u00f3":1871,
"\u00e1ra":1871,
"elm":1857,
"dsz":1852,
"les":1852,
"gi_":1850,
"tik":1846,
"lem":1844,
"lya":1840,
"_ad":1838,
"lma":1838,
"_vi":1836,
"csa":1830,
"d\u00e1s":1827,
"_c\u00e9":1809,
"mi_":1808,
"_de":1805,
"ve_":1803,
"_t\u00f6":1775,
"rt_":1771,
"\u00e9te":1766,
"szi":1759,
"yes":1750,
"oga":1745,
"sek":1740,
"vel":1734,
"z\u0151_":1728,
"ors":1727,
"ati":1720,
"nka":1719,
"vag":1715,
"i\u00e1l":1711,
"ber":1705,
"\u00e1ma":1695,
"mer":1694,
"sen":1692,
"z\u00f3_":1689,
"ker":1685,
"ll_":1681,
"fej":1679,
"it_":1678,
"ehe":1676,
"emb":1673,
"kal":1667,
"\u00e9ly":1666,
"rm\u00e1":1659,
"zot":1656,
"c\u00e9l":1655,
"ov\u00e1":1654,
"\u00e9pz":1647,
"tot":1644,
"rsz":1643,
"tve":1642,
"tes":1640,
"zol":1640,
"gat":1639,
"ci\u00e1":1638,
"mbe":1637,
"or_":1637,
"t\u00e9r":1636,
"rek":1629,
"amo":1619,
"nk_":1617,
"has":1614,
"\u00e9k_":1601,
"erm":1599,
"enn":1598,
"rta":1598,
"_na":1597,
"lko":1594,
"\u00e9le":1583,
"isz":1582,
"k\u00f6r":1575,
"\u00f6z\u00f6":1573,
"_se":1567,
"\u00e9ke":1564,
"\u00e1ro":1557,
"_ak":1554,
"v\u00e9n":1554,
"oka":1552,
"ata":1550,
"eur":1550,
"_e_":1546,
"_t\u00e9":1545,
"ts\u00e9":1545,
"\u00e1ba":1543,
"al\u00f3":1537,
"_en":1524,
"ami":1524,
"ed\u00e9":1523,
"r\u00fcl":1521,
"sz\u00fc":1520,
"ly_":1518,
"elt":1517,
"nyo":1517,
"lys":1511,
"dat":1496,
"fon":1496,
"tov":1496,
"_do":1495,
"v\u00e1b":1492,
"_an":1488,
"nyi":1488,
"\u00fcl_":1487,
"\u00e9be":1486,
"t\u00e9n":1481,
"eri":1480,
"yez":1473,
"\u00edt\u00f3":1464,
"ez\u0151":1459,
"ama":1456,
"fol":1453,
"ort":1452,
"rin":1447,
"yel":1447,
"leh":1441,
"\u00e1ly":1441,
"ege":1439,
"m\u00e1s":1439,
"zon":1439,
"maz":1438,
"_v\u00e9":1436,
"mag":1434,
"lg\u00e1":1433,
"azo":1430,
"m\u00e1r":1430,
"por":1424,
"\u00f3s_":1420,
"_so":1417,
"\u00f3k_":1416,
"pz\u00e9":1412,
"ges":1408,
"ene":1407,
"ond":1403,
"elv":1402,
"efo":1397,
"r\u00e1n":1394,
"tor":1391,
"ika":1387,
"r\u00e1s":1384,
"tud":1384,
"ons":1383,
"yan":1382,
"i\u00f3_":1379,
"sz\u00e9":1379,
"kap":1378,
"\u00e9re":1369,
"g\u00e9n":1368,
"yen":1365,
"szn":1362,
"z\u00e1g":1362,
"zem":1360,
"gaz":1359,
"_k\u00fc":1358,
"\u00e9ne":1349,
"_t_":1348,
"ta_":1343,
"ony":1341,
"sme":1337,
"zt_":1331,
"ndo":1330,
"lak":1329,
"\u00fcle":1323,
"mat":1321,
"ola":1321,
"\u00e1r_":1321,
"_er":1317,
"ism":1313,
"_ol":1307,
"okt":1305,
"_mo":1304,
"er\u00fc":1294,
"\u00e9n_":1291,
"_ig":1289,
"i\u00f3s":1287,
"oz_":1285,
"\u00fcl\u00f6":1282,
"uta":1281,
"\u00e1mo":1279,
"ur\u00f3":1278,
"oci":1277,
"dol":1273,
"om\u00e1":1273,
"sol":1273,
"gon":1268,
"ejl":1265,
"pes":1264,
"yi_":1264,
"ako":1263,
"_tu":1262,
"s\u00e1n":1257,
"k\u00e9s":1246,
"ret":1245,
"l\u00f6n":1241,
"\u00e1la":1238,
"elk":1237,
"uk_":1237,
"l\u00e1t":1234,
"zta":1233,
"nfo":1232,
"zoc":1228,
"\u00e9gi":1223,
"izo":1220,
"eny":1214,
"zeg":1213,
"pol":1210,
"tts":1210,
"ill":1208,
"opo":1207,
"_l\u00e9":1202,
"sop":1202,
"ia_":1199,
"zel":1199,
"mok":1195,
"te_":1193,
"\u00e9ve":1191,
"res":1189,
"ss\u00e9":1189,
"nsz":1188,
"\u00e1st":1188,
"\u00e9rd":1180,
"eme":1178,
"emz":1166,
"ol\u00f3":1160,
"seg":1159,
"\u00e1rs":1159,
"z\u00edn":1157,
"ess":1154,
"g\u00edt":1154,
"gal":1146,
"lek":1145,
"ken":1144,
"zte":1136,
"els":1133,
"em\u00e9":1133,
"ekt":1131,
"_\u00e1t":1129,
"\u00e9ko":1129,
"\u00f6tt":1128,
"elj":1127,
"lha":1122,
"zab":1121,
"gek":1120,
"\u00e1go":1119,
"nds":1117,
"inf":1116,
"tte":1115,
"m\u00f3d":1113,
"lcs":1112,
"r\u00f3p":1112,
"ert":1111,
"zen":1107,
"est":1103,
"zt\u00e9":1103,
"nik":1102,
"zn\u00e1":1101,
"sz_":1099,
"d\u0151_":1098,
"ki_":1098,
"_il":1097,
"sor":1092,
"tag":1089,
"\u00e1l\u00f3":1088,
"dal":1086,
"ntj":1086,
"ord":1084,
"_m\u00e9":1083,
"rv\u00e9":1081,
"l\u00edt":1078,
"ona":1075,
"\u00fck_":1075,
"_jo":1074,
"_s_":1074,
"ked":1074,
"ts\u00e1":1071,
"ne_":1070,
"n\u0151s":1067,
"zto":1067,
"in\u0151":1065,
"v\u00e1n":1062,
"eg\u00ed":1058,
"z\u00fck":1056,
"_st":1054,
"t\u00e9z":1050,
"kol":1049,
"t\u00e1l":1045,
"vis":1044,
"set":1042,
"v\u00e9g":1033,
"_ok":1032,
"li_":1031,
"lit":1031,
"den":1028,
"os\u00ed":1028,
"\u0151l_":1028,
"_\u00faj":1027,
"ks\u00e9":1027,
"\u00f3pa":1027,
"eng":1026,
"nag":1021,
"nys":1016,
"uni":1016,
"_m\u00f3":1015,
"ha_":1014,
"m\u00e1c":1012,
"and":1010,
"kai":1010,
"the":1007,
"bel":1006,
"ebb":1006,
"dok":1005,
"nya":1005,
"ion":1003,
"\u00fcgy":1003,
"nos":1002,
"hez":1001,
"k\u00f6v":1001,
"lka":1001,
"roz":999,
"eg\u00e9":997,
"zhe":997,
"jog":993,
"jle":991,
"j\u00e1t":990,
"_hi":988,
"k\u00e9r":988,
"zi_":988,
"j\u00e1n":985,
"lgo":984,
"vev":984,
"ei_":979,
"ver":979,
"nge":976,
"\u00e9g\u00e9":974,
"m\u00e9l":973,
"egf":972,
"mot":971,
"ik\u00e1":967,
"\u00e9m\u00e1":965,
"_fi":964,
"ri_":964,
"pcs":963,
"_go":961,
"_p\u00e9":961,
"lel":961,
"etk":960,
"gla":960,
"sak":954,
"ogl":953,
"zek":953,
"zik":949,
"ezd":948,
"ana":946,
"apc":946,
"nti":946,
"at\u00e9":943,
"yam":943,
"ize":941,
"bef":940,
"rsa":934,
"v\u0151_":934,
"yak":933,
"ev\u0151":932,
"lef":928,
"ran":927,
"ys\u00e9":926,
"izt":925,
"s\u00e9r":924,
"ani":922,
"ged":922,
"toz":922,
"pai":920,
"kke":914,
"k\u00e9n":914,
"lmi":911,
"abb":909,
"r\u00f3l":906,
"sal":906,
"\u00e9rv":906,
"ft_":905,
"van":905,
"be_":904,
"net":903,
"_vo":902,
"fiz":902,
"get":902,
"\u00e9pe":902,
"_n\u00e9":901,
"sz\u00f6":901,
"gyi":899,
"egn":898,
"ezh":896,
"doz":893,
"mai":893,
"oli":892,
"von":891,
"_pa":890,
"nto":889,
"oss":889,
"alo":887,
"\u0151s\u00e9":887,
"\u00fcks":885,
"tha":883,
"tle":882,
"ztv":882,
"gok":881,
"ori":881,
"c\u00edm":880,
"osz":880,
"t\u00e1m":879,
"l\u0151_":876,
"\u00e1za":876,
"vek":873,
"iku":871,
"t\u00f6r":871,
"_ba":868,
"kus":867,
"apo":865,
"old":865,
"l\u00e9t":864,
"_\u00e9v":860,
"_pe":859,
"rez":859,
"lom":858,
"rte":858,
"rde":855,
"par":854,
"_c\u00ed":848,
"tra":848,
"elh":847,
"bk\u00e9":846,
"_h\u00e1":844,
"d\u00e9l":844,
"iti":843,
"yos":842,
"ev\u00e9":841,
"rme":841,
"me_":840,
"ig_":839,
"kis":839,
"akk":836,
"ll\u00e1":832,
"_k_":831,
"es\u00ed":831,
"mze":831,
"t\u00e9t":831,
"\u00e9nt":831,
"\u00e1gi":830,
"it\u00e1":829,
"lad":828,
"m\u00e1j":823,
"om_":823,
"kto":821,
"tam":821,
"bbk":820,
"tke":819,
"ers":818,
"an\u00e1":817,
"sko":817,
"ult":817,
"goz":815,
"\u00e9st":814,
"k\u00f6d":812,
"oza":809,
"att":808,
"dek":803,
"ine":802,
"nci":802,
"zok":802,
"nd\u0151":801,
"azd":800,
"\u00e1cs":800,
"j\u00e1r":799,
"gne":797,
"ech":796,
"t\u00e9m":796,
"efi":795,
"yet":795,
"de_":794,
"bbi":793,
"nny":793,
"s\u00e1t":793,
"ozt":789,
"\u00f6bb":789,
"\u0151s\u00ed":789,
"j\u00e1k":788,
"olt":788,
"z\u00edt":788,
"las":786,
"t\u00f6b":786,
"anu":784,
"k\u00e9t":784,
"_di":783,
"as\u00e1":783,
"ig\u00e9":783,
"mog":783,
"eli":782,
"ld\u00e1":782,
"zm\u00e9":780,
"gyo":779,
"kbe":779,
"um_":779,
"tem":778,
"\u00e1ja":778,
"ka_":777,
"juk":776,
"lm\u00e9":776,
"el\u00fc":775,
"_ku":772,
"\u00edne":771,
"_ga":770,
"_or":770,
"_em":768,
"gfe":768,
"kba":768,
"tec":767,
"_n_":766,
"dom":765,
"egk":762,
"rla":762,
"san":761,
"s\u00e1r":760,
"_bu":757,
"rm\u00e9":757,
"b\u00f3l":756,
"ol_":754,
"orl":753,
"sel":753,
"v\u00e9d":753,
"ape":752,
"ela":752,
"ozz":752,
"enc":751,
"b\u00e1l":748,
"_la":747,
"m\u00e9r":747,
"\u00f6nb":747,
"ann":745,
"d\u0151t":745,
"nk\u00e1":745,
"teg":743,
"\u00edte":743,
"uda":742,
"\u00faj_":742,
"ves":739,
"zle":739,
"han":735,
"dik":734,
"_\u00f3r":733,
"mek":733,
"lje":732,
"sad":732,
"\u00e9l_":731,
"_ci":730,
"_\u00e9l":729,
"etl":728,
"lja":728,
"udo":728,
"eum":726,
"\u00f6lt":725,
"_un":724,
"\u00f3ds":724,
"_ft":722,
"yer":721,
"g\u00e9s":720,
"\u0151ta":720,
"bek":718,
"chn":718,
"pia":718,
"tak":718,
"kom":717,
"n\u00e9l":717,
"osa":717,
"p\u00edt":716,
"red":716,
"str":715,
"ad\u00e1":714,
"nna":713,
"tta":713,
"rtj":712,
"t\u0151s":712,
"lke":711,
"jes":709,
"_ja":708,
"d\u0151p":708,
"ol\u00e1":707,
"l\u00f3g":706,
"sz\u00f3":705,
"_ir":704,
"kul":703,
"zin":702,
"ina":701,
"rd\u00ed":700,
"dig":699,
"ir\u00e1":698,
"\u0151po":698,
"yar":697,
"lan":696,
"ag\u00e1":695,
"iac":694,
"ezt":692,
"s\u00e9t":692,
"kka":689,
"ped":689,
"ul\u00e1":689,
"n\u00e1c":686,
"nd_":685,
"\u00edme":685,
"_m\u00fa":684,
"lj\u00e1":684,
"ing":683,
"z\u00f6t":682,
"za_":681,
"eni":680,
"ba_":677,
"f\u00fcg":677,
"kko":677,
"z\u00f6s":677,
"mut":676,
"\u00f3ra":676,
"ll\u00ed":675,
"aka":674,
"ton":674,
"\u00fcgg":674,
"egh":673,
"isk":672,
"t\u00edv":672,
"d\u00f3_":669,
"\u00f3do":669,
"akt":668,
"\u00e1m\u00e1":668,
"apj":667,
"l\u00e1l":667,
"zda":667,
"nat":666,
"t\u00e1n":666,
"_l\u00e1":663,
"cik":662,
"_u_":661,
"nt\u00e1":661,
"cs_":659,
"ikk":659,
"_ut":658,
"gia":658,
"nap":658,
"t\u00f3k":658,
"\u00e1l\u00e1":658,
"nal":657,
"rto":657,
"\u00e1to":657,
"aki":656,
"erz":655,
"nul":655,
"ul_":655,
"ago":654,
"atj":652,
"_m_":651,
"dap":651,
"etv":651,
"lt\u00e9":651,
"oko":651,
"lto":650,
"l\u00f3s":649,
"szk":649,
"el\u00f5":648,
"bud":647,
"gol":647,
"_pi":646,
"kra":646,
"das":645,
"ise":642,
"r\u00e1l":642,
"\u00e9ri":641,
"edi":640,
"v\u00e9t":640,
"ece":639,
"z\u00e9l":639,
"az\u00e1":637,
"son":637,
"_ar":636,
"ab\u00e1":636,
"gys":636,
"gos":634,
"any":633,
"b\u00f6z":633,
"nb\u00f6":633,
"zeu":633,
"ava":632,
"hal":632,
"m\u00faz":631,
"rat":630,
"\u00faze":630,
"ein":628,
"ang":626,
"tre":626,
"orr":625,
"ss\u00e1":624,
"ede":623,
"_k\u00ed":622,
"le_":622,
"bi_":621,
"\u00e9de":621,
"lni":620,
"_\u00f6n":619,
"oro":619,
"\u00f3s\u00e1":619,
"tj\u00e1":616,
"z\u00fcl":615,
"\u00e9lc":615,
"_m\u0171":614,
"_p\u00e1":613,
"ng_":612,
"viz":612,
"z\u00e9r":609,
"\u00e1va":609,
"ite":608,
"ara":607,
"zt\u00e1":607,
"egi":606,
"va_":605
};
LanguageIdentifier.addProfile('hu', ngrams, 1838851);
};
if (typeof(LanguageIdentifier) !== 'undefined') {exporter(LanguageIdentifier);};
if (typeof(require) !== 'undefined') {module.exports = exporter;}
