document.getElementById("generateBtn").addEventListener("click", async () => {
    const name = document.getElementById("nameInput").value;
    if (name === "") {
        alert("Please enter your name first");
        return;
    }

    const branch = document.getElementById("branch").value;
    if (branch === "select") {
        alert("Please select a branch");
        return;
    }

    const subject = document.getElementById("subjects").value;
    if (subject === "select") {
        alert("Please select a subject");
        return;
    }

    let pdfDoc;
    let url;

    // Adjust the URL based on the selected branch and subject
    if (subject === "All In One") {
        url = `${branch} formats/All.pdf`;
    } else {
        url = `${branch} formats/${subject}.pdf`;
    }

    try {
        const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());
        pdfDoc = await PDFLib.PDFDocument.load(existingPdfBytes);
    } catch (error) {
        alert("Error loading the PDF file. Please check the format files.");
        return;
    }

    const pages = pdfDoc.getPages();

    if (name.length >= 15) {
        for (const page of pages) {
            page.drawText(name, {
                x: 383,
                y: 70,
                size: 23,
                color: PDFLib.rgb(0, 0, 0),
                font: await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman),
            });
        }
    } else if (name.length >= 8) {
        for (const page of pages) {
            page.drawText(name, {
                x: 405,
                y: 70,
                size: 23,
                color: PDFLib.rgb(0, 0, 0),
                font: await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman),
            });
        }
    } else {
        for (const page of pages) {
            page.drawText(name, {
                x: 437,
                y: 70,
                size: 23,
                color: PDFLib.rgb(0, 0, 0),
                font: await pdfDoc.embedFont(PDFLib.StandardFonts.TimesRoman),
            });
        }
    }

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const urlBlob = URL.createObjectURL(blob);
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = urlBlob;
    downloadLink.download = `${subject} - ${name}.pdf`;
    downloadLink.style.display = "block";
    downloadLink.innerText = "Download PDF";
});

document.getElementById("subjects").addEventListener("change", () => {
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.style.display = "none";
});

