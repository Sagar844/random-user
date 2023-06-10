/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Result } from "../types/user";

type UserCartProps = {
  item: Result;
  setuser: any;
  usersDetail:any
};

const color = "bg-purple-500"
const UsersCart: FC<UserCartProps> = ({ item, setuser, usersDetail }) => {
  return (
    <>
      <div
        onClick={() => setuser(item)}
        className={`${usersDetail?.email == item?.email? color : ""
          } bg-gray-400 my-5 py-4 px-8 rounded-md  cursor-pointer `}
      >
        <h1 className="text-[#00000099]">{item.gender}</h1>
        <h1 className="font-bold">{item.name.first}</h1>
        <h1 className="text-[#E16259] text-sm">{item.email}</h1>
      </div>
    </>
  );
};

export default UsersCart;
