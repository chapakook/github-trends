import logo from './public/img/logo.svg'
import './public/css/app.css'
import Comparison from './Comparison'
import Footer from './footer'

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
        <Comparison />
      </div>
      <Footer />
    </div>
  )
}

export default App
