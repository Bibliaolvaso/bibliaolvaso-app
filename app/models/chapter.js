var attr = DS.attr;

var Chapter = DS.Model.extend({
  bible: attr('string'),
  book_title: attr('string'),
  book: attr('number'),
  chapter: attr('number'),
  abbr: attr('string'),
  verses: attr()
});

Chapter.FIXTURES = [
  {
    "id" : "ujforditas_01002",
    "chapter" : 2,
    "book_title" : "Mózes első könyve (Genezis)",
    "bible" : "ujforditas",
    "verses" : [
      {
        "n" : 1,
        "title" : "A teremtés hetedik napja",
        "text" : "Így készült el a menny és a föld és minden seregük."
      },
      {
        "n" : 2,
        "text" : "A hetedik napra elkészült Isten a maga munkájával, amelyet alkotott, és megpihent a hetedik napon egész alkotó munkája után."
      },
      {
        "n" : 3,
        "text" : "Azután megáldotta és megszentelte Isten a hetedik napot, mivel azon pihent meg Isten egész teremtő és alkotó munkája után."
      },
      {
        "n" : 4,
        "title" : "Az első ember az Éden kertjében",
        "text" : "Ez a menny és föld teremtésének a története.<title>Amikor az Úristen a földet és a mennyet megalkotta,"
      },
      {
        "n" : 5,
        "text" : "még semmiféle mezei fű nem volt a földön, és semmiféle mezei növény nem hajtott ki, mert az Úristen még nem bocsátott esőt a földre. Ember sem volt, aki a termőföldet megművelje."
      },
      {
        "n" : 6,
        "text" : "Akkor pára szállt fel a földről, és mindenütt átitatta a termőföld felszínét."
      },
      {
        "n" : 7,
        "text" : "Azután megformálta az Úristen az embert a föld porából, és élet leheletét lehelte orrába. Így lett az ember élőlénnyé."
      },
      {
        "n" : 8,
        "text" : "Ültetett az Úristen egy kertet Édenben, keleten, és ott helyezte el az embert, akit formált."
      },
      {
        "n" : 9,
        "text" : "Sarjasztott az Úristen a termőföldből mindenféle fát, szemre kívánatosat és eledelre jót; az élet fáját is a kert közepén, meg a jó és a rossz tudásának fáját."
      },
      {
        "n" : 10,
        "text" : "Édenből pedig folyó jött ki a kert megöntözésére, amely onnan szétágazott, és négy ágra szakadt."
      },
      {
        "n" : 11,
        "text" : "Egyiknek Písón a neve. Ez megkerüli Havílá egész földjét, ahol arany van."
      },
      {
        "n" : 12,
        "text" : "Ennek a földnek az aranya jó. Van ott illatos gyanta és ónixkő."
      },
      {
        "n" : 13,
        "text" : "A második folyónak Gíhón a neve. Ez megkerüli Kús egész földjét."
      },
      {
        "n" : 14,
        "text" : "A harmadik folyónak Hiddekel a neve. Ez Assúr keleti részén folyik. A negyedik folyó pedig az Eufrátesz."
      },
      {
        "n" : 15,
        "text" : "És fogta az Úristen az embert, elhelyezte az Éden kertjében, hogy azt művelje és őrizze."
      },
      {
        "n" : 16,
        "text" : "Ezt parancsolta az Úristen az embernek: A kert minden fájáról szabadon ehetsz,"
      },
      {
        "n" : 17,
        "text" : "de a jó és a rossz tudásának fájáról nem ehetsz, mert ha eszel róla, meg kell halnod."
      },
      {
        "n" : 18,
        "text" : "Azután ezt mondta az Úristen: Nem jó az embernek egyedül lenni, alkotok hozzáillő segítőtársat."
      },
      {
        "n" : 19,
        "text" : "Formált tehát az Úristen a földből mindenféle mezei állatot, mindenféle égi madarat, és odavitte az emberhez, hogy lássa, minek nevezi; mert minden élőlénynek az a neve, aminek az ember nevezi."
      },
      {
        "n" : 20,
        "text" : "Így adott az ember nevet minden állatnak, az égi madaraknak és minden mezei élőlénynek, de az emberhez illő segítőtársat nem talált."
      },
      {
        "n" : 21,
        "text" : "Mély álmot bocsátott azért az Úristen az emberre, és az elaludt. Akkor kivette az egyik oldalbordáját, és húst tett a helyére."
      },
      {
        "n" : 22,
        "text" : "Az emberből kivett oldalbordát asszonnyá formálta az Úristen, és odavitte az emberhez."
      },
      {
        "n" : 23,
        "text" : "Akkor ezt mondta az ember: Ez most már csontomból való csont, testemből való test. Asszonyember legyen a neve: mert férfiemberből vétetett."
      },
      {
        "n" : 24,
        "text" : "Ezért a férfi elhagyja apját és anyját, ragaszkodik feleségéhez, és lesznek egy testté."
      },
      {
        "n" : 25,
        "text" : "Még mindketten mezítelenek voltak: az ember és a felesége; de nem szégyellték magukat."
      }
    ],
    "abbr" : "1Móz 2",
    "book" : 1
  },

  {
    "id" : "karoli_19023",
    "bible" : "karoli",
    "verses" : [
      {
        "n" : 1,
        "text" : "Dávid zsoltára. Az Úr az én pásztorom; nem szűkölködöm."
      },
      {
        "n" : 2,
        "text" : "Fűves legelőkön nyugtat engem, <em>és</em> csendes vizekhez terelget engem."
      },
      {
        "n" : 3,
        "text" : "Lelkemet megvidámítja, az igazság ösvényein vezet engem az ő nevéért."
      },
      {
        "n" : 4,
        "text" : "Még ha a halál árnyékának völgyében járok is, nem félek a gonosztól, mert te velem vagy; a te veszsződ és botod, azok vigasztalnak engem."
      },
      {
        "n" : 5,
        "text" : "Asztalt terítesz nékem az én ellenségeim előtt; elárasztod fejem olajjal; csordultig van a poharam."
      },
      {
        "n" : 6,
        "text" : "Bizonyára jóságod és kegyelmed követnek engem életem minden napján, s az Úr házában lakozom hosszú ideig."
      }
    ],
    "chapter" : 23,
    "book_title" : "Zsoltárok könyve",
    "abbr" : "Zsolt 23",
    "book" : 19
  },

  {
    "id" : "ujforditas_19023",
    "chapter" : 23,
    "book_title" : "A zsoltárok könyve",
    "bible" : "ujforditas",
    "verses" : [
      {
        "n" : 1,
        "title" : "A jó pásztor",
        "text" : "Dávid zsoltára. Az Úr az én pásztorom, nem szűkölködöm."
      },
      {
        "n" : 2,
        "text" : "Füves legelőkön terelget, csendes vizekhez vezet engem."
      },
      {
        "n" : 3,
        "text" : "Lelkemet felüdíti, igaz ösvényen vezet az ő nevéért."
      },
      {
        "n" : 4,
        "text" : "Ha a halál árnyéka völgyében járok is, nem félek semmi bajtól, mert te velem vagy: vessződ és botod megvigasztal engem."
      },
      {
        "n" : 5,
        "text" : "Asztalt terítesz nekem ellenségeim szeme láttára. Megkened fejemet olajjal, csordultig van poharam."
      },
      {
        "n" : 6,
        "text" : "Bizony, jóságod és szereteted kísér életem minden napján, és az Úr házában lakom egész életemben."
      }
    ],
    "abbr" : "Zsolt 23",
    "book" : 19
  },

  {
    "id" : "ujforditas_43001",
    "chapter" : 1,
    "book_title" : "János evangéliuma",
    "bible" : "ujforditas",
    "verses" : [
      {
        "n" : 1,
        "title" : "Az Ige testté lett",
        "text" : "Kezdetben volt az Ige, és az Ige Istennél volt, és Isten volt az Ige."
      },
      {
        "n" : 2,
        "text" : "Ő kezdetben az Istennél volt."
      },
      {
        "n" : 3,
        "text" : "Minden általa lett, és nélküle semmi sem lett, ami létrejött."
      },
      {
        "n" : 4,
        "text" : "Benne élet volt, és az élet volt az emberek világossága."
      },
      {
        "n" : 5,
        "text" : "A világosság a sötétségben fénylik, de a sötétség nem fogadta be."
      },
      {
        "n" : 6,
        "text" : "Megjelent egy ember, akit Isten küldött, akinek a neve János."
      },
      {
        "n" : 7,
        "text" : "Ő tanúként jött, hogy bizonyságot tegyen a világosságról, és hogy mindenki higgyen általa."
      },
      {
        "n" : 8,
        "text" : "Nem ő volt a világosság, de a világosságról kellett bizonyságot tennie."
      },
      {
        "n" : 9,
        "text" : "Az Ige volt az igazi világosság, amely megvilágosít minden embert: ő jött el a világba."
      },
      {
        "n" : 10,
        "text" : "A világban volt, és a világ általa lett, de a világ nem ismerte meg őt:"
      },
      {
        "n" : 11,
        "text" : "saját világába jött, és az övéi nem fogadták be őt."
      },
      {
        "n" : 12,
        "text" : "Akik pedig befogadták, azokat felhatalmazta arra, hogy Isten gyermekeivé legyenek; mindazokat, akik hisznek az ő nevében,"
      },
      {
        "n" : 13,
        "text" : "akik nem vérből, sem a test, sem a férfi akaratából, hanem Istentől születtek."
      },
      {
        "n" : 14,
        "text" : "Az Ige testté lett, közöttünk lakott, és láttuk az ő dicsőségét, mint az Atya egyszülöttjének dicsőségét, telve kegyelemmel és igazsággal."
      },
      {
        "n" : 15,
        "text" : "János bizonyságot tett róla, és azt hirdette: \"Ő volt az, akiről megmondtam: Aki utánam jön, megelőz engem, mert előbb volt, mint én.\""
      },
      {
        "n" : 16,
        "text" : "Mi pedig valamennyien az ő teljességéből kaptunk kegyelmet kegyelemre."
      },
      {
        "n" : 17,
        "text" : "Mert a törvény Mózes által adatott, a kegyelem és az igazság Jézus Krisztus által jelent meg."
      },
      {
        "n" : 18,
        "text" : "Istent soha senki sem látta: az egyszülött Isten, aki az Atya kebelén van, az jelentette ki őt."
      },
      {
        "n" : 19,
        "title" : "Keresztelő János bizonyságtétele",
        "text" : "Ez János bizonyságtétele. Amikor a zsidók papokat és lévitákat küldtek hozzá Jeruzsálemből, hogy megkérdezzék tőle: \"Ki vagy te?\""
      },
      {
        "n" : 20,
        "text" : "Akkor vallott, és nem tagadott. Ezt vallotta: \"Én nem a Krisztus vagyok.\""
      },
      {
        "n" : 21,
        "text" : "Erre megkérdezték tőle: \"Hát akkor? Illés vagy te?\" De kijelentette: \"Nem az vagyok.\" - \"A próféta vagy te?\" Így válaszolt: \"Nem.\""
      },
      {
        "n" : 22,
        "text" : "Ezt mondták tehát: \"Ki vagy? - hogy választ adhassunk megbízóinknak: mit mondasz magadról?\""
      },
      {
        "n" : 23,
        "text" : "Erre ő így felelt: \"Én kiáltó hang vagyok a pusztában: készítsetek egyenes utat az Úrnak, ahogyan Ézsaiás próféta megmondta.\""
      },
      {
        "n" : 24,
        "text" : "A küldöttek között voltak farizeusok is,"
      },
      {
        "n" : 25,
        "text" : "és ezek tovább kérdezték őt: \"Miért keresztelsz tehát, ha nem te vagy a Krisztus, sem Illés, sem pedig a próféta?\""
      },
      {
        "n" : 26,
        "text" : "János így válaszolt nekik: \"Én vízzel keresztelek. De közöttetek áll az, akit ti nem ismertek,"
      },
      {
        "n" : 27,
        "text" : "aki utánam jön, és akinek saruja szíját megoldani sem vagyok méltó.\""
      },
      {
        "n" : 28,
        "text" : "Ez Betániában történt, a Jordánon túl, ahol János keresztelt."
      },
      {
        "n" : 29,
        "text" : "Másnap János látta Jézust, amint jön felé, és így szólt: \"Íme, az Isten Báránya, aki hordozza a világ bűnét!"
      },
      {
        "n" : 30,
        "text" : "Ő az, akiről én megmondtam: Utánam jön egy férfi, aki megelőzött engem, mert előbb volt, mint én."
      },
      {
        "n" : 31,
        "text" : "Én nem ismertem őt, de azért jöttem, és azért keresztelek vízzel, hogy ismertté legyen Izráel előtt.\""
      },
      {
        "n" : 32,
        "text" : "Így tett erről bizonyságot János: \"Láttam, hogy a Lélek leszállt az égből, mint egy galamb, és megnyugodott rajta."
      },
      {
        "n" : 33,
        "text" : "Én nem ismertem őt, de aki elküldött engem, hogy vízzel kereszteljek, ő mondta nekem: Akire látod a Lelket leszállni és megnyugodni rajta, ő az, aki Szentlélekkel keresztel."
      },
      {
        "n" : 34,
        "text" : "Én láttam, és bizonyságot tettem arról, hogy ez az Isten Fia.\""
      },
      {
        "n" : 35,
        "title" : "Jézus első követői",
        "text" : "Másnap ismét ott állt János két tanítványával együtt,"
      },
      {
        "n" : 36,
        "text" : "és rátekintve Jézusra, aki arra járt, így szólt: \"Íme, az Isten Báránya!\""
      },
      {
        "n" : 37,
        "text" : "Meghallotta a két tanítvány, hogy ő ezt mondta, és követték Jézust."
      },
      {
        "n" : 38,
        "text" : "Jézus megfordult, és amikor meglátta, hogy követik őt, megszólította őket: \"Mit kerestek?\" Ők pedig ezt válaszolták: \"Rabbi - ami azt jelenti: Mester -, hol van a lakásod?\""
      },
      {
        "n" : 39,
        "text" : "Ő így szólt: \"Jöjjetek, és meglátjátok.\" Elmentek tehát, meglátták, hol lakik, és nála maradtak azon a napon; körülbelül délután négy óra volt ekkor."
      },
      {
        "n" : 40,
        "text" : "A kettő közül, akik ezt hallották Jánostól és követték őt, András, Simon Péter testvére volt az egyik."
      },
      {
        "n" : 41,
        "text" : "Ő, mihelyt találkozott testvérével, Simonnal, ezt mondta neki: \"Megtaláltuk a Messiást\" - (ami azt jelenti: Felkent)."
      },
      {
        "n" : 42,
        "text" : "Odavitte Jézushoz, aki rátekintve így szólt: \"Te Simon vagy, Jóna fia: téged Kéfásnak fognak hívni\" - (ami azt jelenti: Kőszikla)."
      },
      {
        "n" : 43,
        "text" : "Másnap Jézus Galileába akart indulni. Ekkor találkozott Fülöppel, és így szólt hozzá: \"Kövess engem!\""
      },
      {
        "n" : 44,
        "text" : "Fülöp pedig Bétsaidából származott, András és Péter városából."
      },
      {
        "n" : 45,
        "text" : "Fülöp találkozott Nátánaéllel, és így szólt hozzá: \"Megtaláltuk azt, akiről Mózes írt a törvényben, akiről a próféták is írtak: Jézust, a József fiát, aki Názáretből származik.\""
      },
      {
        "n" : 46,
        "text" : "\"Származhat-e valami jó Názáretből?\" - kérdezte tőle Nátánaél. Fülöp így válaszolt: \"Jöjj, és lásd meg!\""
      },
      {
        "n" : 47,
        "text" : "Amikor Jézus látta, hogy Nátánaél közeledik feléje, azt mondta róla: \"Íme, egy igazi izráelita, akiben nincsen álnokság.\""
      },
      {
        "n" : 48,
        "text" : "Nátánaél megkérdezte tőle: \"Honnan ismersz engem?\" Jézus így válaszolt neki: \"Mielőtt Fülöp idehívott, láttam, hogy a fügefa alatt voltál.\""
      },
      {
        "n" : 49,
        "text" : "Nátánaél így szólt hozzá: \"Mester, te vagy az Isten Fia, te vagy Izráel királya!\""
      },
      {
        "n" : 50,
        "text" : "Jézus így válaszolt neki: \"Mivel azt mondtam neked, hogy láttalak a fügefa alatt, hiszel? Ennél nagyobb dolgokat fogsz látni.\""
      },
      {
        "n" : 51,
        "text" : "És hozzátette: \"Bizony, bizony, mondom néktek: meglátjátok a megnyílt eget és az Isten angyalait, amint felszállnak, és leszállnak az Emberfiára.\""
      }
    ],
    "abbr" : "Jn 1",
    "book" : 43
  },

  {
    "id" : "ujforditas_46013",
    "abbr" : "1Kor 13",
    "bible" : "ujforditas",
    "book" : 46,
    "book_title" : "Pál első levele a korinthusiakhoz",
    "chapter" : 13,
    "verses" : [
      {
        "n" : 1,
        "title" : "A szeretet",
        "text" : "Ha emberek vagy angyalok nyelvén szólok is, szeretet pedig nincs bennem, olyanná lettem, mint a zengő érc vagy pengőcimbalom."
      },
      {
        "n" : 2,
        "text" : "És ha prófétálni is tudok, ha minden titkot ismerek is, és minden bölcsességnek birtokában vagyok, és ha teljes hitem van is, úgyhogy hegyeket mozdíthatok el, szeretet pedig nincs bennem: semmi vagyok."
      },
      {
        "n" : 3,
        "text" : "És ha szétosztom az egész vagyonomat, és testem tűzhalálra szánom, szeretet pedig nincs bennem: semmi hasznom abból."
      },
      {
        "n" : 4,
        "text" : "A szeretet türelmes, jóságos; a szeretet nem irigykedik, a szeretet nem kérkedik, nem fuvalkodik fel."
      },
      {
        "n" : 5,
        "text" : "Nem viselkedik bántóan, nem keresi a maga hasznát, nem gerjed haragra, nem rója fel a rosszat."
      },
      {
        "n" : 6,
        "text" : "Nem örül a hamisságnak, de együtt örül az igazsággal."
      },
      {
        "n" : 7,
        "text" : "Mindent elfedez, mindent hisz, mindent remél, mindent eltűr."
      },
      {
        "n" : 8,
        "text" : "A szeretet soha el nem múlik. De legyen bár prófétálás: el fog töröltetni; legyen nyelveken való szólás: meg fog szűnni; legyen ismeret: el fog töröltetni."
      },
      {
        "n" : 9,
        "text" : "Mert töredékes az ismeretünk, és töredékes a prófétálásunk."
      },
      {
        "n" : 10,
        "text" : "Amikor pedig eljön a tökéletes, eltöröltetik a töredékes."
      },
      {
        "n" : 11,
        "text" : "Amikor gyermek voltam, úgy szóltam, mint gyermek, úgy éreztem, mint gyermek, úgy gondolkoztam, mint gyermek; amikor pedig férfivá lettem, elhagytam a gyermeki dolgokat."
      },
      {
        "n" : 12,
        "text" : "Mert most tükör által homályosan látunk, akkor pedig színről színre; most töredékes az ismeretem, akkor pedig úgy fogok ismerni, ahogyan engem is megismert az Isten."
      },
      {
        "n" : 13,
        "text" : "Most azért megmarad a hit, a remény, a szeretet, e három; ezek közül pedig a legnagyobb a szeretet."
      }
    ]
  }
];

export default Chapter;
