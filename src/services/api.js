/**
 * 所有的接口请求
 */
import {get, post} from "./http";
import { tokenId } from "./config";

/*获取问题列表*/
// example
// export const getQuestionList = (timestamp, openid=tokenId) => {
//   let formData = new FormData();
//   formData.append('timestamp', timestamp);
//   formData.append('openid', openid);
//   return post("/problem", formData, {headers: {'Content-Type': 'application/json'}});
// };
