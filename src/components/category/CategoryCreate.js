/* eslint-disable react/jsx-props-no-spreading */
import { ArrayInput, Create, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const CategoryCreate = (props) => (
    <Create title="Create a category" {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ArrayInput source="subCategories">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
export default CategoryCreate;
