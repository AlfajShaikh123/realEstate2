import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
function Footer()
{
    return (<>
    <div className="linear bottom-0">
      <div className="bg-blue-100 flex items-center md:flex-row flex-col gap-5 justify-between p-5 ">
        <div className="flex gap-5  ">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" className="h-5" />
          <img src="https://cdn-icons-png.flaticon.com/256/5968/5968830.png" alt="" className="h-5" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" className="h-5" />
          <img src="https://cdn-icons-png.flaticon.com/512/174/174883.png" alt="" className="h-5"/>
          <img src="https://cdn-icons-png.flaticon.com/512/300/300218.png" alt="" className="h-5" />
        </div>
        <div className=" flex gap-5 font-bold text-sm montserrat">
          <p>Advertise with us</p>
          <p>Contact us</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
          <p>Help Center</p>
        </div>
      </div>

      <div className="bg-gray-500 text-center p-2 text-black font-bold montserrat text-sm">
        <p>All tradmarks logos and names are properties owners All rights reserved @ Copyright 2024 real estate Realty Services Limited.</p>
      </div>
    </div>
    </>)
}
export default Footer