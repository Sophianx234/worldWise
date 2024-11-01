import { createContext, useContext, useReducer, useState } from "react";

const AuthContext = createContext();
const user = {
    name : 'Damian X',
    email: 'boruto@gmail.com',
    password: 'xyz@223344',
    avatar: "https://i.pravatar.cc/100?u=zz",
}
const initialState = {
    login: false,
    logout: false,
    isAuthenticated: false
}

function reducer(state, action){

    switch(action.type){
        case 'login':
            return {...state, login: true, logout: false, isAuthenticated: true}
        case 'logout':
            return {...state, login: false, logout: true, isAuthenticated: false}
    }

}


function AuthProvider({children}){
const [{login,logout, isAuthenticated}, dispatch] = useReducer(reducer, initialState)

return(

    
    <AuthContext.Provider value={{
        isAuthenticated,
        login,
        logout,
        user,
        dispatch
    }} >
        {children}

    </AuthContext.Provider>
    )

}


function useAuth(){
    const context = useContext(AuthContext);
    if(context === undefined ) throw new Error ('context was defined outside of provider')
        return context
}

export {useAuth, AuthProvider}