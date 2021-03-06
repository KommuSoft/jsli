/*!
 * sv addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013.01.17, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
var exporter = function(LanguageIdentifier) {
var ngrams = {
"en_":92283,
"_de":80300,
"et_":65529,
"tt_":62645,
"f\u00f6r":61570,
"er_":59169,
"att":50169,
"_f\u00f6":49849,
"om_":48354,
"_at":44382,
"det":42846,
"de_":39705,
"_oc":38975,
"ar_":35734,
"ch_":35025,
"och":35007,
"ing":34078,
"\u00f6r_":32266,
"_vi":32126,
"_in":31054,
"_i_":30495,
"nde":30447,
"\u00e4r_":29798,
"and":28993,
"som":28602,
"_so":28589,
"an_":27688,
"ter":27216,
"_me":27166,
"na_":27106,
"den":26707,
"ll_":25984,
"ra_":25362,
"ill":25097,
"_av":24638,
"ska":24452,
"_en":23817,
"_ko":23771,
"ion":23550,
"_ti":21676,
"lig":20583,
"av_":20481,
"ag_":20283,
"_\u00e4r":20198,
"te_":20181,
"til":20149,
"ta_":19519,
"_ha":19362,
"nte":19169,
"med":19136,
"gen":19065,
"ka_":18825,
"ett":18812,
"_om":18718,
"isk":18716,
"nin":18697,
"_fr":18084,
"one":17519,
"rna":17506,
"kom":17054,
"_be":17045,
"men":15944,
"lle":15910,
"_st":15861,
"ga_":15640,
"vi_":15539,
"der":15492,
"_p\u00e5":15488,
"ng_":15337,
"int":15304,
"all":15285,
"omm":15031,
"_sk":14735,
"_ja":14591,
"jag":14120,
"_ut":14114,
"p\u00e5_":13913,
"era":13666,
"ern":13636,
"la_":13405,
"ens":13249,
"_an":12925,
"ste":12832,
"ed_":12717,
"\u00e4tt":12682,
"as_":12589,
"var":12560,
"har":12468,
"het":12390,
"nen":12157,
"ent":12063,
"man":11899,
"tta":11826,
"_va":11679,
"sta":11672,
"lla":11340,
"_re":11095,
"ns_":10879,
"_et":10857,
"rin":10843,
"sam":10801,
"ler":10711,
"ver":10695,
"_eu":10678,
"ara":10628,
"gar":10424,
"fr\u00e5":10330,
"\u00f6rs":10214,
"ten":10210,
"tio":10160,
"ell":10020,
"ade":10013,
"mis":10012,
"kan":10011,
"iga":9922,
"\u00e4nd":9862,
"gt_":9849,
"iss":9835,
"nge":9731,
"ans":9689,
"uro":9647,
"eur":9634,
"upp":9482,
"re_":9413,
"tet":9405,
"igt":9403,
"ati":9374,
"rop":9343,
"ete":9336,
"_sa":9328,
"_ta":9317,
"ran":9232,
"bet":9156,
"_mi":9142,
"_pr":9059,
"vil":9005,
"_al":8984,
"ser":8942,
"_ge":8925,
"_ka":8909,
"kon":8906,
"nna":8905,
"mer":8891,
"ig_":8722,
"tal":8694,
"lan":8592,
"s\u00e5_":8546,
"_si":8518,
"sio":8464,
"nom":8453,
"kti":8364,
"ner":8341,
"ssi":8330,
"_m\u00e5":8289,
"_un":8270,
"nga":8253,
"und":8222,
"mmi":8147,
"_ma":8124,
"eri":8035,
"dra":8026,
"\u00e4ll":7879,
"mme":7730,
"pro":7636,
"del":7570,
"_he":7543,
"ngs":7534,
"_up":7421,
"ram":7421,
"lag":7355,
"iti":7286,
"are":7203,
"\u00e5r_":7127,
"_s\u00e4":7070,
"nsk":7067,
"kt_":6912,
"ndr":6806,
"\u00f6ra":6805,
"ts_":6795,
"inn":6771,
"lit":6720,
"ghe":6642,
"\u00f6re":6619,
"ren":6617,
"mma":6569,
"or_":6513,
"oli":6430,
"str":6412,
"st\u00e4":6279,
"des":6274,
"igh":6272,
"ekt":6267,
"on_":6265,
"tig":6264,
"ger":6236,
"r\u00e5d":6233,
"_s\u00e5":6232,
"res":6179,
"rt_":6110,
"\u00e5de":6100,
"da_":6078,
"gan":6048,
"ikt":6038,
"at_":5991,
"ord":5972,
"par":5959,
"n\u00e4r":5953,
"ket":5932,
"ess":5929,
"_n\u00e4":5923,
"lt_":5910,
"han":5901,
"r\u00e4t":5845,
"tan":5820,
"tte":5817,
"yck":5797,
"vis":5767,
"r\u00e5g":5743,
"ers":5736,
"min":5724,
"tiv":5706,
"kal":5701,
"ets":5681,
"lut":5664,
"tat":5598,
"dan":5584,
"ope":5564,
"els":5555,
"ort":5546,
"amm":5543,
"_gr":5535,
"sa_":5532,
"_se":5458,
"fra":5457,
"eis":5411,
"pei":5407,
"ad_":5385,
"kli":5384,
"tni":5379,
"sla":5321,
"lar":5310,
"ala":5232,
"s\u00e4t":5222,
"kap":5192,
"st_":5183,
"ull":5175,
"_v\u00e4":5169,
"_h\u00e4":5147,
"dig":5135,
"\u00f6ve":5130,
"rbe":5119,
"_fi":5113,
"nst":5109,
"for":5107,
"pol":5074,
"\u00e5st":5071,
"err":5063,
"ock":5022,
"_fa":5009,
"cke":4955,
"_po":4933,
"eme":4910,
"reg":4910,
"ker":4909,
"sku":4859,
"_d\u00e4":4855,
"d\u00e4r":4845,
"_tr":4840,
"\u00e5n_":4838,
"_\u00e4n":4827,
"rat":4804,
"nat":4801,
"_r\u00e4":4796,
"m\u00e5s":4795,
"_l\u00e4":4786,
"\u00e5ng":4783,
"eda":4776,
"ame":4772,
"tis":4753,
"fte":4746,
"red":4726,
"_ve":4714,
"_\u00f6v":4703,
"arl":4688,
"arb":4678,
"ssa":4678,
"tor":4674,
"rde":4667,
"r\u00e5n":4665,
"fin":4648,
"lin":4640,
"tra":4617,
"_pa":4577,
"tar":4563,
"ist":4547,
"kul":4539,
"gra":4511,
"llt":4502,
"_mo":4481,
"nd_":4474,
"sen":4473,
"el_":4462,
"g\u00f6r":4446,
"rst":4441,
"ant":4437,
"\u00e5go":4436,
"akt":4433,
"ige":4416,
"ate":4401,
"in_":4386,
"ins":4372,
"le_":4362,
"nda":4362,
"tid":4356,
"art":4355,
"erk":4323,
"rar":4320,
"v\u00e5r":4309,
"cks":4306,
"_li":4305,
"uta":4280,
"mar":4261,
"_ar":4255,
"ot_":4246,
"bar":4193,
"lem":4186,
"ven":4171,
"_ef":4168,
"tro":4166,
"ast":4140,
"_\u00e5t":4135,
"slu":4129,
"nse":4125,
"gru":4121,
"ilj":4093,
"mot":4078,
"\u00e5ga":4074,
"arn":4048,
"eta":4043,
"enn":4028,
"uni":3995,
"age":3988,
"st\u00e5":3981,
"nt_":3967,
"rla":3967,
"tik":3967,
"her":3953,
"ks\u00e5":3944,
"ss_":3943,
"\u00e4ns":3930,
"end":3927,
"_my":3922,
"_n\u00e5":3920,
"_fo":3888,
"ite":3868,
"rr_":3864,
"rik":3852,
"kla":3846,
"_or":3812,
"rad":3809,
"sto":3809,
"lam":3808,
"tli":3805,
"rsl":3802,
"pa_":3782,
"_ba":3779,
"vet":3764,
"nne":3763,
"tur":3754,
"eno":3723,
"_v\u00e5":3721,
"kte":3707,
"ntr":3705,
"tag":3701,
"bes":3697,
"nad":3692,
"_di":3686,
"ras":3686,
"nio":3664,
"ma_":3649,
"per":3634,
"n\u00e5g":3630,
"ege":3623,
"ike":3593,
"\u00e4rd":3592,
"pen":3589,
"_sy":3577,
"opa":3577,
"nis":3563,
"rli":3552,
"sig":3542,
"sko":3520,
"omr":3512,
"sti":3512,
"h\u00e5l":3488,
"\u00e5ll":3483,
"\u00e4nn":3482,
"ret":3462,
"_f\u00e5":3459,
"ndl":3449,
"get":3439,
"kni":3429,
"em_":3427,
"vid":3425,
"st\u00f6":3421,
"l\u00e4n":3415,
"lik":3397,
"nta":3392,
"_kr":3390,
"oll":3389,
"_la":3348,
"_er":3339,
"ons":3336,
"t\u00e4n":3336,
"nas":3325,
"utv":3323,
"_ku":3321,
"ken":3314,
"ja_":3307,
"id_":3299,
"ckl":3297,
"est":3287,
"lse":3286,
"led":3283,
"eko":3279,
"eft":3270,
"ika":3263,
"es_":3262,
"ela":3258,
"myc":3242,
"gem":3236,
"tre":3234,
"v\u00e4n":3225,
"ris":3224,
"eck":3208,
"mel":3202,
"m\u00e4n":3196,
"kra":3192,
"am_":3190,
"orm":3160,
"se_":3148,
"ndi":3142,
"_g\u00e4":3141,
"hel":3137,
"v\u00e4r":3137,
"mr\u00e5":3136,
"sva":3110,
"al_":3108,
"t\u00e4l":3102,
"_el":3086,
"h\u00e4r":3084,
"_g\u00f6":3080,
"_ny":3073,
"ats":3072,
"_ni":3061,
"nar":3055,
"ber":3052,
"dri":3045,
"vik":3029,
"tr\u00e4":3026,
"uts":3023,
"alm":3022,
"_bl":3017,
"_da":3010,
"lma":3009,
"let":2987,
"sst":2979,
"ina":2977,
"dni":2944,
"run":2936,
"far":2891,
"mil":2887,
"sse":2872,
"ena":2866,
"tve":2859,
"rit":2850,
"_le":2847,
"sin":2840,
"nsa":2834,
"g\u00e4l":2833,
"_br":2824,
"sk_":2818,
"rek":2799,
"ilk":2789,
"_r\u00e5":2787,
"vec":2782,
"itt":2780,
"ono":2778,
"l\u00e4g":2762,
"ttn":2759,
"edl":2751,
"omi":2747,
"\u00e4ve":2747,
"kri":2745,
"pp_":2742,
"aga":2731,
"\u00e4nk":2726,
"org":2723,
"is_":2720,
"dli":2704,
"r\u00e4n":2704,
"nkt":2703,
"rf\u00f6":2698,
"dag":2693,
"_na":2692,
"_os":2689,
"tti":2689,
"ske":2672,
"amt":2669,
"tvi":2662,
"rag":2654,
"avs":2645,
"beh":2644,
"ial":2634,
"ino":2630,
"mf\u00f6":2609,
"ede":2604,
"spe":2596,
"nns":2591,
"lja":2581,
"ni_":2576,
"b\u00f6r":2570,
"dle":2568,
"sat":2568,
"dem":2561,
"ari":2559,
"ive":2558,
"bli":2543,
"esl":2531,
"lis":2528,
"egi":2521,
"ror":2519,
"kun":2514,
"unk":2514,
"pri":2508,
"inf":2498,
"va_":2495,
"bor":2493,
"oss":2489,
"_ty":2484,
"it_":2483,
"apa":2476,
"g\u00e4r":2455,
"sit":2400,
"ski":2398,
"kar":2397,
"_m\u00f6":2394,
"_b\u00f6":2393,
"_ek":2391,
"_\u00e4v":2384,
"_\u00e5r":2384,
"gor":2373,
"\u00f6st":2373,
"ems":2371,
"_g\u00e5":2356,
"ur_":2356,
"ind":2343,
"nu_":2339,
"rsk":2337,
"rig":2336,
"rso":2335,
"ali":2328,
"kor":2324,
"_hu":2303,
"kat":2301,
"sys":2298,
"iv_":2293,
"lls":2289,
"kna":2286,
"m\u00e5n":2279,
"sf\u00f6":2276,
"skt":2275,
"rre":2265,
"ier":2263,
"ott":2263,
"t\u00f6d":2262,
"mst":2258,
"ini":2253,
"ere":2252,
"ark":2248,
"ke_":2245,
"pun":2245,
"nan":2242,
"_m\u00e4":2240,
"lke":2233,
"vad":2232,
"\u00e4gg":2226,
"\u00f6rd":2219,
"ise":2218,
"rga":2215,
"_bi":2211,
"rs_":2207,
"isa":2206,
"nka":2206,
"j\u00e4l":2204,
"gga":2199,
"soc":2197,
"_nu":2196,
"jli":2196,
"ppe":2195,
"\u00f6jl":2195,
"tas":2191,
"_ex":2190,
"gsf":2190,
"m\u00f6j":2186,
"ruk":2179,
"ida":2176,
"oci":2175,
"nel":2160,
"rkl":2158,
"cia":2151,
"iva":2144,
"_ra":2134,
"rer":2133,
"val":2133,
"_sl":2132,
"fat":2119,
"_pe":2116,
"s\u00e4k":2109,
"s\u00e4g":2103,
"ik_":2095,
"spr":2090,
"ttr":2089,
"rka":2083,
"g\u00e5n":2079,
"len":2077,
"ift":2076,
"_ho":2072,
"ytt":2071,
"ck_":2062,
"ut_":2061,
"\u00e4ng":2060,
"uti":2041,
"\u00e4rf":2036,
"itu":2029,
"ire":2025,
"pas":2022,
"k\u00e4n":2011,
"ukt":2011,
"bil":2005,
"fal":2005,
"nor":2002,
"elt":1998,
"ann":1994,
"cka":1993,
"tyd":1989,
"rup":1981,
"\u00e4ga":1980,
"\u00e4n_":1978,
"tru":1977,
"dir":1975,
"unn":1974,
"nti":1972,
"_tv":1969,
"kil":1969,
"kol":1959,
"\u00f6rb":1953,
"jor":1948,
"rti":1938,
"tsl":1937,
"ori":1932,
"cen":1929,
"ffe":1927,
"_sp":1924,
"tem":1919,
"v\u00e4l":1919,
"mss":1917,
"dam":1912,
"ont":1909,
"_kv":1908,
"vin":1904,
"ert":1903,
"emo":1897,
"erh":1896,
"_h\u00f6":1894,
"tad":1888,
"rog":1884,
"_ri":1881,
"l\u00e4m":1881,
"\u00e4ra":1880,
"_sj":1878,
"nli":1874,
"omf":1873,
"tts":1868,
"ble":1865,
"por":1861,
"ogr":1860,
"_ju":1854,
"dar":1849,
"ide":1841,
"ust":1828,
"mig":1827,
"nf\u00f6":1814,
"teg":1814,
"_l\u00e5":1811,
"skr":1810,
"ge_":1802,
"_fl":1790,
"pek":1784,
"\u00e4mn":1784,
"ntl":1781,
"et\u00e4":1779,
"rhe":1773,
"\u00e4mp":1767,
"met":1761,
"sol":1760,
"idi":1750,
"df\u00f6":1749,
"gon":1749,
"leg":1743,
"vat":1741,
"rol":1740,
"m\u00e5l":1737,
"\u00e5tg":1732,
"tg\u00e4":1726,
"ktu":1723,
"lj\u00f6":1704,
"ien":1703,
"amh":1694,
"nni":1687,
"\u00e4ke":1687,
"\u00e5nd":1687,
"syn":1686,
"ape":1685,
"_bo":1682,
"erl":1672,
"_sv":1666,
"pla":1665,
"obl":1661,
"_go":1660,
"nal":1657,
"roc":1648,
"_do":1643,
"t\u00e5n":1643,
"gni":1641,
"\u00e5te":1640,
"d\u00e5_":1635,
"v\u00e5_":1635,
"_ol":1624,
"_kl":1621,
"opp":1621,
"pre":1621,
"h\u00e4n":1619,
"rma":1619,
"dis":1618,
"sli":1618,
"gio":1615,
"tsk":1613,
"oce":1612,
"kta":1611,
"spo":1608,
"ani":1597,
"sni":1596,
"l\u00f6s":1593,
"rob":1590,
"fri":1589,
"ang":1584,
"rme":1577,
"onk":1575,
"rkn":1572,
"_k\u00e4":1566,
"on\u00e4":1565,
"raf":1563,
"_fu":1556,
"nit":1553,
"dla":1548,
"sak":1548,
"_te":1545,
"lat":1541,
"ale":1539,
"nya":1531,
"t\u00e4m":1531,
"yss":1528,
"efo":1523,
"_h\u00e5":1522,
"olk":1518,
"atu":1515,
"sek":1513,
"ona":1511,
"tri":1511,
"gre":1507,
"\u00e5da":1504,
"rdn":1503,
"_r\u00f6":1502,
"got":1502,
"kr\u00e4":1488,
"nsv":1486,
"ult":1484,
"ya_":1483,
"tst":1481,
"ume":1480,
"kot":1478,
"rdf":1477,
"tit":1477,
"ags":1473,
"mli":1466,
"hur":1465,
"alt":1464,
"_of":1459,
"mat":1454,
"f\u00e5_":1453,
"pel":1449,
"lad":1447,
"ora":1446,
"ack":1440,
"sky":1439,
"_to":1438,
"liv":1438,
"nhe":1438,
"\u00e5ra":1438,
"try":1433,
"yst":1432,
"m\u00f6t":1428,
"\u00e4ck":1428,
"\u00e4rk":1427,
"nsi":1426,
"r\u00e4d":1426,
"god":1425,
"ank":1420,
"f\u00e5r":1415,
"ost":1415,
"ute":1407,
"\u00f6ka":1407,
"sj\u00e4":1405,
"vs_":1405,
"h\u00e4l":1403,
"lni":1401,
"\u00f6rh":1397,
"egr":1389,
"mna":1388,
"\u00f6te":1379,
"_ga":1375,
"ha_":1375,
"lde":1375,
"mti":1375,
"rte":1375,
"_eg":1374,
"lta":1373,
"rva":1370,
"_d\u00e5":1364,
"\u00f6lj":1364,
"rts":1361,
"nke":1359,
"\u00f6rt":1357,
"tin":1356,
"\u00e4rs":1355,
"van":1353,
"edb":1352,
"v\u00e4g":1348,
"\u00e4mm":1348,
"orn":1347,
"t\u00f6r":1347,
"edr":1344,
"beg":1339,
"rot":1335,
"ful":1334,
"\u00e4lv":1331,
"lln":1330,
"bef":1329,
"tj\u00e4":1328,
"sid":1326,
"ana":1323,
"f\u00f6l":1323,
"sel":1320,
"l\u00e5t":1319,
"nv\u00e4":1318,
"ild":1317,
"gst":1312,
"mpe":1310,
"enh":1308,
"etr":1307,
"inr":1307,
"amf":1306,
"enl":1306,
"gna":1305,
"mit":1305,
"r\u00f6s":1304,
"bat":1303,
"\u00e4ge":1303,
"ore":1301,
"utt":1301,
"ral":1300,
"s\u00f6k":1300,
"je_":1299,
"las":1299,
"sik":1295,
"nds":1292,
"tif":1292,
"_pl":1289,
"ors":1287,
"j\u00e4n":1285,
"ts\u00e4":1280,
"stn":1279,
"ivi":1278,
"\u00e5t_":1274,
"sna":1271,
"\u00f6rv":1270,
"mt_":1268,
"dbo":1262,
"\u00e4st":1262,
"llv":1259,
"_no":1257,
"s\u00e4r":1257,
"deb":1256,
"esu":1256,
"r\u00e4v":1253,
"riv":1251,
"fis":1248,
"fol":1247,
"pos":1247,
"\u00e4nt":1244,
"kos":1243,
"_l\u00f6":1242,
"byg":1241,
"eba":1241,
"t\u00e5r":1235,
"rod":1233,
"rn_":1231,
"app":1226,
"nci":1226,
"ung":1226,
"ode":1224,
"ygg":1224,
"_n\u00f6":1223,
"oms":1222,
"ama":1219,
"fek":1217,
"_tu":1215,
"gr\u00e4":1212,
"sis":1209,
"eh\u00f6":1206,
"g\u00e5r":1206,
"ilt":1202,
"cip":1200,
"fle":1200,
"inc":1199,
"lst":1198,
"\u00f6rf":1197,
"ls\u00e4":1196,
"r\u00f6r":1194,
"tse":1193,
"dom":1191,
"fer":1191,
"_dr":1189,
"kad":1186,
"kur":1186,
"tac":1185,
"b\u00e4t":1184,
"kel":1184,
"n\u00e4m":1183,
"lva":1179,
"vit":1178,
"olu":1175,
"eu_":1173,
"ick":1171,
"anv":1167,
"\u00e5rt":1165,
"ls_":1162,
"eff":1158,
"pap":1158,
"aft":1156,
"ots":1154,
"esk":1153,
"rel":1152,
"ppm":1151,
"_b\u00e4":1149,
"egl":1147,
"kas":1147,
"urr":1145,
"erv":1144,
"fr\u00e4":1144,
"h\u00f6g":1142,
"nno":1141,
"um_":1140,
"ars":1138,
"gis":1138,
"_pu":1132,
"s\u00e5d":1131,
"okr":1130,
"nsl":1123,
"rfa":1116,
"mor":1115,
"ane":1114,
"_fe":1112,
"h\u00f6r":1111,
"kto":1110,
"fru":1109,
"mok":1098,
"bek":1097,
"_sn":1096,
"ele":1096,
"nku":1096,
"\u00e5gr":1095,
"_hi":1094,
"\u00f6rl":1091,
"das":1090,
"tom":1090,
"ref":1088,
"rdr":1087,
"ton":1086
};
LanguageIdentifier.addProfile('sv', ngrams, 5330933);
};
if (typeof(LanguageIdentifier) !== 'undefined') {exporter(LanguageIdentifier);};
if (typeof(require) !== 'undefined') {module.exports = exporter;}
