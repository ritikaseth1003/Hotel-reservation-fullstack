import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

// Verify Token function
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    console.log("No token found, user is not authenticated.");
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      console.log("Token verification failed:", err.message);
      return next(createError(403, "Token is not valid!"));
    }
    req.user = user;  // Attach the user to the request object
    console.log("Token verified, user:", user);  // Be cautious in production about logging user info
    next();
  });
};

// Verify User function
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // Ensure the token verification was successful and req.user exists


    // if (!req.user) {
    //   console.log("User is not authenticated after token verification.");
    //   return next(createError(403, "Token is not valid!"));
    // }

    // console.log("Verifying user. Request user:", req.user);
    if (req.user.id === req.params.id) {  // Compare the user ID from the token with the requested user ID
      // console.log("User is authorized.");
      next();
    } else {
      console.log("User is not authorized.");
      return next(createError(403, "You are not authorized!"));
    }
  });
};

// Verify Admin function
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    // Ensure the token verification was successful and req.user exists
    if (!req.user) {
      console.log("User is not authenticated after token verification.");
      return next(createError(403, "Token is not valid!"));
    }

    console.log("Verifying admin. Request user:", req.user);
    if (req.user.isAdmin) {  // Check if the user has admin privileges
      console.log(req.user.isAdmin)
      console.log("Admin privileges confirmed.");
      next();
    } else {
      console.log("User does not have admin privileges.");
      return next(createError(403, "You are not authorized!"));
    }
  });
};
