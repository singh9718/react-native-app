import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const HotelsScreen = ({ navigation }) => {
  const hotelList = [
    { name: 'Taj Mahal Palace, Mumbai', location: 'Colaba, Mumbai' },
    { name: 'The Oberoi Amarvilas, Agra', location: 'Taj East Gate Road, Agra' },
    { name: 'The Leela Palace, New Delhi', location: 'Chanakyapuri, New Delhi' },
    { name: 'ITC Grand Chola, Chennai', location: 'Guindy, Chennai' },
    { name: 'Umaid Bhawan Palace, Jodhpur', location: 'Jodhpur, Jodhpur' },
    { name: 'The Imperial, New Delhi', location: 'Connaught Place, New Delhi' },
    { name: 'The Leela Palace, Bangalore', location: 'Old Airport Road, Bangalore' },
    { name: 'Trident Nariman Point, Mumbai', location: 'Nariman Point, Mumbai' },
    { name: 'Wildflower Hall, Shimla', location: 'Chharabra, Shimla' },
    { name: 'Vivanta by Taj - Malabar, Kochi', location: 'Willingdon Island, Kochi' },
    { name: 'Radisson Blu Plaza Hotel, Hyderabad', location: 'Banjara Hills, Hyderabad' },
    { name: 'The Park, Kolkata', location: 'Park Street, Kolkata' },
    { name: 'Grand Hyatt, Goa', location: 'Bambolim, Bambolim' },
    { name: 'Maidens Hotel, New Delhi', location: 'Civil Lines, New Delhi' },
    { name: 'The Leela Palace, Udaipur', location: 'Udaipur, Udaipur' },
    { name: 'JW Marriott Hotel, Pune', location: 'Senapati Bapat Road, Pune' },
    { name: 'Hotel Samrat, Jaipur', location: 'Jawaharlal Nehru Marg, Jaipur' },
    { name: 'The Windflower Resort & Spa, Mysuru', location: 'Mysuru, Mysuru' },
    { name: 'Marriott Resort & Spa, Goa', location: 'Miramar, Goa' },
    { name: 'Lalit Ashok, Bangalore', location: 'Kumara Krupa High Grounds, Bangalore' },
  ];

  const groupedHotels = hotelList.reduce((acc, hotel) => {
    const city = hotel.location.split(',')[1].trim();
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(hotel);
    return acc;
  }, {});

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityPress = (city) => {
    setSelectedCity(city);
  };
 
 const sortedCityNames = Object.keys(groupedHotels).sort();

 return (
   <View style={styles.container}>
     {selectedCity ? (
       <FlatList
         data={groupedHotels[selectedCity]}
         keyExtractor={(item) => item.name}
         renderItem={({ item }) => (
           <TouchableOpacity
             style={styles.hotelItem}
             onPress={() => navigation.navigate('HotelBooking', { hotel: item })}
           >
             <Text style={styles.hotelName}>{item.name}</Text>
             <Text style={styles.hotelLocation}>{item.location}</Text>
           </TouchableOpacity>
         )}
       />
     ) : (
       <FlatList
         data={sortedCityNames}
         keyExtractor={(city) => city}
         renderItem={({ item }) => (
           <TouchableOpacity
             style={styles.cityItem}
             onPress={() => handleCityPress(item)}
           >
             <Text style={styles.cityName}>{item}</Text>
           </TouchableOpacity>
         )}
       />
     )}
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 16,
 },
 cityItem: {
   borderBottomWidth: 1,
   borderBottomColor: '#ccc',
   paddingVertical: 8,
 },
 cityName: {
   fontSize: 18,
   fontWeight: 'bold',
 },
 hotelItem: {
   borderBottomWidth: 1,
   borderBottomColor: '#ccc',
   paddingVertical: 8,
 },
 hotelName: {
   fontSize: 18,
   fontWeight: 'bold',
 },
 hotelLocation: {
   fontSize: 16,
   color: '#555',
 },
});

export default HotelsScreen;






















// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// const HotelsScreen = ({ navigation }) => {
//   const hotelList = [
//     { name: 'Taj Mahal Palace, Mumbai', location: 'Colaba, Mumbai' },
//     { name: 'The Oberoi Amarvilas, Agra', location: 'Taj East Gate Road, Agra' },
//     { name: 'The Leela Palace, New Delhi', location: 'Chanakyapuri, New Delhi' },
//     { name: 'ITC Grand Chola, Chennai', location: 'Guindy, Chennai' },
//     { name: 'Umaid Bhawan Palace, Jodhpur', location: 'Jodhpur, Rajasthan' },
//     { name: 'The Imperial, New Delhi', location: 'Connaught Place, New Delhi' },
//     { name: 'The Leela Palace, Bangalore', location: 'Old Airport Road, Bangalore' },
//     { name: 'Trident Nariman Point, Mumbai', location: 'Nariman Point, Mumbai' },
//     { name: 'Wildflower Hall, Shimla', location: 'Chharabra, Shimla' },
//     { name: 'Vivanta by Taj - Malabar, Kochi', location: 'Willingdon Island, Kochi' },
//     { name: 'Radisson Blu Plaza Hotel, Hyderabad', location: 'Banjara Hills, Hyderabad' },
//     { name: 'The Park, Kolkata', location: 'Park Street, Kolkata' },
//     { name: 'Grand Hyatt, Goa', location: 'Bambolim, Goa' },
//     { name: 'Maidens Hotel, New Delhi', location: 'Civil Lines, New Delhi' },
//     { name: 'The Leela Palace, Udaipur', location: 'Udaipur, Rajasthan' },
//     { name: 'JW Marriott Hotel, Pune', location: 'Senapati Bapat Road, Pune' },
//     { name: 'Hotel Samrat, Jaipur', location: 'Jawaharlal Nehru Marg, Jaipur' },
//     { name: 'The Windflower Resort & Spa, Mysuru', location: 'Mysuru, Karnataka' },
//     { name: 'Marriott Resort & Spa, Goa', location: 'Miramar, Goa' },
//     { name: 'Lalit Ashok, Bangalore', location: 'Kumara Krupa High Grounds, Bangalore' },
// ];


//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={hotelList}
//         keyExtractor={(item) => item.name}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.hotelItem}
//             onPress={() => navigation.navigate('HotelBooking', { hotel: item })}
//           >
//             <Text style={styles.hotelName}>{item.name}</Text>
//             <Text style={styles.hotelLocation}>{item.location}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   hotelItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 8,
//   },
//   hotelName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   hotelLocation: {
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default HotelsScreen;













