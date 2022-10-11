import { useEffect } from 'react'
import { Table } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { dismissDetails } from '../../redux/slices'
import DetailItem from './components/DetailItem'
import './invoiceDetail.css'

const headers =[ 'Details Number', 'Invoice Number', 'Product ID', 'Description', 'Quantity', 'Total' ]

export default function Modal() {
    const { details } = useSelector(state => state.details)
    const dispatch = useDispatch()

    function handleCLose() {
        dispatch(dismissDetails())
    }

    return (
        <div className="invoice-detail">
            <div className="invoice-detail__content">
                <button className="invoice-detail__close" onPointerDown={handleCLose}>X</button>
                <div className="invoice-detail__table">
                    <Table headers={headers}>
                        {details.map(detail => {
                            return (
                                <DetailItem detail={detail}/>
                            )
                        })}
                    </Table>
                </div>
            </div>
        </div>
    )
}

