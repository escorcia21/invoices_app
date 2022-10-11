import SearchCombo from "./SearchCombo"
import { useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addToCart, updateClientID, updateDate, updateDiscount,resetCart, addInvoice, getInvoices } from "../../../redux/slices"
import { createInvoice,createDetailInvoice, fetcher } from "../../../services/invoiceService"
import { Table } from "../../../components"
import Field from "./Field"
import ProductItem from "./ProductItem"

const headers = ['Product ID', 'Product Name','Description', 'Quantity', 'Unit price', 'Total', 'Actions']

export default function InvoiceForm() {
    const clients = useSelector((state) => state.clients)
    const products = useSelector((state) => state.products)
    const { clientID, items, subtotal, discount, date, total } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const currentProduct = useRef()
    const [quantity, setQuantity] = useState(1)

    function handleChange(e) {
        const { name, value } = e.target

        switch (name) {
            case 'date':
                dispatch(updateDate(value))
                break
            case 'discount':
                dispatch(updateDiscount(value))
                break
            case 'quantity':
                if (value >= 1 || value === '') {
                    setQuantity(value)
                }
            default:
                break;
        }
    }

    function handleUser(client) {
        dispatch(updateClientID(client.clientID))
    }

    function handleProducts(product) {
        currentProduct.current = product
    }

    async function handeSubmit(e) {
        e.preventDefault()
        if (items.length === 0) {
            alert('Please add at least one product')
            return
        }
            
        const res = await createInvoice(
            {
                clientID,
                items,
                discount,
                date
            }
        )

        const formatProducts = items.map((item) => {
            return {
                productID: item.productID,
                quantity: item.quantity,
            }
        })
        const request = {
            invoiceID: res.data.invoice_number,
            products: formatProducts
        }
        
        await createDetailInvoice(request)
        const invoices = await fetcher('/invoices')
        dispatch(getInvoices(invoices))
        dispatch(resetCart())
        alert('Invoice created')  
    }

    function handleAddProduct(e) {
        e.preventDefault()
        dispatch(addToCart({...currentProduct.current, quantity}))
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
                    value={date}
                />
                <Field 
                    name="subtotal" 
                    label="Subtotal" 
                    type="number" 
                    value={subtotal}
                    disabled={true}
                />
                <Field 
                    name="discount" 
                    label="Discount" 
                    type="number" 
                    handleChange={handleChange}
                    value={discount}
                />
            </div>
            <div id="add__products">
                <SearchCombo 
                    options={products}
                    name="product_name" 
                    label="Product" 
                    handleChange={handleProducts} 
                />
                <Field 
                    name="quantity" 
                    label="Quantity" 
                    type="number" 
                    handleChange={handleChange}
                    value={quantity}
                />
                <button className="form__button" onClick={handleAddProduct}>Add to card</button>
            </div>
            <div id='create__products'>
                <Table headers={headers}>
                    {
                        items.map((product, index) => {
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