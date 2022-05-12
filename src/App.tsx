import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ErrorBoundary from "./core/error-boundary/ErrorBoundary";
import Header from "./core/header/Header";
import DetailPage from "./pages/detail/DetailPage";
import ControlledFormDemoPage from "./pages/form-demo/ControlledFormDemo";
import UncontrolledFormDemoPage from "./pages/form-demo/UncontrolledFormDemo";
import ListPage from "./pages/list/ListPage";
import ProfilePage from "./pages/profile/ProfilePage";
import usePokeVisit from "./service/poke/usePokeVisit";
import UserContext, { UserData } from "./service/user/UserContext";
import "./styles/global.scss";

export default function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [state, dispatch] = usePokeVisit();
  return (
    <ErrorBoundary>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Header
            visitedPokemon={state.size}
            resetPokeVisitDispatch={dispatch}
          />
          <Routes>
            <Route path="/pokemon" element={<ListPage />} />
            <Route
              path="/pokemon/:pokemonName"
              element={<DetailPage addPokeVisitDispatch={dispatch} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/uncontrolled-form-demo"
              element={<UncontrolledFormDemoPage />}
            />
            <Route
              path="/controlled-form-demo"
              element={<ControlledFormDemoPage />}
            />
            <Route index element={<Navigate to="/pokemon" replace />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}
