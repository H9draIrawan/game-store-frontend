import { createContext, use, useState, type ReactNode } from "react";
import { checkSession } from "../api/auth";

interface User {
	id: string;
	email: string;
	fullname: string;
	username: string;
	role: string;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (userData: User) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const Session = checkSession().then((response) => response?.json());

export function AuthProvider({ children }: { children: ReactNode }) {
	const initialUser = use(Session);
	const [user, setUser] = useState<User | null>(initialUser);

	const login = (userData: User) => {
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
	};

	const isAuthenticated = !!user;

	return (
		<AuthContext value={{ user, isAuthenticated, login, logout }}>
			{children}
		</AuthContext>
	);
}

export function useAuth() {
	const context = use(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within a AuthProvider");
	}

	return context;
}
