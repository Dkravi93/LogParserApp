"use client";
import { useState } from "react";

export default function FileUpload({ onFileUpload }: { onFileUpload: (fileName: string) => void }) {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [dragActive, setDragActive] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);
        const droppedFile = event.dataTransfer.files?.[0] || null;
        setFile(droppedFile);
    };

    const handleFileUpload = async () => {
        if (!file) {
            alert("Please select a file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setUploading(true);
        setProgress(20); // Simulating initial progress

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            setProgress(100);
            setTimeout(() => {
                alert("File uploaded successfully!");
                onFileUpload(file.name); // Pass filename to parent
                setFile(null);
                setProgress(0);
                setUploading(false);
            }, 500);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            alert("Error uploading file!");
            setUploading(false);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md w-full max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-3">Upload Log File</h2>

            <div
                className={`border-2 border-dashed p-6 rounded-md ${
                    dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" />
                <label
                    htmlFor="fileInput"
                    className="block text-center text-gray-600 cursor-pointer"
                >
                    {file ? `Selected File: ${file.name}` : "Drag & drop a file or click to select"}
                </label>
            </div>

            {file && (
                <div className="mt-3">
                    <p className="text-sm text-gray-700">File: {file.name}</p>
                    <button
                        onClick={handleFileUpload}
                        disabled={uploading}
                        className={`mt-2 px-4 py-2 text-white rounded ${
                            uploading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                        }`}
                    >
                        {uploading ? "Uploading..." : "Upload"}
                    </button>

                    {uploading && (
                        <div className="w-full bg-gray-200 rounded h-2 mt-2">
                            <div
                                className="h-2 bg-blue-500 rounded"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
