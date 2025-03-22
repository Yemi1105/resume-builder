// Function to generate real-time preview
function generateResume() {
    document.getElementById("previewName").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("previewTitle").innerText = document.getElementById("title").value || "Your Title";
    document.getElementById("previewEmail").innerText = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("previewPhone").innerText = document.getElementById("phone").value || "+123 456 7890";
    document.getElementById("previewSummary").innerText = document.getElementById("summary").value || "Your summary will appear here...";
    document.getElementById("previewExperience").innerText = document.getElementById("experience").value || "Your experience will appear here...";
    document.getElementById("previewEducation").innerText = document.getElementById("education").value || "Your education details will appear here...";
}

// Function to ensure real-time updates
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").addEventListener("input", generateResume);
    document.getElementById("title").addEventListener("input", generateResume);
    document.getElementById("email").addEventListener("input", generateResume);
    document.getElementById("phone").addEventListener("input", generateResume);
    document.getElementById("summary").addEventListener("input", generateResume);
    document.getElementById("experience").addEventListener("input", generateResume);
    document.getElementById("education").addEventListener("input", generateResume);
});

// Function to download the resume as a PDF using html2pdf.js
document.getElementById("downloadBtn").addEventListener("click", function () {
    const element = document.getElementById("resumePreview");

    html2pdf()
        .from(element)
        .save("Creative_Resume.pdf");
});
