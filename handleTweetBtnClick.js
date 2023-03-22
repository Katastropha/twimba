import { render } from './render.js'
import { tweetsData, updateData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const handleTweetBtnClick = () => {
    const tweetInput = document.getElementById('tweet-input')

    !tweetInput.value || (
        updateData(db => {
          db.unshift({
            handle: `@Scrimba`,
            profilePic: `images/scrimbalogo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweetInput.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4()
        })  
        })
        ,
        render(), 
        tweetInput.value = '')         
    }