import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, Button, View } from 'react-native';
import { SafeAreaView,
  Image,
  TouchableOpacity, } from 'react-native'

import SearchBar from "react-native-dynamic-search-bar";


// used resources:
// https://reactnavigation.org/docs/navigating/ --> basic switching pages
// https://github.com/expo/examples --> basic structure of app

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Look at products below!!</Text>
      
      <SearchBar
        placeholder="Search here"
        onPress={() => alert("onPress")}
        onChangeText={(text) => console.log(text)}
      />
      <Button
        title="Browse Products"
        onPress={() => navigation.navigate('BrowseProducts')}
      />
    </View>
  );
}

function BrowseProductsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>View Products Below!</Text>
      <TouchableOpacity
          style={styles.viewMorePage}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://m.media-amazon.com/images/I/81GkukapflL._SL1500_.jpg',
            }}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>Example Product</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.browsePage}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://m.media-amazon.com/images/I/81GkukapflL._SL1500_.jpg',
            }}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Example Product</Text>
        </TouchableOpacity>

      <Button
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BrowseProducts" component={BrowseProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  viewMorePage: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: '20%',
    width: '40%',
    borderRadius: 5,
    margin: 5,
  },
  browsePage: {
    flexDirection: 'row',
    alignItems: 'left',
    backgroundColor: '#947204',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: '8%',
    width: '85%',
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: '75%',
    width: '85%',
    resizeMode: 'contain',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 40,
    height: 1,
    padding: 10
  },
});

// export default App;


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Text>new line</Text>
//       <Button
//         title="Switch Page"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
