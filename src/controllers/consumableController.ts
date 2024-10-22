import { Response } from "express";
import { CustomRequest } from "../types/types";
import ConsumableModel from "../models/consumableModel";
import { v4 as uuidv4 } from "uuid";

export const addConsumableRecord = async (
  req: CustomRequest,
  res: Response
) => {
  const {
    make,
    category,
    replacement_date,
    replacement_distance,
    details,
    car_id,
  } = req.body;
  try {
    const newRecord = await ConsumableModel.create({
      id: uuidv4(),
      make: make,
      category: category,
      replacement_date: replacement_date,
      replacement_distance: replacement_distance,
      details: details,
      car_id: car_id,
      created_at: new Date(),
    });

    res.status(200).json({ success: true, new_record: newRecord });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const getAllRecords = async (req: CustomRequest, res: Response) => {
  try {
    const records = await ConsumableModel.findAll({
      where: { car_id: req.params.car_id },
    });

    if (records.length <= 0) {
      res.status(200).json({
        success: true,
        message: "no records found for this car",
      });
      return;
    }

    res.status(200).json({
      success: true,
      records: records,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const getAllRecordsByCategory = async (
  req: CustomRequest,
  res: Response
) => {
  console.log("category is ", req.body.category);
  try {
    const records = await ConsumableModel.findAll({
      where: { car_id: req.params.car_id, category: req.body.category },
    });

    if (records.length <= 0) {
      res.status(200).json({
        success: true,
        message: "no records found for this car",
      });
      return;
    }
    res.status(200).json({
      success: true,
      records: records,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const updateRecord = async (req: CustomRequest, res: Response) => {
  const { make, replacement_date, replacement_distance, details } = req.body;
  try {
    const recordToEdit = await ConsumableModel.findOne({
      where: { id: req.params.id },
    });

    if (!recordToEdit) {
      res.status(403).json({ success: false, message: "no record found" });
    }

    recordToEdit.make = make;
    recordToEdit.replacement_date = replacement_date;
    recordToEdit.replacement_distance = replacement_distance;
    recordToEdit.details = details;
    recordToEdit.updatedAt = new Date();

    res.status(200).json({ success: true, updatedRecord: recordToEdit });

    await recordToEdit.save();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};
