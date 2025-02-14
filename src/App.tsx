import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/base/NavBar";
import Footer from "./components/base/Footer";
import HomepageMain from "./pages/HomepageMain";
import styled from "styled-components";
import GroupIntro from "./pages/GroupIntro";
import AiChatButton from "./components/base/AiChatButton";
import CafeButton from "./components/base/CafeButton";
import VolunteerIntro from "./pages/VolunteerIntro";

function Layout() {
  return (
    <>
      <StyledSection>
        <CafeButton />
        <AiChatButton />
      </StyledSection>

      <StyledDiv>
        <NavBar />
        <Outlet />
        <Footer />
      </StyledDiv>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomepageMain />} />
        <Route path="/introduction" element={<GroupIntro />} />
        <Route path="/volunteer" element={<VolunteerIntro />} />
      </Route>
    </Routes>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  right: 5%;
  top: 200px;
  position: fixed;
  z-index: 10;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export default App;
