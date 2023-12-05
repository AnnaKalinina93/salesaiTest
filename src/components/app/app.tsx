import { Route, Routes } from 'react-router';
import Main from '../../pages/main/main';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Main />}/>
     <Route path="*" element={<NotFoundScreen/>} />
   </Routes>
  );
}

export default App;
