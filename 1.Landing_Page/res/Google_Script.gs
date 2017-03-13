// Sourced from: https://github.com/dwyl/html-form-send-email-via-google-script-without-server

var TO_ADDRESS = "lachlan.robertson142@gmail.com"; //My email

function formatMailBody(obj) { // function to spit out all the keys/values from the form in HTML
  var result = "";
  for (var key in obj) { // loop over the object passed to the function
    result += "<h4 style='text-transform: capitalize; margin-bottom: 0'>" + key + "</h4><div>" + obj[key] + "</div>";
    // for every key, concatenate an `<h4 />`/`<div />` pairing of the key name and its value,
    // and append it to the `result` string created at the start.
  }
  return result; // once the looping is done, `result` will be one long string to put in the email body
}

function doPost(e) {

  try {
    record_data(e);

    var mailData = e.parameters; // just create a slightly nicer variable name for the data

    MailApp.sendEmail({
      to: TO_ADDRESS,
      subject: "New Quote Request",
      htmlBody: formatMailBody(mailData)
    });

    return ContentService    // return json success results
          .createTextOutput(
            JSON.stringify({"result":"success",
                            "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) { // if error return this
    Logger.log("An Error Occurred (doPost)");
    Logger.log(error);
    Logger.log("With data:");
    Logger.log(e);
    Logger.log("End of Error");
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * record_data inserts the data received from the html form submission
 * e is the data received from the POST
 */
function record_data(e) {
  try {
    var doc     = SpreadsheetApp.getActiveSpreadsheet();
    var sheet   = doc.getSheetByName('requests'); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    var row     = [ new Date() ]; // first element in the row should always be a timestamp
    // loop through the header columns
    for (var i = 1; i < headers.length; i++) { // start at 1 to avoid Timestamp column
      if(headers[i].length > 0) {
        row.push(e.parameter[headers[i]]); // add data to row
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  }
  catch(error) {
    Logger.log("An Error Occurred (record_data)");
    Logger.log(error);
    Logger.log("With data:");
    Logger.log(e);
    Logger.log("End of Error");
  }
  finally {
    return;
  }

}
