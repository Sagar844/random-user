import axios from "axios";


const userapi = "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
export const getuser = async () => {
  const response = await axios.get(userapi)
  return response.data.results
}
