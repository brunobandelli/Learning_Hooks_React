import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import { useState } from 'react/cjs/react.development'

const App = props => {
    const [state, setState] = useState(data)

    return (

        <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
        </DataContext.Provider>
    )
}

export default App