import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ErrorBoundary from "./core/error-boundary/ErrorBoundary";
import Header from "./core/header/Header";
import DetailPage from "./pages/detail/DetailPage";
import ControlledFormDemoPage from "./pages/form-demo/ControlledFormDemoPage";
import UncontrolledFormDemoPage from "./pages/form-demo/UncontrolledFormDemoPage";
import ListPage from "./pages/list/ListPage";
import ProfilePage from "./pages/profile/ProfilePage";
import usePokeVisit from "./service/poke/usePokeVisit";
import UserContext, { UserData } from "./service/user/UserContext";
import DefaultLayout from "./shared/default-layout/DefaultLayout";
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
            <Route
              path="/"
              element={
                <DefaultLayout>
                  <Outlet />
                </DefaultLayout>
              }
            >
              <Route index element={<Navigate to="pokemon" replace />} />
              <Route path="pokemon">
                <Route index element={<ListPage />} />
                <Route
                  path=":pokemonName"
                  element={<DetailPage addPokeVisitDispatch={dispatch} />}
                />
              </Route>
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/uncontrolled-form-demo"
                element={<UncontrolledFormDemoPage />}
              />
              <Route
                path="/controlled-form-demo"
                element={<ControlledFormDemoPage />}
              />
            </Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </ErrorBoundary>
  );
}
