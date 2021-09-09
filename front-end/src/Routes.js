import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserInfoPage } from './pages/UserInfoPage';
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import PrivateRoute from './auth/PrivateRoute'

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route exact path='/login'>
                    <LogInPage/>
                </Route>
                <Route exact path='/signup'>
                    <SignUpPage/>
                </Route>
            </Switch>
        </Router>
    );
}