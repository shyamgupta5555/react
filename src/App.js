import './App.css';

import Shyam from './componets/AA';

function App() {
  let obj={
    title:"tutorial java",
    time:"1 year ago",
    channel:"alpha tutorial"

  }
  return (
    <div className='App'>
      <h1 style={{ backgroundColor: 'red' }}>hii browser</h1>
      <div>
      <Shyam {...obj}></Shyam>
        <Shyam
          title="this is page react"
          time="1 year ago"
          channel="shyam gupta"
        ></Shyam>

        <Shyam
          title="this is page html"
          time="1 year ago"
          views="1 millon"
          channel="shyam gupta"
        ></Shyam>
        
        <Shyam
        title="this is page css"
        time="1 year ago"
        views="10k"
        channel="shyam gupta"
      ></Shyam>



      </div>

    </div>
  );
}





export default App;


