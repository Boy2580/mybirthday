"use client";
import Link from 'next/link'

function page() {
    return (
        <div>
            <Link href="https://github.com/Boy2580" 
            className="hover:scale-98 flex items-center border rounded-full justify-between p-1 w-35">
                <img src="/image/github.svg" alt="" className="w-8 " />
                <p className="pt-1.5 pl-2 ">NEXT</p>
                <img src="/image/arrow.svg" alt="" className="w-5" />
            </Link>
        </div>
    )
}

export default page
