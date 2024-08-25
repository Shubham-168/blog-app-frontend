import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={PostList} />
                        <Route path="/posts/:id" component={PostDetail} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

