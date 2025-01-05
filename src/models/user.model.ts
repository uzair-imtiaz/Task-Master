import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/sequelize.config';
import { UserAttributes, UserCreationalAttributes } from '../types/user';
import { hashPassword } from '../utils';

class User extends Model<UserAttributes, UserCreationalAttributes> {
  public password!: string;
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
  }
);

User.addHook('beforeSave', async (user: User) => {
  if (user.changed('password')) {
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
  }
});

export default User;
