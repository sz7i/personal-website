/** Renders an address with a soft break after "@" so long addresses wrap cleanly. */
export function EmailText({ email }: { email: string }) {
  const at = email.indexOf("@")
  if (at === -1) return email
  return (
    <>
      {email.slice(0, at + 1)}
      <wbr />
      {email.slice(at + 1)}
    </>
  )
}
