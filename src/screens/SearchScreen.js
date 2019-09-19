import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import SearchBarComponent from '../components/SearchBarComponent';
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [restaurants, setRestaurants] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit:50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setRestaurants(response.data.businesses);
            console.log(response.data);
        } catch (err) {
            console.log(err);
            setErrorMessage('Something went wrong');
        }
        
    };

    return (
        <View>
            <SearchBarComponent  
                term = {term} 
                onTermChange= {setTerm}
                onTermSubmit= {() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {restaurants.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SearchScreen;