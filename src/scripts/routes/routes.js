import NowShowing from '../views/pages/now-showing'
import Favorite from '../views/pages/favorite'
import Detail from '../views/pages/detail'

const routes = {
  '/': NowShowing,
  '/now-showing': NowShowing,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
