import { useState } from "react";

export default function FileUploadForm({ onUpload }) {
  const [file, setFile] = useState(null);
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;

    onUpload({ file, type, name });
    setFile(null);
    setType("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="   text-lg text-center font-bold text-blue-700">
         Please Add Your Medical Records
      </h2>
      <div className="text-lg text-center font-bold text-blue-700 mb-4">_______________________</div>

      <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border p-2 rounded mb-3">
        <option value="">Select file type</option>
        <option>Lab Report</option>
        <option>Prescription</option>
        <option>Other</option>
      </select>

      <input type="text" placeholder="Enter Name of File..." value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded mb-3" />
      <div className="flex justify-between">
      
        <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} className="hidden" />

        <label htmlFor="fileInput" className="cursor-pointer border px-4 py-2 rounded mb-3  text-center" >
          {file ? file.name : "Choose File"}
        </label>

        <button type="submit" className="cursor-pointer border px-4 py-2 rounded mb-3 text-white   text-center bg-blue-700 hover:bg-blue-800">
        Submit
        </button>

      </div>

     
    </form>
  );
}
