// Show the popup automatically when the page loads
window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden'); // Display the popup
});

// Close the popup
const closePopup = document.getElementById('closePopup');
closePopup.addEventListener('click', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden'); // Hide the popup when the close button is clicked
});
