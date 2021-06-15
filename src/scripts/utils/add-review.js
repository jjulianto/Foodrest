import API_ENDPOINT from '../globals/api-endpoint';

const addReview = async (data) => {
  const datas = {
    id: data.id,
    name: data.name,
    review: data.review,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '12345',
    },
    body: JSON.stringify(datas),
  };

  await fetch(API_ENDPOINT.addReview, options)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.message);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default addReview;
