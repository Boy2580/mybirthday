"use client";

import Link from "next/link"
import Aboutbtn from "@/app/(main_layout)/btn/btn_about/page"
import Sendbtn from "@/app/(main_layout)/btn/btn_send/page"

function Home() {
    return (
        <div className="flex px-10">
            <div className=" flex-1">
                <h1 className="pt-15 text-4xl ">Mr Teeramet Pakkotanang</h1>
                <div className="flex flex-col gap-3 pt-10">
                    <p>My skills and interests are mostly about coding. I love Python because it's</p>
                    <p>easy to write and great for beginners. </p>
                    <p>I also enjoy designing websites — both the front-end and back-end parts.</p>
                    <p>I like eating and playing games with my friends because it helps me relax </p>
                    <p>and not feel stressed. </p>
                    <p>I also love aliens.</p>
                </div>
                <div className="py-10">
                    <p className="text-xl">IT KMITL</p>
                    <p className="text-xl">King Mongkut's Institute of Technology Ladkrabang</p>
                </div>
                <div className="flex gap-5">
                    <Aboutbtn/>
                    <Sendbtn/>
                </div>

            </div>
            <div className="flex-1 flex">
                <div className="flex-1 grid grid-cols-6 grid-rows-5 gap-3">
                    <div className="rounded-[25px] col-span-3 row-span-4 border border-[#D9D9D9] bg-[url('/image/max.jpg')] bg-cover bg-right">
                    </div>
                    <div className="rounded-[25px]  col-span-3 row-span-4 col-start-4 row-start-2 border border-[#D9D9D9] bg-[url('/image/boy.jpg')] bg-cover bg-center bg-no-repeat ">
                    </div>
                </div>
                <div className="flex flex-col justify-around mx-5">
                    <p className="text-[70px]">B</p>
                    <p className="text-[70px]">O</p>
                    <p className="text-[70px]">Y</p>
                </div>
            </div>
        </div>
    )
}

export default Home
