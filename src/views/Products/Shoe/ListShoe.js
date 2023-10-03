import Shoe1 from '../../../assets/Shoe1.jpg'
import BlueShoe1 from '../../../assets/BlueShoe.jpg'
import RedShoe1 from '../../../assets/RedShoe.jpg'
import WhiteShoe1 from '../../../assets/WhiteShoe.jpg'
import Shoe from './Shoe'
import { Link } from 'react-router-dom'
const ListShoe = () => {
    return (
        <>
            <div className="container bg-light p-4">
                <h2>Sản phẩm giày bán chạy</h2>
                {/* <p>Image at the top (card-img-top):</p> */}
                <div className="row">
                    <Link to='/ListShoe/Shoe' className="card col-3">
                        <img className="card-img-top" src={Shoe1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo thun unisex REYE TEE có form baby tee 100% cotton in lụa - Thương hiệu SWEVN</small>
                            <h6 className="card-text">411.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link to='' className="card col-3">
                        <img className="card-img-top" src={BlueShoe1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo Thun Nam Ngắn Tay 5S FUTURE, Chất Cotton USA, Mềm Mịn, Thấm Hút, Mát, Co Giãn, In Trẻ Trung (TSO23017)</small>
                            <h6 className="card-text">109.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link to='' className="card col-3">
                        <img className="card-img-top" src={RedShoe1} alt="Card image" />
                        <div className="card-body">
                            <small>NEVER GIVE UP, mã G112. Áo thun nam nữ in chữ siêu đẹp, form unisex. Áo phông GOKING hàng hiệu, quà tặng cao cấp cho gia đình, cặp đôi, hội nhóm, doanh nghiệp</small>
                            <h6 className="card-text">99.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link to='' className="card col-3">
                        <img className="card-img-top" src={WhiteShoe1} alt="Card image" />
                        <div className="card-body">
                            <small>PARIS, mã G108. Áo phông GOKING hàng hiệu, form unisex cho nam nữ, trẻ em, bé trai gái. Áo thun in hình siêu đẹp, quà tặng cao cấp cho gia đình, cặp đôi, hội nhóm, doanh nghiệp</small>
                            <h6 className="card-text">119.000 vnđ</h6>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ListShoe;