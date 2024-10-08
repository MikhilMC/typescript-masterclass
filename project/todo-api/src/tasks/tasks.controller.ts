import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import { AppDataSource } from "../..";
import { Task } from "./tasks.entity";
import { validationResult } from "express-validator";

class TasksController {
  public async getAll(req: Request, res: Response): Promise<void> {
    // Declare a variable to hold all the tasks
    let allTasks: Task[];

    // Fetch all tasks using the repository
    try {
      allTasks = await AppDataSource.getRepository(Task).find({
        order: { date: "ASC" },
      });

      // Converts the tasks into an array of objects
      allTasks = instanceToPlain(allTasks) as Task[];

      res.status(200).json(allTasks);
    } catch (_errors) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    // Create a new instance of a Task
    const newTask = new Task();

    // Add the required properties to the Task object
    newTask.title = req.body.title;
    newTask.date = req.body.date;
    newTask.description = req.body.description;
    newTask.priority = req.body.priority;
    newTask.status = req.body.status;

    // Add new task to the database
    let createdTask: Task;

    try {
      createdTask = await AppDataSource.getRepository(Task).save(newTask);

      // Convert the task instanceto an object
      createdTask = instanceToPlain(createdTask) as Task;

      res.status(201).json(createdTask);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export const taskController = new TasksController();
