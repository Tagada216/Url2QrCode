async function getCurrentTabUrl() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab.url;
}

function generateQRCode(url) {
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    url
  )}`;

  document.getElementById("qrCodeImage").src = qrCodeUrl;
}

document.addEventListener("DOMContentLoaded", async function () {
  const url = await getCurrentTabUrl();
  generateQRCode(url);
});
