import "./Banner.css"

const Banner = () => {
  const truncate = (string , n)=>{
      return string?.length > n ? string.substr(0, n-1)+'....' : string;
  }
  return (
    <div className="banner" style={{
        backgroundSize:"cover",
        // backgroundImage:`url('https://upload.wikimedia.org/wikipedia/commons/0/00/Original_Netflix_Logo.png')`,
        backgroundPosition:"center center",
        }}>
        <div className="banner__contents">
            <div className="banner__title">Movie Name</div>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate (`This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,150)}</h1>
            <div className="banner__fadeBottom" />

        </div>
    </div>
  )
}

export default Banner