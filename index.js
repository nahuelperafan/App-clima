let url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data => {
  console.log(data)
})


// const basicAutocomplete = document.querySelector('#search-autocomplete');
// const data = ['One', 'Two', 'Three', 'Four', 'Five'];
// const dataFilter = (value) => {
//   return data.filter((item) => {
//     return item.toLowerCase().startsWith(value.toLowerCase());
//   });
// };

// new mdb.Autocomplete(basicAutocomplete, {
//   filter: dataFilter
// });