import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Top10 from "./pages/top10";
import SignIn from "./pages/sign_in";
import Footer from "./component/Footer";
import SignUp from "./pages/sign_up";
import SearchResults from "./pages/search_results";
import MovieDetailPage from "./pages/movie_detail";
import MessageBoard from "./pages/message_board";
import TvDetailPage from "./pages/tv_detail";
import TopicDetail from "./pages/message_board/pages/TopicDetail";

function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top10" element={<Top10 />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/results/:id" element={<SearchResults />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
          <Route path="/tv/:id" element={<TvDetailPage />} />
          <Route path="/board" element={<MessageBoard />} />
          <Route path="/topic/:id" element={<TopicDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
