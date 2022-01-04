import {
  GET_MOVIE_DETAIL_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_LIST_SUCCESS,
} from "../constants/movie.const";
import { GET_MOVIE_LIST_FAILED } from "../constants/movie.const";
import axios from "axios";
import { startLoading, stopLoading } from "./common.action";

// Action call API,
export const getMoiveList = () => {
  return (dispatch) => {
    // Call API
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        dispatch(getMovieListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getMovieListFailed(err));
      });
  };
};
const getMovieListSuccess = (movieList) => {
  return {
    type: GET_MOVIE_LIST_SUCCESS,
    payload: movieList,
  };
};
const getMovieListFailed = (err) => {
  return {
    type: GET_MOVIE_LIST_FAILED,
    payload: err,
  };
};

//get Detail
export const getMoiveDetail = (movieCode) => {
  return (dispatch) => {
    // Call API
    dispatch(startLoading());
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        console.log(res.data);
        dispatch(getMovieDetailSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        //Gửi lên Store
        dispatch(getMovieDetailFailed(err));
      });
  };
};
const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: GET_MOVIE_DETAIL_SUCCESS,
    payload: movieDetail,
  };
};
const getMovieDetailFailed = (err) => {
  return {
    type: GET_MOVIE_DETAIL_FAILED,
    payload: err,
  };
};
