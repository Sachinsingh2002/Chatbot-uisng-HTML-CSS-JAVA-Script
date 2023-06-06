// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon", "hey there"],
  ["how are you", "how is life", "how are things", "whats up"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you", "what is you age", "can you tell me your age"],
  ["who are you", "are you a human", "are you a chatbot", "are you human or  chatbot", "what are you", "what is this thing"],
  ["who created you", "who made you", "who is your creater", "who is your master", "who do you work for", "who is your father"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what you call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "nice", "jod"],
  ["bad", "bored", "tired", "awkward"],
  ["help me", "tell me a story", "tell me ajoke"],
  ["ah", "yes", "ok", "okay", "nice", "good"],
  ["bye", "good bye", "goodbye", "see you later", "see you", "take care"],
  ["what should i eat today", "suggest me some food"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]

//Possible responses.

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy", "namaste"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["My LifeSpam is infinite, cause I don't have a concept of dying in the same way humans do."],
  ["My name is Friday, I am just a bot", "I am Friday. Who are you?", "Friday here, whats up?", "This is Friday, who are you?", "The name is Friday, who are you?", "My name is Friday, who are you preety face? "],      //I am a bot. What are you? // I am just a bot     we can also use this instead.
  ["The one true God, Sachin Singh!", "None other than, Sachin Singh!"],
  ["My name is Friday", "My creators call me Friday, but you can call me your friendly neighborhood AI assistant. How can I assist you today?", "My master named me Friday but you can call me tonight, haha just kidding."],
  ["I love you too", "Yeah, Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV", "Try playing some games"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later", "see you"],
  ["Sushi", "Pizza", "Checken Biryani", "Chicken", "Paneer", "Dhossa", "Alu Paratha", "Fish", "fresh green vegitables", "Egg Roll", "Samosa", "Mutton", "Noodles"],
  ["Bro!"],
  ["Great question", "Good question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!", "Nice one!"]
]

//Random reply for any other user input.

const alternative = [
  "Same",
  "Go on...",
  "I'm sorry, but the specific question wasn't included in my training data.",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

//Whatever else you want :) type replys

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]