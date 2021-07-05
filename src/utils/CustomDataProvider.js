/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import simpleRestProvider from 'ra-data-simple-rest';
import { fetchUtils } from 'react-admin';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        // eslint-disable-next-line no-param-reassign
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // const { token } = JSON.parse(localStorage.getItem('token'));
    // options.headers.set('authorization', `Bearer ${token}`);
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(process.env.REACT_APP_API_URL, httpClient);

const CustomDataProvider = {
    ...dataProvider,

    create: (resource, params) => {
        let reqData;

        if (resource === 'products') {
            const formData = new FormData();

            for (const param in params.data) {
                // 1 file
                if (param === 'image') {
                    formData.append('image', params.data[param].rawFile);
                    continue;
                }

                // when using multiple files
                if (param === 'images') {
                    params.data[param].forEach((file) => {
                        formData.append('images', file.rawFile);
                    });
                    continue;
                }

                formData.append(param, params.data[param]);
            }

            reqData = formData;
        } else {
            reqData = JSON.stringify(params.data);
        }

        return httpClient(`${process.env.REACT_APP_API_URL}/${resource}`, {
            method: 'POST',
            body: reqData,
        }).then(({ json }) => ({ data: json }));
    },

    update: (resource, params) => {
        let reqData;

        if (resource === 'products') {
            const formData = new FormData();

            for (const param in params.data) {
                // 1 file
                if (param === 'image') {
                    formData.append('image', params.data[param].rawFile);
                    continue;
                }

                // when using multiple files
                if (param === 'images') {
                    params.data[param].forEach((file) => {
                        formData.append('images', file.rawFile);
                    });
                    continue;
                }

                formData.append(param, params.data[param]);
            }
            reqData = formData;
        } else {
            reqData = JSON.stringify(params.data);
        }

        return httpClient(`${process.env.REACT_APP_API_URL}/${resource}/${params.id}`, {
            method: 'PUT',
            body: reqData,
        }).then(({ json }) => ({ data: json }));
    },
};

export default CustomDataProvider;
