// Automatically show the popup when the page loads
window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden'); // Display the popup
});

// Close the popup when the "close" button is clicked
document.getElementById('closePopup').addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden'); // Hide the popup
});
