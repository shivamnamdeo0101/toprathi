import styled from 'styled-components';


export const Container = styled.View`
  flex: 1;
  justify-content:center;
  align-items:center;
  background-color: #ffffff;
`;

export const CollectModal= styled.View`
  flex: 1;
  background-color: #ffffff;
  border-radius:10px;
`;

export const BoxChip = styled.TouchableOpacity`
  border-width:2px;
  border-color:${props => props.border_color};
  margin-bottom:16px;
  
`;
export const BoxText = styled.Text`
  padding:16px;
  font-size:20px;
  color:#000;
`;

export const ClassChip = styled.TouchableOpacity`
  border-width:2px;
  border-color: ${props => props.border_color};
  margin-right:16px;
  margin-bottom:16px;
  
  
`;
export const ClassText = styled.Text`
  padding:16px;
  font-size:20px;
  color:#000;
`;