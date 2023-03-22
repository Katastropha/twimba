import { tweetsData, updateData } from "./data.js";
import { render } from './render.js'

export const handleRetweetClick = (id) => {
    updateData(db => {
        const targetTweetObj = db.find((tweet) => tweet.uuid === id)
            
        targetTweetObj.isRetweeted ? targetTweetObj.retweets-- : targetTweetObj.retweets++
    
        targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted  
    })
    
    render()
}