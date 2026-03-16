import './Logo.css'

export default function Logo() {
  return (
    <div className="logo-container">
      <svg className="logo-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0096ff" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer rotating circle */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#logoGradient)" strokeWidth="2" opacity="0.3" className="rotating-circle" />

        {/* Inner glow circle */}
        <circle cx="100" cy="100" r="85" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.5" className="rotating-circle-slow" />

        {/* Main hexagon shape */}
        <g className="hex-container">
          <polygon points="100,40 145,65 145,115 100,140 55,115 55,65" fill="none" stroke="url(#logoGradient)" strokeWidth="2.5" />
          {/* Inner hexagon */}
          <polygon points="100,60 130,80 130,120 100,140 70,120 70,80" fill="none" stroke="url(#logoGradient)" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* Center symbol - stylized S and T */}
        <text x="100" y="110" textAnchor="middle" className="logo-text" fill="url(#logoGradient)" filter="url(#glow)">
          STH
        </text>

        {/* Animated dots */}
        <circle cx="100" cy="50" r="3" fill="url(#logoGradient)" className="dot-animate" />
        <circle cx="150" cy="100" r="3" fill="url(#logoGradient)" className="dot-animate" style={{ animationDelay: '0.3s' }} />
        <circle cx="100" cy="150" r="3" fill="url(#logoGradient)" className="dot-animate" style={{ animationDelay: '0.6s' }} />
      </svg>
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { r: 3; opacity: 1; }
          50% { r: 6; opacity: 0.3; }
        }
        .rotating-circle {
          animation: rotate 20s linear infinite;
          transform-origin: 100px 100px;
        }
        .rotating-circle-slow {
          animation: rotateSlow 30s linear infinite;
          transform-origin: 100px 100px;
        }
        .hex-container {
          animation: rotate 15s linear infinite;
          transform-origin: 100px 100px;
        }
        .dot-animate {
          animation: pulse-dot 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
