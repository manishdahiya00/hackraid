import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router";
import { Loader } from "lucide-react";

const ProtectedRoute: React.FC = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <Loader className="animate-spin w-8 h-8 text-blue-600" />
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
