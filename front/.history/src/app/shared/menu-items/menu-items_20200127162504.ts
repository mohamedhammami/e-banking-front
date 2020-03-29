import { Injectable } from "@angular/core";
import { AuthService } from "app/services/auth.service";

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMSADMIN: Menu[] = [
  {
    state: "home",
    name: "HOME",
    type: "link",
    icon: "explore"
  },
  {
    state: "users",
    name: "USERS",
    type: "sub",
    icon: "person",
    children: [{ state: "list", name: "LISTUSER" }]
  },
  {
    state: "electorals",
    name: "Electoral",
    type: "sub",
    icon: "dehaze",
    children: [
      { state: "create", name: "Add" },
      { state: "list", name: "List" }
    ]
  },
 
  {
    state: "candidates",
    name: "Candidates",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "add", name: "Create" },
      { state: "list", name: "List" }
    ]
  }
];

const MENUITEMS: Menu[] = [
  {
    state: "home",
    name: "HOME",
    type: "link",
    icon: "explore"
  },
  {
    state: "electorals",
    name: "Electoral",
    type: "sub",
    icon: "dehaze",
    children: [{ state: "list", name: "List" }]
  },
  {
    state: "account", //  State rahi tab3a route 
    name: "Account",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "create", name: "Ajout Compte Bancaire" }]
  },
  {
    state: "account", //  State rahi tab3a route 
    name: "Account",
    type: "sub",
    icon: "supervised_user_circle",
    children: [
      { state: "create", name: "Ajout Compte titre" }
    ]
  },
  {
    state: "candidates",
    name: "Candidates",
    type: "sub",
    icon: "supervised_user_circle",
    children: [{ state: "list", name: "List" }]
  },
  {
    state: "activities",
    name: "Activity",
    type: "sub",
    icon: "web",
    children: [{ state: "list", name: "List" }]
  }
];

@Injectable()
export class MenuItems {
  constructor(private authService: AuthService) {}

  getAll(): Menu[] {
    if (this.authService.isRole("Admin")) {
      return MENUITEMSADMIN;
    } else {
      return MENUITEMS;
    }
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
