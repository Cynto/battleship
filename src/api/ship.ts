const ship = (name: string, length: number) => {
  if (typeof name !== 'string' || typeof length !== 'number') {
    return 'One or more parameters are of the wrong type';
  }
  let hitArray: number[] = [];
  for (let i: number = 0; i < length; i += 1) {
    hitArray.push(1);
  }
  return {
    name,
    length,
    hitArray,
    hit(index: number) {
      hitArray[index] = 0;
    },
    isSunk() {
      if (hitArray.every((e) => e === 0)) {
        return true;
      } else return false;
    },
  };
};
export default ship;
