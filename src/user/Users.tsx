/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { FC, useEffect, useState } from "react";
import { getuser } from "../api/api";
import { Result } from "../types/user";
import UsersCart from "../componets/UsersCart";

type Usersprops = {};

const Users: FC<Usersprops> = () => {
  const [users, setusers] = useState<Result[]>([]);
  const [usersDetail, setuserdetails] = useState<any>({});
  // console.log(users);
  console.log(usersDetail);
  useEffect(() => {
    (async () => {
      try {
        const res = await getuser();
        setusers(res);
        setuserdetails(res[0])
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {
      console.log("componets unmounted");
    };
  }, []);

  return (
    <>
      <div className="flex justify-center  items-center space-x-5 space-y-5 my-40">
        <div>
          <img
            className="w-20  rounded-full "
            src={usersDetail?.picture?.large}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-6xl text-red-400 font-bold   ">{usersDetail?.name?.first}</h2>
          <div className="flex space-x-2">
            <h6>{usersDetail?.location?.city}</h6>
            <h3>{usersDetail?.location?.country}</h3>
            <h3>{usersDetail?.location?.postcode}</h3>
          </div>

          <h1 className="text-[#00000099]">{usersDetail?.gender}</h1>
        </div>
      </div>

      <div className=" grid sm:grid-cols-2 grid-cols-4 md:mx-20  gap-4 lg:mx-20 justify-center my-30">
        {users.map((item) => {
          return (
            <>
              <UsersCart
                usersDetail={usersDetail}
                setuser={setuserdetails}
                item={item}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Users;
