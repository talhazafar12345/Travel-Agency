import Hero1 from "../Sections/Hero1"
import Hero19 from "../Sections/Hero19"
import Hero28 from "../Sections/Hero28"
import Hero29 from "../Sections/Hero29"
import { useEffect } from "react"
import Hero30 from "../Sections/Hero30"



function Contact() {

useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
     <Hero1 />
    <Hero28 />
    <Hero29 />
    <div className="Faqs-hero27">
    <Hero19 />
    </div>
    <Hero30 />
      
    </div>
  )
}

export default Contact
