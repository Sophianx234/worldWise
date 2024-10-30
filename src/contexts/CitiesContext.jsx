import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext()

const initialState = {
    cities: [],
    isLoading: false,
    countries: [],
    error: '',
    currCity: null

}
/* 
[...new Set(cities.map(city => city.country).filter(city=>city !==undefined))]
*/

function reducer(state, action){
    switch(action.type){
        case 'cities/loaded':
            return {...state, cities: action.payload, isloading: false}
        case 'loading': 
        return {...state, isloading: action.payload}
        case 'error':
            return {...state, error: action.payload}
        case 'countries/loaded':
            return {...state, isloading: false, countries: [...new Set(state.cities.map(city => city.country).filter(city=>city !==undefined))]}
        case  'currCity/loaded':
            return {...state, currCity: action.payload}
        case 'deleteCity':
            return {...state, cities: state.cities.filter(city=>city.cityName !== action.payload)}
        case 'cities/added':
            return {...state, cities: [...state.cities, action.payload], isloading: false}
        
    }
}


function CitiesProvider({children}){
    const [{cities,isloading,countries,error,currCity},dispatch] = useReducer(reducer,initialState);
    console.log(cities)
    useEffect(function (){
        async function fetchCities(){
            try{
                dispatch({type: 'loading', payload: true})
                const res = await fetch('http://worldwise-api-qbqq.onrender.com/api/v1/cities')
                if(!res.ok) throw new Error('Could not fetch from cities server')
                const data = await res.json();
            console.log('cities', data.Cities.cities)
                dispatch({type: 'cities/loaded', payload: data.Cities.cities})
                

            }catch(err){
                dispatch({type:'error', payload: err.message})


            }finally{
                dispatch({type:'loading', payload: false})

            }
        }
        fetchCities();
    },[])

    return (

     <CitiesContext.Provider
     value={{
        cities,
        countries,
        isloading,
        error,
        dispatch,
        currCity
     }}
     >
        {children}
    </CitiesContext.Provider>
    )

}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error ('context was called outside of provider')
    return context;
}

export {useCities, CitiesProvider}