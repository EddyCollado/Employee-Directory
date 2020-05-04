import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import Main from "./components/Main/Main";
import Footer from "./components/Footer/index";
// import Container from "./components/Container";
import Header from "./components/Header/Header";
// import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <p>
    //       Testing, react, I AM HERE!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        {/* <Container> */}
        <Wrapper>
          <Header />
          <Main />
        {/* <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
        {/* </Container> */}
      </div>
    </Router>
  );
}

export default App;
