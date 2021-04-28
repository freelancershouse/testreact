const {processData} = require('./alphaProcessor');

const portfolioData = require('./data/case-alpha/data-from-api.json');
const tableData = require('./data/case-alpha/processed-data.json');

describe('Better Data Processing', () => {

  it('Length to Match with Saved Data', () => {
    const processedData = processData(portfolioData);
    expect(processedData.length).toBe(tableData.length);
  });

  it('Props to be Same for First Objects', () => {
    const processedData = processData(portfolioData);
    expect(Object.keys(processedData[0])).toMatchObject(Object.keys(tableData[0]));
  });

  it('Data to Match', () => {
    const processedData = processData(portfolioData);
    expect(processedData).toMatchObject(tableData);
  });
});
