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

const createTimeInEvent