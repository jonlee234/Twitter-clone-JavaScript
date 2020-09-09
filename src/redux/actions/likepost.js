export const ADD_LIKE = 'ADD_LIKE'
export const LikePost = (userName, post) => {
    console.log(userName)
    return {
        type: ADD_LIKE,
        obj: post,
        like: userName
    }
}
