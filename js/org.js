'use strict'

window.addEventListener("load", () => {
    let filter = document.querySelector("#org");
    filter.addEventListener('change', () => {
        let targets = document.querySelectorAll("#items section")
        for (let ii of targets) {
            ii.hidden = true;
            let value = filter.value
            let viewThis = document.querySelectorAll(`.${value}`)
            for (let iii of viewThis) {
                iii.hidden = false;
            }
            if (value == 'all') {
                ii.hidden = false;
            }
        }
    });
});
