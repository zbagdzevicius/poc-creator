export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          POC Creator
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Drop your PRDs into <code className="bg-gray-200 px-2 py-1 rounded text-sm">docs/prds/</code> and
          tell Claude Code to <strong>run full pipeline</strong>.
        </p>
      </div>
    </div>
  )
}
