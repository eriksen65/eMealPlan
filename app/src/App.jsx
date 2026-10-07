import { useState } from 'react'
import { madplaner, indkoebsliste } from './data'

export default function App() {
  const [valgtId, setValgtId] = useState(madplaner[0].id)
  const plan = madplaner.find((p) => p.id === valgtId)

  return (
    <>
      <header className="hero">
        <h1>eMealPlan</h1>
        <p>Find inspiration til ugens madplan, og få indkøbslisten med det samme.</p>
      </header>
      <main>
        <section aria-labelledby="planer">
          <h2 id="planer">Madplaner</h2>
          <div className="kort-liste">
            {madplaner.map((p) => (
              <button
                key={p.id}
                className={p.id === valgtId ? 'kort valgt' : 'kort'}
                aria-pressed={p.id === valgtId}
                onClick={() => setValgtId(p.id)}
              >
                <strong>{p.navn}</strong>
                <span>{p.beskrivelse}</span>
              </button>
            ))}
          </div>
        </section>
        <section aria-labelledby="uge">
          <h2 id="uge">{plan.navn} – ugens aftensmad</h2>
          <ul className="dage">
            {plan.dage.map((d) => (
              <li key={d.dag}>
                <h3>{d.dag}</h3>
                <p>{d.ret}</p>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="indkob">
          <h2 id="indkob">Indkøbsliste</h2>
          <ul className="indkob">
            {indkoebsliste(plan).map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      </main>
      <footer>© eMealPlan – madplaner til hele familien</footer>
    </>
  )
}
