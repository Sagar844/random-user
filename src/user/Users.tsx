/* eslint-disable @typescript-eslint/ban-types */
import { FC, useEffect, useState } from "react";
import { getuser } from "../api/api";
import { Result } from "../types/user";
import UsersCart from "../componets/UsersCart";

type Usersprops = {};

const Users: FC<Usersprops> = () => {
  const [users, setusers] = useState<Result[]>([]);
  // const [usersDetail , setuserdetails] = useState({})
  // console.log(users);

  useEffect(() => {
    (async () => {
      try {
        const res = await getuser();
        setusers(res);
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
      <div className=" grid grid-cols-4 gap-4 mx-20 justify-center my-60 ">
        {users.map((item) => {
          return (
            <>
              <UsersCart  item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Users;
