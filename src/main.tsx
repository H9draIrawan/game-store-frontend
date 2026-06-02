import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import store from "./apps/store";
import { AuthProvider } from "./context/AuthContext";
import AppPage from "./pages/app";
import { actionLogin, actionRegister } from "./pages/auth/authAction";
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
		action: actionLogin,
	},
	{
		path: "/register",
		element: <RegisterPage />,
		action: actionRegister,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Suspense fallback={<div style={{ padding: "20px" }}>Loading... ⏳</div>}>
			<AuthProvider>
				<Provider store={store}>
					<RouterProvider router={router}></RouterProvider>
				</Provider>
			</AuthProvider>
		</Suspense>
	</StrictMode>,
);
