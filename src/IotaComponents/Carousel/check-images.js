/* eslint-disable */
// set propertie isDl = true after download successful
const onDownload = (itemArray, check, setItemArray, id) => {

  const tempArray = [...typeof itemArray === 'object' ? itemArray : []];
  tempArray.forEach((elem) => {
    if (elem.id === id) {
      elem.isDl = true;
    }
  });
  setItemArray({
    images: tempArray,
    setNext: check(tempArray),
  });
};

// check if at least 1 img with propertie isDl = true
const checkDownloaded = (itemArray) => {
  return itemArray.filter((elem) => elem.isDl).length >= 1;
};

// check if nb of selected image match the param
const checkSelected = (itemArray, nbToSelect) => {
  return itemArray.filter((elem) => elem?.isSet).length >= nbToSelect;
};

/** drag and drop check */

// if must be use only once
const checkItemIsSolo = (content, answers) => { // step data
  // verif si n titres distribues
  // et pas 2 fois les meme
  const dropped = [];
  const nbNotDropped = [];
  // a faire x le nombre fois qu'il y a de var par element/content/fields
  content?.fields?.forEach(dragItem => {
    answers?.filter(item => {
      if (item.targetkey.includes(dragItem.key)) {
        if (item.targetDropped) {
          // check if must be use only once
          if (item.targetDropped[dragItem.key] !== null &&
            dropped.filter(dropElem => dropElem === item.targetDropped[dragItem.key]).length === 0
          ) {
            // console.log("NOT IN TABLE", item.targetDropped[dragItem.key])
            dropped.push(item.targetDropped[dragItem.key]);
          }
        }
        return item.targetDropped ? item.targetDropped[dragItem] === null : false;
      }
    });
  });
  // TODO : true, false //  il manquerait un set de question ?
  // console.log("nbNotDropped", nbNotDropped)
  // console.log("dropped", dropped)
  // console.log("CHECK", nbNotDropped?.length === 0, dropped?.length === answers.length)
  return nbNotDropped?.length === 0 && dropped?.length === answers.length;
}

// TODO dev if can be more than one distributed

/** input check */
const checkInputFilled = (itemArray) => {
  const tempCheck = itemArray?.filter(item => {
    const tempItem = item.inputs?.filter(input => {
      return !input.value || input.value === ''
    });
    return tempItem?.length > 0;
  });
  return tempCheck?.length > 0 ? false : true;
}

export { 
  onDownload, 
  checkDownloaded, 
  checkSelected,
  /** drag and drop check */
  checkItemIsSolo,
  /** input check */
  checkInputFilled,
};
