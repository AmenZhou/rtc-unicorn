export const allNickNameListFromCache = _ => global.nickNameListCache;

export const getOneNickNameListFromCache = nickNameFile => global.nickNameListCache[nickNameFile];

export const setOneNickNameListToCache = ({ nickNameFile, list }) => global.nickNameListCache[nickNameFile] = list;

export const getOneNickNameSrcFromCache = (id) => {
  console.log('getNickNameSrcFromCache', global.nickNameSrcFileCache[id]);
  return global.nickNameSrcFileCache[id];
}

export const setOneNickNameSrcToCache = ({ id, src }) => global.nickNameSrcFileCache[id] = src;

export const resetNickNameSrcCache = _ => global.nickNameSrcFileCache = {};

export const resetNickNameListCache = _ => global.nickNameListCache = {};
