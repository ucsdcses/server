import { Request, Response, Router } from "express";

const publicRouter: Router = Router();

publicRouter.get("/simple", (request: Request, response: Response) => {
  response.json({
    text: "Hello CSES",
    title: "Greetings.",
  });
});

export { publicRouter };
