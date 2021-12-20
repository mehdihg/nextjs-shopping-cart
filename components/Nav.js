import Link from 'next/link';
import { useContext } from 'react';
import styles from '../styles/Nav.module.css'
import { ThemeStoreContext } from '../utils/ThemeStoreProvider';
import { BsMoon , BsMoonFill } from 'react-icons/bs';
import { setCookies } from 'cookies-next';
const Nav = () => {
const {state,dispatch}=useContext(ThemeStoreContext)
  
const clickk=()=>{
    if(state.DarkMode){
        dispatch({DarkMode:!state.DarkMode,type:'DARK_MODE_OFF'})

        


    }else{
        dispatch({DarkMode:!state.DarkMode,type:'DARK_MODE_ON'})

       

    }



        

    //dispatch(state.DarkMode=!state.DarkMode)

}



    
    

    return (
        <div className={styles.NavContainer}>
            <div className={styles.Navbar}>
                <div className={styles.Logo}>
                <Link href='/' passHref>
                <h4>Logo</h4>
                </Link>
                </div>

            <ul className={styles.menu}>
            <li>
                <Link href='/'>
                    Home
                </Link>
                </li>
            <li>
                <Link href='/cart'>
                    Cart
                </Link>
                </li>

                <li>                
                    <button className={styles.themeButton} type='button' onClick={clickk}>{state.DarkMode ? <BsMoonFill/>:<BsMoon/>}</button>
                        
                </li>

            </ul>
            
            </div>
        </div>
    );
}

export default Nav;