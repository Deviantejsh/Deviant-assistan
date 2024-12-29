const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        addMessage('You', message);
        getResponse(message);
        messageInput.value = '';
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getResponse(message) {
    setTimeout(() => {
        addMessage('Jarvis', `You said: "${message}"`);
    }, 1000);
}
