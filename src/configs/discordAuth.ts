import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const useProxy = true;

const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
});

export { redirectUri };
