type dirType = 'X' | 'Y';

const resolveTransform = {
  getTranslate(elem: HTMLElement, dir?: dirType): undefined | number | number[] {
    const matrix = this.getTransformVal(elem);
    const matrixArr = this.convertMatrixToArray(matrix);
    const yVal = parseInt(matrixArr[5], 10);
    const xVal = parseInt(matrixArr[4], 10);

    if (dir === 'Y') {
      return yVal;
    }
    if (dir === 'X') {
      return xVal;
    }
    if (dir === undefined) {
      return [xVal, yVal];
    }
    return undefined;
  },
  getScale(elem: HTMLElement, dir?: dirType) {
    const matrix = this.getTransformVal(elem);
    const matrixArr = this.convertMatrixToArray(matrix);
    const yVal = parseFloat(matrixArr[3]);
    const xVal = parseFloat(matrixArr[0]);

    if (dir === 'Y') {
      return yVal;
    }
    if (dir === 'X') {
      return xVal;
    }
    if (dir === undefined) {
      return [xVal, yVal];
    }
    return undefined;
  },
  getRotate(elem: HTMLElement): number {
    // let degVal;
    let val;
    const matrix = this.getTransformVal(elem);
    const matrixArr = this.convertMatrixToArray(matrix);

    // degVal = [
    //   this.radiansToDeg(Math.acos(matrixArr[0])),
    //   this.radiansToDeg(Math.asin(matrixArr[1])),
    //   this.radiansToDeg(Math.asin(matrixArr[2]) * -1),
    //   this.radiansToDeg(Math.acos(matrixArr[3])),
    // ];

    val = this.radiansToDeg(Math.atan2(matrixArr[1], matrixArr[0]));
    if (val < 0) {
      val = 360 + val;
    }
    return val;
  },
  get3DRotate(elem: HTMLElement, dir?: dirType) {
    // let degVal;
    let val = 0;
    const matrix = this.getTransformVal(elem);
    const matrixArr = this.convertMatrixToArray(matrix);

    if (dir === 'Y') {
      // degVal = [
      //   this.radiansToDeg(Math.acos(matrixArr[0])),
      //   this.radiansToDeg(Math.asin(matrixArr[2]) * -1),
      //   this.radiansToDeg(Math.asin(matrixArr[8])),
      //   this.radiansToDeg(Math.acos(matrixArr[10])),
      // ];
      val = this.radiansToDeg(Math.atan2(matrixArr[2], matrixArr[0]) * -1);
    } else if (dir === 'X') {
      // degVal = [
      //   this.radiansToDeg(Math.acos(matrixArr[5])),
      //   this.radiansToDeg(Math.asin(matrixArr[6])),
      //   this.radiansToDeg(Math.asin(matrixArr[9]) * -1),
      //   this.radiansToDeg(Math.acos(matrixArr[10])),
      // ];
      val = this.radiansToDeg(Math.atan2(matrixArr[6], matrixArr[5]));
    }
    if (val < 0) {
      val = 360 + val;
    }
    return val;
  },
  convertMatrixToArray(str: string): any[] {
    // Test for 2D or 3D matrix
    const reg = /matrix3d/;
    const match = str.match(reg);
    let val;
    if (match !== null) {
      val = str.replace('matrix3d(', '').replace(')', '');
    } else {
      val = str.replace('matrix(', '').replace(')', '');
    }
    val = val.split(', ');
    return val;
  },
  getTransformVal(elem: HTMLElement) {
    const transform = window.getComputedStyle(elem).getPropertyValue('transform');
    if (transform === 'none') {
      return 'matrix(0, 0, 0, 0, 0, 0, 0, 0)';
    }
    return transform;
  },
  radiansToDeg(radians: number): number {
    let deg = (radians * 180) / Math.PI;
    deg = parseInt(deg.toFixed(0), 10);
    return deg;
  },
};

export default resolveTransform;
