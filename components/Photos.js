import { useQuery } from "react-query";
import { Text, View, StyleSheet, Image } from 'react-native';

async function fetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await response.json();
}

export function Photos() {
    const {data, isLoading, isError} = useQuery('photos', fetchPhotos, {placeholderData: []});

    return <View style={styles.container}>
        <Text>Photos</Text>
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error</Text>}
        {data.map(photos => <Image 
            key={photos.id} 
            style={{ width: 150, height: 150 }}
            source={{ uri: photos.thumbnailUrl}}
        />)}
    </View>
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Photos;