const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let abc = ["hi", "There", "Mr. Saini"];

var data = [
  {
    beerName: "KingFisher",
    beerPrice: 234,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/1.jpg",
    beerId: 0
  },
  {
    beerName: "Tuborg",
    beerPrice: 236,
    beerDiscription:
      "welcome to Toborg beer and have funn  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/2.jpg",
    beerId: 1
  },
  {
    beerName: "Carlsberg",
    beerPrice: 210,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/3.jpg",
    beerId: 2
  },
  {
    beerName: "Budweiser",
    beerPrice: 200,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/4.jpg",
    beerId: 3
  },
  {
    beerName: "Heineken",
    beerPrice: 2,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/5.jpg",
    beerId: 4
  },
  {
    beerName: "Corona",
    beerPrice: 372,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/6.jpg",
    beerId: 5
  },
  {
    beerName: "Bira 91",
    beerPrice: 252,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/7.jpg",
    beerId: 6
  },
  {
    beerName: "Foster's",
    beerPrice: 112,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/8.jpeg",
    beerId: 7
  },
  {
    beerName: "Hoegaarden",
    beerPrice: 892,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/9.jpg",
    beerId: 8
  },
  {
    beerName: "MillerCoors",
    beerPrice: 672,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/10.jpg",
    beerId: 9
  },
  {
    beerName: "Haywards 5000",
    beerPrice: 297,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/11.jpg",
    beerId: 10
  },
  {
    beerName: "Royal Challenge",
    beerPrice: 250,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/12.png",
    beerId: 11
  },
  {
    beerName: "Kings",
    beerPrice: 300,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/13.jpg",
    beerId: 12
  },
  {
    beerName: "Godfathers",
    beerPrice: 222,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/14.jpg",
    beerId: 13
  },
  {
    beerName: "Stella Artois",
    beerPrice: 342,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/15.jpg",
    beerId: 14
  },
  {
    beerName: "Peroni",
    beerPrice: 455,
    beerDiscription:
      "welcome to index.js  and curent folder is under the viewss . im using vs code 2019 edition ... blah blah blah",
    beerImage: "images/16.jpg",
    beerId: 15
  }
];

app.set("view engine", "ejs");
// app.use(express.static("images"));
// app.use("/static", express.static("images"));
app.use(express.static("public"));
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var beerNameArray = [];
for (var j = 0; j < data.length; j++) {
  beerNameArray.push(data[j].beerName);
}

// app.get("/", (req, res) => {
//   res.render("index.ejs", {
//     sampleData: beerNameArray,
//     imageData: data[4].beerImageb,
//     orgData: data
//   });
// });

app.get("/", (req, res) => {
  res.render("cart2.ejs", {
    data: data,
    message: ""
  });
});

app.post("/orderNow", (req, res) => {
  var bol = req.body.alldata;
  console.log(typeof bol);

  var xyz = JSON.parse(bol);
  console.log(typeof xyz);

  console.log(xyz[0].name);

  // console.log(xyz);

  res.render("confirmOrder.ejs", {
    data: xyz
  });
});

app.post("/return", (req, res) => {
  res.redirect("/cart");
});

app.post("/confirm", (req, res) => {
  res.render("cart2.ejs", {
    data: data,
    message: "Thanks for shopping with us! Stay High"
  });
});

app.post("/search", async (req, res) => {
  var beer = req.body.beerName;
  console.log(beer);
  var searchedBeer = [];

  for (var i = 0; i < data.length; i++) {
    if (data[i].beerName.includes(beer)) {
      searchedBeer.push(data[i].beerName);
      console.log("BEER found in our data");
    } else {
      // console.log("beer not found in our data");
    }
  }
  console.log(searchedBeer);
  res.send("hiiiiiiiii");
});
app.listen(3000, () => console.log("Server running at 3000"));
