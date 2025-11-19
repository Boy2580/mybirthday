"use client";


import Link from "next/link"

function Skills() {

  const w_block = "text-[#FA9315] border border-black px-3 rounded-full pt-1"
  const b_block = "text-[#FFFFFF] border border-black px-3 rounded-full pt-1 bg-black"

  return (


    <div className="mt-35 px-15 ">
      <div className="pb-9">
        <div >
          <div className="flex items-end gap-2">
            <h1 className="text-3xl">Skills & Experience </h1>
          </div>
          <p className="py-3 font-thin">Skills & Technology Stack Coding and Programming</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className={`${w_block}`}><p>React</p></div>
          <div className={`${b_block}`}><p>Html</p></div>
          <div className={`${w_block}`}><p>Css</p></div>
          <div className={`${b_block}`}><p>Java script</p></div>
          <div className={`${w_block}`}><p>Type script</p></div>
          <div className={`${b_block}`}><p>Next.js</p></div>
          <div className={`${w_block}`}><p>Python</p></div>
        </div>
      </div>
      <div>
        <div className="py-5 flex flex-col lg:grid grid-cols-5 grid-rows-5 gap-3 w-full h-150 ">
          <div className="h-50 lg:h-auto border-3 border-black rounded-[15px] col-span-4 row-span-3 bg-[url('/image/websiteww.png')] bg-cover bg-center items-center flex">
            <Link href="/" className="flex items-center border justify-between p-1 w-35 rounded-tr-full rounded-br-full bg-black"><p className="pt-1.5 pl-2 text-white">website</p>                        
            <div className="bg-[#FB9E3A] w-10 h-10 rounded-full flex justify-center items-center">
              <img src="/image/rr.svg" alt="Go to about page" className="w-7" />
            </div></Link>
          </div>

          <div className="h-50 lg:h-auto border-3 border-black rounded-[15px] row-span-5 col-start-5 bg-[url('/image/c.png')] bg-cover bg-center flex justify-end flex-col">
            <Link href="/" className="bg-black border-black block p-3 text-center rounded-b-[7]">
              <p className="pt-1 font-thin text-white">Certificate</p>
            </Link>
          </div>

          <div className="h-50 lg:h-auto border-3 border-black rounded-[15px] col-span-2 row-span-2 col-start-1 row-start-4 p-3.5 bg-[url('/image/bgpython.png')] bg-cover bg-center flex justify-end flex-col">
            <div className="py flex items-center">
              <Link href="/" className="text-white font-thin duration-500 sc">Learn more</Link>
              <img src="/image/rr.svg" alt="" className="w-6 duration-500 pb-1 ef" />
            </div>
          </div>

          <div className="h-50 lg:h-auto border-3 border-black rounded-[15px] col-span-2 row-span-2 col-start-3 row-start-4 p-3.5 bg-[url('/image/space.png')] bg-cover bg-center flex justify-end flex-col">
            <div className="py flex items-center">
              <Link href="/" className="text-white font-thin duration-500 sc">Learn more</Link>
              <img src="/image/rr.svg" alt="" className="w-6 duration-500 pb-1 ef" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
