import { NavLink } from "react-router-dom"

export function Services() {
    const serviceData = [
        {
            image: 'https://t4.ftcdn.net/jpg/05/11/92/95/360_F_511929539_hkrzPKGI6pEA8TwUfrwrB0g73FyEaowM.jpg',
            title: 'Ac service',
            navlink: 'ac'
        },
        {
            image: 'https://media.istockphoto.com/id/1134524065/photo/industrial-pest-control.jpg?s=612x612&w=0&k=20&c=6crJWKW5ea9Ap1wEYJv0PcF57IO6v1sRD7B8gc8r848=',
            title: 'Pest Controll Services'
        },
        {
            image: 'https://t4.ftcdn.net/jpg/01/70/17/97/360_F_170179753_piUSFjn4xlwAKaIU14gs6FnCVij2wckc.jpg',
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
            image: 'https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90=',
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
            <div className="grid md:grid-cols-4 grid-cols-2  mt-5 gap-5 p-5    ">
                {serviceData.map((item) => (
                    <NavLink to={item.navlink}>
                        <div className="relative md:p-5 m-auto ">
                            <img src={item.image} alt="" className="md:h-52 h-[250px] rounded-xl shadow-xl" />
                            <div className="flex justify-center items-center">
                                <p className="absolute bottom-0  bg-white montserrat p-2 shadow-xl text-sm ">{item.title}</p></div>
                        </div>
                    </NavLink>
                ))}

            </div>
        </div>

    </>)
}