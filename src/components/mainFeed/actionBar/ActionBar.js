import './ActionBar.css';

let actionIcons = [
    "https://static.thenounproject.com/png/124237-200.png",
    "https://smmsumo.com/blog/wp-content/uploads/2018/01/Twitter-Retweet-Worldwide-smmsumo-1.png",
    "https://www.svgrepo.com/show/93466/e-commerce-like-heart.svg",
    "https://img.icons8.com/ios-glyphs/452/share-rounded.png"
]

const ActionBar = () => {
    return (
        <div className = "action-bar">
            <img src={actionIcons[0]}/>
            <img src={actionIcons[1]}/>
            <img src={actionIcons[2]}/>
            <img src={actionIcons[3]}/>
        </div>
    )
}

export default ActionBar;