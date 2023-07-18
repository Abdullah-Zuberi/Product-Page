import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/styles';
import {add} from '../store/cartSlice';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

export default function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart);
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: 'ADDED TO CART',
    });
  };

  return (
    <>
      <ImageBackground
        blurRadius={0.5}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC79Yy4bMqUkPW3pAI42XkwqaGS9OhXuVUYAPLIBbxvKS54qgAYJKQAi4j_43awDobtuk&usqp=CAU',
        }}
        style={styles.wrapper}>
        <View style={{padding: 30}}>
          <View
            key={route.params.id}
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: 30,
              padding: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Image
              resizeMode="contain"
              style={{width: '100%', height: 150, marginBottom: 5}}
              source={{uri: route.params.image}}
            />
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#222',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {route.params.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 28,
                color: '#FF4335',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
              }}>
              ${route.params.price}
            </Text>
            <View style={{marginVertical: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'grey',
                  textAlign: 'center',
                }}>
                {route.params.description.slice(0, 150) +
                  (route.params.description.length > 150 ? '...' : '')}
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={{fontWeight: 'bold', color: '#FFBA20'}}>
                Rating: {route.params.rating.rate}
              </Text>
              <Text style={{fontWeight: 'bold', color: '#00B54A'}}>
                Quantity Available: {route.params.rating.count}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  backgroundColor: '#FF4335',
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginTop: 20,
                  alignSelf: 'center',
                }}
                onPress={() => {
                  dispatch(add(route.params));
                  showToast();
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
                  Add To Cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
