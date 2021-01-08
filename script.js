/*set local storage for first-time users*/
if (window.localStorage.getItem("data") == null){
  dataInt()
}


/*function to set local storage for first time users*/
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
[
   {
      "wall":"Transport",
      "name":"proident nulla",
      "amt":28.6,
      "desc":"Cillum cillum elit in ad non ad et excepteur non laboris tempor aliqua.",
      "date":[16, 1, 2021]
   },
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
        ]
    }



    /*set the dates of transactions to be recent and realistic (change all the data to be dated the current month and year)*/
    for (const [key, value] of Object.entries(data["Trans"])) {
      var date = new Date().getDate()
      var month = new Date().getMonth()+1
      var year = new Date().getFullYear()

      if (Math.floor(Math.random() * 10) > 7){ /*change some of the months to the month before to be realistic*/
          month -= 1;
          if (month <= 0){ /*switch months less than ot equal 0 to the year before*/
              month += 12
              year -= 1
          }

      }
      data["Trans"][key]["date"] = [Math.floor(Math.random() * date) + 1, month, year]
    }

    /* \/ UNCOMMENT TO START WITH NO TRANSACTIONS*/
    /*delete data["Trans"]*/


    window.localStorage.setItem("data", JSON.stringify(data))
    console.log('localstorage updated')
}


/*get data from local storage and set variables*/
var data = JSON.parse(window.localStorage.getItem("data"))
wall = data['Wallet']
trans = data['Trans']


/*WALLET SELECYITION*/
/*display wallets*/
$(".index-wallet-container").text(''); /*clear div*/
for (const [key, value] of Object.entries(wall)) {/*insert wallets*/
    $(".index-wallet-container").append('<div class="col-md-3 col-sm-4 col-6 index-wall"><div class="panel"><div class="p-2 p-sm-3 p-lg-4 panel-body" style="background-color:#cccccc;border-radius:20px;"><img src="'
                                        + value['icon'] + '" class="img-responsive" style="width:100%;filter:invert(94%)" alt="Image"></div><p class="panel-footer">'
                                        + key + '</p></div></div>')
}



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













/*add values to line graph*/
initgraph()
function initgraph() {
          google.charts.load('current', {packages: ['corechart', 'line']});

          google.charts.setOnLoadCallback(indexflowday);
          function indexflowday() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'X');
                data.addColumn('number', 'Dogs');

                data.addRows([
                  [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
                  [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
                  [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
                  [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
                  [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
                  [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
                  [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
                  [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
                  [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
                  [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
                  [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
                  [66, 70], [67, 72], [68, 75], [69, 80]
                ]);

                var options = {
                  hAxis: {
                    title: 'Time'
                  },
                  vAxis: {
                    title: 'Popularity'
                  }
                };

                var chart = new google.visualization.LineChart(document.getElementById('index-flowday'));

                chart.draw(data, options);
              }
}

