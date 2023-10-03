import Trousers1 from '../../../assets/Trousers1.jpg'
import BlueTrousers1 from '../../../assets/BlueTrousers.jpg'
import GreenTrousers1 from '../../../assets/GreenTrousers.jpg'
import WhiteTrousers1 from '../../../assets/WhiteTrousers.jpg'
import Trousers from './Trousers'
import { Link } from 'react-router-dom'
const ListTrousers = () => {
    return (
        <>
            <div className="container bg-light p-4">
                <h2>Sản phẩm quần bán chạy</h2>
                {/* <p>Image at the top (card-img-top):</p> */}
                <div className="row">
                    <Link className="card col-3" to='/ListTrousers/Trousers'>
                        <img className="card-img-top" src={Trousers1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo thun unisex REYE TEE có form baby tee 100% cotton in lụa - Thương hiệu SWEVN</small>
                            <h6 className="card-text">411.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to='/ListTrousers/Trousers'>
                        <img className="card-img-top" src={BlueTrousers1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo Thun Nam Ngắn Tay 5S FUTURE, Chất Cotton USA, Mềm Mịn, Thấm Hút, Mát, Co Giãn, In Trẻ Trung (TSO23017)</small>
                            <h6 className="card-text">109.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to='/ListTrousers/Trousers'>
                        <img className="card-img-top" src={GreenTrousers1} alt="Card image" />
                        <div className="card-body">
                            <small>NEVER GIVE UP, mã G112. Áo thun nam nữ in chữ siêu đẹp, form unisex. Áo phông GOKING hàng hiệu, quà tặng cao cấp cho gia đình, cặp đôi, hội nhóm, doanh nghiệp</small>
                            <h6 className="card-text">99.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to='/ListTrousers/Trousers'>
                        <img className="card-img-top" src={WhiteTrousers1} alt="Card image" />
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
export default ListTrousers;