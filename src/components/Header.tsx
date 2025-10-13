const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-x border-brand/10">
        <div className="grid h-16 text-center" style={{ gridTemplateColumns: `1fr repeat(${navItems.length}, 1fr)` }}>
          <h1 className="text-2xl font-semibold flex items-center justify-center border-r border-brand/10">ADI</h1>
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`hover:bg-brand/10 transition-colors flex items-center justify-center ${index < navItems.length - 1 ? 'border-r border-brand/10' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
