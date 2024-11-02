import { Router } from "express";
import {
  createUserSchema,
  loginSchema,
  usersTable,
} from "../../db/usersSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validateData } from "../../middlewares/validationMiddleware";
import { db } from "../../db";
import { eq } from "drizzle-orm";

const router = Router();

router.post("/register", validateData(createUserSchema), async (req, res) => {
  try {
    const data = req.cleanBody;
    data.password = await bcrypt.hash(data.password, 10);
    const [user] = await db.insert(usersTable).values(data).returning();
    //@ts-ignore
    delete user.password;

    res.status(201).json({ user });
  } catch (error) {
    res.send(500).send("Something went wrong");
  }
});
router.post("/login", validateData(loginSchema), async (req, res) => {
  try {
    const { email, password } = req.cleanBody;
    const [user] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const mathched = await bcrypt.compare(password, user.password);

    if (!mathched) {
      return res.status(401).json({
        error: "Authentication failed",
      });
    }

    //make jwt token

    const token = jwt.sign({ userId: user.id, role: user.role }, "secret", {
      expiresIn: "30d",
    });
    //@ts-ignore
    delete user.password;
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json(error);
  }
});
export default router;
