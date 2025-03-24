let defaultSetup = {
    component: 'chatVault',
    darkMode: false,
    color: {
        primary: '#8a94d6',
        secondary: '#b3dce6',
        primaryBtn: '#3d488f',
        secondaryBtn: '#85d2e4'
    }
};

window.onload = function() {
    if(!localStorage.getItem('defaultSetup')) {
        localStorage.setItem('defaultSetup', JSON.stringify(defaultSetup));
    }
    defaultSetup = JSON.parse(localStorage.getItem('defaultSetup'));
    updateColor(defaultSetup.color);
    if(defaultSetup.darkMode) {
        document.body.classList.toggle('dark-mode', defaultSetup.darkMode);
    }
    setSelctedComponent(defaultSetup.component);

    const chatContainer = document.getElementsByClassName('chat-container card');
    if(chatContainer) {
        addMessage('What can I help with?','received');
    }
};
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
    defaultSetup.darkMode = !defaultSetup.darkMode;
    document.body.classList.toggle('dark-mode', defaultSetup.darkMode);
    localStorage.setItem('defaultSetup', JSON.stringify(defaultSetup));
}

function changeHeaderFooterColor() {
    const colors = [
        {primary: '#A1887F', secondary: '#a1887fa8', primaryBtn: '#63514a', secondaryBtn: '#b6a6a0d1'},
        {primary: '#37474F', secondary: '#263238', primaryBtn: '#192932', secondaryBtn: '#72838bad'},
        {primary: '#203562', secondary: '#3E588F', primaryBtn: '#4e5d74', secondaryBtn: '#7782a6'},
        {primary: '#5D5B6A', secondary: '#758184', primaryBtn: '#CFB495', secondaryBtn: '#F5CDAA'},
        {primary: '#80BCBD', secondary: '#AAD9BB', primaryBtn: '#D5F0C1', secondaryBtn: '#c3c19e'}
    ];
    let newThemeColor = colors[Math.floor(Math.random() * colors.length)];
    updateColor(newThemeColor);
    defaultSetup.color = newThemeColor;
    localStorage.setItem('defaultSetup', JSON.stringify(defaultSetup));
}

function defaultTheme() {
    const defaultThemeColor = {primary: '#8a94d6', secondary: '#b3dce6', primaryBtn: '#3d488f', secondaryBtn: '#85d2e4'};
    updateColor(defaultThemeColor);
    defaultSetup.darkMode = false;
    document.body.classList.toggle('dark-mode', defaultSetup.darkMode);
    defaultSetup.color = defaultThemeColor;
    localStorage.setItem('defaultSetup', JSON.stringify(defaultSetup));
}

function updateColor(color) {
    document.documentElement.style.setProperty('--primary-color', color.primary);
    document.documentElement.style.setProperty('--secondary-color', color.secondary);
    document.documentElement.style.setProperty('--primary-button-color', color.primaryBtn);
    document.documentElement.style.setProperty('--secondary-button-color', color.secondaryBtn);
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

function enterMsg (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage () {
    const messageInput = document.getElementById('messageInput');
    if (messageInput.value.trim() !== '') {
        addMessage(messageInput.value, 'sent');
        messageInput.value = '';
        const response = await getAIResponse(messageInput.value);
        addMessage(response, 'received');
    }
}

async function getAIResponse(message) {
    const apiKey = '';
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: message }] }]
        })
    });

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
}

function addMessage(text, type) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function runCode() {
    const html = document.getElementById('html').value;
    const css = document.getElementById('css').value;
    const scss = document.getElementById('scss').value;
    Sass.compile(scss, function(result) {
        const combinedCss = css + '\n' + result.text;
        const iframe = document.getElementById('output').contentWindow.document;
        iframe.open();
        iframe.write(`<!DOCTYPE html>
        <html>
        <head>
            <style>${combinedCss}</style>
        </head>
        <body>
            ${html}
        </body>
        </html>`);
        iframe.close();
    });
}