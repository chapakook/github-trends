import logo from '../assets/images/svg/logo.svg'
import '../pages/app.css'
import Comparison from './comparison'
import Extra from './extra'
import Footer from './footer'
import Suggestions from './suggestions'

function App() {
  return (
    <div className='site-wapper'>
      <header className='site-header'>
        <div className='container'>
          <a className='site-header--title' href='/'>
            <img src={logo} className='site-header--logo' alt='Github Trends logo' />
            <span className='site-header--name'>Github trends</span>
          </a>
        </div>
      </header>
      <div className='content-wrapper'>
        <div className='container'>
          <Comparison />
          <Suggestions />
          <Extra />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
