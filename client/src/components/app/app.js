import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import { store } from 'src/store';
import Header from 'components/header/header';
import Home from 'components/home/home';
import User from 'components/users';
import Role from 'components/roles';
import Footer from 'components/footer/footer';
import ErrorBoundary from 'components/errorboundary/errorboundary';
import './app.scss';
const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route path="/role" exact component={Role} />
                        <Route path="/user" exact  component={User} />
                        <Route path="/" component={Home} />
                        <Redirect to="/" />
                    </Switch>
                    <Footer> </Footer>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary>
    );
};
export default App;