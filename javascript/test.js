//testing file



// create connection to sql database
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'hashfortune.com',
	user : 'jzerr718_zerr2',
	password : 'csGeni01',
	database : 'jzerr718_HashFortune',
});
connection.connect(); // Make the connection

/*
connection.on('error', function(err) {
  console.log(err.code + "hi zach"); // 'ER_BAD_DB_ERROR'
});

var username = "ZachB";
connection.query( "SELECT username , AvailablePoints , TotalPoints FROM users WHERE username = ?" ,
[ username ] , function( err , player_name ){

	if( err )
		throw err;
	console.log( player_name );
}
);
*/


console.log(hashtag_current[0].name);
								var currentTime = getCurrentTime();
								connection.query( "UPDATE `investments` SET amount = ? , investorcount = ? , timeInvested = ?  WHERE username = ? AND tagname = ?", [newvalue, currentInvestorCount, currentTime, username, hashtag_current[0].name ],
								function(err, blank) {
									if(err) {
										
										throw err;
									}
									
									
								});
								
								
function getCurrentTime() {
	var now = new Date();
	year = "" + now.getFullYear();
	month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
	day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
	hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
	minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
	second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
	var investTime = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
	return investTime;
}