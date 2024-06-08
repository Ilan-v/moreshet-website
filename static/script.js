document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const rollButton = document.getElementById("rollButton");
    const loader = document.getElementById("loader");

    rollButton.addEventListener("click", function() {
        nameElement.classList.add("hidden");
        loader.classList.remove("hidden");
        rollButton.disabled = true;
        rollButton.style.backgroundColor = "grey";

        fetch('/roll_name')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    nameElement.textContent = data.name;
                    nameElement.classList.remove("hidden");
                    loader.classList.add("hidden");
                    rollButton.disabled = false;
                    rollButton.style.backgroundColor = "";
                }, 500); // Match the duration of the CSS animation
            });
    });
});