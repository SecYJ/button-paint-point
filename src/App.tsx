import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/about",
		element: <Link to="/">Back to Home</Link>,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
