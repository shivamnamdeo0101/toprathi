import styled from 'styled-components';

export const Button = styled.TouchableOpacity`
    padding:8px;
    background-color:#ccc;
    border-radius:33px;
`;

export const Header = styled.View`
    padding:22px;
    flex-direction:row;
    justify-content:space-between;
  
`;

export const ProfileView = styled.View`
    flex:1;
    padding:16px;
`;


export const Row = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:8px;
    margin-bottom:16px;

 

`;
export const Column = styled.View`
    flex-direction:column;
    margin-left:10px;
`;


export const Data = styled.View`
    flex-direction:row;
    align-items:center;
    
`;

export const UserName = styled.Text`
   font-size:20px;
   color:#000;
   font-weight:400;
  
`;

export const Mobile = styled.Text`
   font-size:18px;
   color:#555;
  
`;

export const ListText = styled.Text`
   font-size:20px;
   color:#000;
  
`;





export const ProfileImg = styled.Image`
    padding:16px;
    width:100px;
    height:100px;
    margin-right:12px;
    border-radius:99px;
    border-width:2px;
    border-color:#ccc;
`;

export const LogoutButton = styled.TouchableOpacity`
    background-color:#3452eb;
    padding:16px;
    

`;

export const LogoutText = styled.Text`
   font-size:18px;
   color:#000;
   font-weight:bold;
   text-align:center;
   color:#fff;
`;