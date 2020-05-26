export default class InfoWindow {
    attachButton(passInObj, name, cb) {
        let button = document.createElement("button");
        button.innerText = name;
        button.addEventListener("click", () => {
            cb(passInObj)
        });
        return button;
    }
}

function attachAnchor(passInObj, name, cb) {
    let anchor = document.createElement("a").setAttribute("href", "./lakePage.html");
    anchor.innerText = name;
    anchor.addEventListener("click", () => {
        cb(passInObj)
    });
    return button;
}

