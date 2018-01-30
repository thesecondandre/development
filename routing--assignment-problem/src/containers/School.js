import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Courses from './Courses/Courses';
import Users from './Users/Users';
import './School.css';

const School = () => {
    return (
        <div className='School'>
            <header>
                <nav>
                    <ul>
                        <li><NavLink to='/courses' exact>Cursos</NavLink></li>
                        <li><NavLink to={{
                            pathname: '/users'
                            // hash: '#submit',
                            // search: '?quick-submit=true'
                        }}>Usuários</NavLink></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                {/* <Route path='/courses/:id' component={Courses} /> */}
                <Route path='/courses' component={Courses} />
                <Redirect from='/all-courses' to="/courses" />
                <Route exact path='/users' component={Users} />
                <Route render={() => <h1>Not found</h1>} />
            </Switch>
        </div>
    );
};

export default School;