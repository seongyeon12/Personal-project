import SearchView from './component/pages/SearchView';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 라우터 - 연결

const App = (): JSX.Element => {
  return (
      <Routes>
          <Route path='/' element={<SearchView />}/>
      </Routes>
  )
}

export default App;
