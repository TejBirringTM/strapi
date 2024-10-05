import type { Schema, Attribute } from '@strapi/strapi';

export interface ObjectsPerson extends Schema.Component {
  collectionName: 'components_objects_people';
  info: {
    displayName: 'Person';
    icon: 'cube';
    description: '';
  };
  attributes: {
    FirstName: Attribute.String & Attribute.Required;
    LastName: Attribute.String & Attribute.Required;
    Gender: Attribute.Enumeration<['male', 'female']>;
    EmailAddress: Attribute.String;
    PhoneNumber: Attribute.String;
    LinkedInProfileURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'objects.person': ObjectsPerson;
    }
  }
}
