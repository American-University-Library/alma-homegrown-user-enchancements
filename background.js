chrome.tabs.onUpdated.addListener(function(id, changes, tab) {
    if (tab.url.includes("alma.exlibrisgroup.com/mng/action/home.do")) {
        chrome.tabs.sendMessage(id, {
            greeting: "alma_tab_updated",
            tab: {title: tab.title}
        });
    }
});

for (let i = 0; i < observerMap.length; i++) {
    const { observerId } = observerMap[i];
        chrome.storage.sync.get([observerId], function (setting) {
            if (!setting.hasOwnProperty(observerId)) {
                chrome.storage.sync.set({
                    [observerId]: true
                }, function () {});
            }
        });
}