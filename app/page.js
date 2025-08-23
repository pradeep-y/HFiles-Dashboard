"use client";
import { useState } from "react";
import Header from "../components/Header";
import ProfileCard from "../components/ProfileCard";
import FileUploadForm from "../components/FileUploadForm";
import FilePreviewCard from "../components/FilePreviewCard";


export default function Home() {
  const [profile, setProfile] = useState({
    name: "Pradeep Yadav",
    email: "pradeepsyadav@gmail.com",
    phone: "9321814357",
    gender: "Male",
    code: "FH54J7GV76B",
    avatar: "/Pady.png",
  });

  const [files, setFiles] = useState([]);

  const handleProfileSave = async (updatedProfile) => {
    setProfile(updatedProfile);

    // Call API stub
    await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProfile),
    });
  };

  const handleFileUpload = async (newFile) => {
    setFiles((prev) => [...prev, newFile]);

    // Call API stub
    const formData = new FormData();
    formData.append("file", newFile.file);
    formData.append("name", newFile.name);
    formData.append("type", newFile.type);

    await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  const handleFileDelete = async (index) => {
    const fileToDelete = files[index];
    setFiles((prev) => prev.filter((_, i) => i !== index));

    // Call API stub
    await fetch("/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: fileToDelete.name }),
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <ProfileCard profile={profile} onSave={handleProfileSave} />
          <FileUploadForm onUpload={handleFileUpload} />
        </div>

        <hr className="my-6" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {files.length > 0 ? (
            files.map((file, index) => (
              <FilePreviewCard
                key={index}
                file={file}
                onDelete={() => handleFileDelete(index)}
              />
            ))
          ) : (
            <p className="col-span-full text-gray-500 text-center">
              No files uploaded yet. Add files using the form above.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
