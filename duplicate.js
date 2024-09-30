const duplicateArray = (list) => {
  return [...list, ...list]
}
 

(() => {
  duplicateArray([1,2,3])
})()