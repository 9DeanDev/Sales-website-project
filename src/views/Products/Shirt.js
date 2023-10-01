import { useState } from 'react'
import Shirt1 from '../../assets/Shirt1.png'
import Shirt2 from '../../assets/Shirt2.png'
import Shirt3 from '../../assets/Shirt3.png'
import Shirt4 from '../../assets/Shirt4.png'
import Shirt5 from '../../assets/Shirt5.png'
import './product.scss'
import Lightbox from "react-18-image-lightbox"


const Shirt = () => {
    const [number, setNumber] = useState('1')
    const [currentImg, setCurrentImg] = useState(Shirt1)
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
        Shirt1, Shirt2, Shirt3, Shirt4, Shirt5
    ];
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhoToInDex] = useState(0)
    const handleClickImg = () => {
        let index = images.findIndex(item => item === currentImg)
        setPhoToInDex(index)
        setIsOpen(true)
    }
    const handleClickAddProduct = () => { }
    return (
        <>
            <div className='product-container row'>
                <div className='product col-4'>
                    <div >
                        <img className='img-up' src={currentImg} alt='Shirt' onClick={() => handleClickImg()} />
                    </div>
                    <div id='product-carouser' className='product-carouser lightbox'>
                        <div className='img-link'>
                            <img className={currentImg === Shirt1 ? 'img-down active' : 'img-down'} alt='Shirt' src={Shirt1} onClick={() => handleClickShow(Shirt1)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shirt2 ? 'img-down active' : 'img-down'} alt='Shirt' src={Shirt2} onClick={() => handleClickShow(Shirt2)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shirt3 ? 'img-down active' : 'img-down'} alt='Shirt' src={Shirt3} onClick={() => handleClickShow(Shirt3)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shirt4 ? 'img-down active' : 'img-down'} alt='Shirt' src={Shirt4} onClick={() => handleClickShow(Shirt4)} />
                        </div>
                        <div className='img-link'>
                            <img className={currentImg === Shirt5 ? 'img-down active' : 'img-down'} alt='Shirt' src={Shirt5} onClick={() => handleClickShow(Shirt5)} />
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
                    <div className='price'>{120000 * number} VNĐ</div>
                    <button className='Buy-now-btn'>Mua ngay</button>
                    <button className='Add-to-cart-btn' onClick={() => handleClickAddProduct()}>Thêm vào giỏ</button>
                </div>
            </div>
        </>
    )
}
export default Shirt;