
import { Link } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarAdmin = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link to="/admin">
        <Button variant="outline" size="sm" className="gap-1">
          <LockKeyhole className="h-4 w-4" />
          <span className="hidden sm:inline">Admin</span>
        </Button>
      </Link>
    </div>
  );
};

export default NavbarAdmin;
