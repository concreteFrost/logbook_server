import {
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";
import { ConsumableStructure } from "../types/types";
import CarModel from "./carModel";

@Table({ tableName: "consumables", timestamps: true })
class ConsumableModel
  extends Model<ConsumableStructure>
  implements ConsumableStructure
{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare make: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare category: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare replacement_date: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare replacement_distance: number;

  @Column({
    type: DataType.TEXT,
  })
  declare details?: string;

  @ForeignKey(() => CarModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  declare car_id: string;

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

export default ConsumableModel;
