import crypto from "crypto";

export const getSalt = () => {
    return crypto.randomBytes(50).toString("base64url").substring(0, process.env.SALT_SIZE);
};

export const hashing = (text, salt) => {
    const hashing = crypto.createHash("sha256");
    return hashing.update(salt + text).digest("base64url");
};  