export function checkInLikes(likes, postId) {
    const postIndex = likes.likes.findIndex(post => post._id === postId)
    return postIndex;
}