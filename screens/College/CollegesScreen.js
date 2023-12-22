import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CollegesScreen = ({ navigation }) => {
  const collegeList = [
    { name: 'Indian Institute of Technology, Bombay', location: 'Mumbai, Maharashtra' },
    { name: 'Delhi College of Engineering', location: 'New Delhi, Delhi' },
    { name: 'Madras Christian College, Chennai', location: 'Chennai, Tamil Nadu' },
    { name: 'St. Stephen\'s College, Delhi', location: 'New Delhi, Delhi' },
    { name: 'Xavier\'s College, Mumbai', location: 'Mumbai, Maharashtra' },
    { name: 'Indian Statistical Institute, Kolkata', location: 'Kolkata, West Bengal' },
    { name: 'Narsee Monjee Institute of Management Studies, Mumbai', location: 'Mumbai, Maharashtra' },
    { name: 'Christ University, Bangalore', location: 'Bangalore, Karnataka' },
    { name: 'National Institute of Fashion Technology, New Delhi', location: 'New Delhi, Delhi' },
    { name: 'Indian Institute of Science, Bangalore', location: 'Bangalore, Karnataka' },
    { name: 'Jawaharlal Nehru University, New Delhi', location: 'New Delhi, Delhi' },
    { name: 'BITS Pilani', location: 'Pilani, Rajasthan' },
    { name: 'All India Institute of Medical Sciences, New Delhi', location: 'New Delhi, Delhi' },
    { name: 'Indian Institute of Management, Ahmedabad', location: 'Ahmedabad, Gujarat' },
    { name: 'Hindu College, Delhi', location: 'New Delhi, Delhi' },
    { name: 'Indian School of Business, Hyderabad', location: 'Hyderabad, Telangana' },
    { name: 'Lady Shri Ram College for Women, Delhi', location: 'New Delhi, Delhi' },
    { name: 'Indian Maritime University, Chennai', location: 'Chennai, Tamil Nadu' },
    { name: 'National Institute of Technology, Surathkal', location: 'Surathkal, Karnataka' },
    { name: 'Symbiosis Institute of Business Management, Pune', location: 'Pune, Maharashtra' },
    { name: 'Indian Institute of Management, Bangalore', location: 'Bangalore, Karnataka' },
    { name: 'Anna University, Chennai', location: 'Chennai, Tamil Nadu' },
    { name: 'Birla Institute of Technology and Science, Pilani', location: 'Pilani, Rajasthan' },
    { name: 'Jadavpur University, Kolkata', location: 'Kolkata, West Bengal' },
    { name: 'Lovely Professional University, Jalandhar', location: 'Jalandhar, Punjab' },
    { name: 'NIT Warangal, Warangal', location: 'Warangal, Telangana' },
    { name: 'Amity University, Noida', location: 'Noida, Uttar Pradesh' },
    { name: 'IIT Kanpur, Kanpur', location: 'Kanpur, Uttar Pradesh' },
    { name: 'Osmania University, Hyderabad', location: 'Hyderabad, Telangana' },
    { name: 'Vellore Institute of Technology, Vellore', location: 'Vellore, Tamil Nadu' },
    { name: 'Banaras Hindu University, Varanasi', location: 'Varanasi, Uttar Pradesh' },
    { name: 'Indian School of Mines, Dhanbad', location: 'Dhanbad, Jharkhand' },
    { name: 'National Law School of India University, Bangalore', location: 'Bangalore, Karnataka' },
    { name: 'IIT Roorkee, Roorkee', location: 'Roorkee, Uttarakhand' },
    { name: 'Jamia Millia Islamia, New Delhi', location: 'New Delhi, Delhi' },
    { name: 'Symbiosis International University, Pune', location: 'Pune, Maharashtra' },
    { name: 'IIT Guwahati, Guwahati', location: 'Guwahati, Assam' },
    { name: 'University of Mumbai, Mumbai', location: 'Mumbai, Maharashtra' },
    { name: 'NIT Trichy, Tiruchirappalli', location: 'Tiruchirappalli, Tamil Nadu' },
    { name: 'Gujarat University, Ahmedabad', location: 'Ahmedabad, Gujarat' },
  ];

  
  const groupedColleges = collegeList.reduce((acc, college) => {
    const city = college.location.split(',')[0].trim();
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(college);
    return acc;
  }, {});

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityPress = (city) => {
    setSelectedCity(city);
  };

  const sortedCityNames = Object.keys(groupedColleges).sort();

  return (
    <View style={styles.container}>
      {selectedCity ? (
        <FlatList
          data={groupedColleges[selectedCity]}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.collegeItem}
              onPress={() => navigation.navigate('CollegeEnquiry', { college: item })}
            >
              <Text style={styles.collegeName}>{item.name}</Text>
              <Text style={styles.collegeLocation}>{item.location}</Text>
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
  collegeItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  collegeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  collegeLocation: {
    fontSize: 16,
    color: '#555',
  },
});

export default CollegesScreen;





// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// const CollegesScreen = ({ navigation }) => {
//   const collegeList = [
//     { name: 'Indian Institute of Technology, Bombay', location: 'Mumbai, Maharashtra' },
//     { name: 'Delhi College of Engineering', location: 'New Delhi, Delhi' },
//     { name: 'Madras Christian College, Chennai', location: 'Chennai, Tamil Nadu' },
//     { name: 'St. Stephen\'s College, Delhi', location: 'New Delhi, Delhi' },
//     { name: 'Xavier\'s College, Mumbai', location: 'Mumbai, Maharashtra' },
//     { name: 'Indian Statistical Institute, Kolkata', location: 'Kolkata, West Bengal' },
//     { name: 'Narsee Monjee Institute of Management Studies, Mumbai', location: 'Mumbai, Maharashtra' },
//     { name: 'Christ University, Bangalore', location: 'Bangalore, Karnataka' },
//     { name: 'National Institute of Fashion Technology, New Delhi', location: 'New Delhi, Delhi' },
//     { name: 'Indian Institute of Science, Bangalore', location: 'Bangalore, Karnataka' },
//     { name: 'Jawaharlal Nehru University, New Delhi', location: 'New Delhi, Delhi' },
//     { name: 'BITS Pilani', location: 'Pilani, Rajasthan' },
//     { name: 'All India Institute of Medical Sciences, New Delhi', location: 'New Delhi, Delhi' },
//     { name: 'Indian Institute of Management, Ahmedabad', location: 'Ahmedabad, Gujarat' },
//     { name: 'Hindu College, Delhi', location: 'New Delhi, Delhi' },
//     { name: 'Indian School of Business, Hyderabad', location: 'Hyderabad, Telangana' },
//     { name: 'Lady Shri Ram College for Women, Delhi', location: 'New Delhi, Delhi' },
//     { name: 'Indian Maritime University, Chennai', location: 'Chennai, Tamil Nadu' },
//     { name: 'National Institute of Technology, Surathkal', location: 'Surathkal, Karnataka' },
//     { name: 'Symbiosis Institute of Business Management, Pune', location: 'Pune, Maharashtra' },
// ];


//   return (
//     <View style={styles.container}>

//       <FlatList
//         data={collegeList}
//         keyExtractor={(item) => item.name}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.collegeItem}
//             onPress={() => navigation.navigate('CollegeEnquiry', { college: item })}
//           >
//             <Text style={styles.collegeName}>{item.name}</Text>
//             <Text style={styles.collegeLocation}>{item.location}</Text>
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
//   collegeItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     paddingVertical: 8,
//   },
//   collegeName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   collegeLocation: {
//     fontSize: 16,
//     color: '#555',
//   },
// });

// export default CollegesScreen;