import { css } from '@emotion/core';
import { useMemo } from 'react';
import { createPortal } from 'react-dom';
import { animated as a, useSpring } from 'react-spring';
import tw from 'twin.macro';
import { useMounted } from '../lib/hooks/useMounted';
import { useOutsideClick } from '../lib/hooks/useOutsideClick';

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export let Drawer: React.FC<Props> = (props) => {
  let { children, open, onClose, ...rest } = props;
  let ref = useOutsideClick(() => onClose?.());
  let mounted = useMounted();
  let rootEl = useMemo(() => {
    if (mounted) {
      return document.querySelector('#__next');
    }
  }, [mounted]);

  let ap = useSpring({
    x: open ? 1 : 0,
    config: {
      tension: 240,
      precision: 0.001,
    },
  });

  if (mounted) {
    return createPortal(
      <a.div
        ref={ref}
        css={(theme) => css`
          ${tw`fixed top-0 left-0 right-0 bottom-0`}
          background: ${theme.colors.bgDrawer};
          transform-origin: top right;
          will-change: transform;
        `}
        style={{ transform: ap.x.interpolate((x) => `scale(${x}, 1)`) }}
      >
        <a.div
          css={css`
            ${tw`absolute top-0 right-0 left-0 bottom-0`}
            transform-origin: top left;
            will-change: transform;
          `}
          style={{ transform: ap.x.interpolate((x) => `scale(${1 / x}, 1)`) }}
          {...rest}
        >
          {children}
        </a.div>
      </a.div>,
      rootEl as Element,
    );
  }

  return null;
};
