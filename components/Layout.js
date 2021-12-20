import { useContext } from "react";
import { ThemeStoreContext } from "../utils/ThemeStoreProvider";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({children}) => {
    const {state}=useContext(ThemeStoreContext)

    return (
        <div className={state.DarkMode ? 'themeDark':'themeLight'}>
        <Meta/>
        <Nav/>
        <div className='main'>
            {children}

        </div>
        <footer  className={state.DarkMode ? 'footerDark':'footerLight'}>
           <p>Developed By Mehdi Haghani</p>
        </footer>
        </div>
    );
}

export default Layout;