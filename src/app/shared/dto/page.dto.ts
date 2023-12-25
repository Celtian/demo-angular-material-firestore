export type PageAction = 'list' | 'create' | 'edit' | 'detail';

export type PageSection = 'posts' | 'not-found' | 'login' | 'register';

export interface PageOptions {
  description: string;
  section: PageSection[];
  action?: PageAction[];
  identifier?: 'id';
}
