import React from 'react';
import {
    Redirect, Route, Switch, useRouteMatch,
  } from 'react-router-dom';

const routeview = ({route}) => {
    console.log(route)
    if (route.routes) {
        return (
            <Route
                key={String(route.path)}
                path={route.path}
                exact={route.exact}
            >
                <route.component>
                <Switch>
                    {route.routes?.map((childRoute) => routeview({ route: childRoute }))}
                    {/* <Route key={String(route.path)} path="*" component={() => <Redirect to="/" />} /> */}
                </Switch>
                </route.component>
            </Route>
        );
    }
    return (
        <Route
            key={String(route.path)}
            path={route.path}
            component={route.component}
            exact={route.exact}
        />
    )
}

export default routeview;
