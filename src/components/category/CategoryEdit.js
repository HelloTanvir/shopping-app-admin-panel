/* eslint-disable react/jsx-props-no-spreading */
import { ArrayInput, Edit, SimpleForm, SimpleFormIterator, TextInput } from 'react-admin';

const CategoryEdit = (props) => (
    <Edit title="Edit category" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <ArrayInput source="subCategories">
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
export default CategoryEdit;
