// src/features/auth/LoginForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas";

export type LoginFormValues = {
  email: string;
  password: string;
};

interface LoginFormProps {
  onSubmit: (data: LoginFormValues) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const handleFormSubmit = (data: LoginFormValues) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} aria-label="login-form">
      <input
        placeholder="Email"
        aria-label="email"
        {...register("email")}
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Password"
        aria-label="password"
        {...register("password")}
      />
      {errors.password && <p role="alert">{errors.password.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
