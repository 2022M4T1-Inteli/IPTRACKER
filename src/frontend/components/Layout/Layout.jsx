import SideBar from "../SideBar"

function Layout({ children }) {
    return (
        <div>
            {/* 
            <head>

            </head> */}


            <main>
                <SideBar />
                
                <div className="">
                    {children}
                </div>
            </main>

            <footer>

            </footer>

        </div>
    )
}

export default Layout