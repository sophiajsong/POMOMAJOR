// JavaScript source code

function openNav() {
    document.getElementById("side_navbar").hidden = false;
}

function closeNav() {
    document.getElementById("side_navbar").hidden = true;
}

function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
        activateTheme(themeSelect.value);
    });
}

initThemeSelector();