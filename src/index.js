import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/animate.min.css'
import './assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0'
import './assets/css/demo.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import AdminLayout from 'layouts/Admin.js'
import AdminAuth from 'layouts/AdminAuth'
import Splash from 'views/auth/splash'
import Login from 'views/auth/login'
import Regist from 'views/auth/regist'
import ForgotPass from 'views/auth/forgot-pass'

const root = ReactDOM.createRoot(document.getElementById('root'))
var token = 'assdas'
console.log(token)
root.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path={'/'} component={Splash}/> */}
      {/* <Route path={'/auth/login'} component={Login} />
      <Route path={'/auth/registration'} component={Regist} />
      <Route path={'/auth/forgot-password'} component={ForgotPass} /> */}
      <Route
        path="/admin"
        render={(props) => <AdminLayout {...props} />}
        // render={(props) =>
        //   token ? <AdminLayout {...props} /> : <AdminAuth {...props} />
        // }
      />
      <Redirect from="/" to="/admin/Home" />
    </Switch>
  </BrowserRouter>,
)
