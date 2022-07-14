import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Homepage from "./containers/Homepage";
import Aboutpage from "./containers/Aboutpage";
import Blogpage from "./containers/Blogpage";
import { theme } from "./global-styles";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/comingsoon" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="*" element={<Navigate to="/comingsoon" replace />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
