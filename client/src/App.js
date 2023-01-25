import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Axios from "axios";
import UserContext from './components/context/usercontext'
import React from 'react';

class App extends React.Component {
    state = {
        user: null,
    }

    componentDidMount() {
        Axios.get("http://localhost:3001/login")
            .then(response => {
                if (response.data.loggedIn) {
                    this.setState({
                        user: response.data.user
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Router>
                <UserContext.Provider value={this.state.user}>
                    <Routes>
                        <Route exact path='/' exact element={<Home />} />
                    </Routes>
                </UserContext.Provider>
            </Router>
        );
    }
}
export default App;
