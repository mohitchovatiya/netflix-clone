import React from "react";
// import BackgroundImage from
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
export default function Signup() {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex colunm a-center">
          <div className="text flex clounm">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch antwhere. Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your mail to created or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" />
            <input type="password" placeholder="Password" name="passowrd" />
            <button>Get Started</button>
          </div>
          <button>Log IN</button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

   position:;
  .content{
  position:absolute;
  top:0;
  }

// 
//  .content{
//             
//             top:0;
// left:10;
// background-color:rgba(0,0,0,0.5);
// height:100vh;
// width;100vw;
// display:grid;
// grid-template-rows:15vh 85vw;
}
`;
