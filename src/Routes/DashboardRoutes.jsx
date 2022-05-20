import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, NewPost, Profile } from '../Pages';
import { NavBar } from "../Components/NavBar/NavBar"
import { useDispatch } from 'react-redux';
import { getPosts } from '../Actions/posts';
import { useEffect } from 'react';
import { Post } from '../Components/Posts/Post';

export const DashboardRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
        
    dispatch((getPosts()));

}, [dispatch])

  return (
      <>
        <NavBar />
            <Routes>
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/home" element={<Home />} />
                <Route path="/newpost/*" element={<NewPost />} />
                <Route exact path="/p/:id" element={<Post />} />

                <Route path="*" element={<Navigate to='/home'/>} />
            </Routes>
    </>
  )
}
