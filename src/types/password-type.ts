import PasswordStrengthTypes from "./password-strength-types";

type PasswordType = {
  site: string;
  password: string;
  strength: PasswordStrengthTypes;
};

export default PasswordType;
