(function () {
  // load cookiebot script in order to display the cookie modal
  const optanonWrapper = document.createElement("script");
  optanonWrapper.type = "text/javascript";
  optanonWrapper.innerHTML = `function OptanonWrapper() {
        if(OnetrustActiveGroups.includes('C0003')){
            Chatbot.init({height: 700, width: 400, botName: "TechScout"})
            Chatbot.show();
        }
        if(!OnetrustActiveGroups.includes('C0003')){
            Chatbot.hide();
        }
    }`;

  document.head.prepend(optanonWrapper);

  const cookieBot = document.createElement("script");
  cookieBot.src =
    "https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js";
  cookieBot.type = "text/javascript";
  // use -test as a suffix (e.g. 5e32d393-d56f-4dae-9f9b-9f4d4931c5f4-test) to test the cookie modal locally
  cookieBot.setAttribute(
    "data-domain-script",
    "5e32d393-d56f-4dae-9f9b-9f4d4931c5f4"
  );
  document.head.prepend(cookieBot);

  const otautoBlock = document.createElement("script");
  // use -test as a suffix (e.g. 5e32d393-d56f-4dae-9f9b-9f4d4931c5f4-test) to test the cookie modal locally
  otautoBlock.src =
    "https://cookie-cdn.cookiepro.com/consent/5e32d393-d56f-4dae-9f9b-9f4d4931c5f4/OtAutoBlock.js";
  otautoBlock.type = "text/javascript";
  document.head.prepend(otautoBlock);

  const chatbotElement = document.createElement("div");
  chatbotElement.id = "chatbot";
  chatbotElement.style =
    "position: fixed; bottom: 0; right: 0; z-index: 9999; margin-right: 0; margin-bottom: 20px";
  document.body.append(chatbotElement);

  // initially load chatbot script
  const chatbot = document.createElement("script");
  chatbot.src = "/chatbot-frontend/chatbot.umd.js";
  chatbot.type = "text/javascript";
  document.head.append(chatbot);

  // load chatbot styles
  const chatbotStyles = document.createElement("link");
  chatbotStyles.rel = "stylesheet";
  // TODO: add public source to css file
  chatbotStyles.href = "";
  document.head.append(chatbot);
})();
