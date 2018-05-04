import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
// import Pessoa from '../pessoas/pessoa'
import ErrorBoundary from '../common/form/errorBoundary'

export default props => (
    <div className='content-wrapper'>
        <ErrorBoundary>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                {/* <Route path='/pessoa' component={Pessoa} /> */}
                <Redirect from='*' to='/' />
            </Switch>
        </ErrorBoundary>
    </div>
)