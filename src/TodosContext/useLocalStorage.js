import React from 'react';

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
    
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }
        else{
          parsedItem = JSON.parse(localStorage.getItem(itemName));
          setItem(parsedItem);
        }
    
        setLoading(false);
      } 
      catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
  },[itemName, initialValue]);

  
  const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos)
  } 

  return { 
    item, 
    saveItem, 
    loading, 
    error 
  };
}

export { useLocalStorage };
  