[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=OGOZ111_Prelminary-Medical-Assessment-FullStack-)](https://sonarcloud.io/summary/new_code?id=OGOZ111_Prelminary-Medical-Assessment-FullStack-)

# Prelminary Medical Assessment FullStack Web App w/ Doctors login portal.

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![nodemon](https://img.shields.io/badge/nodemon-76D04B?logo=nodemon&logoColor=white)](https://nodemon.io/)

MongoDB, ExpressJS, ReactJS, NodeJS.

Cloned my previous repository where I made a full stack trivia quiz (https://github.com/OGOZ111/MERN-QUIZ-APP), refactored all components, changed database, schemas, controllers. The app mimics that of a medical grade app that collects patient data pre appointment about their symptoms, personal details (dummy data), loading responses, read write to database, middlewares, protected routes, encrypted results, trace of index, return to prev question and change answer, questions can be skipped with zero input with null, animations, server confirmations. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)




## Features

- Refined interface, with lightweight glass effect that is responsive to mobile. 
- Small non intrusive animations from React library.
- Answers are now multiple choice, more than just YES/No, encrypted to an index number, decrypted on the doctors portal.
- On final question, next button changes to complete.
- Clicking complete, removes and disables user from any further changes while the server is being contacted.
- Animation will play that delays the confirmation screen, giving time for the response, and seamless movement between components.
- Confirmation message returns users name, inputs for confirmation, and message that logging results to DB was successful. 

## Installation

```bash
npm install
```

## Usage


```bash
npm run dev
```


