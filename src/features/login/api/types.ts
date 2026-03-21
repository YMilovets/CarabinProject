import { User } from "next-auth";

export type UserRowType = User & {
  password_hash: string;
  _id: string;
};
