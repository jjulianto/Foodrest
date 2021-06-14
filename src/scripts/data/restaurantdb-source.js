import API_ENDPOINT from '../globals/api-endpoint';

class restaurantData {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.restaurantList);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}
export default restaurantData;
