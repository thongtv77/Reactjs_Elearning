import React from "react";
import { props } from "react";
export default function PageNotFound(props) {
  return <div>Không tìm thấy được trang: {props.match.url}</div>;
}
