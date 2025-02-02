import { CSSProperties } from 'react';
import { ContainerProps } from '../../types/component';

interface Props extends Omit<ContainerProps, 'display'> {
  display?: 'flex' | 'inline-flex' | 'none';
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: CSSProperties['flexWrap'];
  flexFlow?: CSSProperties['flexFlow'];
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  alignSelf?: CSSProperties['alignSelf'];
  alignContent?: CSSProperties['alignContent'];
  order?: CSSProperties['order'];
  gap?: CSSProperties['gap'];
}

export default function Flex({
  display = 'flex',
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  direction,
  flexWrap,
  flexFlow,
  justify,
  align,
  alignSelf,
  alignContent,
  order,
  gap,
  position,
  top,
  right,
  bottom,
  left,
  width,
  height,
  minWidth,
  maxWidth,
  margin,
  padding,
  border,
  borderRadius,
  backgroundColor,
  color,
  overflow,
  cursor,
  opacity,
  zIndex,
  children,
  ...rest
}: Props) {
  return (
    <div
      style={{
        display,
        flex,
        flexGrow,
        flexShrink,
        flexBasis,
        flexDirection: direction,
        flexWrap,
        flexFlow,
        justifyContent: justify,
        alignItems: align,
        alignSelf,
        alignContent,
        order,
        gap,
        position,
        top,
        right,
        bottom,
        left,
        width,
        height,
        minWidth,
        maxWidth,
        margin,
        padding,
        border,
        borderRadius,
        backgroundColor,
        color,
        overflow,
        cursor,
        opacity,
        zIndex,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
