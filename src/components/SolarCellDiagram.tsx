import React from 'react';
import { Sun } from 'lucide-react';

interface DiagramProps {
  incidentAngle: number;
  lightIntensity: number;
}

export default function SolarCellDiagram({ incidentAngle, lightIntensity }: DiagramProps) {
  // Calculate the end point for the light beam based on angle
  const calculateBeamEnd = (angle: number) => {
    const length = 60;
    const radians = (angle * Math.PI) / 180;
    return {
      x: 100 - length * Math.sin(radians),
      y: 60 - length * Math.cos(radians)
    };
  };

  const beamEnd = calculateBeamEnd(incidentAngle);
  const opacity = Math.max(0.3, Math.min(1, lightIntensity / 1000));

  return (
    <svg className="w-full h-48 max-w-md mx-auto" viewBox="0 0 200 120">
      {/* Solar Panel */}
      <rect
        x="40"
        y="60"
        width="120"
        height="10"
        fill="#2563eb"
        className="shadow-lg"
      />
      
      {/* Panel Base */}
      <rect
        x="95"
        y="70"
        width="10"
        height="30"
        fill="#64748b"
      />
      
      {/* Ground */}
      <line
        x1="20"
        y1="100"
        x2="180"
        y2="100"
        stroke="#94a3b8"
        strokeWidth="2"
      />

      {/* Sun Icon */}
      <g transform={`translate(${beamEnd.x - 12}, ${beamEnd.y - 12})`}>
        <Sun className="w-6 h-6 text-yellow-500" />
      </g>

      {/* Light Beams */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i} opacity={opacity}>
          <line
            x1={beamEnd.x + (i * 8) - 12}
            y1={beamEnd.y + (i * 8) - 12}
            x2={100 + (i * 8) - 12}
            y2="60"
            stroke="#facc15"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
        </g>
      ))}

      {/* Angle Arc */}
      <path
        d={`M100,60 A20,20 0 0,1 ${100 + 20 * Math.cos((90 - incidentAngle) * Math.PI / 180)},${60 - 20 * Math.sin((90 - incidentAngle) * Math.PI / 180)}`}
        fill="none"
        stroke="#475569"
        strokeWidth="1"
      />
      
      {/* Angle Label */}
      <text
        x={100 + 25 * Math.cos((45 - incidentAngle / 2) * Math.PI / 180)}
        y={60 - 25 * Math.sin((45 - incidentAngle / 2) * Math.PI / 180)}
        fill="#475569"
        fontSize="12"
        textAnchor="middle"
      >
        {incidentAngle}°
      </text>

      {/* Normal Line */}
      <line
        x1="100"
        y1="20"
        x2="100"
        y2="60"
        stroke="#475569"
        strokeWidth="1"
        strokeDasharray="4 2"
      />
    </svg>
  );
}