import express, { Express } from "express";
import dotenv from "dotenv";
import { DataSource } from "typeorm";
import cors from "cors";
import bodyParser from "body-parser";

import { Task } from "./src/tasks/tasks.entity";
import { tasksRouter } from "./src/tasks/tasks.router";

// Instantiate express app
const app: Express = express();
dotenv.config();

// Parse request body
app.use(bodyParser.json());

//Use CORS install types as well
app.use(cors());

// Create Database Connection
export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Define serve port
const port = process.env.PORT;

// Initialize App Data Source
AppDataSource.initialize()
  .then(() => {
    // Start listening to the requests on the defined port
    app.listen(port);
    console.log("Data source had been initialized!");
  })
  .catch((err) => {
    console.log("Error during Data Source Initialization", err);
  });

// Create a default route
app.use("/", tasksRouter);
