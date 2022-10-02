import './Navbar.css'
import logo from './assets/logo.jpg'
import CardWitget from '../CardWidget/CardWidget'
import Button from '../button/button'


const Navbar = () => {
    return (

    <header className= "navbar">
        <div >
        <img className="logo" src={logo} alt='logo'/>
        </div>
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