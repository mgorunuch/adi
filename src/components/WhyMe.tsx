import { FaTelegram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function WhyMe() {
  const reasons = [
    {
      title: 'Proven Track Record',
      description: 'Built production systems used by millions',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'AI-Native',
      description: 'Built autonomous agents in production',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Product-Minded',
      description: 'Technical depth meets business impact',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Fast Execution',
      description: '0→1 velocity with production quality',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Full-Stack',
      description: 'ML infrastructure to React components',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: 'Quality-Obsessed',
      description: 'Tests, types, clean code from day one',
      icon: (
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="team" className="max-w-7xl mx-auto border-x border-brand/10">
      {/* Why Me heading */}
      <div className="p-8 lg:p-12 border-b border-brand/10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
          Why <span className="text-brand bg-brand/10 px-2 py-1 rounded">Me</span>
        </h2>
      </div>

      <div className="border-b border-brand/10 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-0">
            {/* Left: Grid of reasons */}
            <div className="grid md:grid-cols-2 gap-0 lg:border-r border-brand/20">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`p-8 hover:bg-brand/5 transition-colors ${
                    index % 2 !== 1 ? 'border-r border-brand/20' : ''
                  } ${index < 4 ? 'border-b border-brand/20' : ''}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="text-brand/70 mb-4">
                      <div className="w-10 h-10">
                        {reason.icon}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-foreground mb-3">
                      {reason.title}
                    </div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="bg-black/[0.02] hover:bg-black/[0.03] transition-colors flex items-center justify-center">
              <img
                src="/me.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        {/* Call to Action */}
        <div className="border-t border-brand/10">
          <div className="p-8 lg:p-12 border-b border-brand/10">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-center">
              Ready to build this <span className="text-brand bg-brand/10 px-2 py-1 rounded">together</span>?
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-0">
            <a
              href="https://t.me/mgorunuch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-bold py-6 transition-colors text-lg border-r border-brand/10"
            >
              <FaTelegram className="w-6 h-6" />
              Telegram
            </a>
            <a
              href="https://wa.me/380987665465"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold py-6 transition-colors text-lg border-r border-brand/10"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href="https://linkedin.com/in/mgorunuch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#0077b5]/90 text-white font-bold py-6 transition-colors text-lg"
            >
              <FaLinkedin className="w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
