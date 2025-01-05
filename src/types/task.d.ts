import { Optional } from 'sequelize';

export interface TaskAttributes {
  title: string;
  description?: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  assignedTo?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskCreationalAttributes
  extends Optional<TaskAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
