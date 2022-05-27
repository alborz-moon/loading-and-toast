import React,{useState} from 'react';
import Loading from "./components/Loading";
import Toast from "./components/Toast";
import './App.css';

function App() {
  const [toast, setToast] = useState({type: 'info', message: 'aaa'})
  return (
          <>
            <Loading />
            <Toast type={toast.type} message={toast.message} />
          </>
  );
}

export default App;
