type ItemType = string|number
export function binarySearch(arr: ItemType[], val: ItemType): number {
  let maxIndex = arr.length - 1, minIndex = 0, midd
  let middIndex = Math.floor(maxIndex / 2 + minIndex / 2)
  
  while(maxIndex > middIndex) {
    midd = arr[middIndex]
    
    if(midd === val)
      return middIndex
    
    if(midd < val)
      minIndex = middIndex + 1
    else
      maxIndex = middIndex - 1
  
    middIndex = Math.floor(maxIndex / 2 + minIndex / 2)
  }
  return arr[middIndex] === val ? middIndex : -1
}