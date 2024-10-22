import { Router } from "express";
import authCheckMiddleware from "../middleware/authCheck";
import {
  addConsumableRecord,
  getAllRecords,
  getAllRecordsByCategory,
  updateRecord,
} from "../controllers/consumableController";

const consumableRoute: Router = Router();

consumableRoute.post("/record/add", authCheckMiddleware, addConsumableRecord);
consumableRoute.get(
  "/record/getAll/:car_id",
  authCheckMiddleware,
  getAllRecords
);
consumableRoute.get(
  "/record/getAllByCategory/:car_id",
  authCheckMiddleware,
  getAllRecordsByCategory
);
consumableRoute.put("/record/update/:id", authCheckMiddleware, updateRecord);

export default consumableRoute;
