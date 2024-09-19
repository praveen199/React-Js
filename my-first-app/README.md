auto Rename tag extension

bracket pair colorization

react js is java script library which competete with angular framwwork

Check node version :
----------------------------
node -v  

Check npm version :
----------------------------
npm -v  

create react application :
----------------------------
Way 1 :
-----------
npm install -g create-react-app 
create-react-app reactproject 

Way 2 :
-----------
npx create-react-app my-first-app
cd my-app

npm start

npm run build - used for production

check react version :
--------------------------------
npm view react version


index.html
---------------------
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    
  </body>
  
there are 2 types of component in react js
 1.function based - new approach
 2.class based - old approach 


JSX is html only need to do some changes..like
for -> htmlFor
class -> className
tabIndex

return only 1 element in div

app.js
-------------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <h1>hello</h1>
  );
}

export default App;

app.js
-------------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <h1>This is my app</h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Praveen
        </a>
      </header>
    </div>
    </>
  );
}

export default App;

setting -> left click -> setting -> search emmet -> Emmet: Include Languages -> 
key value ->"javascript": "javascriptreact"

app.js
-------------
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="blank">Lovely</div>
  );
}

export default App;

App.css
----------
.blank {
    color: blue;
}

app.js
-------------
import logo from './logo.svg';
import './App.css';

let name = "Praveen";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Data</li>
      <navbar></navbar>
      <div className="container">
        <h1>Hello : {name}</h1>
        This is Data
      </div>
    </nav>
    </>
  );
}
export default App;


Tutorial - 5 Project 1_ Setup   Adding Bootstrap to React
-----------------------------------------------------------------------------------------
npm install - install all dependecy that's why we are putting node_modules folder into comment section

go to -> https://getbootstrap.com/docs/5.3/getting-started/introduction/

add bootstrap js and css file into project

index.html
-------------------------
<!DOCTYPE html>
<html lang="en">
  <link>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

       <!--bootstrap CSS-->
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
       rel="stylesheet" 
       integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
       crossorigin="anonymous">
      <title>React App</title> 
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div> 
    
  </body>
<!--bootstrap file-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" 
  crossorigin="anonymous">
</script>
</html>

copy nav bar from https://getbootstrap.com/docs/5.3/components/navbar/

replace class with className

href="#" replace with href="/"

App.js
-------------------------------------------------------------------------------------
import './App.css';

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Text Utils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}
export default App;

6.Understanding Props and PropTypes in React
-------------------------------------------------------------------------------------
Install below plugin :
----------------------
Visual Studio Code -> Extension -> Search ES7 React

You can check this on internet :
https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets

rfc -> used for create react component

create a folder components & create a file Navbar.js

Note : Props are read only,we can't changes in side our function.

go to https://legacy.reactjs.org/docs/typechecking-with-proptypes.html

App.js
------------ 
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils"/>
    </>
  );
}

export default App;


Navbar.js
------------
import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    // aboutText: 'Set string here'
    aboutText: 'About'
};

7.Understanding State _ Handling Events in React
-------------------------------------------------------------------------------------
create 1 new js file in components folder TextForm.js

type rfc inside TextForm.js to load react components

go to https://getbootstrap.com/docs/5.3/forms/form-control/ and select form & place inside TextForm.js


TextForm.js
-------------------------------------
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked.." + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On changes");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter the text here..");

    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} /> 
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
        </div>
    )
}

NOTE : listen to onChange is necessary because I can't type and need to change state

App.js
-------------------------------------
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter The Text To Analyze" />
      </div>
    </>
  );
}

export default App; 