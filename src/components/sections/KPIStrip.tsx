export default function KPIStrip({ items }:{ items:{label:string; value:string}[] }) {
  return (
    <section className="rounded-2xl border bg-white p-4">
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {items.map((k,i)=>(
          <li key={i}>
            <div className="text-2xl font-bold">{k.value}</div>
            <div className="text-xs text-gray-500">{k.label}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}