import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// main page is not useed right now;
import ProfilePage from "./components/Profile/ProfilePage.jsx";
import MyNav from "./components/MyNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NetworkFeed from "./components/Network/NetworkFeed";

function App() {
  // let { id } = useParams();
  const myCallback = (dataFromChild) => {
    this.setState({ listDataFromChild: dataFromChild });
  };

  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/network" component={NetworkFeed} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/home">
            <HomePage test={myCallback} />
          </Route>
          <Route exact path="/profile/:id" component={ProfilePage} />
        </Switch>
        <MyFooter />
      </Router>
    </div>
  );
}

export default App;

// Kapil : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2Q4YjI5MTkzMDAwMTU2MGFiYTUiLCJpYXQiOjE2MjM2NzAxNTUsImV4cCI6MTYyNDg3OTc1NX0.Lid0KernjdrJ6T9JK4Y_EAbb2bH3Jd92w-gXUFfOsCA
// Hedri : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo
// Kristian:
// Emilian:
