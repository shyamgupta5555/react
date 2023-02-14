import './App.css';

import Language from './component/LanguageNote';
import LuckyButton from './component/LuckyButton';
import Logo from './component/Logo';
import SearchButton from './component/SearchButton';
import WordBox from './component/WordBox';


function App() {
  return (
    <div className='App'  >
     <div style={{ display: 'flex', justifyContent: 'center' }}>
     <Logo/>
     </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WordBox />
      </div>
  
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          marginTop: '5px',
        }}
      >
        <SearchButton />
        <LuckyButton />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Language/>
      </div>
      
      
    </div>
  )
}



export default App;


