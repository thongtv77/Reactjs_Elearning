import React from "react";
import { props } from "react";

export default function Detail(props) {
  return (
    <div>
      Giá trị tham số là : {props.match.params.id}
      <br />
      path hiện tại là: {props.match.path}
    </div>
  );
}
