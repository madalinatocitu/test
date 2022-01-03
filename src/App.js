import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Refreshable } from "react-router-refreshable";
import HomePage from "./home";
import MyTasksPage from "./my-tasks-page";
import GraphPage from "./graph";
import HelpPage from "./help";

class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/my-tasks-page" element={<MyTasksPage />} />
                    <Route path="/graph" element={<GraphPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    <Route path="*" element={ <Navigate to = "/home"/> } />
                </Routes>
            </div>
        )
    }
}

export default App;