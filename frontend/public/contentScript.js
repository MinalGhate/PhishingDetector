// public/contentScript.js

// Function to extract email content
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'getGmailEmailContent') {
    const emailContent = {
      subject: document.querySelector('h2.hP')?.innerText.trim() || 'Subject',
      sender: document.querySelector('.gD')?.innerText.trim() || 'Sender',
      date: document.querySelector('.g3')?.innerText.trim() || 'Date',
      body: document.querySelector('.a3s')?.innerText.trim() || '',
    };

    // Send the extracted content back to the background script or popup
    sendResponse(emailContent);
  }
});



//added rn
// // content.js
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'injectReactApp') {
//     // Inject a content script that initializes your React app
//     chrome.tabs.executeScript(null, { file: '../src/components/Homepage.js' });
//   }
// });


// const root = document.createElement('div');
// root.id = 'web-sentinel-react-app-root'; // Set a unique and descriptive ID for your root element
// document.body.appendChild(root);

// // Example: Render your React component into the root element
// ReactDOM.render(<Homepage />, root);


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'runBackgroundScript') {
//     // Send a message to the background script to run the Python script
//     chrome.runtime.sendMessage({ action: 'runPythonScript' });
//   }
// });