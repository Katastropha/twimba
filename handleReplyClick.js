
// REPLY
export const handleReplyClick = (replyId) => {
    document.getElementById(`replies-${replyId}`).classList.toggle('hidden')
}