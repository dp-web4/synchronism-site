'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import PathNav from '@/components/PathNav';
import RelatedConcepts from '@/components/RelatedConcepts';
import ValidationBadge from '@/components/ValidationBadge';

// 2026-11-10: the gray baryon line is now SPARC's own mass model (sparc: arrays below, every tabulated radius) at a
// user-set Υ_disk, replacing a BTFR toy disc (M_b = 47·V_flat⁴, no gas) that a leading-edge simulated-visitor persona
// pointed out was MOND's own mass–velocity relation fed in as the baryons, on a gas-dominated default galaxy.
// Observed points: SPARC rotmod files (Lelli, McGaugh & Schombert 2016), subsampled to at most 14 radii per galaxy,
// [radius kpc, V_obs km/s, error km/s]. V_flat and R_d: SPARC Table 1 (R_d = 3.6 μm disc scale length), with two
// exceptions noted per row. Until 2026-10-26 every row held hand-drawn approximations, and UGC 128 was entered as an
// "LSB dwarf" with V_flat 55 km/s; it is a giant LSB disc with V_flat 129 km/s (graduate-physics simulated-visitor persona).
const galaxies = [
  {
    name: 'DDO 154',
    rd: 1.5, // kpc. NOT SPARC's 3.6 μm R_d (0.37): this dwarf's baryons are mostly gas, which extends far beyond the stars
    type: 'Dwarf irregular (gas-dominated)',
    vflat: 47, // SPARC 47.0
    // SPARC mass model (MassModels_Lelli2016c.mrt), every tabulated radius: [R kpc, V_gas, V_disk, V_bul] km/s, V_disk/V_bul at M/L = 1 (3.6 μm); added 2026-11-10
    sparc: [[0.49, 3.74, 12.31, 0], [0.99, 7.46, 14.55, 0], [1.48, 10.87, 12.95, 0], [1.97, 13.32, 11.54, 0], [2.47, 14.77, 10.18, 0], [2.96, 16.2, 9.16, 0], [3.46, 17.6, 8.37, 0], [3.95, 17.91, 7.77, 0], [4.44, 17.48, 7.29, 0], [4.94, 16.93, 6.89, 0], [5.43, 16.28, 6.55, 0], [5.92, 15.64, 6.26, 0]] as [number, number, number, number][],
    points: [
      [0.49, 13.8, 1.6], [0.99, 21.6, 0.8], [1.48, 28.9, 0.7], [1.97, 34.3, 0.5], [2.47, 38.2, 0.4], [2.96, 42, 0.2], [3.46, 44.6, 0.2], [3.95, 46.3, 0.2], [4.44, 47.4, 0.3], [4.94, 48.2, 0.6], [5.43, 47.4, 0.7], [5.92, 45.5, 1.3],
    ] as [number, number, number][],
  },
  {
    name: 'NGC 2403',
    rd: 1.39, // kpc, SPARC Table 1
    type: 'SAB(s)cd (high surface brightness)',
    vflat: 131, // SPARC 131.2
    // SPARC mass model (MassModels_Lelli2016c.mrt), every tabulated radius: [R kpc, V_gas, V_disk, V_bul] km/s, V_disk/V_bul at M/L = 1 (3.6 μm); added 2026-11-10
    sparc: [[0.16, 0, 23.21, 0], [0.26, 0, 35.33, 0], [0.36, 1.92, 46.97, 0], [0.46, 2.29, 56.68, 0], [0.56, 2.64, 63.77, 0], [0.66, 3, 67.56, 0], [0.76, 3.34, 70.83, 0], [0.86, 3.68, 72.8, 0], [0.96, 4.02, 74.87, 0], [1.06, 4.37, 77.12, 0], [1.16, 4.75, 79.47, 0], [1.27, 5.15, 82.18, 0], [1.36, 5.51, 85.19, 0], [1.47, 5.76, 87.94, 0], [1.57, 5.98, 90.77, 0], [1.67, 6.21, 93.98, 0], [1.77, 6.42, 96.86, 0], [1.87, 6.61, 99.21, 0], [1.97, 6.81, 101.42, 0], [2.08, 7.01, 103.79, 0], [2.18, 7.27, 106.07, 0], [2.28, 7.54, 106.73, 0], [2.37, 7.81, 106.19, 0], [2.47, 8.25, 105.57, 0], [2.57, 8.77, 105.08, 0], [2.68, 9.31, 104.39, 0], [2.78, 9.95, 103.8, 0], [2.88, 10.97, 103.16, 0], [2.98, 11.96, 102.68, 0], [3.08, 13.06, 102.46, 0], [3.19, 14.06, 102.29, 0], [3.29, 15.05, 102.51, 0], [3.39, 16.15, 102.82, 0], [3.49, 17.15, 103.06, 0], [3.59, 18.14, 102.95, 0], [3.69, 19.24, 103.12, 0], [3.79, 20.24, 102.93, 0], [3.9, 21.03, 102.5, 0], [3.99, 21.83, 101.99, 0], [4.47, 25.72, 99.49, 0], [4.97, 27.81, 97.06, 0], [5.47, 29.41, 94.4, 0], [5.96, 30.7, 91.13, 0], [6.46, 31.7, 87.9, 0], [6.96, 33.29, 84.95, 0], [7.45, 34.99, 81.98, 0], [7.95, 36.58, 79.11, 0], [8.45, 38.38, 76.42, 0], [8.94, 39.97, 74.09, 0], [9.44, 41.47, 71.75, 0], [9.94, 42.57, 69.58, 0], [10.43, 43.96, 67.61, 0], [10.93, 45.06, 65.75, 0], [11.43, 45.76, 64.12, 0], [11.92, 46.15, 62.55, 0], [12.42, 46.65, 61.06, 0], [12.92, 46.95, 59.67, 0], [13.42, 46.75, 58.37, 0], [13.91, 46.25, 57.26, 0], [14.41, 45.95, 56.12, 0], [14.91, 45.66, 55.05, 0], [15.4, 45.26, 54.06, 0], [15.9, 44.76, 53.11, 0], [16.4, 44.16, 52.26, 0], [16.89, 43.36, 51.43, 0], [17.39, 42.67, 50.61, 0], [17.89, 41.87, 49.84, 0], [18.38, 41.07, 49.16, 0], [18.88, 40.27, 48.46, 0], [19.38, 39.87, 47.78, 0], [19.87, 39.87, 47.15, 0], [20.37, 39.87, 46.52, 0], [20.87, 39.87, 45.97, 0]] as [number, number, number, number][],
    points: [
      [0.16, 24.5, 2.83], [0.76, 71.7, 1.25], [1.27, 83.4, 1.8], [1.87, 95.2, 1.25], [2.37, 98.2, 1], [2.98, 100, 2.69], [3.49, 107, 2.46], [4.47, 118, 5.36], [6.96, 126, 0.55], [9.94, 127, 2.56], [12.42, 132, 2.68], [15.4, 134, 0.79], [17.89, 136, 6.38], [20.87, 134, 3.12],
    ] as [number, number, number][],
  },
  {
    name: 'UGC 128',
    rd: 5.95, // kpc, SPARC Table 1
    type: 'Giant low-surface-brightness disc (NGC 2403\'s LSB twin)',
    vflat: 129, // SPARC 129.3
    // SPARC mass model (MassModels_Lelli2016c.mrt), every tabulated radius: [R kpc, V_gas, V_disk, V_bul] km/s, V_disk/V_bul at M/L = 1 (3.6 μm); added 2026-11-10
    sparc: [[1.25, 1.71, 29.4, 0], [3.75, 4.27, 49.15, 0], [6.25, 7.23, 50.52, 0], [8.76, 11.57, 51.47, 0], [11.25, 13.37, 53.63, 0], [13.74, 16.66, 57.25, 0], [16.22, 23.15, 57.75, 0], [18.71, 30.33, 55.23, 0], [21.3, 35.52, 52.6, 0], [23.79, 39.51, 50.52, 0], [26.28, 42, 47.75, 0], [28.77, 44.9, 45.88, 0], [31.25, 45.1, 43.92, 0], [33.74, 43, 42.1, 0], [36.23, 42.3, 40.43, 0], [38.82, 42.4, 38.83, 0], [41.31, 41.7, 37.43, 0], [43.8, 40.21, 36.18, 0], [46.28, 38.81, 35.02, 0], [48.77, 37.11, 33.97, 0], [51.26, 35.72, 33.04, 0], [53.75, 34.72, 32.1, 0]] as [number, number, number, number][],
    points: [
      [1.25, 34.1, 18.8], [6.25, 96.9, 2.44], [8.76, 108, 1.26], [13.74, 114, 0.86], [16.22, 121, 0.68], [21.3, 128, 0.63], [26.28, 129, 0.65], [28.77, 131, 0.73], [33.74, 131, 0.75], [38.82, 126, 1.4], [41.31, 130, 1.62], [46.28, 134, 2.1], [48.77, 129, 2.66], [53.75, 125, 5.95],
    ] as [number, number, number][],
  },
  {
    name: 'NGC 3198',
    rd: 3.2, // kpc. SPARC Table 1 gives 3.14; 3.2 kept because other pages quote this disc's toy midplane density (0.6164 M☉/pc³)
    type: 'SB(rs)c',
    vflat: 150, // SPARC 150.1
    // SPARC mass model (MassModels_Lelli2016c.mrt), every tabulated radius: [R kpc, V_gas, V_disk, V_bul] km/s, V_disk/V_bul at M/L = 1 (3.6 μm); added 2026-11-10
    sparc: [[0.32, 0, 63.28, 0], [0.64, 0, 73.66, 0], [0.96, 0, 78.98, 0], [1.28, 0.35, 82.7, 0], [1.61, 0.15, 84.22, 0], [1.93, -0.05, 83.17, 0], [2.24, -0.47, 87.04, 0], [2.57, -0.95, 88.91, 0], [2.89, -1.43, 88.98, 0], [3.21, -1.14, 93.81, 0], [3.54, -0.39, 101.22, 0], [3.85, 0.36, 108.53, 0], [4.17, 1.52, 115.51, 0], [4.5, 3.07, 120.51, 0], [4.82, 4.63, 125.42, 0], [5.15, 6.02, 129.4, 0], [5.46, 7.16, 133.15, 0], [5.78, 8.31, 136.45, 0], [6.1, 9.46, 139.41, 0], [6.43, 10.61, 141.85, 0], [6.74, 11.77, 142.32, 0], [7.06, 12.87, 140.94, 0], [8.04, 16.39, 135.68, 0], [9.04, 20.03, 130.79, 0], [10.04, 23.68, 128.1, 0], [11.04, 27.08, 126.67, 0], [12.05, 30.11, 124.98, 0], [14.05, 34.48, 118.12, 0], [16.07, 36.43, 108.22, 0], [18.13, 37.76, 101.1, 0], [20.05, 39.83, 96.4, 0], [22.12, 40.92, 91.56, 0], [24.03, 41.77, 87.03, 0], [26.1, 43.71, 82.67, 0], [28.16, 45.41, 79.06, 0], [30.08, 45.29, 76.07, 0], [32.14, 44.56, 73.27, 0], [34.06, 44.81, 70.91, 0], [36.12, 45.9, 68.62, 0], [38.19, 46.75, 66.59, 0], [40.1, 47.48, 64.84, 0], [42.17, 48.93, 63.1, 0], [44.08, 47.84, 61.63, 0]] as [number, number, number, number][],
    points: [
      [0.32, 24.4, 35.9], [1.28, 58.5, 15.4], [2.24, 82, 8.09], [3.54, 107, 7.51], [4.5, 119, 5.67], [5.46, 134, 2.36], [6.43, 142, 0.88], [9.04, 148, 3], [12.05, 156, 2], [18.13, 153, 2], [24.03, 150, 2], [32.14, 147, 2], [38.19, 149, 2], [44.08, 149, 3],
    ] as [number, number, number][],
  },
  {
    name: 'NGC 7331',
    rd: 5.02, // kpc, SPARC Table 1
    type: 'SA(s)b',
    vflat: 239, // SPARC 239.0
    // SPARC mass model (MassModels_Lelli2016c.mrt), every tabulated radius: [R kpc, V_gas, V_disk, V_bul] km/s, V_disk/V_bul at M/L = 1 (3.6 μm); added 2026-11-10
    sparc: [[2.67, -12.02, 317.9, 136.84], [3.21, -12.52, 344.05, 124.77], [3.74, -12.91, 365.51, 115.63], [4.27, -12.71, 368.89, 108.22], [4.81, -11.52, 367.77, 101.96], [5.35, -9.56, 371.23, 96.68], [5.88, -6.26, 365.05, 92.22], [6.41, 4.8, 360.1, 88.33], [7.48, 12.22, 345.54, 81.76], [8.55, 16.59, 324.23, 76.48], [9.62, 22.45, 311.29, 72.1], [10.66, 28.21, 299.93, 68.49], [11.74, 33.77, 288.64, 65.26], [12.83, 38.94, 280.42, 62.43], [13.91, 43.31, 272.13, 59.96], [15, 45.59, 263.74, 57.74], [16.08, 47.38, 256.44, 55.77], [17.07, 49.66, 250.86, 54.12], [18.15, 53.93, 245.89, 52.49], [19.24, 57.71, 242, 50.98], [20.32, 60.09, 237.62, 49.61], [21.41, 61.78, 231.06, 48.33], [22.49, 63.67, 224.49, 47.15], [23.48, 64.56, 219.56, 46.15], [24.57, 62.97, 214.35, 45.11], [25.65, 61.48, 209.72, 44.15], [26.74, 60.79, 205.21, 43.24], [27.82, 59.4, 200.95, 42.4], [28.91, 57.31, 196.85, 41.59], [29.89, 55.13, 193.34, 40.9], [30.98, 52.84, 189.65, 40.18], [32.06, 51.55, 186.2, 39.49], [33.15, 51.35, 182.89, 38.84], [34.23, 50.86, 179.88, 38.22], [35.32, 49.27, 177.27, 37.63], [36.31, 47.97, 173.78, 37.11]] as [number, number, number, number][],
    points: [
      [2.67, 221, 20], [4.27, 250, 5], [5.35, 257, 5], [7.48, 257, 5], [10.66, 247, 6], [12.83, 244, 6], [16.08, 236, 3], [19.24, 236, 3], [22.49, 240, 3], [24.57, 237, 3], [27.82, 239, 3], [30.98, 236, 4], [33.15, 239, 5], [36.31, 238, 9],
    ] as [number, number, number][],
  },
];

