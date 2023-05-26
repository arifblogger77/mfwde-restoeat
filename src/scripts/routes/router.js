import Detail from '../views/pages/detail';
import ListFavorites from '../views/pages/list-favorites';
import ListRestaurants from '../views/pages/list-restaurants';

const routes = {
  '/': ListRestaurants,
  '/home': ListRestaurants,
  '/favorite': ListFavorites,
  '/detail/:id': Detail,
};

export default routes;
