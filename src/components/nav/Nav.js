import { Link } from "react-router-dom"
import { navigation } from "../../App"

export default function Nav() {
    return (
        <div>
            {navigation.map(item => (
                <Link to={item.path} title={item.title} >
                    {item.title}
                </Link>
            ))}
        </div>
    )
}

