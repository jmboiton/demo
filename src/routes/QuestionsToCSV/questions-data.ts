export type AnswerType = {
  answerName: string;
  answerId: number;
};

export type QuestionDataType = {
  questionId: number;
  questionName: string;
  answers: AnswerType[]
};

const questionsData: QuestionDataType[] = [
  {
    questionId: 1,
    questionName: "What is you favorite color?",
    answers: [
      {
        answerName: "Red",
        answerId: 11,
      },
      {
        answerName: "Blue",
        answerId: 12,
      },
      {
        answerName: "Pink",
        answerId: 13,
      },
    ],
  },
  {
    questionId: 2,
    questionName: "Are you a flat-earther?",
    answers: [
      {
        answerName: "Yes",
        answerId: 21,
      },
      {
        answerName: "No",
        answerId: 22,
      },
    ],
  },
  {
    questionId: 3,
    questionName: "What is your gender?",
    answers: [
      {
        answerName: "Female",
        answerId: 31,
      },
      {
        answerName: "Male",
        answerId: 32,
      },
    ],
  },
];

export default questionsData;
