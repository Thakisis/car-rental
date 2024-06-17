import { cookies } from "next/headers";
function getCookies() {
    cookies().set("test", "test");
}
export default getCookies
