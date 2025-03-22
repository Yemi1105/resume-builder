// Function to generate real-time preview
function generateResume() {
    document.getElementById("nameInput").innerText = document.getElementById("fullName").value || "Full Name";
    document.getElementById("emailInput").innerText = "Email: " + (document.getElementById("email").value || "example@example.com");
    document.getElementById("phoneInput").innerText = "Phone: " + (document.getElementById("phone").value || "123-456-7890");
    document.getElementById("summaryInput").innerText = document.getElementById("summary").value || "Your summary here...";
    document.getElementById("experienceInput").innerText = document.getElementById("experience").value || "Your experience here...";
    document.getElementById("educationInput").innerText = document.getElementById("education").value || "Your education here...";
    document.getElementById("skillsInput").innerText = document.getElementById("skills").value || "Your skills here...";
}

// Function to ensure real-time updates
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fullName").addEventListener("input", generateResume);
    document.getElementById("email").addEventListener("input", generateResume);
    document.getElementById("phone").addEventListener("input", generateResume);
    document.getElementById("summary").addEventListener("input", generateResume);
    document.getElementById("experience").addEventListener("input", generateResume);
    document.getElementById("education").addEventListener("input", generateResume);
    document.getElementById("skills").addEventListener("input", generateResume);
});

// Function to download the resume as a PDF using html2pdf.js
document.getElementById("downloadButton").addEventListener("click", function () {
    const element = document.getElementById("resumePreview");

    html2pdf()
        .from(element)
        .save("Modern_Resume.pdf");
});
