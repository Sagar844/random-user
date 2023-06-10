/* eslint-disable @typescript-eslint/no-explicit-any */

import Navbar from "./Navbar/Navbar"
import UsersDetail from "./UserDetails/UsersDetail"
import Users from "./user/Users"

const App = () => {

    return(
        <>
        <Navbar/>
        <UsersDetail />
        <Users />
        </>
    )
}

export default App