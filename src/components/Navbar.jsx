
import { Link } from "react-router-dom"

export default function Navbar({elements, setPageInfo}) {
    console.log("elements, ", elements)
    return(
        <nav>
            {elements.map((p, i) => 
                <Link to={p.category} key={i} onClick={()=>setPageInfo(p)}>{p.category}</Link>
            )}
        </nav>
    )
}