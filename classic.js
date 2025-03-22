//generating real time preview
function generateResume() {
    document.getElementById("previewName").innerText = document.getElementById("fullName").value || "Full Name";
    document.getElementById("previewEmail").innerText = "Email: " + (document.getElementById("email").value || "example@example.com");
    document.getElementById("previewPhone").innerText = "Phone: " + (document.getElementById("phone").value || "123-456-7890");
    document.getElementById("previewSummary").innerText = document.getElementById("summary").value || "Your summary here...";
    document.getElementById("previewExperience").innerText = document.getElementById("experience").value || "Your experience here...";
    document.getElementById("previewEducation").innerText = document.getElementById("education").value || "Your education here...";
    document.getElementById("previewSkills").innerText = document.getElementById("skills").value || "Your skills here...";
}

//real time updates
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fullName").addEventListener("input", generateResume);
    document.getElementById("email").addEventListener("input", generateResume);
    document.getElementById("phone").addEventListener("input", generateResume);
    document.getElementById("summary").addEventListener("input", generateResume);
    document.getElementById("experience").addEventListener("input", generateResume);
    document.getElementById("education").addEventListener("input", generateResume);
    document.getElementById("skills").addEventListener("input", generateResume);
});

function downloadResume() {
    const element = document.getElementById("resumeContent");

    html2pdf()
        .from(element)
        .save("Classic_Resume.pdf");
}
