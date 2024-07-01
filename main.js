// DOM references
const jokeButton = document.querySelector(".joke-button");
const jokeHolder = document.querySelector(".joke-text");
const headerHolder = document.querySelector(".header-text");

// Debug
// jokeButton.textContent = "Button Placeholder Text"
// jokeHolder.textContent = "Joke Placeholder Text"

const responseArray = [
  "I hate you.",
  "This sucks.",
  "Wow.",
  "I wish I didn't read that.",
  "Why was I born.",
  "Another.",
  "Jesus Christ.",
  "Please end my misery.",
  "Why are you like this?",
  "Please stop.",
  "Have some self respect.",
  "We can't keep doing this.",
  "I wish you wouldn't.",
  "I'd like to leave, please.",
  "Cease.",
];

async function getDadJoke() {
  // Fetch joke
  const dadJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      // Note to self: apparently you can't store headers, no idea why.
      Accept: "application/json",
    },
  });

  // Store object
  const jokeObject = await dadJoke.json();

  // Check status
  if (jokeObject.status === 200) {
    return jokeObject.joke;
  } else {
    jokeButton.textContent = "You spelled 'retrieving' wrong, you idiot.";
    return "Here's where I'd put my dad joke. IF I HAD ONE! (Error retreiving joke)";
  }
}

async function printDadJoke() {
  // nested async ˙ ͜ʟ˙
  const joke = await getDadJoke();
  return joke;
}

async function buttonClick() {
  // more nested async ˙ ͜ʟ˙

  // Change 1st header
  headerHolder.textContent = "Here's a Dad Joke:";

  // Print dad joke
  jokeHolder.textContent = await printDadJoke();

  // Randomize Button Response
  jokeButton.textContent =
    responseArray[Math.floor(Math.random() * responseArray.length)];
}

// Debug
// Here's how you can display the async information less painfully on the page (if you can't nest functions):

// (async () => {
//     jokeHolder.textContent = await printDadJoke();
// })
// ();
