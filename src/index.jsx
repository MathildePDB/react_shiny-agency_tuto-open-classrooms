import React from 'react'
import reactdom from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Survey from './pages/Survey'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import ProfileContainer from './components/ProfileContainer'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

reactdom.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
