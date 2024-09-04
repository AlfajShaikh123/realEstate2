import {
    Select, Option, Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
function Home() {

    const ownerData = [
        {
            image: "https://www.bhg.com/thmb/FcKK-L23QiqiDVjrjLgfa1uFZU8=/4000x0/filters:no_upscale():strip_icc()/101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://www.bhg.com/thmb/FcKK-L23QiqiDVjrjLgfa1uFZU8=/4000x0/filters:no_upscale():strip_icc()/101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://www.bhg.com/thmb/FcKK-L23QiqiDVjrjLgfa1uFZU8=/4000x0/filters:no_upscale():strip_icc()/101495134_preview-b192d3b7d4b04188a014754b9ffa6f79.jpg",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
            price: 25000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 4,
            bed: 5,
            sqrt: 43
        }, {
            image: "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }, {
            image: "https://cdn.houseplansservices.com/content/h0rig2dbr8vsg0fcgqco7acmul/w991x660.jpg?v=9",
            price: 22000,
            title: "4219 Bay Pointe Drive",
            address: "4219 Bay Pointe Drive,Saswad KY",
            bath: 3,
            bed: 3,
            sqrt: 43
        }]

    const newsData = [
        {
            image: "https://m.media-amazon.com/images/I/71hS5RlM-3L.jpg",
            title: "Home prices Are finally Falling How Low will they go ?",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis harum? Nostrum libero quo quibusdam facilis a deserunt. Fugit soluta eum provident. Accusantium, accusamus harum!",

        },
        {
            image: "https://static.vecteezy.com/system/resources/previews/023/309/303/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
            title: "Home prices Are finally Falling How Low will they go ?",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis harum? Nostrum libero quo quibusdam facilis a deserunt. Fugit soluta eum provident. Accusantium, accusamus harum!",

        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8AxF6r1b_u5KLicYUArk26BrRQt08GgyUkNCD7j7BFAePvqxZUhGH11h_Rm03srfjtqs&usqp=CAU",
            title: "Home prices Are finally Falling How Low will they go ?",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, veritatis harum? Nostrum libero quo quibusdam facilis a deserunt. Fugit soluta eum provident. Accusantium, accusamus harum!",

        },
    ]
    return (<><div className="pt-12 flex justify-center md:gap-56 p-5">
        <div className="flex justify-center items-center">
            <p className="dancing-script md:text-5xl text-2xl font-bold text-blue-800">Where Dreams  Come Home</p>
        </div>

        <div>
            <img src="src\assets\banner.JPG" alt="" />
        </div>
    </div>
        <div>
            <div className="relative">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="" className="" />

                {/* Form */}
                <div className="bg-white md:block hidden absolute top-[-50px] md:left-[400px] rounded-xl shadow-2xl p-5 ">
                    <div className="flex gap-5 flex-grow">
                        <div className="space-y-1">
                            <p>Property Type</p>
                            <Select label="Select Version">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <p>Location</p>
                            <Select label="Select Version">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <p>Price Range</p>
                            <Select label="Select Version">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className="mt-6">
                            <Button color="green">Search</Button>
                        </div>

                    </div>

                </div>
                <div className="bg-white absolute md:top-0 top-[-55px] md:opacity-0 opacity-85 m-20 mt-32 p-5 rounded-xl">
                    <div className="flex items-center gap-2">
                        <img src="https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Decorative-Elements-PNG/Golden_Star_PNG_Clip_Art_Image.png?m=1629792485" className="h-7" alt="" />
                        <p className="font-bold">4.5</p>
                    </div>
                    <div>
                        <p className="text-lg text-purple-700 font-bold">Over 50K happy Customers</p>
                    </div>

                </div>


            </div>
            <div>

            </div>

            {/* Form */}
            <div className="bg-white md:hidden   rounded-xl shadow-2xl p-5 ">
                <div className="flex gap-3 flex-col">
                    <div className="space-y-1">
                        <p>Property Type</p>
                        <Select label="Select Version">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <p>Location</p>
                        <Select label="Select Version">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <p>Price Range</p>
                        <Select label="Select Version">
                            <Option>Material Tailwind HTML</Option>
                            <Option>Material Tailwind React</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="mt-6">
                        <Button color="green">Search</Button>
                    </div>

                </div>

            </div>
            {/* Scale */}
            <div className="md:flex gap-10 justify-center items-center bg-green-200 p-5 grid grid-rows-1 grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-2">
                    <p className="font-bold text-xl">300 +</p>
                    <p className="text-sm text-center">Happy Clients</p>
                </div>

                <div className="flex flex-col items-center  gap-2">
                    <p className="font-bold text-xl">1K +</p>
                    <p className="text-sm ">Property Ready</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="font-bold text-xl">80+</p>
                    <p className="text-sm">Completed Agents</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <p className="font-bold text-xl">60%</p>
                    <p className="text-sm">Yearly Growth</p>
                </div>
            </div>

            {/* Scale-2 */}

            <div className="flex overflow-auto gap-2 p-5 scrollbar-hidden ">
                <img src="https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625_640.jpg" alt="" className="h-52 shadow-xl rounded-xl" /><img src="https://www.nobroker.in/blog/wp-content/uploads/2024/03/renting-a-house-vs-renting-an-apartment.jpg" alt="" className="h-52  shadow-xl rounded-xl" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9fw3heOOzHNWi07NusKT0wAe_VnleFhp_A&s" className="h-52  shadow-xl rounded-xl" alt="" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGz86yvCqKOw5BymCVrADNGcjY2POzwTo1Q&s" className="h-52 shadow-xl rounded-xl" alt="" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_27q1gJYzkapMkyjsWrec1ThvUehACrMAag&s" className="h-52 shadow-xl rounded-xl" alt="" />
            </div>

            {/* Categories */}
            <div className="pt-12">
                <p className="text-center font-bold playwrite-cu text-2xl">Categories</p>
                <div className="md:flex justify-center md:gap-28 gap-5 pt-10 grid grid-rows-1 grid-cols-3 ">
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/6917/6917662.png" className="h-12 " alt="" />
                        <p className="font-bold text-sm ">Apartment</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/287/287912.png" alt="" className="h-12" />
                        <p className="font-bold text-sm ">Building</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1670/1670080.png" alt="" className="h-12" />
                        <p className="font-bold text-sm ">House</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/7587/7587583.png" alt="" className="h-12" />
                        <p className="font-bold text-sm ">Land</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs76AVCnMVksyL07PQaqUqK3D1ZdSVtjkaxg&s" className="h-12" alt="" />
                        <p className="font-bold text-sm ">Store</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/1648/1648590.png" className="h-12" alt="" />
                        <p className="font-bold text-sm ">village</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/3061/3061160.png" alt="" className="h-12" />
                        <p className="font-bold text-sm ">Warehouse</p>
                    </div>
                </div>
            </div>

            {/* Owner Properties */}

            <div className="pt-10 p-5  ">
                <p className="text-center font-bold playwrite-cu md:text-2xl text-xl">Exclusive Owner Properties in pune</p>
                <div className="md:grid grid-rows-1  grid-cols-4 gap-5 flex flex-col mt-10">
                    {
                        ownerData.map((item) => (
                            <Card className="pt-14  m-auto  shadow-2xl">
                                <CardHeader color="blue-gray" className="relative h-56">
                                    <img
                                        src={item.image}
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        INR. {item.price}
                                    </Typography>
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-sm">
                                        {item.title}
                                    </Typography>
                                    <Typography className="text-xs">
                                        {item.address}
                                    </Typography>
                                </CardBody>
                                <hr />
                                <CardBody>
                                    <Typography>
                                        <div className="flex gap-2 ">
                                            <div className="flex items-center gap-2">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEr9rCh1NdFWytbOeH-ZGVOoSP0KRGfz7pDQ&s" alt="" className="h-5" />
                                                <p className="font-bold">{item.bath}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="https://cdn-icons-png.flaticon.com/512/1727/1727484.png" alt="" className="h-5" />
                                                <p>{item.bed}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <img src="https://cdn-icons-png.flaticon.com/512/7554/7554093.png" alt="" className="h-5" />
                                                <p>{item.sqrt} meter/square</p>
                                            </div>

                                        </div>
                                    </Typography>
                                </CardBody>
                                <hr />
                                <CardFooter className="">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        ))
                    }

                </div>
            </div>

            {/* Happy customer */}
            <div className="mt-10">
                <p className="text-center font-bold playwrite-cu text-2xl">Contact with a happy cutomer</p>
                <div className="flex justify-center mt-5 ">
                    <img src="src\assets\customer.JPG" alt="" className="shadow-2xl " />
                </div>
                <div className="flex justify-center mt-10">
                    <Button color="green">See More</Button>
                </div>
            </div>

            {/* Latest News */}

            <div className="mt-20 p-5">
            <p className="text-center font-bold playwrite-cu text-2xl">Our Latest News</p>
                <div className="flex gap-3 md:flex-row flex-col mt-10">
                    {newsData.map((item) => (
                        <Card className="w-full max-w-[48rem] md:flex-row border-2">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
                            >
                                <img
                                    src={item.image}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {item.title}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    {item.discription}
                                </Typography>
                                <Button>Read More</Button>
                            </CardBody>
                        </Card>
                    ))}






                </div>
            </div>
            <div>

            </div>
        </div>
    </>)
}

export default Home