/* eslint-disable react/jsx-props-no-spreading */
import {
    Create,
    ImageField,
    ImageInput,
    SimpleForm,
    // eslint-disable-next-line prettier/prettier
    TextInput
} from 'react-admin';

const PreviewImage = ({ record, source }) => {
    if (typeof record === 'string') {
        // eslint-disable-next-line no-param-reassign
        record = {
            [source]: record,
        };
    }
    return <ImageField record={record} source={source} />;
};

const ProductCreate = (props) => (
    <Create title="Create a product" {...props}>
        <SimpleForm>
            <ImageInput source="image">
                <PreviewImage source="src" />
            </ImageInput>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="quantity" />
            <TextInput source="category" />
            {/* <ReferenceInput label="Category" source="category" reference="categories">
                <SelectInput optionText="title" />
            </ReferenceInput> */}
            <TextInput label="Sub Category (optional)" source="subCategory" />
        </SimpleForm>
    </Create>
);
export default ProductCreate;
