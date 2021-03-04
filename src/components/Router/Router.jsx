import { Switch, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { Profile } from '../Profile';
import { NotFound } from '../NotFound';


const Router = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Layout}/>
            <Route exact path="/chat/:id" component={Layout}/>
            <Route exact path="/profile" component={Profile}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export { Router };