import './styles.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//Components
import InvoiceItem from './InvoiceItem/InvoiceItem';
import NewInvoiceModal from '../../components/NewInvoiceModal/NewInvoiceModal';

//MaterialUI 
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


export default function Invoices() {
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const invoices = useSelector(state => state.invoices.invoices);

    const handleChange = (e) => {
        setFilter(e.target.value)
    };

    const handleModalOpen = () => {
        setModalOpen(true)
        dispatch({ type: 'NEW_INVOICE_START', payload: {date: "22", recipient: "asd", amount: 120, status: false}})
    };

    const renderedInvoices = invoices.map(invoice =>{
        return <InvoiceItem 
                    key={invoice.id} 
                    invoice={invoice}
                />
    })

    
    return (
        <div className="invoices">
            <div className="wrapper">
                <div className="invoicesTop">
                    <div className="left">
                        <h1>Invoices</h1>
                        <p>There {invoices.length === 1 ? `is ${invoices.length}` : `are ${invoices.length}`} total invoices.</p>
                    </div>
                    <div className="right">
                        <FormControl className="selectForm" sx={{minWidth: 200}}>
                            <InputLabel>Filter by Status</InputLabel>
                            <Select
                                label="Filter By Status"
                                value={filter}
                                onChange={handleChange}
                            >
                                <MenuItem value="paid">Paid</MenuItem>
                                <MenuItem value="pending">Pending</MenuItem>
                            </Select>
                        </FormControl>
                        <Button 
                            variant="contained" 
                            startIcon={<AddCircleOutlineIcon/>}
                            className="newInvoiceBtn"
                            onClick={handleModalOpen}
                        >
                            New Invoice
                        </Button>
                    </div>
                </div>
                <div className="invoiceItems">
                    <ul>
                        {renderedInvoices}
                    </ul>
                </div>
            </div>
            <NewInvoiceModal
                open={modalOpen}
                setModalOpen={setModalOpen}
            />
        </div>
    )
}
