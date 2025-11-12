import Navbar from "@/components/Navbar";
import "./button.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="">
    <Navbar/>
    {children}
    </div>
  );
}
