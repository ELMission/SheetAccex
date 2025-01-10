 function onOpen() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var user = Session.getActiveUser().getEmail();

   // List of users and their sheet access
   ///  Jan10
   var userAccess = {
   //District1 DL
     'districtl1@missionary.org': ['Plots for district1', 'district1, 'district1area1', 'Plots for district1area1'],
     'district1area1e@missionary.org': ['district1area1', 'Plots for district1area1'],
     'district1area2e@missionary.org': ['district1area2', 'Plots for district1area2'],    
     'district1area3e@missionary.org': ['district1area3', 'Plots for district1area3'],    
     'district1area4e@missionary.org': ['district1area4', 'Plots for district1area4'],   
     'district1area5e@missionary.org': ['district1area5', 'Plots for district1area5'],    
   //District2 DL
     'districtl2@missionary.org': ['Plots for district2', 'district2, 'district2area1', 'Plots for district2area1'],
     'district2area1e@missionary.org': ['district2area1', 'Plots for district2area1'],
     'district2area2e@missionary.org': ['district2area2', 'Plots for district2area2'],    
     'district2area3e@missionary.org': ['district2area3', 'Plots for district2area3'],    
     'district2area4e@missionary.org': ['district2area4', 'Plots for district2area4'],   
     'district2area5e@missionary.org': ['district2area5', 'Plots for district2area5'],    
   //District3 DL
     'districtl3@missionary.org': ['Plots for district3', 'district3, 'district3area1', 'Plots for district3area1'],
     'district3area1e@missionary.org': ['district3area1', 'Plots for district3area1'],
     'district3area2e@missionary.org': ['district3area2', 'Plots for district3area2'],    
     'district3area3e@missionary.org': ['district3area3', 'Plots for district3area3'],    
     'district3area4e@missionary.org': ['district3area4', 'Plots for district3area4'],   
     'district3area5e@missionary.org': ['district3area5', 'Plots for district3area5'],    
   //District4 DL
     'districtl4@missionary.org': ['Plots for district1', 'district1, 'district1area1', 'Plots for district1area1'],
     'district4area1e@missionary.org': ['district4area1', 'Plots for district4area1'],
     'district4area2e@missionary.org': ['district4area2', 'Plots for district4area2'],    
     'district4area3e@missionary.org': ['district4area3', 'Plots for district4area3'],    
     'district4area4e@missionary.org': ['district4area4', 'Plots for district4area4'],   
     'district4area5e@missionary.org': ['district4area5', 'Plots for district4area5'],    
 //STL
     'stl1@missionary.org': ['Plots for stlteachinga', 'stlteachinga, 'STEWARDSHIP'],
   };

  // Admin emails that has access to all sheets (could be APs, Seniors, Mission...)
  var adminEmail = 'missionpresident@churchofjesuschrist.org';'ap@missionary.org';'zl1@missionary.org';'adminemail4missionary.org';'adminemail5';'adminemail6';'adminemail7';'adminemail8'

  // Define a default sheet that should always be visible
  var defaultSheetName = 'Home'; // Replace 'Home' with the actual name of your default sheet
  
   // Iterate through all sheets in the spreadsheet
   var sheets = ss.getSheets();
   for (var i = 0; i < sheets.length; i++) {
 	   var sheet = sheets[i];
 	   var sheetName = sheet.getName();

        // Ensure the default sheet is always visible
    if (sheetName === defaultSheetName) {
      sheet.showSheet();
      continue;
    }

/ Check if the user is the admin
    if (user === adminEmail) {
      // Show all sheets for the admin
      sheet.showSheet();
    } else if (userAccess[user] && userAccess[user].indexOf(sheetName) > -1) {
      // Show the sheet if the user has access
      sheet.showSheet();
    } else if (userAccess[user]) {
      // Hide the sheet if the user does not have access
      sheet.hideSheet();
    } else {
      // Optional: Handle cases where the user is not in the access list
      sheet.hideSheet();
    }
  }
}
