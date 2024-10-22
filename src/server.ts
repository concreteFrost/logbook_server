import express from "express";
import sequelize from "./config/sequelize";
import authRoutes from "./routes/authRoute";
import carRoutes from "./routes/carRoute";
import consumableCategoriesRoute from "./routes/categoriesRoute";
import consumableRoute from "./routes/consumableRoute";

sequelize
  .sync()
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error syncing with db", e);
  });

const app = express();

app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", carRoutes);
app.use("/api", consumableCategoriesRoute);
app.use("/api", consumableRoute);

app.listen(8800, () => {
  console.log("connected");
});
