export default function Header() {
  return (
    <header className="border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-brand/10">
        <div className="grid grid-cols-4 h-16 text-center" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          <h1 className="text-2xl font-semibold flex items-center justify-center border-r border-brand/10">ADI</h1>
          <a href="#" className="hover:bg-brand/10 transition-colors flex items-center justify-center border-r border-brand/10">
            Home
          </a>
          <a href="#" className="hover:bg-brand/10 transition-colors flex items-center justify-center border-r border-brand/10">
            About
          </a>
          <a href="#" className="hover:bg-brand/10 transition-colors flex items-center justify-center">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
