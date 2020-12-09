import { ReactNode } from 'react';

export interface SmoothScrollProps {
  href: string;
  children?: ReactNode;
}

export let SmoothScroll: React.FC<SmoothScrollProps> = (props) => {
  let { href, children } = props;

  function handleClick(e: React.MouseEvent) {
    let elem = document.querySelector(href);
    elem?.scrollIntoView?.({ behavior: 'smooth' });
    history.pushState?.(null, '', href);
    e.preventDefault();
  }

  return (
    <a href={href} onClick={handleClick} data-testid="anchor">
      {children}
    </a>
  );
};
