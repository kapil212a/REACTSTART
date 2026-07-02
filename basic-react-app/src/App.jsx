import './App.css'
//import Product from './Product.jsx';
//import Title from "./Title.jsx";
//import Product from "./Product.jsx";
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';
//import {Title} from "./Title.jsx";

function App() {
  return (
    <>
      <MsgBox name = "Kapil" textcolor ="blue"/>
      <MsgBox name = "Aman" textcolor = "yellow"/>
      <ProductTab/>
      
    </>
  );
}

export default App;
