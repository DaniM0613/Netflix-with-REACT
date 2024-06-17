import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
         <div className='navbar-left'> 
            <img src={logo} alt=''/>
             <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
             </ul>
         </div>  
         <div className='navbar-right'>
            <img src={search_icon} alt='' className='' />
            </div>          
        </div>
    )
}
export default Navbar