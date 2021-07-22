import './styles.scss';

//MaterialUI
import Button from '@material-ui/core/Button';

export default function InvoiceItem() {
    return (
        <div className="invoiceItem">
            <div className="wrapper">
                <div className="itemLeft">
                    <span className="itemID">#<h3>RT300</h3></span>
                    <span className="itemDate">Due: 19 Aug 2021</span>
                    <span className="itemUsername">Jensen Huang</span>
                </div>
                <div className="itemRight">
                    <h2>$1800.90</h2>
                    <div>
                        <Button
                            variant="contained"
                            className="statusBtn"
                        >
                            &bull; Paid
                        </Button>
                        <span className="updateBtn">&#62;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
