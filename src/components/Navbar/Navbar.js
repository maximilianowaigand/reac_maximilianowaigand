import './Navbar.css'
import logo from './assets/logo.jpg'
import CardWitget from '../CardWidget/CardWidget'


const Navbar = () => {
    return (

    <header>
        <img className="logo" src={logo} alt='logo'/>
    <nav>
        <div className="button" >
            <button>celulares</button>
            <button>celulares</button>
            <button>celulares</button>
        </div>
        <CardWitget/>


    </nav>
    </header>
    )

}

export default Navbar