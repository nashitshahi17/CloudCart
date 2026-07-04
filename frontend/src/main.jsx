import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { useTheme } from "../shared/context/ThemeContext";
import { AuthProvider } from '../context/AuthContext'
import queryClient from "../lib/queryClient";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "../shared/context/ThemeContext";

function AppToaster() {
    const { isDark } = useTheme();

    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={12}
            containerStyle={{
                top: 20
            }}
            toastOptions={{
                duration: 750,

                style: {
                    borderRadius: "16px",
                    padding: "16px 20px",
                    background: "var(--surface)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                    boxShadow:
                        "0 12px 30px rgba(0,0,0,0.12)",

                    fontSize: "14px",

                    fontWeight: "500"
                },

                success: {
                    iconTheme: {
                        primary: "#22c55e",
                        secondary: "#ffffff"
                    }
                },

                error: {
                    iconTheme: {
                        primary: "#ef4444",
                        secondary: "#ffffff"
                    }
                }
            }}
        />
    );
}

ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>
        <ThemeProvider>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <App />
                    <AppToaster />
                </AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);