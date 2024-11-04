//replace extension with gs to run with Google App Script
function myFunction() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var row = 1
  var col = 3
  var flagRun = 1

  //(sheet.getRange(row, col).getValue()!="")

  while(flagRun==1){
    //Logger.log(row);
    var cell = sheet.getRange(row, col);
    var cellVal = sheet.getRange(row, col).getValue();

    Logger.log(`${cellVal} at ${row}, ${col}`)

    //cell.setValue()
    checkTrait(cellVal, row, col)

    //iterate through the table
    if(col == 7){
      Logger.log("Next row")
      col = 3;
      row++
    }else{
      Logger.log("Next Col")
      col++
    }

    //If col 3 of any entry is found empty, end while loop.
    if(sheet.getRange(row, 3).getValue()==""){
      Logger.log(`End of Table found, done.`)
      flagRun=0;
      break;
    }  
  }

};

function checkTrait(currCell, currCellRow, currCellCol){
  Logger.log("ping (Start)")
  var cellName = currCell

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cellOrig = sheet.getRange(currCellRow, currCellCol)
  var row = 41
  var col = 3

  while(sheet.getRange(row, col).getValue()!=""){
      var traitName = sheet.getRange(row, col).getValue();
      //var cell = sheet.getRange(row, col);

      //Logger.log(`Comparing ${traitName} to ${cellName}`)
      if (cellName != traitName){
        //Iterate, if not equal
        if(col == 8){
          col = 3;
          row++;
        }else{
          col++
        }

      //Else, if the cell name is equal to the trait
      }else{
         Logger.log(`${traitName} found`)
         cellOrig.setValue(`${sheet.getRange(row, 1).getValue()} ${col - 3}`)
         break;
      }
  }
  return
};

