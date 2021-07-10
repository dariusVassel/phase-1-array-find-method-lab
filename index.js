function superbowlWin(array){
    let foundItem = (array.find(checker));
    if (foundItem=== undefined) {
    return;
    } else {
      return foundItem.year;
}
  console.log(typeof(foundItem))
  console.log(foundItem);
    
}

function checker(element, index, array){
    return (element.result === "W")
}


superbowlWin(record);