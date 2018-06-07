function calendar(){
	this.thisYear = date.getFullYear();
	this.thisMonth = date.getMonth();
	this.thisDay = date.getDay();
	this.thisDate = date.getDate();
	// days(thisYear,thisMonth,thisDay,thisDate);
}
calendar.prototype.makeCalendar = function (){
	document.getElementById('root').innerHTML = ""
	let thisYear = this.thisYear;
	let thisMonth = this.thisMonth;
	let thisDay = this.thisDay;
	let thisDate = this.thisDate;
	
	let firstDay = new Date(thisYear, thisMonth, 1).getDay();
	let calendarhd = ['<tr>'];
	let calendarBody = ['<tr>'];
	let limit = firstDay+numberOfDays[thisMonth+1];
	for(let i=0;i<7;i++){
		calendarhd.push(`<th>${day[i]}</th>`);
	}
	for(let i=1,j=1;j<=limit;j++){
		if(j>firstDay){
			calendarBody.push(`<td>${i}</td>`);
			i++;
		}else{
			calendarBody.push(`<td> </td>`);
		}
		if(j%7==0 && j!==1){
			calendarBody.push('</tr> <tr>');
		}
	}
	calendarhd.push('</tr>');
	calendarBody.push('</tr>')
	var table = newElement('table');
    var thead = newElement('thead');
    var tbody = newElement('tbody');
    var header = newElement('hd');
    thead.innerHTML = calendarhd;
    tbody.innerHTML = calendarBody;
    table.appendChild(thead);
    table.appendChild(tbody);
    header.innerHTML = monthName[thisMonth+1];
    document.getElementById('root').appendChild(header);
    document.getElementById('root').appendChild(table);
}

function newElement(tagName) {
      return document.createElement(tagName)
}
function event(startTime,endTime,location,owner,userList,title,eventId){
	this.startTime= startTime;
	this.endTime= endTime;
	this.location= location;
	this.owner= owner;
	this.userList= userList;
	this.title= title;
	this.eventId= eventId;
}
function getPrevMonth(){
	date = new Date(date.getFullYear(), date.getMonth()-1, date.getDate());
	let c = new calendar();
	c.makeCalendar();
}
function getNextMonth(){
	date = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
	let c = new calendar();
	// c.thisMonth = c.thisMonth+1;
	c.makeCalendar();
}
let date = new Date();
const day ={1:'MONDAY',
			2:'TUESDAY',
			3:'WEDNESDAY',
			4:'THURSDAY',
			5:'FRIDAY',
			6:'SATURDAY',
			0:'SUNDAY'};
const numberOfDays = {
	1:31,
	2:28,
	3:31,
	4:30,
	5:31,
	6:30,
	7:31,
	8:31,
	9:30,
	10:30,
	11:30,
	12:31,
};
const monthName = {
	1:"JANUARY",
	2:"FEBRUARY",
	3:"MARCH",
	4:"APRIL",
	5:"MAY",
	6:"JUNE",
	7:"JULY",
	8:"AUGUST",
	9:"SEPTEMBER",
	10:"OCTOBER",
	11:"NOVEMBER",
	12:"DECEMBER",
};
let c = new calendar();
c.makeCalendar();