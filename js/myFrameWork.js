export function CreateElement(element, class_name, placeholder, inner_text, style ) {
    return Object.assign(
      document.createElement(`${element}`),
      { className: `${class_name}` },
      {
        style: `${style}`,
      },
      {
        placeholder: `${placeholder || ""}`,
      },
      {
        innerHTML: `${inner_text || ""}`,
      }
    );
  }
  