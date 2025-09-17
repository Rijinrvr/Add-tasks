import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TaskListPage } from "./pages/TaskListPage";
import { AddTaskPage } from "./pages/AddTaskPage";
import { useAuth } from "./context/auth-context-hook";
import { AuthProvider } from "./context/AuthContext";
import type { JSX } from "react";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <TaskListPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-task"
              element={
                <ProtectedRoute>
                  <AddTaskPage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
