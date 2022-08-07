// components.d.ts

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
  }
}
// declare module "@vue/runtime-core" {
//   export interface GlobalComponents {
//     RouterLink: typeof RouterLink;
//     RouterView: typeof RouterView;
//   }
// }

export {};
