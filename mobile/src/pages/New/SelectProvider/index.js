import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Container, ProvidersList, Provider, Avatar, Name } from './styles';
import Background from '~/components/Background';

import api from '~/services/api';

const SelectProvider = ({ navigation }) => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const loadProviders = async () => {
      try {
        const response = await api.get('providers');
        setProviders(response.data);
      } catch (error) {
        Alert.alert(error.message);
      }
    };
    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={(provider) => String(provider.id)}
          renderItem={({ item: provider, index }) => (
            <Provider
              onPress={() => {
                navigation.navigate('SelectDateTime', { provider });
              }}
              last={index === providers.length - 1}
            >
              <Avatar
                source={
                  provider.avatar
                    ? { uri: provider.avatar.url }
                    : {
                        uri: `https://api.adorable.io/avatars/50/${provider.name}.png`,
                      }
                }
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
};

export default SelectProvider;
