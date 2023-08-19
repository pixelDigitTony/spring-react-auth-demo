import API from "./Api.tsx";

interface RegisterCred {
    username: string;
    password: string;
}

const LoginApi = {
    login: async function(formData: any) {
        try {
            const response = await API.post('/v1/user/login/auth', {
                "username": formData.username,
                "password": formData.password,
            });
            // Handle the response, such as showing a success message or navigating to another page
            console.log('Login Successful:', response.data);
            return response.data
        } catch (error) {
            // Handle errors, such as displaying an error message
            console.error('Login Failed:', error);
        }
    },
    register: async function(user: RegisterCred) {
        const response = await API.post('/v1/user/register/create', user).then(() => {
            return API.post('/user/login/auth', {
                "username": user.username,
                "password": user.password,
            });
        });

        return response.data
    },
    logout: async function() {
        const response = await API.get('/v1/user/logout');
        return response.data
    },
    deleteUser: async function(userId: string) {
        const response = await API.delete('/v1/user/delete/'+ userId);
        return response.data
    },
};

export default LoginApi;