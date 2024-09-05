import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-purple-800"
      >
        <a href="#" className="flex items-center montserrat">
          Home
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-purple-800"
      >
        <a href="#" className="flex items-center montserrat">
          Listing
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-purple-800"
      >
        <a href="#" className="flex items-center montserrat">
          Properties
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-purple-800"
      >
        <a href="#" className="flex items-center montserrat">
         Contact us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:text-purple-800"
      >
        <a href="#" className="flex items-center montserrat">
         About
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] md:pt-5 p-3 fixed z-20 top-0">
      <Navbar className="top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900">
            
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer  text-xl font-medium playwrite-cu"
          >
            <div className="flex items-center md:gap-5 gap-2">
            <img src="https://img.freepik.com/free-vector/logo-real-estate-home-solutions-that-is-home-solution_527952-33.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid" className="h-20" alt="" />
            <p> Real Estate</p>
            </div>
            
           
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Sign up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    
    </div>
  );
}