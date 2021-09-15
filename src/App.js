import React from 'react';
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./features/feed/Feed";
import Likes from "./features/likes/Likes";
import Posts from "./features/posts/Posts";
import Search from "./features/search/Search";
import Profile from './features/profile/Profile';
import IndividualPost from "./features/feed/IndividualPost";

export default function App() {
  return (
    <div className="App flex">
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:postId" element={<IndividualPost />} />
        </Routes>
      </div>
      <Sidebar />
    </div>
  )
}
