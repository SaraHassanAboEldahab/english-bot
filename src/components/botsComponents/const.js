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
