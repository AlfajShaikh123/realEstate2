import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Button,
} from "@material-tailwind/react";
import { useState } from "react";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}
export function AC() {


    const acData = [
        {
            image: "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-in-the-style-of-2d-game-art-image_2884743.jpg",
            name: "Arjun Ravat",
            agency: "Indian Ac Services",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Hadpasar, Pune 411028',
            start:3
        },
        {
            image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
            name: "Viay Shinde",
            agency: "Shinde Air Conditioning",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Wagholi Pune 412507',
            start:4
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
            name: "Krishna Rao",
            agency: "Krishna Ac Services",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Karadi Pune 410305',
            start:4
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
            name: "Krishna Rao",
            agency: "Krishna Ac Services",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Karadi Pune 410305',
            start:4
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
            name: "Krishna Rao",
            agency: "Krishna Ac Services",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Karadi Pune 410305',
            start:4
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
            name: "Krishna Rao",
            agency: "Krishna Ac Services",
            flow: [
                'Pre service checks',
                'Jacket for mess-free service',
                'Indoor unit Foam-jet cleaning',
                'Outdoor unit Powerjet cleaning',
                'Final checks & clean up ',
                'presonal energy saving report'
            ],
            location: 'Karadi Pune 410305',
            start:4
        },
    ]

    
    return (

        <>
            <div className="mt-36 p-5 grid md:grid-cols-3 md:ms-20 cursor-pointer  gap-10">
                {acData.map((item, flow) => (
                    <Card color="transparent" shadow={false} className="w-full max-w-[26rem] border p-2 shadow-xl transform transition-transform duration-300 md:hover:scale-110">
                        <CardHeader
                            color="transparent"
                            floated={false}
                            shadow={false}
                            className="mx-0 flex items-center gap-4 pt-0 pb-8"
                        >
                            <Avatar
                                size="lg"
                                variant="circular"
                                src={item.image}
                                alt="tania andrew"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray">
                                        {item.name}
                                    </Typography>
                                    <div className="5 flex items-center gap-0">
                                       
                                       {Array.from({length:item.start},(_,idx)=>(
   <StarIcon  key={idx} />
                                       ))}
                                     
                                        {/* <StarIcon />
                                        <StarIcon />
                                        <StarIcon /> */}
                                    </div>
                                </div>
                                <Typography color="blue-gray">{item.agency}</Typography>
                            </div>
                        </CardHeader>

                        <div>

                            <div>
                                <CardBody className="">
                                    <Typography className="">
                                        {Array.isArray(item.flow) ? (
                                            item.flow.map((item, index) => (
                                                <li key={index} className="mb-1">
                                                    {item}
                                                </li>
                                            ))
                                        ) : (
                                            <li>No flow data available</li>
                                        )}
                                    </Typography>
                                </CardBody>

                                <CardBody className="mb-6 ">
                                    <Typography className="flex items-center justify-between">
                                        <p>{item.location}</p>
                                        <Button color="green">Contact</Button>
                                    </Typography>
                                </CardBody>
                            </div>

                        
                        </div>
                    </Card>
                ))}


            </div>

        </>)
}