import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Infocard from "./Infocard";

export default function Layout({navElements}) {

    console.log(navElements)
    return(
        <>
        <header>
            <Navbar elements={navElements}/>
        </header>
        <main>
            <Infocard cardElement={cardElement} />
        </main>
        <footer>Footer</footer>
        </>
    )
}