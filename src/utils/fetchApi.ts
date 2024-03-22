import axios from "axios";

export type newUserDataProps = {
  clerkId?: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
};

export type newPasswordProps = {
  clerkId?: string;
  site: string;
  username: string;
  password: string;
};

const serverUrl = import.meta.env.VITE_SERVER;

export const createUser = async (userData: newUserDataProps) => {
  try {
    await axios.post(`${serverUrl}api/user/new`, userData);
  } catch (error) {}
};

export const getAllPasswords = async (id?: string, currentPage?: number) => {
  try {
    const passwords = await axios.get(
      `${serverUrl}api/password/${id}/?page=${currentPage}`
    );
    return passwords.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPassword = async (password: newPasswordProps) => {
  try {
    await axios.post(`${serverUrl}api/password/new`, password);
  } catch (error) {
    console.log(error);
  }
};

export const deletePasswoed = async (id: string) => {
  try {
    await axios.delete(`${serverUrl}api/password/${id}`);
  } catch (error) {
    console.log(error);
  }
};
