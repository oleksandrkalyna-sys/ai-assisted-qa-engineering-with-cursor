/**
 * Prefix absolute public paths with Vite base (e.g. GitHub Pages subpath).
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}
