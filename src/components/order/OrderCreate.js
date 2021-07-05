/* eslint-disable react/jsx-props-no-spreading */
import { ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const OrderCreate = (props) => (
    <Create title="Create a order" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="mobile" />
            <TextInput source="address" />
            <ArrayInput source="cartProducts">
                <SimpleFormIterator>
                    <TextInput source="id" />
                    <TextInput source="quantity" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
export default OrderCreate;
