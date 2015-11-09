$(document).ready(function() {

  var tweet = "";
  var heroQuotes = [{
      heroQuote: "It's not who I am underneath, but what I do that defines me",
      hero: "Batman"
    }, {
      heroQuote: "There is a right and wrong in the universe and the distinction is not hard to make",
      hero: "Superman"
    }, {
      heroQuote: "The future is worth it. All the pain. All the tears. The future is worth the fight",
      hero: "Martian Manhunter"
    }, {
      heroQuote: "Just because someone stumbles and loses their path, doesn't mean they can't be saved",
      hero: "Professor X"
    }, {
      heroQuote: "Where's Harvey Dent?!",
      hero: "Batman"
    }, {
      heroQuote: "Life doesn't give us purpose. We give life purpose",
      hero: "The Flash"
    }, {
      heroQuote: "I don't like bullies, I don't care where they're from",
      hero: "Captain America"
    }, {
      heroQuote: "Life is a gift. Immortality a curse",
      hero: "Wolverine"
    }, {
      heroQuote: "It's not being a hero, it's just doing the right thing",
      hero: "The Flash"
    }

  ];
  var villainQuotes = [{
      villainQuote: "Intelligence is a privilege, and it needs to be used for the greater good of people",
      villain: "Doctor Octopus"
    }, {
      villainQuote: "It doesn't matter who we are, what matters is our plan",
      villain: "Bane"
    }, {
      villainQuote: "There are no heroes or villains. There's just what I want and how I'll get it",
      villain: "Magneto"
    }, {
      villainQuote: "If you could make God bleed, people would cease to believe in him",
      villain: "Whiplash"
    }, {
      villainQuote: "Would you rather die a hero or live long enough to see yourself become the villain",
      villain: "Harvey Dent"
    }, {
      villainQuote: "Peace was never an option",
      villain: "Magneto"
    }, {
      villainQuote: "Why so serious?",
      villain: "The Joker"
    }, {
      villainQuote: "We are the future, Charles. Not them. They no longer matter",
      villain: "Magneto"
    }, {
      villainQuote: "Wanna know how I got these scars?",
      villain: "The Joker"
    }, {
      villainQuote: "One day Lex Luthor is going to look down upon Metropolis... and everyone is going to look up to ME",
      villain: "Lex Luthor"
    }, {
      villainQuote: "If you become more than a man, devote yourself to an ideal, then you become something else entirely",
      villain: "Ra's Al Ghul"
    }, {
      villainQuote: "Freedom is life's great lie. Once you accept that in your heart, you will know peace",
      villain: "Loki"
    }, {
      villainQuote: "Justice has two sides like this coin. Innocent or guilty. One side clean the other side scarred",
      villain: "Two Face"
    }, {
      villainQuote: "Mayhem you know is a lot like gravity, all it takes is a little push",
      villain: "The Joker"
    }

  ];

  function generateHeroQuote() {
    var quote = Math.floor(Math.random() * (heroQuotes.length - 0 + 1)) + 0;
    $("#quote").text(heroQuotes[quote].heroQuote);
    tweet = heroQuotes[quote].heroQuote + " -" + heroQuotes[quote].hero;
    $("#speaker").text(heroQuotes[quote].hero);

  }

  function generateVillainQuote() {
    var quote = Math.floor(Math.random() * (villainQuotes.length - 0 + 1)) + 0;
    $("#quote").text(villainQuotes[quote].villainQuote);
    tweet = villainQuotes[quote].villainQuote + " -" + villainQuotes[quote].villain;
    $("#speaker").text(villainQuotes[quote].villain);
  }
  $("#tweet").click(function() {
    $(this).attr("href", "https://twitter.com/intent/tweet?text=" + tweet);
  });

  $("#heroButton").click(function() {
    generateHeroQuote();
  });
  $("#villainButton").click(function() {
    generateVillainQuote();
  });

});