// Function to populate subjects dropdown based on selected branch and yearSem

function populateSubjects() {
    const branch = document.getElementById("branch").value;
    const yearSem = document.getElementById("yearSem").value;
    const subjectsDropdown = document.getElementById("subjects");

    // Check if branch and yearSem are valid
    if (!(branch in subjectsData) || !(yearSem in subjectsData[branch])) {
        // Clear subjects dropdown if no data found
        subjectsDropdown.innerHTML = '<option value="select">Select Subject</option>';
        return;
    }

    // Get subjects for selected branch and yearSem
    const subjects = subjectsData[branch][yearSem];

    // Clear previous options
    subjectsDropdown.innerHTML = '<option value="select">Select Subject</option>';

    // Add new options
    subjects.forEach((subject) => {
        const option = document.createElement("option");
        option.text = subject;
        subjectsDropdown.add(option);
    });
}

// Function to populate teacher dropdown based on selected branch
function populateTeachers() {
    const branch = document.getElementById("branch").value;
    const teacherDropdown = document.getElementById("subjectTeacher");

    // Check if branch is valid
    if (!(branch in teachersData)) {
        // Clear teacher dropdown if no data found
        teacherDropdown.innerHTML = '<option value="select">Select Teacher</option>';
        return;
    }

    // Get teachers for selected branch
    const teachers = teachersData[branch];

    // Clear previous options
    teacherDropdown.innerHTML = '<option value="select">Select Teacher</option>';

    // Add new options
    teachers.forEach((teacher) => {
        const option = document.createElement("option");
        option.text = teacher;
        teacherDropdown.add(option);
    });
}

// Event listeners to populate subjects and teachers dropdowns on change
document.getElementById("branch").addEventListener("change", () => {
    populateSubjects();
    populateTeachers();
});

document.getElementById("yearSem").addEventListener("change", () => {
    populateSubjects();
});

document.getElementById("subjects").addEventListener("change", () => {
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.style.display = "none";
});

// Function to draw text on a PDF page
const drawText = async (page, text, x, y, size, color, font) => {
    page.drawText(text, {
        x: x,
        y: y,
        size: size,
        color: PDFLib.rgb(color[0] / 255, color[1] / 255, color[2] / 255),
        font: font,
    });
};

