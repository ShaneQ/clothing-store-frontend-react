import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home"
import Register from "./pages/Register";

function App() {
  return (
      <Switch>
          <Route path='/' exact>
              <Home/>
          </Route>
          <Route path='/register' exact>
              <Register/>
          </Route>
      </Switch>
  );
}

export default App;
