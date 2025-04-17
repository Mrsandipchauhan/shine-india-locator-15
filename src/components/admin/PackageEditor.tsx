
import { useState, useEffect } from "react";
import { servicePackages } from "@/data/servicesData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, Save, Plus, Trash2, Check, X } from "lucide-react";
import { toast } from "sonner";

const PackageEditor = () => {
  const [packageList, setPackageList] = useState([...servicePackages]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    features: [""],
    featured: false
  });

  const handleEdit = (id: string) => {
    const packageToEdit = packageList.find(pkg => pkg.id === id);
    if (packageToEdit) {
      setEditForm({ ...packageToEdit });
      setEditingId(id);
    }
  };

  const handleSave = () => {
    // In a real application, this would send a request to your backend
    setPackageList(
      packageList.map(pkg => 
        pkg.id === editingId ? { ...editForm } : pkg
      )
    );
    setEditingId(null);
    
    toast.success("Package updated successfully!");
    
    // In a real app, you would persist these changes to a database
    // For demo purposes, we're just updating the local state
    localStorage.setItem('customPackages', JSON.stringify(
      packageList.map(pkg => 
        pkg.id === editingId ? { ...editForm } : pkg
      )
    ));
  };

  const handleFeatureChange = (index: number, value: string) => {
    const updatedFeatures = [...editForm.features];
    updatedFeatures[index] = value;
    setEditForm({ ...editForm, features: updatedFeatures });
  };

  const addFeature = () => {
    setEditForm({ ...editForm, features: [...editForm.features, ""] });
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = [...editForm.features];
    updatedFeatures.splice(index, 1);
    setEditForm({ ...editForm, features: updatedFeatures });
  };

  useEffect(() => {
    // Load any custom packages from localStorage (for demo persistence)
    const savedPackages = localStorage.getItem('customPackages');
    if (savedPackages) {
      setPackageList(JSON.parse(savedPackages));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Service Packages</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Package
        </Button>
      </div>

      {editingId ? (
        <div className="bg-card p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-4">Edit Package</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input 
                  value={editForm.title} 
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea 
                  value={editForm.description} 
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Price</label>
                <Input 
                  value={editForm.price} 
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={editForm.featured || false}
                  onChange={(e) => setEditForm({ ...editForm, featured: e.target.checked })}
                  className="rounded border-gray-300"
                />
                <label htmlFor="featured" className="text-sm font-medium">
                  Featured Package
                </label>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Features</label>
                <div className="space-y-2">
                  {editForm.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input 
                        value={feature} 
                        onChange={(e) => handleFeatureChange(index, e.target.value)}
                      />
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => removeFeature(index)}
                        disabled={editForm.features.length <= 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={addFeature}
                    className="mt-2"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Feature
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6 space-x-2">
            <Button variant="outline" onClick={() => setEditingId(null)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </div>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Features</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packageList.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell className="font-medium">{pkg.title}</TableCell>
                <TableCell>{pkg.price}</TableCell>
                <TableCell>{pkg.features.length} items</TableCell>
                <TableCell>
                  {pkg.featured ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground" />
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(pkg.id)}>
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default PackageEditor;
