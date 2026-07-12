export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

/**
 * Integration point: no email service is wired up yet. Swap this body for a
 * real call (e.g. Resend, Formspree) once credentials are available — the
 * form above already handles loading/success/error states around it.
 */
export async function submitContactForm(
  payload: ContactPayload,
): Promise<void> {
  void payload;
  await new Promise((resolve) => setTimeout(resolve, 900));
}
