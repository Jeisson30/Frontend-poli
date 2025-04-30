export function initSidebarMenu() {
    const button = document.getElementById("menuBtn");
    const dropdown = document.getElementById("dropdownMenu");

    if (button && dropdown) {
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            dropdown.classList.toggle("show");
        });

        window.addEventListener("click", function (event) {
            if (!event.target.matches('.menu-button')) {
                let dropdowns = document.getElementsByClassName("dropdown");
                for (let i = 0; i < dropdowns.length; i++) {
                    dropdowns[i].classList.remove('show');
                }
            }
        });
    }
}
