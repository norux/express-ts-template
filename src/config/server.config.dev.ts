import { join } from "path";
import { readFileSync } from "fs";
import { IServerConfig } from "./server.config";
import { CommonUtils } from "../utils/common.utils";

export const developmentMode: IServerConfig = {
  protocol: CommonUtils.Protocol.https,
  ip: "localhost",
  port: Number(process.env.PORT) || 8080,
  tls: {
    key: readFileSync(join(CommonUtils.caDir(), 'server-key.pem')),
    cert: readFileSync(join(CommonUtils.caDir(), 'server-crt.pem'))
  }
};