const G_KPC = 4.301e-6; // G in kpc·(km/s)²/M☉
const A0_KPC = 3703;    // a₀ = 1.2×10⁻¹⁰ m/s² expressed in (km/s)²/kpc
const BTFR_A = 47;      // M_b = 47·V⁴ M☉ (McGaugh 2011 empirical BTFR normalization)
const H_Z = 0.3;        // toy disk scale height, kpc

// Baryonic mass from the baryonic Tully–Fisher relation — set by V_flat, not fitted.
function diskMass(vflat: number): number {
  return BTFR_A * Math.pow(vflat, 4);
}

// Modified Bessel functions, Abramowitz & Stegun 9.8.1–9.8.8 (relative error of y²[I₀K₀ − I₁K₁] ≤ 3×10⁻⁴ against
// scipy over y = 0.05–20, checked 2026-10-29).
function besselI0(x: number): number {
  const t = x / 3.75;
  if (x < 3.75) { const t2 = t * t; return 1 + t2 * (3.5156229 + t2 * (3.0899424 + t2 * (1.2067492 + t2 * (0.2659732 + t2 * (0.0360768 + t2 * 0.0045813))))); }
  const u = 1 / t;
  return (Math.exp(x) / Math.sqrt(x)) * (0.39894228 + u * (0.01328592 + u * (0.00225319 + u * (-0.00157565 + u * (0.00916281 + u * (-0.02057706 + u * (0.02635537 + u * (-0.01647633 + u * 0.00392377))))))));
}
function besselI1(x: number): number {
  const t = x / 3.75;
  if (x < 3.75) { const t2 = t * t; return x * (0.5 + t2 * (0.87890594 + t2 * (0.51498869 + t2 * (0.15084934 + t2 * (0.02658733 + t2 * (0.00301532 + t2 * 0.00032411)))))); }
  const u = 1 / t;
  return (Math.exp(x) / Math.sqrt(x)) * (0.39894228 + u * (-0.03988024 + u * (-0.00362018 + u * (0.00163801 + u * (-0.01031555 + u * (0.02282967 + u * (-0.02895312 + u * (0.01787654 - u * 0.00420059))))))));
}
function besselK0(x: number): number {
  if (x <= 2) { const t = (x * x) / 4; return -Math.log(x / 2) * besselI0(x) + (-0.57721566 + t * (0.4227842 + t * (0.23069756 + t * (0.0348859 + t * (0.00262698 + t * (0.0001075 + t * 0.0000074)))))); }
  const u = 2 / x;
  return (Math.exp(-x) / Math.sqrt(x)) * (1.25331414 + u * (-0.07832358 + u * (0.02189568 + u * (-0.01062446 + u * (0.00587872 + u * (-0.0025154 + u * 0.00053208))))));
}
function besselK1(x: number): number {
  if (x <= 2) { const t = (x * x) / 4; return Math.log(x / 2) * besselI1(x) + (1 / x) * (1 + t * (0.15443144 + t * (-0.67278579 + t * (-0.18156897 + t * (-0.01919402 + t * (-0.00110404 - t * 0.00004686)))))); }
  const u = 2 / x;
  return (Math.exp(-x) / Math.sqrt(x)) * (1.25331414 + u * (0.23498619 + u * (-0.0365562 + u * (0.01504268 + u * (-0.00780353 + u * (0.00325614 - u * 0.00068245))))));
}

// Thin exponential disk (Freeman 1970): v² = 4πGΣ₀R_d·y²[I₀K₀ − I₁K₁], y = r/2R_d, Σ₀ = M/(2πR_d²).
// Replaced the spherical √(G·M(<r)/r) on 2026-10-29 (queued since 2026-07-17); the spherical form ran 14–16%
// low between 2 and 3 R_d (0.542 vs 0.622 √(GM/R_d) at 2.2 R_d) and converges to it beyond ~10 R_d.
function toyNewtonianVel(r: number, vflat: number, rd: number): number {
  if (r <= 0) return 0;
  const y = r / (2 * rd);
  const bracket = besselI0(y) * besselK0(y) - besselI1(y) * besselK1(y);
  const v2 = ((2 * G_KPC * diskMass(vflat)) / rd) * y * y * bracket;
  return v2 > 0 ? Math.sqrt(v2) : 0;
}


type Galaxy = (typeof galaxies)[number];
// SPARC convention: Υ_bulge = 0.7 when Υ_disk = 0.5 (Lelli, McGaugh & Schombert 2016), kept as a fixed ratio here.
const UPS_BULGE_OVER_DISK = 1.4;
// Baryonic rotation speed from SPARC's per-radius mass model (since 2026-11-10):
// v_b² = V_gas·|V_gas| + Υ_d·V_disk² + Υ_b·V_bul² (V_gas can be negative where the gas disc has a central hole),
// linear in v² between tabulated radii, solid-body (v ∝ r) inside the first radius, Keplerian (v² ∝ 1/r) beyond the last.
function newtonianVel(r: number, g: Galaxy, upsD: number): number {
  if (r <= 0) return 0;
  const rows = g.sparc;
  const vb2 = (row: [number, number, number, number]) =>
    row[1] * Math.abs(row[1]) + upsD * row[2] * row[2] + UPS_BULGE_OVER_DISK * upsD * row[3] * row[3];
  const first = rows[0];
  const last = rows[rows.length - 1];
  let v2: number;
  if (r <= first[0]) {
    v2 = vb2(first) * (r / first[0]) * (r / first[0]);
  } else if (r >= last[0]) {
    v2 = (vb2(last) * last[0]) / r;
  } else {
    let i = 0;
    while (i < rows.length - 2 && rows[i + 1][0] <= r) i++;
    const a = rows[i];
    const b = rows[i + 1];
    const t = (r - a[0]) / (b[0] - a[0]);
    v2 = vb2(a) + t * (vb2(b) - vb2(a));
  }
  return v2 > 0 ? Math.sqrt(v2) : 0;
}

// Real MOND simple interpolating function: g = ν(y)·g_N, ν(y) = ½ + √(¼ + 1/y), y = g_N/a₀
function mondVel(r: number, g: Galaxy, upsD: number): number {
  if (r <= 0) return 0;
  const vb = newtonianVel(r, g, upsD);
  if (vb <= 0) return 0;
  const gN = (vb * vb) / r;
  const y = gN / A0_KPC;
  const nu = 0.5 + Math.sqrt(0.25 + 1 / y);
  return vb * Math.sqrt(nu);
}

// Midplane density of the toy exponential disk, M☉/pc³
function midplaneDensity(r: number, vflat: number, rd: number): number {
  const sigma0 = diskMass(vflat) / (2 * Math.PI * rd * rd * 1e6); // M☉/pc²
  return (sigma0 * Math.exp(-r / rd)) / (2 * H_Z * 1000);
}

// The framework's actual coherence function, γ=2, ρ_crit = 0.029·V² (its asserted A·V² scaling)
function coherenceC(r: number, vflat: number, rd: number): number {
  const rhoCrit = 0.029 * vflat * vflat;
  const ratio = midplaneDensity(r, vflat, rd) / rhoCrit;
  return Math.tanh(2 * Math.log(ratio + 1));
}

// Real Synchronism curve: same architecture as the stand-in below, but with the
// actual C(ρ(r)) as the coherence factor instead of a hand-tuned tanh(radius)
function synchronismRealVel(r: number, g: Galaxy, upsD: number): number {
  const vb = newtonianVel(r, g, upsD);
  const c = coherenceC(r, g.vflat, g.rd);
  return Math.sqrt(vb * vb + Math.pow(g.vflat * c, 2));
}

// Division wiring, g_obs = g_bar / C (the form the ledger's tests use), with C floored at Ω_m:
// C_f = Ω_m + (1 − Ω_m)·C(ρ). Added as the primary violet curve 2026-10-08, after a graduate-physics visitor
// found the plotter showed only the quadrature wiring, whose small-C limit is Newtonian (inert), while the tested
// law's small-C limit is the maximal boost 1/Ω_m (and, unfloored, 1/C, which diverges).
const OMEGA_M = 0.315;
function synchronismDivVel(r: number, g: Galaxy, upsD: number, floored = true): number {
  const vb = newtonianVel(r, g, upsD);
  const c = coherenceC(r, g.vflat, g.rd);
  const cEff = floored ? OMEGA_M + (1 - OMEGA_M) * c : Math.max(c, 1e-12);
  return vb / Math.sqrt(cEff);
}

// Hand-tuned stand-in shown on this page before 2026-07-08, kept for comparison
function synchronismVel(r: number, vflat: number): number {
  const rScale = 2.5;
  const baryon = vflat * Math.sqrt(1 - Math.exp(-r / rScale)) * 0.6;
  const coherence = vflat * Math.tanh(0.4 * r / rScale);
  return Math.sqrt(baryon * baryon + coherence * coherence);
}

