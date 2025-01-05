import { Optional } from 'sequelize';

export interface UserAttributes {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  email: string;
}

export interface UserCreationalAttributes
  extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt'> {}
