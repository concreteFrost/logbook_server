import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
} from "sequelize-typescript";
import UserModel from "./userModel";
import CarModel from "./carModel";

export interface UserCarsAttributes {
  id: string;
  user_id: string;
  car_id: string;
  created_at: Date;
  updated_at?: Date;
}

@Table({ tableName: "user_cars", timestamps: true })
class UserCarsModel
  extends Model<UserCarsAttributes>
  implements UserCarsAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  declare id: string;

  @ForeignKey(() => UserModel)
  @Column
  user_id: string;

  @ForeignKey(() => CarModel)
  @Column
  car_id: string;

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

export default UserCarsModel;
