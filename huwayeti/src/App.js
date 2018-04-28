import { History } from 'history';
import * as React from 'react';
// import {React,Component} from 'react';
import { Provider, Store } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'semantic-ui-css/semantic.min.css';
import { Container, Icon, Menu, Segment } from 'semantic-ui-react';
import {View} from './components/View';
import {store} from './index.js';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <ConnectedRouter>
        <Container style={{height: '100%'}} fluid={true}>
          <Menu
            size="huge"
            visible="true"
            inverted
            fixed="top"
          >
            <Link to="/">
              <Menu.Item name="home"><Icon name="home"/>Home</Menu.Item>
            </Link>
          </Menu>
          <Segment basic>
            <div style={{marginTop: '50px'}}>
              <Route exact path="/view" component={View}/>
            </div>
          </Segment>
        </Container>
      </ConnectedRouter>
    </Provider>
    );
  }
}

export default App;
