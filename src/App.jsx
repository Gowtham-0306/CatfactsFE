import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Catfactshome } from './components/catfactshome'
import { Addcatfacts } from './components/addcatfacts'
import { BrowserRouter , Route , Routes , Link} from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  
return(<>


<BrowserRouter >

          <Routes>
         <Route path="/" element={<Catfactshome/>} /> 
         <Route path="/addcatfacts" element={<Addcatfacts/>} /> 

      
         
          
          </Routes>
        </BrowserRouter>




</>)

}

export default App
