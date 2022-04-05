import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from './components/Home'
import GlobalStyles from './components/GlobalStyles'
import Setting from './components/Setting'
import CreateTransaction from './components/CreateTransaction'
import PendingTransaction from './components/PendingTransaction'

function App() {
  return (
    <GlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/setting" element={<Setting />} />
          <Route path="/create-transaction" element={<CreateTransaction />} />
          <Route path="/pending-transaction" element={<PendingTransaction />} />
        </Routes>
      </BrowserRouter>
    </GlobalStyles>
  )
}

export default App
