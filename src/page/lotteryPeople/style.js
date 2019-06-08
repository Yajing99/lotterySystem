import styled from 'styled-components';
import backgroundPic from '../../statics/background.jpg';
import diamondPic from '../../statics/diamond.png'

export const LotteryPeopleWrapper = styled.div`
  position : absolute;
  top : 0;
  bottom : 0;
  left : 0;
  right : 0;
  background : url(${backgroundPic});
  background-size: cover;
  height : 100%;
`;

export const LotteryPeopleAll = styled.div`
  overflow : hidden;
  margin : 0 auto;
  width : 960px;
`;

export const LotteryPeopleTitle = styled.div`
  font-size : 24px;
  text-align : center;
  color : #cc0033;
  font-weight : bold;
  line-height : 50px;
  margin-top : 50px;
  width : 960px;
`;

export const LotteryPeoplePage = styled.div`
  width : 800px;
  margin : 0 auto 0 90px; 
  height : 400px;
`;

export const LotteryPeopleBlock = styled.span`
  display : block;
  float : left;
  overflow : hidden;
  margin-left : 20px;
  margin-top : 30px;
  width : 180px;
  height : 40px;
  cursor : pointer;
`;

export const LotteryPeoplePhoto = styled.div`
  float : left;
  width : 45px;
  height : 40px;
  background : url(${diamondPic});
  opacity: 0.8;
`;

export const LotteryPeopleName = styled.div`
  width : 114px;
  margin-left : 3px;
  line-height : 20px;
  font-size : 15px;
  color : #fff;
  float : left;
`;

export const LotteryPeopleNumber =styled.div`
  width : 114px;
  line-height : 20px;
  font-size : 15px;
  color : #fff;
  float : left;
`;

export const LotteryPeopleChoose = styled.div`
  width : 800px;
  margin : 20px auto auto 110px;
  height : 25px;
  overflow : hidden;
  .add {
    font-size : 18px;
    margin-left : 370px;
    width : 24px;
    line-height : 25px;
    cursor : pointer;
    background-color : #eee; 
    color : #cc0033;
    text-align : center;
    opacity:0.7;
  }
  .delete {
    font-size : 18px;
    margin-left : 20px;
    width : 24px;
    line-height : 25px;
    cursor : pointer;
    background-color : #eee;
    color : #cc0033;
    text-align : center;  
    opacity:0.7;  
  }
  .link {
    text-decoration : none;
  }
`;

export const LotteryPage = styled.span`
  float : left;
  background-color: #eee;
  line-height : 25px;
  text-align : center;
  font-size : 18px;
  color : #cc0033;
  width : 80px;
  border-radius : 5px;
  cursor: pointer;
  opacity:0.7; 
`;

export const LotteryHomePage = styled.span`
  margin-left : 20px;
  background-color: #eee;
  line-height : 25px;
  text-align : center;
  font-size : 18px;
  color : #cc0033;  
  width : 80px;
  border-radius : 5px;
  cursor: pointer;
  text-decoration : none;
  opacity : 0.7;
`;

export const LotteryPeopleUp = styled.span`
  margin-left : 20px;
  background-color: #eee;
  line-height : 25px;
  text-align : center;
  font-size : 18px;
  color : #cc0033;  
  width : 60px;
  border-radius : 3px;
  cursor: pointer;  
  opacity:0.7;
`;

export const LotteryPeopleDown = styled.span`
  margin-left : 20px;
  background-color: #eee;
  line-height : 25px;
  text-align : center;
  font-size : 18px;
  color : #cc0033;  
  width : 60px;
  border-radius : 3px;
  cursor: pointer; 
  opacity:0.7; 
`;