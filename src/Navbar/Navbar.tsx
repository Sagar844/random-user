/* eslint-disable @typescript-eslint/ban-types */

import { FC } from "react";

type Navbarprops = {};

const Navbar: FC<Navbarprops> = () => {
    return (
        <>
            <div className="flex  justify-between items-center mx-20 mt-5">
                <h1 className="font-bold">YourChallenge</h1>
                <div className="space-x-4 font-semibold">
                    <a
                        className="underline decoration-[#E16259] "

                        href="/Pricing"
                    >
                        Pricing
                    </a>
                    <a href="/Download">Download</a>
                    <a href="/Product">Product</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
