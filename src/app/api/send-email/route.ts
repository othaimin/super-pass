import mailer from "@/lib/mailer";
import fs from "fs";
import path from "path";
export async function POST(req: Request) {
  try {
    const { to } = await req.json();
    const origin = req.headers.get("origin") + "/logo.svg" || "";
    console.log(origin);
    let code = "";
    const chars = "0123456789";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      code += chars[randomIndex];
    }
    const templatePath = path.join(
      process.cwd(),
      "src/app/api/send-email/email.html"
    );
    const template = fs
      .readFileSync(templatePath, "utf-8")
      .replace(/{{logo}}/g, origin)
      .replace(/{{code}}/g, code);
    await mailer.sendMail({
      from: `"Super Pass" <${process.env.GMAIL_USER}>`,
      priority: "high",
      to,
      html: template,
      subject: "Email Confirmation",
    });
    return new Response(JSON.stringify({ message: "Success", status: 200 }));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Faild", status: 500 }));
  }
}

// export async function GET() {
//   const templatePath = path.join(
//     process.cwd(),
//     "src/app/api/send-email/email.html"
//   );
//   const template = fs
//     .readFileSync(templatePath, "utf-8")
//     .replace(/{{name}}/g, "User");
//   return new Response(template, {
//     headers: { "Content-Type": "text/html" },
//   });
// }
