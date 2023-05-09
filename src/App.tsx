import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";

function App() {
    return (
        <MantineProvider
            theme={{
                colors: {
                    paleOrange: ["#E98138"],
                    paleoGreen: ["#048857"],
                    shadow: ["#0000008A", "#D9D9D900"],
                },
                fontFamily: "Inria Sans",
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
