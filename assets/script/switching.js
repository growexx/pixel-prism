let defaultComponent = localStorage.getItem('defaultComponent') || 'chatVault';
const componentList = [
    'chatVault',
    'eightPointGrid'
];

function setSelctedComponent() {
    componentList.forEach(function(element, index, array) {
        if(element === defaultComponent) {
            document.getElementById(element).style.display = 'block';
        } else {
            document.getElementById(element).style.display = 'none';
        }
    });
}

function updateDefaultComponent(component) {
    localStorage.setItem('defaultComponent', component);
    defaultComponent = localStorage.getItem('defaultComponent');
    setSelctedComponent();
}