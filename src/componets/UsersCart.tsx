import { FC } from "react";
import { Result } from "../types/user";

type UserCartProps = {
  item: Result;

};

const UsersCart: FC<UserCartProps> = ({ item}) => {
  return (
    <>
      
        <div  className="bg-[#A259FF] rounded-md p-4 ">
          <h1 className="text-[#00000099]">{item.gender}</h1>
          <h1 className="font-bold">{item.name.first}</h1>
          <h1 className="text-[#E16259]">{item.email}</h1>
        </div>

    </>
  );
};

export default UsersCart;
