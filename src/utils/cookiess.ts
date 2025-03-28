/*
* Set cookie
* @param cname
* @param cvalue
* @param exhours
*/
export const setCookie = (cname: string, cvalue: string, exhours: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

/*
* Delete cookie
* @param cname
*/
export const removeCookie = (cname: string) => {
  document.cookie =
      cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
};


 /*
* Get cookie
* @param cname
*/
export const getCookie = (cname: string) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
};

// setCookie("User", `${userDetails}`, 12);
            // setCookie("Token", `${response.JWTtoken}`, 12);
            // setCookie("CountS", `${response.staff}`, 12);
            // setCookie("CountP", `${response.policy}`, 12);
            // setCookie("CountL", `${response.leadscount}`, 12);
            // setCookie("Logintoken", `${response.token}`, 12);
            // setCookie("activeId", `${response.user.active_order_id}`, 12);
            // setCookie("AgentId", `${response.user.agent_id}`, 12);
            
            // const token = getCookie("Logintoken");