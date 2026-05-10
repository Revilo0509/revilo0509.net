varying float vWave;
uniform float uSphereRadius;

void main() {
  float maxWave = uSphereRadius * 0.29; // Sum of the wave amplitudes
  float gradient = smoothstep(-maxWave, maxWave, vWave);

  vec3 innerColor = vec3(0.9, 0.1, 0.08);
  vec3 outerColor = vec3(0.1, 0.0, 0.0);

  vec3 color = mix(innerColor, outerColor, gradient);
  gl_FragColor = vec4(color, 1.0);
}