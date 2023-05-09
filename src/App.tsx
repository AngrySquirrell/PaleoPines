import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
    return (
        <MantineProvider
            theme={{
                colors: {
                    paleOrange: ["#E98138","#E98138DD"],
                    paleoGreen: ["#048857"],
                    shadow: ["#0000008A", "#D9D9D900"],
                },
                fontFamily: "Inria Sans",
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
