function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    if (!fileInput.files.length) {
        alert("Please select a file");
        return;
    }
    
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    
    fetch("http://localhost:5000/detect", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerHTML = 
            `<p><strong>Result:</strong> ${data.isDeepfake ? "Deepfake Detected" : "No Deepfake Detected"}</p>
            <p><strong>Confidence:</strong> ${data.confidence}%</p>`;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("result").innerHTML = "Error processing file.";
    });
}
