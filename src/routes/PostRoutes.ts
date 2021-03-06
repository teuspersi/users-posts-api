import { Router } from "express";
import PostController from "../controllers/PostController.ts";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const PostRouter = Router();

PostRouter.post("/", ensureAuthenticated, PostController.create);
PostRouter.get("/", ensureAuthenticated, PostController.findAll);
PostRouter.get("/by", ensureAuthenticated, PostController.findByUser);
PostRouter.get("/:post_id", ensureAuthenticated, PostController.findOne);
PostRouter.put("/:post_id", ensureAuthenticated, PostController.update);
PostRouter.delete("/:post_id", ensureAuthenticated, PostController.destroy);

export { PostRouter };
