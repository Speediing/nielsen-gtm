struct Params {
  time: f32,
  texel: vec2f,
}

@group(0) @binding(0) var<uniform> params: Params;

fn rotate(p: vec2f, angle: f32) -> vec2f {
  let c = cos(angle);
  let s = sin(angle);
  return vec2f(c * p.x + s * p.y, -s * p.x + c * p.y);
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

fn triangle(p: vec2f, size: f32) -> f32 {
  let q = vec2f(abs(p.x), p.y);
  return max(q.x * 0.866025 + q.y * 0.5, -q.y) - size * 0.5;
}

fn signalBands(p: vec2f, t: f32) -> f32 {
  var strength = 0.0;
  for (var i = 0; i < 5; i = i + 1) {
    let fi = f32(i);
    let center = -0.26 + fi * 0.13;
    let wave = center + (0.025 + fi * 0.005) * sin(p.x * (5.0 + fi) + t * (0.22 + fi * 0.05));
    let distance = abs(p.y - wave);
    strength += (1.0 - smoothstep(0.0, 0.0032, distance)) * (0.26 - fi * 0.025);
  }
  return strength;
}

@fragment
fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let aspect = params.texel.y / max(params.texel.x, 1.0e-6);
  let p = (uv - vec2f(0.5)) * vec2f(aspect, 1.0);
  let t = params.time;

  let markPoint = rotate(p - vec2f(0.46, -0.08), -0.08);
  let first = triangle(markPoint - vec2f(-0.09, -0.04), 0.18);
  let second = triangle(rotate(markPoint - vec2f(0.03, 0.06), 3.14159), 0.17);
  let third = triangle(markPoint - vec2f(0.13, -0.02), 0.13);
  let lineA = 1.0 - smoothstep(0.0, 0.006, abs(first));
  let lineB = 1.0 - smoothstep(0.0, 0.006, abs(second));
  let lineC = 1.0 - smoothstep(0.0, 0.006, abs(third));

  let traces = signalBands(p, t);
  let cell = floor(uv * vec2f(30.0, 16.0));
  let random = hash21(cell);
  let spark = step(0.976, random) * (0.5 + 0.5 * sin(t * 1.5 + random * 32.0));
  let reveal = smoothstep(0.32, 0.66, uv.x);

  let green = vec3f(0.12, 0.62, 0.45);
  let orange = vec3f(0.95, 0.58, 0.18);
  let red = vec3f(0.86, 0.26, 0.32);
  let paper = vec3f(0.96, 0.92, 0.84);
  let markColor = green * lineA + orange * lineB + red * lineC;
  var alpha = (lineA + lineB + lineC) * 0.23 + traces * 0.27 + spark * 0.05;
  alpha = clamp(alpha * reveal, 0.0, 0.32);
  let color = mix(markColor + paper * traces, paper, spark * 0.35);
  return vec4f(color * alpha, alpha);
}
