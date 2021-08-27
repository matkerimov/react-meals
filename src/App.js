import {BrowserRouter, Route} from "react-router-dom"
import AllMeals from "./AllMeals";
import MealDetails from "./MealDetails";
import Browse from "./Browse";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Route exact path="/"><AllMeals/></Route>
                <Route path="/meal/:id"><MealDetails/></Route>
                <Route path="/meal/:id/browse/:name"><Browse /></Route>
            </div>
        </BrowserRouter>
    );
};

export default App;