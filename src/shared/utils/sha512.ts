import { createHash } from "crypto";

export default function sha512(content: string) {
  return createHash("sha512").update(content).digest("hex");
}