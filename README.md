# demo

## Setup

- Clone the repo: `$ git clone git@github.com:jmboiton/demo.git`
- Install dependencies: `$ npm install`

## Task 1: Markup and ReactJS

The project has the following scripts:

| Syntax              | Description                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `$ npm start`       | Builds the source code and launches a local server to preview a production ready version of the demo. Open this URL in your browser: [http://127.0.0.1:4173/](http://127.0.0.1:4173/) as indicated in the console. |
| `$ npm run dev`     | Launches a local server for development. The demo can be tested with this, but it won't be optimized. Open this URL in your browser: [http://127.0.0.1:5173/](http://127.0.0.1:5173/) as indicated in the console. |
| `$ npm run build`   | Builds the source code (e.g. transform TS to optimized JS) and place the result in a `/dist` folder.                                                                                                               |
| `$ npm run preview` | Launches a local server to serve the contents of the `/dist` folder (i.e. the result of `npm run build`).                                                                                                          |

The project comes equiped with other scripts for linting and testing, but there are not tests jet.

## Task 2: Javascript

- Look for the folder [/task2](task2).
- Copy and paste the contests of the [/task2/index.js](task2/index.js) file into the browser console.

## Task 3: Javascript Logic

- The source code for this is located in the folder [/src/routes/QuestionsToCSV](src/routes/QuestionsToCSV).
- It is served in an isolated route as part of the [Task 1](#task-1-markup-and-reactjs) application, so the same commands are available.
  - In order to play with the [data source](src/routes/QuestionsToCSV/questions-data.ts) for testing, it could be useful to launch the local server for development using `npm run dev`.
  - Then, open the path **/questions-to-csv** in the browser, for example: [http://127.0.0.1:5173/questions-to-csv](http://127.0.0.1:5173/questions-to-csv).
