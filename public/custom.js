// Dynamically load OtAutoBlock.js
const otAutoBlock = document.createElement('script');
otAutoBlock.type = 'text/javascript';
otAutoBlock.src = 'https://cookie-cdn.cookiepro.com/consent/5e32d393-d56f-4dae-9f9b-9f4d4931c5f4/OtAutoBlock.js';
document.head.appendChild(otAutoBlock);

// Dynamically load otSDKStub.js with required attributes
const otSDKStub = document.createElement('script');
otSDKStub.type = 'text/javascript';
otSDKStub.src = 'https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js';
otSDKStub.setAttribute('data-document-language', 'true');
otSDKStub.setAttribute('charset', 'UTF-8');
otSDKStub.setAttribute('data-domain-script', '5e32d393-d56f-4dae-9f9b-9f4d4931c5f4');
document.head.appendChild(otSDKStub);

// Define OptanonWrapper function
window.OptanonWrapper = function () {
};
