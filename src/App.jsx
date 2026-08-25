import './App.css'

function App() {
  const items = [
    { name: 'School', 
      type: 'Folder',
      path: 'C:\\Users\\diong\\OneDrive\\Desktop' 
    },
    { name: 'Apps', type: 'Folder' },
    { name: 'VS Code', type: 'Application' },
    { name: 'Steam', type: 'Application' },
    { name: 'KiCad', type: 'Application' },
    { name: 'Projects', type: 'Folder' },
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h1>Pearl</h1>
        <button>+ Add</button>
      </header>
      
      <div className="launcher-grid">
        {items.map((item) => (
          <button 
            className="launcher-card" 
            key={item.name}
            onClick={() => window.pearl.openPath(item.path)}
          >
            <div className="card-icon">
              {item.type === 'Folder' ? '📁' : '◈'}
            </div>

            <div className="card-info">
              <span className="card-name">{item.name}</span>
              <span className="card-type">{item.type}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default App