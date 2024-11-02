import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Overlay } from "./components/Overlay.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<>
		<App />
		<Overlay />
	</>
);
