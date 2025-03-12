import Toast from "@/components/Toast";
import PasswordStrengthTypes from "@/types/password-strength-types";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { useAppDispatch } from "./store-hooks";
import { setPassword } from "@/store/passwords/passwordsSlice";

const usePasswordGenerator = () => {
  const dispatch = useAppDispatch();
  const passwordGenerator = (strength: PasswordStrengthTypes, site: string) => {
    const charSets = {
      Ironclad:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      Titanium:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
      Uncrackable:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/{}[]|",
    };

    const lengths = {
      Ironclad: 12,
      Titanium: 16,
      Uncrackable: 20,
    };

    const chars = charSets[strength];
    const length = lengths[strength];
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    copy(password);
    dispatch(
      setPassword({
        password,
        strength,
        site,
      })
    );
    toast(Toast, { className: "w-fit p-0 !bg-transparent text-white" });
  };

  return { passwordGenerator };
};

export default usePasswordGenerator;
