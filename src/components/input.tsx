export default function Input({id, title, type="text", catchData=() => {}}: {id: string, title: string, type?: string, catchData: (data: number | string) => void}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value
    if (type === "number") catchData(parseInt(data))
    if (type === "text") catchData(data)
  }
  return (
    <label htmlFor={id} className="flex flex-col w-full px-2">{title}
      <input
        type={type}
        id={id}
       name={id}
        onChange={(e) => handleChange(e)}
       className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg p-2"
      />
    </label>
  )
}