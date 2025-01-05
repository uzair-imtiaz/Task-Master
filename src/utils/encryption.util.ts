import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  const SALT_ROUNDS = 10;
  return bcrypt.hash(password, SALT_ROUNDS);
};

export const compareHashedPasswords = (
  enteredPassword: string,
  hashedPassword: string
) => {
  return bcrypt.compare(enteredPassword, hashedPassword);
};
