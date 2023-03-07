import MainView from '@pages/main/MainView';
import TmpView from '@pages/tmp/TmpView';
import '@css/reset.css'
import { Routes, Route } from 'react-router-dom';

// 라우터 - 연결

const App = (): JSX.Element => {
  return (
      <Routes>
          <Route path='/' element={<MainView />}/>
          <Route path='/tmp' element={<TmpView />}/>
      </Routes>
  )
}

export default App;
