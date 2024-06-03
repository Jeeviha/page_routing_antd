import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import TablePageAntd from './TablePageAntd'
import LoginPageAntd from './LoginPageAntd'
import LayoutAntd from './LayoutAntd'
import StudentPageAntd from './StudentPageAntd'

const PageRoutingAntd = () => {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<LoginPageAntd/>}/>
            <Route path="/student" element={<LayoutAntd><TablePageAntd/></LayoutAntd>}/>
            <Route path="/student/:name" element={<LayoutAntd><StudentPageAntd/></LayoutAntd>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default PageRoutingAntd
