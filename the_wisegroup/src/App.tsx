import MainView from './component/pages/main/MainView';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// 라우터 - 연결

const App = (): JSX.Element => {
  return (
      <Routes>
          <Route path='/' element={<MainView />}/>
      </Routes>
  )
}

export default App;
