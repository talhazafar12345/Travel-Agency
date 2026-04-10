

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Faqs from '../Pages/Faqs'
import Contact from '../Pages/Contact'


function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "about-us",
            element: <About />
        },

         {
            path: "FAQS-Page",
            element: <Faqs />
        },

        {
            path: "contact-page",
            element: <Contact />
        },
      
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing


