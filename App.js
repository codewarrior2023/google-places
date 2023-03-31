import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Google Places API
      </Text>

      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data = null) => {
        console.log(data.terms[0].value);
      }}
      query={{
        key: 'AIzaSyDabBJ87cOSqFC2NrR2TURl50cDdkPDVK0',
        language: 'en',
        components: 'country:us',
        types: '(cities)'
      }}
      styles={{
        container: {
          flex: 1,
        },
        textInputContainer: {
          backgroundColor: 'grey',
          flexDirection: 'row',
          width: 400,
        },
        textInput: {
          backgroundColor: '#FFFFFF',
          height: 44,
          width: 350,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 15,
          flex: 1,
        },
      }}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
