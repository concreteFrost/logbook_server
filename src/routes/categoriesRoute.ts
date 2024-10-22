import { Router } from "express";
import {
  getAllCategories,
  getOneCategory,
} from "../controllers/consumableCategoriesController";

const consumableCategoriesRoute: Router = Router();

consumableCategoriesRoute.get("/categories/getAll", getAllCategories);
consumableCategoriesRoute.get("/categories/get/:id", getOneCategory);

export default consumableCategoriesRoute;
