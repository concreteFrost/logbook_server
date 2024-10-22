import {
  Table,
  Column,
  DataType,
  Model,
  PrimaryKey,
  AutoIncrement,
} from "sequelize-typescript";
import { ConsumableCategoryStructure } from "../types/types";

@Table({ tableName: "consumable_categories", timestamps: false })
class ConsumableCategoryModel
  extends Model<ConsumableCategoryStructure>
  implements ConsumableCategoryStructure
{
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare distance_to_replace: number;
}

export default ConsumableCategoryModel;
