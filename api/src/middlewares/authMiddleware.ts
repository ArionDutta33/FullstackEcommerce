import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    //decode jwt
    const decoded = jwt.verify(token, "secret");
    if (typeof decoded !== "object" || !decoded?.userId) {
      return res.status(400).json({ error: "Invalid token" });
    }
    req.userId = decoded.userId;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ error: "Access Denied" });
  }
}

export async function verifySeller(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "Access denied" });
  }
  try {
    //decode jwt
    const decoded = jwt.verify(token, "secret");
    if (typeof decoded !== "object" || decoded?.userId) {
      return res.status(400).json({ error: "Access denied" });
    }
    if (decoded.role !== "seller") {
      return res
        .status(400)
        .json({ error: "You don't have access, not a seller" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Access Denied" });
  }
}
