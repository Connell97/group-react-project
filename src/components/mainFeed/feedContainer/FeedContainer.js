import './FeedContainer.css';
import Tweet from '../tweet/Tweet';
import NewTweet from '../newTweet/NewTweet';

//Add code to create new tweet

let profiles = [
    {profilePic: "https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV_400x400.jpg",
    profileName: "Bitconnect Barry",
    handle: "BarackObama",
    timestamp: "04:20",
    content: "wassa wassa wassa wassup"},
    {profilePic: "https://cdn.britannica.com/s:800x450,c:crop/43/172743-138-545C299D/overview-Barack-Obama.jpg",
    profileName: "Barry O",
    handle: "YObama",
    timestamp: "25:69",
    content: "it's ya boi, the one true 'bama",
    verified: true},
    {profilePic: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKAAgAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAABAgMEBQYHAAj/xAA6EAACAQMCBAQDBwIEBwAAAAABAgMABBEFIQYSMUETIlFxMmGBB0KRobHB8BThIzNSYhU0U3KS0dL/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAAfEQADAAIDAQEBAQAAAAAAAAAAAQIDERIhMQRBUSL/2gAMAwEAAhEDEQA/AKVqXCGoaTosd9cIkUbxB3Mj8pLN0UDuarFnKsNzHNIhZVbmx6/KtB+0vXrTX1sEtblnNuCjq2w5v9VM7LhCGbh8tdXkcHhN4rTAZ8tTi3x/0K0t9Fdu9dk1N0OoQrKqS8wA8uF9K0jhy00S40Fp7TT0RJV5zbzNkyMPSsqNss13JDp/NKgJ5SwwSKXi1C854sTOht1KpyHHKKnUKlpEFWhXVbl9RvJZBbJERsIYY8BAO21SGp8NXNlZafcwwzzm5j5mCRluU/QUlw3q95p+rRyWzI0k0gVxIAQ2TWraxxJa3Gl6haaXfRR6lbxb+UY+hoqqlpJdBKVdsx9Qy+V1KsNiCMEUcU5tNP1C+bxIbW4m5znxOU4Y+uaeHh3VlUMbQ4Iz/mp/9VjyrVaNMPaIwChxTufTb23IWeBkJHcimbBlOCMVUSCmhArutGxtTEAFowFFzRlakAbFBij9aAikMg7gklxknfpU3HxRNDGlnCoayWHw3jb7xx1qV4X4VN3Kl69zBJCVPMq7lSfWqxrNnb2Opz29tMZ+RsM+Mb+grpbmq0ZNNdlr+zW30+5vphLByyqpxIz+UKe1NOMzZ22qPYWNjHbJEOYuBvJnvVZt55YkkSN2VWOTg4zU9pWlapxReIMk8qYMrjYAfrRx41ybDbfSIhFPOvICWztjrmrJYWlppHLNeRS3l4d2VMFIvf1b9KsFzwnYaFb25lLz3sjbH/T3JA/L6115ZxywIsMKAHt2J/Vveqc2ffSLYxa7ZHzavDeIRFHMj7kq4Ugj23/IUpBeSiJiixBwc8vhnp/3ADakf+CXHj8yRhmz2AB/nvUvY6HezDPhBCPQYyfnjrWZ3KLlF0IpqIngZI43WYHzKBkH+1RKWT3uppA0CkOTzcr4wMe1WOThGQDmkeMFupVcfnUZeaZJpLrKrO64wTzHI9cVBZZb0hvFaW2V2+s/6aZ1UlkViuSMH601Iqd1aMeXmwJuj46OOo+tQuM1N9EUIMDQDNOCma4RVHaDQRKVIyKBUxRj0qOxjbRNdfQ9OuUtf+auGHmI2VRUXczvf3clwsZ5n8zADvUjo3D15qx8QL4cHQyN39q0HT9DsrPRWhSJSzAguRua6N5Jh7XpnjG76ZmFrECcv09K1X7Nr5ZLF4TgNDtgelZmyeFcMmPhJFWbgK88HWTDnAmXH1FZLt16dh4JnDqUWHi++kk1ZYxy4jiByexJ2/TNKaLBJczeLNunQDrUfx0jwX8LKDzTxpn5nLDb8BU5oWEcxDoMMB8qoyvSWjLgnddllt7G3VBhBn1xTxEVdgMCkYd84+m9HJxue1ZjZoSv0yu1V3VrTx4zGPi6jPTNWOY86cwqJlwcnNLx7E1taM71aIusQzlsBs/Lp+lREa4QDuNjU1fuy6q1go55DIFVl6AdQKjpoXgleKVeVlO4rc3/AIObrVCIG1GFCRtRCcVV6SFNqIy5ooNHBpgWDgm68TT2tmO8RqywrmNfSs74Oumi1F07SritHTyxqPlVpozTxsy7Wo/A1e5T/dkUGk3BtdSgnU45HBPtUzxxZmO+julHlkXBx61XYcCUZ6UmdDD/AKhGp8WJb3mjw3ZGZYXSRJME4BIBG3aoLTtVkZkdLhbRGGzFedj6YHqfSpzh64W94dkjJyYkK5z0wNqYW9pZePFI/JAYgVSSQYUqTkDPYjp9BVVtfpiWJzTlBLjiDU7OL+rtrkXtup35oeRjj0I7/Iint9rWqXc8EFrBJaRzW5uPFZlZ2TYeQDod9yaU1gxPpskEEqTyyjkXwTzJHnuxH6d6fXtsP6bTnjVVktBypnoykYZD8iB+QNQfH0sU14VwQyciySS60xkywZLnbrjdSf8A1Q6XLrF9fPZGcC1UZMkiFZMZ6D5/zerPGsLJzQ291Gx6oIvEGfkw2oIbZ7cyzSrySykYXbKqPX5+37Uqrrwaxd+kQdJtxqNoIo+SKE5OO5z+Z+dV/isBNamAA2Vc/hVqI5p5CMjlINUziCf+o1q7k7c/KPpt+1OG36UZUlsj80U1xNFLVajMDtQ5pPNGWjQDfQpBFqVof94Fa0VHIpHcViwcxzRMvVCCK1zS7v8Aq7GGQHJKips3fVPaY24qsBd6LJyDzx+ZazLkZtlGSdvatnMPPGUfHKwwayXVYWsNSniG3Kxx7UtkvjvpyyY4OvpLK6ns5Wyk8TDr97FXTRbpUZlkOOXbfpis3s2FpAt2f8xn8ufTvWj6OLbULdSSPOuM5/CqcpozRxpP+iurzzz+E9mkckYXyxE8uT60oLq5uYoohaiGRAGzJuD+FMrxL+CXxInilTm2Qrylfr3p5BJeFAWjQSY/6n9qgl0VbY6tBNAhcsPEY+ZQDyk+1dNctdMMKwYHDBu1Nlt7q4fN3PhMfBH+5peNoYI1RM5BJ3OT6VBj2/0ayKIpWB+8Kza5kLXMxJ6yMfzq+6perEk9w5wkKFifpWdxnxI1fOeYZq7EutmPPS3oNneu5c1w60qi5qzwziXLihFLsoApvIcUb2BCA802e3atE4Iu+fTuUn/LOMVQorfE0njEqqty/MnNS9vdpZRNHbFlDdSW61oUbNf0Z448f00aXUoYh/jTIgHqd6pHFC2l/qCz20w5cYclTv7VEyXsjsdx86aS3JbYGprCjFOeoe5JCd4G5QzEqowFG1TPDupmOVY8hACPDydj8iaq8eOXm3ZzsFqd4S09dR4o0+zmBZCskkig9QEP7kUrxTx0Tf05brdMvMF3FdFlbYg7g9Qak4FBKsBt64qo6jpl3o14fiOPhfs606ttau1AUW5cdmDCsDjRtjKq9LNcuqDC9ag7y/UycsO+Bj60UyXd1kSrgN2B6/Kpm20KHT7CfVda/wAK1t4zIYzsWAGfN6e3WlMbZDLlSRRuOL0WeiRwAkTXpyB38MHdj7nYfWqTYXLxDGcpnpS3EOrT65qs+oXHlaU4VB0jQfCv0H700C8sIx6iujGNTPE51W6eycglST4Tv6GnAwMVX4HOwbcVIR3LKAGPOPn1qu8H8JLJ/SQZximshzQeMrdDg+h2riap46LE9jC4uDLc5+Ec5bH1ogck4ptzZcnvR+blFb9GZsVeXGw60EKgtlj+NERCxz2pbGMDsBQArCMScwJz69quf2UDxeOcnfks5Bv7pVLjOKuv2UhrbWf+IFObxTLAgOwYhA2P56VGvBmua3osWp2kkTMEbGUkI+A+vtVG4c0W9u7+a3a1aOOL47hseHnb4T1bPy29qr/H9/rNxrFxbahdM9qcGCBVxHjft36dTmk+BOJF4Y1SKKR2NhdyKk6L0jydpAO2M7/LPoKzOJo1zNKOSZsWnaJbWgBUBn7yMN/p6VmX2zcTK7rw9YyeVCJLtlPU/dT9z9K0DjPiOPQdFuLpTl1GEGfic9BXnC7nluZ5J52LyyMWdj1YncmrccJeGWqbfY3xls0d3Xk5Q2T6UGM7UXlAariIddqVViKRFDmgB2JNt6MtwVPm8w/SmXMa7dvkO5pNJ+jT0IpSyAHrSI6UopoEOAQBgUGetJZoQdvrQAvnymtY4Ejt7DgawvrvEbCaWcuey87KT/4isidsR1eeIb9oNE0rRoD5YraMzDPfAOKhfhZjnlWhtrmotrN5NeP5FbaEd0QfD9ep9zVm+zjhyx1PQp7m8tvEkklaNpGP3V7D0+dUsofAx6DFXnh/XV4d+zaS628RXkEKn77sxC/Tb8AarSNn0amVorf2qa5/W6tHpcTAw2SgPg7GTG/4D9TVFNHlkeWV5JXLyOxZ3PVmJySfc0mavS0jnv07O1EGWOTtjoPShPm9hXCmAauoK6kB1Ax2xXGiHNAACjikwd6OKAD5rgd6CgB81ACyoJnjiY4V2Ck+mdqsc8pvbuS4b77EgY7dAPwA/Kq1HlpUA68wqyQgb7n6fz+bVCzd8cbbYsVHh4bAHtTHiPUjLBaaXGSIbQFnH+qVtz+GcfU0tqNwLe2OCOdthtsarrEsSzEkk5JNKF+j+6/JQFFY9vxri2PeiirTngijAUAFGoGBXV1cThSaQBeufeinajdAKIdzQAQdaUHSkVPmpbNAAigB3NdmgHf3oAdWI5rqP3zVhj2GWz+OP5/YVBaWOa4znGATn0qXu5xb2zsOvQA9c/z9Krr06Xy6nG6ZHarcGa5Kg5VNtu5piTgZNdSZPOdugqxLSOfkt3Tpndd6MBQDrRqZEGuoMmuJNIDjtRGOSo+tcXpBpAJTsTtsKAHBopNcrkjcYorUAf/Z",
    profileName: "Barr yO",
    handle: "FaZe_Billy",
    timestamp: "1 year ago",
    content: "Trump for tsar 2020",
    imgContent: "https://kevsbest.com/wp-content/uploads/2020/02/donald-trump-tan-line.png",
    verified: true},
    {profilePic: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F1de025f8-233d-11eb-aa45-f2df5b216d22.jpg?crop=2239%2C1259%2C6%2C69&resize=1180",
    profileName: "OG Bama",
    handle: "The_OG_BO",
    timestamp: "4 hours ago",
    content: "wow so many fakes on here"},
]

// const newTweet = [...profiles, newProfile];

const FeedContainer = (props) => {

    const tweets = profiles.map((profile, index) => {
        return <Tweet profileInfo = {profile} key = {index}/>
    })
    return(
        // <button onClick = {newTweet}>Create Tweet</button>
        <div className = "feed-container">
            <NewTweet profilePic = "https://kevsbest.com/wp-content/uploads/2020/02/donald-trump-tan-line.png"/>
            {tweets}
        </div>
    )
}

export default FeedContainer;