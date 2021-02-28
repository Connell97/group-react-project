import './ActionBar.css';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

const ActionBar = () => {
    return (
        <div className = "action-bar">
            <div className = "comment-button">
                <ChatBubbleOutlineRoundedIcon color="disabled"/>
            </div>
            <div className = "retweet-button">
                <RepeatRoundedIcon color="disabled"/>
            </div>
            <div className = "like-button">
                <FavoriteBorderRoundedIcon color="disabled"/>
            </div>
            <div className = "share-button">
                <ShareRoundedIcon color="disabled"/>
            </div>
        </div>
    )
}

export default ActionBar;