/* eslint-disable react/jsx-props-no-spreading */
import {
    Datagrid,
    DeleteButton,
    EditButton,
    List,
    // eslint-disable-next-line prettier/prettier
    TextField
} from 'react-admin';

const CategoryList = (props) => {
    const CustomArrayField = ({ record, source }) =>
        source ? (
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
                {record[source]?.map((item, index) => (
                    <li
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${item} ${index}`}
                        style={
                            index !== 0
                                ? {
                                      marginTop: 5,
                                      background: '#E0E0E0',
                                      borderRadius: 20,
                                      padding: '7px 15px',
                                  }
                                : { background: '#E0E0E0', borderRadius: 20, padding: '7px 15px' }
                        }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        ) : null;
    CustomArrayField.defaultProps = { addLabel: true };

    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="title" />
                <CustomArrayField source="subCategories" />
                <EditButton basePath="/categories" />
                <DeleteButton basePath="/categories" />
            </Datagrid>
        </List>
    );
};

export default CategoryList;
