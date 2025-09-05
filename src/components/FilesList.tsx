
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { FileObject } from '@supabase/storage-js';
import { Button } from './ui/button';

const FilesList = () => {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const { data, error } = await supabase
          .storage
          .from('files')
          .list();

        if (error) {
          throw error;
        }

        if (data) {
          setFiles(data);
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to fetch files');
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  const readFile = async (fileName: string) => {
    try {
      setSelectedFile(fileName);
      const { data, error } = await supabase
        .storage
        .from('files')
        .download(fileName);

      if (error) {
        throw error;
      }

      if (data) {
        const text = await data.text();
        setFileContent(text);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to read file');
    }
  };

  if (loading) {
    return <div className="p-4">Loading files...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Files in Storage</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {files.length === 0 ? (
            <p>No files found in storage</p>
          ) : (
            <ul className="space-y-2">
              {files.map((file) => (
                <li key={file.name} className="border p-3 rounded-lg">
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    Size: {(file.metadata?.size || 0 / 1024).toFixed(2)} KB
                  </p>
                  <p className="text-sm text-gray-500">
                    Created: {new Date(file.created_at).toLocaleString()}
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-2"
                    onClick={() => readFile(file.name)}
                  >
                    Read File
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedFile && (
          <div className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Content of {selectedFile}</h3>
            <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border">
              {fileContent || 'Loading...'}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilesList;
