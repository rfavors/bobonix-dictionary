import words from '../words.json'

export default function Home() {
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '1rem' }}>
        The Bobonix Dictionary
      </h1>
      <p style={{ fontStyle: 'italic', color: '#555', marginBottom: '2rem' }}>
        Hustle meets language. The evolving slang of creative entrepreneurs.
      </p>
      <ul>
        {words.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{entry.word}</span>: {entry.meaning}
            <br />
            <span style={{ color: '#888' }}><i>{entry.example}</i></span>
          </li>
        ))}
      </ul>
    </div>
  )
}
