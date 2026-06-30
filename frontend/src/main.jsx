import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClientProvider} from '@tanstack/react-query';
import {Toaster} from 'react-hot-toast';
import {AuthProvider} from '../context/AuthContext'
import queryClient from "../lib/queryClient";
import "./index.css";
import App from "./App";
ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <React.StrictMode>
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
    </React.StrictMode>
);