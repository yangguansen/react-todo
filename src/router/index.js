import TodoApp from '../App';
import Test from '../components/testRoute/index';

const routeConfig = [
	{
		path: '/',
		rediect: '/todo/all'
	},
	{
		path: '/todo/:status',
		component: TodoApp
	},
	{
		path: '/test',
		component: Test
	}];

export default routeConfig;