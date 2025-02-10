import { registerModel } from "../models/auth.js";
export const register = async (req, res) => {
    const {name, email, password, passwordConfirm} = req.body;
    const resg = await registerModel(name, email, password, passwordConfirm);
    console.log(resg);
    res.render('register', { status: resg.status, message: resg.message });
};