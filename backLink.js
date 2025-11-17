// backLink.js
document.addEventListener("DOMContentLoaded", function() {
    // Create the back link element
    const backLink = document.createElement("a");
    backLink.href = "index.html";           // Link to homepage
    backLink.textContent = "Back to Home"; // Text for the link
    
    //backLink.style.display = "block";      // Make it appear on its own line -for inline styling-
    //backLink.style.marginTop = "20px";     // Add spacing - css will handle this
    backLink.className = "back-link";       // Add CSS class

    // Append the link to the body
    document.body.appendChild(backLink);
});
