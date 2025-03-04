export type CreateProfileFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
};

export type CreateProfileFormRef = {
  submitForm: () => void;
};
