import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled(FlatList).attrs({
  showVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  flex: 0.5;

  align-items: center;
  justify-content: space-between;
  margin-right: ${(props) => (props.last ? '20px' : '10px')};
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
