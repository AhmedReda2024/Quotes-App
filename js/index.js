var Quotes = [
  {
    quote: "Its not what happens to you, but how you react to it that matters.",
    author: "--Epictetus",
  },
  {
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
    author: "--Nelson Mandela",
  },
  {
    quote: "The best revenge is massive success.",
    author: "--Frank Sinatra",
  },
  {
    quote: "Do not take life too seriously. You will not get out alive.",
    author: "--Elbert Hubbard",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "--Wayne Gretzy",
  },
];

// newindex  =>> elrkm el3shwa2y ele lsa tal3ly
// lastindex  =>> elrkm el lsa tal3 mn shwea

// #######################################################

// var newIndex; //4 //3 //3
// var lastIndex; //4 //3

// var dispaledQuotes = [];

// function getQuotes() {
//   if (dispaledQuotes.length == Quotes.length) {
//     dispaledQuotes = [];
//   }

//   do {
//     //4   //3
//     newIndex = Math.floor(Math.random() * Quotes.length);
//   } while (newIndex == lastIndex || dispaledQuotes.includes(newIndex));
//   console.log(newIndex);
//   lastIndex = newIndex;
//   dispaledQuotes.push(newIndex);

//   document.getElementById("quote").innerHTML = Quotes[newIndex].quote;
//   document.getElementById("auther").innerHTML = Quotes[newIndex].author;
//   // console.log("last" , lastIndex);
// }


var newIndex; //2   3  4
var lastIndex; //2  3  

var displayedQuotes = [];

function getQuotes() {

  if (displayedQuotes.length == Quotes.length) {
    displayedQuotes = [];
  }


  do {
    
     newIndex = Math.floor(Math.random() * Quotes.length);

  } while (newIndex == lastIndex || displayedQuotes.includes(newIndex));

  lastIndex = newIndex
  console.log(newIndex);

  displayedQuotes.push(newIndex);
  document.getElementById("quote").innerHTML = Quotes[newIndex].quote;
  document.getElementById("auther").innerHTML = Quotes[newIndex].author;
}
