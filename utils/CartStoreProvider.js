import React, { createContext, useReducer } from 'react';
import { getCookie } from 'cookies-next';





export const CartStoreContext=createContext()
const initialState={
    selectItems:[],
    totalPrice:0,
    checkout:false,
    itemsCounter:0
}
const calcItems=(items)=>{
    const itemsCounter=items.reduce((acc,current)=>acc+current.quantity,0)
    const totalPrice=items.reduce((acc,current)=>acc+current.quantity*current.price,0)
    return {itemsCounter,totalPrice}
}
const reducer =(state,action)=>{
switch(action.type){
    case 'ADD_TO_CART':
        if(!state.selectItems.find(item=>item.id === action.payload.id)){
            state.selectItems.push({
                ...action.payload,
                quantity:1
                

            })
        }
        return{
            ...state,
            selectItems:[...state.selectItems],
            ...calcItems(state.selectItems),
            checkout:false
        }
        case 'REMOVE_FROM_CART':
            const filtering=state.selectItems.filter(item=>item.id!==action.payload.id)
            return{
                ...state,
                selectItems:[...filtering],
                ...calcItems(filtering)
            }
        
        case 'INCREASE_ITEM':
            const findingIndex=state.selectItems.findIndex(item=>item.id === action.payload.id)
                state.selectItems[findingIndex].quantity++
                return{
                    ...state,
                    ...calcItems(state.selectItems)
                }
                case 'DECREASE_ITEM':
                    const findIndexs=state.selectItems.findIndex(item=>item.id === action.payload.id)
                        state.selectItems[findIndexs].quantity--
                        return{
                            ...state,
                            ...calcItems(state.selectItems)
                        }
                case 'CHECKOUT':
                    return{
                        selectItems:[],
                        totalPrice:0,
                        checkout:true,
                        itemsCounter:0
                    }
                    default:
                        return state
}
}

const CartStoreProvider = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)


    const value={state,dispatch}

    return (
        <CartStoreContext.Provider value={value}>
            {children}
        </CartStoreContext.Provider>
    );
};

export default CartStoreProvider;