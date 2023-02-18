import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "./router/routers";
import Layout from "./layouts/Layout";
import Paths from "./constant/path";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            {routes.map(({ name, path, Component }, index) => {
                return (
                    <Route
                        key={name + index}
                        path={path}
                        element={
                            <Suspense fallback={null}>
                                <Component />
                            </Suspense>
                        }
                    />
                );
            })}
        </Route>
        <Route path="*" element={<Navigate replace to={Paths.HOME} />} />
    </Routes>
);
}

export default App;
