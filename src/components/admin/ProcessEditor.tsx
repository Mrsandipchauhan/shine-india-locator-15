
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

// Default process steps from Services.tsx
const defaultProcessSteps = [
  "We carefully examine your vehicle to identify specific needs and create a tailored plan.",
  "Specialized pre-wash treatments and careful hand washing to safely remove contaminants.",
  "Meticulous attention to every surface with specialized tools and techniques.",
  "Premium protective products applied to preserve your vehicle's appearance.",
  "Thorough quality check and walkthrough of completed work with maintenance tips."
];

const ProcessEditor = () => {
  const [processSteps, setProcessSteps] = useState<string[]>([]);
  const [processTitle, setProcessTitle] = useState("Detailing");

  useEffect(() => {
    // Load saved steps from localStorage or use defaults
    const savedSteps = localStorage.getItem('processSteps');
    const savedTitle = localStorage.getItem('processTitle');
    
    if (savedSteps) {
      setProcessSteps(JSON.parse(savedSteps));
    } else {
      setProcessSteps([...defaultProcessSteps]);
    }
    
    if (savedTitle) {
      setProcessTitle(savedTitle);
    }
  }, []);

  const handleStepChange = (index: number, value: string) => {
    const updatedSteps = [...processSteps];
    updatedSteps[index] = value;
    setProcessSteps(updatedSteps);
  };

  const addStep = () => {
    setProcessSteps([...processSteps, ""]);
  };

  const removeStep = (index: number) => {
    const updatedSteps = [...processSteps];
    updatedSteps.splice(index, 1);
    setProcessSteps(updatedSteps);
  };

  const handleSave = () => {
    // Save to localStorage for demo purposes
    localStorage.setItem('processSteps', JSON.stringify(processSteps));
    localStorage.setItem('processTitle', processTitle);
    
    toast.success("Process steps updated successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Service Process Steps</h2>
        <Button onClick={handleSave}>
          <Save className="mr-2 h-4 w-4" /> Save Changes
        </Button>
      </div>
      
      <div className="bg-card p-6 rounded-xl border">
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Process Title</label>
          <Input 
            value={processTitle} 
            onChange={(e) => setProcessTitle(e.target.value)}
            placeholder="e.g., Detailing, Protection, etc."
          />
        </div>
        
        <div className="space-y-4">
          <label className="block text-sm font-medium mb-1">Process Steps</label>
          
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
              <div className="flex-grow">
                <Textarea 
                  value={step} 
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  placeholder={`Step ${index + 1} description`}
                  className="min-h-[80px]"
                />
              </div>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => removeStep(index)}
                disabled={processSteps.length <= 1}
                className="flex-shrink-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <Button 
            variant="outline" 
            onClick={addStep}
            className="mt-2"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProcessEditor;
