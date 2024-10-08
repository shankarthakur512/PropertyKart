

import bcrypt from 'bcryptjs';
import {User} from '../models/User.model.js';
import { uploadOnCloudinary } from '../utils/cloudnary.js';

export const Register = async (req, res) => {
  const { Name, email, password } = req.body;
  const avatarPath = req.file.path;
  const avatar = await uploadOnCloudinary(avatarPath);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ Name, email, password: hashedPassword  , avatar: avatar.url});

    res.status(201).json({ user: newUser });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ user: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
