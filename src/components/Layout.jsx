import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Infocard from "./Infocard";

export default function Layout({navElements, children, setPageInfo}) {

    console.log(navElements)
    return(
        <>
<<<<<<< Updated upstream
        <header>
            <Navbar elements={navElements}/>
        </header>
        <main>
            <Infocard cardElement={cardElement} />
        </main>
        <footer>Footer</footer>
=======
            <header>
                <Navbar elements={navElements} setPageInfo={setPageInfo}/>
            </header>
            <main>
                {children}
            </main>
            <footer>Footer</footer>
>>>>>>> Stashed changes
        </>
    )
}