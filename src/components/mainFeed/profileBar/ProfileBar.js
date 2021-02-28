import './ProfileBar.css';

const ProfileBar = (props) => {
    const chkVerif = props.profileInfo.verified;
    return (
        <div className = "profile-bar">
            <div className = "profile-info">
                <div className = "profile-name">{props.profileInfo.profileName}</div>
                <div className = "verified">
                    {chkVerif === true &&
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png" alt="verified badge"/>
                    }
                </div>
                <div className = "handle">@{props.profileInfo.handle}</div>
                <div className = "dot">·</div>
                <div className = "timestamp">{props.profileInfo.timestamp}</div>
            </div>
        </div>
    )
}

export default ProfileBar;