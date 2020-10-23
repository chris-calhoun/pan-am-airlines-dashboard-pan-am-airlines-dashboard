import FoodData from '../../helpers/data/foodData';
import FoodCard from '../cards/foodCard';

const showFood = (user) => {
  $('#app').html('');
  $('#app').append('<div id="food-btn-area" class="button-area"></div>');
  $('#app').append('<div id="food-area"></div>');

  FoodData.getFoodItems().then((response) => {
    if (response.length) {
      $('#food-area').html('');
      response.forEach((foodItem) => {
        if (foodItem !== undefined) {
          $('#food-area').append(FoodCard.foodCardBuilder(foodItem));
          if (user) {
            if ($('#food-btn-area').is(':empty')) {
              $('#food-btn-area').append(
                '<button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add a Food Item</button>'
              );
            }
          }
        }
      });
    } else {
      $('#food-area').append('<h1>No Food!</h1> <button type="button" class="btn btn-success" id="add-food-btn"><i class="fas fa-plus-circle"></i>Add a Food Item</button>');
    }
  });
};

export default {
  showFood,
};
