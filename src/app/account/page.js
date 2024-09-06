import { redirect } from "next/navigation";

export default function Account() {
    //assume that profile info is null

    const userProfileInfo = null;

    if (!userProfileInfo) {
        redirect('products?search=product1');
    }

    return <h1>Accounts Page</h1>
}