import React, { useState, useEffect } from 'react';
import { Sun, Zap, Battery, Gauge } from 'lucide-react';
import { calculateSolarCellOutput, MATERIAL_OPTIONS } from '../lib/solarCellCalculations';

export default function SolarCellSimulation() {
  const [inputs, setInputs] = useState({
    area: 1,
    material: 'mono-si',
    lightIntensity: 1000,
    incidentAngle: 0,
  });

  const [outputs, setOutputs] = useState({
    voltage: 0,
    current: 0,
    maxPower: 0,
    efficiency: 0,
  });

  useEffect(() => {
    try {
      const results = calculateSolarCellOutput(inputs);
      setOutputs(results);
    } catch (error) {
      console.error('Calculation error:', error);
    }
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'material' ? value : parseFloat(value),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Solar Cell Simulator</h1>
          <p className="text-gray-600">Explore how different parameters affect solar cell performance</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Input Parameters</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Solar Cell Area (m²)
                </label>
                <input
                  type="number"
                  name="area"
                  value={inputs.area}
                  onChange={handleInputChange}
                  min="0.1"
                  max="10"
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material Type
                </label>
                <select
                  name="material"
                  value={inputs.material}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  {MATERIAL_OPTIONS.map(({ id, label }) => (
                    <option key={id} value={id}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Light Intensity (W/m²)
                </label>
                <input
                  type="number"
                  name="lightIntensity"
                  value={inputs.lightIntensity}
                  onChange={handleInputChange}
                  min="0"
                  max="1500"
                  step="50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Incident Angle (degrees)
                </label>
                <input
                  type="number"
                  name="incidentAngle"
                  value={inputs.incidentAngle}
                  onChange={handleInputChange}
                  min="0"
                  max="90"
                  step="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Output Results</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Battery className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Voltage</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">{outputs.voltage} V</p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-600">Current</span>
                </div>
                <p className="text-2xl font-bold text-yellow-600">{outputs.current} A</p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-600">Max Power</span>
                </div>
                <p className="text-2xl font-bold text-green-600">{outputs.maxPower} W</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-600">Efficiency</span>
                </div>
                <p className="text-2xl font-bold text-purple-600">{outputs.efficiency}%</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Simulation Notes:</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard Test Conditions (STC) use 1000 W/m² intensity</li>
                <li>• Optimal angle is 0° (perpendicular to surface)</li>
                <li>• Efficiency varies by material and conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}