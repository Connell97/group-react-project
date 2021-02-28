import './TweetContent.css';

const TweetContent = (props) => {
    const imgIncl = props.imgContent;
    return (
        <div className = "tweet-content">
            {props.content}
            {imgIncl &&
                <img src = {imgIncl} alt = "some alt tag"/>
            }
        </div>
    )
}

export default TweetContent;