"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {

    const currentPath = usePathname();

    const baseLinkClasses = " border text- rounded-full py-2 px-7 flex items-center justify-center text-sm leading-none pt-3 h-10"


    return (
        <nav className='flex justify-between items-center px-10'>
            <div className='flex flex-1 items-center gap-4'>
                <img src="/image/logo.jpg" alt="" className='w-10' />
                <div className='mt-2'>
                    <h1 className=' text-2xl'>The story</h1>
                    <h1 className='text-2xl'>to far</h1>
                </div>
            </div>
            <div className='flex-1 justify-center flex'>
                <img src="/image/main_logo.png" alt="" className='w-30' />
            </div>
            <div className='flex-1 flex justify-end'>
                <div className='flex gap-1 items-center'>
                    <Link href="/" className={`${baseLinkClasses}`}>Home</Link>

                    <Link href="/about" className={`${baseLinkClasses} bg-black text-white`}>About</Link>

                    <Link href="/portfolio" className={`${baseLinkClasses} bg-black text-white`}>Portfolio</Link>

                    <Link href="/love" className={`${baseLinkClasses} bg-black text-white`}>Love</Link>

                    <Link href="/timeline" className={`${baseLinkClasses} bg-black text-white`}>Timeline</Link>
                </div>
            </div>
        </nav>
    );
}