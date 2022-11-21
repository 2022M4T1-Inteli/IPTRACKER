import { useEffect } from "react"
import SideBar from "../SideBar"


function Layout({ children }) {


  

    return (
        <div>
            {/* 
            <head>

            </head> */}
            <main >
                <div className="relative">
                    <SideBar />
                </div>

                <div className="">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout