import { Routes, Route } from 'react-router-dom'
import Navigation from './components/routing/navigation/navigation.component.jsx'
import SignIn from './components/routing/sign-in/sign-in.component.jsx'
import Home from './components/routing/home.component.jsx'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )  
}

export default App;