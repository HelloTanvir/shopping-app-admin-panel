export default {
    login: ({ username, password }) => {
        const request = new Request(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ email: username, password }),
            credentials: 'include',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.message);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', true);
            });
    },
    logout: () => {
        const request = new Request(`${process.env.REACT_APP_API_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then((response) => response.json())
            .then(({ message }) => {
                console.log(message);
                localStorage.removeItem('token');
                localStorage.removeItem('permissions');
            });
    },
    // logout: () => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('permissions');
    //     return Promise.resolve();
    // },
    checkError: (error) => {
        console.log(error);
        const { status } = error;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    },
};
