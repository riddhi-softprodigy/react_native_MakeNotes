import React from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import AppText from '../../Components/AppText/AppText';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Redux/login';
import styles from './style';
import { Camera, Logout } from '../../Utils/images';
import CommonBackground from '../../Components/Background';
import navigationService from '../../Navigation/navigationService';

const Home = () => {
  const dispatch = useDispatch<any>();
  const Scan = () => <TouchableOpacity style={styles.scanContainer} onPress={() =>navigationService.navigate('TextRecognaigation')}>
    <View style={styles.scan}>
      <Camera  width={40} height={40}/>
    </View>
    <AppText style={styles.title}>Scan Document</AppText>
  </TouchableOpacity>;
  return (
    <SafeAreaView style={styles.container}>
      <CommonBackground>
        <View style={styles.header}>
          <AppText style={styles.title}>Home</AppText>
          <View style={styles.emptySpace} />
          <TouchableOpacity onPress={() => dispatch(logoutUser({ showToast: true }))}>
            <Logout />
          </TouchableOpacity>
        </View>
        <Scan />
      </CommonBackground>
    </SafeAreaView>
  );
};

export default Home;
