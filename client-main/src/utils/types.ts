// src/utils/types.ts

// Interface for navigation links
export interface NavLink {
  to: string; // Destination path for the navigation link
  label: string; // Text label for the navigation link
}  

// Interface for items in a carousel
export interface CarouselItemProps {
  src: string; // Image source URL for the carousel item
  name: string; // Name of the carousel item to display
}

// Interface for menu items
export interface MenuItemProps {
  src: string; // URL of the image representing the menu item
  name: string; // Name of the menu item to display
  price: number; // Price of the menu item
  addItem: () => void; // Function to handle adding the item to the cart or order
}

// Type definition for the About Us section
export type AboutUsSection = {
  title: string; // Title of the About Us section
  content: string; // Content description for the About Us section
  mediaType: 'image' | 'video'; // Type of media used in the section (image or video)
  mediaSrc: string; // Source URL for the media (image or video)
};

// Interface for the Contact section
export interface ContactSection {
  title: string; // Title of the Contact section
  content: string; // Content description for the Contact section
  mediaType: 'none' | 'map' | 'form'; // Type of media used in the section (none, map, or form)
  mediaSrc?: string; // Optional source URL for the media (if applicable)
}
