const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { connection, checkDb } = require("./database/index.js");


async function checkAndSyncMySQL() {
  try {
    await checkDb();
  } catch (error) {
    throw error;
  }
}

const initializeAnListenExpress = () => {
  try {
    app
      .use(express.json())
      .use(cors())
      .use(morgan("dev"))
      .listen(3000, () => {
        console.log("Server started");
      });
  } catch (error) {
    console.log(error);
  }
};

const startApi = async () => {
  try {
    await checkAndSyncMySQL()
    initializeExpressAndListen()
  } catch (error) {
    console.log(error)
  }
}

startApi();