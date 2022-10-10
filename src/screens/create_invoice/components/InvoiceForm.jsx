import SearchCombo from "./SearchCombo"
import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, deleteProduct } from "../../../redux/slices"
import { Table } from "../../../components"
import Field from "./Field"
import ProductItem from "./ProductItem"

const headers = ['product ID', 'Product Name','Desciption', 'Quantity', 'Unit price', 'Total', 'Accions']

export default function InvoiceForm() {
    const clients = useSelector((state) => state.clients)
    const products = useSelector((state) => state.products)
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const currentProduct = useRef()
    const [invoice, setInvoice] = useState({
        client: '',
        date: '',
        subtotal: '',
        discount: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setInvoice(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleUser(client) {
        setInvoice(prevState => ({
            ...prevState,
            client
        }))
    }

    function handleProducts(product) {
        currentProduct.current = product
    }

    function handeSubmit(e) {
        e.preventDefault()
    }

    function handleAddProduct() {
        dispatch(addToCart(currentProduct.current))
    }

    return (
        <form id="create__form" onSubmit={handeSubmit}>
            <div className="form__group">
                <SearchCombo 
                    options={clients}
                    name="client_name" 
                    label="Client" 
                    handleChange={handleUser} 
                />
                <Field 
                    name="date" 
                    label="Date" 
                    type="date" 
                    handleChange={handleChange}
                    value={invoice.date}
                />
                <Field 
                    name="subtotal" 
                    label="Subtotal" 
                    type="number" 
                    handleChange={handleChange}
                    value={invoice.subtotal}
                />
                <Field 
                    name="discount" 
                    label="Discount" 
                    type="number" 
                    handleChange={handleChange}
                    value={invoice.discount}
                />
            </div>
            <div id="add__products">
                <SearchCombo 
                    options={products}
                    name="product_name" 
                    label="Poduct" 
                    handleChange={handleProducts} 
                />
                <button className="form__button" onClick={handleAddProduct}>Add to card</button>
            </div>
            <div id='create__products'>
                <Table headers={headers}>
                    {
                        cart.map((product, index) => {
                            return (
                                <ProductItem product={product}/>
                            )
                        })
                    }
                </Table>
            </div>
            <input className="form__button" type="submit" value="Add Invoice" />
        </form>
    );
}