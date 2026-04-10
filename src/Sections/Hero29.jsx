


import { useState } from "react"
function Hero29() {
const[formData,setFormData] =useState({
name:"",
email:"",
message:"",
  })

const [errors,setErrors] = useState({})
const [text,setText] =useState("")
const getValue =(e)=>{
const {name,value} = e.target;
setFormData({...formData,[name]:value})
setErrors({...errors,[name]:""})
}
const validate=()=>{
const allErrors={}
if(!formData.name) allErrors.name ="Please enter Name"
if(!formData.email) allErrors.email ="Please enter valid email"
 else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
 allErrors.email = "Please enter valid email";
  
if(!formData.message) allErrors.message ="Please enter message"
return allErrors
}
const Message=(e)=>{
e.preventDefault()
const validation= validate()
if(Object.keys(validation).length > 0){
setErrors(validation)
setText(" One or more fields have an error. Please check and try again.")
return
}
alert("Message saved successfully")

  setFormData({
      name: "",
      email: "",
      message: "",
    })
}
    return (
        <div>
            <div className="hero29-flex">
                <div className="hero29-para1">
                    <p>If you have an inquiry or would like more information about any of our tours, please use the contact form below! We will get back to you within 24 hours.</p>


                    <div className="hero29-para2">
                    </div>

                    <div className="hero29-para3">
                        <p className="hero29-subpara">Phone: <span className="hero29-span">+92-333-3302501</span></p>
                    </div>

                    <div className="hero29-para4">
                        <p className="hero30-subpara">Mail: <span className="hero29-span">talha241996@gmail.com</span></p>
                    </div>
                </div>
                <div className="hero29-color">
                    <div className="hero29-contact">
                        <h2>Contact Form</h2>
                    </div>

                    <form onSubmit={Message}>
                        <div className="hero29-inp">
                            <input name="name" value ={formData.name}  onChange={getValue} placeholder="Your Name" type="text"  id="" />
                        </div>

                    {errors.name && <p className="hero29-errors">{errors.name}</p>}

                        <div className="hero29-inp">
                            <input name="email" value ={formData.email}  onChange={getValue} placeholder="Your Email" type="email"  id="" />
                        </div>
                    {errors.email && <p className="hero29-errors">{errors.email}</p>}



                        <div className="hero29-textarea">
                            <textarea name="message" value ={formData.message}  onChange={getValue} placeholder="Your Message" id=""></textarea>
                        </div>

                    {errors.message && <p className="hero29-errors">{errors.message}</p>}
                        <div className="hero29-btn">
                            <button>Send</button>
                        </div>

                        <div className="hero29-errorss">
                            {text}
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default Hero29
