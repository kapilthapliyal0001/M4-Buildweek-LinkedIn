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
import { Component } from "react";

class App extends Component {
  state = { user: "", isLoading: "" };
  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM4YWVmOWEzYTNkNzAwMTUxY2IwNTQiLCJpYXQiOjE2MjM3NjQ3MjksImV4cCI6MTYyNDk3NDMyOX0.Y_86hS0H_3nodj7yLyRmp7q1ATdiHj_4FURWkrzM82I";

      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("This is sidebar profile data", data);
        this.setState({ user: data, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="App">
        <Router>
          <MyNav />
          <Switch>
            <Route exact path="/network" component={NetworkFeed} />
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/profile/:id" component={ProfilePage} />
          </Switch>
          <MyFooter />
        </Router>
      </div>
    );
  }
}

export default App;

// Kapil : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2Q4YjI5MTkzMDAwMTU2MGFiYTUiLCJpYXQiOjE2MjM2NzAxNTUsImV4cCI6MTYyNDg3OTc1NX0.Lid0KernjdrJ6T9JK4Y_EAbb2bH3Jd92w-gXUFfOsCA
// Hedri : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3M2JmMTI5MTkzMDAwMTU2MGFiYTMiLCJpYXQiOjE2MjM2Njk3NDUsImV4cCI6MTYyNDg3OTM0NX0.Lk5Z-l56SBkY6YCIvoiHpVg_0J0rEZHaO4PzAuep3bo
// Kristian:
// Emilian:
