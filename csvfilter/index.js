const csv = require('csv-parser');
const fs = require('fs');
var moment = require('moment');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const timeIntervalArray = [3, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 25, 30, 60];
const weekDefinitions = [{ name: 'week1', startDateTime: '10.06.2019 00:00', endDateTime: '16.06.2019 23:59' },
{ name: 'week2', startDateTime: '17.06.2019 00:00', endDateTime: '23.06.2019 23:59' },
{ name: 'week3', startDateTime: '24.06.2019 00:00', endDateTime: '30.06.2019 23:59' },
{ name: 'week4', startDateTime: '01.07.2019 00:00', endDateTime: '07.07.2019 23:59' },
{ name: 'weekall', startDateTime: '10.06.2019 00:00', endDateTime: '07.07.2019 23:59' }]
weekDefinitions.forEach(_weekDefinition => {
  timeIntervalArray.forEach(_timeInterval => {
    createJsontimeInterval(_timeInterval, _weekDefinition);
    createCsvTimeInterval(_timeInterval, _weekDefinition);
  });
});
function createJsontimeInterval(timeInterval, weekDefinition) {
  let tempRow = null;
  let resultRows = [];
  fs.createReadStream('./csv_files/t0001.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (weekDefinition) {
        if (moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').isSameOrBefore((moment(weekDefinition.endDateTime, 'DD.MM.YYYY HH:mm:ss'))) &&
          moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').isSameOrAfter((moment(weekDefinition.startDateTime, 'DD.MM.YYYY HH:mm:ss')))) {

          if (!tempRow) {
            tempRow = row;
            resultRows.push(row);
          }
          else {
            if (moment(tempRow.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() - moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() > timeInterval * 60 * 1000) {
              tempRow = row;
              resultRows.push(row);
            }
          }
        }
      } else {
        if (!tempRow) {
          tempRow = row;
          resultRows.push(row);
        }
        else {
          if (moment(tempRow.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() - moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() > timeInterval * 60 * 1000) {
            tempRow = row;
            resultRows.push(row);
          }
        }
      }

    })
    .on('end', () => {
      console.log('JSON file successfully processed for ' + timeInterval.toString() + ' mins.');
      if (weekDefinition) {
        fs.writeFile('./out_files/' + weekDefinition.name + '/' + timeInterval.toString() + '.json', JSON.stringify(resultRows), 'utf8', jsoncomplete);
      } else {
        fs.writeFile('./out_files/' + timeInterval.toString() + '.json', JSON.stringify(resultRows), 'utf8', jsoncomplete);
      }
    });
}
function jsoncomplete() {
  console.log('JSON operation done...');
}
function createCsvTimeInterval(timeInterval, weekDefinition) {
  let tempRow = null;
  let resultRows = [];
  fs.createReadStream('./csv_files/t0001.csv')
    .pipe(csv())
    .on('data', (row) => {
      if (weekDefinition) {
        if (moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').isSameOrBefore((moment(weekDefinition.endDateTime, 'DD.MM.YYYY HH:mm:ss'))) &&
          moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').isSameOrAfter((moment(weekDefinition.startDateTime, 'DD.MM.YYYY HH:mm:ss')))) {
          if (!tempRow) {
            tempRow = row;
            resultRows.push(row);
          }
          else {
            if (moment(tempRow.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() - moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() > timeInterval * 60 * 1000) {
              tempRow = row;
              resultRows.push(row);
            }
          }
        }
      } else {
        if (!tempRow) {
          tempRow = row;
          resultRows.push(row);
        }
        else {
          if (moment(tempRow.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() - moment(row.Zaman, 'DD.MM.YYYY HH:mm:ss').valueOf() > timeInterval * 60 * 1000) {
            tempRow = row;
            resultRows.push(row);
          }
        }
      }

    })
    .on('end', () => {
      console.log('CSV file successfully processed for ' + timeInterval.toString() + ' mins.');
      if (weekDefinition) {
        const csvWriter = createCsvWriter({
          path: './out_files/' + weekDefinition.name + '/' + timeInterval.toString() + '.csv',
          header: Object.keys(resultRows[0])
        });
        csvWriter.writeRecords(resultRows) // returns a promise
          .then(() => {
            console.log('...Done');
          });
      } else {
        const csvWriter = createCsvWriter({
          path: './out_files/' + timeInterval.toString() + '.csv',
          header: Object.keys(resultRows[0])
        });
        csvWriter.writeRecords(resultRows) // returns a promise
          .then(() => {
            console.log('...Done');
          });
      }
    });
}
