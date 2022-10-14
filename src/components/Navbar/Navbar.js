import './Navbar.css'
import logo from './assets/logo.jpg'
import CardWitget from '../CardWidget/CardWidget'
import Button from '../button/button'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (

    <header className= "navbar">
        <Link to='/'>
        <div>
        <img className="logo" src={logo} alt='logo'/>
        </div>
        </Link>
    <nav className="buttons">
        <Button>celulares</Button>
        <Button>celulares</Button>
        <Button>celulares</Button>
        

    </nav>
        <CardWitget/>


    
    </header>
    )

}

export default Navbar