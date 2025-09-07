import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "glass-button text-white font-semibold shadow-lg",
        destructive:
          "bg-gradient-to-r from-red-500/30 to-red-600/30 border-2 border-red-500/40 backdrop-filter backdrop-blur-16 text-red-100 hover:from-red-500/45 hover:to-red-600/45 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/25 rounded-lg",
        outline:
          "border-2 border-white/20 bg-white/5 backdrop-filter backdrop-blur-16 text-white hover:bg-white/10 hover:border-white/30 hover:shadow-lg rounded-lg",
        secondary:
          "bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-2 border-gray-400/30 backdrop-filter backdrop-blur-16 text-gray-100 hover:from-gray-500/30 hover:to-gray-600/30 hover:border-gray-400/40 rounded-lg",
        ghost: "text-white hover:bg-white/10 hover:backdrop-blur-8 rounded-lg transition-all duration-300",
        link: "text-white underline-offset-4 hover:underline hover:text-purple-200",
        glass: "glass-button text-white font-semibold",
        "glass-3d": "button-3d text-white font-bold",
      },
      size: {
        default: "h-12 px-6 py-3 rounded-xl",
        sm: "h-10 px-4 py-2 rounded-lg text-sm",
        lg: "h-14 px-8 py-4 rounded-xl text-lg font-bold",
        xl: "h-16 px-10 py-5 rounded-2xl text-xl font-bold",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
