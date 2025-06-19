import type { Schema, Struct } from '@strapi/strapi';

export interface MetadataMetadata extends Struct.ComponentSchema {
  collectionName: 'components_metadata_metadata';
  info: {
    displayName: 'metadata';
    icon: 'database';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'metadata.metadata': MetadataMetadata;
    }
  }
}
