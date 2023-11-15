import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-xl">Welcome to uValue</h2>
        <p>This is a valuation app with three basic models: a conventional cost of capital Discounted Cash Flow (DCF) model, an Adjusted Present Value (APV) model, and a dividend discount model.</p>
      </main>
    </div>
  )
}