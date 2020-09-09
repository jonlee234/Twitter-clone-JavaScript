export const ADD_LIKE = 'ADD_LIKE'
export const AddLike = (userName, post) => {
    console.log(userName)
    return {
        type: ADD_LIKE,
        obj: post,
        like: userName
    }
}
