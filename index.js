const record = [
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]




function superbowlWin(record){
  const win = record.find(elem => elem.result === "W")
  return win ? win.year : undefined
  // return win && win.year
  //  if (win){
  //    return win.year
  //  }
}



