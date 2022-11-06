chrome.runtime.sendMessage({ todo: "makeExtAccessible" });

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.todo == "doCollectFollowers") {
    let arrCollected = [];
    console.log("All Set");
    console.log("Start doing, what to do with this page's elements");

    let i = 0;
    document
      .getElementsByClassName("x7r02ix")[0]
      .scrollTo(0, document.getElementsByClassName("x7r02ix")[0].scrollHeight);

    let prevScrollHeight;
    const scrollIntervalFunc = setInterval(() => {
      if (i == 0) {
        document
          .getElementsByClassName("_aano")[0]
          .scrollBy(
            0,
            document.getElementsByClassName("_aano")[0].scrollHeight - 0
          );
      } else {
        document
          .getElementsByClassName("_aano")[0]
          .scrollBy(
            0,
            document.getElementsByClassName("_aano")[0].scrollHeight -
              prevScrollHeight
          );
      }

      console.log(prevScrollHeight);

      if (
        document.getElementsByClassName("_aano")[0].scrollHeight -
          prevScrollHeight ==
        0
      ) {
        clearInterval(scrollIntervalFunc);
        console.log("scroll over!");

        setTimeout(function () {
          let followers =
            document.getElementsByClassName("_aano")[0].firstChild.firstChild
              .children;

          console.log(followers);

          for (let i = 0; i < followers.length; i++) {
            const ele = `${followers[i].outerText.split("\n")[0]}:${
              followers[i].outerText.split("\n")[1]
            }`;
            arrCollected.push(ele);
          }
          chrome.runtime.sendMessage({
            todo: "addCollectedFollowers",
            addFollowers: arrCollected,
          });
        }, 2000);
      }

      prevScrollHeight =
        document.getElementsByClassName("_aano")[0].scrollHeight;
      i = i + 1;
    }, 5000);
  }
});
