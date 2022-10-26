# chumon-server-js

Simple REST API made by using Mongodb, Expressjs and Nodejs contains which anime watch orders.

Base URL: https://chumon-server.onrender.com


## Requirements

- Node v18
- [dotenv](https://www.npmjs.com/package/dotenv)
- [mongoose](https://mongoosejs.com/)

## Installation

```console
   // clone the repo
   $ git clone

   // navigate to project folder
   $ cd chumon-server-js

   // install dependencies
   $ npm i

   // run the server
   $ npm run dev
```

## Usage

Base URL: https://chumon-server.onrender.com

| Collection | Endpoints        | Type | params | body                                | Description                                                             |
|------------|------------------|------|--------|-------------------------------------|-------------------------------------------------------------------------|
| Anime      | {Base URL}/order/:title    | Get  | title  |                                     | Returns watch order of specific anime with a title or alternative title |
|            | {Base URL}/add             | Post |        | { title, order, alternative_title } | Adds new watch order to the database                                    |
| Request    | {Base URL}/request/:title  | Post |        | { title }                           | Adds new watch order request to the database                            |
|            | {Base URL}/all_requests    | Get  |        |                                     | Returns all requested watch orders                                      |
|            | {Base URL}/request/:status | Get     | status |                                     | Returns requested watch orders based on status (pending, resolved)      |

