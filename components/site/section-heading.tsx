export function SectionHeading({
  index,
  id,
  children,
}: {
  index: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-baseline gap-6 border-t border-foreground/15 pt-6">
      <span className="font-mono text-[0.7rem] tracking-widest text-muted-foreground tabular-nums">
        {index}
      </span>
      <h2
        id={id}
        className="font-heading text-3xl font-normal tracking-tight md:text-4xl"
      >
        {children}
      </h2>
    </div>
  )
}
