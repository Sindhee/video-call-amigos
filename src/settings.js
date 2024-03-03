import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
const appId = "b7a73b41dd2c4d5da3ef66d3a817d66b"
const token = "007eJxTYNiyUVt0wu7vr9Z+98jm2F+6MuTzX1fH72tezrNWupidrPxQgSHJPNHcOMnEMCXFKNkkxTQl0Tg1zcwsxTjRwtA8xcws6bvnk9SGQEYGmb1prIwMEAjiczKUJSsk5mam5xczMAAA9kskhw=="

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "vc amigos";