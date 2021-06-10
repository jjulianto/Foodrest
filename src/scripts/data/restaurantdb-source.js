import API_ENDPOINT from '../globals/api-endpoint';

class restaurantData {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.restaurantList);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}
export default restaurantData;
