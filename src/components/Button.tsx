type ButtonProps = {
    variant?: "light" | "dark";
    content: string;
  };
  
  export function Button({ variant = "light", content }: ButtonProps) {
    const variants: Record<string, string> = {
      light: "bg-white text-black hover:bg-gray-200 border-[1px] border-black",
      dark: "bg-black text-white hover:bg-gray-800",
    };

    const baseStyles = "text-lg rounded-full px-6 md:px-12 py-2 transition"
  
    return (
      <button className={baseStyles + " " + variants[variant]}>
        {content}
      </button>
    );
  }
  