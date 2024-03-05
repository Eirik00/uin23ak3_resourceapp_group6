export default function Navbar({elements}) {
    console.log("elements, ", elements)
    return(
        <nav>
            {elements.map((p, i) => 
                <a>{p.category}</a>
            )}
        </nav>
    )
}