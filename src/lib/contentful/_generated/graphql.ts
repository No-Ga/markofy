/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: { input: any; output: any; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: { input: any; output: any; }
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordion) */
export type Accordion = Entry & _Node & {
  __typename?: 'Accordion';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AccordionLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<AccordionText>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordion) */
export type AccordionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordion) */
export type AccordionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordion) */
export type AccordionTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordion) */
export type AccordionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionCollection = {
  __typename?: 'AccordionCollection';
  items: Array<Maybe<Accordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AccordionFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionLinkingCollections = {
  __typename?: 'AccordionLinkingCollections';
  accordionRowCollection?: Maybe<AccordionRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
};


export type AccordionLinkingCollectionsAccordionRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsAccordionRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionLinkingCollectionsAccordionRowCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AccordionLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AccordionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRow = Entry & _Node & {
  __typename?: 'AccordionRow';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<AccordionRowItemsCollection>;
  linkedFrom?: Maybe<AccordionRowLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<AccordionRowText>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRowItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionRowItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRowNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRowTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/accordionRow) */
export type AccordionRowTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AccordionRowCollection = {
  __typename?: 'AccordionRowCollection';
  items: Array<Maybe<AccordionRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AccordionRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<AccordionRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AccordionRowFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  items?: InputMaybe<CfAccordionNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AccordionRowItemsCollection = {
  __typename?: 'AccordionRowItemsCollection';
  items: Array<Maybe<Accordion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum AccordionRowItemsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type AccordionRowLinkingCollections = {
  __typename?: 'AccordionRowLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AccordionRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AccordionRowLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionRowLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AccordionRowLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum AccordionRowOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type AccordionRowText = {
  __typename?: 'AccordionRowText';
  json: Scalars['JSON']['output'];
  links: AccordionRowTextLinks;
};

export type AccordionRowTextAssets = {
  __typename?: 'AccordionRowTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AccordionRowTextEntries = {
  __typename?: 'AccordionRowTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AccordionRowTextLinks = {
  __typename?: 'AccordionRowTextLinks';
  assets: AccordionRowTextAssets;
  entries: AccordionRowTextEntries;
  resources: AccordionRowTextResources;
};

export type AccordionRowTextResources = {
  __typename?: 'AccordionRowTextResources';
  block: Array<AccordionRowTextResourcesBlock>;
  hyperlink: Array<AccordionRowTextResourcesHyperlink>;
  inline: Array<AccordionRowTextResourcesInline>;
};

export type AccordionRowTextResourcesBlock = ResourceLink & {
  __typename?: 'AccordionRowTextResourcesBlock';
  sys: ResourceSys;
};

export type AccordionRowTextResourcesHyperlink = ResourceLink & {
  __typename?: 'AccordionRowTextResourcesHyperlink';
  sys: ResourceSys;
};

export type AccordionRowTextResourcesInline = ResourceLink & {
  __typename?: 'AccordionRowTextResourcesInline';
  sys: ResourceSys;
};

export type AccordionText = {
  __typename?: 'AccordionText';
  json: Scalars['JSON']['output'];
  links: AccordionTextLinks;
};

export type AccordionTextAssets = {
  __typename?: 'AccordionTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AccordionTextEntries = {
  __typename?: 'AccordionTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AccordionTextLinks = {
  __typename?: 'AccordionTextLinks';
  assets: AccordionTextAssets;
  entries: AccordionTextEntries;
  resources: AccordionTextResources;
};

export type AccordionTextResources = {
  __typename?: 'AccordionTextResources';
  block: Array<AccordionTextResourcesBlock>;
  hyperlink: Array<AccordionTextResourcesHyperlink>;
  inline: Array<AccordionTextResourcesInline>;
};

export type AccordionTextResourcesBlock = ResourceLink & {
  __typename?: 'AccordionTextResourcesBlock';
  sys: ResourceSys;
};

export type AccordionTextResourcesHyperlink = ResourceLink & {
  __typename?: 'AccordionTextResourcesHyperlink';
  sys: ResourceSys;
};

export type AccordionTextResourcesInline = ResourceLink & {
  __typename?: 'AccordionTextResourcesInline';
  sys: ResourceSys;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  campaignCollection?: Maybe<CampaignCollection>;
  contentfulImageCollection?: Maybe<ContentfulImageCollection>;
  editorialPageCollection?: Maybe<EditorialPageCollection>;
  editorialSplashCollection?: Maybe<EditorialSplashCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featureCollection?: Maybe<FeatureCollection>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  heroCollection?: Maybe<HeroCollection>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  pageCollection?: Maybe<PageCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
  splashCollection?: Maybe<SplashCollection>;
};


export type AssetLinkingCollectionsCampaignCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsContentfulImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEditorialPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEditorialSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type Block = Entry & _Node & {
  __typename?: 'Block';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  componentsCollection?: Maybe<BlockComponentsCollection>;
  content?: Maybe<BlockContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BlockLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type BlockBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type BlockComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlockComponentsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type BlockContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type BlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/block) */
export type BlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlockCollection = {
  __typename?: 'BlockCollection';
  items: Array<Maybe<Block>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockComponentsCollection = {
  __typename?: 'BlockComponentsCollection';
  items: Array<Maybe<BlockComponentsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlockComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type BlockComponentsItem = ContentRow | NavigationLink | Parametric | Splash | TextBlock;

export type BlockContent = {
  __typename?: 'BlockContent';
  json: Scalars['JSON']['output'];
  links: BlockContentLinks;
};

export type BlockContentAssets = {
  __typename?: 'BlockContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlockContentEntries = {
  __typename?: 'BlockContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlockContentLinks = {
  __typename?: 'BlockContentLinks';
  assets: BlockContentAssets;
  entries: BlockContentEntries;
  resources: BlockContentResources;
};

export type BlockContentResources = {
  __typename?: 'BlockContentResources';
  block: Array<BlockContentResourcesBlock>;
  hyperlink: Array<BlockContentResourcesHyperlink>;
  inline: Array<BlockContentResourcesInline>;
};

export type BlockContentResourcesBlock = ResourceLink & {
  __typename?: 'BlockContentResourcesBlock';
  sys: ResourceSys;
};

export type BlockContentResourcesHyperlink = ResourceLink & {
  __typename?: 'BlockContentResourcesHyperlink';
  sys: ResourceSys;
};

export type BlockContentResourcesInline = ResourceLink & {
  __typename?: 'BlockContentResourcesInline';
  sys: ResourceSys;
};

export type BlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlockFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlockLinkingCollections = {
  __typename?: 'BlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
};


export type BlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BlockLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BlockLinkingCollectionsProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockLinkingCollectionsProductPageInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlockLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BlockLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum BlockLinkingCollectionsProductPageInfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlockOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Brand banner. A series of images (brand logos) that animates from right to left infinitely. Images can be links. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/brandBanner) */
export type BrandBanner = Entry & _Node & {
  __typename?: 'BrandBanner';
  _id: Scalars['ID']['output'];
  bannerItemsCollection?: Maybe<BrandBannerBannerItemsCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<BrandBannerLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Brand banner. A series of images (brand logos) that animates from right to left infinitely. Images can be links. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/brandBanner) */
export type BrandBannerBannerItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BrandBannerBannerItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulImageFilter>;
};


/** Brand banner. A series of images (brand logos) that animates from right to left infinitely. Images can be links. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/brandBanner) */
export type BrandBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Brand banner. A series of images (brand logos) that animates from right to left infinitely. Images can be links. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/brandBanner) */
export type BrandBannerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BrandBannerBannerItemsCollection = {
  __typename?: 'BrandBannerBannerItemsCollection';
  items: Array<Maybe<ContentfulImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum BrandBannerBannerItemsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type BrandBannerCollection = {
  __typename?: 'BrandBannerCollection';
  items: Array<Maybe<BrandBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BrandBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<BrandBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BrandBannerFilter>>>;
  bannerItems?: InputMaybe<CfContentfulImageNestedFilter>;
  bannerItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BrandBannerLinkingCollections = {
  __typename?: 'BrandBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type BrandBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandBannerLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BrandBannerLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandBannerLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BrandBannerLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BrandBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BrandBannerLinkingCollectionsFooterCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BrandBannerLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum BrandBannerLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum BrandBannerOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type Campaign = Entry & _Node & {
  __typename?: 'Campaign';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  campaignBadge?: Maybe<Scalars['String']['output']>;
  campaignEnd?: Maybe<Scalars['DateTime']['output']>;
  campaignImage?: Maybe<Asset>;
  campaignLabel?: Maybe<Scalars['String']['output']>;
  campaignName?: Maybe<Scalars['String']['output']>;
  campaignProductListingImage?: Maybe<Scalars['JSON']['output']>;
  campaignStart?: Maybe<Scalars['DateTime']['output']>;
  campaignTitle?: Maybe<Scalars['String']['output']>;
  commerceData?: Maybe<Scalars['JSON']['output']>;
  commerceId?: Maybe<Scalars['String']['output']>;
  commerceName?: Maybe<Scalars['String']['output']>;
  commerceType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  featuredCollection?: Maybe<CampaignFeaturedCollection>;
  finePrint?: Maybe<Scalars['String']['output']>;
  footerBanner?: Maybe<FooterBanner>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<CampaignLinkingCollections>;
  longDescription?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  nordicsCampaignImage?: Maybe<Scalars['JSON']['output']>;
  nordicsLongDescription?: Maybe<CampaignNordicsLongDescription>;
  pageHeader?: Maybe<Scalars['String']['output']>;
  pageImage?: Maybe<Asset>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  productSelection?: Maybe<Entry>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  showBadgeForAllProductsInCampaign?: Maybe<Scalars['Boolean']['output']>;
  showCountdown?: Maybe<Scalars['Boolean']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignBadgeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignEndArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignProductListingImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignStartArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCampaignTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCommerceDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCommerceIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCommerceNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignCommerceTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignFeaturedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignFeaturedCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureFilter>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignFinePrintArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignFooterBannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterBannerFilter>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignMetaKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignNordicsCampaignImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignNordicsLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignPageHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignPageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignPageUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignProductSelectionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignShowBadgeForAllProductsInCampaignArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignShowCountdownArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Everything related to a campaign managed in one place. Excluding start page content. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/campaign) */
export type CampaignSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CampaignCollection = {
  __typename?: 'CampaignCollection';
  items: Array<Maybe<Campaign>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CampaignFeaturedCollection = {
  __typename?: 'CampaignFeaturedCollection';
  items: Array<Maybe<Feature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CampaignFeaturedCollectionOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CampaignFilter = {
  AND?: InputMaybe<Array<InputMaybe<CampaignFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CampaignFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignBadge?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_contains?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignBadge_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignBadge_not?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignEnd?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignEnd_gt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_gte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignEnd_lt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_lte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_not?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignLabel?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_contains?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignLabel_not?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignName?: InputMaybe<Scalars['String']['input']>;
  campaignName_contains?: InputMaybe<Scalars['String']['input']>;
  campaignName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignName_not?: InputMaybe<Scalars['String']['input']>;
  campaignName_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignProductListingImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignStart?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignStart_gt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_gte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignStart_lt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_lte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_not?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignTitle?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_contains?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignTitle_not?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId?: InputMaybe<Scalars['String']['input']>;
  commerceId_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceId_not?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName?: InputMaybe<Scalars['String']['input']>;
  commerceName_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName_not?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType?: InputMaybe<Scalars['String']['input']>;
  commerceType_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType_not?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featured?: InputMaybe<CfFeatureNestedFilter>;
  featuredCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finePrint?: InputMaybe<Scalars['String']['input']>;
  finePrint_contains?: InputMaybe<Scalars['String']['input']>;
  finePrint_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finePrint_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  finePrint_not?: InputMaybe<Scalars['String']['input']>;
  finePrint_not_contains?: InputMaybe<Scalars['String']['input']>;
  finePrint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerBanner?: InputMaybe<CfFooterBannerNestedFilter>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_not?: InputMaybe<Scalars['String']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nordicsCampaignImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nordicsLongDescription_contains?: InputMaybe<Scalars['String']['input']>;
  nordicsLongDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nordicsLongDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader?: InputMaybe<Scalars['String']['input']>;
  pageHeader_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeader_not?: InputMaybe<Scalars['String']['input']>;
  pageHeader_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl_not?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productSelection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showBadgeForAllProductsInCampaign?: InputMaybe<Scalars['Boolean']['input']>;
  showBadgeForAllProductsInCampaign_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showBadgeForAllProductsInCampaign_not?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CampaignLinkingCollections = {
  __typename?: 'CampaignLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featureCollection?: Maybe<FeatureCollection>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
  splashCollection?: Maybe<SplashCollection>;
};


export type CampaignLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsFeatureCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsFooterBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsHighlightRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsInspoSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CampaignLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignLinkingCollectionsSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CampaignLinkingCollectionsFeatureCollectionOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CampaignLinkingCollectionsFooterBannerCollectionOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CampaignLinkingCollectionsHighlightRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CampaignLinkingCollectionsInspoSplashCollectionOrder {
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum CampaignLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum CampaignLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CampaignLinkingCollectionsSplashCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type CampaignNordicsLongDescription = {
  __typename?: 'CampaignNordicsLongDescription';
  json: Scalars['JSON']['output'];
  links: CampaignNordicsLongDescriptionLinks;
};

export type CampaignNordicsLongDescriptionAssets = {
  __typename?: 'CampaignNordicsLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CampaignNordicsLongDescriptionEntries = {
  __typename?: 'CampaignNordicsLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CampaignNordicsLongDescriptionLinks = {
  __typename?: 'CampaignNordicsLongDescriptionLinks';
  assets: CampaignNordicsLongDescriptionAssets;
  entries: CampaignNordicsLongDescriptionEntries;
  resources: CampaignNordicsLongDescriptionResources;
};

export type CampaignNordicsLongDescriptionResources = {
  __typename?: 'CampaignNordicsLongDescriptionResources';
  block: Array<CampaignNordicsLongDescriptionResourcesBlock>;
  hyperlink: Array<CampaignNordicsLongDescriptionResourcesHyperlink>;
  inline: Array<CampaignNordicsLongDescriptionResourcesInline>;
};

export type CampaignNordicsLongDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'CampaignNordicsLongDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type CampaignNordicsLongDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'CampaignNordicsLongDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type CampaignNordicsLongDescriptionResourcesInline = ResourceLink & {
  __typename?: 'CampaignNordicsLongDescriptionResourcesInline';
  sys: ResourceSys;
};

export enum CampaignOrder {
  CampaignBadgeAsc = 'campaignBadge_ASC',
  CampaignBadgeDesc = 'campaignBadge_DESC',
  CampaignEndAsc = 'campaignEnd_ASC',
  CampaignEndDesc = 'campaignEnd_DESC',
  CampaignLabelAsc = 'campaignLabel_ASC',
  CampaignLabelDesc = 'campaignLabel_DESC',
  CampaignNameAsc = 'campaignName_ASC',
  CampaignNameDesc = 'campaignName_DESC',
  CampaignStartAsc = 'campaignStart_ASC',
  CampaignStartDesc = 'campaignStart_DESC',
  CampaignTitleAsc = 'campaignTitle_ASC',
  CampaignTitleDesc = 'campaignTitle_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PageHeaderAsc = 'pageHeader_ASC',
  PageHeaderDesc = 'pageHeader_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ShowBadgeForAllProductsInCampaignAsc = 'showBadgeForAllProductsInCampaign_ASC',
  ShowBadgeForAllProductsInCampaignDesc = 'showBadgeForAllProductsInCampaign_DESC',
  ShowCountdownAsc = 'showCountdown_ASC',
  ShowCountdownDesc = 'showCountdown_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Use this to create cards, for example for testimonials. Cards can be added to Carousels. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/card) */
export type Card = Entry & _Node & {
  __typename?: 'Card';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CardLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Use this to create cards, for example for testimonials. Cards can be added to Carousels. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this to create cards, for example for testimonials. Cards can be added to Carousels. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/card) */
export type CardNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this to create cards, for example for testimonials. Cards can be added to Carousels. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/card) */
export type CardSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this to create cards, for example for testimonials. Cards can be added to Carousels. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/card) */
export type CardTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CardLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CardLinkingCollectionsCarouselCollectionOrder {
  CarouselOnDesktopAsc = 'carouselOnDesktop_ASC',
  CarouselOnDesktopDesc = 'carouselOnDesktop_DESC',
  CarouselOnMobileAsc = 'carouselOnMobile_ASC',
  CarouselOnMobileDesc = 'carouselOnMobile_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CardOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type Carousel = Entry & _Node & {
  __typename?: 'Carousel';
  _id: Scalars['ID']['output'];
  carouselOnDesktop?: Maybe<Scalars['Boolean']['output']>;
  carouselOnMobile?: Maybe<Scalars['Boolean']['output']>;
  content?: Maybe<Text>;
  contentfulMetadata: ContentfulMetadata;
  itemsCollection?: Maybe<CarouselItemsCollection>;
  linkedFrom?: Maybe<CarouselLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselCarouselOnDesktopArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselCarouselOnMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TextFilter>;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselItemsFilter>;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create carousels like a horizontal slider with splashes or cards. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/carousel) */
export type CarouselNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CarouselCollection = {
  __typename?: 'CarouselCollection';
  items: Array<Maybe<Carousel>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselFilter>>>;
  carouselOnDesktop?: InputMaybe<Scalars['Boolean']['input']>;
  carouselOnDesktop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carouselOnDesktop_not?: InputMaybe<Scalars['Boolean']['input']>;
  carouselOnMobile?: InputMaybe<Scalars['Boolean']['input']>;
  carouselOnMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  carouselOnMobile_not?: InputMaybe<Scalars['Boolean']['input']>;
  content?: InputMaybe<CfTextNestedFilter>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  items?: InputMaybe<CfitemsMultiTypeNestedFilter>;
  itemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CarouselItemsCollection = {
  __typename?: 'CarouselItemsCollection';
  items: Array<Maybe<CarouselItemsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CarouselItemsFilter = {
  AND?: InputMaybe<Array<InputMaybe<CarouselItemsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CarouselItemsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CarouselItemsItem = Card | Splash;

export type CarouselLinkingCollections = {
  __typename?: 'CarouselLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CarouselLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CarouselLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum CarouselOrder {
  CarouselOnDesktopAsc = 'carouselOnDesktop_ASC',
  CarouselOnDesktopDesc = 'carouselOnDesktop_DESC',
  CarouselOnMobileAsc = 'carouselOnMobile_ASC',
  CarouselOnMobileDesc = 'carouselOnMobile_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRow = Entry & _Node & {
  __typename?: 'ContentRow';
  _id: Scalars['ID']['output'];
  contentCollection?: Maybe<ContentRowContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  devices?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ContentRowLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfColumns?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  type?: Maybe<Scalars['String']['output']>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentRowContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowDevicesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowNumberOfColumnsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowSpacingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Content Row for displaying Splashes in different ways.  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentRow) */
export type ContentRowTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentRowCollection = {
  __typename?: 'ContentRowCollection';
  items: Array<Maybe<ContentRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentRowContentCollection = {
  __typename?: 'ContentRowContentCollection';
  items: Array<Maybe<Splash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ContentRowContentCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type ContentRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentRowFilter>>>;
  content?: InputMaybe<CfSplashNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  devices?: InputMaybe<Scalars['String']['input']>;
  devices_contains?: InputMaybe<Scalars['String']['input']>;
  devices_exists?: InputMaybe<Scalars['Boolean']['input']>;
  devices_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  devices_not?: InputMaybe<Scalars['String']['input']>;
  devices_not_contains?: InputMaybe<Scalars['String']['input']>;
  devices_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfColumns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns_not?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  spacing?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentRowLinkingCollections = {
  __typename?: 'ContentRowLinkingCollections';
  blockCollection?: Maybe<BlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ContentRowLinkingCollectionsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentRowLinkingCollectionsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentRowLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentRowLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentRowLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentRowLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentRowLinkingCollectionsBlockCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentRowLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentRowLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ContentRowOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Use this content type as a reference for content types that needs either one or multiple images, especially when there is a use case where we want to link the image to a page with a href. One example would be the Brand Banner logos. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentfulImage) */
export type ContentfulImage = Entry & _Node & {
  __typename?: 'ContentfulImage';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  link?: Maybe<ContentfulImageLink>;
  linkedFrom?: Maybe<ContentfulImageLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Use this content type as a reference for content types that needs either one or multiple images, especially when there is a use case where we want to link the image to a page with a href. One example would be the Brand Banner logos. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentfulImage) */
export type ContentfulImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Use this content type as a reference for content types that needs either one or multiple images, especially when there is a use case where we want to link the image to a page with a href. One example would be the Brand Banner logos. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentfulImage) */
export type ContentfulImageLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Use this content type as a reference for content types that needs either one or multiple images, especially when there is a use case where we want to link the image to a page with a href. One example would be the Brand Banner logos. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentfulImage) */
export type ContentfulImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this content type as a reference for content types that needs either one or multiple images, especially when there is a use case where we want to link the image to a page with a href. One example would be the Brand Banner logos. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/contentfulImage) */
export type ContentfulImageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ContentfulImageCollection = {
  __typename?: 'ContentfulImageCollection';
  items: Array<Maybe<ContentfulImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ContentfulImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContentfulImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContentfulImageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ContentfulImageLink = EditorialPage | LandingPage | Page;

export type ContentfulImageLinkingCollections = {
  __typename?: 'ContentfulImageLinkingCollections';
  brandBannerCollection?: Maybe<BrandBannerCollection>;
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type ContentfulImageLinkingCollectionsBrandBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulImageLinkingCollectionsBrandBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulImageLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulImageLinkingCollectionsHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentfulImageLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulImageLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ContentfulImageLinkingCollectionsBrandBannerCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ContentfulImageLinkingCollectionsHeroCollectionOrder {
  BackdropAsc = 'backdrop_ASC',
  BackdropDesc = 'backdrop_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentfulImageLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ContentfulImageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/customerCommunicationPreferences) */
export type CustomerCommunicationPreferences = Entry & _Node & {
  __typename?: 'CustomerCommunicationPreferences';
  _id: Scalars['ID']['output'];
  consentInfo?: Maybe<CustomerCommunicationPreferencesConsentInfo>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CustomerCommunicationPreferencesLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/customerCommunicationPreferences) */
export type CustomerCommunicationPreferencesConsentInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/customerCommunicationPreferences) */
export type CustomerCommunicationPreferencesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/customerCommunicationPreferences) */
export type CustomerCommunicationPreferencesNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerCommunicationPreferencesCollection = {
  __typename?: 'CustomerCommunicationPreferencesCollection';
  items: Array<Maybe<CustomerCommunicationPreferences>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomerCommunicationPreferencesConsentInfo = {
  __typename?: 'CustomerCommunicationPreferencesConsentInfo';
  json: Scalars['JSON']['output'];
  links: CustomerCommunicationPreferencesConsentInfoLinks;
};

export type CustomerCommunicationPreferencesConsentInfoAssets = {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type CustomerCommunicationPreferencesConsentInfoEntries = {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type CustomerCommunicationPreferencesConsentInfoLinks = {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoLinks';
  assets: CustomerCommunicationPreferencesConsentInfoAssets;
  entries: CustomerCommunicationPreferencesConsentInfoEntries;
  resources: CustomerCommunicationPreferencesConsentInfoResources;
};

export type CustomerCommunicationPreferencesConsentInfoResources = {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoResources';
  block: Array<CustomerCommunicationPreferencesConsentInfoResourcesBlock>;
  hyperlink: Array<CustomerCommunicationPreferencesConsentInfoResourcesHyperlink>;
  inline: Array<CustomerCommunicationPreferencesConsentInfoResourcesInline>;
};

export type CustomerCommunicationPreferencesConsentInfoResourcesBlock = ResourceLink & {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoResourcesBlock';
  sys: ResourceSys;
};

export type CustomerCommunicationPreferencesConsentInfoResourcesHyperlink = ResourceLink & {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoResourcesHyperlink';
  sys: ResourceSys;
};

export type CustomerCommunicationPreferencesConsentInfoResourcesInline = ResourceLink & {
  __typename?: 'CustomerCommunicationPreferencesConsentInfoResourcesInline';
  sys: ResourceSys;
};

export type CustomerCommunicationPreferencesFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomerCommunicationPreferencesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomerCommunicationPreferencesFilter>>>;
  consentInfo_contains?: InputMaybe<Scalars['String']['input']>;
  consentInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentInfo_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CustomerCommunicationPreferencesLinkingCollections = {
  __typename?: 'CustomerCommunicationPreferencesLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type CustomerCommunicationPreferencesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerCommunicationPreferencesLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerCommunicationPreferencesLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerCommunicationPreferencesLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerCommunicationPreferencesLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomerCommunicationPreferencesLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum CustomerCommunicationPreferencesLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum CustomerCommunicationPreferencesOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A component to handle short texts (key value) that needs to be localized. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/dictionary) */
export type Dictionary = Entry & _Node & {
  __typename?: 'Dictionary';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DictionaryLinkingCollections>;
  listCollection?: Maybe<DictionaryListCollection>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** A component to handle short texts (key value) that needs to be localized. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/dictionary) */
export type DictionaryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A component to handle short texts (key value) that needs to be localized. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/dictionary) */
export type DictionaryListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DictionaryListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeyValueFilter>;
};


/** A component to handle short texts (key value) that needs to be localized. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/dictionary) */
export type DictionaryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type DictionaryCollection = {
  __typename?: 'DictionaryCollection';
  items: Array<Maybe<Dictionary>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type DictionaryFilter = {
  AND?: InputMaybe<Array<InputMaybe<DictionaryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DictionaryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  list?: InputMaybe<CfKeyValueNestedFilter>;
  listCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type DictionaryLinkingCollections = {
  __typename?: 'DictionaryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type DictionaryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DictionaryLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DictionaryLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DictionaryLinkingCollectionsProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DictionaryLinkingCollectionsProductPageInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type DictionaryLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DictionaryLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum DictionaryLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum DictionaryLinkingCollectionsProductPageInfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum DictionaryLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type DictionaryListCollection = {
  __typename?: 'DictionaryListCollection';
  items: Array<Maybe<KeyValue>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum DictionaryListCollectionOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export enum DictionaryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** An editorial text block made for use in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialBlock) */
export type EditorialBlock = Entry & _Node & {
  __typename?: 'EditorialBlock';
  _id: Scalars['ID']['output'];
  content?: Maybe<EditorialBlockContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<EditorialBlockLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  verticalAlignment?: Maybe<Scalars['String']['output']>;
};


/** An editorial text block made for use in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialBlock) */
export type EditorialBlockContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An editorial text block made for use in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialBlock) */
export type EditorialBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** An editorial text block made for use in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialBlock) */
export type EditorialBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** An editorial text block made for use in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialBlock) */
export type EditorialBlockVerticalAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialBlockCollection = {
  __typename?: 'EditorialBlockCollection';
  items: Array<Maybe<EditorialBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialBlockContent = {
  __typename?: 'EditorialBlockContent';
  json: Scalars['JSON']['output'];
  links: EditorialBlockContentLinks;
};

export type EditorialBlockContentAssets = {
  __typename?: 'EditorialBlockContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialBlockContentEntries = {
  __typename?: 'EditorialBlockContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialBlockContentLinks = {
  __typename?: 'EditorialBlockContentLinks';
  assets: EditorialBlockContentAssets;
  entries: EditorialBlockContentEntries;
  resources: EditorialBlockContentResources;
};

export type EditorialBlockContentResources = {
  __typename?: 'EditorialBlockContentResources';
  block: Array<EditorialBlockContentResourcesBlock>;
  hyperlink: Array<EditorialBlockContentResourcesHyperlink>;
  inline: Array<EditorialBlockContentResourcesInline>;
};

export type EditorialBlockContentResourcesBlock = ResourceLink & {
  __typename?: 'EditorialBlockContentResourcesBlock';
  sys: ResourceSys;
};

export type EditorialBlockContentResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialBlockContentResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialBlockContentResourcesInline = ResourceLink & {
  __typename?: 'EditorialBlockContentResourcesInline';
  sys: ResourceSys;
};

export type EditorialBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialBlockFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  verticalAlignment?: InputMaybe<Scalars['String']['input']>;
  verticalAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  verticalAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  verticalAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  verticalAlignment_not?: InputMaybe<Scalars['String']['input']>;
  verticalAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  verticalAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBlockLinkingCollections = {
  __typename?: 'EditorialBlockLinkingCollections';
  editorialRowCollection?: Maybe<EditorialRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type EditorialBlockLinkingCollectionsEditorialRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialBlockLinkingCollectionsEditorialRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialBlockLinkingCollectionsEditorialRowCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum EditorialBlockOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VerticalAlignmentAsc = 'verticalAlignment_ASC',
  VerticalAlignmentDesc = 'verticalAlignment_DESC'
}

/** Image slideshow for use in editorial pages (Articles, Service pages etc.) [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialGallery) */
export type EditorialGallery = Entry & _Node & {
  __typename?: 'EditorialGallery';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  imagesCollection?: Maybe<EditorialGalleryImagesCollection>;
  linkedFrom?: Maybe<EditorialGalleryLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Image slideshow for use in editorial pages (Articles, Service pages etc.) [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialGallery) */
export type EditorialGalleryImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialGalleryImagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialSplashFilter>;
};


/** Image slideshow for use in editorial pages (Articles, Service pages etc.) [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialGallery) */
export type EditorialGalleryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Image slideshow for use in editorial pages (Articles, Service pages etc.) [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialGallery) */
export type EditorialGalleryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialGalleryCollection = {
  __typename?: 'EditorialGalleryCollection';
  items: Array<Maybe<EditorialGallery>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialGalleryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialGalleryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialGalleryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  images?: InputMaybe<CfEditorialSplashNestedFilter>;
  imagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EditorialGalleryImagesCollection = {
  __typename?: 'EditorialGalleryImagesCollection';
  items: Array<Maybe<EditorialSplash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EditorialGalleryImagesCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type EditorialGalleryLinkingCollections = {
  __typename?: 'EditorialGalleryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
};


export type EditorialGalleryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialGalleryLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialGalleryLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialGalleryLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialGalleryOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPage = Entry & _Node & {
  __typename?: 'EditorialPage';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  category?: Maybe<Page>;
  content?: Maybe<EditorialPageContent>;
  contentfulMetadata: ContentfulMetadata;
  desktopHeroImage?: Maybe<Asset>;
  footerBanner?: Maybe<FooterBanner>;
  heroImageAltText?: Maybe<Scalars['String']['output']>;
  heroImageText?: Maybe<Scalars['String']['output']>;
  heroText?: Maybe<EditorialPageHeroText>;
  ingress?: Maybe<EditorialPageIngress>;
  linkedFrom?: Maybe<EditorialPageLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  mobileHeroImage?: Maybe<Asset>;
  publishingDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tagsCollection?: Maybe<EditorialPageTagsCollection>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageCategoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageDesktopHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageFooterBannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterBannerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageHeroImageAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageHeroImageTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageHeroTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageIngressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageMetaKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageMobileHeroImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPagePublishingDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageTagsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageTagsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialPage) */
export type EditorialPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialPageCollection = {
  __typename?: 'EditorialPageCollection';
  items: Array<Maybe<EditorialPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialPageContent = {
  __typename?: 'EditorialPageContent';
  json: Scalars['JSON']['output'];
  links: EditorialPageContentLinks;
};

export type EditorialPageContentAssets = {
  __typename?: 'EditorialPageContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialPageContentEntries = {
  __typename?: 'EditorialPageContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialPageContentLinks = {
  __typename?: 'EditorialPageContentLinks';
  assets: EditorialPageContentAssets;
  entries: EditorialPageContentEntries;
  resources: EditorialPageContentResources;
};

export type EditorialPageContentResources = {
  __typename?: 'EditorialPageContentResources';
  block: Array<EditorialPageContentResourcesBlock>;
  hyperlink: Array<EditorialPageContentResourcesHyperlink>;
  inline: Array<EditorialPageContentResourcesInline>;
};

export type EditorialPageContentResourcesBlock = ResourceLink & {
  __typename?: 'EditorialPageContentResourcesBlock';
  sys: ResourceSys;
};

export type EditorialPageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialPageContentResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialPageContentResourcesInline = ResourceLink & {
  __typename?: 'EditorialPageContentResourcesInline';
  sys: ResourceSys;
};

export type EditorialPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialPageFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  category?: InputMaybe<CfPageNestedFilter>;
  category_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopHeroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerBanner?: InputMaybe<CfFooterBannerNestedFilter>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroImageAltText?: InputMaybe<Scalars['String']['input']>;
  heroImageAltText_contains?: InputMaybe<Scalars['String']['input']>;
  heroImageAltText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroImageAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImageAltText_not?: InputMaybe<Scalars['String']['input']>;
  heroImageAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroImageAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImageText?: InputMaybe<Scalars['String']['input']>;
  heroImageText_contains?: InputMaybe<Scalars['String']['input']>;
  heroImageText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroImageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroImageText_not?: InputMaybe<Scalars['String']['input']>;
  heroImageText_not_contains?: InputMaybe<Scalars['String']['input']>;
  heroImageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroText_contains?: InputMaybe<Scalars['String']['input']>;
  heroText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  ingress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileHeroImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishingDate?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishingDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishingDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishingDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags?: InputMaybe<CfTagNestedFilter>;
  tagsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialPageHeroText = {
  __typename?: 'EditorialPageHeroText';
  json: Scalars['JSON']['output'];
  links: EditorialPageHeroTextLinks;
};

export type EditorialPageHeroTextAssets = {
  __typename?: 'EditorialPageHeroTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialPageHeroTextEntries = {
  __typename?: 'EditorialPageHeroTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialPageHeroTextLinks = {
  __typename?: 'EditorialPageHeroTextLinks';
  assets: EditorialPageHeroTextAssets;
  entries: EditorialPageHeroTextEntries;
  resources: EditorialPageHeroTextResources;
};

export type EditorialPageHeroTextResources = {
  __typename?: 'EditorialPageHeroTextResources';
  block: Array<EditorialPageHeroTextResourcesBlock>;
  hyperlink: Array<EditorialPageHeroTextResourcesHyperlink>;
  inline: Array<EditorialPageHeroTextResourcesInline>;
};

export type EditorialPageHeroTextResourcesBlock = ResourceLink & {
  __typename?: 'EditorialPageHeroTextResourcesBlock';
  sys: ResourceSys;
};

export type EditorialPageHeroTextResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialPageHeroTextResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialPageHeroTextResourcesInline = ResourceLink & {
  __typename?: 'EditorialPageHeroTextResourcesInline';
  sys: ResourceSys;
};

export type EditorialPageIngress = {
  __typename?: 'EditorialPageIngress';
  json: Scalars['JSON']['output'];
  links: EditorialPageIngressLinks;
};

export type EditorialPageIngressAssets = {
  __typename?: 'EditorialPageIngressAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialPageIngressEntries = {
  __typename?: 'EditorialPageIngressEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialPageIngressLinks = {
  __typename?: 'EditorialPageIngressLinks';
  assets: EditorialPageIngressAssets;
  entries: EditorialPageIngressEntries;
  resources: EditorialPageIngressResources;
};

export type EditorialPageIngressResources = {
  __typename?: 'EditorialPageIngressResources';
  block: Array<EditorialPageIngressResourcesBlock>;
  hyperlink: Array<EditorialPageIngressResourcesHyperlink>;
  inline: Array<EditorialPageIngressResourcesInline>;
};

export type EditorialPageIngressResourcesBlock = ResourceLink & {
  __typename?: 'EditorialPageIngressResourcesBlock';
  sys: ResourceSys;
};

export type EditorialPageIngressResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialPageIngressResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialPageIngressResourcesInline = ResourceLink & {
  __typename?: 'EditorialPageIngressResourcesInline';
  sys: ResourceSys;
};

export type EditorialPageLinkingCollections = {
  __typename?: 'EditorialPageLinkingCollections';
  contentfulImageCollection?: Maybe<ContentfulImageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featureCollection?: Maybe<FeatureCollection>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  splashCollection?: Maybe<SplashCollection>;
};


export type EditorialPageLinkingCollectionsContentfulImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsContentfulImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsFeatureCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsFooterBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsHighlightRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsInspoSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialPageLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageLinkingCollectionsSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialPageLinkingCollectionsContentfulImageCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EditorialPageLinkingCollectionsFeatureCollectionOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialPageLinkingCollectionsFooterBannerCollectionOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialPageLinkingCollectionsHighlightRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EditorialPageLinkingCollectionsInspoSplashCollectionOrder {
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum EditorialPageLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum EditorialPageLinkingCollectionsSplashCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum EditorialPageOrder {
  HeroImageAltTextAsc = 'heroImageAltText_ASC',
  HeroImageAltTextDesc = 'heroImageAltText_DESC',
  HeroImageTextAsc = 'heroImageText_ASC',
  HeroImageTextDesc = 'heroImageText_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EditorialPageTagsCollection = {
  __typename?: 'EditorialPageTagsCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EditorialPageTagsCollectionOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/** For use in Editorial Row. Should only use Item numbers when selecting products to show. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialProducts) */
export type EditorialProducts = Entry & _Node & {
  __typename?: 'EditorialProducts';
  _id: Scalars['ID']['output'];
  commerceData?: Maybe<Scalars['JSON']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<EditorialProductsLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** For use in Editorial Row. Should only use Item numbers when selecting products to show. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialProducts) */
export type EditorialProductsCommerceDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** For use in Editorial Row. Should only use Item numbers when selecting products to show. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialProducts) */
export type EditorialProductsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** For use in Editorial Row. Should only use Item numbers when selecting products to show. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialProducts) */
export type EditorialProductsNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialProductsCollection = {
  __typename?: 'EditorialProductsCollection';
  items: Array<Maybe<EditorialProducts>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialProductsFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialProductsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialProductsFilter>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EditorialProductsLinkingCollections = {
  __typename?: 'EditorialProductsLinkingCollections';
  editorialRowCollection?: Maybe<EditorialRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
};


export type EditorialProductsLinkingCollectionsEditorialRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialProductsLinkingCollectionsEditorialRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialProductsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialProductsLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialProductsLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialProductsLinkingCollectionsEditorialRowCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum EditorialProductsLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialProductsOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRow = Entry & _Node & {
  __typename?: 'EditorialRow';
  _id: Scalars['ID']['output'];
  contentCollection?: Maybe<EditorialRowContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<EditorialRowLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfColumns?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialRowContentFilter>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowNumberOfColumnsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowSpacingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Used for creating columns with Editorial Splash, Editorial Block and Editorial product. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialRow) */
export type EditorialRowWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialRowCollection = {
  __typename?: 'EditorialRowCollection';
  items: Array<Maybe<EditorialRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialRowContentCollection = {
  __typename?: 'EditorialRowContentCollection';
  items: Array<Maybe<EditorialRowContentItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialRowContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialRowContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialRowContentFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type EditorialRowContentItem = EditorialBlock | EditorialProducts | EditorialSplash | Store;

export type EditorialRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialRowFilter>>>;
  content?: InputMaybe<CfcontentMultiTypeNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfColumns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns_not?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  spacing?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['String']['input']>;
  width_contains?: InputMaybe<Scalars['String']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width_not?: InputMaybe<Scalars['String']['input']>;
  width_not_contains?: InputMaybe<Scalars['String']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialRowLinkingCollections = {
  __typename?: 'EditorialRowLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
};


export type EditorialRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialRowLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialRowLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialRowLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialRowOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplash = Entry & _Node & {
  __typename?: 'EditorialSplash';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  desktopImage?: Maybe<Asset>;
  desktopVideo?: Maybe<Asset>;
  imageText?: Maybe<EditorialSplashImageText>;
  linkedFrom?: Maybe<EditorialSplashLinkingCollections>;
  media?: Maybe<Scalars['JSON']['output']>;
  mediaMobile?: Maybe<Scalars['JSON']['output']>;
  mobileImage?: Maybe<Asset>;
  mobileVideo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<EditorialSplashText>;
  textColor?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashDesktopVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashImageTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashMobileVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splash made for use in editorial pages, either on its own or in a Editorial Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/editorialSplash) */
export type EditorialSplashTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type EditorialSplashCollection = {
  __typename?: 'EditorialSplashCollection';
  items: Array<Maybe<EditorialSplash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EditorialSplashFilter = {
  AND?: InputMaybe<Array<InputMaybe<EditorialSplashFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialSplashFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageText_contains?: InputMaybe<Scalars['String']['input']>;
  imageText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageText_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialSplashImageText = {
  __typename?: 'EditorialSplashImageText';
  json: Scalars['JSON']['output'];
  links: EditorialSplashImageTextLinks;
};

export type EditorialSplashImageTextAssets = {
  __typename?: 'EditorialSplashImageTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialSplashImageTextEntries = {
  __typename?: 'EditorialSplashImageTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialSplashImageTextLinks = {
  __typename?: 'EditorialSplashImageTextLinks';
  assets: EditorialSplashImageTextAssets;
  entries: EditorialSplashImageTextEntries;
  resources: EditorialSplashImageTextResources;
};

export type EditorialSplashImageTextResources = {
  __typename?: 'EditorialSplashImageTextResources';
  block: Array<EditorialSplashImageTextResourcesBlock>;
  hyperlink: Array<EditorialSplashImageTextResourcesHyperlink>;
  inline: Array<EditorialSplashImageTextResourcesInline>;
};

export type EditorialSplashImageTextResourcesBlock = ResourceLink & {
  __typename?: 'EditorialSplashImageTextResourcesBlock';
  sys: ResourceSys;
};

export type EditorialSplashImageTextResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialSplashImageTextResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialSplashImageTextResourcesInline = ResourceLink & {
  __typename?: 'EditorialSplashImageTextResourcesInline';
  sys: ResourceSys;
};

export type EditorialSplashLinkingCollections = {
  __typename?: 'EditorialSplashLinkingCollections';
  editorialGalleryCollection?: Maybe<EditorialGalleryCollection>;
  editorialRowCollection?: Maybe<EditorialRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
};


export type EditorialSplashLinkingCollectionsEditorialGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialSplashLinkingCollectionsEditorialGalleryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialSplashLinkingCollectionsEditorialRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialSplashLinkingCollectionsEditorialRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialSplashLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type EditorialSplashLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialSplashLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum EditorialSplashLinkingCollectionsEditorialGalleryCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EditorialSplashLinkingCollectionsEditorialRowCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum EditorialSplashLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EditorialSplashOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type EditorialSplashText = {
  __typename?: 'EditorialSplashText';
  json: Scalars['JSON']['output'];
  links: EditorialSplashTextLinks;
};

export type EditorialSplashTextAssets = {
  __typename?: 'EditorialSplashTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EditorialSplashTextEntries = {
  __typename?: 'EditorialSplashTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EditorialSplashTextLinks = {
  __typename?: 'EditorialSplashTextLinks';
  assets: EditorialSplashTextAssets;
  entries: EditorialSplashTextEntries;
  resources: EditorialSplashTextResources;
};

export type EditorialSplashTextResources = {
  __typename?: 'EditorialSplashTextResources';
  block: Array<EditorialSplashTextResourcesBlock>;
  hyperlink: Array<EditorialSplashTextResourcesHyperlink>;
  inline: Array<EditorialSplashTextResourcesInline>;
};

export type EditorialSplashTextResourcesBlock = ResourceLink & {
  __typename?: 'EditorialSplashTextResourcesBlock';
  sys: ResourceSys;
};

export type EditorialSplashTextResourcesHyperlink = ResourceLink & {
  __typename?: 'EditorialSplashTextResourcesHyperlink';
  sys: ResourceSys;
};

export type EditorialSplashTextResourcesInline = ResourceLink & {
  __typename?: 'EditorialSplashTextResourcesInline';
  sys: ResourceSys;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDay = Entry & _Node & {
  __typename?: 'ExceptionalOpeningHoursDay';
  _id: Scalars['ID']['output'];
  closed?: Maybe<Scalars['Boolean']['output']>;
  closingTime?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<ExceptionalOpeningHoursDayLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  openingTime?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayClosedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayClosingTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayOpeningTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store exceptional opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. There must be one entry for each day with exceptional opening hours. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/exceptionalOpeningHoursDay) */
export type ExceptionalOpeningHoursDayTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ExceptionalOpeningHoursDayCollection = {
  __typename?: 'ExceptionalOpeningHoursDayCollection';
  items: Array<Maybe<ExceptionalOpeningHoursDay>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ExceptionalOpeningHoursDayFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExceptionalOpeningHoursDayFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExceptionalOpeningHoursDayFilter>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime?: InputMaybe<Scalars['String']['input']>;
  closingTime_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closingTime_not?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
  openingTime_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime_not?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ExceptionalOpeningHoursDayLinkingCollections = {
  __typename?: 'ExceptionalOpeningHoursDayLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  storeCollection?: Maybe<StoreCollection>;
};


export type ExceptionalOpeningHoursDayLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ExceptionalOpeningHoursDayLinkingCollectionsStoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExceptionalOpeningHoursDayLinkingCollectionsStoreCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ExceptionalOpeningHoursDayLinkingCollectionsStoreCollectionOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GoogleMapsUrlAsc = 'googleMapsUrl_ASC',
  GoogleMapsUrlDesc = 'googleMapsUrl_DESC',
  InfoTextAsc = 'infoText_ASC',
  InfoTextDesc = 'infoText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StorePageLinkTextAsc = 'storePageLinkText_ASC',
  StorePageLinkTextDesc = 'storePageLinkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ExceptionalOpeningHoursDayOrder {
  ClosedAsc = 'closed_ASC',
  ClosedDesc = 'closed_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpeningTimeAsc = 'openingTime_ASC',
  OpeningTimeDesc = 'openingTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type Feature = Entry & _Node & {
  __typename?: 'Feature';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  callToAction?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imageAlignment?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FeatureLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<FeatureReference>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textOverlay?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureCallToActionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureImageAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureTextOverlayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Feature block used on category-, brand-, designer- and campaign pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/feature) */
export type FeatureTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FeatureCollection = {
  __typename?: 'FeatureCollection';
  items: Array<Maybe<Feature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeatureFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction?: InputMaybe<Scalars['String']['input']>;
  callToAction_contains?: InputMaybe<Scalars['String']['input']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  callToAction_not?: InputMaybe<Scalars['String']['input']>;
  callToAction_not_contains?: InputMaybe<Scalars['String']['input']>;
  callToAction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageAlignment?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageAlignment_not?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textOverlay?: InputMaybe<Scalars['Boolean']['input']>;
  textOverlay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textOverlay_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureLinkingCollections = {
  __typename?: 'FeatureLinkingCollections';
  campaignCollection?: Maybe<CampaignCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FeatureLinkingCollectionsCampaignCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeatureLinkingCollectionsCampaignCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FeatureLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeatureLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FeatureLinkingCollectionsCampaignCollectionOrder {
  CampaignBadgeAsc = 'campaignBadge_ASC',
  CampaignBadgeDesc = 'campaignBadge_DESC',
  CampaignEndAsc = 'campaignEnd_ASC',
  CampaignEndDesc = 'campaignEnd_DESC',
  CampaignLabelAsc = 'campaignLabel_ASC',
  CampaignLabelDesc = 'campaignLabel_DESC',
  CampaignNameAsc = 'campaignName_ASC',
  CampaignNameDesc = 'campaignName_DESC',
  CampaignStartAsc = 'campaignStart_ASC',
  CampaignStartDesc = 'campaignStart_DESC',
  CampaignTitleAsc = 'campaignTitle_ASC',
  CampaignTitleDesc = 'campaignTitle_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PageHeaderAsc = 'pageHeader_ASC',
  PageHeaderDesc = 'pageHeader_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ShowBadgeForAllProductsInCampaignAsc = 'showBadgeForAllProductsInCampaign_ASC',
  ShowBadgeForAllProductsInCampaignDesc = 'showBadgeForAllProductsInCampaign_DESC',
  ShowCountdownAsc = 'showCountdown_ASC',
  ShowCountdownDesc = 'showCountdown_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FeatureLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum FeatureOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FeatureReference = Campaign | EditorialPage | Page;

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  banner?: Maybe<BrandBanner>;
  columnsCollection?: Maybe<FooterColumnsCollection>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footer) */
export type FooterBannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BrandBannerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footer) */
export type FooterColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterColumnsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footer) */
export type FooterNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBanner = Entry & _Node & {
  __typename?: 'FooterBanner';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  activePage?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  desktopImage?: Maybe<Asset>;
  link?: Maybe<FooterBannerLink>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<FooterBannerLinkingCollections>;
  mobileImage?: Maybe<Asset>;
  paragraph?: Maybe<FooterBannerParagraph>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerActivePageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerParagraphArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/footerBanner) */
export type FooterBannerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FooterBannerCollection = {
  __typename?: 'FooterBannerCollection';
  items: Array<Maybe<FooterBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterBannerFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  activePage_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraph_contains?: InputMaybe<Scalars['String']['input']>;
  paragraph_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterBannerLink = Campaign | EditorialPage | LandingPage | Page;

export type FooterBannerLinkingCollections = {
  __typename?: 'FooterBannerLinkingCollections';
  campaignCollection?: Maybe<CampaignCollection>;
  editorialPageCollection?: Maybe<EditorialPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type FooterBannerLinkingCollectionsCampaignCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterBannerLinkingCollectionsCampaignCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterBannerLinkingCollectionsEditorialPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterBannerLinkingCollectionsEditorialPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterBannerLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterBannerLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterBannerLinkingCollectionsCampaignCollectionOrder {
  CampaignBadgeAsc = 'campaignBadge_ASC',
  CampaignBadgeDesc = 'campaignBadge_DESC',
  CampaignEndAsc = 'campaignEnd_ASC',
  CampaignEndDesc = 'campaignEnd_DESC',
  CampaignLabelAsc = 'campaignLabel_ASC',
  CampaignLabelDesc = 'campaignLabel_DESC',
  CampaignNameAsc = 'campaignName_ASC',
  CampaignNameDesc = 'campaignName_DESC',
  CampaignStartAsc = 'campaignStart_ASC',
  CampaignStartDesc = 'campaignStart_DESC',
  CampaignTitleAsc = 'campaignTitle_ASC',
  CampaignTitleDesc = 'campaignTitle_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PageHeaderAsc = 'pageHeader_ASC',
  PageHeaderDesc = 'pageHeader_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ShowBadgeForAllProductsInCampaignAsc = 'showBadgeForAllProductsInCampaign_ASC',
  ShowBadgeForAllProductsInCampaignDesc = 'showBadgeForAllProductsInCampaign_DESC',
  ShowCountdownAsc = 'showCountdown_ASC',
  ShowCountdownDesc = 'showCountdown_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterBannerLinkingCollectionsEditorialPageCollectionOrder {
  HeroImageAltTextAsc = 'heroImageAltText_ASC',
  HeroImageAltTextDesc = 'heroImageAltText_DESC',
  HeroImageTextAsc = 'heroImageText_ASC',
  HeroImageTextDesc = 'heroImageText_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterBannerLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterBannerLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum FooterBannerOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FooterBannerParagraph = {
  __typename?: 'FooterBannerParagraph';
  json: Scalars['JSON']['output'];
  links: FooterBannerParagraphLinks;
};

export type FooterBannerParagraphAssets = {
  __typename?: 'FooterBannerParagraphAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FooterBannerParagraphEntries = {
  __typename?: 'FooterBannerParagraphEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FooterBannerParagraphLinks = {
  __typename?: 'FooterBannerParagraphLinks';
  assets: FooterBannerParagraphAssets;
  entries: FooterBannerParagraphEntries;
  resources: FooterBannerParagraphResources;
};

export type FooterBannerParagraphResources = {
  __typename?: 'FooterBannerParagraphResources';
  block: Array<FooterBannerParagraphResourcesBlock>;
  hyperlink: Array<FooterBannerParagraphResourcesHyperlink>;
  inline: Array<FooterBannerParagraphResourcesInline>;
};

export type FooterBannerParagraphResourcesBlock = ResourceLink & {
  __typename?: 'FooterBannerParagraphResourcesBlock';
  sys: ResourceSys;
};

export type FooterBannerParagraphResourcesHyperlink = ResourceLink & {
  __typename?: 'FooterBannerParagraphResourcesHyperlink';
  sys: ResourceSys;
};

export type FooterBannerParagraphResourcesInline = ResourceLink & {
  __typename?: 'FooterBannerParagraphResourcesInline';
  sys: ResourceSys;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterColumnsCollection = {
  __typename?: 'FooterColumnsCollection';
  items: Array<Maybe<FooterColumnsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterColumnsFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterColumnsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterColumnsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterColumnsItem = Navigation | Store | TextBlock;

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  banner?: InputMaybe<CfBrandBannerNestedFilter>;
  banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columns?: InputMaybe<CfcolumnsMultiTypeNestedFilter>;
  columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FooterLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FooterOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type Form = Entry & _Node & {
  __typename?: 'Form';
  _id: Scalars['ID']['output'];
  consentIsRequired?: Maybe<Scalars['Boolean']['output']>;
  consentText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dictionaryCollection?: Maybe<FormDictionaryCollection>;
  footer?: Maybe<FormFooter>;
  linkedFrom?: Maybe<FormLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  preFilledData?: Maybe<Scalars['JSON']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  submitButtonText?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<FormSubtitle>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormConsentIsRequiredArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormConsentTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormDictionaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormDictionaryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeyValueFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormPreFilledDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormReferenceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormSubmitButtonTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/form) */
export type FormTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type FormCollection = {
  __typename?: 'FormCollection';
  items: Array<Maybe<Form>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FormDictionaryCollection = {
  __typename?: 'FormDictionaryCollection';
  items: Array<Maybe<KeyValue>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FormDictionaryCollectionOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type FormFilter = {
  AND?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FormFilter>>>;
  consentIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  consentIsRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentIsRequired_not?: InputMaybe<Scalars['Boolean']['input']>;
  consentText?: InputMaybe<Scalars['String']['input']>;
  consentText_contains?: InputMaybe<Scalars['String']['input']>;
  consentText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  consentText_not?: InputMaybe<Scalars['String']['input']>;
  consentText_not_contains?: InputMaybe<Scalars['String']['input']>;
  consentText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dictionary?: InputMaybe<CfKeyValueNestedFilter>;
  dictionaryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footer_contains?: InputMaybe<Scalars['String']['input']>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footer_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preFilledData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_contains?: InputMaybe<Scalars['String']['input']>;
  reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  reference_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reference_not?: InputMaybe<Scalars['String']['input']>;
  reference_not_contains?: InputMaybe<Scalars['String']['input']>;
  reference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButtonText?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  submitButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButtonText_not?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormFooter = {
  __typename?: 'FormFooter';
  json: Scalars['JSON']['output'];
  links: FormFooterLinks;
};

export type FormFooterAssets = {
  __typename?: 'FormFooterAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormFooterEntries = {
  __typename?: 'FormFooterEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormFooterLinks = {
  __typename?: 'FormFooterLinks';
  assets: FormFooterAssets;
  entries: FormFooterEntries;
  resources: FormFooterResources;
};

export type FormFooterResources = {
  __typename?: 'FormFooterResources';
  block: Array<FormFooterResourcesBlock>;
  hyperlink: Array<FormFooterResourcesHyperlink>;
  inline: Array<FormFooterResourcesInline>;
};

export type FormFooterResourcesBlock = ResourceLink & {
  __typename?: 'FormFooterResourcesBlock';
  sys: ResourceSys;
};

export type FormFooterResourcesHyperlink = ResourceLink & {
  __typename?: 'FormFooterResourcesHyperlink';
  sys: ResourceSys;
};

export type FormFooterResourcesInline = ResourceLink & {
  __typename?: 'FormFooterResourcesInline';
  sys: ResourceSys;
};

export type FormLinkingCollections = {
  __typename?: 'FormLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  heroCollection?: Maybe<HeroCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type FormLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsProductPageInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type FormLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum FormLinkingCollectionsHeroCollectionOrder {
  BackdropAsc = 'backdrop_ASC',
  BackdropDesc = 'backdrop_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FormLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FormLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum FormLinkingCollectionsProductPageInfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FormLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum FormOrder {
  ConsentIsRequiredAsc = 'consentIsRequired_ASC',
  ConsentIsRequiredDesc = 'consentIsRequired_DESC',
  ConsentTextAsc = 'consentText_ASC',
  ConsentTextDesc = 'consentText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  SubmitButtonTextAsc = 'submitButtonText_ASC',
  SubmitButtonTextDesc = 'submitButtonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type FormSubtitle = {
  __typename?: 'FormSubtitle';
  json: Scalars['JSON']['output'];
  links: FormSubtitleLinks;
};

export type FormSubtitleAssets = {
  __typename?: 'FormSubtitleAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FormSubtitleEntries = {
  __typename?: 'FormSubtitleEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FormSubtitleLinks = {
  __typename?: 'FormSubtitleLinks';
  assets: FormSubtitleAssets;
  entries: FormSubtitleEntries;
  resources: FormSubtitleResources;
};

export type FormSubtitleResources = {
  __typename?: 'FormSubtitleResources';
  block: Array<FormSubtitleResourcesBlock>;
  hyperlink: Array<FormSubtitleResourcesHyperlink>;
  inline: Array<FormSubtitleResourcesInline>;
};

export type FormSubtitleResourcesBlock = ResourceLink & {
  __typename?: 'FormSubtitleResourcesBlock';
  sys: ResourceSys;
};

export type FormSubtitleResourcesHyperlink = ResourceLink & {
  __typename?: 'FormSubtitleResourcesHyperlink';
  sys: ResourceSys;
};

export type FormSubtitleResourcesInline = ResourceLink & {
  __typename?: 'FormSubtitleResourcesInline';
  sys: ResourceSys;
};

/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type Grid = Entry & _Node & {
  __typename?: 'Grid';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  columnsCollection?: Maybe<GridColumnsCollection>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<GridLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfColumns?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridColumnsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridColumnsFilter>;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Use this to create a grid column layout with for example texts and images. This is intended to be used as a flexible and dynamic wrapper / container to Splashes and Texts with options to control number of columns, background color, margins, paddings etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/grid) */
export type GridNumberOfColumnsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GridCollection = {
  __typename?: 'GridCollection';
  items: Array<Maybe<Grid>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GridColumnsCollection = {
  __typename?: 'GridColumnsCollection';
  items: Array<Maybe<GridColumnsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GridColumnsFilter = {
  AND?: InputMaybe<Array<InputMaybe<GridColumnsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GridColumnsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GridColumnsItem = Splash | Text;

export type GridFilter = {
  AND?: InputMaybe<Array<InputMaybe<GridFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GridFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  columns?: InputMaybe<CfcolumnsMultiTypeNestedFilter>;
  columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  numberOfColumns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  numberOfColumns_not?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_contains?: InputMaybe<Scalars['String']['input']>;
  numberOfColumns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GridLinkingCollections = {
  __typename?: 'GridLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type GridLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type GridLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GridLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GridLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum GridOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type Header = Entry & _Node & {
  __typename?: 'Header';
  _id: Scalars['ID']['output'];
  contactNavigation?: Maybe<Navigation>;
  contentfulMetadata: ContentfulMetadata;
  desktopLogo?: Maybe<Asset>;
  left?: Maybe<NavigationLink>;
  leftLinksCollection?: Maybe<HeaderLeftLinksCollection>;
  linkedFrom?: Maybe<HeaderLinkingCollections>;
  mobileLogo?: Maybe<Asset>;
  navigation?: Maybe<Navigation>;
  right?: Maybe<NavigationLink>;
  rightLinksCollection?: Maybe<HeaderRightLinksCollection>;
  storeAndCustomerServiceInfoCollection?: Maybe<HeaderStoreAndCustomerServiceInfoCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  uspCollection?: Maybe<HeaderUspCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderContactNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderDesktopLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderLeftArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderLeftLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderLeftLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderMobileLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderRightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderRightLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderRightLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderStoreAndCustomerServiceInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderStoreAndCustomerServiceInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/header) */
export type HeaderUspCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderUspCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};

export type HeaderCollection = {
  __typename?: 'HeaderCollection';
  items: Array<Maybe<Header>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeaderFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeaderFilter>>>;
  contactNavigation?: InputMaybe<CfNavigationNestedFilter>;
  contactNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  left?: InputMaybe<CfNavigationLinkNestedFilter>;
  leftLinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  leftLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  left_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigation?: InputMaybe<CfNavigationNestedFilter>;
  navigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  right?: InputMaybe<CfNavigationLinkNestedFilter>;
  rightLinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  rightLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  right_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storeAndCustomerServiceInfo?: InputMaybe<CfStoreNestedFilter>;
  storeAndCustomerServiceInfoCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  usp?: InputMaybe<CfNavigationLinkNestedFilter>;
  uspCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderLeftLinksCollection = {
  __typename?: 'HeaderLeftLinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeaderLeftLinksCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type HeaderLinkingCollections = {
  __typename?: 'HeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type HeaderLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeaderLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HeaderOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type HeaderRightLinksCollection = {
  __typename?: 'HeaderRightLinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeaderRightLinksCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type HeaderStoreAndCustomerServiceInfoCollection = {
  __typename?: 'HeaderStoreAndCustomerServiceInfoCollection';
  items: Array<Maybe<Store>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeaderStoreAndCustomerServiceInfoCollectionOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GoogleMapsUrlAsc = 'googleMapsUrl_ASC',
  GoogleMapsUrlDesc = 'googleMapsUrl_DESC',
  InfoTextAsc = 'infoText_ASC',
  InfoTextDesc = 'infoText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StorePageLinkTextAsc = 'storePageLinkText_ASC',
  StorePageLinkTextDesc = 'storePageLinkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type HeaderUspCollection = {
  __typename?: 'HeaderUspCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HeaderUspCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type Hero = Entry & _Node & {
  __typename?: 'Hero';
  _id: Scalars['ID']['output'];
  backdrop?: Maybe<Scalars['Boolean']['output']>;
  content?: Maybe<HeroContent>;
  contentfulMetadata: ContentfulMetadata;
  desktopImage?: Maybe<Asset>;
  link?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  mobileImage?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroBackdropArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroContent = ContentfulImage | Form;

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  backdrop?: InputMaybe<Scalars['Boolean']['input']>;
  backdrop_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backdrop_not?: InputMaybe<Scalars['Boolean']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<CfNavigationLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HeroLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum HeroOrder {
  BackdropAsc = 'backdrop_ASC',
  BackdropDesc = 'backdrop_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRow = Entry & _Node & {
  __typename?: 'HighlightRow';
  _id: Scalars['ID']['output'];
  contentCollection?: Maybe<HighlightRowContentCollection>;
  contentfulMetadata: ContentfulMetadata;
  devices?: Maybe<Scalars['String']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  link?: Maybe<HighlightRowLink>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<HighlightRowLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  spacing?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HighlightRowContentCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowDevicesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Highlight row for displaying four Splashes.
 * Highlight row has optional heading and optional link / link text.
 * Option to only show on desktop or mobile. Optional spacing. Contains four splashes in a row on desktop. On mobile the first splash is shown (swipe functionality).
 *  [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/highlightRow)
 */
export type HighlightRowSpacingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type HighlightRowCollection = {
  __typename?: 'HighlightRowCollection';
  items: Array<Maybe<HighlightRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HighlightRowContentCollection = {
  __typename?: 'HighlightRowContentCollection';
  items: Array<Maybe<Splash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum HighlightRowContentCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type HighlightRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<HighlightRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HighlightRowFilter>>>;
  content?: InputMaybe<CfSplashNestedFilter>;
  contentCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  devices?: InputMaybe<Scalars['String']['input']>;
  devices_contains?: InputMaybe<Scalars['String']['input']>;
  devices_exists?: InputMaybe<Scalars['Boolean']['input']>;
  devices_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  devices_not?: InputMaybe<Scalars['String']['input']>;
  devices_not_contains?: InputMaybe<Scalars['String']['input']>;
  devices_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  spacing?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_exists?: InputMaybe<Scalars['Boolean']['input']>;
  spacing_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type HighlightRowLink = Campaign | EditorialPage | LandingPage | Page;

export type HighlightRowLinkingCollections = {
  __typename?: 'HighlightRowLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type HighlightRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightRowLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HighlightRowLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightRowLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HighlightRowLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum HighlightRowLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum HighlightRowLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum HighlightRowOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplash = Entry & _Node & {
  __typename?: 'InspoSplash';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  desktopImage?: Maybe<Asset>;
  header?: Maybe<Scalars['String']['output']>;
  href?: Maybe<InspoSplashHref>;
  layout?: Maybe<Scalars['String']['output']>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<InspoSplashLinkingCollections>;
  media?: Maybe<Entry>;
  mediaMobile?: Maybe<Entry>;
  mobileImage?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  text?: Maybe<InspoSplashText>;
  textColor?: Maybe<Scalars['String']['output']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashMediaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashMediaMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Deprecated. Use Splash instead. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/inspoSplash) */
export type InspoSplashTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type InspoSplashCollection = {
  __typename?: 'InspoSplashCollection';
  items: Array<Maybe<InspoSplash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InspoSplashFilter = {
  AND?: InputMaybe<Array<InputMaybe<InspoSplashFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InspoSplashFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  header_contains?: InputMaybe<Scalars['String']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  header_not?: InputMaybe<Scalars['String']['input']>;
  header_not_contains?: InputMaybe<Scalars['String']['input']>;
  header_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<Scalars['String']['input']>;
  layout_contains?: InputMaybe<Scalars['String']['input']>;
  layout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  layout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  layout_not?: InputMaybe<Scalars['String']['input']>;
  layout_not_contains?: InputMaybe<Scalars['String']['input']>;
  layout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
};

export type InspoSplashHref = Campaign | EditorialPage | LandingPage | Page;

export type InspoSplashLinkingCollections = {
  __typename?: 'InspoSplashLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type InspoSplashLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum InspoSplashOrder {
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type InspoSplashText = {
  __typename?: 'InspoSplashText';
  json: Scalars['JSON']['output'];
  links: InspoSplashTextLinks;
};

export type InspoSplashTextAssets = {
  __typename?: 'InspoSplashTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InspoSplashTextEntries = {
  __typename?: 'InspoSplashTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InspoSplashTextLinks = {
  __typename?: 'InspoSplashTextLinks';
  assets: InspoSplashTextAssets;
  entries: InspoSplashTextEntries;
  resources: InspoSplashTextResources;
};

export type InspoSplashTextResources = {
  __typename?: 'InspoSplashTextResources';
  block: Array<InspoSplashTextResourcesBlock>;
  hyperlink: Array<InspoSplashTextResourcesHyperlink>;
  inline: Array<InspoSplashTextResourcesInline>;
};

export type InspoSplashTextResourcesBlock = ResourceLink & {
  __typename?: 'InspoSplashTextResourcesBlock';
  sys: ResourceSys;
};

export type InspoSplashTextResourcesHyperlink = ResourceLink & {
  __typename?: 'InspoSplashTextResourcesHyperlink';
  sys: ResourceSys;
};

export type InspoSplashTextResourcesInline = ResourceLink & {
  __typename?: 'InspoSplashTextResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/keyValue) */
export type KeyValue = Entry & _Node & {
  __typename?: 'KeyValue';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  key?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<KeyValueLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  value?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/keyValue) */
export type KeyValueKeyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/keyValue) */
export type KeyValueLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/keyValue) */
export type KeyValueNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/keyValue) */
export type KeyValueValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type KeyValueCollection = {
  __typename?: 'KeyValueCollection';
  items: Array<Maybe<KeyValue>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type KeyValueFilter = {
  AND?: InputMaybe<Array<InputMaybe<KeyValueFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KeyValueFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type KeyValueLinkingCollections = {
  __typename?: 'KeyValueLinkingCollections';
  dictionaryCollection?: Maybe<DictionaryCollection>;
  entryCollection?: Maybe<EntryCollection>;
  formCollection?: Maybe<FormCollection>;
};


export type KeyValueLinkingCollectionsDictionaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KeyValueLinkingCollectionsDictionaryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type KeyValueLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type KeyValueLinkingCollectionsFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KeyValueLinkingCollectionsFormCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum KeyValueLinkingCollectionsDictionaryCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum KeyValueLinkingCollectionsFormCollectionOrder {
  ConsentIsRequiredAsc = 'consentIsRequired_ASC',
  ConsentIsRequiredDesc = 'consentIsRequired_DESC',
  ConsentTextAsc = 'consentText_ASC',
  ConsentTextDesc = 'consentText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ReferenceAsc = 'reference_ASC',
  ReferenceDesc = 'reference_DESC',
  SubmitButtonTextAsc = 'submitButtonText_ASC',
  SubmitButtonTextDesc = 'submitButtonText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum KeyValueOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPage = Entry & _Node & {
  __typename?: 'LandingPage';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alternativeTerms?: Maybe<Scalars['String']['output']>;
  componentsCollection?: Maybe<LandingPageComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<LandingPageDescription>;
  fallback?: Maybe<Scalars['Boolean']['output']>;
  footerBanner?: Maybe<FooterBanner>;
  linkedFrom?: Maybe<LandingPageLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  previousSlugs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  previousSlugsSpecifications?: Maybe<Scalars['JSON']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageAlternativeTermsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageComponentsFilter>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageFallbackArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageFooterBannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterBannerFilter>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageMetaKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPagePreviousSlugsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPagePreviousSlugsSpecificationsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A page where there can be multiple entries for the same slug.
 * The most recently published entry will be the "live" one.
 * One entry can also be set as the "fallback" page, meaning that it will only be shown if there's no other pages published on the slug. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/landingPage)
 */
export type LandingPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageCollection = {
  __typename?: 'LandingPageCollection';
  items: Array<Maybe<LandingPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LandingPageComponentsCollection = {
  __typename?: 'LandingPageComponentsCollection';
  items: Array<Maybe<LandingPageComponentsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LandingPageComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<LandingPageComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingPageComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type LandingPageComponentsItem = Accordion | Block | BrandBanner | ContentRow | CustomerCommunicationPreferences | EditorialGallery | EditorialProducts | EditorialRow | EditorialSplash | Form | HighlightRow | MyPageBlock | Navigation | ProductList | Store | TextBlock;

export type LandingPageDescription = {
  __typename?: 'LandingPageDescription';
  json: Scalars['JSON']['output'];
  links: LandingPageDescriptionLinks;
};

export type LandingPageDescriptionAssets = {
  __typename?: 'LandingPageDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LandingPageDescriptionEntries = {
  __typename?: 'LandingPageDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LandingPageDescriptionLinks = {
  __typename?: 'LandingPageDescriptionLinks';
  assets: LandingPageDescriptionAssets;
  entries: LandingPageDescriptionEntries;
  resources: LandingPageDescriptionResources;
};

export type LandingPageDescriptionResources = {
  __typename?: 'LandingPageDescriptionResources';
  block: Array<LandingPageDescriptionResourcesBlock>;
  hyperlink: Array<LandingPageDescriptionResourcesHyperlink>;
  inline: Array<LandingPageDescriptionResourcesInline>;
};

export type LandingPageDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'LandingPageDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type LandingPageDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'LandingPageDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type LandingPageDescriptionResourcesInline = ResourceLink & {
  __typename?: 'LandingPageDescriptionResourcesInline';
  sys: ResourceSys;
};

export type LandingPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<LandingPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingPageFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alternativeTerms_not?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  fallback?: InputMaybe<Scalars['Boolean']['input']>;
  fallback_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fallback_not?: InputMaybe<Scalars['Boolean']['input']>;
  footerBanner?: InputMaybe<CfFooterBannerNestedFilter>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugsSpecifications_exists?: InputMaybe<Scalars['Boolean']['input']>;
  previousSlugs_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingPageLinkingCollections = {
  __typename?: 'LandingPageLinkingCollections';
  contentfulImageCollection?: Maybe<ContentfulImageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  splashCollection?: Maybe<SplashCollection>;
};


export type LandingPageLinkingCollectionsContentfulImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsContentfulImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsFooterBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsHighlightRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsInspoSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageLinkingCollectionsSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LandingPageLinkingCollectionsContentfulImageCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LandingPageLinkingCollectionsFooterBannerCollectionOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LandingPageLinkingCollectionsHighlightRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LandingPageLinkingCollectionsInspoSplashCollectionOrder {
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum LandingPageLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum LandingPageLinkingCollectionsSplashCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum LandingPageOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Contains title and one or more navigation links. For example used on start page above footer in description block. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/linkList) */
export type LinkList = Entry & _Node & {
  __typename?: 'LinkList';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  heading?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LinkListLinkingCollections>;
  linksCollection?: Maybe<LinkListLinksCollection>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Contains title and one or more navigation links. For example used on start page above footer in description block. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/linkList) */
export type LinkListHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Contains title and one or more navigation links. For example used on start page above footer in description block. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/linkList) */
export type LinkListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Contains title and one or more navigation links. For example used on start page above footer in description block. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/linkList) */
export type LinkListLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkListLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** Contains title and one or more navigation links. For example used on start page above footer in description block. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/linkList) */
export type LinkListNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LinkListCollection = {
  __typename?: 'LinkListCollection';
  items: Array<Maybe<LinkList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkListFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkListFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  links?: InputMaybe<CfPageNestedFilter>;
  linksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type LinkListLinkingCollections = {
  __typename?: 'LinkListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type LinkListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type LinkListLinksCollection = {
  __typename?: 'LinkListLinksCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum LinkListLinksCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum LinkListOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlock = Entry & _Node & {
  __typename?: 'MyPageBlock';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<MyPageBlockDescription>;
  error?: Maybe<MyPageBlockError>;
  linkedFrom?: Maybe<MyPageBlockLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  success?: Maybe<MyPageBlockSuccess>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockErrorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockSuccessArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A general block made for use in my pages [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/myPageBlock) */
export type MyPageBlockTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type MyPageBlockCollection = {
  __typename?: 'MyPageBlockCollection';
  items: Array<Maybe<MyPageBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MyPageBlockDescription = {
  __typename?: 'MyPageBlockDescription';
  json: Scalars['JSON']['output'];
  links: MyPageBlockDescriptionLinks;
};

export type MyPageBlockDescriptionAssets = {
  __typename?: 'MyPageBlockDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MyPageBlockDescriptionEntries = {
  __typename?: 'MyPageBlockDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MyPageBlockDescriptionLinks = {
  __typename?: 'MyPageBlockDescriptionLinks';
  assets: MyPageBlockDescriptionAssets;
  entries: MyPageBlockDescriptionEntries;
  resources: MyPageBlockDescriptionResources;
};

export type MyPageBlockDescriptionResources = {
  __typename?: 'MyPageBlockDescriptionResources';
  block: Array<MyPageBlockDescriptionResourcesBlock>;
  hyperlink: Array<MyPageBlockDescriptionResourcesHyperlink>;
  inline: Array<MyPageBlockDescriptionResourcesInline>;
};

export type MyPageBlockDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'MyPageBlockDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type MyPageBlockDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'MyPageBlockDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type MyPageBlockDescriptionResourcesInline = ResourceLink & {
  __typename?: 'MyPageBlockDescriptionResourcesInline';
  sys: ResourceSys;
};

export type MyPageBlockError = {
  __typename?: 'MyPageBlockError';
  json: Scalars['JSON']['output'];
  links: MyPageBlockErrorLinks;
};

export type MyPageBlockErrorAssets = {
  __typename?: 'MyPageBlockErrorAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MyPageBlockErrorEntries = {
  __typename?: 'MyPageBlockErrorEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MyPageBlockErrorLinks = {
  __typename?: 'MyPageBlockErrorLinks';
  assets: MyPageBlockErrorAssets;
  entries: MyPageBlockErrorEntries;
  resources: MyPageBlockErrorResources;
};

export type MyPageBlockErrorResources = {
  __typename?: 'MyPageBlockErrorResources';
  block: Array<MyPageBlockErrorResourcesBlock>;
  hyperlink: Array<MyPageBlockErrorResourcesHyperlink>;
  inline: Array<MyPageBlockErrorResourcesInline>;
};

export type MyPageBlockErrorResourcesBlock = ResourceLink & {
  __typename?: 'MyPageBlockErrorResourcesBlock';
  sys: ResourceSys;
};

export type MyPageBlockErrorResourcesHyperlink = ResourceLink & {
  __typename?: 'MyPageBlockErrorResourcesHyperlink';
  sys: ResourceSys;
};

export type MyPageBlockErrorResourcesInline = ResourceLink & {
  __typename?: 'MyPageBlockErrorResourcesInline';
  sys: ResourceSys;
};

export type MyPageBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<MyPageBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MyPageBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  error_contains?: InputMaybe<Scalars['String']['input']>;
  error_exists?: InputMaybe<Scalars['Boolean']['input']>;
  error_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  success_contains?: InputMaybe<Scalars['String']['input']>;
  success_exists?: InputMaybe<Scalars['Boolean']['input']>;
  success_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MyPageBlockLinkingCollections = {
  __typename?: 'MyPageBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type MyPageBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MyPageBlockLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MyPageBlockLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type MyPageBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MyPageBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum MyPageBlockLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum MyPageBlockLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum MyPageBlockOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type MyPageBlockSuccess = {
  __typename?: 'MyPageBlockSuccess';
  json: Scalars['JSON']['output'];
  links: MyPageBlockSuccessLinks;
};

export type MyPageBlockSuccessAssets = {
  __typename?: 'MyPageBlockSuccessAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MyPageBlockSuccessEntries = {
  __typename?: 'MyPageBlockSuccessEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MyPageBlockSuccessLinks = {
  __typename?: 'MyPageBlockSuccessLinks';
  assets: MyPageBlockSuccessAssets;
  entries: MyPageBlockSuccessEntries;
  resources: MyPageBlockSuccessResources;
};

export type MyPageBlockSuccessResources = {
  __typename?: 'MyPageBlockSuccessResources';
  block: Array<MyPageBlockSuccessResourcesBlock>;
  hyperlink: Array<MyPageBlockSuccessResourcesHyperlink>;
  inline: Array<MyPageBlockSuccessResourcesInline>;
};

export type MyPageBlockSuccessResourcesBlock = ResourceLink & {
  __typename?: 'MyPageBlockSuccessResourcesBlock';
  sys: ResourceSys;
};

export type MyPageBlockSuccessResourcesHyperlink = ResourceLink & {
  __typename?: 'MyPageBlockSuccessResourcesHyperlink';
  sys: ResourceSys;
};

export type MyPageBlockSuccessResourcesInline = ResourceLink & {
  __typename?: 'MyPageBlockSuccessResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type Navigation = Entry & _Node & {
  __typename?: 'Navigation';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavigationLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  navigationMetadata?: Maybe<Scalars['JSON']['output']>;
  sublinksCollection?: Maybe<NavigationSublinksCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type NavigationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type NavigationNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type NavigationNavigationMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type NavigationSublinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationSublinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigation) */
export type NavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationCollection = {
  __typename?: 'NavigationCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sublinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  sublinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLink = Entry & _Node & {
  __typename?: 'NavigationLink';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  display?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  highlight?: Maybe<Entry>;
  image?: Maybe<Asset>;
  internalLink?: Maybe<NavigationLinkInternalLink>;
  linkParams?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationLinkLinkingCollections>;
  mainNavigation?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openInNewTab?: Maybe<Scalars['Boolean']['output']>;
  rightSectionCollection?: Maybe<NavigationLinkRightSectionCollection>;
  specialLinksCollection?: Maybe<NavigationLinkSpecialLinksCollection>;
  specialLinksTitle?: Maybe<Scalars['String']['output']>;
  sublinksCollection?: Maybe<NavigationLinkSublinksCollection>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkDisplayArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkExternalLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkHighlightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkInternalLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkLinkParamsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkMainNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkOpenInNewTabArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkRightSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkRightSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkSpecialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkSpecialLinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkSpecialLinksTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkSublinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkSublinksCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/navigationLink) */
export type NavigationLinkVariantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type NavigationLinkCollection = {
  __typename?: 'NavigationLinkCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationLinkFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  display?: InputMaybe<Scalars['String']['input']>;
  display_contains?: InputMaybe<Scalars['String']['input']>;
  display_exists?: InputMaybe<Scalars['Boolean']['input']>;
  display_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  display_not?: InputMaybe<Scalars['String']['input']>;
  display_not_contains?: InputMaybe<Scalars['String']['input']>;
  display_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  externalLink_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalLink_not?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  highlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkParams?: InputMaybe<Scalars['String']['input']>;
  linkParams_contains?: InputMaybe<Scalars['String']['input']>;
  linkParams_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkParams_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkParams_not?: InputMaybe<Scalars['String']['input']>;
  linkParams_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkParams_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainNavigation?: InputMaybe<Scalars['Boolean']['input']>;
  mainNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainNavigation_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  openInNewTab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  rightSection?: InputMaybe<CfSplashNestedFilter>;
  rightSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  specialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinksTitle?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_contains?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinksTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialLinksTitle_not?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sublinks?: InputMaybe<CfNavigationLinkNestedFilter>;
  sublinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationLinkInternalLink = Campaign | EditorialPage | LandingPage | Page;

export type NavigationLinkLinkingCollections = {
  __typename?: 'NavigationLinkLinkingCollections';
  blockCollection?: Maybe<BlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  heroCollection?: Maybe<HeroCollection>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  splashCollection?: Maybe<SplashCollection>;
  textCollection?: Maybe<TextCollection>;
};


export type NavigationLinkLinkingCollectionsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkLinkingCollectionsTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkLinkingCollectionsTextCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationLinkLinkingCollectionsBlockCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsHeaderCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsHeroCollectionOrder {
  BackdropAsc = 'backdrop_ASC',
  BackdropDesc = 'backdrop_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsNavigationCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum NavigationLinkLinkingCollectionsSplashCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum NavigationLinkLinkingCollectionsTextCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignAsc = 'textAlign_ASC',
  TextAlignDesc = 'textAlign_DESC'
}

export enum NavigationLinkOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type NavigationLinkRightSectionCollection = {
  __typename?: 'NavigationLinkRightSectionCollection';
  items: Array<Maybe<Splash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationLinkRightSectionCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export type NavigationLinkSpecialLinksCollection = {
  __typename?: 'NavigationLinkSpecialLinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationLinkSpecialLinksCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type NavigationLinkSublinksCollection = {
  __typename?: 'NavigationLinkSublinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationLinkSublinksCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export type NavigationLinkingCollections = {
  __typename?: 'NavigationLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  sideMenuCollection?: Maybe<SideMenuCollection>;
};


export type NavigationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type NavigationLinkingCollectionsSideMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkingCollectionsSideMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum NavigationLinkingCollectionsFooterCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationLinkingCollectionsHeaderCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum NavigationLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum NavigationLinkingCollectionsSideMenuCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type NavigationSublinksCollection = {
  __typename?: 'NavigationSublinksCollection';
  items: Array<Maybe<NavigationLink>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationSublinksCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDay = Entry & _Node & {
  __typename?: 'OpeningHoursDay';
  _id: Scalars['ID']['output'];
  closed?: Maybe<Scalars['Boolean']['output']>;
  closingTime?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dayOfTheWeek?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<OpeningHoursDayLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  openingTime?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayClosedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayClosingTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayDayOfTheWeekArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Store opening hours for a specific day of the week (physical store or customer service). Entries must be in correct order from Monday - Sunday when used in Store-component or other components. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/openingHoursDay) */
export type OpeningHoursDayOpeningTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type OpeningHoursDayCollection = {
  __typename?: 'OpeningHoursDayCollection';
  items: Array<Maybe<OpeningHoursDay>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OpeningHoursDayFilter = {
  AND?: InputMaybe<Array<InputMaybe<OpeningHoursDayFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OpeningHoursDayFilter>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime?: InputMaybe<Scalars['String']['input']>;
  closingTime_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closingTime_not?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dayOfTheWeek?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_contains?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dayOfTheWeek_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dayOfTheWeek_not?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_not_contains?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
  openingTime_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime_not?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type OpeningHoursDayLinkingCollections = {
  __typename?: 'OpeningHoursDayLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  storeCollection?: Maybe<StoreCollection>;
};


export type OpeningHoursDayLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type OpeningHoursDayLinkingCollectionsStoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpeningHoursDayLinkingCollectionsStoreCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum OpeningHoursDayLinkingCollectionsStoreCollectionOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GoogleMapsUrlAsc = 'googleMapsUrl_ASC',
  GoogleMapsUrlDesc = 'googleMapsUrl_DESC',
  InfoTextAsc = 'infoText_ASC',
  InfoTextDesc = 'infoText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StorePageLinkTextAsc = 'storePageLinkText_ASC',
  StorePageLinkTextDesc = 'storePageLinkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum OpeningHoursDayOrder {
  ClosedAsc = 'closed_ASC',
  ClosedDesc = 'closed_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  DayOfTheWeekAsc = 'dayOfTheWeek_ASC',
  DayOfTheWeekDesc = 'dayOfTheWeek_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpeningTimeAsc = 'openingTime_ASC',
  OpeningTimeDesc = 'openingTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  activeMarkets?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alternativeTerms?: Maybe<Scalars['String']['output']>;
  alternativeTermsPage?: Maybe<Page>;
  commerceData?: Maybe<Scalars['JSON']['output']>;
  commerceId?: Maybe<Scalars['String']['output']>;
  commerceName?: Maybe<Scalars['String']['output']>;
  commerceType?: Maybe<Scalars['String']['output']>;
  componentsCollection?: Maybe<PageComponentsCollection>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<PageDescription>;
  desktopBackground?: Maybe<Asset>;
  desktopImage?: Maybe<Asset>;
  dictionary?: Maybe<Dictionary>;
  featuredCollection?: Maybe<PageFeaturedCollection>;
  filtersCollection?: Maybe<PageFiltersCollection>;
  footerBanner?: Maybe<FooterBanner>;
  image?: Maybe<Scalars['JSON']['output']>;
  imageAltText?: Maybe<Scalars['String']['output']>;
  imageMobile?: Maybe<Scalars['JSON']['output']>;
  informationCollection?: Maybe<PageInformationCollection>;
  ingress?: Maybe<PageIngress>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  listType?: Maybe<Scalars['String']['output']>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  metaTitle?: Maybe<Scalars['String']['output']>;
  mobileBackground?: Maybe<Asset>;
  mobileImage?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  previousSlugs?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  previousSlugsSpecifications?: Maybe<Scalars['JSON']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sortProductsBy?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageActiveMarketsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageAlternativeTermsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageAlternativeTermsPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageCommerceDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageCommerceIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageCommerceNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageCommerceTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageComponentsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageDesktopBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageDictionaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DictionaryFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageFeaturedCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageFeaturedCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageFiltersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageFiltersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParametricFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageFooterBannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterBannerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageImageAltTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageImageMobileArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageInformationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageIngressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageListTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageMetaKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageMetaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageMobileBackgroundArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PagePreviousSlugsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PagePreviousSlugsSpecificationsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageSortProductsByArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/page) */
export type PageTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageComponentsCollection = {
  __typename?: 'PageComponentsCollection';
  items: Array<Maybe<PageComponentsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageComponentsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageComponentsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageComponentsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageComponentsItem = AccordionRow | Block | BrandBanner | Carousel | ContentRow | CustomerCommunicationPreferences | Form | Grid | Hero | HighlightRow | MyPageBlock | Navigation | ProductList | Store | TextBlock | UspRow;

export type PageDescription = {
  __typename?: 'PageDescription';
  json: Scalars['JSON']['output'];
  links: PageDescriptionLinks;
};

export type PageDescriptionAssets = {
  __typename?: 'PageDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageDescriptionEntries = {
  __typename?: 'PageDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageDescriptionLinks = {
  __typename?: 'PageDescriptionLinks';
  assets: PageDescriptionAssets;
  entries: PageDescriptionEntries;
  resources: PageDescriptionResources;
};

export type PageDescriptionResources = {
  __typename?: 'PageDescriptionResources';
  block: Array<PageDescriptionResourcesBlock>;
  hyperlink: Array<PageDescriptionResourcesHyperlink>;
  inline: Array<PageDescriptionResourcesInline>;
};

export type PageDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageDescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageDescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageFeaturedCollection = {
  __typename?: 'PageFeaturedCollection';
  items: Array<Maybe<Feature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageFeaturedCollectionOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms?: InputMaybe<Scalars['String']['input']>;
  alternativeTermsPage?: InputMaybe<CfPageNestedFilter>;
  alternativeTermsPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alternativeTerms_not?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId?: InputMaybe<Scalars['String']['input']>;
  commerceId_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceId_not?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName?: InputMaybe<Scalars['String']['input']>;
  commerceName_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName_not?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType?: InputMaybe<Scalars['String']['input']>;
  commerceType_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType_not?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  components?: InputMaybe<CfcomponentsMultiTypeNestedFilter>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  desktopBackground_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dictionary?: InputMaybe<CfDictionaryNestedFilter>;
  dictionary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featured?: InputMaybe<CfFeatureNestedFilter>;
  featuredCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filters?: InputMaybe<CfParametricNestedFilter>;
  filtersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerBanner?: InputMaybe<CfFooterBannerNestedFilter>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAltText?: InputMaybe<Scalars['String']['input']>;
  imageAltText_contains?: InputMaybe<Scalars['String']['input']>;
  imageAltText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageAltText_not?: InputMaybe<Scalars['String']['input']>;
  imageAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  informationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  ingress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  listType?: InputMaybe<Scalars['String']['input']>;
  listType_contains?: InputMaybe<Scalars['String']['input']>;
  listType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  listType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listType_not?: InputMaybe<Scalars['String']['input']>;
  listType_not_contains?: InputMaybe<Scalars['String']['input']>;
  listType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBackground_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugsSpecifications_exists?: InputMaybe<Scalars['Boolean']['input']>;
  previousSlugs_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortProductsBy?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_contains?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sortProductsBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortProductsBy_not?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageFiltersCollection = {
  __typename?: 'PageFiltersCollection';
  items: Array<Maybe<Parametric>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageFiltersCollectionOrder {
  AttributeNameAsc = 'attributeName_ASC',
  AttributeNameDesc = 'attributeName_DESC',
  MaxLabelAsc = 'maxLabel_ASC',
  MaxLabelDesc = 'maxLabel_DESC',
  MinLabelAsc = 'minLabel_ASC',
  MinLabelDesc = 'minLabel_DESC',
  OpenByDefaultAsc = 'openByDefault_ASC',
  OpenByDefaultDesc = 'openByDefault_DESC',
  PrefixAsc = 'prefix_ASC',
  PrefixDesc = 'prefix_DESC',
  SuffixAsc = 'suffix_ASC',
  SuffixDesc = 'suffix_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type PageInformationCollection = {
  __typename?: 'PageInformationCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageIngress = {
  __typename?: 'PageIngress';
  json: Scalars['JSON']['output'];
  links: PageIngressLinks;
};

export type PageIngressAssets = {
  __typename?: 'PageIngressAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageIngressEntries = {
  __typename?: 'PageIngressEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageIngressLinks = {
  __typename?: 'PageIngressLinks';
  assets: PageIngressAssets;
  entries: PageIngressEntries;
  resources: PageIngressResources;
};

export type PageIngressResources = {
  __typename?: 'PageIngressResources';
  block: Array<PageIngressResourcesBlock>;
  hyperlink: Array<PageIngressResourcesHyperlink>;
  inline: Array<PageIngressResourcesInline>;
};

export type PageIngressResourcesBlock = ResourceLink & {
  __typename?: 'PageIngressResourcesBlock';
  sys: ResourceSys;
};

export type PageIngressResourcesHyperlink = ResourceLink & {
  __typename?: 'PageIngressResourcesHyperlink';
  sys: ResourceSys;
};

export type PageIngressResourcesInline = ResourceLink & {
  __typename?: 'PageIngressResourcesInline';
  sys: ResourceSys;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  contentfulImageCollection?: Maybe<ContentfulImageCollection>;
  editorialPageCollection?: Maybe<EditorialPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
  featureCollection?: Maybe<FeatureCollection>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  linkListCollection?: Maybe<LinkListCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  pageCollection?: Maybe<PageCollection>;
  productListCollection?: Maybe<ProductListCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
  splashCollection?: Maybe<SplashCollection>;
  storeCollection?: Maybe<StoreCollection>;
  textBlockCollection?: Maybe<TextBlockCollection>;
};


export type PageLinkingCollectionsContentfulImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsContentfulImageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsEditorialPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsEditorialPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsFeatureCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsFooterBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsHighlightRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsInspoSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsLinkListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsLinkListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsProductListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsProductListCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsSplashCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsStoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsStoreCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageLinkingCollectionsTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsTextBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageLinkingCollectionsContentfulImageCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsEditorialPageCollectionOrder {
  HeroImageAltTextAsc = 'heroImageAltText_ASC',
  HeroImageAltTextDesc = 'heroImageAltText_DESC',
  HeroImageTextAsc = 'heroImageText_ASC',
  HeroImageTextDesc = 'heroImageText_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageLinkingCollectionsFeatureCollectionOrder {
  CallToActionAsc = 'callToAction_ASC',
  CallToActionDesc = 'callToAction_DESC',
  ColorAsc = 'color_ASC',
  ColorDesc = 'color_DESC',
  ImageAlignmentAsc = 'imageAlignment_ASC',
  ImageAlignmentDesc = 'imageAlignment_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextOverlayAsc = 'textOverlay_ASC',
  TextOverlayDesc = 'textOverlay_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageLinkingCollectionsFooterBannerCollectionOrder {
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageLinkingCollectionsHighlightRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsInspoSplashCollectionOrder {
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LayoutAsc = 'layout_ASC',
  LayoutDesc = 'layout_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum PageLinkingCollectionsLinkListCollectionOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum PageLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum PageLinkingCollectionsProductListCollectionOrder {
  CountAsc = 'count_ASC',
  CountDesc = 'count_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageLinkingCollectionsSplashCollectionOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

export enum PageLinkingCollectionsStoreCollectionOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GoogleMapsUrlAsc = 'googleMapsUrl_ASC',
  GoogleMapsUrlDesc = 'googleMapsUrl_DESC',
  InfoTextAsc = 'infoText_ASC',
  InfoTextDesc = 'infoText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StorePageLinkTextAsc = 'storePageLinkText_ASC',
  StorePageLinkTextDesc = 'storePageLinkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum PageLinkingCollectionsTextBlockCollectionOrder {
  BrandHomepageAsc = 'brandHomepage_ASC',
  BrandHomepageDesc = 'brandHomepage_DESC',
  DefaultOpenAsc = 'defaultOpen_ASC',
  DefaultOpenDesc = 'defaultOpen_DESC',
  DesignerHomepageAsc = 'designerHomepage_ASC',
  DesignerHomepageDesc = 'designerHomepage_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleIconAsc = 'titleIcon_ASC',
  TitleIconDesc = 'titleIcon_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum PageOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type Parametric = Entry & _Node & {
  __typename?: 'Parametric';
  _id: Scalars['ID']['output'];
  attributeName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ParametricLinkingCollections>;
  maxLabel?: Maybe<Scalars['String']['output']>;
  minLabel?: Maybe<Scalars['String']['output']>;
  openByDefault?: Maybe<Scalars['Boolean']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  suffix?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricAttributeNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricMaxLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricMinLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricOpenByDefaultArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricPrefixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricSuffixArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Parametric used in filter or parametric list [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/parametric) */
export type ParametricTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ParametricCollection = {
  __typename?: 'ParametricCollection';
  items: Array<Maybe<Parametric>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ParametricFilter = {
  AND?: InputMaybe<Array<InputMaybe<ParametricFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ParametricFilter>>>;
  attributeName?: InputMaybe<Scalars['String']['input']>;
  attributeName_contains?: InputMaybe<Scalars['String']['input']>;
  attributeName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attributeName_not?: InputMaybe<Scalars['String']['input']>;
  attributeName_not_contains?: InputMaybe<Scalars['String']['input']>;
  attributeName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  maxLabel?: InputMaybe<Scalars['String']['input']>;
  maxLabel_contains?: InputMaybe<Scalars['String']['input']>;
  maxLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  maxLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  maxLabel_not?: InputMaybe<Scalars['String']['input']>;
  maxLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  maxLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minLabel?: InputMaybe<Scalars['String']['input']>;
  minLabel_contains?: InputMaybe<Scalars['String']['input']>;
  minLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  minLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minLabel_not?: InputMaybe<Scalars['String']['input']>;
  minLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  minLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openByDefault?: InputMaybe<Scalars['Boolean']['input']>;
  openByDefault_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openByDefault_not?: InputMaybe<Scalars['Boolean']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  prefix_contains?: InputMaybe<Scalars['String']['input']>;
  prefix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prefix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prefix_not?: InputMaybe<Scalars['String']['input']>;
  prefix_not_contains?: InputMaybe<Scalars['String']['input']>;
  prefix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  suffix_contains?: InputMaybe<Scalars['String']['input']>;
  suffix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  suffix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suffix_not?: InputMaybe<Scalars['String']['input']>;
  suffix_not_contains?: InputMaybe<Scalars['String']['input']>;
  suffix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ParametricLinkingCollections = {
  __typename?: 'ParametricLinkingCollections';
  blockCollection?: Maybe<BlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ParametricLinkingCollectionsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ParametricLinkingCollectionsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ParametricLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ParametricLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ParametricLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ParametricLinkingCollectionsBlockCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ParametricLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ParametricOrder {
  AttributeNameAsc = 'attributeName_ASC',
  AttributeNameDesc = 'attributeName_DESC',
  MaxLabelAsc = 'maxLabel_ASC',
  MaxLabelDesc = 'maxLabel_DESC',
  MinLabelAsc = 'minLabel_ASC',
  MinLabelDesc = 'minLabel_DESC',
  OpenByDefaultAsc = 'openByDefault_ASC',
  OpenByDefaultDesc = 'openByDefault_DESC',
  PrefixAsc = 'prefix_ASC',
  PrefixDesc = 'prefix_DESC',
  SuffixAsc = 'suffix_ASC',
  SuffixDesc = 'suffix_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductList = Entry & _Node & {
  __typename?: 'ProductList';
  _id: Scalars['ID']['output'];
  commerceData?: Maybe<Scalars['JSON']['output']>;
  contentfulMetadata: ContentfulMetadata;
  count?: Maybe<Scalars['Int']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Page>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ProductListLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListCommerceDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListCountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Component used for listing products [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productList) */
export type ProductListNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListCollection = {
  __typename?: 'ProductListCollection';
  items: Array<Maybe<ProductList>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProductListFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductListFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductListFilter>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_exists?: InputMaybe<Scalars['Boolean']['input']>;
  count_gt?: InputMaybe<Scalars['Int']['input']>;
  count_gte?: InputMaybe<Scalars['Int']['input']>;
  count_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  count_lt?: InputMaybe<Scalars['Int']['input']>;
  count_lte?: InputMaybe<Scalars['Int']['input']>;
  count_not?: InputMaybe<Scalars['Int']['input']>;
  count_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<CfPageNestedFilter>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ProductListLinkingCollections = {
  __typename?: 'ProductListLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ProductListLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductListLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductListLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductListLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductListLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductListLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ProductListLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum ProductListOrder {
  CountAsc = 'count_ASC',
  CountDesc = 'count_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfo = Entry & _Node & {
  __typename?: 'ProductPageInfo';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  dictionary?: Maybe<Dictionary>;
  fabricSample?: Maybe<Splash>;
  interiorDesignService?: Maybe<Splash>;
  linkedFrom?: Maybe<ProductPageInfoLinkingCollections>;
  madeToOrderInfo?: Maybe<TextBlock>;
  matchPriceForm?: Maybe<Form>;
  name?: Maybe<Scalars['String']['output']>;
  newsletterForm?: Maybe<Form>;
  parametricsCollection?: Maybe<ProductPageInfoParametricsCollection>;
  placeOrderForm?: Maybe<Form>;
  priceInfo?: Maybe<Block>;
  stockInfo?: Maybe<Block>;
  stringPlanner?: Maybe<Splash>;
  sys: Sys;
  uspsCollection?: Maybe<ProductPageInfoUspsCollection>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoDictionaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DictionaryFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoFabricSampleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoInteriorDesignServiceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoMadeToOrderInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TextBlockFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoMatchPriceFormArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoNewsletterFormArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoParametricsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductPageInfoParametricsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlockFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoPlaceOrderFormArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoPriceInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoStockInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<BlockFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoStringPlannerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SplashFilter>;
};


/** Product page information. Popups, text, dictionary etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/productPageInfo) */
export type ProductPageInfoUspsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductPageInfoUspsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlockFilter>;
};

export type ProductPageInfoCollection = {
  __typename?: 'ProductPageInfoCollection';
  items: Array<Maybe<ProductPageInfo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ProductPageInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductPageInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductPageInfoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dictionary?: InputMaybe<CfDictionaryNestedFilter>;
  dictionary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fabricSample?: InputMaybe<CfSplashNestedFilter>;
  fabricSample_exists?: InputMaybe<Scalars['Boolean']['input']>;
  interiorDesignService?: InputMaybe<CfSplashNestedFilter>;
  interiorDesignService_exists?: InputMaybe<Scalars['Boolean']['input']>;
  madeToOrderInfo?: InputMaybe<CfTextBlockNestedFilter>;
  madeToOrderInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  matchPriceForm?: InputMaybe<CfFormNestedFilter>;
  matchPriceForm_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsletterForm?: InputMaybe<CfFormNestedFilter>;
  newsletterForm_exists?: InputMaybe<Scalars['Boolean']['input']>;
  parametrics?: InputMaybe<CfBlockNestedFilter>;
  parametricsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeOrderForm?: InputMaybe<CfFormNestedFilter>;
  placeOrderForm_exists?: InputMaybe<Scalars['Boolean']['input']>;
  priceInfo?: InputMaybe<CfBlockNestedFilter>;
  priceInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stockInfo?: InputMaybe<CfBlockNestedFilter>;
  stockInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  stringPlanner?: InputMaybe<CfSplashNestedFilter>;
  stringPlanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  usps?: InputMaybe<CfBlockNestedFilter>;
  uspsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductPageInfoLinkingCollections = {
  __typename?: 'ProductPageInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ProductPageInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum ProductPageInfoOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ProductPageInfoParametricsCollection = {
  __typename?: 'ProductPageInfoParametricsCollection';
  items: Array<Maybe<Block>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProductPageInfoParametricsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ProductPageInfoUspsCollection = {
  __typename?: 'ProductPageInfoUspsCollection';
  items: Array<Maybe<Block>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ProductPageInfoUspsCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  accordion?: Maybe<Accordion>;
  accordionCollection?: Maybe<AccordionCollection>;
  accordionRow?: Maybe<AccordionRow>;
  accordionRowCollection?: Maybe<AccordionRowCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  block?: Maybe<Block>;
  blockCollection?: Maybe<BlockCollection>;
  brandBanner?: Maybe<BrandBanner>;
  brandBannerCollection?: Maybe<BrandBannerCollection>;
  campaign?: Maybe<Campaign>;
  campaignCollection?: Maybe<CampaignCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  carousel?: Maybe<Carousel>;
  carouselCollection?: Maybe<CarouselCollection>;
  contentRow?: Maybe<ContentRow>;
  contentRowCollection?: Maybe<ContentRowCollection>;
  contentfulImage?: Maybe<ContentfulImage>;
  contentfulImageCollection?: Maybe<ContentfulImageCollection>;
  customerCommunicationPreferences?: Maybe<CustomerCommunicationPreferences>;
  customerCommunicationPreferencesCollection?: Maybe<CustomerCommunicationPreferencesCollection>;
  dictionary?: Maybe<Dictionary>;
  dictionaryCollection?: Maybe<DictionaryCollection>;
  editorialBlock?: Maybe<EditorialBlock>;
  editorialBlockCollection?: Maybe<EditorialBlockCollection>;
  editorialGallery?: Maybe<EditorialGallery>;
  editorialGalleryCollection?: Maybe<EditorialGalleryCollection>;
  editorialPage?: Maybe<EditorialPage>;
  editorialPageCollection?: Maybe<EditorialPageCollection>;
  editorialProducts?: Maybe<EditorialProducts>;
  editorialProductsCollection?: Maybe<EditorialProductsCollection>;
  editorialRow?: Maybe<EditorialRow>;
  editorialRowCollection?: Maybe<EditorialRowCollection>;
  editorialSplash?: Maybe<EditorialSplash>;
  editorialSplashCollection?: Maybe<EditorialSplashCollection>;
  entryCollection?: Maybe<EntryCollection>;
  exceptionalOpeningHoursDay?: Maybe<ExceptionalOpeningHoursDay>;
  exceptionalOpeningHoursDayCollection?: Maybe<ExceptionalOpeningHoursDayCollection>;
  feature?: Maybe<Feature>;
  featureCollection?: Maybe<FeatureCollection>;
  footer?: Maybe<Footer>;
  footerBanner?: Maybe<FooterBanner>;
  footerBannerCollection?: Maybe<FooterBannerCollection>;
  footerCollection?: Maybe<FooterCollection>;
  form?: Maybe<Form>;
  formCollection?: Maybe<FormCollection>;
  grid?: Maybe<Grid>;
  gridCollection?: Maybe<GridCollection>;
  header?: Maybe<Header>;
  headerCollection?: Maybe<HeaderCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  highlightRow?: Maybe<HighlightRow>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  inspoSplash?: Maybe<InspoSplash>;
  inspoSplashCollection?: Maybe<InspoSplashCollection>;
  keyValue?: Maybe<KeyValue>;
  keyValueCollection?: Maybe<KeyValueCollection>;
  landingPage?: Maybe<LandingPage>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  linkList?: Maybe<LinkList>;
  linkListCollection?: Maybe<LinkListCollection>;
  myPageBlock?: Maybe<MyPageBlock>;
  myPageBlockCollection?: Maybe<MyPageBlockCollection>;
  navigation?: Maybe<Navigation>;
  navigationCollection?: Maybe<NavigationCollection>;
  navigationLink?: Maybe<NavigationLink>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  openingHoursDay?: Maybe<OpeningHoursDay>;
  openingHoursDayCollection?: Maybe<OpeningHoursDayCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  parametric?: Maybe<Parametric>;
  parametricCollection?: Maybe<ParametricCollection>;
  productList?: Maybe<ProductList>;
  productListCollection?: Maybe<ProductListCollection>;
  productPageInfo?: Maybe<ProductPageInfo>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
  sideMenu?: Maybe<SideMenu>;
  sideMenuCollection?: Maybe<SideMenuCollection>;
  siteinfo?: Maybe<Siteinfo>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
  splash?: Maybe<Splash>;
  splashCollection?: Maybe<SplashCollection>;
  store?: Maybe<Store>;
  storeCollection?: Maybe<StoreCollection>;
  tag?: Maybe<Tag>;
  tagCollection?: Maybe<TagCollection>;
  text?: Maybe<Text>;
  textBlock?: Maybe<TextBlock>;
  textBlockCollection?: Maybe<TextBlockCollection>;
  textCollection?: Maybe<TextCollection>;
  usp?: Maybe<Usp>;
  uspCollection?: Maybe<UspCollection>;
  uspRow?: Maybe<UspRow>;
  uspRowCollection?: Maybe<UspRowCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionFilter>;
};


export type QueryAccordionRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAccordionRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AccordionRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccordionRowFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlockFilter>;
};


export type QueryBrandBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBrandBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BrandBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BrandBannerFilter>;
};


export type QueryCampaignArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCampaignCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CampaignOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryCarouselArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CarouselOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselFilter>;
};


export type QueryContentRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentRowFilter>;
};


export type QueryContentfulImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryContentfulImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ContentfulImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulImageFilter>;
};


export type QueryCustomerCommunicationPreferencesArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCustomerCommunicationPreferencesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerCommunicationPreferencesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerCommunicationPreferencesFilter>;
};


export type QueryDictionaryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryDictionaryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<DictionaryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DictionaryFilter>;
};


export type QueryEditorialBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialBlockFilter>;
};


export type QueryEditorialGalleryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialGalleryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialGalleryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialGalleryFilter>;
};


export type QueryEditorialPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialPageFilter>;
};


export type QueryEditorialProductsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialProductsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialProductsFilter>;
};


export type QueryEditorialRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialRowFilter>;
};


export type QueryEditorialSplashArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEditorialSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EditorialSplashOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EditorialSplashFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExceptionalOpeningHoursDayArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryExceptionalOpeningHoursDayCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ExceptionalOpeningHoursDayOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExceptionalOpeningHoursDayFilter>;
};


export type QueryFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FeatureFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterBannerFilter>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFormArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFormCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FormOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FormFilter>;
};


export type QueryGridArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GridOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GridFilter>;
};


export type QueryHeaderArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeaderOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryHighlightRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HighlightRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HighlightRowFilter>;
};


export type QueryInspoSplashArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInspoSplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InspoSplashOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InspoSplashFilter>;
};


export type QueryKeyValueArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryKeyValueCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<KeyValueOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<KeyValueFilter>;
};


export type QueryLandingPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandingPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageFilter>;
};


export type QueryLinkListArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkListFilter>;
};


export type QueryMyPageBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMyPageBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MyPageBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MyPageBlockFilter>;
};


export type QueryNavigationArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationFilter>;
};


export type QueryNavigationLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationLinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


export type QueryOpeningHoursDayArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOpeningHoursDayCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpeningHoursDayOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OpeningHoursDayFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryParametricArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryParametricCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ParametricOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParametricFilter>;
};


export type QueryProductListArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductListCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductListOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductListFilter>;
};


export type QueryProductPageInfoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ProductPageInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductPageInfoFilter>;
};


export type QuerySideMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySideMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SideMenuFilter>;
};


export type QuerySiteinfoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SiteinfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteinfoFilter>;
};


export type QuerySplashArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySplashCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SplashFilter>;
};


export type QueryStoreArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStoreCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreFilter>;
};


export type QueryTagArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TagOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TagFilter>;
};


export type QueryTextArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextBlockFilter>;
};


export type QueryTextCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextFilter>;
};


export type QueryUspArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUspCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UspOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UspFilter>;
};


export type QueryUspRowArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUspRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UspRowOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UspRowFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** Side menu with navigation(s), store info (customer service). Used for example on Service-pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/sideMenu) */
export type SideMenu = Entry & _Node & {
  __typename?: 'SideMenu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SideMenuLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  navigationsCollection?: Maybe<SideMenuNavigationsCollection>;
  storeInfo?: Maybe<Store>;
  sys: Sys;
};


/** Side menu with navigation(s), store info (customer service). Used for example on Service-pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/sideMenu) */
export type SideMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Side menu with navigation(s), store info (customer service). Used for example on Service-pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/sideMenu) */
export type SideMenuNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Side menu with navigation(s), store info (customer service). Used for example on Service-pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/sideMenu) */
export type SideMenuNavigationsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideMenuNavigationsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavigationFilter>;
};


/** Side menu with navigation(s), store info (customer service). Used for example on Service-pages. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/sideMenu) */
export type SideMenuStoreInfoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StoreFilter>;
};

export type SideMenuCollection = {
  __typename?: 'SideMenuCollection';
  items: Array<Maybe<SideMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SideMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<SideMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SideMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigations?: InputMaybe<CfNavigationNestedFilter>;
  navigationsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storeInfo?: InputMaybe<CfStoreNestedFilter>;
  storeInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type SideMenuLinkingCollections = {
  __typename?: 'SideMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  siteinfoCollection?: Maybe<SiteinfoCollection>;
};


export type SideMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SideMenuLinkingCollectionsSiteinfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SideMenuLinkingCollectionsSiteinfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SideMenuLinkingCollectionsSiteinfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SideMenuNavigationsCollection = {
  __typename?: 'SideMenuNavigationsCollection';
  items: Array<Maybe<Navigation>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SideMenuNavigationsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SideMenuOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type Siteinfo = Entry & _Node & {
  __typename?: 'Siteinfo';
  _id: Scalars['ID']['output'];
  campaignPriorityCollection?: Maybe<SiteinfoCampaignPriorityCollection>;
  contentfulMetadata: ContentfulMetadata;
  copyright?: Maybe<SiteinfoCopyright>;
  description?: Maybe<Scalars['String']['output']>;
  faviconCollection?: Maybe<AssetCollection>;
  footer?: Maybe<Footer>;
  globalDictionary?: Maybe<Dictionary>;
  header?: Maybe<Header>;
  keywords?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  linkedFrom?: Maybe<SiteinfoLinkingCollections>;
  logoImgixCollection?: Maybe<SiteinfoLogoImgixCollection>;
  marketSelector?: Maybe<Form>;
  minimumOrderValue?: Maybe<Scalars['JSON']['output']>;
  myPagesRegisterPage?: Maybe<Page>;
  myPagesStartPage?: Maybe<Page>;
  name?: Maybe<Scalars['String']['output']>;
  newsletter?: Maybe<Form>;
  newsletterFooter?: Maybe<SiteinfoNewsletterFooter>;
  openGraphImage?: Maybe<Asset>;
  paymentImagesCollection?: Maybe<SiteinfoPaymentImagesCollection>;
  sideMenuMyPages?: Maybe<SideMenu>;
  sideMenuServicePages?: Maybe<SideMenu>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoCampaignPriorityCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SiteinfoCampaignPriorityCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoFaviconCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoGlobalDictionaryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DictionaryFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeaderFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoKeywordsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoLogoImgixCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoMarketSelectorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoMinimumOrderValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoMyPagesRegisterPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoMyPagesStartPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoNewsletterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FormFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoNewsletterFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoOpenGraphImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoPaymentImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SiteinfoPaymentImagesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentfulImageFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoSideMenuMyPagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SideMenuFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoSideMenuServicePagesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SideMenuFilter>;
};


/** Site information and metadata etc. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/siteinfo) */
export type SiteinfoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SiteinfoCampaignPriorityCollection = {
  __typename?: 'SiteinfoCampaignPriorityCollection';
  items: Array<Maybe<Campaign>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SiteinfoCampaignPriorityCollectionOrder {
  CampaignBadgeAsc = 'campaignBadge_ASC',
  CampaignBadgeDesc = 'campaignBadge_DESC',
  CampaignEndAsc = 'campaignEnd_ASC',
  CampaignEndDesc = 'campaignEnd_DESC',
  CampaignLabelAsc = 'campaignLabel_ASC',
  CampaignLabelDesc = 'campaignLabel_DESC',
  CampaignNameAsc = 'campaignName_ASC',
  CampaignNameDesc = 'campaignName_DESC',
  CampaignStartAsc = 'campaignStart_ASC',
  CampaignStartDesc = 'campaignStart_DESC',
  CampaignTitleAsc = 'campaignTitle_ASC',
  CampaignTitleDesc = 'campaignTitle_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PageHeaderAsc = 'pageHeader_ASC',
  PageHeaderDesc = 'pageHeader_DESC',
  PageUrlAsc = 'pageUrl_ASC',
  PageUrlDesc = 'pageUrl_DESC',
  ShowBadgeForAllProductsInCampaignAsc = 'showBadgeForAllProductsInCampaign_ASC',
  ShowBadgeForAllProductsInCampaignDesc = 'showBadgeForAllProductsInCampaign_DESC',
  ShowCountdownAsc = 'showCountdown_ASC',
  ShowCountdownDesc = 'showCountdown_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type SiteinfoCollection = {
  __typename?: 'SiteinfoCollection';
  items: Array<Maybe<Siteinfo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteinfoCopyright = {
  __typename?: 'SiteinfoCopyright';
  json: Scalars['JSON']['output'];
  links: SiteinfoCopyrightLinks;
};

export type SiteinfoCopyrightAssets = {
  __typename?: 'SiteinfoCopyrightAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SiteinfoCopyrightEntries = {
  __typename?: 'SiteinfoCopyrightEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SiteinfoCopyrightLinks = {
  __typename?: 'SiteinfoCopyrightLinks';
  assets: SiteinfoCopyrightAssets;
  entries: SiteinfoCopyrightEntries;
  resources: SiteinfoCopyrightResources;
};

export type SiteinfoCopyrightResources = {
  __typename?: 'SiteinfoCopyrightResources';
  block: Array<SiteinfoCopyrightResourcesBlock>;
  hyperlink: Array<SiteinfoCopyrightResourcesHyperlink>;
  inline: Array<SiteinfoCopyrightResourcesInline>;
};

export type SiteinfoCopyrightResourcesBlock = ResourceLink & {
  __typename?: 'SiteinfoCopyrightResourcesBlock';
  sys: ResourceSys;
};

export type SiteinfoCopyrightResourcesHyperlink = ResourceLink & {
  __typename?: 'SiteinfoCopyrightResourcesHyperlink';
  sys: ResourceSys;
};

export type SiteinfoCopyrightResourcesInline = ResourceLink & {
  __typename?: 'SiteinfoCopyrightResourcesInline';
  sys: ResourceSys;
};

export type SiteinfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SiteinfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SiteinfoFilter>>>;
  campaignPriority?: InputMaybe<CfCampaignNestedFilter>;
  campaignPriorityCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  faviconCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  globalDictionary?: InputMaybe<CfDictionaryNestedFilter>;
  globalDictionary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<CfHeaderNestedFilter>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  keywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  keywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logoImgixCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  marketSelector?: InputMaybe<CfFormNestedFilter>;
  marketSelector_exists?: InputMaybe<Scalars['Boolean']['input']>;
  minimumOrderValue_exists?: InputMaybe<Scalars['Boolean']['input']>;
  myPagesRegisterPage?: InputMaybe<CfPageNestedFilter>;
  myPagesRegisterPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  myPagesStartPage?: InputMaybe<CfPageNestedFilter>;
  myPagesStartPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  newsletter?: InputMaybe<CfFormNestedFilter>;
  newsletterFooter_contains?: InputMaybe<Scalars['String']['input']>;
  newsletterFooter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  newsletterFooter_not_contains?: InputMaybe<Scalars['String']['input']>;
  newsletter_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paymentImages?: InputMaybe<CfContentfulImageNestedFilter>;
  paymentImagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sideMenuMyPages?: InputMaybe<CfSideMenuNestedFilter>;
  sideMenuMyPages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sideMenuServicePages?: InputMaybe<CfSideMenuNestedFilter>;
  sideMenuServicePages_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SiteinfoLinkingCollections = {
  __typename?: 'SiteinfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type SiteinfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export type SiteinfoLogoImgixCollection = {
  __typename?: 'SiteinfoLogoImgixCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SiteinfoNewsletterFooter = {
  __typename?: 'SiteinfoNewsletterFooter';
  json: Scalars['JSON']['output'];
  links: SiteinfoNewsletterFooterLinks;
};

export type SiteinfoNewsletterFooterAssets = {
  __typename?: 'SiteinfoNewsletterFooterAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type SiteinfoNewsletterFooterEntries = {
  __typename?: 'SiteinfoNewsletterFooterEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type SiteinfoNewsletterFooterLinks = {
  __typename?: 'SiteinfoNewsletterFooterLinks';
  assets: SiteinfoNewsletterFooterAssets;
  entries: SiteinfoNewsletterFooterEntries;
  resources: SiteinfoNewsletterFooterResources;
};

export type SiteinfoNewsletterFooterResources = {
  __typename?: 'SiteinfoNewsletterFooterResources';
  block: Array<SiteinfoNewsletterFooterResourcesBlock>;
  hyperlink: Array<SiteinfoNewsletterFooterResourcesHyperlink>;
  inline: Array<SiteinfoNewsletterFooterResourcesInline>;
};

export type SiteinfoNewsletterFooterResourcesBlock = ResourceLink & {
  __typename?: 'SiteinfoNewsletterFooterResourcesBlock';
  sys: ResourceSys;
};

export type SiteinfoNewsletterFooterResourcesHyperlink = ResourceLink & {
  __typename?: 'SiteinfoNewsletterFooterResourcesHyperlink';
  sys: ResourceSys;
};

export type SiteinfoNewsletterFooterResourcesInline = ResourceLink & {
  __typename?: 'SiteinfoNewsletterFooterResourcesInline';
  sys: ResourceSys;
};

export enum SiteinfoOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type SiteinfoPaymentImagesCollection = {
  __typename?: 'SiteinfoPaymentImagesCollection';
  items: Array<Maybe<ContentfulImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SiteinfoPaymentImagesCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type Splash = Entry & _Node & {
  __typename?: 'Splash';
  _id: Scalars['ID']['output'];
  contentPosition?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  desktopImage?: Maybe<Asset>;
  desktopVideo?: Maybe<Asset>;
  header?: Maybe<Scalars['String']['output']>;
  href?: Maybe<SplashHref>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SplashLinkingCollections>;
  mobileImage?: Maybe<Asset>;
  mobileVideo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textColor?: Maybe<Scalars['String']['output']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashContentPositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashDesktopImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashDesktopVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashHeaderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashMobileImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashMobileVideoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Splashes made for use in Content Row. Style of splash is decided in Content Row. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/splash) */
export type SplashTextColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SplashCollection = {
  __typename?: 'SplashCollection';
  items: Array<Maybe<Splash>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SplashFilter = {
  AND?: InputMaybe<Array<InputMaybe<SplashFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SplashFilter>>>;
  contentPosition?: InputMaybe<Scalars['String']['input']>;
  contentPosition_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition_not?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  header_contains?: InputMaybe<Scalars['String']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  header_not?: InputMaybe<Scalars['String']['input']>;
  header_not_contains?: InputMaybe<Scalars['String']['input']>;
  header_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SplashHref = Campaign | EditorialPage | LandingPage | NavigationLink | Page;

export type SplashLinkingCollections = {
  __typename?: 'SplashLinkingCollections';
  blockCollection?: Maybe<BlockCollection>;
  carouselCollection?: Maybe<CarouselCollection>;
  contentRowCollection?: Maybe<ContentRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
  gridCollection?: Maybe<GridCollection>;
  highlightRowCollection?: Maybe<HighlightRowCollection>;
  navigationLinkCollection?: Maybe<NavigationLinkCollection>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
};


export type SplashLinkingCollectionsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsContentRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsContentRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsHighlightRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsHighlightRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsNavigationLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsNavigationLinkCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SplashLinkingCollectionsProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SplashLinkingCollectionsProductPageInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SplashLinkingCollectionsBlockCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum SplashLinkingCollectionsCarouselCollectionOrder {
  CarouselOnDesktopAsc = 'carouselOnDesktop_ASC',
  CarouselOnDesktopDesc = 'carouselOnDesktop_DESC',
  CarouselOnMobileAsc = 'carouselOnMobile_ASC',
  CarouselOnMobileDesc = 'carouselOnMobile_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SplashLinkingCollectionsContentRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum SplashLinkingCollectionsGridCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SplashLinkingCollectionsHighlightRowCollectionOrder {
  DevicesAsc = 'devices_ASC',
  DevicesDesc = 'devices_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SplashLinkingCollectionsNavigationLinkCollectionOrder {
  DisplayAsc = 'display_ASC',
  DisplayDesc = 'display_DESC',
  ExternalLinkAsc = 'externalLink_ASC',
  ExternalLinkDesc = 'externalLink_DESC',
  LinkParamsAsc = 'linkParams_ASC',
  LinkParamsDesc = 'linkParams_DESC',
  MainNavigationAsc = 'mainNavigation_ASC',
  MainNavigationDesc = 'mainNavigation_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpenInNewTabAsc = 'openInNewTab_ASC',
  OpenInNewTabDesc = 'openInNewTab_DESC',
  SpecialLinksTitleAsc = 'specialLinksTitle_ASC',
  SpecialLinksTitleDesc = 'specialLinksTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  VariantAsc = 'variant_ASC',
  VariantDesc = 'variant_DESC'
}

export enum SplashLinkingCollectionsProductPageInfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SplashOrder {
  ContentPositionAsc = 'contentPosition_ASC',
  ContentPositionDesc = 'contentPosition_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextColorAsc = 'textColor_ASC',
  TextColorDesc = 'textColor_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type Store = Entry & _Node & {
  __typename?: 'Store';
  _id: Scalars['ID']['output'];
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<StoreDescription>;
  email?: Maybe<Scalars['String']['output']>;
  exceptionalOpeningHoursCollection?: Maybe<StoreExceptionalOpeningHoursCollection>;
  googleMaps?: Maybe<Location>;
  googleMapsUrl?: Maybe<Scalars['String']['output']>;
  infoText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<StoreLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  openingHoursCollection?: Maybe<StoreOpeningHoursCollection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  storePage?: Maybe<Page>;
  storePageLinkText?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreCityArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreExceptionalOpeningHoursCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreExceptionalOpeningHoursCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ExceptionalOpeningHoursDayFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreGoogleMapsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreGoogleMapsUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreInfoTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreOpeningHoursCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreOpeningHoursCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OpeningHoursDayFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StorePhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StorePostalCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreStorePageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreStorePageLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/store) */
export type StoreTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type StoreCollection = {
  __typename?: 'StoreCollection';
  items: Array<Maybe<Store>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type StoreDescription = {
  __typename?: 'StoreDescription';
  json: Scalars['JSON']['output'];
  links: StoreDescriptionLinks;
};

export type StoreDescriptionAssets = {
  __typename?: 'StoreDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StoreDescriptionEntries = {
  __typename?: 'StoreDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StoreDescriptionLinks = {
  __typename?: 'StoreDescriptionLinks';
  assets: StoreDescriptionAssets;
  entries: StoreDescriptionEntries;
  resources: StoreDescriptionResources;
};

export type StoreDescriptionResources = {
  __typename?: 'StoreDescriptionResources';
  block: Array<StoreDescriptionResourcesBlock>;
  hyperlink: Array<StoreDescriptionResourcesHyperlink>;
  inline: Array<StoreDescriptionResourcesInline>;
};

export type StoreDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'StoreDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type StoreDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'StoreDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type StoreDescriptionResourcesInline = ResourceLink & {
  __typename?: 'StoreDescriptionResourcesInline';
  sys: ResourceSys;
};

export type StoreExceptionalOpeningHoursCollection = {
  __typename?: 'StoreExceptionalOpeningHoursCollection';
  items: Array<Maybe<ExceptionalOpeningHoursDay>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum StoreExceptionalOpeningHoursCollectionOrder {
  ClosedAsc = 'closed_ASC',
  ClosedDesc = 'closed_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpeningTimeAsc = 'openingTime_ASC',
  OpeningTimeDesc = 'openingTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type StoreFilter = {
  AND?: InputMaybe<Array<InputMaybe<StoreFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StoreFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exceptionalOpeningHours?: InputMaybe<CfExceptionalOpeningHoursDayNestedFilter>;
  exceptionalOpeningHoursCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMapsUrl?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMapsUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  googleMapsUrl_not?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  googleMaps_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMaps_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  googleMaps_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  infoText_contains?: InputMaybe<Scalars['String']['input']>;
  infoText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  infoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infoText_not?: InputMaybe<Scalars['String']['input']>;
  infoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  infoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingHours?: InputMaybe<CfOpeningHoursDayNestedFilter>;
  openingHoursCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  postalCode_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode_not?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePage?: InputMaybe<CfPageNestedFilter>;
  storePageLinkText?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_contains?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storePageLinkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePageLinkText_not?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StoreLinkingCollections = {
  __typename?: 'StoreLinkingCollections';
  editorialRowCollection?: Maybe<EditorialRowCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  headerCollection?: Maybe<HeaderCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  sideMenuCollection?: Maybe<SideMenuCollection>;
};


export type StoreLinkingCollectionsEditorialRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsEditorialRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsHeaderCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsHeaderCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type StoreLinkingCollectionsSideMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StoreLinkingCollectionsSideMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum StoreLinkingCollectionsEditorialRowCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SpacingAsc = 'spacing_ASC',
  SpacingDesc = 'spacing_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export enum StoreLinkingCollectionsFooterCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum StoreLinkingCollectionsHeaderCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum StoreLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum StoreLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum StoreLinkingCollectionsSideMenuCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type StoreOpeningHoursCollection = {
  __typename?: 'StoreOpeningHoursCollection';
  items: Array<Maybe<OpeningHoursDay>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum StoreOpeningHoursCollectionOrder {
  ClosedAsc = 'closed_ASC',
  ClosedDesc = 'closed_DESC',
  ClosingTimeAsc = 'closingTime_ASC',
  ClosingTimeDesc = 'closingTime_DESC',
  DayOfTheWeekAsc = 'dayOfTheWeek_ASC',
  DayOfTheWeekDesc = 'dayOfTheWeek_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OpeningTimeAsc = 'openingTime_ASC',
  OpeningTimeDesc = 'openingTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum StoreOrder {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  GoogleMapsUrlAsc = 'googleMapsUrl_ASC',
  GoogleMapsUrlDesc = 'googleMapsUrl_DESC',
  InfoTextAsc = 'infoText_ASC',
  InfoTextDesc = 'infoText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PostalCodeAsc = 'postalCode_ASC',
  PostalCodeDesc = 'postalCode_DESC',
  StorePageLinkTextAsc = 'storePageLinkText_ASC',
  StorePageLinkTextDesc = 'storePageLinkText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/tag) */
export type Tag = Entry & _Node & {
  __typename?: 'Tag';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  key?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TagLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  value?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/tag) */
export type TagKeyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/tag) */
export type TagLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/tag) */
export type TagNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/tag) */
export type TagValueArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TagCollection = {
  __typename?: 'TagCollection';
  items: Array<Maybe<Tag>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TagFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagLinkingCollections = {
  __typename?: 'TagLinkingCollections';
  editorialPageCollection?: Maybe<EditorialPageCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type TagLinkingCollectionsEditorialPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TagLinkingCollectionsEditorialPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TagLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TagLinkingCollectionsEditorialPageCollectionOrder {
  HeroImageAltTextAsc = 'heroImageAltText_ASC',
  HeroImageAltTextDesc = 'heroImageAltText_DESC',
  HeroImageTextAsc = 'heroImageText_ASC',
  HeroImageTextDesc = 'heroImageText_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  PublishingDateAsc = 'publishingDate_ASC',
  PublishingDateDesc = 'publishingDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TagOrder {
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type Text = Entry & _Node & {
  __typename?: 'Text';
  _id: Scalars['ID']['output'];
  content?: Maybe<TextContent>;
  contentfulMetadata: ContentfulMetadata;
  cta?: Maybe<NavigationLink>;
  linkedFrom?: Maybe<TextLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  textAlign?: Maybe<Scalars['String']['output']>;
};


/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type TextContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type TextCtaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationLinkFilter>;
};


/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type TextLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type TextNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Rich text that can be used in combination with Grids. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/text) */
export type TextTextAlignArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlock = Entry & _Node & {
  __typename?: 'TextBlock';
  _id: Scalars['ID']['output'];
  brandHomepage?: Maybe<Scalars['String']['output']>;
  brandLogo?: Maybe<Entry>;
  content?: Maybe<TextBlockContent>;
  contentfulMetadata: ContentfulMetadata;
  customContent?: Maybe<Entry>;
  defaultOpen?: Maybe<Scalars['Boolean']['output']>;
  designerHomepage?: Maybe<Scalars['String']['output']>;
  designerPortrait?: Maybe<Entry>;
  email?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Page>;
  linkText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TextBlockLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  openingHours?: Maybe<TextBlockOpeningHours>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  titleIcon?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockBrandHomepageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockBrandLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockCustomContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockDefaultOpenArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockDesignerHomepageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockDesignerPortraitArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockLinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockOpeningHoursArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockPhoneNumberArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockTitleIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/**
 * A text block component that can be added directly as a component to a page. This content type seems to be used mainly on the checkout page, in the sidebar / info section.
 *
 * Use "Grid" in combination with "Text" instead if you want a simple column layout with rich texts. [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/textBlock)
 */
export type TextBlockTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TextBlockCollection = {
  __typename?: 'TextBlockCollection';
  items: Array<Maybe<TextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextBlockContent = {
  __typename?: 'TextBlockContent';
  json: Scalars['JSON']['output'];
  links: TextBlockContentLinks;
};

export type TextBlockContentAssets = {
  __typename?: 'TextBlockContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextBlockContentEntries = {
  __typename?: 'TextBlockContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextBlockContentLinks = {
  __typename?: 'TextBlockContentLinks';
  assets: TextBlockContentAssets;
  entries: TextBlockContentEntries;
  resources: TextBlockContentResources;
};

export type TextBlockContentResources = {
  __typename?: 'TextBlockContentResources';
  block: Array<TextBlockContentResourcesBlock>;
  hyperlink: Array<TextBlockContentResourcesHyperlink>;
  inline: Array<TextBlockContentResourcesInline>;
};

export type TextBlockContentResourcesBlock = ResourceLink & {
  __typename?: 'TextBlockContentResourcesBlock';
  sys: ResourceSys;
};

export type TextBlockContentResourcesHyperlink = ResourceLink & {
  __typename?: 'TextBlockContentResourcesHyperlink';
  sys: ResourceSys;
};

export type TextBlockContentResourcesInline = ResourceLink & {
  __typename?: 'TextBlockContentResourcesInline';
  sys: ResourceSys;
};

export type TextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextBlockFilter>>>;
  brandHomepage?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_contains?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandHomepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandHomepage_not?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_not_contains?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  customContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen_exists?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen_not?: InputMaybe<Scalars['Boolean']['input']>;
  designerHomepage?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_contains?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  designerHomepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  designerHomepage_not?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_not_contains?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  designerPortrait_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link?: InputMaybe<CfPageNestedFilter>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingHours_contains?: InputMaybe<Scalars['String']['input']>;
  openingHours_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingHours_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleIcon?: InputMaybe<Scalars['String']['input']>;
  titleIcon_contains?: InputMaybe<Scalars['String']['input']>;
  titleIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleIcon_not?: InputMaybe<Scalars['String']['input']>;
  titleIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextBlockLinkingCollections = {
  __typename?: 'TextBlockLinkingCollections';
  blockCollection?: Maybe<BlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerCollection?: Maybe<FooterCollection>;
  landingPageCollection?: Maybe<LandingPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  productPageInfoCollection?: Maybe<ProductPageInfoCollection>;
};


export type TextBlockLinkingCollectionsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsLandingPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsLandingPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockLinkingCollectionsProductPageInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextBlockLinkingCollectionsProductPageInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextBlockLinkingCollectionsBlockCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TextBlockLinkingCollectionsFooterCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextBlockLinkingCollectionsLandingPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  FallbackAsc = 'fallback_ASC',
  FallbackDesc = 'fallback_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum TextBlockLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum TextBlockLinkingCollectionsProductPageInfoCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TextBlockOpeningHours = {
  __typename?: 'TextBlockOpeningHours';
  json: Scalars['JSON']['output'];
  links: TextBlockOpeningHoursLinks;
};

export type TextBlockOpeningHoursAssets = {
  __typename?: 'TextBlockOpeningHoursAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextBlockOpeningHoursEntries = {
  __typename?: 'TextBlockOpeningHoursEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextBlockOpeningHoursLinks = {
  __typename?: 'TextBlockOpeningHoursLinks';
  assets: TextBlockOpeningHoursAssets;
  entries: TextBlockOpeningHoursEntries;
  resources: TextBlockOpeningHoursResources;
};

export type TextBlockOpeningHoursResources = {
  __typename?: 'TextBlockOpeningHoursResources';
  block: Array<TextBlockOpeningHoursResourcesBlock>;
  hyperlink: Array<TextBlockOpeningHoursResourcesHyperlink>;
  inline: Array<TextBlockOpeningHoursResourcesInline>;
};

export type TextBlockOpeningHoursResourcesBlock = ResourceLink & {
  __typename?: 'TextBlockOpeningHoursResourcesBlock';
  sys: ResourceSys;
};

export type TextBlockOpeningHoursResourcesHyperlink = ResourceLink & {
  __typename?: 'TextBlockOpeningHoursResourcesHyperlink';
  sys: ResourceSys;
};

export type TextBlockOpeningHoursResourcesInline = ResourceLink & {
  __typename?: 'TextBlockOpeningHoursResourcesInline';
  sys: ResourceSys;
};

export enum TextBlockOrder {
  BrandHomepageAsc = 'brandHomepage_ASC',
  BrandHomepageDesc = 'brandHomepage_DESC',
  DefaultOpenAsc = 'defaultOpen_ASC',
  DefaultOpenDesc = 'defaultOpen_DESC',
  DesignerHomepageAsc = 'designerHomepage_ASC',
  DesignerHomepageDesc = 'designerHomepage_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  LinkTextAsc = 'linkText_ASC',
  LinkTextDesc = 'linkText_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleIconAsc = 'titleIcon_ASC',
  TitleIconDesc = 'titleIcon_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type TextCollection = {
  __typename?: 'TextCollection';
  items: Array<Maybe<Text>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TextContent = {
  __typename?: 'TextContent';
  json: Scalars['JSON']['output'];
  links: TextContentLinks;
};

export type TextContentAssets = {
  __typename?: 'TextContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TextContentEntries = {
  __typename?: 'TextContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TextContentLinks = {
  __typename?: 'TextContentLinks';
  assets: TextContentAssets;
  entries: TextContentEntries;
  resources: TextContentResources;
};

export type TextContentResources = {
  __typename?: 'TextContentResources';
  block: Array<TextContentResourcesBlock>;
  hyperlink: Array<TextContentResourcesHyperlink>;
  inline: Array<TextContentResourcesInline>;
};

export type TextContentResourcesBlock = ResourceLink & {
  __typename?: 'TextContentResourcesBlock';
  sys: ResourceSys;
};

export type TextContentResourcesHyperlink = ResourceLink & {
  __typename?: 'TextContentResourcesHyperlink';
  sys: ResourceSys;
};

export type TextContentResourcesInline = ResourceLink & {
  __typename?: 'TextContentResourcesInline';
  sys: ResourceSys;
};

export type TextFilter = {
  AND?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TextFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta?: InputMaybe<CfNavigationLinkNestedFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textAlign?: InputMaybe<Scalars['String']['input']>;
  textAlign_contains?: InputMaybe<Scalars['String']['input']>;
  textAlign_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textAlign_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textAlign_not?: InputMaybe<Scalars['String']['input']>;
  textAlign_not_contains?: InputMaybe<Scalars['String']['input']>;
  textAlign_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TextLinkingCollections = {
  __typename?: 'TextLinkingCollections';
  carouselCollection?: Maybe<CarouselCollection>;
  entryCollection?: Maybe<EntryCollection>;
  gridCollection?: Maybe<GridCollection>;
};


export type TextLinkingCollectionsCarouselCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextLinkingCollectionsCarouselCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type TextLinkingCollectionsGridCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TextLinkingCollectionsGridCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TextLinkingCollectionsCarouselCollectionOrder {
  CarouselOnDesktopAsc = 'carouselOnDesktop_ASC',
  CarouselOnDesktopDesc = 'carouselOnDesktop_DESC',
  CarouselOnMobileAsc = 'carouselOnMobile_ASC',
  CarouselOnMobileDesc = 'carouselOnMobile_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextLinkingCollectionsGridCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NumberOfColumnsAsc = 'numberOfColumns_ASC',
  NumberOfColumnsDesc = 'numberOfColumns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TextOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAlignAsc = 'textAlign_ASC',
  TextAlignDesc = 'textAlign_DESC'
}

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/usp) */
export type Usp = Entry & _Node & {
  __typename?: 'Usp';
  _id: Scalars['ID']['output'];
  content?: Maybe<UspContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<UspLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/usp) */
export type UspContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/usp) */
export type UspLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/usp) */
export type UspNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type UspCollection = {
  __typename?: 'UspCollection';
  items: Array<Maybe<Usp>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UspContent = {
  __typename?: 'UspContent';
  json: Scalars['JSON']['output'];
  links: UspContentLinks;
};

export type UspContentAssets = {
  __typename?: 'UspContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type UspContentEntries = {
  __typename?: 'UspContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type UspContentLinks = {
  __typename?: 'UspContentLinks';
  assets: UspContentAssets;
  entries: UspContentEntries;
  resources: UspContentResources;
};

export type UspContentResources = {
  __typename?: 'UspContentResources';
  block: Array<UspContentResourcesBlock>;
  hyperlink: Array<UspContentResourcesHyperlink>;
  inline: Array<UspContentResourcesInline>;
};

export type UspContentResourcesBlock = ResourceLink & {
  __typename?: 'UspContentResourcesBlock';
  sys: ResourceSys;
};

export type UspContentResourcesHyperlink = ResourceLink & {
  __typename?: 'UspContentResourcesHyperlink';
  sys: ResourceSys;
};

export type UspContentResourcesInline = ResourceLink & {
  __typename?: 'UspContentResourcesInline';
  sys: ResourceSys;
};

export type UspFilter = {
  AND?: InputMaybe<Array<InputMaybe<UspFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UspFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type UspLinkingCollections = {
  __typename?: 'UspLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  uspRowCollection?: Maybe<UspRowCollection>;
};


export type UspLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type UspLinkingCollectionsUspRowCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UspLinkingCollectionsUspRowCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum UspLinkingCollectionsUspRowCollectionOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum UspOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/uspRow) */
export type UspRow = Entry & _Node & {
  __typename?: 'UspRow';
  _id: Scalars['ID']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<UspRowLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  uspsCollection?: Maybe<UspRowUspsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/uspRow) */
export type UspRowBackgroundColorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/uspRow) */
export type UspRowLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/uspRow) */
export type UspRowNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/itxkjaj41rzb/content_types/uspRow) */
export type UspRowUspsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UspRowUspsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UspFilter>;
};

export type UspRowCollection = {
  __typename?: 'UspRowCollection';
  items: Array<Maybe<UspRow>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type UspRowFilter = {
  AND?: InputMaybe<Array<InputMaybe<UspRowFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UspRowFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  usps?: InputMaybe<CfUspNestedFilter>;
  uspsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UspRowLinkingCollections = {
  __typename?: 'UspRowLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type UspRowLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type UspRowLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<UspRowLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum UspRowLinkingCollectionsPageCollectionOrder {
  AlternativeTermsAsc = 'alternativeTerms_ASC',
  AlternativeTermsDesc = 'alternativeTerms_DESC',
  CommerceIdAsc = 'commerceId_ASC',
  CommerceIdDesc = 'commerceId_DESC',
  CommerceNameAsc = 'commerceName_ASC',
  CommerceNameDesc = 'commerceName_DESC',
  CommerceTypeAsc = 'commerceType_ASC',
  CommerceTypeDesc = 'commerceType_DESC',
  ImageAltTextAsc = 'imageAltText_ASC',
  ImageAltTextDesc = 'imageAltText_DESC',
  ListTypeAsc = 'listType_ASC',
  ListTypeDesc = 'listType_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SortProductsByAsc = 'sortProductsBy_ASC',
  SortProductsByDesc = 'sortProductsBy_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum UspRowOrder {
  BackgroundColorAsc = 'backgroundColor_ASC',
  BackgroundColorDesc = 'backgroundColor_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type UspRowUspsCollection = {
  __typename?: 'UspRowUspsCollection';
  items: Array<Maybe<Usp>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum UspRowUspsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfAccordionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAccordionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAccordionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBlockNestedFilter>>>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  backgroundColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  backgroundColor_not?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  backgroundColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfBrandBannerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfBrandBannerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfBrandBannerNestedFilter>>>;
  bannerItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfCampaignNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCampaignNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCampaignNestedFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignBadge?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_contains?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignBadge_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignBadge_not?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignBadge_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignEnd?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignEnd_gt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_gte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignEnd_lt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_lte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_not?: InputMaybe<Scalars['DateTime']['input']>;
  campaignEnd_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignLabel?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_contains?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignLabel_not?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignName?: InputMaybe<Scalars['String']['input']>;
  campaignName_contains?: InputMaybe<Scalars['String']['input']>;
  campaignName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignName_not?: InputMaybe<Scalars['String']['input']>;
  campaignName_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignProductListingImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignStart?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignStart_gt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_gte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignStart_lt?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_lte?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_not?: InputMaybe<Scalars['DateTime']['input']>;
  campaignStart_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  campaignTitle?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_contains?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  campaignTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  campaignTitle_not?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  campaignTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId?: InputMaybe<Scalars['String']['input']>;
  commerceId_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceId_not?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName?: InputMaybe<Scalars['String']['input']>;
  commerceName_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName_not?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType?: InputMaybe<Scalars['String']['input']>;
  commerceType_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType_not?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finePrint?: InputMaybe<Scalars['String']['input']>;
  finePrint_contains?: InputMaybe<Scalars['String']['input']>;
  finePrint_exists?: InputMaybe<Scalars['Boolean']['input']>;
  finePrint_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  finePrint_not?: InputMaybe<Scalars['String']['input']>;
  finePrint_not_contains?: InputMaybe<Scalars['String']['input']>;
  finePrint_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription?: InputMaybe<Scalars['String']['input']>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_not?: InputMaybe<Scalars['String']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nordicsCampaignImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nordicsLongDescription_contains?: InputMaybe<Scalars['String']['input']>;
  nordicsLongDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  nordicsLongDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader?: InputMaybe<Scalars['String']['input']>;
  pageHeader_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageHeader_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageHeader_not?: InputMaybe<Scalars['String']['input']>;
  pageHeader_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageHeader_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl?: InputMaybe<Scalars['String']['input']>;
  pageUrl_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageUrl_not?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productSelection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  showBadgeForAllProductsInCampaign?: InputMaybe<Scalars['Boolean']['input']>;
  showBadgeForAllProductsInCampaign_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showBadgeForAllProductsInCampaign_not?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown_exists?: InputMaybe<Scalars['Boolean']['input']>;
  showCountdown_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfContentfulImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfContentfulImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfContentfulImageNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfDictionaryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfDictionaryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfDictionaryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  listCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfEditorialSplashNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEditorialSplashNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEditorialSplashNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageText_contains?: InputMaybe<Scalars['String']['input']>;
  imageText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageText_not_contains?: InputMaybe<Scalars['String']['input']>;
  mediaMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  media_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfExceptionalOpeningHoursDayNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExceptionalOpeningHoursDayNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExceptionalOpeningHoursDayNestedFilter>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime?: InputMaybe<Scalars['String']['input']>;
  closingTime_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closingTime_not?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  date_exists?: InputMaybe<Scalars['Boolean']['input']>;
  date_gt?: InputMaybe<Scalars['DateTime']['input']>;
  date_gte?: InputMaybe<Scalars['DateTime']['input']>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  date_lt?: InputMaybe<Scalars['DateTime']['input']>;
  date_lte?: InputMaybe<Scalars['DateTime']['input']>;
  date_not?: InputMaybe<Scalars['DateTime']['input']>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
  openingTime_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime_not?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFeatureNestedFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction?: InputMaybe<Scalars['String']['input']>;
  callToAction_contains?: InputMaybe<Scalars['String']['input']>;
  callToAction_exists?: InputMaybe<Scalars['Boolean']['input']>;
  callToAction_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  callToAction_not?: InputMaybe<Scalars['String']['input']>;
  callToAction_not_contains?: InputMaybe<Scalars['String']['input']>;
  callToAction_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_contains?: InputMaybe<Scalars['String']['input']>;
  color_exists?: InputMaybe<Scalars['Boolean']['input']>;
  color_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  color_not?: InputMaybe<Scalars['String']['input']>;
  color_not_contains?: InputMaybe<Scalars['String']['input']>;
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imageAlignment?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_contains?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAlignment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageAlignment_not?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageAlignment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textOverlay?: InputMaybe<Scalars['Boolean']['input']>;
  textOverlay_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textOverlay_not?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFooterBannerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterBannerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterBannerNestedFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  activePage_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activePage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraph_contains?: InputMaybe<Scalars['String']['input']>;
  paragraph_exists?: InputMaybe<Scalars['Boolean']['input']>;
  paragraph_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  banner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  columnsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfFormNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFormNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFormNestedFilter>>>;
  consentIsRequired?: InputMaybe<Scalars['Boolean']['input']>;
  consentIsRequired_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentIsRequired_not?: InputMaybe<Scalars['Boolean']['input']>;
  consentText?: InputMaybe<Scalars['String']['input']>;
  consentText_contains?: InputMaybe<Scalars['String']['input']>;
  consentText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  consentText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  consentText_not?: InputMaybe<Scalars['String']['input']>;
  consentText_not_contains?: InputMaybe<Scalars['String']['input']>;
  consentText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dictionaryCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footer_contains?: InputMaybe<Scalars['String']['input']>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footer_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preFilledData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  reference_contains?: InputMaybe<Scalars['String']['input']>;
  reference_exists?: InputMaybe<Scalars['Boolean']['input']>;
  reference_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reference_not?: InputMaybe<Scalars['String']['input']>;
  reference_not_contains?: InputMaybe<Scalars['String']['input']>;
  reference_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButtonText?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_contains?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  submitButtonText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  submitButtonText_not?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_not_contains?: InputMaybe<Scalars['String']['input']>;
  submitButtonText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfHeaderNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeaderNestedFilter>>>;
  contactNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  leftLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  left_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  navigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  rightLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  right_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storeAndCustomerServiceInfoCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  uspCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfKeyValueNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfKeyValueNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfKeyValueNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfNavigationLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationLinkNestedFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  display?: InputMaybe<Scalars['String']['input']>;
  display_contains?: InputMaybe<Scalars['String']['input']>;
  display_exists?: InputMaybe<Scalars['Boolean']['input']>;
  display_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  display_not?: InputMaybe<Scalars['String']['input']>;
  display_not_contains?: InputMaybe<Scalars['String']['input']>;
  display_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalLink?: InputMaybe<Scalars['String']['input']>;
  externalLink_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  externalLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  externalLink_not?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  externalLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  highlight_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkParams?: InputMaybe<Scalars['String']['input']>;
  linkParams_contains?: InputMaybe<Scalars['String']['input']>;
  linkParams_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkParams_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkParams_not?: InputMaybe<Scalars['String']['input']>;
  linkParams_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkParams_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mainNavigation?: InputMaybe<Scalars['Boolean']['input']>;
  mainNavigation_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mainNavigation_not?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openInNewTab?: InputMaybe<Scalars['Boolean']['input']>;
  openInNewTab_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openInNewTab_not?: InputMaybe<Scalars['Boolean']['input']>;
  rightSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinksTitle?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_contains?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  specialLinksTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  specialLinksTitle_not?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  specialLinksTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sublinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant?: InputMaybe<Scalars['String']['input']>;
  variant_contains?: InputMaybe<Scalars['String']['input']>;
  variant_exists?: InputMaybe<Scalars['Boolean']['input']>;
  variant_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  variant_not?: InputMaybe<Scalars['String']['input']>;
  variant_not_contains?: InputMaybe<Scalars['String']['input']>;
  variant_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfNavigationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNavigationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNavigationNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sublinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfOpeningHoursDayNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfOpeningHoursDayNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfOpeningHoursDayNestedFilter>>>;
  closed?: InputMaybe<Scalars['Boolean']['input']>;
  closed_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closed_not?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime?: InputMaybe<Scalars['String']['input']>;
  closingTime_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closingTime_not?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  closingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dayOfTheWeek?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_contains?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dayOfTheWeek_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dayOfTheWeek_not?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_not_contains?: InputMaybe<Scalars['String']['input']>;
  dayOfTheWeek_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
  openingTime_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingTime_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingTime_not?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_contains?: InputMaybe<Scalars['String']['input']>;
  openingTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageNestedFilter>>>;
  activeMarkets_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  activeMarkets_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms?: InputMaybe<Scalars['String']['input']>;
  alternativeTermsPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alternativeTerms_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alternativeTerms_not?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_contains?: InputMaybe<Scalars['String']['input']>;
  alternativeTerms_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId?: InputMaybe<Scalars['String']['input']>;
  commerceId_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceId_not?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName?: InputMaybe<Scalars['String']['input']>;
  commerceName_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceName_not?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType?: InputMaybe<Scalars['String']['input']>;
  commerceType_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  commerceType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  commerceType_not?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_contains?: InputMaybe<Scalars['String']['input']>;
  commerceType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  desktopBackground_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dictionary_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featuredCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  filtersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  footerBanner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAltText?: InputMaybe<Scalars['String']['input']>;
  imageAltText_contains?: InputMaybe<Scalars['String']['input']>;
  imageAltText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageAltText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageAltText_not?: InputMaybe<Scalars['String']['input']>;
  imageAltText_not_contains?: InputMaybe<Scalars['String']['input']>;
  imageAltText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageMobile_exists?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  informationCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingress_contains?: InputMaybe<Scalars['String']['input']>;
  ingress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ingress_not_contains?: InputMaybe<Scalars['String']['input']>;
  listType?: InputMaybe<Scalars['String']['input']>;
  listType_contains?: InputMaybe<Scalars['String']['input']>;
  listType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  listType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  listType_not?: InputMaybe<Scalars['String']['input']>;
  listType_not_contains?: InputMaybe<Scalars['String']['input']>;
  listType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaKeywords_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaTitle_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaTitle_not?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileBackground_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugsSpecifications_exists?: InputMaybe<Scalars['Boolean']['input']>;
  previousSlugs_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  previousSlugs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortProductsBy?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_contains?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sortProductsBy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortProductsBy_not?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_not_contains?: InputMaybe<Scalars['String']['input']>;
  sortProductsBy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfParametricNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfParametricNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfParametricNestedFilter>>>;
  attributeName?: InputMaybe<Scalars['String']['input']>;
  attributeName_contains?: InputMaybe<Scalars['String']['input']>;
  attributeName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  attributeName_not?: InputMaybe<Scalars['String']['input']>;
  attributeName_not_contains?: InputMaybe<Scalars['String']['input']>;
  attributeName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  maxLabel?: InputMaybe<Scalars['String']['input']>;
  maxLabel_contains?: InputMaybe<Scalars['String']['input']>;
  maxLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  maxLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  maxLabel_not?: InputMaybe<Scalars['String']['input']>;
  maxLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  maxLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minLabel?: InputMaybe<Scalars['String']['input']>;
  minLabel_contains?: InputMaybe<Scalars['String']['input']>;
  minLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  minLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  minLabel_not?: InputMaybe<Scalars['String']['input']>;
  minLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  minLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openByDefault?: InputMaybe<Scalars['Boolean']['input']>;
  openByDefault_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openByDefault_not?: InputMaybe<Scalars['Boolean']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  prefix_contains?: InputMaybe<Scalars['String']['input']>;
  prefix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  prefix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  prefix_not?: InputMaybe<Scalars['String']['input']>;
  prefix_not_contains?: InputMaybe<Scalars['String']['input']>;
  prefix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suffix?: InputMaybe<Scalars['String']['input']>;
  suffix_contains?: InputMaybe<Scalars['String']['input']>;
  suffix_exists?: InputMaybe<Scalars['Boolean']['input']>;
  suffix_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  suffix_not?: InputMaybe<Scalars['String']['input']>;
  suffix_not_contains?: InputMaybe<Scalars['String']['input']>;
  suffix_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSideMenuNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSideMenuNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSideMenuNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  navigationsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storeInfo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSplashNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSplashNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSplashNestedFilter>>>;
  contentPosition?: InputMaybe<Scalars['String']['input']>;
  contentPosition_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentPosition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentPosition_not?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentPosition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  desktopImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  desktopVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  header_contains?: InputMaybe<Scalars['String']['input']>;
  header_exists?: InputMaybe<Scalars['Boolean']['input']>;
  header_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  header_not?: InputMaybe<Scalars['String']['input']>;
  header_not_contains?: InputMaybe<Scalars['String']['input']>;
  header_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  mobileImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mobileVideo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textColor_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textColor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textColor_not?: InputMaybe<Scalars['String']['input']>;
  textColor_not_contains?: InputMaybe<Scalars['String']['input']>;
  textColor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfStoreNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfStoreNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfStoreNestedFilter>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_contains?: InputMaybe<Scalars['String']['input']>;
  city_exists?: InputMaybe<Scalars['Boolean']['input']>;
  city_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  city_not?: InputMaybe<Scalars['String']['input']>;
  city_not_contains?: InputMaybe<Scalars['String']['input']>;
  city_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exceptionalOpeningHoursCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMapsUrl?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMapsUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  googleMapsUrl_not?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_contains?: InputMaybe<Scalars['String']['input']>;
  googleMapsUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  googleMaps_exists?: InputMaybe<Scalars['Boolean']['input']>;
  googleMaps_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  googleMaps_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  infoText?: InputMaybe<Scalars['String']['input']>;
  infoText_contains?: InputMaybe<Scalars['String']['input']>;
  infoText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  infoText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  infoText_not?: InputMaybe<Scalars['String']['input']>;
  infoText_not_contains?: InputMaybe<Scalars['String']['input']>;
  infoText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingHoursCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  postalCode_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_exists?: InputMaybe<Scalars['Boolean']['input']>;
  postalCode_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postalCode_not?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_contains?: InputMaybe<Scalars['String']['input']>;
  postalCode_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePageLinkText?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_contains?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  storePageLinkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePageLinkText_not?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  storePageLinkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storePage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTagNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTagNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_exists?: InputMaybe<Scalars['Boolean']['input']>;
  key_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_exists?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTextBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextBlockNestedFilter>>>;
  brandHomepage?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_contains?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  brandHomepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandHomepage_not?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_not_contains?: InputMaybe<Scalars['String']['input']>;
  brandHomepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  brandLogo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  customContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen_exists?: InputMaybe<Scalars['Boolean']['input']>;
  defaultOpen_not?: InputMaybe<Scalars['Boolean']['input']>;
  designerHomepage?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_contains?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  designerHomepage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  designerHomepage_not?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_not_contains?: InputMaybe<Scalars['String']['input']>;
  designerHomepage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  designerPortrait_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_contains?: InputMaybe<Scalars['String']['input']>;
  email_exists?: InputMaybe<Scalars['Boolean']['input']>;
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  email_not?: InputMaybe<Scalars['String']['input']>;
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText?: InputMaybe<Scalars['String']['input']>;
  linkText_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkText_not?: InputMaybe<Scalars['String']['input']>;
  linkText_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openingHours_contains?: InputMaybe<Scalars['String']['input']>;
  openingHours_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openingHours_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_exists?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  titleIcon?: InputMaybe<Scalars['String']['input']>;
  titleIcon_contains?: InputMaybe<Scalars['String']['input']>;
  titleIcon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleIcon_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleIcon_not?: InputMaybe<Scalars['String']['input']>;
  titleIcon_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleIcon_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTextNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTextNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTextNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  textAlign?: InputMaybe<Scalars['String']['input']>;
  textAlign_contains?: InputMaybe<Scalars['String']['input']>;
  textAlign_exists?: InputMaybe<Scalars['Boolean']['input']>;
  textAlign_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  textAlign_not?: InputMaybe<Scalars['String']['input']>;
  textAlign_not_contains?: InputMaybe<Scalars['String']['input']>;
  textAlign_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfUspNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfUspNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfUspNestedFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfcolumnsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcolumnsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcolumnsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfcomponentsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcomponentsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CfcontentMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfcontentMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfitemsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfitemsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetFragment = { __typename: 'Asset', url?: string | null, size?: number | null, title?: string | null, width?: number | null, height?: number | null, contentType?: string | null } & { ' $fragmentName'?: 'AssetFragment' };

export type BrandBannerFragment = { __typename: 'BrandBanner', bannerItemsCollection?: { __typename?: 'BrandBannerBannerItemsCollection', items: Array<{ __typename?: 'ContentfulImage', image?: { __typename: 'Asset', url?: string | null, size?: number | null, title?: string | null, width?: number | null, height?: number | null, contentType?: string | null } | null } | null> } | null } & { ' $fragmentName'?: 'BrandBannerFragment' };

export type ContentRowFragment = { __typename: 'ContentRow', type?: string | null, numberOfColumns?: string | null, contentCollection?: { __typename?: 'ContentRowContentCollection', items: Array<(
      { __typename?: 'Splash' }
      & { ' $fragmentRefs'?: { 'SplashFragment': SplashFragment } }
    ) | null> } | null } & { ' $fragmentName'?: 'ContentRowFragment' };

export type FooterBannerFragment = { __typename: 'FooterBanner', title?: string | null, linkText?: string | null, desktopImage?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, mobileImage?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null } & { ' $fragmentName'?: 'FooterBannerFragment' };

export type ProductListFragment = { __typename: 'ProductList', linkText?: string | null, heading?: string | null, commerceData?: any | null } & { ' $fragmentName'?: 'ProductListFragment' };

export type SplashFragment = { __typename: 'Splash', header?: string | null, subheading?: string | null, linkText?: string | null, textColor?: string | null, contentPosition?: string | null, desktopVideo?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, desktopImage?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, mobileVideo?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, mobileImage?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, href?:
    | { __typename: 'Campaign', slug?: string | null }
    | { __typename: 'EditorialPage', slug?: string | null }
    | { __typename: 'LandingPage', slug?: string | null }
    | { __typename?: 'NavigationLink', title?: string | null, internalLink?:
        | { __typename: 'Campaign', slug?: string | null }
        | { __typename: 'EditorialPage', slug?: string | null }
        | { __typename: 'LandingPage', slug?: string | null }
        | { __typename: 'Page', slug?: string | null }
       | null }
    | { __typename: 'Page', slug?: string | null }
   | null } & { ' $fragmentName'?: 'SplashFragment' };

export type TextBlockFragment = { __typename: 'TextBlock', title?: string | null, content?: { __typename?: 'TextBlockContent', json: any, links: { __typename?: 'TextBlockContentLinks', entries: { __typename?: 'TextBlockContentEntries', hyperlink: Array<
          | { __typename?: 'Accordion' }
          | { __typename?: 'AccordionRow' }
          | { __typename?: 'Block' }
          | { __typename?: 'BrandBanner' }
          | { __typename: 'Campaign', slug?: string | null }
          | { __typename?: 'Card' }
          | { __typename?: 'Carousel' }
          | { __typename?: 'ContentRow' }
          | { __typename?: 'ContentfulImage' }
          | { __typename?: 'CustomerCommunicationPreferences' }
          | { __typename?: 'Dictionary' }
          | { __typename?: 'EditorialBlock' }
          | { __typename?: 'EditorialGallery' }
          | { __typename: 'EditorialPage', slug?: string | null }
          | { __typename?: 'EditorialProducts' }
          | { __typename?: 'EditorialRow' }
          | { __typename?: 'EditorialSplash' }
          | { __typename?: 'ExceptionalOpeningHoursDay' }
          | { __typename?: 'Feature' }
          | { __typename?: 'Footer' }
          | { __typename?: 'FooterBanner' }
          | { __typename?: 'Form' }
          | { __typename?: 'Grid' }
          | { __typename?: 'Header' }
          | { __typename?: 'Hero' }
          | { __typename?: 'HighlightRow' }
          | { __typename?: 'InspoSplash' }
          | { __typename?: 'KeyValue' }
          | { __typename: 'LandingPage', slug?: string | null }
          | { __typename?: 'LinkList' }
          | { __typename?: 'MyPageBlock' }
          | { __typename?: 'Navigation' }
          | { __typename?: 'NavigationLink' }
          | { __typename?: 'OpeningHoursDay' }
          | { __typename: 'Page', slug?: string | null }
          | { __typename?: 'Parametric' }
          | { __typename?: 'ProductList' }
          | { __typename?: 'ProductPageInfo' }
          | { __typename?: 'SideMenu' }
          | { __typename?: 'Siteinfo' }
          | { __typename?: 'Splash' }
          | { __typename?: 'Store' }
          | { __typename?: 'Tag' }
          | { __typename?: 'Text' }
          | { __typename?: 'TextBlock' }
          | { __typename?: 'Usp' }
          | { __typename?: 'UspRow' }
         | null> } } } | null } & { ' $fragmentName'?: 'TextBlockFragment' };

export type LandingPageQueryVariables = Exact<{
  order?: InputMaybe<LandingPageOrder>;
  where?: InputMaybe<LandingPageFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type LandingPageQuery = { __typename?: 'Query', landingPageCollection?: { __typename?: 'LandingPageCollection', items: Array<{ __typename?: 'LandingPage', title?: string | null, metaTitle?: string | null, metaDescription?: string | null, metaKeywords?: Array<string | null> | null, alternativeTerms?: string | null, description?: { __typename?: 'LandingPageDescription', json: any, links: { __typename?: 'LandingPageDescriptionLinks', entries: { __typename?: 'LandingPageDescriptionEntries', hyperlink: Array<
              | { __typename?: 'Accordion' }
              | { __typename?: 'AccordionRow' }
              | { __typename?: 'Block' }
              | { __typename?: 'BrandBanner' }
              | { __typename: 'Campaign', slug?: string | null }
              | { __typename?: 'Card' }
              | { __typename?: 'Carousel' }
              | { __typename?: 'ContentRow' }
              | { __typename?: 'ContentfulImage' }
              | { __typename?: 'CustomerCommunicationPreferences' }
              | { __typename?: 'Dictionary' }
              | { __typename?: 'EditorialBlock' }
              | { __typename?: 'EditorialGallery' }
              | { __typename: 'EditorialPage', slug?: string | null }
              | { __typename?: 'EditorialProducts' }
              | { __typename?: 'EditorialRow' }
              | { __typename?: 'EditorialSplash' }
              | { __typename?: 'ExceptionalOpeningHoursDay' }
              | { __typename?: 'Feature' }
              | { __typename?: 'Footer' }
              | { __typename?: 'FooterBanner' }
              | { __typename?: 'Form' }
              | { __typename?: 'Grid' }
              | { __typename?: 'Header' }
              | { __typename?: 'Hero' }
              | { __typename?: 'HighlightRow' }
              | { __typename?: 'InspoSplash' }
              | { __typename?: 'KeyValue' }
              | { __typename: 'LandingPage', slug?: string | null }
              | { __typename?: 'LinkList' }
              | { __typename?: 'MyPageBlock' }
              | { __typename?: 'Navigation' }
              | { __typename?: 'NavigationLink' }
              | { __typename?: 'OpeningHoursDay' }
              | { __typename: 'Page', slug?: string | null }
              | { __typename?: 'Parametric' }
              | { __typename?: 'ProductList' }
              | { __typename?: 'ProductPageInfo' }
              | { __typename?: 'SideMenu' }
              | { __typename?: 'Siteinfo' }
              | { __typename?: 'Splash' }
              | { __typename?: 'Store' }
              | { __typename?: 'Tag' }
              | { __typename?: 'Text' }
              | { __typename?: 'TextBlock' }
              | { __typename?: 'Usp' }
              | { __typename?: 'UspRow' }
             | null> } } } | null, componentsCollection?: { __typename?: 'LandingPageComponentsCollection', items: Array<
          | { __typename?: 'Accordion' }
          | { __typename?: 'Block' }
          | (
            { __typename?: 'BrandBanner' }
            & { ' $fragmentRefs'?: { 'BrandBannerFragment': BrandBannerFragment } }
          )
          | (
            { __typename?: 'ContentRow' }
            & { ' $fragmentRefs'?: { 'ContentRowFragment': ContentRowFragment } }
          )
          | { __typename?: 'CustomerCommunicationPreferences' }
          | { __typename?: 'EditorialGallery' }
          | { __typename?: 'EditorialProducts' }
          | { __typename?: 'EditorialRow' }
          | { __typename?: 'EditorialSplash' }
          | { __typename?: 'Form' }
          | { __typename?: 'HighlightRow' }
          | { __typename?: 'MyPageBlock' }
          | { __typename?: 'Navigation' }
          | (
            { __typename?: 'ProductList' }
            & { ' $fragmentRefs'?: { 'ProductListFragment': ProductListFragment } }
          )
          | { __typename?: 'Store' }
          | (
            { __typename?: 'TextBlock' }
            & { ' $fragmentRefs'?: { 'TextBlockFragment': TextBlockFragment } }
          )
         | null> } | null, footerBanner?: (
        { __typename?: 'FooterBanner' }
        & { ' $fragmentRefs'?: { 'FooterBannerFragment': FooterBannerFragment } }
      ) | null } | null> } | null };

export const BrandBannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"brandBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BrandBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"bannerItemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentfulImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BrandBannerFragment, unknown>;
export const AssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<AssetFragment, unknown>;
export const SplashFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splash"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Splash"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheading"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"contentPosition"}},{"kind":"Field","name":{"kind":"Name","value":"desktopVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"desktopImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"internalLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<SplashFragment, unknown>;
export const ContentRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contentRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfColumns"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splash"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splash"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Splash"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheading"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"contentPosition"}},{"kind":"Field","name":{"kind":"Name","value":"desktopVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"desktopImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"internalLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContentRowFragment, unknown>;
export const FooterBannerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"footerBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"desktopImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]} as unknown as DocumentNode<FooterBannerFragment, unknown>;
export const ProductListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"commerceData"}}]}}]} as unknown as DocumentNode<ProductListFragment, unknown>;
export const TextBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hyperlink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TextBlockFragment, unknown>;
export const LandingPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"landingPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPageOrder"}},"defaultValue":{"kind":"EnumValue","value":"sys_publishedAt_DESC"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPageFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"defaultValue":{"kind":"BooleanValue","value":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"landingPageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"order"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"metaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hyperlink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"metaKeywords"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeTerms"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"8"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contentRow"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"productList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textBlock"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"brandBanner"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footerBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"footerBanner"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"splash"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Splash"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"header"}},{"kind":"Field","name":{"kind":"Name","value":"subheading"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"textColor"}},{"kind":"Field","name":{"kind":"Name","value":"contentPosition"}},{"kind":"Field","name":{"kind":"Name","value":"desktopVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"desktopImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavigationLink"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"internalLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contentRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRow"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfColumns"}},{"kind":"Field","name":{"kind":"Name","value":"contentCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"splash"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductList"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"commerceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"entries"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hyperlink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EditorialPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Campaign"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"brandBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BrandBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"bannerItemsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentfulImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"footerBanner"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterBanner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"linkText"}},{"kind":"Field","name":{"kind":"Name","value":"desktopImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mobileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"asset"}}]}}]}}]}}]} as unknown as DocumentNode<LandingPageQuery, LandingPageQueryVariables>;