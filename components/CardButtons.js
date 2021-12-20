import { useContext } from "react";
import { countItem } from "../helpers/helpers";
import { CartStoreContext } from "../utils/CartStoreProvider";
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineMinus , AiOutlinePlus } from 'react-icons/ai';
import styles from '../styles/CardButtons.module.css'
const CardButtons = ({state,counter,dispatch}) => {
    

    return (
        <>
            {
                countItem(state,counter.id)>1 ? <AiOutlineMinus className={styles.changeItemsValue} onClick={()=>dispatch({type:'DECREASE_ITEM',payload:counter})}/> : <FiTrash2  className={styles.changeItemsValue} onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:counter})} />
            }
            

            <span>{countItem(state,counter.id)}</span>
            <AiOutlinePlus className={styles.changeItemsValue} onClick={()=>dispatch({type:'INCREASE_ITEM',payload:counter})}/>
        </>
    );
}

export default CardButtons;