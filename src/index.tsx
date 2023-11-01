import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from '../src/pages/App'
import ThemeProvider from "./themes/ThemeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)