"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channelName = exports.useMicrophoneAndCameraTracks = exports.useClient = exports.config = void 0;

var _agoraRtcReact = require("agora-rtc-react");

var appId = "b7a73b41dd2c4d5da3ef66d3a817d66b";
var token = "007eJxTYKiuduC7on5tf3zda/VCjbvz7N1bfpybr7hY0/NakGv6oXkKDEnmiebGSSaGKSlGySYppimJxqlpZmYpxokWhuYpZmZJWVMepTYEMjLcNhFgYWSAQBCfk6EsWSExNzM9v5iBAQAUOiHR";
var config = {
  mode: "rtc",
  codec: "vp8",
  appId: appId,
  token: token
};
exports.config = config;
var useClient = (0, _agoraRtcReact.createClient)(config);
exports.useClient = useClient;
var useMicrophoneAndCameraTracks = (0, _agoraRtcReact.createMicrophoneAndCameraTracks)();
exports.useMicrophoneAndCameraTracks = useMicrophoneAndCameraTracks;
var channelName = "vc amigos";
exports.channelName = channelName;