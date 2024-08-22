import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.css";
import { Root } from "./layouts/Root/Root";
import { Resume } from "./pages/Resume/Resume";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Contact } from "./pages/Contact/Contact";
import { Portfolio } from "./pages/Portfolio/Portfolio";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <AboutMe />,
			},
			{
				path: "portfolio",
				element: <Portfolio />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);