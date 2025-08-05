import { SafeAreaView, ScrollView, Text, View, TextInput, StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [food, setFood] = useState('');
  const [colour, setColour] = useState('');
  const [destination, setDestination] = useState('');
  const [message, setMessage] = useState('Welcome to my app');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Image source={require('./assets/profile.png')} style={styles.image} />


        <Text style={styles.header}>Welcome to my profile</Text>
        <TextInput
  style={styles.input}
  placeholder="Enter your name"
  value={name}
  onChangeText={setName}
/>

<TextInput style={styles.input}
  placeholder="Enter your hobby"
  value={hobby}
  onChangeText={setHobby}
/>
<TextInput style={styles.input}
  placeholder="Enter your favourite food"
  value={food}
  onChangeText={setFood}
/>
<TextInput style={styles.input}
  placeholder="Enter your favourite colour"
  value={colour}
  onChangeText={setColour}
/>
<TextInput style={styles.input}
  placeholder="Enter your dream destination"
  value={destination}
  onChangeText={setDestination}
/>


<Button title="Show Greeting" onPress={() => setMessage(`Hello ${name}, enjoy ${hobby}, loves eating ${food}, your favourite colour is ${colour} and your dream destination is ${destination}`)} />
<Text style={{ textAlign: 'center', marginTop: 10 }}>{message}</Text>


<View style={styles.card}>
  <Text style={styles.cardText}>Hello, {name}</Text>
  <Text style={styles.cardText}>Your hobby is {hobby}</Text>
  <Text style={styles.cardText}>Your favourite food is {food}</Text>
  <Text style={styles.cardText}>Your favourite colour is {colour}</Text>
  <Text style={styles.cardText}>Your dream destination is {destination}</Text>

</View>


<Image source={{ uri: 'https://picsum.photos/200' }} style={styles.onlineImage} />


<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>
<Text style={styles.extra}>More Info</Text>




      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 20
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  card: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    borderRadius: 75,
    marginBottom: 20
  },
  onlineImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10
  },
  extra: {
    fontSize: 16,
    marginVertical: 5
  }
});

