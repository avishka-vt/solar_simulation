# Simulation
Physics solar cell simulation

The output of a solar cell, including voltage (V), current (I), power (P), and efficiency (η)
Factors that affect solar cell:
1. Light Intensity (Irradiance)
    Photocurrent: Proportional to incident photon flux.
        Iph = q . A . G (q is electron charge, A is cell area, and G is photon flux)
    Short-Circuit Current: 
        Ish = q . A . integration(SR(λ)⋅G(λ)dλ) 
        q: Elementary charge, A: Active area of the solar cell SR(λ): Spectral response of the solar cell (dimensionless, typically between 0 and 1. This represents the fraction of incident photons at wavelength λ that contribute to the photocurrent.)  G(λ): Incident photon flux as a function of wavelength λ.

2. Temperature
    Open-Circuit Voltage:
        Voc = (n.k.T/q) ln (Iph/Io +1)  
        n is the ideality factor, k is Boltzmann’s constant, and Io is reverse saturation current.
    Reverse Saturation Current: 
        Io ∝ T^3 e^(-Eg/kt)

3. Material Properties
    Bandgap Energy: Determines the range of photon energies the cell can convert
         Photons with energy E≥(bandgap energy) excite electrons from the valence band to the conduction band, creating electron-hole pairs.
        E = hc/λ
    Absorption Coefficient (α) : Affects light penetration depth.
        I(z)= Io . e^αz   (z is thickness, I(z) is Absorbed photons) 

4. Design and Installation Factors
    Tilt Angle :
        Panels angled to match the latitude maximize annual sunlight capture.
        Example: A 40° tilt works well for a location at 40°N latitude.
    Anti-Reflective Coatings :
        Reduce reflection losses, ensuring more light enters the cell.
    Tracking Systems :
        Motorized trackers adjust the panel angle to follow the sun, boosting output by 15–25%.

5. Electrical Losses
    Series Resistance (Rs) : 
        High Rs (from poor contacts or wiring) causes voltage drops, reducing power output.
    Shunt Resistance (Rsh) :
        Low Rsh (due to manufacturing defects) allows current leakage, lowering efficiency.

6. Spectral Response
    Wavelength Sensitivity :
        Cells respond best to specific wavelengths (e.g., silicon works well for visible light but not infrared).
        Mismatch between the solar spectrum and the cell’s sensitivity reduces efficiency.

7. Recombination Losses
    Electrons recombine with "holes" before being collected, wasting energy.
    Types :
        Radiative (light emission).
        Auger (collisions with other carriers).
        Defect-Mediated (material flaws).
        Io ∝ D/L (diffusion coefficient/mobility and diffusion length)

8. Environmental Factors
    Shading :
        Even partial shading (e.g., from trees) can disproportionately reduce output by blocking entire cell strings.
    Dirt/Dust :
        Accumulation on the panel surface blocks sunlight, reducing efficiency by up to 20%.

9. Fill Factor (FF)
    Measures the "squareness" of the IV curve
    FF = Pmax/Voc.Isc

10. Efficiency 
    η = Pmax/Pin = Voc.Isc.FF/G.A

Outputs : 
Voc, Isc, efficiency, Pmax.