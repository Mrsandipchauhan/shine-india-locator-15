
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X, Upload } from "lucide-react";
import { toast } from "sonner";

interface ImageItem {
  id: string;
  url: string;
  alt: string;
  category: string;
}

// Sample default images from the existing data
const defaultImages: ImageItem[] = [
  {
    id: "img1",
    url: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
    alt: "Detailing process",
    category: "detailing"
  },
  {
    id: "img2",
    url: "https://images.unsplash.com/photo-1601362840343-43892066c5b5",
    alt: "Interior detailing",
    category: "interior"
  },
  {
    id: "img3",
    url: "https://images.unsplash.com/photo-1635260537978-67eff8c97786",
    alt: "Detailing process",
    category: "process"
  },
  {
    id: "img4",
    url: "https://images.unsplash.com/photo-1607856400955-ceefe9cdea49",
    alt: "Car polish",
    category: "exterior"
  }
];

const ImageManager = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    id: "",
    url: "",
    alt: "",
    category: ""
  });

  useEffect(() => {
    // Load saved images from localStorage or use defaults
    const savedImages = localStorage.getItem('siteImages');
    if (savedImages) {
      setImages(JSON.parse(savedImages));
    } else {
      setImages([...defaultImages]);
    }
  }, []);

  const handleEdit = (id: string) => {
    const imageToEdit = images.find(img => img.id === id);
    if (imageToEdit) {
      setEditForm({ ...imageToEdit });
      setEditingId(id);
    }
  };

  const handleSave = () => {
    const updatedImages = images.map(img => 
      img.id === editingId ? { ...editForm } : img
    );
    
    setImages(updatedImages);
    setEditingId(null);
    
    // Save to localStorage for demo purposes
    localStorage.setItem('siteImages', JSON.stringify(updatedImages));
    
    toast.success("Image updated successfully!");
  };

  const handleDelete = (id: string) => {
    const updatedImages = images.filter(img => img.id !== id);
    setImages(updatedImages);
    
    // Save to localStorage for demo purposes
    localStorage.setItem('siteImages', JSON.stringify(updatedImages));
    
    toast.success("Image removed successfully!");
  };

  const handleAddNew = () => {
    const newImage: ImageItem = {
      id: `img${Date.now()}`,
      url: "",
      alt: "",
      category: "general"
    };
    
    setImages([...images, newImage]);
    setEditForm(newImage);
    setEditingId(newImage.id);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Image Management</h2>
        <Button onClick={handleAddNew}>
          <Upload className="mr-2 h-4 w-4" /> Add New Image
        </Button>
      </div>
      
      {editingId && (
        <div className="bg-card p-6 rounded-xl border mb-6">
          <h3 className="text-xl font-semibold mb-4">Edit Image</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input 
                  value={editForm.url} 
                  onChange={(e) => setEditForm({ ...editForm, url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Alt Text</label>
                <Input 
                  value={editForm.alt} 
                  onChange={(e) => setEditForm({ ...editForm, alt: e.target.value })}
                  placeholder="Descriptive text for the image"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={editForm.category}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                >
                  <option value="general">General</option>
                  <option value="detailing">Detailing</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                  <option value="process">Process</option>
                  <option value="protection">Protection</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium mb-1">Preview</label>
              {editForm.url ? (
                <div className="aspect-square rounded-lg overflow-hidden border border-border">
                  <img 
                    src={editForm.url} 
                    alt={editForm.alt || "Preview"} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square rounded-lg flex items-center justify-center bg-muted">
                  <p className="text-muted-foreground">No image preview</p>
                </div>
              )}
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
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative group border rounded-lg overflow-hidden">
            <div className="aspect-square">
              <img 
                src={image.url || '/placeholder.svg'} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button 
                variant="secondary" 
                size="sm" 
                onClick={() => handleEdit(image.id)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => handleDelete(image.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-2 bg-secondary/30 absolute bottom-0 left-0 right-0 text-xs truncate">
              {image.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageManager;
