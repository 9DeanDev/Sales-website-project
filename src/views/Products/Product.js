import { useParams } from "react-router-dom";
import Shirt from "./Shirt";
import Shoe from "./Shoe";
import Trousers from "./Trousers";
import Socks from "./Socks";

const Product = () => {
    let { name } = useParams()
    return (
        <>
            {name === 'Shirt' &&
                <>
                    <Shirt />
                </>
            }
            {name === 'Shoe' &&
                <>
                    <Shoe />
                </>
            }
            {name === 'Trousers' &&
                <>
                    <Trousers />
                </>
            }
            {name === 'Socks' &&
                <>
                    <Socks />
                </>
            }
        </>
    )
}
export default Product;