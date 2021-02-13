export function navigationFunctionalities() {
    let navigation = document.querySelector("#navigation");
    let navigationButton = navigation.querySelector('#navigation-button');
    let uList = navigation.querySelector('#navigation-elements');

    let open = "open";


    navigationButton.onclick = () => {
        toggleMenu();
    }

    function toggleMenu() {
        if (uList.className === open) {
            uList.className = "";
            navigationButton.querySelector('span').innerHTML = "menu";
        } else {
            uList.className = open;
            navigationButton.querySelector('span').innerHTML = "close";
        }
    }
}