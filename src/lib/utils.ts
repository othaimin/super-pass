import classNames from "classnames";
export const cn = classNames;

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.autofocus = false;
      // textArea.style.position = "absolute";
      // textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      // document.execCommand("copy");
      // document.body.removeChild(textArea);
      return true;
    }
  } catch {
    return false;
  }
};
