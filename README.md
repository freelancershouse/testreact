# Alpha Data Process
The project is a Test case for creating and finalized version of Alpha Data using a Function.

## Scenario
Alpha data comes in from API and then processed using function `processData` into a flattened JSON array that can be used to render rows in a table. But the time taken by preparation function is 3000ms for the sample data provided.

The time taken per function call can be seen in the test cases written in `alpha.test.js` and can be executed using the ```npm test``` command.

## Requirement
The very first requirement is to ensure all the tests pass. Including the *failing ones* described under **Better Data Processing** because those are calling a newly made function intended to be a **better and improved** version of `processData`

Also, the API calls have be omitted from the scenario and instead there are two files under data containing both the api response and the finally processed data with which the test case tries to validate data.
- **Data From API**: `data/case-alpha/data-from-api.json`
- **Data after Processing** : `data/case-alpha/processed-data.json`


# Additional Insights

## Case Alpha
The processed data basically is taking 2 data sets (Schools and Members). Where Members can be either Student or Teacher.
A Student has Marks and Teacher IDs.
Using Student data, first we get the best teacher out of the system and later fetch the best School as well.
