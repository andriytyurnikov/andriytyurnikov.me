// Prerendering this route writes `fontscale.me.html`, and static file servers
// sniff the `.me` suffix as text/troff rather than text/html. Rendering it on
// demand keeps the Content-Type correct without renaming the route.
export const prerender = false;
