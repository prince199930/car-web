import React from 'react'
import styled from 'styled-components';


function ErrorPage() {
  return (
    <>
      <NotFoundConatiner>
        <NotFoundingConatiner>
          <NotFound404Conatiner>
            <TitleConatiner>404</TitleConatiner>
          </NotFound404Conatiner>
          <NotConatainer>WE ARE SORRY, PAGE NOT FOUND!</NotConatainer>
          <WhatErrorContainer>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </WhatErrorContainer>
        </NotFoundingConatiner>
      </NotFoundConatiner>
    </>
  )
}

export default ErrorPage


const NotFoundConatiner = styled.div`
  position: relative;
  height: 100vh;
`
const NotFoundingConatiner = styled.div`
  position: absolute;
  left: 50%;
   top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 920px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
`
const NotFound404Conatiner = styled.div`
position: absolute;
height: 100px;
top: 0;
left: 50%;
-webkit-transform: translateX(-50%);
-ms-transform: translateX(-50%);
transform: translateX(-50%);
z-index: -1;
`

const TitleConatiner = styled.h1`
  font-family: "Maven Pro", sans-serif;
  color: #ececec;
  font-weight: 900;
  font-size: 276px;
  margin: 0px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 480px) {
    font-size: 26px;
  }
`

const NotConatainer = styled.h2`
  font-family: "Maven Pro", sans-serif;
  font-size: 46px;
  color: #000;
  font-weight: 900;
  text-transform: uppercase;
  margin: 0px;
  @media only screen and (max-width: 480px) {
   font-size: 26px;
}
`
const WhatErrorContainer = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 15px;
`

