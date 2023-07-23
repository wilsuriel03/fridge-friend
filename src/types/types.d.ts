import { UrlObject } from "url";

export interface NavigationItem {
    name: string;
    href: UrlObject;
    icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  }
  
  export interface Navigation {
    routes: NavigationItem[];
    social: NavigationItem[];
  }