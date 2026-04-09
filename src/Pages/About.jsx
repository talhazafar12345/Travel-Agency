import Hero1 from "../Sections/Hero1"
import Hero21 from "../Sections/Hero21"
import Hero22 from "../Sections/Hero22"
import { useEffect } from "react"
import Hero23 from "../Sections/Hero23"
import Hero24 from "../Sections/Hero24"


function About() {
useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero21 />
    <Hero22 />
    <Hero23 />
    <Hero24 />
      
    </div>
  )
}

export default About
