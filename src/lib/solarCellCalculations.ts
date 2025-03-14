// Solar cell simulation calculations
interface SolarCellParams {
  area: number; // in m²
  material: string;
  lightIntensity: number; // in W/m²
  incidentAngle: number; // in degrees
}

interface MaterialProperties {
  bandgap: number; // in eV
  efficiency: number; // theoretical maximum efficiency
  absorptionCoefficient: number; // relative absorption coefficient
}

const MATERIALS: Record<string, MaterialProperties> = {
  'mono-si': { bandgap: 1.1, efficiency: 0.26, absorptionCoefficient: 0.95 }, // Monocrystalline Silicon
  'poly-si': { bandgap: 1.1, efficiency: 0.20, absorptionCoefficient: 0.92 }, // Polycrystalline Silicon
  'gaas': { bandgap: 1.42, efficiency: 0.29, absorptionCoefficient: 0.97 }, // Gallium Arsenide
  'cdte': { bandgap: 1.44, efficiency: 0.22, absorptionCoefficient: 0.94 }, // Cadmium Telluride
};

export function calculateSolarCellOutput(params: SolarCellParams) {
  const material = MATERIALS[params.material];
  if (!material) throw new Error('Invalid material');

  // Calculate effective area based on incident angle
  const effectiveArea = params.area * Math.cos(params.incidentAngle * Math.PI / 180);
  
  // Calculate incident power
  const incidentPower = params.lightIntensity * effectiveArea * material.absorptionCoefficient;
  
  // Calculate efficiency considering angle and material properties
  const actualEfficiency = material.efficiency * 
    material.absorptionCoefficient * 
    Math.cos(params.incidentAngle * Math.PI / 180);
  
  // Calculate output power
  const outputPower = incidentPower * actualEfficiency;
  
  // Calculate voltage and current (simplified model)
  const voltage = 0.6 * material.bandgap; // Typical voltage is ~60% of bandgap
  const current = outputPower / voltage;
  
  return {
    voltage: parseFloat(voltage.toFixed(2)), // V
    current: parseFloat(current.toFixed(2)), // A
    maxPower: parseFloat(outputPower.toFixed(2)), // W
    efficiency: parseFloat((actualEfficiency * 100).toFixed(2)), // %
  };
}

export const MATERIAL_OPTIONS = Object.keys(MATERIALS).map(id => ({
  id,
  label: id.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
}));