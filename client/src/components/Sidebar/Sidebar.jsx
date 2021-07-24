import './styles.scss';

//MaterialUI
import PaymentIcon from '@material-ui/icons/Payment';
import Brightness6Icon from '@material-ui/icons/Brightness6';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarTop">
                <PaymentIcon className="logo"/>
                
            </div>
            <div className="lighterShade"></div>
            
            <div className="sidebarBottom">
                <Brightness6Icon className="modeIcon"/>
                <hr/>
                <span>
                    <img src="assets/male_avatar.png" alt="" className="profileImg" />
                </span>
            </div>
        </div>
    )
}
