import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import './App.css';

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // State variable to track the dark mode state
  const [isDarkMode, setDarkMode] = useState(false);

  // Event handler for toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Dynamically set the class based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> 
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
