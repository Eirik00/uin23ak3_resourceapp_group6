import { useEffect, useState } from "react"

export default function Infocard({cardElement}){
    const [infoCard, setInfoCard] = useState(null)

    useEffect(() => {
        if (cardElement === null){
            setInfoCard(JSON.parse(localStorage.getItem("infoCard")))
        }else{
            setInfoCard(cardElement)
            localStorage.setItem("infoCard", JSON.stringify(cardElement))
        }
    },[cardElement])

    console.log("cardElement", cardElement)
    console.log("infoCard: ", infoCard)
    return (
        <article>
            <h2>{infoCard?.category}</h2>
            <p>{infoCard?.text}</p>
            <ul>
                {infoCard?.sources?.map((item, i) => <li key={i}><a href={item.url}>{item.title}</a></li>)}
            </ul>
        </article>
    )
}