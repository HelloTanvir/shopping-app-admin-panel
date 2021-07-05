/* eslint-disable react/jsx-props-no-spreading */
import {
    Datagrid,
    DeleteButton,
    EditButton,
    ImageField,
    List,
    // eslint-disable-next-line prettier/prettier
    TextField
} from 'react-admin';

const ProductList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ImageField source="image" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="quantity" />
            <TextField source="category" />
            <TextField source="subCategory" />
            <EditButton basePath="/products" />
            <DeleteButton basePath="/products" />
        </Datagrid>
    </List>
);

export default ProductList;
