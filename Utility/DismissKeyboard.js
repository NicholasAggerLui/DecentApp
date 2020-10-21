import { View, TextInput, StyleSheet, Keyboard,  TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = () => (
    <TouchableWithoutFeedback 
    onPress={() => Keyboard.dismiss()}>
    </TouchableWithoutFeedback>
);

export default DismissKeyboard