export default function GalaxyPlotter() {
  const [selected, setSelected] = useState(0);
  const [showStandIn, setShowStandIn] = useState(false);
  const [showQuad, setShowQuad] = useState(false);
  const [upsD, setUpsD] = useState(0.5); // stellar mass-to-light ratio of the disc at 3.6 μm (SPARC convention 0.5)
  const galaxy = galaxies[selected];

  const svgW = 600;
  const svgH = 350;
  const pad = { top: 20, right: 30, bottom: 50, left: 60 };
  const plotW = svgW - pad.left - pad.right;
  const plotH = svgH - pad.top - pad.bottom;

  const xMax = Math.max(...galaxy.points.map(p => p[0])) * 1.1;

  const modelPoints = useMemo(() => {
    const pts: { r: number; vNew: number; vSyn: number; vSynReal: number; vSynDiv: number; vSynDivRaw: number; vMond: number }[] = [];
    for (let i = 1; i <= 50; i++) {
      const r = (i / 50) * xMax;
      pts.push({
        r,
        vNew: newtonianVel(r, galaxy, upsD),
        vSyn: synchronismVel(r, galaxy.vflat),
        vSynReal: synchronismRealVel(r, galaxy, upsD),
        vSynDiv: synchronismDivVel(r, galaxy, upsD, true),
        vSynDivRaw: synchronismDivVel(r, galaxy, upsD, false),
        vMond: mondVel(r, galaxy, upsD),
      });
    }
    return pts;
  }, [galaxy, xMax, upsD]);

  const maxC = useMemo(() => {
    let m = 0;
    for (let i = 1; i <= 50; i++) {
      const r = (i / 50) * xMax;
      m = Math.max(m, coherenceC(r, galaxy.vflat, galaxy.rd));
    }
    return m;
  }, [galaxy, xMax]);

  // y-range covers the floored division curve, which runs ~1.8× the baryon line (2026-10-08)
  const yMax = Math.max(
    Math.max(...galaxy.points.map(p => p[1])) * 1.3,
    Math.max(...modelPoints.map(p => p.vSynDiv)) * 1.05,
  );
  const toX = (r: number) => pad.left + (r / xMax) * plotW;
  const toY = (v: number) => pad.top + (1 - v / yMax) * plotH;
  // Unfloored division: how far above the baryon line it would go (off the chart)
  const maxRawRatio = Math.max(...modelPoints.map(p => (p.vNew > 0 ? p.vSynDivRaw / p.vNew : 0)));

  return (
    <>
      <Breadcrumbs currentPath="/galaxy-plotter" />
      <PathNav currentPath="/galaxy-plotter" />
      <h1>Galaxy Curve Plotter</h1>
      <div style={{ maxWidth: '65ch', margin: '0.6rem 0 0', padding: '0.7rem 1rem', background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: '0.375rem', fontSize: '0.92rem', color: 'var(--color-text-secondary)' }}>
        <strong style={{ color: '#10b981' }}>New here? Look at three things on the chart below.</strong> (A &ldquo;rotation curve&rdquo; is just how fast things orbit, plotted against distance from the galaxy&apos;s centre.)
        <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <li><strong>The dots</strong> are what telescopes measure: stars keep orbiting fast far from the centre.</li>
          <li><strong>The dashed gray line</strong> is what the visible matter alone would give. It sags below the dots. That gap is the dark-matter puzzle. (Since 2026-11-10 the gray line is built from each galaxy&apos;s measured gas and stars, SPARC&apos;s own mass model, at a stellar mass-to-light ratio you can move with the slider below the galaxy buttons. Until then it was a stand-in built from the galaxy&apos;s speed.)</li>
          <li><strong>Green</strong> (MOND: an existing theory, from 1983, that gravity gets slightly stronger than Newton predicts where it is very weak, as at the far edges of galaxies) follows the dots (with no per-galaxy tuning: one universal constant and the measured gas and stars, which is why it is the rival worth comparing against). <strong>Solid violet</strong> (this framework&apos;s equation as written) does not: it is the gray line scaled up, still falling where the dots stay flat. <strong>In plain words: the only version of this framework&apos;s equation that fits these dots is MOND&apos;s formula written differently.</strong> Fed acceleration instead of density, the equation at &gamma; &asymp; &frac12; is MOND&apos;s formula, so that version is the green curve; there is no separate line for it. The chart is the version that failed (violet) against the version that survives (green), and the one that survives is MOND. At these densities the violet line is a constant 1.78&times; stretch of the gray one at every radius (the floor binds; details in the physicists&apos; block).</li>
          <li><strong>&ldquo;But First Encounter says the fitted &gamma; &asymp; 0.5 reproduces MOND?&rdquo;</strong> It does, and that is not a win. The fit that gives &gamma; &asymp; 0.5 feeds the equation acceleration, which is MOND&apos;s own input, instead of the density the framework names; with that swap the equation becomes MOND&apos;s formula and you get the green line back. That is why the site calls it a reparametrization. The violet line is the equation as written, keyed on density, and it fails. Why matching MOND still counts as <em>Failed</em>: fitting the same curves as an existing theory with a renamed formula adds nothing new. A match would only be news if the equation also predicted something MOND does not and that prediction held. It made three such predictions (a cap on how much gravity can be boosted, an effect of a galaxy&apos;s surroundings, and a density knee that grows with rotation speed), and each failed when tested.</li>
        </ul>
        <p style={{ margin: '0.4rem 0 0' }}>
          That is the whole lesson. You can ignore the other lines (an old hand-drawn stand-in and a second violet variant) and
          the &ldquo;For physicists&rdquo; block. Your next step is{' '}
          <Link href="/what-synchronism-is-not" style={{ color: 'var(--color-accent-blue)' }}>What Synchronism Is Not &rarr;</Link>
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.8rem' }}>
        <ValidationBadge status="failed" label="Failed: the framework's equation as written does not match these galaxies (violet)" />
        <ValidationBadge status="reparametrization" label="Reparametrization: the version that matches is MOND's formula in new notation" />
      </div>
      <details style={{ marginTop: '0.3rem', fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
        <summary style={{ cursor: 'pointer' }}>&#9432; What exactly the two badges cover (for physicists)</summary>
        <p style={{ margin: '0.3rem 0 0' }}>
          <strong>Failed:</strong> the published density law C<sub>&rho;</sub> (&gamma; = 2, &rho;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2;)
          in the division wiring g = g<sub>bar</sub>/C, floored at &Omega;<sub>m</sub> (solid violet). At these densities C<sub>&rho;</sub> &asymp; 10<sup>&minus;3</sup>
          sits under the floor everywhere, so what is plotted is G &rarr; G/&Omega;<sub>m</sub>: the floor (the boost ceiling) failing, not the
          shape of the density law. The quadrature wiring (dashed) is inert. <strong>Reparametrization:</strong> what matched MOND, the
          hand-drawn stand-in and the fitted &gamma; &asymp; 0.49 law (acceleration-keyed). Badges made plain 2026-11-05 after a beginner
          visitor met this spec as the first thing on step 3 of the Beginner Path.
        </p>
      </details>
      {/* 2026-09-15: visitor saw "Reparametrization" here and "Model Explainer" on the tools index and could not tell which applied */}
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
        Tool type: <strong>Model Explainer</strong> (the Interactive Tools index grouping &mdash; shows how the equation
        works, not a verdict) &middot; Claim status: the two badges above. The label says what kind of tool this is;
        the badges say how its claims stand.
      </p>

      <section className="section content-width" style={{ marginTop: '1.5rem' }}>
        <div style={{ background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: 'var(--color-accent-blue)' }}>What this tool is for:</strong>{' '}
          seeing the dark-matter problem itself — pick a real galaxy and watch the gray line (what
          visible matter predicts) sag below the dots (what telescopes measure). That gap is the
          puzzle. As of 2026-07-08 this page also renders the framework&apos;s <em>actual</em> failure
          instead of narrating it: the solid violet curve is the density-keyed C<sub>&#x03C1;</sub> evaluated on a disk
          density profile and wired by <em>division</em>, the way the ledger&apos;s tests wire their C (g = g<sub>bar</sub>/C, with C floored at
          &Omega;<sub>m</sub>; TEST-09/TEST-10 themselves divide by a different, acceleration-keyed C<sub>a</sub> &mdash; see the
          two-C&apos;s box by the chart). C never gets anywhere near its knee, so the curve is a flat 3.17&times; boost in gravity (1.78&times; in speed) of the
          baryon line: wrong shape, Newtonian decline at the edge. The light-violet dashed curve is the same C added
          in quadrature, which hugs the baryon line (until 2026-10-08 that inert wiring was the only one drawn; a
          graduate-physics visitor pointed out it shows the milder of two opposite failures). The old hand-tuned
          stand-in is now hidden behind a checkbox. The green curve is MOND&apos;s real simple-&#x03BD; interpolating function on SPARC&apos;s measured gas, disc and bulge components (since 2026-11-10; before that, a toy disc whose mass came from V<sub>flat</sub>) &mdash; nothing is fitted to the dots.{' '}
          <strong>Why a second (amber) curve?</strong> The dotted one is what a curve <em>would</em> need to
          look like to fit the data — drawn by hand, not computed. The solid one is what the equation
          actually produces. Showing both is the point: the gap between them <em>is</em> the failure.
        </div>
        <p>
          <strong>The dark matter puzzle in one picture:</strong> Physics predicts that galaxies
          should rotate more slowly at their outer edges (like planets in the solar system — the
          further out, the slower). They don&apos;t. The outer stars rotate just as fast as the inner
          ones. Something invisible is adding gravity. Most physicists call it dark matter &mdash;
          a proposed invisible substance that has never been directly detected; we infer it only
          from its gravitational pull (whether it&apos;s real stuff or a placeholder for missing
          physics is exactly what&apos;s being debated). MOND
          (Modified Newtonian Dynamics) explains the same curves by changing the gravity law.
          Synchronism proposed a third interpretation: the coherence function C(ρ) would mimic the extra
          gravity via density-dependent coupling. Only the first two fit the observations: dark-matter
          halos and MOND both reproduce these curves (MOND with one global constant, a&#x2080;, for every
          galaxy). The framework&apos;s own equation, as written (with the registered tests&apos; &#x03A9;<sub>m</sub> floor), does not &mdash; wired by division (solid violet below) it is
          the visible-matter line scaled up by a constant, still falling where the dots stay flat; wired in quadrature (dashed light
          violet) it stays on the visible-matter line. What matched MOND was either the hand-drawn amber stand-in or,
          in the archive&apos;s SPARC work, a fit that re-tunes &#x03C1;<sub>crit</sub> for each galaxy
          (one extra free parameter per galaxy). The violet curve is not a fit of any kind: nothing in it
          is adjusted to the dots.
        </p>
        <details style={{ marginBottom: '1rem' }}>
          <summary style={{ cursor: 'pointer', color: 'var(--color-accent-blue)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            For physicists: the calibration, the two wirings, parsimony and the full audit trail (beginners can skip this)
          </summary>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
            Revision note: until 2026-09-15 the paragraph above said &ldquo;all three fit the observations&rdquo; and described
            the violet curve as refitting &#x03C1;<sub>crit</sub>; the chart shows neither. On 2026-10-20 the technical notes
            below were folded into this block after a casual simulated-visitor persona found Beginner Path step 3 showed
            &ldquo;the expert&apos;s notebook&rdquo;.
          </p>
        <div style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#f87171' }}>Read &ldquo;real&rdquo; on this page as &ldquo;as published&rdquo; &mdash;
          the violet curve is the framework&apos;s equation at a calibration this site refutes three separate ways
          (named here 2026-09-10, after three of four simulated-visitor personas flagged this one page).</strong>{' '}
          The curve is honestly computed &mdash; nothing is fitted to the dots &mdash; but every parameter in it is
          one the site elsewhere marks as failed:
          <br />&bull; <strong>&gamma;&nbsp;=&nbsp;2</strong> &mdash; the pin refuted on the RAR at
          &Delta;BIC&nbsp;=&nbsp;+184 (Υ frozen; +46 with Υ free per law) &mdash; strictly, that fit used the acceleration-keyed C<sub>g</sub> (keyed on g<sub>obs</sub>, no floor; not the floored C<sub>a</sub> of TEST-09/10); the density-keyed
          C<sub>&#x03C1;</sub> drawn here lost its own head-to-head by &Delta;BIC&nbsp;+2843 even with &gamma; free (<Link href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</Link>).
          <br />&bull; <strong>&rho;<sub>crit</sub>&nbsp;=&nbsp;0.029&middot;V<sub>flat</sub><sup>+2</sup></strong> (M<sub>&#x2609;</sub>/pc&sup3; with V in km/s)
          &mdash; an a&#x2080;-tracking knee would need &rho;<sub>crit</sub>&nbsp;&propto;&nbsp;V<sup>&minus;2</sup>, and the knee
          measured on SPARC has no velocity dependence at all (V<sup>&minus;0.16 &plusmn; 0.19</sup>, median 0.161&nbsp;M<sub>&#x2609;</sub>/pc&sup3;), so
          V<sup>+2</sup> is a <em>wrong exponent</em>, excluded at ~11&sigma; at galaxy level (<Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</Link>).
          The &ldquo;240&ndash;300,000&times;&rdquo; magnitude this line used to quote was withdrawn 2026-08-28: it applied the V&sup2; law to
          a coefficient derived for V<sup>0.5</sup>.
          <br />&bull; <strong>Per-system normalization</strong> &mdash; keying the knee to V<sub>flat</sub> makes it a
          function of the very observable being predicted; the site names that move disqualifying, and MOND by contrast
          uses one global a₀ for all galaxies.
          <br /><strong>Which wiring (added 2026-09-24; both drawn since 2026-10-08):</strong> the light-violet dashed curve adds the coherence term in quadrature,
          v&sup2; = v<sub>b</sub>&sup2; + (V<sub>flat</sub>&middot;C)&sup2;. That display wiring takes the observed V<sub>flat</sub> as an
          input, and with C &asymp; 0.001 it does nothing. It is also circular by construction: if C ever approached 1,
          the &ldquo;prediction&rdquo; would simply hand back the observed V<sub>flat</sub> (extended 2026-09-25 after a
          graduate-physics visitor flagged it). The ledger&apos;s tests use the division wiring, g = g<sub>bar</sub>/C, which
          at the same C fails the <em>other</em> way: about 10&sup3;&times; too much gravity, roughly 30&times; in velocity, far off the
          top of this plot. The solid violet curve now draws the division wiring <em>with</em> the &Omega;<sub>m</sub> floor the
          ledger&apos;s density-law tests used, which caps the over-boost at 3.17&times; in gravity (1.78&times; in speed). Without the
          floor it would be the ~30&times; curve. So the plot shows both failure modes: inert (quadrature), and a uniform boost
          with the wrong shape (floored division).
          <br />So the tool is best read not as &ldquo;the theory&apos;s prediction&rdquo; but as a
          <strong> working demonstration that the equation never switches on at its published calibration</strong>: C(&rho;)
          stays below 0.01 on every shipped disc (0.0004 on UGC 128 up to 0.008 on the compact NGC 2403), so what you see is decided entirely by the wiring (no boost; a flat 3.17&times; in gravity, 1.78&times; in speed; or about 1000&times; in gravity, about 30&times; in speed, unfloored). The
          legend used to read &ldquo;max C on this disk: 0.001 &mdash; the equation never switches on here: this galaxy is too
          spread out&rdquo; under the quadrature curve, and &ldquo;inert by construction&rdquo; before 2026-09-25; &ldquo;inert&rdquo;
          described the display wiring, not the tested law (corrected 2026-10-08). At V<sub>flat</sub>&nbsp;=&nbsp;47&nbsp;km/s that calibration puts the knee at
          64&nbsp;M<sub>&#x2609;</sub>/pc&sup3; against disc densities of order 10<sup>&minus;2</sup>: no galaxy in the
          dropdown can lift off the Newtonian baseline, for any of them.
          <br /><strong>One more cross-link the plot owes you:</strong> the green MOND reference uses the simple-&nu;
          function of Famaey &amp; Binney (2005) &mdash; not the RAR fit function the &Delta;BIC table on Galaxy Rotation uses (McGaugh&apos;s &nu;); the two are different functions and are not interchangeable toward the Solar System (corrected 2026-10-10; this note previously called the simple function &ldquo;the RAR-preferred choice&rdquo;) &mdash; and <em>also</em> a function TEST-25&apos;s instrument finds Cassini
          excluding, at +15.3&sigma; to +20.1&sigma; (the +17.95&sigma; quoted until 2026-11-05 is the framework&apos;s compander at the SPARC fit, not the simple function; see below). The benchmark drawn here is a function this site refutes in the Solar System;
          that is a real tension in the comparison and not a drafting slip.
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginTop: '-0.5rem' }}>
          <strong>Try the twin pair:</strong> NGC 2403 and UGC 128 have the same flat speed (131 vs 129 km/s) but UGC 128&apos;s
          disc is 16&times; dimmer per unit area and 4&times; wider. This is the classic low-surface-brightness test (de Blok &amp;
          McGaugh). MOND keys on acceleration, so it predicts the dimmer twin is more dark-matter dominated, which is what the dots
          show. A law keyed on local density makes its own prediction for the pair. Here both discs sit on the floor, so the
          violet line is just the gray line scaled up in both. (Observed points switched from hand-drawn approximations to real
          SPARC rows on 2026-10-26; the UGC 128 row had been a 55 km/s curve that is not this galaxy.)
          <br />
          Select a SPARC galaxy. The plot shows five things: what visible matter predicts (dashed gray),
          what we observe (dots), what Synchronism&apos;s equation <em>as written</em>, with the registered tests&apos; &#x03A9;<sub>m</sub> floor, gives (violet solid — it
          fails, at a calibration refuted three ways; see the red box above),
          the hand-tuned stand-in formerly shown (amber dotted — illustration only), and what MOND gives (green).
          Notice that the <em>stand-in</em> and MOND nearly overlap — the framework&apos;s own{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>{' '}
          labels this a <em>reparametrization</em> &mdash; plain words: the same curve wearing a
          different costume; fitting a known curve isn&apos;t discovering anything new.{' '}
          <strong>Plain verdict for casual readers:</strong> two existing explanations both fit these curves:
          MOND (the green line) and dark-matter halos (the standard &ldquo;NFW&rdquo; halo shape; not plotted here); the framework&apos;s own equation, as written (with the registered tests&apos; floor), does not (solid violet); only the hand-tuned
          stand-in (dotted amber) does, and it was drawn to. (Corrected 2026-09-15: this verdict used to say all
          three models fit about equally well, which the chart beside it contradicts.) Fitting alone would
          not settle much anyway &mdash; what matters is whether a model makes a <em>different, testable
          prediction</em>, and the ensemble test
          (SPARC RAR, ΔBIC=+184 with points as independent, ≈ +11 with the galaxy as the unit — a fit in <em>acceleration</em>, MOND&apos;s own variable, not in the density this
          plotter uses; see <a href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a> for which
          test kills which version) shows Synchronism collapses to MOND when γ is freed — curve-equivalence
          at fitted γ only, not theory-equivalence. (Corrected 2026-08-09: this read &ldquo;the framework has no
          action, no Lagrangian, and no dynamics.&rdquo; It has all three, postulated in Appendix D of the
          archive since 2025-12-01 — but the version stated there is eliminated a priori, and writing down the
          surviving one changes none of the refutations. See{' '}
          <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>.)
          The violet curves on this plotter are two display wirings of C<sub>&#x03C1;</sub> (division and quadrature), not
          solutions of any field equation — see the formula box below. See{' '}
          <a href="/honest-assessment#test04a" style={{ color: 'var(--color-accent-blue)' }}>what the tests actually say →</a>
        </p>
        <div style={{
          background: 'rgba(245, 158, 11, 0.08)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '0.75rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#f59e0b' }}>Parsimony note:</strong> MOND fits all 175 SPARC galaxies with a <em>single global</em> constant (a&#x2080;). Synchronism refits one free &#x03C1;<sub>crit</sub> <em>per galaxy</em> — an extra free parameter for each galaxy. By parsimony (BIC), the Synchronism per-galaxy fit is strictly dominated, not equivalent. Additionally, the scale A in &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is itself{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Audited-Negative</a>{' '}
          (chain-of-custody failure: stated derivation gives A ≈ 4.6×10⁻⁵, 600× off the claimed 0.029 &mdash; the number outlived its computation). <strong>Is the formula-consistent A ≈ 4.6×10⁻⁵ an untested branch?</strong>{' '}
          No, not on SPARC (answered 2026-09-23 for a researcher persona who asked). The explorer&apos;s head-to-head fit left A{' '}
          <em>and</em> &gamma; free in &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; (division wiring
          g<sub>obs</sub> = g<sub>bar</sub>/C, no floor) on 2,438 points in 122 galaxies,
          and still lost to the acceleration-keyed compander by &Delta;BIC +3309 (+2843 with one global &#x03C1;<sub>crit</sub>).
          Any fixed A, including 4.6×10⁻⁵ at &gamma; = 2, is a point inside that search, so its likelihood can only be worse. The sizes, executed 2026-11-02 (explorer): at the formula&apos;s A = 4.6×10⁻⁵ with &gamma; free the best curve <em>is Newton&apos;s</em> (C &#x2248; 1 at the median point), &Delta;BIC +6593 against the acceleration law, with Newton alone at +6636; at &gamma; = 2 and that A it is +10 372; at the published A = 0.029 and &gamma; = 2, +16 486. The density law loses at every calibration tried, its own formula&apos;s included.
          The two fixed parameters save about 16 BIC units, which does not change the verdict. What the fit did not cover is the
          field-equation wiring with a floor; that is the separate knee-grid result on{' '}
          <a href="/honest-assessment#gc-fork" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>. Source:{' '}
          <code style={{ fontSize: '0.78rem' }}>explorer/findings/the-argument-of-C-three-functions-each-killed-by-its-own-distinguishing-feature.md</code>, Result 3. V<sub>flat</sub> is taken from existing SPARC/MOND fits, not independently predicted. See <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</a> for full accounting.
          <br /><br />
          <strong style={{ color: '#f59e0b' }}>γ note:</strong> the violet curve pins γ=2, which via γ=2/√N<sub>corr</sub> implies N<sub>corr</sub>=1 — stars treated as uncorrelated. No galaxy satisfies that; the data-preferred fit (γ≈0.49, ΔBIC=+7 vs +184 for γ=2, Υ frozen) implies N<sub>corr</sub>≈17, still not a physical correlated-star count. See <a href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</a> for the full both-directions contradiction.
        </div>
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '0.375rem',
          padding: '0.6rem 0.9rem',
          marginBottom: '1rem',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
        }}>
          <strong style={{ color: '#ef4444' }}>Related environment result (corrected 2026-07-24):</strong> This card
          previously reported &ldquo;TEST-03: R&sup2; = 0.14 triggered as Failed against the 20% kill threshold.&rdquo;
          That statistic was never a valid TEST-03 measurement — archive tracing (2026-07-09) shows 0.14 is a
          Hubble-type/morphology term at SPARC scale (N &asymp; 171), not an environment-density result, and 0.14
          does not even exceed the 0.20 threshold it was said to fire. The registered environment test has since
          been run as registered (2026-07-14: SPARC RAR offsets vs Cosmicflows-4 ambient densities):
          <strong> r&sup2; = 0.0001</strong> against the framework&apos;s &gt;20% claim — the environment prediction
          is <strong>refuted by execution</strong>, not by the old conflated statistic.{' '}
          <a href="/tier-1-existing#TEST-05" style={{ color: 'var(--color-accent-blue)' }}>See Tier 1: TEST-03/TEST-05 for the full trace &rarr;</a>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong style={{ color: '#ef4444' }}>Why the stand-in misled (kept for the record):</strong>{' '}
          <em>(Precision 2026-09-15: the drawn stand-in, now dotted amber, contains no &#x03B3; and no &#x03C1;<sub>crit</sub> &mdash;
          see the formula box. The argument below is about the per-galaxy SPARC fits that stand-in was imitating.)</em>{' '}
          Those per-galaxy fits use the same parametrization (&#x03B3;=2) that the RAR ensemble test <strong>disfavoured at ΔBIC=+184</strong> (Υ frozen; +46 with Υ free per law; points as independent; &asymp;&nbsp;+11, disfavoured at the threshold, with the galaxy as the unit). They still overlap MOND per-galaxy because &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2; is <em>refit to each galaxy&apos;s own flat velocity</em> — that degree of freedom absorbs the shape mismatch one galaxy at a time. The ensemble RAR (all 2,807 SPARC data points — 175 galaxies — plotted together in acceleration space) is where &#x03B3;=2 dies: free-&#x03B3; converges to &#x03B3;&#x2248;0.49 with RMS identical to McGaugh-MOND to four digits. Per-galaxy shape recovery is not the same test as ensemble shape rejection.{' '}
          <strong>Cross-system failure (locality no-go):</strong> a single global ρ<sub>crit</sub>(V<sub>flat</sub>) — no per-galaxy refit — exposes a ~1.7 dex offset between the local volumetric density ρ(r) and the observed g<sub>bar</sub> that MOND tracks. That cross-system gap is the reason local-density frameworks fail where MOND succeeds; the per-galaxy overlap you see here hides it by refitting ρ<sub>crit</sub> independently for each galaxy.
        </div>
        </details>
        <div style={{ background: 'rgba(56,189,248,0.07)', border: '1px solid rgba(56,189,248,0.2)', borderRadius: '0.375rem', padding: '0.6rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem' }}>
          <strong>Reading this plot:</strong>{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>
            In plain terms: the gray line sagging below the dots is the dark matter puzzle. The solid
            violet line — the framework&apos;s real equation — fails to fix it. The dotted amber line that
            used to be shown here was drawn to fit, not computed from the theory.
            There are two ways to plug the coherence number into gravity (dividing by it, or adding a term in
            quadrature); we draw both, and neither closes the gap. (Glossary:{' '}
            <Link href="/glossary#wiring-quadrature-vs-division" style={{ color: 'var(--color-accent-blue)' }}>wiring</Link>.)
          </span>
          <ul style={{ margin: '0.4rem 0 0', color: 'var(--color-text-secondary)', paddingLeft: '1.2rem' }}>
            <li><strong>Dashed gray</strong> — Newtonian prediction from the measured gas, stellar disc and bulge (SPARC&apos;s mass model at the slider&apos;s &Upsilon;<sub>disk</sub>; a BTFR toy disc until 2026-11-10). Drops off at the edges; this is the puzzle.</li>
            <li><strong>Dots</strong> — observed rotation velocities from SPARC (up to 14 radii per galaxy, with their quoted errors as vertical bars; real data since 2026-10-26, hand-drawn approximations before). Flat at large radius; doesn&apos;t drop like Newtonian says it should.</li>
            <li><strong>Violet solid (division reading)</strong> — Synchronism&apos;s real C<sub>&#x03C1;</sub> at &#x03B3;=2 with the framework&apos;s asserted &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;, wired as g = g<sub>bar</sub>/C<sub>f</sub> with C<sub>f</sub> = &Omega;<sub>m</sub> + (1&minus;&Omega;<sub>m</sub>)&middot;C<sub>&#x03C1;</sub>. The disk&apos;s density is thousands of times below &#x03C1;<sub>crit</sub>, so C<sub>&#x03C1;</sub> stays near zero, C<sub>f</sub> sits on the floor, and the curve is the baryon line times &radic;3.17 &asymp; 1.78 at every radius: wrong shape. <strong>Light-violet dashed (quadrature reading)</strong> &mdash; the same C<sub>&#x03C1;</sub> added in quadrature, v&sup2; = v<sub>b</sub>&sup2; + (V<sub>flat</sub>&middot;C<sub>&#x03C1;</sub>)&sup2;; with C<sub>&#x03C1;</sub> &asymp; 0.001 it sits on the baryon line. <strong>This is the 2026-07-02 audit result, rendered.</strong> <em>Caveat (2026-08-05, revised same day):</em> that &ldquo;thousands of times below&rdquo; is <strong>conditional on A = 0.029</strong>, since &#x03C1;/&#x03C1;<sub>crit</sub> &#x221D; 1/A &mdash; at A = 4.6&times;10<sup>&minus;5</sup> the ratio for NGC 3198 is 0.60 and the curve would lift off the baryon line. But the 635&times; between them is a <strong>law swap, not a scale choice</strong>: universal A with &#x03C1;<sub>crit</sub> &#x221D; V&sup2; versus per-galaxy A &#x221D; R<sub>half</sub><sup>&minus;2</sup> with &#x03C1;<sub>crit</sub> &#x221D; V<sup>0.5</sup> &mdash; the two-law fork{' '}
            <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>parameter derivations</Link> item 1 has documented since 2026-06-07. An earlier version of this caveat attributed the gap to an unstated coarse-graining length &#x2113;; <strong>that is withdrawn</strong> &mdash; a self-consistent &#x2113; smooths &#x03C1; and &#x03C1;<sub>crit</sub> alike and <em>cancels</em>, leaving &#x03C1;/&#x03C1;<sub>crit</sub> &#x2272; 0.019&#x03B2;<sub>J</sub>&sup2; in every sector at every &#x2113;. This plot shows the framework under its own stated law.</li>
            <li><strong>Amber dotted</strong> — shown only to illustrate what a working boost would look like; <strong>not a prediction of any theory</strong>. It is the hand-tuned tanh(radius) stand-in previously displayed, and it fits because it was drawn to fit; no &#x03C1;, &#x03C1;<sub>crit</sub>, or &#x03B3; enters it. (Recolored from violet 2026-07-23: it is an illustration, not the theory.)</li>
            <li><strong>Green dashed</strong> — MOND&apos;s simple-&#x03BD; function (Famaey &amp; Binney 2005) on SPARC&apos;s measured baryons (gas, disc and bulge at the slider&apos;s &Upsilon;<sub>disk</sub>) with one global a&#x2080; = 1.2&times;10<sup>&minus;10</sup> m/s&sup2; and zero per-galaxy knobs: a prediction, since 2026-11-10. Until then it ran on a BTFR-assigned mass M<sub>b</sub> = 47&middot;V<sub>flat</sub>&#x2074;, which set its flat level to 0.93&middot;V<sub>flat</sub> by construction (the same circularity this page counts against &#x03C1;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2;); a leading-edge reader pointed out on 2026-11-10 that the &ldquo;visible matter&rdquo; line was then MOND&apos;s own mass&ndash;velocity relation fed in as the baryons, on a gas-dominated default galaxy. Where the green line sits relative to the outer dots now depends on &Upsilon;<sub>disk</sub> and on the measured gas, not on the dots.</li>
          </ul>
          <div style={{ margin: '0.6rem 0 0', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong>Which MOND, and why it matters:</strong> the green curve here uses the simple-&#x03BD; function
            (&#x03BD; = &frac12; + &radic;(&frac14; + 1/y)). The <Link href="/galaxy-rotation" style={{ color: 'var(--color-accent-blue)' }}>Galaxy Rotation</Link> page&apos;s
            RAR/&#x394;BIC test uses McGaugh&apos;s RAR function &#x03BD; = 1/(1&minus;e<sup>&minus;&radic;y</sup>). Both are called
            &ldquo;MOND&rdquo; on this site, and they are different functions. <strong>Neither survives the Solar System as a QUMOND
            interpolating function.</strong> Cassini bounds the quadrupole the Galactic field induces around the Sun, and that
            quadrupole is set near 7,000&nbsp;AU, where the Sun&apos;s own field is about a&#x2080;. There the two functions are close.
            Run through{' '}
            <Link href="/tier-1-existing#TEST-25" style={{ color: 'var(--color-accent-blue)' }}>TEST-25</Link>&apos;s own instrument,
            McGaugh&apos;s function fails Cassini by +15.9&sigma; to +20.9&sigma; and the simple function by +15.3&sigma; to +20.1&sigma;.
            The framework&apos;s compander at the SPARC fit fails by +17.95&sigma; on the same instrument. Desmond, Hees &amp; Famaey
            (2024) report 8.7&sigma; after marginalizing.
            <details style={{ marginTop: '0.35rem' }}>
              <summary style={{ cursor: 'pointer' }}>Revision note</summary>
              This note used to call McGaugh&apos;s exponential-return function &ldquo;Cassini-safe&rdquo; and say only the simple
              function fails. That reasoning used the high-acceleration tail at Saturn, but Cassini constrains the quadrupole
              set in the transition region. A simulated-visitor persona (graduate physics) caught it. The numbers above come from a
              pre-registered run: <code>maintainer/scripts/cassini_q2_mond_interpolating_functions.py</code>.
            </details>
          </div>
        </div>

        <div style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.35)', borderRadius: '0.375rem', padding: '0.75rem 0.9rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#ef4444' }}>The actual formulas plotted (disclosure, updated 2026-07-08; violet lines corrected 2026-10-12 &mdash; this box still described only the quadrature curve, as &ldquo;Violet SOLID&rdquo;, after the solid line was switched to division on 2026-10-08):</strong>{' '}
          for a page badged Reparametrization, the formulas are the argument — so here they are, exactly as coded:
          <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', margin: '0.5rem 0', padding: '0.5rem 0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '4px', overflowX: 'auto' }}>
            Gray &ldquo;Newtonian&rdquo; (the base of every other curve), since 2026-11-10: v_b&sup2;(r) = V_gas&middot;|V_gas| + &Upsilon;_d&middot;V_disk&sup2; + 1.4&Upsilon;_d&middot;V_bul&sup2; from SPARC&apos;s per-radius mass model (Lelli, McGaugh &amp; Schombert 2016, MassModels table; V_gas carries the 1.33 helium factor; V_disk, V_bul tabulated at M/L = 1), linear in v&sup2; between tabulated radii, solid-body inside the first, Keplerian beyond the last; &Upsilon;_d from the slider (default 0.5, SPARC&apos;s convention; bulge 0.7 at that value)<br />
            Toy mass model, now used only for the density &#x03C1;(r) that feeds C<sub>&#x03C1;</sub> and for the amber stand-in: M_b = 47&middot;V_flat&#x2074; M&#x2609; (empirical BTFR, McGaugh 2011), exponential disk with each galaxy&apos;s observed scale length R_d, h = 0.3 kpc. Until 2026-11-10 the gray line was this toy disc&apos;s Freeman (1970) curve, v_b&sup2;(r) = (2GM_disk/R_d)&middot;y&sup2;[I&#x2080;(y)K&#x2080;(y) &minus; I&#x2081;(y)K&#x2081;(y)], y = r/2R_d, with no gas component<br />
            Density-keyed coherence (both violet lines): C<sub>&#x03C1;</sub>(r) = tanh(2&middot;ln(&#x03C1;(r)/&#x03C1;<sub>crit</sub>+1)), &#x03C1;(r) = &#x03A3;(r)/2h with &#x03A3;(r) = (M_b/2&pi;R_d&sup2;)&middot;e<sup>&minus;r/R_d</sup> (M&#x2609;/pc&sup2;, R_d in pc), &#x03C1;<sub>crit</sub> = 0.029&middot;V_flat&sup2; (&#x03A3;(r) printed 2026-11-04 so a reader can reproduce &#x03C1; and C<sub>&#x03C1;</sub>; C<sub>&#x03C1;</sub> stays &lt; 10<sup>&minus;3</sup> on every disc here, so the solid violet line is the &Omega;<sub>m</sub> floor, a constant 1/&radic;&Omega;<sub>m</sub> = 1.78&times; stretch in v, and tests &Omega;<sub>m</sub>, not the tanh)<br />
            Violet SOLID, division reading (the wiring the ledger&apos;s tests use; failed): g = g_bar/C<sub>f</sub>, i.e. v(r) = v_b/&radic;C<sub>f</sub>, C<sub>f</sub> = &Omega;<sub>m</sub> + (1&minus;&Omega;<sub>m</sub>)&middot;C<sub>&#x03C1;</sub>, &Omega;<sub>m</sub> = 0.315 (boost &le; 1/&Omega;<sub>m</sub> = 3.17 in g)<br />
            Light-violet DASHED, quadrature reading (display branch, not a tested law; inert at C<sub>&#x03C1;</sub> &asymp; 0.001): v(r) = &radic;(v_b&sup2; + [V_flat&middot;C<sub>&#x03C1;</sub>]&sup2;)<br />
            Amber DOTTED (old illustrative stand-in &mdash; what this page showed before 2026-07-08, kept for comparison): v(r) = &radic;(v_toy&sup2; + [V_flat&middot;tanh(0.4&middot;r/2.5)]&sup2;), v_toy = 0.6&middot;V_flat&middot;&radic;(1&minus;e^(&minus;r/2.5))<br />
            Green &ldquo;MOND&rdquo;: v(r) = v_b&middot;&radic;&#x03BD;(y), &#x03BD;(y) = &frac12; + &radic;(&frac14; + 1/y), y = g_N/a&#x2080;, g_N = v_b&sup2;/r (real simple-&#x03BD;)
          </div>
          <div style={{ margin: '0.75rem 0', padding: '0.7rem 0.9rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '0.375rem', fontSize: '0.85rem' }}>
            <strong style={{ color: '#f87171' }}>This figure and the ledger run different force laws &mdash; the fork,
            stated (2026-08-08; when this was written the chart drew only the quadrature curve, now the light-violet dashed one).</strong> The quadrature curve couples C <em>in quadrature</em>:
            v&sup2;&nbsp;=&nbsp;v_b&sup2;&nbsp;+&nbsp;[V_flat&middot;C]&sup2;, so C&nbsp;&rarr;&nbsp;0 means{' '}
            <em>no boost</em>. But{' '}
            <a href="/tier-1-existing" style={{ color: '#f87171' }}>Tier 1</a> derives the boost ceiling behind
            TEST-09/TEST-10 from f<sub>DM</sub>&nbsp;=&nbsp;1&minus;C, i.e. from reading the coupling as{' '}
            <strong>g<sub>obs</sub>&nbsp;=&nbsp;g<sub>bar</sub>/C</strong>, where C&nbsp;&rarr;&nbsp;0 means an{' '}
            <em>infinite</em> boost. Same symbol, opposite orientation. The old legend&apos;s &ldquo;max C on this disk:
            0.001 &mdash; boost never turns on&rdquo; would read &ldquo;f<sub>DM</sub>&nbsp;=&nbsp;0.999, a 1000&times;
            acceleration boost&rdquo; under the ledger&apos;s law. Every &#x03C3; on{' '}
            <a href="/honest-assessment" style={{ color: '#f87171' }}>Honest Assessment</a> is conditional on this
            choice, and the site has not made it &mdash; the fork is what currently{' '}
            <a href="/mond-unification" style={{ color: '#f87171' }}>blocks registering EFE&nbsp;=&nbsp;0</a> as a
            numbered test.
            <br /><br />
            <strong>For rotation curves specifically, though, the fork does not block the verdict &mdash; it doubles
            it.</strong> Take a gas-rich dwarf like DDO&nbsp;154, which needs a boost of B&nbsp;&#8776;&nbsp;10 in
            acceleration to explain its outer curve (SPARC&apos;s most DM-dominated systems reach
            f<sub>DM</sub>&nbsp;=&nbsp;0.927, i.e. B&nbsp;&#8805;&nbsp;13.7 &mdash; see{' '}
            <a href="/tier-1-existing" style={{ color: '#f87171' }}>TEST-10</a>). At max C = 0.001 the quadrature
            branch delivers B&nbsp;&#8776;&nbsp;1 &mdash; a factor ~10 <em>under</em>. The division branch delivers
            B&nbsp;=&nbsp;1/C&nbsp;&#8776;&nbsp;1000 &mdash; a factor ~100 <em>over</em>. <strong>Both branches are
            refuted by the same galaxy, from opposite sides.</strong> Registering a canonical coupling is still
            required for the EFE and cluster sectors; it is not required to conclude that the galaxy sector fails.
            (Raised independently by two expert simulated-visitor passes, 2026-08-08.)
          </div>
          The light-violet dashed (quadrature) curve and the amber dotted one differ in exactly one ingredient: the coherence factor.
          The stand-in used tanh(<em>radius</em>) with hand-tuned constants; the real curve uses
          C<sub>&#x03C1;</sub> on the disk&apos;s density profile. With the framework&apos;s asserted
          &#x03C1;<sub>crit</sub> = 0.029&middot;V&sup2;, the disk midplane density sits orders of magnitude below
          &#x03C1;<sub>crit</sub> everywhere (the legend shows this galaxy&apos;s maximum C<sub>&#x03C1;</sub>), so the quadrature
          curve stays on the baryon line and the division curve sits on its floor (a flat 3.17&times; in g) — the knee is never crossed, exactly as the
          2026-07-02 audit found by computation (its more charitable density estimates reach at most C &#x2248; 0.28;
          no estimate reaches the knee). What you see is the difference between a mechanism and a costume.
          The 2026-07-02 audit also showed the &#x03C1;<sub>crit</sub> = A&middot;V&sup2; scaling itself is
          sign-inverted: MOND-matching forces the knee density to <em>fall</em> as V<sup>&minus;2</sup>{' '}
          (BTFR envelope), while the framework makes it rise as V<sup>+2</sup> — see{' '}
          <a href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter Derivations</a>.
          The stand-in is forced, not incidental: C(&#x03C1;) is a function of <em>local</em> density, while the
          rotation curve it needs to reproduce is organized by g<sub>bar</sub>, a <em>non-local</em>
          enclosed-mass acceleration — see the{' '}
          <a href="/honest-assessment#structural-tensions" style={{ color: 'var(--color-accent-blue)' }}>
            local-vs-non-local structural no-go
          </a>{' '}
          for why a pointwise density map cannot in general reproduce an acceleration-space relation without
          per-galaxy calibration.{' '}
          <strong style={{ color: '#f59e0b' }}>And the &ldquo;local&rdquo; side of that contrast is not local
          either (added 2026-09-07):</strong> &#x03C1;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2; keys
          the threshold to the asymptotic rotation speed &mdash; an r &rarr; &infin; quantity fixed by the
          galaxy&apos;s total baryonic mass &mdash; so what this curve evaluates is
          C(&#x03C1;(r), M<sub>total</sub>), not C(&#x03C1;(r)). That is an MRH violation by the framework&apos;s
          own definition and it needs no data at all; see{' '}
          <a href="/mrh" style={{ color: 'var(--color-accent-blue)' }}>MRH &rarr; Does the framework respect
          its own horizon?</a>
          <div style={{ margin: '0.6rem 0 0' }}>
            <strong style={{ color: '#f59e0b' }}>Mass-model note:</strong> since 2026-11-10 the gray Newtonian curve is SPARC&apos;s own
            mass model for each galaxy: the tabulated gas, stellar-disc and bulge velocity contributions (Lelli, McGaugh &amp; Schombert 2016),
            combined at the slider&apos;s stellar mass-to-light ratio. It is a fit to each galaxy&apos;s photometry and 21-cm gas map, not a toy
            built from V<sub>flat</sub>. Every curve built on it (violet, dashed violet, green) inherits it, so the green MOND line is now a real
            prediction with one global constant, and the violet line is a constant boost of real baryons rather than of a BTFR disc. The toy
            exponential disc survives only as the density profile fed to C<sub>&#x03C1;</sub> (its own problem; see the V<sub>flat</sub> box).
            <details style={{ marginTop: '0.3rem' }}>
              <summary style={{ cursor: 'pointer' }}>Revision note</summary>
              Until 2026-11-10 the gray curve was a toy exponential disc whose whole mass came from the BTFR, M<sub>b</sub> = 47&middot;V<sub>flat</sub>&#x2074;, with no gas component, so on the gas-dominated default galaxy the &ldquo;visible matter&rdquo; line was MOND&apos;s own mass&ndash;velocity relation fed in as the baryons (a leading-edge reader, 2026-11-10; the fix had been &ldquo;queued&rdquo; on this page). Before that, until 2026-10-29, the gray curve used spherical enclosed mass, &radic;(G&middot;M(&lt;r)/r). That ran 14&ndash;16% low
              between 2 and 3 R<sub>d</sub> (0.542 against 0.622 &radic;(GM/R<sub>d</sub>) at 2.2 R<sub>d</sub>), so the
              visual gap near the peak was exaggerated; the two agree to under 3% beyond 10 R<sub>d</sub>, where the
              discrepancy lives. An expert reader flagged it on 2026-07-17 and a graduate-physics reader again on 2026-10-29.
            </details>
          </div>
        </div>

        <div style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '0.375rem', padding: '0.7rem 0.9rem', marginBottom: '1rem', fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
          <strong style={{ color: '#a78bfa' }}>What to notice in the chart below:</strong> both violet lines are the
          framework&apos;s density law with &#x03C1;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2;, wired two ways. The solid
          (division) line is the dashed gray Newtonian line scaled up by a constant, so it keeps the Newtonian fall-off; the dashed
          (quadrature) line barely moves off the gray line. The green MOND line does follow the dots. That gap between violet and
          green is the failure this tool shows.
          <br /><strong>Two assumptions behind that picture:</strong>
          <ul style={{ margin: '0.35rem 0 0', paddingLeft: '1.2rem' }}>
            <li>&ldquo;The equation never switches on here&rdquo; is a property of the calibration <strong>A = 0.029</strong>, not of
              the equation&apos;s form. <Link href="/parameter-derivations" style={{ color: 'var(--color-accent-blue)' }}>Parameter
              Derivations</Link> records that A = 0.029 does not follow from its own stated formula, which gives
              A &asymp; 4.6&times;10<sup>&minus;5</sup> M<sub>&#x2609;</sub>&nbsp;pc<sup>&minus;3</sup>&nbsp;(km/s)<sup>&minus;2</sup> (A = 0.029 is in the same units). At that value the knee sits inside dwarf-disc densities: a
              visitor&apos;s estimate puts C &asymp; 0.5 near the DDO&nbsp;154 midplane (an estimate, not a
              computation this page performs). The chart draws only A = 0.029.</li>
            <li>The dashed quadrature law, v&sup2; = v<sub>b</sub>&sup2; + [V<sub>flat</sub>&middot;C<sub>&#x03C1;</sub>]&sup2;, takes the observed
              V<sub>flat</sub> as an input, so even a match would not count as evidence. The solid division curve uses the
              site&apos;s tested wiring, g = g<sub>bar</sub>/C, but with the density-keyed C<sub>&#x03C1;</sub>; TEST-09/TEST-10 divide by
              the acceleration-keyed C<sub>a</sub> (see the two-C&apos;s box inside the chart card).
              The failure verdicts rest on those refutations, not on this picture.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {galaxies.map((g, i) => (
            <button
              key={g.name}
              onClick={() => setSelected(i)}
              style={{
                background: i === selected ? 'var(--color-accent-violet)' : 'var(--color-dark-surface)',
                color: i === selected ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-dark-border)',
                borderRadius: '4px',
                padding: '0.3rem 0.75rem',
                cursor: 'pointer',
                fontSize: '0.85rem',
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        <div style={{ margin: '0 0 1rem', padding: '0.6rem 0.9rem', background: 'rgba(156,163,175,0.08)', border: '1px solid var(--color-border)', borderRadius: '0.375rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
          <label htmlFor="upsd" style={{ display: 'block', marginBottom: '0.3rem' }}>
            <strong>How heavy are the stars? &Upsilon;<sub>disk</sub> = {upsD.toFixed(2)}</strong> (mass per unit of 3.6&nbsp;&mu;m light; the one knob the gray
            baryon line has. SPARC&apos;s convention is 0.5, with the bulge at 1.4&times; that. Drag it and watch every curve move together: the gray line
            is built from each galaxy&apos;s measured gas, stellar disc and bulge, and the green, violet and light-violet lines are built on the gray.)
          </label>
          <input id="upsd" type="range" min="0.2" max="1.0" step="0.05" value={upsD} onChange={e => setUpsD(parseFloat(e.target.value))} style={{ width: '100%' }} />
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{galaxy.name}</span>
            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
              {galaxy.type}
            </span>
          </div>
          <div style={{ background: 'rgba(245,158,11,0.08)', borderRadius: '4px', padding: '0.4rem 0.6rem', marginBottom: '0.75rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            <strong style={{ color: '#f59e0b' }}>V<sub>flat</sub> = {galaxy.vflat} km/s (observed input)</strong>
            {' '}&mdash; taken from SPARC for this galaxy and fed <em>into</em> the curves, not predicted by them. <strong>In plain words:</strong> both violet lines use this galaxy&apos;s measured speed to set themselves up (the green MOND line no longer does, since 2026-11-10), so where they land at large radius is partly the answer fed back in; the green line is also 7% low by its normalisation.
            <details style={{ marginTop: '0.3rem' }}><summary style={{ cursor: 'pointer' }}>Detail for physicists (how V<sub>flat</sub> enters each curve, units, the 47 vs 62.8)</summary>
            It enters both violet curves through &#x03C1;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2;
            (here {(0.029 * galaxy.vflat * galaxy.vflat).toFixed(0)} M<sub>&#x2609;</sub>/pc&sup3;), through the toy disc density that feeds C<sub>&#x03C1;</sub> (M<sub>b</sub> = 47&middot;V<sub>flat</sub>&#x2074;),
            and the dashed quadrature curve a third time through its V<sub>flat</sub>&middot;C boost term. The gray baryon line no longer uses it (since 2026-11-10). <strong>A curve built from V<sub>flat</sub> cannot be a prediction of
            V<sub>flat</sub>.</strong> Units: the code compares &#x03C1;<sub>crit</sub> with a disk density in
            M<sub>&#x2609;</sub>/pc&sup3; with V<sub>flat</sub> in km/s, so the 0.029 carries units of
            M<sub>&#x2609;</sub>&nbsp;pc<sup>&minus;3</sup>&nbsp;(km/s)<sup>&minus;2</sup>; the archive ledger states units
            only for the V<sup>0.5</sup> law that coefficient was originally derived under, not for the V&sup2; law drawn
            here. The green MOND curve no longer uses V<sub>flat</sub> at all: since 2026-11-10 its baryons are SPARC&apos;s measured components, so its outer
            level is a prediction from one global a&#x2080; = 1.2&times;10<sup>&minus;10</sup> m/s&sup2; and the measured gas and stars, with
            &Upsilon;<sub>disk</sub> the only knob, shared across galaxies. (Until then it ran on the BTFR mass 47&middot;V<sub>flat</sub><sup>4</sup>, which set
            its flat level to 0.93&middot;V<sub>flat</sub> by construction: 47 corresponds to a&#x2080; &asymp; 1.6&times;10<sup>&minus;10</sup> while the
            curve uses 1.2&times;10<sup>&minus;10</sup>, 1/(G&middot;a&#x2080;) &asymp; 63, and (47/63)<sup>1/4</sup> &asymp; 0.93. That circularity is gone.) See{' '}
            <a href="/honest-assessment" style={{ color: 'var(--color-accent-blue)' }}>Honest Assessment</a>.</details>
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', margin: '0 0 0.6rem' }}>
            <strong style={{ color: '#a78bfa' }}>Which wiring each violet line draws (2026-09-15; rewritten 2026-10-12, it still described the
            pre-10-08 chart):</strong> the <strong>solid</strong> line is the <em>division</em> reading, g = g<sub>bar</sub>/C<sub>f</sub> with
            C<sub>f</sub> = &Omega;<sub>m</sub> + (1&minus;&Omega;<sub>m</sub>)&middot;C<sub>&#x03C1;</sub>, so C<sub>&#x03C1;</sub> &rarr; 0 means the
            maximal boost 1/&Omega;<sub>m</sub> = 3.17&times;. The <strong>dashed</strong> line is the <em>quadrature</em> reading,
            v&sup2; = v<sub>b</sub>&sup2; + [V<sub>flat</sub>&middot;C<sub>&#x03C1;</sub>]&sup2;, so C<sub>&#x03C1;</sub> &rarr; 0 means no boost.
            The ledger&apos;s kills (<Link href="/tier-1-existing" style={{ color: 'var(--color-accent-blue)' }}>TEST-09/TEST-10</Link>)
            use the division wiring too &mdash; but with a{' '}
            <strong>different C</strong>, the acceleration-keyed C<sub>a</sub> (see the box below), not this chart&apos;s C<sub>&#x03C1;</sub> held at a floor.
            On <em>this</em> chart&apos;s C<sub>&#x03C1;</sub> the division boost is 1/C &asymp; {maxC > 0 ? (1 / maxC).toFixed(0) : '∞'}&times;
            unfloored, or the flat 3.17&times; drawn, floored. For DDO&nbsp;154 (needs &asymp; 10&times;)
            that is quadrature &asymp; 1&times; (under), floored division &asymp; 3&times; (under), unfloored division &asymp; 1000&times;
            (over) &mdash; every wiring fails; the fork box above has the detail. Radius is in kpc (kiloparsecs):
            1 kpc = 1,000 parsecs &asymp; 3,260 light-years.
          </p>

          <div style={{ margin: '0 0 0.9rem', padding: '0.7rem 0.9rem', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.35)', borderRadius: '0.375rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: '#38bdf8' }}>&ldquo;max C = {maxC.toFixed(3)}&rdquo; and &ldquo;the floor at
            &#x03A9;<sub>m</sub>&rdquo; are two different C&apos;s. Measured and corrected 2026-09-18.</strong>{' '}
            A leading-edge simulated-visitor persona put the two numbers side by side on 2026-09-18 and concluded that the floor
            (0.315) must bind everywhere, since the computed C never exceeds 0.001 &mdash; so that the galaxy sector
            applies the <em>constant</em> 3.17, the tanh does no work, and TEST-09/TEST-10 are algebra rather than
            data. The persona flagged the inference as unverified and asked for a source check before publishing. It
            was run, on 123 real SPARC discs rather than this page&apos;s five-galaxy toy, and{' '}
            <strong>the inference does not hold &mdash; because the two numbers describe different functions.</strong>
            <br /><br />
            &bull; <strong>C<sub>&#x03C1;</sub> = tanh(&#x03B3;&middot;ln(1+&#x03C1;/&#x03C1;<sub>crit</sub>))</strong>,
            keyed on <em>density</em> &mdash; what this chart draws, and what &ldquo;max C = {maxC.toFixed(3)}&rdquo;
            reports. It carries no floor. The 0.001 figure <em>does</em> generalise off the toy: over 123 SPARC discs
            the per-disc maximum has median 1.2&times;10<sup>&minus;3</sup> at &#x03B3; = 2 (1.6&times;10<sup>&minus;4</sup>
            to 4.9&times;10<sup>&minus;2</sup>), and <strong>0 of 123</strong> reach &#x03A9;<sub>m</sub> anywhere.
            <br />
            &bull; <strong>C<sub>a</sub> = &#x03A9;<sub>m</sub> + (1&minus;&#x03A9;<sub>m</sub>)&middot;x/(1+x)</strong>,
            x = (g<sub>bar</sub>/a&#x2080;)<sup>1/&#x03C6;</sup>, keyed on <em>acceleration</em> &mdash; what the
            TEST-09 and TEST-10 scripts evaluate. Its floor is part of the functional form, not a clip. Over the 2,856 measured radii of the same
            123 discs, C<sub>a</sub> itself runs <strong>0.329 to 0.954</strong> (per-radius median 0.515, IQR 0.235), and{' '}
            <strong>0.00%</strong> of the 2,856 radii sit within 1% of the floor. The applied boost spans
            1.05&times;&ndash;3.04&times;, and never reaches the 3.17 ceiling.
            <br /><br />
            So the two corollaries the persona drew are refuted on the framework&apos;s own data: the predicted
            f<sub>DM</sub> is <em>not</em> a delta function at 0.685 (one value per disc at its outermost radius, N = 123: median 0.585, s.d. 0.062 &mdash; a different sample from the per-radius C<sub>a</sub> median above, which is why 1 &minus; 0.515 &ne; 0.585; stated 2026-10-10 &mdash; and <em>no</em> galaxy
            within 0.01 of the cap), and TEST-09&apos;s slope is <em>not</em> ceiling-independent &mdash; it moves 0.62
            across B<sub>max</sub> &isin; [2, 100]. <strong>What the sweep did find, and it is adverse:</strong>{' '}
            TEST-09&apos;s kill is <Link href="/tier-1-existing" style={{ color: '#38bdf8' }}>convention-dependent</Link>,
            firing only under the site&apos;s own undefended ceiling. Pre-registered at site commit{' '}
            <code style={{ fontSize: '0.76rem' }}>89e0467</code>; script{' '}
            <code style={{ fontSize: '0.76rem' }}>maintainer/scripts/which_C_carries_the_floor.py</code> (+{' '}
            <code style={{ fontSize: '0.76rem' }}>_output.txt</code>), identity control reproduces TEST-09&apos;s
            published n = 3.35 &plusmn; 0.07 exactly.
            <br /><br />
            <strong>The misreading is this page&apos;s defect, not the reader&apos;s.</strong> Both functions were
            written &ldquo;C&rdquo; and the sentence above this box put one function&apos;s output range next to the
            other function&apos;s floor. There are now <em>three</em> live objects behind the one symbol &mdash;
            C<sub>&#x03C1;</sub>, C<sub>a</sub>, and the quadrature-vs-division wiring fork &mdash; and only the third
            was labelled.
          </div>
          {/* 2026-10-06: visitor found five overlaid curves with no step-by-step reading guide */}
          <div style={{ margin: '0 0 0.75rem', padding: '0.6rem 0.9rem', background: 'rgba(56,189,248,0.06)', border: '1px solid var(--color-border)', borderRadius: '0.375rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
            <p style={{ margin: '0 0 0.4rem' }}>
              <strong>Start here:</strong> compare the gray line (Newton, visible matter only) with the dots (observed), then the green (MOND) line.
            </p>
            <strong>How to read this chart, in three steps</strong>
            <ol style={{ margin: '0.35rem 0 0', paddingLeft: '1.3rem' }}>
              <li><strong style={{ color: '#38bdf8' }}>Blue dots</strong> are what telescopes measure: how fast stars and gas orbit at each distance from the centre.
                The <strong style={{ color: '#9ca3af' }}>dashed gray line</strong> is what the visible matter alone should produce under ordinary (Newtonian) gravity.</li>
              <li><strong>The gap</strong> between the gray line and the blue dots, growing toward the edge, is the missing gravity &mdash; the
                dark-matter puzzle. The <strong style={{ color: '#22c55e' }}>green dashed line</strong> (MOND) closes it with no per-galaxy tuning.</li>
              <li>The <strong style={{ color: '#8b5cf6' }}>solid violet line</strong> is Synchronism&apos;s density equation wired the way its
                tests wire it (gravity divided by C). The disk is far too thin to reach the equation&apos;s switch, so C sits on its floor and
                the boost in gravity is the same 3.17&times; at every radius, so in speed the curve is the gray line scaled up by &radic;3.17 &asymp; 1.78&times;. It overshoots the inner points and
                still falls at the edge, where the dots stay flat &mdash; that is the failure. This holds on every galaxy in the menu:
                with &#x03C1;<sub>crit</sub> = 0.029&middot;V<sub>flat</sub>&sup2;, C<sub>&#x03C1;</sub> stays below 0.01 everywhere on
                every shipped disc (0.0004 on UGC 128 up to 0.008 on the compact NGC 2403; &ldquo;about 0.001&rdquo; before the 2026-10-26 switch to real SPARC rows), so the violet curve is the floor&apos;s constant boost, never the tanh&apos;s S-shape. In plain terms: on these discs the violet curve is the gray line times 1/&radic;&Omega;<sub>m</sub>, and &gamma; has no effect on it at all. What keeps the knee out of the discs is the calibration A = 0.029 in &#x03C1;<sub>crit</sub> = A&middot;V<sub>flat</sub>&sup2;. That A is about 600&times; larger than its own Jeans formula gives (4.6&times;10&#x207B;&#x2075;; <a href="/parameter-derivations" style={{ color: '#c4b5fd' }}>Parameter Derivations</a>). With the formula&apos;s value, &#x03C1;<sub>crit</sub> &asymp; 0.8 M&#x2609;/pc&sup3; at 130 km/s, disc midplanes sit at about a tenth of the knee, and the curve&apos;s shape would start to matter (added 2026-11-02, graduate-physics simulated-visitor persona; not yet drawn here). The tool never
                exercises the curve&apos;s shape on a real galaxy, and that is the actual reason it fails. The <strong style={{ color: '#c4b5fd' }}>light violet
                dashed line</strong> (off by default; checkbox below) is the same C wired the other way (added on top), which does nothing at all. The two wirings fail in
                opposite directions; without the floor, the division wiring would run up to {maxRawRatio.toFixed(0)}&times; above the gray line, far off the chart.</li>
            </ol>
            <p style={{ margin: '0.4rem 0 0', fontSize: '0.82rem' }}>
              <em>Why should the gray line fall at all?</em> Under ordinary gravity, stars far from a galaxy&apos;s centre should orbit more
              slowly, the way Neptune orbits the Sun more slowly than Earth, because almost all the visible mass is inside their orbit. A
              &ldquo;rotation curve&rdquo; is just orbital speed plotted against distance from the centre.
            </p>
            <details style={{ marginTop: '0.4rem', fontSize: '0.82rem' }}>
            <summary style={{ cursor: 'pointer' }}>Advanced: two optional lines, and what ticking them shows</summary>
            <p style={{ margin: '0.3rem 0 0' }}>
              The framework never fixed how C enters gravity: divided into it (solid violet) or added on top (light violet). The
              second wiring is shown so you can check for yourself that it changes nothing, rather than take the page&apos;s word that
              the choice of wiring is not hiding a success. The amber stand-in is the hand-drawn curve this page used to show. What you learn by ticking them: amber shows the shape a
              working curve would need, so you can see how far violet is from it; light violet shows that the other wiring changes
              nothing, so the failure is not an artefact of how C was plugged in.
            </p>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={showStandIn} onChange={e => setShowStandIn(e.target.checked)} />
              Show the old hand-drawn stand-in (amber dotted; <strong>not</strong> the theory, kept for the record)
            </label>
            <br />
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem', fontSize: '0.82rem', cursor: 'pointer' }}>
              <input type="checkbox" checked={showQuad} onChange={e => setShowQuad(e.target.checked)} />
              Show an alternative way of plugging C in (light violet dashed; same result here, so it lies on the gray line)
            </label>
            </details>
          </div>
          <svg viewBox={`0 0 ${svgW} ${svgH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
            {/* Grid */}
            {[0, 0.25, 0.5, 0.75, 1.0].map(frac => {
              const y = pad.top + (1 - frac) * plotH;
              const v = (frac * yMax).toFixed(0);
              return (
                <g key={frac}>
                  <line x1={pad.left} y1={y} x2={pad.left + plotW} y2={y} stroke="rgba(255,255,255,0.06)" />
                  <text x={pad.left - 8} y={y + 4} textAnchor="end" fill="#6b7280" fontSize="9">{v}</text>
                </g>
              );
            })}

            {/* Axes */}
            <line x1={pad.left} y1={pad.top} x2={pad.left} y2={pad.top + plotH} stroke="#6b7280" />
            <line x1={pad.left} y1={pad.top + plotH} x2={pad.left + plotW} y2={pad.top + plotH} stroke="#6b7280" />
            <text x={pad.left + plotW / 2} y={svgH - 8} textAnchor="middle" fill="#9ca3af" fontSize="11">Radius (kpc; 1 kpc ≈ 3,260 light-years)</text>
            <text x={14} y={pad.top + plotH / 2} textAnchor="middle" fill="#9ca3af" fontSize="11" transform={`rotate(-90,14,${pad.top + plotH / 2})`}>V (km/s)</text>

            {/* Newtonian curve (dashed gray) */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vNew).toFixed(1)}`).join(' ')}
              fill="none" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="5 3"
            />

            {/* MOND curve (green dashed) — real simple-ν interpolating function */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vMond).toFixed(1)}`).join(' ')}
              fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 3"
            />

            {/* Hand-tuned stand-in (amber dotted — recolored 2026-07-23; hidden by default 2026-10-08 so skimmers can't take it for the theory) */}
            {showStandIn && <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSyn).toFixed(1)}`).join(' ')}
              fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.75"
            />}

            {/* C(ρ), quadrature display wiring (light violet, dashed) — hugs the baryon line; hidden by default 2026-10-22 */}
            {showQuad && <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSynReal).toFixed(1)}`).join(' ')}
              fill="none" stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="3 3"
            />}

            {/* C(ρ), division wiring g = g_bar/C floored at Ω_m (violet solid) — the form the ledger tests */}
            <path
              d={modelPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.r).toFixed(1)},${toY(p.vSynDiv).toFixed(1)}`).join(' ')}
              fill="none" stroke="#8b5cf6" strokeWidth="2.5"
            />

            {/* Observed data points (blue dots) */}
            {galaxy.points.map(([r, v, e], i) => (
              <g key={i}>
                <line x1={toX(r)} x2={toX(r)} y1={toY(Math.max(v - e, 0))} y2={toY(v + e)} stroke="#38bdf8" strokeWidth="1" opacity="0.6" />
                <circle cx={toX(r)} cy={toY(v)} r="4" fill="#38bdf8" />
              </g>
            ))}

            {/* Legend */}
            <circle cx={pad.left + 20} cy={pad.top + 15} r="4" fill="#38bdf8" />
            <text x={pad.left + 30} y={pad.top + 19} fill="#38bdf8" fontSize="10">Observed (what telescopes measure)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 30} x2={pad.left + 20 + 8} y2={pad.top + 30} stroke="#8b5cf6" strokeWidth="2.5" />
            <text x={pad.left + 30} y={pad.top + 34} fill="#8b5cf6" fontSize="10">This framework&apos;s equation (tested reading, failed)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 45} x2={pad.left + 20 + 8} y2={pad.top + 45} stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
            <text x={pad.left + 30} y={pad.top + 49} fill="#22c55e" fontSize="10">MOND, the rival theory (gravity changes in weak fields)</text>
            <line x1={pad.left + 20 - 8} y1={pad.top + 60} x2={pad.left + 20 + 8} y2={pad.top + 60} stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x={pad.left + 30} y={pad.top + 64} fill="#6b7280" fontSize="10">Newton, visible matter only (no dark matter, no change to gravity)</text>
            {showQuad && <>
              <line x1={pad.left + 20 - 8} y1={pad.top + 75} x2={pad.left + 20 + 8} y2={pad.top + 75} stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x={pad.left + 30} y={pad.top + 79} fill="#c4b5fd" fontSize="10">Same equation, untested second wiring (no visible effect)</text>
            </>}
            {showStandIn && <>
              <line x1={pad.left + 20 - 8} y1={pad.top + (showQuad ? 90 : 75)} x2={pad.left + 20 + 8} y2={pad.top + (showQuad ? 90 : 75)} stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2 4" opacity="0.75" />
              <text x={pad.left + 30} y={pad.top + (showQuad ? 94 : 79)} fill="#f59e0b" fontSize="10" opacity="0.9">NOT the theory — illustration stand-in: hand-drawn to show what a working boost would look like</text>
            </>}
          </svg>
          <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', margin: '0.4rem 0 0' }}>
            Legend in plain words (shortened 2026-10-14 after a beginner simulated-visitor pass could not tell which line was the theory, and again 2026-10-22).
            The violet line is Newton&apos;s shape &times;{Math.sqrt(1/0.315).toFixed(2)} in speed (= &radic;{(1/0.315).toFixed(2)}, the floored boost in gravity).
            The technical definition of each curve (division vs quadrature reading, the &#x03A9;<sub>m</sub> floor, max C<sub>&#x03C1;</sub> on this disk = {maxC.toFixed(3)},
            the simple-&#x03BD; MOND function and its BTFR mass) is in the &ldquo;Reading this plot&rdquo; list and the formula box on this page.
          </p>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3>What You&apos;re Seeing</h3>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
            The <span style={{ color: '#6b7280' }}>dashed line</span> is what rotation curves
            should look like with only visible matter (stars + gas). The
            <span style={{ color: '#38bdf8' }}> blue dots</span> are what we actually observe.
            The gap is the &ldquo;dark matter problem.&rdquo;
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            The <span style={{ color: '#8b5cf6' }}>solid violet curve</span> is Synchronism&apos;s real
            C(&#x03C1;) evaluated on the disk&apos;s density profile, with gravity divided by C as the tests do (in plain words: wherever C is small the theory multiplies gravity up, because dividing by a number below 1 makes it bigger; the floor caps that at 3.17&times;) &mdash; and it
            <strong> gets the shape wrong</strong>: the disk never gets dense enough for C to move off its floor
            (this galaxy&apos;s maximum C(&#x03C1;) is {maxC.toFixed(3)}; the knee needs it to approach 1), so the boost is the
            same everywhere and the curve still falls where the dots stay flat. The{' '}
            <span style={{ color: '#c4b5fd' }}>light-violet dashed curve</span> (behind a checkbox above the chart since 2026-10-22) wires the same C the other way and does nothing.
            The hand-tuned tanh(radius) stand-in this page displayed before 2026-07-08 (it fit because it was drawn to fit) is behind
            the checkbox above the chart. Full disclosure of the formulas below the plot.
          </p>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            The <span style={{ color: '#22c55e' }}>green dashed curve</span> is MOND (Modified
            Newtonian Dynamics) using its real simple-&#x03BD; interpolating function and the acceleration
            scale a&#x2080; &#x2248; 1.2&times;10&#x207B;&#xB9;&#x2070; m/s&sup2;, on a mass fixed by the baryonic
            Tully&ndash;Fisher relation &mdash; no fitted parameters, though the mass itself is read off each galaxy&apos;s plateau. <strong>The MOND curve has a circularity of its
            own</strong> (disclosed 2026-10-08 after a researcher visitor checked it): its baryonic mass comes from the empirical BTFR,
            M<sub>b</sub> = 47&middot;V<sub>flat</sub>&#x2074;, so part of its agreement with V<sub>flat</sub> is built in. The 47 is also not exactly
            consistent with the a&#x2080; used: 1/(G a&#x2080;) = 62.8 M<sub>&#x2609;</sub>/(km/s)&#x2074;, so the green curve levels off at
            (47/62.8)<sup>&frac14;</sup> &asymp; 0.93 V<sub>flat</sub>, not at V<sub>flat</sub>. The disk has no gas component, which matters most for
            DDO 154. A fair comparison uses SPARC mass models for both laws; that is what the ledger&apos;s tests do. The stand-in the framework needed
            to look like MOND is what the site labels a <em>reparametrization</em>; the real equation
            doesn&apos;t even manage the costume.
          </p>
        </div>

        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
          Note: the points and the gray line are SPARC&apos;s own tables (since 2026-10-26 and 2026-11-10). The MOND line uses one a&#x2080; = 1.2&times;10<sup>&minus;10</sup> m/s&sup2; and the simple interpolating function for every galaxy, with no external field and no distance or inclination uncertainty. The fits quoted elsewhere on the site vary those; this chart does not.
        </p>
      </section>

      <RelatedConcepts currentPath="/galaxy-plotter" />
    </>
  );
}
