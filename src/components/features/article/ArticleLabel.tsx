import { HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ArticleLabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export const ArticleLabel = ({ children, className, ...props }: ArticleLabelProps) => {
  return (
    <span
      className={twMerge(
        'rounded border-primary bg-primary px-2 py-1 text-2xs font-semibold uppercase leading-none tracking-widest',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
