import { io } from "socket.io-client";

export const socket = io("wss://english-bot-test.herokuapp.com/");

// eslint-disable-next-line no-sparse-arrays
export const feedbackCorrection = [
  "You are too close , but the write answer is {ANSWER}",
  "The correct answer is {ANSWER}",
  "{ANSWER} this is the correct",
  " Oh sorry , the write answer is {ANSWER}",
];

export const feedbackRight = [
  "You are right 🤩",
  "you are too good",
  "great 👏",
  "Nice 😁😁",
  "You are right ✅ ",
];

export const endMessages = [
  "Happy end",
  "See you later🙋‍♀️",
  " Peace out🥳",
  " It was nice to see you again🙋‍♀️",
  "Take care",
  "I look forward to our next dialogue",
  "Good bye",
  "Bye bye!👋",
  "Have a nice day",
  "Goodnight",
  "I’m out of here",
  "🥳",
];

export const feedback_wrong = [
  "You are wrong ☺️",
  "false ☺️",
  "Incorrect answer",
  "Sorry , wrong ☺️",
  "bad 🥳😔🤬",
  "That’s wrong answer 🥳😔🤬",
  "Sad",
];

export const retry = [
  "Please think again",
  "Try again ",
  "Repeat your answer ",
  "Please retry again 😵 ",
  "Sorry, Retry",
  "😵",
];

export const after_retry = [
  "Go to study again",
  "ask your teacher 🧑‍🏫",
  "Ask your teacher for tips & tricks 🧑‍🏫",
  "ask your tutor 🧑‍🏫",
  "Bad luck",
  " go to our website and study again",
  "Revise your lessons",
  "Looking back to your lesson",
  "You should revise your lessons ✍️",
  "reflect your daily instructional activities ✍️",
];
