import './Navbar.css'
import logo from './assets/logo.jpg'
import CardWitget from '../CardWidget/CardWidget'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (

    <nav className= "navbar">
        <NavLink to='/'>
        <div>
        <img className="logo" src={logo} alt='logo'/>
        </div>
        </NavLink>
    <div className="buttons">
        <NavLink to={'/category/bajo'}>BAJO</NavLink>
        <NavLink to={'/category/guitarra'}>GUITARRA</NavLink>
        <NavLink to={'/category/amplificador'}>amplificador</NavLink>
    </div>
        <CardWitget/>


    
    </nav>
    )

}

export default Navbar