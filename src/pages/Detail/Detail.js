import React from 'react';
import { FlatList, Linking } from "react-native";
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
    const {idMeal} = route.params;
    const {data, loading, error} = useFetch(`${Config.API_DETAIL}${idMeal}`);
    const renderDetail = ({item}) => (
        <DetailCard detail={item} onSelect={() => Linking.openURL(item.strYoutube)} /> );

    const renderKey = item => item.idMeal;

    if(loading) {
        return <Loading />;
    }
    if(error) {
        return <Error />;
    }

    return <FlatList data={data.meals} keyExtractor={renderKey} renderItem={renderDetail} />;
}

export default Detail;

