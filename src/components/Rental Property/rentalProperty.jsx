import { Input } from "@material-tailwind/react";
import React, { useState } from 'react';

export function Rental() {

    const cardData = [
        {
            image: "https://i.pinimg.com/736x/d0/c0/4b/d0c04be7f982a0753cb6dc0c565ea661.jpg",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://img.freepik.com/free-photo/photorealistic-house-with-wooden-architecture-timber-structure_23-2151302742.jpg",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://img.freepik.com/photos-gratuite/maison-bois-photorealiste-structure-bois_23-2151302623.jpg",
            title: "B",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
            title: "C",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://postandporch.com/cdn/shop/articles/AdobeStock_209124760.jpg?v=1662575433&width=1440",
            title: "3 BHK Apartment for Rent in Konark Virtue Keshav Nagar Pune",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://i.pinimg.com/736x/d0/c0/4b/d0c04be7f982a0753cb6dc0c565ea661.jpg",
            title: "4 BHK Apartment for Rent in Konark Virtue Keshav Nagar Pune",
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
                security: "Security guard & CCTV"
            }

        },
        {
            image: "https://i.pinimg.com/736x/d0/c0/4b/d0c04be7f982a0753cb6dc0c565ea661.jpg",
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
                security: "Security guard & CCTV"
            }

        },
    ]

    const [query, setQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState(cardData);

    const handleSearch = (e) => {
        const searchQuery = e.target.value.toLowerCase();
        setQuery(searchQuery);
        const newFilteredCards = cardData.filter((card) =>
            card.title.toLowerCase().includes(searchQuery)
        );
        setFilteredCards(newFilteredCards);
    };
    return (<>
        <div className="md:mt-[105px] mt-20">
            <div className="bg-blue-100 p-3 fixed w-full ">
                <div className=" border-black  rounded-full w-[50%] ">
                    <Input label="Search" icon={<img src="https://cdn-icons-png.flaticon.com/512/861/861627.png" className="rounded-full" />} type="text"
                        value={query}
                       
                        placeholder="Enter title"
                        onChange={handleSearch} />
                </div>
            </div>
            <div className="flex gap-3 pt-20 p-5">
                <p className="montserrat">Properties : <span className="text-red-600">{filteredCards.length}</span></p>
                <p className="montserrat">Top Agents</p>
            </div>
            <hr className="mt-2 h-2" />

            <div className="p-5 space-y-5  ">
                {filteredCards.length === 0 ? (
                    <p>No Data Found</p>
                ) : (filteredCards.map((item, type) => (

                    <div className="md:flex gap-5 p-5 bg-gray-100 rounded-xl  shadow-xl border border-gray-300 md:w-[80%] m-auto">
                        <div className="space-y-3 ">
                            <div>
                                <img src={item.image} className="md:h-40   rounded-xl" alt="" />
                            </div>
                            <div className="flex flex-wrap gap-5 font-bold text-sm">
                                <p>Owner :{item.ownerL}</p>
                                <p>INR {item.price} </p>
                            </div>
                            <div>
                                <p className="text-sm"> Contact : {item.contact}</p>
                            </div>
                            <hr />
                            <div>
                                <p className="text-sm text-gray-600">{item.km}</p>
                            </div>
                        </div>

                        <div className="space-y-5 md:space-x-4 ">
                            <p className="font-bold montserrat md:text-justify md:text-lg text-sm">{item.title}</p>
                            <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-2 md:gap-2 gap-5">
                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1727/1727484.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.furnished}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5778/5778337.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.bathroom}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830318.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.parking}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3939/3939287.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.area} Sqrt</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1207/1207228.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.floor} Sqrt</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2548/2548895.png" alt="" className="h-5" />
                                    <p className="text-xs montserrat ">{item.type.security} Sqrt</p>
                                </div>
                            </div>
                            <div className="text-sm space-y-3 mt-2">
                                <p>Special Offered by Owner</p>
                                <p>Brand New Flat in Brand new scoiety available for immediate posseion</p>
                            </div>
                        </div>
                    </div>

                ))
                )}


            </div>
        </div></>)
}