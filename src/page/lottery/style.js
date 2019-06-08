import styled from 'styled-components';
import backgroundPic from '../../statics/background.jpg';

export const LotteryWrapper = styled.div`
  position : absolute;
  top : 0;
  bottom : 0;
  left : 0;
  right : 0;
  background : url(${backgroundPic});
  background-size: cover;
  height : 100%;
`;

export const LotteryAll = styled.div`
  overflow : hidden;
  margin : 0 auto;
  width : 960px;
`;

export const LotteryLeft = styled.div`
  float : left;
  width : 625px;
  margin-left : 15px;
  padding-top : 50px;
`;

export const LotteryRight = styled.div`
  width : 280px;
  float : right;
  padding-top : 50px;
  .link {
    text-decoration : none;
  }
`;

export const LotteryTitle = styled.div`
  width : 625px;
  line-height : 50px;
  font-size : 24px;
  text-align : center;
  color : #cc0033;
  font-weight : bold;
`;

export const LotteryPage = styled.div`
  overflow : hidden;
  width : 100%;
  height : 300px;
  margin-top : 10px;
  border : 2px solid #cc6633;
  border-radius : 15px;
`;

export const LotteryBorder = styled.div`
  width : 425px;
  height : 100px;
  margin : 80px auto 40px auto;
  text-align : center;
  font-size : 30px;
  color : #fff;
`;

export const LotteryStart = styled.span`
  padding : 10px 15px;
  font-size : 18px;
  color : #cc0033;
  border-radius : 5px;
  text-align : center;
  margin-left : 162.5px;
  background-color: #eee;
  cursor : pointer;
`;

export const LotteryPause = styled.span`
  padding : 10px 15px;
  font-size : 18px;
  color : #cc0033;
  border-radius : 5px;
  text-align : center;
  margin-left : 160px;
  background-color: #eee;
  cursor : pointer;
`;

export const WinningPage = styled.div`
  overflow : hidden;
  height : 450px;
  border : 2px solid #cc6633;
  border-radius : 15px;
`;

export const WinningTitle = styled.div`
  width : 100%;
  text-align : center;
  color : #cc0033;
  font-size : 24px;
  line-height : 50px;
  font-weight : bold;
`;

export const WinningBorder = styled.div`
  width : 200px;
  margin : 30px auto auto auto;
  height : 330px;
`;

export const Winner = styled.div`
  color : #fff;
  font-size : 20px; 
  text-align : center;
  width : 200px;
  height : 66px; 
`;

export const LotteryPerson = styled.div`
  margin-top : 20px;
  width : 250px;
  line-height : 20px;
  padding : 10px 15px;
  text-align : center;
  background-color : #eee;
  font-size : 15px;
  color : #cc0033;
  border-radius : 15px;
  cursor : pointer;
`;