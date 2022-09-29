import './Navbar.css'
import logo from './assets/logo.jpg'
import CardWitget from '../CardWidget/CardWidget'


const Navbar = () => {
    return (

    <header className= "navbar">
        <div >
        <img className="logo" src={logo} alt='logo'/>
        </div>
    <nav className="buttons">
        <table className="button" >
            <button>celulares</button>
            <button>celulares</button>
            <button>celulares</button>
        </table>

    </nav>
        <CardWitget/>


    
    </header>
    )

}

export default Navbar