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
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>

        {icon && (
          <img
            src={icon}
            alt="circle"
            className="z-10 mr-5 size-10 object-contain"
          />
        )}

        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
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
          "g5 group relative rounded-2xl p-0.5 shadow-500",
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
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassName
      )}
    >
      <Inner />
    </button>
  );
};
