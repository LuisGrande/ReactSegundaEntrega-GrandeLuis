import Logo from "./Logo";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <header>
            <div className="containerBrand">
                <Logo />

            </div>
            <nav className="containerItemList">
               <ItemListContainer 
                  opcion1 = "home"
                  opcion2 = "productos"
                  
               />

            </nav>
            <div className="containerCart">
                <CartWidget 

                />
            </div>
        </header>
    )
}

export default NavBar;