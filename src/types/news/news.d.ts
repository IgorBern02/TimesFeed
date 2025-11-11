export interface NewsGridProps {
  section: string;
}

export interface Article {
  title: string;
  abstract: string;
  url: string;
  multimedia?: { url: string }[];
  byline?: string;
  published_date?: string;
}
