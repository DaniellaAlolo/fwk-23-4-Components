import LoginForm from '../LoginForm';
import { MockLoginProvider } from '../MockLoginProvider.jsx';

export default {
    title: 'Component/LoginForm',
    component: LoginForm,
};

export const Default = () => (
    <MockLoginProvider>
        <LoginForm />
    </MockLoginProvider>
);