import { Request, Response } from "express";

// Определяем интерфейс для пользовательского запроса
export interface CustomRequest extends Request {
  user: {
    id: string;
    // Добавьте здесь дополнительные поля
    name?: string; // Пример дополнительного поля
    email?: string; // Еще одно дополнительное поле
  };
}

export type CarStructure = {
  id: string;
  make: string;
  model: string;
  year: number;
  regnumber: string;
  milage: number;
  user_id: string;
  created_at: Date;
  updated_at?: Date;
};

export type CarWithoutUserID = Omit<CarStructure, "user_id">;

export type ConsumableCategoryStructure = {
  id: number;
  name: string;
  distance_to_replace: number;
};

export type ConsumableStructure = {
  id: string;
  make: string;
  category: number;
  replacement_date: Date;
  replacement_distance: number;
  details?: string;
  car_id: string;
  created_at: Date;
  updated_at?: Date;
};
