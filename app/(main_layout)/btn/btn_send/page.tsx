"use client";
import Link from "next/link"

function page() {
    return (
        <div>
            <Link
                href="/about"
                onMouseDown={(e) => e.currentTarget.classList.add("press-animation")}
                onAnimationEnd={(e) => e.currentTarget.classList.remove("press-animation")}
                className=" py-5 px-3 w-40 border rounded-full flex items-center justify-between text-sm leading-none h-14 hover:scale-98 about-link"
            >
                <div className=" mt-1 pl-3 text-[15px] text-black">Send</div>
                <div className=" w-10 h-10 rounded-full flex justify-center items-center">
                    <img src="/image/arrow.svg" alt="Go to about page" className="w-7 wiggle-hover" />
                </div>
            </Link>
        </div>
    )
}

export default page
