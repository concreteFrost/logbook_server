import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import UserModel from "../models/userModel";
import CarModel from "../models/carModel";
import UserCarsModel from "../models/userCarsModel";
import ConsumableCategoryModel from "../models/categoryModel";
import ConsumableModel from "../models/consumableModel";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: "mysql",
  models: [
    UserModel,
    CarModel,
    UserCarsModel,
    ConsumableCategoryModel,
    ConsumableModel,
  ],
  logging: false,
});

export default sequelize;
