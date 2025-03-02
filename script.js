document.addEventListener("DOMContentLoaded", function() {
    const loadingElement = document.getElementById('loading');
    const loadingTexts = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let index = 0;

    function updateLoadingText() {
        loadingElement.textContent = loadingTexts[index];
        index = (index + 1) % loadingTexts.length;
    }

    // Update the loading text every 500 milliseconds
    setInterval(updateLoadingText, 750);
});
