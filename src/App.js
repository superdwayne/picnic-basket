import './App.css';
import { useMediaQuery } from 'react-responsive'


function Array (){

    const tet = ['Picnic','\n' , 'Basket']

  return (
     <h1>{tet}</h1>
  )
}



function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  return (
    <div className="App">
      <header className="App-header">
      {isTabletOrMobile && <p>You are a desktop or laptop</p>}
        <img src="https://picnic.app/nl/wp-content/uploads/sites/18/2020/11/logo.svg" className="App-logo" alt="logo" />
        <Array />
      </header>
    </div>
  );
}

export default App;