import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import Data from './data';

import NavBar from './containers/navbar';
import Timeline from './containers/timeline';
import Products from './containers/products';
import Services from './containers/services';
import UpComing from './containers/upComing';
import AlmostDone from './containers/almostDone';
import OnGoing from './containers/onGoing';
import SidebarList from './containers/sidebar';
import RightBarView from './containers/rightbar';
import FormPage from './containers/form';
import LoginForm from './containers/login';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <NavBar/>
                    <div>
                        <div className='row' style={{
                            padding: 20
                        }}>
                            <h2>...</h2>
                        </div>
                        <Divider/>
                        <div className='row' style={{
                            paddingTop: 20
                        }}>
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15">
                                <SidebarList menu={Data.menus} mine={Data.myTimeline}/>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
                                <Route exact path='/' component={Timeline}/>
                                <Route path='/upcoming' component={UpComing}/>
                                <Route path='/ongoing' component={OnGoing}/>
                                <Route path='/almost' component={AlmostDone}/>
                                <Route path='/product' component={Products}/>
                                <Route path='/service' component={Services}/>
                                <Route path='/form' component={FormPage}/>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md m-b-15"></div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
const DealQuery = gql `
  query DealQuery {
    allDeals{
    id
    dealName
    description
    business{
      id
      name
      location
    }
    startAt
    endAt
    recurring
    recurringDay
  }
  }
`

const AppWithData = graphql(DealQuery)(App)

export default AppWithData;
