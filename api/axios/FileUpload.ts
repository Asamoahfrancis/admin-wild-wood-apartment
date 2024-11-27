import axiosInstance from "./axios-not-auth";

const fileUpload = async (file: File) => {
  try {
    // Create FormData and append the file
    const formData = new FormData();
    formData.append("file", file, file.name); // Attach the file with its name

    // Send POST request to upload the file
    const response = await axiosInstance.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure proper content type for file uploads
      },
      maxBodyLength: Infinity, // Allow large file uploads
    });

    // Return the response
    return response.data;
  } catch (error: any) {
    // Handle and return the error
    console.error("File upload error:", error.response || error.message);
    throw new Error(
      error.response?.data?.message || "An error occurred during file upload"
    );
  }
};

export default fileUpload;
