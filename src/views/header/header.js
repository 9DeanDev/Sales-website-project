import { Nav1, Nav2 } from '../Nav/Nav';
import './header.scss'
import logo from '../../assets/logo.svg';
const Header = () => {
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
                                <input placeholder='Bạn tìm gì hôm nay' className='col-9' autoFocus />
                                <div className='Search col-3'>Tìm kiếm</div>
                            </div>
                            <div className='row col-6'>
                                <div className='Nav1 col-9' >
                                    <Nav1 />
                                </div>
                                <div className='cart col-3'>
                                    <a href='/' id='cart'><i class="fa-solid fa-cart-shopping"> <span> (0) </span></i></a>
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