// Function to generate front page PDF
async function generateFrontPage() {

    const branchElement = document.getElementById("branch");
    if (branchElement.value === "select") {
        alert("Please select a branch");
        return;
    }
    const branch = branchElement.options[branchElement.selectedIndex].innerText;

    const sessionElement = document.getElementById("session");
    if (sessionElement.value === "select") {
        alert("Please select a session");
        return;
    }
    const session = sessionElement.options[sessionElement.selectedIndex].innerText;

    const yearSemElement = document.getElementById("yearSem");
    if (yearSemElement.value === "select") {
        alert("Please select a year-semester");
        return;
    }
    const yearSem = yearSemElement.options[yearSemElement.selectedIndex].innerText;

    const teacherElement = document.getElementById("subjectTeacher");
    if (teacherElement.value === "select") {
        alert("Please select a teacher");
        return;
    }
    const teacher = teacherElement.options[teacherElement.selectedIndex].innerText;

    const subjectElement = document.getElementById("subjects");
    if (subjectElement.value === "select") {
        alert("Please select a subject");
        return;
    }
    const subject = subjectElement.options[subjectElement.selectedIndex].innerText;

    const name = document.getElementById("nameInput").value;
    if (name === "") {
        alert("Please enter your name first");
        return;
    }

    const enrollment = document.getElementById("enrollmentInput").value;

    
    let nameX = 437;
    let nameY = 70;
    let branchX = 160;
    let branchY = 265;
    let subjectX = 190;
    let subjectY = 340;
    let subjectFont = 36;
    let branchFont = 30;
    let enrollmentX = 390; 
    let enrollmentY = 40;

    if (name.length >= 15) {
        nameX = 383;
        nameY = 70;
        enrollmentX = 390; 
        enrollmentY = 40;    
    } else if (name.length > 11) {
        nameX = 398;
        nameY = 70;
        enrollmentX = 388; 
        enrollmentY = 40;    
    } else if (name.length >= 8) {
        nameX = 405;
        nameY = 70;
        enrollmentX = 386; 
        enrollmentY = 40;    
    }
    

    if (branch.length > 32) {
        branchX = 30;
        branchY = 265;
        branchFont = 26;
    } else if (branch.length == 30) {
        branchX = 110;
        branchY = 265;
        branchFont = 28;
    } else if (branch.length > 24) {
        branchX = 150;
        branchY = 265;
        branchFont = 28;
    }
    
    if (subject.length > 55) {
        subjectX = 20;
        subjectY = 340;
        subjectFont = 21;
    } else if (subject.length > 50) {
        subjectX = 21;
        subjectY = 340;
        subjectFont = 22;
    } else if (subject.length > 45) {
        subjectX = 39;
        subjectY = 340;
        subjectFont = 24;
    } else if (subject.length > 40) {
        subjectX = 40;
        subjectY = 340;
        subjectFont = 25.5;
    } 
    else if (subject.length > 35) {
        subjectX = 57;
        subjectY = 340;
        subjectFont = 26;
    } 
    else if (subject == "Utilization of Electrical Energy" || subject == "Electronic Devices and Circuits" || subject == "Basics of Information Technology") {
        subjectX = 112; 
        subjectY = 340;
        subjectFont = 28;
    }
    else if (subject.length > 30) {
        subjectX = 74;
        subjectY = 340;
        subjectFont = 28;
    } 

    else if (subject == "Concept of Programming Using C") {
        subjectX = 75; 
        subjectY = 340;
        subjectFont = 30;
    }

    else if (subject.length > 25) {
        subjectX = 93;
        subjectY = 340;
        subjectFont = 30;
    }

    else if (subject.length > 20) {
        subjectX = 130;
        subjectY = 340;
        subjectFont = 33;
    }

    else if (subject == "Software Engineering" || subject == "DotNet Technologies") {
        subjectX = 158; 
        subjectY = 340;
        subjectFont = 34;
    }

    else if (subject.length > 15) {
        subjectX = 165;
        subjectY = 340;
        subjectFont = 35;
    }

    else if (subject == "Neural Networks") {
        subjectX = 160; 
        subjectY = 340;
        subjectFont = 38;
    }

    else if (subject == "Big Data" || subject == "Robotics") {
        subjectX = 220; 
        subjectY = 340;
        subjectFont = 38;
    }
    

    let pdfDoc;
    const url = "format.pdf";

    try {
        const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
        pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
    } catch (error) {
        alert("Error loading the PDF file. Please check the Format.");
        return;
    }

    const pages = pdfDoc.getPages();
    const timesRomanFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman);
    const timesRomanBoldFont = await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRomanBold);

    // Draw the name and other details on the PDF
    for (const page of pages) {
        await drawText(page, `${enrollment}`, enrollmentX, enrollmentY, 21, [0, 0, 0], timesRomanFont);
        await drawText(page, `${name}`, nameX, nameY, 23, [0, 0, 0], timesRomanFont);
        await drawText(page, `${teacher}`, 31, 70, 23, [0, 0, 0], timesRomanFont);
        await drawText(page, `${branch}`, branchX, branchY, branchFont, [255, 0, 0], timesRomanFont);
        await drawText(page, `${yearSem}`, 181, 237, 24, [255, 0, 0], timesRomanFont);
        await drawText(page, `Session - ${session}`, 206, 405, 26, [0, 0, 0], timesRomanFont);
        await drawText(page, `${subject}`, subjectX, subjectY, subjectFont, [61, 104, 180], timesRomanBoldFont);
    }

    // Save the modified PDF
    const pdfBytes = await pdfDoc.save();

    // Create a Blob for the PDF and set up the download link
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const urlBlob = URL.createObjectURL(blob);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = urlBlob;
    downloadLink.download = `${subject} - ${name}.pdf`;
    downloadLink.style.display = "block";
    downloadLink.innerText = "Download PDF";
}

// Event listener for generate button click
document.getElementById("generateBtn").addEventListener("click", async () => {
    await generateFrontPage();
});

const elementsToWatch = [
    "subjects",
    "nameInput",
    "branch",
    "yearSem",
    "session",
    "subjectTeacher",
];

elementsToWatch.forEach((elementId) => {
    document.getElementById(elementId).addEventListener("change", () => {
        const downloadLink = document.getElementById("downloadLink");
        downloadLink.style.display = "none";
    });
});
