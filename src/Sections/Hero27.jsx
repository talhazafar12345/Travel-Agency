




import { useState } from "react"
function Hero27() {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)
    const [res, setRes] = useState(false)
    const [get, setGet] = useState(false)
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const resT = () => {
        setOpen(!open);
    };
    const getRes = () => {
        setRes(!res);
    };
    const getFinal = () => {
        setGet(!get);
    };
    return (
        <div className="faq-container">


            <div className="faq-right">
                <div
                    className={`accordion ${isOpen ? "active" : ""}`}
                    tabIndex={0}
                    onClick={toggleAccordion}
                >
                    <span className="question">
                        01. Is there any age restrictions for this tour?
                    </span>
                    <span className="symbol">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                    <div className="accordion-content">
                        <p>
                            We have a minimum age requirement of 18 years old to join the tour. Group members aged 16-17 years old are welcome to join the tour but only with a family member that will act as their guardian whilst on tour. Aside from that, no age requirements at all!
                        </p>
                    </div>
                )}
                <div className="faq-right">
                    <div
                        className={`accordion ${open ? "active" : ""}`}
                        tabIndex={0}
                        onClick={resT}
                    >
                        <span className="question">
                            02. Can I wash my clothes during the tour?
                        </span>
                        <span className="symbol">{open ? "−" : "+"}</span>
                    </div>
                    {open && (
                        <div className="accordion-content">
                            <p>
                                Yes, you can wash your clothes during the tour. Most accommodations provide laundry services and in some places, you may also find self-service laundry facilities. If needed, you can also wash small items by hand in your room. It’s always a good idea to check with your tour guide or hotel staff for available options.
                            </p>
                        </div>
                    )}
                </div>
                <div className="faq-right">
                    <div
                        className={`accordion ${res ? "active" : ""}`}
                        tabIndex={0}
                        onClick={getRes}
                    >
                        <span className="question">
                            03. Will I have access to the Internet?
                        </span>
                        <span className="symbol">{res ? "−" : "+"}</span>
                    </div>
                    {res && (
                        <div className="accordion-content">
                            <p>
                                Yes, you will have access to the internet during the tour. Most hotels and accommodations offer Wi-Fi services and many public places such as cafes and airports also provide internet access. However, the speed and availability may vary depending on the location, especially in remote areas.
                            </p>
                        </div>
                    )}
                </div>
                <div className="faq-right">
                    <div
                        className={`accordion ${get ? "active" : ""}`}
                        tabIndex={0}
                        onClick={getFinal}
                    >
                        <span className="question">
                            04. How to extend the support?
                        </span>
                        <span className="symbol">{get ? "−" : "+"}</span>
                    </div>
                    {get && (
                        <div className="accordion-content">
                            <p>
                                You can extend your support by contacting our team before your current plan expires. Simply reach out through our customer service, email, or support portal and we will guide you through the extension process. Additional charges may apply depending on the duration and type of support you choose.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Hero27

