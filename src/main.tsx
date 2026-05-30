import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import store from "./apps/store";
import AppPage from "./pages/app";
import LoginPage from "./pages/auth/login";
import RegisterPage from "./pages/auth/register";

const router = createBrowserRouter([
	{
		index: true,
		element: <Navigate to="/app" />,
	},
	{
		path: "/app",
		element: <AppPage />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}></RouterProvider>
		</Provider>
	</StrictMode>,
);
