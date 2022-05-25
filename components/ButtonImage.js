import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export function ButtonImage() {
    return ( 
    <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
        <Text style={styles.text}>Hello Expo!</Text>
        <Image 
            style={styles.image}
            source={require("./../assets/favicon.png")}
        />
        <Button
            title="Press me"
            color="#9ef222"
            onPress={() => alert('Button with adjusted color pressed')}
        />
        </View>
    </ScrollView>
     );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: '26px',
    },
    image: {
      height: '40px',
      width: '40px',
    },
});

export default ButtonImage;