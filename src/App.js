import { Admin, Resource } from 'react-admin';
import CategoryCreate from './components/category/CategoryCreate';
import CategoryEdit from './components/category/CategoryEdit';
import CategoryList from './components/category/CategoryList';
import OrderCreate from './components/order/OrderCreate';
import OrderEdit from './components/order/OrderEdit';
import OrderList from './components/order/OrderList';
import ProductCreate from './components/products/ProductCreate';
import ProductEdit from './components/products/ProductEdit';
import ProductList from './components/products/ProductList';
import authProvider from './utils/authProvider';
import CustomDataProvider from './utils/CustomDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={CustomDataProvider}>
        <Resource
            name="categories"
            list={CategoryList}
            create={CategoryCreate}
            edit={CategoryEdit}
        />

        <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} />

        <Resource name="orders" list={OrderList} create={OrderCreate} edit={OrderEdit} />
    </Admin>
);

export default App;
