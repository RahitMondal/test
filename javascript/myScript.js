const quotations = [
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
    author: "Ambrose Redmoon",
  },
  {
    quote:
      "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.",
    author: "A. A. Milne",
  },
  {
    quote:
      "A wise man gets more use from his enemies than a fool from his friends.",
    author: "Baltasar Gracian",
  },
  {
    quote:
      "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.",
    author: "John Ruskin",
  },
  {
    quote:
      "Even if you’re on the right track, you’ll get run over if you just sit there.",
    author: "Will Rogers",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quote: "The way to get started is to talking and begin doing.",
    author: "Walt Disney",
  },
];

const colors = [
  "#003366",
  "#993333",
  "#003300",
  "#660066",
  "#0055ff",
  "#ff5500",
  "#808080",
  "#eb3489",
  "#cccc00",
  "#ff0000",
  "#00615a",
  "#ff66b3",
];

const wrapperRef = document.getElementById("wrapper");
const quoteTextRef = document.getElementById("quote-text");
const quoteAuthorRef = document.getElementById("quote-author");
const btnRef = document.getElementById("btn");
const headerRef = document.getElementsByTagName("header")[0];

let lastQuoteIndex = 0,
  lastColorIndex = 0,
  curQuoteIndex = 0,
  curColorIndex = 0;

const timeOfDay = () => {
  const hours = new Date().getHours();
  if (hours >= 4 && hours < 13) return "morning";
  else if (hours >= 13 && hours < 18) return "afternoon";
  else return "evening";
};

const setQuote = () => {
  //making sure that the last new quote and color is different than the previous one
  while (lastQuoteIndex === curQuoteIndex) {
    curQuoteIndex = Math.floor(Math.random() * 12);
  }
  while (lastColorIndex === curColorIndex) {
    curColorIndex = Math.floor(Math.random() * 12);
  }
  let quoteObj = quotations[curQuoteIndex];
  let color = colors[curColorIndex];

  //updating the dom
  headerRef.textContent = `Let's start our ${timeOfDay()} with a new quote`;
  wrapperRef.style.backgroundColor = color;
  quoteTextRef.innerHTML = `<i class="fas fa-quote-left"></i> ${quoteObj.quote} <i class="fas fa-quote-right"></i>`;
  quoteAuthorRef.textContent = "-" + quoteObj.author;
  quoteTextRef.style.color = color;
  quoteAuthorRef.style.color = color;
  btnRef.style.backgroundColor = color;

  lastQuoteIndex = curQuoteIndex;
  lastColorIndex = curColorIndex;

  const iconRef = document.getElementsByClassName("fas");
  iconRef[0].style.color = iconRef[1].style.color = color;
  console.log(color);
};

btnRef.addEventListener("click", setQuote);

setQuote();
