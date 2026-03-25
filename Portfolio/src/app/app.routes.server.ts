import {PrerenderFallback, RenderMode, ServerRoute} from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        {id: '1'},
        {id: '2'}
      ]
    },
    fallback: PrerenderFallback.Server, // The default if not supplied and `outputMode` is `server`
  },
  {
    path: '',
    renderMode: RenderMode.Prerender,
  }
];
