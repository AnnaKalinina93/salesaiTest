import { Route, Routes } from 'react-router';

function App() {
  return (
   <Routes>
     <Route path='/' element={<!!!!!! />}/>
     <Route path="*" element={<NotFoundScreen/>} />
   </Routes>
  );
}

export default App;
