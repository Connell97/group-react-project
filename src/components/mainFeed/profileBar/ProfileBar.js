import './ProfileBar.css';
import CheckIcon from '@material-ui/icons/Check';

const ProfileBar = (props) => {
    // const chkVer = () => {if (props.profileInfo.verified == true) {
    //     return (
    //         <CheckIcon/>
    //     )
    // }}
    return (
        <div className = "profile-bar">
            <div className = "profile-info">
                <div className = "profile-name">{props.profileInfo.profileName}</div>
                <div className = "verified">
                    <CheckIcon style={{ color: `rgb(83,165,228)` }} />
                </div>
                <div className = "handle">@{props.profileInfo.handle}</div>
                <div className = "dot">·</div>
                <div className = "timestamp">{props.profileInfo.timestamp}</div>
            </div>
        </div>
    )
}

export default ProfileBar;