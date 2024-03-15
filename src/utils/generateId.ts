export function generateId(): string {
  return Date.now() + Math.random().toString(16).substring(2, 4);
}