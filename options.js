$(function () {
  chrome.storage.sync.get("igFollowers", function (strg) {
    for (let i = 0; i < strg.igFollowers.length; i++) {
      console.log(strg.igFollowers[i]);
      console.log("hi");
      $("#followers-list").append(`<p>${strg.igFollowers[i]}</p>`);
    }
  });
  chrome.storage.sync.get("igPostLikes", function (strg) {
    for (let i = 0; i < strg.igPostLikes.length; i++) {
      console.log(strg.igPostLikes[i]);
      console.log("hi");
      $("#likes-list").append(`<p>${strg.igPostLikes[i]}</p>`);
    }
  });
});
