import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { RouteDefinitionDto } from '../dto/route.dto';

export const ROUTES_I18N: RouteDefinitionDto<{
  route: string;
  title: string;
  seo: { title: string; description: string };
}> = {
  APP: {
    HOMEPAGE: {
      route: _('routes.app.homepage'),
      title: _('titles.app.homepage'),
      seo: {
        title: _('seo.app.homepage.title'),
        description: _('seo.app.homepage.description'),
      },
    },
    NOT_FOUND: {
      route: _('routes.app.not-found'),
      title: _('titles.app.not-found'),
      seo: {
        title: _('seo.app.not-found.title'),
        description: _('seo.app.not-found.description'),
      },
    },
  },
};
