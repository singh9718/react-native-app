import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SchoolsScreen = ({ navigation }) => {
  const dummySchools = [
    { id: 1, name: 'Delhi Public School, Mumbai' },
    { id: 2, name: 'St. Xavier\'s High School, Kolkata' },
    { id: 3, name: 'Rajasthan Public School, Jaipur' },
    { id: 4, name: 'Greenwood School, Bangalore' },
    { id: 5, name: 'Heritage International School, Hyderabad' },
    { id: 6, name: 'Gurukul Academy, Chennai' },
    { id: 7, name: 'Modern Public School, Delhi' },
    { id: 8, name: 'Bharatiya Vidya Bhavan, Pune' },
    { id: 9, name: 'Mount Carmel School, Lucknow' },
    { id: 10, name: 'Vidyalaya Public School, Ahmedabad' },
    { id: 11, name: 'Holy Cross School, Kochi' },
    { id: 12, name: 'City Montessori School, Lucknow' },
    { id: 13, name: 'Sacred Heart Convent School, Chandigarh' },
    { id: 14, name: 'Sarvodaya Vidyalaya, Delhi' },
    { id: 15, name: 'Jawahar Navodaya Vidyalaya, Bhopal' },
    { id: 16, name: 'Arya Vidya Mandir, Mumbai' },
    { id: 17, name: 'Kendriya Vidyalaya, Chennai' },
    { id: 18, name: 'Bal Bharati Public School, Delhi' },
    { id: 19, name: 'Springfield School, Kolkata' },
    { id: 20, name: 'DPS International, Gurgaon' },
  ];

  const groupedSchools = dummySchools.reduce((acc, school) => {
    const city = school.name.split(',')[1].trim();
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(school);
    return acc;
  }, {});

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityPress = (city) => {
    setSelectedCity(city);
  };


  const sortedCityNames = Object.keys(groupedSchools).sort();

  return (
    <View style={styles.container}>
      {selectedCity ? (
        <FlatList
          data={groupedSchools[selectedCity]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.schoolItem}
              onPress={() => navigation.navigate('SchoolDetails', { school: item })}
            >
              <Text style={styles.schoolName}>{item.name}</Text>
              
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
  schoolItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  schoolName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SchoolsScreen;


































// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// const SchoolsScreen = ({ navigation }) => {
//   const dummySchools = [
//     { id: 1, name: 'Delhi Public School, Mumbai' },
//     { id: 2, name: 'St. Xavier\'s High School, Kolkata' },
//     { id: 3, name: 'Rajasthan Public School, Jaipur' },
//     { id: 4, name: 'Greenwood School, Bangalore' },
//     { id: 5, name: 'Heritage International School, Hyderabad' },
//     { id: 6, name: 'Gurukul Academy, Chennai' },
//     { id: 7, name: 'Modern Public School, Delhi' },
//     { id: 8, name: 'Bharatiya Vidya Bhavan, Pune' },
//     { id: 9, name: 'Mount Carmel School, Lucknow' },
//     { id: 10, name: 'Vidyalaya Public School, Ahmedabad' },
//     { id: 11, name: 'Holy Cross School, Kochi' },
//     { id: 12, name: 'City Montessori School, Lucknow' },
//     { id: 13, name: 'Sacred Heart Convent School, Chandigarh' },
//     { id: 14, name: 'Sarvodaya Vidyalaya, Delhi' },
//     { id: 15, name: 'Jawahar Navodaya Vidyalaya, Bhopal' },
//     { id: 16, name: 'Arya Vidya Mandir, Mumbai' },
//     { id: 17, name: 'Kendriya Vidyalaya, Chennai' },
//     { id: 18, name: 'Bal Bharati Public School, Delhi' },
//     { id: 19, name: 'Springfield School, Kolkata' },
//     { id: 20, name: 'DPS International, Gurgaon' },
//   ];

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={dummySchools}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.schoolItem}
//             onPress={() => navigation.navigate('SchoolDetails', { school: item })}
//           >
//             <Text style={styles.schoolName}>{item.name}</Text>
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
//   schoolItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 8,
//   },
//   schoolName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default SchoolsScreen;