// script.js

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Create and style the scroll-to-top button
const button = document.createElement('button');
button.innerText = '↑';
button.id = 'scrollToTopButton';
button.onclick = scrollToTop;
document.body.appendChild(button);

// Style the scroll-to-top button
const style = document.createElement('style');
style.textContent = `
    #scrollToTopButton {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #004d99;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
    }
    #scrollToTopButton:hover {
        background-color: #003d80;
    }
`;
document.head.appendChild(style);
