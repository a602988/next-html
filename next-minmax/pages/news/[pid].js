import React from "react";
import { useRouter } from "next/router";
function newsid(){
    const router = useRouter();
    const { pid } = router.query
     console.log(router.pathname);
    // console.log(router.query);

    return(
        <>
            <h1>{pid}</h1>
            <hr/>
            {router.pathname && (
                <h3>{router.pathname}</h3>
            )}
            {router.query.id && (
                <h3>{router.query.id}</h3>
            )}
        </>
    )
}
export default newsid;