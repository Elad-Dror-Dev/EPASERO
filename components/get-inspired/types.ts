export type Category = "all" | "design" | "fitout" | "styling";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: Exclude<Category, "all">;
  images: string[];
}

export interface CategoryTab {
  id: Category;
  label: string;
  count: number;
}
