
window.addEventListener('message', function (e) {
    const data = e.data;
    if (data === 'openlivechat') {

        const openstyle = document.getElementsByClassName('livechat-box')
        const togglebut = document.getElementsByClassName('open-chat')
        openstyle[0].className = openstyle[0].className.replace(' hidden-livechat-box', '')
        togglebut[0].className += ' hide-button'

        const chatframe = document.getElementById('chatframe')
        chatframe.classList.add('display-iframe')
        chatframe.style.display = "block"
        chatframe.contentWindow.postMessage('openchatframe', '*');

    } else if (data === 'closelivechat') {

        const changestyle = document.getElementsByClassName('livechat-box')
        const toggleopenbut = document.getElementsByClassName('open-chat')
        changestyle[0].className += ' hidden-livechat-box'
        toggleopenbut[0].className = toggleopenbut[0].className.replace(' hide-button', '')

        const chatframe = document.getElementById('chatframe')
        chatframe.classList.remove('display-iframe')
        chatframe.style.display = "none"

    }
});
//userid, payload
let datafromhtml = null
let userid = null
let payload = null
function renderChatElement() {
    var token = datafromhtml
    var linkchat = ""
    const group = document.createElement('div');
    const chatBox = document.createElement('div');
    group.id = "createchat"
    chatBox.id = "iframebox"
    const iframe = document.createElement('iframe');
    group.classList.add('livechat-box');
    group.classList.add('hidden-livechat-box')
    chatBox.classList.add("livechat-detail");
    iframe.setAttribute("frameBorder", "0");
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.borderRadius = '10px'
    iframe.id = "chatframe";
    iframe.style.display = "none"
    chatBox.appendChild(iframe)
    group.appendChild(chatBox);
    return group;


}
function renderButtonElement() {
    const tokenmode = datafromhtml
    var link = ""
    const togglebutton = document.createElement('div')
    const iframetoggle = document.createElement('iframe')
    togglebutton.id = 'createicon'
    iframetoggle.setAttribute("frameBorder", "0");
    iframetoggle.width = "100px";
    iframetoggle.height = "100px";
    iframetoggle.style.borderRadius = '50%'
    iframetoggle.id = "toggleicon";
    togglebutton.classList.add('open-chat')
    togglebutton.appendChild(iframetoggle)


    return togglebutton
}


function chat(cID, syncId, object) {
    if (cID) {
        datafromhtml = cID
        userid = syncId
        payload = object
        const createChatElement = document.querySelector(`#createchat`);
        const createIconElement = document.querySelector(`#createicon`);
        if (!createChatElement) {
            const groupchat = renderChatElement();
            document.body.appendChild(groupchat);
        }
        const getClass = document.getElementsByClassName('livechat-box')
        if (getClass[0].className == 'livechat-box hidden-livechat-box') {
            if (!createIconElement) {
                const togglebut = renderButtonElement();
                document.body.appendChild(togglebut);
            }
            
        }
        chatMode()
        toggleMode()
    }
}
function chatMode() {
    const charFrame = document.getElementById('chatframe')
    if ((userid !== '' && userid !== undefined && userid !== null) && (payload !== undefined && payload !== null)) {
        if (Object.keys(payload).length > 0) {
            let params = Object.keys(payload).map(el => `${el}=${encodeURIComponent(payload[el])}`).join('&')
            charFrame.src = `https://app-livechats.goochat.net/login?token=${datafromhtml}&syncId=${userid}&${params}`

        } else {
            charFrame.src = `https://app-livechats.goochat.net/login?token=${datafromhtml}&syncId=${userid}`
        }

    } else {
        charFrame.src = `https://app-livechats.goochat.net/login?token=${datafromhtml}`
    }
}
function toggleMode() {
    const toggleIcon = document.getElementById('toggleicon')
    if ((userid !== '' && userid !== undefined && userid !== null) && (payload !== undefined && payload !== null)) {
        if (Object.keys(payload).length > 0) {
            let params = Object.keys(payload).map(el => `${el}=${encodeURIComponent(payload[el])}`).join('&')
            toggleIcon.src = `https://app-livechats.goochat.net/mode?tokenmode=${datafromhtml}&syncId=${userid}&${params}`
        } else {
            toggleIcon.src = `https://app-livechats.goochat.net/mode?tokenmode=${datafromhtml}&syncId=${userid}`
        }
    } else {
        toggleIcon.src = `https://app-livechats.goochat.net/mode?tokenmode=${datafromhtml}`
    }
}
