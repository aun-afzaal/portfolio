export const container =
  "mx-auto w-full px-3 sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]";

export const card =
  "rounded-[20px] border border-black/5 bg-surface shadow-bento";

const btn =
  "inline-block rounded-[15px] border border-line px-6 py-3 text-center text-sm font-medium leading-5 text-white [html[data-theme=light]_&]:text-black transition duration-300 hover:text-white [html[data-theme=light]_&]:hover:text-black";

export const btnFilled =
  `${btn} bg-primary hover:bg-transparent hover:text-heading`;

export const btnOutline =
  `${btn} bg-transparent text-heading hover:bg-primary hover:text-white [html[data-theme=light]_&]:hover:text-black`;