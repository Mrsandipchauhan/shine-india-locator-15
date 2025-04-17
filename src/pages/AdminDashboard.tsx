
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceEditor from "@/components/admin/ServiceEditor";
import PackageEditor from "@/components/admin/PackageEditor";
import ProcessEditor from "@/components/admin/ProcessEditor";
import ImageManager from "@/components/admin/ImageManager";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield } from "lucide-react";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple authentication for demo purposes
  // In a real application, you would use a proper authentication system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // This is just a placeholder - in a real app, use a proper auth system
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 min-h-[70vh] flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-xl border border-border">
            <div className="text-center">
              <Shield className="mx-auto h-10 w-10 text-primary" />
              <h1 className="text-2xl font-bold mt-2">Admin Access</h1>
              <p className="text-muted-foreground">Enter your password to continue</p>
            </div>
            
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your website content, services, and images
          </p>
        </div>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="process">Process Steps</TabsTrigger>
            <TabsTrigger value="images">Images</TabsTrigger>
          </TabsList>
          <TabsContent value="services" className="p-4 border rounded-lg mt-4">
            <ServiceEditor />
          </TabsContent>
          <TabsContent value="packages" className="p-4 border rounded-lg mt-4">
            <PackageEditor />
          </TabsContent>
          <TabsContent value="process" className="p-4 border rounded-lg mt-4">
            <ProcessEditor />
          </TabsContent>
          <TabsContent value="images" className="p-4 border rounded-lg mt-4">
            <ImageManager />
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
