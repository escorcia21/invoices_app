import { useEffect } from "react"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { deleteProduct } from "../../../redux/slices"

export default function ProductItem({ product }) {
    const id = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        id.current = product.productID
    },[])

    function onDelete() {
        dispatch(deleteProduct(id.current))
    }

    return (
        <tr>
            <td>{product.productID}</td>
            <td>{product.product_name}</td>
            <td>{product.description}</td>
            {/* <td>{product.quantity}</td> */}
            <td>2</td>
            <td>{product.price}</td>
            <td>100USD</td>
            <td><button className="delete__button" onClick={onDelete}>Delete</button></td>
            {/* <td>{product.total}</td> */}
        </tr>

    )
}