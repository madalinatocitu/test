import React from "react";
import { Route, Routes } from "react-router-dom";
// Navigate
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
                    <Route path="*" element={<HomePage />} />
                    <Route path="/my-tasks-page" element={<MyTasksPage />} />
                    <Route path="/graph" element={<GraphPage />} />
                    <Route path="/help" element={<HelpPage />} />
                    {/* <Route component={Error} /> */}
                </Routes>
            </div>
        )
    }
}

export default App;