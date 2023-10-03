import { Nav1, Nav2 } from '../Nav/Nav';
import './header.scss'
import logo from '../../assets/logo.svg';
import { useEffect } from 'react';
const Header = () => {
    // var currentCart = localStorage.getItem('cart')
    // useEffect(() => {
    //     localStorage.setItem('cart', currentCart)
    // }, [currentCart])
    return (
        <>
            <div className="header-container container-fluid my-2">
                <div className='row'>
                    <div className='flex-left col-2'>
                        <img src={logo} className="Logo" alt="logo" />
                    </div>
                    <div className='flex-right col-10'>
                        <div className='flex-top row'>
                            <div className='Search-input row col-6'>
                                <input style={{ fontFamily: 'Font Awesome 6 Free' }} placeholder="&#xf002; Bạn tìm gì hôm nay" className='col-10' autoFocus />
                                <div className='Search col-2'>Tìm kiếm</div>
                            </div>
                            <div className='row col-6'>
                                <div className='Nav1 col-10' >
                                    <Nav1 />
                                </div>
                                <div className='cart col-2'>
                                    <a href='/' id='cart'><i className="fa-solid fa-cart-shopping"><span> ({localStorage.getItem('cart')}) </span></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='flex-bottom row'>
                            <div className='col-6'>
                                <Nav2 />
                            </div>
                            <div id='account' className='col-6'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;