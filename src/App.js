import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Quiz from './conteiners/Quiz/Quiz'
import QuizList from './conteiners/QuizList/QuizList'
import Auth from './conteiners/Auth/Auth'
import QuizCreator from './conteiners/QuizCreator/QuizCreator'
import {connect} from 'react-redux'
import Logout from './components/Logout/Logout'
import {autoLogin} from "./store/actions/auth";

class App extends Component {

  componentDidMount() {
    this.props.authLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/" />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
            <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />

          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <Layout>
        { routes }
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))
