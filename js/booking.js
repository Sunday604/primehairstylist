function sendWhatsApp(event) {
    // Prevent form submission
    if (event) {
        event.preventDefault();
    }

    // Get form values
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let style = document.getElementById("style").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let note = document.getElementById("note").value;

    // Simple validation
    if (!name || !phone || !style || !date || !time) {
        alert("Please fill all required fields.");
        return;
    }

    // WhatsApp number (CHANGE THIS)
    let whatsappNumber = "+2349036277721"; // No +

    // Message format
    let message =
        `Hello 👋%0A` +
        `My name is ${name}.%0A%0A` +
        `I would like to book a hairstyle appointment.%0A%0A` +
        `📌 Hairstyle: ${style}%0A` +
        `📅 Date: ${date}%0A` +
        `⏰ Time: ${time}%0A` +
        `📞 Phone: ${phone}%0A` +
        (note ? `%0A📝 Note: ${note}` : "") +
        `%0A%0AThank you.`;

    // Open WhatsApp
    let url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
}
