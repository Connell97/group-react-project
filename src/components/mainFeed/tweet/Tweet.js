import ActionBar from '../actionBar/ActionBar';
import TweetContent from '../tweetContent/TweetContent';
import ProfileBar from '../profileBar/ProfileBar';

const Tweet = (props) => {
    return(
        <div className = "tweet">
            <ProfileBar profileInfo = {props.profileInfo}/>
            <TweetContent content = "here is some content. Enjoy."/>
            <ActionBar/>
        </div>
    )
}

export default Tweet;