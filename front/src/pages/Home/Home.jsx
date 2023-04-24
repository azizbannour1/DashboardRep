import Sales from "../../components/dash/Sales/Sales";
import Transaction from "../../components/dash/Transaction/Transaction";
import Visitors from "../../components/dash/Visitors/Visitors";
import Sidebar from "../../components/sidebar/Sidebar";
import Profit from "../../components/dash/Profit/Profit";
import './home.css';
import Expenses from "../../components/dash/Expenses/Expenses";
import Income from "../../components/dash/Income/Income";
import ConversionRate from "../../components/dash/Conversion/ConversionRate";
import Revenue from "../../components/dash/Revenue/Revenue";
import SalesRight from "../../components/dash/SalesRight/SalesRight";
import ExpensesBottom from "../../components/dash/ExpensesBottom/ExpensesBottom";
import ProductList from "../../components/dash/ProductList/ProductList";
import Balance from "../../components/dash/Balance/Balance";


const Home = () => {
  return (
   <>

     <Sidebar/> 
     <div className="box-adjust">
     <Visitors/>
     <Sales/>
     <Transaction/>
     <Profit/>
     <Expenses/>
     </div>
      <Income/>
     <ConversionRate/>
     <Revenue/>
     <SalesRight/>
     <ExpensesBottom/>
     <Balance/>
    </> 
    )
}

export default Home