/**
 * Integration point: no email list provider is wired up yet (e.g. Resend
 * audiences, Mailchimp). Swap this body for a real subscribe call once an
 * account/API key is available — the form already handles loading/success/
 * error states around it.
 */
export async function subscribeToUpdates(email: string): Promise<void> {
  void email;
  await new Promise((resolve) => setTimeout(resolve, 700));
}
