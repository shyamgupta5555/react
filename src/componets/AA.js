import './Video.css'

function Shyam({title,channel,views="10 million",time}){
  return(
    <div className="container">
    <div className="pic">
    <img src="https://picsum.photos/200/300" alt='this is amazing pic'></img>
    </div>
    <div className="title">{title}</div>
    <div className="channel">{channel}</div>

    <div className="views">
      {views} views <span>.</span> {time}
     </div>
    </div>

  )
}

export default Shyam;