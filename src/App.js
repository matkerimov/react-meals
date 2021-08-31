import {BrowserRouter, Route} from "react-router-dom"
import AllMeals from "./AllMeals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";
import Ingredients from "./Ingredients";
import Header from "./Header";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Route exact path="/"><AllMeals/></Route>
                <Route path="/meal/:id"><MealDetails/></Route>
                <Route path="/browse/:search"><Browse /></Route>
                <Route path="/ingredients/:name"><Ingredients /></Route>
            </div>
        </BrowserRouter>
    );
};

export default App;