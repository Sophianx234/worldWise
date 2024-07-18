import { createContext, useContext, useEffect, useReducer } from "react";

const CitiesContext = createContext()

const initialState = {
    cities: [],
    isLoading: false,
    countries: [],
    error: ''

}

function reducer(state, action){
    switch(action.type){
        case 'cities/loaded':
            return {...state, cities: action.payload, isloading: false}
        case 'loading': 
        return {...state, isloading: action.payload}
        case 'error':
            return {...state, error: action.payload}
    }
}


function CitiesProvider({children}){
    const [{cities,isloading,countries,error},dispatch] = useReducer(reducer,initialState);
    console.log(cities)
    useEffect(function (){
        async function fetchCities(){
            try{
                dispatch({type: 'loading', payload: true})
                const res = await fetch('http://localhost:8000/cities')
                if(!res.ok) throw new Error('Could not fetch from cities server')
                const data = await res.json();
                dispatch({type: 'cities/loaded', payload: data})
                


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
        error
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