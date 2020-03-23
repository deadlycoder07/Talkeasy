import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from "antd";
import Header from './components/navbar/Header';
import { Carousel } from "antd";

function App() {
  return (
    <div className="App">
      <Header />
      <headercontent>
        <Carousel autoplay>
          <div>
            <h1 style={{ color: "white" }}>Connect with your friends</h1>
          </div>
          <div>
            <h1 style={{ color: "white" }}>Register Now if  you have not yet!</h1>
          </div>

        </Carousel>
        <div className="btnpanel">
          <Button type="danger" shape="round" style={{ marginTop: 4 }}>Register</Button>
          <Button type="danger" shape="round" style={{ marginTop: 4, marginLeft: 5 }}>Login</Button>
        </div>

      </headercontent>
    </div>
  );
}

export default App;
