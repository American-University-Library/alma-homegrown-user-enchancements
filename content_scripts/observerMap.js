const observerMap = [{
        tabs: ['Manage Item Returns'],
        active: false,
        observer: new MutationObserver(function (mutationList, observer) {
            mutationList.forEach(function (mutation) {
                if (mutation.target.id === 'modalHeader' && mutation.addedNodes[0].data === 'The items destination is:') {
                    document.getElementById('modalHeader').style.color = "red";
                    const hue_routing_alert_img = document.createElement("div");
                    hue_routing_alert_img.className = "hue_routing_alert";
                    var imgURL = chrome.extension.getURL("images/routing_alert.png");
                    const image = document.createElement('img');
                    image.src = imgURL;
                    hue_routing_alert_img.appendChild(image);
                    hue_routing_alert_img.id = "hue_routing_alert_img";
                    document.querySelector("#nextStepPopup").firstElementChild.appendChild(hue_routing_alert_img);
                }
            });
        }),
        targetArg: '.innerContainer',
        config: {
            childList: true,
            subtree: true,
            attributes: false
        },
        observerId: 'routingAlert',
        observerName: 'Routing Alert'
    },
    {
        tabs: ['Manage Item Returns', 'Scan In Items'],
        active: false,
        observer: new MutationObserver(function (mutationList, observer) {
            mutationList.forEach(function (mutation) {
                if (mutation.target.id === 'modalHeader') {
                    if(document.getElementById('confirmationMessageBox')) {
                        const noteList = document.querySelectorAll('#confirmationMessageBox ul li');
                        noteList.forEach(noteEl => {
                            const converter = new markdownLite.Converter();
                            noteEl.innerHTML = converter.makeHtml(noteEl.innerText);
                        });
                    }
                }
            });
        }),
        targetArg: '.innerContainer',
        config: {
            childList: true,
            subtree: true,
            attributes: false
        },
        observerId: 'markdownNotes',
        observerName: 'Markdown Lite In Notes'
    }
];