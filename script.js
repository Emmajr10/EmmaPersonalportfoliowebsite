function chatbotResponse(input) {

input = input.toLowerCase();

if (input.includes("skills")) {
return "My skills include IT troubleshooting, networking, Linux, and Python scripting.";
}

else if (input.includes("certifications")) {
return "I have CompTIA A+ and CompTIA Security+ certifications.";
}

else if (input.includes("projects")) {
return "You can view my projects in the Projects section above.";
}

else if (input.includes("experience")) {
return "I have internship experience supporting IT systems and troubleshooting technical issues.";
}

else {
return "Try asking about my skills, certifications, projects, or experience.";
}

}

function sendMessage() {

let input = document.getElementById("userInput").value;

let response = chatbotResponse(input);

document.getElementById("response").innerText = response;

}

