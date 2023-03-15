async function getCurrentTabUrl() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.url;
}

function generateQRCode(url) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    url
  )}`;
  chrome.tabs.create({ url: qrCodeUrl });
}

document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", async function () {
    const url = await getCurrentTabUrl();
    generateQRCode(url);
  });
});
