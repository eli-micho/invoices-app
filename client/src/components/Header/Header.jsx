import './styles.scss';

//MaterialUI
import PaymentIcon from '@material-ui/icons/Payment';

export default function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <PaymentIcon className="icon" fontSize="large"/>
                </div>
                <div className="right">
                </div>
            </div>
        </div>
    )
}
