import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from './Recommended';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__page">
        {/* Sidebar */}
        <Sidebar className="app__sidebar" />
        {/* RecommendedVideos */}
        <Recommended className="app__recommended" />
      </div>
    </div>
  );
}

export default App;
