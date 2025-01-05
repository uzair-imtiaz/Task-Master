import { User } from '../models';
import { UserCreationalAttributes } from '../types';

export const createUser = async (payload: UserCreationalAttributes) => {
  return await User.findOrCreate({
    where: {
      username: payload.username,
    },
    defaults: {
      ...payload,
    },
  });
};

export const findByPk = async (id: number) => {
  return await User.findByPk(id);
};

export const findOne = async (payload: UserCreationalAttributes) => {
  return await User.findOne({
    where: {
      ...payload,
    },
  });
};
