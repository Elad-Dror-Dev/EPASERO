export type PortfolioCategory = "all" | "design" | "fitout" | "styling";

export interface PortfolioProject {
  id: string
  title: string
  location: string
  slug: string
  category: Exclude<PortfolioCategory, 'all'>
  images: {
    src: string
    alt: string
  }[]
  property: {
    price: string
    area: string
    details: {
      description: string
      specifications: {
        icon: string
        label: string
        value: string
      }[]
      features: string[]
      materials: string
      amenitiesColumns: {
        left: string[]
        right: string[]
      }
    }
  }
}

export interface PortfolioCategoryTab {
  id: PortfolioCategory;
  label: string;
  count: number;
}
