var quotes = [
    { text: "“Be yourself; everyone else is already taken.”", author: "Oscar Wilde" },
    { text: "“So many books, so little time.”", author: "Frank Zappa" },
    { text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "Albert Einstein" },
    { text: "“A room without books is like a body without a soul.”", author: "Marcus Tullius Cicero" },
    { text: "“You only live once, but if you do it right, once is enough.”", author: "Mae West" },
];

var currentIndex = 0;
var alreadyShown = [];  


function getRandomQuote() {
    
    if (alreadyShown.length === quotes.length) {
        alreadyShown = []; 
    }

    var randomIndex;

  
    while (true) {
        randomIndex = Math.floor(Math.random() * quotes.length);

        
        var isShown = false;
        for (var i = 0; i < alreadyShown.length; i++) {
            if (alreadyShown[i] === randomIndex) {
                isShown = true;
                break;
            }
        }


        if (!isShown) {
            break;
        }
    }

    alreadyShown.push(randomIndex);

    document.getElementById('quoteText').innerHTML = quotes[randomIndex].text;
    document.getElementById('quoteAuthor').innerHTML = quotes[randomIndex].author;
}
