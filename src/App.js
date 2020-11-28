import React from 'react';
import Search from './pages/Search';
import Home from './pages/Home';
import Layout from './components/Layout';
import RepositoriesProvider from './context/repositories';
import UsersProvider from './context/users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <RepositoriesProvider>
        <UsersProvider>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/search">
                  <Search />
                </Route>
              </Switch>
            </Layout>
          </Router>
        </UsersProvider>
      </RepositoriesProvider>
    </div>
  );
}

export default App;
