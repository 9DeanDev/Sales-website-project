import { useParams } from "react-router-dom";
import Shirt from "./Shirt/Shirt";
import Shoe from "./Shoe/Shoe";
import Trousers from "./Trousers/Trousers";
import Socks from "./Socks/Socks";
import ListShirt from "./Shirt/ListShirt";
import ListShoe from "./Shoe/ListShoe";
import ListTrousers from "./Trousers/ListTrousers";
import ListSocks from "./Socks/ListSocks";

const Product = () => {
    let { name } = useParams()
    return (
        <>
            {name === 'ListShirt' &&
                <>
                    <ListShirt />
                </>
            }
            {name === 'ListShoe' &&
                <>
                    <ListShoe />
                </>
            }
            {name === 'ListTrousers' &&
                <>
                    <ListTrousers />
                </>
            }
            {name === 'ListSocks' &&
                <>
                    <ListSocks />
                </>
            }
        </>
    )
}
export default Product;