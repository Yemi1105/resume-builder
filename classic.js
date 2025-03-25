import { enhanceResume } from "./js/api.js";

export function generateResume() {
    document.getElementById("previewName").innerText = document.getElementById("fullName").value || "Full Name";
    document.getElementById("previewEmail").innerText = "Email: " + (document.getElementById("email").value || "example@example.com");
    document.getElementById("previewPhone").innerText = "Phone: " + (document.getElementById("phone").value || "123-456-7890");
    document.getElementById("previewSummary").innerText = document.getElementById("summary").value || "Your summary here...";
    document.getElementById("previewExperience").innerText = document.getElementById("experience").value || "Your experience here...";
    document.getElementById("previewEducation").innerText = document.getElementById("education").value || "Your education here...";
    document.getElementById("previewSkills").innerText = document.getElementById("skills").value || "Your skills here...";
}

export async function enhanceWithAI() {
    try {
        const enhancedBox = document.querySelector(".enhanced-resume-box");
        const enhancedDiv = document.getElementById("enhancedResume");
        const fullName = document.getElementById("fullName").value.trim() || "No Name";
        const email = document.getElementById("email").value.trim() || "No Email";
        const phone = document.getElementById("phone").value.trim() || "No Phone";
        const summary = document.getElementById("summary").value.trim() || "No Summary";
        const experience = document.getElementById("experience").value.trim() || "No Experience";
        const education = document.getElementById("education").value.trim() || "No Education";
        const skills = document.getElementById("skills").value.trim() || "No Skills";

        const userResumeText = `
            Full Name: ${fullName}
            Email: ${email}
            Phone: ${phone}
            Summary: ${summary}
            Experience: ${experience}
            Education: ${education}
            Skills: ${skills}
                    `;

        enhancedBox.style.display = "block";
        enhancedDiv.innerHTML = "<em>Enhancing resume... please wait.</em>";

        const data = await enhanceResume("Please enhance my resume with the following details:\n" + userResumeText);

        let improvedText = "No enhanced text returned.";
        if (data.conversation && Array.isArray(data.conversation)) {
            const assistantMsg = data.conversation.find(msg => msg.role === "assistant");
            if (assistantMsg && assistantMsg.content) {
                improvedText = assistantMsg.content;
            }
        }

        const htmlOutput = marked.parse(improvedText);
        enhancedDiv.innerHTML = htmlOutput;

    } catch (error) {
        console.error("Enhance error:", error);
        alert(error.message || "Could not enhance resume");
    }
}

export function copyEnhancedResume() {
    const enhancedDiv = document.getElementById("enhancedResume");
    const textToCopy = enhancedDiv.innerText; 
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
          alert("Enhanced resume copied to clipboard!");
      })
      .catch(err => {
          console.error("Error copying enhanced resume:", err);
          alert("Failed to copy enhanced resume.");
      });
}

export function downloadResume() {
    const element = document.getElementById("resumeContent");
    html2pdf().from(element).save("Classic_Resume.pdf");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fullName").addEventListener("input", generateResume);
    document.getElementById("email").addEventListener("input", generateResume);
    document.getElementById("phone").addEventListener("input", generateResume);
    document.getElementById("summary").addEventListener("input", generateResume);
    document.getElementById("experience").addEventListener("input", generateResume);
    document.getElementById("education").addEventListener("input", generateResume);
    document.getElementById("skills").addEventListener("input", generateResume);

    document.getElementById("downloadButton").addEventListener("click", function () {
        downloadResume();
    });

    document.getElementById("copyEnhancedBtn").addEventListener("click", copyEnhancedResume);
});

window.generateResume = generateResume;
window.enhanceWithAI = enhanceWithAI;
window.downloadResume = downloadResume;
window.copyEnhancedResume = copyEnhancedResume;
