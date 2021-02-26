import './ProfileBar.css';

const ProfileBar = (props) => {
    return (
        <div className = "profile-bar">
            <img src = {props.profileInfo.profilePic} alt = "Profile pic"/>
            <p className = "profile-name">{props.profileInfo.profileName}</p>
            <p className = "handle">{props.profileInfo.handle}</p>
            <p className = "timestamp">{props.profileInfo.timestamp}</p>
        </div>
    )
}

export default ProfileBar;