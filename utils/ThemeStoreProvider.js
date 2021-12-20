import { getCookie } from 'cookies-next';
import React, { createContext, useReducer, useState } from 'react'


export const ThemeStoreContext=createContext()


const initialState={
    
    DarkMode:false
}
const reducer=(state,action)=>{
switch(action.type){
    case 'DARK_MODE_ON':
    return {...state, DarkMode:true};
    case 'DARK_MODE_OFF':
        return {...state,DarkMode:false};
    default:
    return state
}
}

export const  ThemeStore=({children})=> {
    const [state,dispatch]=useReducer(reducer,initialState)
    const value={state,dispatch}
    return (
        <ThemeStoreContext.Provider value={value}>
          {children}  
        </ThemeStoreContext.Provider>
    )
}
