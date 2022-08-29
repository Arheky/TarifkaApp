import React from 'react';
import { FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealCard from '../../components/Cards/MealCard/MealCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Meals = ({route, navigation}) => {
    const {strCategory} = route.params;
    const {data, error, loading} = useFetch(`${Config.API_MEALS}${strCategory}`);

    const renderKey = item => item.idMeal;

    const renderMeals = ({item}) => (
        <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} /> );
    const handleMealSelect = idMeal => {
        navigation.navigate('DetailPage', {idMeal});
    }
    if(loading){
        return <Loading />;
    }
    if(error) {
        return <Error />;
    }
    return <FlatList data={data.meals} keyExtractor={renderKey} renderItem={renderMeals} />;
}

export default Meals;