import './App.css';
import MainPage from './javascript/components/MainPage';
import Navbar from './javascript/components/Navbar';
import MessagesList from './javascript/components/MessagesList';
import MessagesSubmit from './javascript/components/MessagesSubmit';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
<BrowserRouter>
  <Routes>
	<Route path="" element={<MainPage/>}/>
  <Route path="/mailinfo" element={<><Navbar/><MessagesSubmit/></>}/>
  <Route path="/locationinfo" element={<><Navbar/><MessagesList/></>}/>
  
  </Routes>
</BrowserRouter>
  );
}

export default App;