document.addEventListener('DOMContentLoaded', function () {
    const settingKeys = observerMap.map(observer => observer.observerId);
    chrome.storage.sync.get(settingKeys, function (settings) {
        observerMap.forEach(observer => {
            const div = document.createElement('div');
            div.classList.add('inputGroup');
            const input = document.createElement('input')
            input.type = 'checkbox';
            input.name = observer.observerId;
            input.id = observer.observerId;
            input.checked = settings[observer.observerId];
            const label = document.createElement('label')
            label.innerText = observer.observerName;
            label.setAttribute('for', observer.observerId);
            label.classList.add('inputLabel');
            div.appendChild(input);
            div.appendChild(label)
            document.getElementById('observers').appendChild(div);
        });
    });
    document.getElementById("save_and_close").addEventListener("click", function () {
        save_options(true);
    });
}, false);

/**
 * Save options to chrome.storage
 * @param  {[bool]} close whether to close the page on completion
 */
function save_options(close) {
    const settingBoxes = document.querySelectorAll('#observers div input');
    settingBoxes.forEach(setting => {
        console.log(setting)
        chrome.storage.sync.set({
            [setting.name]: setting.checked
        }, function () {});
    });
    if (close) {
        window.close();
    }
}