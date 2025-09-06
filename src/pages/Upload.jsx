import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { useState } from "react";
import { Upload as UploadIcon } from "lucide-react";
import Swal from "sweetalert2";

export default function Upload() {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      localStorage.setItem("sheetData", JSON.stringify(parsedData));

      // ✅ Show success alert, then navigate
      Swal.fire({
        title: "Upload Successful!",
        text: `${file.name} uploaded successfully.`,
        icon: "success",
        confirmButtonColor: "#4F46E5", // indigo
        confirmButtonText: "Go to Dashboard",
      }).then(() => {
        navigate("/dashboard");
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Upload Your Data
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Upload your <strong>Excel</strong> or <strong>CSV</strong> file to
          visualize sales, profit, and more in the dashboard.
        </p>

        <label className="cursor-pointer flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50 hover:bg-gray-100 transition">
          <UploadIcon className="w-12 h-12 text-indigo-500 mb-3" />
          <span className="text-gray-600 font-medium">
            Click to select file
          </span>
          <span className="text-sm text-gray-400 mt-1">
            (CSV or Excel format)
          </span>
          <input
            type="file"
            accept=".xlsx,.xls,.csv"
            hidden
            onChange={handleFileUpload}
          />
        </label>

        {fileName && (
          <div className="mt-6 w-full bg-gray-100 rounded-lg p-3 text-center">
            <p className="text-gray-700">
              📂 <strong>{fileName}</strong> ready to upload
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
