$(function () {
  $("#btnCollectFollowers").click(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { todo: "doCollectFollowers" });
    });
  });

  $("#btnCollectPostLikes").click(function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { todo: "doCollectLikes" });
    });
  });
});
