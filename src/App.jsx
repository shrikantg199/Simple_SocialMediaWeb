import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import { useState } from "react";
import PostListProvider from "./store/post-store-list";
const App = () => {
  const [selectedTab, setSelected] = useState("Home");
  console.log(setSelected);

  return (
    <>
      <PostListProvider>
        <div className="app-container flex wrap">
          <Sidebar setSelected={setSelected}></Sidebar>
          <div className="contain ">
            <Header></Header>
            {selectedTab === "Home" ? (
              <Postlist></Postlist>
            ) : (
              <Createpost></Createpost>
            )}

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
};

export default App;
