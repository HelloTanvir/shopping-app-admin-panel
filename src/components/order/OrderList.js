/* eslint-disable react/jsx-props-no-spreading */
import {
    Datagrid,
    DeleteButton,
    EditButton,
    List,
    // eslint-disable-next-line prettier/prettier
    TextField
} from 'react-admin';

const OrderList = (props) => {
    const CustomArrayField = ({ record, source }) =>
        source ? (
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
                {record[source]?.map((item, index) => (
                    <li
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${item.id} ${index}`}
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
                        <div>
                            <span
                                style={{ fontSize: '0.975rem', fontWeight: 600, paddingRight: 5 }}
                            >
                                Id:
                            </span>
                            {item.id}
                        </div>
                        <div>
                            <span
                                style={{ fontSize: '0.975rem', fontWeight: 600, paddingRight: 5 }}
                            >
                                Quantity:
                            </span>
                            {item.quantity} unit
                        </div>
                    </li>
                ))}
            </ul>
        ) : null;
    CustomArrayField.defaultProps = { addLabel: true };

    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="email" />
                <TextField source="mobile" />
                <TextField source="paymentMethod" />
                <TextField source="address" />
                <TextField source="createdAt" />
                <CustomArrayField source="cartProducts" />
                <EditButton basePath="/orders" />
                <DeleteButton basePath="/orders" />
            </Datagrid>
        </List>
    );
};

export default OrderList;
