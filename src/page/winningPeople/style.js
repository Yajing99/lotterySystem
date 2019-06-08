import styled from 'styled-components';
import backgroundPic from '../../statics/background.jpg';
import windiamondPic from '../../statics/windiamond.png';

export const WinningPeopleWrapper = styled.div`
  position : absolute;
  top : 0;
  bottom : 0;
  left : 0;
  right : 0;
  background : url(${backgroundPic});
  background-size: cover;
  height : 100%;
`;

export const WinningPeopleAll = styled.div`
  overflow : hidden;
  margin : 0 auto;
  width : 960px;
`;

export const WinningPeopleTitle = styled.div`
  font-size : 24px;
  text-align : center;
  color : #cc0033;
  font-weight : bold;
  line-height : 50px;
  margin-top : 50px;
  width : 960px;
`;

export const WinningPeoplePage = styled.div`
  width : 800px;
  margin : 0 auto 0 85px;
  height : 400px;
  overflow : hidden;
`;

export const WinningPeopleBlock = styled.span`
  display : block;
  float : left;
  overflow : hidden;
  margin-left : 25px;
  margin-top : 25px;
  width : 241px;
  height : 30px;
`;

export const WinningPeoplePhoto = styled.div`
  float : left;
  width : 34px;
  height : 30px;
  background : url(${windiamondPic});
  opacity: 0.8;
`;

export const WinningPeopleInfo = styled.div`
  width : 204px;
  margin-left : 3px;
  line-height : 20px;
  font-size : 18px;
  padding-top : 1px;
  color : #fff;
  float : left;
`;

export const WinningPeopleChoose = styled.div`
  width : 800px;
  margin : 20px auto auto 110px;
  height : 25px;
  overflow : hidden;
  .link {
    text-decoration : none;  
  }
`;

export const WinningClear = styled.span`
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

export const WinningHomePage = styled.span`
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

export const WinningPeopleUp = styled.span`
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

export const WinningPeopleDown = styled.span`
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