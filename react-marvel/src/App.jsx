import CharacterList from './CharacterList.jsx'
import CharacterDetail from './CharacterDetail.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/characters" element={<CharacterList/>} />
        <Route path="/characters/:id" element={<CharacterDetail/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
