import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Mlumbi Security Website <noreply@mlumbisecurity.co.za>",
    to: "info@mlumbisecurity.co.za",
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e8e4d8;padding:32px;border:1px solid #c9a347;">
        <h2 style="color:#c9a347;margin-top:0;letter-spacing:0.1em;text-transform:uppercase;font-size:14px;">New Enquiry — Mlumbi Security Services</h2>
        <hr style="border:none;border-top:1px solid #c9a347;opacity:0.3;margin:16px 0;" />
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#c9a347;width:100px;vertical-align:top;">Name</td><td style="padding:8px 0;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#c9a347;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#e8e4d8;">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#c9a347;vertical-align:top;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#c9a347;vertical-align:top;">Message</td><td style="padding:8px 0;white-space:pre-wrap;">${message}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #c9a347;opacity:0.3;margin:24px 0 16px;" />
        <p style="font-size:11px;color:#555;margin:0;">Sent via mlumbisecurity.co.za contact form</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
