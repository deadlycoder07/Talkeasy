import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Button } from "antd";

class CustomCarousel extends React.Component {
    render(){
        return (
            <div>
             <Carousel autoplay>
              <div>
                <h1 style={{ color: "white" }}>Connect with your friends</h1>
              </div>
              <div>
                <h1 style={{ color: "white" }}>Register Now if  you have not yet!</h1>
              </div>
    
            </Carousel>
                <div className="btnpanel" style={{textAlign:"center"}}>
               <a href='register'><Button type="danger" shape="round" style={{ marginTop: 4 }}>Register</Button></a>
               <a href='/login'><Button type="danger" shape="round" style={{ marginTop: 4, marginLeft: 5 }}>Login</Button></a> 
                </div>
            </div>
        

        );
        }
   
}
export default CustomCarousel;