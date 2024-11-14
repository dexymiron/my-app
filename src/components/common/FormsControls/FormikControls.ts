import * as Yup from "yup"; // Для валидации
import n from "./FormikCotrols.module.scss";

export const validationSchema = Yup.object().shape({
  newPostText: Yup.string()
    .max(15, "Max 15 symbols")
    .required("🠜 Required Field"),
});

