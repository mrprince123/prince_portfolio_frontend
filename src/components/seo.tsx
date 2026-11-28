import { Helmet } from "react-helmet-async";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string | string[];
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

const DEFAULT_IMAGE = "https://princesahni.com/og-images/princesahni-logo.png";
const SITE_NAME = "Prince Kumar Sahni";
const DEFAULT_AUTHOR = "Prince Kumar Sahni";
const TWITTER_HANDLE = "@PrinceKumarSahni";

export const Seo = ({
  title,
  description,
  url,
  image = DEFAULT_IMAGE,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  author = DEFAULT_AUTHOR,
  section,
  tags,
  breadcrumbs,
  schema,
  noindex = false,
}: SeoProps) => {
  const formattedKeywords = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords;

  // Build BreadcrumbList schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.path.startsWith("http")
        ? crumb.path
        : `https://princesahni.com${crumb.path.startsWith("/") ? "" : "/"}${crumb.path}`,
    })),
  } : null;

  const combinedSchemas: Array<Record<string, unknown>> = [];
  if (breadcrumbSchema) combinedSchemas.push(breadcrumbSchema);
  if (schema) {
    if (Array.isArray(schema)) {
      combinedSchemas.push(...schema);
    } else {
      combinedSchemas.push(schema);
    }
  }

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {formattedKeywords && <meta name="keywords" content={formattedKeywords} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific Open Graph */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && section && (
        <meta property="article:section" content={section} />
      )}
      {type === "article" &&
        tags &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />

      {/* Injected Structured Data (JSON-LD) */}
      {combinedSchemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            combinedSchemas.length === 1
              ? combinedSchemas[0]
              : { "@context": "https://schema.org", "@graph": combinedSchemas }
          )}
        </script>
      )}
    </Helmet>
  );
};

export default Seo;
