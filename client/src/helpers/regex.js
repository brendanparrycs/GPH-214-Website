// Extracts solar constant from data
export function extractSolarConstant(data) {
  const match = data.match(/Solar Constant \(W\/m\^2\)\s+\d+\s+\d+\s+(\d+)/);
  return match ? match[1] : "N/A";
}

// Extracts axial tilt from data
export function extractOrbit(data) {
  const match = data.match(/Obliquity to orbit\s*=\s*([\d.]+)/i);
  return match ? match[1].trim() : "N/A";
}

// Extracts distance from sun from data
// Converts from km to mi and scientific notation to standard notation
export function extractRG(data) {
  const match = data.match(/RG=\s*([\d.E+-]+)/);
  if (!match) return null;

  const km = parseFloat(match[1], 10);
  const miles = Math.round(km * 0.621371);
  return miles.toLocaleString();
}
