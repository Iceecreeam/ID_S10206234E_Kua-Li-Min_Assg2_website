/*set local storage for first-time users*/
if (window.localStorage.getItem("data") == null){
  dataInt()
}

/*function to set local storage for first time users (with or without generated transactions)*/
function dataInt() {
  
   /*dictionary of wallet and transaction data; would appear this way in local storage (formatted like sampleExpenses.json)*/
    var data={
        "Wallet":
        {
            "Food":{
                "budget":40,
                "icon":"images/wallet-icon/044-eat.png"
            },
            "Transport":{
                "budget":20,
                "icon":"images/wallet-icon/053-car.png"
            },
            "Recreation":{
                "budget":120,
                "icon":"images/wallet-icon/002-cloudy.png"
            },
            "Others":{
                "budget":100,
                "icon":"images/wallet-icon/017-tablet.png"
            }
        },
        "Trans":
        [
            {
                "wall":"Food",
                "name":"aute magna",
                "amt":46.83,
                "desc":"Reprehenderit commodo occaecat tempor tempor in in nisi occaecat sint sint Lorem Lorem.",
                "date":[19, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"excepteur reprehenderit",
                "amt":77.44,
                "desc":"Sint laboris Lorem do magna cillum officia.",
                "date":[1, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"esse aliquip",
                "amt":85.42,
                "desc":"Est labore cillum aliqua officia proident anim cillum quis est laboris sit tempor anim dolor.",
                "date":[2, 2, 2021]
             },
             {
                "wall":"Others",
                "name":"fugiat deserunt",
                "amt":45.09,
                "desc":"Excepteur reprehenderit id sit ullamco mollit non eu ullamco in ad ea cupidatat nulla.",
                "date":[29, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"labore ex",
                "amt":66.68,
                "desc":"Ullamco et nostrud velit esse commodo mollit.",
                "date":[29, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"magna non",
                "amt":22.87,
                "desc":"Sunt tempor in aliqua laboris ad quis ut mollit do sint.",
                "date":[5, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"dolor enim",
                "amt":87.09,
                "desc":"Officia consequat culpa commodo sit commodo adipisicing ad magna aliqua quis duis.",
                "date":[12, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"eu fugiat",
                "amt":88.27,
                "desc":"Esse velit velit sit est sunt culpa non mollit culpa eu.",
                "date":[5, 2, 2021]
             },
             {
                "wall":"Recreation",
                "name":"duis eiusmod",
                "amt":37.11,
                "desc":"Aute duis et enim excepteur ex minim labore ut ea labore.",
                "date":[30, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"labore minim",
                "amt":77.22,
                "desc":"Sit dolore culpa culpa sit exercitation voluptate ullamco pariatur elit elit cillum.",
                "date":[1, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"laborum exercitation",
                "amt":45.72,
                "desc":"Mollit est cillum consectetur voluptate velit exercitation commodo exercitation dolor incididunt aliquip eu.",
                "date":[13, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"ipsum do",
                "amt":52.73,
                "desc":"Et do labore duis aliquip esse minim amet consequat excepteur sit ea aliqua.",
                "date":[26, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"sit pariatur",
                "amt":89.24,
                "desc":"Ipsum incididunt ex voluptate eiusmod commodo incididunt culpa est et velit.",
                "date":[14, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"ipsum pariatur",
                "amt":11.08,
                "desc":"Eiusmod non enim Lorem ex cillum non ullamco eu fugiat aliqua.",
                "date":[8, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"peanuts",
                "amt":1.86,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[26, 12, 2020]
             },
             {
                "wall":"Transport",
                "name":"paper",
                "amt":62.65,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[20, 12, 2020]
             },
             {
                "wall":"Recreation",
                "name":"chalk",
                "amt":17.51,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[27, 12, 2020]
             },
             {
                "wall":"Transport",
                "name":"tie",
                "amt":16.96,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[11, 12, 2020]
             },
             {
                "wall":"Transport",
                "name":"window",
                "amt":14.48,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[25, 1, 2020]
             },
             {
                "wall":"Recreation",
                "name":"lace",
                "amt":46.37,
                "desc":"t amet,  olore eu fugiat nulla pariaconsectetur adipiscing elit, sed do eiusmod tempin reprein rnim ad minim veniam, .",
                "date":[11, 3, 2020]
             },
             {
                "wall":"Recreation",
                "name":"clippers",
                "amt":61.41,
                "desc":"Duis aute irure dosed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  nulla pariatur.",
                "date":[30, 8, 2020]
             },
             {
                "wall":"Recreation",
                "name":"book",
                "amt":58.17,
                "desc":"Lorem ipsum dolor si at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[29, 12, 2020]
             },
             {
                "wall":"Food",
                "name":"rubber",
                "amt":11.66,
                "desc":"Excepteur sint occaecat cupquis nostrud si ut aliquip ex ea commodo consequat ant mollit anim id est laborum.",
                "date":[15, 4, 2020]
             },
             {
                "wall":"Others",
                "name":"leg",
                "amt":68.03,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum exercitation ullamco laboris ni dtur.",
                "date":[29, 9, 2020]
             },
             {
                "wall":"Transport",
                "name":"tomato",
                "amt":33.25,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[1, 3, 2020]
             },
             {
                "wall":"Transport",
                "name":"packing",
                "amt":24.56,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[6, 2, 2020]
             },
             {
                "wall":"Transport",
                "name":"bottle",
                "amt":4.56,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[8, 8, 2020]
             },
             {
                "wall":"Recreation",
                "name":"toothbrush",
                "amt":27.44,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[3, 9, 2020]
             },
             {
                "wall":"Recreation",
                "name":"drill",
                "amt":83.20,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[24, 11, 2020]
             },
             {
                "wall":"Others",
                "name":"paper",
                "amt":37.54,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[18, 5, 2020]
             },
             {
                "wall":"Food",
                "name":"flag",
                "amt":70.45,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[27, 10, 2020]
             },
             {
                "wall":"Food",
                "name":"television",
                "amt":16.15,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[30, 1, 2020]
             },
             {
                "wall":"Others",
                "name":"plastic",
                "amt":8.20,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[18, 7, 2020]
             },
             {
                "wall":"Other",
                "name":"floor",
                "amt":83.94,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[31, 10, 2020]
             },
             {
                "wall":"Others",
                "name":"magnet",
                "amt":31.63,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[22, 3, 2020]
             },
             {
                "wall":"Food",
                "name":"hanger",
                "amt":8.77,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[4, 4, 2020]
             },
             {
                "wall":"Food",
                "name":"lights",
                "amt":8.71,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[23, 1, 2020]
             },
             {
                "wall":"Food",
                "name":"fake",
                "amt":38.65,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[9, 7, 2020]
             },
             {
                "wall":"Recreation",
                "name":"shirt",
                "amt":63.98,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[27, 10, 2020]
             },
             {
                "wall":"Recreation",
                "name":"credit",
                "amt":11.48,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[18, 12, 2020]
             },
             {
                "wall":"Other",
                "name":"seat",
                "amt":7.44,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[5, 3, 2020]
             },
             {
                "wall":"Recreation",
                "name":"sandal",
                "amt":66.78,
                "desc":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                "date":[19, 12, 2020]
             },
             {
                "wall":"Food",
                "name":"sponge",
                "amt":27.81,
                "desc":"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "date":[29, 10, 2020]
             },
             {
                "wall":"Others",
                "name":"chapter",
                "amt":13.73,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[2, 12, 2020]
             },
             {
                "wall":"Recreation",
                "name":"soy",
                "amt":54.96,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[5, 3, 2020]
             },
             {
                "wall":"Food",
                "name":"tire",
                "amt":49.20,
                "desc":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "date":[18, 7, 2020]
             },
             {
                "wall":"Others",
                "name":"ullamco ea",
                "amt":7.55,
                "desc":"Et qui cupidatat incididunt dolore amet ad aute officia voluptate eu tempor consequat non.",
                "date":[6, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"est labore",
                "amt":3.13,
                "desc":"Excepteur velit velit ullamco aute velit ipsum.",
                "date":[3, 2, 2021]
             },
             {
                "wall":"Transport",
                "name":"culpa ullamco",
                "amt":17.88,
                "desc":"Eiusmod veniam sit fugiat voluptate et qui tempor elit.",
                "date":[12, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"aliqua ea",
                "amt":39.86,
                "desc":"Ullamco labore aliqua in incididunt ipsum enim aliqua adipisicing occaecat non.",
                "date":[4, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"culpa minim",
                "amt":47.27,
                "desc":"Ex laborum qui cillum mollit.",
                "date":[20, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"voluptate nostrud",
                "amt":56.65,
                "desc":"Non esse magna deserunt veniam eu sint officia do mollit proident magna.",
                "date":[20, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"adipisicing sit",
                "amt":14.36,
                "desc":"Quis quis commodo nisi exercitation nulla eiusmod ea et enim.",
                "date":[1, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"commodo deserunt",
                "amt":26.85,
                "desc":"Aute veniam sit veniam sint minim elit.",
                "date":[7, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"dolore id",
                "amt":5.55,
                "desc":"Laborum quis in quis mollit aute sint nisi cupidatat minim ex.",
                "date":[28, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"in esse",
                "amt":47.66,
                "desc":"Officia nulla enim proident aliquip deserunt.",
                "date":[2, 2, 2021]
             },
             {
                "wall":"Others",
                "name":"aliquip aute",
                "amt":50.8,
                "desc":"Ullamco sint fugiat culpa sunt cillum Lorem.",
                "date":[19, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"cillum adipisicing",
                "amt":41.48,
                "desc":"Veniam nisi Lorem non enim tempor.",
                "date":[23, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"do deserunt",
                "amt":64.26,
                "desc":"Id officia voluptate veniam commodo tempor velit irure duis incididunt.",
                "date":[2, 2, 2021]
             },
             {
                "wall":"Transport",
                "name":"labore amet",
                "amt":85.98,
                "desc":"Officia mollit minim reprehenderit duis mollit irure aliqua adipisicing amet dolor cillum elit velit ipsum.",
                "date":[6, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"ipsum duis",
                "amt":73.52,
                "desc":"Est tempor veniam consectetur anim qui.",
                "date":[3, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"dolor quis",
                "amt":55.24,
                "desc":"Aliqua est laboris ad dolore adipisicing sint adipisicing eiusmod amet officia officia irure.",
                "date":[15, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"exercitation minim",
                "amt":79.31,
                "desc":"Sunt pariatur amet sunt velit nisi sit sit est.",
                "date":[4, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"nulla voluptate",
                "amt":88.56,
                "desc":"Officia laboris sint eiusmod dolor consequat sit esse adipisicing.",
                "date":[27, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"aliqua amet",
                "amt":39.48,
                "desc":"Cupidatat laborum ipsum exercitation eu Lorem excepteur.",
                "date":[22, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"do deserunt",
                "amt":37.72,
                "desc":"Excepteur tempor est exercitation ut sint do.",
                "date":[4, 2, 2021]
             },
             {
                "wall":"Food",
                "name":"duis fugiat",
                "amt":62.16,
                "desc":"Incididunt eu dolore mollit nisi enim velit nulla ullamco culpa.",
                "date":[6, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"irure et",
                "amt":56.64,
                "desc":"Cupidatat ea non occaecat ut non culpa.",
                "date":[6, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"deserunt deserunt",
                "amt":84.08,
                "desc":"Commodo id cupidatat ex pariatur.",
                "date":[28, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"labore id",
                "amt":55.81,
                "desc":"Tempor mollit mollit anim deserunt irure pariatur anim dolor ea consequat.",
                "date":[10, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"magna laborum",
                "amt":65.82,
                "desc":"Aute anim nisi quis ea Lorem adipisicing sit consectetur velit nisi Lorem mollit mollit do.",
                "date":[28, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"anim sunt",
                "amt":73.99,
                "desc":"Id labore aute cillum Lorem esse et enim exercitation est deserunt anim commodo quis.",
                "date":[8, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"proident nulla",
                "amt":28.6,
                "desc":"Cillum cillum elit in ad non ad et excepteur non laboris tempor aliqua.",
                "date":[16, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"occaecat incididunt",
                "amt":18.57,
                "desc":"Sit enim tempor aliqua magna.",
                "date":[7, 2, 2021]
             },
             {
                "wall":"Others",
                "name":"in ad",
                "amt":42.26,
                "desc":"Duis elit aliqua irure ullamco officia elit aliquip in excepteur consectetur dolor id.",
                "date":[17, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"culpa labore",
                "amt":19.36,
                "desc":"Non adipisicing nostrud aute Lorem id ea magna labore officia ex anim.",
                "date":[9, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"dolore ea",
                "amt":18.08,
                "desc":"Voluptate deserunt commodo occaecat ea veniam sint enim ex sint nulla dolore.",
                "date":[15, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"do est",
                "amt":23.11,
                "desc":"Est non eiusmod dolor magna culpa occaecat.",
                "date":[11, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"dolor consectetur",
                "amt":34.72,
                "desc":"Occaecat magna occaecat exercitation exercitation et occaecat Lorem laborum.",
                "date":[17, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"fugiat consequat",
                "amt":70.52,
                "desc":"Exercitation anim excepteur labore ut consectetur incididunt duis sint aliquip dolore est consectetur.",
                "date":[11, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"anim labore",
                "amt":71.38,
                "desc":"Reprehenderit ex elit incididunt veniam voluptate duis dolore est cupidatat ea.",
                "date":[19, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"excepteur qui",
                "amt":38.28,
                "desc":"Id consequat amet sint nostrud consequat consequat mollit culpa do consequat labore officia do.",
                "date":[25, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"ipsum voluptate",
                "amt":65.55,
                "desc":"Labore non et pariatur nostrud.",
                "date":[25, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"ullamco excepteur",
                "amt":14.02,
                "desc":"Quis anim nostrud tempor et consectetur ullamco labore cupidatat pariatur.",
                "date":[17, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"eu minim",
                "amt":71.06,
                "desc":"Labore cillum sit id pariatur officia magna ea.",
                "date":[21, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"laborum cillum",
                "amt":78.28,
                "desc":"Pariatur amet elit occaecat dolore consectetur non labore minim cillum.",
                "date":[3, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"dolore magna",
                "amt":66.83,
                "desc":"Aliquip anim mollit sit aute reprehenderit ex officia nisi cillum pariatur sunt.",
                "date":[1, 2, 2021]
             },
             {
                "wall":"Others",
                "name":"ipsum laborum",
                "amt":61.1,
                "desc":"Aliqua nulla aute consequat magna voluptate Lorem anim ex incididunt qui ex.",
                "date":[13, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"laborum dolor",
                "amt":58.07,
                "desc":"Commodo in consectetur in commodo consequat laborum ipsum deserunt veniam deserunt velit tempor adipisicing.",
                "date":[30, 1, 2021]
             },
             {
                "wall":"Recreation",
                "name":"non cupidatat",
                "amt":59.03,
                "desc":"Et mollit cillum aliqua sit Lorem velit nostrud ex pariatur ex minim ad.",
                "date":[18, 1, 2021]
             },
             {
                "wall":"Transport",
                "name":"et ex",
                "amt":62.55,
                "desc":"Irure est dolor sit ipsum cupidatat Lorem velit fugiat tempor elit esse anim.",
                "date":[4, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"do dolore",
                "amt":17.81,
                "desc":"Magna consectetur ullamco culpa exercitation laborum nisi.",
                "date":[3, 2, 2021]
             },
             {
                "wall":"Recreation",
                "name":"mollit duis",
                "amt":67.01,
                "desc":"Amet incididunt culpa mollit occaecat reprehenderit.",
                "date":[2, 1, 2021]
             },
             {
                "wall":"Food",
                "name":"ex et",
                "amt":6.44,
                "desc":"Proident reprehenderit duis magna ad.",
                "date":[7, 1, 2021]
             },
             {
                "wall":"Others",
                "name":"enim incididunt",
                "amt":37.52,
                "desc":"Pariatur labore eu cupidatat dolore do tempor qui sint ut aute aliquip laboris eiusmod.",
                "date":[7, 1, 2021]
             }
            
        ]
    }


    /*set the dates and positivity of transactions to be recent and realistic (change all the data to be dated the current month and year)*/
    for (const [key, value] of Object.entries(data["Trans"])) {
      var date = new Date().getDate()
      var month = new Date().getMonth()+1
      var year = new Date().getFullYear()

      if (Math.floor(Math.random() * 10) > 7){ /*change some of the months to the month before to be realistic*/
          month -= 1;
          if (month <= 0){ /*switch months less than or equal 0 to the year before*/
              month += 12
              year -= 1
          }
      }
      if (Math.floor(Math.random() * 10) > 4){ /*change some transactions to negative*/
         data["Trans"][key]["amt"] -= 2 * data["Trans"][key]["amt"]
     }
      data["Trans"][key]["date"] = [Math.floor(Math.random() * date) + 1, month, year]
    }


    /* \/ UNCOMMENT TO START WITH NO TRANSACTIONS*/
    /*delete data["Trans"]*/


    window.localStorage.setItem("data", JSON.stringify(data))
    console.log('localstorage updated')
}




/*get data from local storage and set variables*/
var wData = JSON.parse(window.localStorage.getItem("data"))
wall = wData['Wallet']
trans = wData['Trans']

/*change month in #topText*/
var mnthStr = {
    1:"January",
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December"
}
var thiMon = new Date().getMonth()+1
$( "#topText>div>p" ).text(mnthStr[thiMon])
  


/*WALLET SELECTION*/
/*display wallets*/
wallInt()
function wallInt() {
    $(".index-wallet-container").text(''); /*clear div*/
    for (const [key, value] of Object.entries(wall)) {/*insert wallets*/
        $(".index-wallet-container").append('<div class="col-md-3 col-sm-4 col-6 index-wall"><div class="panel"><div class="p-2 p-sm-3 p-lg-4 panel-body" style="background-color:#cccccc;border-radius:20px;"><img src="'
                                            + value['icon'] + '" class="img-responsive" style="width:100%;filter:invert(94%)" alt="Image"></div><p class="panel-footer">'
                                            + key + '</p></div></div>')
    }
}



/*INFORMATION TILES*/
var amtSp = 0
WBigP = []
for (i in wall){
   var BigP = 0
    for (x in trans){
       if((trans[x]['date'][1] == new Date().getMonth()+1) && i == trans[x]['wall'] && trans[x]['amt'] < 0){
          BigP -= trans[x]['amt']
       }
    }  
    WBigP.push([i, BigP])
    amtSp += BigP
 }
   $("#tot").html("$" + Math.round((amtSp + Number.EPSILON) * 100) / 100)

   $(".Food").css("width", WBigP[0][1]/amtSp + "%")
   $(".Transport").css("width", WBigP[1][1]/amtSp + "%")
   $(".Recreation").css("width", WBigP[2][1]/amtSp + "%")
   $(".Others").css("width", WBigP[3][1]/amtSp + "%")

/*change biggest purchase*/
var bigP = []
for (i in trans){
   if( trans[i]['date'][1] == new Date().getMonth()+1){
   bigP.push([trans[i]['amt'], trans[i]['name']])
   }
}
var biggest = bigP[0]
for (i in bigP){
   if (bigP[i][0] < biggest[0]){
      biggest = bigP[i]
   }
}

if (biggest[1].length >= 15){
   biggest[1] = biggest[1].slice(0, 12)
   biggest[1] += "..."
}     
$(".index-item>span").html(biggest[1])
$(".index-item>span.value").html("$" + -biggest[0])


/*change top wallet*/
var WBigP = []
for (i in wall){
  var cBigP = 0
   var bigP =0
   for (x in trans){
      if((trans[x]['date'][1] == new Date().getMonth()+1) && i == String(trans[x]['wall']) && trans[x]['amt'] < 0){
         bigP += trans[x]['amt']
         cBigP ++
      }
   }
   
   WBigP.push([i, bigP, cBigP])
}
var bigPur = WBigP[0]
for (i in WBigP){
   if (WBigP[i][1] < bigPur[1]){
      bigPur = [WBigP[i][0], WBigP[i][1]]
   }
}

bigPur[1] = Math.round((bigPur[1] + Number.EPSILON) * 100) / 100
$(".index-amountSpentWallet>.col-8").html(bigPur[0])
$(".index-amountSpentWallet>.value").html("$" + -bigPur[1])
/*currency converter tile*/

var bigPur = WBigP[0]
for (i in WBigP){
   if (WBigP[i][2] > bigPur[2]){
      bigPur = [WBigP[i][0], WBigP[i][2]]
   }
}

$(".index-purchaseQtyWallet>span.col-8").html(bigPur[0])
$(".index-purchaseQtyWallet>span.value").html(bigPur[1])



var curr = [] /*currency rates*/
/* fetch currency rates*/
currInt()
function currInt() {
      fetch("https://eservices.mas.gov.sg/api/action/datastore/search.json?resource_id=10eafb90-11a2-4fbd-b7a7-ac15a42d60b6&limit=1&sort=end_of_month desc")
         .then(response => response.json())
         .then(data => data['result']['records'][0])
         .then(function(data){

         /*modify json for use*/
         delete data['timestamp']
         delete data['preliminary']
         delete data['end_of_month']
         data.SGD = 1
         for (i in data){
            data[i] = Number(data[i])
            if (i.includes('100')){
               data[i] /= 100
            }
            var country = i.slice(0, 3).toUpperCase()
            curr.push([country, data[i]])
            $(".curDrop").append('<span class="dropdown-item dropCountry">'+country+'</span>');
         }
         })
}

/* format currency, here to function formatCurrencyInput(input, blur) from https://codepen.io/559wade/pen/LRzEjj */
$("input[data-type='currency']").on({
   keyup: function() {
     formatCurrencyInput($(this));
   },
   blur: function() { 
     formatCurrencyInput($(this), "blur");
   }
});
function formatNumber(n) {
 // format number 1000000 to 1,234,567
 return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function formatCurrencyInput(input, blur) {
 // appends $ to value, validates decimal side
 // and puts cursor back in right position.
 
 // get input value
 var input_val = input.val();
 
 // don't validate empty input
 if (input_val === "") { return; }
 
 // original length
 var original_len = input_val.length;

 // initial caret position 
 var caret_pos = input.prop("selectionStart");
   
 // check for decimal
 if (input_val.indexOf(".") >= 0) {

   // get position of first decimal
   // this prevents multiple decimals from
   // being entered
   var decimal_pos = input_val.indexOf(".");

   // split number by decimal point
   var left_side = input_val.substring(0, decimal_pos);
   var right_side = input_val.substring(decimal_pos);

   // add commas to left side of number
   left_side = formatNumber(left_side);

   // validate right side
   right_side = formatNumber(right_side);
   
   // On blur make sure 2 numbers after decimal
   if (blur === "blur") {
     right_side += "00";
   }
   
   // Limit decimal to only 2 digits
   right_side = right_side.substring(0, 2);

   // join number by .
   input_val = "$" + left_side + "." + right_side;

 } else {
   // no decimal entered
   // add commas to number
   // remove all non-digits
   input_val = formatNumber(input_val);
   input_val = "$" + input_val;
   
   // final formatting
   if (blur === "blur") {
     input_val += ".00";
   }
 }
 
 // send updated string to input
 input.val(input_val);

 // put caret back in the right position
 var updated_len = input_val.length;
 caret_pos = updated_len - original_len + caret_pos;
 input[0].setSelectionRange(caret_pos, caret_pos);
}

/*modified code from from https://codepen.io/559wade/pen/LRzEjj, formats currency from float into string*/
function formatCurrency(input_val){
 // appends $ to value, validates decimal side
 // and puts cursor back in right position.
 input_val = String(Math.round((input_val + Number.EPSILON) * 100) / 100)
 

   
 // check for decimal
 if (input_val.indexOf(".") >= 0) {

   // get position of first decimal
   // this prevents multiple decimals from
   // being entered
   var decimal_pos = input_val.indexOf(".");

   // split number by decimal point
   var left_side = input_val.substring(0, decimal_pos);
   var right_side = input_val.substring(decimal_pos);

   // add commas to left side of number
   left_side = formatNumber(left_side);

   // validate right side
   right_side = formatNumber(right_side);
   
   //  make sure 2 numbers after decimal
   right_side += "00";
   
   // Limit decimal to only 2 digits
   right_side = right_side.substring(0, 2);

   // join number by .
   input_val = "$" + left_side + "." + right_side;

 } else {
   // no decimal entered
   // add commas to number
   // remove all non-digits
   input_val = formatNumber(input_val);
   input_val = "$" + input_val;
   
   // final formatting
   input_val += ".00";
 }
 return input_val
}

/*change innerhtml of drowpdown button to selected country*/
$(document).on("click", ".dropCountry" , function() {
   ($(this).parent().siblings("button")).text($(this).text())
})

/*width of device*/

$(document).on("click", ".dropCountry" , function() {
   ($(this).parent().parent().siblings('form').children('input')).val("")
})

/*clear other input when focus is on one)*/
$('.curFor>input').focus(function () {
   $($(this).parent().parent().siblings(".currVald").children('form').children('input')).val("")
})

/*when convert button is pressed*/
var val = ''
$(document).on("click", ".conButt" , function() {
   $(".curFor>input").each(function()
   {
      
      if ($(this).val() != ''){
         country = $(this).parent().parent().children(".dropup>.button")['prevObject'][0]['innerText'].slice(0,3)
         othCountry = $(this).parent().parent().siblings(".currVald").children(".dropup>.button")['prevObject'][0]['innerText'].slice(0,3)
         
         for (i in curr){
            if (curr[i][0] == country)
            {
               country = curr[i][1]
            }
            if (curr[i][0] == othCountry)
            {
               othCountry = curr[i][1]
            }
         }
         var valu = $(this).val()
         val = (Number(valu.replace(/[$,]/g, '')) / othCountry) * country

         
         $("input").not(this).val(formatCurrency(val))
      }
   });
   $(".conButt").blur()
})

var news = []
/*business news*/
busInt()
function busInt() {
         /*https://stackoverflow.com/questions/61951713/problem-with-cors-policy-when-making-a-request-to-https-newsapi-org*/
         const proxyUrl = "https://cors-anywhere.herokuapp.com/"
         const url = `${proxyUrl}https://www.channelnewsasia.com/rssfeeds/8395954`;
         const request = new Request(url);
         
         /*https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
         fetch news*/
         fetch(url)
         .then(response => response.text())
         .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
         .then(function(data){  
         var channel = data.querySelectorAll("channel")[0]
         $("#update").text(channel.querySelectorAll("lastBuildDate")[0].innerHTML) /*change updated date*/

            
         /*update articles*/
         $(".news>button").remove(); /*clear div*/
         var arti = channel.querySelectorAll("item")
         var rand = Math.floor(Math.random() * 3) + 1 /*randomise articles*/
         var rand1 = Math.floor(Math.random() * 10) + 1 /*randomise articles*/
         for (p = 0; p < 4; p++){
            /*get relevant variables*/
            var tit = arti[(p + rand1) * rand].querySelectorAll("title")[0].innerHTML
            var tim = new Date().getHours() - Number(arti[(p + rand1) * rand].querySelectorAll("pubDate")[0].innerHTML.slice(17,19))
            var pic = String(arti[(p + rand1) * rand].querySelectorAll("thumbnail")[0]['attributes'][2]['value'])
            var lin = arti[(p + rand1) * rand].querySelectorAll("link")[0].innerHTML


            /*shorten title if needed*/
            if (tit.length >= 70){
               tit = tit.slice(0, 67)
               tit += "..."
            }            
            
            
            /*modify time if needed*/
            var suff = " hour"
            if (tim > 1){
               suff += "s"
            }
            if (tim < 0){
               var month=  arti[(p + rand1) * rand].querySelectorAll("pubDate")[0].innerHTML.slice(8, 11)
               var year =  arti[(p + rand1) * rand].querySelectorAll("pubDate")[0].innerHTML.slice(12,16)
               var day = arti[(p + rand1) * rand].querySelectorAll("pubDate")[0].innerHTML.slice(5,7)
               

               for (i in mnthStr){
                  if (mnthStr[i].includes(month)){
                     month = i
                  }
               }
               tim = Math.floor((new Date() - new Date(month + "/" + day + "/" + year))/ (1000 * 3600 * 24))
               suff = " day"
               if (tim > 1){
                  suff += "s"
               } 
            }

            

            if ((tim + suff) == "0 hour"){
               tim = "This Just"
               suff = " In! "

            }
            else{
               suff += " ago"
            }

               
            /*add title and link to news list*/
            news.push([tit, lin])
            /*create articles*/
            $( '<button class="col-12 d-flex flex-nowrap my-5 my-sm-3 mr-3 px-4 px-sm-5 border-0 h-100 rounded text-left bg-transparent art"><span class="col-8 col-sm-9 p-0 headline"><span class="col-12 d-block m-0 sou">'
            + tim + suff + '<b> | </b></span><span class="col-12 p-0 pb-2 tit">'
            + tit + '</span></span><span class="col-4 d-flex col-sm-3 p-0 h-100 w-100 ml-1 justify-content-center"><img src="'
            + pic + '" alt="photo"></span></button>' ).insertBefore(".upTxt")
               
            }
         

      })
}
/*if news article is clicked*/
$(document).on("click", ".art" , function() { /*https://www.tutorialrepublic.com/faq/how-to-bind-click-event-to-dynamically-added-elements-in-jquery.php*/
   for (i = 0; i < news.length; i++){
      if (news[i][0] == this.innerHTML.slice(this.innerHTML.indexOf('tit">') + 5, this.innerHTML.indexOf('</span></span><span')))
      {
         open(news[i][1], "blank_")
         this.blur()
         break
      }
   }
})



/*if plus button is pressed*/
$(document).on("click", ".plus" , function() {

})


/*input transaction data into graph*/
var graph = []
for(i=0; i<new Date().getDate(); i++){
   graph.push([i+1,0,0,0])
}


/*update graph*/
graphData()
function graphData(){
   for(i=0; i<trans.length; i++)
   {
      tran = trans[i]
      if( tran['date'][1] == new Date().getMonth()+1){
        graph[tran['date'][0] - 1][1] += tran['amt']
        if (tran['amt'] <= 0){
         graph[tran['date'][0] - 1][3] -= tran['amt']
        }
        else{
         graph[tran['date'][0] - 1][2] += tran['amt']
        }
      }
   }
}

for(i=0; i<graph.length; i++){
   for(x=0; x<graph[i].length; x++){
      graph[i][x] = Math.round((graph[i][x] + Number.EPSILON) * 100) / 100
   }
}

/*add values to line graph*/
initgraph()
function initgraph() {
          google.charts.load('current', {packages: ['corechart', 'line']});

          google.charts.setOnLoadCallback(indexflowday);
          function indexflowday() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'day');
                data.addColumn('number', 'nett');
                data.addColumn('number', 'gain');
                data.addColumn('number', 'lost');

                data.addRows(graph);

                var options = {    
                hAxis: {title: 'Dollar'},
                vAxis: {title: 'Day'},
                backgroundColor: { fill:'transparent' }
                };

                var chart = new google.visualization.LineChart(document.getElementById('index-flowday'));

                chart.draw(data, options);
              }
}



