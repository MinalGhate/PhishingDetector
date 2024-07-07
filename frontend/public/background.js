// public/background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.message === 'extractGmailEmailContent') {
      const emailContent = request.content;
  
      // Post the email content to your model or handle as needed
      const requestBody = {
        subject: emailContent.subject,
        sender: emailContent.sender,
        body: emailContent.body,
        date: emailContent.date,
      };
  
      // Example: Post the email content to your model
      fetch('http://your-model-api-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(response => response.json())
        .then(data => {
          // Process the response from your model
          console.log('Model response:', data);
        })
        .catch(error => {
          console.error('Error posting email content to model:', error);
        });
  
      // Respond to the content script
      sendResponse({ success: true });
    }
    if (request.message === 'getGmailEmailContent') {
      // Simulate or fetch Gmail email content
      const gmailEmailContent = {
        subject: 'Gmail Subject',
        sender: 'example@gmail.com',
        date: '2023-01-01',
        // Add any other necessary properties
      };
  
      // Respond to the content script with Gmail email content
      sendResponse(gmailEmailContent);
    }
  });



///added rn
// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { action: 'injectReactApp' });
  }
});


//chrome.browserAction.openPopup();
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   if (changeInfo.status === 'complete') {
//     console.log('Tab loaded:', tabId);

//     // Perform actions when the tab finishes loading
//     // For example, execute a content script or perform any desired action
//     chrome.scripting.executeScript({
//       target: { tabId: tabId },
//       files: ['src/components/Homepage.js']
//       // files: ['frontend/src/components/Homepage.js']
//     });
//   }
// });





// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete') {
//     // Send a message to the content script to run the background script
//     chrome.tabs.sendMessage(tabId, { action: 'runBackgroundScript' });
//   }
// });

// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === 'runPythonScript') {
//     // Execute your Python script or processing logic here
//     // For example, you can use fetch to make an API call to your Python script
//     fetch('http://your-python-script-url')
//       .then(response => response.json())
//       .then(data => {
//         // Process the response from your Python script
//         console.log('Python script response:', data);

//         // Show a popup or take any other actions based on the Python script result
//         chrome.extension.getViews({ type: 'popup' }).forEach(popup => {
//           // Example: Show a popup with the Python script result
//           popup.alert('Python script result: ' + JSON.stringify(data));
//         });
//       })
//       .catch(error => {
//         console.error('Error running Python script:', error);
//       });
//   }
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    console.log('Tab loaded:', tabId);

    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentScript.js']
    })
    
  }
});

