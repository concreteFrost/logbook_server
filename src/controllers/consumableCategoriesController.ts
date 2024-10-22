import ConsumableCategoryModel from "../models/categoryModel";
import { CustomRequest } from "../types/types";
import { Response } from "express";

export const getAllCategories = async (req: CustomRequest, res: Response) => {
  try {
    const categories = await ConsumableCategoryModel.findAll();

    res.status(200).json({ success: true, message: categories });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};

export const getOneCategory = async (req: CustomRequest, res: Response) => {
  try {
    const category = await ConsumableCategoryModel.findOne({
      where: { id: req.params.id },
    });

    if (!category) {
      res.status(403).json({ success: true, message: "category not found" });
      return;
    }

    res.status(200).json({ success: true, message: category });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong", error: error });
  }
};
