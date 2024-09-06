import { NavLink } from "react-router-dom"

export function Services() {
    const serviceData = [
        {
            image: 'https://st4.depositphotos.com/1010613/23840/i/450/depositphotos_238406070-stock-photo-young-woman-looking-male-technician.jpg',
            title: 'Ac service',
            navlink: 'ac'
        },
        {
            image: 'https://media.istockphoto.com/id/1134524065/photo/industrial-pest-control.jpg?s=612x612&w=0&k=20&c=6crJWKW5ea9Ap1wEYJv0PcF57IO6v1sRD7B8gc8r848=',
            title: 'Pest Controll Services'
        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/WQ/DB/BA/110577919/house-electrical-wiring-service.jpg',
            title: 'Electrical Services'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCdEn9xofi_8fCRmG9eSBP4e52jUaeSn2TQ&s',
            title: 'WiFi Services'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpk-VbLoKVBtKUEBpRxkpo1_1zGgyHgeIyVw&s',
            title: 'Glocery Service'
        },
        {
            image: 'https://www.sk24packersandmovers.com/plumberimages/general.jpg',
            title: 'Plumbing Service'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdNOlsFoej95xyN6AvXLdBxNM25RLVYUQFQ&s',
            title: 'Painting Service',
            navlink: 'painting'
        },
        {
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/395871659/RL/BP/EC/161911943/office-housekeeping-services-500x500.jpg',
            title: 'HouseKeeping Service'
        },
        {
            image: 'https://i0.wp.com/www.dikshadthdealer.com/wp-content/uploads/2022/01/DTH-Dishtv-Installation-service.jpeg?fit=1024%2C576&ssl=1',
            title: 'DTH Service'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7RLSWAT1gx0M9PitD3-tlLIt38lmSxwZzw&s',
            title: 'Gardeing Service'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpBBcWNrVvx4P_FX6bO0xaNrPy0q9eyYpwQ&s',
            title: 'Carpaenter Services'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVd-8rVXxmgpgLsWrKHmYEPPDf5jMOgurRdg&s',
            title: 'Security Services'
        },
    ]
    return (<>

        <div className="mt-32 mb-20">
            <p className="text-center font-bold montserrat text-xl">Diffrent Services That Makes Your Life Easy </p>
            <div className="grid md:grid-cols-4 space-y-5 mt-5   ">
                {serviceData.map((item) => (
                    <NavLink to={item.navlink}>
                        <div className="relative md:p-5 m-auto ">
                            <img src={item.image} alt="" className="h-52 rounded-xl shadow-xl" />
                            <div className="flex justify-center items-center">
                                <p className="absolute bottom-0  bg-white montserrat p-2 shadow-xl text-sm ">{item.title}</p></div>
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>

    </>)
}