"use client";
import React from "react";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import toast from "react-hot-toast";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import useLoginModal from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";

type Props = {};

const RegisterModal = (props: Props) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    await axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created successfully");
        registerModal.onClose();
        loginModal.onOpen();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to create account");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toggle = React.useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-3 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        Icon={FcGoogle}
        onClick={() => {
          signIn("google");
        }}
      />
      <Button
        outline
        label="Continue with GitHub"
        Icon={FaGithub}
        onClick={() => {
          signIn("github");
        }}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row items-center justify-center gap-2">
          <div>Already have an account</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
