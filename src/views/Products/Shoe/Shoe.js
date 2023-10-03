import Shoe1 from '../../../assets/Shoe1.jpg'
import Shoe2 from '../../../assets/Shoe2.jpg'
import Shoe3 from '../../../assets/Shoe3.jpg'
import Shoe4 from '../../../assets/Shoe4.webp'
import Shoe5 from '../../../assets/Shoe5.webp'
import { useState } from 'react'
import '../product.scss'
import Lightbox from "react-18-image-lightbox"

const Shoe = () => {
    const [number, setNumber] = useState('1')
    const [currentImg, setCurrentImg] = useState(Shoe1)
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
        Shoe1, Shoe2, Shoe3, Shoe4, Shoe5
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
                        <img className='img-up' src={currentImg} alt='Shoe' onClick={() => handleClickImg()} />
                    </div>
                    <div id='product-carouser' className='product-carouser lightbox'>
                        <div className='img-link'>
                            <img className={currentImg === Shoe1 ? 'img-down active' : 'img-down'} alt='Shoe' src={Shoe1} onClick={() => handleClickShow(Shoe1)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shoe2 ? 'img-down active' : 'img-down'} alt='Shoe' src={Shoe2} onClick={() => handleClickShow(Shoe2)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shoe3 ? 'img-down active' : 'img-down'} alt='Shoe' src={Shoe3} onClick={() => handleClickShow(Shoe3)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shoe4 ? 'img-down active' : 'img-down'} alt='Shoe' src={Shoe4} onClick={() => handleClickShow(Shoe4)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shoe5 ? 'img-down active' : 'img-down'} alt='Shoe' src={Shoe5} onClick={() => handleClickShow(Shoe5)} />
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
                    <div className='price'>{200000 * number} VNĐ</div>
                    <button className='Buy-now-btn'>Mua ngay</button>
                    <button className='Add-to-cart-btn'>Thêm vào giỏ</button>
                </div>
            </div>
        </>
    )
}
export default Shoe;