import Socks1 from '../../../assets/Socks1.jpg'
import BlueSocks1 from '../../../assets/BlueSocks.jpg'
import GreenSocks1 from '../../../assets/GreenSocks.jpg'
import WhiteSocks1 from '../../../assets/WhiteSocks.jpg'
import Socks from './Socks'
import { Link } from 'react-router-dom'
const ListSocks = () => {
    return (
        <>
            <div className="container bg-light p-4">
                <h2>Sản phẩm vớ bán chạy</h2>
                {/* <p>Image at the top (card-img-top):</p> */}
                <div className="row">
                    <Link className="card col-3" to='/ListSocks/Socks'>
                        <img className="card-img-top" src={Socks1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo thun unisex REYE TEE có form baby tee 100% cotton in lụa - Thương hiệu SWEVN</small>
                            <h6 className="card-text">411.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to=''>
                        <img className="card-img-top" src={BlueSocks1} alt="Card image" />
                        <div className="card-body">
                            <small>Áo Thun Nam Ngắn Tay 5S FUTURE, Chất Cotton USA, Mềm Mịn, Thấm Hút, Mát, Co Giãn, In Trẻ Trung (TSO23017)</small>
                            <h6 className="card-text">109.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to=''>
                        <img className="card-img-top" src={GreenSocks1} alt="Card image" />
                        <div className="card-body">
                            <small>NEVER GIVE UP, mã G112. Áo thun nam nữ in chữ siêu đẹp, form unisex. Áo phông GOKING hàng hiệu, quà tặng cao cấp cho gia đình, cặp đôi, hội nhóm, doanh nghiệp</small>
                            <h6 className="card-text">99.000 vnđ</h6>
                        </div>
                    </Link>
                    <Link className="card col-3" to=''>
                        <img className="card-img-top" src={WhiteSocks1} alt="Card image" />
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
export default ListSocks;
