import './NewTweet.css';

const NewTweet = (props) => {
    return(
        <div className = "new-tweet-form">
            <div className = "pic-col">
                <div className = "profile-pic" style = {{backgroundImage: `url(${props.profilePic})`}}></div>
            </div>
            <div className = "input-content">
                <div>
                    <textarea placeholder = "What's happening?" maxLength="280"/>
                </div>
                <div className = "tweet-options">
                    {/* Add tweet icons (image, gif, ect.) here */}
                    <button className = "tweet-button">Tweet</button>
                </div>
            </div>
        </div>
    )
}

export default NewTweet;