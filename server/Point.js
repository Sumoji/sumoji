/**
 * Adds two arrays
 * @param  {v1} vector array
 * @param  {v2} vector array to add to v1
 * @return {undefined}
 */
function vectorAdd(v1, v2) {
  return [v1[0] + v1[1], v2[0] + v2[1]];
}

/**
 * Subtracts two arrays
 * @param  {v1} vector array
 * @param  {v2} vector array to subtract by
 * @return {undefined}
 */
function vectorSub(v1, v2) {
  return [v1[0] - v1[1], v2[0] - v2[1]];
}

/**
 * Normalize a vector array
 * @param  {v} vector array
 * @return {undefined}
 */
function vectorNorm(v) {
  var mag = sqrt(Math.pow(v[0], 2), Math.pow(v[1], 2));
  return [v[0]/mag, v[1]/mag];
}

/**
 * Normalize a vector array
 * @param  {v1} vector array 1
 * @param  {v2} vector array 2
 * @return {dot product of v1 and v2}
 */
function vectorDot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

function vectorScalarMult(v1, s) {
  return [v1[0] * s, v1[1] * s];
}

function vectorScalarMult(v1, s) {
  return [v1[0] * s, v1[1] * s];
}
