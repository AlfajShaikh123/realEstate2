import { Button } from "@material-tailwind/react"
import React, { useState } from 'react';


export function Rental_one() {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClick2 = () => {
        setIsOpen2(!isOpen2);
    };

    const handleClick3 = () => {
        setIsOpen3(!isOpen3);
    };
    const cardData = [
        {
            image: "https://i.pinimg.com/736x/d0/c0/4b/d0c04be7f982a0753cb6dc0c565ea661.jpg",
            images: ['', '', ''],
            title: "2 BHK Apartment for Rent in Konark Virtue Keshav Nagar Pune",
            ownerL: "Raj Patel",
            contact: 747587854,
            price: 16000,
            km: "1.5 Km from konark vertue",

            type: {
                furnished: "unfurnished",
                bathroom: 2,
                parking: "Bike & Car Parking",
                area: 792,
                floor: "7 out of 18",
                security: "Security guard & CCTV",
                bed: 2
            },

            details: {
                price_breakup: 90,
                booking_amount: 100000,
                address: 'Pune Maharastra',
                ownerships: 'Co-operative Society',
                overlooking: 'Garder/park',
                emi: 41,
                age: '5 to 10',
                description: 'Multistorey 3 sides open Aprartment is avilable for sale it has converted area of 998 sq-ft it is a good location property please contact for more details. '

            }

        },


    ]
    return (<>

        <div>
            <div className="md:mt-44 mt-28">
                {cardData.map((item) => (
                    <div className="bg-blue-gray-50 p-5 space-y-4 md:m-5 border-2 border-gray-400 m-2">
                        <div className="flex text-sm">
                            <div className="flex items-center  gap-2 me-2 ">
                                <span className="font-bold"><img src="https://cdn-icons-png.flaticon.com/512/25/25473.png" className="h-4" alt="" /></span> <p>{item.details.price_breakup}L</p>
                            </div>

                            <div className="flex items-center md:gap-2 gap-1 me-2 p-2 border-x-2 ">
                                <span className="font-bold">EMI</span>
                                <span className="font-bold"><img src="https://cdn-icons-png.flaticon.com/512/25/25473.png" className="h-4" alt="" /></span> <p>{item.details.emi}L</p>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <span className="font-bold md:text-lg text-xs">How much loan can i get ?</span>

                            </div>
                        </div>
                        <div className="md:flex gap-5">

                            <div className="space-y-3 md:w-[50%]">
                                <p>{item.title}</p>
                                <img src={item.image} className="h-56 " alt="" />
                                <div className="flex md:gap-[9px] gap-5  ">


                                    <div onClick={handleClick}
                                        className={`relative cursor-pointer transition-transform duration-300 ${isOpen ? 'fixed inset-0 z-50 flex items-center justify-center' : ''
                                            }`}>
                                        <img src="https://www.houzlook.com/assets/images/upload/Rooms/Bed%20Rooms/View_01-20200822103638797.jpg" alt="" className={`transition-transform duration-300 md:h-20 h-[70px] ${isOpen ? 'scale-150' : 'scale-100'
                                            }`} />

                                        {isOpen && (
                                            <div
                                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                                onClick={handleClick}
                                            />
                                        )}
                                    </div>

                                    <div onClick={handleClick2}
                                        className={`relative cursor-pointer transition-transform duration-300 ${isOpen2 ? 'fixed inset-0 z-50 flex items-center justify-center' : ''
                                            }`}>
                                        <img src="https://www.houzlook.com/assets/images/upload/Rooms/Bed%20Rooms/Romania%20Modern%20Bed%20Room-20180819092202913.jpg" alt="" className={`transition-transform duration-300 md:h-20 h-[70px] ${isOpen2 ? 'scale-150' : 'scale-100'
                                            }`} />

                                        {isOpen2 && (
                                            <div
                                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                                onClick={handleClick2}
                                            />
                                        )}
                                    </div>

                                    <div onClick={handleClick3}
                                        className={`relative cursor-pointer transition-transform duration-300 ${isOpen3 ? 'fixed inset-0 z-50 flex items-center justify-center' : ''
                                            }`}>
                                        <img src="https://www.houzlook.com/assets/images/upload/Rooms/Bed%20Rooms/Romania%20Classic%20BedRoom-20171210082135949.jpg" alt="" className={`transition-transform duration-300 md:h-20 h-[70px] ${isOpen3 ? 'scale-150' : 'scale-100'
                                            }`} />

                                        {isOpen3 && (
                                            <div
                                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                                onClick={handleClick3}
                                            />
                                        )}
                                    </div>


                                </div>


                            </div>
                            <div className="mt-12 md:w-full">


                                <div className="grid grid-flow-row md:grid-cols-3 grid-cols-2 md:gap-14 gap-7 ms-3 mt-5 text-sm text-gray-700">
                                    <div className="flex items-center gap-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1727/1727484.png" alt="" className="h-5" />
                                        <p className="text-xs montserrat ">{item.type.bed} Bed</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/5778/5778337.png" alt="" className="h-5" />
                                        <p className="text-xs montserrat ">{item.type.bathroom} Bath</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830318.png" alt="" className="h-5" />
                                        <p className="text-xs montserrat ">{item.type.parking} </p>
                                    </div>
                                    <p>Super Build-Up Area</p>
                                    <p>Floor</p>
                                    <p>Transaction Type</p>
                                    <p>Status</p>
                                    <p>Facing</p>
                                    <p>Furnished Status</p>
                                    <p>Car Parking</p>
                                    <p>Type of Ownwership</p>
                                    <p>Age of COnstrusction</p>
                                </div>
                            </div>
                        </div>
                        <hr className="h-1 bg-black" />
                        <div>
                            <div className="flex items-center justify-between gap-5">
                                <Button color="green">Contact Owner</Button>
                                <p>Last contact made 1 day ago </p>
                            </div>
                        </div>
                    </div>


                ))}

                <div>
                    {cardData.map((item) => (
                        <div className="bg-gray-200 p-5 md:m-5 m-3 space-y-5 text-sm md:text-lg">
                            <p className="font-bold">More Details</p>
                            <div className="flex gap-2 ">
                                <p>Price breakup :</p>
                                <p className="flex items-center font-bold"><span><img src="https://cdn-icons-png.flaticon.com/512/25/25473.png" className="h-4" alt="" /></span>{item.details.price_breakup} Lac</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Booking Amount :</p>
                                <p className="flex items-center font-bold"><span><img src="https://cdn-icons-png.flaticon.com/512/25/25473.png" className="h-4 " alt="" /></span>{item.details.booking_amount} Lac</p>
                            </div>
                            <div className="flex gap-2 ">
                                <p>Booking Amount :</p>
                                <p className="flex items-center font-bold">{item.details.address} Lac</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Furnished :</p>
                                <p className="flex items-center font-bold">{item.type.furnished}</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Type of Ownership :</p>
                                <p className="flex items-center font-bold">{item.details.ownerships}</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Overlooking:</p>
                                <p className="flex items-center font-bold">{item.details.overlooking}</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Age of Construction  :</p>
                                <p className="flex items-center font-bold">{item.details.age}</p>
                            </div>

                            <div className="flex gap-2">
                                <p>Description :</p>
                                <p className="flex items-center font-bold">{item.details.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Previous viewed properties */}
                <div className="m-5 p-5 bg-gray-100">
                    <p className="font-bold">Previously Viewed Properties</p>
                    <div className=" overflow-auto ">

                        <div className="flex md:gap-2 gap-24">

                            <div className="flex  border-2 border- m-5 rounded-xl shadow-xl p-2">
                                <img src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg" alt="" className="h-40 rounded-xl" />
                                <div className="ms-5">
                                    <p className="">1 BHK House</p>
                                    <p className="font-bold">90 Lac</p>
                                    <p>Green Hills Apartment Wagholi Pune</p>
                                    <Button className="mt-5" variant="outlined" color="red">Contact </Button>
                                </div>
                            </div>

                            <div className="flex  border-2 m-5 rounded-xl shadow-xl p-2">
                                <img src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg" alt="" className="h-40 rounded-xl" />
                                <div className="ms-5">
                                    <p className="">1 BHK House</p>
                                    <p className="font-bold">90 Lac</p>
                                    <p>Green Hills Apartment Wagholi Pune</p>
                                    <Button className="mt-5" variant="outlined" color="red">Contact </Button>
                                </div>
                            </div>


                            <div className="flex  border-2 m-5 rounded-xl shadow-xl p-2">
                                <img src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg" alt="" className="h-40 rounded-xl" />
                                <div className="ms-5">
                                    <p className="">1 BHK House</p>
                                    <p className="font-bold">90 Lac</p>
                                    <p>Green Hills Apartment Wagholi Pune</p>
                                    <Button className="mt-5" variant="outlined" color="red">Contact </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Properties Servises */}

                <div className="m-5 p-5 bg-gray-100">
                    <p className="font-bold">property Services</p>
                    <div className="flex md:flex-row flex-col">

                        <div className=" border-2 m-5 rounded-xl shadow-xl p-2">
                            <img src="https://s31898.pcdn.co/wp-content/uploads/2022/06/HOME-LOAN-HIKE1200X800-e1655099511258.jpg" alt="" className="h-40 rounded-xl" />
                            <div className=" text-center">

                                <p className="font-bold">Home Loans</p>
                                <p className="">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                        <div className=" border-2 m-5 rounded-xl shadow-xl p-2">
                            <img src="https://www.shutterstock.com/shutterstock/photos/2356594305/display_1500/stock-photo-man-holding-wooden-cubes-with-icons-and-inscription-local-seo-local-search-marketing-e-commerce-2356594305.jpg" alt="" className="h-40 rounded-xl" />
                            <div className=" text-center">

                                <p className="font-bold">Legal Services</p>
                                <p className="">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>


                        <div className=" border-2 m-5 rounded-xl shadow-xl p-2">
                            <img src="https://www.jkcement.com/wp-content/uploads/2023/10/wepik-export-20231017091318V8EZ-jpeg.webp" alt="" className="h-40 rounded-xl" />
                            <div className=" text-center">

                                <p className="font-bold">Vastu </p>
                                <p className="">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
