"use client";


import Link from "next/link"
import Githubbtn from "@/app/(main_layout)/btn/btn_github/page"


function Little() {

    const bound = "p-6 bg-white border border-black rounded-[15px] h-75"


    return (
        <div>
            <div className="text-center">
                <h1 className="text-3xl">A <span className="text-[#FA9315]">LITTLE</span> ABOUT ME</h1>
                <div className="font-thin">
                    <p>I aim to improve my coding skills and work on exciting projects, constantly learning new technologies, and</p>
                    <p>applying them to solve interesting problems.</p>
                </div>
            </div>
            <div className="my-5 mb-20 flex flex-col lg:flex-row justify-around relative gap-8 px-13">
                <div className="z-20 w-full bg-black rounded-[15px] lg:bg-white">
                    <img src="/image/code.svg" alt="" className="w-10 m-auto py-2 filter invert lg:filter-none" />
                    <div className={`${bound} flex flex-col justify-between`}>
                        <div>
                            <h1>GITHUB</h1>
                            <p className="font-extrabold py-5">“my ideas into code.”</p>
                            <p className="font-thin ">When I’m not coding, you’ll probably find me eating or playing games with my friends to relax. Also, I really like aliens!</p>
                        </div>
                        <Githubbtn/>
                    </div>
                </div>
                <div className="z-20 w-full bg-black rounded-[15px] lg:bg-white">
                    <img src="/image/happy.svg" alt="" className="w-10 m-auto py-2 filter invert lg:filter-none" />
                    <div className={`${bound} flex flex-col justify-between`}>
                        <div>
                            <h1>IMAGE GALLERY</h1>
                            <p className="font-extrabold py-5">“Memories captured”</p>
                            <p className="font-thin">I take photos to keep the beautiful memories that my brain can’t hold forever. but pictures help bring them back to life.</p>
                        </div>
                        <Link href="/" className="hover:scale-98 flex items-center border rounded-full justify-between p-1 w-35"><img src="/image/image.svg" alt="" className="w-8 " /><p className="pt-1.5 pl-2">NEXT</p><img src="/image/tarrow.svg" alt="" className="w-5" /></Link>
                    </div>
                </div>
                <div className="z-20 w-full bg-black rounded-[15px] lg:bg-white">
                    <img src="/image/moon.svg" alt="Moon icon" className="w-10 m-auto py-2 filter invert lg:filter-none" />
                    <div className={`${bound} flex flex-col justify-between`}>
                        <div>
                            <h1>SOON</h1>
                            <p className="font-extrabold py-5">“Something new is coming...”</p>
                            <p className="font-thin">At a time not long from now; in the near future.</p>
                        </div>
                        <Link href="/" className="hover:scale-98 flex items-center border rounded-full justify-between p-1 w-35"><img src="/image/whale.jpg" alt="" className="w-8 " /><p className="pt-1.5 pl-2">NEXT</p><img src="/image/barrow.svg" alt="" className="w-5" /></Link>
                    </div>
                </div>
                <div className="bg-black hidden lg:block rounded-[15px] h-70 absolute inset-x-6 top-27 z-10"></div>
            </div>
        </div>
    )
}

export default Little
