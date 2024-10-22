import { Response } from "express";
import CarModel from "../models/carModel";
import { v4 as uuidv4 } from "uuid";
import { CarWithoutUserID, CustomRequest } from "../types/types";

export const addCar = async (req: CustomRequest, res: Response) => {
  const { make, model, year, regnumber, milage } = req.body;
  try {
    const existingCar = await CarModel.findOne({
      where: { regnumber: regnumber, make: make, model: model },
    });

    // Проверяем, существует ли автомобиль
    if (existingCar) {
      res
        .status(403)
        .json({ success: false, message: "this car is already in database" });
      return;
    }

    const newCar = await CarModel.create({
      id: uuidv4(),
      make: make,
      model: model,
      year: year,
      regnumber: regnumber,
      milage: milage,
      user_id: req.user.id,
    });

    // const newRef = await UserCarsModel.create({
    //   id: uuidv4(),
    //   user_id: req.user.id,
    //   car_id: newCar.id,
    // });

    res.status(201).json({ success: true, newCar: newCar });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: e });
  }
};

export const getCarById = async (req: CustomRequest, res: Response) => {
  const carId = req.params.id;
  console.log(carId);
  try {
    const car = await CarModel.findOne({ where: { id: carId } });
    console.log("CAR IS", car);

    if (!car) {
      res
        .status(401)
        .json({ success: false, message: "this car doesn`t exists" });
      return;
    }

    res.status(200).json({ success: true, car: car });
  } catch (e) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: e });
  }
};

export const getAllCars = async (req: CustomRequest, res: Response) => {
  const userId = req.user.id;

  console.log(userId);
  try {
    const cars = await CarModel.findAll({
      where: {
        user_id: userId,
      },
    });

    if (cars.length <= 0) {
      res
        .status(200)
        .json({ success: true, message: "no cars available for this user" });
      return;
    }

    const allCars = cars.map((c: CarModel) => {
      const { user_id, ...carData } = c.dataValues;
      return carData;
    });
    res.status(200).json({ success: true, cars: allCars });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const updateCar = async (req: CustomRequest, res: Response) => {
  const carId = req.params.id;
  const { make, model, year, regnumber, milage } = req.body;
  try {
    const carToUpdate = await CarModel.findOne({ where: { id: carId } });

    if (!carToUpdate) {
      res
        .status(403)
        .json({ success: false, message: "requested car is not available" });
      return;
    }

    carToUpdate.make = make;
    carToUpdate.model = model;
    carToUpdate.year = year;
    carToUpdate.regnumber = regnumber;
    carToUpdate.milage = milage;

    await carToUpdate.save();

    res.status(201).json({
      success: true,
      message: "car updated",
      car: carToUpdate,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const deleteCar = async (req: CustomRequest, res: Response) => {
  const carId = req.params.id;

  try {
    const carToDelete = await CarModel.findOne({ where: { id: carId } });

    if (!carToDelete) {
      res
        .status(403)
        .json({ success: false, message: "requested car is not available" });
      return;
    }

    await carToDelete.destroy();

    res.status(200).json({ success: true, message: "car deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};
