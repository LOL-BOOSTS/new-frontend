export default {
  modalTheme: {
    root: {},
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "bg-indigo-950 bg-opacity-90 text-white rounded-xl",
    },
    body: {
      base: "flex-1 p-6",
      popup: "pt-0",
    },
    header: {
      base: "flex items-start justify-between border-b p-5 border-indigo-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5",
      },
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t",
    },
  },
};
