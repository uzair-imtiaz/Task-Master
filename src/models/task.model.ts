import { DataTypes, Model } from 'sequelize';
import sequelize from '../configs/sequelize.config';
import User from './user.model';
import { TaskAttributes, TaskCreationalAttributes } from '../types/task';

class Task extends Model<TaskAttributes, TaskCreationalAttributes> {}

Task.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed'),
      defaultValue: 'pending',
    },
    priority: {
      type: DataTypes.ENUM('low', 'medium', 'high'),
      defaultValue: 'low',
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    assignedTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  { sequelize, modelName: 'Task', timestamps: true, tableName: 'tasks' }
);

Task.belongsTo(User, { foreignKey: 'assignedTo', as: 'assignedUser' });

export default Task;
