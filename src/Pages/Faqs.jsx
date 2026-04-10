import Hero1 from "../Sections/Hero1"
import Hero19 from "../Sections/Hero19"
import Hero20 from "../Sections/Hero20"
import Hero26 from "../Sections/Hero26"
import Hero27 from "../Sections/Hero27"
import { useEffect } from "react"




function Faqs() {
useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero26 />
    <Hero27 />
    <div className="Faqs-hero27">
    <Hero19 />
    </div>
    <Hero20 />
    </div>
  )
}
export default Faqs
