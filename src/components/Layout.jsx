import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({navElements}) {

    return(
        <>
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
        </>
    )
}