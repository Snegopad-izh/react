import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABSta4ztO2Z73YCEvZDFgCPesndhqt-seBg&usqp=CAU" />
      </header>
      <nav className="nav">
        <div>
          <a href="/">Profile</a>
        </div>
        <div>
          <a href="/">Message</a>
        </div>
        <div>
          <a href="/">Photo</a>
        </div>
        <div>
          <a href="/">News</a>
        </div>
        <div>
          <a href="/">Music</a>
        </div>
      </nav>
      <div className="content">
        <img
          src="https://thailand-news.ru/sites/default/files/storage/images/2019-47/76928174_1441403332691909_1733241817601671168_o.jpg"
          alt="water"
        />
        <div>ava+description</div>
        <div>
          My posts
          <div>New post</div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
