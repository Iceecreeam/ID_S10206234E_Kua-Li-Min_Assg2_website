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
                "icon":"images/wallet-icon/017-eat.png"
            }
        },
        "Trans":
        [
            {
              "wall": "Recreation",
              "name": "peanuts",
              "amt": 1.86,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [26, 0, 20]
           },
           {
              "wall": "Transport",
              "name": "paper",
              "amt": 62.65,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [20, 0, 20]
           },
           {
              "wall": "Recreation",
              "name": "chalk",
              "amt": 17.51,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [27, 0, 20]
           },
           {
              "wall": "Transport",
              "name": "tie",
              "amt": 16.96,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [11, 0, 20]
           },
           {
              "wall": "Transport",
              "name": "window",
              "amt": 14.48,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [25, 1, 20]
           },
           {
              "wall": "Recreation",
              "name": "lace",
              "amt": 46.37,
              "desc": "t amet,  olore eu fugiat nulla pariaconsectetur adipiscing elit, sed do eiusmod tempin reprein rnim ad minim veniam, .",
              "date": [11, 3, 20]
           },
           {
              "wall": "Recreation",
              "name": "clippers",
              "amt": 61.41,
              "desc": "Duis aute irure dosed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  nulla pariatur.",
              "date": [30, 8, 20]
           },
           {
              "wall": "Recreation",
              "name": "book",
              "amt": 58.17,
              "desc": "Lorem ipsum dolor si at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [29, 12, 20]
           },
           {
              "wall": "Food",
              "name": "rubber",
              "amt": 11.66,
              "desc": "Excepteur sint occaecat cupquis nostrud si ut aliquip ex ea commodo consequat ant mollit anim id est laborum.",
              "date": [15, 4, 20]
           },
           {
              "wall": "Others",
              "name": "leg",
              "amt": 68.03,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum exercitation ullamco laboris ni dtur.",
              "date": [29, 9, 20]
           },
           {
              "wall": "Transport",
              "name": "tomato",
              "amt": 33.25,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [1, 3, 20]
           },
           {
              "wall": "Transport",
              "name": "packing",
              "amt": 24.56,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [6, 2, 20]
           },
           {
              "wall": "Transport",
              "name": "bottle",
              "amt": 4.56,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [8, 8, 20]
            },
            {
              "wall": "Recreation",
              "name": "toothbrush",
              "amt": 27.44,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [3, 9, 20]
          },
          {
              "wall": "Recreation",
              "name": "drill",
              "amt": 83.20,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [24, 11, 20]
          },
          {
              "wall": "Others",
              "name": "paper",
              "amt": 37.54,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [18, 5, 20]
          },
            {
              "wall": "Food",
              "name": "flag",
              "amt": 70.45,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [27, 10, 20]
          },
          {
              "wall": "Food",
              "name": "television",
              "amt": 16.15,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [30, 1, 20]
          },
          {
              "wall": "Others",
              "name": "plastic",
              "amt": 8.20,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [18, 7, 20]
          },
          {
              "wall": "Other",
              "name": "floor",
              "amt": 83.94,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [31, 10, 20]
          },
          {
              "wall": "Others",
              "name": "magnet",
              "amt": 31.63,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [22, 3, 20]
          },
          {
              "wall": "Food",
              "name": "hanger",
              "amt": 8.77,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [4, 4, 20]
          },
          {
              "wall": "Food",
              "name": "lights",
              "amt": 8.71,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [23, 1, 20]
          },
          {
              "wall": "Food",
              "name": "fake",
              "amt": 38.65,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [9, 7, 20]
          },
          {
              "wall": "Recreation",
              "name": "shirt",
              "amt": 63.98,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [27, 10, 20]
          },
          
          {
              "wall": "Recreation",
              "name": "credit",
              "amt": 11.48,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [18, 12, 20]
          },
          {
              "wall": "Other",
              "name": "seat",
              "amt": 7.44,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [5, 3, 20]
          },
          {
              "wall": "Recreation",
              "name": "sandal",
              "amt": 66.78,
              "desc": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              "date": [19, 12, 20]
          },
          {
              "wall": "Food",
              "name": "sponge",
              "amt": 27.81,
              "desc": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "date": [29, 10, 20]
          },
          {
              "wall": "Others",
              "name": "chapter",
              "amt": 13.73,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [2, 12, 20]
          },
          {
              "wall": "Recreation",
              "name": "soy",
              "amt": 54.96,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [5, 3, 20]
          },
          {
              "wall": "Food",
              "name": "tire",
              "amt": 49.20,
              "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              "date": [18, 7, 20]
          }
        ]
    }



    /*set the dates of transactions to be recent and realistic (change all the data to be dated the current month and year)*/
    for (const [key, value] of Object.entries(data["Trans"])) {
      var date = new Date().getDate()
      var month = new Date().getMonth()+1
      var year = new Date().getFullYear()
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

