import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from 'react-hot-toast';
import { useTheme } from "../shared/context/ThemeContext";
import {AuthProvider} from '../context/AuthContext'
import queryClient from "../lib/queryClient";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "../shared/context/ThemeContext";

function AppToaster() {
    const { isDark } = useTheme();

    return (
        <Toaster
            position="top-right"
            toastOptions={{
                style: {
                    background: isDark
                        ? "var(--surface)"
                        : "var(--surface)",
                    color: "var(--foreground)",
                    border: "1px solid var(--border)",
                },
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
                    <Toaster 
                        position="top-right"
                        reverseOrder={false}
                        gutter={10}
                        toastOptions={{
                            duration:3000,
                            style:{
                                borderRadius: "10px",
                                background: "#333",
                                color: "#fff",
                            },
                        }}
                    />  
                </AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>
);