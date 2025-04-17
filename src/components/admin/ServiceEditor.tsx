
import { useState, useEffect } from "react";
import { services } from "@/data/servicesData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, Save, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const ServiceEditor = () => {
  const [serviceList, setServiceList] = useState([...services]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    image: "",
    category: "detailing",
    features: [""],
    duration: "",
    satisfaction: ""
  });

  const handleEdit = (id: string) => {
    const serviceToEdit = serviceList.find(service => service.id === id);
    if (serviceToEdit) {
      setEditForm({ ...serviceToEdit });
      setEditingId(id);
    }
  };

  const handleSave = () => {
    // In a real application, this would send a request to your backend
    setServiceList(
      serviceList.map(service => 
        service.id === editingId ? { ...editForm } : service
      )
    );
    setEditingId(null);
    
    toast.success("Service updated successfully!");
    
    // In a real app, you would persist these changes to a database
    // For demo purposes, we're just updating the local state
    localStorage.setItem('customServices', JSON.stringify(
      serviceList.map(service => 
        service.id === editingId ? { ...editForm } : service
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
    // Load any custom services from localStorage (for demo persistence)
    const savedServices = localStorage.getItem('customServices');
    if (savedServices) {
      setServiceList(JSON.parse(savedServices));
    }
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Manage Services</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Service
        </Button>
      </div>

      {editingId ? (
        <div className="bg-card p-6 rounded-xl border">
          <h3 className="text-xl font-semibold mb-4">Edit Service</h3>
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
                <label className="block text-sm font-medium mb-1">Price</label>
                <Input 
                  value={editForm.price} 
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value as "detailing" | "protection" | "specialty" })}
                >
                  <option value="detailing">Detailing</option>
                  <option value="protection">Protection</option>
                  <option value="specialty">Specialty</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Duration</label>
                <Input 
                  value={editForm.duration} 
                  onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Satisfaction</label>
                <Input 
                  value={editForm.satisfaction} 
                  onChange={(e) => setEditForm({ ...editForm, satisfaction: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea 
                  value={editForm.description} 
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input 
                  value={editForm.image} 
                  onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
                />
              </div>
              
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
              <TableHead>Category</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceList.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.title}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell className="capitalize">{service.category}</TableCell>
                <TableCell>{service.duration}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(service.id)}>
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

export default ServiceEditor;
