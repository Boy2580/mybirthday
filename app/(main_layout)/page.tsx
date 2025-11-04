import Home from "@/components/layout_home/Home"
import Time from "@/components/layout_home/Time"
import Little from "@/components/layout_home/Little"
import Skills from "@/components/layout_home/Skills"
import Tact from "@/components/layout_home/Tact"
import Footer from "@/components/layout_home/Footer"


function page() {
  return (
    <div>
      <Home/>
      <Time/>
      <Little/>
      <Skills/>
      <Tact/>
      <Footer/>
    </div>
  )
}

export default page
