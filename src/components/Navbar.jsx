export default function Navbar({elements}) {
    console.log("elements, ", elements)
    return(
        <nav>
            {elements.map((p, i) => 
                <p>{p.category}</p>
            )}
        </nav>
    )
}