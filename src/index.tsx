/**
 * @class El
 */

import * as React from "react";
import styled from "react-emotion";
import { StyledStatelessComponent } from "create-emotion-styled";

type Props = {
  className: string;
  color: string;
  width: Number;
};

const El: React.SFC<Props> = props => {
  if (
    (props && props.children && Array.isArray(props.children)) ||
    props.children === undefined
  )
    throw new Error(
      `El can only take exactly one child but you are passing ${
        props.children ? props.children.length : 0
      } to it.`
    );
  return <div className={props.className}>{props.children}</div>;
};

const styledEl: StyledStatelessComponent<Props, {}, {}> = styled(El)<Props>(
  props => ({
    color: props.color,
    width: `${props.width}px`,
  })
);

export default styledEl;
