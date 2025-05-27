(function () {
  const chatbotElement = document.createElement("div");
  chatbotElement.id = "chatbot";
  document.body.append(chatbotElement);

  // initially load chatbot script
  const chatbot = document.createElement("script");
  chatbot.src = "/chatbot/chatbot.umd.js";
  chatbot.type = "module";
  document.head.append(chatbot);
})();
