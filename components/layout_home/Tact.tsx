import Link from "next/link"




function Tact() {
    return (
        <div>
            <div className="text-center py-10">
                <h1 className="text-3xl">Contact</h1>
                <p className="font-thin px-5">I'm open to exciting opportunities and what you have to offer or just want to say hi!</p>
            </div>
            <div className="px-13 pb-15 flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-6 flex-1 justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4"><img src="/image/email.svg" alt="" className="w-11" /><p>Email:boycubeu@gmail.com</p></div>
                        <div className="flex items-center gap-4"><img src="/image/phone.svg" alt="" className="w-11" /><p>Phone:092-524-5402</p></div>
                        <div className="flex items-center gap-4"><img src="/image/facebook.svg" alt="" className="w-11" /><p>Facebook:Teeramet Pakkotanang</p></div>
                        <div className="flex items-center gap-4"><img src="/image/home.svg" alt="" className="w-11" /><p>Chiang Rai, Thailand, Pa Dead</p></div>
                    </div>
                    <div className="border w-80 rounded-full">
                        <div className="flex gap-4 ">
                            <div className="bg-black flex gap-5 w-fit px-3 py-1 rounded-full"><img src="/image/githubi.svg" alt="" className="w-7" /><img src="/image/discord.svg" alt="" className="w-7" /><img src="/image/Group.png" alt="" className="w-7 pb-1" /></div>
                            <Link href="/" className="flex items-center rounded-full justify-between p-1 w-40"><img src="/image/portfolio.svg" alt="" className="w-8 " /><p className="pt-1.5 pl-2">Portfolio</p><img src="/image/arrow-next-svgrepo-com.svg" alt="" className="w-8" /></Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <form action="" >
                        <input type="text" className="w-full px-4 py-3 text-gray-700 leading-tight border-2 border-orange-500 rounded-[15px]  focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-600 transition duration-300 shadow-md" placeholder="Your name ....." />
                        <input type="text" className="w-full px-4 py-3 text-gray-700 leading-tight border-2 border-orange-500 rounded-[15px] focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-600 transition duration-300 shadow-md my-3" placeholder="Your email ....." />
                        <textarea className="border w-full h-36 rounded-[15px] p-4" name="" id=""></textarea>
                        <button className="flex gap-4 items-center w-full"><p className=" items-center text-white bg-black border rounded-[15px] py-3 flex-1 w-j flex justify-center">Send to me</p> <div className="border p-3 rounded-[15px] bg"><img src="/image/paper.png" alt="" className="w-5" /></div></button>
                    </form>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="flex-1 w-75 lg:h-full h-60 rounded-[15px] border bg-[url('/image/view.jpg')] bg-cover bg-center">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tact
