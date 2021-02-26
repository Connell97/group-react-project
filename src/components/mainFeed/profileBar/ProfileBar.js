import './ProfileBar.css';

const ProfileBar = (props) => {
    return (
        <div className = "profile-bar">
            <div className = "profile-pic">
                <img src = {props.profileInfo.profilePic} alt = "Profile pic"/>
            </div>
            <div className = "profile-info">
                <p className = "profile-name">{props.profileInfo.profileName}</p>
                <p className = "handle">{props.profileInfo.handle}</p>
                <p className = "timestamp">{props.profileInfo.timestamp}</p>
            </div>
        </div>
    )
}

export default ProfileBar;