import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            // Variants
            "bg-gradient-primary text-white shadow-button hover:shadow-2xl-custom hover:scale-105 active:scale-95":
              variant === "primary",
            "bg-[#5d2c89] text-white hover:bg-[#451e66] shadow-lg hover:shadow-xl":
              variant === "secondary",
            "border-2 border-[#5d2c89] text-[#5d2c89] hover:bg-[#5d2c89] hover:text-white shadow-md hover:shadow-lg":
              variant === "outline",
            
            // Sizes
            "px-6 py-2.5 text-sm": size === "sm",
            "px-8 py-3.5 text-base": size === "md",
            "px-10 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }


