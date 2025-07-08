import words from '../words.json';

export default function Home() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'Roboto, sans-serif', background: '#191970', color: '#fff', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Orbitron, sans-serif', color: '#FF69B4', fontSize: '2.5rem', marginBottom: '1.5rem', letterSpacing: 2 }}>
        🎤 Bobonix Lexicon
      </h1>
      <p style={{ textAlign: 'center', color: '#CCFF00', fontWeight: 'bold', marginBottom: 32 }}>
        Where Retro Meets Now.<br />
        Slang Fusion: Gen X Nostalgia + Gen Z Speed + AI-Age Relevance.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {words.map((item, i) => (
          <div key={i} style={{ background: '#222a4e', borderRadius: 12, boxShadow: '0 2px 10px #0003', padding: '1rem 1.5rem' }}>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', color: '#CCFF00', margin: 0 }}>
              {item.word}
            </h2>
            <div style={{ color: '#FF69B4', margin: '0.5rem 0' }}>
              <strong>Definition:</strong> {item.meaning}
            </div>
            <div style={{ color: '#fff' }}>
              <strong>Roots:</strong> {item.roots}
            </div>
            <div style={{ color: '#1E90FF' }}>
              <strong>Usage:</strong> <em>{item.usage}</em>
            </div>
            <div style={{ color: '#CCFF00' }}>
              <strong>Vibe:</strong> {item.vibe}
            </div>
          </div>
        ))}
      </div>
      <footer style={{ textAlign: 'center', color: '#FF69B4', marginTop: '3rem', fontSize: '1rem' }}>
        Powered by Bobonix • A Slangtrepreneur Creation
      </footer>
    </div>
  );
}
