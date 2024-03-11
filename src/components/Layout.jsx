import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({navElements, children, setPageInfo}) {

    return(
        <>
<<<<<<< Updated upstream
        <header>
            <Navbar elements={navElements}/>
        </header>
        <main>
            <h2 id="title">Test</h2>
            <p id="infoText">BLABLABLA</p>
            <ul id="linklist">
                <li>Bla bla bla</li>
            </ul>
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