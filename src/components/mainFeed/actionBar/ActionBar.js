import './ActionBar.css';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

// const actionIcons = [
//     "https://static.thenounproject.com/png/124237-200.png",
//     "https://smmsumo.com/blog/wp-content/uploads/2018/01/Twitter-Retweet-Worldwide-smmsumo-1.png",
//     "https://www.svgrepo.com/show/93466/e-commerce-like-heart.svg",
//     "https://img.icons8.com/ios-glyphs/452/share-rounded.png"
// ]

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