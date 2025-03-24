const componentList = [
    'chatVault',
    'playground',
    'eightPointGrid',
    'modernCss',
    'sassSetup',
    'sassfeatures'
];

function setSelctedComponent(component) {
    componentList.forEach(function(element, index, array) {
        if(element === component) {
            document.getElementById(element).style.display = 'block';
        } else {
            document.getElementById(element).style.display = 'none';
        }
    });
}

function updateDefaultComponent(component) {
    defaultSetup.component = component;
    localStorage.setItem('defaultSetup', JSON.stringify(defaultSetup));
    setSelctedComponent(component);
}