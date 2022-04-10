import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      if (typeof user_id !== "string") {
        throw new Error("User id is not a string");
      }

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).json(users);
    } catch (err) {
      return response.status(400).json({
        error: err.message});
    }
  }
}

export { ListAllUsersController };
