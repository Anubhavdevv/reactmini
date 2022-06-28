import React, { useState } from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
import './style.css';
//For modifiying Category and update it live 
const uniqueData = [
    ...new Set(  //... is know s as spread operator to fetch only pure data only no object
        Menu.map(
            (curElem) => {
                return curElem.category;
            })
    ),
    "All",
]; //To create array use this []

const Resturant = () => {
    //To Get Data we need useState() Hooks to manage states of the data in the application
    const [menuData, setMenuData] = useState(Menu); //Retrun array of 2 element(stateVariable, UpdatedFunction(set))
    const [menuList, setMenuList] = useState(uniqueData);
    const filterItem = (category) => {
        //To consider all data in frame building logic
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />  {/*Props passed*/}
            {/*Parent to child approach and top to bottom hierarchy it follows*/}
        </>
    );
};

export default Resturant;