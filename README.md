## Create a form that will contain the following fields:
### Stack technologiczny React:17 Node:v16.15.1 npm:8.11.0 TypeScript:4.7.4 ReduxToolkit React Hook Forms
name - dish name (text field) <br/>
preparation_time - preparation time (duration field, would be nice if the input will be formatted like 00:00:00) <br/>
type - dish type (select field with the following options: pizza, soup, sandwich) <br/>
after selecting dish type, conditionally display other fields: <br/>
for pizza: <br/>
no_of_slices - # of slices (number field) <br/>
diameter - diameter (float field) <br/>
for soup: <br/>
spiciness_scale - spiciness scale (1-10) <br/>
for sandwich: <br/> 
slices_of_bread - number of slices of bread required (number field) <br/> 

All fields should be required (fields depending on the dish type should be required conditionally based on what type of dish is selected). <br/>

Data should be submitted via POST request as a JSON to url and the form should support returned validation errors (if any).

Example request:
curl -H 'Content-Type: application/json' -X POST -d '{"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}' url

Example response: <br/>
{ <br/>
"diameter": 33.4, <br/>
"name": "HexOcean pizza", <br/>
"no_of_slices": 4, <br/>
"preparation_time": "01:30:22", <br/>
"type": "pizza",<br/>
"id": 1 <br/>
}
