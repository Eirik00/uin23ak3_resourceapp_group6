export default function Infocard({cardElement}){
    return (
        <article>
            <h2>{cardElement.category}</h2>
            <p>{cardElement.text}</p>
            <ul>
                {cardElement.sources?.map((item, i) => <li key={i}><a href={item.url}>{item.title}</a></li>)}
            </ul>
        </article>
    )
}