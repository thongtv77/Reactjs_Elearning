import { LOGIN_FAILED, LOGIN_SUCCESS } from "../constants/user.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";
// Action call API,
export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    // Call API
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        dispatch(postLoginSuccess(res.data));
        //quay trở lại trang trước đo
        history.goBack;
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
      });
  };
};
const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
const postLoginFailed = (err) => {
  return {
    type: LOGIN_FAILED,
    payload: err,
  };
};
