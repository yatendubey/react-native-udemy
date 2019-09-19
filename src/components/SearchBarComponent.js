import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBarComponent = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather
                name="search" 
                style={styles.iconStyle}/>

            <TextInput style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect= {false}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: "row", 
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    }
});

export default SearchBarComponent;