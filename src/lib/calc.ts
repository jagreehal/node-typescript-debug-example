export async function add(x: number, y: number): Promise<number> {
  // throw new Error('uncomment to throw error and then check stack');
  return Promise.resolve(x + y);
}
