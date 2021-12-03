import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive'
 
let Server;
if (process.env.NODE_ENV === "production") {
  Server = "https://picnic-basket.vercel.app/api";
} else {
  Server = "http://localhost:3000/";
}


// function Array (){

//     const tet = ['Picnic','\n' , Math.round(Math.random() * 100)]

//     const randomColor = Math.floor(Math.random()*16777215).toString(16);

//     console.log(randomColor)

//     const xPostion = Math.round(Math.random() * 200)
//     const yPostion = Math.round(Math.random() * 100)

//     const element = React.createElement(
//       'body', 
//       { style: { background: '#'+randomColor, width: xPostion, height: yPostion  } },
      
//     )

//   return (
//      <h1>{element}</h1>
//   )
// } 



function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  
  return (
    <div className="App">
      <section className="App-header">

      <h1>Why you should join</h1>

      <form method="post" action={Server} encType="application/json">
        <input type="text" id="fname" name="fname" placeholder="Join our waiting list" />
        </form>
       {isTabletOrMobile && <img src="https://cdn-static.farfetch-contents.com/content/UP/EXPERIENCE/Metaverse/qrcode.png" className="qrcode" alt="QR code" /> }  
      </section>
    </div>
  );
}

export default App;