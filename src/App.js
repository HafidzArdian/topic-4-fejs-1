import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetails from "./pages/PostDetails";
import Posts from "./pages/Posts";
import Protected from "./components/Protected";
import { Provider } from "react-redux";
import RedirectIfProtected from "./components/RedirectIfProtected";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/register"
            element={
              <RedirectIfProtected>
                <Register />
              </RedirectIfProtected>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectIfProtected>
                <Login />
              </RedirectIfProtected>
            }
          />

          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />

          <Route
            path="/user/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
        </Routes>

        <ToastContainer theme="colored" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
