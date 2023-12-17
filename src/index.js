import React from 'react';
import ReactDom from 'react-dom/client';
import App from "./App";

//import { DarkModeContext } from './context/darkModeContext';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App/>)

/* ReactDom.render(
    <React.StrictMode>
        <DarkModeContext>
            <App/>
        </DarkModeContext>
    </React.StrictMode>
    document.getElementById("root")
); */