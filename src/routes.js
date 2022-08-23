import Dashboard from 'views/Dashboard.js'
import UserProfile from 'views/UserProfile.js'
import TableList from 'views/TableList.js'
import Typography from 'views/Typography.js'
import Icons from 'views/Icons.js'
import Maps from 'views/Maps.js'
import Notifications from 'views/Notifications.js'
import Upgrade from 'views/Upgrade.js'
import CollectOrder from 'views/collect-order'
import JourneyPlan from 'views/journey-plan'
import Customers from 'views/customers'
import Collector from 'views/collectors'
import Report from 'views/report'
import Home from 'views/home'
import Splash from 'views/auth/splash'
import Login from 'views/auth/login'
import Regist from 'views/auth/regist'
import ForgotPass from 'views/auth/forgot-pass'

const dashboardRoutes = [
  {
    path: '/auth/Splash',
    name: 'Splash',
    icon: 'nc-icon nc-grid-45',
    component: Splash,
    layout: '/Splash',
  },
  {
    path: '/auth/Login',
    name: 'Login',
    icon: 'nc-icon nc-grid-45',
    component: Login,
    layout: '/Login',
  },
  // {
  //   path: '/auth/Regist',
  //   name: 'Regist',
  //   icon: 'nc-icon nc-grid-45',
  //   component: Regist,
  //   layout: '/Regist',
  // },
  // {
  //   path: '/auth/ForgotPass',
  //   name: 'ForgotPass',
  //   icon: 'nc-icon nc-grid-45',
  //   component: ForgotPass,
  //   layout: '/ForgotPass',
  // },
  {
    path: '/Home',
    name: 'Dashboard',
    icon: 'nc-icon nc-grid-45',
    component: Home,
    layout: '/admin',
  },
  {
    path: '/CollectOrder',
    name: 'Collect Order',
    icon: 'nc-icon nc-bag',
    component: CollectOrder,
    layout: '/admin',
  },
  {
    path: '/JourneyPlan',
    name: 'Journey Plan',
    icon: 'nc-icon nc-notes',
    component: JourneyPlan,
    layout: '/admin',
  },
  {
    path: '/Customers',
    name: 'Customer',
    icon: 'nc-icon nc-badge',
    component: Customers,
    layout: '/admin',
  },
  {
    path: '/Collector',
    name: 'Collector',
    icon: 'nc-icon nc-single-02',
    component: Collector,
    layout: '/admin',
  },
  {
    path: '/Report',
    name: 'Report',
    icon: 'nc-icon nc-bullet-list-67',
    component: Report,
    layout: '/admin',
  },
  /// sampe sini
  //  {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard Sample',
  //   icon: 'nc-icon nc-grid-45',
  //   component: Dashboard,
  //   layout: '/admin',
  // },
  // {
  //   path: '/user',
  //   name: 'User Profile Sample',
  //   icon: 'nc-icon nc-circle-09',
  //   component: UserProfile,
  //   layout: '/admin',
  // },
  // {
  //   path: '/table',
  //   name: 'Table List Sample',
  //   icon: 'nc-icon nc-notes',
  //   component: TableList,
  //   layout: '/admin',
  // },
  // {
  //   path: '/typography',
  //   name: 'Typography Sample',
  //   icon: 'nc-icon nc-paper-2',
  //   component: Typography,
  //   layout: '/admin',
  // },
  // {
  //   path: '/icons',
  //   name: 'Icons Sample',
  //   icon: 'nc-icon nc-atom',
  //   component: Icons,
  //   layout: '/admin',
  // },
  // {
  //   path: '/maps',
  //   name: 'Maps Sample',
  //   icon: 'nc-icon nc-pin-3',
  //   component: Maps,
  //   layout: '/admin',
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications Sample',
  //   icon: 'nc-icon nc-bell-55',
  //   component: Notifications,
  //   layout: '/admin',
  // },
]

export default dashboardRoutes
