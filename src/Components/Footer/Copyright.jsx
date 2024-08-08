import React from "react"

export default function Copyright() {
    return (
        <>
            <div class="copyright bg-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <p class="p-small">Copyright © {new Date().getFullYear()} | This template is made with ♡ React.JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}