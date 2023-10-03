import { Link, NavLink } from 'react-router-dom'
import Account from '../Account/Account'
import './Nav.scss'
const Nav1 = () => {
    return (
        <><div className="topnav">
            <div className='child'>
                <NavLink to="/"><i className="fa-solid fa-house"></i> Trang chủ</NavLink>
            </div>
            <div className='child'>
                <NavLink to="/astra"><i className="fa-solid fa-crown"></i> Astra</NavLink>
            </div>
            <div className='child'>
                <button className='button'>
                    <i className="fa-regular fa-face-grin-wink"></i> <Account />
                </button>
            </div>

        </div>
            {/* <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link active" data-bs-toggle="pill" to="/home">Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" data-bs-toggle="pill" to="/astra">Astra</Link>
                </li>
                <li className="nav-item">
                    <Account />
                </li>
            </ul > */}
        </>
    )
}
const Nav2 = () => {
    return (
        <>
            <div className="topnav">
                <Link to="/ListShirt">Áo</Link>
                <Link to="/ListTrousers">Quần</Link>
                <Link to="/ListShoe">Giày</Link>
                <Link to="/ListSocks">Tất</Link>
            </div>
            {/* <div className="topnav">
                <Link to="/Shirt">Áo</Link>
                <Link to="/Trousers">Quần</Link>
                <Link to="/Shoe">Giày</Link>
                <Link to="/Socks">Tất</Link>
            </div> */}
        </>


    )
}
export { Nav1, Nav2 };