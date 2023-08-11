
import './App.css'
import Navbar from './components/Navbar'
import Description from './components/description'
import Payment from './components/payment'

function App() {

  return (
    <div>
      <Navbar />
      <div className='main-body'>
        <Description />
        <Payment />
      </div>
      
    </div>
  )
}

export default App
