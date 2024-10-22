import { body } from "express-validator";

export const registrationValidator = [
  body("password_hash", "your password is not secure enough").isLength({
    min: 4,
  }),
  body("name", "name cant be blank").isLength({ min: 1 }),
  body("last_name", "second name cant be blank").isLength({ min: 1 }),
  body("email", "please provide correct email address").isEmail(),
];

export const carAddValidator = [
  body("make", "make field cant be blank").isLength({ min: 1 }),
  body("model", "model field cant be blank").isLength({ min: 1 }),
  body("year", "year field cant be blank").isLength({ min: 1 }),
  body("milage", "milage field cant be blank").isLength({ min: 1 }),
  body("regnumber", "regnumber field cant be blank").isLength({ min: 1 }),
];
