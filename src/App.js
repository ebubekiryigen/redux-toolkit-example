import { useSelector, connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter.js'
import CounterAction from './components/CounterAction.js'
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import {routes} from './routes'

const mapStateToProps = state =>({
  dark:state.setting.dark,
  user:state.auth.user
})

function App({dark,user}) {
 /*  const {dark} = useSelector(state=> state.setting) */

  return (
    <div className={dark ? 'dark' : ''}>
      <Header />
      <Routes>
          {routes.map(route => (
            <Route exact={route.exact} path={route.path} element={<route.element/>} />
            )
          )}
      </Routes>
      <Counter />
      <CounterAction />
      <Footer />
    </div>
  );
}

export default connect(mapStateToProps)(App);
