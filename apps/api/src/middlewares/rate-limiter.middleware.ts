import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 5,
  message: "Too many requests, please try again after 30 seconds.",
});

export default limiter;
