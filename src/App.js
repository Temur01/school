import MenuIcon from "@mui/icons-material/Menu";
import MyBtn from "./components/MyBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import GlobalStyle from "./styles/global";
import Layout from "./containers/Layout";
import Teachers from "./pages/Teachers";
import SchoolPage from "./pages/School";
import Students from "./pages/Students";
import Rooms from "./pages/Rooms";
import { Routes, Route } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<SchoolPage />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
