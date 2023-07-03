
let quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The secret of getting ahead is getting started. - Mark Twain",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

let colors = [
  "#E74C3C", "#3498DB", "#2ECC71", "#9B59B6", "#F1C40F",
  "#1ABC9C", "#E67E22", "#95A5A6", "#BDC3C7", "#34495E"
];

function timeSet() {
  let now = new Date();
  let hour = now.getHours();

  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else if (hour >= 17 && hour < 20) {
    return "evening";
  }
  else{
    return "night";
  }
}


function Greeting() {
  let greet = document.getElementById("greeting");
  let timeOfDay = timeSet();
  greet.textContent = `Let's start our ${timeOfDay} with a new quote`;
}
function random_quotes() {
  let quoteElem = document.getElementById("quote");
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElem.textContent = quotes[randomIndex];

  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  document.getElementById("new-quote-btn").style.backgroundColor = randomColor;
  document.getElementById("quote").style.color = randomColor;
}


document.getElementById("new-quote-btn").addEventListener("click", random_quotes);

Greeting();
random_quotes();
