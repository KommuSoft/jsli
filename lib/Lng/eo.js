/*!
 * eo addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 2013.01.17, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
var exporter = function(LanguageIdentifier) {
var ngrams = {
"_la":382428,
"la_":374029,
"aj_":246196,
"_de":243032,
"de_":224736,
"oj_":196353,
"is_":184184,
"as_":167445,
"_ka":158716,
"en_":145494,
"_en":143916,
"_es":136176,
"kaj":133721,
"est":127476,
"to_":119334,
"on_":111006,
"sta":102398,
"io_":94844,
"ro_":92272,
"_pr":86851,
"ta_":84035,
"_ko":81850,
"_po":78991,
"_li":78651,
"ant":78055,
"tas":76074,
"jn_":75117,
"_ki":71830,
"ran":67142,
"_al":66971,
"per":64839,
"_ma":64513,
"nto":63544,
"an_":63496,
"ist":63058,
"tis":62800,
"li_":59418,
"no_":58385,
"sti":58354,
"a\u016d_":57064,
"kon":56876,
"do_":56827,
"ita":56600,
"_re":55250,
"toj":52344,
"ent":51516,
"_an":49254,
"_in":49196,
"el_":49185,
"_ti":48980,
"aro":47609,
"ia_":47484,
"era":46867,
"_se":46678,
"ter":46674,
"ojn":46607,
"sto":44974,
"_pl":44131,
"nta":42572,
"lo_":42413,
"_si":41789,
"pro":41744,
"and":41350,
"al_":40597,
"taj":40368,
"_mo":39952,
"_ku":39584,
"nte":39520,
"tra":39196,
"_su":38668,
"_tr":37801,
"_pa":37749,
"te_":36918,
"_el":36863,
"_ja":35980,
"lan":35290,
"_no":35285,
"str":35267,
"int":35237,
"iu_":34758,
"\u011dis":34526,
"mal":34395,
"spe":34114,
"por":34002,
"ili":33780,
"_ne":33742,
"ono":33221,
"roj":33107,
"er_":32980,
"_pe":32912,
"ver":32687,
"kiu":32398,
"ata":32238,
"mo_":32101,
"_ek":31851,
"par":31812,
"na_":31546,
"ko_":31323,
"esp":31152,
"oni":31136,
"ne_":31100,
"ado":30618,
"ajn":30394,
"gra":30281,
"pre":30086,
"art":30018,
"_di":29742,
"ra_":29729,
"ank":29714,
"_un":29391,
"lin":28832,
"un_":28792,
"or_":28659,
"da_":28594,
"_vi":28489,
"tro":28462,
"ort":28424,
"mon":28335,
"_du":28273,
"_gr":27759,
"kun":27460,
"kie":27371,
"i\u011di":27310,
"pri":27274,
"_te":26849,
"nda":26844,
"ali":26703,
"eri":26702,
"jar":26668,
"unu":26566,
"men":26435,
"_\u011di":26411,
"_fa":26339,
"igi":26298,
"_fo":26208,
"ris":26161,
"lia":26035,
"ori":25930,
"man":25760,
"iel":25478,
"_me":25465,
"ri_":25226,
"_ve":25125,
"ndo":24996,
"kom":24890,
"ato":24793,
"iaj":24374,
"ing":24319,
"loj":24202,
"noj":24059,
"ano":23865,
"_\u0109e":23736,
"ost":23591,
"ont":23504,
"iko":23470,
"ara":23402,
"ari":23393,
"ton":23389,
"ion":23088,
"_a\u016d":23086,
"_\u0109i":23039,
"olo":23002,
"co_":22791,
"dis":22751,
"tan":22705,
"ero":22650,
"cio":22578,
"_ke":22566,
"rto":22427,
"ple":22424,
"ona":22317,
"_mi":22130,
"for":22075,
"vas":22049,
"res":21573,
"_ar":21495,
"ka\u016d":21484,
"ni_":21472,
"ino":21409,
"pos":21408,
"ond":21383,
"aci":21203,
"nom":21114,
"_sa":21097,
"rio":20941,
"don":20939,
"_a_":20895,
"nis":20827,
"_fi":20721,
"ste":20709,
"ekt":20560,
"rbo":20334,
"ala":20211,
"nka":20005,
"ova":19919,
"ika":19896,
"am_":19768,
"_st":19732,
"tri":19715,
"urb":19704,
"_kr":19629,
"kto":19451,
"ult":19403,
"enc":19375,
"_mu":19363,
"iuj":19315,
"nti":19227,
"in_":19191,
"pli":19189,
"_ha":19073,
"tem":18910,
"_na":18887,
"mil":18707,
"re_":18705,
"_ba":18595,
"ron":18581,
"cia":18499,
"ntr":18457,
"ana":18423,
"_fr":18310,
"ani":18277,
"tiu":18229,
"ons":18088,
"a\u0135o":18007,
"lit":17946,
"alo":17914,
"ilo":17844,
"bo_":17783,
"_ri":17713,
"le_":17588,
"ke_":17581,
"lon":17579,
"rti":17464,
"nas":17458,
"tur":17452,
"sia":17362,
"ern":17178,
"go_":17178,
"uj_":17178,
"_lo":17024,
"oro":16925,
"ven":16925,
"eno":16894,
"_on":16892,
"tat":16859,
"ava":16840,
"ian":16642,
"_nu":16636,
"ka_":16588,
"tik":16586,
"ur_":16573,
"omo":16555,
"nst":16538,
"_ur":16429,
"nio":16379,
"vo_":16233,
"ito":16230,
"tor":16132,
"_il":16099,
"_ge":16082,
"tio":15963,
"ive":15933,
"ndi":15926,
"raj":15875,
"_or":15831,
"_da":15720,
"eni":15702,
"_ap":15700,
"eks":15621,
"ten":15575,
"ers":15567,
"ngv":15546,
"po_":15509,
"ren":15297,
"ide":15274,
"rma":15270,
"ulo":15264,
"jo_":15216,
"vis":15183,
"sed":15177,
"reg":15151,
"bro":15138,
"ed_":15089,
"son":15082,
"ena":14920,
"ome":14913,
"doj":14875,
"tar":14853,
"mar":14814,
"_so":14788,
"eto":14735,
"_ok":14593,
"hav":14577,
"_ho":14547,
"gis":14523,
"erm":14504,
"end":14420,
"um_":14412,
"ina":14368,
"ma_":14351,
"ati":14266,
"iam":14239,
"rit":14234,
"sen":14217,
"moj":14113,
"dum":14108,
"eco":14094,
"_vo":14090,
"_ta":14053,
"mul":13983,
"va_":13963,
"emp":13961,
"rad":13941,
"cen":13928,
"den":13816,
"\u011do_":13816,
"lej":13808,
"_ro":13735,
"_le":13729,
"ovi":13656,
"anc":13632,
"akt":13568,
"dan":13568,
"ejo":13532,
"\u011di_":13508,
"ila":13493,
"ini":13443,
"lio":13402,
"tru":13367,
"_ak":13345,
"ie_":13328,
"ame":13290,
"ele":13288,
"ama":13234,
"mor":13229,
"ora":13145,
"las":13125,
"elo":13065,
"ioj":13044,
"uni":13020,
"oli":12996,
"fra":12922,
"so_":12895,
"es_":12890,
"ere":12858,
"kis":12853,
"_br":12843,
"nov":12840,
"ord":12810,
"pol":12732,
"nco":12711,
"tin":12663,
"_ra":12624,
"_be":12621,
"egi":12619,
"_do":12514,
"kan":12476,
"nci":12449,
"fer":12414,
"ast":12395,
"_tu":12322,
"st_":12288,
"\u011das":12242,
"rat":12180,
"i\u011da":12129,
"gio":12120,
"lta":12063,
"rov":11941,
"erk":11928,
"_hi":11908,
"kol":11901,
"kti":11884,
"iga":11863,
"orm":11830,
"ura":11829,
"rez":11785,
"ej_":11779,
"tal":11764,
"emo":11739,
"_he":11716,
"kva":11615,
"ale":11518,
"van":11515,
"ras":11353,
"voj":11321,
"_va":11270,
"lig":11270,
"oma":11257,
"_ce":11252,
"ber":11247,
"ici":11247,
"far":11205,
"_bo":11192,
"sur":11166,
"ins":11159,
"rig":11142,
"rop":11142,
"rna":11083,
"oka":11064,
"gvo":11044,
"nua":11032,
"bor":10997,
"kri":10988,
"ene":10942,
"vid":10902,
"je_":10854,
"omi":10824,
"opo":10818,
"ua_":10805,
"uro":10804,
"gan":10751,
"ien":10745,
"_ju":10692,
"tie":10659,
"koj":10645,
"ola":10592,
"ebl":10591,
"ate":10582,
"ang":10579,
"mbr":10567,
"_fe":10554,
"san":10539,
"kta":10510,
"tre":10499,
"rom":10473,
"sis":10433,
"rin":10430,
"zis":10427,
"nat":10422,
"ekz":10418,
"_sp":10394,
"duk":10386,
"kre":10344,
"_je":10325,
"_of":10275,
"nor":10263,
"ong":10263,
"ism":10248,
"la\u016d":10140,
"tit":10138,
"iti":10095,
"fin":10090,
"ria":10073,
"rte":10044,
"lek":10043,
"der":10028,
"rik":9921,
"abo":9900,
"ski":9879,
"bla":9867,
"kar":9850,
"min":9845,
"fon":9826,
"ta\u016d":9780,
"mat":9762,
"sim":9749,
"ind":9745,
"ezi":9735,
"iri":9728,
"apa":9712,
"\u0109ef":9708,
"non":9702,
"azi":9636,
"rta":9611,
"nac":9601,
"lis":9578,
"pan":9562,
"avi":9551,
"pov":9495,
"eci":9453,
"naj":9452,
"ask":9416,
"eta":9409,
"maj":9369,
"sek":9363,
"tia":9287,
"_am":9280,
"lik":9255,
"sub":9221,
"omp":9208,
"laj":9207,
"ser":9152,
"kul":9143,
"ger":9128,
"ial":9125,
"_ru":9070,
"igo":9059,
"ra\u016d":9046,
"me_":9036,
"ida":9030,
"zo_":9000,
"_kv":8968,
"git":8945,
"rie":8921,
"_uz":8908,
"kor":8895,
"nde":8895,
"ti_":8894,
"rdo":8860,
"ans":8847,
"nca":8841,
"\u0135oj":8814,
"nur":8812,
"\u0109e_":8802,
"nu_":8775,
"lib":8764,
"mpe":8760,
"bli":8675,
"ler":8663,
"mer":8651,
"ert":8625,
"lab":8617,
"nko":8589,
"ca_":8547,
"_lu":8535,
"pen":8515,
"var":8511,
"nan":8505,
"rol":8477,
"eli":8446,
"kci":8444,
"gas":8440,
"vol":8436,
"iki":8433,
"ago":8432,
"are":8425,
"pon":8425,
"_ga":8379,
"edi":8369,
"his":8347,
"adi":8332,
"ami":8313,
"bon":8299,
"rib":8267,
"nsi":8252,
"rki":8225,
"nga":8223,
"lat":8218,
"alt":8205,
"uso":8173,
"mun":8162,
"mpl":8152,
"vin":8148,
"met":8128,
"lar":8126,
"fil":8095,
"_bi":8088,
"rav":8044,
"rak":8006,
"ral":7991,
"mpo":7977,
"emb":7944,
"_fl":7915,
"daj":7911,
"ard":7894,
"erv":7862,
"lor":7850,
"tiv":7815,
"oci":7803,
"mem":7792,
"sam":7792,
"uzi":7777,
"gen":7773,
"ies":7757,
"rko":7735,
"tig":7711,
"iva":7708,
"ape":7695,
"_kl":7691,
"ite":7671,
"ema":7663,
"ar_":7661,
"len":7660,
"oko":7644,
"re\u011d":7617,
"ksi":7570,
"smo":7566,
"rus":7562,
"atu":7544,
"dio":7540,
"org":7527,
"\u0135o_":7527,
"us_":7523,
"eso":7504,
"viv":7493,
"plu":7487,
"_ni":7483,
"ove":7460,
"gi_":7444,
"mas":7437,
"kia":7411,
"kaz":7410,
"sit":7408,
"tut":7380,
"eko":7372,
"i\u011do":7331,
"evi":7318,
"imp":7311,
"ela":7300,
"ret":7277,
"stu":7273,
"log":7272,
"kla":7264,
"ki\u011d":7257,
"ine":7249,
"ner":7249,
"gar":7244,
"\u0109iu":7200,
"_at":7195,
"bel":7162,
"sin":7161,
"emi":7141,
"rek":7131,
"pla":7112,
"sa_":7108,
"_sc":7082,
"hom":7082,
"vor":7077,
"gre":7063,
"red":7043,
"kat":7041,
"kel":7002,
"pe_":6954,
"val":6945,
"arc":6941,
"eo_":6903,
"ldo":6869,
"pra":6868,
"ark":6865,
"\u011din":6848,
"kur":6841,
"se_":6840,
"tek":6822,
"soc":6804,
"sig":6788,
"rec":6751,
"_\u015di":6742,
"ido":6736,
"dek":6730,
"rce":6722,
"con":6714,
"bra":6711,
"cie":6709,
"an\u011d":6703,
"cid":6664,
"lok":6655,
"ga_":6626,
"ens":6623,
"_sk":6586,
"vaj":6584,
"\u0109i_":6578,
"ivi":6576,
"ira":6575,
"tel":6565,
"_as":6562,
"du_":6561,
"os_":6560,
"ust":6543,
"ril":6520,
"ri\u011d":6513,
"sci":6504,
"inf":6473,
"rmo":6433,
"rka":6415,
"ska":6415,
"arm":6411,
"a\u011do":6403,
"bri":6402,
"sko":6400,
"nce":6349,
"_pi":6346,
"dia":6341,
"elk":6332,
"aso":6331,
"rmi":6330,
"ega":6321,
"mis":6314,
"uda":6305,
"rok":6295,
"eti":6293,
"_pu":6285,
"nun":6281,
"_ol":6247,
"dev":6238,
"ako":6232,
"odo":6209,
"_us":6179,
"atr":6177,
"omu":6174,
"ign":6161,
"one":6159,
"cis":6154,
"rso":6153,
"ula":6151,
"eda":6144,
"lo\u011d":6125,
"fam":6122,
"sup":6115,
"idi":6105,
"_bu":6102,
"bar":6087,
"rme":6072,
"uti":6068,
"lka":6044,
"ti\u011d":6037,
"uza":6037,
"kst":6015,
"ofi":5991,
"umo":5935,
"sio":5925,
"_\u015dt":5905,
"omb":5903,
"ibe":5891,
"olu":5891,
"div":5889,
"coj":5878,
"asi":5861,
"_hu":5845,
"izo":5839,
"und":5825,
"rga":5818,
"mit":5815,
"pec":5814,
"amo":5809,
"_im":5784,
"itu":5769,
"rua":5762,
"ve_":5756,
"ogi":5734,
"flu":5727,
"ice":5722,
"rsa":5720,
"inc":5718,
"efe":5711,
"hel":5698,
"kde":5695,
"ole":5691,
"ote":5677,
"ukt":5650,
"imi":5622,
"etr":5619,
"eve":5618,
"ekd":5610,
"ete":5600,
"_\u0109a":5596,
"rla":5584,
"kap":5563,
"oft":5563,
"skr":5550,
"_\u015da":5543,
"ume":5537,
"kro":5533,
"das":5529,
"una":5526,
"_jo":5523,
"ipo":5522,
"ces":5520,
"esi":5506,
"upo":5488,
"ol_":5487,
"ble":5474,
"iun":5474,
"uo_":5471,
"eze":5469,
"ima":5452,
"ime":5438,
"ngl":5419,
"spa":5416,
"esk":5414,
"kal":5405,
"rac":5398,
"kam":5397,
"ric":5386,
"rui":5380,
"tad":5364,
"rda":5359,
"lud":5350,
"ede":5349,
"ivo":5336,
"niv":5335,
"nik":5332,
"rem":5328,
"ce_":5318,
"poj":5317,
"rev":5301,
"tol":5297,
"iro":5292,
"din":5282,
"saj":5280,
"leg":5275,
"om_":5275,
"enk":5270,
"uta":5261,
"nig":5258,
"cip":5254,
"alp":5250,
"uri":5248,
"kio":5246,
"oje":5244,
"ram":5229,
"\u016dro":5229,
"imo":5221,
"vil":5195,
"rba":5191,
"izi":5181,
"lte":5179,
"udo":5176,
"\u015dta":5169,
"aga":5160,
"_fu":5149,
"ier":5149,
"tam":5145,
"boj":5103,
"gru":5093,
"sud":5090,
"til":5088,
"ndu":5087,
"\u011dan":5084,
"pat":5076,
"nit":5065,
"nal":5058,
"vad":5056,
"_ag":5053,
"dec":5047,
"rup":5045,
"zon":5045,
"_ci":5026,
"uli":5021,
"goj":5018,
"ore":5007,
"riv":4998,
"alf":4983,
"_e\u016d":4981,
"e\u011do":4968,
"_to":4947,
"foj":4935,
"ubl":4922,
"uis":4915,
"_eb":4902,
"soj":4898,
"arb":4892,
"apo":4887,
"num":4884,
"all":4855,
"_ad":4837,
"ald":4836,
"kce":4819,
"jam":4815,
"rdi":4805,
"opa":4802,
"vi\u011d":4795,
"edo":4791,
"lim":4788,
"ibr":4783,
"zio":4779,
"sla":4766,
"e\u016dr":4764,
"fte":4760,
"mpa":4759,
"isp":4755,
"raf":4755,
"erl":4751,
"jun":4751,
"ekv":4737,
"_ca":4735,
"evo":4733,
"oto":4723,
"kas":4714,
"_ed":4711,
"pas":4707,
"ogr":4701,
"irk":4674,
"ept":4663,
"mov":4645,
"zid":4639,
"her":4636,
"tag":4636,
"sol":4613,
"pub":4602,
"kzi":4600,
"gla":4592,
"rim":4571,
"mio":4566,
"esa":4562,
"dit":4556,
"ge_":4549,
"oks":4535,
"eme":4533,
"opr":4528,
"isk":4516,
"zas":4516,
"tim":4503,
"bur":4501,
"nse":4489,
"amp":4481,
"rei":4480,
"bat":4478,
"rel":4472,
"aco":4470,
"fla":4468,
"a\u016dt":4460,
"ung":4459,
"ile":4446,
"iza":4443,
"rsi":4443,
"odi":4429,
"nkt":4417,
"lam":4403,
"mia":4403,
"eld":4402,
"ksa":4397,
"_ev":4394,
"spo":4390,
"ipe":4377,
"alk":4364,
"unk":4362,
"nia":4361,
"plo":4361,
"nen":4354,
"pop":4349,
"als":4348,
"aza":4347,
"fun":4343,
"vi_":4329,
"_n_":4320,
"kte":4320,
"dep":4301,
"joj":4301,
"_co":4292,
"ezo":4290,
"rod":4276,
"von":4262,
"ea_":4253,
"rea":4249,
"oku":4243,
"cer":4223,
"mez":4223,
"sal":4204,
"mi_":4199,
"riz":4195,
"sil":4195,
"dir":4194,
"_m_":4190,
"gon":4186,
"\u011doj":4180,
"dik":4177,
"\u011den":4167,
"del":4161,
"aka":4156,
"mik":4147,
"tud":4138,
"_bl":4135,
"dem":4127,
"sma":4124,
"fic":4119,
"ego":4098,
"lem":4091,
"ave":4078,
"iis":4076,
"ire":4068,
"kad":4049,
"rne":4049,
"rof":4046,
"okc":4035,
"muz":4015,
"dat":4013,
"gni":4007,
"ngo":4000,
"kze":3997,
"o\u011da":3988,
"\u0109ar":3981,
"ane":3979,
"rap":3978,
"api":3977,
"rde":3969,
"rot":3968,
"rep":3954,
"ikt":3953,
"sul":3951,
"nej":3948,
"dua":3944,
"ek_":3932,
"zik":3927,
"amb":3899,
"vit":3897,
"kut":3887,
"kvi":3880,
"dor":3879,
"_et":3877,
"nar":3873,
"hun":3869,
"erb":3867,
"bru":3863,
"nic":3861,
"zen":3853,
"kit":3846,
"\u015di_":3841,
"ada":3837,
"eva":3817,
"nge":3801
};
LanguageIdentifier.addProfile('eo', ngrams, 16541099);
};
if (typeof(LanguageIdentifier) !== 'undefined') {exporter(LanguageIdentifier);};
if (typeof(require) !== 'undefined') {module.exports = exporter;}
