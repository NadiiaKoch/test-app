const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '935b5e5856msh23438ba6f6a471fp1820edjsn0b3bdeb65ceb',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

export const fetchCities = async ( city ) => {
  const normalizedCityName = city.toLowerCase().trim().replace(/ /g, '%');
  const response = await fetch(`https://hotels4.p.rapidapi.com/locations/v3/search?q=${normalizedCityName}&locale=en_US&langid=1033&siteid=300000001`, options1);
  const responseData = await response.json();

  return responseData;
};


export const fetchHotels = async (rid) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '935b5e5856msh23438ba6f6a471fp1820edjsn0b3bdeb65ceb',
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    },
    body: `{"currency":"USD","eapid":1,"locale":"en_US","siteId":300000001,"destination":{"regionId":"${rid}"},"checkInDate":{"day":13,"month":4,"year":2023},"checkOutDate":{"day":14,"month":4,"year":2022},"rooms":[{"adults":2,"children":[]}],"resultsStartingIndex":0,"resultsSize":200,"sort":"PRICE_LOW_TO_HIGH","filters":{"price":{"max":1000,"min":1}}}`
  };
  const response = await fetch('https://hotels4.p.rapidapi.com/properties/v2/list', options);
  const responseData = await response.json();

  // console.log(responseData);

  return responseData;
};

export const loadData = async (city) => {
  const foundCity = await fetchCities(city);
  // console.log('city', foundCity)
  // const arr = foundCity.sr;
  // const rid = arr.find(place => place.type === 'CITY');
  const id = '2621'

  const res = await fetchHotels(id);
  console.log('res', res)

  return res;
}