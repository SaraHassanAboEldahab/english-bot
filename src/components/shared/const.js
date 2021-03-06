import { io } from "socket.io-client";

export const socket = io("wss://english-bot-test.herokuapp.com/");

// eslint-disable-next-line no-sparse-arrays
export const feedbackCorrection = [
  "You are too close , but the right answer is {ANSWER}",
  "The correct answer is {ANSWER}",
  "{ANSWER} this is the correct",
  " Oh sorry , the write answer is {ANSWER}",
];

export const feedbackRight = [
  "You are right π€©",
  "you are too good",
  "great π",
  "Nice ππ",
  "You are right β ",
];

export const endMessages = [
  "Happy end",
  "See you laterπββοΈ",
  " Peace outπ₯³",
  " It was nice to see you againπββοΈ",
  "Take care",
  "I look forward to our next dialogue",
  "Good bye π",
  "Bye bye!π",
  "Have a nice day",
  "Goodnight π",
  "Iβm out of here",
  "π₯³",
];

export const feedback_wrong = [
  "You are wrong βΉοΈ",
  "false βΉοΈ ",
  "Incorrect answer ",
  "Sorry , wrong π‘ ",
  "bad βΉοΈ ",
  "Thatβs wrong answer π  ",
  "Sad ",
];

export const retry = [
  "Please think again",
  "Try again ",
  "Repeat your answer ",
  "Please retry again π΅ ",
  "Sorry, Retry",
  "π΅",
];

export const after_retry = [
  "Go to study again",
  "ask your teacher π§βπ«",
  "Ask your teacher for tips & tricks π§βπ«",
  "ask your tutor π§βπ«",
  "Bad luck",
  " go to our website and study again",
  "Revise your lessons",
  "Looking back to your lesson",
  "You should revise your lessons βοΈ",
  "reflect your daily instructional activities βοΈ",
];
