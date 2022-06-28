import React, { useEffect, useState } from 'react'
import './style.css'

//Getting the Local Data Back so that it can be store in browser
const getLocalData = () => {
    const localList = localStorage.getItem("localStoreList");
    if(localList){
        return JSON.parse(localList); //We are getting these in string to convert it in the array bcuz we will directly store it in the useState(getLocalData())
        //For that purpose we use JSON method to convert string into array
    }else {
        return []; //Empty Array
    }

}
const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalData()); //Empty Array Created
    const [edit, setEdit] = useState('');
    const [toggle, setToggle] = useState(false);
    //Add the items function
    const addItem = () => {
        if (!inputData)
            alert("Please fill the data 🙏")

        //For Edit icon so that if we click on edit it will not create another todo it will edit that only and also change icon and value in it    
        else if(inputData && toggle){
            setItems(
                items.map((curElem)=>{
                    if(curElem.id === edit){
                        return{...curElem, name: inputData};
                    }
                    return curElem
                })
            );
            setInputData([])
            setEdit(null);
            setToggle(false);
        }    
        else{
            //To Get the id of elements
            const NewInputData = {
                id:new Date().getTime().toString(), //KeyValue Pair Format
                name: inputData

            }
            setItems([...items, NewInputData]) //(...)Keep the Previous state data
            setInputData(""); //Reflect the data that is changed 
        }    
    };

    //Edit the items
    const editItem = (index) => {
        const item_edit = items.find((curElem) => {
            return curElem.id === index;
        });
        setInputData(item_edit.name)
        setEdit(index);
        setToggle(true);
    };
    //Delete Items
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElem)=>{
            return curElem.id !== index; //Delte that which id got matched in the loop and it will return in the form of the array
        });
        setItems(updatedItems); //Any stuff that w need to return in array we use this function
    };

    //Remove all the element 
    const removeAll = () => {
       setItems([]); //Empty Array as it will empty the SetItems so it will show nothing 
    }

    //Adding LocalStorgae 

    useEffect(()=>{
        localStorage.setItem("localStoreList", JSON.stringify(items)) //KeyValue pair work only in strings


    }, [items]) //Whenever items value got changes then only useEffect should work 
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your Todo Here 🙌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className="form-control" value={inputData} onChange={(event) =>
                            setInputData(event.target.value)} />
                        {toggle ? (<i className="far fa-edit add-btn" onClick={addItem}></i>):(<i className="fa fa-plus add-btn" onClick={addItem}></i>)}    
                    </div>

                    {/*Showing the Items*/}

                    <div className="showItems">
                        {
                            items.map((curElem) => {
                                return (
                                    <div className="eachItem" key={curElem.id}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" 
                                              onClick={()=> editItem(curElem.id)}>

                                            </i>
                                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i> {/*We use fat arrow function because if we don't use it it will go on the loop*/}
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;