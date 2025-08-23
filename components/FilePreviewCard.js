export default function FilePreviewCard({ file, onDelete }) {
  return (
    <div className="border rounded-lg p-3 bg-white shadow text-center">
      <div className="h-32 flex items-center justify-center text-gray-500 border rounded mb-2">
        {file.file.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(file.file)}
            alt={file.name}
            className="h-full object-cover rounded"
          />
        ) : (
          <p>Preview not available</p>
        )}
      </div>
      <p className="font-semibold">{file.name}</p>
      <div className="flex justify-center gap-2 mt-2">
        <button className="bg-yellow-400 px-3 py-1 rounded">View</button>
        <button
          onClick={onDelete}
          className="bg-blue-700 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
