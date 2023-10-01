import { useState } from 'react'
import Trousers1 from '../../assets/Trousers1.jpg'
import Trousers2 from '../../assets/Trousers2.jpg'
import Trousers3 from '../../assets/Trousers3.jpg'
import Trousers4 from '../../assets/Trousers4.jpg'
import Trousers5 from '../../assets/Trousers5.jpg'
import './product.scss'
import Lightbox from "react-18-image-lightbox"


const Trousers = () => {
    const [number, setNumber] = useState('1')
    const [currentImg, setCurrentImg] = useState(Trousers1)
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
        Trousers1, Trousers2, Trousers3, Trousers4, Trousers5
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
                        <img className='img-up' src={currentImg} alt='Trousers' onClick={() => handleClickImg()} />
                    </div>
                    <div id='product-carouser' className='product-carouser lightbox'>
                        <div className='img-link'>
                            <img className={currentImg === Trousers1 ? 'img-down active' : 'img-down'} alt='Trousers' src={Trousers1} onClick={() => handleClickShow(Trousers1)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Trousers2 ? 'img-down active' : 'img-down'} alt='Trousers' src={Trousers2} onClick={() => handleClickShow(Trousers2)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Trousers3 ? 'img-down active' : 'img-down'} alt='Trousers' src={Trousers3} onClick={() => handleClickShow(Trousers3)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Trousers4 ? 'img-down active' : 'img-down'} alt='Trousers' src={Trousers4} onClick={() => handleClickShow(Trousers4)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Trousers5 ? 'img-down active' : 'img-down'} alt='Trousers' src={Trousers5} onClick={() => handleClickShow(Trousers5)} />
                        </div>
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
                    <div className='price'>{25000 * number} VNĐ</div>
                    <button className='Buy-now-btn'>Mua ngay</button>
                    <button className='Add-to-cart-btn'>Thêm vào giỏ</button>

                </div>
            </div>
        </>
    )
}
export default Trousers;