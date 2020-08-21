const createEmployeeRecord = info => {
  const record = {
    firstName: info[0],
    familyName: info[1],
    title: info[2]
    payPerHour: info[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return record;
};

const createEmployeeRecords = array => array.map( employee => createEmployeeRecord(employee))

const createTimeInEvent = (employee, dateStamp) => {
  employee.timeInEvents.push({
    type: "TimeIn",
    date: dateStamp.split(' ')[0]
    hour: parseInt(dateStamp.split(' ')[1]),
  });
  return employee
};

const createTimeOutEvent = (employee, dateStamp) => {
  employee.timeOutEvents.push({
    type: "TimeOut",
    date: dateStamp.split(' ')[0]
    hour: parseInt(dateStamp.split(' ')[1]),
  });
  return employee 
};

const hoursWorkedOnDate = (employee, date) => {
  let timeIn = employee.timeInEvents.find( e => e.date === date)
  let timeOut = employee.timeOutevents.find( e => e.date === date)
  let hours = parseInt(timeOut.hour = timeIn.hour)/100
  return hours 
}

const wagesEarnedOnDate = (employee, date) => {
  return parseInt(hoursWorkedOnDate(employee, date) * employee.payPerHour);
};

const allWagesFor = employee => {
  const dates = employee.timeInEvents.map(e => e.date);
};