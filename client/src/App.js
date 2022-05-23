import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostList} />
          <Route exact path="/posts/:id" component={PostDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;