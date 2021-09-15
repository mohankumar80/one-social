import React from 'react';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Feed from "./features/feed/Feed";
import Likes from "./features/likes/Likes";
import Posts from "./features/posts/Posts";
import Search from "./features/search/Search";
import Profile from './features/profile/Profile';
import IndividualPost from "./features/feed/IndividualPost";
import { Navbar, Sidebar, Signup, NotFound } from "./components/index";
import Login from "./features/profile/Login";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="Routes">
        <Routes>
          <PrivateRoute path="/" element={<Feed />} />
          <PrivateRoute path="/search" element={<Search />} />
          <PrivateRoute path="/posts" element={<Posts />} />
          <PrivateRoute path="/likes" element={<Likes />} />
          <PrivateRoute path="/profile" element={<Profile />} />
          <PrivateRoute path="/post/:postId" element={<IndividualPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  )
}
