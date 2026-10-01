// Small wrapper so the rest of the app doesn't depend on localStorage directly.
export function createStorage(key, backend = window.localStorage) {
  return {
    read(fallback) { try { return JSON.parse(backend.getItem(key)) ?? fallback; } catch { return fallback; } },
    write(value) { try { backend.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } },
  };
}
