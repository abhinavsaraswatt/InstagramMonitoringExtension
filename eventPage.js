chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "makeExtAccessible") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.pageAction.show(tabs[0].id);
    });
  }

  if (request.todo == "addCollectedFollowers") {
    chrome.storage.sync.set({ igFollowers: request.addFollowers }, function () {
      var notifOptions = {
        type: "basic",
        iconUrl: "india.png",
        title: "Followers Added",
        message: `You have added ${request.addFollowers.length} followers!`,
      };
      chrome.notifications.create("followersAddedNotif", notifOptions);
    });
  }

  if (request.todo == "addCollectedPostLikes") {
    chrome.storage.sync.set({ igPostLikes: request.addLikes }, function () {
      var notifOptions = {
        type: "basic",
        iconUrl: "india.png",
        title: "Post Likes Added",
        message: `You have added ${request.addLikes.length} likes!`,
      };
      chrome.notifications.create("postLikesAddedNotif", notifOptions);
    });
  }
});
