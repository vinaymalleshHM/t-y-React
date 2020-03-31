var quoteOptions = [{
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    name: "Marilyn Monroe"
  }, {
    quote: "“Don't cry because it's over, smile because it happened.”",
    name: "Dr. Seuss"
  }, {
    quote: "“Be yourself; everyone else is already taken.”",
    name: "Oscar Wilde"
  }, {
    quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    name: "Albert Einstein"
  }, {
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    name: " Bernard M. Baruch"
  }, {
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    name: "Dr. Seuss"
  }, {
    quote: "“A room without books is like a body without a soul.”",
    name: "Marcus Tullius Cicero"
  }, {
    quote: "“So many books, so little time.”",
    name: "Frank Zappa"
  }, {
    quote: "“You only live once, but if you do it right, once is enough.”",
    name: "Mae West"
  }, {
    quote: "“Be the change that you wish to see in the world.”",
    name: "Mahatma Gandhi"
  }, ];
  
  function initialize_generate() {
    var sweetspot = Math.floor((Math.random() * quoteOptions.length));
    for (var i = 0; i <= quoteOptions.length; i++) {
  
      if (i === sweetspot) {
        var quoteHtml = generate_html(quoteOptions[i]);
        $(".quote").empty().append(quoteHtml);
        //console.log("test");
        var tweet_code = generate_tweet(quoteOptions[i]);
        console.log(tweet_code);
        $("#tweet_sect").empty().append(tweet_code); //only include tweet link when button pressed, doesn't make sense for anyone to tweet my placeholder quote that only makes sense within the scope of this app.
      }
    }
  }
  
  function generate_html(quoteObj) {
  
    var quoteHtml = "<i> " + quoteObj["quote"] + " </i> <br> <b> - " + quoteObj["name"] + " </b>";
    return quoteHtml
  }
  
  /* function generate_tweet(quoteObj) {
    
      var tweetHtml = '<a href="https://twitter.com/intent/tweet?button_hashtag=Quotes&text=' + quoteObj["quote"] + '%20-%20' + quoteObj["name"] + '"' + 'class="twitter-hashtag-button">Tweet </a> <script> !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');';
    
    return tweetHtml
  } */