import winston, { format, level } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp, username, company, filename, functionname, httpStatus, method, host, originalUrl, browser, body, errors }) => {
  return `[${timestamp}]: ${label} ${level}: ${username} - ${company || ""} - ${filename} - ${functionname} - ${httpStatus} - ${method} - ${host} - ${originalUrl} - ${browser} - ${JSON.stringify(body)} - ${message} - ${JSON.stringify(errors)} -- END --`;
});

const logger = winston.createLogger({
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    label({ label: 'PW' }),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/errors.log' }),
  ],
});

export default logger;