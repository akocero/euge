import Link from 'next/link'

const toggleNavbar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open')
    burger.classList.toggle('open')
}

const closeNavbar = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    nav.classList.remove('open')
    burger.classList.remove('open')
}

const Navbar = () => {
    return ( 
        <nav>
            <div className="brand">
                euge
            </div>
            <ul className="nav">
                <li className="nav__item">
                    <Link href="/" ><a className="nav__link" onClick={() => closeNavbar()}>About</a></Link>
                </li>
                <li className="nav__item">
                    <Link href="/projects" ><a className="nav__link" onClick={() => closeNavbar()}>Projects</a></Link>
                </li>
                <li className="nav__item">
                    <a href="" className="nav__link">Experiences</a>
                </li>
                <li className="nav__item">
                    <a href="" className="nav__link">Contact</a>
                </li>
            </ul>
            <div className="burger" onClick={() => toggleNavbar()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
     );
}
 
export default Navbar;