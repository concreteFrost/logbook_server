import { Router } from "express";
import { carAddValidator } from "../validators/validation";
import handleValidationErrors from "../utils/handleValidationErrors";
import {
  addCar,
  deleteCar,
  getAllCars,
  getCarById,
  updateCar,
} from "../controllers/carController";
import authCheckMiddleware from "../middleware/authCheck";

const carRoutes: Router = Router();

carRoutes.post(
  "/car/add",
  carAddValidator,
  handleValidationErrors,
  authCheckMiddleware,
  addCar
);

carRoutes.get("/car/getAll", authCheckMiddleware, getAllCars);
carRoutes.get("/car/getCar/:id", authCheckMiddleware, getCarById);
carRoutes.put(
  "/car/update/:id",
  carAddValidator,
  handleValidationErrors,
  authCheckMiddleware,
  updateCar
);

carRoutes.delete("/car/delete/:id", authCheckMiddleware, deleteCar);

export default carRoutes;
