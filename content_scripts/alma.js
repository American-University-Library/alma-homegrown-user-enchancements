/* ----------------------- Messages ------------------------ */

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting === "alma_tab_updated") {
            for (let i = 0; i < observerMap.length; i++) {
                const {
                    observer,
                    tabs,
                    active,
                    targetArg,
                    config,
                    observerId
                } = observerMap[i];
                if (tabs.indexOf(request.tab.title) >= 0 && !active) {
                    chrome.storage.sync.get([observerId], function (setting) {
                        if (setting[observerId]) {
                            const target = document.querySelector(targetArg)
                            observer.observe(document.documentElement, config)
                            observerMap[i].active = true;
                        }
                    });
                } else if (tabs.indexOf(request.tab.title) < 0 && active) {
                    observer.disconnect();
                    observerMap[i].active = false;
                }
            }
        }
    }
);