import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login/LoginScreen';
// import HomeScreen from './screens/Home/HomeScreen';

// import SchoolsScreen from './screens/School/SchoolsScreen';
// import SchoolDetailsScreen from './screens/School/SchoolDetailsScreen';

// import CitiesScreen from './screens/City/CitiesScreen';

// import CollegesScreen from './screens/College/CollegesScreen';
// import CollegeEnquiryScreen from './screens/College/CollegeEnquiryScreen';

// import HotelsScreen from './screens/Hotel/HotelsScreen';
// import HotelBookingScreen from './screens/Hotel/HotelBookingScreen';

// import ContactUsScreen from './screens/Contact/ContactUsScreen';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Schools" component={SchoolsScreen} />
        <Stack.Screen name="SchoolDetails" component={SchoolDetailsScreen} />
        <Stack.Screen name="Cities" component={CitiesScreen}/>
        <Stack.Screen name="Colleges" component={CollegesScreen} />
        <Stack.Screen name="CollegeEnquiry" component={CollegeEnquiryScreen} />
        <Stack.Screen name="Hotels" component={HotelsScreen} />
        <Stack.Screen name="HotelBooking" component={HotelBookingScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} /> */}
      </Stack.Navigator>
      

      {/* <Toast innerRef={(toastRef) => Toast.setRef(toastRef)} /> */}

    </NavigationContainer>
  );
};

export default App;