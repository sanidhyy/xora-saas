import type { PropsWithChildren } from "react";

import { cn } from "../lib/utils";

import { Marker } from "./Marker";

interface ButtonProps {
  icon?: string;
  href?: string;
  onClick?: () => void;
  containerClassName?: string;
  markerFill?: string;
}

export const Button = ({
  icon,
  children,
  href,
  onClick,
  containerClassName,
  markerFill,
}: PropsWithChildren<ButtonProps>) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}

        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>

        <span className="glow-before glow-after" />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "relative p-0.5 g5 rounded-2xl shadow-500 group",
          containerClassName
        )}
      >
        <Inner />
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </button>
  );
};
