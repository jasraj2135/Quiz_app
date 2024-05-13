import { View, Text, Pressable, StyleSheet }from 'react-native';

function PrimaryButton({ children }) {
    function pressHandler(){
    console.log('Pressed!');
    }

    return (
    <View style={styles.buttonOuterContainer}>
     <Pressable style={styles.buttonInnerContainer} 
     onPress={pressHandler} 
     android_ripple={{ color: '#c26493' }}>
        <Text style={styles.buttonText}>{children}</Text>
     </Pressable>
    </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#3473ae',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
     
})