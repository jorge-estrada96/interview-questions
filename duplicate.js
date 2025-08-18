// Purpose: Returns a new array with the input array duplicated end-to-end; includes a simple invocation.
const duplicateArray = (list) => {
  return [...list, ...list]
}
 

(() => {
  duplicateArray([1,2,3])
})()