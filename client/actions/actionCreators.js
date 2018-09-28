// increment
export const increment = (index) => ({type: 'INCREMENT_LIKES',index })
   
// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}
// remove comment
export const removeComment =  (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}