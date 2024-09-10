import { Select, Option, Input } from "@material-tailwind/react";
export function Post() {
    return (<>
        <div className="mt-36">
            <div className="flex md:flex-row flex-col md:items-center p-5 gap-5">
                <div>
                    <img src="src\assets\post.JPG" alt="" />
                </div>
                <div className="space-y-7 border-2 p-5 md:m-5 md:w-[50%]   ">
                    <p className="font-bold">Lets get you started</p>
                    <p className="text-sm font-bold">You are :</p>
                    <div className="flex  gap-2 text-sm ">
                        <div className="border rounded-full p-3">Owner</div>
                        <div className="border rounded-full p-3">Agent</div>
                        <div className="border rounded-full p-3">Builder</div>
                    </div>

                    <p className="text-sm font-bold">You are here to :</p>
                    <div className="flex  gap-2 text-sm ">
                        <div className="border rounded-full p-3">Sell</div>
                        <div className="border rounded-full p-3">Rent/lease</div>
                        <div className="border rounded-full p-3">List as PG</div>
                    </div>

                    <p className="text-sm font-bold">You are here to :</p>
                    <div className="mt-1 space-y-2 gap-5">
                        <div className="">

                            <Select label="IND +91" className="" >
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                        </div>
                        <div className=" ">
                            <Input label="Number" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>)
}