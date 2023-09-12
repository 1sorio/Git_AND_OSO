import { Link } from '../components/Navbar'
import './App.scss';


const Sidebar = () =>{
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <link to="">Inicio</link>
                </li>
                <li>
                    <link to="">Ventas</link>
                </li>
                <li>
                    <link to="">Clientes</link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
