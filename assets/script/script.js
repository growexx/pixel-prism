let darkMode = false;
document.getElementById("year").textContent = new Date().getFullYear();
setTimeout(stopMouthAnimation, 7000);

function stopMouthAnimation() {
    document.querySelector(".mouth").style.animation = "none";
}

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
        {primary: '#A1887F', secondary: '#a1887fa8', primaryBtn: '#63514a', secondaryBtn: '#b6a6a0d1'},
        {primary: '#37474F', secondary: '#263238', primaryBtn: '#192932', secondaryBtn: '#72838bad'},
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

function toggleEyes() {
    const passwordInput = document.getElementById("password").value;
    const leftHand = document.getElementById("leftHand");
    const rightHand = document.getElementById("rightHand");
    const leftEye = document.getElementById("leftEye");
    const rightEye = document.getElementById("rightEye");
    const closedEyes = document.getElementById("closedEyes");

    if (passwordInput.length > 0) {
        closedEyes.style.opacity = "1";
        leftHand.style.transform = "translateY(-36px) translateX(39px) rotate(22deg)";
        rightHand.style.transform = "translateY(-36px) translateX(-39px) rotate(-22deg)";
        leftEye.style.opacity = "0";
        rightEye.style.opacity = "0";
    } else {
        closedEyes.style.opacity = "0";
        leftHand.style.transform = "translateY(0) translateX(0) rotate(0)";
        rightHand.style.transform = "translateY(0) translateX(0) rotate(0)";
        leftEye.style.opacity = "1";
        rightEye.style.opacity = "1";
    }
}

function validateEmail() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return false;
    }
    return true;
}

function validateForm(event) {
    if (validateEmail()) {
        window.location.href = "dashboard.html";
    } else {
        event.preventDefault();
    }
}

function logout() {
    window.location.href = "index.html";
}

window.onload = function() {
    const div = document.getElementsByClassName('chat-container card');
    if(div) {
        addMessage('What can I help with?','received');
    }
};

function enterMsg (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage () {
    const messageInput = document.getElementById('messageInput');
    if (messageInput.value.trim() !== '') {
        addMessage(messageInput.value, 'sent');
        setTimeout(() => addMessage("This is a received message", 'received'), 1000); // Simulating response
        messageInput.value = '';
    }
}

function addMessage(text, type) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}