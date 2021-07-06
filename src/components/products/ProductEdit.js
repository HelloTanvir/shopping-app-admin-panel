/* eslint-disable react/jsx-props-no-spreading */
import {
    Edit,
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

const ProductEdit = (props) => (
    <Edit title="Edit product" {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ImageInput source="image">
                <PreviewImage source="src" />
            </ImageInput>
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="quantity" />
            <TextInput source="category" />
            {/* <ReferenceInput label="Category" source="id" reference="categories">
                <SelectInput optionText="title" />
            </ReferenceInput> */}
            <TextInput label="Sub Category (optional)" source="subCategory" />
            {/* <ReferenceInput label="Sub Category" source="subCategories" reference="categories">
                <SelectInput optionText="0" />
            </ReferenceInput> */}
        </SimpleForm>
    </Edit>
);
export default ProductEdit;
