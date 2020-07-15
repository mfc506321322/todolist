import { } from "antd-mobile";

export default {
  namespace: "ToDoList",
  state: {
    c:3,
  },
  reducers: {
    // saveData(state, { payload: {data}}) {
    //   return {
    //     ...state,
    //     headData: data
    //   };
    // },
  },
  effects: {
  //   * queryDeviceData(action, { call, put, select }) {
  //     const state = yield select((state) => state.global);
  //     let queryParams = {companyCode: state.selectedCompany.companyCode};
  //     queryParams.meterCode = action.payload.meterCode;
  //     if (action.payload.username) {
  //       queryParams.username = action.payload.username;
  //     }
  //     // eslint-disable-next-line no-unused-vars
  //     const result = yield call(payService.queryDeviceData, queryParams);
  //     console.log("queryDeviceData", result);
      
  //       yield put({
  //         type: "saveData",
  //         payload: {
  //           data: result
  //         }
  //       });
  //     return result;
  //   },
  //   * selectIndex(action, { call, put }) {
  //     yield put({
  //       type: "saveSelectIndex",
  //       payload: {
  //         index: action.payload
  //       }
  //     });
  //   }
  }
};
