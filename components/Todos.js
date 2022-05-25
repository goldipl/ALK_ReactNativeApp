import { Text, StyleSheet } from 'react-native';

export function Todos() {
    return ( 
        <Text style={styles.text}>Footer</Text>
     );
}

const styles = StyleSheet.create({
    text: {
      fontSize: '40px',
      color: 'red',
      textAlign: 'center',
    },
});

export default Todos;