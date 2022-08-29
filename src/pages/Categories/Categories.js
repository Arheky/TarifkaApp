import React  from "react";
import { FlatList } from "react-native";
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import CategorieCard from "../../components/Cards/CategorieCard/CategorieCard";
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Categories = ({navigation}) => {
    const {data, loading, error} = useFetch(`${Config.API_CATEGORIES}`);
    const renderCategories = ({item}) => (
        <CategorieCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />);
    
    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPage', {strCategory});
    }

    if(loading) {
        return <Loading />;
    }
    if(error) {
        return <Error />;
    }

    return <FlatList data={data.categories} keyExtractor={item => item.idCategory} renderItem={renderCategories} />;

}

export default Categories;