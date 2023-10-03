import { useState } from 'react'
import Socks1 from '../../../assets/Socks1.jpg'
import Socks2 from '../../../assets/Socks2.jpg'
import Socks3 from '../../../assets/Socks3.jpg'
import Socks4 from '../../../assets/Socks4.jpg'
// import Socks5 from '../../assets/Socks2.jpg'
import '../product.scss'
import Lightbox from "react-18-image-lightbox"


const Socks = () => {
    const [number, setNumber] = useState('1')
    const [currentImg, setCurrentImg] = useState(Socks1)
    const handleValidation = (event) => {
        setNumber(event.target.value.replaceAll(/[^0-9]/g, ""))
    }
    const handleClickIncrease = () => {
        setNumber(parseInt(number) + 1)
    }
    const handleClickDecrease = () => {
        if (parseInt(number) <= 1) {
            return;
        }
        setNumber(parseInt(number) - 1)
    }
    const handleClickShow = (item) => {
        setCurrentImg(item)
    }
    const images = [
        Socks1, Socks2, Socks3, Socks4
    ];
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhoToInDex] = useState(0)
    const handleClickImg = () => {
        let index = images.findIndex(item => item === currentImg)
        setPhoToInDex(index)
        setIsOpen(true)
    }
    return (
        <>
            <div className='product-container row'>
                <div className='product col-4'>
                    <div >
                        <img className='img-up' src={currentImg} alt='Socks' onClick={() => handleClickImg()} />
                    </div>
                    <div id='product-carouser' className='product-carouser lightbox'>
                        <div className='img-link'>
                            <img className={currentImg === Socks1 ? 'img-down active' : 'img-down'} alt='Socks' src={Socks1} onClick={() => handleClickShow(Socks1)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Socks2 ? 'img-down active' : 'img-down'} alt='Socks' src={Socks2} onClick={() => handleClickShow(Socks2)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Socks3 ? 'img-down active' : 'img-down'} alt='Socks' src={Socks3} onClick={() => handleClickShow(Socks3)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Socks4 ? 'img-down active' : 'img-down'} alt='Socks' src={Socks4} onClick={() => handleClickShow(Socks4)} />
                        </div>
                        {/* <div className='img-link'>
                            <img className={currentImg === Socks5 ? 'img-down active' : 'img-down'} alt='Socks' src={Socks5} onClick={() => handleClickShow(Socks5)} />
                        </div> */}
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() =>
                                setPhoToInDex((photoIndex + images.length - 1) % images.length,)
                            }
                            onMoveNextRequest={() =>
                                setPhoToInDex((photoIndex + 1) % images.length,)
                            }
                            animationDisabled={true}
                            animationDuration={500}
                        />
                    )}
                    {/* </div> */}
                </div>
                <div className='describe col-4'>
                    <div>Thương hiệu: OEM</div>
                    <div>ComBo 5 Đôi Tất Vớ Nam Ngắn Thời Trang Màu Ngẫu Nhiên TC03426</div>
                    <div>4.5 sao (20)   <span>Đã bán 100</span></div>
                    <div>135000 vnđ <span>-22%</span></div>
                    <div>Màu</div>
                    <div>Kích cỡ</div>
                </div>
                <div className='product-form col-3'>
                    <h5>Số lượng</h5>
                    <div className='numbers-container'>
                        <button className='btn-change' onClick={() => {
                            handleClickDecrease()
                        }}>-</button>
                        <input className='numbers' type='text' value={number} onChange={(event) => {
                            setNumber(event.target.value);
                            handleValidation(event)
                        }} />
                        <button className='btn-change' onClick={() => {
                            handleClickIncrease()
                        }}>+</button>
                    </div>
                    <h5>Tạm tính</h5>
                    <div className='price'>{135000 * number} VNĐ</div>
                    <button className='Buy-now-btn'>Mua ngay</button>
                    <button className='Add-to-cart-btn'>Thêm vào giỏ</button>

                </div>
            </div>
        </>
    )
}
export default Socks;