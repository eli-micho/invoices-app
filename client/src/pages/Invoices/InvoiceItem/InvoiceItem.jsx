import './styles.scss';

//MaterialUI
import Button from '@material-ui/core/Button';

export default function InvoiceItem({invoice}) {
    return (
        <div className="invoiceItem">
            <div className="wrapper">
                <div className="itemLeft">
                    <span className="itemID">#<h3>RT300</h3></span>
                    <span className="itemDate">Due: {invoice.date}</span>
                    <span className="itemUsername">{invoice.recipient}</span>
                </div>
                <div className="itemRight">
                    <h2>${invoice.amount}</h2>
                    <div>
                        <Button
                            variant="contained"
                            className="statusBtn"
                        >
                            &bull; {invoice.status ? "Paid": "Pending"}
                        </Button>
                        <span className="updateBtn">&#62;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
