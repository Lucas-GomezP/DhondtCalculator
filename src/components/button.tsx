export default function Button({title, accion=() => {}, disabled}: {title: string, accion:() => void, disabled: boolean}) {
  return (
    <button
      onClick={() => accion()}
      disabled={disabled}
      className="bg-slate-50 border border-slate-300 cursor-pointer hover:bg-slate-200 text-slate-900 text-sm rounded-lg p-2 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
      title={disabled ? "Debe completar todos los campos del ultimo participante" : "Añadir participante"}
    >
      {title}
    </button>
  )
}