import { handleLikeClick } from './handleLikeClick.js'
import { handleRetweetClick } from './handleRetweetClick.js'
import { handleReplyClick } from './handleReplyClick.js'
import { handleTweetBtnClick } from './handleTweetBtnClick.js'

import { render } from './render.js'


document.addEventListener('click', function(e){
    const like = e.target.dataset.like
    const retweet = e.target.dataset.retweet
    const reply = e.target.dataset.reply
    
    !like || handleLikeClick(like)
    !retweet || handleRetweetClick(retweet)
    !reply || handleReplyClick(reply)
    !reply || console.log('reply')
    
    !e.target.id === 'tweet-btn' || handleTweetBtnClick()
})

// ADD THE ABILITY TO REPLY TO A SPECIFIC TWEET


render()

