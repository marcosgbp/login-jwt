import db from "../database/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { promisify } from "util";

const query = promisify(db.query).bind(db); // Convierte db.query en una función con promesas

export const registerModel = async (name, email, password, passwordConfirm) => {
    try {
        const results = await query(`SELECT email FROM users WHERE email = ?`, [email]);

        if (results.length > 0) {
            return { status: "danger", message: "That email is already in use" };
        }
        if (password !== passwordConfirm) {
            return { status:"danger", message: "Passwords do not match" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await query(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword]);

        return { status:"success", message: "User registered successfully" };
    } catch (error) {
        throw error;
    }
};
