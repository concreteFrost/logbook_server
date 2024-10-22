import { ForeignKey } from "sequelize-typescript";
import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import UserModel from "./userModel";
import { CarStructure } from "../types/types";

@Table({ tableName: "cars" })
class CarModel extends Model<CarStructure> implements CarStructure {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare make: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare model: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare year: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare regnumber: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare milage: number;

  @ForeignKey(() => UserModel)
  @Column
  user_id: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  declare created_at: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  declare updated_at: Date;
}

export default CarModel;
