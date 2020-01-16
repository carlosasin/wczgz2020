import { CategoryDto } from './category.dto';
import { UserDto } from './user.dto';

export interface PostDto {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: false;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: string[];
  next: {
    id: number;
    slug: string;
    title: string;
  };
  previous: {
    id: number;
    slug: string;
    title: string;
  };
  category?: CategoryDto;
  user?: UserDto;
}
