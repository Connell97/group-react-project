import './FeedContainer.css';
import Tweet from '../tweet/Tweet';

//Add code to create new tweet

let profiles = [
    {profilePic: "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg",
    profileName: "Barry O",
    handle: "YObama",
    timestamp: "14:00"},
    {profilePic: "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg",
    profileName: "Barry O",
    handle: "YObama",
    timestamp: "14:00"},
    {profilePic: "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg",
    profileName: "Barry O",
    handle: "YObama",
    timestamp: "14:00"},
]

const FeedContainer = (props) => {
    const tweets = profiles.map((profile, index) => {
        return <Tweet profileInfo = {profile} key = {index}/>
    })
    return(
        <div className = "feed-container">
            {tweets}
        </div>
    )
}

export default FeedContainer;