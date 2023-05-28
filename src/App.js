import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import { useContext } from 'react';
//CONTEXT
import FirebaseContext from './context/FirebaseContext';
//Routes
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';

function App() {
  const {authToken} = useContext(FirebaseContext);
  if(!authToken){ 
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<Navigate to="auth" />}></Route>
          <Route path="auth/*" element={<PublicRoutes />}></Route>
        </Routes>
      </Router>
    );
  }else{
    return (
      <Router>
        <Routes>
          <Route path='/*' element={<PrivateRoutes />}></Route>
        </Routes>
      </Router>
    )
  } 
}

export default App;
