import ReactDOM from "react-dom";
import logo from './image.svg';
import { GiPartyPopper } from 'react-icons/gi'
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import Event from "./pages/Event";
import Create from "./pages/Create";


    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="event" element={<Event />} />
              <Route path="create" element={<Create />} />

            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    
    ReactDOM.render(<App />, document.getElementById("root"));