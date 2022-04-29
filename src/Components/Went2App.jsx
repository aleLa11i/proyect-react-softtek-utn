import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { NavBar } from './NavBar/NavBar';
import { NewPost } from './NewPost/NewPost';
import { Profile } from './Profile/Profile';

export const Went2App = () => {
  return (
      <>
        <BrowserRouter>
        <NavBar />
            <Routes>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/newpost" element={<NewPost />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
