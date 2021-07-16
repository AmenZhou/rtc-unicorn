export const allNickNameListFromCache = _ => global.nickNameListCache;

export const getOneNickNameListFromCache = nickNameFile => global.nickNameListCache[nickNameFile];

export const setOneNickNameListToCache = ({ nickNameFile, list }) => global.nickNameListCache[nickNameFile] = list;
