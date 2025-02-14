import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/homepage/NavBar";
import Footer from "./components/homepage/Footer";
import HomepageMain from "./pages/HomepageMain";
import styled from "styled-components";
import GroupIntro from "./pages/GroupIntro";
import AiChatButton from "./components/base/AiChatButton";
import CafeButton from "./components/base/CafeButton";

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomepageMain />} />
        <Route path="/introduction" element={<GroupIntro />} />
      </Route>
    </Routes>
  );
}

export default App;
