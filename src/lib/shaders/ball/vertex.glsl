varying vec2 vUv;
varying vec3 vPosition;
varying float vWave;
uniform float uTime;
uniform float uSphereRadius;

void main() {
  vUv = uv;

  float wave = 0.0;

  vec3 p = position / 0.75 / uSphereRadius;

  wave += sin(p.y * 3.0 + uTime * 2.0) * 0.10;
  wave += sin(p.x * 2.5 + uTime * 1.3) * 0.08;
  wave += sin(p.z * 4.0 + uTime * 1.7) * 0.05;
  wave += sin((p.x + p.z) * 2.0 + uTime * 0.9) * 0.06;

  wave *= uSphereRadius;

  vWave = wave;

  vec3 displaced = position + normal * wave;
  vPosition = displaced;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
}