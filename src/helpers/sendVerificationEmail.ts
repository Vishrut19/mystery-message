import { resend } from "@/libs/resend";
import VerificationEmail from "../../emails/verificationEmails";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: email,
      subject: "Mystery Message | Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "Verification Email Sent Successfully" };
  } catch (emailError) {
    console.error("Error Sending Verification Email", emailError);
    return { success: false, message: "Verification Email Failed" };
  }
}
