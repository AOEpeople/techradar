(function () {
    const chatbotElement = document.createElement("div");
    chatbotElement.id = "chatbot";
    chatbotElement.style =
        "position: fixed; bottom: 0; right: 0; z-index: 9999; margin-right: 0; margin-bottom: 20px";
    document.body.append(chatbotElement);

    // initially load chatbot script
    const chatbot = document.createElement("script");
    chatbot.src = "/chatbot/chatbot.umd.js";
    chatbot.type = "text/javascript";
    chatbot.onload = function() {
        Chatbot.init({height: 700, width: 400, botName: "TechScout"})
        Chatbot.show();
    }
    document.head.append(chatbot);

    // load chatbot styles
    const chatbotStyles = document.createElement("link");
    chatbotStyles.rel = "stylesheet";
    chatbotStyles.href = "/chatbot/style.css";
    document.head.append(chatbotStyles);
})();