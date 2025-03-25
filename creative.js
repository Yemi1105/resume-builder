// creative.js (in the root folder)

import { enhanceResume } from "./js/api.js";

// Function to generate a real-time resume preview
function generateResume() {
    document.getElementById("previewName").innerText = document.getElementById("name").value || "Your Name";
    document.getElementById("previewTitle").innerText = document.getElementById("title").value || "Your Title";
    document.getElementById("previewEmail").innerText = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("previewPhone").innerText = document.getElementById("phone").value || "+123 456 7890";
    document.getElementById("previewSummary").innerText = document.getElementById("summary").value || "Your summary will appear here...";
    document.getElementById("previewExperience").innerText = document.getElementById("experience").value || "Your experience will appear here...";
    document.getElementById("previewEducation").innerText = document.getElementById("education").value || "Your education details will appear here...";
}

// Function to download the resume as a PDF using html2pdf.js
function downloadResume() {
    const element = document.getElementById("resumePreview");
    html2pdf().from(element).save("Creative_Resume.pdf");
}

// Function to enhance resume via AI and display the formatted result using Marked
async function enhanceWithAI() {
    try {
        const enhancedBox = document.querySelector(".enhanced-resume-box");
        const enhancedDiv = document.getElementById("enhancedResume");

        // Gather user inputs
        const name = document.getElementById("name").value.trim() || "No Name";
        const title = document.getElementById("title").value.trim() || "No Title";
        const email = document.getElementById("email").value.trim() || "No Email";
        const phone = document.getElementById("phone").value.trim() || "No Phone";
        const summary = document.getElementById("summary").value.trim() || "No Summary";
        const experience = document.getElementById("experience").value.trim() || "No Experience";
        const education = document.getElementById("education").value.trim() || "No Education";

        // Compose the prompt
        const userResumeText = `
Full Name: ${name}
Title: ${title}
Email: ${email}
Phone: ${phone}
Summary: ${summary}
Experience: ${experience}
Education: ${education}
        `;

        // Reveal the enhanced resume box and show a loading message
        enhancedBox.style.display = "block";
        enhancedDiv.innerHTML = "<em>Enhancing resume... please wait.</em>";

        // Call the AI enhancement endpoint
        const data = await enhanceResume("Please enhance my resume with the following details:\n" + userResumeText);

        // Extract the assistant's message from the conversation array
        let improvedText = "No enhanced text returned.";
        if (data.conversation && Array.isArray(data.conversation)) {
            const assistantMsg = data.conversation.find(msg => msg.role === "assistant");
            if (assistantMsg && assistantMsg.content) {
                improvedText = assistantMsg.content;
            }
        }

        // Parse the markdown using Marked to produce HTML
        const htmlOutput = marked.parse(improvedText);
        enhancedDiv.innerHTML = htmlOutput;

    } catch (error) {
        console.error("Enhance error:", error);
        alert(error.message || "Could not enhance resume");
    }
}

// Attach event listeners for real-time preview and PDF download
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("name").addEventListener("input", generateResume);
    document.getElementById("title").addEventListener("input", generateResume);
    document.getElementById("email").addEventListener("input", generateResume);
    document.getElementById("phone").addEventListener("input", generateResume);
    document.getElementById("summary").addEventListener("input", generateResume);
    document.getElementById("experience").addEventListener("input", generateResume);
    document.getElementById("education").addEventListener("input", generateResume);

    document.getElementById("downloadBtn").addEventListener("click", downloadResume);
});

// Expose functions globally so inline onclick attributes work
window.generateResume = generateResume;
window.enhanceWithAI = enhanceWithAI;
window.downloadResume = downloadResume;
