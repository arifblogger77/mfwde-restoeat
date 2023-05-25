import Detail from '../views/pages/detail';
import ListRestaurants from '../views/pages/list-restaurants';

const routes = {
  '/': ListRestaurants,
  '/detail/:id': Detail,
};

export default routes;
