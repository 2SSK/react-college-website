import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
