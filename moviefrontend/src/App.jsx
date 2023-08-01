import React, { createContext, useReducer } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { reducer, initialState } from './components/reducer';
import Home from "./components/Home";
import Search from "./components/Search";
import Movies from "./components/Movies";
import Signin from "./components/Signin";
import Tv from "./components/Tv";
import Series from "./components/Series";
import Error from "./components/Error";
import Prompt from "./components/Prompt";

export const userContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/prompt' element={<Prompt />} />
          {/* <Route path='/*' element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}
export default App;
