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

export interface PageButton extends Struct.ComponentSchema {
  collectionName: 'components_page_buttons';
  info: {
    displayName: 'Button';
    icon: 'cog';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text;
  };
}

export interface PageCard extends Struct.ComponentSchema {
  collectionName: 'components_page_cards';
  info: {
    displayName: 'Card';
    icon: 'apps';
  };
  attributes: {
    click_url: Schema.Attribute.Text;
    description: Schema.Attribute.Component<'page.descriptions', false>;
    image: Schema.Attribute.Component<'page.image', false>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageContactUsSection extends Struct.ComponentSchema {
  collectionName: 'components_page_contact_us_sections';
  info: {
    displayName: 'Contact Us Section';
    icon: 'globe';
  };
  attributes: {
    button: Schema.Attribute.Component<'page.button', false>;
    images: Schema.Attribute.Component<'page.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_page_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'command';
  };
  attributes: {
    button: Schema.Attribute.Component<'page.button', true>;
    descriptions: Schema.Attribute.Component<'page.descriptions', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageDescriptions extends Struct.ComponentSchema {
  collectionName: 'components_page_descriptions';
  info: {
    displayName: 'descriptions';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface PageGridSection extends Struct.ComponentSchema {
  collectionName: 'components_page_grid_sections';
  info: {
    displayName: 'Grid Section';
    icon: 'apps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'page.card', true>;
    descriptions: Schema.Attribute.Component<'page.descriptions', false>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_page_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'book';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    descriptions: Schema.Attribute.Component<'page.descriptions', true>;
    image: Schema.Attribute.Component<'page.image', false>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Component<'page.video', false>;
  };
}

export interface PageImage extends Struct.ComponentSchema {
  collectionName: 'components_page_image_s';
  info: {
    displayName: 'Image ';
    icon: 'archive';
  };
  attributes: {
    alt_text: Schema.Attribute.String & Schema.Attribute.Required;
    image_url: Schema.Attribute.Text;
  };
}

export interface PageJourneyCard extends Struct.ComponentSchema {
  collectionName: 'components_page_journey_cards';
  info: {
    displayName: 'Journey Card';
    icon: 'bulletList';
  };
  attributes: {
    descriptions: Schema.Attribute.Component<'page.descriptions', true>;
    image: Schema.Attribute.Component<'page.image', false>;
    key: Schema.Attribute.String;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageJourneySection extends Struct.ComponentSchema {
  collectionName: 'components_page_journey_sections';
  info: {
    displayName: 'Journey Section';
    icon: 'book';
  };
  attributes: {
    cards: Schema.Attribute.Component<'page.journey-card', true>;
    description: Schema.Attribute.Component<'page.descriptions', false>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_page_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
    icon: 'alien';
  };
  attributes: {
    descriptions: Schema.Attribute.Component<'page.descriptions', true>;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Component<'page.image', false>;
    name: Schema.Attribute.String;
  };
}

export interface PageTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_page_testimonial_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'bulletList';
  };
  attributes: {
    button: Schema.Attribute.Component<'page.button', false>;
    cards: Schema.Attribute.Component<'page.testimonial-card', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PageVideo extends Struct.ComponentSchema {
  collectionName: 'components_page_videos';
  info: {
    displayName: 'Video';
    icon: 'crop';
  };
  attributes: {
    thumbnail_url: Schema.Attribute.Text;
    video_url: Schema.Attribute.Text;
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
      'page.button': PageButton;
      'page.card': PageCard;
      'page.contact-us-section': PageContactUsSection;
      'page.cta-section': PageCtaSection;
      'page.descriptions': PageDescriptions;
      'page.grid-section': PageGridSection;
      'page.hero-section': PageHeroSection;
      'page.image': PageImage;
      'page.journey-card': PageJourneyCard;
      'page.journey-section': PageJourneySection;
      'page.testimonial-card': PageTestimonialCard;
      'page.testimonial-section': PageTestimonialSection;
      'page.video': PageVideo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
