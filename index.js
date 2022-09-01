const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


const tripleValor = val => {
    if (val >= 0) {
        return val *= 3
    }
    throw new Error("El valor es negativo")
}

try {
    console.log(tripleValor(-9))
    console.log("es correcto")
} catch(e) {
    logger.info("Error: el valor es negativo")
}