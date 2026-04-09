import Hero1 from "../Sections/Hero1"
import Hero21 from "../Sections/Hero21"
import Hero22 from "../Sections/Hero22"
import { useEffect } from "react"


function About() {
useEffect(()=>{
window.scrollTo(0,0)
})
  return (
    <div>
    <Hero1 />
    <Hero21 />
    <Hero22 />
      
    </div>
  )
}

export default About
