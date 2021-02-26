import './TweetContent.css';

const TweetContent = (props) => {
    return (
        <div className = "tweet-content">
            {props.content}
        </div>
    )
}

export default TweetContent;