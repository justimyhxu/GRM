import { r as KU } from "./Index-0bb1de05.js";
class S {
  constructor(U = 0, l = 0, F = 0) {
    this.x = U, this.y = l, this.z = F;
  }
  equals(U) {
    return this.x === U.x && this.y === U.y && this.z === U.z;
  }
  add(U) {
    return typeof U == "number" ? new S(this.x + U, this.y + U, this.z + U) : new S(this.x + U.x, this.y + U.y, this.z + U.z);
  }
  subtract(U) {
    return typeof U == "number" ? new S(this.x - U, this.y - U, this.z - U) : new S(this.x - U.x, this.y - U.y, this.z - U.z);
  }
  multiply(U) {
    return typeof U == "number" ? new S(this.x * U, this.y * U, this.z * U) : U instanceof S ? new S(this.x * U.x, this.y * U.y, this.z * U.z) : new S(this.x * U.buffer[0] + this.y * U.buffer[4] + this.z * U.buffer[8] + U.buffer[12], this.x * U.buffer[1] + this.y * U.buffer[5] + this.z * U.buffer[9] + U.buffer[13], this.x * U.buffer[2] + this.y * U.buffer[6] + this.z * U.buffer[10] + U.buffer[14]);
  }
  cross(U) {
    const l = this.y * U.z - this.z * U.y, F = this.z * U.x - this.x * U.z, Q = this.x * U.y - this.y * U.x;
    return new S(l, F, Q);
  }
  dot(U) {
    return this.x * U.x + this.y * U.y + this.z * U.z;
  }
  lerp(U, l) {
    return new S(this.x + (U.x - this.x) * l, this.y + (U.y - this.y) * l, this.z + (U.z - this.z) * l);
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  distanceTo(U) {
    return Math.sqrt((this.x - U.x) ** 2 + (this.y - U.y) ** 2 + (this.z - U.z) ** 2);
  }
  normalize() {
    const U = this.magnitude();
    return new S(this.x / U, this.y / U, this.z / U);
  }
  flat() {
    return [this.x, this.y, this.z];
  }
  clone() {
    return new S(this.x, this.y, this.z);
  }
  toString() {
    return `[${this.flat().join(", ")}]`;
  }
  static One(U = 1) {
    return new S(U, U, U);
  }
}
class K {
  constructor(U = 0, l = 0, F = 0, Q = 1) {
    this.x = U, this.y = l, this.z = F, this.w = Q;
  }
  equals(U) {
    return this.x === U.x && this.y === U.y && this.z === U.z && this.w === U.w;
  }
  normalize() {
    const U = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    return new K(this.x / U, this.y / U, this.z / U, this.w / U);
  }
  multiply(U) {
    const l = this.w, F = this.x, Q = this.y, Z = this.z, d = U.w, V = U.x, B = U.y, t = U.z;
    return new K(l * V + F * d + Q * t - Z * B, l * B - F * t + Q * d + Z * V, l * t + F * B - Q * V + Z * d, l * d - F * V - Q * B - Z * t);
  }
  inverse() {
    const U = this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    return new K(-this.x / U, -this.y / U, -this.z / U, this.w / U);
  }
  apply(U) {
    const l = new K(U.x, U.y, U.z, 0), F = new K(-this.x, -this.y, -this.z, this.w), Q = this.multiply(l).multiply(F);
    return new S(Q.x, Q.y, Q.z);
  }
  flat() {
    return [this.x, this.y, this.z, this.w];
  }
  clone() {
    return new K(this.x, this.y, this.z, this.w);
  }
  static FromEuler(U) {
    const l = U.x / 2, F = U.y / 2, Q = U.z / 2, Z = Math.cos(F), d = Math.sin(F), V = Math.cos(l), B = Math.sin(l), t = Math.cos(Q), R = Math.sin(Q);
    return new K(Z * B * t + d * V * R, d * V * t - Z * B * R, Z * V * R - d * B * t, Z * V * t + d * B * R);
  }
  toEuler() {
    const U = 2 * (this.w * this.x + this.y * this.z), l = 1 - 2 * (this.x * this.x + this.y * this.y), F = Math.atan2(U, l);
    let Q;
    const Z = 2 * (this.w * this.y - this.z * this.x);
    Q = Math.abs(Z) >= 1 ? Math.sign(Z) * Math.PI / 2 : Math.asin(Z);
    const d = 2 * (this.w * this.z + this.x * this.y), V = 1 - 2 * (this.y * this.y + this.z * this.z), B = Math.atan2(d, V);
    return new S(F, Q, B);
  }
  static FromMatrix3(U) {
    const l = U.buffer, F = l[0] + l[4] + l[8];
    let Q, Z, d, V;
    if (F > 0) {
      const B = 0.5 / Math.sqrt(F + 1);
      V = 0.25 / B, Q = (l[7] - l[5]) * B, Z = (l[2] - l[6]) * B, d = (l[3] - l[1]) * B;
    } else if (l[0] > l[4] && l[0] > l[8]) {
      const B = 2 * Math.sqrt(1 + l[0] - l[4] - l[8]);
      V = (l[7] - l[5]) / B, Q = 0.25 * B, Z = (l[1] + l[3]) / B, d = (l[2] + l[6]) / B;
    } else if (l[4] > l[8]) {
      const B = 2 * Math.sqrt(1 + l[4] - l[0] - l[8]);
      V = (l[2] - l[6]) / B, Q = (l[1] + l[3]) / B, Z = 0.25 * B, d = (l[5] + l[7]) / B;
    } else {
      const B = 2 * Math.sqrt(1 + l[8] - l[0] - l[4]);
      V = (l[3] - l[1]) / B, Q = (l[2] + l[6]) / B, Z = (l[5] + l[7]) / B, d = 0.25 * B;
    }
    return new K(Q, Z, d, V);
  }
  static FromAxisAngle(U, l) {
    const F = l / 2, Q = Math.sin(F), Z = Math.cos(F);
    return new K(U.x * Q, U.y * Q, U.z * Q, Z);
  }
  toString() {
    return `[${this.flat().join(", ")}]`;
  }
}
class gU {
  constructor() {
    const U = /* @__PURE__ */ new Map();
    this.addEventListener = (l, F) => {
      U.has(l) || U.set(l, /* @__PURE__ */ new Set()), U.get(l).add(F);
    }, this.removeEventListener = (l, F) => {
      U.has(l) && U.get(l).delete(F);
    }, this.hasEventListener = (l, F) => !!U.has(l) && U.get(l).has(F), this.dispatchEvent = (l) => {
      if (U.has(l.type))
        for (const F of U.get(l.type))
          F(l);
    };
  }
}
class BU {
  constructor(U = 1, l = 0, F = 0, Q = 0, Z = 0, d = 1, V = 0, B = 0, t = 0, R = 0, i = 1, s = 0, J = 0, c = 0, N = 0, o = 1) {
    this.buffer = [U, l, F, Q, Z, d, V, B, t, R, i, s, J, c, N, o];
  }
  equals(U) {
    if (this.buffer.length !== U.buffer.length)
      return !1;
    if (this.buffer === U.buffer)
      return !0;
    for (let l = 0; l < this.buffer.length; l++)
      if (this.buffer[l] !== U.buffer[l])
        return !1;
    return !0;
  }
  multiply(U) {
    const l = this.buffer, F = U.buffer;
    return new BU(F[0] * l[0] + F[1] * l[4] + F[2] * l[8] + F[3] * l[12], F[0] * l[1] + F[1] * l[5] + F[2] * l[9] + F[3] * l[13], F[0] * l[2] + F[1] * l[6] + F[2] * l[10] + F[3] * l[14], F[0] * l[3] + F[1] * l[7] + F[2] * l[11] + F[3] * l[15], F[4] * l[0] + F[5] * l[4] + F[6] * l[8] + F[7] * l[12], F[4] * l[1] + F[5] * l[5] + F[6] * l[9] + F[7] * l[13], F[4] * l[2] + F[5] * l[6] + F[6] * l[10] + F[7] * l[14], F[4] * l[3] + F[5] * l[7] + F[6] * l[11] + F[7] * l[15], F[8] * l[0] + F[9] * l[4] + F[10] * l[8] + F[11] * l[12], F[8] * l[1] + F[9] * l[5] + F[10] * l[9] + F[11] * l[13], F[8] * l[2] + F[9] * l[6] + F[10] * l[10] + F[11] * l[14], F[8] * l[3] + F[9] * l[7] + F[10] * l[11] + F[11] * l[15], F[12] * l[0] + F[13] * l[4] + F[14] * l[8] + F[15] * l[12], F[12] * l[1] + F[13] * l[5] + F[14] * l[9] + F[15] * l[13], F[12] * l[2] + F[13] * l[6] + F[14] * l[10] + F[15] * l[14], F[12] * l[3] + F[13] * l[7] + F[14] * l[11] + F[15] * l[15]);
  }
  clone() {
    const U = this.buffer;
    return new BU(U[0], U[1], U[2], U[3], U[4], U[5], U[6], U[7], U[8], U[9], U[10], U[11], U[12], U[13], U[14], U[15]);
  }
  determinant() {
    const U = this.buffer;
    return U[12] * U[9] * U[6] * U[3] - U[8] * U[13] * U[6] * U[3] - U[12] * U[5] * U[10] * U[3] + U[4] * U[13] * U[10] * U[3] + U[8] * U[5] * U[14] * U[3] - U[4] * U[9] * U[14] * U[3] - U[12] * U[9] * U[2] * U[7] + U[8] * U[13] * U[2] * U[7] + U[12] * U[1] * U[10] * U[7] - U[0] * U[13] * U[10] * U[7] - U[8] * U[1] * U[14] * U[7] + U[0] * U[9] * U[14] * U[7] + U[12] * U[5] * U[2] * U[11] - U[4] * U[13] * U[2] * U[11] - U[12] * U[1] * U[6] * U[11] + U[0] * U[13] * U[6] * U[11] + U[4] * U[1] * U[14] * U[11] - U[0] * U[5] * U[14] * U[11] - U[8] * U[5] * U[2] * U[15] + U[4] * U[9] * U[2] * U[15] + U[8] * U[1] * U[6] * U[15] - U[0] * U[9] * U[6] * U[15] - U[4] * U[1] * U[10] * U[15] + U[0] * U[5] * U[10] * U[15];
  }
  invert() {
    const U = this.buffer, l = this.determinant();
    if (l === 0)
      throw new Error("Matrix is not invertible.");
    const F = 1 / l;
    return new BU(F * (U[5] * U[10] * U[15] - U[5] * U[11] * U[14] - U[9] * U[6] * U[15] + U[9] * U[7] * U[14] + U[13] * U[6] * U[11] - U[13] * U[7] * U[10]), F * (-U[1] * U[10] * U[15] + U[1] * U[11] * U[14] + U[9] * U[2] * U[15] - U[9] * U[3] * U[14] - U[13] * U[2] * U[11] + U[13] * U[3] * U[10]), F * (U[1] * U[6] * U[15] - U[1] * U[7] * U[14] - U[5] * U[2] * U[15] + U[5] * U[3] * U[14] + U[13] * U[2] * U[7] - U[13] * U[3] * U[6]), F * (-U[1] * U[6] * U[11] + U[1] * U[7] * U[10] + U[5] * U[2] * U[11] - U[5] * U[3] * U[10] - U[9] * U[2] * U[7] + U[9] * U[3] * U[6]), F * (-U[4] * U[10] * U[15] + U[4] * U[11] * U[14] + U[8] * U[6] * U[15] - U[8] * U[7] * U[14] - U[12] * U[6] * U[11] + U[12] * U[7] * U[10]), F * (U[0] * U[10] * U[15] - U[0] * U[11] * U[14] - U[8] * U[2] * U[15] + U[8] * U[3] * U[14] + U[12] * U[2] * U[11] - U[12] * U[3] * U[10]), F * (-U[0] * U[6] * U[15] + U[0] * U[7] * U[14] + U[4] * U[2] * U[15] - U[4] * U[3] * U[14] - U[12] * U[2] * U[7] + U[12] * U[3] * U[6]), F * (U[0] * U[6] * U[11] - U[0] * U[7] * U[10] - U[4] * U[2] * U[11] + U[4] * U[3] * U[10] + U[8] * U[2] * U[7] - U[8] * U[3] * U[6]), F * (U[4] * U[9] * U[15] - U[4] * U[11] * U[13] - U[8] * U[5] * U[15] + U[8] * U[7] * U[13] + U[12] * U[5] * U[11] - U[12] * U[7] * U[9]), F * (-U[0] * U[9] * U[15] + U[0] * U[11] * U[13] + U[8] * U[1] * U[15] - U[8] * U[3] * U[13] - U[12] * U[1] * U[11] + U[12] * U[3] * U[9]), F * (U[0] * U[5] * U[15] - U[0] * U[7] * U[13] - U[4] * U[1] * U[15] + U[4] * U[3] * U[13] + U[12] * U[1] * U[7] - U[12] * U[3] * U[5]), F * (-U[0] * U[5] * U[11] + U[0] * U[7] * U[9] + U[4] * U[1] * U[11] - U[4] * U[3] * U[9] - U[8] * U[1] * U[7] + U[8] * U[3] * U[5]), F * (-U[4] * U[9] * U[14] + U[4] * U[10] * U[13] + U[8] * U[5] * U[14] - U[8] * U[6] * U[13] - U[12] * U[5] * U[10] + U[12] * U[6] * U[9]), F * (U[0] * U[9] * U[14] - U[0] * U[10] * U[13] - U[8] * U[1] * U[14] + U[8] * U[2] * U[13] + U[12] * U[1] * U[10] - U[12] * U[2] * U[9]), F * (-U[0] * U[5] * U[14] + U[0] * U[6] * U[13] + U[4] * U[1] * U[14] - U[4] * U[2] * U[13] - U[12] * U[1] * U[6] + U[12] * U[2] * U[5]), F * (U[0] * U[5] * U[10] - U[0] * U[6] * U[9] - U[4] * U[1] * U[10] + U[4] * U[2] * U[9] + U[8] * U[1] * U[6] - U[8] * U[2] * U[5]));
  }
  static Compose(U, l, F) {
    const Q = l.x, Z = l.y, d = l.z, V = l.w, B = Q + Q, t = Z + Z, R = d + d, i = Q * B, s = Q * t, J = Q * R, c = Z * t, N = Z * R, o = d * R, X = V * B, G = V * t, E = V * R, Y = F.x, x = F.y, v = F.z;
    return new BU((1 - (c + o)) * Y, (s + E) * Y, (J - G) * Y, 0, (s - E) * x, (1 - (i + o)) * x, (N + X) * x, 0, (J + G) * v, (N - X) * v, (1 - (i + c)) * v, 0, U.x, U.y, U.z, 1);
  }
  toString() {
    return `[${this.buffer.join(", ")}]`;
  }
}
class jU extends Event {
  constructor(U) {
    super("objectAdded"), this.object = U;
  }
}
class OU extends Event {
  constructor(U) {
    super("objectRemoved"), this.object = U;
  }
}
class LU extends Event {
  constructor(U) {
    super("objectChanged"), this.object = U;
  }
}
class rU extends gU {
  constructor() {
    super(), this.positionChanged = !1, this.rotationChanged = !1, this.scaleChanged = !1, this._position = new S(), this._rotation = new K(), this._scale = new S(1, 1, 1), this._transform = new BU(), this._changeEvent = new LU(this), this.update = () => {
    }, this.applyPosition = () => {
      this.position = new S();
    }, this.applyRotation = () => {
      this.rotation = new K();
    }, this.applyScale = () => {
      this.scale = new S(1, 1, 1);
    };
  }
  _updateMatrix() {
    this._transform = BU.Compose(this._position, this._rotation, this._scale);
  }
  get position() {
    return this._position;
  }
  set position(U) {
    this._position.equals(U) || (this._position = U, this.positionChanged = !0, this._updateMatrix(), this.dispatchEvent(this._changeEvent));
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(U) {
    this._rotation.equals(U) || (this._rotation = U, this.rotationChanged = !0, this._updateMatrix(), this.dispatchEvent(this._changeEvent));
  }
  get scale() {
    return this._scale;
  }
  set scale(U) {
    this._scale.equals(U) || (this._scale = U, this.scaleChanged = !0, this._updateMatrix(), this.dispatchEvent(this._changeEvent));
  }
  get forward() {
    let U = new S(0, 0, 1);
    return U = this.rotation.apply(U), U;
  }
  get transform() {
    return this._transform;
  }
}
class dU {
  constructor(U = 1, l = 0, F = 0, Q = 0, Z = 1, d = 0, V = 0, B = 0, t = 1) {
    this.buffer = [U, l, F, Q, Z, d, V, B, t];
  }
  equals(U) {
    if (this.buffer.length !== U.buffer.length)
      return !1;
    if (this.buffer === U.buffer)
      return !0;
    for (let l = 0; l < this.buffer.length; l++)
      if (this.buffer[l] !== U.buffer[l])
        return !1;
    return !0;
  }
  multiply(U) {
    const l = this.buffer, F = U.buffer;
    return new dU(F[0] * l[0] + F[3] * l[1] + F[6] * l[2], F[1] * l[0] + F[4] * l[1] + F[7] * l[2], F[2] * l[0] + F[5] * l[1] + F[8] * l[2], F[0] * l[3] + F[3] * l[4] + F[6] * l[5], F[1] * l[3] + F[4] * l[4] + F[7] * l[5], F[2] * l[3] + F[5] * l[4] + F[8] * l[5], F[0] * l[6] + F[3] * l[7] + F[6] * l[8], F[1] * l[6] + F[4] * l[7] + F[7] * l[8], F[2] * l[6] + F[5] * l[7] + F[8] * l[8]);
  }
  clone() {
    const U = this.buffer;
    return new dU(U[0], U[1], U[2], U[3], U[4], U[5], U[6], U[7], U[8]);
  }
  static Eye(U = 1) {
    return new dU(U, 0, 0, 0, U, 0, 0, 0, U);
  }
  static Diagonal(U) {
    return new dU(U.x, 0, 0, 0, U.y, 0, 0, 0, U.z);
  }
  static RotationFromQuaternion(U) {
    return new dU(1 - 2 * U.y * U.y - 2 * U.z * U.z, 2 * U.x * U.y - 2 * U.z * U.w, 2 * U.x * U.z + 2 * U.y * U.w, 2 * U.x * U.y + 2 * U.z * U.w, 1 - 2 * U.x * U.x - 2 * U.z * U.z, 2 * U.y * U.z - 2 * U.x * U.w, 2 * U.x * U.z - 2 * U.y * U.w, 2 * U.y * U.z + 2 * U.x * U.w, 1 - 2 * U.x * U.x - 2 * U.y * U.y);
  }
  static RotationFromEuler(U) {
    const l = Math.cos(U.x), F = Math.sin(U.x), Q = Math.cos(U.y), Z = Math.sin(U.y), d = Math.cos(U.z), V = Math.sin(U.z);
    return new dU(Q * d + Z * F * V, -Q * V + Z * F * d, Z * l, l * V, l * d, -F, -Z * d + Q * F * V, Z * V + Q * F * d, Q * l);
  }
  toString() {
    return `[${this.buffer.join(", ")}]`;
  }
}
class _ {
  constructor(U = 0, l = null, F = null, Q = null, Z = null) {
    this.changed = !1, this.detached = !1, this._vertexCount = U, this._positions = l || new Float32Array(0), this._rotations = F || new Float32Array(0), this._scales = Q || new Float32Array(0), this._colors = Z || new Uint8Array(0), this._selection = new Uint8Array(this.vertexCount), this.translate = (d) => {
      for (let V = 0; V < this.vertexCount; V++)
        this.positions[3 * V + 0] += d.x, this.positions[3 * V + 1] += d.y, this.positions[3 * V + 2] += d.z;
      this.changed = !0;
    }, this.rotate = (d) => {
      const V = dU.RotationFromQuaternion(d).buffer;
      for (let B = 0; B < this.vertexCount; B++) {
        const t = this.positions[3 * B + 0], R = this.positions[3 * B + 1], i = this.positions[3 * B + 2];
        this.positions[3 * B + 0] = V[0] * t + V[1] * R + V[2] * i, this.positions[3 * B + 1] = V[3] * t + V[4] * R + V[5] * i, this.positions[3 * B + 2] = V[6] * t + V[7] * R + V[8] * i;
        const s = new K(this.rotations[4 * B + 1], this.rotations[4 * B + 2], this.rotations[4 * B + 3], this.rotations[4 * B + 0]), J = d.multiply(s);
        this.rotations[4 * B + 1] = J.x, this.rotations[4 * B + 2] = J.y, this.rotations[4 * B + 3] = J.z, this.rotations[4 * B + 0] = J.w;
      }
      this.changed = !0;
    }, this.scale = (d) => {
      for (let V = 0; V < this.vertexCount; V++)
        this.positions[3 * V + 0] *= d.x, this.positions[3 * V + 1] *= d.y, this.positions[3 * V + 2] *= d.z, this.scales[3 * V + 0] *= d.x, this.scales[3 * V + 1] *= d.y, this.scales[3 * V + 2] *= d.z;
      this.changed = !0;
    }, this.serialize = () => {
      const d = new Uint8Array(this.vertexCount * _.RowLength), V = new Float32Array(d.buffer), B = new Uint8Array(d.buffer);
      for (let t = 0; t < this.vertexCount; t++)
        V[8 * t + 0] = this.positions[3 * t + 0], V[8 * t + 1] = this.positions[3 * t + 1], V[8 * t + 2] = this.positions[3 * t + 2], B[32 * t + 24 + 0] = this.colors[4 * t + 0], B[32 * t + 24 + 1] = this.colors[4 * t + 1], B[32 * t + 24 + 2] = this.colors[4 * t + 2], B[32 * t + 24 + 3] = this.colors[4 * t + 3], V[8 * t + 3 + 0] = this.scales[3 * t + 0], V[8 * t + 3 + 1] = this.scales[3 * t + 1], V[8 * t + 3 + 2] = this.scales[3 * t + 2], B[32 * t + 28 + 0] = 128 * this.rotations[4 * t + 0] + 128 & 255, B[32 * t + 28 + 1] = 128 * this.rotations[4 * t + 1] + 128 & 255, B[32 * t + 28 + 2] = 128 * this.rotations[4 * t + 2] + 128 & 255, B[32 * t + 28 + 3] = 128 * this.rotations[4 * t + 3] + 128 & 255;
      return d;
    }, this.reattach = (d, V, B, t, R) => {
      console.assert(d.byteLength === 3 * this.vertexCount * 4, `Expected ${3 * this.vertexCount * 4} bytes, got ${d.byteLength} bytes`), this._positions = new Float32Array(d), this._rotations = new Float32Array(V), this._scales = new Float32Array(B), this._colors = new Uint8Array(t), this._selection = new Uint8Array(R), this.detached = !1;
    };
  }
  static Deserialize(U) {
    const l = U.length / _.RowLength, F = new Float32Array(3 * l), Q = new Float32Array(4 * l), Z = new Float32Array(3 * l), d = new Uint8Array(4 * l), V = new Float32Array(U.buffer), B = new Uint8Array(U.buffer);
    for (let t = 0; t < l; t++)
      F[3 * t + 0] = V[8 * t + 0], F[3 * t + 1] = V[8 * t + 1], F[3 * t + 2] = V[8 * t + 2], Q[4 * t + 0] = (B[32 * t + 28 + 0] - 128) / 128, Q[4 * t + 1] = (B[32 * t + 28 + 1] - 128) / 128, Q[4 * t + 2] = (B[32 * t + 28 + 2] - 128) / 128, Q[4 * t + 3] = (B[32 * t + 28 + 3] - 128) / 128, Z[3 * t + 0] = V[8 * t + 3 + 0], Z[3 * t + 1] = V[8 * t + 3 + 1], Z[3 * t + 2] = V[8 * t + 3 + 2], d[4 * t + 0] = B[32 * t + 24 + 0], d[4 * t + 1] = B[32 * t + 24 + 1], d[4 * t + 2] = B[32 * t + 24 + 2], d[4 * t + 3] = B[32 * t + 24 + 3];
    return new _(l, F, Q, Z, d);
  }
  get vertexCount() {
    return this._vertexCount;
  }
  get positions() {
    return this._positions;
  }
  get rotations() {
    return this._rotations;
  }
  get scales() {
    return this._scales;
  }
  get colors() {
    return this._colors;
  }
  get selection() {
    return this._selection;
  }
}
_.RowLength = 32;
class cU {
  static SplatToPLY(U, l) {
    let F = `ply
format binary_little_endian 1.0
`;
    F += `element vertex ${l}
`;
    const Q = ["x", "y", "z", "nx", "ny", "nz", "f_dc_0", "f_dc_1", "f_dc_2"];
    for (let c = 0; c < 45; c++)
      Q.push(`f_rest_${c}`);
    Q.push("opacity"), Q.push("scale_0"), Q.push("scale_1"), Q.push("scale_2"), Q.push("rot_0"), Q.push("rot_1"), Q.push("rot_2"), Q.push("rot_3");
    for (const c of Q)
      F += `property float ${c}
`;
    F += `end_header
`;
    const Z = new TextEncoder().encode(F), d = 248, V = l * d, B = new DataView(new ArrayBuffer(Z.length + V));
    new Uint8Array(B.buffer).set(Z, 0);
    const t = new Float32Array(U), R = new Uint8Array(U), i = Z.length, s = 220, J = 232;
    for (let c = 0; c < l; c++) {
      const N = t[8 * c + 0], o = t[8 * c + 1], X = t[8 * c + 2], G = (R[32 * c + 24 + 0] / 255 - 0.5) / this.SH_C0, E = (R[32 * c + 24 + 1] / 255 - 0.5) / this.SH_C0, Y = (R[32 * c + 24 + 2] / 255 - 0.5) / this.SH_C0, x = R[32 * c + 24 + 3] / 255, v = Math.log(x / (1 - x)), D = Math.log(t[8 * c + 3 + 0]), p = Math.log(t[8 * c + 3 + 1]), I = Math.log(t[8 * c + 3 + 2]);
      let u = new K((R[32 * c + 28 + 1] - 128) / 128, (R[32 * c + 28 + 2] - 128) / 128, (R[32 * c + 28 + 3] - 128) / 128, (R[32 * c + 28 + 0] - 128) / 128);
      u = u.normalize();
      const q = u.w, ZU = u.x, RU = u.y, nU = u.z;
      B.setFloat32(i + d * c + 0, N, !0), B.setFloat32(i + d * c + 4, o, !0), B.setFloat32(i + d * c + 8, X, !0), B.setFloat32(i + d * c + 24 + 0, G, !0), B.setFloat32(i + d * c + 24 + 4, E, !0), B.setFloat32(i + d * c + 24 + 8, Y, !0), B.setFloat32(i + d * c + 216, v, !0), B.setFloat32(i + d * c + s + 0, D, !0), B.setFloat32(i + d * c + s + 4, p, !0), B.setFloat32(i + d * c + s + 8, I, !0), B.setFloat32(i + d * c + J + 0, q, !0), B.setFloat32(i + d * c + J + 4, ZU, !0), B.setFloat32(i + d * c + J + 8, RU, !0), B.setFloat32(i + d * c + J + 12, nU, !0);
    }
    return B.buffer;
  }
}
cU.SH_C0 = 0.28209479177387814;
class tU extends rU {
  constructor(U = void 0) {
    super(), this.selectedChanged = !1, this._selected = !1, this._data = U || new _(), this.applyPosition = () => {
      this.data.translate(this.position), this.position = new S();
    }, this.applyRotation = () => {
      this.data.rotate(this.rotation), this.rotation = new K();
    }, this.applyScale = () => {
      this.data.scale(this.scale), this.scale = new S(1, 1, 1);
    };
  }
  saveToFile(U = null, l = null) {
    if (!document)
      return;
    if (l) {
      if (l !== "splat" && l !== "ply")
        throw new Error("Invalid format. Must be 'splat' or 'ply'");
    } else
      l = "splat";
    if (!U) {
      const d = /* @__PURE__ */ new Date();
      U = `splat-${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}.${l}`;
    }
    this.applyRotation(), this.applyScale(), this.applyPosition();
    const F = this.data.serialize();
    let Q;
    if (l === "ply") {
      const d = cU.SplatToPLY(F.buffer, this.data.vertexCount);
      Q = new Blob([d], { type: "application/octet-stream" });
    } else
      Q = new Blob([F.buffer], { type: "application/octet-stream" });
    const Z = document.createElement("a");
    Z.download = U, Z.href = URL.createObjectURL(Q), Z.click();
  }
  get data() {
    return this._data;
  }
  get selected() {
    return this._selected;
  }
  set selected(U) {
    this._selected !== U && (this._selected = U, this.selectedChanged = !0, this.dispatchEvent(this._changeEvent));
  }
}
class PU {
  constructor() {
    this._fx = 1132, this._fy = 1132, this._near = 0.1, this._far = 100, this._width = 512, this._height = 512, this._projectionMatrix = new BU(), this._viewMatrix = new BU(), this._viewProj = new BU(), this._updateProjectionMatrix = () => {
      this._projectionMatrix = new BU(2 * this.fx / this.width, 0, 0, 0, 0, -2 * this.fy / this.height, 0, 0, 0, 0, this.far / (this.far - this.near), 1, 0, 0, -this.far * this.near / (this.far - this.near), 0), this._viewProj = this.projectionMatrix.multiply(this.viewMatrix);
    }, this.update = (U, l) => {
      const F = dU.RotationFromQuaternion(l).buffer, Q = U.flat();
      this._viewMatrix = new BU(F[0], F[1], F[2], 0, F[3], F[4], F[5], 0, F[6], F[7], F[8], 0, -Q[0] * F[0] - Q[1] * F[3] - Q[2] * F[6], -Q[0] * F[1] - Q[1] * F[4] - Q[2] * F[7], -Q[0] * F[2] - Q[1] * F[5] - Q[2] * F[8], 1), this._viewProj = this.projectionMatrix.multiply(this.viewMatrix);
    }, this.setSize = (U, l) => {
      this._width = U, this._height = l, this._updateProjectionMatrix();
    };
  }
  get fx() {
    return this._fx;
  }
  set fx(U) {
    this._fx !== U && (this._fx = U, this._updateProjectionMatrix());
  }
  get fy() {
    return this._fy;
  }
  set fy(U) {
    this._fy !== U && (this._fy = U, this._updateProjectionMatrix());
  }
  get near() {
    return this._near;
  }
  set near(U) {
    this._near !== U && (this._near = U, this._updateProjectionMatrix());
  }
  get far() {
    return this._far;
  }
  set far(U) {
    this._far !== U && (this._far = U, this._updateProjectionMatrix());
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get projectionMatrix() {
    return this._projectionMatrix;
  }
  get viewMatrix() {
    return this._viewMatrix;
  }
  get viewProj() {
    return this._viewProj;
  }
}
class QU {
  constructor(U = 0, l = 0, F = 0, Q = 0) {
    this.x = U, this.y = l, this.z = F, this.w = Q;
  }
  equals(U) {
    return this.x === U.x && this.y === U.y && this.z === U.z && this.w === U.w;
  }
  add(U) {
    return typeof U == "number" ? new QU(this.x + U, this.y + U, this.z + U, this.w + U) : new QU(this.x + U.x, this.y + U.y, this.z + U.z, this.w + U.w);
  }
  subtract(U) {
    return typeof U == "number" ? new QU(this.x - U, this.y - U, this.z - U, this.w - U) : new QU(this.x - U.x, this.y - U.y, this.z - U.z, this.w - U.w);
  }
  multiply(U) {
    return typeof U == "number" ? new QU(this.x * U, this.y * U, this.z * U, this.w * U) : U instanceof QU ? new QU(this.x * U.x, this.y * U.y, this.z * U.z, this.w * U.w) : new QU(this.x * U.buffer[0] + this.y * U.buffer[4] + this.z * U.buffer[8] + this.w * U.buffer[12], this.x * U.buffer[1] + this.y * U.buffer[5] + this.z * U.buffer[9] + this.w * U.buffer[13], this.x * U.buffer[2] + this.y * U.buffer[6] + this.z * U.buffer[10] + this.w * U.buffer[14], this.x * U.buffer[3] + this.y * U.buffer[7] + this.z * U.buffer[11] + this.w * U.buffer[15]);
  }
  dot(U) {
    return this.x * U.x + this.y * U.y + this.z * U.z + this.w * U.w;
  }
  lerp(U, l) {
    return new QU(this.x + (U.x - this.x) * l, this.y + (U.y - this.y) * l, this.z + (U.z - this.z) * l, this.w + (U.w - this.w) * l);
  }
  magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  distanceTo(U) {
    return Math.sqrt((this.x - U.x) ** 2 + (this.y - U.y) ** 2 + (this.z - U.z) ** 2 + (this.w - U.w) ** 2);
  }
  normalize() {
    const U = this.magnitude();
    return new QU(this.x / U, this.y / U, this.z / U, this.w / U);
  }
  flat() {
    return [this.x, this.y, this.z, this.w];
  }
  clone() {
    return new QU(this.x, this.y, this.z, this.w);
  }
  toString() {
    return `[${this.flat().join(", ")}]`;
  }
}
class _U extends rU {
  constructor(U = void 0) {
    super(), this._data = U || new PU(), this._position = new S(0, 0, -5), this.update = () => {
      this.data.update(this.position, this.rotation);
    }, this.screenPointToRay = (l, F) => {
      const Q = new QU(l, F, -1, 1), Z = this._data.projectionMatrix.invert(), d = Q.multiply(Z), V = this._data.viewMatrix.invert(), B = d.multiply(V);
      return new S(B.x / B.w, B.y / B.w, B.z / B.w).subtract(this.position).normalize();
    };
  }
  get data() {
    return this._data;
  }
}
class qU extends gU {
  constructor() {
    super(), this._objects = [], this.addObject = (U) => {
      this.objects.push(U), this.dispatchEvent(new jU(U));
    }, this.removeObject = (U) => {
      const l = this.objects.indexOf(U);
      if (l < 0)
        throw new Error("Object not found in scene");
      this.objects.splice(l, 1), this.dispatchEvent(new OU(U));
    }, this.findObject = (U) => {
      for (const l of this.objects)
        if (U(l))
          return l;
    }, this.findObjectOfType = (U) => {
      for (const l of this.objects)
        if (l instanceof U)
          return l;
    }, this.reset = () => {
      const U = this.objects.slice();
      for (const l of U)
        this.removeObject(l);
    }, this.reset();
  }
  saveToFile(U = null, l = null) {
    if (!document)
      return;
    if (l) {
      if (l !== "splat" && l !== "ply")
        throw new Error("Invalid format. Must be 'splat' or 'ply'");
    } else
      l = "splat";
    if (!U) {
      const t = /* @__PURE__ */ new Date();
      U = `scene-${t.getFullYear()}-${t.getMonth() + 1}-${t.getDate()}.${l}`;
    }
    const F = [];
    let Q = 0;
    for (const t of this.objects)
      if (t.applyRotation(), t.applyScale(), t.applyPosition(), t instanceof tU) {
        const R = t.data.serialize();
        F.push(R), Q += t.data.vertexCount;
      }
    const Z = new Uint8Array(Q * _.RowLength);
    let d, V = 0;
    for (const t of F)
      Z.set(t, V), V += t.length;
    if (l === "ply") {
      const t = cU.SplatToPLY(Z.buffer, Q);
      d = new Blob([t], { type: "application/octet-stream" });
    } else
      d = new Blob([Z.buffer], { type: "application/octet-stream" });
    const B = document.createElement("a");
    B.download = U, B.href = URL.createObjectURL(d), B.click();
  }
  get objects() {
    return this._objects;
  }
}
async function NU(r, U) {
  const l = await fetch(r, { mode: "cors", credentials: "omit", cache: U ? "force-cache" : "default" });
  if (l.status != 200)
    throw new Error(l.status + " Unable to load " + l.url);
  return l;
}
async function GU(r, U) {
  return r.headers.has("content-length") ? async function(l, F) {
    const Q = l.body.getReader(), Z = parseInt(l.headers.get("content-length")), d = new Uint8Array(Z);
    let V = 0;
    for (; ; ) {
      const { done: B, value: t } = await Q.read();
      if (B)
        break;
      d.set(t, V), V += t.length, F == null || F(V / Z);
    }
    return d;
  }(r, U) : async function(l, F) {
    const Q = l.body.getReader(), Z = [];
    let d = 0;
    for (; ; ) {
      const { done: t, value: R } = await Q.read();
      if (t)
        break;
      Z.push(R), d += R.length;
    }
    const V = new Uint8Array(d);
    let B = 0;
    for (const t of Z)
      V.set(t, B), B += t.length, F == null || F(B / d);
    return V;
  }(r, U);
}
class $U {
  static async LoadAsync(U, l, F, Q = !1) {
    const Z = await NU(U, Q), d = await GU(Z, F), V = _.Deserialize(d), B = new tU(V);
    return l.addObject(B), B;
  }
  static async LoadFromFileAsync(U, l, F) {
    const Q = new FileReader();
    let Z = new tU();
    return Q.onload = (d) => {
      const V = new Uint8Array(d.target.result), B = _.Deserialize(V);
      Z = new tU(B), l.addObject(Z);
    }, Q.onprogress = (d) => {
      F == null || F(d.loaded / d.total);
    }, Q.readAsArrayBuffer(U), await new Promise((d) => {
      Q.onloadend = () => {
        d();
      };
    }), Z;
  }
}
class UF {
  static async LoadAsync(U, l, F, Q = "", Z = !1) {
    const d = await NU(U, Z), V = await GU(d, F);
    if (V[0] !== 112 || V[1] !== 108 || V[2] !== 121 || V[3] !== 10)
      throw new Error("Invalid PLY file");
    const B = new Uint8Array(this._ParsePLYBuffer(V.buffer, Q)), t = _.Deserialize(B), R = new tU(t);
    return l.addObject(R), R;
  }
  static async LoadFromFileAsync(U, l, F, Q = "") {
    const Z = new FileReader();
    let d = new tU();
    return Z.onload = (V) => {
      const B = new Uint8Array(this._ParsePLYBuffer(V.target.result, Q)), t = _.Deserialize(B);
      d = new tU(t), l.addObject(d);
    }, Z.onprogress = (V) => {
      F == null || F(V.loaded / V.total);
    }, Z.readAsArrayBuffer(U), await new Promise((V) => {
      Z.onloadend = () => {
        V();
      };
    }), d;
  }
  static _ParsePLYBuffer(U, l) {
    const F = new Uint8Array(U), Q = new TextDecoder().decode(F.slice(0, 10240)), Z = `end_header
`, d = Q.indexOf(Z);
    if (d < 0)
      throw new Error("Unable to read .ply file header");
    const V = parseInt(/element vertex (\d+)\n/.exec(Q)[1]);
    let B = 0;
    const t = { double: 8, int: 4, uint: 4, float: 4, short: 2, ushort: 2, uchar: 1 }, R = [];
    for (const c of Q.slice(0, d).split(`
`).filter((N) => N.startsWith("property "))) {
      const [N, o, X] = c.split(" ");
      if (R.push({ name: X, type: o, offset: B }), !t[o])
        throw new Error(`Unsupported property type: ${o}`);
      B += t[o];
    }
    const i = new DataView(U, d + 11), s = new ArrayBuffer(_.RowLength * V), J = K.FromEuler(new S(Math.PI / 2, 0, 0));
    for (let c = 0; c < V; c++) {
      const N = new Float32Array(s, c * _.RowLength, 3), o = new Float32Array(s, c * _.RowLength + 12, 3), X = new Uint8ClampedArray(s, c * _.RowLength + 24, 4), G = new Uint8ClampedArray(s, c * _.RowLength + 28, 4);
      let E = 255, Y = 0, x = 0, v = 0;
      R.forEach((p) => {
        let I;
        switch (p.type) {
          case "float":
            I = i.getFloat32(p.offset + c * B, !0);
            break;
          case "int":
            I = i.getInt32(p.offset + c * B, !0);
            break;
          default:
            throw new Error(`Unsupported property type: ${p.type}`);
        }
        switch (p.name) {
          case "x":
            N[0] = I;
            break;
          case "y":
            N[1] = I;
            break;
          case "z":
            N[2] = I;
            break;
          case "scale_0":
            o[0] = Math.exp(I);
            break;
          case "scale_1":
            o[1] = Math.exp(I);
            break;
          case "scale_2":
            o[2] = Math.exp(I);
            break;
          case "red":
            X[0] = I;
            break;
          case "green":
            X[1] = I;
            break;
          case "blue":
            X[2] = I;
            break;
          case "f_dc_0":
            X[0] = 255 * (0.5 + cU.SH_C0 * I);
            break;
          case "f_dc_1":
            X[1] = 255 * (0.5 + cU.SH_C0 * I);
            break;
          case "f_dc_2":
            X[2] = 255 * (0.5 + cU.SH_C0 * I);
            break;
          case "f_dc_3":
            X[3] = 255 * (0.5 + cU.SH_C0 * I);
            break;
          case "opacity":
            X[3] = 1 / (1 + Math.exp(-I)) * 255;
            break;
          case "rot_0":
            E = I;
            break;
          case "rot_1":
            Y = I;
            break;
          case "rot_2":
            x = I;
            break;
          case "rot_3":
            v = I;
        }
      });
      let D = new K(Y, x, v, E);
      switch (l) {
        case "polycam": {
          const p = N[1];
          N[1] = -N[2], N[2] = p, D = J.multiply(D);
          break;
        }
        case "":
          break;
        default:
          throw new Error(`Unsupported format: ${l}`);
      }
      D = D.normalize(), G[0] = 128 * D.w + 128, G[1] = 128 * D.x + 128, G[2] = 128 * D.y + 128, G[3] = 128 * D.z + 128;
    }
    return s;
  }
}
function FF(r, U, l) {
  var F = U === void 0 ? null : U, Q = function(B, t) {
    var R = atob(B);
    if (t) {
      for (var i = new Uint8Array(R.length), s = 0, J = R.length; s < J; ++s)
        i[s] = R.charCodeAt(s);
      return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
    }
    return R;
  }(r, l !== void 0 && l), Z = Q.indexOf(`
`, 10) + 1, d = Q.substring(Z) + (F ? "//# sourceMappingURL=" + F : ""), V = new Blob([d], { type: "application/javascript" });
  return URL.createObjectURL(V);
}
function EU(r, U, l) {
  var F;
  return function(Q) {
    return F = F || FF(r, U, l), new Worker(F, Q);
  };
}
var lF = EU("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgdmFyIGxvYWRXYXNtID0gKCgpID0+IHsKICAgIAogICAgcmV0dXJuICgKICBmdW5jdGlvbihtb2R1bGVBcmcgPSB7fSkgewoKICB2YXIgTW9kdWxlPW1vZHVsZUFyZzt2YXIgcmVhZHlQcm9taXNlUmVzb2x2ZSxyZWFkeVByb21pc2VSZWplY3Q7TW9kdWxlWyJyZWFkeSJdPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntyZWFkeVByb21pc2VSZXNvbHZlPXJlc29sdmU7cmVhZHlQcm9taXNlUmVqZWN0PXJlamVjdDt9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgc2NyaXB0RGlyZWN0b3J5PSIiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlWyJsb2NhdGVGaWxlIl0pe3JldHVybiBNb2R1bGVbImxvY2F0ZUZpbGUiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkQmluYXJ5O3t7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZjt9aWYoc2NyaXB0RGlyZWN0b3J5LnN0YXJ0c1dpdGgoImJsb2I6Iikpe3NjcmlwdERpcmVjdG9yeT0iIjt9ZWxzZSB7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLywiIikubGFzdEluZGV4T2YoIi8iKSsxKTt9e3tyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKCJHRVQiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT0iYXJyYXlidWZmZXIiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfTt9fX1Nb2R1bGVbInByaW50Il18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbInByaW50RXJyIl18fGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKE1vZHVsZSxtb2R1bGVPdmVycmlkZXMpO21vZHVsZU92ZXJyaWRlcz1udWxsO2lmKE1vZHVsZVsiYXJndW1lbnRzIl0pTW9kdWxlWyJhcmd1bWVudHMiXTtpZihNb2R1bGVbInRoaXNQcm9ncmFtIl0pTW9kdWxlWyJ0aGlzUHJvZ3JhbSJdO2lmKE1vZHVsZVsicXVpdCJdKU1vZHVsZVsicXVpdCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVsid2FzbUJpbmFyeSJdKXdhc21CaW5hcnk9TW9kdWxlWyJ3YXNtQmluYXJ5Il07aWYodHlwZW9mIFdlYkFzc2VtYmx5IT0ib2JqZWN0Iil7YWJvcnQoIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTt9ZnVuY3Rpb24gaW50QXJyYXlGcm9tQmFzZTY0KHMpe3ZhciBkZWNvZGVkPWF0b2Iocyk7dmFyIGJ5dGVzPW5ldyBVaW50OEFycmF5KGRlY29kZWQubGVuZ3RoKTtmb3IodmFyIGk9MDtpPGRlY29kZWQubGVuZ3RoOysraSl7Ynl0ZXNbaV09ZGVjb2RlZC5jaGFyQ29kZUF0KGkpO31yZXR1cm4gYnl0ZXN9ZnVuY3Rpb24gdHJ5UGFyc2VBc0RhdGFVUkkoZmlsZW5hbWUpe2lmKCFpc0RhdGFVUkkoZmlsZW5hbWUpKXtyZXR1cm59cmV0dXJuIGludEFycmF5RnJvbUJhc2U2NChmaWxlbmFtZS5zbGljZShkYXRhVVJJUHJlZml4Lmxlbmd0aCkpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVsiSEVBUDgiXT1IRUFQOD1uZXcgSW50OEFycmF5KGIpO01vZHVsZVsiSEVBUDE2Il09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVsiSEVBUFU4Il09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO01vZHVsZVsiSEVBUFUxNiJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVsiSEVBUDMyIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVsiSEVBUFUzMiJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVsiSEVBUEYzMiJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShiKTtNb2R1bGVbIkhFQVBGNjQiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYik7fXZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRQT1NUUlVOX189W107ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlWyJwcmVSdW4iXSl7aWYodHlwZW9mIE1vZHVsZVsicHJlUnVuIl09PSJmdW5jdGlvbiIpTW9kdWxlWyJwcmVSdW4iXT1bTW9kdWxlWyJwcmVSdW4iXV07d2hpbGUoTW9kdWxlWyJwcmVSdW4iXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVsicHJlUnVuIl0uc2hpZnQoKSk7fX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pO31mdW5jdGlvbiBpbml0UnVudGltZSgpe2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pO31mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlWyJwb3N0UnVuIl0pe2lmKHR5cGVvZiBNb2R1bGVbInBvc3RSdW4iXT09ImZ1bmN0aW9uIilNb2R1bGVbInBvc3RSdW4iXT1bTW9kdWxlWyJwb3N0UnVuIl1dO3doaWxlKE1vZHVsZVsicG9zdFJ1biJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVsicG9zdFJ1biJdLnNoaWZ0KCkpO319Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyk7fWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYik7fWZ1bmN0aW9uIGFkZE9uSW5pdChjYil7X19BVElOSVRfXy51bnNoaWZ0KGNiKTt9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpO312YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO01vZHVsZVsibW9uaXRvclJ1bkRlcGVuZGVuY2llcyJdPy4ocnVuRGVwZW5kZW5jaWVzKTt9ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07TW9kdWxlWyJtb25pdG9yUnVuRGVwZW5kZW5jaWVzIl0/LihydW5EZXBlbmRlbmNpZXMpO2lmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCk7fX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7TW9kdWxlWyJvbkFib3J0Il0/Lih3aGF0KTt3aGF0PSJBYm9ydGVkKCIrd2hhdCsiKSI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7d2hhdCs9Ii4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby4iO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7cmVhZHlQcm9taXNlUmVqZWN0KGUpO3Rocm93IGV9dmFyIGRhdGFVUklQcmVmaXg9ImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiO3ZhciBpc0RhdGFVUkk9ZmlsZW5hbWU9PmZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCk7dmFyIHdhc21CaW5hcnlGaWxlO3dhc21CaW5hcnlGaWxlPSJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUdGemJRRUFBQUFCV3cxZ0JIOS9mMzhBWUFOL2YzOEFZQVYvZjM5L2Z3QmdCbjkvZjM5L2Z3QmdBWDhCZjJBQmZ3QmdBMzkvZndGL1lBSi9md0JnQUFCZ0FuOS9BWDlnQjM5L2YzOS9mMzhBWUFSL2YzNStBR0FLZjM5L2YzOS9mMzkvZndBQ1BRb0JZUUZoQUFFQllRRmlBQUlCWVFGakFBRUJZUUZrQUFjQllRRmxBQUVCWVFGbUFBb0JZUUZuQUFRQllRRm9BQVVCWVFGcEFBQUJZUUZxQUFjREdSZ0dCQVVJQlFVSkN3Z0JBQUVFQkFNREFnSUFBQWtHQmd3RUJRRndBUkFRQlFjQkFZQUNnSUFDQmdnQmZ3RkJzSjRFQ3djWkJnRnJBZ0FCYkFBTkFXMEFJUUZ1QVFBQmJ3QVhBWEFBRHdrVkFRQkJBUXNQRWhZTURnNGdEQjhZR2gwTUdSc2NDc0pPR0hFQkFYOGdBa1VFUUNBQUtBSUVJQUVvQWdSR0R3c2dBQ0FCUmdSQVFRRVBDd0pBSUFBb0FnUWlBaTBBQUNJQVJTQUFJQUVvQWdRaUFTMEFBQ0lEUjNJTkFBTkFJQUV0QUFFaEF5QUNMUUFCSWdCRkRRRWdBVUVCYWlFQklBSkJBV29oQWlBQUlBTkdEUUFMQ3lBQUlBTkdDMDhCQW45QnFCb29BZ0FpQVNBQVFRZHFRWGh4SWdKcUlRQUNRQ0FDUVFBZ0FDQUJUUnRGQkVBZ0FEOEFRUkIwVFEwQklBQVFCZzBCQzBHNEdrRXdOZ0lBUVg4UEMwR29HaUFBTmdJQUlBRUxCZ0FnQUJBUEN5a0FRYkFhUVFFMkFnQkJ0QnBCQURZQ0FCQVNRYlFhUWF3YUtBSUFOZ0lBUWF3YVFiQWFOZ0lBQ3dJQUM5a0xBUWQvQWtBZ0FFVU5BQ0FBUVFocklnTWdBRUVFYXlnQ0FDSUJRWGh4SWdCcUlRVUNRQ0FCUVFGeERRQWdBVUVDY1VVTkFTQURJQU1vQWdBaUFXc2lBMEhNR2lnQ0FFa05BU0FBSUFGcUlRQUNRQUpBUWRBYUtBSUFJQU5IQkVBZ0F5Z0NEQ0VDSUFGQi93Rk5CRUFnQVVFRGRpRUJJQU1vQWdnaUJDQUNSZ1JBUWJ3YVFid2FLQUlBUVg0Z0FYZHhOZ0lBREFVTElBUWdBallDRENBQ0lBUTJBZ2dNQkFzZ0F5Z0NHQ0VHSUFJZ0EwY0VRQ0FES0FJSUlnRWdBallDRENBQ0lBRTJBZ2dNQXdzZ0F5Z0NGQ0lCQkg4Z0EwRVVhZ1VnQXlnQ0VDSUJSUTBDSUFOQkVHb0xJUVFEUUNBRUlRY2dBU0lDUVJScUlRUWdBaWdDRkNJQkRRQWdBa0VRYWlFRUlBSW9BaEFpQVEwQUN5QUhRUUEyQWdBTUFnc2dCU2dDQkNJQlFRTnhRUU5IRFFKQnhCb2dBRFlDQUNBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBVWdBRFlDQUE4TFFRQWhBZ3NnQmtVTkFBSkFJQU1vQWh3aUFVRUNkRUhzSEdvaUJDZ0NBQ0FEUmdSQUlBUWdBallDQUNBQ0RRRkJ3QnBCd0Jvb0FnQkJmaUFCZDNFMkFnQU1BZ3NnQmtFUVFSUWdCaWdDRUNBRFJodHFJQUkyQWdBZ0FrVU5BUXNnQWlBR05nSVlJQU1vQWhBaUFRUkFJQUlnQVRZQ0VDQUJJQUkyQWhnTElBTW9BaFFpQVVVTkFDQUNJQUUyQWhRZ0FTQUNOZ0lZQ3lBRElBVlBEUUFnQlNnQ0JDSUJRUUZ4UlEwQUFrQUNRQUpBQWtBZ0FVRUNjVVVFUUVIVUdpZ0NBQ0FGUmdSQVFkUWFJQU0yQWdCQnlCcEJ5Qm9vQWdBZ0FHb2lBRFlDQUNBRElBQkJBWEkyQWdRZ0EwSFFHaWdDQUVjTkJrSEVHa0VBTmdJQVFkQWFRUUEyQWdBUEMwSFFHaWdDQUNBRlJnUkFRZEFhSUFNMkFnQkJ4QnBCeEJvb0FnQWdBR29pQURZQ0FDQURJQUJCQVhJMkFnUWdBQ0FEYWlBQU5nSUFEd3NnQVVGNGNTQUFhaUVBSUFVb0Fnd2hBaUFCUWY4QlRRUkFJQUZCQTNZaEFTQUZLQUlJSWdRZ0FrWUVRRUc4R2tHOEdpZ0NBRUYrSUFGM2NUWUNBQXdGQ3lBRUlBSTJBZ3dnQWlBRU5nSUlEQVFMSUFVb0FoZ2hCaUFDSUFWSEJFQkJ6Qm9vQWdBYUlBVW9BZ2dpQVNBQ05nSU1JQUlnQVRZQ0NBd0RDeUFGS0FJVUlnRUVmeUFGUVJScUJTQUZLQUlRSWdGRkRRSWdCVUVRYWdzaEJBTkFJQVFoQnlBQklnSkJGR29oQkNBQ0tBSVVJZ0VOQUNBQ1FSQnFJUVFnQWlnQ0VDSUJEUUFMSUFkQkFEWUNBQXdDQ3lBRklBRkJmbkUyQWdRZ0F5QUFRUUZ5TmdJRUlBQWdBMm9nQURZQ0FBd0RDMEVBSVFJTElBWkZEUUFDUUNBRktBSWNJZ0ZCQW5SQjdCeHFJZ1FvQWdBZ0JVWUVRQ0FFSUFJMkFnQWdBZzBCUWNBYVFjQWFLQUlBUVg0Z0FYZHhOZ0lBREFJTElBWkJFRUVVSUFZb0FoQWdCVVliYWlBQ05nSUFJQUpGRFFFTElBSWdCallDR0NBRktBSVFJZ0VFUUNBQ0lBRTJBaEFnQVNBQ05nSVlDeUFGS0FJVUlnRkZEUUFnQWlBQk5nSVVJQUVnQWpZQ0dBc2dBeUFBUVFGeU5nSUVJQUFnQTJvZ0FEWUNBQ0FEUWRBYUtBSUFSdzBBUWNRYUlBQTJBZ0FQQ3lBQVFmOEJUUVJBSUFCQmVIRkI1QnBxSVFFQ2YwRzhHaWdDQUNJRVFRRWdBRUVEZG5RaUFIRkZCRUJCdkJvZ0FDQUVjallDQUNBQkRBRUxJQUVvQWdnTElRQWdBU0FETmdJSUlBQWdBellDRENBRElBRTJBZ3dnQXlBQU5nSUlEd3RCSHlFQ0lBQkIvLy8vQjAwRVFDQUFRU1lnQUVFSWRtY2lBV3QyUVFGeElBRkJBWFJyUVQ1cUlRSUxJQU1nQWpZQ0hDQURRZ0EzQWhBZ0FrRUNkRUhzSEdvaEJ3Si9Ba0FDZjBIQUdpZ0NBQ0lCUVFFZ0FuUWlCSEZGQkVCQndCb2dBU0FFY2pZQ0FFRVlJUUlnQnlFRVFRZ01BUXNnQUVFWklBSkJBWFpyUVFBZ0FrRWZSeHQwSVFJZ0J5Z0NBQ0VFQTBBZ0JDSUJLQUlFUVhoeElBQkdEUUlnQWtFZGRpRUVJQUpCQVhRaEFpQUJJQVJCQkhGcVFSQnFJZ2NvQWdBaUJBMEFDMEVZSVFJZ0FTRUVRUWdMSVFBZ0F5SUJEQUVMSUFFb0FnZ2lCQ0FETmdJTVFRZ2hBaUFCUVFocUlRZEJHQ0VBUVFBTElRVWdCeUFETmdJQUlBSWdBMm9nQkRZQ0FDQURJQUUyQWd3Z0FDQURhaUFGTmdJQVFkd2FRZHdhS0FJQVFRRnJJZ0JCZnlBQUd6WUNBQXNMS1FFQmZ5QUJCRUFnQUNFQ0EwQWdBa0VBT2dBQUlBSkJBV29oQWlBQlFRRnJJZ0VOQUFzTElBQUxIQUFnQUNBQlFRZ2dBcWNnQWtJZ2lLY2dBNmNnQTBJZ2lLY1FCUXZlQXdCQjNCZEJpZ2tRQ1VIb0YwRzVDRUVCUVFBUUNFSDBGMEcwQ0VFQlFZQi9RZjhBRUFGQmpCaEJyUWhCQVVHQWYwSC9BQkFCUVlBWVFhc0lRUUZCQUVIL0FSQUJRWmdZUVlrSVFRSkJnSUIrUWYvL0FSQUJRYVFZUVlBSVFRSkJBRUgvL3dNUUFVR3dHRUdZQ0VFRVFZQ0FnSUI0UWYvLy8vOEhFQUZCdkJoQmp3aEJCRUVBUVg4UUFVSElHRUhIQ0VFRVFZQ0FnSUI0UWYvLy8vOEhFQUZCMUJoQnZnaEJCRUVBUVg4UUFVSGdHRUdqQ0VLQWdJQ0FnSUNBZ0lCL1F2Ly8vLy8vLy8vLy93QVFFVUhzR0VHaUNFSUFRbjhRRVVINEdFR2NDRUVFRUFSQmhCbEJnd2xCQ0JBRVFmUU9RZGtJRUFOQnZBOUJodzBRQTBHRUVFRUVRY3dJRUFKQjBCQkJBa0hsQ0JBQ1Fad1JRUVJCOUFnUUFrRzRFUkFIUWVBUlFRQkJ3Z3dRQUVHSUVrRUFRYWdORUFCQnNCSkJBVUhnREJBQVFkZ1NRUUpCandrUUFFR0FFMEVEUWE0SkVBQkJxQk5CQkVIV0NSQUFRZEFUUVFWQjh3a1FBRUg0RTBFRVFjME5FQUJCb0JSQkJVSHJEUkFBUVlnU1FRQkIyUW9RQUVHd0VrRUJRYmdLRUFCQjJCSkJBa0diQ3hBQVFZQVRRUU5CK1FvUUFFR29FMEVFUWFFTUVBQkIwQk5CQlVIL0N4QUFRY2dVUVFoQjNnc1FBRUh3RkVFSlFid0xFQUJCbUJWQkJrR1pDaEFBUWNBVlFRZEJrZzRRQUFzZ0FBSkFJQUFvQWdRZ0FVY05BQ0FBS0FJY1FRRkdEUUFnQUNBQ05nSWNDd3VhQVFBZ0FFRUJPZ0ExQWtBZ0FDZ0NCQ0FDUncwQUlBQkJBVG9BTkFKQUlBQW9BaEFpQWtVRVFDQUFRUUUyQWlRZ0FDQUROZ0lZSUFBZ0FUWUNFQ0FEUVFGSERRSWdBQ2dDTUVFQlJnMEJEQUlMSUFFZ0FrWUVRQ0FBS0FJWUlnSkJBa1lFUUNBQUlBTTJBaGdnQXlFQ0N5QUFLQUl3UVFGSERRSWdBa0VCUmcwQkRBSUxJQUFnQUNnQ0pFRUJhallDSkFzZ0FFRUJPZ0EyQ3d0ZEFRRi9JQUFvQWhBaUEwVUVRQ0FBUVFFMkFpUWdBQ0FDTmdJWUlBQWdBVFlDRUE4TEFrQWdBU0FEUmdSQUlBQW9BaGhCQWtjTkFTQUFJQUkyQWhnUEN5QUFRUUU2QURZZ0FFRUNOZ0lZSUFBZ0FDZ0NKRUVCYWpZQ0pBc0xCQUFnQUF2WEp3RU1meU1BUVJCcklnb2tBQUpBQWtBQ1FBSkFBa0FDUUFKQUFrQUNRQUpBSUFCQjlBRk5CRUJCdkJvb0FnQWlCRUVRSUFCQkMycEIrQU54SUFCQkMwa2JJZ1pCQTNZaUFIWWlBVUVEY1FSQUFrQWdBVUYvYzBFQmNTQUFhaUlDUVFOMElnRkI1QnBxSWdBZ0FVSHNHbW9vQWdBaUFTZ0NDQ0lGUmdSQVFid2FJQVJCZmlBQ2QzRTJBZ0FNQVFzZ0JTQUFOZ0lNSUFBZ0JUWUNDQXNnQVVFSWFpRUFJQUVnQWtFRGRDSUNRUU55TmdJRUlBRWdBbW9pQVNBQktBSUVRUUZ5TmdJRURBc0xJQVpCeEJvb0FnQWlDRTBOQVNBQkJFQUNRRUVDSUFCMElnSkJBQ0FDYTNJZ0FTQUFkSEZvSWdGQkEzUWlBRUhrR21vaUFpQUFRZXdhYWlnQ0FDSUFLQUlJSWdWR0JFQkJ2Qm9nQkVGK0lBRjNjU0lFTmdJQURBRUxJQVVnQWpZQ0RDQUNJQVUyQWdnTElBQWdCa0VEY2pZQ0JDQUFJQVpxSWdjZ0FVRURkQ0lCSUFacklnVkJBWEkyQWdRZ0FDQUJhaUFGTmdJQUlBZ0VRQ0FJUVhoeFFlUWFhaUVCUWRBYUtBSUFJUUlDZnlBRVFRRWdDRUVEZG5RaUEzRkZCRUJCdkJvZ0F5QUVjallDQUNBQkRBRUxJQUVvQWdnTElRTWdBU0FDTmdJSUlBTWdBallDRENBQ0lBRTJBZ3dnQWlBRE5nSUlDeUFBUVFocUlRQkIwQm9nQnpZQ0FFSEVHaUFGTmdJQURBc0xRY0FhS0FJQUlndEZEUUVnQzJoQkFuUkI3QnhxS0FJQUlnSW9BZ1JCZUhFZ0Jtc2hBeUFDSVFFRFFBSkFJQUVvQWhBaUFFVUVRQ0FCS0FJVUlnQkZEUUVMSUFBb0FnUkJlSEVnQm1zaUFTQURJQUVnQTBraUFSc2hBeUFBSUFJZ0FSc2hBaUFBSVFFTUFRc0xJQUlvQWhnaENTQUNJQUlvQWd3aUFFY0VRRUhNR2lnQ0FCb2dBaWdDQ0NJQklBQTJBZ3dnQUNBQk5nSUlEQW9MSUFJb0FoUWlBUVIvSUFKQkZHb0ZJQUlvQWhBaUFVVU5BeUFDUVJCcUN5RUZBMEFnQlNFSElBRWlBRUVVYWlFRklBQW9BaFFpQVEwQUlBQkJFR29oQlNBQUtBSVFJZ0VOQUFzZ0IwRUFOZ0lBREFrTFFYOGhCaUFBUWI5L1N3MEFJQUJCQzJvaUFFRjRjU0VHUWNBYUtBSUFJZ2RGRFFCQkFDQUdheUVEQWtBQ1FBSkFBbjlCQUNBR1FZQUNTUTBBR2tFZklBWkIvLy8vQjBzTkFCb2dCa0VtSUFCQkNIWm5JZ0JyZGtFQmNTQUFRUUYwYTBFK2Fnc2lDRUVDZEVIc0hHb29BZ0FpQVVVRVFFRUFJUUFNQVF0QkFDRUFJQVpCR1NBSVFRRjJhMEVBSUFoQkgwY2JkQ0VDQTBBQ1FDQUJLQUlFUVhoeElBWnJJZ1FnQTA4TkFDQUJJUVVnQkNJRERRQkJBQ0VESUFFaEFBd0RDeUFBSUFFb0FoUWlCQ0FFSUFFZ0FrRWRka0VFY1dvb0FoQWlBVVliSUFBZ0JCc2hBQ0FDUVFGMElRSWdBUTBBQ3dzZ0FDQUZja1VFUUVFQUlRVkJBaUFJZENJQVFRQWdBR3R5SUFkeElnQkZEUU1nQUdoQkFuUkI3QnhxS0FJQUlRQUxJQUJGRFFFTEEwQWdBQ2dDQkVGNGNTQUdheUlDSUFOSklRRWdBaUFESUFFYklRTWdBQ0FGSUFFYklRVWdBQ2dDRUNJQkJIOGdBUVVnQUNnQ0ZBc2lBQTBBQ3dzZ0JVVU5BQ0FEUWNRYUtBSUFJQVpyVHcwQUlBVW9BaGdoQ0NBRklBVW9BZ3dpQUVjRVFFSE1HaWdDQUJvZ0JTZ0NDQ0lCSUFBMkFnd2dBQ0FCTmdJSURBZ0xJQVVvQWhRaUFRUi9JQVZCRkdvRklBVW9BaEFpQVVVTkF5QUZRUkJxQ3lFQ0EwQWdBaUVFSUFFaUFFRVVhaUVDSUFBb0FoUWlBUTBBSUFCQkVHb2hBaUFBS0FJUUlnRU5BQXNnQkVFQU5nSUFEQWNMSUFaQnhCb29BZ0FpQlUwRVFFSFFHaWdDQUNFQUFrQWdCU0FHYXlJQlFSQlBCRUFnQUNBR2FpSUNJQUZCQVhJMkFnUWdBQ0FGYWlBQk5nSUFJQUFnQmtFRGNqWUNCQXdCQ3lBQUlBVkJBM0kyQWdRZ0FDQUZhaUlCSUFFb0FnUkJBWEkyQWdSQkFDRUNRUUFoQVF0QnhCb2dBVFlDQUVIUUdpQUNOZ0lBSUFCQkNHb2hBQXdKQ3lBR1FjZ2FLQUlBSWdKSkJFQkJ5Qm9nQWlBR2F5SUJOZ0lBUWRRYVFkUWFLQUlBSWdBZ0Jtb2lBallDQUNBQ0lBRkJBWEkyQWdRZ0FDQUdRUU55TmdJRUlBQkJDR29oQUF3SkMwRUFJUUFnQmtFdmFpSURBbjlCbEI0b0FnQUVRRUdjSGlnQ0FBd0JDMEdnSGtKL053SUFRWmdlUW9DZ2dJQ0FnQVEzQWdCQmxCNGdDa0VNYWtGd2NVSFlxdFdxQlhNMkFnQkJxQjVCQURZQ0FFSDRIVUVBTmdJQVFZQWdDeUlCYWlJRVFRQWdBV3NpQjNFaUFTQUdUUTBJUWZRZEtBSUFJZ1VFUUVIc0hTZ0NBQ0lJSUFGcUlna2dDRTBnQlNBSlNYSU5DUXNDUUVINEhTMEFBRUVFY1VVRVFBSkFBa0FDUUFKQVFkUWFLQUlBSWdVRVFFSDhIU0VBQTBBZ0JTQUFLQUlBSWdoUEJFQWdDQ0FBS0FJRWFpQUZTdzBEQ3lBQUtBSUlJZ0FOQUFzTFFRQVFDeUlDUVg5R0RRTWdBU0VFUVpnZUtBSUFJZ0JCQVdzaUJTQUNjUVJBSUFFZ0Ftc2dBaUFGYWtFQUlBQnJjV29oQkFzZ0JDQUdUUTBEUWZRZEtBSUFJZ0FFUUVIc0hTZ0NBQ0lGSUFScUlnY2dCVTBnQUNBSFNYSU5CQXNnQkJBTElnQWdBa2NOQVF3RkN5QUVJQUpySUFkeElnUVFDeUlDSUFBb0FnQWdBQ2dDQkdwR0RRRWdBaUVBQ3lBQVFYOUdEUUVnQmtFd2FpQUVUUVJBSUFBaEFnd0VDMEdjSGlnQ0FDSUNJQU1nQkd0cVFRQWdBbXR4SWdJUUMwRi9SZzBCSUFJZ0JHb2hCQ0FBSVFJTUF3c2dBa0YvUncwQ0MwSDRIVUg0SFNnQ0FFRUVjallDQUFzZ0FSQUxJZ0pCZjBaQkFCQUxJZ0JCZjBaeUlBQWdBazF5RFFVZ0FDQUNheUlFSUFaQktHcE5EUVVMUWV3ZFFld2RLQUlBSUFScUlnQTJBZ0JCOEIwb0FnQWdBRWtFUUVId0hTQUFOZ0lBQ3dKQVFkUWFLQUlBSWdNRVFFSDhIU0VBQTBBZ0FpQUFLQUlBSWdFZ0FDZ0NCQ0lGYWtZTkFpQUFLQUlJSWdBTkFBc01CQXRCekJvb0FnQWlBRUVBSUFBZ0FrMGJSUVJBUWN3YUlBSTJBZ0FMUVFBaEFFR0FIaUFFTmdJQVFmd2RJQUkyQWdCQjNCcEJmellDQUVIZ0drR1VIaWdDQURZQ0FFR0lIa0VBTmdJQUEwQWdBRUVEZENJQlFld2FhaUFCUWVRYWFpSUZOZ0lBSUFGQjhCcHFJQVUyQWdBZ0FFRUJhaUlBUVNCSERRQUxRY2dhSUFSQktHc2lBRUY0SUFKclFRZHhJZ0ZySWdVMkFnQkIxQm9nQVNBQ2FpSUJOZ0lBSUFFZ0JVRUJjallDQkNBQUlBSnFRU2cyQWdSQjJCcEJwQjRvQWdBMkFnQU1CQXNnQWlBRFRTQUJJQU5MY2cwQ0lBQW9BZ3hCQ0hFTkFpQUFJQVFnQldvMkFnUkIxQm9nQTBGNElBTnJRUWR4SWdCcUlnRTJBZ0JCeUJwQnlCb29BZ0FnQkdvaUFpQUFheUlBTmdJQUlBRWdBRUVCY2pZQ0JDQUNJQU5xUVNnMkFnUkIyQnBCcEI0b0FnQTJBZ0FNQXd0QkFDRUFEQVlMUVFBaEFBd0VDMEhNR2lnQ0FDQUNTd1JBUWN3YUlBSTJBZ0FMSUFJZ0JHb2hBVUg4SFNFQUFrQURRQ0FCSUFBb0FnQkhCRUFnQUNnQ0NDSUFEUUVNQWdzTElBQXRBQXhCQ0hGRkRRTUxRZndkSVFBRFFBSkFJQU1nQUNnQ0FDSUJUd1JBSUFFZ0FDZ0NCR29pQlNBRFN3MEJDeUFBS0FJSUlRQU1BUXNMUWNnYUlBUkJLR3NpQUVGNElBSnJRUWR4SWdGcklnYzJBZ0JCMUJvZ0FTQUNhaUlCTmdJQUlBRWdCMEVCY2pZQ0JDQUFJQUpxUVNnMkFnUkIyQnBCcEI0b0FnQTJBZ0FnQXlBRlFTY2dCV3RCQjNGcVFTOXJJZ0FnQUNBRFFSQnFTUnNpQVVFYk5nSUVJQUZCaEI0cEFnQTNBaEFnQVVIOEhTa0NBRGNDQ0VHRUhpQUJRUWhxTmdJQVFZQWVJQVEyQWdCQi9CMGdBallDQUVHSUhrRUFOZ0lBSUFGQkdHb2hBQU5BSUFCQkJ6WUNCQ0FBUVFocUlRd2dBRUVFYWlFQUlBd2dCVWtOQUFzZ0FTQURSZzBBSUFFZ0FTZ0NCRUYrY1RZQ0JDQURJQUVnQTJzaUFrRUJjallDQkNBQklBSTJBZ0FDZnlBQ1FmOEJUUVJBSUFKQmVIRkI1QnBxSVFBQ2YwRzhHaWdDQUNJQlFRRWdBa0VEZG5RaUFuRkZCRUJCdkJvZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FETmdJSUlBRWdBellDREVFTUlRSkJDQXdCQzBFZklRQWdBa0gvLy84SFRRUkFJQUpCSmlBQ1FRaDJaeUlBYTNaQkFYRWdBRUVCZEd0QlBtb2hBQXNnQXlBQU5nSWNJQU5DQURjQ0VDQUFRUUowUWV3Y2FpRUJBa0FDUUVIQUdpZ0NBQ0lGUVFFZ0FIUWlCSEZGQkVCQndCb2dCQ0FGY2pZQ0FDQUJJQU0yQWdBTUFRc2dBa0VaSUFCQkFYWnJRUUFnQUVFZlJ4dDBJUUFnQVNnQ0FDRUZBMEFnQlNJQktBSUVRWGh4SUFKR0RRSWdBRUVkZGlFRklBQkJBWFFoQUNBQklBVkJCSEZxSWdRb0FoQWlCUTBBQ3lBRUlBTTJBaEFMSUFNZ0FUWUNHRUVJSVFJZ0F5SUJJUUJCREF3QkN5QUJLQUlJSWdBZ0F6WUNEQ0FCSUFNMkFnZ2dBeUFBTmdJSVFRQWhBRUVZSVFKQkRBc2dBMm9nQVRZQ0FDQUNJQU5xSUFBMkFnQUxRY2dhS0FJQUlnQWdCazBOQUVISUdpQUFJQVpySWdFMkFnQkIxQnBCMUJvb0FnQWlBQ0FHYWlJQ05nSUFJQUlnQVVFQmNqWUNCQ0FBSUFaQkEzSTJBZ1FnQUVFSWFpRUFEQVFMUWJnYVFUQTJBZ0JCQUNFQURBTUxJQUFnQWpZQ0FDQUFJQUFvQWdRZ0JHbzJBZ1FnQWtGNElBSnJRUWR4YWlJSUlBWkJBM0kyQWdRZ0FVRjRJQUZyUVFkeGFpSUVJQVlnQ0dvaUEyc2hCd0pBUWRRYUtBSUFJQVJHQkVCQjFCb2dBellDQUVISUdrSElHaWdDQUNBSGFpSUFOZ0lBSUFNZ0FFRUJjallDQkF3QkMwSFFHaWdDQUNBRVJnUkFRZEFhSUFNMkFnQkJ4QnBCeEJvb0FnQWdCMm9pQURZQ0FDQURJQUJCQVhJMkFnUWdBQ0FEYWlBQU5nSUFEQUVMSUFRb0FnUWlBRUVEY1VFQlJnUkFJQUJCZUhFaENTQUVLQUlNSVFJQ1FDQUFRZjhCVFFSQUlBUW9BZ2dpQVNBQ1JnUkFRYndhUWJ3YUtBSUFRWDRnQUVFRGRuZHhOZ0lBREFJTElBRWdBallDRENBQ0lBRTJBZ2dNQVFzZ0JDZ0NHQ0VHQWtBZ0FpQUVSd1JBUWN3YUtBSUFHaUFFS0FJSUlnQWdBallDRENBQ0lBQTJBZ2dNQVFzQ1FDQUVLQUlVSWdBRWZ5QUVRUlJxQlNBRUtBSVFJZ0JGRFFFZ0JFRVFhZ3NoQVFOQUlBRWhCU0FBSWdKQkZHb2hBU0FBS0FJVUlnQU5BQ0FDUVJCcUlRRWdBaWdDRUNJQURRQUxJQVZCQURZQ0FBd0JDMEVBSVFJTElBWkZEUUFDUUNBRUtBSWNJZ0JCQW5SQjdCeHFJZ0VvQWdBZ0JFWUVRQ0FCSUFJMkFnQWdBZzBCUWNBYVFjQWFLQUlBUVg0Z0FIZHhOZ0lBREFJTElBWkJFRUVVSUFZb0FoQWdCRVliYWlBQ05nSUFJQUpGRFFFTElBSWdCallDR0NBRUtBSVFJZ0FFUUNBQ0lBQTJBaEFnQUNBQ05nSVlDeUFFS0FJVUlnQkZEUUFnQWlBQU5nSVVJQUFnQWpZQ0dBc2dCeUFKYWlFSElBUWdDV29pQkNnQ0JDRUFDeUFFSUFCQmZuRTJBZ1FnQXlBSFFRRnlOZ0lFSUFNZ0Iyb2dCellDQUNBSFFmOEJUUVJBSUFkQmVIRkI1QnBxSVFBQ2YwRzhHaWdDQUNJQlFRRWdCMEVEZG5RaUFuRkZCRUJCdkJvZ0FTQUNjallDQUNBQURBRUxJQUFvQWdnTElRRWdBQ0FETmdJSUlBRWdBellDRENBRElBQTJBZ3dnQXlBQk5nSUlEQUVMUVI4aEFpQUhRZi8vL3dkTkJFQWdCMEVtSUFkQkNIWm5JZ0JyZGtFQmNTQUFRUUYwYTBFK2FpRUNDeUFESUFJMkFod2dBMElBTndJUUlBSkJBblJCN0J4cUlRQUNRQUpBUWNBYUtBSUFJZ0ZCQVNBQ2RDSUZjVVVFUUVIQUdpQUJJQVZ5TmdJQUlBQWdBellDQUF3QkN5QUhRUmtnQWtFQmRtdEJBQ0FDUVI5SEczUWhBaUFBS0FJQUlRRURRQ0FCSWdBb0FnUkJlSEVnQjBZTkFpQUNRUjEySVFFZ0FrRUJkQ0VDSUFBZ0FVRUVjV29pQlNnQ0VDSUJEUUFMSUFVZ0F6WUNFQXNnQXlBQU5nSVlJQU1nQXpZQ0RDQURJQU0yQWdnTUFRc2dBQ2dDQ0NJQklBTTJBZ3dnQUNBRE5nSUlJQU5CQURZQ0dDQURJQUEyQWd3Z0F5QUJOZ0lJQ3lBSVFRaHFJUUFNQWdzQ1FDQUlSUTBBQWtBZ0JTZ0NIQ0lCUVFKMFFld2NhaUlDS0FJQUlBVkdCRUFnQWlBQU5nSUFJQUFOQVVIQUdpQUhRWDRnQVhkeElnYzJBZ0FNQWdzZ0NFRVFRUlFnQ0NnQ0VDQUZSaHRxSUFBMkFnQWdBRVVOQVFzZ0FDQUlOZ0lZSUFVb0FoQWlBUVJBSUFBZ0FUWUNFQ0FCSUFBMkFoZ0xJQVVvQWhRaUFVVU5BQ0FBSUFFMkFoUWdBU0FBTmdJWUN3SkFJQU5CRDAwRVFDQUZJQU1nQm1vaUFFRURjallDQkNBQUlBVnFJZ0FnQUNnQ0JFRUJjallDQkF3QkN5QUZJQVpCQTNJMkFnUWdCU0FHYWlJRUlBTkJBWEkyQWdRZ0F5QUVhaUFETmdJQUlBTkIvd0ZOQkVBZ0EwRjRjVUhrR21vaEFBSi9RYndhS0FJQUlnRkJBU0FEUVFOMmRDSUNjVVVFUUVHOEdpQUJJQUp5TmdJQUlBQU1BUXNnQUNnQ0NBc2hBU0FBSUFRMkFnZ2dBU0FFTmdJTUlBUWdBRFlDRENBRUlBRTJBZ2dNQVF0Qkh5RUFJQU5CLy8vL0IwMEVRQ0FEUVNZZ0EwRUlkbWNpQUd0MlFRRnhJQUJCQVhSclFUNXFJUUFMSUFRZ0FEWUNIQ0FFUWdBM0FoQWdBRUVDZEVIc0hHb2hBUUpBQWtBZ0IwRUJJQUIwSWdKeFJRUkFRY0FhSUFJZ0IzSTJBZ0FnQVNBRU5nSUFJQVFnQVRZQ0dBd0JDeUFEUVJrZ0FFRUJkbXRCQUNBQVFSOUhHM1FoQUNBQktBSUFJUUVEUUNBQklnSW9BZ1JCZUhFZ0EwWU5BaUFBUVIxMklRRWdBRUVCZENFQUlBSWdBVUVFY1dvaUJ5Z0NFQ0lCRFFBTElBY2dCRFlDRUNBRUlBSTJBaGdMSUFRZ0JEWUNEQ0FFSUFRMkFnZ01BUXNnQWlnQ0NDSUFJQVEyQWd3Z0FpQUVOZ0lJSUFSQkFEWUNHQ0FFSUFJMkFnd2dCQ0FBTmdJSUN5QUZRUWhxSVFBTUFRc0NRQ0FKUlEwQUFrQWdBaWdDSENJQlFRSjBRZXdjYWlJRktBSUFJQUpHQkVBZ0JTQUFOZ0lBSUFBTkFVSEFHaUFMUVg0Z0FYZHhOZ0lBREFJTElBbEJFRUVVSUFrb0FoQWdBa1liYWlBQU5nSUFJQUJGRFFFTElBQWdDVFlDR0NBQ0tBSVFJZ0VFUUNBQUlBRTJBaEFnQVNBQU5nSVlDeUFDS0FJVUlnRkZEUUFnQUNBQk5nSVVJQUVnQURZQ0dBc0NRQ0FEUVE5TkJFQWdBaUFESUFacUlnQkJBM0kyQWdRZ0FDQUNhaUlBSUFBb0FnUkJBWEkyQWdRTUFRc2dBaUFHUVFOeU5nSUVJQUlnQm1vaUJTQURRUUZ5TmdJRUlBTWdCV29nQXpZQ0FDQUlCRUFnQ0VGNGNVSGtHbW9oQUVIUUdpZ0NBQ0VCQW45QkFTQUlRUU4yZENJSElBUnhSUVJBUWJ3YUlBUWdCM0kyQWdBZ0FBd0JDeUFBS0FJSUN5RUVJQUFnQVRZQ0NDQUVJQUUyQWd3Z0FTQUFOZ0lNSUFFZ0JEWUNDQXRCMEJvZ0JUWUNBRUhFR2lBRE5nSUFDeUFDUVFocUlRQUxJQXBCRUdva0FDQUFDeG9BSUFBZ0FTZ0NDQ0FGRUFvRVFDQUJJQUlnQXlBRUVCUUxDemNBSUFBZ0FTZ0NDQ0FGRUFvRVFDQUJJQUlnQXlBRUVCUVBDeUFBS0FJSUlnQWdBU0FDSUFNZ0JDQUZJQUFvQWdBb0FoUVJBd0FMa1FFQUlBQWdBU2dDQ0NBRUVBb0VRQ0FCSUFJZ0F4QVREd3NDUUNBQUlBRW9BZ0FnQkJBS1JRMEFBa0FnQWlBQktBSVFSd1JBSUFFb0FoUWdBa2NOQVFzZ0EwRUJSdzBCSUFGQkFUWUNJQThMSUFFZ0FqWUNGQ0FCSUFNMkFpQWdBU0FCS0FJb1FRRnFOZ0lvQWtBZ0FTZ0NKRUVCUncwQUlBRW9BaGhCQWtjTkFDQUJRUUU2QURZTElBRkJCRFlDTEFzTDhnRUFJQUFnQVNnQ0NDQUVFQW9FUUNBQklBSWdBeEFURHdzQ1FDQUFJQUVvQWdBZ0JCQUtCRUFDUUNBQ0lBRW9BaEJIQkVBZ0FTZ0NGQ0FDUncwQkN5QURRUUZIRFFJZ0FVRUJOZ0lnRHdzZ0FTQUROZ0lnQWtBZ0FTZ0NMRUVFUmcwQUlBRkJBRHNCTkNBQUtBSUlJZ0FnQVNBQ0lBSkJBU0FFSUFBb0FnQW9BaFFSQXdBZ0FTMEFOUVJBSUFGQkF6WUNMQ0FCTFFBMFJRMEJEQU1MSUFGQkJEWUNMQXNnQVNBQ05nSVVJQUVnQVNnQ0tFRUJhallDS0NBQktBSWtRUUZIRFFFZ0FTZ0NHRUVDUncwQklBRkJBVG9BTmc4TElBQW9BZ2dpQUNBQklBSWdBeUFFSUFBb0FnQW9BaGdSQWdBTEN6RUFJQUFnQVNnQ0NFRUFFQW9FUUNBQklBSWdBeEFWRHdzZ0FDZ0NDQ0lBSUFFZ0FpQURJQUFvQWdBb0Fod1JBQUFMR0FBZ0FDQUJLQUlJUVFBUUNnUkFJQUVnQWlBREVCVUxDNEFEQVFSL0l3QkI4QUJySWdJa0FDQUFLQUlBSWdOQkJHc29BZ0FoQkNBRFFRaHJLQUlBSVFVZ0FrSUFOd0pRSUFKQ0FEY0NXQ0FDUWdBM0FtQWdBa0lBTndCbklBSkNBRGNDU0NBQ1FRQTJBa1FnQWtIc0ZUWUNRQ0FDSUFBMkFqd2dBaUFCTmdJNElBQWdCV29oQXdKQUlBUWdBVUVBRUFvRVFFRUFJQU1nQlJzaEFBd0JDeUFBSUFOT0JFQWdBa0lBTndBdklBSkNBRGNDR0NBQ1FnQTNBaUFnQWtJQU53SW9JQUpDQURjQ0VDQUNRUUEyQWd3Z0FpQUJOZ0lJSUFJZ0FEWUNCQ0FDSUFRMkFnQWdBa0VCTmdJd0lBUWdBaUFESUFOQkFVRUFJQVFvQWdBb0FoUVJBd0FnQWlnQ0dBMEJDMEVBSVFBZ0JDQUNRVGhxSUFOQkFVRUFJQVFvQWdBb0FoZ1JBZ0FDUUFKQUlBSW9BbHdPQWdBQkFnc2dBaWdDVEVFQUlBSW9BbGhCQVVZYlFRQWdBaWdDVkVFQlJodEJBQ0FDS0FKZ1FRRkdHeUVBREFFTElBSW9BbEJCQVVjRVFDQUNLQUpnRFFFZ0FpZ0NWRUVCUncwQklBSW9BbGhCQVVjTkFRc2dBaWdDU0NFQUN5QUNRZkFBYWlRQUlBQUxtZ0VCQW44akFFRkFhaUlESkFBQ2YwRUJJQUFnQVVFQUVBb05BQnBCQUNBQlJRMEFHa0VBSUFGQm5CWVFIaUlCUlEwQUdpQURRUXhxUVRRUUVCb2dBMEVCTmdJNElBTkJmellDRkNBRElBQTJBaEFnQXlBQk5nSUlJQUVnQTBFSWFpQUNLQUlBUVFFZ0FTZ0NBQ2dDSEJFQUFDQURLQUlnSWdCQkFVWUVRQ0FDSUFNb0FoZzJBZ0FMSUFCQkFVWUxJUVFnQTBGQWF5UUFJQVFMQ2dBZ0FDQUJRUUFRQ2d1QUNnSUlmeUo5UWYvLy8vOEhJUTVCZ0lDQWdIZ2hEMEYvSVFvRFFDQURJQXhHQkVCQkFDRUFJQWxCZ0lBUUVCQWhBVU1BLzM5SElBOGdEbXV5bFNFZEEwQWdBQ0FEUmdSQVFRQWhBQ0FJUVFBMkFnQWdBVUVFYXlFQlFRQWhERUVCSVFzRFFDQUxRWUNBQkVaRkJFQWdDQ0FMUVFKMElnSnFJQUVnQW1vb0FnQWdER29pRERZQ0FDQUxRUUZxSVFzTUFRc0xBMEFnQUNBRFJrVUVRQ0FJSUFZZ0FFRUNkR29vQWdCQkFuUnFJZ0VnQVNnQ0FDSUJRUUZxTmdJQUlBY2dBVUVDZEdvZ0FEWUNBQ0FBUVFGcUlRQU1BUXNMQlFKL0lCMGdCaUFBUVFKMGFpSUNLQUlBSUE1cnM1UWlFa01BQUlCUFhTQVNRd0FBQUFCZ2NRUkFJQktwREFFTFFRQUxJUXNnQWlBTE5nSUFJQUVnQzBFQ2RHb2lBaUFDS0FJQVFRRnFOZ0lBSUFCQkFXb2hBQXdCQ3dzRklBUWdERUVNYkdvaUN5b0NBQ0VTSUFzcUFnZ2hIU0FMS2dJRUlTRWdDaUFDSUF4QkFuUWlEV29vQWdBaUMwY0VRQ0FCSUF0QjBBQnNhaUlLS2dJOEloUWdBQ29DUENJVmxDQUtLZ0k0SWhZZ0FDb0NMQ0lZbENBS0tnSXdJaGtnQUNvQ0RDSWFsQ0FBS2dJY0loNGdDaW9DTkNJVGxKS1NraUVwSUJRZ0FDb0NPQ0lmbENBV0lBQXFBaWdpSUpRZ0dTQUFLZ0lJSWlLVUlBQXFBaGdpSXlBVGxKS1NraUVxSUJRZ0FDb0NOQ0lrbENBV0lBQXFBaVFpSlpRZ0dTQUFLZ0lFSWlhVUlBQXFBaFFpSnlBVGxKS1NraUVySUJRZ0FDb0NNQ0lVbENBV0lBQXFBaUFpRnBRZ0dTQUFLZ0lBSWhtVUlBQXFBaEFpS0NBVGxKS1NraUVzSUFvcUFpd2lFeUFWbENBS0tnSW9JaGNnR0pRZ0Npb0NJQ0liSUJxVUlCNGdDaW9DSkNJY2xKS1NraUV0SUJNZ0g1UWdGeUFnbENBYklDS1VJQ01nSEpTU2twSWhMaUFUSUNTVUlCY2dKWlFnR3lBbWxDQW5JQnlVa3BLU0lTOGdFeUFVbENBWElCYVVJQnNnR1pRZ0tDQWNsSktTa2lFd0lBb3FBaHdpRXlBVmxDQUtLZ0lZSWhjZ0dKUWdDaW9DRUNJYklCcVVJQjRnQ2lvQ0ZDSWNsSktTa2lFeElCTWdINVFnRnlBZ2xDQWJJQ0tVSUNNZ0hKU1NrcEloTWlBVElDU1VJQmNnSlpRZ0d5QW1sQ0FuSUJ5VWtwS1NJVE1nRXlBVWxDQVhJQmFVSUJzZ0daUWdLQ0FjbEpLU2tpRVhJQW9xQWd3aUV5QVZsQ0FLS2dJSUloVWdHSlFnQ2lvQ0FDSVlJQnFVSUFvcUFnUWlHaUFlbEpLU2tpRWVJQk1nSDVRZ0ZTQWdsQ0FZSUNLVUlCb2dJNVNTa3BJaEh5QVRJQ1NVSUJVZ0paUWdHQ0FtbENBYUlDZVVrcEtTSVNBZ0V5QVVsQ0FWSUJhVUlCZ2dHWlFnR2lBb2xKS1NraUVXSUFzaENnc2dCaUFOYWdKL0lDNGdIWlFnSHlBU2xDQWhJREtVa3BJZ0twSkRBQUNBUlpRaUZJdERBQUFBVDEwRVFDQVVxQXdCQzBHQWdJQ0FlQXNpQ3pZQ0FDQUxJQTVLSVJBZ0N5QVBTQ0VSUWY4QklRMENRQ0F0SUIyVUlCNGdFcFFnSVNBeGxKS1NJQ21TSWhSREFBQUFBRnNOQUNBd0lCMlVJQllnRXBRZ0lTQVhsSktTSUN5U0lCU1ZRd0FBZ0QrU1F3QUFBRCtVSWhWREFBQUFBR0JGSUJWREFBQ0FQMTFGY2cwQUlDOGdIWlFnSUNBU2xDQWhJRE9Va3BJZ0s1SWdGSlZEQUFDQVA1SkRBQUFBUDVRaUVrTUFBQUFBWUVVZ0VrTUFBSUEvWFVWeURRQUNmeUFTUXdBQWNFR1VJaEpEQUFDQVQxMGdFa01BQUFBQVlIRUVRQ0FTcVF3QkMwRUFDMEVQYkNFTkFuOGdGVU1BQUhCQmxDSVNRd0FBZ0U5ZElCSkRBQUFBQUdCeEJFQWdFcWtNQVF0QkFBc2dEV29oRFFzZ0RpQUxJQkFiSVE0Z0R5QUxJQkViSVE4Z0JTQU1haUFOT2dBQUlBeEJBV29oREF3QkN3c0xDN2NTQWdCQmdBZ0xwaEoxYm5OcFoyNWxaQ0J6YUc5eWRBQjFibk5wWjI1bFpDQnBiblFBWm14dllYUUFkV2x1ZERZMFgzUUFkVzV6YVdkdVpXUWdZMmhoY2dCaWIyOXNBSFZ1YzJsbmJtVmtJR3h2Ym1jQWMzUmtPanAzYzNSeWFXNW5BSE4wWkRvNmMzUnlhVzVuQUhOMFpEbzZkVEUyYzNSeWFXNW5BSE4wWkRvNmRUTXljM1J5YVc1bkFHUnZkV0pzWlFCMmIybGtBR1Z0YzJOeWFYQjBaVzQ2T20xbGJXOXllVjkyYVdWM1BITm9iM0owUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkengxYm5OcFoyNWxaQ0J6YUc5eWRENEFaVzF6WTNKcGNIUmxiam82YldWdGIzSjVYM1pwWlhjOGFXNTBQZ0JsYlhOamNtbHdkR1Z1T2pwdFpXMXZjbmxmZG1sbGR6eDFibk5wWjI1bFpDQnBiblErQUdWdGMyTnlhWEIwWlc0Nk9tMWxiVzl5ZVY5MmFXVjNQR1pzYjJGMFBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4MWFXNTBPRjkwUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkenhwYm5RNFgzUStBR1Z0YzJOeWFYQjBaVzQ2T20xbGJXOXllVjkyYVdWM1BIVnBiblF4Tmw5MFBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4cGJuUXhObDkwUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkengxYVc1ME5qUmZkRDRBWlcxelkzSnBjSFJsYmpvNmJXVnRiM0o1WDNacFpYYzhhVzUwTmpSZmRENEFaVzF6WTNKcGNIUmxiam82YldWdGIzSjVYM1pwWlhjOGRXbHVkRE15WDNRK0FHVnRjMk55YVhCMFpXNDZPbTFsYlc5eWVWOTJhV1YzUEdsdWRETXlYM1ErQUdWdGMyTnlhWEIwWlc0Nk9tMWxiVzl5ZVY5MmFXVjNQR05vWVhJK0FHVnRjMk55YVhCMFpXNDZPbTFsYlc5eWVWOTJhV1YzUEhWdWMybG5ibVZrSUdOb1lYSStBSE4wWkRvNlltRnphV05mYzNSeWFXNW5QSFZ1YzJsbmJtVmtJR05vWVhJK0FHVnRjMk55YVhCMFpXNDZPbTFsYlc5eWVWOTJhV1YzUEhOcFoyNWxaQ0JqYUdGeVBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4c2IyNW5QZ0JsYlhOamNtbHdkR1Z1T2pwdFpXMXZjbmxmZG1sbGR6eDFibk5wWjI1bFpDQnNiMjVuUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkenhrYjNWaWJHVStBRTVUZEROZlh6SXhNbUpoYzJsalgzTjBjbWx1WjBsalRsTmZNVEZqYUdGeVgzUnlZV2wwYzBsalJVVk9VMTg1WVd4c2IyTmhkRzl5U1dORlJVVkZBQUFBQUpRTUFBQXlCd0FBVGxOME0xOWZNakV5WW1GemFXTmZjM1J5YVc1blNXaE9VMTh4TVdOb1lYSmZkSEpoYVhSelNXaEZSVTVUWHpsaGJHeHZZMkYwYjNKSmFFVkZSVVVBQUpRTUFBQjhCd0FBVGxOME0xOWZNakV5WW1GemFXTmZjM1J5YVc1blNYZE9VMTh4TVdOb1lYSmZkSEpoYVhSelNYZEZSVTVUWHpsaGJHeHZZMkYwYjNKSmQwVkZSVVVBQUpRTUFBREVCd0FBVGxOME0xOWZNakV5WW1GemFXTmZjM1J5YVc1blNVUnpUbE5mTVRGamFHRnlYM1J5WVdsMGMwbEVjMFZGVGxOZk9XRnNiRzlqWVhSdmNrbEVjMFZGUlVVQUFBQ1VEQUFBREFnQUFFNVRkRE5mWHpJeE1tSmhjMmxqWDNOMGNtbHVaMGxFYVU1VFh6RXhZMmhoY2w5MGNtRnBkSE5KUkdsRlJVNVRYemxoYkd4dlkyRjBiM0pKUkdsRlJVVkZBQUFBbEF3QUFGZ0lBQUJPTVRCbGJYTmpjbWx3ZEdWdU0zWmhiRVVBQUpRTUFBQ2tDQUFBVGpFd1pXMXpZM0pwY0hSbGJqRXhiV1Z0YjNKNVgzWnBaWGRKWTBWRkFBQ1VEQUFBd0FnQUFFNHhNR1Z0YzJOeWFYQjBaVzR4TVcxbGJXOXllVjkyYVdWM1NXRkZSUUFBbEF3QUFPZ0lBQUJPTVRCbGJYTmpjbWx3ZEdWdU1URnRaVzF2Y25sZmRtbGxkMGxvUlVVQUFKUU1BQUFRQ1FBQVRqRXdaVzF6WTNKcGNIUmxiakV4YldWdGIzSjVYM1pwWlhkSmMwVkZBQUNVREFBQU9Ba0FBRTR4TUdWdGMyTnlhWEIwWlc0eE1XMWxiVzl5ZVY5MmFXVjNTWFJGUlFBQWxBd0FBR0FKQUFCT01UQmxiWE5qY21sd2RHVnVNVEZ0WlcxdmNubGZkbWxsZDBscFJVVUFBSlFNQUFDSUNRQUFUakV3WlcxelkzSnBjSFJsYmpFeGJXVnRiM0o1WDNacFpYZEpha1ZGQUFDVURBQUFzQWtBQUU0eE1HVnRjMk55YVhCMFpXNHhNVzFsYlc5eWVWOTJhV1YzU1d4RlJRQUFsQXdBQU5nSkFBQk9NVEJsYlhOamNtbHdkR1Z1TVRGdFpXMXZjbmxmZG1sbGQwbHRSVVVBQUpRTUFBQUFDZ0FBVGpFd1pXMXpZM0pwY0hSbGJqRXhiV1Z0YjNKNVgzWnBaWGRKZUVWRkFBQ1VEQUFBS0FvQUFFNHhNR1Z0YzJOeWFYQjBaVzR4TVcxbGJXOXllVjkyYVdWM1NYbEZSUUFBbEF3QUFGQUtBQUJPTVRCbGJYTmpjbWx3ZEdWdU1URnRaVzF2Y25sZmRtbGxkMGxtUlVVQUFKUU1BQUI0Q2dBQVRqRXdaVzF6WTNKcGNIUmxiakV4YldWdGIzSjVYM1pwWlhkSlpFVkZBQUNVREFBQW9Bb0FBRTR4TUY5ZlkzaDRZV0pwZGpFeE5sOWZjMmhwYlY5MGVYQmxYMmx1Wm05RkFBQUFBTHdNQUFESUNnQUFJQTBBQUU0eE1GOWZZM2g0WVdKcGRqRXhOMTlmWTJ4aGMzTmZkSGx3WlY5cGJtWnZSUUFBQUx3TUFBRDRDZ0FBN0FvQUFFNHhNRjlmWTNoNFlXSnBkakV4TjE5ZmNHSmhjMlZmZEhsd1pWOXBibVp2UlFBQUFMd01BQUFvQ3dBQTdBb0FBRTR4TUY5ZlkzaDRZV0pwZGpFeE9WOWZjRzlwYm5SbGNsOTBlWEJsWDJsdVptOUZBTHdNQUFCWUN3QUFUQXNBQUFBQUFBRE1Dd0FBQWdBQUFBTUFBQUFFQUFBQUJRQUFBQVlBQUFCT01UQmZYMk40ZUdGaWFYWXhNak5mWDJaMWJtUmhiV1Z1ZEdGc1gzUjVjR1ZmYVc1bWIwVUF2QXdBQUtRTEFBRHNDZ0FBZGdBQUFKQUxBQURZQ3dBQVlnQUFBSkFMQUFEa0N3QUFZd0FBQUpBTEFBRHdDd0FBYUFBQUFKQUxBQUQ4Q3dBQVlRQUFBSkFMQUFBSURBQUFjd0FBQUpBTEFBQVVEQUFBZEFBQUFKQUxBQUFnREFBQWFRQUFBSkFMQUFBc0RBQUFhZ0FBQUpBTEFBQTREQUFBYkFBQUFKQUxBQUJFREFBQWJRQUFBSkFMQUFCUURBQUFlQUFBQUpBTEFBQmNEQUFBZVFBQUFKQUxBQUJvREFBQVpnQUFBSkFMQUFCMERBQUFaQUFBQUpBTEFBQ0FEQUFBQUFBQUFCd0xBQUFDQUFBQUJ3QUFBQVFBQUFBRkFBQUFDQUFBQUFrQUFBQUtBQUFBQ3dBQUFBQUFBQUFFRFFBQUFnQUFBQXdBQUFBRUFBQUFCUUFBQUFnQUFBQU5BQUFBRGdBQUFBOEFBQUJPTVRCZlgyTjRlR0ZpYVhZeE1qQmZYM05wWDJOc1lYTnpYM1I1Y0dWZmFXNW1iMFVBQUFBQXZBd0FBTndNQUFBY0N3QUFVM1E1ZEhsd1pWOXBibVp2QUFBQUFKUU1BQUFRRFFCQnFCb0xBekFQQVE9PSI7aWYoIWlzRGF0YVVSSSh3YXNtQmluYXJ5RmlsZSkpe3dhc21CaW5hcnlGaWxlPWxvY2F0ZUZpbGUod2FzbUJpbmFyeUZpbGUpO31mdW5jdGlvbiBnZXRCaW5hcnlTeW5jKGZpbGUpe2lmKGZpbGU9PXdhc21CaW5hcnlGaWxlJiZ3YXNtQmluYXJ5KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkod2FzbUJpbmFyeSl9dmFyIGJpbmFyeT10cnlQYXJzZUFzRGF0YVVSSShmaWxlKTtpZihiaW5hcnkpe3JldHVybiBiaW5hcnl9aWYocmVhZEJpbmFyeSl7cmV0dXJuIHJlYWRCaW5hcnkoZmlsZSl9dGhyb3cgImJvdGggYXN5bmMgYW5kIHN5bmMgZmV0Y2hpbmcgb2YgdGhlIHdhc20gZmFpbGVkIn1mdW5jdGlvbiBnZXRCaW5hcnlQcm9taXNlKGJpbmFyeUZpbGUpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5nZXRCaW5hcnlTeW5jKGJpbmFyeUZpbGUpKX1mdW5jdGlvbiBpbnN0YW50aWF0ZUFycmF5QnVmZmVyKGJpbmFyeUZpbGUsaW1wb3J0cyxyZWNlaXZlcil7cmV0dXJuIGdldEJpbmFyeVByb21pc2UoYmluYXJ5RmlsZSkudGhlbihiaW5hcnk9PldlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJpbmFyeSxpbXBvcnRzKSkudGhlbihyZWNlaXZlcixyZWFzb249PntlcnIoYGZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICR7cmVhc29ufWApO2Fib3J0KHJlYXNvbik7fSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBc3luYyhiaW5hcnksYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKXtyZXR1cm4gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMsY2FsbGJhY2spfWZ1bmN0aW9uIGNyZWF0ZVdhc20oKXt2YXIgaW5mbz17ImEiOndhc21JbXBvcnRzfTtmdW5jdGlvbiByZWNlaXZlSW5zdGFuY2UoaW5zdGFuY2UsbW9kdWxlKXt3YXNtRXhwb3J0cz1pbnN0YW5jZS5leHBvcnRzO3dhc21NZW1vcnk9d2FzbUV4cG9ydHNbImsiXTt1cGRhdGVNZW1vcnlWaWV3cygpO2FkZE9uSW5pdCh3YXNtRXhwb3J0c1sibCJdKTtyZW1vdmVSdW5EZXBlbmRlbmN5KCk7cmV0dXJuIHdhc21FeHBvcnRzfWFkZFJ1bkRlcGVuZGVuY3koKTtmdW5jdGlvbiByZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdChyZXN1bHQpe3JlY2VpdmVJbnN0YW5jZShyZXN1bHRbImluc3RhbmNlIl0pO31pZihNb2R1bGVbImluc3RhbnRpYXRlV2FzbSJdKXt0cnl7cmV0dXJuIE1vZHVsZVsiaW5zdGFudGlhdGVXYXNtIl0oaW5mbyxyZWNlaXZlSW5zdGFuY2UpfWNhdGNoKGUpe2VycihgTW9kdWxlLmluc3RhbnRpYXRlV2FzbSBjYWxsYmFjayBmYWlsZWQgd2l0aCBlcnJvcjogJHtlfWApO3JlYWR5UHJvbWlzZVJlamVjdChlKTt9fWluc3RhbnRpYXRlQXN5bmMod2FzbUJpbmFyeSx3YXNtQmluYXJ5RmlsZSxpbmZvLHJlY2VpdmVJbnN0YW50aWF0aW9uUmVzdWx0KS5jYXRjaChyZWFkeVByb21pc2VSZWplY3QpO3JldHVybiB7fX12YXIgY2FsbFJ1bnRpbWVDYWxsYmFja3M9Y2FsbGJhY2tzPT57d2hpbGUoY2FsbGJhY2tzLmxlbmd0aD4wKXtjYWxsYmFja3Muc2hpZnQoKShNb2R1bGUpO319O01vZHVsZVsibm9FeGl0UnVudGltZSJdfHx0cnVlO3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9iaWdpbnQ9KHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKT0+e307dmFyIGVtYmluZF9pbml0X2NoYXJDb2Rlcz0oKT0+e3ZhciBjb2Rlcz1uZXcgQXJyYXkoMjU2KTtmb3IodmFyIGk9MDtpPDI1NjsrK2kpe2NvZGVzW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoaSk7fWVtYmluZF9jaGFyQ29kZXM9Y29kZXM7fTt2YXIgZW1iaW5kX2NoYXJDb2Rlczt2YXIgcmVhZExhdGluMVN0cmluZz1wdHI9Pnt2YXIgcmV0PSIiO3ZhciBjPXB0cjt3aGlsZShIRUFQVThbY10pe3JldCs9ZW1iaW5kX2NoYXJDb2Rlc1tIRUFQVThbYysrXV07fXJldHVybiByZXR9O3ZhciBhd2FpdGluZ0RlcGVuZGVuY2llcz17fTt2YXIgcmVnaXN0ZXJlZFR5cGVzPXt9O3ZhciBCaW5kaW5nRXJyb3I7dmFyIHRocm93QmluZGluZ0Vycm9yPW1lc3NhZ2U9Pnt0aHJvdyBuZXcgQmluZGluZ0Vycm9yKG1lc3NhZ2UpfTtmdW5jdGlvbiBzaGFyZWRSZWdpc3RlclR5cGUocmF3VHlwZSxyZWdpc3RlcmVkSW5zdGFuY2Usb3B0aW9ucz17fSl7dmFyIG5hbWU9cmVnaXN0ZXJlZEluc3RhbmNlLm5hbWU7aWYoIXJhd1R5cGUpe3Rocm93QmluZGluZ0Vycm9yKGB0eXBlICIke25hbWV9IiBtdXN0IGhhdmUgYSBwb3NpdGl2ZSBpbnRlZ2VyIHR5cGVpZCBwb2ludGVyYCk7fWlmKHJlZ2lzdGVyZWRUeXBlcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7aWYob3B0aW9ucy5pZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zKXtyZXR1cm59ZWxzZSB7dGhyb3dCaW5kaW5nRXJyb3IoYENhbm5vdCByZWdpc3RlciB0eXBlICcke25hbWV9JyB0d2ljZWApO319cmVnaXN0ZXJlZFR5cGVzW3Jhd1R5cGVdPXJlZ2lzdGVyZWRJbnN0YW5jZTtpZihhd2FpdGluZ0RlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShyYXdUeXBlKSl7dmFyIGNhbGxiYWNrcz1hd2FpdGluZ0RlcGVuZGVuY2llc1tyYXdUeXBlXTtkZWxldGUgYXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07Y2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO319ZnVuY3Rpb24gcmVnaXN0ZXJUeXBlKHJhd1R5cGUscmVnaXN0ZXJlZEluc3RhbmNlLG9wdGlvbnM9e30pe2lmKCEoImFyZ1BhY2tBZHZhbmNlImluIHJlZ2lzdGVyZWRJbnN0YW5jZSkpe3Rocm93IG5ldyBUeXBlRXJyb3IoInJlZ2lzdGVyVHlwZSByZWdpc3RlcmVkSW5zdGFuY2UgcmVxdWlyZXMgYXJnUGFja0FkdmFuY2UiKX1yZXR1cm4gc2hhcmVkUmVnaXN0ZXJUeXBlKHJhd1R5cGUscmVnaXN0ZXJlZEluc3RhbmNlLG9wdGlvbnMpfXZhciBHZW5lcmljV2lyZVR5cGVTaXplPTg7dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2w9KHJhd1R5cGUsbmFtZSx0cnVlVmFsdWUsZmFsc2VWYWx1ZSk9PntuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIjpmdW5jdGlvbih3dCl7cmV0dXJuICEhd3R9LCJ0b1dpcmVUeXBlIjpmdW5jdGlvbihkZXN0cnVjdG9ycyxvKXtyZXR1cm4gbz90cnVlVmFsdWU6ZmFsc2VWYWx1ZX0sImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6ZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbImZyb21XaXJlVHlwZSJdKEhFQVBVOFtwb2ludGVyXSl9LGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSk7fTt2YXIgZW12YWxfZnJlZWxpc3Q9W107dmFyIGVtdmFsX2hhbmRsZXM9W107dmFyIF9fZW12YWxfZGVjcmVmPWhhbmRsZT0+e2lmKGhhbmRsZT45JiYwPT09LS1lbXZhbF9oYW5kbGVzW2hhbmRsZSsxXSl7ZW12YWxfaGFuZGxlc1toYW5kbGVdPXVuZGVmaW5lZDtlbXZhbF9mcmVlbGlzdC5wdXNoKGhhbmRsZSk7fX07dmFyIGNvdW50X2VtdmFsX2hhbmRsZXM9KCk9PmVtdmFsX2hhbmRsZXMubGVuZ3RoLzItNS1lbXZhbF9mcmVlbGlzdC5sZW5ndGg7dmFyIGluaXRfZW12YWw9KCk9PntlbXZhbF9oYW5kbGVzLnB1c2goMCwxLHVuZGVmaW5lZCwxLG51bGwsMSx0cnVlLDEsZmFsc2UsMSk7TW9kdWxlWyJjb3VudF9lbXZhbF9oYW5kbGVzIl09Y291bnRfZW12YWxfaGFuZGxlczt9O3ZhciBFbXZhbD17dG9WYWx1ZTpoYW5kbGU9PntpZighaGFuZGxlKXt0aHJvd0JpbmRpbmdFcnJvcigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIitoYW5kbGUpO31yZXR1cm4gZW12YWxfaGFuZGxlc1toYW5kbGVdfSx0b0hhbmRsZTp2YWx1ZT0+e3N3aXRjaCh2YWx1ZSl7Y2FzZSB1bmRlZmluZWQ6cmV0dXJuIDI7Y2FzZSBudWxsOnJldHVybiA0O2Nhc2UgdHJ1ZTpyZXR1cm4gNjtjYXNlIGZhbHNlOnJldHVybiA4O2RlZmF1bHQ6e2NvbnN0IGhhbmRsZT1lbXZhbF9mcmVlbGlzdC5wb3AoKXx8ZW12YWxfaGFuZGxlcy5sZW5ndGg7ZW12YWxfaGFuZGxlc1toYW5kbGVdPXZhbHVlO2VtdmFsX2hhbmRsZXNbaGFuZGxlKzFdPTE7cmV0dXJuIGhhbmRsZX19fX07ZnVuY3Rpb24gcmVhZFBvaW50ZXIocG9pbnRlcil7cmV0dXJuIHRoaXNbImZyb21XaXJlVHlwZSJdKEhFQVBVMzJbcG9pbnRlcj4+Ml0pfXZhciBFbVZhbFR5cGU9e25hbWU6ImVtc2NyaXB0ZW46OnZhbCIsImZyb21XaXJlVHlwZSI6aGFuZGxlPT57dmFyIHJ2PUVtdmFsLnRvVmFsdWUoaGFuZGxlKTtfX2VtdmFsX2RlY3JlZihoYW5kbGUpO3JldHVybiBydn0sInRvV2lyZVR5cGUiOihkZXN0cnVjdG9ycyx2YWx1ZSk9PkVtdmFsLnRvSGFuZGxlKHZhbHVlKSwiYXJnUGFja0FkdmFuY2UiOkdlbmVyaWNXaXJlVHlwZVNpemUsInJlYWRWYWx1ZUZyb21Qb2ludGVyIjpyZWFkUG9pbnRlcixkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH07dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsPXJhd1R5cGU9PnJlZ2lzdGVyVHlwZShyYXdUeXBlLEVtVmFsVHlwZSk7dmFyIGZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXI9KG5hbWUsd2lkdGgpPT57c3dpdGNoKHdpZHRoKXtjYXNlIDQ6cmV0dXJuIGZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzWyJmcm9tV2lyZVR5cGUiXShIRUFQRjMyW3BvaW50ZXI+PjJdKX07Y2FzZSA4OnJldHVybiBmdW5jdGlvbihwb2ludGVyKXtyZXR1cm4gdGhpc1siZnJvbVdpcmVUeXBlIl0oSEVBUEY2NFtwb2ludGVyPj4zXSl9O2RlZmF1bHQ6dGhyb3cgbmV3IFR5cGVFcnJvcihgaW52YWxpZCBmbG9hdCB3aWR0aCAoJHt3aWR0aH0pOiAke25hbWV9YCl9fTt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfZmxvYXQ9KHJhd1R5cGUsbmFtZSxzaXplKT0+e25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLCJmcm9tV2lyZVR5cGUiOnZhbHVlPT52YWx1ZSwidG9XaXJlVHlwZSI6KGRlc3RydWN0b3JzLHZhbHVlKT0+dmFsdWUsImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6ZmxvYXRSZWFkVmFsdWVGcm9tUG9pbnRlcihuYW1lLHNpemUpLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSk7fTt2YXIgaW50ZWdlclJlYWRWYWx1ZUZyb21Qb2ludGVyPShuYW1lLHdpZHRoLHNpZ25lZCk9Pntzd2l0Y2god2lkdGgpe2Nhc2UgMTpyZXR1cm4gc2lnbmVkP3BvaW50ZXI9PkhFQVA4W3BvaW50ZXJdOnBvaW50ZXI9PkhFQVBVOFtwb2ludGVyXTtjYXNlIDI6cmV0dXJuIHNpZ25lZD9wb2ludGVyPT5IRUFQMTZbcG9pbnRlcj4+MV06cG9pbnRlcj0+SEVBUFUxNltwb2ludGVyPj4xXTtjYXNlIDQ6cmV0dXJuIHNpZ25lZD9wb2ludGVyPT5IRUFQMzJbcG9pbnRlcj4+Ml06cG9pbnRlcj0+SEVBUFUzMltwb2ludGVyPj4yXTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgaW50ZWdlciB3aWR0aCAoJHt3aWR0aH0pOiAke25hbWV9YCl9fTt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcj0ocHJpbWl0aXZlVHlwZSxuYW1lLHNpemUsbWluUmFuZ2UsbWF4UmFuZ2UpPT57bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBmcm9tV2lyZVR5cGU9dmFsdWU9PnZhbHVlO2lmKG1pblJhbmdlPT09MCl7dmFyIGJpdHNoaWZ0PTMyLTgqc2l6ZTtmcm9tV2lyZVR5cGU9dmFsdWU9PnZhbHVlPDxiaXRzaGlmdD4+PmJpdHNoaWZ0O312YXIgaXNVbnNpZ25lZFR5cGU9bmFtZS5pbmNsdWRlcygidW5zaWduZWQiKTt2YXIgY2hlY2tBc3NlcnRpb25zPSh2YWx1ZSx0b1R5cGVOYW1lKT0+e307dmFyIHRvV2lyZVR5cGU7aWYoaXNVbnNpZ25lZFR5cGUpe3RvV2lyZVR5cGU9ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsdmFsdWUpe2NoZWNrQXNzZXJ0aW9ucyh2YWx1ZSx0aGlzLm5hbWUpO3JldHVybiB2YWx1ZT4+PjB9O31lbHNlIHt0b1dpcmVUeXBlPWZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtjaGVja0Fzc2VydGlvbnModmFsdWUsdGhpcy5uYW1lKTtyZXR1cm4gdmFsdWV9O31yZWdpc3RlclR5cGUocHJpbWl0aXZlVHlwZSx7bmFtZTpuYW1lLCJmcm9tV2lyZVR5cGUiOmZyb21XaXJlVHlwZSwidG9XaXJlVHlwZSI6dG9XaXJlVHlwZSwiYXJnUGFja0FkdmFuY2UiOkdlbmVyaWNXaXJlVHlwZVNpemUsInJlYWRWYWx1ZUZyb21Qb2ludGVyIjppbnRlZ2VyUmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaXplLG1pblJhbmdlIT09MCksZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9KTt9O3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9tZW1vcnlfdmlldz0ocmF3VHlwZSxkYXRhVHlwZUluZGV4LG5hbWUpPT57dmFyIHR5cGVNYXBwaW5nPVtJbnQ4QXJyYXksVWludDhBcnJheSxJbnQxNkFycmF5LFVpbnQxNkFycmF5LEludDMyQXJyYXksVWludDMyQXJyYXksRmxvYXQzMkFycmF5LEZsb2F0NjRBcnJheV07dmFyIFRBPXR5cGVNYXBwaW5nW2RhdGFUeXBlSW5kZXhdO2Z1bmN0aW9uIGRlY29kZU1lbW9yeVZpZXcoaGFuZGxlKXt2YXIgc2l6ZT1IRUFQVTMyW2hhbmRsZT4+Ml07dmFyIGRhdGE9SEVBUFUzMltoYW5kbGUrND4+Ml07cmV0dXJuIG5ldyBUQShIRUFQOC5idWZmZXIsZGF0YSxzaXplKX1uYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIjpkZWNvZGVNZW1vcnlWaWV3LCJhcmdQYWNrQWR2YW5jZSI6R2VuZXJpY1dpcmVUeXBlU2l6ZSwicmVhZFZhbHVlRnJvbVBvaW50ZXIiOmRlY29kZU1lbW9yeVZpZXd9LHtpZ25vcmVEdXBsaWNhdGVSZWdpc3RyYXRpb25zOnRydWV9KTt9O3ZhciBzdHJpbmdUb1VURjhBcnJheT0oc3RyLGhlYXAsb3V0SWR4LG1heEJ5dGVzVG9Xcml0ZSk9PntpZighKG1heEJ5dGVzVG9Xcml0ZT4wKSlyZXR1cm4gMDt2YXIgc3RhcnRJZHg9b3V0SWR4O3ZhciBlbmRJZHg9b3V0SWR4K21heEJ5dGVzVG9Xcml0ZS0xO2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciB1PXN0ci5jaGFyQ29kZUF0KGkpO2lmKHU+PTU1Mjk2JiZ1PD01NzM0Myl7dmFyIHUxPXN0ci5jaGFyQ29kZUF0KCsraSk7dT02NTUzNisoKHUmMTAyMyk8PDEwKXx1MSYxMDIzO31pZih1PD0xMjcpe2lmKG91dElkeD49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPXU7fWVsc2UgaWYodTw9MjA0Nyl7aWYob3V0SWR4KzE+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0xOTJ8dT4+NjtoZWFwW291dElkeCsrXT0xMjh8dSY2Mzt9ZWxzZSBpZih1PD02NTUzNSl7aWYob3V0SWR4KzI+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT0yMjR8dT4+MTI7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjM7fWVsc2Uge2lmKG91dElkeCszPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjQwfHU+PjE4O2hlYXBbb3V0SWR4KytdPTEyOHx1Pj4xMiY2MztoZWFwW291dElkeCsrXT0xMjh8dT4+NiY2MztoZWFwW291dElkeCsrXT0xMjh8dSY2Mzt9fWhlYXBbb3V0SWR4XT0wO3JldHVybiBvdXRJZHgtc3RhcnRJZHh9O3ZhciBzdHJpbmdUb1VURjg9KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKT0+c3RyaW5nVG9VVEY4QXJyYXkoc3RyLEhFQVBVOCxvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKTt2YXIgbGVuZ3RoQnl0ZXNVVEY4PXN0cj0+e3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgYz1zdHIuY2hhckNvZGVBdChpKTtpZihjPD0xMjcpe2xlbisrO31lbHNlIGlmKGM8PTIwNDcpe2xlbis9Mjt9ZWxzZSBpZihjPj01NTI5NiYmYzw9NTczNDMpe2xlbis9NDsrK2k7fWVsc2Uge2xlbis9Mzt9fXJldHVybiBsZW59O3ZhciBVVEY4RGVjb2Rlcj10eXBlb2YgVGV4dERlY29kZXIhPSJ1bmRlZmluZWQiP25ldyBUZXh0RGVjb2RlcigidXRmOCIpOnVuZGVmaW5lZDt2YXIgVVRGOEFycmF5VG9TdHJpbmc9KGhlYXBPckFycmF5LGlkeCxtYXhCeXRlc1RvUmVhZCk9Pnt2YXIgZW5kSWR4PWlkeCttYXhCeXRlc1RvUmVhZDt2YXIgZW5kUHRyPWlkeDt3aGlsZShoZWFwT3JBcnJheVtlbmRQdHJdJiYhKGVuZFB0cj49ZW5kSWR4KSkrK2VuZFB0cjtpZihlbmRQdHItaWR4PjE2JiZoZWFwT3JBcnJheS5idWZmZXImJlVURjhEZWNvZGVyKXtyZXR1cm4gVVRGOERlY29kZXIuZGVjb2RlKGhlYXBPckFycmF5LnN1YmFycmF5KGlkeCxlbmRQdHIpKX12YXIgc3RyPSIiO3doaWxlKGlkeDxlbmRQdHIpe3ZhciB1MD1oZWFwT3JBcnJheVtpZHgrK107aWYoISh1MCYxMjgpKXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO2NvbnRpbnVlfXZhciB1MT1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjIyNCk9PTE5Mil7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKCh1MCYzMSk8PDZ8dTEpO2NvbnRpbnVlfXZhciB1Mj1oZWFwT3JBcnJheVtpZHgrK10mNjM7aWYoKHUwJjI0MCk9PTIyNCl7dTA9KHUwJjE1KTw8MTJ8dTE8PDZ8dTI7fWVsc2Uge3UwPSh1MCY3KTw8MTh8dTE8PDEyfHUyPDw2fGhlYXBPckFycmF5W2lkeCsrXSY2Mzt9aWYodTA8NjU1MzYpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1MCk7fWVsc2Uge3ZhciBjaD11MC02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpO319cmV0dXJuIHN0cn07dmFyIFVURjhUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkKT0+cHRyP1VURjhBcnJheVRvU3RyaW5nKEhFQVBVOCxwdHIsbWF4Qnl0ZXNUb1JlYWQpOiIiO3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nPShyYXdUeXBlLG5hbWUpPT57bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBzdGRTdHJpbmdJc1VURjg9bmFtZT09PSJzdGQ6OnN0cmluZyI7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIih2YWx1ZSl7dmFyIGxlbmd0aD1IRUFQVTMyW3ZhbHVlPj4yXTt2YXIgcGF5bG9hZD12YWx1ZSs0O3ZhciBzdHI7aWYoc3RkU3RyaW5nSXNVVEY4KXt2YXIgZGVjb2RlU3RhcnRQdHI9cGF5bG9hZDtmb3IodmFyIGk9MDtpPD1sZW5ndGg7KytpKXt2YXIgY3VycmVudEJ5dGVQdHI9cGF5bG9hZCtpO2lmKGk9PWxlbmd0aHx8SEVBUFU4W2N1cnJlbnRCeXRlUHRyXT09MCl7dmFyIG1heFJlYWQ9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9VVRGOFRvU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWQpO2lmKHN0cj09PXVuZGVmaW5lZCl7c3RyPXN0cmluZ1NlZ21lbnQ7fWVsc2Uge3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgwKTtzdHIrPXN0cmluZ1NlZ21lbnQ7fWRlY29kZVN0YXJ0UHRyPWN1cnJlbnRCeXRlUHRyKzE7fX19ZWxzZSB7dmFyIGE9bmV3IEFycmF5KGxlbmd0aCk7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXthW2ldPVN0cmluZy5mcm9tQ2hhckNvZGUoSEVBUFU4W3BheWxvYWQraV0pO31zdHI9YS5qb2luKCIiKTt9X2ZyZWUodmFsdWUpO3JldHVybiBzdHJ9LCJ0b1dpcmVUeXBlIihkZXN0cnVjdG9ycyx2YWx1ZSl7aWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcil7dmFsdWU9bmV3IFVpbnQ4QXJyYXkodmFsdWUpO312YXIgbGVuZ3RoO3ZhciB2YWx1ZUlzT2ZUeXBlU3RyaW5nPXR5cGVvZiB2YWx1ZT09InN0cmluZyI7aWYoISh2YWx1ZUlzT2ZUeXBlU3RyaW5nfHx2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXl8fHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5KSl7dGhyb3dCaW5kaW5nRXJyb3IoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTt9aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtsZW5ndGg9bGVuZ3RoQnl0ZXNVVEY4KHZhbHVlKTt9ZWxzZSB7bGVuZ3RoPXZhbHVlLmxlbmd0aDt9dmFyIGJhc2U9X21hbGxvYyg0K2xlbmd0aCsxKTt2YXIgcHRyPWJhc2UrNDtIRUFQVTMyW2Jhc2U+PjJdPWxlbmd0aDtpZihzdGRTdHJpbmdJc1VURjgmJnZhbHVlSXNPZlR5cGVTdHJpbmcpe3N0cmluZ1RvVVRGOCh2YWx1ZSxwdHIsbGVuZ3RoKzEpO31lbHNlIHtpZih2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe3ZhciBjaGFyQ29kZT12YWx1ZS5jaGFyQ29kZUF0KGkpO2lmKGNoYXJDb2RlPjI1NSl7X2ZyZWUocHRyKTt0aHJvd0JpbmRpbmdFcnJvcigiU3RyaW5nIGhhcyBVVEYtMTYgY29kZSB1bml0cyB0aGF0IGRvIG5vdCBmaXQgaW4gOCBiaXRzIik7fUhFQVBVOFtwdHIraV09Y2hhckNvZGU7fX1lbHNlIHtmb3IodmFyIGk9MDtpPGxlbmd0aDsrK2kpe0hFQVBVOFtwdHIraV09dmFsdWVbaV07fX19aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLGJhc2UpO31yZXR1cm4gYmFzZX0sImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6cmVhZFBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uKHB0cil7X2ZyZWUocHRyKTt9fSk7fTt2YXIgVVRGMTZEZWNvZGVyPXR5cGVvZiBUZXh0RGVjb2RlciE9InVuZGVmaW5lZCI/bmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpOnVuZGVmaW5lZDt2YXIgVVRGMTZUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkKT0+e3ZhciBlbmRQdHI9cHRyO3ZhciBpZHg9ZW5kUHRyPj4xO3ZhciBtYXhJZHg9aWR4K21heEJ5dGVzVG9SZWFkLzI7d2hpbGUoIShpZHg+PW1heElkeCkmJkhFQVBVMTZbaWR4XSkrK2lkeDtlbmRQdHI9aWR4PDwxO2lmKGVuZFB0ci1wdHI+MzImJlVURjE2RGVjb2RlcilyZXR1cm4gVVRGMTZEZWNvZGVyLmRlY29kZShIRUFQVTguc3ViYXJyYXkocHRyLGVuZFB0cikpO3ZhciBzdHI9IiI7Zm9yKHZhciBpPTA7IShpPj1tYXhCeXRlc1RvUmVhZC8yKTsrK2kpe3ZhciBjb2RlVW5pdD1IRUFQMTZbcHRyK2kqMj4+MV07aWYoY29kZVVuaXQ9PTApYnJlYWs7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVVbml0KTt9cmV0dXJuIHN0cn07dmFyIHN0cmluZ1RvVVRGMTY9KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKT0+e21heEJ5dGVzVG9Xcml0ZT8/PTIxNDc0ODM2NDc7aWYobWF4Qnl0ZXNUb1dyaXRlPDIpcmV0dXJuIDA7bWF4Qnl0ZXNUb1dyaXRlLT0yO3ZhciBzdGFydFB0cj1vdXRQdHI7dmFyIG51bUNoYXJzVG9Xcml0ZT1tYXhCeXRlc1RvV3JpdGU8c3RyLmxlbmd0aCoyP21heEJ5dGVzVG9Xcml0ZS8yOnN0ci5sZW5ndGg7Zm9yKHZhciBpPTA7aTxudW1DaGFyc1RvV3JpdGU7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7SEVBUDE2W291dFB0cj4+MV09Y29kZVVuaXQ7b3V0UHRyKz0yO31IRUFQMTZbb3V0UHRyPj4xXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9O3ZhciBsZW5ndGhCeXRlc1VURjE2PXN0cj0+c3RyLmxlbmd0aCoyO3ZhciBVVEYzMlRvU3RyaW5nPShwdHIsbWF4Qnl0ZXNUb1JlYWQpPT57dmFyIGk9MDt2YXIgc3RyPSIiO3doaWxlKCEoaT49bWF4Qnl0ZXNUb1JlYWQvNCkpe3ZhciB1dGYzMj1IRUFQMzJbcHRyK2kqND4+Ml07aWYodXRmMzI9PTApYnJlYWs7KytpO2lmKHV0ZjMyPj02NTUzNil7dmFyIGNoPXV0ZjMyLTY1NTM2O3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NnxjaD4+MTAsNTYzMjB8Y2gmMTAyMyk7fWVsc2Uge3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSh1dGYzMik7fX1yZXR1cm4gc3RyfTt2YXIgc3RyaW5nVG9VVEYzMj0oc3RyLG91dFB0cixtYXhCeXRlc1RvV3JpdGUpPT57bWF4Qnl0ZXNUb1dyaXRlPz89MjE0NzQ4MzY0NztpZihtYXhCeXRlc1RvV3JpdGU8NClyZXR1cm4gMDt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBlbmRQdHI9c3RhcnRQdHIrbWF4Qnl0ZXNUb1dyaXRlLTQ7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO2lmKGNvZGVVbml0Pj01NTI5NiYmY29kZVVuaXQ8PTU3MzQzKXt2YXIgdHJhaWxTdXJyb2dhdGU9c3RyLmNoYXJDb2RlQXQoKytpKTtjb2RlVW5pdD02NTUzNisoKGNvZGVVbml0JjEwMjMpPDwxMCl8dHJhaWxTdXJyb2dhdGUmMTAyMzt9SEVBUDMyW291dFB0cj4+Ml09Y29kZVVuaXQ7b3V0UHRyKz00O2lmKG91dFB0cis0PmVuZFB0cilicmVha31IRUFQMzJbb3V0UHRyPj4yXT0wO3JldHVybiBvdXRQdHItc3RhcnRQdHJ9O3ZhciBsZW5ndGhCeXRlc1VURjMyPXN0cj0+e3ZhciBsZW49MDtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgY29kZVVuaXQ9c3RyLmNoYXJDb2RlQXQoaSk7aWYoY29kZVVuaXQ+PTU1Mjk2JiZjb2RlVW5pdDw9NTczNDMpKytpO2xlbis9NDt9cmV0dXJuIGxlbn07dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nPShyYXdUeXBlLGNoYXJTaXplLG5hbWUpPT57bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3ZhciBkZWNvZGVTdHJpbmcsZW5jb2RlU3RyaW5nLHJlYWRDaGFyQXQsbGVuZ3RoQnl0ZXNVVEY7aWYoY2hhclNpemU9PT0yKXtkZWNvZGVTdHJpbmc9VVRGMTZUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYxNjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjE2O3JlYWRDaGFyQXQ9cG9pbnRlcj0+SEVBUFUxNltwb2ludGVyPj4xXTt9ZWxzZSBpZihjaGFyU2l6ZT09PTQpe2RlY29kZVN0cmluZz1VVEYzMlRvU3RyaW5nO2VuY29kZVN0cmluZz1zdHJpbmdUb1VURjMyO2xlbmd0aEJ5dGVzVVRGPWxlbmd0aEJ5dGVzVVRGMzI7cmVhZENoYXJBdD1wb2ludGVyPT5IRUFQVTMyW3BvaW50ZXI+PjJdO31yZWdpc3RlclR5cGUocmF3VHlwZSx7bmFtZTpuYW1lLCJmcm9tV2lyZVR5cGUiOnZhbHVlPT57dmFyIGxlbmd0aD1IRUFQVTMyW3ZhbHVlPj4yXTt2YXIgc3RyO3ZhciBkZWNvZGVTdGFydFB0cj12YWx1ZSs0O2Zvcih2YXIgaT0wO2k8PWxlbmd0aDsrK2kpe3ZhciBjdXJyZW50Qnl0ZVB0cj12YWx1ZSs0K2kqY2hhclNpemU7aWYoaT09bGVuZ3RofHxyZWFkQ2hhckF0KGN1cnJlbnRCeXRlUHRyKT09MCl7dmFyIG1heFJlYWRCeXRlcz1jdXJyZW50Qnl0ZVB0ci1kZWNvZGVTdGFydFB0cjt2YXIgc3RyaW5nU2VnbWVudD1kZWNvZGVTdHJpbmcoZGVjb2RlU3RhcnRQdHIsbWF4UmVhZEJ5dGVzKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50O31lbHNlIHtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoMCk7c3RyKz1zdHJpbmdTZWdtZW50O31kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0citjaGFyU2l6ZTt9fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSwidG9XaXJlVHlwZSI6KGRlc3RydWN0b3JzLHZhbHVlKT0+e2lmKCEodHlwZW9mIHZhbHVlPT0ic3RyaW5nIikpe3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIEMrKyBzdHJpbmcgdHlwZSAke25hbWV9YCk7fXZhciBsZW5ndGg9bGVuZ3RoQnl0ZXNVVEYodmFsdWUpO3ZhciBwdHI9X21hbGxvYyg0K2xlbmd0aCtjaGFyU2l6ZSk7SEVBUFUzMltwdHI+PjJdPWxlbmd0aC9jaGFyU2l6ZTtlbmNvZGVTdHJpbmcodmFsdWUscHRyKzQsbGVuZ3RoK2NoYXJTaXplKTtpZihkZXN0cnVjdG9ycyE9PW51bGwpe2Rlc3RydWN0b3JzLnB1c2goX2ZyZWUscHRyKTt9cmV0dXJuIHB0cn0sImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6cmVhZFBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uKHB0cil7X2ZyZWUocHRyKTt9fSk7fTt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfdm9pZD0ocmF3VHlwZSxuYW1lKT0+e25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTtyZWdpc3RlclR5cGUocmF3VHlwZSx7aXNWb2lkOnRydWUsbmFtZTpuYW1lLCJhcmdQYWNrQWR2YW5jZSI6MCwiZnJvbVdpcmVUeXBlIjooKT0+dW5kZWZpbmVkLCJ0b1dpcmVUeXBlIjooZGVzdHJ1Y3RvcnMsbyk9PnVuZGVmaW5lZH0pO307dmFyIGdldEhlYXBNYXg9KCk9PjIxNDc0ODM2NDg7dmFyIGdyb3dNZW1vcnk9c2l6ZT0+e3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO3ZhciBwYWdlcz0oc2l6ZS1iLmJ5dGVMZW5ndGgrNjU1MzUpLzY1NTM2O3RyeXt3YXNtTWVtb3J5Lmdyb3cocGFnZXMpO3VwZGF0ZU1lbW9yeVZpZXdzKCk7cmV0dXJuIDF9Y2F0Y2goZSl7fX07dmFyIF9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwPXJlcXVlc3RlZFNpemU9Pnt2YXIgb2xkU2l6ZT1IRUFQVTgubGVuZ3RoO3JlcXVlc3RlZFNpemU+Pj49MDt2YXIgbWF4SGVhcFNpemU9Z2V0SGVhcE1heCgpO2lmKHJlcXVlc3RlZFNpemU+bWF4SGVhcFNpemUpe3JldHVybiBmYWxzZX12YXIgYWxpZ25VcD0oeCxtdWx0aXBsZSk9PngrKG11bHRpcGxlLXglbXVsdGlwbGUpJW11bHRpcGxlO2Zvcih2YXIgY3V0RG93bj0xO2N1dERvd248PTQ7Y3V0RG93bio9Mil7dmFyIG92ZXJHcm93bkhlYXBTaXplPW9sZFNpemUqKDErLjIvY3V0RG93bik7b3Zlckdyb3duSGVhcFNpemU9TWF0aC5taW4ob3Zlckdyb3duSGVhcFNpemUscmVxdWVzdGVkU2l6ZSsxMDA2NjMyOTYpO3ZhciBuZXdTaXplPU1hdGgubWluKG1heEhlYXBTaXplLGFsaWduVXAoTWF0aC5tYXgocmVxdWVzdGVkU2l6ZSxvdmVyR3Jvd25IZWFwU2l6ZSksNjU1MzYpKTt2YXIgcmVwbGFjZW1lbnQ9Z3Jvd01lbW9yeShuZXdTaXplKTtpZihyZXBsYWNlbWVudCl7cmV0dXJuIHRydWV9fXJldHVybiBmYWxzZX07ZW1iaW5kX2luaXRfY2hhckNvZGVzKCk7QmluZGluZ0Vycm9yPU1vZHVsZVsiQmluZGluZ0Vycm9yIl09Y2xhc3MgQmluZGluZ0Vycm9yIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IobWVzc2FnZSl7c3VwZXIobWVzc2FnZSk7dGhpcy5uYW1lPSJCaW5kaW5nRXJyb3IiO319O01vZHVsZVsiSW50ZXJuYWxFcnJvciJdPWNsYXNzIEludGVybmFsRXJyb3IgZXh0ZW5kcyBFcnJvcntjb25zdHJ1Y3RvcihtZXNzYWdlKXtzdXBlcihtZXNzYWdlKTt0aGlzLm5hbWU9IkludGVybmFsRXJyb3IiO319O2luaXRfZW12YWwoKTt2YXIgd2FzbUltcG9ydHM9e2Y6X19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50LGk6X19lbWJpbmRfcmVnaXN0ZXJfYm9vbCxoOl9fZW1iaW5kX3JlZ2lzdGVyX2VtdmFsLGU6X19lbWJpbmRfcmVnaXN0ZXJfZmxvYXQsYjpfX2VtYmluZF9yZWdpc3Rlcl9pbnRlZ2VyLGE6X19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXcsZDpfX2VtYmluZF9yZWdpc3Rlcl9zdGRfc3RyaW5nLGM6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3dzdHJpbmcsajpfX2VtYmluZF9yZWdpc3Rlcl92b2lkLGc6X2Vtc2NyaXB0ZW5fcmVzaXplX2hlYXB9O3ZhciB3YXNtRXhwb3J0cz1jcmVhdGVXYXNtKCk7TW9kdWxlWyJfc29ydCJdPShhMCxhMSxhMixhMyxhNCxhNSxhNixhNyxhOCxhOSk9PihNb2R1bGVbIl9zb3J0Il09d2FzbUV4cG9ydHNbIm0iXSkoYTAsYTEsYTIsYTMsYTQsYTUsYTYsYTcsYTgsYTkpO3ZhciBfbWFsbG9jPU1vZHVsZVsiX21hbGxvYyJdPWEwPT4oX21hbGxvYz1Nb2R1bGVbIl9tYWxsb2MiXT13YXNtRXhwb3J0c1sibyJdKShhMCk7dmFyIF9mcmVlPU1vZHVsZVsiX2ZyZWUiXT1hMD0+KF9mcmVlPU1vZHVsZVsiX2ZyZWUiXT13YXNtRXhwb3J0c1sicCJdKShhMCk7dmFyIGNhbGxlZFJ1bjtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9ZnVuY3Rpb24gcnVuQ2FsbGVyKCl7aWYoIWNhbGxlZFJ1bilydW4oKTtpZighY2FsbGVkUnVuKWRlcGVuZGVuY2llc0Z1bGZpbGxlZD1ydW5DYWxsZXI7fTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVsiY2FsbGVkUnVuIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtyZWFkeVByb21pc2VSZXNvbHZlKE1vZHVsZSk7aWYoTW9kdWxlWyJvblJ1bnRpbWVJbml0aWFsaXplZCJdKU1vZHVsZVsib25SdW50aW1lSW5pdGlhbGl6ZWQiXSgpO3Bvc3RSdW4oKTt9aWYoTW9kdWxlWyJzZXRTdGF0dXMiXSl7TW9kdWxlWyJzZXRTdGF0dXMiXSgiUnVubmluZy4uLiIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlWyJzZXRTdGF0dXMiXSgiIik7fSwxKTtkb1J1bigpO30sMSk7fWVsc2Uge2RvUnVuKCk7fX1pZihNb2R1bGVbInByZUluaXQiXSl7aWYodHlwZW9mIE1vZHVsZVsicHJlSW5pdCJdPT0iZnVuY3Rpb24iKU1vZHVsZVsicHJlSW5pdCJdPVtNb2R1bGVbInByZUluaXQiXV07d2hpbGUoTW9kdWxlWyJwcmVJbml0Il0ubGVuZ3RoPjApe01vZHVsZVsicHJlSW5pdCJdLnBvcCgpKCk7fX1ydW4oKTsKCgogICAgcmV0dXJuIG1vZHVsZUFyZy5yZWFkeQogIH0KICApOwogIH0pKCk7CgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55CiAgbGV0IHdhc21Nb2R1bGU7CiAgYXN5bmMgZnVuY3Rpb24gaW5pdFdhc20oKSB7CiAgICAgIHdhc21Nb2R1bGUgPSBhd2FpdCBsb2FkV2FzbSgpOwogIH0KICBsZXQgc29ydERhdGE7CiAgbGV0IHZpZXdQcm9qUHRyOwogIGxldCB0cmFuc2Zvcm1zUHRyOwogIGxldCB0cmFuc2Zvcm1JbmRpY2VzUHRyOwogIGxldCBwb3NpdGlvbnNQdHI7CiAgbGV0IGNodW5rc1B0cjsKICBsZXQgZGVwdGhCdWZmZXJQdHI7CiAgbGV0IGRlcHRoSW5kZXhQdHI7CiAgbGV0IHN0YXJ0c1B0cjsKICBsZXQgY291bnRzUHRyOwogIGxldCBhbGxvY2F0ZWRWZXJ0ZXhDb3VudCA9IDA7CiAgbGV0IGFsbG9jYXRlZFRyYW5zZm9ybUNvdW50ID0gMDsKICBsZXQgdmlld1Byb2ogPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsKICBsZXQgbG9jayA9IGZhbHNlOwogIGxldCBhbGxvY2F0aW9uUGVuZGluZyA9IGZhbHNlOwogIGxldCBzb3J0aW5nID0gZmFsc2U7CiAgY29uc3QgYWxsb2NhdGVCdWZmZXJzID0gYXN5bmMgKCkgPT4gewogICAgICBpZiAobG9jaykgewogICAgICAgICAgYWxsb2NhdGlvblBlbmRpbmcgPSB0cnVlOwogICAgICAgICAgcmV0dXJuOwogICAgICB9CiAgICAgIGxvY2sgPSB0cnVlOwogICAgICBhbGxvY2F0aW9uUGVuZGluZyA9IGZhbHNlOwogICAgICBpZiAoIXdhc21Nb2R1bGUpCiAgICAgICAgICBhd2FpdCBpbml0V2FzbSgpOwogICAgICBjb25zdCB0YXJnZXRBbGxvY2F0ZWRWZXJ0ZXhDb3VudCA9IE1hdGgucG93KDIsIE1hdGguY2VpbChNYXRoLmxvZzIoc29ydERhdGEudmVydGV4Q291bnQpKSk7CiAgICAgIGlmIChhbGxvY2F0ZWRWZXJ0ZXhDb3VudCA8IHRhcmdldEFsbG9jYXRlZFZlcnRleENvdW50KSB7CiAgICAgICAgICBpZiAoYWxsb2NhdGVkVmVydGV4Q291bnQgPiAwKSB7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZSh2aWV3UHJvalB0cik7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZSh0cmFuc2Zvcm1JbmRpY2VzUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHBvc2l0aW9uc1B0cik7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZShjaHVua3NQdHIpOwogICAgICAgICAgICAgIHdhc21Nb2R1bGUuX2ZyZWUoZGVwdGhCdWZmZXJQdHIpOwogICAgICAgICAgICAgIHdhc21Nb2R1bGUuX2ZyZWUoZGVwdGhJbmRleFB0cik7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZShzdGFydHNQdHIpOwogICAgICAgICAgICAgIHdhc21Nb2R1bGUuX2ZyZWUoY291bnRzUHRyKTsKICAgICAgICAgIH0KICAgICAgICAgIGFsbG9jYXRlZFZlcnRleENvdW50ID0gdGFyZ2V0QWxsb2NhdGVkVmVydGV4Q291bnQ7CiAgICAgICAgICB2aWV3UHJvalB0ciA9IHdhc21Nb2R1bGUuX21hbGxvYygxNiAqIDQpOwogICAgICAgICAgdHJhbnNmb3JtSW5kaWNlc1B0ciA9IHdhc21Nb2R1bGUuX21hbGxvYyhhbGxvY2F0ZWRWZXJ0ZXhDb3VudCAqIDQpOwogICAgICAgICAgcG9zaXRpb25zUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKDMgKiBhbGxvY2F0ZWRWZXJ0ZXhDb3VudCAqIDQpOwogICAgICAgICAgY2h1bmtzUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKGFsbG9jYXRlZFZlcnRleENvdW50KTsKICAgICAgICAgIGRlcHRoQnVmZmVyUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICBkZXB0aEluZGV4UHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICBzdGFydHNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoYWxsb2NhdGVkVmVydGV4Q291bnQgKiA0KTsKICAgICAgICAgIGNvdW50c1B0ciA9IHdhc21Nb2R1bGUuX21hbGxvYyhhbGxvY2F0ZWRWZXJ0ZXhDb3VudCAqIDQpOwogICAgICB9CiAgICAgIGlmIChhbGxvY2F0ZWRUcmFuc2Zvcm1Db3VudCA8IHNvcnREYXRhLnRyYW5zZm9ybXMubGVuZ3RoKSB7CiAgICAgICAgICBpZiAoYWxsb2NhdGVkVHJhbnNmb3JtQ291bnQgPiAwKSB7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZSh0cmFuc2Zvcm1zUHRyKTsKICAgICAgICAgIH0KICAgICAgICAgIGFsbG9jYXRlZFRyYW5zZm9ybUNvdW50ID0gc29ydERhdGEudHJhbnNmb3Jtcy5sZW5ndGg7CiAgICAgICAgICB0cmFuc2Zvcm1zUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKGFsbG9jYXRlZFRyYW5zZm9ybUNvdW50ICogNCk7CiAgICAgIH0KICAgICAgbG9jayA9IGZhbHNlOwogICAgICBpZiAoYWxsb2NhdGlvblBlbmRpbmcpIHsKICAgICAgICAgIGFsbG9jYXRpb25QZW5kaW5nID0gZmFsc2U7CiAgICAgICAgICBhd2FpdCBhbGxvY2F0ZUJ1ZmZlcnMoKTsKICAgICAgfQogIH07CiAgY29uc3QgcnVuU29ydCA9ICgpID0+IHsKICAgICAgaWYgKGxvY2sgfHwgYWxsb2NhdGlvblBlbmRpbmcgfHwgIXdhc21Nb2R1bGUpCiAgICAgICAgICByZXR1cm47CiAgICAgIGxvY2sgPSB0cnVlOwogICAgICB3YXNtTW9kdWxlLkhFQVBGMzIuc2V0KHNvcnREYXRhLnBvc2l0aW9ucywgcG9zaXRpb25zUHRyIC8gNCk7CiAgICAgIHdhc21Nb2R1bGUuSEVBUEYzMi5zZXQoc29ydERhdGEudHJhbnNmb3JtcywgdHJhbnNmb3Jtc1B0ciAvIDQpOwogICAgICB3YXNtTW9kdWxlLkhFQVBVMzIuc2V0KHNvcnREYXRhLnRyYW5zZm9ybUluZGljZXMsIHRyYW5zZm9ybUluZGljZXNQdHIgLyA0KTsKICAgICAgd2FzbU1vZHVsZS5IRUFQRjMyLnNldCh2aWV3UHJvaiwgdmlld1Byb2pQdHIgLyA0KTsKICAgICAgd2FzbU1vZHVsZS5fc29ydCh2aWV3UHJvalB0ciwgdHJhbnNmb3Jtc1B0ciwgdHJhbnNmb3JtSW5kaWNlc1B0ciwgc29ydERhdGEudmVydGV4Q291bnQsIHBvc2l0aW9uc1B0ciwgY2h1bmtzUHRyLCBkZXB0aEJ1ZmZlclB0ciwgZGVwdGhJbmRleFB0ciwgc3RhcnRzUHRyLCBjb3VudHNQdHIpOwogICAgICBjb25zdCBkZXB0aEluZGV4ID0gbmV3IFVpbnQzMkFycmF5KHdhc21Nb2R1bGUuSEVBUFUzMi5idWZmZXIsIGRlcHRoSW5kZXhQdHIsIHNvcnREYXRhLnZlcnRleENvdW50KTsKICAgICAgY29uc3QgZGV0YWNoZWREZXB0aEluZGV4ID0gbmV3IFVpbnQzMkFycmF5KGRlcHRoSW5kZXguc2xpY2UoKS5idWZmZXIpOwogICAgICBjb25zdCBjaHVua3MgPSBuZXcgVWludDhBcnJheSh3YXNtTW9kdWxlLkhFQVBVOC5idWZmZXIsIGNodW5rc1B0ciwgc29ydERhdGEudmVydGV4Q291bnQpOwogICAgICBjb25zdCBkZXRhY2hlZENodW5rcyA9IG5ldyBVaW50OEFycmF5KGNodW5rcy5zbGljZSgpLmJ1ZmZlcik7CiAgICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBkZXB0aEluZGV4OiBkZXRhY2hlZERlcHRoSW5kZXgsIGNodW5rczogZGV0YWNoZWRDaHVua3MgfSwgWwogICAgICAgICAgZGV0YWNoZWREZXB0aEluZGV4LmJ1ZmZlciwKICAgICAgICAgIGRldGFjaGVkQ2h1bmtzLmJ1ZmZlciwKICAgICAgXSk7CiAgICAgIGxvY2sgPSBmYWxzZTsKICB9OwogIGNvbnN0IHRocm90dGxlZFNvcnQgPSAoKSA9PiB7CiAgICAgIGlmICghc29ydGluZykgewogICAgICAgICAgc29ydGluZyA9IHRydWU7CiAgICAgICAgICBydW5Tb3J0KCk7CiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsKICAgICAgICAgICAgICBzb3J0aW5nID0gZmFsc2U7CiAgICAgICAgICAgICAgdGhyb3R0bGVkU29ydCgpOwogICAgICAgICAgfSk7CiAgICAgIH0KICB9OwogIHNlbGYub25tZXNzYWdlID0gKGUpID0+IHsKICAgICAgaWYgKGUuZGF0YS5zb3J0RGF0YSkgewogICAgICAgICAgc29ydERhdGEgPSB7CiAgICAgICAgICAgICAgcG9zaXRpb25zOiBGbG9hdDMyQXJyYXkuZnJvbShlLmRhdGEuc29ydERhdGEucG9zaXRpb25zKSwKICAgICAgICAgICAgICB0cmFuc2Zvcm1zOiBGbG9hdDMyQXJyYXkuZnJvbShlLmRhdGEuc29ydERhdGEudHJhbnNmb3JtcyksCiAgICAgICAgICAgICAgdHJhbnNmb3JtSW5kaWNlczogVWludDMyQXJyYXkuZnJvbShlLmRhdGEuc29ydERhdGEudHJhbnNmb3JtSW5kaWNlcyksCiAgICAgICAgICAgICAgdmVydGV4Q291bnQ6IGUuZGF0YS5zb3J0RGF0YS52ZXJ0ZXhDb3VudCwKICAgICAgICAgIH07CiAgICAgICAgICBhbGxvY2F0ZUJ1ZmZlcnMoKTsKICAgICAgfQogICAgICBpZiAoZS5kYXRhLnZpZXdQcm9qKSB7CiAgICAgICAgICB2aWV3UHJvaiA9IEZsb2F0MzJBcnJheS5mcm9tKGUuZGF0YS52aWV3UHJvaik7CiAgICAgICAgICB0aHJvdHRsZWRTb3J0KCk7CiAgICAgIH0KICB9OwoKfSkoKTsKLy8jIHNvdXJjZU1hcHBpbmdVUkw9U29ydFdvcmtlci5qcy5tYXAKCg==", null, !1);
class QF {
  constructor(U, l) {
    this._scene = null, this._camera = null, this._started = !1, this._initialized = !1, this._renderer = U;
    const F = U.gl;
    this._program = F.createProgram(), this._passes = l || [];
    const Q = F.createShader(F.VERTEX_SHADER);
    F.shaderSource(Q, this._getVertexSource()), F.compileShader(Q), F.getShaderParameter(Q, F.COMPILE_STATUS) || console.error(F.getShaderInfoLog(Q));
    const Z = F.createShader(F.FRAGMENT_SHADER);
    F.shaderSource(Z, this._getFragmentSource()), F.compileShader(Z), F.getShaderParameter(Z, F.COMPILE_STATUS) || console.error(F.getShaderInfoLog(Z)), F.attachShader(this.program, Q), F.attachShader(this.program, Z), F.linkProgram(this.program), F.getProgramParameter(this.program, F.LINK_STATUS) || console.error(F.getProgramInfoLog(this.program)), this.resize = () => {
      F.useProgram(this._program), this._resize();
    }, this.initialize = () => {
      console.assert(!this._initialized, "ShaderProgram already initialized"), F.useProgram(this._program), this._initialize();
      for (const d of this.passes)
        d.initialize(this);
      this._initialized = !0, this._started = !0;
    }, this.render = (d, V) => {
      F.useProgram(this._program), this._scene === d && this._camera === V || (this.dispose(), this._scene = d, this._camera = V, this.initialize());
      for (const B of this.passes)
        B.render();
      this._render();
    }, this.dispose = () => {
      if (this._initialized) {
        F.useProgram(this._program);
        for (const d of this.passes)
          d.dispose();
        this._dispose(), this._scene = null, this._camera = null, this._initialized = !1;
      }
    };
  }
  get renderer() {
    return this._renderer;
  }
  get scene() {
    return this._scene;
  }
  get camera() {
    return this._camera;
  }
  get program() {
    return this._program;
  }
  get passes() {
    return this._passes;
  }
  get started() {
    return this._started;
  }
}
var tF = EU("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgdmFyIGxvYWRXYXNtID0gKCgpID0+IHsKICAgIAogICAgcmV0dXJuICgKICBmdW5jdGlvbihtb2R1bGVBcmcgPSB7fSkgewoKICB2YXIgTW9kdWxlPW1vZHVsZUFyZzt2YXIgcmVhZHlQcm9taXNlUmVzb2x2ZSxyZWFkeVByb21pc2VSZWplY3Q7TW9kdWxlWyJyZWFkeSJdPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntyZWFkeVByb21pc2VSZXNvbHZlPXJlc29sdmU7cmVhZHlQcm9taXNlUmVqZWN0PXJlamVjdDt9KTt2YXIgbW9kdWxlT3ZlcnJpZGVzPU9iamVjdC5hc3NpZ24oe30sTW9kdWxlKTt2YXIgc2NyaXB0RGlyZWN0b3J5PSIiO2Z1bmN0aW9uIGxvY2F0ZUZpbGUocGF0aCl7aWYoTW9kdWxlWyJsb2NhdGVGaWxlIl0pe3JldHVybiBNb2R1bGVbImxvY2F0ZUZpbGUiXShwYXRoLHNjcmlwdERpcmVjdG9yeSl9cmV0dXJuIHNjcmlwdERpcmVjdG9yeStwYXRofXZhciByZWFkQmluYXJ5O3t7c2NyaXB0RGlyZWN0b3J5PXNlbGYubG9jYXRpb24uaHJlZjt9aWYoc2NyaXB0RGlyZWN0b3J5LnN0YXJ0c1dpdGgoImJsb2I6Iikpe3NjcmlwdERpcmVjdG9yeT0iIjt9ZWxzZSB7c2NyaXB0RGlyZWN0b3J5PXNjcmlwdERpcmVjdG9yeS5zdWJzdHIoMCxzY3JpcHREaXJlY3RvcnkucmVwbGFjZSgvWz8jXS4qLywiIikubGFzdEluZGV4T2YoIi8iKSsxKTt9e3tyZWFkQmluYXJ5PXVybD0+e3ZhciB4aHI9bmV3IFhNTEh0dHBSZXF1ZXN0O3hoci5vcGVuKCJHRVQiLHVybCxmYWxzZSk7eGhyLnJlc3BvbnNlVHlwZT0iYXJyYXlidWZmZXIiO3hoci5zZW5kKG51bGwpO3JldHVybiBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpfTt9fX1Nb2R1bGVbInByaW50Il18fGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7dmFyIGVycj1Nb2R1bGVbInByaW50RXJyIl18fGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKTtPYmplY3QuYXNzaWduKE1vZHVsZSxtb2R1bGVPdmVycmlkZXMpO21vZHVsZU92ZXJyaWRlcz1udWxsO2lmKE1vZHVsZVsiYXJndW1lbnRzIl0pTW9kdWxlWyJhcmd1bWVudHMiXTtpZihNb2R1bGVbInRoaXNQcm9ncmFtIl0pTW9kdWxlWyJ0aGlzUHJvZ3JhbSJdO2lmKE1vZHVsZVsicXVpdCJdKU1vZHVsZVsicXVpdCJdO3ZhciB3YXNtQmluYXJ5O2lmKE1vZHVsZVsid2FzbUJpbmFyeSJdKXdhc21CaW5hcnk9TW9kdWxlWyJ3YXNtQmluYXJ5Il07aWYodHlwZW9mIFdlYkFzc2VtYmx5IT0ib2JqZWN0Iil7YWJvcnQoIm5vIG5hdGl2ZSB3YXNtIHN1cHBvcnQgZGV0ZWN0ZWQiKTt9ZnVuY3Rpb24gaW50QXJyYXlGcm9tQmFzZTY0KHMpe3ZhciBkZWNvZGVkPWF0b2Iocyk7dmFyIGJ5dGVzPW5ldyBVaW50OEFycmF5KGRlY29kZWQubGVuZ3RoKTtmb3IodmFyIGk9MDtpPGRlY29kZWQubGVuZ3RoOysraSl7Ynl0ZXNbaV09ZGVjb2RlZC5jaGFyQ29kZUF0KGkpO31yZXR1cm4gYnl0ZXN9ZnVuY3Rpb24gdHJ5UGFyc2VBc0RhdGFVUkkoZmlsZW5hbWUpe2lmKCFpc0RhdGFVUkkoZmlsZW5hbWUpKXtyZXR1cm59cmV0dXJuIGludEFycmF5RnJvbUJhc2U2NChmaWxlbmFtZS5zbGljZShkYXRhVVJJUHJlZml4Lmxlbmd0aCkpfXZhciB3YXNtTWVtb3J5O3ZhciBBQk9SVD1mYWxzZTt2YXIgSEVBUDgsSEVBUFU4LEhFQVAxNixIRUFQVTE2LEhFQVAzMixIRUFQVTMyLEhFQVBGMzIsSEVBUEY2NDtmdW5jdGlvbiB1cGRhdGVNZW1vcnlWaWV3cygpe3ZhciBiPXdhc21NZW1vcnkuYnVmZmVyO01vZHVsZVsiSEVBUDgiXT1IRUFQOD1uZXcgSW50OEFycmF5KGIpO01vZHVsZVsiSEVBUDE2Il09SEVBUDE2PW5ldyBJbnQxNkFycmF5KGIpO01vZHVsZVsiSEVBUFU4Il09SEVBUFU4PW5ldyBVaW50OEFycmF5KGIpO01vZHVsZVsiSEVBUFUxNiJdPUhFQVBVMTY9bmV3IFVpbnQxNkFycmF5KGIpO01vZHVsZVsiSEVBUDMyIl09SEVBUDMyPW5ldyBJbnQzMkFycmF5KGIpO01vZHVsZVsiSEVBUFUzMiJdPUhFQVBVMzI9bmV3IFVpbnQzMkFycmF5KGIpO01vZHVsZVsiSEVBUEYzMiJdPUhFQVBGMzI9bmV3IEZsb2F0MzJBcnJheShiKTtNb2R1bGVbIkhFQVBGNjQiXT1IRUFQRjY0PW5ldyBGbG9hdDY0QXJyYXkoYik7fXZhciBfX0FUUFJFUlVOX189W107dmFyIF9fQVRJTklUX189W107dmFyIF9fQVRQT1NUUlVOX189W107ZnVuY3Rpb24gcHJlUnVuKCl7aWYoTW9kdWxlWyJwcmVSdW4iXSl7aWYodHlwZW9mIE1vZHVsZVsicHJlUnVuIl09PSJmdW5jdGlvbiIpTW9kdWxlWyJwcmVSdW4iXT1bTW9kdWxlWyJwcmVSdW4iXV07d2hpbGUoTW9kdWxlWyJwcmVSdW4iXS5sZW5ndGgpe2FkZE9uUHJlUnVuKE1vZHVsZVsicHJlUnVuIl0uc2hpZnQoKSk7fX1jYWxsUnVudGltZUNhbGxiYWNrcyhfX0FUUFJFUlVOX18pO31mdW5jdGlvbiBpbml0UnVudGltZSgpe2NhbGxSdW50aW1lQ2FsbGJhY2tzKF9fQVRJTklUX18pO31mdW5jdGlvbiBwb3N0UnVuKCl7aWYoTW9kdWxlWyJwb3N0UnVuIl0pe2lmKHR5cGVvZiBNb2R1bGVbInBvc3RSdW4iXT09ImZ1bmN0aW9uIilNb2R1bGVbInBvc3RSdW4iXT1bTW9kdWxlWyJwb3N0UnVuIl1dO3doaWxlKE1vZHVsZVsicG9zdFJ1biJdLmxlbmd0aCl7YWRkT25Qb3N0UnVuKE1vZHVsZVsicG9zdFJ1biJdLnNoaWZ0KCkpO319Y2FsbFJ1bnRpbWVDYWxsYmFja3MoX19BVFBPU1RSVU5fXyk7fWZ1bmN0aW9uIGFkZE9uUHJlUnVuKGNiKXtfX0FUUFJFUlVOX18udW5zaGlmdChjYik7fWZ1bmN0aW9uIGFkZE9uSW5pdChjYil7X19BVElOSVRfXy51bnNoaWZ0KGNiKTt9ZnVuY3Rpb24gYWRkT25Qb3N0UnVuKGNiKXtfX0FUUE9TVFJVTl9fLnVuc2hpZnQoY2IpO312YXIgcnVuRGVwZW5kZW5jaWVzPTA7dmFyIGRlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2Z1bmN0aW9uIGFkZFJ1bkRlcGVuZGVuY3koaWQpe3J1bkRlcGVuZGVuY2llcysrO01vZHVsZVsibW9uaXRvclJ1bkRlcGVuZGVuY2llcyJdPy4ocnVuRGVwZW5kZW5jaWVzKTt9ZnVuY3Rpb24gcmVtb3ZlUnVuRGVwZW5kZW5jeShpZCl7cnVuRGVwZW5kZW5jaWVzLS07TW9kdWxlWyJtb25pdG9yUnVuRGVwZW5kZW5jaWVzIl0/LihydW5EZXBlbmRlbmNpZXMpO2lmKHJ1bkRlcGVuZGVuY2llcz09MCl7aWYoZGVwZW5kZW5jaWVzRnVsZmlsbGVkKXt2YXIgY2FsbGJhY2s9ZGVwZW5kZW5jaWVzRnVsZmlsbGVkO2RlcGVuZGVuY2llc0Z1bGZpbGxlZD1udWxsO2NhbGxiYWNrKCk7fX19ZnVuY3Rpb24gYWJvcnQod2hhdCl7TW9kdWxlWyJvbkFib3J0Il0/Lih3aGF0KTt3aGF0PSJBYm9ydGVkKCIrd2hhdCsiKSI7ZXJyKHdoYXQpO0FCT1JUPXRydWU7d2hhdCs9Ii4gQnVpbGQgd2l0aCAtc0FTU0VSVElPTlMgZm9yIG1vcmUgaW5mby4iO3ZhciBlPW5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3Iod2hhdCk7cmVhZHlQcm9taXNlUmVqZWN0KGUpO3Rocm93IGV9dmFyIGRhdGFVUklQcmVmaXg9ImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiO3ZhciBpc0RhdGFVUkk9ZmlsZW5hbWU9PmZpbGVuYW1lLnN0YXJ0c1dpdGgoZGF0YVVSSVByZWZpeCk7dmFyIHdhc21CaW5hcnlGaWxlO3dhc21CaW5hcnlGaWxlPSJkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUdGemJRRUFBQUFCWnc5Z0JIOS9mMzhBWUFOL2YzOEFZQVYvZjM5L2Z3QmdCbjkvZjM5L2Z3QmdBWDhCZjJBQmZ3QmdBbjkvQUdBRGYzOS9BWDlnQUFCZ0IzOS9mMzkvZjM4QVlBSjlmUUYvWUFSL2YzNStBR0FCZlFGL1lBdC9mMzkvZjM5L2YzOS9md0JnQW45L0FYOENQUW9CWVFGaEFBRUJZUUZpQUFJQllRRmpBQUVCWVFGa0FBWUJZUUZsQUFFQllRRm1BQWtCWVFGbkFBUUJZUUZvQUFVQllRRnBBQUFCWVFGcUFBWURHeG9IQkFvRkNBVUdDQXNCQUFFRkRBUUVEUU1EQWdJQUFBNEhCd1FGQVhBQkVCQUZCd0VCZ0FLQWdBSUdDQUYvQVVHd25nUUxCeGtHQVdzQ0FBRnNBQTRCYlFBYUFXNEJBQUZ2QUJrQmNBQVBDUlVCQUVFQkN3OFJHQTBXRmlNTkloc2RJQTBjSGg4SzZWQWFjUUVCZnlBQ1JRUkFJQUFvQWdRZ0FTZ0NCRVlQQ3lBQUlBRkdCRUJCQVE4TEFrQWdBQ2dDQkNJQ0xRQUFJZ0JGSUFBZ0FTZ0NCQ0lCTFFBQUlnTkhjZzBBQTBBZ0FTMEFBU0VESUFJdEFBRWlBRVVOQVNBQlFRRnFJUUVnQWtFQmFpRUNJQUFnQTBZTkFBc0xJQUFnQTBZTFR3RUNmMEdvR2lnQ0FDSUJJQUJCQjJwQmVIRWlBbW9oQUFKQUlBSkJBQ0FBSUFGTkcwVUVRQ0FBUHdCQkVIUk5EUUVnQUJBR0RRRUxRYmdhUVRBMkFnQkJmdzhMUWFnYUlBQTJBZ0FnQVFzT0FDQUFFQmNnQVJBWFFSQjBjZ3NHQUNBQUVBOExLUUJCc0JwQkFUWUNBRUcwR2tFQU5nSUFFQkZCdEJwQnJCb29BZ0EyQWdCQnJCcEJzQm8yQWdBTDJRc0JCMzhDUUNBQVJRMEFJQUJCQ0dzaUF5QUFRUVJyS0FJQUlnRkJlSEVpQUdvaEJRSkFJQUZCQVhFTkFDQUJRUUp4UlEwQklBTWdBeWdDQUNJQmF5SURRY3dhS0FJQVNRMEJJQUFnQVdvaEFBSkFBa0JCMEJvb0FnQWdBMGNFUUNBREtBSU1JUUlnQVVIL0FVMEVRQ0FCUVFOMklRRWdBeWdDQ0NJRUlBSkdCRUJCdkJwQnZCb29BZ0JCZmlBQmQzRTJBZ0FNQlFzZ0JDQUNOZ0lNSUFJZ0JEWUNDQXdFQ3lBREtBSVlJUVlnQWlBRFJ3UkFJQU1vQWdnaUFTQUNOZ0lNSUFJZ0FUWUNDQXdEQ3lBREtBSVVJZ0VFZnlBRFFSUnFCU0FES0FJUUlnRkZEUUlnQTBFUWFnc2hCQU5BSUFRaEJ5QUJJZ0pCRkdvaEJDQUNLQUlVSWdFTkFDQUNRUkJxSVFRZ0FpZ0NFQ0lCRFFBTElBZEJBRFlDQUF3Q0N5QUZLQUlFSWdGQkEzRkJBMGNOQWtIRUdpQUFOZ0lBSUFVZ0FVRitjVFlDQkNBRElBQkJBWEkyQWdRZ0JTQUFOZ0lBRHd0QkFDRUNDeUFHUlEwQUFrQWdBeWdDSENJQlFRSjBRZXdjYWlJRUtBSUFJQU5HQkVBZ0JDQUNOZ0lBSUFJTkFVSEFHa0hBR2lnQ0FFRitJQUYzY1RZQ0FBd0NDeUFHUVJCQkZDQUdLQUlRSUFOR0cyb2dBallDQUNBQ1JRMEJDeUFDSUFZMkFoZ2dBeWdDRUNJQkJFQWdBaUFCTmdJUUlBRWdBallDR0FzZ0F5Z0NGQ0lCUlEwQUlBSWdBVFlDRkNBQklBSTJBaGdMSUFNZ0JVOE5BQ0FGS0FJRUlnRkJBWEZGRFFBQ1FBSkFBa0FDUUNBQlFRSnhSUVJBUWRRYUtBSUFJQVZHQkVCQjFCb2dBellDQUVISUdrSElHaWdDQUNBQWFpSUFOZ0lBSUFNZ0FFRUJjallDQkNBRFFkQWFLQUlBUncwR1FjUWFRUUEyQWdCQjBCcEJBRFlDQUE4TFFkQWFLQUlBSUFWR0JFQkIwQm9nQXpZQ0FFSEVHa0hFR2lnQ0FDQUFhaUlBTmdJQUlBTWdBRUVCY2pZQ0JDQUFJQU5xSUFBMkFnQVBDeUFCUVhoeElBQnFJUUFnQlNnQ0RDRUNJQUZCL3dGTkJFQWdBVUVEZGlFQklBVW9BZ2dpQkNBQ1JnUkFRYndhUWJ3YUtBSUFRWDRnQVhkeE5nSUFEQVVMSUFRZ0FqWUNEQ0FDSUFRMkFnZ01CQXNnQlNnQ0dDRUdJQUlnQlVjRVFFSE1HaWdDQUJvZ0JTZ0NDQ0lCSUFJMkFnd2dBaUFCTmdJSURBTUxJQVVvQWhRaUFRUi9JQVZCRkdvRklBVW9BaEFpQVVVTkFpQUZRUkJxQ3lFRUEwQWdCQ0VISUFFaUFrRVVhaUVFSUFJb0FoUWlBUTBBSUFKQkVHb2hCQ0FDS0FJUUlnRU5BQXNnQjBFQU5nSUFEQUlMSUFVZ0FVRitjVFlDQkNBRElBQkJBWEkyQWdRZ0FDQURhaUFBTmdJQURBTUxRUUFoQWdzZ0JrVU5BQUpBSUFVb0Fod2lBVUVDZEVIc0hHb2lCQ2dDQUNBRlJnUkFJQVFnQWpZQ0FDQUNEUUZCd0JwQndCb29BZ0JCZmlBQmQzRTJBZ0FNQWdzZ0JrRVFRUlFnQmlnQ0VDQUZSaHRxSUFJMkFnQWdBa1VOQVFzZ0FpQUdOZ0lZSUFVb0FoQWlBUVJBSUFJZ0FUWUNFQ0FCSUFJMkFoZ0xJQVVvQWhRaUFVVU5BQ0FDSUFFMkFoUWdBU0FDTmdJWUN5QURJQUJCQVhJMkFnUWdBQ0FEYWlBQU5nSUFJQU5CMEJvb0FnQkhEUUJCeEJvZ0FEWUNBQThMSUFCQi93Rk5CRUFnQUVGNGNVSGtHbW9oQVFKL1Fid2FLQUlBSWdSQkFTQUFRUU4yZENJQWNVVUVRRUc4R2lBQUlBUnlOZ0lBSUFFTUFRc2dBU2dDQ0FzaEFDQUJJQU0yQWdnZ0FDQUROZ0lNSUFNZ0FUWUNEQ0FESUFBMkFnZ1BDMEVmSVFJZ0FFSC8vLzhIVFFSQUlBQkJKaUFBUVFoMlp5SUJhM1pCQVhFZ0FVRUJkR3RCUG1vaEFnc2dBeUFDTmdJY0lBTkNBRGNDRUNBQ1FRSjBRZXdjYWlFSEFuOENRQUovUWNBYUtBSUFJZ0ZCQVNBQ2RDSUVjVVVFUUVIQUdpQUJJQVJ5TmdJQVFSZ2hBaUFISVFSQkNBd0JDeUFBUVJrZ0FrRUJkbXRCQUNBQ1FSOUhHM1FoQWlBSEtBSUFJUVFEUUNBRUlnRW9BZ1JCZUhFZ0FFWU5BaUFDUVIxMklRUWdBa0VCZENFQ0lBRWdCRUVFY1dwQkVHb2lCeWdDQUNJRURRQUxRUmdoQWlBQklRUkJDQXNoQUNBRElnRU1BUXNnQVNnQ0NDSUVJQU0yQWd4QkNDRUNJQUZCQ0dvaEIwRVlJUUJCQUFzaEJTQUhJQU0yQWdBZ0FpQURhaUFFTmdJQUlBTWdBVFlDRENBQUlBTnFJQVUyQWdCQjNCcEIzQm9vQWdCQkFXc2lBRUYvSUFBYk5nSUFDd3NoQUNBQkJFQURRQ0FBUVFBNkFBQWdBRUVCYWlFQUlBRkJBV3NpQVEwQUN3c0wzZ01BUWR3WFFZb0pFQWxCNkJkQnVRaEJBVUVBRUFoQjlCZEJ0QWhCQVVHQWYwSC9BQkFCUVl3WVFhMElRUUZCZ0g5Qi93QVFBVUdBR0VHckNFRUJRUUJCL3dFUUFVR1lHRUdKQ0VFQ1FZQ0Fma0gvL3dFUUFVR2tHRUdBQ0VFQ1FRQkIvLzhERUFGQnNCaEJtQWhCQkVHQWdJQ0FlRUgvLy8vL0J4QUJRYndZUVk4SVFRUkJBRUYvRUFGQnlCaEJ4d2hCQkVHQWdJQ0FlRUgvLy8vL0J4QUJRZFFZUWI0SVFRUkJBRUYvRUFGQjRCaEJvd2hDZ0lDQWdJQ0FnSUNBZjBMLy8vLy8vLy8vLy84QUVCSkI3QmhCb2doQ0FFSi9FQkpCK0JoQm5BaEJCQkFFUVlRWlFZTUpRUWdRQkVIMERrSFpDQkFEUWJ3UFFZY05FQU5CaEJCQkJFSE1DQkFDUWRBUVFRSkI1UWdRQWtHY0VVRUVRZlFJRUFKQnVCRVFCMEhnRVVFQVFjSU1FQUJCaUJKQkFFR29EUkFBUWJBU1FRRkI0QXdRQUVIWUVrRUNRWThKRUFCQmdCTkJBMEd1Q1JBQVFhZ1RRUVJCMWdrUUFFSFFFMEVGUWZNSkVBQkIrQk5CQkVITkRSQUFRYUFVUVFWQjZ3MFFBRUdJRWtFQVFka0tFQUJCc0JKQkFVRzRDaEFBUWRnU1FRSkJtd3NRQUVHQUUwRURRZmtLRUFCQnFCTkJCRUdoREJBQVFkQVRRUVZCL3dzUUFFSElGRUVJUWQ0TEVBQkI4QlJCQ1VHOEN4QUFRWmdWUVFaQm1Rb1FBRUhBRlVFSFFaSU9FQUFMSEFBZ0FDQUJRUWdnQXFjZ0FrSWdpS2NnQTZjZ0EwSWdpS2NRQlFzZ0FBSkFJQUFvQWdRZ0FVY05BQ0FBS0FJY1FRRkdEUUFnQUNBQ05nSWNDd3VhQVFBZ0FFRUJPZ0ExQWtBZ0FDZ0NCQ0FDUncwQUlBQkJBVG9BTkFKQUlBQW9BaEFpQWtVRVFDQUFRUUUyQWlRZ0FDQUROZ0lZSUFBZ0FUWUNFQ0FEUVFGSERRSWdBQ2dDTUVFQlJnMEJEQUlMSUFFZ0FrWUVRQ0FBS0FJWUlnSkJBa1lFUUNBQUlBTTJBaGdnQXlFQ0N5QUFLQUl3UVFGSERRSWdBa0VCUmcwQkRBSUxJQUFnQUNnQ0pFRUJhallDSkFzZ0FFRUJPZ0EyQ3d0ZEFRRi9JQUFvQWhBaUEwVUVRQ0FBUVFFMkFpUWdBQ0FDTmdJWUlBQWdBVFlDRUE4TEFrQWdBU0FEUmdSQUlBQW9BaGhCQWtjTkFTQUFJQUkyQWhnUEN5QUFRUUU2QURZZ0FFRUNOZ0lZSUFBZ0FDZ0NKRUVCYWpZQ0pBc0xBZ0FMZHdFRWZ5QUF2Q0lFUWYvLy93TnhJUUVDUUNBRVFSZDJRZjhCY1NJQ1JRMEFJQUpCOEFCTkJFQWdBVUdBZ0lBRWNrSHhBQ0FDYTNZaEFRd0JDeUFDUVkwQlN3UkFRWUQ0QVNFRFFRQWhBUXdCQ3lBQ1FRcDBRWUNBQjJzaEF3c2dBeUFFUVJCMlFZQ0FBbkZ5SUFGQkRYWnlRZi8vQTNFTEJBQWdBQXZYSndFTWZ5TUFRUkJySWdva0FBSkFBa0FDUUFKQUFrQUNRQUpBQWtBQ1FBSkFJQUJCOUFGTkJFQkJ2Qm9vQWdBaUJFRVFJQUJCQzJwQitBTnhJQUJCQzBrYklnWkJBM1lpQUhZaUFVRURjUVJBQWtBZ0FVRi9jMEVCY1NBQWFpSUNRUU4wSWdGQjVCcHFJZ0FnQVVIc0dtb29BZ0FpQVNnQ0NDSUZSZ1JBUWJ3YUlBUkJmaUFDZDNFMkFnQU1BUXNnQlNBQU5nSU1JQUFnQlRZQ0NBc2dBVUVJYWlFQUlBRWdBa0VEZENJQ1FRTnlOZ0lFSUFFZ0Ftb2lBU0FCS0FJRVFRRnlOZ0lFREFzTElBWkJ4Qm9vQWdBaUNFME5BU0FCQkVBQ1FFRUNJQUIwSWdKQkFDQUNhM0lnQVNBQWRIRm9JZ0ZCQTNRaUFFSGtHbW9pQWlBQVFld2FhaWdDQUNJQUtBSUlJZ1ZHQkVCQnZCb2dCRUYrSUFGM2NTSUVOZ0lBREFFTElBVWdBallDRENBQ0lBVTJBZ2dMSUFBZ0JrRURjallDQkNBQUlBWnFJZ2NnQVVFRGRDSUJJQVpySWdWQkFYSTJBZ1FnQUNBQmFpQUZOZ0lBSUFnRVFDQUlRWGh4UWVRYWFpRUJRZEFhS0FJQUlRSUNmeUFFUVFFZ0NFRURkblFpQTNGRkJFQkJ2Qm9nQXlBRWNqWUNBQ0FCREFFTElBRW9BZ2dMSVFNZ0FTQUNOZ0lJSUFNZ0FqWUNEQ0FDSUFFMkFnd2dBaUFETmdJSUN5QUFRUWhxSVFCQjBCb2dCellDQUVIRUdpQUZOZ0lBREFzTFFjQWFLQUlBSWd0RkRRRWdDMmhCQW5SQjdCeHFLQUlBSWdJb0FnUkJlSEVnQm1zaEF5QUNJUUVEUUFKQUlBRW9BaEFpQUVVRVFDQUJLQUlVSWdCRkRRRUxJQUFvQWdSQmVIRWdCbXNpQVNBRElBRWdBMGtpQVJzaEF5QUFJQUlnQVJzaEFpQUFJUUVNQVFzTElBSW9BaGdoQ1NBQ0lBSW9BZ3dpQUVjRVFFSE1HaWdDQUJvZ0FpZ0NDQ0lCSUFBMkFnd2dBQ0FCTmdJSURBb0xJQUlvQWhRaUFRUi9JQUpCRkdvRklBSW9BaEFpQVVVTkF5QUNRUkJxQ3lFRkEwQWdCU0VISUFFaUFFRVVhaUVGSUFBb0FoUWlBUTBBSUFCQkVHb2hCU0FBS0FJUUlnRU5BQXNnQjBFQU5nSUFEQWtMUVg4aEJpQUFRYjkvU3cwQUlBQkJDMm9pQUVGNGNTRUdRY0FhS0FJQUlnZEZEUUJCQUNBR2F5RURBa0FDUUFKQUFuOUJBQ0FHUVlBQ1NRMEFHa0VmSUFaQi8vLy9CMHNOQUJvZ0JrRW1JQUJCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWdzaUNFRUNkRUhzSEdvb0FnQWlBVVVFUUVFQUlRQU1BUXRCQUNFQUlBWkJHU0FJUVFGMmEwRUFJQWhCSDBjYmRDRUNBMEFDUUNBQktBSUVRWGh4SUFacklnUWdBMDhOQUNBQklRVWdCQ0lERFFCQkFDRURJQUVoQUF3REN5QUFJQUVvQWhRaUJDQUVJQUVnQWtFZGRrRUVjV29vQWhBaUFVWWJJQUFnQkJzaEFDQUNRUUYwSVFJZ0FRMEFDd3NnQUNBRmNrVUVRRUVBSVFWQkFpQUlkQ0lBUVFBZ0FHdHlJQWR4SWdCRkRRTWdBR2hCQW5SQjdCeHFLQUlBSVFBTElBQkZEUUVMQTBBZ0FDZ0NCRUY0Y1NBR2F5SUNJQU5KSVFFZ0FpQURJQUViSVFNZ0FDQUZJQUViSVFVZ0FDZ0NFQ0lCQkg4Z0FRVWdBQ2dDRkFzaUFBMEFDd3NnQlVVTkFDQURRY1FhS0FJQUlBWnJUdzBBSUFVb0FoZ2hDQ0FGSUFVb0Fnd2lBRWNFUUVITUdpZ0NBQm9nQlNnQ0NDSUJJQUEyQWd3Z0FDQUJOZ0lJREFnTElBVW9BaFFpQVFSL0lBVkJGR29GSUFVb0FoQWlBVVVOQXlBRlFSQnFDeUVDQTBBZ0FpRUVJQUVpQUVFVWFpRUNJQUFvQWhRaUFRMEFJQUJCRUdvaEFpQUFLQUlRSWdFTkFBc2dCRUVBTmdJQURBY0xJQVpCeEJvb0FnQWlCVTBFUUVIUUdpZ0NBQ0VBQWtBZ0JTQUdheUlCUVJCUEJFQWdBQ0FHYWlJQ0lBRkJBWEkyQWdRZ0FDQUZhaUFCTmdJQUlBQWdCa0VEY2pZQ0JBd0JDeUFBSUFWQkEzSTJBZ1FnQUNBRmFpSUJJQUVvQWdSQkFYSTJBZ1JCQUNFQ1FRQWhBUXRCeEJvZ0FUWUNBRUhRR2lBQ05nSUFJQUJCQ0dvaEFBd0pDeUFHUWNnYUtBSUFJZ0pKQkVCQnlCb2dBaUFHYXlJQk5nSUFRZFFhUWRRYUtBSUFJZ0FnQm1vaUFqWUNBQ0FDSUFGQkFYSTJBZ1FnQUNBR1FRTnlOZ0lFSUFCQkNHb2hBQXdKQzBFQUlRQWdCa0V2YWlJREFuOUJsQjRvQWdBRVFFR2NIaWdDQUF3QkMwR2dIa0ovTndJQVFaZ2VRb0NnZ0lDQWdBUTNBZ0JCbEI0Z0NrRU1ha0Z3Y1VIWXF0V3FCWE0yQWdCQnFCNUJBRFlDQUVINEhVRUFOZ0lBUVlBZ0N5SUJhaUlFUVFBZ0FXc2lCM0VpQVNBR1RRMElRZlFkS0FJQUlnVUVRRUhzSFNnQ0FDSUlJQUZxSWdrZ0NFMGdCU0FKU1hJTkNRc0NRRUg0SFMwQUFFRUVjVVVFUUFKQUFrQUNRQUpBUWRRYUtBSUFJZ1VFUUVIOEhTRUFBMEFnQlNBQUtBSUFJZ2hQQkVBZ0NDQUFLQUlFYWlBRlN3MERDeUFBS0FJSUlnQU5BQXNMUVFBUUN5SUNRWDlHRFFNZ0FTRUVRWmdlS0FJQUlnQkJBV3NpQlNBQ2NRUkFJQUVnQW1zZ0FpQUZha0VBSUFCcmNXb2hCQXNnQkNBR1RRMERRZlFkS0FJQUlnQUVRRUhzSFNnQ0FDSUZJQVJxSWdjZ0JVMGdBQ0FIU1hJTkJBc2dCQkFMSWdBZ0FrY05BUXdGQ3lBRUlBSnJJQWR4SWdRUUN5SUNJQUFvQWdBZ0FDZ0NCR3BHRFFFZ0FpRUFDeUFBUVg5R0RRRWdCa0V3YWlBRVRRUkFJQUFoQWd3RUMwR2NIaWdDQUNJQ0lBTWdCR3RxUVFBZ0FtdHhJZ0lRQzBGL1JnMEJJQUlnQkdvaEJDQUFJUUlNQXdzZ0FrRi9SdzBDQzBINEhVSDRIU2dDQUVFRWNqWUNBQXNnQVJBTElnSkJmMFpCQUJBTElnQkJmMFp5SUFBZ0FrMXlEUVVnQUNBQ2F5SUVJQVpCS0dwTkRRVUxRZXdkUWV3ZEtBSUFJQVJxSWdBMkFnQkI4QjBvQWdBZ0FFa0VRRUh3SFNBQU5nSUFDd0pBUWRRYUtBSUFJZ01FUUVIOEhTRUFBMEFnQWlBQUtBSUFJZ0VnQUNnQ0JDSUZha1lOQWlBQUtBSUlJZ0FOQUFzTUJBdEJ6Qm9vQWdBaUFFRUFJQUFnQWswYlJRUkFRY3dhSUFJMkFnQUxRUUFoQUVHQUhpQUVOZ0lBUWZ3ZElBSTJBZ0JCM0JwQmZ6WUNBRUhnR2tHVUhpZ0NBRFlDQUVHSUhrRUFOZ0lBQTBBZ0FFRURkQ0lCUWV3YWFpQUJRZVFhYWlJRk5nSUFJQUZCOEJwcUlBVTJBZ0FnQUVFQmFpSUFRU0JIRFFBTFFjZ2FJQVJCS0dzaUFFRjRJQUpyUVFkeElnRnJJZ1UyQWdCQjFCb2dBU0FDYWlJQk5nSUFJQUVnQlVFQmNqWUNCQ0FBSUFKcVFTZzJBZ1JCMkJwQnBCNG9BZ0EyQWdBTUJBc2dBaUFEVFNBQklBTkxjZzBDSUFBb0FneEJDSEVOQWlBQUlBUWdCV28yQWdSQjFCb2dBMEY0SUFOclFRZHhJZ0JxSWdFMkFnQkJ5QnBCeUJvb0FnQWdCR29pQWlBQWF5SUFOZ0lBSUFFZ0FFRUJjallDQkNBQ0lBTnFRU2cyQWdSQjJCcEJwQjRvQWdBMkFnQU1Bd3RCQUNFQURBWUxRUUFoQUF3RUMwSE1HaWdDQUNBQ1N3UkFRY3dhSUFJMkFnQUxJQUlnQkdvaEFVSDhIU0VBQWtBRFFDQUJJQUFvQWdCSEJFQWdBQ2dDQ0NJQURRRU1BZ3NMSUFBdEFBeEJDSEZGRFFNTFFmd2RJUUFEUUFKQUlBTWdBQ2dDQUNJQlR3UkFJQUVnQUNnQ0JHb2lCU0FEU3cwQkN5QUFLQUlJSVFBTUFRc0xRY2dhSUFSQktHc2lBRUY0SUFKclFRZHhJZ0ZySWdjMkFnQkIxQm9nQVNBQ2FpSUJOZ0lBSUFFZ0IwRUJjallDQkNBQUlBSnFRU2cyQWdSQjJCcEJwQjRvQWdBMkFnQWdBeUFGUVNjZ0JXdEJCM0ZxUVM5cklnQWdBQ0FEUVJCcVNSc2lBVUViTmdJRUlBRkJoQjRwQWdBM0FoQWdBVUg4SFNrQ0FEY0NDRUdFSGlBQlFRaHFOZ0lBUVlBZUlBUTJBZ0JCL0IwZ0FqWUNBRUdJSGtFQU5nSUFJQUZCR0dvaEFBTkFJQUJCQnpZQ0JDQUFRUWhxSVF3Z0FFRUVhaUVBSUF3Z0JVa05BQXNnQVNBRFJnMEFJQUVnQVNnQ0JFRitjVFlDQkNBRElBRWdBMnNpQWtFQmNqWUNCQ0FCSUFJMkFnQUNmeUFDUWY4QlRRUkFJQUpCZUhGQjVCcHFJUUFDZjBHOEdpZ0NBQ0lCUVFFZ0FrRURkblFpQW5GRkJFQkJ2Qm9nQVNBQ2NqWUNBQ0FBREFFTElBQW9BZ2dMSVFFZ0FDQUROZ0lJSUFFZ0F6WUNERUVNSVFKQkNBd0JDMEVmSVFBZ0FrSC8vLzhIVFFSQUlBSkJKaUFDUVFoMlp5SUFhM1pCQVhFZ0FFRUJkR3RCUG1vaEFBc2dBeUFBTmdJY0lBTkNBRGNDRUNBQVFRSjBRZXdjYWlFQkFrQUNRRUhBR2lnQ0FDSUZRUUVnQUhRaUJIRkZCRUJCd0JvZ0JDQUZjallDQUNBQklBTTJBZ0FNQVFzZ0FrRVpJQUJCQVhaclFRQWdBRUVmUnh0MElRQWdBU2dDQUNFRkEwQWdCU0lCS0FJRVFYaHhJQUpHRFFJZ0FFRWRkaUVGSUFCQkFYUWhBQ0FCSUFWQkJIRnFJZ1FvQWhBaUJRMEFDeUFFSUFNMkFoQUxJQU1nQVRZQ0dFRUlJUUlnQXlJQklRQkJEQXdCQ3lBQktBSUlJZ0FnQXpZQ0RDQUJJQU0yQWdnZ0F5QUFOZ0lJUVFBaEFFRVlJUUpCREFzZ0Eyb2dBVFlDQUNBQ0lBTnFJQUEyQWdBTFFjZ2FLQUlBSWdBZ0JrME5BRUhJR2lBQUlBWnJJZ0UyQWdCQjFCcEIxQm9vQWdBaUFDQUdhaUlDTmdJQUlBSWdBVUVCY2pZQ0JDQUFJQVpCQTNJMkFnUWdBRUVJYWlFQURBUUxRYmdhUVRBMkFnQkJBQ0VBREFNTElBQWdBallDQUNBQUlBQW9BZ1FnQkdvMkFnUWdBa0Y0SUFKclFRZHhhaUlJSUFaQkEzSTJBZ1FnQVVGNElBRnJRUWR4YWlJRUlBWWdDR29pQTJzaEJ3SkFRZFFhS0FJQUlBUkdCRUJCMUJvZ0F6WUNBRUhJR2tISUdpZ0NBQ0FIYWlJQU5nSUFJQU1nQUVFQmNqWUNCQXdCQzBIUUdpZ0NBQ0FFUmdSQVFkQWFJQU0yQWdCQnhCcEJ4Qm9vQWdBZ0Iyb2lBRFlDQUNBRElBQkJBWEkyQWdRZ0FDQURhaUFBTmdJQURBRUxJQVFvQWdRaUFFRURjVUVCUmdSQUlBQkJlSEVoQ1NBRUtBSU1JUUlDUUNBQVFmOEJUUVJBSUFRb0FnZ2lBU0FDUmdSQVFid2FRYndhS0FJQVFYNGdBRUVEZG5keE5nSUFEQUlMSUFFZ0FqWUNEQ0FDSUFFMkFnZ01BUXNnQkNnQ0dDRUdBa0FnQWlBRVJ3UkFRY3dhS0FJQUdpQUVLQUlJSWdBZ0FqWUNEQ0FDSUFBMkFnZ01BUXNDUUNBRUtBSVVJZ0FFZnlBRVFSUnFCU0FFS0FJUUlnQkZEUUVnQkVFUWFnc2hBUU5BSUFFaEJTQUFJZ0pCRkdvaEFTQUFLQUlVSWdBTkFDQUNRUkJxSVFFZ0FpZ0NFQ0lBRFFBTElBVkJBRFlDQUF3QkMwRUFJUUlMSUFaRkRRQUNRQ0FFS0FJY0lnQkJBblJCN0J4cUlnRW9BZ0FnQkVZRVFDQUJJQUkyQWdBZ0FnMEJRY0FhUWNBYUtBSUFRWDRnQUhkeE5nSUFEQUlMSUFaQkVFRVVJQVlvQWhBZ0JFWWJhaUFDTmdJQUlBSkZEUUVMSUFJZ0JqWUNHQ0FFS0FJUUlnQUVRQ0FDSUFBMkFoQWdBQ0FDTmdJWUN5QUVLQUlVSWdCRkRRQWdBaUFBTmdJVUlBQWdBallDR0FzZ0J5QUphaUVISUFRZ0NXb2lCQ2dDQkNFQUN5QUVJQUJCZm5FMkFnUWdBeUFIUVFGeU5nSUVJQU1nQjJvZ0J6WUNBQ0FIUWY4QlRRUkFJQWRCZUhGQjVCcHFJUUFDZjBHOEdpZ0NBQ0lCUVFFZ0IwRURkblFpQW5GRkJFQkJ2Qm9nQVNBQ2NqWUNBQ0FBREFFTElBQW9BZ2dMSVFFZ0FDQUROZ0lJSUFFZ0F6WUNEQ0FESUFBMkFnd2dBeUFCTmdJSURBRUxRUjhoQWlBSFFmLy8vd2ROQkVBZ0IwRW1JQWRCQ0habklnQnJka0VCY1NBQVFRRjBhMEUrYWlFQ0N5QURJQUkyQWh3Z0EwSUFOd0lRSUFKQkFuUkI3QnhxSVFBQ1FBSkFRY0FhS0FJQUlnRkJBU0FDZENJRmNVVUVRRUhBR2lBQklBVnlOZ0lBSUFBZ0F6WUNBQXdCQ3lBSFFSa2dBa0VCZG10QkFDQUNRUjlIRzNRaEFpQUFLQUlBSVFFRFFDQUJJZ0FvQWdSQmVIRWdCMFlOQWlBQ1FSMTJJUUVnQWtFQmRDRUNJQUFnQVVFRWNXb2lCU2dDRUNJQkRRQUxJQVVnQXpZQ0VBc2dBeUFBTmdJWUlBTWdBellDRENBRElBTTJBZ2dNQVFzZ0FDZ0NDQ0lCSUFNMkFnd2dBQ0FETmdJSUlBTkJBRFlDR0NBRElBQTJBZ3dnQXlBQk5nSUlDeUFJUVFocUlRQU1BZ3NDUUNBSVJRMEFBa0FnQlNnQ0hDSUJRUUowUWV3Y2FpSUNLQUlBSUFWR0JFQWdBaUFBTmdJQUlBQU5BVUhBR2lBSFFYNGdBWGR4SWdjMkFnQU1BZ3NnQ0VFUVFSUWdDQ2dDRUNBRlJodHFJQUEyQWdBZ0FFVU5BUXNnQUNBSU5nSVlJQVVvQWhBaUFRUkFJQUFnQVRZQ0VDQUJJQUEyQWhnTElBVW9BaFFpQVVVTkFDQUFJQUUyQWhRZ0FTQUFOZ0lZQ3dKQUlBTkJEMDBFUUNBRklBTWdCbW9pQUVFRGNqWUNCQ0FBSUFWcUlnQWdBQ2dDQkVFQmNqWUNCQXdCQ3lBRklBWkJBM0kyQWdRZ0JTQUdhaUlFSUFOQkFYSTJBZ1FnQXlBRWFpQUROZ0lBSUFOQi93Rk5CRUFnQTBGNGNVSGtHbW9oQUFKL1Fid2FLQUlBSWdGQkFTQURRUU4yZENJQ2NVVUVRRUc4R2lBQklBSnlOZ0lBSUFBTUFRc2dBQ2dDQ0FzaEFTQUFJQVEyQWdnZ0FTQUVOZ0lNSUFRZ0FEWUNEQ0FFSUFFMkFnZ01BUXRCSHlFQUlBTkIvLy8vQjAwRVFDQURRU1lnQTBFSWRtY2lBR3QyUVFGeElBQkJBWFJyUVQ1cUlRQUxJQVFnQURZQ0hDQUVRZ0EzQWhBZ0FFRUNkRUhzSEdvaEFRSkFBa0FnQjBFQklBQjBJZ0p4UlFSQVFjQWFJQUlnQjNJMkFnQWdBU0FFTmdJQUlBUWdBVFlDR0F3QkN5QURRUmtnQUVFQmRtdEJBQ0FBUVI5SEczUWhBQ0FCS0FJQUlRRURRQ0FCSWdJb0FnUkJlSEVnQTBZTkFpQUFRUjEySVFFZ0FFRUJkQ0VBSUFJZ0FVRUVjV29pQnlnQ0VDSUJEUUFMSUFjZ0JEWUNFQ0FFSUFJMkFoZ0xJQVFnQkRZQ0RDQUVJQVEyQWdnTUFRc2dBaWdDQ0NJQUlBUTJBZ3dnQWlBRU5nSUlJQVJCQURZQ0dDQUVJQUkyQWd3Z0JDQUFOZ0lJQ3lBRlFRaHFJUUFNQVFzQ1FDQUpSUTBBQWtBZ0FpZ0NIQ0lCUVFKMFFld2NhaUlGS0FJQUlBSkdCRUFnQlNBQU5nSUFJQUFOQVVIQUdpQUxRWDRnQVhkeE5nSUFEQUlMSUFsQkVFRVVJQWtvQWhBZ0FrWWJhaUFBTmdJQUlBQkZEUUVMSUFBZ0NUWUNHQ0FDS0FJUUlnRUVRQ0FBSUFFMkFoQWdBU0FBTmdJWUN5QUNLQUlVSWdGRkRRQWdBQ0FCTmdJVUlBRWdBRFlDR0FzQ1FDQURRUTlOQkVBZ0FpQURJQVpxSWdCQkEzSTJBZ1FnQUNBQ2FpSUFJQUFvQWdSQkFYSTJBZ1FNQVFzZ0FpQUdRUU55TmdJRUlBSWdCbW9pQlNBRFFRRnlOZ0lFSUFNZ0JXb2dBellDQUNBSUJFQWdDRUY0Y1VIa0dtb2hBRUhRR2lnQ0FDRUJBbjlCQVNBSVFRTjJkQ0lISUFSeFJRUkFRYndhSUFRZ0IzSTJBZ0FnQUF3QkN5QUFLQUlJQ3lFRUlBQWdBVFlDQ0NBRUlBRTJBZ3dnQVNBQU5nSU1JQUVnQkRZQ0NBdEIwQm9nQlRZQ0FFSEVHaUFETmdJQUN5QUNRUWhxSVFBTElBcEJFR29rQUNBQUM2a0xBZ3QvQ1gwakFFR2dBV3NpQ3lRQUlBdEJNR3BCSkJBUUEwQWdBU0FOUndSQUlBSWdEVUVEYkNJTVFRSnFRUUowSWc1cUtnSUFJUmNnQWlBTVFRRnFRUUowSWc5cUtnSUFJUmdnQ0NBTVFRSjBJaEJxSUFJZ0VHb3FBZ0FpR1RnQ0FDQUlJQTlxSUJnNEFnQWdDQ0FPYWlBWE9BSUFJQWNnRFVFRmRHb2lEQ0FZT0FJRUlBd2dHVGdDQUNBTUlCYzRBZ2dnREVFQU5nSU1Ba0FnQUVVRVFDQUdJQTFxTFFBQVJRMEJDeUFNUVlDQWdBZzJBZ3dMSUFjZ0RVRUZkR29pRVNBRklBMUJBblFpREVFQmNpSVNhaTBBQUVFSWRDQUZJQXhxTFFBQWNpQUZJQXhCQW5JaUUyb3RBQUJCRUhSeUlBVWdERUVEY2lJTWFpMEFBRUVZZEhJMkFod2dDeUFESUJKQkFuUWlFbW9xQWdBaUZ6Z0NrQUVnQ3lBRElCTkJBblFpRTJvcUFnQWlHRGdDbEFFZ0N5QURJQXhCQW5RaUZHb3FBZ0FpR1RnQ21BRWdDeUFESUExQkJIUWlGV29xQWdDTUlobzRBcHdCSUF0QjRBQnFJZ3dnQ3lvQ21BRWlGa01BQUFEQWxDQVdsQ0FMS2dLVUFTSVdRd0FBQU1DVUlCYVVRd0FBZ0QrU2tqZ0NBQ0FNSUFzcUFwQUJJaFlnRnBJZ0N5b0NsQUdVSUFzcUFwZ0JRd0FBQU1DVUlBc3FBcHdCbEpJNEFnUWdEQ0FMS2dLUUFTSVdJQmFTSUFzcUFwZ0JsQ0FMS2dLVUFTSVdJQmFTSUFzcUFwd0JsSkk0QWdnZ0RDQUxLZ0tRQVNJV0lCYVNJQXNxQXBRQmxDQUxLZ0tZQVNJV0lCYVNJQXNxQXB3QmxKSTRBZ3dnRENBTEtnS1lBU0lXUXdBQUFNQ1VJQmFVSUFzcUFwQUJJaFpEQUFBQXdKUWdGcFJEQUFDQVA1S1NPQUlRSUF3Z0N5b0NsQUVpRmlBV2tpQUxLZ0tZQVpRZ0N5b0NrQUZEQUFBQXdKUWdDeW9DbkFHVWtqZ0NGQ0FNSUFzcUFwQUJJaFlnRnBJZ0N5b0NtQUdVSUFzcUFwUUJRd0FBQU1DVUlBc3FBcHdCbEpJNEFoZ2dEQ0FMS2dLVUFTSVdJQmFTSUFzcUFwZ0JsQ0FMS2dLUUFTSVdJQmFTSUFzcUFwd0JsSkk0QWh3Z0RDQUxLZ0tVQVNJV1F3QUFBTUNVSUJhVUlBc3FBcEFCSWhaREFBQUF3SlFnRnBSREFBQ0FQNUtTT0FJZ0lBa2dGV29nRnpnQ0FDQUpJQkpxSUJnNEFnQWdDU0FUYWlBWk9BSUFJQWtnRkdvZ0dqZ0NBQ0FMSUFRZ0VHb3FBZ0FpRnpnQ01DQUxJQVFnRDJvcUFnQWlHRGdDUUNBTElBUWdEbW9xQWdBaUdUZ0NVQ0FLSUJCcUlCYzRBZ0FnQ2lBUGFpQVlPQUlBSUFvZ0Rtb2dHVGdDQUNBTElBd3FBaGdnQ3lvQ09KUWdEQ29DQUNBTEtnSXdsQ0FNS2dJTUlBc3FBalNVa3BJNEFnQWdDeUFNS2dJY0lBc3FBamlVSUF3cUFnUWdDeW9DTUpRZ0RDb0NFQ0FMS2dJMGxKS1NPQUlFSUFzZ0RDb0NJQ0FMS2dJNGxDQU1LZ0lJSUFzcUFqQ1VJQXdxQWhRZ0N5b0NOSlNTa2pnQ0NDQUxJQXdxQWhnZ0N5b0NSSlFnRENvQ0FDQUxLZ0k4bENBTUtnSU1JQXNxQWtDVWtwSTRBZ3dnQ3lBTUtnSWNJQXNxQWtTVUlBd3FBZ1FnQ3lvQ1BKUWdEQ29DRUNBTEtnSkFsSktTT0FJUUlBc2dEQ29DSUNBTEtnSkVsQ0FNS2dJSUlBc3FBanlVSUF3cUFoUWdDeW9DUUpTU2tqZ0NGQ0FMSUF3cUFoZ2dDeW9DVUpRZ0RDb0NBQ0FMS2dKSWxDQU1LZ0lNSUFzcUFreVVrcEk0QWhnZ0N5QU1LZ0ljSUFzcUFsQ1VJQXdxQWdRZ0N5b0NTSlFnRENvQ0VDQUxLZ0pNbEpLU09BSWNJQXNnRENvQ0lDQUxLZ0pRbENBTUtnSUlJQXNxQWtpVUlBd3FBaFFnQ3lvQ1RKU1NramdDSUNBTEtnSWdJUmNnQ3lvQ0NDRVlJQXNxQWhRaEdTQVJJQXNxQWhnaUdpQWFsQ0FMS2dJQUloWWdGcFFnQ3lvQ0RDSWJJQnVVa3BKREFBQ0FRSlFnR2lBTEtnSWNJaHlVSUJZZ0N5b0NCQ0lkbENBYklBc3FBaEFpSHBTU2trTUFBSUJBbEJBTU5nSVFJQkVnR2lBWGxDQVdJQmlVSUJzZ0daU1Nra01BQUlCQWxDQWNJQnlVSUIwZ0haUWdIaUFlbEpLU1F3QUFnRUNVRUF3MkFoUWdFU0FjSUJlVUlCMGdHSlFnSGlBWmxKS1NRd0FBZ0VDVUlCY2dGNVFnR0NBWWxDQVpJQm1Va3BKREFBQ0FRSlFRRERZQ0dDQU5RUUZxSVEwTUFRc0xJQXRCb0FGcUpBQUxHZ0FnQUNBQktBSUlJQVVRQ2dSQUlBRWdBaUFESUFRUUZBc0xOd0FnQUNBQktBSUlJQVVRQ2dSQUlBRWdBaUFESUFRUUZBOExJQUFvQWdnaUFDQUJJQUlnQXlBRUlBVWdBQ2dDQUNnQ0ZCRURBQXVSQVFBZ0FDQUJLQUlJSUFRUUNnUkFJQUVnQWlBREVCTVBDd0pBSUFBZ0FTZ0NBQ0FFRUFwRkRRQUNRQ0FDSUFFb0FoQkhCRUFnQVNnQ0ZDQUNSdzBCQ3lBRFFRRkhEUUVnQVVFQk5nSWdEd3NnQVNBQ05nSVVJQUVnQXpZQ0lDQUJJQUVvQWloQkFXbzJBaWdDUUNBQktBSWtRUUZIRFFBZ0FTZ0NHRUVDUncwQUlBRkJBVG9BTmdzZ0FVRUVOZ0lzQ3d2eUFRQWdBQ0FCS0FJSUlBUVFDZ1JBSUFFZ0FpQURFQk1QQ3dKQUlBQWdBU2dDQUNBRUVBb0VRQUpBSUFJZ0FTZ0NFRWNFUUNBQktBSVVJQUpIRFFFTElBTkJBVWNOQWlBQlFRRTJBaUFQQ3lBQklBTTJBaUFDUUNBQktBSXNRUVJHRFFBZ0FVRUFPd0UwSUFBb0FnZ2lBQ0FCSUFJZ0FrRUJJQVFnQUNnQ0FDZ0NGQkVEQUNBQkxRQTFCRUFnQVVFRE5nSXNJQUV0QURSRkRRRU1Bd3NnQVVFRU5nSXNDeUFCSUFJMkFoUWdBU0FCS0FJb1FRRnFOZ0lvSUFFb0FpUkJBVWNOQVNBQktBSVlRUUpIRFFFZ0FVRUJPZ0EyRHdzZ0FDZ0NDQ0lBSUFFZ0FpQURJQVFnQUNnQ0FDZ0NHQkVDQUFzTE1RQWdBQ0FCS0FJSVFRQVFDZ1JBSUFFZ0FpQURFQlVQQ3lBQUtBSUlJZ0FnQVNBQ0lBTWdBQ2dDQUNnQ0hCRUFBQXNZQUNBQUlBRW9BZ2hCQUJBS0JFQWdBU0FDSUFNUUZRc0xnQU1CQkg4akFFSHdBR3NpQWlRQUlBQW9BZ0FpQTBFRWF5Z0NBQ0VFSUFOQkNHc29BZ0FoQlNBQ1FnQTNBbEFnQWtJQU53SllJQUpDQURjQ1lDQUNRZ0EzQUdjZ0FrSUFOd0pJSUFKQkFEWUNSQ0FDUWV3Vk5nSkFJQUlnQURZQ1BDQUNJQUUyQWpnZ0FDQUZhaUVEQWtBZ0JDQUJRUUFRQ2dSQVFRQWdBeUFGR3lFQURBRUxJQUFnQTA0RVFDQUNRZ0EzQUM4Z0FrSUFOd0lZSUFKQ0FEY0NJQ0FDUWdBM0FpZ2dBa0lBTndJUUlBSkJBRFlDRENBQ0lBRTJBZ2dnQWlBQU5nSUVJQUlnQkRZQ0FDQUNRUUUyQWpBZ0JDQUNJQU1nQTBFQlFRQWdCQ2dDQUNnQ0ZCRURBQ0FDS0FJWURRRUxRUUFoQUNBRUlBSkJPR29nQTBFQlFRQWdCQ2dDQUNnQ0dCRUNBQUpBQWtBZ0FpZ0NYQTRDQUFFQ0N5QUNLQUpNUVFBZ0FpZ0NXRUVCUmh0QkFDQUNLQUpVUVFGR0cwRUFJQUlvQW1CQkFVWWJJUUFNQVFzZ0FpZ0NVRUVCUndSQUlBSW9BbUFOQVNBQ0tBSlVRUUZIRFFFZ0FpZ0NXRUVCUncwQkN5QUNLQUpJSVFBTElBSkI4QUJxSkFBZ0FBdVpBUUVDZnlNQVFVQnFJZ01rQUFKL1FRRWdBQ0FCUVFBUUNnMEFHa0VBSUFGRkRRQWFRUUFnQVVHY0ZoQWhJZ0ZGRFFBYUlBTkJER3BCTkJBUUlBTkJBVFlDT0NBRFFYODJBaFFnQXlBQU5nSVFJQU1nQVRZQ0NDQUJJQU5CQ0dvZ0FpZ0NBRUVCSUFFb0FnQW9BaHdSQUFBZ0F5Z0NJQ0lBUVFGR0JFQWdBaUFES0FJWU5nSUFDeUFBUVFGR0N5RUVJQU5CUUdza0FDQUVDd29BSUFBZ0FVRUFFQW9MQzdjU0FnQkJnQWdMcGhKMWJuTnBaMjVsWkNCemFHOXlkQUIxYm5OcFoyNWxaQ0JwYm5RQVpteHZZWFFBZFdsdWREWTBYM1FBZFc1emFXZHVaV1FnWTJoaGNnQmliMjlzQUhWdWMybG5ibVZrSUd4dmJtY0FjM1JrT2pwM2MzUnlhVzVuQUhOMFpEbzZjM1J5YVc1bkFITjBaRG82ZFRFMmMzUnlhVzVuQUhOMFpEbzZkVE15YzNSeWFXNW5BR1J2ZFdKc1pRQjJiMmxrQUdWdGMyTnlhWEIwWlc0Nk9tMWxiVzl5ZVY5MmFXVjNQSE5vYjNKMFBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4MWJuTnBaMjVsWkNCemFHOXlkRDRBWlcxelkzSnBjSFJsYmpvNmJXVnRiM0o1WDNacFpYYzhhVzUwUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkengxYm5OcFoyNWxaQ0JwYm5RK0FHVnRjMk55YVhCMFpXNDZPbTFsYlc5eWVWOTJhV1YzUEdac2IyRjBQZ0JsYlhOamNtbHdkR1Z1T2pwdFpXMXZjbmxmZG1sbGR6eDFhVzUwT0Y5MFBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4cGJuUTRYM1ErQUdWdGMyTnlhWEIwWlc0Nk9tMWxiVzl5ZVY5MmFXVjNQSFZwYm5ReE5sOTBQZ0JsYlhOamNtbHdkR1Z1T2pwdFpXMXZjbmxmZG1sbGR6eHBiblF4Tmw5MFBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4MWFXNTBOalJmZEQ0QVpXMXpZM0pwY0hSbGJqbzZiV1Z0YjNKNVgzWnBaWGM4YVc1ME5qUmZkRDRBWlcxelkzSnBjSFJsYmpvNmJXVnRiM0o1WDNacFpYYzhkV2x1ZERNeVgzUStBR1Z0YzJOeWFYQjBaVzQ2T20xbGJXOXllVjkyYVdWM1BHbHVkRE15WDNRK0FHVnRjMk55YVhCMFpXNDZPbTFsYlc5eWVWOTJhV1YzUEdOb1lYSStBR1Z0YzJOeWFYQjBaVzQ2T20xbGJXOXllVjkyYVdWM1BIVnVjMmxuYm1Wa0lHTm9ZWEkrQUhOMFpEbzZZbUZ6YVdOZmMzUnlhVzVuUEhWdWMybG5ibVZrSUdOb1lYSStBR1Z0YzJOeWFYQjBaVzQ2T20xbGJXOXllVjkyYVdWM1BITnBaMjVsWkNCamFHRnlQZ0JsYlhOamNtbHdkR1Z1T2pwdFpXMXZjbmxmZG1sbGR6eHNiMjVuUGdCbGJYTmpjbWx3ZEdWdU9qcHRaVzF2Y25sZmRtbGxkengxYm5OcFoyNWxaQ0JzYjI1blBnQmxiWE5qY21sd2RHVnVPanB0WlcxdmNubGZkbWxsZHp4a2IzVmliR1UrQUU1VGRETmZYekl4TW1KaGMybGpYM04wY21sdVowbGpUbE5mTVRGamFHRnlYM1J5WVdsMGMwbGpSVVZPVTE4NVlXeHNiMk5oZEc5eVNXTkZSVVZGQUFBQUFKUU1BQUF5QndBQVRsTjBNMTlmTWpFeVltRnphV05mYzNSeWFXNW5TV2hPVTE4eE1XTm9ZWEpmZEhKaGFYUnpTV2hGUlU1VFh6bGhiR3h2WTJGMGIzSkphRVZGUlVVQUFKUU1BQUI4QndBQVRsTjBNMTlmTWpFeVltRnphV05mYzNSeWFXNW5TWGRPVTE4eE1XTm9ZWEpmZEhKaGFYUnpTWGRGUlU1VFh6bGhiR3h2WTJGMGIzSkpkMFZGUlVVQUFKUU1BQURFQndBQVRsTjBNMTlmTWpFeVltRnphV05mYzNSeWFXNW5TVVJ6VGxOZk1URmphR0Z5WDNSeVlXbDBjMGxFYzBWRlRsTmZPV0ZzYkc5allYUnZja2xFYzBWRlJVVUFBQUNVREFBQURBZ0FBRTVUZEROZlh6SXhNbUpoYzJsalgzTjBjbWx1WjBsRWFVNVRYekV4WTJoaGNsOTBjbUZwZEhOSlJHbEZSVTVUWHpsaGJHeHZZMkYwYjNKSlJHbEZSVVZGQUFBQWxBd0FBRmdJQUFCT01UQmxiWE5qY21sd2RHVnVNM1poYkVVQUFKUU1BQUNrQ0FBQVRqRXdaVzF6WTNKcGNIUmxiakV4YldWdGIzSjVYM1pwWlhkSlkwVkZBQUNVREFBQXdBZ0FBRTR4TUdWdGMyTnlhWEIwWlc0eE1XMWxiVzl5ZVY5MmFXVjNTV0ZGUlFBQWxBd0FBT2dJQUFCT01UQmxiWE5qY21sd2RHVnVNVEZ0WlcxdmNubGZkbWxsZDBsb1JVVUFBSlFNQUFBUUNRQUFUakV3WlcxelkzSnBjSFJsYmpFeGJXVnRiM0o1WDNacFpYZEpjMFZGQUFDVURBQUFPQWtBQUU0eE1HVnRjMk55YVhCMFpXNHhNVzFsYlc5eWVWOTJhV1YzU1hSRlJRQUFsQXdBQUdBSkFBQk9NVEJsYlhOamNtbHdkR1Z1TVRGdFpXMXZjbmxmZG1sbGQwbHBSVVVBQUpRTUFBQ0lDUUFBVGpFd1pXMXpZM0pwY0hSbGJqRXhiV1Z0YjNKNVgzWnBaWGRKYWtWRkFBQ1VEQUFBc0FrQUFFNHhNR1Z0YzJOeWFYQjBaVzR4TVcxbGJXOXllVjkyYVdWM1NXeEZSUUFBbEF3QUFOZ0pBQUJPTVRCbGJYTmpjbWx3ZEdWdU1URnRaVzF2Y25sZmRtbGxkMGx0UlVVQUFKUU1BQUFBQ2dBQVRqRXdaVzF6WTNKcGNIUmxiakV4YldWdGIzSjVYM1pwWlhkSmVFVkZBQUNVREFBQUtBb0FBRTR4TUdWdGMyTnlhWEIwWlc0eE1XMWxiVzl5ZVY5MmFXVjNTWGxGUlFBQWxBd0FBRkFLQUFCT01UQmxiWE5qY21sd2RHVnVNVEZ0WlcxdmNubGZkbWxsZDBsbVJVVUFBSlFNQUFCNENnQUFUakV3WlcxelkzSnBjSFJsYmpFeGJXVnRiM0o1WDNacFpYZEpaRVZGQUFDVURBQUFvQW9BQUU0eE1GOWZZM2g0WVdKcGRqRXhObDlmYzJocGJWOTBlWEJsWDJsdVptOUZBQUFBQUx3TUFBRElDZ0FBSUEwQUFFNHhNRjlmWTNoNFlXSnBkakV4TjE5ZlkyeGhjM05mZEhsd1pWOXBibVp2UlFBQUFMd01BQUQ0Q2dBQTdBb0FBRTR4TUY5ZlkzaDRZV0pwZGpFeE4xOWZjR0poYzJWZmRIbHdaVjlwYm1adlJRQUFBTHdNQUFBb0N3QUE3QW9BQUU0eE1GOWZZM2g0WVdKcGRqRXhPVjlmY0c5cGJuUmxjbDkwZVhCbFgybHVabTlGQUx3TUFBQllDd0FBVEFzQUFBQUFBQURNQ3dBQUFnQUFBQU1BQUFBRUFBQUFCUUFBQUFZQUFBQk9NVEJmWDJONGVHRmlhWFl4TWpOZlgyWjFibVJoYldWdWRHRnNYM1I1Y0dWZmFXNW1iMFVBdkF3QUFLUUxBQURzQ2dBQWRnQUFBSkFMQUFEWUN3QUFZZ0FBQUpBTEFBRGtDd0FBWXdBQUFKQUxBQUR3Q3dBQWFBQUFBSkFMQUFEOEN3QUFZUUFBQUpBTEFBQUlEQUFBY3dBQUFKQUxBQUFVREFBQWRBQUFBSkFMQUFBZ0RBQUFhUUFBQUpBTEFBQXNEQUFBYWdBQUFKQUxBQUE0REFBQWJBQUFBSkFMQUFCRURBQUFiUUFBQUpBTEFBQlFEQUFBZUFBQUFKQUxBQUJjREFBQWVRQUFBSkFMQUFCb0RBQUFaZ0FBQUpBTEFBQjBEQUFBWkFBQUFKQUxBQUNBREFBQUFBQUFBQndMQUFBQ0FBQUFCd0FBQUFRQUFBQUZBQUFBQ0FBQUFBa0FBQUFLQUFBQUN3QUFBQUFBQUFBRURRQUFBZ0FBQUF3QUFBQUVBQUFBQlFBQUFBZ0FBQUFOQUFBQURnQUFBQThBQUFCT01UQmZYMk40ZUdGaWFYWXhNakJmWDNOcFgyTnNZWE56WDNSNWNHVmZhVzVtYjBVQUFBQUF2QXdBQU53TUFBQWNDd0FBVTNRNWRIbHdaVjlwYm1adkFBQUFBSlFNQUFBUURRQkJxQm9MQXpBUEFRPT0iO2lmKCFpc0RhdGFVUkkod2FzbUJpbmFyeUZpbGUpKXt3YXNtQmluYXJ5RmlsZT1sb2NhdGVGaWxlKHdhc21CaW5hcnlGaWxlKTt9ZnVuY3Rpb24gZ2V0QmluYXJ5U3luYyhmaWxlKXtpZihmaWxlPT13YXNtQmluYXJ5RmlsZSYmd2FzbUJpbmFyeSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHdhc21CaW5hcnkpfXZhciBiaW5hcnk9dHJ5UGFyc2VBc0RhdGFVUkkoZmlsZSk7aWYoYmluYXJ5KXtyZXR1cm4gYmluYXJ5fWlmKHJlYWRCaW5hcnkpe3JldHVybiByZWFkQmluYXJ5KGZpbGUpfXRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCJ9ZnVuY3Rpb24gZ2V0QmluYXJ5UHJvbWlzZShiaW5hcnlGaWxlKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+Z2V0QmluYXJ5U3luYyhiaW5hcnlGaWxlKSl9ZnVuY3Rpb24gaW5zdGFudGlhdGVBcnJheUJ1ZmZlcihiaW5hcnlGaWxlLGltcG9ydHMscmVjZWl2ZXIpe3JldHVybiBnZXRCaW5hcnlQcm9taXNlKGJpbmFyeUZpbGUpLnRoZW4oYmluYXJ5PT5XZWJBc3NlbWJseS5pbnN0YW50aWF0ZShiaW5hcnksaW1wb3J0cykpLnRoZW4ocmVjZWl2ZXIscmVhc29uPT57ZXJyKGBmYWlsZWQgdG8gYXN5bmNocm9ub3VzbHkgcHJlcGFyZSB3YXNtOiAke3JlYXNvbn1gKTthYm9ydChyZWFzb24pO30pfWZ1bmN0aW9uIGluc3RhbnRpYXRlQXN5bmMoYmluYXJ5LGJpbmFyeUZpbGUsaW1wb3J0cyxjYWxsYmFjayl7cmV0dXJuIGluc3RhbnRpYXRlQXJyYXlCdWZmZXIoYmluYXJ5RmlsZSxpbXBvcnRzLGNhbGxiYWNrKX1mdW5jdGlvbiBjcmVhdGVXYXNtKCl7dmFyIGluZm89eyJhIjp3YXNtSW1wb3J0c307ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbmNlKGluc3RhbmNlLG1vZHVsZSl7d2FzbUV4cG9ydHM9aW5zdGFuY2UuZXhwb3J0czt3YXNtTWVtb3J5PXdhc21FeHBvcnRzWyJrIl07dXBkYXRlTWVtb3J5Vmlld3MoKTthZGRPbkluaXQod2FzbUV4cG9ydHNbImwiXSk7cmVtb3ZlUnVuRGVwZW5kZW5jeSgpO3JldHVybiB3YXNtRXhwb3J0c31hZGRSdW5EZXBlbmRlbmN5KCk7ZnVuY3Rpb24gcmVjZWl2ZUluc3RhbnRpYXRpb25SZXN1bHQocmVzdWx0KXtyZWNlaXZlSW5zdGFuY2UocmVzdWx0WyJpbnN0YW5jZSJdKTt9aWYoTW9kdWxlWyJpbnN0YW50aWF0ZVdhc20iXSl7dHJ5e3JldHVybiBNb2R1bGVbImluc3RhbnRpYXRlV2FzbSJdKGluZm8scmVjZWl2ZUluc3RhbmNlKX1jYXRjaChlKXtlcnIoYE1vZHVsZS5pbnN0YW50aWF0ZVdhc20gY2FsbGJhY2sgZmFpbGVkIHdpdGggZXJyb3I6ICR7ZX1gKTtyZWFkeVByb21pc2VSZWplY3QoZSk7fX1pbnN0YW50aWF0ZUFzeW5jKHdhc21CaW5hcnksd2FzbUJpbmFyeUZpbGUsaW5mbyxyZWNlaXZlSW5zdGFudGlhdGlvblJlc3VsdCkuY2F0Y2gocmVhZHlQcm9taXNlUmVqZWN0KTtyZXR1cm4ge319dmFyIGNhbGxSdW50aW1lQ2FsbGJhY2tzPWNhbGxiYWNrcz0+e3doaWxlKGNhbGxiYWNrcy5sZW5ndGg+MCl7Y2FsbGJhY2tzLnNoaWZ0KCkoTW9kdWxlKTt9fTtNb2R1bGVbIm5vRXhpdFJ1bnRpbWUiXXx8dHJ1ZTt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfYmlnaW50PShwcmltaXRpdmVUeXBlLG5hbWUsc2l6ZSxtaW5SYW5nZSxtYXhSYW5nZSk9Pnt9O3ZhciBlbWJpbmRfaW5pdF9jaGFyQ29kZXM9KCk9Pnt2YXIgY29kZXM9bmV3IEFycmF5KDI1Nik7Zm9yKHZhciBpPTA7aTwyNTY7KytpKXtjb2Rlc1tpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKGkpO31lbWJpbmRfY2hhckNvZGVzPWNvZGVzO307dmFyIGVtYmluZF9jaGFyQ29kZXM7dmFyIHJlYWRMYXRpbjFTdHJpbmc9cHRyPT57dmFyIHJldD0iIjt2YXIgYz1wdHI7d2hpbGUoSEVBUFU4W2NdKXtyZXQrPWVtYmluZF9jaGFyQ29kZXNbSEVBUFU4W2MrK11dO31yZXR1cm4gcmV0fTt2YXIgYXdhaXRpbmdEZXBlbmRlbmNpZXM9e307dmFyIHJlZ2lzdGVyZWRUeXBlcz17fTt2YXIgQmluZGluZ0Vycm9yO3ZhciB0aHJvd0JpbmRpbmdFcnJvcj1tZXNzYWdlPT57dGhyb3cgbmV3IEJpbmRpbmdFcnJvcihtZXNzYWdlKX07ZnVuY3Rpb24gc2hhcmVkUmVnaXN0ZXJUeXBlKHJhd1R5cGUscmVnaXN0ZXJlZEluc3RhbmNlLG9wdGlvbnM9e30pe3ZhciBuYW1lPXJlZ2lzdGVyZWRJbnN0YW5jZS5uYW1lO2lmKCFyYXdUeXBlKXt0aHJvd0JpbmRpbmdFcnJvcihgdHlwZSAiJHtuYW1lfSIgbXVzdCBoYXZlIGEgcG9zaXRpdmUgaW50ZWdlciB0eXBlaWQgcG9pbnRlcmApO31pZihyZWdpc3RlcmVkVHlwZXMuaGFzT3duUHJvcGVydHkocmF3VHlwZSkpe2lmKG9wdGlvbnMuaWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9ucyl7cmV0dXJufWVsc2Uge3Rocm93QmluZGluZ0Vycm9yKGBDYW5ub3QgcmVnaXN0ZXIgdHlwZSAnJHtuYW1lfScgdHdpY2VgKTt9fXJlZ2lzdGVyZWRUeXBlc1tyYXdUeXBlXT1yZWdpc3RlcmVkSW5zdGFuY2U7aWYoYXdhaXRpbmdEZXBlbmRlbmNpZXMuaGFzT3duUHJvcGVydHkocmF3VHlwZSkpe3ZhciBjYWxsYmFja3M9YXdhaXRpbmdEZXBlbmRlbmNpZXNbcmF3VHlwZV07ZGVsZXRlIGF3YWl0aW5nRGVwZW5kZW5jaWVzW3Jhd1R5cGVdO2NhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTt9fWZ1bmN0aW9uIHJlZ2lzdGVyVHlwZShyYXdUeXBlLHJlZ2lzdGVyZWRJbnN0YW5jZSxvcHRpb25zPXt9KXtpZighKCJhcmdQYWNrQWR2YW5jZSJpbiByZWdpc3RlcmVkSW5zdGFuY2UpKXt0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIil9cmV0dXJuIHNoYXJlZFJlZ2lzdGVyVHlwZShyYXdUeXBlLHJlZ2lzdGVyZWRJbnN0YW5jZSxvcHRpb25zKX12YXIgR2VuZXJpY1dpcmVUeXBlU2l6ZT04O3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9ib29sPShyYXdUeXBlLG5hbWUsdHJ1ZVZhbHVlLGZhbHNlVmFsdWUpPT57bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsImZyb21XaXJlVHlwZSI6ZnVuY3Rpb24od3Qpe3JldHVybiAhIXd0fSwidG9XaXJlVHlwZSI6ZnVuY3Rpb24oZGVzdHJ1Y3RvcnMsbyl7cmV0dXJuIG8/dHJ1ZVZhbHVlOmZhbHNlVmFsdWV9LCJhcmdQYWNrQWR2YW5jZSI6R2VuZXJpY1dpcmVUeXBlU2l6ZSwicmVhZFZhbHVlRnJvbVBvaW50ZXIiOmZ1bmN0aW9uKHBvaW50ZXIpe3JldHVybiB0aGlzWyJmcm9tV2lyZVR5cGUiXShIRUFQVThbcG9pbnRlcl0pfSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pO307dmFyIGVtdmFsX2ZyZWVsaXN0PVtdO3ZhciBlbXZhbF9oYW5kbGVzPVtdO3ZhciBfX2VtdmFsX2RlY3JlZj1oYW5kbGU9PntpZihoYW5kbGU+OSYmMD09PS0tZW12YWxfaGFuZGxlc1toYW5kbGUrMV0pe2VtdmFsX2hhbmRsZXNbaGFuZGxlXT11bmRlZmluZWQ7ZW12YWxfZnJlZWxpc3QucHVzaChoYW5kbGUpO319O3ZhciBjb3VudF9lbXZhbF9oYW5kbGVzPSgpPT5lbXZhbF9oYW5kbGVzLmxlbmd0aC8yLTUtZW12YWxfZnJlZWxpc3QubGVuZ3RoO3ZhciBpbml0X2VtdmFsPSgpPT57ZW12YWxfaGFuZGxlcy5wdXNoKDAsMSx1bmRlZmluZWQsMSxudWxsLDEsdHJ1ZSwxLGZhbHNlLDEpO01vZHVsZVsiY291bnRfZW12YWxfaGFuZGxlcyJdPWNvdW50X2VtdmFsX2hhbmRsZXM7fTt2YXIgRW12YWw9e3RvVmFsdWU6aGFuZGxlPT57aWYoIWhhbmRsZSl7dGhyb3dCaW5kaW5nRXJyb3IoIkNhbm5vdCB1c2UgZGVsZXRlZCB2YWwuIGhhbmRsZSA9ICIraGFuZGxlKTt9cmV0dXJuIGVtdmFsX2hhbmRsZXNbaGFuZGxlXX0sdG9IYW5kbGU6dmFsdWU9Pntzd2l0Y2godmFsdWUpe2Nhc2UgdW5kZWZpbmVkOnJldHVybiAyO2Nhc2UgbnVsbDpyZXR1cm4gNDtjYXNlIHRydWU6cmV0dXJuIDY7Y2FzZSBmYWxzZTpyZXR1cm4gODtkZWZhdWx0Ontjb25zdCBoYW5kbGU9ZW12YWxfZnJlZWxpc3QucG9wKCl8fGVtdmFsX2hhbmRsZXMubGVuZ3RoO2VtdmFsX2hhbmRsZXNbaGFuZGxlXT12YWx1ZTtlbXZhbF9oYW5kbGVzW2hhbmRsZSsxXT0xO3JldHVybiBoYW5kbGV9fX19O2Z1bmN0aW9uIHJlYWRQb2ludGVyKHBvaW50ZXIpe3JldHVybiB0aGlzWyJmcm9tV2lyZVR5cGUiXShIRUFQVTMyW3BvaW50ZXI+PjJdKX12YXIgRW1WYWxUeXBlPXtuYW1lOiJlbXNjcmlwdGVuOjp2YWwiLCJmcm9tV2lyZVR5cGUiOmhhbmRsZT0+e3ZhciBydj1FbXZhbC50b1ZhbHVlKGhhbmRsZSk7X19lbXZhbF9kZWNyZWYoaGFuZGxlKTtyZXR1cm4gcnZ9LCJ0b1dpcmVUeXBlIjooZGVzdHJ1Y3RvcnMsdmFsdWUpPT5FbXZhbC50b0hhbmRsZSh2YWx1ZSksImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6cmVhZFBvaW50ZXIsZGVzdHJ1Y3RvckZ1bmN0aW9uOm51bGx9O3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbD1yYXdUeXBlPT5yZWdpc3RlclR5cGUocmF3VHlwZSxFbVZhbFR5cGUpO3ZhciBmbG9hdFJlYWRWYWx1ZUZyb21Qb2ludGVyPShuYW1lLHdpZHRoKT0+e3N3aXRjaCh3aWR0aCl7Y2FzZSA0OnJldHVybiBmdW5jdGlvbihwb2ludGVyKXtyZXR1cm4gdGhpc1siZnJvbVdpcmVUeXBlIl0oSEVBUEYzMltwb2ludGVyPj4yXSl9O2Nhc2UgODpyZXR1cm4gZnVuY3Rpb24ocG9pbnRlcil7cmV0dXJuIHRoaXNbImZyb21XaXJlVHlwZSJdKEhFQVBGNjRbcG9pbnRlcj4+M10pfTtkZWZhdWx0OnRocm93IG5ldyBUeXBlRXJyb3IoYGludmFsaWQgZmxvYXQgd2lkdGggKCR7d2lkdGh9KTogJHtuYW1lfWApfX07dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0PShyYXdUeXBlLG5hbWUsc2l6ZSk9PntuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIjp2YWx1ZT0+dmFsdWUsInRvV2lyZVR5cGUiOihkZXN0cnVjdG9ycyx2YWx1ZSk9PnZhbHVlLCJhcmdQYWNrQWR2YW5jZSI6R2VuZXJpY1dpcmVUeXBlU2l6ZSwicmVhZFZhbHVlRnJvbVBvaW50ZXIiOmZsb2F0UmVhZFZhbHVlRnJvbVBvaW50ZXIobmFtZSxzaXplKSxkZXN0cnVjdG9yRnVuY3Rpb246bnVsbH0pO307dmFyIGludGVnZXJSZWFkVmFsdWVGcm9tUG9pbnRlcj0obmFtZSx3aWR0aCxzaWduZWQpPT57c3dpdGNoKHdpZHRoKXtjYXNlIDE6cmV0dXJuIHNpZ25lZD9wb2ludGVyPT5IRUFQOFtwb2ludGVyXTpwb2ludGVyPT5IRUFQVThbcG9pbnRlcl07Y2FzZSAyOnJldHVybiBzaWduZWQ/cG9pbnRlcj0+SEVBUDE2W3BvaW50ZXI+PjFdOnBvaW50ZXI9PkhFQVBVMTZbcG9pbnRlcj4+MV07Y2FzZSA0OnJldHVybiBzaWduZWQ/cG9pbnRlcj0+SEVBUDMyW3BvaW50ZXI+PjJdOnBvaW50ZXI9PkhFQVBVMzJbcG9pbnRlcj4+Ml07ZGVmYXVsdDp0aHJvdyBuZXcgVHlwZUVycm9yKGBpbnZhbGlkIGludGVnZXIgd2lkdGggKCR7d2lkdGh9KTogJHtuYW1lfWApfX07dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX2ludGVnZXI9KHByaW1pdGl2ZVR5cGUsbmFtZSxzaXplLG1pblJhbmdlLG1heFJhbmdlKT0+e25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgZnJvbVdpcmVUeXBlPXZhbHVlPT52YWx1ZTtpZihtaW5SYW5nZT09PTApe3ZhciBiaXRzaGlmdD0zMi04KnNpemU7ZnJvbVdpcmVUeXBlPXZhbHVlPT52YWx1ZTw8Yml0c2hpZnQ+Pj5iaXRzaGlmdDt9dmFyIGlzVW5zaWduZWRUeXBlPW5hbWUuaW5jbHVkZXMoInVuc2lnbmVkIik7dmFyIGNoZWNrQXNzZXJ0aW9ucz0odmFsdWUsdG9UeXBlTmFtZSk9Pnt9O3ZhciB0b1dpcmVUeXBlO2lmKGlzVW5zaWduZWRUeXBlKXt0b1dpcmVUeXBlPWZ1bmN0aW9uKGRlc3RydWN0b3JzLHZhbHVlKXtjaGVja0Fzc2VydGlvbnModmFsdWUsdGhpcy5uYW1lKTtyZXR1cm4gdmFsdWU+Pj4wfTt9ZWxzZSB7dG9XaXJlVHlwZT1mdW5jdGlvbihkZXN0cnVjdG9ycyx2YWx1ZSl7Y2hlY2tBc3NlcnRpb25zKHZhbHVlLHRoaXMubmFtZSk7cmV0dXJuIHZhbHVlfTt9cmVnaXN0ZXJUeXBlKHByaW1pdGl2ZVR5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIjpmcm9tV2lyZVR5cGUsInRvV2lyZVR5cGUiOnRvV2lyZVR5cGUsImFyZ1BhY2tBZHZhbmNlIjpHZW5lcmljV2lyZVR5cGVTaXplLCJyZWFkVmFsdWVGcm9tUG9pbnRlciI6aW50ZWdlclJlYWRWYWx1ZUZyb21Qb2ludGVyKG5hbWUsc2l6ZSxtaW5SYW5nZSE9PTApLGRlc3RydWN0b3JGdW5jdGlvbjpudWxsfSk7fTt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfbWVtb3J5X3ZpZXc9KHJhd1R5cGUsZGF0YVR5cGVJbmRleCxuYW1lKT0+e3ZhciB0eXBlTWFwcGluZz1bSW50OEFycmF5LFVpbnQ4QXJyYXksSW50MTZBcnJheSxVaW50MTZBcnJheSxJbnQzMkFycmF5LFVpbnQzMkFycmF5LEZsb2F0MzJBcnJheSxGbG9hdDY0QXJyYXldO3ZhciBUQT10eXBlTWFwcGluZ1tkYXRhVHlwZUluZGV4XTtmdW5jdGlvbiBkZWNvZGVNZW1vcnlWaWV3KGhhbmRsZSl7dmFyIHNpemU9SEVBUFUzMltoYW5kbGU+PjJdO3ZhciBkYXRhPUhFQVBVMzJbaGFuZGxlKzQ+PjJdO3JldHVybiBuZXcgVEEoSEVBUDguYnVmZmVyLGRhdGEsc2l6ZSl9bmFtZT1yZWFkTGF0aW4xU3RyaW5nKG5hbWUpO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsImZyb21XaXJlVHlwZSI6ZGVjb2RlTWVtb3J5VmlldywiYXJnUGFja0FkdmFuY2UiOkdlbmVyaWNXaXJlVHlwZVNpemUsInJlYWRWYWx1ZUZyb21Qb2ludGVyIjpkZWNvZGVNZW1vcnlWaWV3fSx7aWdub3JlRHVwbGljYXRlUmVnaXN0cmF0aW9uczp0cnVlfSk7fTt2YXIgc3RyaW5nVG9VVEY4QXJyYXk9KHN0cixoZWFwLG91dElkeCxtYXhCeXRlc1RvV3JpdGUpPT57aWYoIShtYXhCeXRlc1RvV3JpdGU+MCkpcmV0dXJuIDA7dmFyIHN0YXJ0SWR4PW91dElkeDt2YXIgZW5kSWR4PW91dElkeCttYXhCeXRlc1RvV3JpdGUtMTtmb3IodmFyIGk9MDtpPHN0ci5sZW5ndGg7KytpKXt2YXIgdT1zdHIuY2hhckNvZGVBdChpKTtpZih1Pj01NTI5NiYmdTw9NTczNDMpe3ZhciB1MT1zdHIuY2hhckNvZGVBdCgrK2kpO3U9NjU1MzYrKCh1JjEwMjMpPDwxMCl8dTEmMTAyMzt9aWYodTw9MTI3KXtpZihvdXRJZHg+PWVuZElkeClicmVhaztoZWFwW291dElkeCsrXT11O31lbHNlIGlmKHU8PTIwNDcpe2lmKG91dElkeCsxPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MTkyfHU+PjY7aGVhcFtvdXRJZHgrK109MTI4fHUmNjM7fWVsc2UgaWYodTw9NjU1MzUpe2lmKG91dElkeCsyPj1lbmRJZHgpYnJlYWs7aGVhcFtvdXRJZHgrK109MjI0fHU+PjEyO2hlYXBbb3V0SWR4KytdPTEyOHx1Pj42JjYzO2hlYXBbb3V0SWR4KytdPTEyOHx1JjYzO31lbHNlIHtpZihvdXRJZHgrMz49ZW5kSWR4KWJyZWFrO2hlYXBbb3V0SWR4KytdPTI0MHx1Pj4xODtoZWFwW291dElkeCsrXT0xMjh8dT4+MTImNjM7aGVhcFtvdXRJZHgrK109MTI4fHU+PjYmNjM7aGVhcFtvdXRJZHgrK109MTI4fHUmNjM7fX1oZWFwW291dElkeF09MDtyZXR1cm4gb3V0SWR4LXN0YXJ0SWR4fTt2YXIgc3RyaW5nVG9VVEY4PShzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSk9PnN0cmluZ1RvVVRGOEFycmF5KHN0cixIRUFQVTgsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSk7dmFyIGxlbmd0aEJ5dGVzVVRGOD1zdHI9Pnt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGM9c3RyLmNoYXJDb2RlQXQoaSk7aWYoYzw9MTI3KXtsZW4rKzt9ZWxzZSBpZihjPD0yMDQ3KXtsZW4rPTI7fWVsc2UgaWYoYz49NTUyOTYmJmM8PTU3MzQzKXtsZW4rPTQ7KytpO31lbHNlIHtsZW4rPTM7fX1yZXR1cm4gbGVufTt2YXIgVVRGOERlY29kZXI9dHlwZW9mIFRleHREZWNvZGVyIT0idW5kZWZpbmVkIj9uZXcgVGV4dERlY29kZXIoInV0ZjgiKTp1bmRlZmluZWQ7dmFyIFVURjhBcnJheVRvU3RyaW5nPShoZWFwT3JBcnJheSxpZHgsbWF4Qnl0ZXNUb1JlYWQpPT57dmFyIGVuZElkeD1pZHgrbWF4Qnl0ZXNUb1JlYWQ7dmFyIGVuZFB0cj1pZHg7d2hpbGUoaGVhcE9yQXJyYXlbZW5kUHRyXSYmIShlbmRQdHI+PWVuZElkeCkpKytlbmRQdHI7aWYoZW5kUHRyLWlkeD4xNiYmaGVhcE9yQXJyYXkuYnVmZmVyJiZVVEY4RGVjb2Rlcil7cmV0dXJuIFVURjhEZWNvZGVyLmRlY29kZShoZWFwT3JBcnJheS5zdWJhcnJheShpZHgsZW5kUHRyKSl9dmFyIHN0cj0iIjt3aGlsZShpZHg8ZW5kUHRyKXt2YXIgdTA9aGVhcE9yQXJyYXlbaWR4KytdO2lmKCEodTAmMTI4KSl7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHUwKTtjb250aW51ZX12YXIgdTE9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyMjQpPT0xOTIpe3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZSgodTAmMzEpPDw2fHUxKTtjb250aW51ZX12YXIgdTI9aGVhcE9yQXJyYXlbaWR4KytdJjYzO2lmKCh1MCYyNDApPT0yMjQpe3UwPSh1MCYxNSk8PDEyfHUxPDw2fHUyO31lbHNlIHt1MD0odTAmNyk8PDE4fHUxPDwxMnx1Mjw8NnxoZWFwT3JBcnJheVtpZHgrK10mNjM7fWlmKHUwPDY1NTM2KXtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodTApO31lbHNlIHt2YXIgY2g9dTAtNjU1MzY7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2fGNoPj4xMCw1NjMyMHxjaCYxMDIzKTt9fXJldHVybiBzdHJ9O3ZhciBVVEY4VG9TdHJpbmc9KHB0cixtYXhCeXRlc1RvUmVhZCk9PnB0cj9VVEY4QXJyYXlUb1N0cmluZyhIRUFQVTgscHRyLG1heEJ5dGVzVG9SZWFkKToiIjt2YXIgX19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZz0ocmF3VHlwZSxuYW1lKT0+e25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgc3RkU3RyaW5nSXNVVEY4PW5hbWU9PT0ic3RkOjpzdHJpbmciO3JlZ2lzdGVyVHlwZShyYXdUeXBlLHtuYW1lOm5hbWUsImZyb21XaXJlVHlwZSIodmFsdWUpe3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHBheWxvYWQ9dmFsdWUrNDt2YXIgc3RyO2lmKHN0ZFN0cmluZ0lzVVRGOCl7dmFyIGRlY29kZVN0YXJ0UHRyPXBheWxvYWQ7Zm9yKHZhciBpPTA7aTw9bGVuZ3RoOysraSl7dmFyIGN1cnJlbnRCeXRlUHRyPXBheWxvYWQraTtpZihpPT1sZW5ndGh8fEhFQVBVOFtjdXJyZW50Qnl0ZVB0cl09PTApe3ZhciBtYXhSZWFkPWN1cnJlbnRCeXRlUHRyLWRlY29kZVN0YXJ0UHRyO3ZhciBzdHJpbmdTZWdtZW50PVVURjhUb1N0cmluZyhkZWNvZGVTdGFydFB0cixtYXhSZWFkKTtpZihzdHI9PT11bmRlZmluZWQpe3N0cj1zdHJpbmdTZWdtZW50O31lbHNlIHtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoMCk7c3RyKz1zdHJpbmdTZWdtZW50O31kZWNvZGVTdGFydFB0cj1jdXJyZW50Qnl0ZVB0cisxO319fWVsc2Uge3ZhciBhPW5ldyBBcnJheShsZW5ndGgpO2Zvcih2YXIgaT0wO2k8bGVuZ3RoOysraSl7YVtpXT1TdHJpbmcuZnJvbUNoYXJDb2RlKEhFQVBVOFtwYXlsb2FkK2ldKTt9c3RyPWEuam9pbigiIik7fV9mcmVlKHZhbHVlKTtyZXR1cm4gc3RyfSwidG9XaXJlVHlwZSIoZGVzdHJ1Y3RvcnMsdmFsdWUpe2lmKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpe3ZhbHVlPW5ldyBVaW50OEFycmF5KHZhbHVlKTt9dmFyIGxlbmd0aDt2YXIgdmFsdWVJc09mVHlwZVN0cmluZz10eXBlb2YgdmFsdWU9PSJzdHJpbmciO2lmKCEodmFsdWVJc09mVHlwZVN0cmluZ3x8dmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5fHx2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5fHx2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheSkpe3Rocm93QmluZGluZ0Vycm9yKCJDYW5ub3QgcGFzcyBub24tc3RyaW5nIHRvIHN0ZDo6c3RyaW5nIik7fWlmKHN0ZFN0cmluZ0lzVVRGOCYmdmFsdWVJc09mVHlwZVN0cmluZyl7bGVuZ3RoPWxlbmd0aEJ5dGVzVVRGOCh2YWx1ZSk7fWVsc2Uge2xlbmd0aD12YWx1ZS5sZW5ndGg7fXZhciBiYXNlPV9tYWxsb2MoNCtsZW5ndGgrMSk7dmFyIHB0cj1iYXNlKzQ7SEVBUFUzMltiYXNlPj4yXT1sZW5ndGg7aWYoc3RkU3RyaW5nSXNVVEY4JiZ2YWx1ZUlzT2ZUeXBlU3RyaW5nKXtzdHJpbmdUb1VURjgodmFsdWUscHRyLGxlbmd0aCsxKTt9ZWxzZSB7aWYodmFsdWVJc09mVHlwZVN0cmluZyl7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXt2YXIgY2hhckNvZGU9dmFsdWUuY2hhckNvZGVBdChpKTtpZihjaGFyQ29kZT4yNTUpe19mcmVlKHB0cik7dGhyb3dCaW5kaW5nRXJyb3IoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpO31IRUFQVThbcHRyK2ldPWNoYXJDb2RlO319ZWxzZSB7Zm9yKHZhciBpPTA7aTxsZW5ndGg7KytpKXtIRUFQVThbcHRyK2ldPXZhbHVlW2ldO319fWlmKGRlc3RydWN0b3JzIT09bnVsbCl7ZGVzdHJ1Y3RvcnMucHVzaChfZnJlZSxiYXNlKTt9cmV0dXJuIGJhc2V9LCJhcmdQYWNrQWR2YW5jZSI6R2VuZXJpY1dpcmVUeXBlU2l6ZSwicmVhZFZhbHVlRnJvbVBvaW50ZXIiOnJlYWRQb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbihwdHIpe19mcmVlKHB0cik7fX0pO307dmFyIFVURjE2RGVjb2Rlcj10eXBlb2YgVGV4dERlY29kZXIhPSJ1bmRlZmluZWQiP25ldyBUZXh0RGVjb2RlcigidXRmLTE2bGUiKTp1bmRlZmluZWQ7dmFyIFVURjE2VG9TdHJpbmc9KHB0cixtYXhCeXRlc1RvUmVhZCk9Pnt2YXIgZW5kUHRyPXB0cjt2YXIgaWR4PWVuZFB0cj4+MTt2YXIgbWF4SWR4PWlkeCttYXhCeXRlc1RvUmVhZC8yO3doaWxlKCEoaWR4Pj1tYXhJZHgpJiZIRUFQVTE2W2lkeF0pKytpZHg7ZW5kUHRyPWlkeDw8MTtpZihlbmRQdHItcHRyPjMyJiZVVEYxNkRlY29kZXIpcmV0dXJuIFVURjE2RGVjb2Rlci5kZWNvZGUoSEVBUFU4LnN1YmFycmF5KHB0cixlbmRQdHIpKTt2YXIgc3RyPSIiO2Zvcih2YXIgaT0wOyEoaT49bWF4Qnl0ZXNUb1JlYWQvMik7KytpKXt2YXIgY29kZVVuaXQ9SEVBUDE2W3B0citpKjI+PjFdO2lmKGNvZGVVbml0PT0wKWJyZWFrO3N0cis9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlVW5pdCk7fXJldHVybiBzdHJ9O3ZhciBzdHJpbmdUb1VURjE2PShzdHIsb3V0UHRyLG1heEJ5dGVzVG9Xcml0ZSk9PnttYXhCeXRlc1RvV3JpdGU/Pz0yMTQ3NDgzNjQ3O2lmKG1heEJ5dGVzVG9Xcml0ZTwyKXJldHVybiAwO21heEJ5dGVzVG9Xcml0ZS09Mjt2YXIgc3RhcnRQdHI9b3V0UHRyO3ZhciBudW1DaGFyc1RvV3JpdGU9bWF4Qnl0ZXNUb1dyaXRlPHN0ci5sZW5ndGgqMj9tYXhCeXRlc1RvV3JpdGUvMjpzdHIubGVuZ3RoO2Zvcih2YXIgaT0wO2k8bnVtQ2hhcnNUb1dyaXRlOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO0hFQVAxNltvdXRQdHI+PjFdPWNvZGVVbml0O291dFB0cis9Mjt9SEVBUDE2W291dFB0cj4+MV09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfTt2YXIgbGVuZ3RoQnl0ZXNVVEYxNj1zdHI9PnN0ci5sZW5ndGgqMjt2YXIgVVRGMzJUb1N0cmluZz0ocHRyLG1heEJ5dGVzVG9SZWFkKT0+e3ZhciBpPTA7dmFyIHN0cj0iIjt3aGlsZSghKGk+PW1heEJ5dGVzVG9SZWFkLzQpKXt2YXIgdXRmMzI9SEVBUDMyW3B0citpKjQ+PjJdO2lmKHV0ZjMyPT0wKWJyZWFrOysraTtpZih1dGYzMj49NjU1MzYpe3ZhciBjaD11dGYzMi02NTUzNjtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTZ8Y2g+PjEwLDU2MzIwfGNoJjEwMjMpO31lbHNlIHtzdHIrPVN0cmluZy5mcm9tQ2hhckNvZGUodXRmMzIpO319cmV0dXJuIHN0cn07dmFyIHN0cmluZ1RvVVRGMzI9KHN0cixvdXRQdHIsbWF4Qnl0ZXNUb1dyaXRlKT0+e21heEJ5dGVzVG9Xcml0ZT8/PTIxNDc0ODM2NDc7aWYobWF4Qnl0ZXNUb1dyaXRlPDQpcmV0dXJuIDA7dmFyIHN0YXJ0UHRyPW91dFB0cjt2YXIgZW5kUHRyPXN0YXJ0UHRyK21heEJ5dGVzVG9Xcml0ZS00O2Zvcih2YXIgaT0wO2k8c3RyLmxlbmd0aDsrK2kpe3ZhciBjb2RlVW5pdD1zdHIuY2hhckNvZGVBdChpKTtpZihjb2RlVW5pdD49NTUyOTYmJmNvZGVVbml0PD01NzM0Myl7dmFyIHRyYWlsU3Vycm9nYXRlPXN0ci5jaGFyQ29kZUF0KCsraSk7Y29kZVVuaXQ9NjU1MzYrKChjb2RlVW5pdCYxMDIzKTw8MTApfHRyYWlsU3Vycm9nYXRlJjEwMjM7fUhFQVAzMltvdXRQdHI+PjJdPWNvZGVVbml0O291dFB0cis9NDtpZihvdXRQdHIrND5lbmRQdHIpYnJlYWt9SEVBUDMyW291dFB0cj4+Ml09MDtyZXR1cm4gb3V0UHRyLXN0YXJ0UHRyfTt2YXIgbGVuZ3RoQnl0ZXNVVEYzMj1zdHI9Pnt2YXIgbGVuPTA7Zm9yKHZhciBpPTA7aTxzdHIubGVuZ3RoOysraSl7dmFyIGNvZGVVbml0PXN0ci5jaGFyQ29kZUF0KGkpO2lmKGNvZGVVbml0Pj01NTI5NiYmY29kZVVuaXQ8PTU3MzQzKSsraTtsZW4rPTQ7fXJldHVybiBsZW59O3ZhciBfX2VtYmluZF9yZWdpc3Rlcl9zdGRfd3N0cmluZz0ocmF3VHlwZSxjaGFyU2l6ZSxuYW1lKT0+e25hbWU9cmVhZExhdGluMVN0cmluZyhuYW1lKTt2YXIgZGVjb2RlU3RyaW5nLGVuY29kZVN0cmluZyxyZWFkQ2hhckF0LGxlbmd0aEJ5dGVzVVRGO2lmKGNoYXJTaXplPT09Mil7ZGVjb2RlU3RyaW5nPVVURjE2VG9TdHJpbmc7ZW5jb2RlU3RyaW5nPXN0cmluZ1RvVVRGMTY7bGVuZ3RoQnl0ZXNVVEY9bGVuZ3RoQnl0ZXNVVEYxNjtyZWFkQ2hhckF0PXBvaW50ZXI9PkhFQVBVMTZbcG9pbnRlcj4+MV07fWVsc2UgaWYoY2hhclNpemU9PT00KXtkZWNvZGVTdHJpbmc9VVRGMzJUb1N0cmluZztlbmNvZGVTdHJpbmc9c3RyaW5nVG9VVEYzMjtsZW5ndGhCeXRlc1VURj1sZW5ndGhCeXRlc1VURjMyO3JlYWRDaGFyQXQ9cG9pbnRlcj0+SEVBUFUzMltwb2ludGVyPj4yXTt9cmVnaXN0ZXJUeXBlKHJhd1R5cGUse25hbWU6bmFtZSwiZnJvbVdpcmVUeXBlIjp2YWx1ZT0+e3ZhciBsZW5ndGg9SEVBUFUzMlt2YWx1ZT4+Ml07dmFyIHN0cjt2YXIgZGVjb2RlU3RhcnRQdHI9dmFsdWUrNDtmb3IodmFyIGk9MDtpPD1sZW5ndGg7KytpKXt2YXIgY3VycmVudEJ5dGVQdHI9dmFsdWUrNCtpKmNoYXJTaXplO2lmKGk9PWxlbmd0aHx8cmVhZENoYXJBdChjdXJyZW50Qnl0ZVB0cik9PTApe3ZhciBtYXhSZWFkQnl0ZXM9Y3VycmVudEJ5dGVQdHItZGVjb2RlU3RhcnRQdHI7dmFyIHN0cmluZ1NlZ21lbnQ9ZGVjb2RlU3RyaW5nKGRlY29kZVN0YXJ0UHRyLG1heFJlYWRCeXRlcyk7aWYoc3RyPT09dW5kZWZpbmVkKXtzdHI9c3RyaW5nU2VnbWVudDt9ZWxzZSB7c3RyKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDApO3N0cis9c3RyaW5nU2VnbWVudDt9ZGVjb2RlU3RhcnRQdHI9Y3VycmVudEJ5dGVQdHIrY2hhclNpemU7fX1fZnJlZSh2YWx1ZSk7cmV0dXJuIHN0cn0sInRvV2lyZVR5cGUiOihkZXN0cnVjdG9ycyx2YWx1ZSk9PntpZighKHR5cGVvZiB2YWx1ZT09InN0cmluZyIpKXt0aHJvd0JpbmRpbmdFcnJvcihgQ2Fubm90IHBhc3Mgbm9uLXN0cmluZyB0byBDKysgc3RyaW5nIHR5cGUgJHtuYW1lfWApO312YXIgbGVuZ3RoPWxlbmd0aEJ5dGVzVVRGKHZhbHVlKTt2YXIgcHRyPV9tYWxsb2MoNCtsZW5ndGgrY2hhclNpemUpO0hFQVBVMzJbcHRyPj4yXT1sZW5ndGgvY2hhclNpemU7ZW5jb2RlU3RyaW5nKHZhbHVlLHB0cis0LGxlbmd0aCtjaGFyU2l6ZSk7aWYoZGVzdHJ1Y3RvcnMhPT1udWxsKXtkZXN0cnVjdG9ycy5wdXNoKF9mcmVlLHB0cik7fXJldHVybiBwdHJ9LCJhcmdQYWNrQWR2YW5jZSI6R2VuZXJpY1dpcmVUeXBlU2l6ZSwicmVhZFZhbHVlRnJvbVBvaW50ZXIiOnJlYWRQb2ludGVyLGRlc3RydWN0b3JGdW5jdGlvbihwdHIpe19mcmVlKHB0cik7fX0pO307dmFyIF9fZW1iaW5kX3JlZ2lzdGVyX3ZvaWQ9KHJhd1R5cGUsbmFtZSk9PntuYW1lPXJlYWRMYXRpbjFTdHJpbmcobmFtZSk7cmVnaXN0ZXJUeXBlKHJhd1R5cGUse2lzVm9pZDp0cnVlLG5hbWU6bmFtZSwiYXJnUGFja0FkdmFuY2UiOjAsImZyb21XaXJlVHlwZSI6KCk9PnVuZGVmaW5lZCwidG9XaXJlVHlwZSI6KGRlc3RydWN0b3JzLG8pPT51bmRlZmluZWR9KTt9O3ZhciBnZXRIZWFwTWF4PSgpPT4yMTQ3NDgzNjQ4O3ZhciBncm93TWVtb3J5PXNpemU9Pnt2YXIgYj13YXNtTWVtb3J5LmJ1ZmZlcjt2YXIgcGFnZXM9KHNpemUtYi5ieXRlTGVuZ3RoKzY1NTM1KS82NTUzNjt0cnl7d2FzbU1lbW9yeS5ncm93KHBhZ2VzKTt1cGRhdGVNZW1vcnlWaWV3cygpO3JldHVybiAxfWNhdGNoKGUpe319O3ZhciBfZW1zY3JpcHRlbl9yZXNpemVfaGVhcD1yZXF1ZXN0ZWRTaXplPT57dmFyIG9sZFNpemU9SEVBUFU4Lmxlbmd0aDtyZXF1ZXN0ZWRTaXplPj4+PTA7dmFyIG1heEhlYXBTaXplPWdldEhlYXBNYXgoKTtpZihyZXF1ZXN0ZWRTaXplPm1heEhlYXBTaXplKXtyZXR1cm4gZmFsc2V9dmFyIGFsaWduVXA9KHgsbXVsdGlwbGUpPT54KyhtdWx0aXBsZS14JW11bHRpcGxlKSVtdWx0aXBsZTtmb3IodmFyIGN1dERvd249MTtjdXREb3duPD00O2N1dERvd24qPTIpe3ZhciBvdmVyR3Jvd25IZWFwU2l6ZT1vbGRTaXplKigxKy4yL2N1dERvd24pO292ZXJHcm93bkhlYXBTaXplPU1hdGgubWluKG92ZXJHcm93bkhlYXBTaXplLHJlcXVlc3RlZFNpemUrMTAwNjYzMjk2KTt2YXIgbmV3U2l6ZT1NYXRoLm1pbihtYXhIZWFwU2l6ZSxhbGlnblVwKE1hdGgubWF4KHJlcXVlc3RlZFNpemUsb3Zlckdyb3duSGVhcFNpemUpLDY1NTM2KSk7dmFyIHJlcGxhY2VtZW50PWdyb3dNZW1vcnkobmV3U2l6ZSk7aWYocmVwbGFjZW1lbnQpe3JldHVybiB0cnVlfX1yZXR1cm4gZmFsc2V9O2VtYmluZF9pbml0X2NoYXJDb2RlcygpO0JpbmRpbmdFcnJvcj1Nb2R1bGVbIkJpbmRpbmdFcnJvciJdPWNsYXNzIEJpbmRpbmdFcnJvciBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKG1lc3NhZ2Upe3N1cGVyKG1lc3NhZ2UpO3RoaXMubmFtZT0iQmluZGluZ0Vycm9yIjt9fTtNb2R1bGVbIkludGVybmFsRXJyb3IiXT1jbGFzcyBJbnRlcm5hbEVycm9yIGV4dGVuZHMgRXJyb3J7Y29uc3RydWN0b3IobWVzc2FnZSl7c3VwZXIobWVzc2FnZSk7dGhpcy5uYW1lPSJJbnRlcm5hbEVycm9yIjt9fTtpbml0X2VtdmFsKCk7dmFyIHdhc21JbXBvcnRzPXtmOl9fZW1iaW5kX3JlZ2lzdGVyX2JpZ2ludCxpOl9fZW1iaW5kX3JlZ2lzdGVyX2Jvb2wsaDpfX2VtYmluZF9yZWdpc3Rlcl9lbXZhbCxlOl9fZW1iaW5kX3JlZ2lzdGVyX2Zsb2F0LGI6X19lbWJpbmRfcmVnaXN0ZXJfaW50ZWdlcixhOl9fZW1iaW5kX3JlZ2lzdGVyX21lbW9yeV92aWV3LGQ6X19lbWJpbmRfcmVnaXN0ZXJfc3RkX3N0cmluZyxjOl9fZW1iaW5kX3JlZ2lzdGVyX3N0ZF93c3RyaW5nLGo6X19lbWJpbmRfcmVnaXN0ZXJfdm9pZCxnOl9lbXNjcmlwdGVuX3Jlc2l6ZV9oZWFwfTt2YXIgd2FzbUV4cG9ydHM9Y3JlYXRlV2FzbSgpO01vZHVsZVsiX3BhY2siXT0oYTAsYTEsYTIsYTMsYTQsYTUsYTYsYTcsYTgsYTksYTEwKT0+KE1vZHVsZVsiX3BhY2siXT13YXNtRXhwb3J0c1sibSJdKShhMCxhMSxhMixhMyxhNCxhNSxhNixhNyxhOCxhOSxhMTApO3ZhciBfbWFsbG9jPU1vZHVsZVsiX21hbGxvYyJdPWEwPT4oX21hbGxvYz1Nb2R1bGVbIl9tYWxsb2MiXT13YXNtRXhwb3J0c1sibyJdKShhMCk7dmFyIF9mcmVlPU1vZHVsZVsiX2ZyZWUiXT1hMD0+KF9mcmVlPU1vZHVsZVsiX2ZyZWUiXT13YXNtRXhwb3J0c1sicCJdKShhMCk7dmFyIGNhbGxlZFJ1bjtkZXBlbmRlbmNpZXNGdWxmaWxsZWQ9ZnVuY3Rpb24gcnVuQ2FsbGVyKCl7aWYoIWNhbGxlZFJ1bilydW4oKTtpZighY2FsbGVkUnVuKWRlcGVuZGVuY2llc0Z1bGZpbGxlZD1ydW5DYWxsZXI7fTtmdW5jdGlvbiBydW4oKXtpZihydW5EZXBlbmRlbmNpZXM+MCl7cmV0dXJufXByZVJ1bigpO2lmKHJ1bkRlcGVuZGVuY2llcz4wKXtyZXR1cm59ZnVuY3Rpb24gZG9SdW4oKXtpZihjYWxsZWRSdW4pcmV0dXJuO2NhbGxlZFJ1bj10cnVlO01vZHVsZVsiY2FsbGVkUnVuIl09dHJ1ZTtpZihBQk9SVClyZXR1cm47aW5pdFJ1bnRpbWUoKTtyZWFkeVByb21pc2VSZXNvbHZlKE1vZHVsZSk7aWYoTW9kdWxlWyJvblJ1bnRpbWVJbml0aWFsaXplZCJdKU1vZHVsZVsib25SdW50aW1lSW5pdGlhbGl6ZWQiXSgpO3Bvc3RSdW4oKTt9aWYoTW9kdWxlWyJzZXRTdGF0dXMiXSl7TW9kdWxlWyJzZXRTdGF0dXMiXSgiUnVubmluZy4uLiIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TW9kdWxlWyJzZXRTdGF0dXMiXSgiIik7fSwxKTtkb1J1bigpO30sMSk7fWVsc2Uge2RvUnVuKCk7fX1pZihNb2R1bGVbInByZUluaXQiXSl7aWYodHlwZW9mIE1vZHVsZVsicHJlSW5pdCJdPT0iZnVuY3Rpb24iKU1vZHVsZVsicHJlSW5pdCJdPVtNb2R1bGVbInByZUluaXQiXV07d2hpbGUoTW9kdWxlWyJwcmVJbml0Il0ubGVuZ3RoPjApe01vZHVsZVsicHJlSW5pdCJdLnBvcCgpKCk7fX1ydW4oKTsKCgogICAgcmV0dXJuIG1vZHVsZUFyZy5yZWFkeQogIH0KICApOwogIH0pKCk7CgogIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55CiAgbGV0IHdhc21Nb2R1bGU7CiAgYXN5bmMgZnVuY3Rpb24gaW5pdFdhc20oKSB7CiAgICAgIHdhc21Nb2R1bGUgPSBhd2FpdCBsb2FkV2FzbSgpOwogIH0KICBsZXQgYWxsb2NhdGVkVmVydGV4Q291bnQgPSAwOwogIGNvbnN0IHVwZGF0ZVF1ZXVlID0gbmV3IEFycmF5KCk7CiAgbGV0IHJ1bm5pbmcgPSBmYWxzZTsKICBsZXQgbG9hZGluZyA9IGZhbHNlOwogIGxldCBwb3NpdGlvbnNQdHI7CiAgbGV0IHJvdGF0aW9uc1B0cjsKICBsZXQgc2NhbGVzUHRyOwogIGxldCBjb2xvcnNQdHI7CiAgbGV0IHNlbGVjdGlvblB0cjsKICBsZXQgZGF0YVB0cjsKICBsZXQgd29ybGRQb3NpdGlvbnNQdHI7CiAgbGV0IHdvcmxkUm90YXRpb25zUHRyOwogIGxldCB3b3JsZFNjYWxlc1B0cjsKICBjb25zdCBwYWNrID0gYXN5bmMgKHNwbGF0KSA9PiB7CiAgICAgIHdoaWxlIChsb2FkaW5nKSB7CiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAwKSk7CiAgICAgIH0KICAgICAgaWYgKCF3YXNtTW9kdWxlKSB7CiAgICAgICAgICBsb2FkaW5nID0gdHJ1ZTsKICAgICAgICAgIGF3YWl0IGluaXRXYXNtKCk7CiAgICAgICAgICBsb2FkaW5nID0gZmFsc2U7CiAgICAgIH0KICAgICAgY29uc3QgdGFyZ2V0QWxsb2NhdGVkVmVydGV4Q291bnQgPSBNYXRoLnBvdygyLCBNYXRoLmNlaWwoTWF0aC5sb2cyKHNwbGF0LnZlcnRleENvdW50KSkpOwogICAgICBpZiAodGFyZ2V0QWxsb2NhdGVkVmVydGV4Q291bnQgPiBhbGxvY2F0ZWRWZXJ0ZXhDb3VudCkgewogICAgICAgICAgaWYgKGFsbG9jYXRlZFZlcnRleENvdW50ID4gMCkgewogICAgICAgICAgICAgIHdhc21Nb2R1bGUuX2ZyZWUocG9zaXRpb25zUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHJvdGF0aW9uc1B0cik7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZShzY2FsZXNQdHIpOwogICAgICAgICAgICAgIHdhc21Nb2R1bGUuX2ZyZWUoY29sb3JzUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHNlbGVjdGlvblB0cik7CiAgICAgICAgICAgICAgd2FzbU1vZHVsZS5fZnJlZShkYXRhUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHdvcmxkUG9zaXRpb25zUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHdvcmxkUm90YXRpb25zUHRyKTsKICAgICAgICAgICAgICB3YXNtTW9kdWxlLl9mcmVlKHdvcmxkU2NhbGVzUHRyKTsKICAgICAgICAgIH0KICAgICAgICAgIGFsbG9jYXRlZFZlcnRleENvdW50ID0gdGFyZ2V0QWxsb2NhdGVkVmVydGV4Q291bnQ7CiAgICAgICAgICBwb3NpdGlvbnNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoMyAqIGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICByb3RhdGlvbnNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoNCAqIGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICBzY2FsZXNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoMyAqIGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICBjb2xvcnNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoNCAqIGFsbG9jYXRlZFZlcnRleENvdW50KTsKICAgICAgICAgIHNlbGVjdGlvblB0ciA9IHdhc21Nb2R1bGUuX21hbGxvYyhhbGxvY2F0ZWRWZXJ0ZXhDb3VudCk7CiAgICAgICAgICBkYXRhUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKDggKiBhbGxvY2F0ZWRWZXJ0ZXhDb3VudCAqIDQpOwogICAgICAgICAgd29ybGRQb3NpdGlvbnNQdHIgPSB3YXNtTW9kdWxlLl9tYWxsb2MoMyAqIGFsbG9jYXRlZFZlcnRleENvdW50ICogNCk7CiAgICAgICAgICB3b3JsZFJvdGF0aW9uc1B0ciA9IHdhc21Nb2R1bGUuX21hbGxvYyg0ICogYWxsb2NhdGVkVmVydGV4Q291bnQgKiA0KTsKICAgICAgICAgIHdvcmxkU2NhbGVzUHRyID0gd2FzbU1vZHVsZS5fbWFsbG9jKDMgKiBhbGxvY2F0ZWRWZXJ0ZXhDb3VudCAqIDQpOwogICAgICB9CiAgICAgIHdhc21Nb2R1bGUuSEVBUEYzMi5zZXQoc3BsYXQucG9zaXRpb25zLCBwb3NpdGlvbnNQdHIgLyA0KTsKICAgICAgd2FzbU1vZHVsZS5IRUFQRjMyLnNldChzcGxhdC5yb3RhdGlvbnMsIHJvdGF0aW9uc1B0ciAvIDQpOwogICAgICB3YXNtTW9kdWxlLkhFQVBGMzIuc2V0KHNwbGF0LnNjYWxlcywgc2NhbGVzUHRyIC8gNCk7CiAgICAgIHdhc21Nb2R1bGUuSEVBUFU4LnNldChzcGxhdC5jb2xvcnMsIGNvbG9yc1B0cik7CiAgICAgIHdhc21Nb2R1bGUuSEVBUFU4LnNldChzcGxhdC5zZWxlY3Rpb24sIHNlbGVjdGlvblB0cik7CiAgICAgIHdhc21Nb2R1bGUuX3BhY2soc3BsYXQuc2VsZWN0ZWQsIHNwbGF0LnZlcnRleENvdW50LCBwb3NpdGlvbnNQdHIsIHJvdGF0aW9uc1B0ciwgc2NhbGVzUHRyLCBjb2xvcnNQdHIsIHNlbGVjdGlvblB0ciwgZGF0YVB0ciwgd29ybGRQb3NpdGlvbnNQdHIsIHdvcmxkUm90YXRpb25zUHRyLCB3b3JsZFNjYWxlc1B0cik7CiAgICAgIGNvbnN0IG91dERhdGEgPSBuZXcgVWludDMyQXJyYXkod2FzbU1vZHVsZS5IRUFQVTMyLmJ1ZmZlciwgZGF0YVB0ciwgc3BsYXQudmVydGV4Q291bnQgKiA4KTsKICAgICAgY29uc3QgZGV0YWNoZWREYXRhID0gbmV3IFVpbnQzMkFycmF5KG91dERhdGEuc2xpY2UoKS5idWZmZXIpOwogICAgICBjb25zdCB3b3JsZFBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkod2FzbU1vZHVsZS5IRUFQRjMyLmJ1ZmZlciwgd29ybGRQb3NpdGlvbnNQdHIsIHNwbGF0LnZlcnRleENvdW50ICogMyk7CiAgICAgIGNvbnN0IGRldGFjaGVkV29ybGRQb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHdvcmxkUG9zaXRpb25zLnNsaWNlKCkuYnVmZmVyKTsKICAgICAgY29uc3Qgd29ybGRSb3RhdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHdhc21Nb2R1bGUuSEVBUEYzMi5idWZmZXIsIHdvcmxkUm90YXRpb25zUHRyLCBzcGxhdC52ZXJ0ZXhDb3VudCAqIDQpOwogICAgICBjb25zdCBkZXRhY2hlZFdvcmxkUm90YXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh3b3JsZFJvdGF0aW9ucy5zbGljZSgpLmJ1ZmZlcik7CiAgICAgIGNvbnN0IHdvcmxkU2NhbGVzID0gbmV3IEZsb2F0MzJBcnJheSh3YXNtTW9kdWxlLkhFQVBGMzIuYnVmZmVyLCB3b3JsZFNjYWxlc1B0ciwgc3BsYXQudmVydGV4Q291bnQgKiAzKTsKICAgICAgY29uc3QgZGV0YWNoZWRXb3JsZFNjYWxlcyA9IG5ldyBGbG9hdDMyQXJyYXkod29ybGRTY2FsZXMuc2xpY2UoKS5idWZmZXIpOwogICAgICBjb25zdCByZXNwb25zZSA9IHsKICAgICAgICAgIGRhdGE6IGRldGFjaGVkRGF0YSwKICAgICAgICAgIHdvcmxkUG9zaXRpb25zOiBkZXRhY2hlZFdvcmxkUG9zaXRpb25zLAogICAgICAgICAgd29ybGRSb3RhdGlvbnM6IGRldGFjaGVkV29ybGRSb3RhdGlvbnMsCiAgICAgICAgICB3b3JsZFNjYWxlczogZGV0YWNoZWRXb3JsZFNjYWxlcywKICAgICAgICAgIG9mZnNldDogc3BsYXQub2Zmc2V0LAogICAgICAgICAgdmVydGV4Q291bnQ6IHNwbGF0LnZlcnRleENvdW50LAogICAgICAgICAgcG9zaXRpb25zOiBzcGxhdC5wb3NpdGlvbnMuYnVmZmVyLAogICAgICAgICAgcm90YXRpb25zOiBzcGxhdC5yb3RhdGlvbnMuYnVmZmVyLAogICAgICAgICAgc2NhbGVzOiBzcGxhdC5zY2FsZXMuYnVmZmVyLAogICAgICAgICAgY29sb3JzOiBzcGxhdC5jb2xvcnMuYnVmZmVyLAogICAgICAgICAgc2VsZWN0aW9uOiBzcGxhdC5zZWxlY3Rpb24uYnVmZmVyLAogICAgICB9OwogICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgcmVzcG9uc2U6IHJlc3BvbnNlIH0sIFsKICAgICAgICAgIHJlc3BvbnNlLmRhdGEuYnVmZmVyLAogICAgICAgICAgcmVzcG9uc2Uud29ybGRQb3NpdGlvbnMuYnVmZmVyLAogICAgICAgICAgcmVzcG9uc2Uud29ybGRSb3RhdGlvbnMuYnVmZmVyLAogICAgICAgICAgcmVzcG9uc2Uud29ybGRTY2FsZXMuYnVmZmVyLAogICAgICAgICAgcmVzcG9uc2UucG9zaXRpb25zLAogICAgICAgICAgcmVzcG9uc2Uucm90YXRpb25zLAogICAgICAgICAgcmVzcG9uc2Uuc2NhbGVzLAogICAgICAgICAgcmVzcG9uc2UuY29sb3JzLAogICAgICAgICAgcmVzcG9uc2Uuc2VsZWN0aW9uLAogICAgICBdKTsKICAgICAgcnVubmluZyA9IGZhbHNlOwogIH07CiAgY29uc3QgcGFja1Rocm90dGxlZCA9ICgpID0+IHsKICAgICAgaWYgKHVwZGF0ZVF1ZXVlLmxlbmd0aCA9PT0gMCkKICAgICAgICAgIHJldHVybjsKICAgICAgaWYgKCFydW5uaW5nKSB7CiAgICAgICAgICBydW5uaW5nID0gdHJ1ZTsKICAgICAgICAgIGNvbnN0IHNwbGF0ID0gdXBkYXRlUXVldWUuc2hpZnQoKTsKICAgICAgICAgIHBhY2soc3BsYXQpOwogICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlOwogICAgICAgICAgICAgIHBhY2tUaHJvdHRsZWQoKTsKICAgICAgICAgIH0sIDApOwogICAgICB9CiAgfTsKICBzZWxmLm9ubWVzc2FnZSA9IChlKSA9PiB7CiAgICAgIGlmIChlLmRhdGEuc3BsYXQpIHsKICAgICAgICAgIGNvbnN0IHNwbGF0ID0gZS5kYXRhLnNwbGF0OwogICAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIGV4aXN0aW5nXSBvZiB1cGRhdGVRdWV1ZS5lbnRyaWVzKCkpIHsKICAgICAgICAgICAgICBpZiAoZXhpc3Rpbmcub2Zmc2V0ID09PSBzcGxhdC5vZmZzZXQpIHsKICAgICAgICAgICAgICAgICAgdXBkYXRlUXVldWVbaW5kZXhdID0gc3BsYXQ7CiAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICB9CiAgICAgICAgICB9CiAgICAgICAgICB1cGRhdGVRdWV1ZS5wdXNoKHNwbGF0KTsKICAgICAgICAgIHBhY2tUaHJvdHRsZWQoKTsKICAgICAgfQogIH07Cgp9KSgpOwovLyMgc291cmNlTWFwcGluZ1VSTD1EYXRhV29ya2VyLmpzLm1hcAoK", null, !1), dF = function(r = {}) {
  var U, l, F = r;
  F.ready = new Promise((n, A) => {
    U = n, l = A;
  });
  var Q, Z = Object.assign({}, F), d = "";
  d = (d = self.location.href).startsWith("blob:") ? "" : d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1), Q = (n) => {
    var A = new XMLHttpRequest();
    return A.open("GET", n, !1), A.responseType = "arraybuffer", A.send(null), new Uint8Array(A.response);
  }, F.print || console.log.bind(console);
  var V, B, t = F.printErr || console.error.bind(console);
  function R(n) {
    if (nU(n))
      return function(A) {
        for (var e = atob(A), W = new Uint8Array(e.length), h = 0; h < e.length; ++h)
          W[h] = e.charCodeAt(h);
        return W;
      }(n.slice(RU.length));
  }
  Object.assign(F, Z), Z = null, F.arguments && F.arguments, F.thisProgram && F.thisProgram, F.quit && F.quit, F.wasmBinary && (V = F.wasmBinary), typeof WebAssembly != "object" && u("no native wasm support detected");
  var i, s, J, c, N, o, X, G, E = !1;
  function Y() {
    var n = B.buffer;
    F.HEAP8 = i = new Int8Array(n), F.HEAP16 = J = new Int16Array(n), F.HEAPU8 = s = new Uint8Array(n), F.HEAPU16 = c = new Uint16Array(n), F.HEAP32 = N = new Int32Array(n), F.HEAPU32 = o = new Uint32Array(n), F.HEAPF32 = X = new Float32Array(n), F.HEAPF64 = G = new Float64Array(n);
  }
  var x = [], v = [], D = [], p = 0, I = null;
  function u(n) {
    var e;
    (e = F.onAbort) == null || e.call(F, n), t(n = "Aborted(" + n + ")"), E = !0, n += ". Build with -sASSERTIONS for more info.";
    var A = new WebAssembly.RuntimeError(n);
    throw l(A), A;
  }
  var q, ZU, RU = "data:application/octet-stream;base64,", nU = (n) => n.startsWith(RU);
  function j(n) {
    return Promise.resolve().then(() => function(A) {
      if (A == q && V)
        return new Uint8Array(V);
      var e = R(A);
      if (e)
        return e;
      if (Q)
        return Q(A);
      throw "both async and sync fetching of the wasm failed";
    }(n));
  }
  function a(n, A, e, W) {
    return function(h, b, C) {
      return j(h).then((m) => WebAssembly.instantiate(m, b)).then(C, (m) => {
        t(`failed to asynchronously prepare wasm: ${m}`), u(m);
      });
    }(A, e, W);
  }
  nU(q = "data:application/octet-stream;base64,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eV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50NjRfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50NjRfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dWludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGludDMyX3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGNoYXI+AHN0ZDo6YmFzaWNfc3RyaW5nPHVuc2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNpZ25lZCBjaGFyPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBsb25nPgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxkb3VibGU+AE5TdDNfXzIxMmJhc2ljX3N0cmluZ0ljTlNfMTFjaGFyX3RyYWl0c0ljRUVOU185YWxsb2NhdG9ySWNFRUVFAAAAAJQMAAAyBwAATlN0M19fMjEyYmFzaWNfc3RyaW5nSWhOU18xMWNoYXJfdHJhaXRzSWhFRU5TXzlhbGxvY2F0b3JJaEVFRUUAAJQMAAB8BwAATlN0M19fMjEyYmFzaWNfc3RyaW5nSXdOU18xMWNoYXJfdHJhaXRzSXdFRU5TXzlhbGxvY2F0b3JJd0VFRUUAAJQMAADEBwAATlN0M19fMjEyYmFzaWNfc3RyaW5nSURzTlNfMTFjaGFyX3RyYWl0c0lEc0VFTlNfOWFsbG9jYXRvcklEc0VFRUUAAACUDAAADAgAAE5TdDNfXzIxMmJhc2ljX3N0cmluZ0lEaU5TXzExY2hhcl90cmFpdHNJRGlFRU5TXzlhbGxvY2F0b3JJRGlFRUVFAAAAlAwAAFgIAABOMTBlbXNjcmlwdGVuM3ZhbEUAAJQMAACkCAAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJY0VFAACUDAAAwAgAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWFFRQAAlAwAAOgIAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0loRUUAAJQMAAAQCQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJc0VFAACUDAAAOAkAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXRFRQAAlAwAAGAJAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lpRUUAAJQMAACICQAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJakVFAACUDAAAsAkAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SWxFRQAAlAwAANgJAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0ltRUUAAJQMAAAACgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJeEVFAACUDAAAKAoAAE4xMGVtc2NyaXB0ZW4xMW1lbW9yeV92aWV3SXlFRQAAlAwAAFAKAABOMTBlbXNjcmlwdGVuMTFtZW1vcnlfdmlld0lmRUUAAJQMAAB4CgAATjEwZW1zY3JpcHRlbjExbWVtb3J5X3ZpZXdJZEVFAACUDAAAoAoAAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAAAAALwMAADICgAAIA0AAE4xMF9fY3h4YWJpdjExN19fY2xhc3NfdHlwZV9pbmZvRQAAALwMAAD4CgAA7AoAAE4xMF9fY3h4YWJpdjExN19fcGJhc2VfdHlwZV9pbmZvRQAAALwMAAAoCwAA7AoAAE4xMF9fY3h4YWJpdjExOV9fcG9pbnRlcl90eXBlX2luZm9FALwMAABYCwAATAsAAAAAAADMCwAAAgAAAAMAAAAEAAAABQAAAAYAAABOMTBfX2N4eGFiaXYxMjNfX2Z1bmRhbWVudGFsX3R5cGVfaW5mb0UAvAwAAKQLAADsCgAAdgAAAJALAADYCwAAYgAAAJALAADkCwAAYwAAAJALAADwCwAAaAAAAJALAAD8CwAAYQAAAJALAAAIDAAAcwAAAJALAAAUDAAAdAAAAJALAAAgDAAAaQAAAJALAAAsDAAAagAAAJALAAA4DAAAbAAAAJALAABEDAAAbQAAAJALAABQDAAAeAAAAJALAABcDAAAeQAAAJALAABoDAAAZgAAAJALAAB0DAAAZAAAAJALAACADAAAAAAAABwLAAACAAAABwAAAAQAAAAFAAAACAAAAAkAAAAKAAAACwAAAAAAAAAEDQAAAgAAAAwAAAAEAAAABQAAAAgAAAANAAAADgAAAA8AAABOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UAAAAAvAwAANwMAAAcCwAAU3Q5dHlwZV9pbmZvAAAAAJQMAAAQDQBBqBoLAzAPAQ==") || (ZU = q, q = F.locateFile ? F.locateFile(ZU, d) : d + ZU);
  var k = (n) => {
    for (; n.length > 0; )
      n.shift()(F);
  };
  F.noExitRuntime;
  var T, M, UU = (n) => {
    for (var A = "", e = n; s[e]; )
      A += T[s[e++]];
    return A;
  }, VU = {}, O = {}, $ = (n) => {
    throw new M(n);
  };
  function f(n, A, e = {}) {
    if (!("argPackAdvance" in A))
      throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return function(W, h, b = {}) {
      var C = h.name;
      if (W || $(`type "${C}" must have a positive integer typeid pointer`), O.hasOwnProperty(W)) {
        if (b.ignoreDuplicateRegistrations)
          return;
        $(`Cannot register type '${C}' twice`);
      }
      if (O[W] = h, VU.hasOwnProperty(W)) {
        var m = VU[W];
        delete VU[W], m.forEach((g) => g());
      }
    }(n, A, e);
  }
  var FU = [], lU = [], sU = () => lU.length / 2 - 5 - FU.length, pU = (n) => (n || $("Cannot use deleted val. handle = " + n), lU[n]), yU = (n) => {
    switch (n) {
      case void 0:
        return 2;
      case null:
        return 4;
      case !0:
        return 6;
      case !1:
        return 8;
      default: {
        const A = FU.pop() || lU.length;
        return lU[A] = n, lU[A + 1] = 1, A;
      }
    }
  };
  function IU(n) {
    return this.fromWireType(o[n >> 2]);
  }
  var YU = { name: "emscripten::val", fromWireType: (n) => {
    var A = pU(n);
    return ((e) => {
      e > 9 && --lU[e + 1] == 0 && (lU[e] = void 0, FU.push(e));
    })(n), A;
  }, toWireType: (n, A) => yU(A), argPackAdvance: 8, readValueFromPointer: IU, destructorFunction: null }, kU = (n, A) => {
    switch (A) {
      case 4:
        return function(e) {
          return this.fromWireType(X[e >> 2]);
        };
      case 8:
        return function(e) {
          return this.fromWireType(G[e >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${A}): ${n}`);
    }
  }, uU = (n, A, e) => {
    switch (A) {
      case 1:
        return e ? (W) => i[W] : (W) => s[W];
      case 2:
        return e ? (W) => J[W >> 1] : (W) => c[W >> 1];
      case 4:
        return e ? (W) => N[W >> 2] : (W) => o[W >> 2];
      default:
        throw new TypeError(`invalid integer width (${A}): ${n}`);
    }
  }, oU = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, TU = (n, A) => n ? ((e, W, h) => {
    for (var b = W + h, C = W; e[C] && !(C >= b); )
      ++C;
    if (C - W > 16 && e.buffer && oU)
      return oU.decode(e.subarray(W, C));
    for (var m = ""; W < C; ) {
      var g = e[W++];
      if (128 & g) {
        var y = 63 & e[W++];
        if ((224 & g) != 192) {
          var z = 63 & e[W++];
          if ((g = (240 & g) == 224 ? (15 & g) << 12 | y << 6 | z : (7 & g) << 18 | y << 12 | z << 6 | 63 & e[W++]) < 65536)
            m += String.fromCharCode(g);
          else {
            var L = g - 65536;
            m += String.fromCharCode(55296 | L >> 10, 56320 | 1023 & L);
          }
        } else
          m += String.fromCharCode((31 & g) << 6 | y);
      } else
        m += String.fromCharCode(g);
    }
    return m;
  })(s, n, A) : "", CU = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, HU = (n, A) => {
    for (var e = n, W = e >> 1, h = W + A / 2; !(W >= h) && c[W]; )
      ++W;
    if ((e = W << 1) - n > 32 && CU)
      return CU.decode(s.subarray(n, e));
    for (var b = "", C = 0; !(C >= A / 2); ++C) {
      var m = J[n + 2 * C >> 1];
      if (m == 0)
        break;
      b += String.fromCharCode(m);
    }
    return b;
  }, xU = (n, A, e) => {
    if (e ?? (e = 2147483647), e < 2)
      return 0;
    for (var W = A, h = (e -= 2) < 2 * n.length ? e / 2 : n.length, b = 0; b < h; ++b) {
      var C = n.charCodeAt(b);
      J[A >> 1] = C, A += 2;
    }
    return J[A >> 1] = 0, A - W;
  }, DU = (n) => 2 * n.length, wU = (n, A) => {
    for (var e = 0, W = ""; !(e >= A / 4); ) {
      var h = N[n + 4 * e >> 2];
      if (h == 0)
        break;
      if (++e, h >= 65536) {
        var b = h - 65536;
        W += String.fromCharCode(55296 | b >> 10, 56320 | 1023 & b);
      } else
        W += String.fromCharCode(h);
    }
    return W;
  }, MU = (n, A, e) => {
    if (e ?? (e = 2147483647), e < 4)
      return 0;
    for (var W = A, h = W + e - 4, b = 0; b < n.length; ++b) {
      var C = n.charCodeAt(b);
      if (C >= 55296 && C <= 57343 && (C = 65536 + ((1023 & C) << 10) | 1023 & n.charCodeAt(++b)), N[A >> 2] = C, (A += 4) + 4 > h)
        break;
    }
    return N[A >> 2] = 0, A - W;
  }, vU = (n) => {
    for (var A = 0, e = 0; e < n.length; ++e) {
      var W = n.charCodeAt(e);
      W >= 55296 && W <= 57343 && ++e, A += 4;
    }
    return A;
  }, fU = (n) => {
    var A = (n - B.buffer.byteLength + 65535) / 65536;
    try {
      return B.grow(A), Y(), 1;
    } catch {
    }
  };
  (() => {
    for (var n = new Array(256), A = 0; A < 256; ++A)
      n[A] = String.fromCharCode(A);
    T = n;
  })(), M = F.BindingError = class extends Error {
    constructor(n) {
      super(n), this.name = "BindingError";
    }
  }, F.InternalError = class extends Error {
    constructor(n) {
      super(n), this.name = "InternalError";
    }
  }, lU.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), F.count_emval_handles = sU;
  var zU = { f: (n, A, e, W, h) => {
  }, i: (n, A, e, W) => {
    f(n, { name: A = UU(A), fromWireType: function(h) {
      return !!h;
    }, toWireType: function(h, b) {
      return b ? e : W;
    }, argPackAdvance: 8, readValueFromPointer: function(h) {
      return this.fromWireType(s[h]);
    }, destructorFunction: null });
  }, h: (n) => f(n, YU), e: (n, A, e) => {
    f(n, { name: A = UU(A), fromWireType: (W) => W, toWireType: (W, h) => h, argPackAdvance: 8, readValueFromPointer: kU(A, e), destructorFunction: null });
  }, b: (n, A, e, W, h) => {
    A = UU(A);
    var b = (g) => g;
    if (W === 0) {
      var C = 32 - 8 * e;
      b = (g) => g << C >>> C;
    }
    var m = A.includes("unsigned");
    f(n, { name: A, fromWireType: b, toWireType: m ? function(g, y) {
      return this.name, y >>> 0;
    } : function(g, y) {
      return this.name, y;
    }, argPackAdvance: 8, readValueFromPointer: uU(A, e, W !== 0), destructorFunction: null });
  }, a: (n, A, e) => {
    var W = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][A];
    function h(b) {
      var C = o[b >> 2], m = o[b + 4 >> 2];
      return new W(i.buffer, m, C);
    }
    f(n, { name: e = UU(e), fromWireType: h, argPackAdvance: 8, readValueFromPointer: h }, { ignoreDuplicateRegistrations: !0 });
  }, d: (n, A) => {
    var e = (A = UU(A)) === "std::string";
    f(n, { name: A, fromWireType(W) {
      var h, b = o[W >> 2], C = W + 4;
      if (e)
        for (var m = C, g = 0; g <= b; ++g) {
          var y = C + g;
          if (g == b || s[y] == 0) {
            var z = TU(m, y - m);
            h === void 0 ? h = z : (h += String.fromCharCode(0), h += z), m = y + 1;
          }
        }
      else {
        var L = new Array(b);
        for (g = 0; g < b; ++g)
          L[g] = String.fromCharCode(s[C + g]);
        h = L.join("");
      }
      return AU(W), h;
    }, toWireType(W, h) {
      var b;
      h instanceof ArrayBuffer && (h = new Uint8Array(h));
      var C = typeof h == "string";
      C || h instanceof Uint8Array || h instanceof Uint8ClampedArray || h instanceof Int8Array || $("Cannot pass non-string to std::string"), b = e && C ? ((L) => {
        for (var w = 0, H = 0; H < L.length; ++H) {
          var WU = L.charCodeAt(H);
          WU <= 127 ? w++ : WU <= 2047 ? w += 2 : WU >= 55296 && WU <= 57343 ? (w += 4, ++H) : w += 3;
        }
        return w;
      })(h) : h.length;
      var m = JU(4 + b + 1), g = m + 4;
      if (o[m >> 2] = b, e && C)
        ((L, w, H, WU) => {
          if (!(WU > 0))
            return 0;
          for (var iU = H + WU - 1, hU = 0; hU < L.length; ++hU) {
            var P = L.charCodeAt(hU);
            if (P >= 55296 && P <= 57343 && (P = 65536 + ((1023 & P) << 10) | 1023 & L.charCodeAt(++hU)), P <= 127) {
              if (H >= iU)
                break;
              w[H++] = P;
            } else if (P <= 2047) {
              if (H + 1 >= iU)
                break;
              w[H++] = 192 | P >> 6, w[H++] = 128 | 63 & P;
            } else if (P <= 65535) {
              if (H + 2 >= iU)
                break;
              w[H++] = 224 | P >> 12, w[H++] = 128 | P >> 6 & 63, w[H++] = 128 | 63 & P;
            } else {
              if (H + 3 >= iU)
                break;
              w[H++] = 240 | P >> 18, w[H++] = 128 | P >> 12 & 63, w[H++] = 128 | P >> 6 & 63, w[H++] = 128 | 63 & P;
            }
          }
          w[H] = 0;
        })(h, s, g, b + 1);
      else if (C)
        for (var y = 0; y < b; ++y) {
          var z = h.charCodeAt(y);
          z > 255 && (AU(g), $("String has UTF-16 code units that do not fit in 8 bits")), s[g + y] = z;
        }
      else
        for (y = 0; y < b; ++y)
          s[g + y] = h[y];
      return W !== null && W.push(AU, m), m;
    }, argPackAdvance: 8, readValueFromPointer: IU, destructorFunction(W) {
      AU(W);
    } });
  }, c: (n, A, e) => {
    var W, h, b, C;
    e = UU(e), A === 2 ? (W = HU, h = xU, C = DU, b = (m) => c[m >> 1]) : A === 4 && (W = wU, h = MU, C = vU, b = (m) => o[m >> 2]), f(n, { name: e, fromWireType: (m) => {
      for (var g, y = o[m >> 2], z = m + 4, L = 0; L <= y; ++L) {
        var w = m + 4 + L * A;
        if (L == y || b(w) == 0) {
          var H = W(z, w - z);
          g === void 0 ? g = H : (g += String.fromCharCode(0), g += H), z = w + A;
        }
      }
      return AU(m), g;
    }, toWireType: (m, g) => {
      typeof g != "string" && $(`Cannot pass non-string to C++ string type ${e}`);
      var y = C(g), z = JU(4 + y + A);
      return o[z >> 2] = y / A, h(g, z + 4, y + A), m !== null && m.push(AU, z), z;
    }, argPackAdvance: 8, readValueFromPointer: IU, destructorFunction(m) {
      AU(m);
    } });
  }, j: (n, A) => {
    f(n, { isVoid: !0, name: A = UU(A), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (e, W) => {
    } });
  }, g: (n) => {
    var A = s.length, e = 2147483648;
    if ((n >>>= 0) > e)
      return !1;
    for (var W, h, b = 1; b <= 4; b *= 2) {
      var C = A * (1 + 0.2 / b);
      C = Math.min(C, n + 100663296);
      var m = Math.min(e, (W = Math.max(n, C)) + ((h = 65536) - W % h) % h);
      if (fU(m))
        return !0;
    }
    return !1;
  } }, eU = function() {
    var e;
    var n = { a: zU };
    function A(W, h) {
      var b;
      return eU = W.exports, B = eU.k, Y(), b = eU.l, v.unshift(b), function(C) {
        var g;
        if (p--, (g = F.monitorRunDependencies) == null || g.call(F, p), p == 0 && I) {
          var m = I;
          I = null, m();
        }
      }(), eU;
    }
    if (p++, (e = F.monitorRunDependencies) == null || e.call(F, p), F.instantiateWasm)
      try {
        return F.instantiateWasm(n, A);
      } catch (W) {
        t(`Module.instantiateWasm callback failed with error: ${W}`), l(W);
      }
    return a(0, q, n, function(W) {
      A(W.instance);
    }).catch(l), {};
  }();
  F._pack = (n, A, e, W, h, b, C, m, g, y, z) => (F._pack = eU.m)(n, A, e, W, h, b, C, m, g, y, z);
  var aU, JU = F._malloc = (n) => (JU = F._malloc = eU.o)(n), AU = F._free = (n) => (AU = F._free = eU.p)(n);
  function mU() {
    function n() {
      aU || (aU = !0, F.calledRun = !0, E || (k(v), U(F), F.onRuntimeInitialized && F.onRuntimeInitialized(), function() {
        if (F.postRun)
          for (typeof F.postRun == "function" && (F.postRun = [F.postRun]); F.postRun.length; )
            A = F.postRun.shift(), D.unshift(A);
        var A;
        k(D);
      }()));
    }
    p > 0 || (function() {
      if (F.preRun)
        for (typeof F.preRun == "function" && (F.preRun = [F.preRun]); F.preRun.length; )
          A = F.preRun.shift(), x.unshift(A);
      var A;
      k(x);
    }(), p > 0 || (F.setStatus ? (F.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        F.setStatus("");
      }, 1), n();
    }, 1)) : n()));
  }
  if (I = function n() {
    aU || mU(), aU || (I = n);
  }, F.preInit)
    for (typeof F.preInit == "function" && (F.preInit = [F.preInit]); F.preInit.length > 0; )
      F.preInit.pop()();
  return mU(), r.ready;
};
class BF {
  constructor(U) {
    this.dataChanged = !1, this.transformsChanged = !1, this._updating = /* @__PURE__ */ new Set(), this._dirty = /* @__PURE__ */ new Set();
    let l = 0, F = 0;
    this._splatIndices = /* @__PURE__ */ new Map(), this._offsets = /* @__PURE__ */ new Map();
    const Q = /* @__PURE__ */ new Map();
    for (const t of U.objects)
      t instanceof tU && (this._splatIndices.set(t, F), this._offsets.set(t, l), Q.set(l, t), l += t.data.vertexCount, F++);
    this._vertexCount = l, this._width = 2048, this._height = Math.ceil(2 * this.vertexCount / this.width), this._data = new Uint32Array(this.width * this.height * 4), this._transformsWidth = 5, this._transformsHeight = Q.size, this._transforms = new Float32Array(this._transformsWidth * this._transformsHeight * 4), this._transformIndicesWidth = 1024, this._transformIndicesHeight = Math.ceil(this.vertexCount / this._transformIndicesWidth), this._transformIndices = new Uint32Array(this._transformIndicesWidth * this._transformIndicesHeight), this._positions = new Float32Array(3 * this.vertexCount), this._rotations = new Float32Array(4 * this.vertexCount), this._scales = new Float32Array(3 * this.vertexCount), this._worker = new tF();
    const Z = (t) => {
      const R = this._splatIndices.get(t);
      this._transforms.set(t.transform.buffer, 20 * R), this._transforms[20 * R + 16] = t.selected ? 1 : 0, t.positionChanged = !1, t.rotationChanged = !1, t.scaleChanged = !1, t.selectedChanged = !1, this.transformsChanged = !0;
    };
    let d;
    this._worker.onmessage = (t) => {
      if (t.data.response) {
        const R = t.data.response, i = Q.get(R.offset);
        Z(i);
        const s = this._splatIndices.get(i);
        for (let J = 0; J < i.data.vertexCount; J++)
          this._transformIndices[R.offset + J] = s;
        this._data.set(R.data, 8 * R.offset), i.data.reattach(R.positions, R.rotations, R.scales, R.colors, R.selection), this._positions.set(R.worldPositions, 3 * R.offset), this._rotations.set(R.worldRotations, 4 * R.offset), this._scales.set(R.worldScales, 3 * R.offset), this._updating.delete(i), i.selectedChanged = !1, this.dataChanged = !0;
      }
    }, async function() {
      d = await dF();
    }();
    const V = (t) => {
      if (!d)
        return void async function() {
          for (; !d; )
            await new Promise((I) => setTimeout(I, 0));
        }().then(() => {
          V(t);
        });
      Z(t);
      const R = d._malloc(3 * t.data.vertexCount * 4), i = d._malloc(4 * t.data.vertexCount * 4), s = d._malloc(3 * t.data.vertexCount * 4), J = d._malloc(4 * t.data.vertexCount), c = d._malloc(t.data.vertexCount), N = d._malloc(8 * t.data.vertexCount * 4), o = d._malloc(3 * t.data.vertexCount * 4), X = d._malloc(4 * t.data.vertexCount * 4), G = d._malloc(3 * t.data.vertexCount * 4);
      d.HEAPF32.set(t.data.positions, R / 4), d.HEAPF32.set(t.data.rotations, i / 4), d.HEAPF32.set(t.data.scales, s / 4), d.HEAPU8.set(t.data.colors, J), d.HEAPU8.set(t.data.selection, c), d._pack(t.selected, t.data.vertexCount, R, i, s, J, c, N, o, X, G);
      const E = new Uint32Array(d.HEAPU32.buffer, N, 8 * t.data.vertexCount), Y = new Float32Array(d.HEAPF32.buffer, o, 3 * t.data.vertexCount), x = new Float32Array(d.HEAPF32.buffer, X, 4 * t.data.vertexCount), v = new Float32Array(d.HEAPF32.buffer, G, 3 * t.data.vertexCount), D = this._splatIndices.get(t), p = this._offsets.get(t);
      for (let I = 0; I < t.data.vertexCount; I++)
        this._transformIndices[p + I] = D;
      this._data.set(E, 8 * p), this._positions.set(Y, 3 * p), this._rotations.set(x, 4 * p), this._scales.set(v, 3 * p), d._free(R), d._free(i), d._free(s), d._free(J), d._free(c), d._free(N), d._free(o), d._free(X), d._free(G), this.dataChanged = !0;
    }, B = (t) => {
      if ((t.positionChanged || t.rotationChanged || t.scaleChanged || t.selectedChanged) && Z(t), !t.data.changed || t.data.detached)
        return;
      const R = { position: new Float32Array(t.position.flat()), rotation: new Float32Array(t.rotation.flat()), scale: new Float32Array(t.scale.flat()), selected: t.selected, vertexCount: t.data.vertexCount, positions: t.data.positions, rotations: t.data.rotations, scales: t.data.scales, colors: t.data.colors, selection: t.data.selection, offset: this._offsets.get(t) };
      this._worker.postMessage({ splat: R }, [R.position.buffer, R.rotation.buffer, R.scale.buffer, R.positions.buffer, R.rotations.buffer, R.scales.buffer, R.colors.buffer, R.selection.buffer]), this._updating.add(t), t.data.detached = !0;
    };
    this.getSplat = (t) => {
      let R = null;
      for (const [i, s] of this._offsets) {
        if (!(t >= s))
          break;
        R = i;
      }
      return R;
    }, this.getLocalIndex = (t, R) => R - this._offsets.get(t), this.markDirty = (t) => {
      this._dirty.add(t);
    }, this.rebuild = () => {
      for (const t of this._dirty)
        B(t);
      this._dirty.clear();
    }, this.dispose = () => {
      this._worker.terminate();
    };
    for (const t of this._splatIndices.keys())
      V(t);
  }
  get offsets() {
    return this._offsets;
  }
  get data() {
    return this._data;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  get transforms() {
    return this._transforms;
  }
  get transformsWidth() {
    return this._transformsWidth;
  }
  get transformsHeight() {
    return this._transformsHeight;
  }
  get transformIndices() {
    return this._transformIndices;
  }
  get transformIndicesWidth() {
    return this._transformIndicesWidth;
  }
  get transformIndicesHeight() {
    return this._transformIndicesHeight;
  }
  get positions() {
    return this._positions;
  }
  get rotations() {
    return this._rotations;
  }
  get scales() {
    return this._scales;
  }
  get vertexCount() {
    return this._vertexCount;
  }
  get needsRebuild() {
    return this._dirty.size > 0;
  }
  get updating() {
    return this._updating.size > 0;
  }
}
class XU {
  constructor(U = 0, l = 0, F = 0, Q = 255) {
    this.r = U, this.g = l, this.b = F, this.a = Q;
  }
  flat() {
    return [this.r, this.g, this.b, this.a];
  }
  flatNorm() {
    return [this.r / 255, this.g / 255, this.b / 255, this.a / 255];
  }
  toHexString() {
    return "#" + this.flat().map((U) => U.toString(16).padStart(2, "0")).join("");
  }
  toString() {
    return `[${this.flat().join(", ")}]`;
  }
}
class SU extends QF {
  constructor(U, l) {
    super(U, l), this._outlineThickness = 10, this._outlineColor = new XU(255, 165, 0, 255), this._renderData = null, this._depthIndex = new Uint32Array(), this._chunks = null, this._splatTexture = null;
    const F = U.canvas, Q = U.gl;
    let Z, d, V, B, t, R, i, s, J, c, N, o, X, G, E, Y;
    this._resize = () => {
      this._camera && (this._camera.data.setSize(F.width, F.height), this._camera.update(), d = Q.getUniformLocation(this.program, "projection"), Q.uniformMatrix4fv(d, !1, this._camera.data.projectionMatrix.buffer), V = Q.getUniformLocation(this.program, "viewport"), Q.uniform2fv(V, new Float32Array([F.width, F.height])));
    };
    const x = () => {
      Z = new lF(), Z.onmessage = (I) => {
        if (I.data.depthIndex) {
          const { depthIndex: u, chunks: q } = I.data;
          this._depthIndex = u, this._chunks = q, Q.bindBuffer(Q.ARRAY_BUFFER, Y), Q.bufferData(Q.ARRAY_BUFFER, u, Q.STATIC_DRAW);
        }
      };
    };
    this._initialize = () => {
      if (this._scene && this._camera) {
        this._resize(), this._scene.addEventListener("objectAdded", v), this._scene.addEventListener("objectRemoved", D);
        for (const I of this._scene.objects)
          I instanceof tU && I.addEventListener("objectChanged", p);
        this._renderData = new BF(this._scene), B = Q.getUniformLocation(this.program, "focal"), Q.uniform2fv(B, new Float32Array([this._camera.data.fx, this._camera.data.fy])), t = Q.getUniformLocation(this.program, "view"), Q.uniformMatrix4fv(t, !1, this._camera.data.viewMatrix.buffer), J = Q.getUniformLocation(this.program, "outlineThickness"), Q.uniform1f(J, this.outlineThickness), c = Q.getUniformLocation(this.program, "outlineColor"), Q.uniform4fv(c, new Float32Array(this.outlineColor.flatNorm())), this._splatTexture = Q.createTexture(), R = Q.getUniformLocation(this.program, "u_texture"), Q.uniform1i(R, 0), X = Q.createTexture(), i = Q.getUniformLocation(this.program, "u_transforms"), Q.uniform1i(i, 1), G = Q.createTexture(), s = Q.getUniformLocation(this.program, "u_transformIndices"), Q.uniform1i(s, 2), E = Q.createBuffer(), Q.bindBuffer(Q.ARRAY_BUFFER, E), Q.bufferData(Q.ARRAY_BUFFER, new Float32Array([-2, -2, 2, -2, 2, 2, -2, 2]), Q.STATIC_DRAW), N = Q.getAttribLocation(this.program, "position"), Q.enableVertexAttribArray(N), Q.vertexAttribPointer(N, 2, Q.FLOAT, !1, 0, 0), Y = Q.createBuffer(), o = Q.getAttribLocation(this.program, "index"), Q.enableVertexAttribArray(o), Q.bindBuffer(Q.ARRAY_BUFFER, Y), x();
      } else
        console.error("Cannot render without scene and camera");
    };
    const v = (I) => {
      const u = I;
      u.object instanceof tU && u.object.addEventListener("objectChanged", p), this.dispose();
    }, D = (I) => {
      const u = I;
      u.object instanceof tU && u.object.removeEventListener("objectChanged", p), this.dispose();
    }, p = (I) => {
      const u = I;
      u.object instanceof tU && this._renderData && this._renderData.markDirty(u.object);
    };
    this._render = () => {
      if (this._scene && this._camera && this.renderData) {
        if (this.renderData.needsRebuild && this.renderData.rebuild(), this.renderData.dataChanged || this.renderData.transformsChanged) {
          this.renderData.dataChanged && (Q.activeTexture(Q.TEXTURE0), Q.bindTexture(Q.TEXTURE_2D, this.splatTexture), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_S, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_T, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MIN_FILTER, Q.NEAREST), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MAG_FILTER, Q.NEAREST), Q.texImage2D(Q.TEXTURE_2D, 0, Q.RGBA32UI, this.renderData.width, this.renderData.height, 0, Q.RGBA_INTEGER, Q.UNSIGNED_INT, this.renderData.data)), this.renderData.transformsChanged && (Q.activeTexture(Q.TEXTURE1), Q.bindTexture(Q.TEXTURE_2D, X), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_S, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_T, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MIN_FILTER, Q.NEAREST), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MAG_FILTER, Q.NEAREST), Q.texImage2D(Q.TEXTURE_2D, 0, Q.RGBA32F, this.renderData.transformsWidth, this.renderData.transformsHeight, 0, Q.RGBA, Q.FLOAT, this.renderData.transforms), Q.activeTexture(Q.TEXTURE2), Q.bindTexture(Q.TEXTURE_2D, G), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_S, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_WRAP_T, Q.CLAMP_TO_EDGE), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MIN_FILTER, Q.NEAREST), Q.texParameteri(Q.TEXTURE_2D, Q.TEXTURE_MAG_FILTER, Q.NEAREST), Q.texImage2D(Q.TEXTURE_2D, 0, Q.R32UI, this.renderData.transformIndicesWidth, this.renderData.transformIndicesHeight, 0, Q.RED_INTEGER, Q.UNSIGNED_INT, this.renderData.transformIndices));
          const I = new Float32Array(this.renderData.positions.slice().buffer), u = new Float32Array(this.renderData.transforms.slice().buffer), q = new Uint32Array(this.renderData.transformIndices.slice().buffer);
          Z.postMessage({ sortData: { positions: I, transforms: u, transformIndices: q, vertexCount: this.renderData.vertexCount } }, [I.buffer, u.buffer, q.buffer]), this.renderData.dataChanged = !1, this.renderData.transformsChanged = !1;
        }
        this._camera.update(), Z.postMessage({ viewProj: this._camera.data.viewProj.buffer }), Q.viewport(0, 0, F.width, F.height), Q.clearColor(0, 0, 0, 0), Q.clear(Q.COLOR_BUFFER_BIT), Q.disable(Q.DEPTH_TEST), Q.enable(Q.BLEND), Q.blendFuncSeparate(Q.ONE_MINUS_DST_ALPHA, Q.ONE, Q.ONE_MINUS_DST_ALPHA, Q.ONE), Q.blendEquationSeparate(Q.FUNC_ADD, Q.FUNC_ADD), Q.uniformMatrix4fv(d, !1, this._camera.data.projectionMatrix.buffer), Q.uniformMatrix4fv(t, !1, this._camera.data.viewMatrix.buffer), Q.bindBuffer(Q.ARRAY_BUFFER, E), Q.vertexAttribPointer(N, 2, Q.FLOAT, !1, 0, 0), Q.bindBuffer(Q.ARRAY_BUFFER, Y), Q.bufferData(Q.ARRAY_BUFFER, this.depthIndex, Q.STATIC_DRAW), Q.vertexAttribIPointer(o, 1, Q.INT, 0, 0), Q.vertexAttribDivisor(o, 1), Q.drawArraysInstanced(Q.TRIANGLE_FAN, 0, 4, this.renderData.vertexCount);
      } else
        console.error("Cannot render without scene and camera");
    }, this._dispose = () => {
      if (this._scene && this._camera && this.renderData) {
        this._scene.removeEventListener("objectAdded", v), this._scene.removeEventListener("objectRemoved", D);
        for (const I of this._scene.objects)
          I instanceof tU && I.removeEventListener("objectChanged", p);
        Z.terminate(), this.renderData.dispose(), Q.deleteTexture(this.splatTexture), Q.deleteTexture(X), Q.deleteTexture(G), Q.deleteBuffer(Y), Q.deleteBuffer(E);
      } else
        console.error("Cannot dispose without scene and camera");
    }, this._setOutlineThickness = (I) => {
      this._outlineThickness = I, this._initialized && Q.uniform1f(J, I);
    }, this._setOutlineColor = (I) => {
      this._outlineColor = I, this._initialized && Q.uniform4fv(c, new Float32Array(I.flatNorm()));
    };
  }
  get renderData() {
    return this._renderData;
  }
  get depthIndex() {
    return this._depthIndex;
  }
  get chunks() {
    return this._chunks;
  }
  get splatTexture() {
    return this._splatTexture;
  }
  get outlineThickness() {
    return this._outlineThickness;
  }
  set outlineThickness(U) {
    this._setOutlineThickness(U);
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(U) {
    this._setOutlineColor(U);
  }
  _getVertexSource() {
    return `#version 300 es
precision highp float;
precision highp int;

uniform highp usampler2D u_texture;
uniform highp sampler2D u_transforms;
uniform highp usampler2D u_transformIndices;
uniform mat4 projection, view;
uniform vec2 focal;
uniform vec2 viewport;

uniform bool useDepthFade;
uniform float depthFade;

in vec2 position;
in int index;

out vec4 vColor;
out vec2 vPosition;
out float vSize;
out float vSelected;

void main () {
    uvec4 cen = texelFetch(u_texture, ivec2((uint(index) & 0x3ffu) << 1, uint(index) >> 10), 0);
    float selected = float((cen.w >> 24) & 0xffu);

    uint transformIndex = texelFetch(u_transformIndices, ivec2(uint(index) & 0x3ffu, uint(index) >> 10), 0).x;
    mat4 transform = mat4(
        texelFetch(u_transforms, ivec2(0, transformIndex), 0),
        texelFetch(u_transforms, ivec2(1, transformIndex), 0),
        texelFetch(u_transforms, ivec2(2, transformIndex), 0),
        texelFetch(u_transforms, ivec2(3, transformIndex), 0)
    );

    if (selected < 0.5) {
        selected = texelFetch(u_transforms, ivec2(4, transformIndex), 0).x;
    }

    mat4 viewTransform = view * transform;

    vec4 cam = viewTransform * vec4(uintBitsToFloat(cen.xyz), 1);
    vec4 pos2d = projection * cam;

    float clip = 1.2 * pos2d.w;
    if (pos2d.z < -pos2d.w || pos2d.z > pos2d.w || pos2d.x < -clip || pos2d.x > clip || pos2d.y < -clip || pos2d.y > clip) {
        gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
        return;
    }

    uvec4 cov = texelFetch(u_texture, ivec2(((uint(index) & 0x3ffu) << 1) | 1u, uint(index) >> 10), 0);
    vec2 u1 = unpackHalf2x16(cov.x), u2 = unpackHalf2x16(cov.y), u3 = unpackHalf2x16(cov.z);
    mat3 Vrk = mat3(u1.x, u1.y, u2.x, u1.y, u2.y, u3.x, u2.x, u3.x, u3.y);

    mat3 J = mat3(
        focal.x / cam.z, 0., -(focal.x * cam.x) / (cam.z * cam.z), 
        0., -focal.y / cam.z, (focal.y * cam.y) / (cam.z * cam.z), 
        0., 0., 0.
    );

    mat3 T = transpose(mat3(viewTransform)) * J;
    mat3 cov2d = transpose(T) * Vrk * T;

    float mid = (cov2d[0][0] + cov2d[1][1]) / 2.0;
    float radius = length(vec2((cov2d[0][0] - cov2d[1][1]) / 2.0, cov2d[0][1]));
    float lambda1 = mid + radius, lambda2 = mid - radius;

    if (lambda2 < 0.0) return;
    vec2 diagonalVector = normalize(vec2(cov2d[0][1], lambda1 - cov2d[0][0]));
    vec2 majorAxis = min(sqrt(2.0 * lambda1), 1024.0) * diagonalVector;
    vec2 minorAxis = min(sqrt(2.0 * lambda2), 1024.0) * vec2(diagonalVector.y, -diagonalVector.x);

    vColor = vec4((cov.w) & 0xffu, (cov.w >> 8) & 0xffu, (cov.w >> 16) & 0xffu, (cov.w >> 24) & 0xffu) / 255.0;
    vPosition = position;
    vSize = length(majorAxis);
    vSelected = selected;

    float scalingFactor = 1.0;

    if (useDepthFade) {
        float depthNorm = (pos2d.z / pos2d.w + 1.0) / 2.0;
        float near = 0.1; float far = 100.0;
        float normalizedDepth = (2.0 * near) / (far + near - depthNorm * (far - near));
        float start = max(normalizedDepth - 0.1, 0.0);
        float end = min(normalizedDepth + 0.1, 1.0);
        scalingFactor = clamp((depthFade - start) / (end - start), 0.0, 1.0);
    }

    vec2 vCenter = vec2(pos2d) / pos2d.w;
    gl_Position = vec4(
        vCenter 
        + position.x * majorAxis * scalingFactor / viewport
        + position.y * minorAxis * scalingFactor / viewport, 0.0, 1.0);
}
`;
  }
  _getFragmentSource() {
    return `#version 300 es
precision highp float;

uniform float outlineThickness;
uniform vec4 outlineColor;

in vec4 vColor;
in vec2 vPosition;
in float vSize;
in float vSelected;

out vec4 fragColor;

void main () {
    float A = -dot(vPosition, vPosition);

    if (A < -4.0) discard;

    if (vSelected < 0.5) {
        float B = exp(A) * vColor.a;
        fragColor = vec4(B * vColor.rgb, B);
        return;
    }

    float outlineThreshold = -4.0 + (outlineThickness / vSize);

    if (A < outlineThreshold) {
        fragColor = outlineColor;
    } 
    else {
        float B = exp(A) * vColor.a;
        fragColor = vec4(B * vColor.rgb, B);
    }
}
`;
  }
}
class VF {
  constructor(U = 1) {
    let l, F, Q, Z, d = 0, V = !1;
    this.initialize = (B) => {
      if (!(B instanceof SU))
        throw new Error("FadeInPass requires a RenderProgram");
      d = B.started ? 1 : 0, V = !0, l = B, F = B.renderer.gl, Q = F.getUniformLocation(l.program, "useDepthFade"), F.uniform1i(Q, 1), Z = F.getUniformLocation(l.program, "depthFade"), F.uniform1f(Z, d);
    }, this.render = () => {
      var B;
      V && !(!((B = l.renderData) === null || B === void 0) && B.updating) && (F.useProgram(l.program), d = Math.min(d + 0.01 * U, 1), d >= 1 && (V = !1, F.uniform1i(Q, 0)), F.uniform1f(Z, d));
    };
  }
  dispose() {
  }
}
class ZF {
  constructor(U = null, l = null) {
    this._backgroundColor = new XU();
    const F = U || document.createElement("canvas");
    U || (F.style.display = "block", F.style.boxSizing = "border-box", F.style.width = "100%", F.style.height = "100%", F.style.margin = "0", F.style.padding = "0", document.body.appendChild(F)), F.style.background = this._backgroundColor.toHexString(), this._canvas = F, this._gl = F.getContext("webgl2", { antialias: !1 });
    const Q = l || [];
    l || Q.push(new VF()), this._renderProgram = new SU(this, Q);
    const Z = [this._renderProgram];
    this.resize = () => {
      const d = F.clientWidth, V = F.clientHeight;
      F.width === d && F.height === V || this.setSize(d, V);
    }, this.setSize = (d, V) => {
      F.width = d, F.height = V, this._gl.viewport(0, 0, F.width, F.height);
      for (const B of Z)
        B.resize();
    }, this.render = (d, V) => {
      for (const B of Z)
        B.render(d, V);
    }, this.dispose = () => {
      for (const d of Z)
        d.dispose();
    }, this.addProgram = (d) => {
      Z.push(d);
    }, this.removeProgram = (d) => {
      const V = Z.indexOf(d);
      if (V < 0)
        throw new Error("Program not found");
      Z.splice(V, 1);
    }, this.resize();
  }
  get canvas() {
    return this._canvas;
  }
  get gl() {
    return this._gl;
  }
  get renderProgram() {
    return this._renderProgram;
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(U) {
    this._backgroundColor = U, this._canvas.style.background = U.toHexString();
  }
}
class nF {
  constructor(U, l, F = 0.5, Q = 0.5, Z = 5, d = !0, V = new S()) {
    this.minAngle = -90, this.maxAngle = 90, this.minZoom = 0.1, this.maxZoom = 30, this.orbitSpeed = 1, this.panSpeed = 1, this.zoomSpeed = 1, this.dampening = 0.12, this.setCameraTarget = () => {
    };
    let B = V.clone(), t = B.clone(), R = F, i = Q, s = Z, J = !1, c = !1, N = 0, o = 0, X = 0;
    const G = {};
    let E = !1;
    U.addEventListener("objectChanged", () => {
      if (E)
        return;
      const a = U.rotation.toEuler();
      R = -a.y, i = -a.x;
      const k = U.position.x - s * Math.sin(R) * Math.cos(i), T = U.position.y + s * Math.sin(i), M = U.position.z + s * Math.cos(R) * Math.cos(i);
      t = new S(k, T, M);
    }), this.setCameraTarget = (a) => {
      const k = a.x - U.position.x, T = a.y - U.position.y, M = a.z - U.position.z;
      s = Math.sqrt(k * k + T * T + M * M), i = Math.atan2(T, Math.sqrt(k * k + M * M)), R = -Math.atan2(k, M), t = new S(a.x, a.y, a.z);
    };
    const Y = () => 0.1 + 0.9 * (s - this.minZoom) / (this.maxZoom - this.minZoom), x = (a) => {
      G[a.code] = !0, a.code === "ArrowUp" && (G.KeyW = !0), a.code === "ArrowDown" && (G.KeyS = !0), a.code === "ArrowLeft" && (G.KeyA = !0), a.code === "ArrowRight" && (G.KeyD = !0);
    }, v = (a) => {
      G[a.code] = !1, a.code === "ArrowUp" && (G.KeyW = !1), a.code === "ArrowDown" && (G.KeyS = !1), a.code === "ArrowLeft" && (G.KeyA = !1), a.code === "ArrowRight" && (G.KeyD = !1);
    }, D = (a) => {
      j(a), J = !0, c = a.button === 2, o = a.clientX, X = a.clientY, window.addEventListener("mouseup", p);
    }, p = (a) => {
      j(a), J = !1, c = !1, window.removeEventListener("mouseup", p);
    }, I = (a) => {
      if (j(a), !J || !U)
        return;
      const k = a.clientX - o, T = a.clientY - X;
      if (c) {
        const M = Y(), UU = -k * this.panSpeed * 0.01 * M, VU = -T * this.panSpeed * 0.01 * M, O = dU.RotationFromQuaternion(U.rotation).buffer, $ = new S(O[0], O[3], O[6]), f = new S(O[1], O[4], O[7]);
        t = t.add($.multiply(UU)), t = t.add(f.multiply(VU));
      } else
        R -= k * this.orbitSpeed * 3e-3, i += T * this.orbitSpeed * 3e-3, i = Math.min(Math.max(i, this.minAngle * Math.PI / 180), this.maxAngle * Math.PI / 180);
      o = a.clientX, X = a.clientY;
    }, u = (a) => {
      j(a);
      const k = Y();
      s += a.deltaY * this.zoomSpeed * 0.025 * k, s = Math.min(Math.max(s, this.minZoom), this.maxZoom);
    }, q = (a) => {
      if (j(a), a.touches.length === 1)
        J = !0, c = !1, o = a.touches[0].clientX, X = a.touches[0].clientY, N = 0;
      else if (a.touches.length === 2) {
        J = !0, c = !0, o = (a.touches[0].clientX + a.touches[1].clientX) / 2, X = (a.touches[0].clientY + a.touches[1].clientY) / 2;
        const k = a.touches[0].clientX - a.touches[1].clientX, T = a.touches[0].clientY - a.touches[1].clientY;
        N = Math.sqrt(k * k + T * T);
      }
    }, ZU = (a) => {
      j(a), J = !1, c = !1;
    }, RU = (a) => {
      if (j(a), J && U)
        if (c) {
          const k = Y(), T = a.touches[0].clientX - a.touches[1].clientX, M = a.touches[0].clientY - a.touches[1].clientY, UU = Math.sqrt(T * T + M * M);
          s += (N - UU) * this.zoomSpeed * 0.1 * k, s = Math.min(Math.max(s, this.minZoom), this.maxZoom), N = UU;
          const VU = (a.touches[0].clientX + a.touches[1].clientX) / 2, O = (a.touches[0].clientY + a.touches[1].clientY) / 2, $ = VU - o, f = O - X, FU = dU.RotationFromQuaternion(U.rotation).buffer, lU = new S(FU[0], FU[3], FU[6]), sU = new S(FU[1], FU[4], FU[7]);
          t = t.add(lU.multiply(-$ * this.panSpeed * 0.025 * k)), t = t.add(sU.multiply(-f * this.panSpeed * 0.025 * k)), o = VU, X = O;
        } else {
          const k = a.touches[0].clientX - o, T = a.touches[0].clientY - X;
          R -= k * this.orbitSpeed * 3e-3, i += T * this.orbitSpeed * 3e-3, i = Math.min(Math.max(i, this.minAngle * Math.PI / 180), this.maxAngle * Math.PI / 180), o = a.touches[0].clientX, X = a.touches[0].clientY;
        }
    }, nU = (a, k, T) => (1 - T) * a + T * k;
    this.update = () => {
      E = !0, F = nU(F, R, this.dampening), Q = nU(Q, i, this.dampening), Z = nU(Z, s, this.dampening), B = B.lerp(t, this.dampening);
      const a = B.x + Z * Math.sin(F) * Math.cos(Q), k = B.y - Z * Math.sin(Q), T = B.z - Z * Math.cos(F) * Math.cos(Q);
      U.position = new S(a, k, T);
      const M = B.subtract(U.position).normalize(), UU = Math.asin(-M.y), VU = Math.atan2(M.x, M.z);
      U.rotation = K.FromEuler(new S(UU, VU, 0));
      const O = 0.025, $ = 0.01, f = dU.RotationFromQuaternion(U.rotation).buffer, FU = new S(-f[2], -f[5], -f[8]), lU = new S(f[0], f[3], f[6]);
      G.KeyS && (t = t.add(FU.multiply(O))), G.KeyW && (t = t.subtract(FU.multiply(O))), G.KeyA && (t = t.subtract(lU.multiply(O))), G.KeyD && (t = t.add(lU.multiply(O))), G.KeyE && (R += $), G.KeyQ && (R -= $), G.KeyR && (i += $), G.KeyF && (i -= $), E = !1;
    };
    const j = (a) => {
      a.preventDefault(), a.stopPropagation();
    };
    this.dispose = () => {
      l.removeEventListener("dragenter", j), l.removeEventListener("dragover", j), l.removeEventListener("dragleave", j), l.removeEventListener("contextmenu", j), l.removeEventListener("mousedown", D), l.removeEventListener("mousemove", I), l.removeEventListener("wheel", u), l.removeEventListener("touchstart", q), l.removeEventListener("touchend", ZU), l.removeEventListener("touchmove", RU), d && (window.removeEventListener("keydown", x), window.removeEventListener("keyup", v));
    }, d && (window.addEventListener("keydown", x), window.addEventListener("keyup", v)), l.addEventListener("dragenter", j), l.addEventListener("dragover", j), l.addEventListener("dragleave", j), l.addEventListener("contextmenu", j), l.addEventListener("mousedown", D), l.addEventListener("mousemove", I), l.addEventListener("wheel", u), l.addEventListener("touchstart", q), l.addEventListener("touchend", ZU), l.addEventListener("touchmove", RU), this.update();
  }
}
const {
  SvelteComponent: AF,
  binding_callbacks: RF,
  detach: eF,
  element: WF,
  init: cF,
  insert: aF,
  noop: bU,
  safe_not_equal: iF
} = window.__gradio__svelte__internal, { onMount: hF } = window.__gradio__svelte__internal;
function sF(r) {
  let U;
  return {
    c() {
      U = WF("canvas");
    },
    m(l, F) {
      aF(l, U, F), r[9](U);
    },
    p: bU,
    i: bU,
    o: bU,
    d(l) {
      l && eF(U), r[9](null);
    }
  };
}
function IF(r, U) {
  return r ?? U();
}
function JF(r, U, l) {
  let F, Q, { value: Z } = U, { zoom_speed: d } = U, { pan_speed: V } = U, { resolved_url: B = void 0 } = U, t, R, i, s, J = null, c, N = !1, o = null;
  function X() {
    if (o !== null && (cancelAnimationFrame(o), o = null), J !== null && (J.dispose(), J = null), i = new qU(), s = new _U(), J = new ZF(R), c = new nF(s, R), c.zoomSpeed = d, c.panSpeed = V, !Z)
      return;
    let E = !1;
    const Y = async () => {
      if (E) {
        console.error("Already loading");
        return;
      }
      if (!B)
        throw new Error("No resolved URL");
      if (E = !0, B.endsWith(".ply"))
        await UF.LoadAsync(B, i, void 0);
      else if (B.endsWith(".splat"))
        await $U.LoadAsync(B, i, void 0);
      else
        throw new Error("Unsupported file type");
      E = !1;
    }, x = () => {
      if (J) {
        if (E) {
          o = requestAnimationFrame(x);
          return;
        }
        c.update(), J.render(i, s), o = requestAnimationFrame(x);
      }
    };
    Y(), o = requestAnimationFrame(x);
  }
  hF(() => (Z != null && X(), l(6, N = !0), () => {
    J && J.dispose();
  }));
  function G(E) {
    RF[E ? "unshift" : "push"](() => {
      R = E, l(0, R);
    });
  }
  return r.$$set = (E) => {
    "value" in E && l(2, Z = E.value), "zoom_speed" in E && l(3, d = E.zoom_speed), "pan_speed" in E && l(4, V = E.pan_speed), "resolved_url" in E && l(1, B = E.resolved_url);
  }, r.$$.update = () => {
    if (r.$$.dirty & /*value*/
    4 && l(8, F = Z.url), r.$$.dirty & /*url, latest_url*/
    288 && (l(1, B = F), F)) {
      l(5, t = F);
      const E = F;
      KU(F).then((Y) => {
        t === E ? l(1, B = IF(Y, () => {
        })) : Y && URL.revokeObjectURL(Y);
      });
    }
    r.$$.dirty & /*value*/
    4 && l(7, { path: Q } = Z || { path: void 0 }, Q), r.$$.dirty & /*canvas, mounted, path*/
    193 && R && N && Q && X();
  }, [
    R,
    B,
    Z,
    d,
    V,
    t,
    N,
    Q,
    F,
    G
  ];
}
class oF extends AF {
  constructor(U) {
    super(), cF(this, U, JF, sF, iF, {
      value: 2,
      zoom_speed: 3,
      pan_speed: 4,
      resolved_url: 1
    });
  }
}
export {
  oF as default
};
