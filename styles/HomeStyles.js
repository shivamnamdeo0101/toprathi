import styled from 'styled-components';


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;

`;

export const Header = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:12px;
`;

export const Row = styled.View`
  flex-direction:row;
  align-items:center;
  
`;

export const HeadText = styled.Text`
  font-size:20px;
  font-weight:300;
  margin-left:20px;
  
`;
export const ProfileIcon = styled.Image`
  width:25px;
  height:25px;
  margin-left:20px;
 
`;

export const Button = styled.TouchableOpacity`
  background-color:#f0f3f5;
  padding:5px;
  border-radius:33px;
`;

export const Grid = styled.View`
	flex:1;
	flex-direction:row;
	flex-wrap:wrap;
	align-items:flex-start;
	padding:8px;
`;

export const GridComp = styled.TouchableOpacity`
	padding:12px;
	align-items:center;	
	width:50%;
	
`;

export const HelloWrap = styled.View`
  padding:20px;
  padding-top:0px;
`;

export const ProfileName = styled.Text`
  font-size:26px;
  color:#1A73E8;
`;

export const ProfileText = styled.Text`
  font-size:14px;
  
`;

export const FilterScroll = styled.ScrollView`
  padding:12px;
  
`;
export const FilterText = styled.Text`
  color:#000;
  
`;
export const Ctitle = styled.Text`
  color:#fff;
  padding:8px;
  padding-top:1px;
  font-weight:bold;
  font-size:16px;
  
`;
export const Timestamp = styled.Text`
  color:#fff;
  padding:8px;
  padding-top:1px;
  
`;
export const Tag = styled.Text`
  color:#fff;
  padding:8px;
  padding-top:0px;
 

`;
