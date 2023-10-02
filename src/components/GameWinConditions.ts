export default function checkForWin(
  row: number,
  col: number,
  redBallPositions: [number, number][],
  yellowBallPositions: [number, number][],
  isRedPlayer: boolean
): boolean | string {
  const colorToCheck = isRedPlayer ? "red" : "yellow";
  const positionsToCheck = isRedPlayer ? redBallPositions : yellowBallPositions;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
  ];

  for (const [dx, dy] of directions) {
    let consecutiveCount = 1;

    for (let dir = -1; dir <= 1; dir += 2) {
      for (let i = 1; i < 4; i++) {
        const newRow = row + dir * i * dx;
        const newCol = col + dir * i * dy;

        if (
          positionsToCheck.some(([r, c]) => r === newRow && c === newCol) &&
          colorToCheck === (isRedPlayer ? "red" : "yellow")
        ) {
          consecutiveCount++;

          if (consecutiveCount === 4) {
            return isRedPlayer ? "red" : "yellow";
          }
        } else {
          break;
        }
      }
    }
  }

  if (
    redBallPositions.length + yellowBallPositions.length ===
    6 * 7 // Total number of cells
  ) {
    return "draw";
  }

  return false;
}
