
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { FileObject } from '@supabase/storage-js';

const ImageUploadDashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [images, setImages] = useState<FileObject[]>([]);

  // Fetch existing images
  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .storage
        .from('public-images')
        .list();

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      toast.error('Failed to fetch images', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Upload image
  const handleUpload = async () => {
    if (!selectedFile) {
      toast.warning('Please select a file first');
      return;
    }

    try {
      const fileExt = selectedFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error } = await supabase
        .storage
        .from('public-images')
        .upload(fileName, selectedFile);

      if (error) throw error;

      toast.success('Image uploaded successfully');
      fetchImages(); // Refresh image list
      setSelectedFile(null);
    } catch (error) {
      toast.error('Upload failed', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  // Delete image
  const handleDelete = async (fileName: string) => {
    try {
      const { error } = await supabase
        .storage
        .from('public-images')
        .remove([fileName]);

      if (error) throw error;

      toast.success('Image deleted successfully');
      fetchImages(); // Refresh image list
    } catch (error) {
      toast.error('Delete failed', {
        description: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Image Upload Dashboard</h1>
      
      {/* File Upload Section */}
      <div className="flex space-x-4 mb-6">
        <Input 
          type="file" 
          accept="image/*" 
          onChange={handleFileSelect} 
          className="flex-grow"
        />
        <Button 
          onClick={handleUpload} 
          disabled={!selectedFile}
        >
          Upload Image
        </Button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div key={image.name} className="relative group">
            <img 
              src={`https://ckkxncnbtuehsfibvziw.supabase.co/storage/v1/object/public/public-images/${image.name}`}
              alt={image.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button 
              variant="destructive" 
              size="sm" 
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleDelete(image.name)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploadDashboard;
