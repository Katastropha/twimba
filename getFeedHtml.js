import { tweetsData, updateData } from "./data.js";
import { render } from "./render.js";

// ===================================================//

export const getFeedHtml = () => {
  let feedHtml = ``;

  tweetsData.forEach(function (tweet) {
    let likeIconClass = "";
    !tweet.isLiked || (likeIconClass = "liked");

    let retweetIconClass = "";
    !tweet.isRetweeted || (retweetIconClass = "retweeted");

    let repliesHtml = ` 
        <div class="tweet-reply">
            <div class="reply">  
                <div class="img-area-reply">
                    <img src="images/scrimbalogo.png" class="profile-pic">                  
                    <textarea placeholder="Tweet your reply" class="input"></textarea>
                </div>    
                <button class="tweet-reply-btn">Tweet</button>                
            </div>
        </div>           
        `;

    if (tweet.replies.length > 0) {
      tweet.replies.forEach((reply) => {
        repliesHtml += `
<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${reply.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${reply.handle}</p>
                <p class="tweet-text">${reply.tweetText}</p>
            </div>
        </div>
</div>
`;
      });
    }

    feedHtml += `
<div class="tweet" data-id="${tweet.uuid}">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"
                    data-reply="${tweet.uuid}"
                    ></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart ${likeIconClass}"
                    data-like="${tweet.uuid}"
                    ></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet ${retweetIconClass}"
                    data-retweet="${tweet.uuid}"
                    ></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
    <div class="hidden" id="replies-${tweet.uuid}">
        ${repliesHtml}
    </div>   
</div>
`;
  })
 
  return feedHtml;
};

const persistReply = (tweet, id) => {  
  updateData(db => {
  const tweetObj = db.find((tweet) => tweet.uuid === id);
  tweetObj.replies.push(tweet);
  })
  render();
};

// ============================================================//
// ADD REPLY TO TWEET
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("tweet-reply-btn")) {
    const reply = e.target.closest(".reply");
    const value = reply.querySelector(".input").value;
    const id = reply.closest(".tweet").dataset.id;
    if (value) {
      const replyObj = {
        handle: `@scrimba`,
        profilePic: `images/scrimbalogo.png`,
        tweetText: `${value}`,
      };
      persistReply(replyObj, id);
      value === "";
    }
  }
  
});

