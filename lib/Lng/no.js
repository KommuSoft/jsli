/*!
 * no addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013.01.17, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
var exporter = function(LanguageIdentifier) {
var ngrams = {
"er_":43153,
"en_":26541,
"et_":22335,
"for":18182,
"_de":18107,
"ing":16986,
"_fo":15665,
"_og":15184,
"og_":14311,
"or_":13145,
"_i_":12591,
"re_":11699,
"_av":10970,
"om_":10970,
"til":10716,
"_ti":10674,
"ter":10662,
"ne_":10351,
"det":9655,
"av_":9596,
"_me":9565,
"ng_":9493,
"ene":8925,
"de_":8847,
"il_":8724,
"te_":8327,
"ere":8267,
"_en":8175,
"_er":7956,
"som":7882,
"ed_":7804,
"_so":7659,
"tte":7622,
"lle":7592,
"nge":7533,
"der":7421,
"ver":7272,
"ler":6963,
"_in":6894,
"ke_":6881,
"ett":6857,
"_st":6628,
"es_":6510,
"ste":6404,
"and":6285,
"ell":6190,
"_vi":6176,
"_ve":6113,
"lig":6085,
"nde":6053,
"_ha":6049,
"nin":6036,
"med":5943,
"_be":5895,
"ten":5874,
"sjo":5852,
"_p\u00e5":5831,
"jon":5831,
"_re":5779,
"ser":5764,
"ar_":5720,
"den":5611,
"ent":5599,
"rin":5552,
"_ut":5489,
"gen":5480,
"ens":5436,
"_ko":5418,
"_tr":5412,
"p\u00e5_":5401,
"le_":5344,
"kon":5309,
"tor":5211,
"ner":5099,
"sen":5019,
"_\u00e5_":4951,
"ge_":4931,
"_an":4919,
"kke":4899,
"_no":4850,
"rt_":4814,
"ig_":4722,
"at_":4631,
"ikk":4619,
"_sk":4597,
"ger":4583,
"nne":4581,
"men":4497,
"ren":4476,
"_fr":4454,
"_pr":4445,
"_se":4403,
"ker":4361,
"ers":4338,
"an_":4325,
"_at":4202,
"inn":4129,
"del":4113,
"eri":4102,
"_om":4077,
"tt_":4043,
"end":4009,
"res":3920,
"ekt":3912,
"tet":3821,
"lin":3813,
"_et":3808,
"ngs":3755,
"els":3750,
"ont":3750,
"_ka":3746,
"nte":3718,
"se_":3696,
"per":3670,
"har":3662,
"isk":3647,
"opp":3632,
"one":3612,
"_sa":3572,
"est":3571,
"ans":3533,
"dre":3517,
"enn":3503,
"ert":3467,
"pro":3462,
"dek":3353,
"tra":3330,
"ove":3286,
"het":3263,
"ang":3256,
"_op":3255,
"mme":3233,
"tal":3214,
"nen":3209,
"_ma":3204,
"try":3197,
"gde":3175,
"ret":3165,
"ska":3161,
"ord":3142,
"ske":3131,
"lse":3129,
"jen":3126,
"str":3104,
"nor":3085,
"all":3077,
"lan":3029,
"asj":3017,
"on_":3014,
"eko":2981,
"al_":2969,
"ryg":2961,
"nto":2940,
"rer":2938,
"_el":2930,
"ygd":2925,
"ort":2880,
"_pe":2879,
"kan":2879,
"ige":2858,
"fra":2842,
"var":2842,
"_gj":2808,
"ate":2797,
"ran":2794,
"sam":2765,
"mer":2763,
"\u00e5r_":2762,
"ide":2760,
"len":2753,
"_si":2749,
"ern":2744,
"ll_":2725,
"sse":2718,
"st_":2712,
"ors":2710,
"sta":2696,
"gje":2663,
"kom":2656,
"ra_":2627,
"ise":2618,
"_bl":2595,
"net":2593,
"ved":2568,
"_la":2564,
"att":2543,
"kti":2531,
"_al":2529,
"tiv":2528,
"ale":2521,
"_ba":2520,
"eli":2514,
"vil":2498,
"_he":2482,
"_mi":2479,
"_ik":2475,
"are":2466,
"kt_":2466,
"sk_":2455,
"kal":2448,
"lde":2442,
"el_":2429,
"nse":2420,
"bru":2415,
"nd_":2410,
"old":2386,
"ruk":2384,
"ist":2375,
"lt_":2353,
"ore":2345,
"_gr":2343,
"lik":2336,
"_br":2335,
"ete":2327,
"ndr":2321,
"_ar":2313,
"_va":2307,
"ns_":2303,
"ite":2297,
"tre":2289,
"_hv":2281,
"\u00f8re":2236,
"_ov":2226,
"ien":2224,
"eve":2216,
"sti":2214,
"sto":2214,
"omm":2212,
"hol":2210,
"rte":2209,
"nes":2202,
"ons":2186,
"vei":2184,
"sli":2172,
"kte":2160,
"_li":2155,
"unn":2155,
"_fi":2136,
"por":2132,
"nn_":2116,
"elt":2092,
"ive":2087,
"rbe":2087,
"ill":2083,
"eng":2072,
"pen":2070,
"f\u00f8r":2068,
"org":2055,
"eks":2051,
"ele":2050,
"man":2044,
"rke":2042,
"_di":2021,
"ven":2015,
"rsk":2009,
"bar":2005,
"sik":1996,
"eid":1994,
"arb":1983,
"tat":1982,
"und":1982,
"_le":1973,
"ann":1955,
"reg":1954,
"ede":1946,
"tid":1945,
"nt_":1943,
"_ta":1937,
"_to":1936,
"ier":1929,
"bei":1921,
"v\u00e6r":1921,
"_sp":1918,
"erk":1905,
"sel":1902,
"art":1901,
"tur":1886,
"sni":1884,
"vis":1871,
"sko":1860,
"red":1858,
"_da":1856,
"set":1838,
"\u00e6re":1837,
"kje":1836,
"rne":1827,
"_fa":1818,
"rso":1807,
"s\u00e5_":1796,
"ant":1793,
"gra":1790,
"_un":1786,
"_m\u00e5":1782,
"itt":1779,
"ess":1776,
"leg":1776,
"son":1768,
"akt":1766,
"nom":1762,
"_ak":1761,
"_ku":1757,
"uts":1755,
"dri":1737,
"kel":1737,
"ikt":1728,
"lag":1727,
"ati":1723,
"_bi":1722,
"gru":1708,
"orm":1707,
"ram":1686,
"kni":1685,
"eld":1681,
"ass":1669,
"nta":1669,
"eie":1668,
"gan":1661,
"_f\u00f8":1659,
"rel":1655,
"_mo":1647,
"j\u00f8r":1640,
"_kr":1639,
"lit":1637,
"ake":1634,
"amm":1621,
"kol":1610,
"_\u00e5r":1606,
"_te":1605,
"tak":1590,
"vik":1581,
"tem":1580,
"dig":1577,
"_os":1574,
"bli":1574,
"han":1573,
"ind":1568,
"_v\u00e6":1566,
"alt":1552,
"tig":1552,
"bil":1551,
"ken":1551,
"rek":1551,
"ble":1542,
"ift":1540,
"ffe":1537,
"pla":1537,
"igh":1530,
"spo":1523,
"egg":1519,
"mil":1506,
"nsk":1505,
"_ne":1504,
"slo":1495,
"_sy":1493,
"\u00f8r_":1491,
"_ga":1477,
"let":1476,
"rde":1469,
"rog":1464,
"ghe":1459,
"ppe":1453,
"rge":1446,
"gge":1445,
"nst":1433,
"min":1419,
"ld_":1413,
"eme":1403,
"eta":1400,
"osl":1396,
"is_":1391,
"ole":1391,
"\u00e5de":1391,
"kap":1390,
"ag_":1380,
"dis":1376,
"in_":1375,
"lo_":1374,
"ike":1371,
"die":1369,
"ntr":1366,
"ali":1360,
"ros":1356,
"dle":1347,
"jer":1336,
"sin":1329,
"nno":1326,
"tan":1326,
"las":1314,
"age":1310,
"eg_":1310,
"irk":1306,
"lta":1292,
"ogs":1282,
"id_":1281,
"_sl":1279,
"ir_":1276,
"uli":1274,
"nal":1267,
"met":1264,
"erd":1263,
"ids":1260,
"vir":1258,
"gs\u00e5":1257,
"jel":1256,
"_po":1255,
"_ek":1253,
"ine":1248,
"ets":1246,
"_ho":1242,
"oms":1240,
"uke":1236,
"_gi":1235,
"spe":1235,
"mel":1234,
"bes":1227,
"tel":1222,
"mun":1221,
"tes":1218,
"vek":1216,
"ilj":1214,
"ytt":1210,
"sat":1208,
"ode":1203,
"r\u00e5d":1203,
"rve":1201,
"_fe":1200,
"rst":1199,
"bet":1197,
"van":1186,
"_of":1182,
"par":1182,
"tek":1182,
"hel":1181,
"ve_":1180,
"kk_":1177,
"les":1177,
"_fl":1173,
"kun":1172,
"lj\u00f8":1172,
"ark":1170,
"hen":1169,
"_kj":1165,
"nsp":1165,
"int":1161,
"_na":1152,
"mar":1152,
"nis":1149,
"mmu":1143,
"arn":1142,
"kri":1141,
"run":1139,
"ipp":1136,
"vi_":1134,
"ket":1129,
"ese":1128,
"ost":1128,
"era":1127,
"ins":1127,
"orb":1126,
"ion":1125,
"ta_":1123,
"pri":1121,
"ris":1116,
"_by":1113,
"mid":1113,
"_th":1107,
"_lo":1106,
"nfo":1104,
"use":1104,
"_ny":1103,
"ves":1099,
"dli":1096,
"fer":1095,
"ndi":1095,
"tin":1088,
"fte":1087,
"me_":1085,
"_pa":1081,
"erg":1079,
"gre":1077,
"ure":1076,
"sva":1075,
"the":1074,
"lev":1070,
"mis":1069,
"rli":1067,
"rat":1060,
"tsl":1059,
"ast":1056,
"nsj":1051,
"ege":1050,
"ber":1048,
"pp_":1048,
"_\u00f8k":1046,
"gis":1045,
"tvi":1043,
"idl":1038,
"ss_":1035,
"lke":1033,
"utv":1033,
"mas":1032,
"val":1030,
"kre":1028,
"rdi":1028,
"lis":1026,
"rif":1021,
"_mu":1017,
"bel":1016,
"gne":1011,
"egi":1008,
"lip":1007,
"tis":1006,
"nke":1004,
"nns":1003,
"vor":1001,
"seg":999,
"kli":998,
"ilt":993,
"rma":992,
"_h\u00f8":990,
"dus":990,
"ksj":985,
"riv":985,
"ult":982,
"nat":981,
"ski":981,
"pre":979,
"off":978,
"rie":978,
"n\u00e6r":976,
"oll":974,
"dag":972,
"erv":967,
"skr":967,
"tro":965,
"_dr":964,
"skj":963,
"ata":961,
"ute":960,
"atu":959,
"stu":959,
"tni":956,
"rem":955,
"sit":955,
"rn_":953,
"_pl":949,
"ogr":949,
"sys":947,
"vel":946,
"kes":944,
"fre":943,
"fis":941,
"mot":941,
"tab":941,
"\u00f8ke":940,
"_co":938,
"gj\u00f8":938,
"yst":935,
"ikl":934,
"jem":934,
"m\u00e5l":932,
"_ra":931,
"raf":931,
"vet":930,
"m\u00e5_":929,
"ndl":929,
"ak_":922,
"orh":922,
"ivi":921,
"iti":920,
"rod":919,
"_ul":916,
"lte":915,
"nsi":913,
"get":912,
"lys":912,
"odu":912,
"sis":912,
"kse":911,
"lek":911,
"eis":910,
"lov":910,
"_eu":908,
"erf":908,
"ekn":906,
"beh":904,
"ted":904,
"sve":903,
"hvo":901,
"une":898,
"lom":896,
"sje":896,
"_f\u00e5":895,
"ekk":895,
"dan":892,
"ire":887,
"mpe":886,
"rei":886,
"ur_":885,
"duk":883,
"ika":882,
"ts_":878,
"_n\u00e5":876,
"rs_":875,
"lge":874,
"lli":874,
"dni":870,
"_kl":869,
"us_":868,
"tri":867,
"gat":866,
"nyt":865,
"rme":865,
"far":864,
"ile":862,
"st\u00f8":860,
"omr":858,
"elv":857,
"_or":856,
"rk_":856,
"enk":853,
"ft_":853,
"llo":852,
"ial":849,
"iss":849,
"mat":848,
"he_":843,
"rre":842,
"uk_":842,
"_s\u00e5":839,
"led":839,
"upp":838,
"mul":837,
"fin":836,
"gel":834,
"lem":834,
"ane":831,
"ldr":831,
"kra":828,
"ori":828,
"gi_":827,
"ils":827,
"ave":826,
"tje":826,
"edu":824,
"dat":822,
"ull":821,
"esi":820,
"ad_":818,
"des":818,
"ses":817,
"app":815,
"_fy":813,
"ona":813,
"rho":812,
"t\u00f8r":811,
"log":809,
"\u00f8rs":809,
"ik_":807,
"mr\u00e5":807,
"oli":805,
"dde":804,
"em_":803,
"_a_":800,
"fle":800,
"emp":799,
"ade":796,
"rup":796,
"byg":794,
"edr":794,
"ose":794,
"fik":793,
"ut_":793,
"rti":790,
"syn":789,
"noe":787,
"rks":787,
"fol":786,
"ye_":784,
"emi":781,
"sie":778,
"tli":778,
"esk":776,
"vid":775,
"_bo":773,
"inf":773,
"kst":773,
"rit":773,
"ned":772,
"sid":772,
"oru":770,
"omf":768,
"rhe":768,
"syk":766,
"tas":766,
"rap":765,
"lat":764,
"s\u00f8k":764,
"to_":752,
"ari":751,
"\u00e6ri":750,
"avg":749,
"rad":747,
"olo":745,
"tud":745,
"utt":745,
"hje":741,
"tik":741,
"um_":740,
"kj\u00f8":736,
"orv":736,
"uks":736,
"h\u00f8y":735,
"_sv":732,
"egn":732,
"ukt":732,
"tar":727,
"aks":725,
"sem":718,
"_go":715,
"_l\u00f8":715,
"kul":714,
"eff":713,
"gin":713,
"hov":713,
"ks_":711,
"_bu":710,
"as_":710,
"dst":710,
"f\u00f8l":710,
"pet":709,
"ygg":709,
"ei_":706,
"ppl":706,
"unk":706,
"iv_":704,
"_b\u00f8":702,
"vin":698,
"urs":697,
"rse":696,
"tyr":695,
"ogi":692,
"\u00f8lg":691,
"kin":687,
"god":685,
"ota":683,
"fel":681,
"rea":681,
"tti":681,
"kla":680,
"rfo":680,
"rds":678,
"nli":677,
"nit":674,
"erh":673,
"tse":673,
"_n\u00e6":672,
"pas":672,
"n\u00e5r":670,
"ppo":668,
"ras":667,
"dir":663,
"dra":663,
"ela":661,
"_fu":660,
"inu":659,
"rav":658,
"_ef":657,
"udi":656,
"\u00f8ye":655,
"sor":653,
"sre":653,
"kso":651,
"eha":650,
"tof":650,
"of_":649,
"vit":649,
"dt_":646,
"pos":646,
"fek":645,
"fyl":643,
"nti":642,
"tio":642,
"gst":641,
"gg_":639,
"spr":638,
"_s\u00f8":637,
"bed":637,
"bus":637,
"ot_":635,
"afi":633,
"isj":631,
"ssi":631,
"tru":631,
"rev":629,
"aml":627,
"nel":626,
"fri":625,
"ono":625,
"gsp":624,
"rna":624,
"ges":623,
"omi":623,
"rsi":623,
"eho":622,
"gt_":622,
"nds":622,
"mes":621,
"oen":621,
"lar":620,
"rga":620,
"nas":619,
"sty":619,
"fat":616,
"kar":616,
"rio":616,
"\u00e6rt":616,
"ald":614,
"ilb":614,
"oks":613,
"t\u00f8y":612,
"pes":611,
"ase":610,
"nsa":609,
"\u00f8y_":608,
"olk":607,
"l\u00f8s":606,
"st\u00e5":606,
"sla":605,
"fun":603,
"tst":599,
"ini":598,
"rut":598,
"_eg":597,
"_kn":597,
"iel":597,
"kto":597,
"ben":596,
"ssu":595,
"egr":592,
"hvi":590,
"kle":588,
"rik":588,
"uss":588,
"no_":587,
"emm":586,
"lir":586,
"lie":585,
"kil":583,
"enh":581,
"erl":581,
"bas":580,
"_ri":579,
"_b\u00e5":578,
"kos":577,
"abe":576,
"edi":576,
"omh":575,
"rd_":575,
"tot":575,
"mhe":574,
"ple":574,
"_im":573,
"beg":573,
"nnt":573,
"sur":573,
"pol":572,
"nsv":571,
"nux":571,
"rom":569,
"ha_":567,
"mst":567,
"ild":566,
"erm":565,
"ral":565,
"_kv":564,
"hve":564,
"_do":563,
"_my":562,
"ape":561,
"rol":561,
"mle":559,
"ety":558,
"itu":555,
"ust":554,
"rgi":553,
"pe_":550,
"rda":550,
"her":549,
"ykk":549,
"vgi":548,
"ems":547,
"avt":546,
"omp":546,
"efo":545,
"_as":544,
"ani":544,
"ux_":543,
"utg":541,
"gif":537,
"gir":537,
"je_":536,
"b\u00f8r":534,
"nkt":534,
"urd":534,
"rep":531,
"nni":530,
"ara":527,
"bok":527,
"pel":527,
"ksi":523,
"spi":522,
"vta":522,
"nye":521,
"bak":520,
"rdr":520,
"sgr":519,
"tyd":519,
"am_":518,
"stn":516,
"sek":515,
"na_":514,
"_ki":513,
"f\u00e5_":512,
"sak":511,
"dom":510,
"ema":510,
"hus":510,
"_ge":509,
"nnl":509,
"_s_":508,
"lel":507,
"l\u00e6r":507,
"ltu":506,
"yde":506,
"_ro":505,
"osi":503,
"sul":503,
"pps":502,
"pun":502,
"teg":497,
"ita":496,
"anl":495,
"gur":495,
"igu":492,
"ud_":492,
"yr_":492,
"ifi":491,
"rak":491,
"rig":491,
"_ad":489,
"jor":489,
"\u00f8ko":489,
"fig":488,
"sig":487,
"sst":487,
"_ww":485,
"_x_":485,
"kas":485,
"\u00f8rt":485,
"api":484,
"jek":484,
"edl":483,
"ude":483,
"ilk":482,
"\u00e5l_":482,
"_ty":481,
"ikr":478,
"bre":477,
"nve":475,
"kva":474,
"ies":473,
"lav":473,
"ogn":473,
"osj":473,
"ref":473,
"_ca":472,
"dep":472,
"ein":472,
"bud":471,
"kor":471,
"nkl":471,
"vur":469,
"bef":468,
"fal":468,
"sia":468,
"mod":467,
"nad":467,
"tit":467,
"_du":466,
"igg":466,
"asi":463,
"sku":463,
"_su":462,
"amv":462,
"nda":462,
"_g\u00e5":461,
"ask":461,
"ria":459,
"sm\u00e5":459
};
LanguageIdentifier.addProfile('no', ngrams, 1917111);
};
if (typeof(LanguageIdentifier) !== 'undefined') {exporter(LanguageIdentifier);};
if (typeof(require) !== 'undefined') {module.exports = exporter;}
