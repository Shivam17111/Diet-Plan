

window.jsPDF = window.jspdf.jsPDF;
function generatePDF() {
    // Collect form data
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const height = document.getElementById('height').value;

    const random = Math.floor(Math.random()*13)+1;

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    const backgroundImage = new Image();
    backgroundImage.src = `Diet${random}.jpg`;
    pdf.addImage(backgroundImage, "JPG", 0 ,0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());

    // Add content to the PDF

    pdf.setFont('Italic');
    pdf.setFontSize(18);
    pdf.text(70, 77, `${name}`);
    pdf.text(70, 87, `${weight} Kgs`);
    pdf.text(70, 97, `${age} Yrs`);
    pdf.text(70, 107, `${height} Ft`);

    // Save the PDF as a downloadable file
    pdf.save(`${name}.pdf`);
}
