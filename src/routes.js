import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ListOfBooks from './pages/List-of-books';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ListOfBooks} />
            </Switch>
        </BrowserRouter>
    );
}