import React from 'react';
import { Sun, Leaf } from 'lucide-react';

export default function InfoPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-yellow-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Understanding Solar Cells
        </h1>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-8 h-8 text-yellow-500" />
            <h2 className="text-2xl font-semibold text-gray-800">What is a Solar Cell?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            A solar cell, or photovoltaic cell, is a device that converts light energy directly into 
            electricity through the photovoltaic effect. It's the building block of solar panels 
            and represents one of the most promising renewable energy technologies.
          </p>
        </div>

        {/* Solar Cell Information Table */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Generaions of Solar Cell</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-700">   </th>
                <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-700">First Generation</th>
                <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-700">Second Generation</th>
                <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-700">Third Generation</th>
                <th className="border px-4 py-3 text-left text-sm font-semibold text-gray-700">Fourth Generation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-3 text-sm text-gray-600">Material</td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Monocrystalline silicon (m-Si)</li>
                    <li>Polycrystalline silicon (p-Si)</li>
                    <li>Gallium arsenide (GaAs) </li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                <ul>
                    <li>Amorphous silicon (a-Si)</li>
                    <li>Cadmium telluride/cadmium sulfide (CdTe)</li>
                    <li>Copper indium gallium selenide (CIGS)</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                <ul>
                    <li>Organic polymers</li>
                    <li>Perovskites</li>
                    <li>Dye-sensitized solar cells (DSSCs)</li>
                    <li>Multi-junction cells</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                <ul>
                    <li>Graphene</li>
                    <li>Carbon nanotubes</li>
                    <li>Metal oxides</li>
                    <li>Nanoparticles</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 text-sm text-gray-600">Efficiency</td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                <ul>
                    <li>M-Si: 15-24%</li>
                    <li>P-Si: 10-18%</li>
                    <li>GaAs: 28-30%</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>A-Si: 5-12%</li>
                    <li>CdTe: 15-16%</li>
                    <li>CIGS: Up to 20%</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>DSSCs: 5-20%</li>
                    <li>Perovskites: Up to 25.2%</li>
                    <li>Quantum Dots: 11-17%</li>
                    <li>Multi-Junction Cells: greater than 36%</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">  </td>
              </tr>
              <tr>
                <td className="border px-4 py-3 text-sm text-gray-600">Advantage</td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>High stability and long service life</li>
                    <li>Well-suited for high-efficiency applications.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Lower material usage and cost.</li>
                    <li>Flexibility for lightweight and curved applications.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Low-cost production for some technologies (e.g., organic cells).</li>
                    <li>High efficiency potential (e.g., multi-junction cells).</li>
                    <li>Lightweight and flexible designs.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Low cost and flexibility.</li>
                    <li>Environmental stability.</li>
                    <li>Potential for high efficiency.</li>
                  </ul>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border px-4 py-3 text-sm text-gray-600">Restriction</td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>High manufacturing costs.</li>
                    <li>Temperature sensitivity.</li>
                    <li>Material purity requirements are stringent.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Lower efficiency compared to first-generation cells.</li>
                    <li>Toxicity concerns (e.g., Cd in CdTe).</li>
                    <li>Stability issues in some materials.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Poor stability (e.g., perovskites degrade easily)</li>
                    <li>Toxicity concerns (e.g., quantum dots).</li>
                    <li>Limited commercial adoption.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">  </td>
              </tr>
              <tr>
                <td className="border px-4 py-3 text-sm text-gray-600">Key-Technologies</td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Al-BSF (Aluminum Back Surface Field) : Reduces recombination at the back surface.</li>
                    <li>PERC (Passivated Emitter and Rear Cell) : Adds a passivation layer to improve efficiency.</li>
                    <li>SHJ (Silicon Heterojunction) : Combines amorphous silicon.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>CIGS : Achieves record efficiencies of up to 23.4%.</li>
                    <li>CdTe : Suitable for building-integrated photovoltaics (BIPV) and transparent panels.</li>
                    <li>Kesterite (CZTSSe) : Promising but limited by lower efficiencies (~11%).</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Perovskites : Rapidly advancing with efficiencies over 25%.</li>
                    <li>Multi-Junction Cells : Combine multiple semiconductor layers to capture more sunlight.
                    Intermediate Band </li>
                    <li>Solar Cells (IBSCs) : Introduce intermediate energy levels to enhance photon absorption.</li>
                  </ul>
                </td>
                <td className="border px-4 py-3 text-sm text-gray-600">
                  <ul>
                    <li>Graphene : Offers high carrier mobility, low resistivity, and environmental stability.</li>
                    <li>Nanophotovoltaics : Use nanostructures to enhance light absorption and charge transport.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">Environmental Benefits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Clean Energy</h3>
              <p className="text-gray-600 text-sm">Zero direct emissions during operation</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Renewable</h3>
              <p className="text-gray-600 text-sm">Sustainable source of energy from sunlight</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-700 mb-2">Low Maintenance</h3>
              <p className="text-gray-600 text-sm">Long lifespan with minimal upkeep needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}