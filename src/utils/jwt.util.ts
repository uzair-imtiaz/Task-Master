import token from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAttributes } from '../types';
dotenv.config();

const JWT_ACCESS_SECRET = String(process.env.JWT_ACCESS_SECRET_KEY);
const JWT_REFRESH_SECRET = String(process.env.JWT_REFRESH_SECRET_KEY);
const ACCESS_TOKEN_EXPIRES_IN = String(process.env.JWT_ACCESS_TOKEN_EXPIRY);
const REFRESH_TOKEN_EXPIRES_IN = String(process.env.JWT_REFRESH_TOKEN_EXPIRY);

export const generateAccessToken = (
  user: UserAttributes,
  expiresIn: string = ACCESS_TOKEN_EXPIRES_IN
) => {
  return token.sign(user, JWT_ACCESS_SECRET, {
    expiresIn,
  });
};

export const verifyAccessToken = (accessToken: string) => {
  try {
    const verifiedToken = token.verify(accessToken, JWT_ACCESS_SECRET);
    if (verifiedToken) {
      return { success: true, token: verifiedToken };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, token: null, message: error.message };
    } else {
      return { success: false, token: null, message: error };
    }
  }
};

export const generateRefreshToken = (
  user: UserAttributes,
  expiresIn: string = REFRESH_TOKEN_EXPIRES_IN
) => {
  return token.sign(user, JWT_REFRESH_SECRET, {
    expiresIn,
  });
};

export const verifyrefreshToken = (refreshToken: string) => {
  try {
    const verifiedToken = token.verify(refreshToken, JWT_REFRESH_SECRET);
    if (verifiedToken) {
      return { success: true, token: verifiedToken };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, token: null, message: error.message };
    } else {
      return { success: false, token: null, message: error };
    }
  }
};

export const decodeAccessOrRefreshToken = (encodedToken: string) => {
  try {
    return token.decode(encodedToken, { complete: true });
  } catch (err) {
    return null;
  }
};

export const getBearerFromheaders = (headers: Headers) => {
  const authorizationHeader = headers.get('authorization');
  if (!authorizationHeader) {
    return null;
  }
  const bearerToken: string | undefined = authorizationHeader.split(' ')?.[1];
  if (!bearerToken) {
    return null;
  }
  return bearerToken;
};
