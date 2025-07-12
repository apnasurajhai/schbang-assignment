import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterContent extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_contents';
  info: {
    displayName: 'Footer Content';
    icon: 'filter';
  };
  attributes: {
    descripiton: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooterMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_main_menus';
  info: {
    displayName: 'Footer Main Menu';
    icon: 'bulletList';
  };
  attributes: {
    header: Schema.Attribute.String & Schema.Attribute.Required;
    menu_links: Schema.Attribute.Component<'footer.footer-sub-menu', true>;
  };
}

export interface FooterFooterSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_sub_menus';
  info: {
    displayName: 'Footer Sub Menu';
    icon: 'layer';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.Unique;
  };
}

export interface FooterHeader extends Struct.ComponentSchema {
  collectionName: 'components_footer_headers';
  info: {
    displayName: 'Header';
    icon: 'grid';
  };
  attributes: {
    header_icon_url: Schema.Attribute.Text & Schema.Attribute.Required;
    header_text: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'footer.social-links', true>;
  };
}

export interface FooterLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_legal_links';
  info: {
    displayName: 'Legal Links';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface FooterLegals extends Struct.ComponentSchema {
  collectionName: 'components_footer_legals';
  info: {
    displayName: 'Legals';
  };
  attributes: {
    description: Schema.Attribute.Text;
    legal_links: Schema.Attribute.Component<'footer.legal-links', true>;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'bulletList';
  };
  attributes: {
    social_icon_url: Schema.Attribute.Text & Schema.Attribute.Required;
    social_name: Schema.Attribute.String;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface FooterSubscribeEmail extends Struct.ComponentSchema {
  collectionName: 'components_footer_subscribe_emails';
  info: {
    displayName: 'Subscribe Email';
    icon: 'thumbUp';
  };
  attributes: {
    button_text: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    input_placeholder: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationMenus extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menus';
  info: {
    displayName: 'Menus';
    icon: 'bulletList';
  };
  attributes: {
    has_submenu: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    sub_menu: Schema.Attribute.Component<'navigation.sub-menu', true>;
    url: Schema.Attribute.Text;
  };
}

export interface NavigationSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_navigation_sub_menus';
  info: {
    displayName: 'Sub Menu';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-content': FooterFooterContent;
      'footer.footer-main-menu': FooterFooterMainMenu;
      'footer.footer-sub-menu': FooterFooterSubMenu;
      'footer.header': FooterHeader;
      'footer.legal-links': FooterLegalLinks;
      'footer.legals': FooterLegals;
      'footer.social-links': FooterSocialLinks;
      'footer.subscribe-email': FooterSubscribeEmail;
      'navigation.menus': NavigationMenus;
      'navigation.sub-menu': NavigationSubMenu;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
