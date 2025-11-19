'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
    differenceInYears, 
    differenceInMonths, 
    differenceInCalendarDays 
} from 'date-fns';

const BIRTH_DATE = new Date('2006-11-25T00:00:00'); 
// วันเกิด 25/11/2549 (ค.ศ. 2006)

interface AgeDetails {
    years: number;
    totalMonths: number;
    totalDays: number;
}

// ---------------------------------------------
// ฟังก์ชันคำนวณเวลาหลัก (ใช้เฉพาะค่ารวม)
// ---------------------------------------------
const calculateAge = (birth: Date, current: Date): AgeDetails => {
    // 1. คำนวณแบบปีเต็ม (Years)
    const years = differenceInYears(current, birth);
    
    // 2. คำนวณแบบรวมทั้งหมด
    const totalMonths = differenceInMonths(current, birth);
    const totalDays = differenceInCalendarDays(current, birth);

    return { 
        years, 
        totalMonths, 
        totalDays 
    };
};

// ---------------------------------------------
// Custom Hook สำหรับแอนิเมชันตัวเลขนับขึ้น (Count Up)
// ---------------------------------------------
const useCountUp = (endValue: number, duration = 2000): number => {
    const [count, setCount] = useState(0);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (endValue === 0) return; // ไม่นับถ้าค่าเป็น 0

        startTimeRef.current = Date.now();
        
        const animate = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTimeRef.current;
            
            // คำนวณค่าปัจจุบัน
            const progress = Math.min(1, elapsedTime / duration);
            const currentValue = Math.floor(progress * endValue);
            
            setCount(currentValue);

            if (progress < 1) {
                // ขอให้เบราว์เซอร์เรียกฟังก์ชันนี้อีกครั้งในเฟรมถัดไป
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        // Cleanup
        return () => {
            setCount(0);
        };
    }, [endValue, duration]);

    return count;
};

// ---------------------------------------------
// คอมโพเนนต์ย่อยสำหรับแสดงผลตัวเลขพร้อมแอนิเมชัน
// ---------------------------------------------
interface CountUpDisplayProps {
    value: number;
    label: string;
    icon: string;
    bgColor: string;
    textColor: string;
    widthClass: string;
}

const CountUpDisplay: React.FC<CountUpDisplayProps> = ({ 
    value, label, icon, bgColor, textColor, widthClass 
}) => {
    // ใช้ Custom Hook เพื่อให้ได้ค่าที่กำลังนับ
    const animatedValue = useCountUp(value, 3000); // ตั้งค่าให้ใช้เวลา 3 วินาทีในการนับ

    const block = ` border border-black flex justify-between items-center rounded-full text-7xl ${bgColor}`;
    const newblock = " border border-black flex justify-center items-center rounded-full text-5xl";

    return (
        <div className="flex items-center gap-5">
            <div className={`${block} ${widthClass} h-20 px-3 pt-4`}>
                <p className={`ml-4 ${textColor}`}>{animatedValue.toLocaleString()}</p> 
                <img src={icon} alt={`${label} Icon`} className="w-15 mb-4" />
            </div>
            <h1 className={`${newblock} hidden md:flex w-54 h-20 px-3 pt-2 ${label === 'ปี' ? 'bg-black text-white' : 'bg-white'}`}>
                {label}
            </h1>
        </div>
    );
};


// ---------------------------------------------
// คอมโพเนนต์หลัก
// ---------------------------------------------
function Time() {
    const [age, setAge] = useState<AgeDetails>({ 
        years: 0, 
        totalMonths: 0, 
        totalDays: 0
    });

    useEffect(() => {
        const updateAge = () => {
            const now = new Date();
            setAge(calculateAge(BIRTH_DATE, now));
        };

        updateAge();

        // อัปเดตทุก 24 ชั่วโมง (วัน)
        const dayInMs = 86400000;
        const timer = setInterval(updateAge, dayInMs);

        return () => clearInterval(timer);
    }, []);

    // ---------------------------------------------
    // การกำหนดค่าที่ส่งไปแสดงผล
    // ---------------------------------------------
    const DisplayYears = age.years; 
    const DisplayMonths = age.totalMonths; 
    const DisplayDays = age.totalDays;

    return (
        <div className="bg-[#F2F2F2] h-auto lg:h-85 my-20 px-15 py-5 flex flex-col lg:flex-row">
            <div className="gap-5 flex-col h-full flex justify-around">
                
                {/* Years Block */}
                <CountUpDisplay
                    value={DisplayYears}
                    label="Years"
                    icon="/image/apple.svg"
                    bgColor="bg-white"
                    textColor="text-black"
                    widthClass="w-60"
                />

                {/* Months Block */}
                <CountUpDisplay
                    value={DisplayMonths}
                    label="Months"
                    icon="/image/book.svg"
                    bgColor="bg-black"
                    textColor="text-white"
                    widthClass="w-90"
                />

                {/* Days Block */}
                <CountUpDisplay
                    value={DisplayDays}
                    label="Days"
                    icon="/image/time.svg"
                    bgColor="bg-white"
                    textColor="text-black"
                    widthClass="w-120"
                />

            </div>
            
            {/* Display Birth Location/Date */}
<div className="pl-2 lg:pl-0 py-5 gap-6 lg:gap-0 lg:py-0 flex-1 lg:text-right flex flex-col justify-around font-thin">
  <h1 className="text-3xl md:text-4xl lg:text-5xl">Born on November 25</h1>
  <h1 className="text-3xl md:text-4xl lg:text-5xl">2006 in Chiang Rai</h1>
  <h1 className="text-3xl md:text-4xl lg:text-5xl">Thailand</h1>
</div>

        </div>
    );
}

export default Time;