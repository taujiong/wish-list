import { isHttpError } from 'http-errors';
import { Middleware } from 'koa';
import { BaseError } from 'sequelize';

// TODO：给错误一个更好的类型而不是字符串会更好，比如 rfc7807 Problem Details
export const handleError: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // 自己抛出的逻辑错误
    if (isHttpError(err)) {
      ctx.status = err.statusCode;
      ctx.body = err.message;
    } else if (err instanceof BaseError) {
      // 数据库抛出的错误，可以进一步处理
      ctx.status = 500;
      ctx.body = err.message;
    }
    // 兜底错误，防止泄露不必要的信息
    else {
      ctx.status = 500;
      ctx.body = '未知的服务器错误，请稍后再试';
    }
  }
};
