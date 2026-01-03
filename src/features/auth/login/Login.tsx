import { Spin } from "@/components/spin";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/stores";
import LoginForm from "./components/LoginForm";

const Login = () => {
    const { isLoading } = useAuthStore();
    return (
        <Spin spinning={isLoading}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </Spin>
    );
};

export default Login;
