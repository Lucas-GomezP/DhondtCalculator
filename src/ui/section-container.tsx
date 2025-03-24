export default function SectionContainer({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <section className="bg-slate-100 p-2 rounded-lg flex flex-col gap-2 ">
      <h2 className="font-bold text-center text-xl">{title}</h2>
      {children}
    </section>
  )
}