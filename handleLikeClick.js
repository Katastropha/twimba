import { tweetsData, updateData } from "./data.js";
import { render } from './render.js'

export const handleLikeClick = (id) => { 
    updateData(db => {
        const targetTweetObj = db.find((tweet) => tweet.uuid === id )
            
        targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++

        targetTweetObj.isLiked = !targetTweetObj.isLiked   
    })
       
    render()
}