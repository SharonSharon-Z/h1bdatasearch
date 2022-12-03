import React, { Fragment } from "react";
import "./App.css";

// components
import SearchCases from "./components/SearchCases";
// import ListCases from "./components/ListCases";

function App() {
    return (
        <Fragment>
            <div className="container">
                <SearchCases />
            </div>
        </Fragment>
    );
}

export default App;
