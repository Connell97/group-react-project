import './ActionBar.css';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

const ActionBar = () => {
    return (
        <div className = "action-bar">
            <ChatBubbleOutlineRoundedIcon/>
            <RepeatRoundedIcon/>
            <FavoriteBorderRoundedIcon/>
            <ShareRoundedIcon/>
        </div>
    )
}

export default ActionBar;