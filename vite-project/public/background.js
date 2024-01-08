chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
    // Perform initial setup or state initialization
  });
  
  // Example of a simple message listener
  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
      console.log('Message received', message);
      // Handle messages sent from other parts of your extension
    }
  );
  
  // Other event listeners and logic as needed
  