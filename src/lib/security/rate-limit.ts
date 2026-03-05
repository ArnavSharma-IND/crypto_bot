const requestMap = new Map<string, { count: number; timestamp: number }>();

export function applyRateLimit(key: string, limit = 30, windowMs = 60_000): boolean {
  const now = Date.now();
  const existing = requestMap.get(key);

  if (!existing || now - existing.timestamp > windowMs) {
    requestMap.set(key, { count: 1, timestamp: now });
    return true;
  }

  if (existing.count >= limit) {
    return false;
  }

  existing.count += 1;
  return true;
}
