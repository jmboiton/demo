import type { AnswerType, QuestionDataType } from "./questions-data";

type AccumType = QuestionDataType | AnswerType[] | AnswerType[][];

function arrayToCSV(data: string[][]) {
  return data.map(row =>
    row
    .map(String)  // convert every value to String
    .map(v => v.replaceAll('"', '""'))  // escape double colons
    .map(v => `"${v}"`)  // quote it
    .join(',')  // comma-separated
  ).join('\r\n');  // rows starting on new lines
}

function getCSV(data: QuestionDataType[]) {
  // let result = 'data:text/csv;charset=utf-8,';
  const getAnswerName = (answer: AnswerType) => answer.answerName
  const isQuestionData = (a: AccumType): a is QuestionDataType => (a as QuestionDataType).answers !== undefined
  const headers = data.map(question => question.questionName);
  
  // @ts-ignore
  const result = data.reduce((a, b) => {
    const qA = isQuestionData(a) ? a.answers.map(getAnswerName) : a;
    const qB = b.answers.map(getAnswerName);

    return qA.flatMap(d => {
      return qB.map(e => {
        return [d, e].flat()
      })
    })
  }) as unknown as AnswerType[][];

  // @ts-ignore
  result.unshift(headers);

  const formattedData = arrayToCSV(result as any as string[][]);
  const blob = new Blob([formattedData], {type: 'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'task3-demo.csv');
  link.click();

  return result.length - 1
}

export default getCSV