
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarAdmin = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Link to="/admin">
        <Button className="gap-2 shadow-lg">
          <LayoutDashboard className="h-4 w-4" />
          <span>Admin Dashboard</span>
        </Button>
      </Link>
    </div>
  );
};

export default NavbarAdmin;
