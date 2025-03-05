let darkMode = false;
document.getElementById("year").textContent = new Date().getFullYear();

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
}

function toggleProfileMenu() {
    document.getElementById('profileMenu').classList.toggle('active');
    let parentDiv = document.getElementById("sidebar");
    console.log(parentDiv);
}

function toggleSubmenu(element) {
    element.classList.toggle('open');
    let submenu = element.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    }
}

function toggleSetting() {
    document.getElementById('optionsMenu').classList.toggle('show-options');
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
}

function changeHeaderFooterColor() {
    const colors = [
        {primary: '#A1887F', secondary: '#a1887fa8', primaryBtn: '#a1887f', secondaryBtn: '#b6a6a0d1'},
        {primary: '#37474F', secondary: '#263238', primaryBtn: '#37474f', secondaryBtn: '#72838bad'},
        {primary: '#203562', secondary: '#3E588F', primaryBtn: '#4e5d74', secondaryBtn: '#7782a6'},
        {primary: '#5D5B6A', secondary: '#758184', primaryBtn: '#CFB495', secondaryBtn: '#F5CDAA'},
        {primary: '#80BCBD', secondary: '#AAD9BB', primaryBtn: '#D5F0C1', secondaryBtn: '#c3c19e'}
    ];
    let newTheme = colors[Math.floor(Math.random() * colors.length)];
    document.documentElement.style.setProperty('--primary-color', newTheme.primary);
    document.documentElement.style.setProperty('--secondary-color', newTheme.secondary);
    document.documentElement.style.setProperty('--primary-button-color', newTheme.primaryBtn);
    document.documentElement.style.setProperty('--secondary-button-color', newTheme.secondaryBtn);
}

function defaultTheme() {
    const defaultTheme = {primary: '#8a94d6', secondary: '#b3dce6', primaryBtn: '#3d488f', secondaryBtn: '#85d2e4'};
    document.documentElement.style.setProperty('--primary-color', defaultTheme.primary);
    document.documentElement.style.setProperty('--secondary-color', defaultTheme.secondary);
    document.documentElement.style.setProperty('--primary-button-color', defaultTheme.primaryBtn);
    document.documentElement.style.setProperty('--secondary-button-color', defaultTheme.secondaryBtn);
    darkMode = false;
    document.body.classList.toggle('dark-mode', darkMode);
}

function toggleSubmenu(element) {
    element.classList.toggle('open');
    let submenu = element.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
    }
}