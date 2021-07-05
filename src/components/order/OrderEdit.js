/* eslint-disable react/jsx-props-no-spreading */
import { ArrayInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const OrderEdit = (props) => (
    <Edit title="Edit order" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
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
    </Edit>
);
export default OrderEdit;
