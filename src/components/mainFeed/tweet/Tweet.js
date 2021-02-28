import './Tweet.css';
import ActionBar from '../actionBar/ActionBar';
import TweetContent from '../tweetContent/TweetContent';
import ProfileBar from '../profileBar/ProfileBar';

const Tweet = (props) => {
    return(
        <div className = "tweet">
            <div className = "pic-col">
                <div className = "profile-pic" style = {{backgroundImage: `url(${props.profileInfo.profilePic})`}}></div>
            </div>
            <div className = "info-container">
                <ProfileBar profileInfo = {props.profileInfo}/>
                <TweetContent content = {props.profileInfo.content} imgContent = {props.profileInfo.imgContent}/>
                <ActionBar/>
            </div>
        </div>
    )
}

export default Tweet;