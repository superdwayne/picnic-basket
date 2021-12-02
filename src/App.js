import './App.css';


function Array (){

    const tet = ['Picnic','\n' , 'Basket']

  return (
     <h1>{tet}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <img src="https://picnic.app/nl/wp-content/uploads/sites/18/2020/11/logo.svg" className="App-logo" alt="logo" />
        <Array />
      </header>
    </div>
  );
}

export default App;