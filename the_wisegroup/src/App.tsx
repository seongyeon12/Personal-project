import MainView from './component/pages/main/MainView';
import TmpView from '@pages/tmp/TmpView';
import '@css/index.css'
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
