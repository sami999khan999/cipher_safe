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

export const createUser = async (userData: newUserDataProps) => {
  // try {
  await axios.post("http://localhost:4000/api/user/new", userData);
  // } catch (error) {
  //   console.log(error);
  // }
};

export const getAllPasswords = async (id?: string) => {
  try {
    const passwords = await axios.get(
      `http://localhost:4000/api/password/${id}`
    );
    return passwords.data;
  } catch (error) {
    console.error(error);
  }
};

export const createPassword = async (password: newPasswordProps) => {
  try {
    await axios.post("http://localhost:4000/api/password/new", password);
  } catch (error) {
    console.log(error);
  }
};

export const deletePasswoed = async (id: string) => {
  try {
    await axios.delete(`http://localhost:4000/api/password/${id}`);
  } catch (error) {
    console.log(error);
  }
};
